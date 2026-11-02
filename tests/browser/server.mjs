// A static server for the tests: the repository root as GitHub Pages serves it (max-age=600 with ETags, 404.html with
// status 404 for a missing path, index.html for a directory). No compression, no logging, nothing written to disk.
// usage: node server.mjs [port]   (default 5199)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const PORT = +(process.argv[2] || process.env.PORT || 5199);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json',
};

async function file(path) {
  const p = join(ROOT, normalize(path));
  if (!p.startsWith(ROOT)) return null;
  try {
    let s = await stat(p);
    if (s.isDirectory()) { const q = join(p, 'index.html'); s = await stat(q); return { p: q, s }; }
    return { p, s };
  } catch { return null; }
}

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const f = await file(path);
  if (!f) {
    const nf = await file('/404.html');
    res.writeHead(404, { 'content-type': TYPES['.html'], 'cache-control': 'max-age=600' });
    return res.end(nf ? await readFile(nf.p) : 'Not found');
  }
  const etag = `"${f.s.size.toString(16)}-${Math.floor(f.s.mtimeMs).toString(16)}"`;
  const head = { 'content-type': TYPES[extname(f.p)] || 'application/octet-stream', 'cache-control': 'max-age=600', etag };
  if (req.headers['if-none-match'] === etag) { res.writeHead(304, head); return res.end(); }
  res.writeHead(200, { ...head, 'content-length': f.s.size });
  res.end(req.method === 'HEAD' ? undefined : await readFile(f.p));
}).listen(PORT, '127.0.0.1', () => console.log(`serving ${ROOT} on http://127.0.0.1:${PORT}`));
