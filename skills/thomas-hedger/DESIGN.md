---
version: alpha
name: "Thomas Hedger"
description: "Thomas Hedger's portfolio features a stark, high-contrast visual identity centered on vibrant illustration against a light canvas. The design system is highly content-driven, with individual artworks serving as the primary visual elements. Typography is minimal and functional, acting as a clear, understated frame for the colorful, intricate illustrations. A tightly controlled palette of neutrals defines the UI, allowing the bold and diverse color compositions within the artwork to command full attention."
theme: "light"
industry: "design"
source_url: "https://thomashedger.co.uk"
refero_style_id: "9fe18d8b-58b7-404d-bcc6-9e8a73b8862c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519740416-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519740416-thumb.jpg"
extracted_at: "2026-04-30T03:29:16.286Z"
---

# Thomas Hedger — Style Reference

> Gallery Grid Canvas

**Theme:** light

**Industry:** design

Thomas Hedger's portfolio features a stark, high-contrast visual identity centered on vibrant illustration against a light canvas. The design system is highly content-driven, with individual artworks serving as the primary visual elements. Typography is minimal and functional, acting as a clear, understated frame for the colorful, intricate illustrations. A tightly controlled palette of neutrals defines the UI, allowing the bold and diverse color compositions within the artwork to command full attention.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, default text for reversed elements (e.g., footer copyright). The expansive white space ensures high readability and isolates artwork |
| Ink Grey | #29242b | `--color-ink-grey` | Dark borders and separators for elevated surfaces and inverted UI. |
| Border Fog | #e5e5e5 | `--color-border-fog` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### Diatype

- **Token:** `--font-diatype`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 9px, 19px
- **Line heights:** 1.10, 1.30
- **Role:** Body text, captions, and general interface text. Its clean, functional aesthetic supports content without distracting from the artwork.

### Diatype Variable

- **Token:** `--font-diatype-variable`
- **Substitute:** Inter
- **Weights:** 500, 700
- **Sizes:** 26px
- **Line heights:** 1.10
- **Role:** Main navigation and section headings. The varied weights provide emphasis for key navigational and informational elements.

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Role:** Fine print, copyright information, and sub-textual content. Its classic seriffed form provides a subtle contrast for auxiliary information.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-3 | 3px | `--spacing-3` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-296 | 296px | `--spacing-296` |
| spacing-317 | 317px | `--spacing-317` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 0px |
| elementGap | 3px |

## Components

### Artwork Grid Item

**Role:** Primary display for artwork portfolio items.

Each item is a square or rectangular container with a background color that is part of the artwork itself, no padding, and a 0px border-radius, presenting content edge-to-edge. No intrinsic box-shadow. Content within has its own dimensions.

### Navigation Link

**Role:** Interactive text links in the header and footer.

Text rendered in 'Ink Grey' or 'Absolute Zero' (depending on context) using Diatype Variable at 26px weight 500 for main navigation. Underlined with a thin 'Absolute Zero' border on hover/focus (derived from link/borderColor context).

### Header Branding

**Role:** Site title in the main header.

Text rendered in 'Ink Grey' using Diatype Variable at 26px weight 500.

### Footer Copyright Text

**Role:** Small, legal text at the bottom of the page.

Text in 'Canvas White' using Times at 13px weight 400.

## Do's and Don'ts

### Do

- Prioritize image content. Most of the page should be dedicated to displaying artwork, respecting its inherent dimensions and aspect ratios.
- Maintain a clear, high-contrast visual hierarchy using 'Absolute Zero' for key text and borders against 'Canvas White' backgrounds.
- Use 'Ink Grey' for prominent headings to establish a slightly softer, yet still impactful, textual presence.
- Apply 'Absolute Zero' for all primary borders and dividers to emphasize the grid structure and define interactive areas.
- Keep all corners sharp with a 0px border-radius on all components, maintaining a crisp, rectilinear aesthetic.
- Employ 'Diatype' (or Inter) at 26px weight 700 for main navigation and headings, providing clear and concise guidance.
- Utilize 3px padding from the tokens only for small, internal element spacing where needed for compact density, otherwise prefer 0px for content containers.

### Don't

- Avoid decorative shadows or complex elevation schemes; the design relies on flat, direct presentation.
- Do not introduce new colors into the UI beyond the defined neutrals; all vibrancy should come from the artwork itself.
- Refrain from using heavily styled buttons or components that draw attention away from the visual content.
- Do not implement soft curves or rounded corners; the aesthetic is sharp and geometric.
- Avoid unnecessary padding or excessive white space around artwork to maintain a dense, gallery-like feel.
- Do not use generic system fonts for prominent text roles; stick to 'Diatype' and 'Diatype Variable' for brand consistency.
- Under no circumstances should the browser default link color (#0000ee) appear; all links use 'Absolute Zero' or 'Ink Grey'.

## Imagery

The site is dominated by a diverse collection of highly stylized, often surreal, and always vibrant illustrations. These are the core content and visual identity. They feature a mix of bold outlines, flattened perspectives, and rich, often unexpected color palettes. Imagery is treated as full-bleed within its grid cell, without rounded corners or drop shadows, emphasizing a direct and unadorned presentation. The density is image-heavy, with each piece of artwork occupying a significant visual footprint. Iconography for social links (Behance, Instagram, Cart) is minimalist and outlined, using 'Absolute Zero' against the 'Canvas White' background.

## Similar Brands

- **It's Nice That** — Similar focus on visual content presentation with a minimalist UI and ample white space framing diverse artworks.
- **The Brand Identity** — Showcases creative work in a grid format with a clean, high-contrast typographic overlay.
- **Pentagram** — Professional portfolio using a clean, grid-based layout to showcase a variety of distinct visual projects.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-canvas-white: #ffffff;
  --color-ink-grey: #29242b;
  --color-border-fog: #e5e5e5;
  --font-diatype: 'Diatype', Inter;
  --font-diatype-variable: 'Diatype Variable', Inter;
  --font-times: 'Times', Times New Roman;
  --spacing-0: 0px;
  --spacing-3: 3px;
  --spacing-19: 19px;
  --spacing-296: 296px;
  --spacing-317: 317px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-canvas-white: #ffffff;
  --color-ink-grey: #29242b;
  --color-border-fog: #e5e5e5;
  --font-diatype: 'Diatype', Inter;
  --font-diatype-variable: 'Diatype Variable', Inter;
  --font-times: 'Times', Times New Roman;
  --spacing-0: 0px;
  --spacing-3: 3px;
  --spacing-19: 19px;
  --spacing-296: 296px;
  --spacing-317: 317px;
  --radius-none: 0px;
}
```
