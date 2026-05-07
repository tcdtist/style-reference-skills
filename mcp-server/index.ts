#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Log API requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

function resolveExistingPath(candidates: string[]): string {
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Unable to resolve file path from: ${candidates.join(", ")}`);
}

const SKILLS_DIR = resolveExistingPath([
  path.join(process.cwd(), "skills"),
  path.join(__dirname, "../skills"),
  path.join(__dirname, "../../skills"),
]);

const INDEX_FILE = resolveExistingPath([
  path.join(process.cwd(), "index.json"),
  path.join(__dirname, "../index.json"),
  path.join(__dirname, "../../index.json"),
]);

// Load index
let index: any = { brands: [] };
try {
  const indexContent = fs.readFileSync(INDEX_FILE, "utf-8");
  index = JSON.parse(indexContent);
} catch (err) {
  console.error("Failed to load index.json:", err);
}

// HTTP API endpoints
app.get("/api/brands", (req, res) => {
  res.json(index.brands);
});

app.get("/api/brands/:brandId", (req, res) => {
  const brandId = req.params.brandId;
  const brand = index.brands.find((b: any) => b.id === brandId);

  if (!brand) {
    return res.status(404).json({ error: `Brand ${brandId} not found` });
  }

  res.json(brand);
});

app.get("/api/brands/:brandId/design", (req, res) => {
  const brandId = req.params.brandId;
  const designMdPath = path.join(SKILLS_DIR, brandId, "DESIGN.md");

  if (!fs.existsSync(designMdPath)) {
    return res
      .status(404)
      .json({ error: `DESIGN.md not found for ${brandId}` });
  }

  const content = fs.readFileSync(designMdPath, "utf-8");
  res.type("text/markdown").send(content);
});

app.get("/api/search", (req, res) => {
  const query = req.query.q as string;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  const lowerQuery = query.toLowerCase();
  const results = index.brands.filter((brand: any) => {
    return (
      brand.name.toLowerCase().includes(lowerQuery) ||
      brand.description.toLowerCase().includes(lowerQuery) ||
      brand.id.toLowerCase().includes(lowerQuery)
    );
  });

  res.json(results);
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", brands: index.brands.length });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", brands: index.brands.length });
});

// Start server
const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.error(`Style Reference API server running on port ${PORT}`);
  });
}

export default app;
