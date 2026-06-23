export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\n', { headers: { 'Content-Type': 'text/plain' } });
    }
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>okf — the CLI your AI agent drives to manage your knowledge graph</title>
<meta name="description" content="A Go CLI toolkit for the Open Knowledge Format (OKF) — agentic-first, JSON-native, vendor-neutral. An alternative to Google's Python/Gemini-locked reference implementation.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🕸️</text></svg>">
<style>
:root {
  --bg: #ffffff;
  --bg2: #f5f6fb;
  --surface: #f0f1f8;
  --surface2: #e8eaf5;
  --border: #e0e3ee;
  --border2: #ccd1e6;
  --text: #1a1a3e;
  --text-dim: #5b6275;
  --text-faint: #9ca3b8;
  --accent: #4338ca;
  --accent-deep: #312e81;
  --accent-hover: #3730c9;
  --complement: #d97706;
  --complement-deep: #b45309;
  --complement-soft: #fef3c7;
  --warn: #f59e0b;
  --error: #ef4444;
  --success: #059669;
  --mono: 'SF Mono', 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
  --sans: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif;
  --shadow: 0 4px 24px rgba(67,56,202,0.08);
  --shadow-lg: 0 12px 48px rgba(67,56,202,0.14);
  --shadow-sm: 0 2px 8px rgba(26,26,62,0.06);
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* Nav */
nav {
  position: fixed; top: 0; width: 100%; z-index: 100;
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border);
  padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
  height: 60px;
}
nav .logo { font-weight: 700; font-size: 1.2rem; letter-spacing: -0.02em; color: var(--accent-deep); }
nav .logo span { color: var(--complement); }
nav ul { display: flex; gap: 28px; list-style: none; }
nav ul a { color: var(--text-dim); font-size: 0.9rem; font-weight: 500; transition: color .2s; }
nav ul a:hover { color: var(--accent-deep); text-decoration: none; }
nav .nav-cta {
  background: var(--accent); color: #fff; padding: 8px 18px;
  border-radius: 8px; font-size: 0.85rem; font-weight: 600;
  transition: transform .15s, box-shadow .15s;
  box-shadow: 0 2px 12px rgba(67,56,202,0.25);
}
nav .nav-cta:hover { text-decoration: none; transform: translateY(-1px); box-shadow: 0 4px 20px rgba(67,56,202,0.35); }

/* Hero */
.hero {
  min-height: 100vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; padding: 120px 24px 60px;
  position: relative;
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
}
.hero::before {
  content: ''; position: absolute; top: 0; left: 50%;
  transform: translateX(-50%);
  width: 900px; height: 500px;
  background: radial-gradient(ellipse at center, rgba(67,56,202,0.08), transparent 70%);
  pointer-events: none;
}
.hero .badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--surface); border: 1px solid var(--border2);
  padding: 6px 16px; border-radius: 100px;
  font-size: 0.8rem; color: var(--text-dim);
  margin-bottom: 32px; position: relative;
  box-shadow: var(--shadow-sm);
}
.hero .badge .dot { width: 8px; height: 8px; background: var(--success); border-radius: 50%; }
.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800; letter-spacing: -0.03em;
  line-height: 1.05; max-width: 850px;
  margin-bottom: 24px; position: relative;
  color: var(--text);
}
.hero h1 .gradient {
  background: linear-gradient(135deg, var(--accent), var(--complement));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero p.sub {
  font-size: 1.25rem; color: var(--text-dim);
  max-width: 620px; margin-bottom: 40px; position: relative;
}
.hero .cta-group { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; position: relative; }
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 28px; border-radius: 12px;
  font-weight: 600; font-size: 1rem;
  transition: transform .15s, box-shadow .15s, background .2s, border-color .2s;
  cursor: pointer; border: none;
  font-family: var(--sans);
}
.btn-primary {
  background: var(--accent); color: #fff;
  box-shadow: 0 4px 20px rgba(67,56,202,0.3);
}
.btn-primary:hover { text-decoration: none; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(67,56,202,0.4); }
.btn-secondary {
  background: var(--surface); color: var(--text);
  border: 1px solid var(--border2);
  box-shadow: var(--shadow-sm);
}
.btn-secondary:hover { text-decoration: none; transform: translateY(-2px); border-color: var(--accent); box-shadow: var(--shadow); }

/* Terminal preview */
.terminal {
  margin-top: 60px; max-width: 720px; width: 100%;
  background: #1a1a2e; border: 1px solid #2a2a3e;
  border-radius: 12px; overflow: hidden;
  box-shadow: var(--shadow-lg);
  position: relative;
  text-align: left;
}
.terminal-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 16px; background: #12121a;
  border-bottom: 1px solid #2a2a3e;
}
.terminal-bar .dot-r { width: 12px; height: 12px; border-radius: 50%; background: #ff5f57; }
.terminal-bar .dot-y { width: 12px; height: 12px; border-radius: 50%; background: #febc2e; }
.terminal-bar .dot-g { width: 12px; height: 12px; border-radius: 50%; background: #28c840; }
.terminal-bar .title { margin-left: 12px; font-size: 0.8rem; color: #8888aa; font-family: var(--mono); }
.terminal-body {
  padding: 20px; font-family: var(--mono); font-size: 0.82rem;
  overflow-x: auto; line-height: 1.7; color: #e4e4ef;
}
.terminal-body .cmd { color: #fbbf24; }
.terminal-body .out { color: #a5b4d8; }
.terminal-body .key { color: #818cf8; }
.terminal-body .str { color: #f59e0b; }
.terminal-body .comment { color: #555566; }
.terminal-body .ok { color: #34d399; }

/* Sections */
section { padding: 100px 24px; max-width: 1100px; margin: 0 auto; }
.section-label {
  font-size: 0.8rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--complement-deep); margin-bottom: 12px;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700; letter-spacing: -0.02em;
  margin-bottom: 16px; max-width: 700px;
  color: var(--text);
}
.section-desc { font-size: 1.1rem; color: var(--text-dim); max-width: 620px; margin-bottom: 48px; }
section code {
  font-family: var(--mono); font-size: 0.9em; background: var(--surface2);
  padding: 2px 6px; border-radius: 4px; color: var(--accent-deep);
}

/* Feature grid */
.features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.feature {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: 16px; padding: 32px;
  transition: border-color .2s, transform .2s, box-shadow .2s;
  box-shadow: var(--shadow-sm);
}
.feature:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: var(--shadow); }
.feature .icon { font-size: 1.8rem; margin-bottom: 16px; }
.feature h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; color: var(--text); }
.feature p { color: var(--text-dim); font-size: 0.95rem; }
.feature p code { font-size: 0.85em; }
.feature-group-label {
  font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--accent); margin-bottom: 20px;
  padding-bottom: 8px; border-bottom: 2px solid var(--surface2);
}

/* Why section */
.why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
@media (max-width: 768px) { .why-grid { grid-template-columns: 1fr; } }
.why-card {
  background: var(--surface); border: 1px solid var(--border2);
  border-radius: 12px; padding: 24px; margin-bottom: 16px;
}
.why-card .label { font-family: var(--mono); font-size: 0.8rem; color: var(--complement-deep); margin-bottom: 8px; font-weight: 600; letter-spacing: 0.05em; }
.why-card .desc { font-size: 0.95rem; color: var(--text-dim); }
.why-card .desc code { font-size: 0.9em; }

/* Code block */
.code-block {
  background: #1a1a2e; border: 1px solid #2a2a3e;
  border-radius: 12px; padding: 24px;
  font-family: var(--mono); font-size: 0.82rem;
  overflow-x: auto; line-height: 1.7; color: #e4e4ef;
  text-align: left;
}
.code-block .cmd { color: #fbbf24; }
.code-block .key { color: #818cf8; }
.code-block .str { color: #f59e0b; }
.code-block .comment { color: #555566; }
.code-block .out { color: #a5b4d8; }
.code-block .ok { color: #34d399; }

/* Exit codes table */
.exit-table { width: 100%; border-collapse: collapse; margin-top: 24px; font-size: 0.9rem; background: var(--bg); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-sm); }
.exit-table th, .exit-table td { text-align: left; padding: 12px 16px; border-bottom: 1px solid var(--border); }
.exit-table th { color: var(--text-dim); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; background: var(--surface); }
.exit-table td { font-family: var(--mono); color: var(--text); }
.exit-table td:first-child { color: var(--accent); font-weight: 700; }
.exit-table td:nth-child(2) { color: var(--complement-deep); font-weight: 600; }
.exit-table tr:last-child td { border-bottom: none; }
.exit-table tr:hover { background: var(--surface); }

/* Install section */
.install-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 32px; }
.install-card {
  background: var(--surface); border: 1px solid var(--border2);
  border-radius: 12px; padding: 24px;
}
.install-card h4 { font-size: 0.85rem; font-weight: 600; color: var(--complement-deep); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
.install-card code {
  display: block; font-family: var(--mono); font-size: 0.85rem;
  background: var(--bg); padding: 12px; border-radius: 8px;
  border: 1px solid var(--border); color: var(--accent-deep);
  word-break: break-all; white-space: pre-wrap;
}

/* CTA section */
.cta-section {
  text-align: center; padding: 120px 24px;
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
  border-top: 1px solid var(--border);
}
.cta-section h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800; letter-spacing: -0.02em;
  margin-bottom: 16px; color: var(--text);
}
.cta-section h2 .gradient {
  background: linear-gradient(135deg, var(--accent), var(--complement));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cta-section p { color: var(--text-dim); font-size: 1.15rem; margin-bottom: 40px; }

/* Footer */
footer {
  border-top: 1px solid var(--border);
  padding: 40px 24px; text-align: center;
  color: var(--text-dim); font-size: 0.85rem;
  background: var(--bg);
}
footer a { color: var(--accent-deep); }
footer .disclaimer { margin-top: 16px; font-size: 0.75rem; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.5; color: var(--text-faint); }

/* Responsive */
@media (max-width: 640px) {
  nav ul { display: none; }
  nav { justify-content: space-between; }
  .hero { padding-top: 100px; }
}

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.6s ease-out; }
.fade-up-delay-1 { animation: fadeUp 0.6s ease-out 0.1s both; }
.fade-up-delay-2 { animation: fadeUp 0.6s ease-out 0.2s both; }
.fade-up-delay-3 { animation: fadeUp 0.6s ease-out 0.3s both; }
</style>
</head>
<body>

<nav>
  <div class="logo">okf<span>.</span></div>
  <ul>
    <li><a href="#why">Why</a></li>
    <li><a href="#features">Commands</a></li>
    <li><a href="#agentic">Agentic First</a></li>
    <li><a href="#install">Install</a></li>
    <li><a href="https://github.com/okfcli/okf">GitHub</a></li>
  </ul>
  <a class="nav-cta" href="#install">Get Started</a>
</nav>

<!-- Hero -->
<div class="hero">
  <div class="badge fade-up"><span class="dot"></span> v0.1.0 released — brew install okfcli/okf/okf</div>
  <h1 class="fade-up fade-up-delay-1">The CLI your AI agent <span class="gradient">drives</span> to manage your knowledge graph</h1>
  <p class="sub fade-up fade-up-delay-2">okf is a Go CLI toolkit for the Open Knowledge Format — agentic-first, JSON-native, vendor-neutral. A single binary alternative to Google's Python/Gemini-locked reference implementation.</p>
  <div class="cta-group fade-up fade-up-delay-3">
    <a class="btn btn-primary" href="#install">⚡ Install</a>
    <a class="btn btn-secondary" href="https://github.com/okfcli/okf" target="_blank">View on GitHub →</a>
  </div>

  <div class="terminal fade-up fade-up-delay-3">
    <div class="terminal-bar">
      <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
      <div class="title">okf schema validate</div>
    </div>
    <div class="terminal-body">
<span class="comment"># The agent discovers the tool first</span>
<span class="cmd">$</span> okf schema validate
<span class="out">{</span>
  <span class="key">"name"</span>: <span class="str">"validate"</span>,
  <span class="key">"short"</span>: <span class="str">"Validate a bundle against the OKF spec"</span>,
  <span class="key">"stdout"</span>: <span class="str">"json"</span>,
  <span class="key">"exit_codes"</span>: [<span class="ok">0</span>, <span class="out">1</span>, <span class="out">2</span>, <span class="out">4</span>]
<span class="out">}</span>

<span class="comment"># Then drives it — JSON on stdout, diagnostics on stderr</span>
<span class="cmd">$</span> okf validate ./my-bundle
<span class="out">{</span>
  <span class="key">"bundle"</span>: <span class="str">"./my-bundle"</span>,
  <span class="key">"command"</span>: <span class="str">"validate"</span>,
  <span class="key">"valid"</span>: <span class="ok">true</span>,
  <span class="key">"errors"</span>: <span class="ok">0</span>,
  <span class="key">"warnings"</span>: <span class="ok">0</span>,
  <span class="key">"findings"</span>: []
<span class="out">}</span>
    </div>
  </div>
</div>

<!-- Why -->
<section id="why">
  <div class="section-label">Why okf exists</div>
  <h2 class="section-title">Vendor-neutral OKF tooling for any AI agent on any provider</h2>
  <p class="section-desc">Google's reference OKF implementation is Python + Gemini + BigQuery — vendor-locked to Google's cloud. <code>okf</code> is the vendor-neutral alternative: a single Go binary that works anywhere, speaks JSON natively, and is designed to be driven by any AI agent — not just Gemini.</p>

  <div class="why-grid">
    <div>
      <div class="why-card">
        <div class="label">THE PROBLEM</div>
        <div class="desc">The only reference OKF tooling requires Python, a Gemini API key, and BigQuery. Agents that don't run on Google's stack can't participate. The format is open, but the tooling isn't.</div>
      </div>
      <div class="why-card">
        <div class="label">THE OLD WORKAROUND</div>
        <div class="desc">Parse <code>--help</code> text, guess at flags, screen-scrape stdout. Errors are English sentences you can't reliably branch on. Every agent integration is bespoke prompt engineering.</div>
      </div>
    </div>
    <div>
      <div class="why-card">
        <div class="label">THE OKF WAY</div>
        <div class="desc">Load <code>okf schema</code> once — a JSON manifest of every command, its args, output format, and exit codes. Drive the CLI from that spec. Branch on <code>.error.kind</code>. JSON is the default, not an opt-in flag.</div>
      </div>
      <div class="why-card">
        <div class="label">THE RESULT</div>
        <div class="desc">An agent that can discover, drive, and recover from okf without any prompt engineering. The schema IS the prompt. The error envelope IS the branching logic. The exit code IS the retry strategy. One binary, zero dependencies.</div>
      </div>
    </div>
  </div>
</section>

<!-- Features / Commands -->
<section id="features">
  <div class="section-label">What's inside</div>
  <h2 class="section-title">11 commands, one binary, zero runtime dependencies</h2>
  <p class="section-desc">Built test-first (35 tests), Go stdlib-only, Apache 2.0. Every command outputs structured JSON on stdout by default — no <code>--json</code> flag, no screen-scraping.</p>

  <div class="feature-group-label">Schema & Discovery</div>
  <div class="features" style="margin-bottom: 48px;">
    <div class="feature">
      <div class="icon">📐</div>
      <h3>okf schema</h3>
      <p>Emits a complete JSON manifest of every command — name, description, flags, args, stdout format, exit codes. One call and an agent knows the full CLI surface. This is the moat.</p>
    </div>
    <div class="feature">
      <div class="icon">🔢</div>
      <h3>okf version</h3>
      <p>Prints version info as JSON. Agents can check compatibility before driving the rest of the CLI.</p>
    </div>
  </div>

  <div class="feature-group-label">Create & Structure</div>
  <div class="features" style="margin-bottom: 48px;">
    <div class="feature">
      <div class="icon">🚀</div>
      <h3>okf init</h3>
      <p>Scaffolds a new empty OKF bundle with standard subdirectories (tables, datasets, playbooks), a root <code>index.md</code>, and a <code>.gitignore</code>. The starting point for an AI-driven documentation pipeline.</p>
    </div>
    <div class="feature">
      <div class="icon">📇</div>
      <h3>okf index</h3>
      <p>Generates <code>index.md</code> files into every directory — progressive disclosure per OKF spec §6. Agents navigate level by level instead of loading the entire bundle.</p>
    </div>
  </div>

  <div class="feature-group-label">Validate & Quality</div>
  <div class="features" style="margin-bottom: 48px;">
    <div class="feature">
      <div class="icon">✅</div>
      <h3>okf validate</h3>
      <p>Checks every concept for required frontmatter (<code>type</code>), recommended fields (<code>title</code>, <code>description</code>, <code>tags</code>), non-empty body, and valid cross-links. Exits 1 if any errors are found. The CI quality gate.</p>
    </div>
    <div class="feature">
      <div class="icon">🧹</div>
      <h3>okf lint</h3>
      <p>Same checks as validate but only emits warnings — errors are suppressed. Exits 0 even with warnings. Use it to flag missing recommended fields without failing a build.</p>
    </div>
  </div>

  <div class="feature-group-label">Explore & Query</div>
  <div class="features" style="margin-bottom: 48px;">
    <div class="feature">
      <div class="icon">📋</div>
      <h3>okf list</h3>
      <p>Lists every concept document with its ID, type, and title as JSON. The inventory query — what's in this bundle?</p>
    </div>
    <div class="feature">
      <div class="icon">🔍</div>
      <h3>okf search</h3>
      <p>Filters concepts by <code>--tag</code>, <code>--type</code>, or <code>--text</code>. Find stale concepts, filter by category, or locate everything tagged <code>auth</code> — all as structured JSON.</p>
    </div>
    <div class="feature">
      <div class="icon">📄</div>
      <h3>okf show</h3>
      <p>Returns a single concept's full content — ID, file path, frontmatter (type, title, description, resource, tags), and markdown body — as JSON. The deep-read command.</p>
    </div>
  </div>

  <div class="feature-group-label">Graph & Relationships</div>
  <div class="features">
    <div class="feature">
      <div class="icon">🕸️</div>
      <h3>okf graph</h3>
      <p>Builds the directed cross-link graph from concept markdown links and prints nodes, edges, density, and summary statistics. Find orphan concepts and verify cross-link structure.</p>
    </div>
    <div class="feature">
      <div class="icon">🔗</div>
      <h3>okf backlinks</h3>
      <p>Lists every concept that links to a given concept — reverse-link lookup. Answer "who depends on this?" without grepping the entire bundle.</p>
    </div>
  </div>
</section>

<!-- Agentic First -->
<section id="agentic">
  <div class="section-label">The agentic-first principle</div>
  <h2 class="section-title">Four primitives. Zero ambiguity.</h2>
  <p class="section-desc">"Agentic first" means an external AI can discover and drive the CLI via <code>okf schema</code> — not that the CLI calls an LLM internally. Everything an agent needs is built into the binary itself.</p>

  <div class="code-block">
<span class="comment">// 1. Discover: load the schema manifest</span>
<span class="cmd">$</span> okf schema
<span class="out">{</span>
  <span class="key">"name"</span>: <span class="str">"okf"</span>,
  <span class="key">"description"</span>: <span class="str">"Go CLI toolkit for the Open Knowledge Format (OKF)"</span>,
  <span class="key">"commands"</span>: [
    {<span class="key">"name"</span>:<span class="str">"schema"</span>, <span class="key">"stdout"</span>:<span class="str">"json"</span>, <span class="key">"exit_codes"</span>:[<span class="ok">0</span>,<span class="out">4</span>]},
    {<span class="key">"name"</span>:<span class="str">"validate"</span>, <span class="key">"stdout"</span>:<span class="str">"json"</span>, <span class="key">"exit_codes"</span>:[<span class="ok">0</span>,<span class="out">1</span>,<span class="out">2</span>,<span class="out">4</span>]},
    {<span class="key">"name"</span>:<span class="str">"graph"</span>, <span class="key">"stdout"</span>:<span class="str">"json"</span>, <span class="key">"exit_codes"</span>:[<span class="ok">0</span>,<span class="out">2</span>,<span class="out">4</span>]}
    <span class="comment">// ...8 more</span>
  ]
<span class="out">}</span>

<span class="comment">// 2. Drive: JSON on stdout, diagnostics on stderr</span>
<span class="cmd">$</span> okf graph ./my-bundle
<span class="out">{</span>
  <span class="key">"command"</span>: <span class="str">"graph"</span>,
  <span class="key">"node_count"</span>: <span class="ok">3</span>,
  <span class="key">"edge_count"</span>: <span class="ok">3</span>,
  <span class="key">"density_pct"</span>: <span class="ok">50</span>,
  <span class="key">"isolated"</span>: <span class="ok">0</span>,
  <span class="key">"nodes"</span>: [{<span class="key">"id"</span>:<span class="str">"tables/events_"</span>,<span class="key">"type"</span>:<span class="str">"BigQuery Table"</span>}],
  <span class="key">"edges"</span>: [{<span class="key">"from"</span>:<span class="str">"datasets/ga4"</span>,<span class="key">"to"</span>:<span class="str">"tables/events_"</span>}]
<span class="out">}</span>

<span class="comment">// 3. Recover: typed error envelopes, not English sentences</span>
<span class="cmd">$</span> okf validate ./broken-bundle
<span class="out">{</span>
  <span class="key">"error"</span>: {
    <span class="key">"kind"</span>: <span class="str">"validation"</span>,
    <span class="key">"code"</span>: <span class="str">400</span>,
    <span class="key">"reason"</span>: <span class="str">"validationError"</span>,
    <span class="key">"message"</span>: <span class="str">"broken link: [Users] -> users.md (concept tables/users not found)"</span>
  }
<span class="out">}</span>
<span class="comment">// exit code: 1 -> agent parses findings, fixes, re-validates</span>

<span class="comment">// 4. Branch: exit codes map 1:1 to error kinds</span>
  </div>

  <table class="exit-table">
    <thead><tr><th>Code</th><th>Kind</th><th>Agent Strategy</th></tr></thead>
    <tbody>
      <tr><td>0</td><td>success</td><td>Parse stdout JSON, continue</td></tr>
      <tr><td>1</td><td>validation</td><td>Parse findings, fix the bundle, re-run</td></tr>
      <tr><td>2</td><td>io</td><td>Check filesystem / paths, surface to caller</td></tr>
      <tr><td>3</td><td>internal</td><td>Escalate to user — unexpected error</td></tr>
      <tr><td>4</td><td>usage</td><td>Fix flags/args from schema, retry</td></tr>
    </tbody>
  </table>
</section>

<!-- Install -->
<section id="install">
  <div class="section-label">Get started</div>
  <h2 class="section-title">Install in 30 seconds</h2>
  <p class="section-desc">v0.1.0 released — cosign-signed, SBOM-included. One binary, no runtime dependencies.</p>

  <div class="install-grid">
    <div class="install-card">
      <h4>Homebrew (macOS / Linux)</h4>
      <code>brew install okfcli/okf/okf</code>
    </div>
    <div class="install-card">
      <h4>Go install</h4>
      <code>go install github.com/okfcli/okf/cmd/okf@latest</code>
    </div>
    <div class="install-card">
      <h4>Build from source</h4>
      <code>git clone https://github.com/okfcli/okf.git
cd okf && make build
./okf --help</code>
    </div>
  </div>

  <div style="margin-top: 40px;">
    <p style="color: var(--text-dim); margin-bottom: 16px;">Then scaffold a bundle, add concepts, and validate:</p>
    <div class="code-block">
<span class="comment"># Create a new bundle</span>
<span class="cmd">$</span> okf init ./my-bundle
<span class="out">{"command":"init","bundle":"./my-bundle","created":true}</span>

<span class="comment"># Write concept .md files into tables/, datasets/, playbooks/ ...</span>

<span class="comment"># Validate the bundle against the OKF spec</span>
<span class="cmd">$</span> okf validate ./my-bundle
<span class="out">{"bundle":"./my-bundle","command":"validate","valid":true,"errors":0,"warnings":0,"findings":[]}</span>

<span class="comment"># Generate index.md files for progressive disclosure</span>
<span class="cmd">$</span> okf index ./my-bundle

<span class="comment"># Emit the knowledge graph as JSON</span>
<span class="cmd">$</span> okf graph ./my-bundle

<span class="comment"># Search by tag, type, or text</span>
<span class="cmd">$</span> okf search ./my-bundle --type Table --tag revenue
    </div>
  </div>

  <div style="text-align: center; margin-top: 48px;">
    <a class="btn btn-primary" href="https://github.com/okfcli/okf" target="_blank">⬇ View on GitHub</a>
    <a class="btn btn-secondary" href="https://github.com/okfcli/okf/blob/main/README.md" target="_blank" style="margin-left: 12px;">Read the docs →</a>
  </div>
</section>

<!-- CTA -->
<div class="cta-section">
  <h2>Give your agent a CLI it can <span class="gradient">actually drive</span></h2>
  <p>Schema-discoverable. JSON-native. Vendor-neutral. One Go binary.</p>
  <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <a class="btn btn-primary" href="#install">Install okf</a>
    <a class="btn btn-secondary" href="https://github.com/okfcli/okf" target="_blank">Star on GitHub</a>
  </div>
</div>

<!-- Footer -->
<footer>
  <div>
    <strong style="color: var(--accent-deep);">okf</strong> — Go CLI toolkit for the Open Knowledge Format ·
    <a href="https://github.com/okfcli/okf">GitHub</a> ·
    <a href="https://github.com/okfcli/okf/blob/main/README.md">README</a> ·
    Apache 2.0 License
  </div>
  <div class="disclaimer">
    okf is an independent, community-built CLI for the Open Knowledge Format. It is not affiliated with, endorsed by, or sponsored by Google. OKF is an open format from the Google knowledge-catalog repository, used here under its Apache 2.0 license.
  </div>
  <div style="margin-top: 12px;">Built by <a href="https://akeemjenkins.com">Akeem Jenkins</a></div>
</footer>

</body>
</html>`;
