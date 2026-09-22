# Style Reference Skills

Curated `DESIGN.md` style references from 1,300+ real-world brands for AI agents to build consistent, brand-aligned user interfaces.

## Overview

This repository aggregates design system references (`DESIGN.md`) extracted from top modern products and brands (Apple, Stripe, Linear, Vercel, Wise, Airbnb, etc.). AI agents consume these files to understand aesthetic vibes, extract CSS tokens (colors, typography, spacing, radius, shadows), and replicate specific visual styles without generic AI slop.

## Repository Structure

```text
style-reference-skills/
├── skills/              # 1,300+ DESIGN.md files organized by brand
│   ├── apple/
│   ├── linear/
│   ├── vercel/
│   ├── stripe/
│   └── ...
├── api/                 # Vercel Serverless API routes (Cached & Optimized)
│   ├── _lib/            # Shared index loader, types, and token parser
│   ├── brands/          # /api/brands, :brandId/design, and :brandId/tokens
│   ├── industries.js    # /api/industries
│   ├── search.js        # /api/search with industry, theme, and pagination
│   └── health.js        # Service health check
├── mcp-server/          # Standard Model Context Protocol (MCP) server (stdio)
│   ├── index.ts         # MCP Server implementation (@modelcontextprotocol/sdk)
│   ├── dist/            # Compiled ESM JavaScript executable
│   └── package.json
├── scripts/             # Python 3 CLI SDK & Node.js maintenance tools
│   ├── style_ref.py     # Python 3 offline CLI & SDK for AI agents (zero-deps)
│   ├── test_style_ref.py# Unit tests for Python CLI & SDK
│   ├── test-api-local.js# Local test suite for API endpoints
│   ├── build-index.js   # Rebuild index.json with industry, media, and tokens
│   └── validate-design-md.js
├── index.json           # Searchable index of all 1,304 style references
└── README.md
```

---

## 🐍 Python 3 CLI & SDK for AI Agents (Local-First & Offline)

For local AI agents and shell automation without internet dependencies, the repository provides [`scripts/style_ref.py`](file:///Users/tcdtist/dev/me/style-reference-skills/scripts/style_ref.py) (pure Python 3 standard library, zero dependencies):

```bash
# 1. Search brands by keyword & industry (Output: Table or JSON)
python3 scripts/style_ref.py search "fintech" --theme dark --limit 5
python3 scripts/style_ref.py search "ecommerce" --format json

# 2. Extract tokens directly as CSS variables (:root stylesheet)
python3 scripts/style_ref.py tokens linear --format css

# 3. Extract tokens directly as Tailwind config snippet (theme.extend)
python3 scripts/style_ref.py tokens stripe --format tailwind

# 4. Extract structured JSON tokens
python3 scripts/style_ref.py tokens apple --format json

# 5. List all 11+ industry distributions
python3 scripts/style_ref.py industries
```

---

## 🌐 REST API

Publicly deployed at `https://style-reference-skills.vercel.app`. All endpoints are optimized with Edge CDN caching (`s-maxage=86400, stale-while-revalidate=604800`).

| Endpoint | Method | Params / Query | Description |
|---|---|---|---|
| `/api/health` | `GET` | — | Health check and total brand count |
| `/api/industries` | `GET` | — | List all industry categories and counts |
| `/api/brands` | `GET` | `?fields=summary&industry=&theme=&limit=&page=` | List brands (supports lightweight `fields=summary`) |
| `/api/brands/:brandId` | `GET` | — | Get complete metadata for a specific brand |
| `/api/brands/:brandId/design` | `GET` | — | Load full raw `DESIGN.md` markdown content |
| `/api/brands/:brandId/tokens` | `GET` | `?format=json\|css\|tailwind` | **(NEW)** Machine-readable tokens (JSON, CSS, or Tailwind) |
| `/api/search` | `GET` | `?q=&industry=&theme=&limit=&page=` | Search brands by keyword, industry, theme, or ID |

### REST Usage Examples

```bash
# 1. Get machine-readable tokens as CSS variables
curl "https://style-reference-skills.vercel.app/api/brands/linear/tokens?format=css"

# 2. Get machine-readable tokens for Tailwind
curl "https://style-reference-skills.vercel.app/api/brands/stripe/tokens?format=tailwind"

# 3. Search ecommerce brands with limit
curl "https://style-reference-skills.vercel.app/api/search?industry=ecommerce&limit=5"

# 4. Explore available industry categories
curl "https://style-reference-skills.vercel.app/api/industries"
```

---

## 🤖 Model Context Protocol (MCP) Server

The repository includes a production-grade MCP server using the official `@modelcontextprotocol/sdk` communicating via `stdio` transport. It allows Claude Code, Antigravity IDE, Cursor, and Windsurf to search styles and fetch tokens directly as native tool calls.

### Configuration

Add to your IDE's MCP config file (e.g. `~/.gemini/antigravity-ide/mcp_config.json`, `~/.claude/claude_desktop_config.json`, or `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "style-reference": {
      "command": "node",
      "args": ["/absolute/path/to/style-reference-skills/mcp-server/dist/index.js"]
    }
  }
}
```

### Available MCP Tools

1. **`search_styles`**: Search through 1,304 brands by keyword, industry, theme, and limit.
2. **`get_brand_tokens`**: **(NEW)** Extract structured design tokens (colors, typography, spacing, CSS variables, Tailwind theme snippet) directly as machine-readable JSON or CSS.
3. **`get_brand_design`**: Retrieve full raw `DESIGN.md` markdown content.
4. **`list_industries`**: List all industry categories and counts.

### MCP Resources

- `style://brands/{brand_id}`: Direct access to any brand's `DESIGN.md` as an MCP resource.

---

## 🧪 Testing & Maintenance Scripts

```bash
# Run Python CLI & SDK unit tests
python3 scripts/test_style_ref.py

# Run local API test suite
node scripts/test-api-local.js

# Rebuild index.json from skills/*/DESIGN.md
node scripts/build-index.js

# Build MCP server TypeScript bundle
cd mcp-server && pnpm run build

# Validate DESIGN.md structure
node scripts/validate-design-md.js
```

## License

`DESIGN.md` files belong to their respective brands. This repository aggregates them solely for AI agent design guidance and token consumption.
