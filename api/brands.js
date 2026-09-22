// @ts-nocheck
// Vercel serverless function for brands list
const { loadIndex, normalizeBrandId } = require("./_lib/style-index");

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

module.exports = (req, res) => {
  try {
    const index = loadIndex();
    const filterIndustry = req.query.industry
      ? normalizeBrandId(req.query.industry).toLowerCase().trim()
      : "";
    const filterTheme = req.query.theme
      ? normalizeBrandId(req.query.theme).toLowerCase().trim()
      : "";
    const fields = req.query.fields
      ? normalizeBrandId(req.query.fields).toLowerCase().trim()
      : "";

    let brands = index.brands;

    if (filterIndustry) {
      brands = brands.filter(
        (b) => (b.industry || "").toLowerCase() === filterIndustry
      );
    }

    if (filterTheme) {
      brands = brands.filter(
        (b) => (b.theme || "").toLowerCase() === filterTheme
      );
    }

    if (fields === "summary") {
      brands = brands.map((b) => ({
        id: b.id,
        name: b.name,
        theme: b.theme,
        industry: b.industry,
        thumbnail_url: b.thumbnail_url,
        path: b.path,
      }));
    }

    res.setHeader("Cache-Control", CACHE_HEADER);

    if (req.query.limit || req.query.page) {
      const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 50, 1), 200);
      const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
      const start = (page - 1) * limit;
      const paginated = brands.slice(start, start + limit);

      return res.json({
        total: brands.length,
        page,
        limit,
        total_pages: Math.ceil(brands.length / limit),
        results: paginated,
      });
    }

    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: "Failed to load brands" });
  }
};
