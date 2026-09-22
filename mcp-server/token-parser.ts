/**
 * Shared token parser for DESIGN.md files (ESM version)
 * Canonical source: api/_lib/token-parser.js (CJS)
 * This ESM copy exists because mcp-server uses "type": "module"
 */

export interface ColorToken {
  name: string;
  value: string;
  token: string;
  role: string;
}

export interface TypographyToken {
  font_family: string;
  token: string;
  weights: string[];
}

export interface SpacingToken {
  name: string;
  value: string;
  token: string;
}

export interface ParsedTokens {
  colors: ColorToken[];
  typography: TypographyToken[];
  spacing: SpacingToken[];
  css_variables: Record<string, string>;
  tailwind: {
    colors: Record<string, string>;
    fontFamily: Record<string, string[]>;
  };
}

export function parseMarkdownTokens(content: string): ParsedTokens {
  const tokens: ParsedTokens = {
    colors: [],
    typography: [],
    spacing: [],
    css_variables: {},
    tailwind: { colors: {}, fontFamily: {} },
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
