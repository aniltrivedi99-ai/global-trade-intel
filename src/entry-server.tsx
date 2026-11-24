import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppShell } from "./App";
import { articles } from "@/data/articles";

export const getPrerenderPaths = () => [
  "/insights",
  ...articles.map((article) => "/insights/" + article.slug),
];

export const getSitemapArticleEntries = () => {
  const automatedArticles = articles.filter((article) => article.autoPublished);

  for (const article of automatedArticles) {
    const requiredFields = [
      article.dateISO,
      article.dateModifiedISO,
      article.seoTitle,
      article.seoDescription,
      article.byline,
      article.imageAlt,
      article.readTime,
    ];
    if (requiredFields.some((value) => !value || !String(value).trim())) {
      throw new Error("Automated article is missing a required SEO or publication field: " + article.slug);
    }
    if (
      !/^\\d{4}-\\d{2}-\\d{2}$/.test(article.dateISO || "") ||
      !/^\\d{4}-\\d{2}-\\d{2}$/.test(article.dateModifiedISO || "")
    ) {
      throw new Error("Automated article has an invalid publication or modified date: " + article.slug);
    }
    if (
      !article.searchKeywords || article.searchKeywords.length < 4 ||
      !article.sections || article.sections.length < 3 ||
      !article.faqs || article.faqs.length < 3 || article.faqs.length > 5 ||
      !article.sources || article.sources.length < 3
    ) {
      throw new Error("Automated article does not meet the minimum SEO/content structure: " + article.slug);
    }
    if (article.sources.some((source) => !/^https:\\/\\//i.test(source.url))) {
      throw new Error("Automated article contains a source without an HTTPS URL: " + article.slug);
    }
    const bodyText = article.sections.flatMap((section) => section.paragraphs).join(" ");
    const bodyWordCount = bodyText.split(/\\s+/).filter(Boolean).length;
    if (bodyWordCount < 300) {
      throw new Error("Automated article body is below 300 words: " + article.slug);
    }
  }

  return articles.map((article) => ({
    slug: article.slug,
    lastmod: article.dateModifiedISO || article.dateISO,
  }));
};

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
