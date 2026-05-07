---
version: alpha
name: "Nofilter.space"
description: "Nofilter.space employs a stark, almost brutalist typographic aesthetic, resembling a digital broadsheet. Its visual system relies heavily on high-contrast black text on white backgrounds, framed by bold, architectural lines. Content is organized with clear visual boundaries rather than soft hierarchies, using strong borders and ample negative space to define sections and cards. The overall impression is one of raw information delivery, devoid of visual embellishment."
theme: "light"
industry: "media"
source_url: "https://www.nofilter.space"
refero_style_id: "4235ebdc-a070-46ef-abbf-692151449bea"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517238829-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517238829-thumb.jpg"
extracted_at: "2026-04-30T02:47:33.548Z"
---

# Nofilter.space — Style Reference

> Architectural grid on newsprint.

**Theme:** light

**Industry:** media

Nofilter.space employs a stark, almost brutalist typographic aesthetic, resembling a digital broadsheet. Its visual system relies heavily on high-contrast black text on white backgrounds, framed by bold, architectural lines. Content is organized with clear visual boundaries rather than soft hierarchies, using strong borders and ample negative space to define sections and cards. The overall impression is one of raw information delivery, devoid of visual embellishment.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, surface accents |
| Headline Black | #000000 | `--color-headline-black` | Prominent headlines, strong borders for structural elements |
| Ink Gray | #333333 | `--color-ink-gray` | Primary text, secondary headlines, link borders, and subtle accent details |

## Tokens — Typography

### Pragmatica

- **Token:** `--font-pragmatica`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 15px, 24px, 30px, 35px
- **Line heights:** 1.14, 1.17, 1.25, 1.47, 2.50
- **Letter spacing:** normal
- **Role:** The singular typeface for all content. Its consistent weight reinforces the utilitarian, direct tone, with size changes solely driving hierarchy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.14 | — | `--text-caption` |
| body | 15px | 1.17 | — | `--text-body` |
| subheading | 24px | 1.25 | — | `--text-subheading` |
| heading | 30px | 1.47 | — | `--text-heading` |
| display | 35px | 2.5 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-60 | 60px | `--spacing-60` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Navigation Link

**Role:** Primary site navigation items.

Pragmatica 400, 15px font-size, Ink Gray (#333333) text, with an implicit 4px top padding and 20px of padding on the right, no border-radius. Active state indicated by a 1px solid Ink Gray (#333333) bottom border.

### Basic Content Card

**Role:** Container for articles and visual content.

White background, with a 1px solid Ink Gray (#333333) border on its bottom edge when part of a grid, or a 1px solid Headline Black (#000000) border defining its full perimeter for standalone featured cards. No border-radius. Internal padding applied at 20px.

### Editorial Header

**Role:** Headline for articles and sections.

Pragmatica 400, Headline Black (#000000), typically 30px or 35px. Presented without visual embellishment, often followed by meta-information.

### Meta Info Text

**Role:** Author and date information.

Pragmatica 400, 12px font-size, Ink Gray (#333333) color.

### Image Card

**Role:** Display of visual content.

Images are presented without border or radius, directly abutting text or other cards, often filling available horizontal space. They enforce a 1px solid Ink Gray (#333333) border around the implied content area.

### Nav Checkbox

**Role:** Minimalistic checkbox for navigation filters.

A 1px solid Ink Gray (#333333) square with 0px radius. Checked state implies a subtle visual fill not explicitly captured in token data but visually distinct from unchecked state.

## Do's and Don'ts

### Do

- Use Pragmatica 400 for all text elements.
- Maintain a high contrast ratio with black text on white backgrounds; use #000000 for headlines and #333333 for body text.
- Define content areas using 1px solid borders, primarily #333333, with #000000 for primary structural divisions.
- Prioritize explicit spacing values like 10px for element gaps and 60px for section gaps to create distinct content blocks.
- Ensure all interactive elements, like navigation links, respond with a subtle border, such as a 1px solid #333333 bottom border for active or hovered states.
- Utilize 0px border-radius explicitly for all components, enforcing a sharp, architectural edge.
- Present imagery as unstyled rectangles, allowing its content to speak without UI embellishment, often bounded by implied 1px #333333 borders.

### Don't

- Avoid using any colors other than Canvas White (#ffffff), Headline Black (#000000), and Ink Gray (#333333).
- Do not apply any border-radius greater than 0px to any elements.
- Refrain from using shadows or gradients; the system relies on flat surfaces and hard lines.
- Do not introduce decorative elements or iconography that deviates from the monochromatic, line-drawn aesthetic.
- Do not vary font weights; stick strictly to Pragmatica 400 for all text.
- Avoid soft padding or margin values that create vague boundaries; use precise, consistent measured spacing like 10px and 20px.
- Do not use subtle background tints for cards or sections; rely on Canvas White as the sole background.

## Similar Brands

- **Are.na** — Grid-based content organization, heavy reliance on white space, minimal decoration, and a focus on raw content presentation with strong borders.
- **The NYT Magazine** — Strong editorial typography, high-contrast black and white aesthetic, and a sense of 'content-first' design with structured grid layouts.
- **Manual** — Brutalist typographic approach, black and white color scheme, and an emphasis on architectural precision in layout and spacing.
- **AIGA Eye on Design** — Modern editorial aesthetic, bold use of typography for hierarchy, and a structured, somewhat sparse layout emphasizing visual content.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-headline-black: #000000;
  --color-ink-gray: #333333;
  --font-pragmatica: 'Pragmatica', Inter;
  --text-caption: 12px;
  --leading-caption: 1.14;
  --text-body: 15px;
  --leading-body: 1.17;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading: 30px;
  --leading-heading: 1.47;
  --text-display: 35px;
  --leading-display: 2.5;
  --spacing-4: 4px;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-headline-black: #000000;
  --color-ink-gray: #333333;
  --font-pragmatica: 'Pragmatica', Inter;
  --text-caption: 12px;
  --leading-caption: 1.14;
  --text-body: 15px;
  --leading-body: 1.17;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading: 30px;
  --leading-heading: 1.47;
  --text-display: 35px;
  --leading-display: 2.5;
  --spacing-4: 4px;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --radius-none: 0px;
}
```
