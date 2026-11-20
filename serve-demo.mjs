// Local viewer for the prebuilt customer demo (static bundle in ./customer).
// No dependencies. Run: `npm start`, then open http://localhost:8080/.
// The bundle is plain static files, so any static host works too (e.g. `npx serve customer`).
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "customer");
const PORT = process.env.PORT || 8080;
const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".ttf": "font/ttf", ".woff": "font/woff", ".woff2": "font/woff2", ".map": "application/json" };

http
  .createServer(async (req, res) => {
    try {
      let u;
      try {
        u = decodeURIComponent((req.url ?? "/").split("?")[0]);
      } catch {
        res.writeHead(400); res.end("bad request"); return;
      }
      // Resolve inside ROOT only: an encoded "../" must never reach files outside the demo folder.
      let f = path.resolve(ROOT, "." + path.posix.normalize("/" + u.replace(/\\/g, "/")));
      if (f !== ROOT && !f.startsWith(ROOT + path.sep)) { res.writeHead(403); res.end("forbidden"); return; }
      let i = await stat(f).catch(() => null);
      if (i?.isDirectory()) { f = path.join(f, "index.html"); i = await stat(f).catch(() => null); }
      if (!i) { f = path.join(ROOT, "index.html"); i = await stat(f).catch(() => null); } // SPA fallback
      if (!i) { res.writeHead(404); res.end("not found"); return; }
      res.writeHead(200, { "Content-Type": MIME[path.extname(f)] ?? "application/octet-stream" });
      res.end(await readFile(f));
    } catch { res.writeHead(500); res.end("error"); }
  })
  // Loopback only: this is a local viewer, not a server for the network you happen to be on.
  .listen(PORT, "127.0.0.1", () => console.log(`Travel Rescue customer demo → http://localhost:${PORT}/`));
