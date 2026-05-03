// @ts-nocheck
// Vercel serverless function for brands list
const { loadIndex } = require("./_lib/style-index");

module.exports = (req, res) => {
  try {
    const index = loadIndex();
    res.json(index.brands);
  } catch (err) {
    res.status(500).json({ error: "Failed to load brands" });
  }
};
