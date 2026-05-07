---
version: alpha
name: "Co Projects"
description: "This design system presents as austere and deliberate, focusing on bold typography and stark contrasts. It feels like a gallery wall or architectural display, emphasizing content through scale and negative space rather than decorative elements. The interplay between massive, graphic text and minimal UI elements creates a contemplative, almost academic atmosphere, highlighting the conceptual nature of the content. A singular borderline gray provides subtle structural division."
theme: "light"
industry: "agency"
source_url: "https://co-projects.xyz"
refero_style_id: "5c9743ad-fe33-4d21-9185-db012f6f96c7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926333640-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926333640-thumb.jpg"
extracted_at: "2026-04-11T16:52:27.959Z"
---

# Co Projects — Style Reference

> Gallery Wall Typography - Massive typographic elements dominate minimal structure, creating visual weight and focus.

**Theme:** light

**Industry:** agency

This design system presents as austere and deliberate, focusing on bold typography and stark contrasts. It feels like a gallery wall or architectural display, emphasizing content through scale and negative space rather than decorative elements. The interplay between massive, graphic text and minimal UI elements creates a contemplative, almost academic atmosphere, highlighting the conceptual nature of the content. A singular borderline gray provides subtle structural division.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, significant negative space in dominant graphic elements. |
| Coal Black | #000000 | `--color-coal-black` | Primary text color, bold graphic elements—its high contrast against Canvas White defines the visual identity. |
| Borderline Gray | #e5e7eb | `--color-borderline-gray` | Subtle borders and dividers, providing minimal visual separation without asserting independent color. |

## Tokens — Typography

### Alpha

- **Token:** `--font-alpha`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px, 29px, 60px
- **Line heights:** 1.00, 1.10, 1.50
- **Letter spacing:** normal
- **Role:** Primary display and general purpose font. The 60px size with a 1.0 lineHeight is key to creating the graphic, tightly-stacked effect seen in headlines. Its custom nature suggests a unique, potentially geometric or experimental character that avoids generic system fonts.

### Takt

- **Token:** `--font-takt`
- **Substitute:** Open Sans
- **Weights:** 400
- **Sizes:** 16px, 36px
- **Line heights:** 1.10, 1.11
- **Letter spacing:** normal
- **Role:** Used for body text, links, and some headings. The consistency in weight at 400 across both custom fonts suggests a deliberate choice against hierarchical weight variations, making font family rather than weight the primary differentiator.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.1 | — | `--text-body` |
| subheading | 29px | 1.1 | — | `--text-subheading` |
| heading | 36px | 1.11 | — | `--text-heading` |
| display | 60px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-69 | 69px | `--spacing-69` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-139 | 139px | `--spacing-139` |
| spacing-208 | 208px | `--spacing-208` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 96px |
| cardPadding | 12px |
| elementGap | 4px |

## Components

### Navigation Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Display Logo Mark — Co Graphic

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Project Card — Bordered Content Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Body Text

**Role:** General content text

Body text using `Takt` font, 16px size, 400 weight, `Coal Black` (#000000) color, and 1.1 lineHeight.

### Bordered Element

**Role:** Implicit container or divider

Any element with a `Borderline Gray` (#e5e7eb) border, likely `border-bottom` for content separation, `border-top` for header separation, or `border-right` for vertical division. Border-radius is always 0px.

## Do's and Don'ts

### Do

- Prioritize `Alpha` font at 60px/1.0 lh for major display text to create graphic impact.
- Use `Coal Black` (#000000) for all text and primary graphic elements.
- Maintain `Canvas White` (#ffffff) as the dominant background color for an expansive, clean feel.
- Apply `Borderline Gray` (#e5e7eb) for subtle structural divisions and borders, never as a primary background.
- Utilize 0px for all border-radius values, reinforcing a stark and precise aesthetic.

### Don't

- Avoid using multiple font weights; stick to 400 for both `Alpha` and `Takt`.
- Do not introduce any additional chromatic colors; maintain the achromatic palette.
- Do not use box-shadows or any form of elevation; depth is created through negative space and color contrast.
- Avoid decorative elements like icons, unless they are purely functional and monochromatic.
- Do not vary line-heights excessively; adhere to specified values (1.0 for large Alpha, 1.1/1.11 for Takt/smaller Alpha) for consistent visual rhythm.

## Imagery

The site uses no explicit photography or complex illustrations. Instead, the 'imagery' is formed by massive, stark, black geometric shapes (the 'co' motif). These abstract graphics are full-bleed and serve as both decorative and branding elements, leveraging extreme scale and high contrast. The visual language is entirely contained within the UI and typographic structures, showcasing a pure, unadorned approach to visual identity.

## Layout

The site features a full-bleed page model, allowing large graphic elements to extend to the viewport edges. The hero section is dominated by oversized, centered graphic typography, creating an immediate, impactful visual statement. Content arrangement appears to be a mix of centered stacks and implied grid structures through repetition and alignment, all within a compact information density. There are distinct vertical divisions indicated by subtle borders or section breaks hinted by the `Borderline Gray`. Navigation is a minimalist top bar.

## Similar Brands

- **AIGA** — Similar focus on typography as primary visual element, stark black and white palette, and grid-based content organization.
- **Actual Source** — Employs oversized, experimental typography and a minimalist, design-forward aesthetic to showcase creative work.
- **Are.na** — Shares a stripped-down, content-focused approach with a premium on visual clarity, often using a limited color palette and strong typography.
- **Field.io** — Relies on bold, graphic elements and a monochromatic scheme to emphasize art and design, often with large-scale typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-coal-black: #000000;
  --color-borderline-gray: #e5e7eb;
  --font-alpha: 'Alpha', Inter;
  --font-takt: 'Takt', Open Sans;
  --text-body: 16px;
  --leading-body: 1.1;
  --text-subheading: 29px;
  --leading-subheading: 1.1;
  --text-heading: 36px;
  --leading-heading: 1.11;
  --text-display: 60px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-32: 32px;
  --spacing-69: 69px;
  --spacing-96: 96px;
  --spacing-139: 139px;
  --spacing-208: 208px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-coal-black: #000000;
  --color-borderline-gray: #e5e7eb;
  --font-alpha: 'Alpha', Inter;
  --font-takt: 'Takt', Open Sans;
  --text-body: 16px;
  --leading-body: 1.1;
  --text-subheading: 29px;
  --leading-subheading: 1.1;
  --text-heading: 36px;
  --leading-heading: 1.11;
  --text-display: 60px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-32: 32px;
  --spacing-69: 69px;
  --spacing-96: 96px;
  --spacing-139: 139px;
  --spacing-208: 208px;
  --radius-default: 0px;
}
```
