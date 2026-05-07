---
version: alpha
name: "bella Kitchen Appliances"
description: "The bella design system presents a warm, inviting feel through its use of soft, off-white backgrounds and a prominent, vibrant orange accent. Typography is a blend of classic and modern, conveying a comfortable yet sophisticated brand. Product showcases feature rounded cards that bring a friendly, approachable quality, contrasting with the crisp product imagery. The overall impression is clean, approachable, and focused on clear product presentation."
theme: "light"
industry: "ecommerce"
source_url: "https://bellakitchenware.com"
refero_style_id: "e327d332-270d-4779-a55c-cd82b8624d2a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508885302-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508885302-thumb.jpg"
extracted_at: "2026-04-30T00:28:23.590Z"
---

# bella Kitchen Appliances — Style Reference

> Warm kitchen canvas

**Theme:** light

**Industry:** ecommerce

The bella design system presents a warm, inviting feel through its use of soft, off-white backgrounds and a prominent, vibrant orange accent. Typography is a blend of classic and modern, conveying a comfortable yet sophisticated brand. Product showcases feature rounded cards that bring a friendly, approachable quality, contrasting with the crisp product imagery. The overall impression is clean, approachable, and focused on clear product presentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #000000 | `--color-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas | #ebeadf | `--color-canvas` | Dominant page background for a soft, inviting base layer |
| Snow | #ffffff | `--color-snow` | Component backgrounds, button fills, and secondary surface layers |
| Sandstone | #d5cec0 | `--color-sandstone` | Subtle background for cards and secondary page sections, providing gentle visual separation |
| Tangerine | #f04923 | `--color-tangerine` | Orange wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |

## Tokens — Typography

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400, 700
- **Sizes:** 16px, 32px
- **Line heights:** 1.00
- **Role:** Fallback and decorative usage, often for short, impactful statements or where a classic serif feel is desired.

### Supreme LL TT

- **Token:** `--font-supreme-ll-tt`
- **Substitute:** Arial
- **Weights:** 400, 700
- **Sizes:** 13px, 14px, 16px, 18px, 22px, 24px, 40px
- **Line heights:** 0.89, 1.10, 1.40, 1.50, 1.83
- **Letter spacing:** -0.0500em
- **Role:** Primary brand typeface for all body text, headings, and interactive elements. Its subtle tracking adds a distinctive, composed feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | -0.05px | `--text-caption` |
| heading-sm | 18px | 1.4 | -0.05px | `--text-heading-sm` |
| heading | 22px | 1.1 | -0.05px | `--text-heading` |
| heading-lg | 24px | 1.1 | -0.05px | `--text-heading-lg` |
| display | 40px | 0.89 | -0.05px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-116 | 116px | `--spacing-116` |
| spacing-134 | 134px | `--spacing-134` |
| spacing-167 | 167px | `--spacing-167` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| buttons | 999px |
| general | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 167px |
| cardPadding | 24px |
| elementGap | 12px |

## Components

### Text Link

**Role:** Navigational and descriptive links.

Utilizes Ink text color, 0px border-radius, and 0px padding. The hover state implies only text color change or subtle underline.

### Pill Button

**Role:** Primary interaction button for calls to action.

Features a Snow background with Ink text, a border-radius of 999px (full pill shape), and padding of 5px top, 10px right, 10px bottom, 10px left.

### Ghost Button

**Role:** Secondary or alternative actions where visual weight is less important.

Transparent background with Ink text and an Ink border, 0px border-radius, and 0px padding. It integrates seamlessly into surrounding text.

### Product Highlight Card

**Role:** Showcasing featured products or promotions with high visual impact.

Filled with a vivid Tangerine background, corners rounded at 12px. Internal padding is 22px top, 0px horizontal, 24px bottom.

### General Content Card

**Role:** Standard container for product listings and informational blocks.

Uses a soft Sandstone background, with 12px rounded corners. Internal padding is 40px top, 0px horizontal, 48px bottom.

## Do's and Don'ts

### Do

- Use Canvas (#ebeadf) as the base background for most page sections, ensuring a warm and inviting feel.
- Apply Ink (#000000) for all primary text, borders, and iconography to maintain high contrast and legibility.
- Round corners with a 12px radius for all general cards and containers, and 999px for pill-shaped buttons and tags.
- Elevate critical information or calls to action by placing them on Tangerine (#f04923) backgrounds.
- Utilize Supreme LL TT for all typographic elements, leveraging its specific letter-spacing of -0.0500em for a refined appearance.
- Break up content with sections using Sandstone (#d5cec0) to create subtle, visual segmentation without harsh divisions.
- Maintain an element gap of 12px for consistent spacing between interactive elements and content blocks.

### Don't

- Avoid using harsh white backgrounds unless for specific component surfaces, to preserve the warm aesthetic.
- Do not use multiple accent colors; Tangerine (#f04923) should be the singular vibrant accent.
- Do not vary border radii outside of 12px for cards and 999px for buttons, to maintain shape consistency.
- Avoid generic system fonts; always prioritize Supreme LL TT for brand consistency.
- Do not over-emphasize elements with heavy shadows or gradients; the design relies on color and spacing for hierarchy.
- Do not use Tangerine (#f04923) for text or small icons unless against a very light background, due to insufficient contrast against other brand colors.
- Avoid excessive padding or small element gaps, as the system favors comfortable density with an element gap of 12px and card padding of 24px.

## Imagery

The site heavily features product photography, presented as hero assets against vibrant backgrounds or styled within realistic kitchen environments. Products are typically shown cleanly, often against white or neutral backdrops in a studio setting, or as central objects in lifestyle vignettes. Illustrations are minimal, predominantly used for branding or small decorative accents. Icons are monochromatic, using clean outlines. Imagery serves to showcase product functionality and aesthetic appeal.

## Layout

The page structure utilizes a contained layout with a comfortable density. Hero sections are dynamic, often featuring full-bleed vibrant backgrounds with product-focused imagery and overlaid text. Content sections follow a patterned rhythm, alternating between full-width immersive scenes (like the kitchen environment) and structured grid layouts for product display. A consistent vertical spacing strategy is employed using a base unit of 4px. Navigation is handled by a sticky top bar with minimal links. Product grids are typically 4-column, displaying items with associated pricing and 'Bestseller' tags.

## Similar Brands

- **Our Place** — Soft, muted color palettes mixed with a single vibrant accent, and a focus on aesthetically pleasing kitchenware.
- **Fellow Products** — Clean design with emphasis on product photography against neutral or minimalist backdrops, and a mix of serif/sans-serif typography.
- **Made In Cookware** — Direct product focus, often featuring single accent colors for promotional sections, and a comfortable, approachable content density.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #000000;
  --color-canvas: #ebeadf;
  --color-snow: #ffffff;
  --color-sandstone: #d5cec0;
  --color-tangerine: #f04923;
  --font-times: 'Times', Times New Roman;
  --font-supreme-ll-tt: 'Supreme LL TT', Arial;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.05px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.05px;
  --text-heading: 22px;
  --leading-heading: 1.1;
  --tracking-heading: -0.05px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.05px;
  --text-display: 40px;
  --leading-display: 0.89;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-72: 72px;
  --spacing-76: 76px;
  --spacing-96: 96px;
  --spacing-116: 116px;
  --spacing-134: 134px;
  --spacing-167: 167px;
  --radius-cards: 12px;
  --radius-buttons: 999px;
  --radius-general: 12px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #000000;
  --color-canvas: #ebeadf;
  --color-snow: #ffffff;
  --color-sandstone: #d5cec0;
  --color-tangerine: #f04923;
  --font-times: 'Times', Times New Roman;
  --font-supreme-ll-tt: 'Supreme LL TT', Arial;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.05px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.05px;
  --text-heading: 22px;
  --leading-heading: 1.1;
  --tracking-heading: -0.05px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.05px;
  --text-display: 40px;
  --leading-display: 0.89;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-72: 72px;
  --spacing-76: 76px;
  --spacing-96: 96px;
  --spacing-116: 116px;
  --spacing-134: 134px;
  --spacing-167: 167px;
  --radius-cards: 12px;
  --radius-buttons: 999px;
  --radius-general: 12px;
}
```
