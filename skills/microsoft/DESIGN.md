---
version: alpha
name: "Microsoft"
description: "The Microsoft design system exudes a balanced composition, pairing clear-cut information presentation with a foundational blue accent. It leverages a strong neutral palette dominated by white and deep grays, providing high contrast and visual clarity. The consistent use of 2px radius on interactive elements like buttons subtly softens the otherwise sharp edges dictated by the 0px default. Bold imagery and product showcases are integrated seamlessly, often against a vibrant brand blue that contrasts with the clean, primarily white UI."
theme: "light"
industry: "other"
source_url: "https://www.microsoft.com"
refero_style_id: "c70a9990-bc4b-4a64-a69b-aeb7b344fb74"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777423470635-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777423470635-thumb.jpg"
extracted_at: "2026-04-29T00:44:49.038Z"
---

# Microsoft — Style Reference

> Crisp White Blueprint

**Theme:** light

**Industry:** other

The Microsoft design system exudes a balanced composition, pairing clear-cut information presentation with a foundational blue accent. It leverages a strong neutral palette dominated by white and deep grays, providing high contrast and visual clarity. The consistent use of 2px radius on interactive elements like buttons subtly softens the otherwise sharp edges dictated by the 0px default. Bold imagery and product showcases are integrated seamlessly, often against a vibrant brand blue that contrasts with the clean, primarily white UI.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ocean Blue | #0067b8 | `--color-ocean-blue` | Primary action buttons, interactive link highlights, brand accents in navigation and icons — provides a consistent chromatic touchpoint for interactivity and brand recognition. |
| Charcoal Black | #000000 | `--color-charcoal-black` | Primary text across headings, body content, and navigation elements; outlines for cards and other structural components. |
| Graphite Gray | #616161 | `--color-graphite-gray` | Secondary text for less prominent information, footer navigation links, and subtle icon details. |
| Cloud White | #ffffff | `--color-cloud-white` | Page background, card surfaces, and text on contrasting colored buttons. |
| Fog Gray | #f2f2f2 | `--color-fog-gray` | Subtle background for page sections and the primary canvas, providing a gentle off-white base. |
| Dark Slate | #262626 | `--color-dark-slate` | Tertiary text for certain UI elements and subtle borders. |
| Deep Ash | #171717 | `--color-deep-ash` | Text for specific list items and button text at lower prominence. |

## Tokens — Typography

### Segoe UI

- **Token:** `--font-segoe-ui`
- **Substitute:** Arial
- **Weights:** 400, 600
- **Sizes:** 11px, 13px, 14px, 15px, 16px, 29px, 37px
- **Line heights:** 1.00, 1.20, 1.33, 1.45, 1.50, 2.27
- **Letter spacing:** normal
- **Role:** The primary typeface for all text content, from body and navigation to headings. Its system-standard clarity ensures broad accessibility and a consistent, professional tone across all content weights.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.45 | — | `--text-caption` |
| heading | 29px | 1.2 | — | `--text-heading` |
| display | 37px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-71 | 71px | `--spacing-71` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| buttons | 2px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.13) 0px 3px 7px 0px, rgba(0, 0, 0, 0.11) 0px 1px 2px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 48px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Filled button

Background: Ocean Blue (#0067b8), Text: Cloud White (#ffffff), Border Radius: 2px, Padding: 10px top/bottom, 12px left/right.

### Ghost Border Button

**Role:** Outlined button

Transparent background (rgba(0, 0, 0, 0)), Text: Charcoal Black (#000000), Border Color: Charcoal Black (#000000), Border Radius: 0px, Padding: 0px top/bottom, 16px left/right.

### Subtle Link Button

**Role:** Text link styled as button

Transparent background (rgba(0, 0, 0, 0)), Text: Dark Slate (#262626), Border Color: Dark Slate (#262626), Border Radius: 0px, Padding: 1px top/bottom, 8px left/right.

### Circular Icon Button

**Role:** Icon button

Transparent background (rgba(0, 0, 0, 0)), Text: Dark Slate (#262626), Border Color: Dark Slate (#262626), Border Radius: 50%, Padding: 1px top/bottom, 6px left/right.

### Feature Card

**Role:** Information display card

Background: Cloud White (#ffffff), Border Radius: 0px, Box Shadow: rgba(0, 0, 0, 0.13) 0px 3px 7px 0px, rgba(0, 0, 0, 0.11) 0px 1px 2px 0px, Padding: 48px on all sides.

### Transparent Content Card

**Role:** Image/text container without explicit background

Background: rgba(0, 0, 0, 0), Border Radius: 0px, No shadow, No padding.

### Navigation Link

**Role:** Main navigation item

Text Color: Graphite Gray (#616161) at 13px, (normal) letter-spacing, font-weight 400. On hover/active, a border underline will appear in Ocean Blue.

## Do's and Don'ts

### Do

- Prioritize Ocean Blue (#0067b8) for primary calls to action and interactive elements to maintain brand consistency.
- Use Charcoal Black (#000000) for all main headings and body text to ensure maximum readability and contrast.
- Apply Cloud White (#ffffff) as the default background for content cards and elevated surfaces.
- Employ Fog Gray (#f2f2f2) for subtle background differentiation between page sections.
- Maintain a 2px border radius for all interactive buttons to introduce a subtle softness to actions.
- Always use Segoe UI with a 400 or 600 weight for all typographic elements.
- Apply 48px padding around content within Feature Cards to create a spacious internal layout.

### Don't

- Avoid using background colors other than Cloud White (#ffffff) or Fog Gray (#f2f2f2) for primary content areas.
- Do not introduce sharp corners on primary action buttons; always use the specified 2px border radius.
- Refrain from using heavily saturated colors outside of the defined brand blue (#0067b8) for UI elements.
- Do not deviate from Segoe UI for text; avoid decorative or script fonts.
- Avoid using box shadows on elements other than Feature Cards.
- Do not use generic gray values; stick to the defined neutral palette (Charcoal Black, Graphite Gray, Dark Slate, Deep Ash).
- Do not apply padding or margins inconsistent with the 8px base unit system.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Fog Gray | #f2f2f2 | Primary page canvas and background for alternating sections. |
| 1 | Cloud White | #ffffff | Elevated card surfaces, content blocks, and UI components that require visual separation from the canvas. |

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.13) 0px 3px 7px 0px, rgba(0, 0, 0, 0.11) 0px 1px 2px 0px`

## Imagery

The site primarily uses high-quality product photography, often displayed against clean white or abstract gradient backgrounds. These images are typically contained within rectangular frames, without rounded corners or overlapping elements. Beyond product shots, illustrations are colorful and often abstract, emphasizing dynamism and digital concepts. Icons are typically monochrome (Charcoal Black or Graphite Gray) and outlined. Imagery serves both to showcase products and to provide decorative atmosphere, with a balanced density relative to text content.

## Layout

The page primarily utilizes a max-width contained layout, centering content within a defined horizontal space, though hero sections can span full-bleed. The hero pattern features a split layout with text on a neutral background to the left and a prominent product image on a branded gradient background to the right. Sections alternate between Fog Gray (#f2f2f2) and Cloud White (#ffffff) backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column layouts or multi-column grids (3-column, sometimes 4-column) for features and product showcasing. Navigation is a persistent top bar with clear links and utility icons.

## Similar Brands

- **HP** — Similar light-themed UI with a primary blue accent for interactive elements and strong product imagery.
- **Dell** — Shares a clean, product-focused aesthetic with an emphasis on high-contrast text and structured card layouts.
- **IBM** — Employs a clear, functional visual hierarchy with strong typographic definitions and a mostly achromatic palette with a key brand blue emphasis.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ocean-blue: #0067b8;
  --color-charcoal-black: #000000;
  --color-graphite-gray: #616161;
  --color-cloud-white: #ffffff;
  --color-fog-gray: #f2f2f2;
  --color-dark-slate: #262626;
  --color-deep-ash: #171717;
  --font-segoe-ui: 'Segoe UI', Arial;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --text-heading: 29px;
  --leading-heading: 1.2;
  --text-display: 37px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-71: 71px;
  --radius-cards: 0px;
  --radius-buttons: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.13) 0px 3px 7px 0px, rgba(0, 0, 0, 0.11) 0px 1px 2px 0px;
  --surface-fog-gray: #f2f2f2;
  --surface-cloud-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-ocean-blue: #0067b8;
  --color-charcoal-black: #000000;
  --color-graphite-gray: #616161;
  --color-cloud-white: #ffffff;
  --color-fog-gray: #f2f2f2;
  --color-dark-slate: #262626;
  --color-deep-ash: #171717;
  --font-segoe-ui: 'Segoe UI', Arial;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --text-heading: 29px;
  --leading-heading: 1.2;
  --text-display: 37px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-71: 71px;
  --radius-cards: 0px;
  --radius-buttons: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.13) 0px 3px 7px 0px, rgba(0, 0, 0, 0.11) 0px 1px 2px 0px;
  --surface-fog-gray: #f2f2f2;
  --surface-cloud-white: #ffffff;
}
```
