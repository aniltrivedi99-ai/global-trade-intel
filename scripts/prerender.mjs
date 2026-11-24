import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const manifestPath = join(dist, ".vite", "manifest.json");
const templatePath = join(dist, "index.html");
const site = "https://www.globaltradeintell.com";

const vite = await createServer({
  configFile: resolve(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const {
    getPrerenderPaths,
    getPrerenderAssetMappings,
    render,
  } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const template = await readFile(templatePath, "utf8");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const assetMappings = getPrerenderAssetMappings();

  const cleanTemplate = template
    .split("\n")
    .filter((line) => {
      if (line.includes("<title>")) return false;
      if (line.includes('name="description"')) return false;
      if (line.includes('name="keywords"')) return false;
      if (line.includes('name="author"')) return false;
      if (line.includes('property="og:')) return false;
      if (line.includes('name="twitter:')) return false;
      if (line.includes('rel="canonical"')) return false;
      return true;
    })
    .join("\n");

  if (!cleanTemplate.includes('<div id="root"></div>')) {
    throw new Error("Could not find the empty React root in the production HTML template.");
  }

  for (const route of getPrerenderPaths()) {
    const rendered = render(route);
    let pageHtml = rendered.html + "\n" + rendered.head;

    for (const mapping of assetMappings) {
      const asset = manifest[mapping.manifestKey];
      if (!asset?.file) {
        throw new Error(
          "No production manifest asset for " +
            mapping.manifestKey +
            " (used by " +
            mapping.renderedUrl +
            ")",
        );
      }

      const productionUrl = "/" + asset.file;
      pageHtml = pageHtml.split(mapping.renderedUrl).join(productionUrl);

      if (mapping.renderedUrl.startsWith("/")) {
        const absoluteSource = site + mapping.renderedUrl;
        const absoluteProduction = site + productionUrl;
        pageHtml = pageHtml.split(absoluteSource).join(absoluteProduction);
      }
    }

    if (pageHtml.includes("/src/assets/") || pageHtml.includes("/@imagetools/")) {
      throw new Error("Unresolved source or development image URL while pre-rendering " + route);
    }

    const [bodyHtml, headHtml] = [rendered.html, rendered.head];
    let resolvedBody = bodyHtml;
    for (const mapping of assetMappings) {
      const asset = manifest[mapping.manifestKey];
      const productionUrl = "/" + asset.file;
      resolvedBody = resolvedBody.split(mapping.renderedUrl).join(productionUrl);
    }

    const resolvedHead = assetMappings.reduce((head, mapping) => {
      const asset = manifest[mapping.manifestKey];
      const productionUrl = "/" + asset.file;
      const absoluteSource = site + mapping.renderedUrl;
      const absoluteProduction = site + productionUrl;
      return head
        .split(absoluteSource).join(absoluteProduction)
        .split(mapping.renderedUrl).join(productionUrl);
    }, headHtml);

    if (
      resolvedBody.includes("/src/assets/") ||
      resolvedBody.includes("/@imagetools/") ||
      resolvedHead.includes("/src/assets/") ||
      resolvedHead.includes("/@imagetools/")
    ) {
      throw new Error("Unresolved image URL remains in pre-rendered output for " + route);
    }

    const outputHtml = cleanTemplate
      .replace('<div id="root"></div>', '<div id="root">' + resolvedBody + "</div>")
      .replace("</head>", resolvedHead + "\n  </head>");

    const relativePath = join(route.slice(1), "index.html");
    const outputPath = join(dist, relativePath);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, outputHtml, "utf8");
    process.stdout.write("Pre-rendered " + route + " -> " + relativePath + "\n");
  }
} finally {
  await vite.close();
}
