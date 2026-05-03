#!/usr/bin/env node
// @ts-nocheck

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");
const SKILLS_DIR = path.join(ROOT_DIR, "skills");
const INDEX_FILE = path.join(ROOT_DIR, "index.json");

const args = process.argv.slice(2);
const shouldWrite = args.includes("--write");
const targetBrandArg = args.find((arg) => arg.startsWith("--brand="));
const limitArg = args.find((arg) => arg.startsWith("--limit="));
const targetBrand = targetBrandArg ? targetBrandArg.split("=")[1] : "";
const limit = limitArg ? Number(limitArg.split("=")[1]) : null;

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

function parseSimpleYaml(frontmatter) {
  const result = {};

  for (const line of frontmatter.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/);
    if (!match) {
      continue;
    }

    result[match[1]] = match[2].replace(/^['"]|['"]$/g, "").trim();
  }

  return result;
}

function tokenize(input) {
  const stopWords = new Set([
    "the",
    "and",
    "for",
    "with",
    "that",
    "this",
    "from",
    "into",
    "your",
    "their",
    "style",
    "design",
    "system",
    "brand",
    "interface",
    "using",
  ]);

  return new Set(
    (input || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]+/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 2 && !stopWords.has(token)),
  );
}

function overlapScore(a, b) {
  if (!a.size || !b.size) {
    return 0;
  }

  let hit = 0;
  for (const token of a) {
    if (b.has(token)) {
      hit += 1;
    }
  }

  return hit / Math.max(a.size, b.size);
}

function loadIndex() {
  const raw = fs.readFileSync(INDEX_FILE, "utf-8");
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed.brands) ? parsed.brands : [];
}

function findSimilarBrands(brands, brandId, limitCount = 3) {
  const current = brands.find((brand) => brand.id === brandId);
  if (!current) {
    return [];
  }

  const currentTokens = tokenize(
    [current.id, current.name, current.description].filter(Boolean).join(" "),
  );

  const scored = brands
    .filter((brand) => brand.id !== brandId)
    .map((brand) => {
      const compareTokens = tokenize(
        [brand.id, brand.name, brand.description].filter(Boolean).join(" "),
      );

      return {
        id: brand.id,
        name: brand.name || brand.id,
        score: overlapScore(currentTokens, compareTokens),
      };
    })
    .sort((a, b) => b.score - a.score);

  const top = scored.filter((item) => item.score > 0).slice(0, limitCount);
  if (top.length >= limitCount) {
    return top;
  }

  const fallback = scored
    .filter((item) => !top.some((picked) => picked.id === item.id))
    .slice(0, limitCount - top.length);

  return [...top, ...fallback];
}

function sectionExists(body, title) {
  const regex = new RegExp(
    `^##\\s+${title.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s*$`,
    "m",
  );
  return regex.test(body);
}

function buildMotionSection() {
  return [
    "- Keep motion subtle and fast: prefer `120ms-220ms` transitions for hover/focus and `240ms-320ms` for enter/exit.",
    "- Animate only transform and opacity where possible; avoid layout-shifting animations.",
    "- Use one easing family consistently across the page (`ease-out` for entrances, `ease-in-out` for toggles).",
    "- Respect reduced motion: disable non-essential animation when `prefers-reduced-motion` is enabled.",
  ].join("\n");
}

function buildSimilarBrandsSection(brands, brandId) {
  const similar = findSimilarBrands(brands, brandId, 3);
  if (!similar.length) {
    return "- No strong matches yet. Add curated similar brands manually after visual review.";
  }

  return similar.map((item) => `- \`${item.id}\` (${item.name})`).join("\n");
}

function buildQuickStartSection(brandId, brandName) {
  return [
    `1. Copy \`skills/${brandId}/DESIGN.md\` into your target project context.`,
    `2. Ask the agent: \"Build [screen type] in ${brandName || brandId} style using the DESIGN tokens and component patterns.\"`,
    "3. Implement colors/typography/spacing tokens first, then components, then visual polish.",
    "4. Validate final UI against this reference: typography hierarchy, CTA styling, card geometry, and section rhythm.",
  ].join("\n");
}

function buildAgentPromptGuideSection(brandName) {
  return [
    "- Start prompts with explicit scope: page type, target audience, and conversion goal.",
    `- Mention the style anchor directly: \"Follow ${brandName || "this brand"} DESIGN system exactly\".`,
    "- Require token-level output (colors, typography, spacing, radius, shadows) before component generation.",
    "- Ask for responsive behavior and accessibility checks (focus state, contrast, reduced motion).",
  ].join("\n");
}

function appendMissingSections(body, brandMeta, brandsIndex) {
  const sections = [
    {
      title: "Motion System",
      content: buildMotionSection(),
    },
    {
      title: "Similar Brands",
      content: buildSimilarBrandsSection(brandsIndex, brandMeta.id),
    },
    {
      title: "Quick Start",
      content: buildQuickStartSection(brandMeta.id, brandMeta.name),
    },
    {
      title: "Agent Prompt Guide",
      content: buildAgentPromptGuideSection(brandMeta.name),
    },
  ];

  let nextBody = body.trimEnd();
  const added = [];

  for (const section of sections) {
    if (sectionExists(nextBody, section.title)) {
      continue;
    }

    nextBody = `${nextBody}\n\n## ${section.title}\n\n${section.content}`;
    added.push(section.title);
  }

  return {
    updatedBody: `${nextBody}\n`,
    added,
  };
}

function formatContent(frontmatter, updatedBody) {
  if (!frontmatter) {
    return updatedBody;
  }

  return `---\n${frontmatter}\n---\n${updatedBody.startsWith("\n") ? "" : "\n"}${updatedBody}`;
}

function main() {
  const brandsIndex = loadIndex();
  const brandDirs = fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((brandId) => (targetBrand ? brandId === targetBrand : true))
    .sort((a, b) => a.localeCompare(b));

  const selected =
    Number.isFinite(limit) && limit > 0 ? brandDirs.slice(0, limit) : brandDirs;

  let touched = 0;
  let modified = 0;

  for (const brandId of selected) {
    const filePath = path.join(SKILLS_DIR, brandId, "DESIGN.md");
    if (!fs.existsSync(filePath)) {
      continue;
    }

    touched += 1;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { frontmatter, body } = splitFrontmatter(raw);
    const parsedFrontmatter = parseSimpleYaml(frontmatter);

    const brandMeta = {
      id: brandId,
      name: parsedFrontmatter.name || brandId,
    };

    const { updatedBody, added } = appendMissingSections(
      body,
      brandMeta,
      brandsIndex,
    );
    if (!added.length) {
      continue;
    }

    const nextContent = formatContent(frontmatter, updatedBody);
    modified += 1;

    if (shouldWrite) {
      fs.writeFileSync(filePath, nextContent, "utf-8");
      console.log(`✓ ${brandId}: added ${added.join(", ")}`);
    } else {
      console.log(`- ${brandId}: would add ${added.join(", ")}`);
    }
  }

  console.log(`\nProcessed: ${touched} brands`);
  console.log(`Updated:   ${modified} brands`);
  console.log(`Mode:      ${shouldWrite ? "write" : "dry-run"}`);
}

main();
