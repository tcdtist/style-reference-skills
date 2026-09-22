#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveExistingPath(candidates: string[]): string {
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Unable to resolve file path from: ${candidates.join(", ")}`);
}

const SKILLS_DIR = resolveExistingPath([
  path.join(process.cwd(), "skills"),
  path.join(__dirname, "../skills"),
  path.join(__dirname, "../../skills"),
]);

const INDEX_FILE = resolveExistingPath([
  path.join(process.cwd(), "index.json"),
  path.join(__dirname, "../index.json"),
  path.join(__dirname, "../../index.json"),
]);

interface BrandMetadata {
  id: string;
  name: string;
  description: string;
  theme?: string;
  industry?: string;
  source_url?: string;
  screenshot_url?: string;
  thumbnail_url?: string;
  refero_style_id?: string;
  extracted_at?: string;
  path: string;
}

interface IndexFile {
  version: string;
  brands: BrandMetadata[];
}

function loadIndex(): IndexFile {
  try {
    const content = fs.readFileSync(INDEX_FILE, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error("Failed to load index.json:", err);
    return { version: "1.0.0", brands: [] };
  }
}

function parseMarkdownTokens(content: string) {
  const tokens = {
    colors: [] as any[],
    typography: [] as any[],
    spacing: [] as any[],
    css_variables: {} as Record<string, string>,
    tailwind: { colors: {} as Record<string, string>, fontFamily: {} as Record<string, string[]> },
  };

  if (!content) return tokens;

  // 1. Colors Table: | Name | Value | Token | Role |
  const colorTableMatch = content.match(
    /## Tokens — Colors\s*\n\s*\|[^\n]+\|\s*\n\s*\|[^\n]+\|\s*\n((?:\|[^\n]+\|\s*\n?)+)/
  );
  if (colorTableMatch) {
    const rows = colorTableMatch[1].trim().split("\n");
    for (const row of rows) {
      const cells = row.split("|").slice(1, -1).map((c) => c.trim());
      if (cells.length >= 3) {
        const name = cells[0];
        const val = cells[1];
        const tok = cells[2].replace(/`/g, "").trim();
        const role = cells[3] || "";
        const cleanName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

        tokens.colors.push({ name, value: val, token: tok, role });
        if (tok.startsWith("--")) {
          tokens.css_variables[tok] = val;
          tokens.tailwind.colors[cleanName] = `var(${tok}, ${val})`;
        }
      }
    }
  }

  // 2. Typography
  const fontRegex = /###\s+([^\n]+)\s*\n[\s\S]*?- \*\*Token:\*\*\s*`?([^\n`]+)`?[\s\S]*?- \*\*Weights:\*\*\s*([^\n]+)/g;
  let fontMatch;
  while ((fontMatch = fontRegex.exec(content)) !== null) {
    const fontName = fontMatch[1].trim();
    const tok = fontMatch[2].trim();
    const weights = fontMatch[3].split(",").map((w) => w.trim()).filter(Boolean);

    tokens.typography.push({ font_family: fontName, token: tok, weights });
    if (tok.startsWith("--")) {
      tokens.css_variables[tok] = `"${fontName}", sans-serif`;
      const slug = fontName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      tokens.tailwind.fontFamily[slug] = [`var(${tok})`, fontName, "sans-serif"];
    }
  }

  // 3. Spacing Scale
  const spacingMatch = content.match(/### Spacing Scale\s*\n\s*\|[^\n]+\|\s*\n\s*\|[^\n]+\|\s*\n((?:\|[^\n]+\|\s*\n?)+)/);
  if (spacingMatch) {
    const rows = spacingMatch[1].trim().split("\n");
    for (const row of rows) {
      const cells = row.split("|").slice(1, -1).map((c) => c.trim());
      if (cells.length >= 3) {
        const name = cells[0];
        const val = cells[1];
        const tok = cells[2].replace(/`/g, "").trim();
        tokens.spacing.push({ name, value: val, token: tok });
        if (tok.startsWith("--")) {
          tokens.css_variables[tok] = val;
        }
      }
    }
  }

  return tokens;
}

// Create MCP Server instance
const server = new McpServer({
  name: "style-reference-skills",
  version: "1.1.0",
});

// Tool 1: search_styles
server.tool(
  "search_styles",
  "Search through 1304 curated brand design systems by keyword, industry, or theme. Returns matched brands with metadata, tokens summary, and preview URLs.",
  {
    query: z
      .string()
      .optional()
      .describe(
        "Search keyword matched against brand name, description, and industry"
      ),
    industry: z
      .string()
      .optional()
      .describe(
        "Filter by industry category (e.g. ecommerce, fintech, saas, ai, devtools, design, agency)"
      ),
    theme: z
      .enum(["light", "dark"])
      .optional()
      .describe("Filter by visual theme (light or dark)"),
    limit: z
      .number()
      .optional()
      .default(10)
      .describe("Maximum number of brand styles to return (default: 10, max: 50)"),
  },
  async ({ query, industry, theme, limit = 10 }) => {
    const index = loadIndex();
    const q = query ? query.toLowerCase().trim() : "";
    const filterInd = industry ? industry.toLowerCase().trim() : "";
    const filterTheme = theme ? theme.toLowerCase().trim() : "";

    const matched = index.brands.filter((brand) => {
      const name = (brand.name || "").toLowerCase();
      const desc = (brand.description || "").toLowerCase();
      const id = (brand.id || "").toLowerCase();
      const ind = (brand.industry || "").toLowerCase();
      const th = (brand.theme || "").toLowerCase();

      if (q) {
        const matchesText =
          name.includes(q) || desc.includes(q) || id.includes(q) || ind.includes(q);
        if (!matchesText) return false;
      }

      if (filterInd && ind !== filterInd) return false;
      if (filterTheme && th !== filterTheme) return false;

      return true;
    });

    const cappedLimit = Math.min(Math.max(limit, 1), 50);
    const results = matched.slice(0, cappedLimit);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              total_matched: matched.length,
              returned_count: results.length,
              brands: results,
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

// Tool 2: get_brand_design
server.tool(
  "get_brand_design",
  "Retrieve the complete DESIGN.md specification (color tokens, typography, spacing, radius, component patterns, dos and don'ts) for a specific brand.",
  {
    brand_id: z
      .string()
      .describe("The unique brand slug/id (e.g. 'linear', 'apple', 'stripe', 'vercel', 'airbnb')"),
  },
  async ({ brand_id }) => {
    const cleanId = brand_id.toLowerCase().trim();
    const designMdPath = path.join(SKILLS_DIR, cleanId, "DESIGN.md");

    if (!fs.existsSync(designMdPath)) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Brand design '${cleanId}' not found. Please verify the brand_id using the 'search_styles' tool.`,
          },
        ],
      };
    }

    const content = fs.readFileSync(designMdPath, "utf-8");
    return {
      content: [
        {
          type: "text",
          text: content,
        },
      ],
    };
  }
);

// Tool 3: get_brand_tokens (Machine-readable)
server.tool(
  "get_brand_tokens",
  "Extract structured design tokens (colors, typography, spacing, CSS variables, Tailwind theme snippet) for a brand directly as machine-readable JSON or CSS string.",
  {
    brand_id: z
      .string()
      .describe("The unique brand identifier (e.g. 'linear', 'stripe', 'apple')"),
    format: z
      .enum(["json", "css", "tailwind"])
      .optional()
      .default("json")
      .describe("Output format: 'json', 'css', or 'tailwind'"),
  },
  async ({ brand_id, format = "json" }) => {
    const cleanId = brand_id.toLowerCase().trim();
    const designMdPath = path.join(SKILLS_DIR, cleanId, "DESIGN.md");

    if (!fs.existsSync(designMdPath)) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Brand design '${cleanId}' not found.`,
          },
        ],
      };
    }

    const content = fs.readFileSync(designMdPath, "utf-8");
    const tokens = parseMarkdownTokens(content);
    const index = loadIndex();
    const brand: BrandMetadata = index.brands.find((b) => b.id === cleanId) || {
      id: cleanId,
      name: cleanId,
      description: "",
      theme: "light",
      industry: "other",
      path: "",
    };

    if (format === "css") {
      let css = `/* CSS Tokens for ${brand.name} (${brand.theme || "light"}) */\n:root {\n`;
      for (const [k, v] of Object.entries(tokens.css_variables)) {
        css += `  ${k}: ${v};\n`;
      }
      css += `}\n`;
      return { content: [{ type: "text", text: css }] };
    }

    if (format === "tailwind") {
      const snippet = {
        colors: tokens.tailwind.colors,
        fontFamily: tokens.tailwind.fontFamily,
      };
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(snippet, null, 2),
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              brand: brand.id,
              name: brand.name,
              theme: brand.theme,
              industry: brand.industry,
              tokens,
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

// Tool 4: list_industries
server.tool(
  "list_industries",
  "List all available design system industries with brand counts across the 1304 indexed brands.",
  {},
  async () => {
    const index = loadIndex();
    const industriesMap: Record<string, number> = {};

    for (const brand of index.brands) {
      const ind = (brand.industry || "other").toLowerCase().trim();
      industriesMap[ind] = (industriesMap[ind] || 0) + 1;
    }

    const sorted = Object.entries(industriesMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              total_brands: index.brands.length,
              total_industries: sorted.length,
              industries: sorted,
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

// Resource: style://brands/{brand_id}
server.resource(
  "brand-design",
  new ResourceTemplate("style://brands/{brand_id}", { list: undefined }),
  async (uri, variables) => {
    const brand_id = variables.brand_id;
    const cleanId = String(brand_id).toLowerCase().trim();
    const designMdPath = path.join(SKILLS_DIR, cleanId, "DESIGN.md");

    if (!fs.existsSync(designMdPath)) {
      throw new Error(`DESIGN.md not found for brand: ${cleanId}`);
    }

    const content = fs.readFileSync(designMdPath, "utf-8");
    return {
      contents: [
        {
          uri: uri.href,
          text: content,
          mimeType: "text/markdown",
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Style Reference MCP Server connected via stdio transport");
}

main().catch((err) => {
  console.error("Fatal error running MCP server:", err);
  process.exit(1);
});
