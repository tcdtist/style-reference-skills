# Style Reference Skills

Curated DESIGN.md style references for AI agents to build consistent, brand-aligned UI.

## Overview

This repository aggregates design system references (`DESIGN.md`) from popular brands and products. AI agents consume these files to understand and replicate specific visual styles when generating user interfaces.

## Repository Structure

```text
style-reference-skills/
├── skills/              # DESIGN.md files organized by brand
│   ├── apple/
│   ├── linear/
│   ├── vercel/
│   └── ...
├── api/                 # Vercel serverless API routes
│   ├── brands/
│   ├── search.js
│   └── health.js
├── mcp-server/          # Standalone Express MCP server (TypeScript)
│   ├── index.ts
│   ├── tools/
│   └── package.json
├── scripts/             # Ingestion & maintenance scripts
│   ├── fetch-design-mds.js
│   ├── convert-refero-to-design-md.js
│   ├── build-index.js
│   ├── validate-design-md.js
│   └── test-workflow.js
├── index.json           # Searchable index of all style references
├── vercel.json          # Vercel deployment config
└── README.md
```

## API

Deployed at `https://style-reference-skills.vercel.app`.

```markdown
| Endpoint                          | Description                              |
| --------------------------------- | ---------------------------------------- |
| `GET /api/health`                 | Health check                             |
| `GET /api/brands`                 | List all available brands                |
| `GET /api/brands/:brandId`        | Get metadata for a brand                 |
| `GET /api/brands/:brandId/design` | Load full DESIGN.md content              |
| `GET /api/search?q=query`         | Search brands by name / description / ID |
```

```bash
curl https://style-reference-skills.vercel.app/api/brands
curl https://style-reference-skills.vercel.app/api/brands/vercel/design
curl https://style-reference-skills.vercel.app/api/search?q=linear
```

## Scripts

```bash
# Ingest Refero JSON snapshots (page 1, trending)
node scripts/fetch-design-mds.js

# Ingest with pagination / sorting
node scripts/fetch-design-mds.js --page=2 --sort=latest

# Convert Refero JSON snapshots to rich normalized skills/*/DESIGN.md
node scripts/convert-refero-to-design-md.js

# Iterate on one Refero-backed brand without writing files
node scripts/convert-refero-to-design-md.js --brand=cursor --dry-run

# Rebuild index.json from skills/*/DESIGN.md
node scripts/build-index.js

# Validate DESIGN.md structure and index mappings
node scripts/validate-design-md.js

# Test end-to-end workflow
node scripts/test-workflow.js --base-url=https://style-reference-skills.vercel.app
```

## Usage for AI Agents

Copy a brand's `DESIGN.md` into your project root. The agent reads it before generating UI to stay on-brand.

For Refero-derived entries, the `DESIGN.md` body is the authoritative style reference. Frontmatter is intentionally small and is used for discovery, provenance, and indexing fields such as `source_url`, `refero_style_id`, `screenshot_url`, `thumbnail_url`, and `extracted_at`.

## Sources

- [Refero](https://styles.refero.design) — Primary ingestion source (API JSON)
- [getdesign.md](https://getdesign.md) — Legacy source
- [designmd.app](https://designmd.app) — Optional manual reference

## License

`DESIGN.md` files belong to their respective brands. This repository aggregates them solely for AI agent consumption.

---

Maintained by Antigravity Toolkit.
