---
version: alpha
name: "Rauno Freiberg"
description: "Rauno.me employs a playful, high-contrast aesthetic, utilizing vibrant, unmodulated primary colors for a bold, graphic presence. The design leans into stark black typography on white or vivid colored backgrounds, creating a sense of directness. Components are minimalist, often represented by large, rounded shapes or text with subtle hover effects, avoiding complex gradients or shadows. The overall feel is one of confident simplicity and visual impact through color blocking and clear typographic hierarchy."
theme: "light"
industry: "design"
source_url: "https://rauno.me"
refero_style_id: "2b46dc00-9517-4ad0-9bf3-a07d3c0bf385"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516379332-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516379332-thumb.jpg"
extracted_at: "2026-04-30T02:33:17.543Z"
---

# Rauno Freiberg — Style Reference

> Vivid color-block canvas

**Theme:** light

**Industry:** design

Rauno.me employs a playful, high-contrast aesthetic, utilizing vibrant, unmodulated primary colors for a bold, graphic presence. The design leans into stark black typography on white or vivid colored backgrounds, creating a sense of directness. Components are minimalist, often represented by large, rounded shapes or text with subtle hover effects, avoiding complex gradients or shadows. The overall feel is one of confident simplicity and visual impact through color blocking and clear typographic hierarchy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, critical borders, dark accents |
| Deep Graphite | #171717 | `--color-deep-graphite` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, some component backgrounds |
| Vivid Yellow | #ffff02 | `--color-vivid-yellow` | Primary accent background for hero elements, large graphical blocks, card backgrounds |
| Dynamic Orange | #ff5800 | `--color-dynamic-orange` | Secondary accent background for cards and prominent graphical elements |
| Electric Blue | #0000ff | `--color-electric-blue` | Decorative SVG fills and strokes, highlight elements, icon accents |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 16px, 18px, 24px, 32px, 48px
- **Line heights:** 1.3
- **Role:** The primary font for all text, from body copy to large headlines. Its clean, geometric forms support the graphic, high-contrast aesthetic. It’s used primarily at 700 for headings, imparting a strong, bold statement, and at 400 for body for readability.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 9999px |
| links | 12px |
| buttons | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 0px |
| elementGap | 8px |

## Components

### Ghost Border Button

**Role:** Interactive element (button/link)

Text in Deep Graphite (#171717) with a 1px border in Midnight Ink (#000000). Background is transparent. Border radius is 12px. Padding is 0px, suggesting the primary interaction is implied by text size and hover, not a visible button box.

### Vivid Yellow Circle Card

**Role:** Feature showcase, visual accent

Circular card with a solid Vivid Yellow (#ffff02) background. Border radius 9999px. Used as large, impactful graphical elements that act as visual anchors on the page without internal padding.

### Dynamic Orange Circle Card

**Role:** Alternative feature showcase, visual accent

Circular card with a solid Dynamic Orange (#ff5800) background. Border radius 9999px. Similar to the Vivid Yellow Circle Card, providing an alternative accent color for large graphical elements.

## Do's and Don'ts

### Do

- Prioritize high-contrast color pairings using Midnight Ink (#000000) or Deep Graphite (#171717) on Canvas White (#ffffff) or accent colors.
- Use Vivid Yellow (#ffff02) and Dynamic Orange (#ff5800) for large, unpadded circular or full-bleed background elements to create high visual impact.
- Adopt a maximalist approach to typography: use Inter weight 700 for headlines and primary text, letting it dominate the layout.
- Apply specific border radii: 12px for interactive elements like buttons and links, and 9999px for large accent 'card' elements to create perfect circles.
- Maintain generous vertical spacing between sections, primarily using the 64px sectionGap and 8px elementGap for overall spaciousness.
- Keep components visually lightweight, relying on bold typography and color blocking rather than complex styling like shadows or gradients.
- Employ Electric Blue (#0000ff) sparingly for decorative SVG elements or very specific icon accents, not for primary interface elements.

### Don't

- Avoid subtle color variations; stick to the defined high-contrast palette.
- Do not use shadows or complex elevation; the design system favors flat, bold surfaces.
- Refrain from using small, delicate text; typography should be confident and prominent.
- Do not introduce intermediate border radius values; adhere strictly to 12px for interactive elements and 9999px for circular elements.
- Under no circumstances should any primary action button be filled; only ghost-like buttons with border and text colors are used.
- Avoid using gradients; the aesthetic is built on solid, block colors.
- Do not introduce new decorative imagery or illustrations; rely on bold shapes and impactful typography with accent colors.

## Imagery

Imagery is minimal and highly abstract, primarily consisting of large, vivid circular color blocks (Vivid Yellow and Dynamic Orange) that serve as decorative elements rather than displaying content. There are no photographs, realistic illustrations, or product screenshots. Icons are used sparingly and are likely line-based with Electric Blue (#0000ff) fills or strokes, functioning as small, functional or decorative accents. The visual density is image-light and text-dominant, with color blocks providing atmosphere.

## Layout

The page operates on a full-bleed layout for its primary content areas, not constrained by a max-width. The hero section often features large, bold text centrally aligned over a prominent color block. Sections alternate between white backgrounds and vivid accent color backgrounds, creating a clear visual rhythm without explicit dividers. Content is arranged in a fluid, flexible manner, often with large display typography as a central element, surrounded by minimal supporting text and interactive elements. Navigation is minimal, likely restricted to a top-level textual list. Density is spacious, emphasizing individual elements and text blocks through size and contrast.

## Similar Brands

- **Huge Inc.** — Uses large, impactful typography and bold, simple color blocking for visual dominance.
- **Active Theory** — Employs high-contrast graphics, vivid single-tone accents, and a focus on clean, unadorned UI elements.
- **Brutalist Websites** — Shares a direct, unembellished aesthetic, powerful typography, and high-contrast color choices without complex styling.
- **Build with Us (by Vercel)** — Leverages bold typography on minimal backgrounds with bright, singular accent colors for a modern, impactful feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-deep-graphite: #171717;
  --color-canvas-white: #ffffff;
  --color-vivid-yellow: #ffff02;
  --color-dynamic-orange: #ff5800;
  --color-electric-blue: #0000ff;
  --font-inter: 'Inter', Inter;
  --spacing-0: 0px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --radius-cards: 9999px;
  --radius-links: 12px;
  --radius-buttons: 12px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-deep-graphite: #171717;
  --color-canvas-white: #ffffff;
  --color-vivid-yellow: #ffff02;
  --color-dynamic-orange: #ff5800;
  --color-electric-blue: #0000ff;
  --font-inter: 'Inter', Inter;
  --spacing-0: 0px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --radius-cards: 9999px;
  --radius-links: 12px;
  --radius-buttons: 12px;
}
```
