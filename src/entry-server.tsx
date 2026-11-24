import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppShell } from "./App";
import { articles } from "@/data/articles";

export const getPrerenderPaths = () => [
  "/insights",
  ...articles.map((article) => "/insights/" + article.slug),
];

const imageMapping = (renderedUrl: string, originalPath: string, format: string) => {
  const originalFile = originalPath.split("/").pop() || originalPath;
  const extensionIndex = originalFile.lastIndexOf(".");
  const assetPrefix = extensionIndex >= 0 ? originalFile.slice(0, extensionIndex) : originalFile;
  return { renderedUrl, assetPrefix, format };
};

export const getPrerenderAssetMappings = () => {
  const mappings = articles.flatMap((article) => [
    imageMapping(article.image, article.image, "jpg"),
    imageMapping(article.imageAvif, article.image, "avif"),
    imageMapping(article.imageWebp, article.image, "webp"),
  ]);

  mappings.push(
    imageMapping("/src/assets/hero-globe.jpg", "/src/assets/hero-globe.jpg", "jpg"),
  );

  return mappings;
};

export function render(url: string) {
  const helmetContext = {} as { helmet?: any };
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  if (!head.includes("canonical")) {
    throw new Error("SEO canonical metadata was not rendered for " + url);
  }

  return { html, head };
}
