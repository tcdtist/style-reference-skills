---
version: alpha
name: "BBA Studio"
description: "BBA Studio presents a stark, almost monochromatic design system built on a foundation of neutral tones. The visual language relies heavily on spaciousness and precise typography rather than vibrant color. Interactions are subtle, often indicated by a faint border change or a ghost button. The overall impression is one of restraint and architectural clarity, with content taking center stage on a light, unadorned canvas."
theme: "light"
industry: "other"
source_url: "https://www.bbastudio.eu"
refero_style_id: "59998921-8f1e-4f47-849d-e2eea939b0ed"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513976098-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513976098-thumb.jpg"
extracted_at: "2026-04-30T01:53:13.065Z"
---

# BBA Studio — Style Reference

> Architectural Gray Canvas

**Theme:** light

**Industry:** other

BBA Studio presents a stark, almost monochromatic design system built on a foundation of neutral tones. The visual language relies heavily on spaciousness and precise typography rather than vibrant color. Interactions are subtle, often indicated by a faint border change or a ghost button. The overall impression is one of restraint and architectural clarity, with content taking center stage on a light, unadorned canvas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary text color for ghost buttons |
| Lead Text | #000000 | `--color-lead-text` | Primary text color for headings and body text on light backgrounds |
| Ghost Border | #e5e7eb | `--color-ghost-border` | Subtle borders for cards, list items, navigation links, and ghost buttons |

## Tokens — Typography

### ABCROM

- **Token:** `--font-abcrom`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.40
- **Letter spacing:** normal
- **OpenType features:** "calt", "kern"
- **Role:** Primary typeface for all text elements. Its singular weight and size observed across various contexts (navigation, headings, body text, buttons) suggests an intentional uniformity, prioritizing clarity and directness over typographic hierarchy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.4 | 0px | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-112 | 112px | `--spacing-112` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 112px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Ghost Navigation Link

**Role:** Navigation, interactive elements

A ghost link with Lead Text (#000000) on a Canvas White (#ffffff) background. Activated state is indicated by a subtle Ghost Border (#e5e7eb) under the text. Uses ABCROM 14px, weight 400.

### Circular Ghost Button

**Role:** Primary interactive element, typically for calls to action or navigation.

A button with Canvas White (#ffffff) text on a transparent background, featuring a subtle Ghost Border (#e5e7eb) of 1px. The radius is extreme (9999px) for a pill-like or circular shape. Uses ABCROM 14px, weight 400. Padding is implicitly minimal, focusing on the text and border.

### List Item with Border

**Role:** Structured content lists or navigation menus.

List items that use ABCROM 14px, weight 400 Lead Text (#000000) and are often bordered by Ghost Border (#e5e7eb) on one or more sides to create distinct divisions.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) for all primary backgrounds to maintain the light, expansive canvas.
- Use Lead Text (#000000) for all textual content to ensure high contrast against light backgrounds.
- Implement Ghost Border (#e5e7eb) for all subtle dividers, card outlines, and interactive element states.
- Apply a 9999px border-radius to all buttons for a highly rounded, distinct shape.
- Maintain a clear elementGap of 20px between interactive elements and content blocks.
- Utilize ABCROM 14px, 400 weight for all typography, embracing a uniform and disciplined textual hierarchy.
- Emphasize large sectionGap of 112px to create significant visual breathing room between major content blocks.

### Don't

- Avoid introducing new chromatic colors; the palette is strictly neutral-focused.
- Do not use heavy shadows or gradients; rely on discreet borders and spacing for visual separation.
- Do not deviate from the ABCROM typeface or its singular observed weight and size.
- Avoid tight spacing; maintain the open and airy feel established by the 20px element gap and 112px section gap.
- Do not use square or minimally rounded corners for interactive elements; the 9999px radius is a signature visual cue.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-lead-text: #000000;
  --color-ghost-border: #e5e7eb;
  --font-abcrom: 'ABCROM', Montserrat;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: 0px;
  --spacing-8: 8px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-112: 112px;
  --radius-buttons: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-lead-text: #000000;
  --color-ghost-border: #e5e7eb;
  --font-abcrom: 'ABCROM', Montserrat;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: 0px;
  --spacing-8: 8px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-112: 112px;
  --radius-buttons: 9999px;
}
```
