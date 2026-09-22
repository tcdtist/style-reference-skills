// @ts-nocheck
// Vercel serverless function for API root — lists available endpoints
module.exports = (req, res) => {
  res.json({
    name: "style-reference-skills",
    version: "1.1.0",
    endpoints: {
      health: "/api/health",
      search: "/api/search?q=&industry=&theme=&limit=&page=",
      brands: "/api/brands?fields=summary&industry=&theme=&limit=&page=",
      brand_detail: "/api/brands/:brandId",
      brand_design: "/api/brands/:brandId/design",
      brand_tokens: "/api/brands/:brandId/tokens?format=json|css|tailwind",
      industries: "/api/industries",
    },
    docs: "https://github.com/tcdtist/style-reference-skills",
  });
};
