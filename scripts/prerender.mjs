import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const manifestPath = join(dist, ".vite", "manifest.json");
const templatePath = join(dist, "index.html");

const vite = await createServer({
  configFile: resolve(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { getPrerenderPaths, render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const template = await readFile(templatePath, "utf8");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

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
    let pageHtml = rendered.html;

    for (const [key, asset] of Object.entries(manifest)) {
      if (!asset.file) continue;
      const devAssetUrl = "/" + key;
      const productionAssetUrl = "/" + asset.file;
      if (pageHtml.includes(devAssetUrl)) {
        pageHtml = pageHtml.split(devAssetUrl).join(productionAssetUrl);
      }
    }

    if (pageHtml.includes("/src/assets/")) {
      throw new Error("Unresolved source asset URL while pre-rendering " + route);
    }

    const outputHtml = cleanTemplate
      .replace('<div id="root"></div>', '<div id="root">' + pageHtml + "</div>")
      .replace("</head>", rendered.head + "\n  </head>");

    const relativePath = route === "/" ? "index.html" : join(route.slice(1), "index.html");
    const outputPath = join(dist, relativePath);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, outputHtml, "utf8");
    process.stdout.write("Pre-rendered " + route + " -> " + relativePath + "\n");
  }
} finally {
  await vite.close();
}
