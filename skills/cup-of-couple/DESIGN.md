---
version: alpha
name: "Cup of Couple"
description: "Cup of Couple presents a sophisticated and minimalist editorial aesthetic, mimicking a high-fashion magazine layout with a stark, achromatic palette. Typography reigns supreme, utilizing distinct serif and sans-serif fonts to establish clear visual hierarchy and a refined, curated feel. The design relies on generous white space and subtle hairline borders to delineate content, maintaining an airy lightness without heavy visual anchors. Surfaces are flat and un-elevated, emphasizing content over decorative UI elements."
theme: "light"
industry: "media"
source_url: "https://www.cupofcouple.com"
refero_style_id: "f4e1b510-6085-4fb8-8597-05d479d3c00c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519497848-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519497848-thumb.jpg"
extracted_at: "2026-04-30T03:25:15.551Z"
---

# Cup of Couple — Style Reference

> Monochrome Editorial Canvas

**Theme:** light

**Industry:** media

Cup of Couple presents a sophisticated and minimalist editorial aesthetic, mimicking a high-fashion magazine layout with a stark, achromatic palette. Typography reigns supreme, utilizing distinct serif and sans-serif fonts to establish clear visual hierarchy and a refined, curated feel. The design relies on generous white space and subtle hairline borders to delineate content, maintaining an airy lightness without heavy visual anchors. Surfaces are flat and un-elevated, emphasizing content over decorative UI elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #303030 | `--color-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Ash Gray | #808080 | `--color-ash-gray` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Canvas White | #f0f0f0 | `--color-canvas-white` | Page background, card surfaces, and general content backdrops |
| Subtle Gray | #767676 | `--color-subtle-gray` | Very thin structural borders in navigation elements |

## Tokens — Typography

### ITCFranklinGothicStdBook

- **Token:** `--font-itcfranklingothicstdbook`
- **Substitute:** Franklin Gothic Book
- **Weights:** 400
- **Sizes:** 10px, 16px
- **Line heights:** 1.00, 1.05, 1.20
- **Role:** Primary body text, navigation links, and smaller information captions. Its clean sans-serif form provides legibility against the more ornamental display fonts.

### Garamond

- **Token:** `--font-garamond`
- **Substitute:** Garamond
- **Weights:** 400
- **Sizes:** 17px, 28px
- **Line heights:** 1.00, 1.20
- **Role:** Supporting text, larger body paragraphs, and article titles. The classic serif adds a touch of traditional elegance.

### PerpetuaTitlingMT

- **Token:** `--font-perpetuatitlingmt`
- **Substitute:** Perpetua Titling MT
- **Weights:** 400
- **Sizes:** 25px, 32px, 40px, 48px
- **Line heights:** 1.20
- **Role:** Primary section headings and prominent informational labels. Its refined, all-caps serif style evokes a luxury magazine masthead.

### DisplaceKC

- **Token:** `--font-displacekc`
- **Substitute:** UnifrakturMaguntia
- **Weights:** 400
- **Sizes:** 72px
- **Line heights:** 1.20
- **Role:** Exclusive for the brand's main title, 'Cup of Couple', serving as a distinct visual logo-type. This highly stylized font is a unique brand identifier.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1 | 0px | `--text-caption` |
| heading-sm | 25px | 1.2 | 0px | `--text-heading-sm` |
| heading | 32px | 1.2 | 0px | `--text-heading` |
| heading-lg | 40px | 1.2 | 0px | `--text-heading-lg` |
| display | 48px | 1.2 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-60 | 60px | `--spacing-60` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| inputs | 0px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 36px |
| cardPadding | 12px |
| elementGap | 12px |

## Components

### Ghost Navigation Button

**Role:** Navigation and interactive links with a subtle underline effect on hover/active.

Text in Ink (#303030), no background, no border by default. Features a `1px` solid Ink (#303030) bottom border on interaction, but padding is `0px`.

### Content Grid Card

**Role:** Container for visual diary and project entries.

Background is Canvas White (#f0f0f0), with `12px` vertical and `10px` horizontal padding. Features a `1px` solid Ash Gray (#808080) border around its perimeter. Radius is `0px`.

### Minimal Search Input

**Role:** Search field with a discreet bottom border.

Transparent background, Ink (#303030) text. Features a `1px` solid Ash Gray (#808080) bottom border. Radius is `0px`.

### Featured Project Header

**Role:** Header for prominent content sections.

Uses PerpetuaTitlingMT at `25px` height, Ink (#303030), normal letter spacing, with `20px` top padding and `60px` right padding.

## Do's and Don'ts

### Do

- Prioritize ITCFranklinGothicStdBook and Garamond for readability in body copy and detailed information.
- Use PerpetuaTitlingMT for all primary headings and titles to establish a refined editorial tone.
- Apply Canvas White (#f0f0f0) as the dominant background color for all surfaces and sections.
- Utilize 0px border-radius for all interface elements including buttons, cards, and inputs, maintaining a sharp, angular aesthetic.
- Delimit content and sections using a `1px` solid border in Ash Gray (#808080) or Ink (#303030), avoiding heavy visual dividers.
- Maintain generous `36px` vertical spacing between major page sections to ensure airiness and reduce visual clutter.
- Employ the DisplaceKC font exclusively for the main brand logo 'Cup of Couple' — it should not be used for any other text.

### Don't

- Do not introduce any chromatic colors for interactive elements; all accents should be within the achromatic palette.
- Avoid using drop shadows or any form of elevation; the design system mandates a flat, two-dimensional aesthetic.
- Do not use highly decorative UI elements or complex gradients, as the system relies on simplicity and typography.
- Do not deviate from the specified font families; their distinct characteristics are critical to brand identity.
- Never use rounded corners on any UI elements; the system's aesthetic is defined by sharp, precise edges.
- Avoid dense information blocks; instead, use ample padding and single-column layouts for featured content.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #f0f0f0 | Primary page background and default surface for content. |

## Imagery

The imagery leans heavily on high-quality, aspirational photography with a slightly desaturated, film-like quality. Photos are presented within contained, rectangular frames with raw edges, often featuring close-ups of lifestyle scenes, product details, or evocative interior shots. Imagery serves both decorative atmosphere and explanatory content, showcasing product or experience in a sophisticated, unadorned manner. The density is moderate, with images forming large, impactful blocks balanced by significant whitespace.

## Layout

The page structure is primarily max-width contained, but hero sections extend full-bleed for visual impact. The hero often features a large image with a centered, stylized brand title. Content sections typically follow a vertical rhythm of alternating two-column layouts (image-left/text-right or vice versa) or card grids, maintaining consistent vertical spacing. Navigation is a persistent top bar featuring ghosted text links and a minimal search input, with the brand name 'Cup of Couple' serving as the central identifier.

## Similar Brands

- **AIGA Journal** — Emphasizes typographic hierarchy, minimalist layout, and high-quality imagery within a grid structure.
- **The Gentlewoman** — Uses a clean, editorial aesthetic with strong typography, monochrome palette, and generous whitespace for a sophisticated feel.
- **Vogue online** — Showcases a similar high-fashion, content-forward approach with emphasis on photography and classic/modern font pairings.
- **Archiweb** — Focus on high-quality architectural photography with a minimalist UI, strong grid, and delicate typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #303030;
  --color-ash-gray: #808080;
  --color-canvas-white: #f0f0f0;
  --color-subtle-gray: #767676;
  --font-itcfranklingothicstdbook: 'ITCFranklinGothicStdBook', Franklin Gothic Book;
  --font-garamond: 'Garamond', Garamond;
  --font-perpetuatitlingmt: 'PerpetuaTitlingMT', Perpetua Titling MT;
  --font-displacekc: 'DisplaceKC', UnifrakturMaguntia;
  --text-caption: 10px;
  --leading-caption: 1;
  --tracking-caption: 0px;
  --text-heading-sm: 25px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: 0px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-33: 33px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --surface-canvas-white: #f0f0f0;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #303030;
  --color-ash-gray: #808080;
  --color-canvas-white: #f0f0f0;
  --color-subtle-gray: #767676;
  --font-itcfranklingothicstdbook: 'ITCFranklinGothicStdBook', Franklin Gothic Book;
  --font-garamond: 'Garamond', Garamond;
  --font-perpetuatitlingmt: 'PerpetuaTitlingMT', Perpetua Titling MT;
  --font-displacekc: 'DisplaceKC', UnifrakturMaguntia;
  --text-caption: 10px;
  --leading-caption: 1;
  --tracking-caption: 0px;
  --text-heading-sm: 25px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: 0px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-33: 33px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --surface-canvas-white: #f0f0f0;
}
```
