---
version: alpha
name: "Giulia Saporito"
description: "This design system presents a high-contrast, text-dominant aesthetic that feels like a curated typographical exhibition. Bold, expressive serif headlines dance with restrained sans-serif details, all set against a minimalist, almost stark, light background. A single vibrant yellow accent color acts as a playful, yet precise, point of focus and interaction against the otherwise monochrome palette. Components are virtually invisible, relying on text and whitespace for their definition rather than overt borders or shadows, giving the impression of content floating on an ethereal canvas."
theme: "light"
industry: "design"
source_url: "https://giuliasaporito.com"
refero_style_id: "bc057246-6ea4-4503-810f-98381e6be28d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518963135-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518963135-thumb.jpg"
extracted_at: "2026-04-30T03:16:19.474Z"
---

# Giulia Saporito — Style Reference

> typographical gallery on a stark canvas

**Theme:** light

**Industry:** design

This design system presents a high-contrast, text-dominant aesthetic that feels like a curated typographical exhibition. Bold, expressive serif headlines dance with restrained sans-serif details, all set against a minimalist, almost stark, light background. A single vibrant yellow accent color acts as a playful, yet precise, point of focus and interaction against the otherwise monochrome palette. Components are virtually invisible, relying on text and whitespace for their definition rather than overt borders or shadows, giving the impression of content floating on an ethereal canvas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | #f2f2f2 | `--color-canvas` | Page background, primary neutral surface |
| Nightfall | #000000 | `--color-nightfall` | Primary text color, link default, accent borders |
| Pale Mist | #e5e5e5 | `--color-pale-mist` | Subtle border lines, secondary link borders |
| Lavender Haze | #cfabef | `--color-lavender-haze` | Decorative background fills, sometimes used for prominent text color in specific headings |
| Electric Indigo | #698fff | `--color-electric-indigo` | Outlined action borders, active link text, interactive elements |
| Solar Flare | #fcf572 | `--color-solar-flare` | Highlight accent, decorative graphic element. (Identified from screenshot) |

## Tokens — Typography

### Freight Big

- **Token:** `--font-freight-big`
- **Substitute:** Playfair Display
- **Weights:** 200
- **Sizes:** 84px, 198px
- **Line heights:** 0.80, 1.00
- **Role:** Hero display text and very large headings — its ultra-light weight at massive sizes creates a delicate yet commanding presence.

### Neue Haas Grotesk

- **Token:** `--font-neue-haas-grotesk`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 38px, 65px, 66px
- **Line heights:** 1.10
- **Role:** Primary headings, sub-headings, and uppercase text sections conveying direct information. Its clean, sharp forms provide contrast to serif elements.

### Freight Text

- **Token:** `--font-freight-text`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 38px
- **Line heights:** 1.10
- **Role:** Decorative and contextual sub-headings, often paired with sans-serif larger text. Its classic serif form adds a touch of elegance and editorial feel.

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Role:** Small body text, labels, and secondary information. Its presence is minimal but functional.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| heading-sm | 38px | 1.1 | — | `--text-heading-sm` |
| heading | 65px | 1.1 | — | `--text-heading` |
| heading-lg | 84px | 0.8 | — | `--text-heading-lg` |
| display | 198px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-212 | 212px | `--spacing-212` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48-80px |
| cardPadding | 212px |
| elementGap | 4-26px |

## Components

### Ghost Link

**Role:** Interactive text links and navigation items.

Defined purely by text color 'Nightfall' (#000000) against the 'Canvas' (#f2f2f2) background. No background, border, or padding. Active states or specific branding might use 'Electric Indigo' (#698fff) as a text or border color.

### Minimal Card

**Role:** Container for content, appearing as a content block.

Background transparency with no visible borders or shadows. Relies on negative space for definition. Padding on the bottom can be significant at 212px, creating large vertical gaps between content sections.

### Branded Highlight

**Role:** Decorative visual accents.

A circular shape using 'Solar Flare' (#fcf572). Used sparingly to draw attention or for graphic embellishment.

## Do's and Don'ts

### Do

- Prioritize typography as the primary visual element on any page.
- Use 'Canvas' (#f2f2f2) as the default background for all page sections.
- Employ 'Nightfall' (#000000) for all primary text, ensuring maximum contrast.
- Reserve 'Electric Indigo' (#698fff) exclusively for interactive link text or thin borders on actionable items, never for large background fills.
- When using 'Freight Big', ensure it takes up significant visual space, leveraging its large sizes (84px, 198px) and thin weight (200) for impact.
- Embrace a minimal aesthetic by avoiding unnecessary borders, shadows, or background fills on content blocks and components.
- Use 'Solar Flare' (#fcf572) as a small, circular, primary accent point, positioned to complement text blocks.

### Don't

- Do not use heavy, filled buttons; all primary interaction should be conveyed through outlined or text-only links.
- Avoid gradients or complex background patterns; maintain a flat, stark background.
- Do not introduce additional font families or weights beyond the defined system.
- Refrain from using 'Lavender Haze' (#cfabef) as a default background or text color unless explicitly for a decorative section or specific heading.
- Do not apply drop shadows or elevation effects to any components; maintain a flat UI.
- Avoid dense UI elements; instead, use generous whitespace and large vertical gaps to separate content.
- Do not use photographic imagery; prefer abstract shapes or clean product/text displays.

## Similar Brands

- **AIGA Eye on Design** — Similar bold, experimental typography as the sole focal point, minimalist background, and a strong editorial feel.
- **Actual Source** — Emphasizes unique font pairings, large text as graphic elements, and a clean, art-focused layout with minimal UI chrome.
- **Jiaqi Wang (Designer Portfolio)** — Utilizes large-scale, expressive typography with a predominantly white/light background and a compact, art-forward approach to projects.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas: #f2f2f2;
  --color-nightfall: #000000;
  --color-pale-mist: #e5e5e5;
  --color-lavender-haze: #cfabef;
  --color-electric-indigo: #698fff;
  --color-solar-flare: #fcf572;
  --font-freight-big: 'Freight Big', Playfair Display;
  --font-neue-haas-grotesk: 'Neue Haas Grotesk', Inter;
  --font-freight-text: 'Freight Text', Lora;
  --font-times: 'Times', Times New Roman;
  --text-heading-sm: 38px;
  --leading-heading-sm: 1.1;
  --text-heading: 65px;
  --leading-heading: 1.1;
  --text-heading-lg: 84px;
  --leading-heading-lg: 0.8;
  --text-display: 198px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-21: 21px;
  --spacing-26: 26px;
  --spacing-48: 48px;
  --spacing-212: 212px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas: #f2f2f2;
  --color-nightfall: #000000;
  --color-pale-mist: #e5e5e5;
  --color-lavender-haze: #cfabef;
  --color-electric-indigo: #698fff;
  --color-solar-flare: #fcf572;
  --font-freight-big: 'Freight Big', Playfair Display;
  --font-neue-haas-grotesk: 'Neue Haas Grotesk', Inter;
  --font-freight-text: 'Freight Text', Lora;
  --font-times: 'Times', Times New Roman;
  --text-heading-sm: 38px;
  --leading-heading-sm: 1.1;
  --text-heading: 65px;
  --leading-heading: 1.1;
  --text-heading-lg: 84px;
  --leading-heading-lg: 0.8;
  --text-display: 198px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-21: 21px;
  --spacing-26: 26px;
  --spacing-48: 48px;
  --spacing-212: 212px;
  --radius-default: 0px;
}
```
