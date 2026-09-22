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
│   ├── _lib/            # Shared index loader and resolvers
│   ├── brands/          # /api/brands and /api/brands/:brandId/design
│   ├── industries.js    # /api/industries
│   ├── search.js        # /api/search with industry, theme, and pagination
│   └── health.js        # Service health check
├── mcp-server/          # Standard Model Context Protocol (MCP) server (stdio)
│   ├── index.ts         # MCP Server implementation (@modelcontextprotocol/sdk)
│   ├── dist/            # Compiled ESM JavaScript executable
│   └── package.json
├── scripts/             # Ingestion, validation, and maintenance tools
│   ├── build-index.js   # Rebuild index.json with industry, media, and tokens
│   ├── test-api-local.js# Comprehensive local test suite for API endpoints
│   ├── fetch-design-mds.js
│   ├── convert-refero-to-design-md.js
│   └── validate-design-md.js
├── index.json           # Searchable index of all 1,304 style references
└── README.md
```

## REST API

Publicly deployed at `https://style-reference-skills.vercel.app`. All endpoints are optimized with Edge CDN caching (`s-maxage=86400, stale-while-revalidate=604800`).

| Endpoint | Method | Params / Query | Description |
|---|---|---|---|
| `/api/health` | `GET` | — | Health check and total brand count |
| `/api/industries` | `GET` | — | List all industry categories and counts |
| `/api/brands` | `GET` | `?fields=summary&industry=&theme=&limit=&page=` | List brands (supports lightweight `fields=summary`) |
| `/api/brands/:brandId` | `GET` | — | Get complete metadata for a specific brand |
| `/api/brands/:brandId/design` | `GET` | — | Load full raw `DESIGN.md` markdown content |
| `/api/search` | `GET` | `?q=&industry=&theme=&limit=&page=` | Search brands by keyword, industry, theme, or ID |

### REST Usage Examples

```bash
# 1. Search ecommerce brands with limit
curl "https://style-reference-skills.vercel.app/api/search?industry=ecommerce&limit=5"

# 2. Search fintech dark-mode brands
curl "https://style-reference-skills.vercel.app/api/search?q=fintech&theme=dark"

# 3. Explore available industry categories
curl "https://style-reference-skills.vercel.app/api/industries"

# 4. Load DESIGN.md specification
curl "https://style-reference-skills.vercel.app/api/brands/linear/design"
```

---

## Model Context Protocol (MCP) Server

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

1. **`search_styles`**:
   - Parameters:
     - `query` *(string, optional)*: Search keyword.
     - `industry` *(string, optional)*: Filter by industry (`ecommerce`, `fintech`, `saas`, `ai`, `devtools`, `design`, etc.).
     - `theme` *(string, optional)*: `light` or `dark`.
     - `limit` *(number, optional)*: Number of results (default: 10, max: 50).
2. **`get_brand_design`**:
   - Parameters:
     - `brand_id` *(string, required)*: Brand identifier (e.g. `stripe`, `linear`, `vercel`).
   - Returns: Complete markdown document containing color palettes, typography scales, spacing tokens, and component patterns.
3. **`list_industries`**:
   - Returns: All 11+ industry classifications and distribution counts across the 1,304 brands.

### MCP Resources

- `style://brands/{brand_id}`: Direct access to any brand's `DESIGN.md` as an MCP resource.

---

## Maintenance & Development Scripts

```bash
# Run local API test suite
node scripts/test-api-local.js

# Rebuild index.json from skills/*/DESIGN.md
node scripts/build-index.js

# Build MCP server TypeScript bundle
cd mcp-server && pnpm run build

# Validate DESIGN.md structure and index mappings
node scripts/validate-design-md.js

# Ingest new Refero snapshots
node scripts/fetch-design-mds.js --pages=2 --sort=trending
node scripts/convert-refero-to-design-md.js
```

## License

`DESIGN.md` files belong to their respective brands. This repository aggregates them solely for AI agent design guidance and token consumption.
