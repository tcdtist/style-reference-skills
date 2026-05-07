---
version: alpha
name: "Incommonwith"
description: "In Common With employs a sun-drenched, architectural aesthetic that highlights product through subtle UI and an earthy, restrained color palette. The design relies on a clean, spacious layout, prioritizing imagery and robust typography to convey luxury and craftsmanship. Visual elements are mostly monolithic, focusing on natural light and texture, with sharp borders and an absence of soft shadows that maintain distinct separation. The overall impression is one of quiet permanence and considered design."
theme: "light"
industry: "design"
source_url: "https://www.incommonwith.com"
refero_style_id: "1f9089e1-4170-482f-b988-afe1124a70a9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508767267-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508767267-thumb.jpg"
extracted_at: "2026-04-30T00:26:33.193Z"
---

# Incommonwith — Style Reference

> Sun-drenched architectural permanence.

**Theme:** light

**Industry:** design

In Common With employs a sun-drenched, architectural aesthetic that highlights product through subtle UI and an earthy, restrained color palette. The design relies on a clean, spacious layout, prioritizing imagery and robust typography to convey luxury and craftsmanship. Visual elements are mostly monolithic, focusing on natural light and texture, with sharp borders and an absence of soft shadows that maintain distinct separation. The overall impression is one of quiet permanence and considered design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Bone | #fafaf9 | `--color-canvas-bone` | Primary page background, modal backgrounds, and primary text contrast |
| Surface Frost | #f8f7f1 | `--color-surface-frost` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Clay Brick | #4a0a05 | `--color-clay-brick` | Primary text color, active states, borders for interactive elements, and focused field outlines. Creates a warm, deep contrast against light backgrounds |
| Clay Stone | #bcb6a6 | `--color-clay-stone` | Subtle background for UI blocks or sections requiring slight visual separation |
| Muted Clay | #a2827f | `--color-muted-clay` | Muted text for secondary information or disabled states, providing a soft contrast |

## Tokens — Typography

### Mier A

- **Token:** `--font-mier-a`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 13px, 14px, 18px, 26px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Body text, navigation, buttons, and most informational elements. Its consistent weight across sizes ensures a clear, legible tone.

### Caslon Ionic

- **Token:** `--font-caslon-ionic`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 24px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Headlines and prominent display text. Its classic, serif form adds a touch of heritage and gravitas.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.2 | — | `--text-caption` |
| body | 18px | 1.2 | — | `--text-body` |
| subheading | 24px | 1.2 | — | `--text-subheading` |
| heading | 26px | 1.2 | — | `--text-heading` |

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
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-87 | 87px | `--spacing-87` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| inputs | 0px |
| avatars | 9999px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1392px |
| sectionGap | 40px |
| cardPadding | 12px |
| elementGap | 12px |

## Components

### Ghost Navigation Button

**Role:** Navigation links and secondary actions in headers and footers.

Transparent background, text color Clay Brick (#4a0a05) with 1px solid Clay Brick (#4a0a05) border; 0px radius. Padding 20px on all sides for most instances, 0px padding in some navigational contexts. Uses Mier A 400.

### Outlined Call to Action

**Role:** Primary calls to action that draw attention without being filled blocks.

Transparent background, Clay Brick (#4a0a05) text and 1px solid Clay Brick (#4a0a05) border; 0px radius. Padding 20px on all sides. Uses Mier A 400.

### Text Input Field

**Role:** Standard input fields for forms and search.

Transparent background, Clay Brick (#4a0a05) text and 1px solid Clay Brick (#4a0a05) border at the bottom; 0px radius. Padding left/right 12px. Uses Mier A 400.

### Product Thumbnail Card

**Role:** Displaying product images in grids.

Image-first, usually square or near-square. No visible border or background color. Text caption is Mier A 400, Clay Brick (#4a0a05), often with a 'Shop' link.

### Section Divider Line

**Role:** Visual separation between content blocks.

Thin, 1px solid line in Surface Frost (#f8f7f1), extending full width or with controlled margins, creating subtle breaks.

## Do's and Don'ts

### Do

- Prioritize image content. Images should be large and dominant, particularly in product and editorial sections.
- Utilize Clay Brick (#4a0a05) for all primary text, interactive element borders, and accenting lines for a consistent brand presence.
- Maintain sharp, 0px border radii for all primary UI elements like buttons, cards, and input fields to convey a structured aesthetic.
- Use Mier A 400 for all body text, navigation items, and buttons at sizes 13px, 14px, 18px, and 26px.
- Implement consistent 12px inner padding for most interactive elements and as element gaps.
- Apply Canvas Bone (#fafaf9) as the dominant background, using Surface Frost (#f8f7f1) for subtle section breaks.
- Divide content using thin, 1px lines in Surface Frost (#f8f7f1) rather than heavy spacing or shadows.

### Don't

- Avoid using soft shadows or gradients; rely on defined borders and distinct background colors for separation.
- Do not introduce additional bold weights for text; Mier A 400 and Caslon Ionic 400 are the only weights in use.
- Do not deviate from the 0px border radius for most UI elements; round corners are for specific cases like avatars.
- Avoid busy or colorful UI accents; color should be restrained to Clay Brick (#4a0a05) and used functionally.
- Do not use generic system fonts; Mier A or a close substitute should be used for legibility and brand consistency.
- Do not add heavy borders or background colors to interactive elements unless explicitly an outlined action or input.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas Bone | #fafaf9 | Base page background, light and expansive. |
| 2 | Surface Frost | #f8f7f1 | Secondary background for card-like elements or subtle section divisions, providing a gentle lift. |
| 3 | Clay Stone | #bcb6a6 | Accent background for distinct UI blocks, offering a more pronounced separation from the lighter surfaces. |

## Imagery

The site predominantly uses high-key, product-focused photography within architectural interior settings, often bathed in natural light. Imagery is presented full-bleed or contained in structured grid layouts. If photography, it's lifestyle-oriented but minimal with muted colors; if product, it’s often contextualized yet clearly highlighting the object. Visuals are usually isolated in their sections with sharp edges, serving both decorative atmosphere and product showcasing roles. Graphical elements are minimal beyond iconography.

## Similar Brands

- **Aēsop** — Shares a sophisticated, minimal aesthetic with a focus on natural textures and subtle branding.
- **Frama** — Similar architectural and product-focused photography, restrained color palette, and emphasis on craftsmanship.
- **Hem** — Employs clean layout, strong product imagery, and a limited, earthy color scheme for a high-end feel.
- **Norm Architects** — Exhibits a similar Scandinavian-influenced minimalism, natural material focus, and serene visual atmosphere.
- **The Future Kept** — Retailer with a similar curatorial visual style, strong product photography, and muted color palette for a discerning audience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-bone: #fafaf9;
  --color-surface-frost: #f8f7f1;
  --color-clay-brick: #4a0a05;
  --color-clay-stone: #bcb6a6;
  --color-muted-clay: #a2827f;
  --font-mier-a: 'Mier A', Inter;
  --font-caslon-ionic: 'Caslon Ionic', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 18px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-87: 87px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-avatars: 9999px;
  --radius-buttons: 0px;
  --surface-canvas-bone: #fafaf9;
  --surface-surface-frost: #f8f7f1;
  --surface-clay-stone: #bcb6a6;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-bone: #fafaf9;
  --color-surface-frost: #f8f7f1;
  --color-clay-brick: #4a0a05;
  --color-clay-stone: #bcb6a6;
  --color-muted-clay: #a2827f;
  --font-mier-a: 'Mier A', Inter;
  --font-caslon-ionic: 'Caslon Ionic', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 18px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-87: 87px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-avatars: 9999px;
  --radius-buttons: 0px;
  --surface-canvas-bone: #fafaf9;
  --surface-surface-frost: #f8f7f1;
  --surface-clay-stone: #bcb6a6;
}
```
