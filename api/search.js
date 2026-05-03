// Vercel serverless function for search
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    const indexPath = path.join(__dirname, '../index.json');
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const index = JSON.parse(indexContent);

    const lowerQuery = query.toLowerCase();
    const results = index.brands.filter(brand => {
      return (
        brand.name.toLowerCase().includes(lowerQuery) ||
        brand.description.toLowerCase().includes(lowerQuery) ||
        brand.id.toLowerCase().includes(lowerQuery)
      );
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search brands' });
  }
};
