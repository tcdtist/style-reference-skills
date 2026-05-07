---
version: alpha
name: "TypeList"
description: "TypeList adopts a vibrant, playful design language built on an entirely white canvas punctuated by large, brightly colored interactive blocks. Typography is classic and understated, serving as an anchor to the dynamic color palette. The entire system feels like an interactive art exhibit, where color reveals content through large, expressive swatches rather than subtle accents."
theme: "light"
industry: "design"
source_url: "https://typelist.upstatement.com"
refero_style_id: "76ace78c-94b7-421d-a8fd-47289328458f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520787808-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520787808-thumb.jpg"
extracted_at: "2026-04-30T03:46:41.885Z"
---

# TypeList — Style Reference

> Chromatic interactive blocks

**Theme:** light

**Industry:** design

TypeList adopts a vibrant, playful design language built on an entirely white canvas punctuated by large, brightly colored interactive blocks. Typography is classic and understated, serving as an anchor to the dynamic color palette. The entire system feels like an interactive art exhibit, where color reveals content through large, expressive swatches rather than subtle accents.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, primary surface |
| Ink Black | #15181e | `--color-ink-black` | Primary text, headings, general UI elements and borders |
| Pure Black | #000000 | `--color-pure-black` | Decorative icons, button text, subtle borders |
| Textured Gray | #e3e3d5 | `--color-textured-gray` | Interactive block background |
| Light Gray | #dcdcdc | `--color-light-gray` | Interactive block background |
| Soft Greenish Gray | #b9d4cd | `--color-soft-greenish-gray` | Interactive block background |
| Regal Violet | #8d7fc8 | `--color-regal-violet` | Interactive block background |
| Sunshine Yellow | #fff731 | `--color-sunshine-yellow` | Interactive block background |
| Sky Blue | #9dc4f2 | `--color-sky-blue` | Interactive block background |
| Electric Blue | #2772ff | `--color-electric-blue` | Interactive block background |
| Lime Green | #dffe5a | `--color-lime-green` | Interactive block background |
| Flame Red | #f9423b | `--color-flame-red` | Interactive block background |
| Crimson Red | #c81103 | `--color-crimson-red` | Interactive block background |
| Golden Ochre | #d39f43 | `--color-golden-ochre` | Interactive block background |

## Tokens — Typography

### Untitled Sans

- **Token:** `--font-untitled-sans`
- **Weights:** 400, 500
- **Sizes:** 16px, 22px, 24px
- **Line heights:** 1.00, 1.10, 1.36
- **Letter spacing:** normal
- **Role:** Primary UI text for body copy, headings, links, and buttons. Its clean, utilitarian nature grounds the colorful design.

### Untitled Serif

- **Token:** `--font-untitled-serif`
- **Weights:** 400
- **Sizes:** 24px
- **Line heights:** 1.10
- **Letter spacing:** normal
- **Role:** Used for specific body text, possibly decorative or highlighting short phrases against the sans-serif dominant typography.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.36 | — | `--text-body` |
| body-lg | 22px | 1.1 | — | `--text-body-lg` |
| heading | 24px | 1.1 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-86 | 86px | `--spacing-86` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 20px |
| elementGap | 30px |

## Components

### Ghost Navigation Button

**Role:** Header navigation item, typically for informational links.

Text in Pure Black (#000000) or Ink Black (#15181e), no background, no border, and 0px radius. Minimal padding as defined by the parent layout.

### Interactive Color Block Link

**Role:** Large, full-width interactive sections that serve as primary navigation or content categories.

These blocks are the core interaction. They use one of the vivid brand colors (e.g., Regal Violet #8d7fc8, Sunshine Yellow #fff731, Sky Blue #9dc4f2, etc.) as the background. Text is Ink Black (#15181e) or Pure Black (#000000), using Untitled Sans at 24px weight 400. They have square corners (0px radius) and significant vertical padding (padding-top: 20px, padding-bottom: 20px).

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) as the primary page background.
- Use Ink Black (#15181e) for all primary text and headings.
- Employ the vibrant brand colors (e.g., Regal Violet #8d7fc8, Sunshine Yellow #fff731) exclusively for large interactive block backgrounds.
- Maintain a consistent 0px border-radius across all interactive elements and sections.
- Use Untitled Sans for all general UI text at 16px, 22px, or 24px, with normal letterSpacing.
- Ensure interactive color blocks have at least 20px vertical padding (padding-top and padding-bottom) for comfortable interaction.

### Don't

- Do not introduce shadows or elevation; the system relies on flat planes of color.
- Avoid using the vibrant brand colors for small accents or text; reserve them for interactive block backgrounds.
- Do not use rounded corners on any elements; all shapes should be clean and rectilinear.
- Do not use gradients; the color palette is intentionally flat and solid.
- Avoid using more than one font family in very close proximity; Untitled Sans and Untitled Serif have distinct functional roles.
- Do not clutter the layout; maintain generous whitespace around header elements and between main content blocks.

## Imagery

The site's imagery strategy is pure UI, focusing on large, solid blocks of color rather than photography or complex illustrations. The 'rainbow' motif from the screenshot suggests a visual system built around contrasting, bold color fields. Icons are minimal, likely mono-color and outline-based, serving a functional rather than decorative role.

## Layout

The page primarily uses a full-bleed layout, allowing color blocks to extend edge-to-edge. The hero features a centered headline against the white canvas. Content sections are composed of alternating large, full-width color blocks, each representing a distinct content category, creating a strong vertical rhythm. Navigation is minimal, limited to a header bar with sparse, right-aligned text links. The information density is low, emphasizing visual impact and interaction over extensive text.

## Similar Brands

- **Are.na** — Minimalistic UI with stark typography and a focus on content blocks, albeit with less vibrant color.
- **Fonts In Use** — Directory-style site with clear typography, using distinct color treatments to differentiate content, but with less emphasis on full-bleed blocks.
- **Italic.co** — Heavy reliance on large, interactive, unbordered content blocks that act as visual navigation.
- **Eye Magazine** — Playful, design-focused site with strong typographic elements and a willingness to use bold color for content distinction.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #15181e;
  --color-pure-black: #000000;
  --color-textured-gray: #e3e3d5;
  --color-light-gray: #dcdcdc;
  --color-soft-greenish-gray: #b9d4cd;
  --color-regal-violet: #8d7fc8;
  --color-sunshine-yellow: #fff731;
  --color-sky-blue: #9dc4f2;
  --color-electric-blue: #2772ff;
  --color-lime-green: #dffe5a;
  --color-flame-red: #f9423b;
  --color-crimson-red: #c81103;
  --color-golden-ochre: #d39f43;
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, sans-serif;
  --font-untitled-serif: 'Untitled Serif', ui-sans-serif, system-ui, sans-serif;
  --text-body: 16px;
  --leading-body: 1.36;
  --text-body-lg: 22px;
  --leading-body-lg: 1.1;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-48: 48px;
  --spacing-86: 86px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #15181e;
  --color-pure-black: #000000;
  --color-textured-gray: #e3e3d5;
  --color-light-gray: #dcdcdc;
  --color-soft-greenish-gray: #b9d4cd;
  --color-regal-violet: #8d7fc8;
  --color-sunshine-yellow: #fff731;
  --color-sky-blue: #9dc4f2;
  --color-electric-blue: #2772ff;
  --color-lime-green: #dffe5a;
  --color-flame-red: #f9423b;
  --color-crimson-red: #c81103;
  --color-golden-ochre: #d39f43;
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, sans-serif;
  --font-untitled-serif: 'Untitled Serif', ui-sans-serif, system-ui, sans-serif;
  --text-body: 16px;
  --leading-body: 1.36;
  --text-body-lg: 22px;
  --leading-body-lg: 1.1;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-48: 48px;
  --spacing-86: 86px;
  --radius-default: 0px;
}
```
