#!/usr/bin/env node

/**
 * Build index.json from skills directory
 */

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = path.join(__dirname, "../skills");
const INDEX_FILE = path.join(__dirname, "../index.json");

/**
 * Extract metadata from DESIGN.md
 */
function extractMetadata(brandDir) {
  const designMdPath = path.join(SKILLS_DIR, brandDir, "DESIGN.md");

  if (!fs.existsSync(designMdPath)) {
    return null;
  }

  const content = fs.readFileSync(designMdPath, "utf-8");

  // Extract from YAML frontmatter
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!yamlMatch) {
    console.log(`  No YAML frontmatter found for ${brandDir}`);
    return null;
  }

  const yaml = yamlMatch[1];
  const metadata = {};

  // Parse YAML manually (simple key-value pairs)
  const lines = yaml.split("\n");
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      metadata[match[1]] = match[2].trim();
    }
  }

  // Debug
  console.log(
    `  Metadata for ${brandDir}:`,
    JSON.stringify(metadata).substring(0, 100),
  );

  return {
    id: brandDir,
    name: metadata.name || brandDir,
    description: metadata.description || "",
    theme: metadata.theme || "",
    path: `skills/${brandDir}/DESIGN.md`,
  };
}

/**
 * Main
 */
function main() {
  const brands = fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const index = {
    version: "1.0.0",
    brands: [],
  };

  for (const brand of brands) {
    const metadata = extractMetadata(brand);
    if (metadata) {
      index.brands.push(metadata);
      console.log(`✓ ${brand}: ${metadata.name}`);
    } else {
      console.log(`✗ ${brand}: no metadata`);
    }
  }

  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
  console.log(`\nIndex built: ${index.brands.length} brands`);
  console.log(`Saved to: ${INDEX_FILE}`);
}

main();
