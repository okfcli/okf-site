# okf-site

Landing page for [okf](https://github.com/okfcli/okf) — the Open Knowledge Format CLI.

A single Cloudflare Worker that serves the landing page HTML inline. No framework, no build step, no client-side JavaScript.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:8787.

## Deploy

```bash
npm run deploy
```

## Architecture

- `src/index.js` — single Worker file, inline HTML, robots.txt handler
- `wrangler.toml` — Cloudflare Worker config
- `package.json` — wrangler devDependency only

## License

Apache 2.0
