import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  getBrandById,
  loadDesignContent,
  loadIndex,
  normalizeBrandId,
} from "../../_lib/style-index.js";
import { parseMarkdownTokens } from "../../_lib/token-parser.js";
import type { BrandTokensResponse } from "../../_lib/types.js";

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

type TokenFormat = "json" | "css" | "tailwind";

export default function handler(req: VercelRequest, res: VercelResponse): void {
  try {
    const brandId = normalizeBrandId(req.query.brandId as string | string[]);
    if (!brandId) {
      res.status(400).json({ error: 'Path parameter "brandId" is required' });
      return;
    }

    // Guard against path traversal
    if (brandId.includes("..") || brandId.includes("/")) {
      res.status(400).json({ error: "Invalid brand ID" });
      return;
    }

    const index = loadIndex();
    const brand = getBrandById(index, brandId);

    if (!brand) {
      res.status(404).json({ error: `Brand ${brandId} not found` });
      return;
    }

    const markdownContent = loadDesignContent(brandId);
    const tokens = parseMarkdownTokens(markdownContent);
    const format = (
      normalizeBrandId((req.query.format as string | string[]) || "json").toLowerCase()
    ) as TokenFormat;

    res.setHeader("Cache-Control", CACHE_HEADER);

    if (format === "css") {
      let css = `/* CSS Tokens for ${brand.name || brandId} (${brand.theme || "light"}) */\n`;
      css += `:root {\n`;
      for (const [varName, varVal] of Object.entries(tokens.css_variables)) {
        css += `  ${varName}: ${varVal};\n`;
      }
      css += `}\n`;
      res.setHeader("Content-Type", "text/css; charset=utf-8");
      res.status(200).send(css);
      return;
    }

    if (format === "tailwind") {
      res.json({
        colors: tokens.tailwind.colors,
        fontFamily: tokens.tailwind.fontFamily,
      });
      return;
    }

    // Default: structured JSON
    const response: BrandTokensResponse = {
      brand: brand.id,
      name: brand.name,
      theme: brand.theme,
      industry: brand.industry,
      source_url: brand.source_url,
      tokens,
    };
    res.json(response);
  } catch (err) {
    const message = err instanceof Error ? err.message : "";
    if (message.includes("File not found")) {
      res.status(404).json({ error: "DESIGN.md not found for this brand" });
      return;
    }
    res.status(500).json({ error: "Failed to extract tokens" });
  }
}
