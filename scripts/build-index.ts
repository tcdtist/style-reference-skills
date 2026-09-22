#!/usr/bin/env node
/**
 * Build index.json from skills directory
 * Reads all DESIGN.md files and extracts frontmatter metadata
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILLS_DIR = path.join(__dirname, "../skills");
const INDEX_FILE = path.join(__dirname, "../index.json");

interface BrandMetadata {
  id: string;
  name: string;
  description: string;
  theme: string;
  industry: string;
  source_url: string;
  screenshot_url: string;
  thumbnail_url: string;
  refero_style_id: string;
  extracted_at: string;
  path: string;
}

function splitFrontmatter(content: string): { frontmatter: string; body: string } {
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

function stripQuotes(value: string): string {
  return value.replace(/^['"]|['"]$/g, "").trim();
}

function normalizeDescription(value: string): string {
  if (!value) return "";
  return value.replace(/\s+/g, " ").replace(/\|/g, "").trim();
}

function parseFrontmatter(frontmatter: string): Record<string, string> {
  const metadata: Record<string, string> = {};
  const lines = frontmatter.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;

    const key = kv[1];
    const value = kv[2].trim();

    if (value === "|") {
      const blockLines: string[] = [];
      for (let j = i + 1; j < lines.length; j++) {
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

function extractNameFromBody(body: string, fallbackName: string): string {
  const headingMatch = body.match(/^#\s+(.+)$/m);
  if (!headingMatch) return fallbackName;
  return headingMatch[1]
    .replace(/^Design System Inspired by\s+/i, "")
    .replace(/^Design System\s+/i, "")
    .trim();
}

function extractDescriptionFromBody(body: string): string {
  const overviewSection = body.match(
    /^##\s+Overview\s*\n([\s\S]*?)(\n##\s+|$)/m
  );
  if (!overviewSection) return "";
  const firstParagraph = overviewSection[1]
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)[0];
  return normalizeDescription(firstParagraph || "");
}

function extractMetadata(brandDir: string): BrandMetadata | null {
  const designMdPath = path.join(SKILLS_DIR, brandDir, "DESIGN.md");
  if (!fs.existsSync(designMdPath)) return null;

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
    industry: (metadata.industry || "").toLowerCase().trim(),
    source_url: metadata.source_url || "",
    screenshot_url: metadata.screenshot_url || "",
    thumbnail_url: metadata.thumbnail_url || "",
    refero_style_id: metadata.refero_style_id || "",
    extracted_at: metadata.extracted_at || "",
    path: `skills/${brandDir}/DESIGN.md`,
  };
}

function main(): void {
  const brands = fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort((a, b) => a.localeCompare(b));

  const index: { version: string; brands: BrandMetadata[] } = {
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
