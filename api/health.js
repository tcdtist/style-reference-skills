// Vercel serverless function for health check
module.exports = (req, res) => {
  res.json({ status: 'ok', brands: 43 });
};
