// @ts-nocheck
// Vercel serverless function for search
const { loadIndex, normalizeBrandId } = require("./_lib/style-index");

module.exports = (req, res) => {
  try {
    const query = normalizeBrandId(req.query.q);
    if (!query) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    const index = loadIndex();
    const lowerQuery = query.toLowerCase();

    const results = index.brands.filter((brand) => {
      return (
        brand.name.toLowerCase().includes(lowerQuery) ||
        brand.description.toLowerCase().includes(lowerQuery) ||
        brand.id.toLowerCase().includes(lowerQuery)
      );
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Failed to search brands" });
  }
};
