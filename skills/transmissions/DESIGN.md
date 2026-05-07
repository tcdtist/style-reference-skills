---
version: alpha
name: "Transmissions"
description: "Transmissions employs a stark, high-fashion editorial aesthetic, characterized by extreme typographic scale shifts and a monochromatic palette. Visual emphasis is achieved through oversized headlines that dominate the canvas, often overlapping imagery, while interactive elements like navigation remain small and subtle. The design relies on high contrast and minimal ornamentation, creating a sense of sophisticated restraint and focus."
theme: "light"
industry: "design"
source_url: "https://transmissions.cristobalbalenciagamuseoa.com"
refero_style_id: "63c1c0d1-d3b7-40f1-9b9d-8e3b5bd73f17"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514847460-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514847460-thumb.jpg"
extracted_at: "2026-04-30T02:07:45.660Z"
---

# Transmissions — Style Reference

> Monochromatic editorial canvas

**Theme:** light

**Industry:** design

Transmissions employs a stark, high-fashion editorial aesthetic, characterized by extreme typographic scale shifts and a monochromatic palette. Visual emphasis is achieved through oversized headlines that dominate the canvas, often overlapping imagery, while interactive elements like navigation remain small and subtle. The design relies on high contrast and minimal ornamentation, creating a sense of sophisticated restraint and focus.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, large content blocks, default text for dark modes — forms the expansive white canvas |
| Ink Black | #000000 | `--color-ink-black` | Primary text, borders, high-contrast accents, link states |
| Phantom Black | #010101 | `--color-phantom-black` | Secondary text, subtle borders, often used with Canvas White for maximal contrast |
| Ghost Gray | #f5f5f5 | `--color-ghost-gray` | Subtle background surfaces, border accents for text links |

## Tokens — Typography

### Neue Haas Grotesk Display

- **Token:** `--font-neue-haas-grotesk-display`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 14px, 18px, 24px, 64px
- **Line heights:** 0.95, 1.00, 1.20
- **Letter spacing:** normal
- **Role:** Headlines, navigation elements, and textual content. The high proportion of large sizes and a tightly-wound lineHeight (0.95) makes it feel impactful and modern. Substitute: Inter.

### Saol Display

- **Token:** `--font-saol-display`
- **Substitute:** Playfair Display
- **Weights:** 500
- **Sizes:** 24px, 64px
- **Line heights:** 0.95, 1.20
- **Letter spacing:** normal
- **Role:** Decorative headlines and specific callouts. Its distinct character provides a visual counterpoint to the sans-serif, used sparingly for emphasis. Substitute: Playfair Display.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.2 | — | `--text-caption` |
| body | 18px | 1.2 | — | `--text-body` |
| heading | 24px | 1.2 | — | `--text-heading` |
| display | 64px | 0.95 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-12 | 12px | `--spacing-12` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-134 | 134px | `--spacing-134` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 134px |
| cardPadding | 24px |
| elementGap | 12px |

## Components

### Header Navigation Link

**Role:** Top-level navigation items and brand identifier.

Text in Neue Haas Grotesk Display, 14px size, Ink Black, no specific letter spacing. Interacts with a subtle border effect on hover or active states. The brand name 'TRANSMISSIONS' acts as a prominent static header item.

### Menu Trigger

**Role:** Opens the main site navigation.

Small text 'MENU' in Neue Haas Grotesk Display, 14px, Ink Black, followed by a small, solid Ink Black circular indicator. Minimal padding.

### Hero Headline

**Role:** Dominant, attention-grabbing titles for key sections.

Large text using either Neue Haas Grotesk Display or Saol Display, 64px, Ink Black (or Canvas White if overlapping a dark image). Line height is very tight at 0.95 for an impactful, stacked appearance, often overlapping background visuals.

### Subtle Helper Text

**Role:** Captions and secondary information.

Text in Neue Haas Grotesk Display, 18px, Phantom Black, with a standard line height of 1.20 for readability in smaller blocks.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) and Ink Black (#000000) for high-contrast primary content and backgrounds.
- Use Neue Haas Grotesk Display 64px, lineHeight 0.95, for primary headlines, allowing it to overlap imagery.
- Implement small, minimal textual navigation links (14px Neue Haas Grotesk Display) rather than large buttons or icons.
- Maintain generous vertical spacing between content blocks, with section gaps often at 134px.
- Use Ghost Gray (#f5f5f5) sparingly for subtle background changes or very minimal borders on interactive elements.
- Apply all text in uppercase for headlines and navigation to maintain a stark, editorial tone.

### Don't

- Avoid using saturated or chromatic colors; stick strictly to the achromatic palette beyond imagery.
- Do not introduce complex components with multiple styles, shadows, or gradients.
- Refrain from using bold typefaces or heavy weights; 400 and 500 are the heaviest allowed.
- Do not deviate from the tight line heights (0.95-1.00) specified for headlines and 1.20 for body text.
- Do not add any explicit border radii to UI elements; all corners should remain sharp.
- Avoid large primary action buttons; all interactive elements should remain text-based and understated.

## Similar Brands

- **Balenciaga** — Shares a stark, high-fashion aesthetic with large typography and minimal color.
- **Vogue** — Similar editorial layout approach, employing large, impactful typography and high-quality photography.
- **Calvin Klein (archival site)** — Known for minimalist, high-contrast black and white branding with bold typographic statements.
- **Acne Studios** — Often uses a stark, utilitarian aesthetic with large type and an emphasis on photographic content.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-phantom-black: #010101;
  --color-ghost-gray: #f5f5f5;
  --font-neue-haas-grotesk-display: 'Neue Haas Grotesk Display', Inter;
  --font-saol-display: 'Saol Display', Playfair Display;
  --text-caption: 14px;
  --leading-caption: 1.2;
  --text-body: 18px;
  --leading-body: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-display: 64px;
  --leading-display: 0.95;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-134: 134px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-phantom-black: #010101;
  --color-ghost-gray: #f5f5f5;
  --font-neue-haas-grotesk-display: 'Neue Haas Grotesk Display', Inter;
  --font-saol-display: 'Saol Display', Playfair Display;
  --text-caption: 14px;
  --leading-caption: 1.2;
  --text-body: 18px;
  --leading-body: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-display: 64px;
  --leading-display: 0.95;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-134: 134px;
}
```
