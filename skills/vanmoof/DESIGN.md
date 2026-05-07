---
version: alpha
name: "Vanmoof"
description: "VanMoof's design system relies on a stark, contemporary aesthetic, leveraging a predominantly monochrome palette to emphasize product visuals. Components are lightweight and often outlined, with minimal elevation, creating a sense of understated sophistication. Typography is precise and utilitarian, giving an authoritative yet accessible feel. The overall presentation prioritizes directness and clarity, allowing product design and functional accents to take center stage."
theme: "light"
industry: "ecommerce"
source_url: "https://www.vanmoof.com"
refero_style_id: "4887c681-d4e6-41d3-b83c-5650cf925ee9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509619620-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509619620-thumb.jpg"
extracted_at: "2026-04-30T00:40:43.729Z"
---

# Vanmoof — Style Reference

> monochrome canvas, functional red accents

**Theme:** light

**Industry:** ecommerce

VanMoof's design system relies on a stark, contemporary aesthetic, leveraging a predominantly monochrome palette to emphasize product visuals. Components are lightweight and often outlined, with minimal elevation, creating a sense of understated sophistication. Typography is precise and utilitarian, giving an authoritative yet accessible feel. The overall presentation prioritizes directness and clarity, allowing product design and functional accents to take center stage.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated surfaces, primary text on dark backgrounds |
| Ghost Gray | #e5e7eb | `--color-ghost-gray` | Subtle UI borders, ghost button outlines, secondary surface backgrounds, and dividers. This is the dominant neutral |
| Carbon Black | #222222 | `--color-carbon-black` | Primary text, solid button backgrounds for actions, iconography, and strong borders |
| Inkwell | #000000 | `--color-inkwell` | Strongest textual elements, high-contrast links, and critical headings |
| Deep Slate | #313131 | `--color-deep-slate` | Secondary text, subtle link hover states, and lighter body text |
| Light Gray | #e0e0e0 | `--color-light-gray` | Minor background tints, subtle separators |
| Ignition Red | #ff0000 | `--color-ignition-red` | Product highlights (e.g., bike tail light in hero, map pins) — a rare, high-impact accent for key focal points. (Inferred from screenshot) |

## Tokens — Typography

### Unica77LLWeb

- **Token:** `--font-unica77llweb`
- **Substitute:** Helvetica Neue
- **Weights:** 400, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 24px, 32px, 48px, 80px, 280px
- **Line heights:** 1.00, 1.10, 1.33, 1.43, 1.50, 1.56
- **Letter spacing:** normal
- **Role:** Primary typeface for all UI elements, headings, body text, and links. Its broad range of weights and sizes supports a hierarchical and precise content presentation.

### Unica77Mono

- **Token:** `--font-unica77mono`
- **Substitute:** Roboto Mono
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Used for specific, technical-oriented body text and navigation labels; provides a contrasting structured feel to the primary typeface.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.43 | — | `--text-subheading` |
| heading-sm | 24px | 1.33 | — | `--text-heading-sm` |
| heading | 32px | 1.1 | — | `--text-heading` |
| heading-lg | 48px | 1.1 | — | `--text-heading-lg` |
| display-sm | 80px | 1.1 | — | `--text-display-sm` |
| display-lg | 280px | 1 | — | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| default | 2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 8px |
| elementGap | 8px |

## Components

### Ghost Outline Button (Light)

**Role:** Secondary action button

Transparent background with a 1px #e5e7eb border and #222222 text. Used for subtle actions against light backgrounds. Radius: 2px. No explicit padding in component definition, relies on text padding for sizing.

### Ghost Outline Button (Dark)

**Role:** Secondary action button on dark sections

Transparent background with a 1px #e5e7eb border and #ffffff text. Used for subtle actions against dark backgrounds. Radius: 4px. No explicit padding in component definition, relies on text padding for sizing.

### Primary Filled Button

**Role:** Primary action button

Solid #222222 background with #ffffff text. Used for critical calls to action. Radius: 4px. No explicit padding in component definition, relies on text padding for sizing.

### Product Feature Card

**Role:** Informational display

#eeeeee background, 8px border-radius, no shadow. Padding varies by content, but generally has a top padding of 80px. Used for displaying feature highlights with iconography and text.

### Navigation Link

**Role:** Primary navigation item

#000000 text on transparent background, no border. Text uses Unica77LLWeb weight 400 at 16px.

### Mobile Navbar Item Toggle

**Role:** Mobile menu button

Transparent background with #e5e7eb border and #222222 text, 2px radius.

### Mini Select Country Button

**Role:** Header utility action

Solid #222222 background, #ffffff text, 4px border-radius. Compact button for utility actions.

## Do's and Don'ts

### Do

- Use '#222222' for all primary text and button backgrounds against light canvases.
- Apply '#e5e7eb' as the default border color for all ghost buttons and subtle UI dividers.
- Maintain a clear hierarchical order in typography, using the Unica77LLWeb family for headings (e.g., 280px, 80px) and body text (e.g., 14px, 16px).
- Ensure all interactive elements and cards use a 2px or 8px border-radius, prioritizing 2px for smaller interactive elements like buttons.
- Utilize 'Ignition Red' (#ff0000) only for specific, high-impact product accents or critical status indicators, never for general UI.
- Structure page sections with a '24px' vertical gap between major content blocks to ensure breathing room.
- Employ a base spacing unit of '8px' for padding and gaps between smaller elements within components.

### Don't

- Avoid using multiple chromatic colors; limit color accents strictly to 'Ignition Red' for product highlights.
- Do not introduce complex shadows; maintain a flat or minimally elevated visual style.
- Refrain from using decorative gradients on UI elements; the system prefers solid colors and clean outlines.
- Do not deviate from the specified Unica77LLWeb and Unica77Mono font families; no system fonts are permitted.
- Avoid excessive imagery; when present, it should be high-contrast and product-focused, complementing the monochrome UI.
- Do not use generic button styles; always adhere to the Ghost Outline (Light/Dark) or Primary Filled button specifications.
- Never use radii other than 2px or 8px; custom or interpolated corner rounding is not permitted.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Primary page background and default content areas. |
| 2 | Ghost Gray | #e5e7eb | Secondary background areas, subtle panels, and content blocks (e.g., feature cards). |
| 3 | Carbon Black | #222222 | Accentuated section backgrounds, especially in hero areas, and primary button fills. |

## Imagery

Product photography dominates, featuring tight crops of e-bikes against deep, contrasting monochrome backgrounds (often dark gray/black or white). The imagery is highly stylized, showcasing specific design details and technological features. There is a strong emphasis on the product itself, with minimal lifestyle context. Icons are outlined, minimal, and monochromatic, matching the overall UI's clean aesthetic. Imagery functions primarily as product showcase and explanatory content, occupying significant visual space in hero sections but contained in feature blocks.

## Layout

The page primarily uses a max-width contained layout for most content sections, though hero sections often extend full-bleed with product imagery. The hero pattern frequently features a large, dramatic product shot with expansive typography (e.g., 'S6', 'A5') and overlaid, constrained text blocks and ghost buttons. Section rhythm is marked by consistent vertical spacing (24px `sectionGap`) and often alternates between full-bleed dark product showcases and lighter, contained content blocks. Content is arranged in flexible patterns, including centered stacks for app features and multi-column grids for testimonials or support information. Navigation is a minimalist sticky header with a prominent brand logo, hamburger menu, and cart icon, emphasizing a distraction-free browsing experience.

## Similar Brands

- **Cowboy E-bikes** — Similar focus on premium product photography, minimalist UI, and a predominantly monochrome palette accentuating the bikes.
- **Tesla** — Emphasizes product design through stark, high-contrast imagery, large typography, and a clean, direct visual language.
- **Stripe** — Utilizes a highly structured, monochrome interface with precise typography and subtle border treatments for a professional, understated feel.
- **Apple** — Clean, product-centric aesthetic featuring strong photography, ample whitespace, and a focus on premium materials and functional simplicity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ghost-gray: #e5e7eb;
  --color-carbon-black: #222222;
  --color-inkwell: #000000;
  --color-deep-slate: #313131;
  --color-light-gray: #e0e0e0;
  --color-ignition-red: #ff0000;
  --font-unica77llweb: 'Unica77LLWeb', Helvetica Neue;
  --font-unica77mono: 'Unica77Mono', Roboto Mono;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --text-display-sm: 80px;
  --leading-display-sm: 1.1;
  --text-display-lg: 280px;
  --leading-display-lg: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --radius-cards: 8px;
  --radius-default: 2px;
  --surface-canvas-white: #ffffff;
  --surface-ghost-gray: #e5e7eb;
  --surface-carbon-black: #222222;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ghost-gray: #e5e7eb;
  --color-carbon-black: #222222;
  --color-inkwell: #000000;
  --color-deep-slate: #313131;
  --color-light-gray: #e0e0e0;
  --color-ignition-red: #ff0000;
  --font-unica77llweb: 'Unica77LLWeb', Helvetica Neue;
  --font-unica77mono: 'Unica77Mono', Roboto Mono;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --text-display-sm: 80px;
  --leading-display-sm: 1.1;
  --text-display-lg: 280px;
  --leading-display-lg: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --radius-cards: 8px;
  --radius-default: 2px;
  --surface-canvas-white: #ffffff;
  --surface-ghost-gray: #e5e7eb;
  --surface-carbon-black: #222222;
}
```
