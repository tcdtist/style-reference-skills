---
version: alpha
name: "Specht Studio"
description: "Specht Studio employs a stark, high-contrast visual language reminiscent of a curated gallery wall. The primary interaction is through image-heavy blocks, framed by thin borders and text in a sparse, functional sans-serif. The design emphasizes content arrangement and bold typographic treatments, with color sparsely used and predominantly achromatic for navigation and core information, allowing the rich, varied artwork to provide visual interest and chromatic depth."
theme: "light"
industry: "design"
source_url: "https://stephaniespecht.com"
refero_style_id: "dd646da4-36f5-42b1-83dd-6a1c90cf8983"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518791283-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518791283-thumb.jpg"
extracted_at: "2026-04-30T03:13:27.157Z"
---

# Specht Studio — Style Reference

> Gallery Grid Monochrome

**Theme:** light

**Industry:** design

Specht Studio employs a stark, high-contrast visual language reminiscent of a curated gallery wall. The primary interaction is through image-heavy blocks, framed by thin borders and text in a sparse, functional sans-serif. The design emphasizes content arrangement and bold typographic treatments, with color sparsely used and predominantly achromatic for navigation and core information, allowing the rich, varied artwork to provide visual interest and chromatic depth.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Black Ink | #000000 | `--color-black-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Midtone Gray | #666666 | `--color-midtone-gray` | Secondary text, link borders when inactive, image borders and some iconography |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, primary surfacing |

## Tokens — Typography

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 15px, 16px, 25px
- **Line heights:** 1.00, 1.20, 1.40, 1.50
- **Letter spacing:** normal
- **Role:** All text elements: headings, body copy, navigation, and links. The consistent use of a single font family and weight across all roles creates a unified, no-nonsense typographic voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 15px | 1.4 | — | `--text-caption` |
| body-sm | 16px | 1.4 | — | `--text-body-sm` |
| body | 25px | 1.3 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-67 | 67px | `--spacing-67` |
| spacing-122 | 122px | `--spacing-122` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 67px |
| cardPadding | 24px |
| elementGap | 10px |

## Components

### Navigation Link

**Role:** Primary site navigation items.

Text in Black Ink (#000000) at 15px Helvetica Neue, with a 10px bottom margin. Hover state reveals a subtle border. Padding: 0px 0px 2px 0px.

### Image Grid Item

**Role:** Display individual portfolio pieces or art.

A square or rectangular content block containing an image, bordered by a 1px solid #666666 line. Text labels below the image are in Midtone Gray (#666666), 16px Helvetica Neue, with a 10px bottom margin. Each item feels like a distinct piece on a gallery wall.

### Project Title Link

**Role:** Headline for individual project entries on the grid.

Black Ink (#000000) with a 10px bottom margin, 12px left margin, 13px bottom margin, 24px right/left top padding, 11px top margin, and 10px top margin.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) for all background surfaces to maintain a clean, gallery-like aesthetic.
- Use Black Ink (#000000) for all primary text, headings, and active navigation states.
- Frame interactive blocks and images with subtle 1px solid borders using Midtone Gray (#666666) or Black Ink (#000000).
- Apply normal letter-spacing for all Helvetica Neue type, avoiding condensed or expanded tracking.
- Maintain a clear visual hierarchy using spacing; utilize 10px as the default element separation and 67px for section breaks.
- Keep brand accent colors confined to embedded imagery or content rather than UI elements.

### Don't

- Do not use saturated colors for UI elements; chromaticity should primarily come from background content.
- Avoid heavy shadows or gradients on any UI component; elevation is achieved through framing, not depth effects.
- Do not introduce additional font families or weights beyond Helvetica Neue 400.
- Refrain from large, contrasting background blocks that break the predominantly light theme, except where content specifically dictates.
- Do not introduce complex UI elements or decorative flourishes; maintain a functional, content-focused approach.

## Similar Brands

- **Are.na** — Grid-based content display, minimal UI, and focus on visual assets over heavy text.
- **OFFICE Magazine** — High-contrast monochrome typography with heavy reliance on strong imagery to convey brand identity.
- **Working Not Working** — Portfolio-centric site with large visual elements arranged in a grid, neutral palette allowing work to shine.
- **Sight Unseen** — Emphasizes curated content through a clean, graphic user interface with a similar treatment of images and text.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-black-ink: #000000;
  --color-midtone-gray: #666666;
  --color-canvas-white: #ffffff;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --text-caption: 15px;
  --leading-caption: 1.4;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --text-body: 25px;
  --leading-body: 1.3;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-67: 67px;
  --spacing-122: 122px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-black-ink: #000000;
  --color-midtone-gray: #666666;
  --color-canvas-white: #ffffff;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --text-caption: 15px;
  --leading-caption: 1.4;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --text-body: 25px;
  --leading-body: 1.3;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-67: 67px;
  --spacing-122: 122px;
  --radius-default: 0px;
}
```
