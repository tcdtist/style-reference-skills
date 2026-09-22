#!/usr/bin/env node
/**
 * Validate DESIGN.md files and index.json consistency
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, "..");
const SKILLS_DIR = path.join(ROOT_DIR, "skills");
const INDEX_FILE = path.join(ROOT_DIR, "index.json");

const REQUIRED_PATTERNS: RegExp[] = [
  /^#\s+.+Style Reference/m,
  /^## Tokens — Colors/m,
  /^## Tokens — Typography/m,
  /^## Components/m,
  /^## Do's and Don'ts/m,
  /^## Quick Start/m,
];

interface ValidationStats {
  files: number;
  richFiles: number;
  legacyFiles: number;
  emptyTableRows: number;
}

interface IndexBrand {
  id: string;
  name: string;
  path: string;
  [key: string]: unknown;
}

interface IndexFile {
  brands: IndexBrand[];
}

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

function validateDesignFile(
  brandDir: string,
  errors: string[],
  stats: ValidationStats
): void {
  const filePath = path.join(SKILLS_DIR, brandDir, "DESIGN.md");
  if (!fs.existsSync(filePath)) {
    errors.push(`${brandDir}: missing DESIGN.md`);
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  stats.files += 1;

  const hasFrontmatter = /^---\n[\s\S]*?\n---/m.test(content);
  const isReferoRich = /^refero_style_id:/m.test(content);
  const hasBasicStructure = hasFrontmatter || /^#\s+/m.test(content);

  if (!hasBasicStructure) {
    errors.push(`${brandDir}: missing both frontmatter and heading`);
  }

  if (!isReferoRich) {
    stats.legacyFiles += 1;
    return;
  }

  stats.richFiles += 1;

  for (const pattern of REQUIRED_PATTERNS) {
    if (!pattern.test(content)) {
      errors.push(`${brandDir}: missing required pattern ${pattern}`);
    }
  }

  if (/\[object Object\]|:\s*undefined\b|\|\s*undefined\s*\||`undefined`/.test(content)) {
    errors.push(`${brandDir}: contains unresolved generated value`);
  }

  if (/^\|\s*(?:\|\s*)+$/m.test(content)) {
    stats.emptyTableRows += 1;
  }
}

function validateIndex(errors: string[]): void {
  if (!fs.existsSync(INDEX_FILE)) {
    errors.push("index.json missing");
    return;
  }

  const index = readJson<IndexFile>(INDEX_FILE);
  const indexedPaths = new Set((index.brands || []).map((brand) => brand.path));

  for (const brand of index.brands || []) {
    if (!brand.id || !brand.name || !brand.path) {
      errors.push(`index: incomplete brand metadata ${JSON.stringify(brand)}`);
      continue;
    }
    if (!fs.existsSync(path.join(ROOT_DIR, brand.path))) {
      errors.push(`index: missing mapped file ${brand.path}`);
    }
  }

  const skillDirs = fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const brandDir of skillDirs) {
    const relativePath = `skills/${brandDir}/DESIGN.md`;
    if (
      fs.existsSync(path.join(ROOT_DIR, relativePath)) &&
      !indexedPaths.has(relativePath)
    ) {
      errors.push(`index: missing brand path ${relativePath}`);
    }
  }
}

function main(): void {
  const errors: string[] = [];
  const stats: ValidationStats = {
    files: 0,
    richFiles: 0,
    legacyFiles: 0,
    emptyTableRows: 0,
  };

  const brandDirs = fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort((a, b) => a.localeCompare(b));

  for (const brandDir of brandDirs) {
    validateDesignFile(brandDir, errors, stats);
  }

  validateIndex(errors);

  if (errors.length) {
    console.error(`Validation failed: ${errors.length} errors`);
    for (const error of errors.slice(0, 100)) {
      console.error(`- ${error}`);
    }
    if (errors.length > 100) {
      console.error(`...and ${errors.length - 100} more`);
    }
    process.exit(1);
  }

  console.log(`Validation passed: ${stats.files} DESIGN.md files checked`);
  console.log(`Rich Refero files: ${stats.richFiles}`);
  console.log(`Legacy/basic files: ${stats.legacyFiles}`);
  if (stats.emptyTableRows) {
    console.log(`Warning: ${stats.emptyTableRows} files may contain empty table cells`);
  }
}

main();
