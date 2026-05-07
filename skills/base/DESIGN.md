---
version: alpha
name: "Base"
description: "Base projects a precise, technical elegance with a high-contrast achromatic canvas punctuated by a single vibrant violet accent. Typography is dominant, employing a stark sans-serif for headlines and a more functional family for body text, creating a strong editorial feel. UI elements are compact, utilizing ghost buttons and minimal borders to maintain a lightweight, ethereal presence while the branding color provides clear, unambiguous interactive states. The overall impression is digital, modular, and performance-oriented."
theme: "light"
industry: "crypto"
source_url: "https://www.base.org"
refero_style_id: "530eb4cf-7e75-4833-95c9-746818050db7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509310101-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509310101-thumb.jpg"
extracted_at: "2026-04-30T00:35:33.890Z"
---

# Base — Style Reference

> Digital blueprint, on-chain precision.

**Theme:** light

**Industry:** crypto

Base projects a precise, technical elegance with a high-contrast achromatic canvas punctuated by a single vibrant violet accent. Typography is dominant, employing a stark sans-serif for headlines and a more functional family for body text, creating a strong editorial feel. UI elements are compact, utilizing ghost buttons and minimal borders to maintain a lightweight, ethereal presence while the branding color provides clear, unambiguous interactive states. The overall impression is digital, modular, and performance-oriented.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button text (when on primary brand color) |
| Ink Black | #000000 | `--color-ink-black` | Primary text, strong headings, button borders (neutral ghost), general UI elements |
| Haze Gray | #f2f2f2 | `--color-haze-gray` | Subtle background for navigation elements, soft dividers |
| Twilight Graphite | #323232 | `--color-twilight-graphite` | Navigation borders, denser text elements |
| Muted Ash | #999999 | `--color-muted-ash` | Secondary text, metadata, subtle informational elements |
| Slate Mist | #b1b7c3 | `--color-slate-mist` | Muted navigation text, tertiary UI text and icon fills |
| Vivid Cobalt | #0000ff | `--color-vivid-cobalt` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Subtle Granite | #717886 | `--color-subtle-granite` | Outlined button borders, ghost link text, supporting body copy, providing contrast without being heavy |
| Emerald Green | #098551 | `--color-emerald-green` | Green decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |

## Tokens — Typography

### doto

- **Token:** `--font-doto`
- **Substitute:** Montserrat
- **Weights:** 400, 700
- **Sizes:** 16px, 115px
- **Line heights:** 0.70, 1.50
- **Letter spacing:** -0.0250em
- **Role:** Display and prominent headings. The extreme letter-spacing and varied line heights suggest a highly crafted, almost artistic use of typography for visual impact rather than pure body text readability.

### coinbaseSans

- **Token:** `--font-coinbasesans`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 15px, 16px, 32px, 80px, 110px
- **Line heights:** 0.70, 1.00, 1.13, 1.14, 1.30, 1.33, 1.50
- **Letter spacing:** -0.0500em at 110px, -0.0300em at 80px, -0.0100em at 32px, 0.0100em at 12px
- **Role:** Large headings and callouts, designed for impact and clarity, providing an extended typographic range for key messaging.

### coinbaseDisplay

- **Token:** `--font-coinbasedisplay`
- **Substitute:** Open Sans
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line heights:** 1.14, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** Base body text. Its compact line-height and normal letter spacing optimize for content density without sacrificing readability.

### coinbaseMono

- **Token:** `--font-coinbasemono`
- **Substitute:** Roboto Mono
- **Weights:** 350, 400
- **Sizes:** 12px, 14px
- **Line heights:** 0.90, 1.43
- **Letter spacing:** 0.0730em
- **Role:** Monospaced text for code snippets, data readouts, or elements requiring distinct visual separation due to their technical nature. The generous letter spacing enhances legibility for short code-like strings.

### baseSans

- **Token:** `--font-basesans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.30
- **Letter spacing:** -0.0140em
- **Role:** Secondary body text and detailed descriptions. Its slightly larger size and tighter letter-spacing distinguish it from the main body copy, adding a touch of elegance for longer content blocks.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.14 | — | `--text-caption` |
| body-sm | 14px | 1.14 | — | `--text-body-sm` |
| body | 15px | 1.14 | — | `--text-body` |
| body-lg | 16px | 1.14 | — | `--text-body-lg` |
| heading-sm | 32px | 1.14 | — | `--text-heading-sm` |
| heading | 80px | 1.14 | — | `--text-heading` |
| heading-lg | 110px | 1.14 | — | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| --- | --- |
| small | 2px |
| default | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1128px |
| sectionGap | 48px |
| cardPadding | 12px |
| elementGap | 4px |

## Components

### Ghost Navigation Item

**Role:** Primary navigation links in the sidebar

Text in Ink Black (#000000) or Slate Mist (#b1b7c3) on Canvas White (#ffffff) background. No distinct background or border, minimal padding of 10px on all sides, 8px border radius. Interactive state uses Vivid Cobalt (#0000ff) border and text color.

### Filled Primary Button

**Role:** Main call-to-action button

Background is Vivid Cobalt (#0000ff) with Canvas White (#ffffff) text. Uses 8px border radius, 4px vertical padding and 12px horizontal padding. Letter spacing is tight.

### Outlined Secondary Button

**Role:** Secondary or alternative actions

Transparent background with Subtle Granite (#717886) border and text. Uses 8px border radius and 10px general padding. Emphasizes action without visual weight.

### Informational Card

**Role:** Cards displaying product features or statistics

Canvas White (#ffffff) background. Padding is 12px. Uses an 8px border radius. Content typically includes a descriptive icon and text. Borders are minimal or absent.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for all primary body text and headings.
- Use Haze Gray (#f2f2f2) sparingly for subtle background separation in navigation or soft dividers.
- Apply Vivid Cobalt (#0000ff) exclusively for interactive elements like buttons, active states, and links to maintain its impact.
- Maintain a compact button padding strategy: 4px vertical, 12px horizontal for filled buttons; 10px all-around for ghost/outlined buttons.
- Employ an 8px border radius for all interactive elements and informational cards, with an optional 2px radius for very small elements.
- Use 'doto' for display headlines requiring maximal visual impact, applying the specified negative letter-spacing for density.
- Ensure the page-level content is contained within a max-width of 1128px.

### Don't

- Do not introduce new chromatic colors outside of Vivid Cobalt (#0000ff) and Emerald Green (#098551) to avoid diluting the brand palette.
- Avoid heavy shadows or gradients, preserving the lightweight and flat aesthetic of surfaces.
- Do not use `coinbaseDisplay` for body copy; reserve it for clear, focused text blocks.
- Do not deviate from the established letter-spacing values for display and heading typography; these are critical for visual identity.
- Avoid complex, multi-layered backgrounds; keep canvas and card surfaces clean and monochromatic.
- Do not use generic button styles; stick to the Ghost, Outlined, and Filled variants with their predefined color and radius tokens.
- Do not use base unit multiples other than 4px for spacing decisions.

## Imagery

The site uses abstract, geometric 3D renders with a wireframe or voxelated style. These graphics are primarily brand-colored (Vivid Cobalt, Emerald Green, Subtle Granite) against achromatic backgrounds, serving decorative and explanatory roles for product features. They are contained within their own sections, not full-bleed, and generally appear as symbolic representations rather than literal product screenshots. Icons are minimalist, outlined, and monochromatic, used sparsely to accompany text or data.

## Layout

The page maintains a centered max-width of 1128px for most content. The hero section features a large, stark headline centered over an abstract, faintly visible background graphic. Content sections alternate between full-width and centered text blocks. A prominent left-aligned sticky navigation bar features ghost links. Product features are presented in a 2x2 grid of informational cards that use the same abstract graphic style. Vertical rhythm is established by consistent 48px section gaps and compact element spacing within blocks.

## Similar Brands

- **Stripe** — Shares a precise, developer-first UI with a focus on typography and a limited, high-contrast color palette, often featuring abstract geometric product visuals.
- **Linear** — Employs an achromatic color scheme with a single vibrant accent color for interactive states and strong emphasis, combined with crisp typography and clean card-based layouts.
- **Figma** — Utilizes a clean, white-space dominant interface with a strong sans-serif type hierarchy and a distinct primary accent color (purple) for actions and branding.
- **Vercel** — Features a strong emphasis on typography, high contrast, and a lean UI without heavy decoration, often using a dark-mode aesthetic but with similar principles applied to light mode elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-haze-gray: #f2f2f2;
  --color-twilight-graphite: #323232;
  --color-muted-ash: #999999;
  --color-slate-mist: #b1b7c3;
  --color-vivid-cobalt: #0000ff;
  --color-subtle-granite: #717886;
  --color-emerald-green: #098551;
  --font-doto: 'doto', Montserrat;
  --font-coinbasesans: 'coinbaseSans', Inter;
  --font-coinbasedisplay: 'coinbaseDisplay', Open Sans;
  --font-coinbasemono: 'coinbaseMono', Roboto Mono;
  --font-basesans: 'baseSans', Inter;
  --text-caption: 12px;
  --leading-caption: 1.14;
  --text-body-sm: 14px;
  --leading-body-sm: 1.14;
  --text-body: 15px;
  --leading-body: 1.14;
  --text-body-lg: 16px;
  --leading-body-lg: 1.14;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.14;
  --text-heading: 80px;
  --leading-heading: 1.14;
  --text-heading-lg: 110px;
  --leading-heading-lg: 1.14;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --radius-small: 2px;
  --radius-default: 8px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-haze-gray: #f2f2f2;
  --color-twilight-graphite: #323232;
  --color-muted-ash: #999999;
  --color-slate-mist: #b1b7c3;
  --color-vivid-cobalt: #0000ff;
  --color-subtle-granite: #717886;
  --color-emerald-green: #098551;
  --font-doto: 'doto', Montserrat;
  --font-coinbasesans: 'coinbaseSans', Inter;
  --font-coinbasedisplay: 'coinbaseDisplay', Open Sans;
  --font-coinbasemono: 'coinbaseMono', Roboto Mono;
  --font-basesans: 'baseSans', Inter;
  --text-caption: 12px;
  --leading-caption: 1.14;
  --text-body-sm: 14px;
  --leading-body-sm: 1.14;
  --text-body: 15px;
  --leading-body: 1.14;
  --text-body-lg: 16px;
  --leading-body-lg: 1.14;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.14;
  --text-heading: 80px;
  --leading-heading: 1.14;
  --text-heading-lg: 110px;
  --leading-heading-lg: 1.14;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --radius-small: 2px;
  --radius-default: 8px;
}
```
