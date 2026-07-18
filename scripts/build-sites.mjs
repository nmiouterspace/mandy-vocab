import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");

const textFiles = [
  ["index.html", "text/html; charset=utf-8"],
  ["styles.css", "text/css; charset=utf-8"],
  ["app.js", "application/javascript; charset=utf-8"],
  ["manifest.json", "application/manifest+json; charset=utf-8"],
  ["sw.js", "application/javascript; charset=utf-8"]
];

const binaryFiles = [
  ["assets/icon-192.png", "image/png"],
  ["assets/icon-512.png", "image/png"],
  ["assets/apple-touch-icon.png", "image/png"],
  ["assets/logo-source.png", "image/png"]
];

const routes = {};

for (const [file, type] of textFiles) {
  const body = await readFile(path.join(root, file), "utf8");
  routes[`/${file}`] = { type, body };
}

for (const [file, type] of binaryFiles) {
  const body = await readFile(path.join(root, file));
  routes[`/${file}`] = { type, base64: body.toString("base64") };
}

routes["/"] = routes["/index.html"];

const worker = `const ROUTES = ${JSON.stringify(routes)};

function bytesFromBase64(value) {
  const raw = atob(value);
  const bytes = new Uint8Array(raw.length);
  for (let index = 0; index < raw.length; index += 1) bytes[index] = raw.charCodeAt(index);
  return bytes;
}

function responseFor(pathname) {
  const asset = ROUTES[pathname] || ROUTES["/index.html"];
  const headers = {
    "content-type": asset.type,
    "cache-control": pathname === "/sw.js" ? "no-cache" : "public, max-age=3600"
  };
  return new Response(asset.base64 ? bytesFromBase64(asset.base64) : asset.body, { headers });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    return responseFor(url.pathname);
  }
};
`;

await mkdir(serverDir, { recursive: true });
await writeFile(path.join(serverDir, "index.js"), worker, "utf8");
