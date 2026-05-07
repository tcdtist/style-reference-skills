---
version: alpha
name: "Lamborghini.com"
description: "This design system evokes the controlled power of a luxury performance vehicle, balancing industrial precision with subtle opulence. A stark black and white foundation, accented by a deep, authoritative yellow, creates immediate visual impact. The absence of rounded corners and a consistent, generous letter-spacing in the custom typeface reinforces a feeling of engineered clarity and unyielding directness."
theme: "mixed"
industry: "other"
source_url: "https://lamborghini.com"
refero_style_id: "c9c5be5a-aaa1-4338-9681-8378d2e24fbd"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924870289-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924870289-thumb.jpg"
extracted_at: "2026-04-11T16:28:06.196Z"
---

# Lamborghini.com — Style Reference

> Precision-engineered black steel with yellow accents. Every edge is sharp, every surface polished, reflecting light with purpose.

**Theme:** mixed

**Industry:** other

This design system evokes the controlled power of a luxury performance vehicle, balancing industrial precision with subtle opulence. A stark black and white foundation, accented by a deep, authoritative yellow, creates immediate visual impact. The absence of rounded corners and a consistent, generous letter-spacing in the custom typeface reinforces a feeling of engineered clarity and unyielding directness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Carbon Black | #000000 | `--color-carbon-black` | Primary background for dark sections, text on light surfaces, and interactive element borders. |
| Ghost White | #ffffff | `--color-ghost-white` | Primary background for light sections, inverse text, and button fills. |
| Concrete Gray | #f5f5f5 | `--color-concrete-gray` | Secondary background for light sections, subtle dividers. |
| Graphite | #202020 | `--color-graphite` | Default text color on light backgrounds, primary icon color. |
| Dark Metal | #181818 | `--color-dark-metal` | Background for headers and footers in dark mode, creating a richer sense of depth than pure black. |
| Engine Yellow | #917300 | `--color-engine-yellow` | Primary interactive accent color for buttons and highlights — a muted gold that signifies luxury and performance. |
| Speed Yellow | #ffc000 | `--color-speed-yellow` | Vivid interactive accent color, used sparingly for immediate calls to action, drawing the eye with intense saturation. |

## Tokens — Typography

### LamboType

- **Token:** `--font-lambotype`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 10px, 12px, 16px, 18px, 27px, 32px, 40px, 54px, 80px, 120px
- **Line heights:** 0.92, 1.00, 1.13, 1.15, 1.19, 1.37, 1.38, 1.50, 1.56, 1.63, 1.83, 2.00
- **Letter spacing:** 0.0230em
- **Role:** Primary typeface for all text elements — headlines, body, links, buttons, and navigation. Its custom nature and consistent letter-spacing across all sizes reinforce the brand's engineered feel.

### Open Sans

- **Token:** `--font-open-sans`
- **Substitute:** Open Sans
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Fallback or secondary text, used sparingly for small utility text or where a more conventional typeface is required.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.56 | 0.23px | `--text-caption` |
| body | 16px | 1.38 | 0.368px | `--text-body` |
| subheading | 18px | 1.15 | 0.414px | `--text-subheading` |
| heading | 27px | 1.13 | 0.621px | `--text-heading` |
| heading-lg | 32px | 1.19 | 0.736px | `--text-heading-lg` |
| display | 80px | 1 | 1.84px | `--text-display` |
| display-xxl | 120px | 0.92 | 2.76px | `--text-display-xxl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 0px |
| elementGap | 24px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Event Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### News Article Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button - Engine Yellow

**Role:** Call to action

Solid `Engine Yellow (#917300)` background, `Ghost White (#ffffff)` text. Padding: 24px horizontal, 24px vertical. No border-radius, creating a sharp, rectangular form. Uses LamboType 400.

### Secondary Action Button - Speed Yellow

**Role:** Call to action (more urgent)

Solid `Speed Yellow (#ffc000)` background, `Carbon Black (#000000)` text. Padding: 24px horizontal, 24px vertical. No border-radius, for maximum visual impact. Uses LamboType 400.

### Outline Neutral Button

**Role:** Navigation, secondary actions

Transparent background, `Ghost White (#ffffff)` text, 1px `Ghost White (#ffffff)` border. Padding: 8px vertical, 8px horizontal. No border-radius. Uses LamboType 400.

### Outline Black Button

**Role:** Navigation, secondary actions for light background

Transparent background, `Carbon Black (#000000)` text, 1px `Carbon Black (#000000)` border. Padding: 24px vertical, 24px horizontal. No border-radius. Uses LamboType 400.

### Transparent Card

**Role:** Content grouping

Fully transparent background (`rgba(0, 0, 0, 0)`), no border, no box-shadow, no border-radius. Content sits directly on the page background, delineated only by typography and spacing.

### Navigation Badge/Filter

**Role:** Informational

Fully transparent background (`rgba(0, 0, 0, 0)`), `Graphite (#202020)` text. No padding or border, appearing as raw text. No border-radius.

## Do's and Don'ts

### Do

- Use `LamboType` for all text elements to maintain a consistent brand voice.
- Apply `0.0230em` letter-spacing consistently to `LamboType` for titles and body alike.
- Employ `Engine Yellow (#917300)` for primary interactive elements against dark backgrounds.
- Utilize `Speed Yellow (#ffc000)` sparingly for high-emphasis calls to action on light backgrounds to maximize impact.
- Maintain `0px` border-radius across all components for a sharp, angular aesthetic.
- Structure vertical spacing with multiples of `24px`: `24px`, `48px`, `80px` for consistent content flow.
- Use `Carbon Black (#000000)` and `Ghost White (#ffffff)` as the foundational palette, with `Graphite (#202020)` for general text on light backgrounds.

### Don't

- Do not introduce rounded corners; curves are reserved for product imagery, not UI elements.
- Avoid shadows or complex elevation schemes; depth is achieved primarily through color contrast and layered full-bleed sections.
- Do not use `Open Sans` for primary-level text; reserve it for minor, descriptive content only.
- Refrain from using desaturated color accents outside the designated `Engine Yellow` and `Speed Yellow`.
- Do not vary `LamboType` weights; 400 is the only specified weight, contributing to the consistent, precise feel.

## Imagery

This site features highly curated, dramatic product photography, primarily of cars in dynamic, often low-light or studio-lit environments. Imagery is full-bleed, sharp-edged, and serves as primary content, often with large text overlays. There are also detail shots of technical components and branded materials. Visuals are typically desaturated or have a specific color grade to emphasize the form and material of the vehicles and products, occasionally contrasted with vibrant accents like headlights. The focus is always on the product, presented with a sense of awe and aspiration.

## Layout

The layout is a dynamic mix of full-bleed sections and contained content, emphasizing visual impact. The hero section often features full-viewport imagery with centered or left-aligned headlines, creating an immersive experience. Subsequent sections alternate between dark and light backgrounds, often with generous `80px` vertical spacing. Content within sections frequently utilizes `24px` and `48px` spacing units. The overall feel is a centered, high-contrast presentation for maximum visual punch, driven by large imagery and bold typography, rather than a rigid grid system.

## Similar Brands

- **Porsche** — Similar high-contrast dark/white sections, premium feel, and emphasis on product photography often with sharp typefaces.
- **Ferrari** — Luxury automotive brand with a high-impact visual style, strong brand color accents, and a focus on product presentation.
- **Bugatti** — Exclusive automotive brand often featuring a dark, sophisticated palette and bespoke typography to convey luxury and performance.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-carbon-black: #000000;
  --color-ghost-white: #ffffff;
  --color-concrete-gray: #f5f5f5;
  --color-graphite: #202020;
  --color-dark-metal: #181818;
  --color-engine-yellow: #917300;
  --color-speed-yellow: #ffc000;
  --font-lambotype: 'LamboType', Montserrat;
  --font-open-sans: 'Open Sans', Open Sans;
  --text-caption: 10px;
  --leading-caption: 1.56;
  --tracking-caption: 0.23px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: 0.368px;
  --text-subheading: 18px;
  --leading-subheading: 1.15;
  --tracking-subheading: 0.414px;
  --text-heading: 27px;
  --leading-heading: 1.13;
  --tracking-heading: 0.621px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.19;
  --tracking-heading-lg: 0.736px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: 1.84px;
  --text-display-xxl: 120px;
  --leading-display-xxl: 0.92;
  --tracking-display-xxl: 2.76px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-160: 160px;
  --radius-all: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-carbon-black: #000000;
  --color-ghost-white: #ffffff;
  --color-concrete-gray: #f5f5f5;
  --color-graphite: #202020;
  --color-dark-metal: #181818;
  --color-engine-yellow: #917300;
  --color-speed-yellow: #ffc000;
  --font-lambotype: 'LamboType', Montserrat;
  --font-open-sans: 'Open Sans', Open Sans;
  --text-caption: 10px;
  --leading-caption: 1.56;
  --tracking-caption: 0.23px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: 0.368px;
  --text-subheading: 18px;
  --leading-subheading: 1.15;
  --tracking-subheading: 0.414px;
  --text-heading: 27px;
  --leading-heading: 1.13;
  --tracking-heading: 0.621px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.19;
  --tracking-heading-lg: 0.736px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: 1.84px;
  --text-display-xxl: 120px;
  --leading-display-xxl: 0.92;
  --tracking-display-xxl: 2.76px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-160: 160px;
  --radius-all: 0px;
}
```
