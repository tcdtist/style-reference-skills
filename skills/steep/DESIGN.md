---
version: alpha
name: "Steep"
description: "Steep captures a 'white canvas with depth' aesthetic: crisp backgrounds, carefully chosen neutrals, and a warm, inviting accent. The overall impression is one of restrained elegance and confident clarity, suitable for an analytics platform. Typography plays a central role with a high-contrast serif for display elements paired with a clean sans-serif for UI, creating both gravitas and legibility. Subtle shadows provide gentle elevation, preventing the interface from feeling flat."
theme: "light"
industry: "ai"
source_url: "https://steep.app"
refero_style_id: "75fdb89f-ca64-41b3-af36-7a78bd09448e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510293431-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510293431-thumb.jpg"
extracted_at: "2026-04-30T00:52:09.200Z"
---

# Steep — Style Reference

> Warm, Crisp Canvas

**Theme:** light

**Industry:** ai

Steep captures a 'white canvas with depth' aesthetic: crisp backgrounds, carefully chosen neutrals, and a warm, inviting accent. The overall impression is one of restrained elegance and confident clarity, suitable for an analytics platform. Typography plays a central role with a high-contrast serif for display elements paired with a clean sans-serif for UI, creating both gravitas and legibility. Subtle shadows provide gentle elevation, preventing the interface from feeling flat.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | #ffffff | `--color-canvas` | Primary page and surface background, text color for dark elements. Used for the main content area, cards, and prominent UI elements |
| Ink | #17191c | `--color-ink` | Primary text color, background for filled buttons, navigation elements. A dominant dark neutral that provides strong contrast |
| Graphite | #000000 | `--color-graphite` | Fallback dark text, outline for ghost buttons, decorative borders |
| Warm Mist | #fbe1d1 | `--color-warm-mist` | Subtle background for specific cards and sections, providing a soft, almost imperceptible warmth to the interface |
| Terracotta | #5d2a1a | `--color-terracotta` | Accent for borders, strokes, and decorative elements within cards. A warm brown-orange that serves as a secondary brand accent |
| Fog | #f7f7f8 | `--color-fog` | Secondary surface background, used for subtle differentiation of cards or sections that are slightly less prominent than the primary canvas |
| Muted Stone | #4c4c4c | `--color-muted-stone` | Secondary text and icon color, used for less prominent information or subtle UI details |
| Light Steel | #777b86 | `--color-light-steel` | Muted link color, subtle icon fills, and quiet UI elements — used for non-essential text that aids readability without drawing too much attention |
| Hint of Grey | #a3a6af | `--color-hint-of-grey` | Placeholder text color for input fields, soft borders |
| Dusk Link | #8b8c8d | `--color-dusk-link` | Muted icon strokes, separators, and secondary graphic details. Do not promote it to the primary CTA color |

## Tokens — Typography

### Sohne

- **Token:** `--font-sohne`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 430, 450, 480, 500
- **Sizes:** 14px, 15px, 16px, 17px, 18px, 22px, 26px
- **Line heights:** 1.00, 1.18, 1.25, 1.31, 1.35, 1.38, 1.43, 1.50
- **Letter spacing:** -0.0090em
- **Role:** The primary typeface for all UI elements, body text, buttons, and navigation. Its condensed nature and precise tracking maintain clarity and a compact feel across the interface.

### Signifier

- **Token:** `--font-signifier`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 44px, 64px, 90px
- **Line heights:** 1.10
- **Letter spacing:** -0.0250em, -0.0150em
- **Role:** Used exclusively for prominent headings, this serif typeface provides a sophisticated and editorial counterpoint to the utilitarian Sohne. Its generous tracking at larger sizes gives it an open, authoritative presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | 0px | `--text-caption` |
| heading | 22px | 1.18 | 0px | `--text-heading` |
| heading-lg | 26px | 1 | -0.23px | `--text-heading-lg` |
| display | 44px | 1.1 | -0.66px | `--text-display` |
| display-lg | 64px | 1.1 | -0.96px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-124 | 124px | `--spacing-124` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| images | 12px |
| inputs | 16px |
| buttons | 1.67772e+07px |
| default | 24px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 80px |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### Filled Primary Button

**Role:** Main call-to-action

Solid 'Ink' (#17191c) background with 'Canvas' (#ffffff) text, using a very large border-radius to create a pill shape. Padding is 0px vertical, 20px horizontal.

### Ghost Button (Dark Text)

**Role:** Secondary action or link

Transparent background with 'Ink' (#17191c) text. Border is 1px 'Ink' (#17191c). Pill-shaped with large border-radius. Padding is 0px vertical, 20px horizontal.

### Ghost Button (Light Text)

**Role:** Secondary action on dark backgrounds

Transparent background with 'Canvas' (#ffffff) text. Border is 1px 'Canvas' (#ffffff). Pill-shaped with large border-radius. Padding is 0px vertical, 20px horizontal.

### Text Link Button

**Role:** Inline actions or navigational links

Transparent background with 'Ink' (#17191c) text, no border. Typically used for less prominent actions, often without horizontal padding.

### Default Card

**Role:** Content container

Background is 'Canvas' (#ffffff) with 20px border-radius. Features a prominent shadow: rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px. Internal padding varies from 16px to 20px.

### Subtle Background Card

**Role:** Secondary content container or data visualization background

Background is 'Fog' (#f7f7f8) with 24px border-radius and no shadow. Internal content padding is typically 0.

### Accent Background Card

**Role:** Decorative or featured content container

Background is 'Warm Mist' (#fbe1d1) with 24px border-radius and no shadow. Internal content padding is typically 0. May feature 'Terracotta' borders on embedded elements.

### Input Field

**Role:** User input element

Placeholder text in 'Hint of Grey' (#a3a6af). Background is 'Canvas' (#ffffff) with a 1px border in 'Ink' (#17191c) on focus and 16px border-radius.

## Do's and Don'ts

### Do

- Use 'Ink' (#17191c) for primary text and filled buttons to ensure strong contrast and clear calls to action.
- Apply 'Canvas' (#ffffff) as the default background for most page sections and card surfaces, creating a bright and airy feel.
- Pair the 'Signifier' font at large sizes for headlines with 'Sohne' for all body text and UI elements to leverage their distinct roles.
- Utilize a 24px border-radius for cards and main content blocks to maintain a soft, approachable aesthetic.
- Ensure generous spacing, with `elementGap` of 8px and `sectionGap` of 80px, to support content readability and perceived quality.
- Implement the full shadow stack (rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px) for elevated cards to provide subtle depth without heaviness.
- Use 'Warm Mist' (#fbe1d1) sparingly as a background accent to introduce a subtle warmth and highlight featured content.

### Don't

- Avoid using highly saturated colors; the palette favors muted neutrals with a single warm accent.
- Do not use 'Signifier' for body text, UI labels, or buttons; its distinctive character is reserved for large display headings.
- Refrain from sharp, 0px border-radii for interactive elements or containers; maintain the consistent rounded aesthetic.
- Do not introduce heavy, opaque shadows; elevation should be subtle and air-like, not dense or dark.
- Avoid tight spacing between elements; maintain adequate `elementGap` and `sectionGap` values to preserve visual order and reduce cognitive load.
- Do not use dark backgrounds for primary page sections; the system is built around a light, high-contrast canvas.
- Resist using multiple font families beyond 'Sohne' and 'Signifier'; maintain typographic consistency.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas | #ffffff | Primary page background and default card surface. Bright, high-contrast base. |
| 2 | Fog | #f7f7f8 | Secondary background for subtly differentiated sections or cards, offering a slight visual break from the main canvas. |
| 3 | Warm Mist | #fbe1d1 | Accent background for featured cards or UI elements, introducing a soft, warm hue. |

## Elevation

- **Default Card:** `rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`

## Imagery

This site prominently uses clean, abstract 3D elements and UI screenshots to convey complex data with a sense of clarity and modern polish. Photography is absent. Illustrations are minimalistic, focusing on geometric shapes and soft gradients that complement the palette. Icons are outlined, lightweight, and mono-color, typically rendered in 'Ink' (#17191c) or 'Muted Stone' (#4c4c4c). Imagery serves an explanatory and product showcase role rather than decorative. Visuals are carefully contained within rounded cards or sections, maintaining the spacious, organized feel, making the design feels image-heavy in its content sections rather than text-dominant.

## Layout

The page model alternates between a full-bleed hero and a max-width 1280px contained layout for content sections. The initial hero features a centered headline over a soft, almost imperceptible gradient background, accompanied by floating UI elements. Subsequent sections typically follow a consistent vertical rhythm with minimal visual dividers, emphasizing a seamless flow of information. Content is primarily arranged in grid-like patterns, often with asymmetric compositions or alternating text-left/image-right (or UI element) sections. Card grids are frequently used for features and data visualization. The layout maintains a spacious density, with ample breathing room around elements. Navigation consists of a sticky top bar with clearly delineated product and action buttons.

## Similar Brands

- **Figma** — White canvas interface with contained, shadowed UI elements and a focus on clarity through typography and subtle color accents.
- **Linear** — Minimalist light theme, subtle use of neutrals, compact layout of UI elements, and highly functional typography.
- **Notion** — Content-first approach on a white canvas, extensive use of soft card-like containers, and functional, uncluttered typography.
- **Vercel** — Clean light interface with high contrast text, distinct typography for headlines and body, and a structured, component-based layout.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas: #ffffff;
  --color-ink: #17191c;
  --color-graphite: #000000;
  --color-warm-mist: #fbe1d1;
  --color-terracotta: #5d2a1a;
  --color-fog: #f7f7f8;
  --color-muted-stone: #4c4c4c;
  --color-light-steel: #777b86;
  --color-hint-of-grey: #a3a6af;
  --color-dusk-link: #8b8c8d;
  --font-sohne: 'Sohne', system-ui, sans-serif;
  --font-signifier: 'Signifier', serif;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: 0px;
  --text-heading: 22px;
  --leading-heading: 1.18;
  --tracking-heading: 0px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.23px;
  --text-display: 44px;
  --leading-display: 1.1;
  --tracking-display: -0.66px;
  --text-display-lg: 64px;
  --leading-display-lg: 1.1;
  --tracking-display-lg: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-124: 124px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --radius-cards: 24px;
  --radius-images: 12px;
  --radius-inputs: 16px;
  --radius-buttons: 1.67772e+07px;
  --radius-default: 24px;
  --shadow-xl: rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
  --surface-canvas: #ffffff;
  --surface-fog: #f7f7f8;
  --surface-warm-mist: #fbe1d1;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas: #ffffff;
  --color-ink: #17191c;
  --color-graphite: #000000;
  --color-warm-mist: #fbe1d1;
  --color-terracotta: #5d2a1a;
  --color-fog: #f7f7f8;
  --color-muted-stone: #4c4c4c;
  --color-light-steel: #777b86;
  --color-hint-of-grey: #a3a6af;
  --color-dusk-link: #8b8c8d;
  --font-sohne: 'Sohne', system-ui, sans-serif;
  --font-signifier: 'Signifier', serif;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: 0px;
  --text-heading: 22px;
  --leading-heading: 1.18;
  --tracking-heading: 0px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.23px;
  --text-display: 44px;
  --leading-display: 1.1;
  --tracking-display: -0.66px;
  --text-display-lg: 64px;
  --leading-display-lg: 1.1;
  --tracking-display-lg: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-124: 124px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --radius-cards: 24px;
  --radius-images: 12px;
  --radius-inputs: 16px;
  --radius-buttons: 1.67772e+07px;
  --radius-default: 24px;
  --shadow-xl: rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
  --surface-canvas: #ffffff;
  --surface-fog: #f7f7f8;
  --surface-warm-mist: #fbe1d1;
}
```
