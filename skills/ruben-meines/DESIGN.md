---
version: alpha
name: "Ruben Meines"
description: "Ruben Meines uses a digital blueprint aesthetic: stark white planes, grid-aligned elements, and a high-contrast palette of electric violet and vibrant scarlet. Visuals are intentionally flat, with outlines and solid blocks of color. Typography is predominantly monospaced, giving the system a technical, code-like precision, and reinforced by subtle red accents that punctuate key information. Layouts feel spacious and structured, emphasizing clarity and directness."
theme: "light"
industry: "agency"
source_url: "https://rubenmeines.com"
refero_style_id: "903284f3-e121-4e20-bd0c-261ae7c26c3d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518398433-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518398433-thumb.jpg"
extracted_at: "2026-04-30T03:06:58.719Z"
---

# Ruben Meines — Style Reference

> Electric Blueprint

**Theme:** light

**Industry:** agency

Ruben Meines uses a digital blueprint aesthetic: stark white planes, grid-aligned elements, and a high-contrast palette of electric violet and vibrant scarlet. Visuals are intentionally flat, with outlines and solid blocks of color. Typography is predominantly monospaced, giving the system a technical, code-like precision, and reinforced by subtle red accents that punctuate key information. Layouts feel spacious and structured, emphasizing clarity and directness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, button backgrounds — a stark, pure white for a clean, unbounded canvas |
| Code Violet | #0002ff | `--color-code-violet` | Primary interactive elements, text links, navigation outlines, decorative borders, and strong textual emphasis – defines the core brand identity with an electric, high-energy hue |
| Accent Scarlet | #ff1f00 | `--color-accent-scarlet` | Decorative text accents, small callouts, border details – its vivid punch provides visual punctuation against the violet and white, drawing immediate attention |

## Tokens — Typography

### DM Mono

- **Token:** `--font-dm-mono`
- **Substitute:** Space Mono
- **Weights:** 300, 500
- **Sizes:** 20px, 23px, 25px, 65px, 82px
- **Line heights:** 0.78, 1.19, 1.27, 1.33, 1.50
- **Letter spacing:** normal
- **Role:** Primary body text, navigation, links, and all UI elements. Its monospaced nature delivers a precise, code-like, and structured feel that is central to the brand's technical identity.

### alverata

- **Token:** `--font-alverata`
- **Substitute:** Source Serif Pro
- **Weights:** 600
- **Sizes:** 32px, 41px, 46px
- **Line heights:** 1.17, 1.23, 1.29
- **Letter spacing:** normal
- **Role:** Headlines and prominent textual callouts. Its structured serif form contrasts with the monospaced text, adding a subtle touch of traditional authority without losing the system's clean edge.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 20px | 1.5 | 0px | `--text-body-sm` |
| body | 23px | 1.33 | 0px | `--text-body` |
| subheading | 25px | 1.27 | 0px | `--text-subheading` |
| heading-sm | 32px | 1.29 | 0px | `--text-heading-sm` |
| heading | 41px | 1.23 | 0px | `--text-heading` |
| heading-lg | 46px | 1.17 | 0px | `--text-heading-lg` |
| display | 82px | 0.78 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 32px |
| elementGap | 15px |

## Components

### Primary Action Button

**Role:** Interactive call to action

A filled button with 'Canvas White' background and 'Code Violet' text, featuring 2px border-radius and generous padding of 22px vertical, 32px horizontal. This button style combines a clean surface with a distinct brand color for text.

### Navigation Link

**Role:** Primary navigation item

Uses 'DM Mono' text in 'Code Violet'. Underlines are implied by an active border, reinforcing the structured, block-like design. Spacing: 8px vertical margin, 12px right margin, 32px horizontal padding.

### Section Divider

**Role:** Visual separation for content sections

Thin, dashed lines predominantly in 'Code Violet', used to strongly delineate content blocks with a technical blueprint aesthetic.

### Feature Card

**Role:** Information display card

A white background with a subtle border of 'Code Violet'. Padding internal to the card is 32px (cardPadding), with element gaps of 15px for internal components. Text is primarily 'DM Mono' in 'Code Violet', with 'Accent Scarlet' used for small decorative elements or special text highlights. Icons often appear as outlines.

## Do's and Don'ts

### Do

- Use 'Canvas White' as the default background for all primary content surfaces.
- Apply 'Code Violet' for all active states, primary text links, and interactive borders to maintain brand consistency.
- Employ 'DM Mono' for all body text, UI elements, and navigation to preserve the system's technical precision.
- Use 2px border-radius consistently for all buttons and interactive elements for a subtle, crisp edge.
- Delineate major content sections using dashed lines in 'Code Violet', mimicking a design grid.
- Maintain a spacious rhythm by applying a 'sectionGap' of 30px between major content blocks.
- Utilize 'Accent Scarlet' sparingly as a highlight color for small, important textual elements or decorative touches, not for primary text or backgrounds.

### Don't

- Avoid gradients or complex shadows; the system relies on flat, high-contrast visuals.
- Do not introduce a third primary color; the system is defined by its strict 'Canvas White', 'Code Violet', and 'Accent Scarlet' palette.
- Refrain from using excessively rounded corners; stick to the precise 2px radius for interactive elements.
- Do not use generic system fonts; 'DM Mono' and 'alverata' are integral to the brand's unique typographic voice.
- Avoid dense, information-packed layouts; maintain generous 'elementGap' of 15px and 'cardPadding' of 32px for clarity and breathability.
- Do not use subtle, low-contrast text; ensure text is always in 'Code Violet' against 'Canvas White' for high readability.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Background | #ffffff | Dominant background for the entire page, providing a crisp, pure white base. |

## Similar Brands

- **Figma** — High-contrast UI with primary blue accent on white, minimalist grid-based layouts, and functional typography.
- **Linear** — Clean, spacious white interface with a single vibrant accent color and precise monospaced font usage.
- **Superlist** — Emphasizes clear functional design, structured layouts, and distinct use of monochromatic imagery or illustrations for brand identity.
- **Read.cv** — Strong typographic hierarchy, spacious layouts, and a limited color palette that relies on a single dominant accent for interaction.
- **Stripe (earlier versions)** — Pure white backgrounds, high-contrast blue for interactive elements, and a focus on clean, legible typography for a technical user base.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-code-violet: #0002ff;
  --color-accent-scarlet: #ff1f00;
  --font-dm-mono: 'DM Mono', Space Mono;
  --font-alverata: 'alverata', Source Serif Pro;
  --text-body-sm: 20px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 23px;
  --leading-body: 1.33;
  --tracking-body: 0px;
  --text-subheading: 25px;
  --leading-subheading: 1.27;
  --tracking-subheading: 0px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.29;
  --tracking-heading-sm: 0px;
  --text-heading: 41px;
  --leading-heading: 1.23;
  --tracking-heading: 0px;
  --text-heading-lg: 46px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: 0px;
  --text-display: 82px;
  --leading-display: 0.78;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --radius-buttons: 2px;
  --surface-canvas-background: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-code-violet: #0002ff;
  --color-accent-scarlet: #ff1f00;
  --font-dm-mono: 'DM Mono', Space Mono;
  --font-alverata: 'alverata', Source Serif Pro;
  --text-body-sm: 20px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 23px;
  --leading-body: 1.33;
  --tracking-body: 0px;
  --text-subheading: 25px;
  --leading-subheading: 1.27;
  --tracking-subheading: 0px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.29;
  --tracking-heading-sm: 0px;
  --text-heading: 41px;
  --leading-heading: 1.23;
  --tracking-heading: 0px;
  --text-heading-lg: 46px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: 0px;
  --text-display: 82px;
  --leading-display: 0.78;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --radius-buttons: 2px;
  --surface-canvas-background: #ffffff;
}
```
