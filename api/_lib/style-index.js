// @ts-nocheck
const fs = require("fs");
const path = require("path");

function resolveExistingPath(candidates) {
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  throw new Error(`File not found. Tried: ${candidates.join(", ")}`);
}

function normalizeBrandId(rawBrandId) {
  if (Array.isArray(rawBrandId)) {
    return rawBrandId[0];
  }

  return rawBrandId;
}

function getIndexPath() {
  return resolveExistingPath([
    path.join(process.cwd(), "index.json"),
    path.join(__dirname, "../../index.json"),
    path.join(__dirname, "../../../index.json"),
  ]);
}

function getDesignPath(brandId) {
  const normalizedBrandId = normalizeBrandId(brandId);

  return resolveExistingPath([
    path.join(process.cwd(), "skills", normalizedBrandId, "DESIGN.md"),
    path.join(__dirname, "../../skills", normalizedBrandId, "DESIGN.md"),
    path.join(__dirname, "../../../skills", normalizedBrandId, "DESIGN.md"),
  ]);
}

function loadIndex() {
  const indexPath = getIndexPath();
  const indexContent = fs.readFileSync(indexPath, "utf-8");
  const parsed = JSON.parse(indexContent);

  if (!parsed || !Array.isArray(parsed.brands)) {
    throw new Error("Invalid index.json format");
  }

  return parsed;
}

function getBrandById(index, brandId) {
  const normalizedBrandId = normalizeBrandId(brandId);

  return index.brands.find((brand) => brand.id === normalizedBrandId);
}

function loadDesignContent(brandId) {
  const designPath = getDesignPath(brandId);
  return fs.readFileSync(designPath, "utf-8");
}

module.exports = {
  getBrandById,
  loadDesignContent,
  loadIndex,
  normalizeBrandId,
};
