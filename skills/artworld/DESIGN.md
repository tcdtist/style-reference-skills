---
version: alpha
name: "ARTWORLD"
description: "ARTWORLD projects an austere, gallery-like visual identity, dominated by stark black and white. Typography takes center stage, mixing a bold, modern sans-serif with an elegant serif in both regular and italic styles. The layout is spacious, giving elements ample room to breathe, while interactions are subtly expressed through text-only links and ghost borders."
theme: "dark"
industry: "design"
source_url: "https://artworld.agency"
refero_style_id: "bab94db1-25ec-459d-8c81-5905a0324b65"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517395864-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517395864-thumb.jpg"
extracted_at: "2026-04-30T02:50:15.446Z"
---

# ARTWORLD — Style Reference

> monochrome gallery canvas

**Theme:** dark

**Industry:** design

ARTWORLD projects an austere, gallery-like visual identity, dominated by stark black and white. Typography takes center stage, mixing a bold, modern sans-serif with an elegant serif in both regular and italic styles. The layout is spacious, giving elements ample room to breathe, while interactions are subtly expressed through text-only links and ghost borders.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Black | #000000 | `--color-canvas-black` | Page backgrounds, primary text, structural borders, logo text — creates a high-contrast, bold foundation |
| Surface White | #ffffff | `--color-surface-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### Graphik Light

- **Token:** `--font-graphik-light`
- **Substitute:** Inter
- **Weights:** 300
- **Sizes:** 12px, 16px, 20px
- **Line heights:** 1.20, 1.50, 1.58
- **Letter spacing:** -0.0650em
- **Role:** Body text, navigation links, secondary information, and small descriptive labels.

### Cardinal Fruit

- **Token:** `--font-cardinal-fruit`
- **Substitute:** Playfair Display
- **Weights:** 300
- **Sizes:** 18px, 65px, 75px
- **Line heights:** 1.00, 1.09, 1.20
- **Letter spacing:** -0.0310em, -0.0100em
- **Role:** Primary headings and brand elements, conveying a sophisticated and art-focused aesthetic.

### Cardinal Fruit Italic

- **Token:** `--font-cardinal-fruit-italic`
- **Substitute:** Playfair Display Italic
- **Weights:** 300
- **Sizes:** 16px, 65px, 75px
- **Line heights:** 1.00, 1.09, 1.50
- **Letter spacing:** -0.0310em, -0.0100em
- **Role:** Display headings, artist names, and highlighted textual content to add emphasis and elegance.

### Cardinal Classic Italic

- **Token:** `--font-cardinal-classic-italic`
- **Substitute:** Playfair Display Italic
- **Weights:** 300
- **Sizes:** 18px
- **Line heights:** 1.20
- **Letter spacing:** -0.0110em
- **Role:** Specialized body contexts, captions, and footers, offering a subtle, refined touch.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | -0.78px | `--text-caption` |
| body-sm | 16px | 1.5 | -1.04px | `--text-body-sm` |
| body | 18px | 1.2 | -0.198px | `--text-body` |
| body-lg | 20px | 1.58 | -1.3px | `--text-body-lg` |
| display-sm | 65px | 1 | -2.015px | `--text-display-sm` |
| display | 75px | 1.09 | -0.75px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-95 | 95px | `--spacing-95` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

## Do's and Don'ts

### Do

- Use Canvas Black (#000000) for all primary backgrounds and primary text.
- Apply Surface White (#ffffff) for inverse text or decorative elements on dark backgrounds.
- Prioritize Graphik Light (300) for all functional text, maintaining -0.0650em letter-spacing.
- Reserve Cardinal Fruit (300) and its italic variants for headings and prominent textual features, using specific letter-spacing values like -0.0310em or -0.0100em.
- Maintain a spacious density for all layouts, with a minimum element gap of 20px and section gap of 40px.
- Ensure all interactive elements are text-based or have subtle ghost borders in Canvas Black (#000000).
- Adhere to a strict monochrome palette; avoid introducing any chromatic colors unless explicitly stated for semantic purposes (which are not present in this system).

### Don't

- Do not use box shadows or other elevation effects; all surfaces should remain flat.
- Avoid colored backgrounds or elements other than Canvas Black (#000000) or Surface White (#ffffff).
- Do not introduce rounded corners; maintain sharp, crisp edges for all elements.
- Refrain from using heavily decorative gradients or textures.
- Do not deviate from the specified font families, weights, and letter-spacing values to maintain the distinct typographic hierarchy.
- Avoid dense, information-packed layouts; preserve ample whitespace around elements.
- Do not use explicit button backgrounds for primary actions; rely on text-only links or ghost borders defined by Canvas Black.

## Imagery

This system features no visible photographic or illustrative imagery on the main white canvas. The visual language is purely typographic, with the exception of possible small, unobtrusive icons that would maintain the monochrome, crisp aesthetic. The brand identity is communicated through font choices and composition rather than pictorial content.

## Layout

The page operates on a full-bleed structure, with content (primarily text) filling the horizontal space. The hero section is characterized by large, often italicized display typography. Sections exhibit consistent vertical spacing, creating an airy, uncrowded experience. Content is arranged in stacked text blocks, with some elements appearing in two-column structures implicitly through alignment rather than explicit grids. Navigation is minimal, likely integrated as discreet text links.

## Similar Brands

- **The Row** — Minimalist, monochrome aesthetic with text-focused layouts and luxury typography.
- **A-POC by Issey Miyake** — Emphasis on singular statement typefaces, high contrast black and white, and refined, spacious layouts.
- **Studio Dielman** — Stark, type-driven design with limited color palette and a clear, almost architectural approach to spacing.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-black: #000000;
  --color-surface-white: #ffffff;
  --font-graphik-light: 'Graphik Light', Inter;
  --font-cardinal-fruit: 'Cardinal Fruit', Playfair Display;
  --font-cardinal-fruit-italic: 'Cardinal Fruit Italic', Playfair Display Italic;
  --font-cardinal-classic-italic: 'Cardinal Classic Italic', Playfair Display Italic;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.78px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -1.04px;
  --text-body: 18px;
  --leading-body: 1.2;
  --tracking-body: -0.198px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.58;
  --tracking-body-lg: -1.3px;
  --text-display-sm: 65px;
  --leading-display-sm: 1;
  --tracking-display-sm: -2.015px;
  --text-display: 75px;
  --leading-display: 1.09;
  --tracking-display: -0.75px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-76: 76px;
  --spacing-90: 90px;
  --spacing-95: 95px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-black: #000000;
  --color-surface-white: #ffffff;
  --font-graphik-light: 'Graphik Light', Inter;
  --font-cardinal-fruit: 'Cardinal Fruit', Playfair Display;
  --font-cardinal-fruit-italic: 'Cardinal Fruit Italic', Playfair Display Italic;
  --font-cardinal-classic-italic: 'Cardinal Classic Italic', Playfair Display Italic;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.78px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -1.04px;
  --text-body: 18px;
  --leading-body: 1.2;
  --tracking-body: -0.198px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.58;
  --tracking-body-lg: -1.3px;
  --text-display-sm: 65px;
  --leading-display-sm: 1;
  --tracking-display-sm: -2.015px;
  --text-display: 75px;
  --leading-display: 1.09;
  --tracking-display: -0.75px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-76: 76px;
  --spacing-90: 90px;
  --spacing-95: 95px;
  --radius-default: 0px;
}
```
