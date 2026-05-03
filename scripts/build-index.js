#!/usr/bin/env node
// @ts-nocheck

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
function splitFrontmatter(content) {
  if (!content.startsWith("---\n")) {
    return { frontmatter: "", body: content };
  }

  const endIndex = content.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return { frontmatter: "", body: content };
  }

  return {
    frontmatter: content.slice(4, endIndex),
    body: content.slice(endIndex + 5),
  };
}

function stripQuotes(value) {
  return value.replace(/^['"]|['"]$/g, "").trim();
}

function normalizeDescription(value) {
  if (!value) {
    return "";
  }

  return value.replace(/\s+/g, " ").replace(/\|/g, "").trim();
}

function parseFrontmatter(frontmatter) {
  const metadata = {};
  const lines = frontmatter.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (!kv) {
      continue;
    }

    const key = kv[1];
    const value = kv[2].trim();

    if (value === "|") {
      const blockLines = [];
      for (let j = i + 1; j < lines.length; j += 1) {
        const blockLine = lines[j];

        if (/^[A-Za-z0-9_-]+:\s*/.test(blockLine) && !/^\s+/.test(blockLine)) {
          break;
        }

        if (/^\s+/.test(blockLine)) {
          blockLines.push(blockLine.trim());
          i = j;
        } else if (blockLine.trim() === "") {
          blockLines.push("");
          i = j;
        }
      }

      metadata[key] = blockLines.join(" ").trim();
      continue;
    }

    metadata[key] = stripQuotes(value);
  }

  return metadata;
}

function extractNameFromBody(body, fallbackName) {
  const headingMatch = body.match(/^#\s+(.+)$/m);
  if (!headingMatch) {
    return fallbackName;
  }

  return headingMatch[1]
    .replace(/^Design System Inspired by\s+/i, "")
    .replace(/^Design System\s+/i, "")
    .trim();
}

function extractDescriptionFromBody(body) {
  const overviewSection = body.match(
    /^##\s+Overview\s*\n([\s\S]*?)(\n##\s+|$)/m,
  );
  if (!overviewSection) {
    return "";
  }

  const firstParagraph = overviewSection[1]
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)[0];

  return normalizeDescription(firstParagraph || "");
}

function extractMetadata(brandDir) {
  const designMdPath = path.join(SKILLS_DIR, brandDir, "DESIGN.md");

  if (!fs.existsSync(designMdPath)) {
    return null;
  }

  const content = fs.readFileSync(designMdPath, "utf-8");
  const { frontmatter, body } = splitFrontmatter(content);
  const metadata = parseFrontmatter(frontmatter);

  const name = metadata.name || extractNameFromBody(body, brandDir);
  const description = normalizeDescription(metadata.description || "");
  const fallbackDescription = extractDescriptionFromBody(body);

  return {
    id: brandDir,
    name,
    description: description || fallbackDescription,
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
    .map((dirent) => dirent.name)
    .sort((a, b) => a.localeCompare(b));

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
