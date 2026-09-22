// @ts-nocheck
// Vercel serverless function for listing industries
const { loadIndex } = require("./_lib/style-index");

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

module.exports = (req, res) => {
  try {
    const index = loadIndex();
    const industriesMap = {};

    for (const brand of index.brands) {
      const ind = (brand.industry || "other").toLowerCase().trim();
      industriesMap[ind] = (industriesMap[ind] || 0) + 1;
    }

    const sortedIndustries = Object.entries(industriesMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    res.setHeader("Cache-Control", CACHE_HEADER);
    res.json({
      total_brands: index.brands.length,
      total_industries: sortedIndustries.length,
      industries: sortedIndustries,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load industries" });
  }
};
