---
version: alpha
name: "Wemakethings"
description: "Wemakethings uses a high-contrast, stark contemporary language, built on a pure black-and-white canvas that functions both as background and prominent border. Type is central to the identity, featuring two custom display fonts for impact and a contemporary sans-serif for content. The design relies on bold outlines, large-scale typography, and tight visual compositions to convey presence without relying on color or complex layouts."
theme: "light"
industry: "agency"
source_url: "https://wemakethings.de"
refero_style_id: "15d57573-513b-49aa-91c7-1b7f87bb1a55"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520148991-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520148991-thumb.jpg"
extracted_at: "2026-04-30T03:36:05.314Z"
---

# Wemakethings — Style Reference

> monochrome architectural blueprint

**Theme:** light

**Industry:** agency

Wemakethings uses a high-contrast, stark contemporary language, built on a pure black-and-white canvas that functions both as background and prominent border. Type is central to the identity, featuring two custom display fonts for impact and a contemporary sans-serif for content. The design relies on bold outlines, large-scale typography, and tight visual compositions to convey presence without relying on color or complex layouts.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, card surfaces, button backgrounds |
| Headline Black | #000000 | `--color-headline-black` | Primary text, prominent borders, button text — defines the core high-contrast aesthetic |

## Tokens — Typography

### Maison Neue

- **Token:** `--font-maison-neue`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 16px, 18px, 24px, 43px, 65px
- **Line heights:** 1.11, 1.20, 1.33, 2.50
- **Letter spacing:** normal
- **Role:** Body text, navigation, interactive elements, headings. Used for all functional text components.

### Unzyale

- **Token:** `--font-unzyale`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 58px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Large decorative text links.

### BASEBLOOM

- **Token:** `--font-basebloom`
- **Substitute:** Bebas Neue
- **Weights:** 400
- **Sizes:** 864px
- **Line heights:** 0.83
- **Letter spacing:** normal
- **Role:** Massive, outlined background text elements, serving as a graphic motif that integrates with the layout.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 2.5 | — | `--text-body` |
| body-lg | 18px | 1.33 | — | `--text-body-lg` |
| heading-sm | 24px | 1.2 | — | `--text-heading-sm` |
| heading | 43px | 1.11 | — | `--text-heading` |
| heading-lg | 58px | 1.2 | — | `--text-heading-lg` |
| display | 65px | 1.11 | — | `--text-display` |
| hero | 864px | 0.83 | — | `--text-hero` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Navigation Link

**Role:** Primary navigation element

Black text (#000000) on white background, uppercase Maison Neue at 16px. Underlined on hover or active state, creating emphasis through a 1px solid black border. Padding of 10px vertical and 14px horizontal.

### Outlined Button

**Role:** Call to action for external links

White background (#ffffff) with black text and a 1px black border (#000000). Uses Maison Neue, size 16px, weight 400. No border-radius, maintaining a sharp, rectangular form. Padding is 0px vertical and 20px horizontal.

### Scroll Indicator

**Role:** Visual cue for more content

A downward arrow graphic in Headline Black (#000000), acting as a subtle call to action for scrolling, styled with Unzyale font for 'WE MAKE' adjacent to it.

## Do's and Don'ts

### Do

- Maintain a strict black and white color palette (#000000 and #ffffff) for all UI elements.
- Use Maison Neue for all functional text elements, varying weights (400, 500) and sizes to create hierarchy.
- Incorporate large BASEBLOOM outlines as background graphic motifs, as seen in the hero section, to reinforce brand identity.
- Ensure all interactive elements, such as buttons and links, use strong 1px borders of Headline Black (#000000).
- Utilize a rigid 0px border-radius for all rectilinear components like buttons and containers.
- Apply 20px of padding regularly around elements and inside cards to maintain comfortable density.
- Arrange content with clear visual separation, often framed by the implicit 1px borders or explicit blank space around elements.

### Don't

- Avoid introducing any additional colors beyond the pure black and white palette.
- Do not use rounded corners or soft edges on any UI elements; maintain sharp, angular forms.
- Refrain from using drop shadows or complex elevation techniques; rely on borders and spatial separation for visual hierarchy.
- Do not use generic system fonts; always specify Maison Neue, Unzyale, or BASEBLOOM for their distinct characteristics.
- Avoid decorative images or illustrations; the primary visual language is driven by typography and structure.
- Do not use subtle color changes for interactive states; rely on underlines, border changes, or text weight adjustments.
- Do not break the high-contrast aesthetic with low-contrast text-to-background combinations.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Background | #ffffff | The foundational canvas for all content, providing a stark, clean base. |
| 1 | Card Surface | #ffffff | Used for informational blocks and interactive components, delineated by a strong 1px black border. |

## Imagery

The site uses no traditional imagery (photography, illustration, or product shots). Instead, large-scale, outlines of custom typography, specifically 'BASEBLOOM WE MAKE', serve as the primary visual elements. These typographic 'images' are full-bleed (or near full-bleed), integrated into the background structure of sections, providing a strong, graphic, and highly branded visual identity. Icons, when present, are minimal and outlined, like the arrow scroll indicator, keeping true to the monochrome, high-contrast aesthetic.

## Layout

The page primarily uses a full-bleed model, allowing content and large typographic elements to stretch across the viewport, rather than conforming to a strict max-width container. The hero features a large, horizontally stretching headline and subtext, with a massive outlined typography graphic ('BASEBLOOM') in the background, anchoring the visual style. Sections divide content vertically with consistent spacing (e.g., 60px section gap) and often feature large-scale text as a dominant visual. Content arrangement is primarily stacked centrally or in simple 2-column structures, with a notable exception being the 'Brands' section which uses a 10-column, vertically oriented title card grid, each flanked by a narrow outline. Navigation is a minimalist top bar, fixed to the top of the viewport, with textual links and a subtle arrow icon.

## Similar Brands

- **AIGA Design Archives** — High-contrast black-and-white, strong typographic focus, and clean, unadorned layouts.
- **Babel** — Minimalist design, heavy reliance on large, custom typography for visual impact, and a stark color palette.
- **Offscreen Magazine** — Emphasis on editorial typography, simple grid structures, and a restrained color palette mostly grayscale.
- **Actual Source** — Bold, experimental typography, high-contrast layouts, and a strong graphic identity over imagery.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-headline-black: #000000;
  --font-maison-neue: 'Maison Neue', Inter;
  --font-unzyale: 'Unzyale', Playfair Display;
  --font-basebloom: 'BASEBLOOM', Bebas Neue;
  --text-body: 16px;
  --leading-body: 2.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.33;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 43px;
  --leading-heading: 1.11;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.2;
  --text-display: 65px;
  --leading-display: 1.11;
  --text-hero: 864px;
  --leading-hero: 0.83;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --radius-none: 0px;
  --surface-page-background: #ffffff;
  --surface-card-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-headline-black: #000000;
  --font-maison-neue: 'Maison Neue', Inter;
  --font-unzyale: 'Unzyale', Playfair Display;
  --font-basebloom: 'BASEBLOOM', Bebas Neue;
  --text-body: 16px;
  --leading-body: 2.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.33;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 43px;
  --leading-heading: 1.11;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.2;
  --text-display: 65px;
  --leading-display: 1.11;
  --text-hero: 864px;
  --leading-hero: 0.83;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --radius-none: 0px;
  --surface-page-background: #ffffff;
  --surface-card-surface: #ffffff;
}
```
