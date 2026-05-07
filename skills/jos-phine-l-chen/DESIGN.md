---
version: alpha
name: "Joséphine Löchen"
description: "Joséphine Löchen employs a stark, monochromatic aesthetic, creating a visual language that emphasizes raw content over elaborate UI. The design is a minimalist canvas where imagery and text hold equal weight, defined by precise typography, tight spacing, and an absence of color. The overall impression is one of high-fidelity, unadorned presentation, allowing the creative work to take center stage."
theme: "light"
industry: "agency"
source_url: "https://josephinelochen.com"
refero_style_id: "3d8be336-7e0e-45f7-baf3-0fb64750decd"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516533553-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516533553-thumb.jpg"
extracted_at: "2026-04-30T02:36:08.657Z"
---

# Joséphine Löchen — Style Reference

> monochromatic gallery, stark and precise

**Theme:** light

**Industry:** agency

Joséphine Löchen employs a stark, monochromatic aesthetic, creating a visual language that emphasizes raw content over elaborate UI. The design is a minimalist canvas where imagery and text hold equal weight, defined by precise typography, tight spacing, and an absence of color. The overall impression is one of high-fidelity, unadorned presentation, allowing the creative work to take center stage.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink Black | #000000 | `--color-ink-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, surface background for heroic content blocks |
| Muted Gray | #cecece | `--color-muted-gray` | Muted secondary text, subtle decorative borders, ghost element outlines. Offers a softer interaction against Ink Black |

## Tokens — Typography

### EU-SwissRail-Medium

- **Token:** `--font-eu-swissrail-medium`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.25
- **Letter spacing:** 0.0150em
- **Role:** All text: headlines, body copy, navigation, and links. Its uniform application across all text elements reinforces the minimalist and precise tone, giving a consistent, almost whispered presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.25 | 0.21px | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-7 | 7px | `--spacing-7` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-130 | 130px | `--spacing-130` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 11px |
| elementGap | 7px |

## Components

### Text Link Outlined

**Role:** Interactive navigation and informational links

Text in Ink Black (#000000) with an implied 1px border. On interaction, the text animates with an ease timing function. Example: 'Information' link.

### Body Text Block

**Role:** Descriptive text and content listings

Text in Ink Black (#000000) at 14px EU-SwissRail-Medium weight 400, line height 1.25, with paragraphs separated by 1px marginBottom. Used for client lists or descriptions.

### Header Branding

**Role:** Site title

Text in Ink Black (#000000) at 14px EU-SwissRail-Medium weight 400, with letter-spacing 0.015em. Positioned in the top-left corner, serving as a non-interactive brand identifier.

### Gallery Navigation

**Role:** Contextual navigation within image galleries

Text in Muted Gray (#cecece) at 14px EU-SwissRail-Medium weight 400, with implied 1px borders surrounding the text. Example: '[ Print ]', '[ Pages ]'.

### Information Link

**Role:** Secondary navigation or utility link

Text in Muted Gray (#cecece) at 14px EU-SwissRail-Medium weight 400, with implied 1px borders. Positioned top-right for less prominent actions. Example: 'Information'.

## Do's and Don'ts

### Do

- Maintain a strictly monochromatic palette, using only Ink Black (#000000), Canvas White (#ffffff), and Muted Gray (#cecece).
- Apply the EU-SwissRail-Medium font consistently for all text elements, at 14px size and 400 weight with 0.0150em letter spacing.
- Use 1px borders to define interactive areas or visual separation for text-based elements, often implied rather than explicitly drawn.
- Ensure all interactive elements animate with an 'ease' timing function over 0.4s to convey responsiveness.
- Utilize 7px as a compact default for spacing between related elements and 50px for vertical separation between distinct content sections.
- Place the brand name in the top-left corner and supplementary navigation items in the top-right, maintaining a consistent header pattern.

### Don't

- Introduce any saturated colors; limit the palette to the defined achromatic neutrals.
- Vary font families, sizes, or weights from EU-SwissRail-Medium 14px/400, to preserve typographic precision.
- Use prominent or heavy shadows for elevation; rely on subtle visual cues like borders and compact spacing.
- Break the full-bleed content layout with a max-width container; content should extend to the viewport edges.
- Decorate with graphic elements that are not core to the content itself; the focus is on content presentation.
- Disturb the compact spacing rhythm with large, airy gaps, particularly for element gaps.

## Imagery

The site primarily features high-contrast, black and white fine-art photography. Images are full-bleed, occupying the entire viewport or significant sections of it, serving as the dominant visual content rather than decorative elements. There are no rounded corners or complex masking; images are presented squarely, often with a raw, unedited edge quality, emphasizing the starkness and directness of the work. Icons are not present, and the visual language is entirely image-driven with minimal interface elements.

## Layout

The site follows a full-bleed layout model, where primary content, mainly large-scale photography, extends edge-to-edge. The hero section is a full-viewport image with crisp, minimal navigation text overlaid at the top left and right. Sections flow seamlessly without distinct visual dividers or alternating background bands, maintaining consistent vertical spacing. Content is highly image-dominant, using a minimal grid for text arrangements, mostly stacking text centrally or in small, precise blocks. The navigation is a fixed top bar with a left-aligned brand name and right-aligned links, maintaining a subtle presence over the full-bleed imagery.

## Similar Brands

- **A.P.C. (archive sections)** — Stark, monochrome photography-focused UI with minimal text and navigation.
- **Acne Studios (archive photography)** — Emphasis on high-quality, full-bleed fashion photography with a very subtle, almost invisible interface.
- **The Row (older site versions)** — Highly curated, image-heavy presentation with extremely restrained typography and a neutral color palette.
- **Selected works of Jil Sander** — Focus on content purity, often using a stark black and white palette with precise, understated typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink-black: #000000;
  --color-canvas-white: #ffffff;
  --color-muted-gray: #cecece;
  --font-eu-swissrail-medium: 'EU-SwissRail-Medium', Inter;
  --text-body: 14px;
  --leading-body: 1.25;
  --tracking-body: 0.21px;
  --spacing-7: 7px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-32: 32px;
  --spacing-50: 50px;
  --spacing-130: 130px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink-black: #000000;
  --color-canvas-white: #ffffff;
  --color-muted-gray: #cecece;
  --font-eu-swissrail-medium: 'EU-SwissRail-Medium', Inter;
  --text-body: 14px;
  --leading-body: 1.25;
  --tracking-body: 0.21px;
  --spacing-7: 7px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-32: 32px;
  --spacing-50: 50px;
  --spacing-130: 130px;
  --radius-none: 0px;
}
```
