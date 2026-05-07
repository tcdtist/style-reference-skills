---
version: alpha
name: "Artem Militonian"
description: "This design system presents a stark, high-contrast digital Brutalism. The aesthetic relies on an absolute black-and-white palette, sharp typographic treatment, and a complete absence of soft edges or shadows. Visual interest is generated through oversized, tightly-tracked headlines and navigational elements, paired with a subtle, technical background graphic. The system maintains a utilitarian, almost 'command-line' feel."
theme: "light"
industry: "design"
source_url: "https://artmilitonian.com"
refero_style_id: "c1749391-de9f-4500-a838-01d08a72fc00"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519619794-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519619794-thumb.jpg"
extracted_at: "2026-04-30T03:27:15.757Z"
---

# Artem Militonian — Style Reference

> Monochrome Grid Blueprint

**Theme:** light

**Industry:** design

This design system presents a stark, high-contrast digital Brutalism. The aesthetic relies on an absolute black-and-white palette, sharp typographic treatment, and a complete absence of soft edges or shadows. Visual interest is generated through oversized, tightly-tracked headlines and navigational elements, paired with a subtle, technical background graphic. The system maintains a utilitarian, almost 'command-line' feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, default stroke color for outlined elements |
| Ink Black | #000000 | `--color-ink-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Deep Graphite | #282828 | `--color-deep-graphite` | Secondary text, subtle borders, background detail elements, and specific text elements where a slightly softer black is desired than pure Ink Black |
| Muted Gray | #a1a1a1 | `--color-muted-gray` | Subtler text, decorative border lines, and secondary informational elements. Provides a low-contrast readability against Canvas White |

## Tokens — Typography

### custom_87914

- **Token:** `--font-custom-87914`
- **Substitute:** Arial
- **Weights:** 400, 500
- **Sizes:** 8px, 34px, 60px, 157px
- **Line heights:** 1.02, 1.03, 1.13
- **Letter spacing:** -0.0880em at 157px, -0.0500em at 60px, -0.0440em at 34px, -0.0250em at 8px, -0.0190em, 0.0630em
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Primary headings, navigation links, and compact informational text. Its variable letter-spacing and tight leading contribute significantly to the system's compressed, impactful feel.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** System-level text, body copy in certain contexts, and internal component labels. This provides a readable baseline where a less stylized font is required.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1 | 0px | `--text-body` |
| heading-sm | 34px | 1.03 | -1.49px | `--text-heading-sm` |
| heading | 60px | 1.03 | -3px | `--text-heading` |
| display | 157px | 1.13 | -13.82px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-1 | 1px | `--spacing-1` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 0px |
| elementGap | 1px |

## Components

### Navigation Link

**Role:** Primary interactive navigation and inline text links.

Text in Ink Black (#000000), custom_87914 font, with an underline of 1px in Ink Black (#000000) that typically extends to match text width, appearing on hover or active state. Uses 1px padding-bottom for the underline offset. No distinct background or radius.

### Information Card (Transparent)

**Role:** Container for content where a visual boundary is not desired but logical grouping is implied.

Background is Canvas White (#ffffff). No padding, radius, or shadow, blending seamlessly with the page background. Text and other elements within define its boundaries.

### Utility Text Label

**Role:** Small, secondary metadata labels or copyright information.

Text is Deep Graphite (#282828) or Muted Gray (#a1a1a1), usually custom_87914 at 8px, with specific letter-spacing. Minimal visual weight to not distract from primary content.

## Do's and Don'ts

### Do

- Use no radius (0px) for all elements, maintaining a sharp, angular aesthetic.
- Employ the high-contrast pairing of Ink Black (#000000) text on Canvas White (#ffffff) backgrounds for primary content.
- Utilize custom_87914 font with specific negative letter-spacing for all headlines and navigation to create a dense, impactful textual presence.
- Apply 1px Ink Black (#000000) underlines for interactive elements to signal interactivity without color.
- Maintain minimal vertical spacing between related text elements, contributing to the compact feel.
- Incorporate subtle background graphics using Deep Graphite (#282828) lines on Canvas White (#ffffff) to add texture without color.

### Don't

- Do not introduce any chromatic colors; the palette is strictly achromatic.
- Avoid soft shadows or any form of elevation — the design is intentionally flat.
- Do not use rounded corners; all shapes and containers should be rectilinear.
- Refrain from large padding on structural elements like cards or sections; aim for a compact layout.
- Do not use generic system fonts for headlines or navigation; always prefer custom_87914 with its distinct tracking.
- Do not use gradients or color overlays; maintain the pure monochrome aesthetic.

## Imagery

The visual language focuses on black-and-white, highly stylized or processed photography. Imagery is often central, presented without rounded corners, and can contain line graphics or glitch-like effects that integrate into the background. The dominant image is a full-body shot, treated with a grayscale, possibly inverted, filter, occupying significant vertical space. Imagery serves more of a decorative and atmospheric role than a strictly explanatory one, contributing to the overall stark, almost dystopian, high-tech mood. Icons are minimal, represented by sharp, outlined shapes with a filled background for certain states, maintaining the monochrome rule.

## Layout

The page adheres to a full-bleed layout without a fixed max-width, allowing content to stretch across the browser window. The hero section features a prominent headline centered over a monochrome, abstract background graphic. Sections are primarily composed of stacked, centered content blocks, with liberal vertical spacing between major elements. Navigation is explicitly listed as an 'index' with underlined text links, reinforcing a command-line interface feel. The rhythm is not defined by alternating bands but by direct content progression, with a strong emphasis on typographic hierarchy and sparse graphical elements.

## Similar Brands

- **Brutalism.js** — Shares intense focus on typography, high contrast, and raw, unornamented UI.
- **Are.na** — Employs an editorial, grid-based layout with a strong emphasis on typography and a minimal color palette.
- **Early internet websites** — Exhibits a 'web 1.0' aesthetic with heavy use of basic typography, underlines for links, and lack of 'modern' UI conventions like shadows or gradients.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-deep-graphite: #282828;
  --color-muted-gray: #a1a1a1;
  --font-custom-87914: 'custom_87914', Arial;
  --font-apple-system: '-apple-system', system-ui;
  --text-body: 16px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-heading-sm: 34px;
  --leading-heading-sm: 1.03;
  --tracking-heading-sm: -1.49px;
  --text-heading: 60px;
  --leading-heading: 1.03;
  --tracking-heading: -3px;
  --text-display: 157px;
  --leading-display: 1.13;
  --tracking-display: -13.82px;
  --spacing-0: 0px;
  --spacing-1: 1px;
  --spacing-64: 64px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-deep-graphite: #282828;
  --color-muted-gray: #a1a1a1;
  --font-custom-87914: 'custom_87914', Arial;
  --font-apple-system: '-apple-system', system-ui;
  --text-body: 16px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-heading-sm: 34px;
  --leading-heading-sm: 1.03;
  --tracking-heading-sm: -1.49px;
  --text-heading: 60px;
  --leading-heading: 1.03;
  --tracking-heading: -3px;
  --text-display: 157px;
  --leading-display: 1.13;
  --tracking-display: -13.82px;
  --spacing-0: 0px;
  --spacing-1: 1px;
  --spacing-64: 64px;
  --radius-none: 0px;
}
```
