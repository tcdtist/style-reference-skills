---
version: alpha
name: "Cargo"
description: "The design system of santijaramillo.com presents a straightforward, minimalist interface, primarily leveraging default browser styles with carefully selected overrides. Its visual identity is defined by a utilitarian palette of strong achromatic colors and a single vivid blue for active elements and links. Typography relies on system fonts, prioritizing direct communication over decorative flourish. Components are sparse, focusing on direct textual information with minimal visual ornamentation, creating an atmosphere of functional clarity."
theme: "light"
industry: "other"
source_url: "https://santijaramillo.com"
refero_style_id: "27f128c6-d381-4915-a6c7-078a54bc6fab"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518148802-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518148802-thumb.jpg"
extracted_at: "2026-04-30T03:02:54.887Z"
---

# Cargo — Style Reference

> Direct text, minimalist blue accent

**Theme:** light

**Industry:** other

The design system of santijaramillo.com presents a straightforward, minimalist interface, primarily leveraging default browser styles with carefully selected overrides. Its visual identity is defined by a utilitarian palette of strong achromatic colors and a single vivid blue for active elements and links. Typography relies on system fonts, prioritizing direct communication over decorative flourish. Components are sparse, focusing on direct textual information with minimal visual ornamentation, creating an atmosphere of functional clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, default borders, ensuring high contrast against light surfaces |
| Slate Gray | #999999 | `--color-slate-gray` | Muted secondary text for descriptive or less critical information |
| Arctic White | #ffffff | `--color-arctic-white` | Page background, primary surface for content areas |
| Electric Blue | #0055ff | `--color-electric-blue` | Interactive text links, actionable elements, distinguishing primary brand actions through chromatic contrast |

## Tokens — Typography

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.20, 1.30, 2.00
- **Letter spacing:** 0.017em
- **Role:** Primary UI font for all textual content, prioritizing system legibility and neutrality across various operating systems.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 15px |
| elementGap | 8px |

## Components

### Primary Text Block

**Role:** Standard body text.

Displayed in Midnight Ink (#000000) at 18px with a line-height of 1.3 relative to font size and a slight positive letter-spacing of 0.017em. This is the default text treatment for main content.

### Muted Text Block

**Role:** Secondary, less prominent body text.

Displayed in Slate Gray (#999999) at 18px with a line-height of 1.3 relative to font size and a slight positive letter-spacing of 0.017em. Used for disclaimers or supplementary information.

### Action Link

**Role:** Hyperlinks for navigation or interaction.

Rendered in Electric Blue (#0055ff) at 18px, with a line-height of 1.3 relative to font size and a letter-spacing of 0.017em. Appears as a text-only link without additional styling.

## Do's and Don'ts

### Do

- Use Electric Blue (#0055ff) exclusively for interactive elements and links, keeping it as the sole chromatic element.
- Prioritize '-apple-system' (or system-ui fallback) at 18px weight 400 for all text to maintain system-native legibility.
- Apply a general letter-spacing of 0.017em to all text elements for consistent visual density.
- Maintain a stark contrast between text (Midnight Ink #000000, Slate Gray #999999) and the Arctic White (#ffffff) background.
- Use 8px for internal element spacing and 15px for padding around content blocks.
- Ensure all components have default 0px border-radius, reflecting a sharp, direct aesthetic.

### Don't

- Do not introduce additional accent colors; Electric Blue (#0055ff) is the only allowed brand accent.
- Avoid decorative heavy typography; stick to the single font family and its specified weight.
- Do not use elevation or shadows; rely on clear content separation and typography for hierarchy.
- Do not vary border-radius; all elements should maintain sharp corners.
- Do not use gradients or complex background fills; surfaces should remain solid and flat.
- Avoid using icons or imagery unless they are purely functional and unstyled; the emphasis is on text.

## Imagery

No imagery is used. The visual language is entirely text-based, relying on typography and color to convey information and hierarchy. Graphics are limited to default browser rendering, making content the sole visual focus.

## Layout

The page employs a simple, centered block layout for content. There is no explicit max-width for the main content block, allowing it to adapt to the viewport width. The hero pattern is a direct, centered text block. Section rhythm is defined by vertical spacing between discrete text paragraphs. All content is arranged in a single-column, centered stack without complex grid structures. The layout is sparse, with ample whitespace surrounding textual elements. There is no visible navigation bar.

## Similar Brands

- **txt.fyi** — Extremely minimal, text-focused content with default browser styling and no custom visual elements.
- **manual.ink** — Simple, functional aesthetic leveraging system fonts and basic HTML elements for content delivery.
- **Notion (minimal page)** — Emphasis on content block, text hierarchy, and subtle linking without heavy branding or complex UI components.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-slate-gray: #999999;
  --color-arctic-white: #ffffff;
  --color-electric-blue: #0055ff;
  --font-apple-system: '-apple-system', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --spacing-8: 8px;
  --spacing-15: 15px;
  --spacing-64: 64px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-slate-gray: #999999;
  --color-arctic-white: #ffffff;
  --color-electric-blue: #0055ff;
  --font-apple-system: '-apple-system', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --spacing-8: 8px;
  --spacing-15: 15px;
  --spacing-64: 64px;
  --radius-default: 0px;
}
```
