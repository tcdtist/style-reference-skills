// @ts-nocheck
// Vercel serverless function for health check
const { loadIndex } = require("./_lib/style-index");

module.exports = (req, res) => {
  try {
    const index = loadIndex();
    res.json({ status: "ok", brands: index.brands.length });
  } catch (err) {
    res.status(500).json({ error: "Failed to load health data" });
  }
};
