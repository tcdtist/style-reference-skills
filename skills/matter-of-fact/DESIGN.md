---
version: alpha
name: "Matter of Fact"
description: "Matter of Fact operates on a stark, high-contrast visual system: pure black text on a clean white canvas. Typography, primarily large and commanding, is the dominant visual element, with minimal use of color or complex components. The design maintains an austere, type-driven aesthetic, emphasizing direct communication and clarity through its monochrome palette."
theme: "light"
industry: "design"
source_url: "https://matteroffact.fr"
refero_style_id: "d7dcd499-8eeb-4dbb-8c52-9d688e637783"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516711673-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516711673-thumb.jpg"
extracted_at: "2026-04-30T02:38:45.674Z"
---

# Matter of Fact — Style Reference

> Monochrome typographic canvas

**Theme:** light

**Industry:** design

Matter of Fact operates on a stark, high-contrast visual system: pure black text on a clean white canvas. Typography, primarily large and commanding, is the dominant visual element, with minimal use of color or complex components. The design maintains an austere, type-driven aesthetic, emphasizing direct communication and clarity through its monochrome palette.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, primary surface for all content |
| Midnight Ink | #000000 | `--color-midnight-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |

## Tokens — Typography

### FreeSans

- **Token:** `--font-freesans`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 23px, 36px, 202px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** normal
- **Role:** All textual content, from primary navigation to very large display headlines. Its mono-weight adherence to 400 emphasizes consistency and directness.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 23px | 1.2 | 0px | `--text-caption` |
| subheading | 36px | 1.2 | 0px | `--text-subheading` |
| display | 202px | 1 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-84 | 84px | `--spacing-84` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 900px |
| sectionGap | 84px |
| cardPadding | 18px |
| elementGap | 6px |

## Components

### Minimal Navigation Link

**Role:** Interactive text link within navigation

Text link using FreeSans, weight 400, color Midnight Ink (#000000). Padding of 6px applied to individual items and 18px on the right and bottom for broader clickable areas.

### Headline Display Text

**Role:** Dominant page headlines

Large text using FreeSans, weight 400, color Midnight Ink (#000000), at 202px size with 1.0 line height for impactful, dense typography.

## Do's and Don'ts

### Do

- Prioritize text as the primary visual element; minimize other decorative components.
- Maintain a strict achromatic color palette using only Canvas White (#ffffff) for backgrounds and Midnight Ink (#000000) for foreground elements.
- Use FreeSans weight 400 for all typography, ensuring a consistent and direct tone.
- Apply 84px vertical spacing between major page sections to create clear visual breaks.
- Ensure all interactive elements are defined by Midnight Ink (#000000) borders or text, with no background fills.

### Don't

- Do not introduce any chromatic colors; the palette is strictly monochrome.
- Avoid decorative images or illustrations that would distract from the typography.
- Do not use multiple font weights or families; FreeSans 400 is the only typeface.
- Refrain from using shadows or gradients; rely on contrast and typography for visual hierarchy.
- Do not break the 900px max-width constraint for main content areas.

## Imagery

The site uses no imagery or embedded graphics, focusing entirely on a pure typographic and monochrome UI. The visual language is defined by the stark absence of visuals, making text itself the primary graphic element.

## Layout

The page model is contained, with a max-width of 900px and content generally centered. The hero pattern is a massive, attention-grabbing centered headline over a pure white background. Sections maintain a consistent vertical rhythm with 84px spacing. Content is arranged in simple, centered stacks, with no apparent grid usage for features or cards. The navigation is a top bar, minimal and text-based, likely sticky given the interactive elements.

## Similar Brands

- **Savvy Studio** — Emphasizes large, stark typography on a monochromatic background with minimal UI elements.
- **Anagram Paris** — Uses a clean white canvas, high-contrast black text, and a strong typographic voice as its core aesthetic.
- **Bureau for Visual Affairs** — Relies on a monochrome palette and large, well-structured typography to convey information rather than decorative imagery.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #000000;
  --font-freesans: 'FreeSans', Arial;
  --text-caption: 23px;
  --leading-caption: 1.2;
  --tracking-caption: 0px;
  --text-subheading: 36px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0px;
  --text-display: 202px;
  --leading-display: 1;
  --tracking-display: 0px;
  --spacing-6: 6px;
  --spacing-18: 18px;
  --spacing-84: 84px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #000000;
  --font-freesans: 'FreeSans', Arial;
  --text-caption: 23px;
  --leading-caption: 1.2;
  --tracking-caption: 0px;
  --text-subheading: 36px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0px;
  --text-display: 202px;
  --leading-display: 1;
  --tracking-display: 0px;
  --spacing-6: 6px;
  --spacing-18: 18px;
  --spacing-84: 84px;
  --radius-none: 0px;
}
```
