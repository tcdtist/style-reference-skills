---
version: alpha
name: "Superlocal"
description: "This design system evokes a sense of archival warmth meeting modern-day nostalgia, like hand-printed posters in an old design studio. The dominant 'Pueblo Spice' brown against near-white 'Parchment' creates a soft, inviting contrast, making the content feel discovered rather than presented. The extensive use of 'RST Reactor' font with its strong, almost monospaced character, lends an industrial, handcrafted feel, reinforced by the vibrant 'Electric Blue' and 'Sunburst Orange' accents that punctuate this subdued palette."
theme: "light"
industry: "design"
source_url: "https://superlocaldesign.com"
refero_style_id: "a865ac1d-a4c2-425b-90db-2a7ec6d461a3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776008648602-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776008648602-thumb.jpg"
extracted_at: "2026-04-12T15:44:25.583Z"
---

# Superlocal — Style Reference

> Warm Ink on Aged Paper — a hand-crafted, tactile aesthetic for a design conference.

**Theme:** light

**Industry:** design

This design system evokes a sense of archival warmth meeting modern-day nostalgia, like hand-printed posters in an old design studio. The dominant 'Pueblo Spice' brown against near-white 'Parchment' creates a soft, inviting contrast, making the content feel discovered rather than presented. The extensive use of 'RST Reactor' font with its strong, almost monospaced character, lends an industrial, handcrafted feel, reinforced by the vibrant 'Electric Blue' and 'Sunburst Orange' accents that punctuate this subdued palette.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Electric Blue | #1673ff | `--color-electric-blue` | Primary brand accent, main interactive element color, background for prominent sections — signals modernity and digital interaction within the otherwise earthy palette. |
| Pueblo Spice | #3d2800 | `--color-pueblo-spice` | Dominant text color, primary UI elements, and a significant background color — acts as the main dark tone, offering high contrast against lighter neutrals. |
| Warm Button | #604106 | `--color-warm-button` | Background for secondary action buttons — a slightly lighter, muted shade of 'Pueblo Spice' that provides visual hierarchy for non-primary actions. |
| Sunburst Orange | #ff7b02 | `--color-sunburst-orange` | Secondary accent for graphical elements and highlights — adds a jolt of energetic warmth, often appearing within illustrations or specific sections. |
| Harvest Glow | #ffae45 | `--color-harvest-glow` | Tertiary accent, used for subtle highlights — a softer, lighter orange that complements 'Sunburst Orange' without competing. |
| Fuchsia Flush | #e045ff | `--color-fuchsia-flush` | Occasional, high-impact accent, likely for specific callouts or decorative elements — appears sparingly for maximal visual punch. |
| Parchment | #fbf5e7 | `--color-parchment` | Primary surface color for page backgrounds and cards — a warm, off-white that contributes significantly to the aged paper aesthetic. |
| Onyx | #000000 | `--color-onyx` | High-contrast text, borders, and icons — used sparingly for maximum impact or when absolute legibility is critical. |
| Canvas White | #ffffff | `--color-canvas-white` | Occasional utility background or highlight, providing stark contrast against 'Parchment'. |
| Light Gray Divider | #c4c4c4 | `--color-light-gray-divider` | Subtle borders and dividers, providing minimal visual separation without distracting. |

## Tokens — Typography

### RST Reactor

- **Token:** `--font-rst-reactor`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px, 16px, 17px, 64px, 172px
- **Line heights:** 1.00, 1.20, 1.30, 1.41, 1.50, 2.00
- **Letter spacing:** -0.06em at 172px, -0.05em at 64px, -0.04em at 17px, -0.02em at 16px, 0.022em at 14px, 0.05em at 10px
- **Role:** Primary typeface for all headings and body copy, giving a distinctive, almost typewriter-esque or industrial-print feel. The varied letter-spacing across sizes is a key brand trait, suggesting precise typographic attention.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.60
- **Letter spacing:** -0.02em
- **OpenType features:** "blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on
- **Role:** Secondary typeface for specific body text, providing a highly legible, modern sans-serif. The font-feature-settings ensure stylistic consistency and legibility for nuanced text.

### system sans-serif

- **Token:** `--font-system-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Role:** Fallback or utility typeface for small incidental text elements where system-level efficiency is preferred, such as navigation links or minor annotations.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 2 | 0.5px | `--text-caption` |
| heading | 64px | 0.9 | -3.2px | `--text-heading` |
| display | 172px | 1 | -10.32px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-104 | 104px | `--spacing-104` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 30px |
| buttons | 99px |
| pillForms | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48-78px |
| cardPadding | 8px |
| elementGap | 10-24px |

## Components

### CTA Banner with Reserve Button

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Cronograma Section Header

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Partner Card Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Top navigation items

Text uses system sans-serif (12px, 1.2lh, weight 400, black), on a transparent background.

### Pueblo Spice Pill Button

**Role:** Call to action button

Background 'Pueblo Spice' (#3d2800), text 'Onyx' (#000000). Border radius 99px, padding 10px vertical, 7px horizontal. Uses RST Reactor text.

### Warm Button Pill Button

**Role:** Secondary action button

Background 'Warm Button' (#604106), text 'Onyx' (#000000). Border radius 99px, padding 10px vertical, 7px horizontal. Uses RST Reactor text.

### Outline Pill Button

**Role:** Ghost button with rounded corners

Transparent background, text 'Onyx' (#000000), border 1px solid 'Pueblo Spice' (#3d2800). Border radius 50px, padding 10px circular. Uses RST Reactor text.

### Card Grid Item

**Role:** Partner/logo display

Background 'Parchment' (#fbf5e7), with a 1px 'Pueblo Spice' (#3d2800) border. Border radius 30px. Padding variable based on content. No shadow.

### Footer Link with Arrow

**Role:** Call to action link in footer

Text 'Pueblo Spice' (#3d2800), 'RST Reactor' 12px (1.2lh, weight 400). Accompanied by an arrow icon. Border radius 9999px applied to containing element.

## Do's and Don'ts

### Do

- Use 'Pueblo Spice' (#3d2800) for primary text and significant UI elements to maintain the aged paper aesthetic.
- Prioritize 'RST Reactor' for all headlines and most body text; leverage its precise letter-spacing rules including -0.06em at 172px and -0.05em at 64px.
- Apply a 99px border radius consistently to all primary and secondary action buttons, and 50px for ghost buttons.
- Use 'Parchment' (#fbf5e7) as the default background for all page sections and cards, creating a consistent warm base.
- Incorporate 'Electric Blue' (#1673ff) sparingly for interactive elements or prominent sections to create clear focal points.
- Maintain a clear visual hierarchy by contrasting 'Pueblo Spice' (#3d2800) for main actions with 'Warm Button' (#604106) for secondary actions.

### Don't

- Avoid using stark white backgrounds directly adjacent to 'Pueblo Spice' unless for explicit high-contrast elements.
- Do not deviate from the specified letter-spacing for 'RST Reactor' typefaces; it's a critical branding element.
- Refrain from using generic box shadows; the design relies on flat layers and strong color contrasts for depth.
- Do not introduce new typefaces outside of 'RST Reactor', 'Inter', and system sans-serif.
- Avoid over-saturating the palette; restrict additional colors to the defined 'Sunburst Orange', 'Harvest Glow', and 'Fuchsia Flush' accents as per their established roles.

## Imagery

The site uses a highly stylized, brand-specific illustration style characterized by precise, geometric forms and vivid coloring. The dominant image is a large, flat flower illustration with concentric patterns, utilizing 'Parchment' for petals, 'Sunburst Orange' for inner radiating lines, and 'Pueblo Spice' for core details. This illustration style is decorative and creates a strong visual identity rather than conveying complex information. There's also a use of partner logos, rendered in monochrome (often 'Pueblo Spice' or 'Onyx') within 'Parchment' colored card grids, maintaining aesthetic consistency. Icons are minimalist and line-based, rendered in 'Onyx'.

## Layout

The layout primarily uses a contained, centered structure with significant margins, giving content room to breathe. The hero section is full-width, featuring a dominant graphic on an 'Electric Blue' background, immediately setting a unique and playful tone while the header remains a max-width centered element. Subsequent sections often feature alternating background colors (e.g., 'Parchment' then 'Pueblo Spice') creating a distinct rhythm. Content is arranged in stacked blocks or grid formations, such as the 3-column partner logo grid, with consistent vertical spacing between sections. Navigation is a minimalist top-right menu.

## Similar Brands

- **AIGA Design Conference** — Similar focus on design culture, often utilizing unique, illustration-heavy visual identities and distinct typographic choices.
- **Offscreen Magazine** — Uses a warm, muted color palette with strong typography and a strong sense of craftsmanship, prioritizing a considered, editorial feel.
- **The Brand Identity** — Showcases a sophisticated and often bold use of custom typography against minimalist color schemes to create a distinct brand presence.
- **It's Nice That** — Employs vibrant accent colors and a playful, illustration-driven aesthetic to convey creativity and innovation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-electric-blue: #1673ff;
  --color-pueblo-spice: #3d2800;
  --color-warm-button: #604106;
  --color-sunburst-orange: #ff7b02;
  --color-harvest-glow: #ffae45;
  --color-fuchsia-flush: #e045ff;
  --color-parchment: #fbf5e7;
  --color-onyx: #000000;
  --color-canvas-white: #ffffff;
  --color-light-gray-divider: #c4c4c4;
  --font-rst-reactor: 'RST Reactor', IBM Plex Mono;
  --font-inter: 'Inter', Inter;
  --font-system-sans-serif: 'system sans-serif', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 10px;
  --leading-caption: 2;
  --tracking-caption: 0.5px;
  --text-heading: 64px;
  --leading-heading: 0.9;
  --tracking-heading: -3.2px;
  --text-display: 172px;
  --leading-display: 1;
  --tracking-display: -10.32px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-57: 57px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-104: 104px;
  --spacing-112: 112px;
  --spacing-128: 128px;
  --spacing-200: 200px;
  --radius-cards: 30px;
  --radius-buttons: 99px;
  --radius-pillforms: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-electric-blue: #1673ff;
  --color-pueblo-spice: #3d2800;
  --color-warm-button: #604106;
  --color-sunburst-orange: #ff7b02;
  --color-harvest-glow: #ffae45;
  --color-fuchsia-flush: #e045ff;
  --color-parchment: #fbf5e7;
  --color-onyx: #000000;
  --color-canvas-white: #ffffff;
  --color-light-gray-divider: #c4c4c4;
  --font-rst-reactor: 'RST Reactor', IBM Plex Mono;
  --font-inter: 'Inter', Inter;
  --font-system-sans-serif: 'system sans-serif', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 10px;
  --leading-caption: 2;
  --tracking-caption: 0.5px;
  --text-heading: 64px;
  --leading-heading: 0.9;
  --tracking-heading: -3.2px;
  --text-display: 172px;
  --leading-display: 1;
  --tracking-display: -10.32px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-57: 57px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-104: 104px;
  --spacing-112: 112px;
  --spacing-128: 128px;
  --spacing-200: 200px;
  --radius-cards: 30px;
  --radius-buttons: 99px;
  --radius-pillforms: 9999px;
}
```
