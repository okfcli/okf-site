# CLAUDE.md: okf-site

Landing page for **okf** (the Open Knowledge Format CLI). It is a single Cloudflare
Worker that serves one inline HTML page. Deployed to the custom domain **useokf.com**.
No framework, no build step. The only client-side JavaScript is the DataFast snippet.

## Layout

- `src/index.js`: the entire site. A `handler` serves `/robots.txt` and the `HTML`
  template-literal page; the handler is wrapped for bot tracking and exported as the
  Worker `fetch`.
- `wrangler.toml`: Worker config. `routes` binds the `useokf.com` custom domain.
- `package.json`: deps: `@datafast/ai-crawl` (bot tracking); devDeps: `wrangler`.
  Scripts: `dev`, `deploy`.

## Deploy

- `npm run deploy` runs `wrangler deploy` and pushes live to useokf.com. Requires
  Cloudflare auth (`wrangler login` or `CLOUDFLARE_API_TOKEN`).
- `npm run dev` for local preview (http://localhost:8787).
- Verify a change bundles without shipping:
  `npx wrangler deploy --dry-run --outdir /tmp/wgbuild`.

## DataFast analytics

Website ID: `dfid_kJWuBrZXvlBAN4FnNThxX` (a public value; it is rendered into the page).
It lives in one constant, `DATAFAST_WEBSITE_ID`, at the top of `src/index.js` and is
used in two places:

1. **Client pageviews + goals.** Rendered into the `<head>` as
   `<script defer data-website-id="${DATAFAST_WEBSITE_ID}" data-domain="useokf.com"
   src="https://datafa.st/js/script.js">`, preceded by a small queue-shim script
   (`window.datafast = ...`) so goal clicks are captured even before `script.js` loads.
2. **Server-side bot / AI-crawler tracking.** The Worker `fetch` is wrapped with
   `withAICrawlerTracking(handler, { websiteId: DATAFAST_WEBSITE_ID })` from
   `@datafast/ai-crawl`. It is best-effort and non-blocking (uses `ctx.waitUntil`) and
   can record the response status because the wrapper sees the response the handler
   returned.

### Goals

Tracked with a `data-fast-goal="<name>"` attribute on the clickable element. DataFast
registers goals automatically the first time one fires, so there is nothing to create
in the dashboard beforehand. Current goals:

- `github_click`: on every link to `github.com/okfcli/okf` (nav, hero, install,
  README/docs, CTA, footer). Measures people heading to the GitHub repo.
- `visit_personal_site`: on the `akeemjenkins.com` footer link.

To add a goal: put `data-fast-goal="lowercase_name"` on the element, or call
`window.datafast("name")` in JS. Goal names: lowercase letters, digits, and
`_ - :`, max 64 chars.

Docs: bot tracking https://datafa.st/docs/bot-traffic-tracking ·
custom goals https://datafa.st/docs/custom-goals

## Editing the page

- The whole page is one `HTML` template literal. It interpolates
  `${DATAFAST_WEBSITE_ID}`, so that constant must stay declared **above** `HTML`.
- Terminal examples use a bare `$` (e.g. `<span class="cmd">$</span>`), which is safe.
  Do not introduce `${...}` into copy unless you intend template interpolation.
- After any edit, run the dry-run bundle above to confirm it still compiles.

## Copy style (important)

The owner does **not** use em-dashes. Never introduce them into any copy here
(page or README). Use commas, colons, or periods instead. Hyphens in compound words
(`agentic-first`, `cosign-signed`) are fine.
