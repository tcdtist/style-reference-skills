---
version: alpha
name: "destroytoday.com"
description: "destroytoday.com operates with a stark, high-contrast clarity: crisp black text on a bright white canvas. The design emphasizes content through abundant negative space, anchored by a singular vivid blue accent that highlights interactive elements and the brand's graphic identity. Components are minimalist, focusing on function over adornment, with a sense of lightweight precision."
theme: "light"
industry: "design"
source_url: "https://destroytoday.com"
refero_style_id: "b8fd5772-ac2b-4bfd-b5e5-d182261b09c5"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514552137-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514552137-thumb.jpg"
extracted_at: "2026-04-30T02:03:05.902Z"
---

# destroytoday.com — Style Reference

> Crisp White Blueprint

**Theme:** light

**Industry:** design

destroytoday.com operates with a stark, high-contrast clarity: crisp black text on a bright white canvas. The design emphasizes content through abundant negative space, anchored by a singular vivid blue accent that highlights interactive elements and the brand's graphic identity. Components are minimalist, focusing on function over adornment, with a sense of lightweight precision.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary content areas |
| Ink Black | #222222 | `--color-ink-black` | Dark borders and separators for elevated surfaces and inverted UI |
| Ash Grey | #d8d4cf | `--color-ash-grey` | Muted text, subheadings, subtle borders |
| True Blue | #0000ff | `--color-true-blue` | Interactive links, primary outlined button borders, active navigation items — a vivid punch of color against the monochrome provides clear calls to action and visual interest |
| Deep Violet | #555abf | `--color-deep-violet` | Secondary interactive link text and borders |
| Path Gold | #fcd669 | `--color-path-gold` | Decorative line graphics and illustrations — provides abstract visual flair without dominating the UI |
| Path Orange | #f79a59 | `--color-path-orange` | Decorative line graphics and illustrations, paired with Path Gold for a dynamic visual effect |
| Shaded Navy | #000080 | `--color-shaded-navy` | Subtle image box shadows, introducing depth with a cool tint |

## Tokens — Typography

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui
- **Weights:** 400, 600, 700
- **Sizes:** 16px, 24px
- **Line heights:** 1.20, 1.40, 1.50
- **Role:** Primary text, headings, and all UI elements. Its system-font nature prioritizes speed and native feel over a custom brand typeface.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-135 | 135px | `--spacing-135` |
| spacing-225 | 225px | `--spacing-225` |
| spacing-297 | 297px | `--spacing-297` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 64px |
| cardPadding | 32px |
| elementGap | 16px |

## Components

### Header Navigation Link

**Role:** Top-level navigation items

Text link using Ink Black (#222222) at 16px, 400 weight. On hover/active, the text color changes to True Blue (#0000ff).

### Primary Outlined Link

**Role:** Key interactive links and call-to-actions

An underlined link where the underline is True Blue (#0000ff). Text color is Ink Black (#222222) and changes to True Blue (#0000ff) on hover. This is the primary interactive element style.

### Secondary Outlined Link

**Role:** Subtle interactive links within content

An underlined link where the underline is Deep Violet (#555abf). Text color is Ink Black (#222222) and changes to Deep Violet (#555abf) on hover. Used for contextual links.

### Page Title

**Role:** Main heading for content blocks

Uses Ink Black (#222222) text at 24px, 600 weight, with a line height of 1.2. Follows a 16px internal padding-top and padding-bottom, and typically has a 32px bottom margin to separate from content.

### Body Paragraph

**Role:** Standard text content

Ink Black (#222222) text at 16px, 400 weight, with a line height of 1.5. Uses a 16px bottom margin to separate paragraphs.

## Do's and Don'ts

### Do

- Prioritize a stark high-contrast aesthetic: use Ink Black (#222222) for text and Canvas White (#ffffff) for backgrounds.
- Accent interactive elements only with True Blue (#0000ff) for borders, text on hover, and active states. Do not fill buttons with solid color.
- Maintain generous vertical spacing between content sections, typically 64px, to ensure a comfortable density.
- Employ system fonts (-apple-system) for all text to achieve a native, performant user experience.
- Keep all border radii at 0px unless specified for a particular brand graphic or image container, maintaining a sharp, angular aesthetic.
- Use decorative line graphics in Path Gold (#fcd669) and Path Orange (#f79a59) sparsely and only to partition content blocks or add abstract visual interest without acting as functional UI.
- Apply subtle `box-shadow: 0 0 0 5px #000080` to select image frames for a distinct, tinted visual lift.

### Don't

- Avoid decorative gradients or heavy drop shadows on UI elements; the design emphasizes flatness and clarity.
- Do not introduce new colors beyond the defined palette for UI elements; color is reserved for distinct functional roles and specified decorative graphics.
- Avoid overly complex layouts or grid structures; prefer single-column content flow with clear headings and ample white space.
- Do not use highly expressive or decorative fonts; stick to the system sans-serif for all text.
- Do not use filled buttons as primary actions; always prefer outlined or text links with True Blue (#0000ff) as the highlight.
- Do not use rounded corners on cards, buttons, or inputs; maintain sharp, rectangular forms.

## Elevation

- **Image Frame:** `0 0 0 5px #000080`

## Imagery

The site uses a combination of focused product screenshots, often presented within device mockups (like the iPhone frame with a blue border). Abstract geometric illustrations, with sharp angles and layered shapes in various blues and violets (e.g., #276baa, #2181c2, #52b2f2, #555abf, #43458b, #32325d, #7795f8, #87bbfd, #6772e5), are used as decorative background elements, often diagonally segmented and paired with dynamic orange and gold path lines. Iconography is minimalist, often monochrome, and embedded directly into the UI. Imagery serves both to explain product work and to provide abstract visual breaks, keeping the overall density balanced between text and visual information.

## Similar Brands

- **Stripe (older design)** — High-contrast text on bright backgrounds, a focus on system fonts, and measured use of a primary accent color for links and outlined elements.
- **Linear** — Minimalist UI, emphasis on precise typography, and a preference for functionality over decorative elements.
- **Figma** — Clear, direct information architecture, high legibility, and a primarily achromatic UI with deliberate, functional color accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #222222;
  --color-ash-grey: #d8d4cf;
  --color-true-blue: #0000ff;
  --color-deep-violet: #555abf;
  --color-path-gold: #fcd669;
  --color-path-orange: #f79a59;
  --color-shaded-navy: #000080;
  --font-apple-system: '-apple-system', system-ui;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-32: 32px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-135: 135px;
  --spacing-225: 225px;
  --spacing-297: 297px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #222222;
  --color-ash-grey: #d8d4cf;
  --color-true-blue: #0000ff;
  --color-deep-violet: #555abf;
  --color-path-gold: #fcd669;
  --color-path-orange: #f79a59;
  --color-shaded-navy: #000080;
  --font-apple-system: '-apple-system', system-ui;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-32: 32px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-135: 135px;
  --spacing-225: 225px;
  --spacing-297: 297px;
  --radius-default: 0px;
}
```
