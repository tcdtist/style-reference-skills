---
version: alpha
name: "Octaevo"
description: "Octaevo embodies a serene, heirloom-quality aesthetic: a light cream canvas punctuated by rich, classic serifs and structured sans-serifs. Surfaces are matte and uncluttered, relying on subtle shifts in background tone for differentiation rather than heavy borders or shadows. Interactive elements are understated, often presented as ghost buttons with fine hairline borders, maintaining a sense of refined quietude. The overall impression is one of timeless craftsmanship and elegant restraint."
theme: "light"
industry: "ecommerce"
source_url: "https://www.octaevo.com"
refero_style_id: "c773d644-4d72-4532-a6cd-50d80f595a61"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514966575-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514966575-thumb.jpg"
extracted_at: "2026-04-30T02:10:21.928Z"
---

# Octaevo — Style Reference

> Mediterranean sun-drenched linen

**Theme:** light

**Industry:** ecommerce

Octaevo embodies a serene, heirloom-quality aesthetic: a light cream canvas punctuated by rich, classic serifs and structured sans-serifs. Surfaces are matte and uncluttered, relying on subtle shifts in background tone for differentiation rather than heavy borders or shadows. Interactive elements are understated, often presented as ghost buttons with fine hairline borders, maintaining a sense of refined quietude. The overall impression is one of timeless craftsmanship and elegant restraint.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Cream | #f8eeee | `--color-canvas-cream` | Page backgrounds, large content sections, primary surface |
| Buttermilk Overlay | #fdf8eb | `--color-buttermilk-overlay` | Elevated card backgrounds, modal overlays |
| Ash Accent | #f3f3f3 | `--color-ash-accent` | Subtle section dividers, footer background |
| Carbon Ink | #313131 | `--color-carbon-ink` | Primary text, headings, strong borders, ghost button borders |
| Midnight Core | #000000 | `--color-midnight-core` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Faded Stone | #cfcfc7 | `--color-faded-stone` | Light input borders, subtle UI element strokes |

## Tokens — Typography

### Domaine

- **Token:** `--font-domaine`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 20px, 26px, 32px, 50px, 63px, 80px
- **Line heights:** 1.11, 1.25, 1.26, 1.47, 1.50, 1.85
- **Letter spacing:** normal
- **Role:** Headlines and prominent display text — the elegant serif establishes a premium, classic tone.

### Moderat

- **Token:** `--font-moderat`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 14px, 15px, 17px, 18px
- **Line heights:** 1.00, 1.39, 1.47, 1.67, 1.81
- **Letter spacing:** normal
- **Role:** Body text, navigation, and functional elements — a clean sans-serif providing legibility and a contemporary counterpoint to the serif display font.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.67 | 0px | `--text-caption` |
| subheading | 18px | 1.47 | 0px | `--text-subheading` |
| heading-sm | 20px | 1.25 | 0px | `--text-heading-sm` |
| heading | 26px | 1.26 | 0px | `--text-heading` |
| heading-lg | 32px | 1.11 | 0px | `--text-heading-lg` |
| display | 50px | 1.47 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-85 | 85px | `--spacing-85` |
| spacing-94 | 94px | `--spacing-94` |
| spacing-95 | 95px | `--spacing-95` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-170 | 170px | `--spacing-170` |
| spacing-241 | 241px | `--spacing-241` |
| spacing-243 | 243px | `--spacing-243` |

### Border Radius

| Element | Value |
| --- | --- |
| soft | 10px |
| sharp | 0px |
| circular | 2880px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 50px |
| cardPadding | 17px |
| elementGap | 17px |

## Components

### Ghost Button - Default

**Role:** Primary Call-to-action, secondary actions

Transparent background, 'Carbon Ink' (#313131) text and a 1px 'Carbon Ink' (#313131) border. Padding of 14px vertical and 17px horizontal. Features sharp 0px corners.

### Circular Ghost Button

**Role:** Navigation arrows, close buttons, action icons

Transparent background, 'Midnight Core' (#000000) text, and a 1px 'Carbon Ink' (#313131) border with a 50% radius for a pill shape. Padding of 17px vertical and 36.5px horizontal.

### Text Link Button

**Role:** Inline actions, understated calls to action

Transparent background, 'Midnight Core' (#000000) text, no border. No padding, acting as a styled text link.

### Standard Input Field

**Role:** Form inputs

Transparent background, 'Carbon Ink' (#313131) text, and a 1px 'Carbon Ink' (#313131) border. Padding is 17px all around with sharp 0px corners.

### Muted Input Field

**Role:** Secondary form inputs, disabled states

Transparent background, 'Carbon Ink' (#313131) text, and a subtle 1px 'Faded Stone' (#cfcfc7) border. Padding is 17px all around with sharp 0px corners.

### Pill Input Field

**Role:** Email capture inputs

Transparent background, 'Carbon Ink' (#313131) text, and a 1px 'Carbon Ink' (#313131) border with a 100% radius for a pill shape. No padding.

### Plain Badge / Tag

**Role:** Informational tags, categories

Transparent background with 'Carbon Ink' (#313131) text, no border or padding and sharp 0px corners, integrating text directly into the layout.

## Do's and Don'ts

### Do

- Prioritize 'Canvas Cream' (#f8eeee) for main backgrounds to establish a light, airy foundation.
- Use 'Carbon Ink' (#313131) as the default color for most text, ensuring high contrast against light backgrounds.
- Distinguish interactive elements like buttons and links with 1px borders in 'Carbon Ink' (#313131) for a subtle, ghosted appearance.
- Apply 'Domaine' font for all headings and large display text, retaining its specific weights and letter spacing for brand recognition.
- Structure content with ample 17px element gaps, promoting visual breathing room and a comfortable density.
- Embrace the 'sharp' (0px) border radius for most functional components and 'circular' (2880px) for distinct pill shapes, avoiding intermediate roundness.
- Utilize 'Buttermilk Overlay' (#fdf8eb) for cards and modals to create a soft, slightly elevated surface above the main canvas without shadows.

### Don't

- Avoid using strong, saturated colors for UI elements; stick to the curated neutral palette for interface components.
- Do not introduce heavy shadows or gradients; rely on color temperature shifts and border definitions for visual hierarchy.
- Do not use font weights outside of those specified for 'Domaine' (400) and 'Moderat' (400, 500) to maintain typographic consistency.
- Avoid tight spacing; maintain the comfortable 17px element gap to prevent a dense or claustrophobic feel.
- Do not use mid-range border radii; stick to sharp 0px or fully circular 2880px to preserve the distinct shape language.
- Refrain from using solid background colors for primary action buttons; ghosted outlines are preferred.
- Do not deviate from the established type scale; maintain the precise sizes and line heights for each semantic role.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Cream | #f8eeee | Dominant page background, foundational layer |
| 1 | Buttermilk Overlay | #fdf8eb | Card surfaces, pop-ups, and subtly elevated content blocks |
| 2 | Ash Accent | #f3f3f3 | Secondary backgrounds, subtle section breaks, footer |

## Imagery

The visual language focuses on high-key product photography, often featuring tight crops of objects against pure white or very light, textured backgrounds. Lifestyle elements are minimal, appearing only as hands interacting with products, making the object the primary focus. Imagery is contained, never full-bleed, and often incorporates subtle framing or archival aesthetics. Icons are monochrome, outlined, and minimal, appearing small and functional. The overall role of imagery is to showcase product as art objects, emphasizing craftsmanship and clean presentation rather than narrative or dramatic atmosphere.

## Layout

The site uses a max-width contained layout, likely around 1200px, creating a structured feel with generous side margins. The hero section often presents a split layout with photography on one side and a concise headline and call to action on the other, or a centered headline over a background image. Section rhythm is visually distinct through consistent vertical spacing and subtle shifts in background tone (Canvas Cream vs Buttermilk Overlay). Content generally arranges in a clean, often symmetrical manner, with alternating two-column text and image blocks and consistent card grids for product listings. Navigation is a sticky top bar with minimal links.

## Similar Brands

- **Frama** — Shares a sophisticated, minimalist aesthetic with an emphasis on natural materials (though physical, not digital) and a restrained, almost monochromatic palette.
- **Aesop** — Exhibits a similar classic, elegant typography, minimalist visual design, and a focus on product as the primary visual element, avoiding overt marketing visuals.
- **Kinfolk** — Echoes the use of elegant serifs, comfortable spacing, and a clean, almost editorial layout that prioritizes content and visual spaciousness over overt interactivity.
- **Merci** — Features a similar light color palette, refined typography pairing, and a focus on product curation presented in a high-quality, almost gallery-like manner.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-cream: #f8eeee;
  --color-buttermilk-overlay: #fdf8eb;
  --color-ash-accent: #f3f3f3;
  --color-carbon-ink: #313131;
  --color-midnight-core: #000000;
  --color-faded-stone: #cfcfc7;
  --font-domaine: 'Domaine', Playfair Display;
  --font-moderat: 'Moderat', Inter;
  --text-caption: 14px;
  --leading-caption: 1.67;
  --tracking-caption: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.47;
  --tracking-subheading: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0px;
  --text-heading: 26px;
  --leading-heading: 1.26;
  --tracking-heading: 0px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: 0px;
  --text-display: 50px;
  --leading-display: 1.47;
  --tracking-display: 0px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-23: 23px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-39: 39px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-53: 53px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-83: 83px;
  --spacing-85: 85px;
  --spacing-94: 94px;
  --spacing-95: 95px;
  --spacing-96: 96px;
  --spacing-144: 144px;
  --spacing-170: 170px;
  --spacing-241: 241px;
  --spacing-243: 243px;
  --radius-soft: 10px;
  --radius-sharp: 0px;
  --radius-circular: 2880px;
  --surface-canvas-cream: #f8eeee;
  --surface-buttermilk-overlay: #fdf8eb;
  --surface-ash-accent: #f3f3f3;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-cream: #f8eeee;
  --color-buttermilk-overlay: #fdf8eb;
  --color-ash-accent: #f3f3f3;
  --color-carbon-ink: #313131;
  --color-midnight-core: #000000;
  --color-faded-stone: #cfcfc7;
  --font-domaine: 'Domaine', Playfair Display;
  --font-moderat: 'Moderat', Inter;
  --text-caption: 14px;
  --leading-caption: 1.67;
  --tracking-caption: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.47;
  --tracking-subheading: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0px;
  --text-heading: 26px;
  --leading-heading: 1.26;
  --tracking-heading: 0px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: 0px;
  --text-display: 50px;
  --leading-display: 1.47;
  --tracking-display: 0px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-23: 23px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-39: 39px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-53: 53px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-83: 83px;
  --spacing-85: 85px;
  --spacing-94: 94px;
  --spacing-95: 95px;
  --spacing-96: 96px;
  --spacing-144: 144px;
  --spacing-170: 170px;
  --spacing-241: 241px;
  --spacing-243: 243px;
  --radius-soft: 10px;
  --radius-sharp: 0px;
  --radius-circular: 2880px;
  --surface-canvas-cream: #f8eeee;
  --surface-buttermilk-overlay: #fdf8eb;
  --surface-ash-accent: #f3f3f3;
}
```
