#!/usr/bin/env node
/**
 * Convert Refero JSON snapshots to skills/<brand>/DESIGN.md
 */
const fs = require("fs");
const path = require("path");

const REFERO_DIR = path.join(__dirname, "../tmp/refero");
const SKILLS_DIR = path.join(__dirname, "../skills");

/**
 * @param {string | unknown} v
 * @returns {string}
 */
function slugify(v) {
  return String(v || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * @param {any} json
 * @returns {{
 *   name: string, url: string, desc: string, northStar: string,
 *   industry: string, theme: string, dos: string[], donts: string[],
 *   colors: any[], typeScale: any[], components: any[],
 *   spacing: Record<string, any>, layout: string, imagery: string, elevation: string
 * }}
 */
function extractData(json) {
  const s = json.style || {};
  const ds = s.fullResult?.designSystem || {};
  return {
    name: s.siteName || "Unknown",
    url: s.url || "",
    desc: ds.description || "",
    northStar: ds.northStar || s.northStar || "",
    industry: s.industry || "",
    theme: s.colorScheme || "light",
    dos: ds.dos || [],
    donts: ds.donts || [],
    colors: ds.colors || [],
    typeScale: ds.typeScale || [],
    components: ds.components || [],
    spacing: ds.spacing || {},
    layout: ds.layout || "",
    imagery: ds.imagery || "",
    elevation: ds.elevationPhilosophy || "",
  };
}

/**
 * @param {ReturnType<typeof extractData>} data
 * @returns {string}
 */
function buildFrontmatter(data) {
  const parts = [
    `---`,
    `version: alpha`,
    `name: ${data.name}`,
    `description: ${(data.desc || data.northStar || "").replace(/\n/g, " ")}`,
  ];

  // Colors
  if (data.colors.length) {
    parts.push(`colors:`);
    data.colors.slice(0, 20).forEach((c) => {
      parts.push(`  ${slugify(c.name || c.role || "color")}: "${c.hex}"`);
    });
  }

  // Typography
  if (data.typeScale.length) {
    parts.push(`typography:`);
    data.typeScale.slice(0, 10).forEach((ts) => {
      const role = slugify(ts.role || "text");
      parts.push(
        `  ${role}:`,
        `    fontFamily: "${ts.fontFamily || "system-ui"}"`,
        `    fontSize: ${ts.size || 16}px`,
      );
      if (ts.weight) parts.push(`    fontWeight: ${ts.weight}`);
      if (ts.lineHeight) parts.push(`    lineHeight: ${ts.lineHeight}`);
      if (ts.letterSpacing !== undefined)
        parts.push(`    letterSpacing: ${ts.letterSpacing}px`);
    });
  }

  // Spacing
  if (data.spacing.radius || data.spacing.elementGap) {
    parts.push(`spacing:`);
    if (data.spacing.radius?.cards)
      parts.push(`  cardRadius: ${data.spacing.radius.cards}`);
    if (data.spacing.radius?.buttons)
      parts.push(`  buttonRadius: ${data.spacing.radius.buttons}`);
    if (data.spacing.elementGap)
      parts.push(`  elementGap: ${data.spacing.elementGap}`);
    if (data.spacing.sectionGap)
      parts.push(`  sectionGap: ${data.spacing.sectionGap}`);
  }

  // Components
  if (data.components.length) {
    parts.push(`components:`);
    data.components.slice(0, 15).forEach((c) => {
      parts.push(
        `  ${slugify(c.name || "component")}:`,
        `    role: ${c.role || ""}`,
      );
    });
  }

  parts.push(`---`, ``, `## Overview`, ``);
  if (data.northStar) parts.push(`**North Star:** ${data.northStar}`, ``);
  if (data.desc) parts.push(data.desc, ``);
  if (data.dos.length)
    parts.push(`### Do's`, ``, ...data.dos.map((d) => `- ${d}`), ``);
  if (data.donts.length)
    parts.push(`### Don'ts`, ``, ...data.donts.map((d) => `- ${d}`), ``);
  if (data.layout) parts.push(`### Layout`, ``, data.layout, ``);
  if (data.imagery) parts.push(`### Imagery`, ``, data.imagery, ``);
  if (data.elevation) parts.push(`### Elevation`, ``, data.elevation, ``);

  return parts.join("\n");
}

async function main() {
  const files = fs
    .readdirSync(REFERO_DIR)
    .filter(
      (f) =>
        f.endsWith(".json") &&
        !f.startsWith("manifest") &&
        !f.startsWith("styles-page"),
    );

  console.log(`Found ${files.length} style JSON files`);
  let converted = 0,
    errors = 0;

  for (const file of files) {
    try {
      const json = JSON.parse(
        fs.readFileSync(path.join(REFERO_DIR, file), "utf-8"),
      );
      const data = extractData(json);
      if (!data.name || data.name === "Unknown") {
        console.log(`  ✗ Skip ${file}`);
        continue;
      }

      const slug = slugify(data.name);
      const skillDir = path.join(SKILLS_DIR, slug);
      fs.mkdirSync(skillDir, { recursive: true });

      const md = buildFrontmatter(data);
      fs.writeFileSync(path.join(skillDir, "DESIGN.md"), md, "utf-8");

      // Write README if not exists
      const readmePath = path.join(skillDir, "README.md");
      if (!fs.existsSync(readmePath)) {
        fs.writeFileSync(
          readmePath,
          `# ${data.name}\n\nSource: [${data.url}](${data.url})\n\nExtracted from styles.refero.design\n`,
          "utf-8",
        );
      }

      converted++;
      if (converted % 50 === 0) console.log(`  ...${converted} done`);
    } catch (err) {
      errors++;
      console.log(
        `  ✗ ${file}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  console.log(`\nDone: ${converted} converted, ${errors} errors`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
