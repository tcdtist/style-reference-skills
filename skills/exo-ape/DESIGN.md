---
version: alpha
name: "Exo Ape"
description: "Exo Ape embraces a grand, architectural aesthetic, layering substantial typography and large-scale imagery against a stark yet subtle neutral palette. Text carries the primary visual weight, with massive display typography and precise letter-spacing establishing a commanding presence. Functional interactions are understated, allowing content blocks and imagery to dominate the visual field without interruption."
theme: "light"
industry: "agency"
source_url: "https://www.exoape.com"
refero_style_id: "18e84ffd-4a5d-453d-aeff-dae2847aa3c9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513890739-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513890739-thumb.jpg"
extracted_at: "2026-04-30T01:52:07.084Z"
---

# Exo Ape — Style Reference

> Architectural grandiosity on textured paper.

**Theme:** light

**Industry:** agency

Exo Ape embraces a grand, architectural aesthetic, layering substantial typography and large-scale imagery against a stark yet subtle neutral palette. Text carries the primary visual weight, with massive display typography and precise letter-spacing establishing a commanding presence. Functional interactions are understated, allowing content blocks and imagery to dominate the visual field without interruption.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Carbon | #0d0e13 | `--color-carbon` | Primary text, dark backgrounds for contrast, borders, subtle icons |
| Paper White | #ffffff | `--color-paper-white` | Page backgrounds, navigational elements, reversed text in dark sections, borders |
| Plaster | #e4e0db | `--color-plaster` | Subtle background surfaces, subdued text, borders for architectural elements |
| Sandstone | #e0ccbb | `--color-sandstone` | Decorative borders, accents in footers and lists, subtle background fills |
| Parchment | #e6d7ca | `--color-parchment` | Text for body content and links, outlines for interactive elements |
| Ink Black | #070707 | `--color-ink-black` | Footer background |
| Slate | #6e6e71 | `--color-slate` | Muted body text, borders |
| Stone Gray | #9e9fa1 | `--color-stone-gray` | Subtle background fills for secondary elements |

## Tokens — Typography

### Lausanne-400

- **Token:** `--font-lausanne-400`
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 2.64
- **Role:** Lausanne-400 — detected in extracted data but not described by AI

### Lausanne

- **Token:** `--font-lausanne`
- **Substitute:** Inter, Montserrat
- **Weights:** 400
- **Sizes:** 14px, 16px, 24px, 144px, 250px
- **Line heights:** 0.73, 0.76, 0.90, 1.00, 1.33, 1.50, 1.88
- **Letter spacing:** 0.084, -0.56, -0.84, -6.624, -11.5
- **Role:** Dominant branding and large display headlines use Lausanne-400 at massive sizes, characterized by tight negative letter-spacing for impact and a contemporary feel.

### Times

- **Token:** `--font-times`
- **Substitute:** serif system font
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20, 2.00
- **Letter spacing:** normal
- **Role:** Used sparingly for traditional elements and general body text, providing a classic counterpoint to the modern display font. Often found in detailed content sections and navigation.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.88 | 0.084px | `--text-body` |
| body-lg | 16px | 1.5 | -0.56px | `--text-body-lg` |
| subheading | 24px | 1.33 | -0.84px | `--text-subheading` |
| display-lg | 144px | 0.9 | -6.624px | `--text-display-lg` |
| display | 250px | 0.73 | -11.5px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-67 | 67px | `--spacing-67` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-206 | 206px | `--spacing-206` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 60px |
| cardPadding | 15px |
| elementGap | 13px |

## Components

## Do's and Don'ts

### Do

- Employ Lausanne-400 with negative letter-spacing for all headlines and display text to maintain visual impact and distinction.
- Use Paper White (#ffffff) as the primary background for most page content, creating a bright canvas.
- Incorporate Carbon (#0d0e13) for primary text and dark backgrounds to ensure strong contrast and depth.
- Utilize Sandstone (#e0ccbb) for decorative borders and accents, especially in footers or list items, to add a subtle organic texture.
- Maintain generous vertical spacing between sections, typically 60px, to create an airy, unhurried page rhythm.
- Outline interactive elements like links and navigation items using Parchment (#e6d7ca) as a border color, avoiding filled button styles.
- Ensure all primary content stays within a 1200px max-width, center-aligned, for consistent structure.

### Don't

- Avoid using highly saturated, chromatic colors for backgrounds or large areas; the palette is predominantly neutral.
- Do not introduce heavy box shadows or strong elevation effects; surfaces remain largely flat and layered through color rather than depth.
- Refrain from using generic sans-serif fonts for headlines; stick to Lausanne for its distinctive character and tight tracking.
- Do not use small, dense text blocks, especially on large headlines; prioritize spaciousness and readability even for large type.
- Avoid decorative gradients or overwhelming imagery that distracts from the large typography and clean surfaces.
- Do not apply large border-radius values to elements; a lack of explicit radius implies sharp, architectural edges.
- Avoid strong visual dividers between sections; rely on background color changes or generous spacing to delineate blocks.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Paper White | #ffffff | Primary page background, base layer. |
| 2 | Plaster | #e4e0db | Secondary background, often for slightly recessed content blocks. |
| 3 | Sandstone Footer | #e0ccbb | Distinct background for the footer, providing a grounded contrast. |
| 4 | Ink Black Surface | #070707 | Darkest background surface, providing ultimate contrast for footer text. |

## Imagery

This design system uses large-scale, high-quality photography, often depicting architectural structures or abstract, atmospheric scenes in full-bleed hero sections. The imagery serves as a dramatic backdrop rather than a detailed explanation, evoking a sense of grandeur and professional calm. Photography is typically desaturated or features subtle cool tones, aligning with the neutral color palette. Product shots or illustrative elements are absent, maintaining the focus on an experience-driven and sophisticated aesthetic.

## Layout

The page model is primarily a max-width contained layout at 1200px, though hero sections extend full-bleed. The hero pattern features large, atmospheric imagery with overlaid, monumental white typography and descriptive text. Content sections typically follow a consistent vertical rhythm, using generous section gaps, and often present information in a single-column or alternating text-left/image-right pattern. Navigation is a minimalist top bar, blending into the hero at the start and likely becoming sticky on scroll. The overall density is spacious, allowing content to breathe.

## Similar Brands

- **Awwwards** — Features large, impactful typography, full-bleed imagery, and a focus on subtle interactions over bold UI elements.
- **Locomotive Agency** — Employs an architectural style with large type, subtle backgrounds, and a focus on curated brand experience.
- **Anton & Irene** — Showcases work with oversized typography, a minimalist color scheme, and an emphasis on visual storytelling through imagery.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-carbon: #0d0e13;
  --color-paper-white: #ffffff;
  --color-plaster: #e4e0db;
  --color-sandstone: #e0ccbb;
  --color-parchment: #e6d7ca;
  --color-ink-black: #070707;
  --color-slate: #6e6e71;
  --color-stone-gray: #9e9fa1;
  --font-lausanne-400: 'Lausanne-400', ui-sans-serif, system-ui, sans-serif;
  --font-lausanne: 'Lausanne', Inter, Montserrat;
  --font-times: 'Times', serif system font;
  --text-body: 14px;
  --leading-body: 1.88;
  --tracking-body: 0.084px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.56px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.84px;
  --text-display-lg: 144px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: -6.624px;
  --text-display: 250px;
  --leading-display: 0.73;
  --tracking-display: -11.5px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-67: 67px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-200: 200px;
  --spacing-206: 206px;
  --surface-paper-white: #ffffff;
  --surface-plaster: #e4e0db;
  --surface-sandstone-footer: #e0ccbb;
  --surface-ink-black-surface: #070707;
}
```

### Tailwind v4

```css
@theme {
  --color-carbon: #0d0e13;
  --color-paper-white: #ffffff;
  --color-plaster: #e4e0db;
  --color-sandstone: #e0ccbb;
  --color-parchment: #e6d7ca;
  --color-ink-black: #070707;
  --color-slate: #6e6e71;
  --color-stone-gray: #9e9fa1;
  --font-lausanne-400: 'Lausanne-400', ui-sans-serif, system-ui, sans-serif;
  --font-lausanne: 'Lausanne', Inter, Montserrat;
  --font-times: 'Times', serif system font;
  --text-body: 14px;
  --leading-body: 1.88;
  --tracking-body: 0.084px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.56px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.84px;
  --text-display-lg: 144px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: -6.624px;
  --text-display: 250px;
  --leading-display: 0.73;
  --tracking-display: -11.5px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-67: 67px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-200: 200px;
  --spacing-206: 206px;
  --surface-paper-white: #ffffff;
  --surface-plaster: #e4e0db;
  --surface-sandstone-footer: #e0ccbb;
  --surface-ink-black-surface: #070707;
}
```
