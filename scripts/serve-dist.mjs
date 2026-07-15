import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const port = Number(process.env.PORT || 5173);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

createServer((request, response) => {
  const url = new URL(request.url || '/', `http://127.0.0.1:${port}`);
  const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  const requestedPath = cleanPath ? join(root, cleanPath) : join(root, 'index.html');
  const filePath = existsSync(requestedPath) ? requestedPath : join(root, 'index.html');
  const type = contentTypes[extname(filePath)] || 'application/octet-stream';

  response.writeHead(200, { 'Content-Type': type });
  createReadStream(filePath).pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`DO_GAM STUDIO preview server: http://127.0.0.1:${port}/`);
});
