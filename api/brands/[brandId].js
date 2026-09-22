// @ts-nocheck
const {
  getBrandById,
  loadIndex,
  normalizeBrandId,
} = require("../_lib/style-index");

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

    res.setHeader("Cache-Control", CACHE_HEADER);
    res.json(brand);
  } catch (err) {
    res.status(500).json({ error: "Failed to load brand" });
  }
};
