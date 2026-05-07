---
version: alpha
name: "Pedro Duarte"
description: "This design evokes a feeling of restrained, almost academic cool, like a scholar's personal archive. It employs a predominantly monochrome palette, allowing a deep, dark background to create a focused, low-distraction environment. The use of a custom monospaced-esque typeface with tight letter spacing reinforces a technical, precise aesthetic, while subtle red accents signify active navigation without overt visual noise. The core visual identity is minimalist, relying on strong typography and the deliberate absence of ornamentation."
theme: "dark"
industry: "agency"
source_url: "https://ped.ro"
refero_style_id: "bee5e949-b8ba-43cb-aaeb-d8c3b5efb3fd"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925548120-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925548120-thumb.jpg"
extracted_at: "2026-04-11T16:39:26.205Z"
---

# Pedro Duarte — Style Reference

> Typewriter on a dark slate. The stark contrast of white text against a deep black background, punctuated by precise typography and minimal color, creates a sense of focused intention.

**Theme:** dark

**Industry:** agency

This design evokes a feeling of restrained, almost academic cool, like a scholar's personal archive. It employs a predominantly monochrome palette, allowing a deep, dark background to create a focused, low-distraction environment. The use of a custom monospaced-esque typeface with tight letter spacing reinforces a technical, precise aesthetic, while subtle red accents signify active navigation without overt visual noise. The core visual identity is minimalist, relying on strong typography and the deliberate absence of ornamentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Page background, surface background for interactive elements. |
| Frost White | #ffffff | `--color-frost-white` | Primary text, interactive element outlines, contrasts sharply with Pitch Black for high readability. |
| Alabaster | #eeeeee | `--color-alabaster` | Secondary text, subtle accents on hover states, provides a softer contrast than Frost White for less prominent information. |
| Active Red | #ff5b38 | `--color-active-red` | Active navigation indicator — this is not directly detected from tokens but inferred from screenshot. Provides a subtle visual cue without overwhelming the monochrome palette. |

## Tokens — Typography

### Neue Montreal

- **Token:** `--font-neue-montreal`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 16px, 28px, 35px
- **Line heights:** 1.00, 1.20, 1.50
- **Letter spacing:** -0.01
- **Role:** Main body text, component labels, and large display headings. Its monospaced feel and tight tracking contribute to the system's technical and precise aesthetic.

### Editorial New

- **Token:** `--font-editorial-new`
- **Substitute:** PT Serif
- **Weights:** 400
- **Sizes:** 16px, 35px
- **Line heights:** 1.20, 1.50
- **Letter spacing:** -0.01
- **Role:** Used for navigation links and some headings, providing a slightly more classic, editorial counterpoint to Neue Montreal while maintaining the tight tracking signature.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.5 | -0.01px | `--text-body` |
| subheading | 28px | 1.2 | -0.01px | `--text-subheading` |
| heading-lg | 35px | 1 | -0.01px | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-11 | 11px | `--spacing-11` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-180 | 180px | `--spacing-180` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 180px |
| cardPadding | 16px |
| elementGap | 11px |

## Components

### Pill Outline Keyword Badges

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Bar with Active & Inactive States

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Bio Text Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Pill Outline Button

**Role:** Interactive elements, highlighted keywords in body text.

Transparent background, Frost White (#ffffff) text, 1px Frost White (#ffffff) border, and 9999px border-radius. Padding is 0px top/bottom and 11.2px left/right. Used to visually emphasize specific words inline or as interaction points.

### Navigation Link (Active)

**Role:** Primary navigation.

Editorial New, 16px, weight 400, Alabaster (#eeeeee) text. A 1px Active Red (#ff5b38) bottom border indicates the active state, reinforcing the minimalist accent strategy.

### Navigation Link (Inactive)

**Role:** Primary navigation.

Editorial New, 16px, weight 400, Alabaster (#eeeeee) text. No border, appears as plain text.

### Invisible Link

**Role:** Inline text links within body content.

Editorial New, 16px, weight 400, Alabaster (#eeeeee) text. No specific visual styling beyond the default text color, maintaining a clean, unobtrusive reading flow.

### Page Header

**Role:** Top-level page identification.

Neue Montreal, 28px, weight 400, Frost White (#ffffff) text. Sets a clear visual hierarchy with prominent yet not overwhelming size.

## Do's and Don'ts

### Do

- Maintain a predominantly monochrome palette using Pitch Black (#000000) for backgrounds and Frost White (#ffffff) for primary text, reserving Alabaster (#eeeeee) for secondary text and subtle accents.
- Utilize Neue Montreal (or IBM Plex Mono) for all display headings and primary body content, ensuring a consistent letterSpacing of -0.01em for a precise, technical feel.
- Apply 9999px border-radius to all interactive buttons and highlighted inline elements to create distinct 'pill' shapes.
- Use Active Red (#ff5b38) exclusively as an underline for active navigation items, limiting chromatic color to functional indicators.
- Structure layout with generous section gaps of 180px, creating ample vertical breathing room between content blocks.
- Elevate keywords in body copy using the Pill Outline Button style with a 0px vertical padding and 11.2px horizontal padding to integrate them seamlessly into text flow.

### Don't

- Avoid introducing additional saturated colors beyond the subtle Accented Red (#ff5b38) for any decorative purpose.
- Do not vary letter spacing unless explicitly defined within the typography scale; the tight -0.01em is a core distinctive feature.
- Do not use box-shadows or complex gradients; rely on color contrast and typographic hierarchy for visual differentiation.
- Avoid using system default rounded corners; all rounded elements must conform to the 9999px pill radius.
- Do not use images or illustrations as primary content elements; prioritize text and subtle interactive components.

## Imagery

The site's visual language is characterized by an absence of traditional imagery like photography or illustration. Instead, it relies entirely on typography and UI elements to convey its message. The only 'visuals' are the outlined 'pill' components which act as textual highlights and interactive cues, functioning akin to abstract icons within the textual canvas. This creates an extremely text-dominant, almost console-like density.

## Layout

The page model is full-bleed, extending content edge-to-edge horizontally within its dark theme. The hero section presents text centered prominently, establishing a focused, direct communication. Section rhythm is primarily dictated by large vertical section gaps (180px), creating distinct, spacious blocks. Content arrangement is typically centered text stacks, with no complex grid structures or asymmetric compositions. Navigation is a minimalist top-bar with plain text links; there's no sticky header or complex menus, maintaining an uncluttered interface.

## Similar Brands

- **Linear** — Dark-themed UI with strong typographic emphasis and very sparse, deliberate use of color accents.
- **Vercel** — Monochromatic aesthetic, focus on direct text content, and subtle interactive elements rather than rich graphics.
- **Raycast** — Dark UI, minimalist design, and an emphasis on text-based interaction and information.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-frost-white: #ffffff;
  --color-alabaster: #eeeeee;
  --color-active-red: #ff5b38;
  --font-neue-montreal: 'Neue Montreal', IBM Plex Mono;
  --font-editorial-new: 'Editorial New', PT Serif;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.01px;
  --text-subheading: 28px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.01px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.01px;
  --spacing-11: 11px;
  --spacing-16: 16px;
  --spacing-180: 180px;
  --radius-buttons: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-frost-white: #ffffff;
  --color-alabaster: #eeeeee;
  --color-active-red: #ff5b38;
  --font-neue-montreal: 'Neue Montreal', IBM Plex Mono;
  --font-editorial-new: 'Editorial New', PT Serif;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.01px;
  --text-subheading: 28px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.01px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.01px;
  --spacing-11: 11px;
  --spacing-16: 16px;
  --spacing-180: 180px;
  --radius-buttons: 9999px;
}
```
