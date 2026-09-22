/**
 * Shared style index loader for Vercel API routes
 */
import * as fs from "fs";
import * as path from "path";
import type { BrandMetadata, IndexFile } from "./types.js";

function resolveExistingPath(candidates: string[]): string {
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }
  throw new Error(`File not found. Tried: ${candidates.join(", ")}`);
}

export function normalizeBrandId(rawBrandId: string | string[]): string {
  if (Array.isArray(rawBrandId)) {
    return rawBrandId[0];
  }
  return rawBrandId;
}

function getIndexPath(): string {
  return resolveExistingPath([
    path.join(process.cwd(), "index.json"),
    path.join(__dirname, "../../index.json"),
    path.join(__dirname, "../../../index.json"),
  ]);
}

function getDesignPath(brandId: string): string {
  const normalizedBrandId = normalizeBrandId(brandId);
  return resolveExistingPath([
    path.join(process.cwd(), "skills", normalizedBrandId, "DESIGN.md"),
    path.join(__dirname, "../../skills", normalizedBrandId, "DESIGN.md"),
    path.join(__dirname, "../../../skills", normalizedBrandId, "DESIGN.md"),
  ]);
}

// Module-level cache — Vercel reuses module scope across warm invocations
let _cachedIndex: IndexFile | null = null;

export function loadIndex(): IndexFile {
  if (_cachedIndex) return _cachedIndex;
  const indexPath = getIndexPath();
  const indexContent = fs.readFileSync(indexPath, "utf-8");
  const parsed = JSON.parse(indexContent) as IndexFile;
  if (!parsed || !Array.isArray(parsed.brands)) {
    throw new Error("Invalid index.json format");
  }
  _cachedIndex = parsed;
  return _cachedIndex;
}

export function getBrandById(index: IndexFile, brandId: string): BrandMetadata | undefined {
  const normalizedBrandId = normalizeBrandId(brandId);
  return index.brands.find((brand) => brand.id === normalizedBrandId);
}

export function loadDesignContent(brandId: string): string {
  const designPath = getDesignPath(brandId);
  return fs.readFileSync(designPath, "utf-8");
}
