---
version: alpha
name: "Ezekiel Aquino"
description: "Ezekiel Aquino's design system evokes an academic, minimalist aesthetic, reminiscent of a printed score on paper. The core visual identity is built on high-contrast monochrome with extensive negative space, making typography the primary visual element. The interplay of classic serif and modern sans-serif fonts, coupled with an almost entirely achromatic palette, creates a refined and intellectual atmosphere. Visual interest is primarily driven by artful arrangement of text and the graphic use of musical notation, rather than decorative UI elements or vibrant color."
theme: "light"
industry: "design"
source_url: "https://ezekielaquino.com"
refero_style_id: "d6be921b-d52d-4cc0-b527-431685a0bf50"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521563605-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521563605-thumb.jpg"
extracted_at: "2026-04-30T03:59:37.881Z"
---

# Ezekiel Aquino — Style Reference

> Monochromatic Score Sheet — text as structure, notation as art, on a silent white canvas.

**Theme:** light

**Industry:** design

Ezekiel Aquino's design system evokes an academic, minimalist aesthetic, reminiscent of a printed score on paper. The core visual identity is built on high-contrast monochrome with extensive negative space, making typography the primary visual element. The interplay of classic serif and modern sans-serif fonts, coupled with an almost entirely achromatic palette, creates a refined and intellectual atmosphere. Visual interest is primarily driven by artful arrangement of text and the graphic use of musical notation, rather than decorative UI elements or vibrant color.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Note Black | #000000 | `--color-note-black` | Primary text for headings and body, accent for structural borders in the generative graphic. The stark black creates a formal contrast against the light background |
| Canvas White | #f4f4f4 | `--color-canvas-white` | Dominant background color for the overall page, providing a clean, expansive, and subtle off-white paper-like base |
| Ghost White | #ffffff | `--color-ghost-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### Basel Grotesk

- **Token:** `--font-basel-grotesk`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 10px, 32px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Body text for descriptions and navigation. Its clean, contemporary lines ground the system with a subtle technical feel. Used widely for general interface elements.

### Neue Haas Unica W01 Regular

- **Token:** `--font-neue-haas-unica-w01-regular`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 32px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Primary headings and artistic titles requiring a modern, clean, and understated presence. Shares the same size as the italicized serif for visual harmony.

### Ogg Regular Italic

- **Token:** `--font-ogg-regular-italic`
- **Substitute:** Playfair Display Italic
- **Weights:** 400
- **Sizes:** 32px
- **Line heights:** 0.92
- **Letter spacing:** normal
- **Role:** Italicized heading for key artistic statements, offering an elegant, classical touch. The tight line height hints at a carefully crafted composition.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Small functional text, potentially for discreet UI elements or copyright notices. Its commonality provides a neutral, almost invisible anchor.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 0px |
| elementGap | 16px |

## Components

### Ghost Navigation Button

**Role:** Primary interactive element for navigation. It's a visually subtle, text-only button with no background or border, relying on text color for subtle visibility.

Text color: #ffffff, Background: rgba(0, 0, 0, 0), Border: none, Padding: 0px, Border Radius: 0px.

## Do's and Don'ts

### Do

- Prioritize a monochrome palette using Note Black (#000000) for primary text and Canvas White (#f4f4f4) for backgrounds.
- Use Ghost White (#ffffff) for subtle interactive text elements.
- Employ Basel Grotesk for most functional text and Neue Haas Unica W01 Regular for main headings, maintaining a consistent 32px size for prominent titles.
- Introduce Ogg Regular Italic specifically for artistic or 'presents' statements, emphasizing its elegant italicized form with a tight 0.92 line height.
- Maintain a sense of generous negative space; do not crowd elements.
- Apply hard-edged, 0px border radius for all interactive elements and containers.
- Ensure all interactive buttons are styled as ghost buttons with no background or border, using Ghost White (#ffffff) for text against the Canvas White background for a minimalist interaction point.

### Don't

- Avoid the use of any bright or saturated colors; the system is strictly achromatic.
- Do not add shadows, gradients, or heavy borders to any UI elements.
- Refrain from using varied padding or rounded corners on buttons or cards; maintain a crisp, flat aesthetic.
- Do not introduce decorative elements that distract from the typography or the central generative graphic.
- Do not use generic system fonts for prominent headings or artistic text; rely on the specific font choices (Basel Grotesk, Neue Haas Unica, Ogg Italic) to convey brand identity.
- Avoid dense UIs; prioritize clear separation and ample whitespace between content blocks.
- Do not use a default button style with a solid background; all interactive elements should appear as text links.

## Similar Brands

- **Are.na** — Monochrome palette, focus on content as visual, minimal UI chrome.
- **The Browser Company (Arc)** — Emphasis on typographic hierarchy and sparse, almost ghost-like UI elements against a clean background.
- **Brutalist Websites** — High contrast, minimal color, unconventional layout choices, and a strong focus on raw presentation over polished aesthetic.
- **Erik Spiekermann's personal site** — Strong typographic identity, black-and-white, academic and direct.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-note-black: #000000;
  --color-canvas-white: #f4f4f4;
  --color-ghost-white: #ffffff;
  --font-basel-grotesk: 'Basel Grotesk', Inter;
  --font-neue-haas-unica-w01-regular: 'Neue Haas Unica W01 Regular', Helvetica Neue;
  --font-ogg-regular-italic: 'Ogg Regular Italic', Playfair Display Italic;
  --font-arial: 'Arial', Arial;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --spacing-64: 64px;
  --radius-buttons: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-note-black: #000000;
  --color-canvas-white: #f4f4f4;
  --color-ghost-white: #ffffff;
  --font-basel-grotesk: 'Basel Grotesk', Inter;
  --font-neue-haas-unica-w01-regular: 'Neue Haas Unica W01 Regular', Helvetica Neue;
  --font-ogg-regular-italic: 'Ogg Regular Italic', Playfair Display Italic;
  --font-arial: 'Arial', Arial;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --spacing-64: 64px;
  --radius-buttons: 0px;
}
```
