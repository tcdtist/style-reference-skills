---
version: alpha
name: "Holographik"
description: "Holographik uses a high-contrast, stark visual language built on an uncompromising black and white palette. Typography is large, bold, and tightly tracked for maximum impact, creating a sense of directness. Components are entirely UI-driven, with no decorative elements, relying on sharp edges and a single, extreme radius for interaction cues. The overall impression is one of confident, unornamented clarity."
theme: "dark"
industry: "design"
source_url: "https://www.holographik.co"
refero_style_id: "f46616d6-5138-408b-a29d-b6749a6f3b04"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514549889-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514549889-thumb.jpg"
extracted_at: "2026-04-30T02:02:48.963Z"
---

# Holographik — Style Reference

> High-contrast monochrome blueprint

**Theme:** dark

**Industry:** design

Holographik uses a high-contrast, stark visual language built on an uncompromising black and white palette. Typography is large, bold, and tightly tracked for maximum impact, creating a sense of directness. Components are entirely UI-driven, with no decorative elements, relying on sharp edges and a single, extreme radius for interaction cues. The overall impression is one of confident, unornamented clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Black | #000000 | `--color-absolute-black` | Page backgrounds, primary text, foundational UI borders, critical information, hero section background |
| Pure White | #ffffff | `--color-pure-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Ash Gray | #aaaaaa | `--color-ash-gray` | Subtle background panels and sections; used for lower-prominence content areas |

## Tokens — Typography

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 16px, 26px
- **Line heights:** 1.00, 1.25
- **Letter spacing:** -0.0200em at all sizes
- **Role:** Primary typeface for all content. Its consistent weight and tight letter-spacing across sizes contribute to the direct, industrial feel, serving for both prominent headings and body text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.25 | — | `--text-body` |
| heading | 26px | 1 | -0.52px | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| other | 160px |
| buttons | 160px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 200px |
| cardPadding | 24px |
| elementGap | 10px |

## Components

### Navigation Link

**Role:** Top-bar navigation and footer links

Uses Pure White text (#ffffff) on Absolute Black (#000000) or vice versa, with no underline for a clean, direct appearance. Active states or hover effects are not visibly distinguished through color; interactions rely on inherent link behavior.

### Accent Bordered Element (Ghost/Outlined)

**Role:** Interactive elements, likely buttons/links

Defined by a 1px Pure White border (#ffffff) on a Pure White background, implying an outlined element against a dark canvas. Text color defaults to Absolute Black (#000000). Radii are extreme at 160px, creating a pill-like shape.

### Text Block

**Role:** Descriptive paragraphs and content sections

Body text in Helvetica Neue, weight 400, 16px, line-height 1.25. Text is Absolute Black (#000000) on Pure White (#ffffff) backgrounds or Pure White on Absolute Black backgrounds, maintaining high contrast. Padding is minimal at 24px.

### Hero Headline

**Role:** Main page headline

Large (26px) Helvetica Neue, weight 400, with tight line-height of 1.0 and -0.02em letter-spacing for visual density. Text color is Pure White (#ffffff) on Absolute Black (#000000).

## Do's and Don'ts

### Do

- Maintain a strict monochrome palette, leveraging Absolute Black (#000000) and Pure White (#ffffff) for primary contrast and Ash Gray (#aaaaaa) for subtle variations.
- Apply the extreme 160px border-radius to all interactive components and card-like elements to establish a distinct pill or circular visual cue.
- Use Helvetica Neue (or Arial as substitute) exclusively for all text, maintaining weight 400 and a consistent -0.0200em letter-spacing across all sizes.
- Utilize 200px for vertical section separation to ensure generous breathing room between content blocks.
- Prioritize high contrast pairings of #000000 text on #ffffff backgrounds or vice-versa for all content to maximize readability and visual impact.
- Employ 24px internal padding for card-like elements and similar content containers, with smaller 5px or 10px padding for tighter internal element spacing.

### Don't

- Avoid introducing any additional chromatic colors; limit the palette to black, white, and a single gray.
- Do not use subtle or moderate border radii, as the system mandates an extreme 160px radius for specific components.
- Do not vary font weights beyond 400 for Helvetica Neue; all typography should maintain its consistent visual weight.
- Do not introduce shadows or elevation effects; the design relies on flat, high-contrast surfaces.
- Avoid intricate layout grids or complex component architectures; maintain a direct, block-based composition.
- Do not use generic system link styles; links should be Pure White or Absolute Black text without explicit underlines unless contextualized.

## Imagery

This site features a heavy use of conceptual, abstract graphics composed of tightly cropped, monochromatic or desaturated photography combined with grid patterns and distorted typographic elements. Imagery often appears as overlapping, raw-edged layers without rounded corners, creating a visual collage effect. The role of imagery is primarily decorative atmosphere and brand expression, rather than explanatory content or product showcase. The density is image-heavy in the hero, becoming more text-dominant downwards. Icons are not a prominent feature, with the visual weight carried by the typographic and photographic elements.

## Layout

The page primarily uses a full-bleed layout on an Absolute Black background, creating a vast, immersive canvas. The hero section features large, layered graphic elements and bold typography, breaking traditional content structures. Content below the hero appears to be organized in stacked, high-contrast blocks, potentially alternating between full-bleed black and contained white sections. Vertical rhythm is established by significant section gaps (200px). The overall layout emphasizes density and visual impact in key areas, suggesting a minimal navigation structure (top-header links only). There's no evident constrained max-width for the main content.

## Similar Brands

- **Acme Co.** — Stark black and white color scheme with large, impactful typography.
- **Büro. by Ben Mingo** — Monochrome palette, heavy typographic treatment, and abstract, layered visual elements.
- **Future Fonts** — Minimalist, type-focused approach with high contrast and limited color use.
- **AIGA (certain historical designs)** — Emphasis on typographic hierarchy and strong graphic design principles within a limited color scope.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-black: #000000;
  --color-pure-white: #ffffff;
  --color-ash-gray: #aaaaaa;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-heading: 26px;
  --leading-heading: 1;
  --tracking-heading: -0.52px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-24: 24px;
  --spacing-200: 200px;
  --radius-other: 160px;
  --radius-buttons: 160px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-black: #000000;
  --color-pure-white: #ffffff;
  --color-ash-gray: #aaaaaa;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-heading: 26px;
  --leading-heading: 1;
  --tracking-heading: -0.52px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-24: 24px;
  --spacing-200: 200px;
  --radius-other: 160px;
  --radius-buttons: 160px;
}
```
