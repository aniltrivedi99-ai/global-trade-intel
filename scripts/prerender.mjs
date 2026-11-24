import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";

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
  const manifestEntries = Object.values(manifest).filter(
    (asset) => asset && typeof asset.file === "string",
  );
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
    let resolvedBody = rendered.html;
    let resolvedHead = rendered.head;

    for (const mapping of assetMappings) {
      const candidates = manifestEntries.filter((asset) => {
        const fileName = basename(asset.file);
        return (
          fileName.startsWith(mapping.assetPrefix + "-") &&
          fileName.endsWith("." + mapping.format)
        );
      });

      if (candidates.length !== 1) {
        throw new Error(
          "Expected one production asset for " +
            mapping.assetPrefix +
            " (" +
            mapping.format +
            "), found " +
            candidates.length,
        );
      }

      const productionUrl = "/" + candidates[0].file;
      const absoluteProductionUrl = site + productionUrl;
      resolvedBody = resolvedBody.split(mapping.renderedUrl).join(productionUrl);
      resolvedHead = resolvedHead
        .split(site + mapping.renderedUrl).join(absoluteProductionUrl)
        .split(mapping.renderedUrl).join(productionUrl);
    }

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
