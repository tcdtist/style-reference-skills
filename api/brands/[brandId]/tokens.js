// @ts-nocheck
const {
  getBrandById,
  loadDesignContent,
  loadIndex,
  normalizeBrandId,
} = require("../../_lib/style-index");
const { parseMarkdownTokens } = require("../../_lib/token-parser");

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

module.exports = (req, res) => {
  try {
    const brandId = normalizeBrandId(req.query.brandId);
    if (!brandId) {
      return res
        .status(400)
        .json({ error: 'Path parameter "brandId" is required' });
    }

    const index = loadIndex();
    const brand = getBrandById(index, brandId);

    if (!brand) {
      return res.status(404).json({ error: `Brand ${brandId} not found` });
    }

    const markdownContent = loadDesignContent(brandId);
    const tokens = parseMarkdownTokens(markdownContent);
    const format = normalizeBrandId(req.query.format || "json").toLowerCase();

    res.setHeader("Cache-Control", CACHE_HEADER);

    if (format === "css") {
      let css = `/* CSS Tokens for ${brand.name || brandId} (${brand.theme || "light"}) */\n`;
      css += `:root {\n`;
      for (const [varName, varVal] of Object.entries(tokens.css_variables)) {
        css += `  ${varName}: ${varVal};\n`;
      }
      css += `}\n`;
      res.setHeader("Content-Type", "text/css; charset=utf-8");
      return res.status(200).send(css);
    }

    if (format === "tailwind") {
      return res.json({
        colors: tokens.tailwind.colors,
        fontFamily: tokens.tailwind.fontFamily,
      });
    }

    // Default: structured json
    res.json({
      brand: brand.id,
      name: brand.name,
      theme: brand.theme,
      industry: brand.industry,
      source_url: brand.source_url,
      tokens,
    });
  } catch (err) {
    if (err && err.message && err.message.includes("File not found")) {
      return res
        .status(404)
        .json({ error: "DESIGN.md not found for this brand" });
    }
    res.status(500).json({ error: "Failed to extract tokens" });
  }
};
