---
version: alpha
name: "Cori Corinne"
description: "Cori Corinne presents a refined, editorial aesthetic, emphasizing large, high-contrast typography and subtle textural backgrounds over vibrant color. The system relies on a warm, off-white canvas and deep charcoal text, creating a sense of understated elegance. Visual hierarchy is established through dramatic scale shifts in headlines and classic serif fonts, while interaction elements remain minimal and ghost-like."
theme: "light"
industry: "design"
source_url: "https://www.coricorinne.com"
refero_style_id: "2c18e573-0ffb-4f0d-848c-ff72a5839fd3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518116442-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518116442-thumb.jpg"
extracted_at: "2026-04-30T03:02:17.931Z"
---

# Cori Corinne — Style Reference

> Editorial grand typography

**Theme:** light

**Industry:** design

Cori Corinne presents a refined, editorial aesthetic, emphasizing large, high-contrast typography and subtle textural backgrounds over vibrant color. The system relies on a warm, off-white canvas and deep charcoal text, creating a sense of understated elegance. Visual hierarchy is established through dramatic scale shifts in headlines and classic serif fonts, while interaction elements remain minimal and ghost-like.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #f6f5f0 | `--color-canvas-parchment` | Dominant page background, soft card surfaces |
| Ink Obsidian | #292a2c | `--color-ink-obsidian` | Primary text color for body copy, navigational elements, and subtle borders. Creates strong contrast against the light canvas |
| Pure White | #ffffff | `--color-pure-white` | Elevated background surfaces for certain sections or content blocks |
| Deep Midnight | #000000 | `--color-deep-midnight` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |

## Tokens — Typography

### Open Sans

- **Token:** `--font-open-sans`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 18px, 30px
- **Line heights:** 1.67, 2.33
- **Letter spacing:** normal
- **Role:** Primary text for body content, links, and general informational text. Its clean, readable proportions balance the more expressive display font.

### neue-haas-grotesk-text

- **Token:** `--font-neue-haas-grotesk-text`
- **Substitute:** 'EB Garamond', serif
- **Weights:** 400
- **Sizes:** 18px, 30px
- **Line heights:** 1.00, 2.33
- **Letter spacing:** normal
- **Role:** Display font for large, impactful headlines and a signature brand mark. Its high contrast and elegant serif forms establish a sophisticated, editorial tone. The 1.0 line height for smaller sizes contributes to a concise, dense feel.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-30 | 30px | `--spacing-30` |
| spacing-60 | 60px | `--spacing-60` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 30px |
| elementGap | 30px |

## Components

### Header Navigation Link

**Role:** Top-level navigation items

Text: Open Sans, 18px, weight 400, Ink Obsidian (#292a2c). Hover/Active state: Deep Midnight (#000000) with a 1px bottom border of Deep Midnight (#000000).

### Hero Headline

**Role:** Dominant page titles and primary visual impact

Font: neue-haas-grotesk-text, 30px (likely much larger based on visual prominence), weight 400. Color: Ink Obsidian (#292a2c). Visually this appears centered on a Canvas Parchment background, setting an immediate tone of grandeur.

### Social Link

**Role:** Footer or section-level links to external platforms

Text: Open Sans, 18px, weight 400, Deep Midnight (#000000). Behaves like a standard text link, changing color on interaction.

## Do's and Don'ts

### Do

- Prioritize Canvas Parchment (#f6f5f0) as the primary background for all major content areas.
- Use Open Sans (weight 400) for all body text, ensuring high readability and a neutral base for content.
- Employ neue-haas-grotesk-text (weight 400) exclusively for large, editorial headlines to establish visual drama.
- Maintain a rigid 0px border-radius for all elements, preserving a crisp, angular aesthetic.
- Utilize Ink Obsidian (#292a2c) for most text and secondary interaction elements to create strong contrast without harshness.
- Ensure generous vertical spacing between sections, using a base rhythm of 60px to maintain an open, spacious feel.

### Don't

- Avoid using saturated or vivid colors; the palette is strictly neutral with high contrast.
- Do not introduce rounded corners or soft shadows; elevation and form should be defined by hard edges and stark contrast.
- Refrain from using thin weights for body text; Open Sans 400 is the minimum for legibility.
- Avoid decorative gradients or background images; rely on the interplay of text, high-contrast imagery, and spacious layout.
- Do not deviate from the established font families; the serif/sans-serif pairing is a core identity element.
- Never use less than 30px for padding or element separation, to prevent a cramped appearance.

## Imagery

Imagery is high-contrast, often black-and-white or desaturated, appearing as full-width or large visual blocks. Photography features textured surfaces or abstract compositions, often with a raw, slightly grainy aesthetic. The images serve as atmospheric elements rather than literal content showcases, providing mood and visual interest without overwhelming the stark typography. Icons, if present, would likely be minimal and outlined in black.

## Layout

The page utilizes a full-bleed layout, allowing content and hero sections to span the entire viewport width. The hero pattern is characterized by a centered, oversized headline using the brand's display font, set against the Canvas Parchment background. Section rhythm is driven by distinct vertical blocks, with generous spacing creating an unhurried, gallery-like experience. Content is primarily arranged in simple stacked blocks or large single visual elements, emphasizing individual statements. Navigation is a minimal, top-aligned bar with text links. Density leans towards spaciousness, allowing each element significant breathing room.

## Similar Brands

- **AIGA Journal** — Uses large-scale editorial serif typography and a restrained color palette on a light background.
- **The New York Times** — Employs classic serif and sans-serif pairings with strong contrast for readability and an established, authoritative feel.
- **Other portfolio sites with a strong focus on art direction** — Often feature minimal UI, large display typography, and atmospheric photography against a neutral canvas.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #f6f5f0;
  --color-ink-obsidian: #292a2c;
  --color-pure-white: #ffffff;
  --color-deep-midnight: #000000;
  --font-open-sans: 'Open Sans', system-ui, sans-serif;
  --font-neue-haas-grotesk-text: 'neue-haas-grotesk-text', 'EB Garamond', serif;
  --spacing-30: 30px;
  --spacing-60: 60px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #f6f5f0;
  --color-ink-obsidian: #292a2c;
  --color-pure-white: #ffffff;
  --color-deep-midnight: #000000;
  --font-open-sans: 'Open Sans', system-ui, sans-serif;
  --font-neue-haas-grotesk-text: 'neue-haas-grotesk-text', 'EB Garamond', serif;
  --spacing-30: 30px;
  --spacing-60: 60px;
  --radius-none: 0px;
}
```
