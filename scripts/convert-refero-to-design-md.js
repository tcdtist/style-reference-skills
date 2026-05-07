#!/usr/bin/env node
// @ts-nocheck
/**
 * Convert Refero JSON snapshots to skills/<brand>/DESIGN.md
 */
const fs = require("fs");
const path = require("path");

const REFERO_DIR = path.join(__dirname, "../tmp/refero");
const SKILLS_DIR = path.join(__dirname, "../skills");

function slugify(v) {
  return String(v || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function compact(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function yamlString(value) {
  return JSON.stringify(compact(value));
}

function markdownCell(value) {
  const text = compact(value);
  return text ? text.replace(/\|/g, "\\|") : "—";
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function tokenName(prefix, value) {
  return `--${prefix}-${slugify(value) || "token"}`;
}

function px(value) {
  if (value === undefined || value === null || value === "") return "";
  return typeof value === "number" ? `${value}px` : String(value);
}

function unique(values) {
  return [
    ...new Set(
      values.filter(
        (value) => value !== undefined && value !== null && value !== "",
      ),
    ),
  ];
}

function extractData(json) {
  const style = json.style || {};
  const result = style.fullResult || {};
  const ds = result.designSystem || {};
  const raw = result.raw || {};

  return {
    id: style.id || "",
    name: style.siteName || "Unknown",
    url: style.url || "",
    description: ds.description || "",
    northStar: ds.northStar || "",
    industry: ds.industry || style.industry || "",
    theme: ds.theme || style.colorScheme || "light",
    screenshotUrl: style.screenshotUrl || result.screenshot?.url || "",
    thumbnailUrl: style.thumbnailUrl || result.screenshot?.thumbnail || "",
    extractedAt: result.meta?.extractedAt || style.createdAt || "",
    colors: asArray(ds.colors),
    typography: asArray(ds.typography),
    typeScale: asArray(ds.typeScale),
    components: asArray(ds.components),
    spacing: ds.spacing || {},
    rawSpacing: asArray(raw.spacing?.tokens),
    rawShadows: asArray(raw.shapes?.shadows),
    dos: asArray(ds.dos),
    donts: asArray(ds.donts),
    surfaces: asArray(ds.surfaces),
    elevation: asArray(ds.elevation),
    imagery: ds.imagery || "",
    layout: ds.layout || "",
    similar: asArray(ds.similar),
  };
}

function buildFrontmatter(data) {
  const lines = [
    "---",
    "version: alpha",
    `name: ${yamlString(data.name)}`,
    `description: ${yamlString(data.description || data.northStar)}`,
    `theme: ${yamlString(data.theme)}`,
  ];

  if (data.industry) lines.push(`industry: ${yamlString(data.industry)}`);
  if (data.url) lines.push(`source_url: ${yamlString(data.url)}`);
  if (data.id) lines.push(`refero_style_id: ${yamlString(data.id)}`);
  if (data.screenshotUrl)
    lines.push(`screenshot_url: ${yamlString(data.screenshotUrl)}`);
  if (data.thumbnailUrl)
    lines.push(`thumbnail_url: ${yamlString(data.thumbnailUrl)}`);
  if (data.extractedAt)
    lines.push(`extracted_at: ${yamlString(data.extractedAt)}`);
  lines.push("---");

  return lines.join("\n");
}

function table(headers, rows) {
  if (!rows.length) return "";
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(markdownCell).join(" | ")} |`),
  ].join("\n");
}

function getSpacingValues(data) {
  return unique([
    ...data.rawSpacing
      .map((item) => item.value)
      .filter((value) => Number(value) >= 4),
    Number.parseInt(data.spacing.elementGap, 10),
    Number.parseInt(data.spacing.sectionGap, 10),
    Number.parseInt(data.spacing.cardPadding, 10),
  ])
    .filter((value) => Number.isFinite(Number(value)))
    .sort((a, b) => Number(a) - Number(b));
}

function renderColors(data) {
  const rows = data.colors.map((color) => {
    const name = color.name || color.role || color.hex || "Color";
    return [
      name,
      color.hex,
      `\`${tokenName("color", name)}\``,
      color.role || color.group,
    ];
  });

  return [
    "## Tokens — Colors",
    "",
    table(["Name", "Value", "Token", "Role"], rows),
  ].join("\n");
}

function renderTypography(data) {
  const lines = ["## Tokens — Typography", ""];

  for (const font of data.typography) {
    const family = font.family || "Unknown";
    const role = font.role || `${family} text`;
    lines.push(
      `### ${family}`,
      "",
      `- **Token:** \`${tokenName("font", family)}\``,
    );
    if (font.substitute) lines.push(`- **Substitute:** ${font.substitute}`);
    if (font.weight) lines.push(`- **Weights:** ${font.weight}`);
    if (font.sizes) lines.push(`- **Sizes:** ${font.sizes}`);
    if (font.lineHeight) lines.push(`- **Line heights:** ${font.lineHeight}`);
    if (font.letterSpacing)
      lines.push(`- **Letter spacing:** ${font.letterSpacing}`);
    if (font.fontFeatureSettings)
      lines.push(`- **OpenType features:** ${font.fontFeatureSettings}`);
    lines.push(`- **Role:** ${role}`, "");
  }

  const rows = data.typeScale.map((type) => [
    type.role || "text",
    px(type.size),
    type.lineHeight,
    type.letterSpacing === undefined ? "" : `${type.letterSpacing}px`,
    `\`${tokenName("text", type.role || "text")}\``,
  ]);

  if (rows.length) {
    lines.push(
      "### Type Scale",
      "",
      table(["Role", "Size", "Line Height", "Letter Spacing", "Token"], rows),
      "",
    );
  }

  return lines.join("\n").trim();
}

function renderSpacing(data) {
  const lines = ["## Tokens — Spacing & Shapes", ""];
  const spacingRows = getSpacingValues(data).map((value) => [
    `spacing-${value}`,
    `${value}px`,
    `\`${tokenName("spacing", value)}\``,
  ]);
  if (spacingRows.length) {
    lines.push(
      "### Spacing Scale",
      "",
      table(["Name", "Value", "Token"], spacingRows),
      "",
    );
  }

  const radiusRows = Object.entries(data.spacing.radius || {});
  if (radiusRows.length) {
    lines.push(
      "### Border Radius",
      "",
      table(["Element", "Value"], radiusRows),
      "",
    );
  }

  const shadowRows = data.rawShadows.map((shadow, index) => {
    const name = index === 0 ? "xl" : `xl-${index + 1}`;
    return [name, shadow.value, `\`${tokenName("shadow", name)}\``];
  });
  if (shadowRows.length) {
    lines.push(
      "### Shadows",
      "",
      table(["Name", "Value", "Token"], shadowRows),
      "",
    );
  }

  const layoutRows = [
    ["pageMaxWidth", data.spacing.pageMaxWidth],
    ["sectionGap", data.spacing.sectionGap],
    ["cardPadding", data.spacing.cardPadding],
    ["elementGap", data.spacing.elementGap],
  ].filter((row) => row[1]);
  if (layoutRows.length) {
    lines.push(
      "### Layout Tokens",
      "",
      table(["Name", "Value"], layoutRows),
      "",
    );
  }

  return lines.join("\n").trim();
}

function renderComponents(data) {
  const lines = ["## Components", ""];

  for (const component of data.components) {
    if (!component.name) continue;
    lines.push(`### ${component.name}`, "");
    if (component.role) lines.push(`**Role:** ${component.role}`, "");
    if (component.description) {
      lines.push(component.description, "");
    } else if (component.html) {
      lines.push(
        "Captured as a source example component. Use the structure and token choices as a reference for implementation.",
        "",
      );
    }
  }

  return lines.join("\n").trim();
}

function renderDosDonts(data) {
  const lines = ["## Do's and Don'ts", ""];
  if (data.dos.length)
    lines.push("### Do", "", ...data.dos.map((item) => `- ${item}`), "");
  if (data.donts.length)
    lines.push("### Don't", "", ...data.donts.map((item) => `- ${item}`), "");
  return lines.join("\n").trim();
}

function renderSurfaces(data) {
  return [
    "## Surfaces",
    "",
    table(
      ["Level", "Name", "Value", "Purpose"],
      data.surfaces.map((surface) => [
        surface.level,
        surface.name,
        surface.hex,
        surface.purpose,
      ]),
    ),
  ].join("\n");
}

function renderElevation(data) {
  const lines = ["## Elevation", ""];

  if (data.elevation.length) {
    for (const item of data.elevation) {
      lines.push(
        `- **${item.element || "Elevation"}:** \`${item.style || ""}\``,
      );
    }
  } else {
    data.rawShadows.forEach((shadow, index) => {
      lines.push(`- **Shadow ${index + 1}:** \`${shadow.value}\``);
    });
  }

  return lines.join("\n");
}

function renderSimilar(data) {
  const lines = ["## Similar Brands", ""];
  for (const item of data.similar) {
    if (item.business || item.name) {
      lines.push(
        `- **${item.business || item.name}** — ${item.why || "Similar visual direction."}`,
      );
    }
  }
  return lines.join("\n");
}

function cssFontStack(font) {
  const family = font.family || "system-ui";
  const substitute = font.substitute || "ui-sans-serif, system-ui, sans-serif";
  return `'${family}', ${substitute}`;
}

function buildCssProperties(data, rootSelector) {
  const lines = [`${rootSelector} {`];

  for (const color of data.colors) {
    const name = color.name || color.role || color.hex || "color";
    lines.push(`  ${tokenName("color", name)}: ${color.hex};`);
  }

  for (const font of data.typography) {
    if (font.family)
      lines.push(`  ${tokenName("font", font.family)}: ${cssFontStack(font)};`);
  }

  for (const item of data.typeScale) {
    const name = slugify(item.role || "text") || "text";
    if (item.size !== undefined)
      lines.push(`  --text-${name}: ${px(item.size)};`);
    if (item.lineHeight !== undefined)
      lines.push(`  --leading-${name}: ${item.lineHeight};`);
    if (item.letterSpacing !== undefined)
      lines.push(`  --tracking-${name}: ${item.letterSpacing}px;`);
  }

  for (const value of getSpacingValues(data)) {
    lines.push(`  --spacing-${value}: ${value}px;`);
  }

  for (const [name, value] of Object.entries(data.spacing.radius || {})) {
    lines.push(`  --radius-${slugify(name)}: ${value};`);
  }

  for (const [index, shadow] of data.rawShadows.entries()) {
    const name = index === 0 ? "xl" : `xl-${index + 1}`;
    lines.push(`  ${tokenName("shadow", name)}: ${shadow.value};`);
  }

  for (const surface of data.surfaces) {
    if (surface.name && surface.hex)
      lines.push(`  ${tokenName("surface", surface.name)}: ${surface.hex};`);
  }

  lines.push("}");
  return lines.join("\n");
}

function renderQuickStart(data) {
  return [
    "## Quick Start",
    "",
    "### CSS Custom Properties",
    "",
    "```css",
    buildCssProperties(data, ":root"),
    "```",
    "",
    "### Tailwind v4",
    "",
    "```css",
    buildCssProperties(data, "@theme"),
    "```",
  ].join("\n");
}

function buildMarkdown(data) {
  const blocks = [
    buildFrontmatter(data),
    [
      `# ${data.name} — Style Reference`,
      data.northStar ? `> ${data.northStar}` : "",
      `**Theme:** ${data.theme}`,
      data.industry ? `**Industry:** ${data.industry}` : "",
      data.description,
    ]
      .filter(Boolean)
      .join("\n\n"),
    renderColors(data),
    renderTypography(data),
    renderSpacing(data),
    renderComponents(data),
    renderDosDonts(data),
    data.surfaces.length ? renderSurfaces(data) : "",
    data.elevation.length || data.rawShadows.length
      ? renderElevation(data)
      : "",
    data.imagery ? ["## Imagery", "", data.imagery].join("\n") : "",
    data.layout ? ["## Layout", "", data.layout].join("\n") : "",
    data.similar.length ? renderSimilar(data) : "",
    renderQuickStart(data),
  ].filter(Boolean);

  return `${blocks.join("\n\n").trimEnd()}\n`;
}

function parseArgs(argv) {
  const options = { brand: "", dryRun: false };
  for (const arg of argv) {
    if (arg.startsWith("--brand=")) options.brand = slugify(arg.split("=")[1]);
    if (arg === "--dry-run") options.dryRun = true;
  }
  return options;
}

function listFiles(options) {
  return fs
    .readdirSync(REFERO_DIR)
    .filter(
      (file) =>
        file.endsWith(".json") &&
        !file.startsWith("manifest") &&
        !file.startsWith("styles-page"),
    )
    .filter((file) => !options.brand || file.startsWith(`${options.brand}-`))
    .sort((a, b) => a.localeCompare(b));
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const files = listFiles(options);
  console.log(`Found ${files.length} style JSON files`);

  let converted = 0;
  let errors = 0;

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
      const markdown = buildMarkdown(data);

      if (options.dryRun) {
        console.log(markdown);
      } else {
        fs.mkdirSync(skillDir, { recursive: true });
        fs.writeFileSync(path.join(skillDir, "DESIGN.md"), markdown, "utf-8");

        const readmePath = path.join(skillDir, "README.md");
        if (!fs.existsSync(readmePath)) {
          fs.writeFileSync(
            readmePath,
            `# ${data.name}\n\nSource: [${data.url}](${data.url})\n\nExtracted from styles.refero.design\n`,
            "utf-8",
          );
        }
      }

      converted++;
      if (!options.dryRun && converted % 50 === 0)
        console.log(`  ...${converted} done`);
    } catch (err) {
      errors++;
      console.log(
        `  ✗ ${file}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  console.log(`\nDone: ${converted} converted, ${errors} errors`);
  if (errors > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
