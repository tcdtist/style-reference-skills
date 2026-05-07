---
version: alpha
name: "19–86"
description: "This design system evokes the precision and meticulousness of architectural blueprints, presented with stark clarity. The visual field is dominated by pure black text and lines against an unblemished white background, creating an impression of objective documentation. The singular `store_norske_ja_light` font, with its consistent weight and precise letter-spacing, grounds the aesthetic in technical rigor while allowing large display elements like \"19-86\" to feel monumental yet understated due to their light weight."
theme: "light"
industry: "agency"
source_url: "https://19-86.fr"
refero_style_id: "6f428c12-ba43-48e3-9a52-299ec1ce509b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926168148-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926168148-thumb.jpg"
extracted_at: "2026-04-11T16:49:42.245Z"
---

# 19–86 — Style Reference

> Architectural blueprint on white marble. The system is built on a high-contrast, minimalist palette of black and white, reminiscent of technical drawings.

**Theme:** light

**Industry:** agency

This design system evokes the precision and meticulousness of architectural blueprints, presented with stark clarity. The visual field is dominated by pure black text and lines against an unblemished white background, creating an impression of objective documentation. The singular `store_norske_ja_light` font, with its consistent weight and precise letter-spacing, grounds the aesthetic in technical rigor while allowing large display elements like "19-86" to feel monumental yet understated due to their light weight.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian Black | #000000 | `--color-obsidian-black` | Primary text, headings, table lines, accent dots — provides stark contrast on white, suggesting permanence and clarity. |
| Pure White | #FFFFFF | `--color-pure-white` | Page backgrounds, surface elements — establishes a clean, expansive canvas. |
| Ash Gray | #8C8C8C | `--color-ash-gray` | Link text in inactive state — offers a subtle desaturation from primary black, indicating interactive but not primary status. |

## Tokens — Typography

### store_norske_ja_light

- **Token:** `--font-store-norske-ja-light`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 24px, 490px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.0200em
- **OpenType features:** "kern"
- **Role:** All textual content, from body copy to oversized display numbers. The single light weight (400) even at large sizes is the signature, providing an authoritative yet non-aggressive presence due to its subtlety.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 24px | 1.2 | -0.02px | `--text-body` |
| display | 490px | 1 | -0.02px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 24px |
| elementGap | 5px |

## Components

### Project Table with Header

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Display Monogram

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Link Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Table Row

**Role:** Data display

A single line item in a list with `paddingTop: 5px`, `paddingBottom: 8px`, and a `border-bottom` of 1px solid `Obsidian Black` (#000000). Text is `Obsidian Black` (#000000) using `store_norske_ja_light`.

### Table Header Cell

**Role:** Table column title

Headers for tabular data, with `paddingBottom: 12px` and a `border-bottom` of 1px solid `Obsidian Black` (#000000). Text is `Obsidian Black` (#000000) using `store_norske_ja_light`.

### Link Button

**Role:** Interactive navigation

Simple text link, using `Ash Gray` (#8C8C8C) for text when not primary, and `Obsidian Black` (#000000) or inferred accent colors for active states. Uses `store_norske_ja_light` font family.

## Do's and Don'ts

### Do

- Prioritize `Obsidian Black` (#000000) text on `Pure White` (#FFFFFF) backgrounds for all content.
- Utilize `store_norske_ja_light` (or Montserrat) at weight 400 for all typography, maintaining a consistent light aesthetic.
- Implement -0.0200em letter spacing for all text elements to maintain typographic precision.
- Structure content primarily in tabular or list formats with clear 1px solid `Obsidian Black` (#000000) dividers for organization.
- Use subtle spacing increments like `5px` and `8px` for internal element padding, creating a comfortable yet contained feel.
- Leverage the large `490px` `store_norske_ja_light` weight 400 for dominant display elements to infuse monumental scale without visual heaviness.

### Don't

- Avoid shadows or complex gradients; rely on pure black and white for depth and visual interest.
- Do not introduce additional font families or arbitrary weights; maintain the singular light aesthetic of `store_norske_ja_light`.
- Do not use saturated or vivid chromatic colors; the system relies on a strictly achromatic palette with a single muted accent (Ash Gray) for links.
- Avoid highly rounded corners or soft shapes; prioritize crisp lines and rectangular forms.
- Do not vary line heights excessively; stick to the defined `1.00` and `1.20` ratios for consistency and readability.
- Do not use a `pageMaxWidth`; allow content to span the full width where appropriate, but maintain internal content alignment.

## Imagery

The visual language is characterized by an absence of traditional imagery like photography or illustrations. Instead, the design foregrounds text as the primary visual element. The large-scale number '19-86' functions as a graphical focal point, treated with the same typographic precision as smaller text, yet gaining monumental presence through its size. Simple, singular black dots serve as purely functional icons, mirroring the minimalist and high-contrast approach.

## Layout

The page exhibits a full-bleed, uncontained model, but with strong internal alignment and a structured tabular presentation that implies a grid. The hero section is characterized by the monumental '19-86' central to the screen, serving as both branding and a strong visual anchor. Content below flows in a list-like fashion with alternating text and subtle horizontal dividers creating a rhythm. The overall density is comfortable, with ample vertical spacing between content blocks, contrasting with the precise, tight typography.

## Similar Brands

- **AIGA Journal** — Monochromatic palette, emphasis on typography as primary visual, strict grid-like organization for content.
- **Grilli Type** — Typographic focus, large-scale numbers and text used as design elements, high-contrast black and white aesthetic.
- **Norm Architects** — Minimalist aesthetic, muted color palette (or lack thereof), emphasis on structure and clean lines over ornamentation.
- **Office of Paul Sahre** — Emphasis on singular, strong typographic statements, often with a stark, high-contrast visual style.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian-black: #000000;
  --color-pure-white: #FFFFFF;
  --color-ash-gray: #8C8C8C;
  --font-store-norske-ja-light: 'store_norske_ja_light', Montserrat;
  --text-body: 24px;
  --leading-body: 1.2;
  --tracking-body: -0.02px;
  --text-display: 490px;
  --leading-display: 1;
  --tracking-display: -0.02px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian-black: #000000;
  --color-pure-white: #FFFFFF;
  --color-ash-gray: #8C8C8C;
  --font-store-norske-ja-light: 'store_norske_ja_light', Montserrat;
  --text-body: 24px;
  --leading-body: 1.2;
  --tracking-body: -0.02px;
  --text-display: 490px;
  --leading-display: 1;
  --tracking-display: -0.02px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --radius-none: 0px;
}
```
