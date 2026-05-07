---
version: alpha
name: "George Hatton"
description: "George Hatton's visual system evokes the starkness of an ink-on-paper minimalist print. It's a high-contrast mono-chromatic display, foregrounding content through extreme clarity and absence of distraction. Typography dictates all hierarchy and rhythm on surfaces that mimic a digital canvas, with no visual adornment or complex component structures. Spacing is tight, almost compressed, but maintains legibility through meticulous typographic detail."
theme: "light"
industry: "design"
source_url: "https://georgehatton.com"
refero_style_id: "09d867ed-35b5-4758-a00b-d6e4a8235c06"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517126806-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517126806-thumb.jpg"
extracted_at: "2026-04-30T02:45:37.109Z"
---

# George Hatton — Style Reference

> Ink on Canvas

**Theme:** light

**Industry:** design

George Hatton's visual system evokes the starkness of an ink-on-paper minimalist print. It's a high-contrast mono-chromatic display, foregrounding content through extreme clarity and absence of distraction. Typography dictates all hierarchy and rhythm on surfaces that mimic a digital canvas, with no visual adornment or complex component structures. Spacing is tight, almost compressed, but maintains legibility through meticulous typographic detail.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | #FFFFFF | `--color-canvas` | Page background — a stark white canvas for extreme content clarity |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, headings, navigational links, subtle borders. Establishes high contrast against the white background, mimicking print on paper |

## Tokens — Typography

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-10 | 10px | `--spacing-10` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 0px |
| elementGap | 10px |

## Components

## Do's and Don'ts

### Do

- Use 'Midnight Ink' (#000000) for all text elements to maintain high contrast and a print-like aesthetic.
- Maintain a stark white page background ('Canvas', #FFFFFF) for all primary surfaces.
- Employ tight spacing between elements, defaulting to 10px where multiple items are listed horizontally or vertically.
- Prioritize typographic hierarchy and weight changes to denote importance, as no other visual cues like color or elevation are present.
- Keep all borders, if any, at 0px radius, embracing sharp, unrounded forms.
- Minimize UI elements to only essential information; avoid decorative components or complex visual metaphors.

### Don't

- Do not introduce any saturated or chromatic colors; the system is strictly monochromatic.
- Avoid using shadows or any form of elevation; the design philosophy is flat and unlayered.
- Do not use rounded corners on any UI elements; all shapes should be rectilinear.
- Do not create complex layouts or multi-column grids that introduce visual hierarchy beyond simple text arrangement.
- Do not vary line heights excessively; maintain close-set lines for a compact informational feel.
- Do not add gradients or background imagery; surfaces should remain solid white or black.

## Imagery

The site uses no explicit imagery, photography, or illustrations. The visual language relies entirely on type and whitespace. Icons are minimal, only present as simple, unadorned arrow pointers for links, rendered in 'Midnight Ink' on a 'Canvas' background. The density is text-dominant, with content presented in clearly defined, separate blocks.

## Layout

The page model is full-bleed, with content contained within left-aligned columns rather than a centered max-width container. There is no distinct hero pattern; the page immediately presents descriptive text. Section rhythm is created by consistent vertical spacing between logically grouped blocks of text, without alternating backgrounds or visual dividers. Content is arranged in left-aligned stacks and multi-column lists where related information (Contact, Clients, Press, Credits) is presented side-by-side. The density is compact but spacious in its use of negative space, allowing focus on individual text blocks. Navigation is minimal, limited to text links within the page structure.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas: #FFFFFF;
  --color-midnight-ink: #000000;
  --spacing-0: 0px;
  --spacing-10: 10px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas: #FFFFFF;
  --color-midnight-ink: #000000;
  --spacing-0: 0px;
  --spacing-10: 10px;
  --radius-none: 0px;
}
```
