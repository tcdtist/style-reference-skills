---
version: alpha
name: "Consumedinkey"
description: "Consumedinkey's design system emanates a stark, minimalist severity, prioritizing content with an absolute monochrome palette. Typography, the primary visual element, is rendered in high-contrast against expansive, unblemished surfaces. The visual language is ascetic, focusing on direct communication and an almost complete absence of decorative components or background textures."
theme: "light"
industry: "media"
source_url: "https://www.consumedinkey.com"
refero_style_id: "9d29d491-b705-46e1-9598-a4a70468e7e0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514428220-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514428220-thumb.jpg"
extracted_at: "2026-04-30T02:00:41.964Z"
---

# Consumedinkey — Style Reference

> Monochrome starkness; an uncompromising canvas of text and light.

**Theme:** light

**Industry:** media

Consumedinkey's design system emanates a stark, minimalist severity, prioritizing content with an absolute monochrome palette. Typography, the primary visual element, is rendered in high-contrast against expansive, unblemished surfaces. The visual language is ascetic, focusing on direct communication and an almost complete absence of decorative components or background textures.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Pitch Black | #000000 | `--color-pitch-black` | Primary text color, background for inverse sections, and the dominant cursor character. It provides unflinching contrast against Canvas White |

## Tokens — Typography

### Helvetica LT

- **Token:** `--font-helvetica-lt`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 14px, 16px, 40px, 64px
- **Line heights:** 1.00, 1.25
- **Letter spacing:** 0.0400em
- **Role:** The sole typeface, used for all textual content from headings to body text. Its neutral, legible character perfectly supports the site's spartan aesthetic, with varying sizes defining hierarchy through scale alone.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.25 | 0.56px | `--text-caption` |
| body | 16px | 1.25 | 0.64px | `--text-body` |
| heading | 40px | 1 | 1.6px | `--text-heading` |
| display | 64px | 1 | 2.56px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-108 | 108px | `--spacing-108` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 72px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Ghost Link Button

**Role:** Interactive navigation and calls-to-action.

Rendered as white text on a transparent background, with a subtle 1px white border on hover/focus. Uses Helvetica LT, weight 400, no explicit padding, and 0px border-radius, contributing to an understated interaction style.

### Primary Headline

**Role:** Section titles and prominent textual emphasis.

Large text using Helvetica LT, weight 400, in Pitch Black. Sizes include 40px and 64px, with line heights tuned for compact displays. No additional styling, relying purely on size and weight for impact.

### Body Text

**Role:** General content and explanatory paragraphs.

Helvetica LT, weight 400, in Pitch Black on Canvas White. Rendered at 14px or 16px, with a line height of 1.25. Maintains high legibility within the monochrome design.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) as the dominant background color for most sections, establishing a high-contrast foundation.
- Use Pitch Black (#000000) for all text and as the background for inverted sections (e.g., hero section).
- Implement Helvetica LT, weight 400, for all typographic needs, varying only the font size to create hierarchy.
- Apply a consistent letter-spacing of 0.0400em to all Helvetica LT text to maintain its defined character.
- Maintain a default border-radius of 0px for all elements, reinforcing the sharp, unadorned aesthetic.
- Utilize 72px as the standard vertical spacing between major page sections.
- Define interactive elements such as links and buttons with a transparent background, white text, and a 1px white border on interaction states to preserve the minimalist presentation.

### Don't

- Avoid the introduction of any chromatic colors; the palette is strictly monochrome.
- Do not use any shadows or gradients for elevation or decorative purposes.
- Refrain from using border-radius values other than 0px.
- Do not introduce additional font families or weights beyond Helvetica LT 400.
- Avoid using decorative imagery or complex graphic elements; visual focus should remain on typography and direct contrast.
- Do not add any padding to interactive link or button elements for a minimal, integrated appearance.

## Imagery

This site features a complete absence of conventional imagery. Instead, it relies on typography and the stark contrast of its monochrome palette to convey information and mood. The presence of a prominent black vertical bar (like a text cursor) in the hero section acts as a minimalist, abstract visual anchor. Icons are not present on the site, reinforcing its text-dominant, utilitarian approach. Density is extremely low, with ample negative space.

## Layout

The page adheres to a full-bleed layout, horizontally extending content to the viewport edges without a dedicated `pageMaxWidth`. Sections are delineated by shifts in background color (either Canvas White or Pitch Black) and a generous vertical `sectionGap` of 72px. The hero section often features oversized, centered typography. Content arrangement is primarily composed of large, single-column text blocks or simple two-column layouts, usually text-dominant. The navigation consists of discreet, non-intrusive `Ghost Link Buttons` positioned at the top corners of the page, blending into the background until hovered.

## Similar Brands

- **A24 FILMS** — Employs heavy use of monochrome, bold typography, and minimalist layouts for cinematic impact.
- **Massimo Vignelli's website** — Adheres to a strict design philosophy using Helvetica, high contrast, and grid-based, unadorned layouts.
- **The Paragraphs (a design agency)** — Features a very stark, text-heavy design with limited visual elements and a strong emphasis on typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-pitch-black: #000000;
  --font-helvetica-lt: 'Helvetica LT', Arial;
  --text-caption: 14px;
  --leading-caption: 1.25;
  --tracking-caption: 0.56px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: 0.64px;
  --text-heading: 40px;
  --leading-heading: 1;
  --tracking-heading: 1.6px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: 2.56px;
  --spacing-4: 4px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-32: 32px;
  --spacing-61: 61px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-108: 108px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-pitch-black: #000000;
  --font-helvetica-lt: 'Helvetica LT', Arial;
  --text-caption: 14px;
  --leading-caption: 1.25;
  --tracking-caption: 0.56px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: 0.64px;
  --text-heading: 40px;
  --leading-heading: 1;
  --tracking-heading: 1.6px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: 2.56px;
  --spacing-4: 4px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-32: 32px;
  --spacing-61: 61px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-108: 108px;
  --radius-default: 0px;
}
```
