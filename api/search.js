// @ts-nocheck
// Vercel serverless function for search
const { loadIndex, normalizeBrandId } = require("./_lib/style-index");

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

module.exports = (req, res) => {
  try {
    const rawQuery = req.query.q;
    const query = rawQuery ? normalizeBrandId(rawQuery).toLowerCase().trim() : "";
    const filterIndustry = req.query.industry
      ? normalizeBrandId(req.query.industry).toLowerCase().trim()
      : "";
    const filterTheme = req.query.theme
      ? normalizeBrandId(req.query.theme).toLowerCase().trim()
      : "";

    if (!query && !filterIndustry && !filterTheme) {
      return res.status(400).json({
        error: 'At least one query parameter ("q", "industry", or "theme") is required',
      });
    }

    const index = loadIndex();

    let results = index.brands.filter((brand) => {
      const brandName = (brand.name || "").toLowerCase();
      const brandDesc = (brand.description || "").toLowerCase();
      const brandId = (brand.id || "").toLowerCase();
      const brandIndustry = (brand.industry || "").toLowerCase();
      const brandTheme = (brand.theme || "").toLowerCase();

      // Text match
      if (query) {
        const matchesText =
          brandName.includes(query) ||
          brandDesc.includes(query) ||
          brandId.includes(query) ||
          brandIndustry.includes(query);
        if (!matchesText) return false;
      }

      // Industry filter
      if (filterIndustry && brandIndustry !== filterIndustry) {
        return false;
      }

      // Theme filter
      if (filterTheme && brandTheme !== filterTheme) {
        return false;
      }

      return true;
    });

    res.setHeader("Cache-Control", CACHE_HEADER);

    // Support pagination if limit or page is explicitly provided
    if (req.query.limit || req.query.page) {
      const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 20, 1), 100);
      const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
      const start = (page - 1) * limit;
      const paginated = results.slice(start, start + limit);

      return res.json({
        total: results.length,
        page,
        limit,
        total_pages: Math.ceil(results.length / limit),
        results: paginated,
      });
    }

    // Backwards compatibility: return array directly if pagination not requested
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Failed to search brands" });
  }
};
