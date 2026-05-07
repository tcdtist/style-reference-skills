---
version: alpha
name: "WOUQ"
description: "WOUQ employs a minimalist light theme with high contrast typography and ample whitespace. The design emphasizes content through a stark juxtaposition of black text on white backgrounds, occasionally softened by subtle light gray interactive states. Custom typography lends a distinctive character, maintaining readability while providing visual interest, particularly in navigation and large text blocks. Components are border-defined and largely achromatic, allowing content and occasional imagery to provide color and visual depth."
theme: "light"
industry: "agency"
source_url: "https://wearewouq.com"
refero_style_id: "4fc87190-9783-4a85-bdc1-35800a2ec690"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514318968-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514318968-thumb.jpg"
extracted_at: "2026-04-30T01:59:05.490Z"
---

# WOUQ — Style Reference

> monochromatic gallery, etched edges

**Theme:** light

**Industry:** agency

WOUQ employs a minimalist light theme with high contrast typography and ample whitespace. The design emphasizes content through a stark juxtaposition of black text on white backgrounds, occasionally softened by subtle light gray interactive states. Custom typography lends a distinctive character, maintaining readability while providing visual interest, particularly in navigation and large text blocks. Components are border-defined and largely achromatic, allowing content and occasional imagery to provide color and visual depth.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### Open Sans

- **Token:** `--font-open-sans`
- **Substitute:** Open Sans
- **Weights:** 400
- **Sizes:** 18px, 22px
- **Line heights:** 1.00, 1.67
- **Letter spacing:** normal
- **Role:** Body text and general content, ensuring readability with its balanced forms. Despite its commonality, it is used here to create a neutral, unobtrusive tone.

### ESAllianz-Light

- **Token:** `--font-esallianz-light`
- **Substitute:** Inter Light
- **Weights:** 400
- **Sizes:** 18px, 27px, 45px
- **Line heights:** 1.00, 1.11, 1.50
- **Letter spacing:** normal
- **Role:** Large headings, navigational elements, and certain interactive text. Its light weight at larger sizes creates an airy, sophisticated presence, avoiding visual heaviness.

### ESAllianz-Regular

- **Token:** `--font-esallianz-regular`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 18px, 45px
- **Line heights:** 1.11, 1.50
- **Letter spacing:** normal
- **Role:** Standard headings and body text, providing a slightly more grounded feel than its Light counterpart while maintaining the distinct brand character.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 18px | 1.67 | — | `--text-body-sm` |
| subheading | 22px | 1 | — | `--text-subheading` |
| heading | 27px | 1 | — | `--text-heading` |
| display | 45px | 1.11 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-75 | 75px | `--spacing-75` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| buttons | 10px |
| elements | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1460px |
| sectionGap | 75px |
| cardPadding | 25-30px |
| elementGap | 5px |

## Components

### Navigation Link

**Role:** Interactive navigation items in the header

Text is Midnight Ink (#000000) using ESAllianz-Light at 18px. Underlines appear on hover/active states with a 1px Midnight Ink border. Padding of 25px around text content.

### Hero Headline

**Role:** Primary heading for the initial screen

Midnight Ink (#000000) ESAllianz-Light, 45px, lineHeight 1.11. Uses ample top padding creating space.

### Project Card

**Role:** Clickable cards displaying project previews

White background, Midnight Ink (#000000) text (ESAllianz-Light 45px or ESAllianz-Regular 18px). Has a 10px border-radius and appears to have border color changes or subtle interaction effects.

## Do's and Don'ts

### Do

- Use Canvas White (#ffffff) as the primary background color for all main sections and components.
- Employ Midnight Ink (#000000) for all primary text, headings, and interactive elements to maintain high contrast and clarity.
- Apply ESAllianz-Light at 45px with a 1.11 lineHeight for all major headlines to convey an airy, sophisticated tone.
- Implement a 10px border-radius consistently for all card-like elements and interactive components.
- Maintain generous vertical spacing between sections (75px) to support the spacious feel of the design.

### Don't

- Avoid introducing additional chromatic colors; the palette is strictly monochrome.
- Do not use heavy shadows or gradients; flat surfaces and subtle borders define elevation.
- Never deviate from the specified Open Sans or ESAllianz font families for any UI text.
- Do not overcrowd content; utilize the 1460px max-width and generous padding (25-30px) to ensure ample whitespace.
- Avoid bold or ultra-heavy font weights; the design relies on lighter weights for its distinctive character.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background and default surface for most UI elements. |

## Imagery

This design utilizes a mix of abstract and product-focused photography and high-quality product renders. Imagery is typically contained within rectangular frames, sometimes with subtle rounded corners (10px). Photography leans towards high-key or product-focused shots, often with a clean, de-saturated aesthetic allowing product forms and textures to be the focal point. Icons are minimal, likely outlined, and monochromatic, used sparingly for navigation or functional cues. The density is moderate to high, with large images being central to project showcases.

## Layout

The page adheres to a max-width of 1460px, centrally aligned. The hero section prominently features a large headline centered over a full-width abstract image. Subsequent sections arrange content in a grid-like fashion, showcasing projects with prominent image blocks and accompanying titles. There is a consistent vertical rhythm with significant spacing (75px) between sections, creating a spacious and unhurried browsing experience. Navigation is a minimal top bar, sticky or otherwise. Project links appear in a multi-column grid, often two or three columns wide, without visual dividers between projects.

## Similar Brands

- **Awwwards-winning portfolio sites** — Monochromatic palette, large typography, and focus on high-quality visual content display.
- **Basic Agency** — Similar high-contrast black-on-white aesthetic with custom typography and spacious layouts.
- **Koto** — Reliance on specific, often light-weight, sans-serif typefaces for brand identity and minimalist UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --font-open-sans: 'Open Sans', Open Sans;
  --font-esallianz-light: 'ESAllianz-Light', Inter Light;
  --font-esallianz-regular: 'ESAllianz-Regular', Inter;
  --text-body-sm: 18px;
  --leading-body-sm: 1.67;
  --text-subheading: 22px;
  --leading-subheading: 1;
  --text-heading: 27px;
  --leading-heading: 1;
  --text-display: 45px;
  --leading-display: 1.11;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-75: 75px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --radius-elements: 10px;
  --surface-canvas-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --font-open-sans: 'Open Sans', Open Sans;
  --font-esallianz-light: 'ESAllianz-Light', Inter Light;
  --font-esallianz-regular: 'ESAllianz-Regular', Inter;
  --text-body-sm: 18px;
  --leading-body-sm: 1.67;
  --text-subheading: 22px;
  --leading-subheading: 1;
  --text-heading: 27px;
  --leading-heading: 1;
  --text-display: 45px;
  --leading-display: 1.11;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-75: 75px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --radius-elements: 10px;
  --surface-canvas-white: #ffffff;
}
```
