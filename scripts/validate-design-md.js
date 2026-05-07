#!/usr/bin/env node
// @ts-nocheck

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");
const SKILLS_DIR = path.join(ROOT_DIR, "skills");
const INDEX_FILE = path.join(ROOT_DIR, "index.json");
const REQUIRED_PATTERNS = [
  /^#\s+.+Style Reference/m,
  /^## Tokens — Colors/m,
  /^## Tokens — Typography/m,
  /^## Components/m,
  /^## Do's and Don'ts/m,
  /^## Quick Start/m,
];

function fail(errors, message) {
  errors.push(message);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function validateDesignFile(brandDir, errors, stats) {
  const filePath = path.join(SKILLS_DIR, brandDir, "DESIGN.md");
  if (!fs.existsSync(filePath)) {
    fail(errors, `${brandDir}: missing DESIGN.md`);
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  stats.files += 1;

  const hasFrontmatter = /^---\n[\s\S]*?\n---/m.test(content);
  const isReferoRich = /^refero_style_id:/m.test(content);
  const hasBasicStructure = hasFrontmatter || /^#\s+/m.test(content);

  if (!hasBasicStructure) {
    fail(errors, `${brandDir}: missing both frontmatter and heading`);
  }

  if (!isReferoRich) {
    stats.legacyFiles += 1;
    return;
  }

  stats.richFiles += 1;

  for (const pattern of REQUIRED_PATTERNS) {
    if (!pattern.test(content)) {
      fail(errors, `${brandDir}: missing required pattern ${pattern}`);
    }
  }

  if (
    /\[object Object\]|:\s*undefined\b|\|\s*undefined\s*\||`undefined`/.test(
      content,
    )
  ) {
    fail(errors, `${brandDir}: contains unresolved generated value`);
  }

  if (/^\|\s*(?:\|\s*)+$/m.test(content)) {
    stats.emptyTableRows += 1;
  }
}

function validateIndex(errors) {
  if (!fs.existsSync(INDEX_FILE)) {
    fail(errors, "index.json missing");
    return;
  }

  const index = readJson(INDEX_FILE);
  const indexedPaths = new Set((index.brands || []).map((brand) => brand.path));
  for (const brand of index.brands || []) {
    if (!brand.id || !brand.name || !brand.path) {
      fail(errors, `index: incomplete brand metadata ${JSON.stringify(brand)}`);
      continue;
    }

    if (!fs.existsSync(path.join(ROOT_DIR, brand.path))) {
      fail(errors, `index: missing mapped file ${brand.path}`);
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
      fail(errors, `index: missing brand path ${relativePath}`);
    }
  }
}

function main() {
  const errors = [];
  const stats = { files: 0, richFiles: 0, legacyFiles: 0, emptyTableRows: 0 };
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
    console.log(
      `Warning: ${stats.emptyTableRows} files may contain empty table cells`,
    );
  }
}

main();
