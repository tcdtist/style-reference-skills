<div align="center">

# 🎨 Style Reference Skills

**1,300+ curated brand design systems for AI agents**

Search, extract, and apply real-world design tokens from Apple, Stripe, Linear, Vercel, Airbnb, and hundreds more — via REST API, MCP Server, or Python CLI.

[![Vercel](https://img.shields.io/badge/API-Vercel-black?logo=vercel)](https://style-reference-skills.vercel.app)
[![MCP](https://img.shields.io/badge/MCP-Compatible-5A67D8?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMNCAxMmw4IDEwIDgtMTB6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==)](https://modelcontextprotocol.io)
[![Python](https://img.shields.io/badge/CLI-Python_3-3776AB?logo=python&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/Types-TypeScript-3178C6?logo=typescript&logoColor=white)]()
[![License](https://img.shields.io/badge/License-MIT-green.svg)]()

</div>

---

## Why This Exists

AI agents often produce generic, inconsistent UIs — "AI slop." This repository solves that by providing **structured design references** (`DESIGN.md`) from 1,300+ real-world products, each containing:

- **Color tokens** with CSS variable names and hex values
- **Typography** with font families, weights, and scale tokens
- **Spacing & radius** scales with semantic naming
- **Component patterns**, dos and don'ts
- **Industry classification** for targeted style matching

Agents consume these references to understand aesthetic vibes and replicate specific visual styles with production-quality tokens.

---

## Quick Start

### Python CLI (Zero Dependencies)

```bash
# Search fintech brands with dark themes
python3 scripts/style_ref.py search "fintech" --theme dark --limit 5

# Extract CSS variables for Linear
python3 scripts/style_ref.py tokens linear --format css

# Get Tailwind config snippet for Stripe
python3 scripts/style_ref.py tokens stripe --format tailwind

# List all industry categories
python3 scripts/style_ref.py industries
```

### REST API

```bash
# Search by industry with pagination
curl "https://style-reference-skills.vercel.app/api/search?industry=ecommerce&limit=5"

# Get machine-readable tokens as CSS
curl "https://style-reference-skills.vercel.app/api/brands/linear/tokens?format=css"

# Explore available industries
curl "https://style-reference-skills.vercel.app/api/industries"
```

### MCP Server (Claude, Cursor, Windsurf, Antigravity)

Add to your IDE's MCP config:

```json
{
  "mcpServers": {
    "style-reference": {
      "command": "node",
      "args": ["/path/to/style-reference-skills/mcp-server/dist/index.js"]
    }
  }
}
```

Then use the tools directly in your AI IDE:
- `search_styles` — Find brands by keyword, industry, or theme
- `get_brand_design` — Full DESIGN.md specification
- `get_brand_tokens` — Structured tokens as JSON, CSS, or Tailwind
- `list_industries` — Browse 11 industry categories

---

## Architecture

```
style-reference-skills/
├── skills/                  # 1,304 brand directories, each with DESIGN.md
│   ├── apple/DESIGN.md
│   ├── stripe/DESIGN.md
│   ├── linear/DESIGN.md
│   └── ...
├── api/                     # Vercel Serverless REST API
│   ├── _lib/                # Shared loader, types, token parser
│   ├── brands/              # /brands, /brands/:id, /brands/:id/design, /brands/:id/tokens
│   ├── search.js            # Multi-filter search with pagination
│   ├── industries.js        # Industry aggregation
│   └── health.js            # Health check
├── mcp-server/              # Model Context Protocol server (stdio)
│   ├── index.ts             # MCP implementation (@modelcontextprotocol/sdk)
│   ├── token-parser.ts      # Shared token extraction module
│   └── dist/                # Compiled ESM bundle
├── scripts/                 # Tooling
│   ├── style_ref.py         # Python 3 CLI & SDK (zero-deps)
│   ├── test_style_ref.py    # Python unit tests
│   ├── build-index.js       # Rebuild index.json from DESIGN.md files
│   └── test-api-local.js    # API integration tests
└── index.json               # Searchable metadata index (1,304 brands)
```

---

## REST API Reference

All endpoints are deployed at `https://style-reference-skills.vercel.app` with Edge CDN caching (`s-maxage=86400, stale-while-revalidate=604800`).

| Endpoint | Description | Key Params |
|----------|-------------|------------|
| `GET /api/health` | Service health + brand count | — |
| `GET /api/industries` | All industry categories with counts | — |
| `GET /api/search` | Search brands by keyword, industry, theme | `q`, `industry`, `theme`, `limit`, `page` |
| `GET /api/brands` | List all brands with optional filtering | `fields=summary`, `industry`, `theme`, `limit`, `page` |
| `GET /api/brands/:id` | Full metadata for a specific brand | — |
| `GET /api/brands/:id/design` | Raw DESIGN.md markdown content | — |
| `GET /api/brands/:id/tokens` | Machine-readable design tokens | `format=json\|css\|tailwind` |

### Token Output Formats

**JSON** (default) — Structured object with colors, typography, spacing, CSS variables, and Tailwind mappings.

**CSS** — Ready-to-use `:root` stylesheet with CSS custom properties.

**Tailwind** — `theme.extend` snippet for `tailwind.config.js`.

---

## MCP Server

The MCP server implements the [Model Context Protocol](https://modelcontextprotocol.io) (2024-11-05) with `stdio` transport. It exposes 4 tools and 1 resource template.

### Tools

| Tool | Description |
|------|-------------|
| `search_styles` | Search 1,304 brands by query, industry, theme, with configurable limit |
| `get_brand_design` | Retrieve full raw DESIGN.md for a brand |
| `get_brand_tokens` | Extract structured tokens in JSON, CSS, or Tailwind format |
| `list_industries` | List all 11 industry categories with brand counts |

### Resources

| URI Template | Description |
|---|---|
| `style://brands/{brand_id}` | Direct access to any brand's DESIGN.md |

### Build & Run

```bash
cd mcp-server
pnpm install
pnpm run build    # Compile TypeScript → dist/
pnpm run start    # Run via stdio
pnpm run dev      # Dev mode with tsx watch
```

---

## Python CLI & SDK

[`scripts/style_ref.py`](scripts/style_ref.py) — Pure Python 3 standard library, zero external dependencies. Works offline against the local `index.json` and `skills/` directory.

### Commands

| Command | Description | Example |
|---------|-------------|---------|
| `search` | Find brands by keyword, industry, theme | `search "fintech" --theme dark -f json` |
| `tokens` | Extract design tokens | `tokens stripe --format css` |
| `industries` | List industry categories | `industries --format json` |
| `get` | Print raw DESIGN.md content | `get linear` |

### As a Library

```python
from scripts.style_ref import get_brand_data, load_index, parse_markdown_tokens

# Get full brand data with tokens
data = get_brand_data("linear")
print(data["tokens"]["css_variables"])

# Search programmatically
index = load_index()
fintech = [b for b in index["brands"] if b.get("industry") == "fintech"]
```

---

## Industry Distribution

| Industry | Brands | Examples |
|----------|--------|---------|
| Design | 301 | Figma, Framer, Sketch, Dribbble |
| Ecommerce | 148 | Apple, Airbnb, Zara, Nike |
| Agency | 138 | Pentagram, Collins, Porto Rocha |
| AI | 97 | OpenAI, Anthropic, Midjourney |
| Media | 97 | Netflix, Spotify, YouTube |
| SaaS | 84 | Linear, Notion, Slack |
| Productivity | 77 | Todoist, Cal.com, Asana |
| Fintech | 73 | Stripe, Wise, Coinbase |
| DevTools | 65 | Vercel, Supabase, Railway |
| Crypto | 29 | Uniswap, Metamask, Solana |

---

## Development

```bash
# Rebuild index from DESIGN.md files
node scripts/build-index.js

# Run Python SDK tests
python3 scripts/test_style_ref.py

# Run API integration tests
node scripts/test-api-local.js

# Type-check MCP server
cd mcp-server && npx tsc --noEmit

# Build MCP server
cd mcp-server && pnpm run build
```

---

## License

MIT. Individual `DESIGN.md` files reference their respective brands' visual systems and are aggregated solely for AI agent design guidance and token consumption.
