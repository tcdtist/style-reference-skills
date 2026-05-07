---
version: alpha
name: "Alec Babala"
description: "Alec Babala's design language is a 'Midnight Digital Blueprint', characterized by a singular, intense cobalt blue dominating the canvas. Text and interactive elements are rendered in stark white or subtly muted gray, creating high contrast and immediate focus. The system embraces a minimalist, high-density layout where content takes precedence, organized with subtle visual cues rather than heavy ornamentation. This creates a functional, almost stark, digital workspace feel."
theme: "dark"
industry: "design"
source_url: "https://www.alecbabala.com"
refero_style_id: "067b502e-e428-4b7c-a367-fd10b4b58395"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515498768-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515498768-thumb.jpg"
extracted_at: "2026-04-30T02:18:34.083Z"
---

# Alec Babala — Style Reference

> Midnight Digital Blueprint — a deeply saturated cobalt canvas meticulously laid out with crisp white and subtle gray text.

**Theme:** dark

**Industry:** design

Alec Babala's design language is a 'Midnight Digital Blueprint', characterized by a singular, intense cobalt blue dominating the canvas. Text and interactive elements are rendered in stark white or subtly muted gray, creating high contrast and immediate focus. The system embraces a minimalist, high-density layout where content takes precedence, organized with subtle visual cues rather than heavy ornamentation. This creates a functional, almost stark, digital workspace feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Cobalt | #194ae9 | `--color-midnight-cobalt` | Page background, primary canvas, background for interactive elements |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text on dark backgrounds, active states |
| Dark Void | #000000 | `--color-dark-void` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Subtle Violet | #bfccf9 | `--color-subtle-violet` | Outlined interactive element borders, muted text |

## Tokens — Typography

### ui-sans-serif

- **Token:** `--font-ui-sans-serif`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Role:** Primary text across all body and interactive elements due to the limited typographic scale. Its neutrality lets the bold color palette speak louder than extensive font variations. Size 16px is used widely.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-62 | 62px | `--spacing-62` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-82 | 82px | `--spacing-82` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 600px |
| sectionGap | 24px |
| cardPadding | 8px |
| elementGap | 8px |

## Components

### Interactive Card

**Role:** Informational cards that link to content, acting as secondary navigation.

A rectangle with a Midnight Cobalt background (#194ae9), a Dark Void border (#000000), and Ghost White text (#ffffff). The body text is styled with Subtle Violet (#bfccf9).

### Outlined Link Block

**Role:** Content previews for articles or projects, featuring an image and text.

A block with a Midnight Cobalt background (#194ae9) and a Subtle Violet border (#bfccf9). Text is Ghost White (#ffffff), and supplementary text is Subtle Violet (#bfccf9). These blocks appear to respond to hover states with background fills.

### Primary Navigation Text Link

**Role:** Top-level textual links for site navigation.

Ghost White text (#ffffff) on the Midnight Cobalt background, using ui-sans-serif, weight 400, 16px size, with 1.2 lh. No underline, relying on color contrast for prominence.

### Image Grid Item

**Role:** Visual content showcase within grid layouts.

Images contained within a Dark Void border (#000000) against the Midnight Cobalt page background.

## Do's and Don'ts

### Do

- Use Midnight Cobalt (#194ae9) as the dominant background color for all primary canvas areas.
- Employ Ghost White (#ffffff) for all main textual content and active link states.
- Define interactive component borders using Dark Void (#000000) or Subtle Violet (#bfccf9) to create subtle divisions.
- Maintain a tight typographic scale using ui-sans-serif at 16px, weight 400 for all textual elements, overriding browser defaults.
- Structure content within a max-width of 600px, centered on the page for a focused reading experience.
- Separate sections with a vertical gap of 24px and use 8px for internal element spacing within components.
- Utilize Ghost White (#ffffff) for hover states on interactive links against the Midnight Cobalt background.

### Don't

- Avoid introducing additional saturated colors; maintain the strictly monochrome + cobalt palette.
- Do not use different font families or weights beyond ui-sans-serif 400.
- Refrain from using drop shadows or complex graphical elements; rely on color and spacing for visual hierarchy.
- Do not vary font sizes significantly; keep the visual density consistent.
- Avoid using outlines or borders on elements that are not interactive or structural.
- Do not use gradients; the system relies on solid color blocks.
- Never justify text alignment; keep all text left-aligned.

## Imagery

This design system is image-heavy, utilizing square or rectangular photographic cells treated with a strong blue monochrome filter. The images are contained within subtle borders, not overlapping, and appear as embedded content rather than decorative backgrounds. They function as visual anchors and content previews, contributing to the high-density information display. The icon style is minimal and text-based, blending seamlessly with the typographic focus rather than standing out as distinct graphical elements.

## Layout

The page adheres to a centered, max-width 600px layout, appearing as a content column on the wide cobalt blue canvas. The hero section is minimal, simply displaying the brand name. Content is arranged in compact, text-dominant blocks, occasionally interspersed with 2-column grids of monochrome images. Vertical spacing is consistent between sections (24px) but tighter within content groups (8px), creating a focused, high-information density. Navigation is implied through textual links rather than a distinct header bar, with a persistent 'Alec Babala' brand identity at the top.

## Similar Brands

- **Figma** — Monochromatic focus with a single strong accent color, flat UI elements.
- **Stripe** — Minimalist typography, strong use of white space offset by distinct UI elements, but in a a darker context here.
- **Linear** — High information density, use of outlines and subtle background shifts for interactive elements, dark theme.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-cobalt: #194ae9;
  --color-ghost-white: #ffffff;
  --color-dark-void: #000000;
  --color-subtle-violet: #bfccf9;
  --font-ui-sans-serif: 'ui-sans-serif', system-ui, sans-serif;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-24: 24px;
  --spacing-55: 55px;
  --spacing-62: 62px;
  --spacing-64: 64px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-cobalt: #194ae9;
  --color-ghost-white: #ffffff;
  --color-dark-void: #000000;
  --color-subtle-violet: #bfccf9;
  --font-ui-sans-serif: 'ui-sans-serif', system-ui, sans-serif;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-24: 24px;
  --spacing-55: 55px;
  --spacing-62: 62px;
  --spacing-64: 64px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --radius-none: 0px;
}
```
