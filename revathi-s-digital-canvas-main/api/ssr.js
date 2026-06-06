import serverModule from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v != null) headers.set(k, String(v));
    }

    const body = ['GET', 'HEAD'].includes(req.method) ? null : req;

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
    });

    const entry = serverModule.default ?? serverModule;
    const response = await entry.fetch(request, undefined, undefined);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const buf = Buffer.from(await response.arrayBuffer());
    res.end(buf);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>Server Error</h1>');
  }
}
