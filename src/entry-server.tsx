import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppShell } from "./App";
import { articles } from "@/data/articles";

export const getPrerenderPaths = () => [
  "/insights",
  ...articles.map((article) => "/insights/" + article.slug),
];

const assetPath = (value: string) => value.replace(/^\/+/, "");

export const getPrerenderAssetMappings = () => {
  const mappings = articles.flatMap((article) => {
    const originalAsset = assetPath(article.image);
    return [
      { renderedUrl: article.image, manifestKey: originalAsset },
      {
        renderedUrl: article.imageAvif,
        manifestKey: originalAsset + "?format=avif&w=720&quality=55",
      },
      {
        renderedUrl: article.imageWebp,
        manifestKey: originalAsset + "?format=webp&w=720&quality=68",
      },
    ];
  });

  mappings.push({
    renderedUrl: "/src/assets/hero-globe.jpg",
    manifestKey: "src/assets/hero-globe.jpg",
  });

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
