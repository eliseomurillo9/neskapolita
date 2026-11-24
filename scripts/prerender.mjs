import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { build } from "vite";

// Keep the temporary renderer near node_modules and out of the publish directory.
const rendererDir = await mkdtemp(resolve("node_modules/.prerender-"));
try {
  await build({
    build: {
      ssr: "src/entry-prerender.tsx",
      outDir: rendererDir,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: "entry.mjs" } },
    },
  });
  const { render, PAGE_PATHS, SITE_ORIGIN } = await import(pathToFileURL(resolve(rendererDir, "entry.mjs")).href);
  const template = await readFile("dist/index.html", "utf8");
  for (const path of [...PAGE_PATHS, "/404"]) {
    const { body, head } = await render(path);
    const html = template
      .replace("<!--page-metadata-->", () => head)
      .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
    const filename = path === "/" ? "index" : path.slice(1);
    await writeFile(`dist/${filename}.html`, html);
  }
  const urls = PAGE_PATHS.map(path => `  <url><loc>${SITE_ORIGIN}${path}</loc></url>`).join("\n");
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);
} finally {
  await rm(rendererDir, { recursive: true, force: true });
}
