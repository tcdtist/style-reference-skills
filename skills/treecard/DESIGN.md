---
version: alpha
name: "Treecard"
description: "Treecard embraces a natural, confident visual language, defined by a deep forest green and a striking crisp white for text. The design is spacious, allowing content to breathe over muted background imagery. Typography is bold yet clear, leveraging a custom sans-serif to establish a distinct, trustworthy voice. The system prioritizes clarity and a strong connection to its environmental mission with minimal embellishments."
theme: "light"
industry: "other"
source_url: "https://www.treecard.org"
refero_style_id: "c4404785-1b20-4a5d-b907-96769937e03f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520458871-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520458871-thumb.jpg"
extracted_at: "2026-04-30T03:41:10.589Z"
---

# Treecard — Style Reference

> Forest canopy tranquility

**Theme:** light

**Industry:** other

Treecard embraces a natural, confident visual language, defined by a deep forest green and a striking crisp white for text. The design is spacious, allowing content to breathe over muted background imagery. Typography is bold yet clear, leveraging a custom sans-serif to establish a distinct, trustworthy voice. The system prioritizes clarity and a strong connection to its environmental mission with minimal embellishments.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Forest Canopy | #143437 | `--color-forest-canopy` | Background for primary content sections, branding elements, and accent borders. It evokes the brand's nature-centric mission |
| Parchment White | #fff4df | `--color-parchment-white` | Primary text on dark backgrounds, secondary backgrounds, and subtle surface fills |
| Deep Shadow | #333333 | `--color-deep-shadow` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |

## Tokens — Typography

### Gilroy

- **Token:** `--font-gilroy`
- **Substitute:** Montserrat
- **Weights:** 400, 600
- **Sizes:** 14px, 20px, 55px
- **Line heights:** 1.00, 1.06, 1.40
- **Role:** Primary typeface for all headings and body text. Its strong yet clean geometry projects a modern, trustworthy image. The 55px at 1.0 lineHeight makes headlines impactful without being aggressive.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.00
- **Role:** Fallback for small system text and captions.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.06 | — | `--text-caption` |
| body-sm | 20px | 1.06 | — | `--text-body-sm` |
| body | 55px | 1.06 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-144 | 144px | `--spacing-144` |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 16px |
| elementGap | 144px |

## Components

## Do's and Don'ts

### Do

- Always use 'Forest Canopy' (#143437) as the primary background for sections containing large, prominent text.
- Render all prominent text and headings in 'Parchment White' (#fff4df) when on a 'Forest Canopy' background for maximum contrast and readability.
- Utilize Gilroy font with a weight of 600 for all main headings.
- Maintain generous padding; apply 144px for horizontal spacing and 10-16px for vertical padding within contained elements.
- Prioritize natural imagery, such as dense forest landscapes, as background elements, ensuring text readability with appropriate contrast.

### Don't

- Avoid using highly saturated, non-brand colors; the palette is intentionally restrained.
- Do not introduce complex gradients or shadows; the surface treatment is flat and understated.
- Do not use type sizes smaller than 12px; legibility is paramount.
- Avoid tight content blocks; embrace spacious layouts and ample negative space.
- Do not deviate from Gilroy for primary text and headings; it defines the brand's typographic voice.

## Imagery

The imagery prominently features lush, dense forest landscapes. These are treated as large, full-bleed background elements, often overlaid with text. The photography is natural, with rich green tones, emphasizing breadth and depth rather than specific objects. The role of imagery is primarily decorative atmosphere, grounding the brand in its environmental mission. Density is high, with imagery often dominating the visual canvas, supporting text as an overlay.

## Layout

The page structure utilizes a full-bleed background image, over which content is centered. There's a clear separation between a dominant hero-like section (forest background with large white text) and what appears to be a stark white lower section, suggesting an alternating content band structure. Content within the hero area is vertically stacked and left-aligned, using ample padding around text blocks. The layout emphasizes strong visual impact with imagery and clear, prominent typography.

## Similar Brands

- **Ecosia** — Shares a strong environmental mission reflected by prominent green and natural imagery.
- **Headspace** — Uses large, impactful imagery as background with prominent, simple typography overlaid.
- **Allbirds** — Relies on a clean aesthetic with natural color palettes and clear, direct messaging.
- **Patagonia** — Employs high-quality nature photography as core visual branding with strong, legible typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-forest-canopy: #143437;
  --color-parchment-white: #fff4df;
  --color-deep-shadow: #333333;
  --font-gilroy: 'Gilroy', Montserrat;
  --font-sans-serif: 'sans-serif', Arial;
  --text-caption: 14px;
  --leading-caption: 1.06;
  --text-body-sm: 20px;
  --leading-body-sm: 1.06;
  --text-body: 55px;
  --leading-body: 1.06;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-144: 144px;
}
```

### Tailwind v4

```css
@theme {
  --color-forest-canopy: #143437;
  --color-parchment-white: #fff4df;
  --color-deep-shadow: #333333;
  --font-gilroy: 'Gilroy', Montserrat;
  --font-sans-serif: 'sans-serif', Arial;
  --text-caption: 14px;
  --leading-caption: 1.06;
  --text-body-sm: 20px;
  --leading-body-sm: 1.06;
  --text-body: 55px;
  --leading-body: 1.06;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-144: 144px;
}
```
