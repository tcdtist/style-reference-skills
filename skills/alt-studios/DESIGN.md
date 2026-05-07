---
version: alpha
name: "Alt Studios"
description: "Alt Studios employs a stark, editorial aesthetic centered on high contrast and typographic hierarchy. The design is a minimal canvas of white punctuated by strong black text, prioritizing content with no distracting elements. Typography is compressed and commanding, acting as the primary visual language, creating a sense of directness and intellectual clarity."
theme: "light"
industry: "agency"
source_url: "https://alt-studios.com"
refero_style_id: "b95143f4-f881-4118-acc4-aa97fbce463d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518625989-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518625989-thumb.jpg"
extracted_at: "2026-04-30T03:10:48.928Z"
---

# Alt Studios — Style Reference

> Monochromatic typographic statement

**Theme:** light

**Industry:** agency

Alt Studios employs a stark, editorial aesthetic centered on high contrast and typographic hierarchy. The design is a minimal canvas of white punctuated by strong black text, prioritizing content with no distracting elements. Typography is compressed and commanding, acting as the primary visual language, creating a sense of directness and intellectual clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, large content surfaces |
| Ink Black | #000000 | `--color-ink-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |

## Tokens — Typography

### UniversalSans-750

- **Token:** `--font-universalsans-750`
- **Weights:** 600
- **Sizes:** 18px
- **Line heights:** 1, 1.2
- **Role:** UniversalSans-750 — detected in extracted data but not described by AI

### UniversalSans

- **Token:** `--font-universalsans`
- **Substitute:** Helvetica Neue
- **Weights:** 600
- **Sizes:** 18px, 43px, 75px
- **Line heights:** 1.00, 1.07, 1.20
- **Letter spacing:** -0.0200em
- **Role:** All headings, main body text, navigation elements – its consistent bold weight creates a unified, assertive voice across the entire interface. The character spacing is tight, making even large headlines feel economical.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 18px | 1 | -0.36px | `--text-caption` |
| heading | 43px | 1.07 | -0.86px | `--text-heading` |
| display | 75px | 1.2 | -1.5px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-75 | 75px | `--spacing-75` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 75px |
| cardPadding | 18px |
| elementGap | 24px |

## Components

### Primary Headline

**Role:** Primary content headings

Bold UniversalSans at 75px, Ink Black text, with tight letter-spacing to form compact, impactful titles. No additional styling, relying entirely on typography for visual weight.

### Sub-Headline/Major Text Block

**Role:** Secondary content headings and visual divisions

Bold UniversalSans at 43px, Ink Black text, compressed letter-spacing. Used for key phrases that structure content without being full display text.

### Navigation Link

**Role:** Interactive navigation items and descriptive labels.

UniversalSans at 18px, Ink Black text. Default and hover states are indistinguishable except for the slight change to a 600 weight.

## Do's and Don'ts

### Do

- Prioritize text as the primary visual element; use Ink Black (#000000) for all textual content against Canvas White (#ffffff) backgrounds.
- Employ UniversalSans-600 universally across all text roles to establish a consistent, assertive typographic voice.
- Maintain strict typographic hierarchy: 75px (line-height 1.2) for main display text, 43px (line-height 1.07) for significant headings, and 18px (line-height 1.0) for body and navigation.
- Apply a consistent letter-spacing of -0.0200em to all UniversalSans text to achieve a visually compressed and impactful appearance.
- Use 18px padding for content blocks to provide breathing room without compromising density, and 24px for distinct structural elements.

### Don't

- Avoid using any colors other than Ink Black (#000000) and Canvas White (#ffffff); color is deliberately absent from the system.
- Do not introduce any border-radius values; all corners should remain sharp and angular.
- Refrain from using shadows or elevation effects; the design is intentionally flat and two-dimensional.
- Do not introduce decorative elements, background gradients, or UI chrome; the focus is solely on typography and content.
- Avoid breaking the high-contrast text-on-background pattern; all text must be Ink Black on Canvas White for maximum impact.

## Imagery

This design system is imagery-minimal, almost text-only. The visual language relies entirely on typography and stark contrast rather than photography, illustration, or product shots. When imagery is absolutely necessary (not visible here), it should be treated in a way that minimizes its visual footprint and maintains the high-contrast, black-and-white aesthetic, likely as grayscale or monochrome treatments if included at all. The design is dominantly text-based, showcasing content as art.

## Similar Brands

- **Kerning Cultures** — High-contrast, text-dominant aesthetic with a strong focus on minimalist typography.
- **Actual Source** — Utilizes bold, often large-scale typography as the primary visual and communicative tool on white canvas.
- **Norm Architects** — Employs a stark, monochromatic palette and generous white space to create an understated yet impactful presence.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --font-universalsans-750: 'UniversalSans-750', ui-sans-serif, system-ui, sans-serif;
  --font-universalsans: 'UniversalSans', Helvetica Neue;
  --text-caption: 18px;
  --leading-caption: 1;
  --tracking-caption: -0.36px;
  --text-heading: 43px;
  --leading-heading: 1.07;
  --tracking-heading: -0.86px;
  --text-display: 75px;
  --leading-display: 1.2;
  --tracking-display: -1.5px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-75: 75px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --font-universalsans-750: 'UniversalSans-750', ui-sans-serif, system-ui, sans-serif;
  --font-universalsans: 'UniversalSans', Helvetica Neue;
  --text-caption: 18px;
  --leading-caption: 1;
  --tracking-caption: -0.36px;
  --text-heading: 43px;
  --leading-heading: 1.07;
  --tracking-heading: -0.86px;
  --text-display: 75px;
  --leading-display: 1.2;
  --tracking-display: -1.5px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-75: 75px;
  --radius-none: 0px;
}
```
