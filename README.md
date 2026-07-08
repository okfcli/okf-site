# okf-site

Landing page for [okf](https://github.com/okfcli/okf), the Open Knowledge Format CLI.

A single Cloudflare Worker that serves the landing page HTML inline. No framework and no build step; the only client-side JavaScript is the DataFast analytics snippet.

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

- `src/index.js`: single Worker file, inline HTML, robots.txt handler, DataFast bot tracking
- `wrangler.toml`: Cloudflare Worker config
- `package.json`: `wrangler` (dev) and `@datafast/ai-crawl` (analytics)
- `CLAUDE.md`: how DataFast analytics/goals are wired, deploy notes, copy style

See `CLAUDE.md` for how the DataFast analytics, goals, and bot tracking work.

## License

Apache 2.0
