// Vercel serverless function for brands list
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const indexPath = path.join(__dirname, '../index.json');
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const index = JSON.parse(indexContent);
    res.json(index.brands);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load brands' });
  }
};
