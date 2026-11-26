import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./app/App";
import "./locales/i18n";

export { PAGE_PATHS, SITE_ORIGIN } from "./app/siteRoutes";

export function render(path: string): Promise<{ body: string; head: string }> {
  const context: React.ComponentProps<typeof HelmetProvider>["context"] = {};
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const destination = new Writable({
      write(chunk, _encoding, callback) {
        chunks.push(chunk);
        callback();
      },
    });
    destination.once("error", reject);
    destination.once("finish", () => {
      const { title, meta, link, script } = context.helmet!;
      resolve({
        body: Buffer.concat(chunks).toString("utf8"),
        head: [title, meta, link, script].map(tag => tag.toString()).join("\n"),
      });
    });

    const stream = renderToPipeableStream(
      <HelmetProvider context={context}>
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        // Wait for lazy route modules before writing the static HTML.
        onAllReady() { stream.pipe(destination); },
        onError: reject,
      },
    );
  });
}
