---
version: alpha
name: "Vita Architecture"
description: "Vita Architecture presents a restrained, high-contrast aesthetic favoring stark monochrome with precise typographic forms. Headlines use a unique custom serif, creating an impression of classic elegance, while body text uses a clean sans-serif for legibility. The primary identity relies on black borders and text against various shades of white and very light gray, punctuated subtly by a single vivid violet for select decorative elements. The overall feel is one of considered simplicity and architectural clarity."
theme: "light"
industry: "agency"
source_url: "https://vitaarchitecture.com"
refero_style_id: "b406cea1-2f4f-4495-95f1-29868522e648"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520867260-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520867260-thumb.jpg"
extracted_at: "2026-04-30T03:48:05.021Z"
---

# Vita Architecture — Style Reference

> blueprint on vellum

**Theme:** light

**Industry:** agency

Vita Architecture presents a restrained, high-contrast aesthetic favoring stark monochrome with precise typographic forms. Headlines use a unique custom serif, creating an impression of classic elegance, while body text uses a clean sans-serif for legibility. The primary identity relies on black borders and text against various shades of white and very light gray, punctuated subtly by a single vivid violet for select decorative elements. The overall feel is one of considered simplicity and architectural clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #000000 | `--color-ink` | Primary text, borders, decorative strokes, navigation elements — establishes crisp definition against light backgrounds |
| Canvas | #fafafa | `--color-canvas` | Page background, main content surfaces — provides a bright, unobtrusive foundation |
| Light Linen | #eeeeee | `--color-light-linen` | Alternative background for sections, subtle dividers — offers visual separation without strong contrast, used for buttons |
| Horizon Violet | #5e8cff | `--color-horizon-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Hatton

- **Token:** `--font-hatton`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 48px, 55px, 125px
- **Line heights:** 1.20
- **Letter spacing:** -0.003em, -0.001em
- **Role:** Display and primary headings — a distinctive serif that conveys classic elegance and architectural gravitas through its high contrast and unique letterforms. Its subtle negative tracking adds to its sophisticated presence.

### CircularStd

- **Token:** `--font-circularstd`
- **Substitute:** Plus Jakarta Sans
- **Weights:** 400, 700
- **Sizes:** 16px, 20px, 24px, 32px
- **Line heights:** 1.00, 1.18, 1.20, 1.40, 2.79
- **Letter spacing:** -0.010em, -0.007em, -0.005em
- **Role:** Body text, navigation, and secondary headings — a highly legible sans-serif that balances the classic feel of Hatton with modern clarity. Its precise, slightly condensed tracking contributes to a refined, professional output.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.4 | -0.16px | `--text-body` |
| subheading | 20px | 1.2 | -0.14px | `--text-subheading` |
| heading-sm | 24px | 1.18 | -0.12px | `--text-heading-sm` |
| heading | 32px | 1 | -0.32px | `--text-heading` |
| display-sm | 48px | 1.2 | -0.14px | `--text-display-sm` |
| display | 55px | 1.32 | -0.16px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-207 | 207px | `--spacing-207` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 140px |
| cardPadding | 23px |
| elementGap | 15px |

## Components

### Ghost Button

**Role:** Primary Call to Action

Text-only button with Ink (#000000) color, no background, and 0px border-radius. Padding is 0px for all sides. Used for internal navigation and primary actions that require minimal visual weight.

### Subtle Background Button

**Role:** Secondary Action

Button with Light Linen (#eeeeee) background and Ink (#000000) text, 0px border-radius. Padding of 1px vertical and 6px horizontal. Used for less prominent actions, such as navigation for carousels.

### Navigation Link

**Role:** Navigation Item

Ink (#000000) text with 0px padding and 0px border-radius. Uses CircularStd font at various sizes with subtle negative letter-spacing.

## Do's and Don'ts

### Do

- Prioritize Ink (#000000) for all functional text and borders to maintain high contrast and definition.
- Use Hatton Regular for display and main headings, varying sizes according to the type scale from 48px to 125px with letter-spacing ranging -0.003em to -0.001em.
- Apply CircularStd for all body text, navigation, and secondary headings, ensuring precise letter-spacing between -0.010em and -0.005em.
- Maintain hard edges and sharp corners by consistently using a 0px border-radius for all interactive elements and containers.
- Leverage Light Linen (#eeeeee) on Canvas (#fafafa) as a subtle background shift for sections or secondary interactive elements like buttons.
- Use Horizon Violet (#5e8cff) sparingly as a decorative and highlighting accent on select heading elements only.

### Don't

- Do not introduce additional saturated colors beyond Horizon Violet (#5e8cff); maintain a monochrome base for all UI.
- Avoid using drop shadows or complex elevation; the design relies on flat surfaces and high contrast for definition.
- Do not deviate from the specified light letter-spacing for CircularStd and Hatton; precise tracking is fundamental to the typographic identity.
- Do not add rounded corners to any UI elements; the geometric precision of 0px radius is a core tenet.
- Refrain from using heavily decorative background patterns or aggressive visual noise; the system emphasizes clarity and minimalist composition.
- Do not use Horizon Violet (#5e8cff) as a primary action background or border; its role is decorative accent on text.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas | #fafafa | Primary page background and main content area. |
| 2 | Light Linen | #eeeeee | Secondary background for subtly differentiated sections or interactive elements. |

## Similar Brands

- **Figma** — High-contrast monochrome UI with minimal use of color for functional accents.
- **Stripe (early versions)** — Emphasis on elegant typography, clean lines, and a spacious layout over heavy graphical elements.
- **Apple (product pages)** — Focus on product details and clarity through high-quality visual elements on a stark, minimalist background.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #000000;
  --color-canvas: #fafafa;
  --color-light-linen: #eeeeee;
  --color-horizon-violet: #5e8cff;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-hatton: 'Hatton', Playfair Display;
  --font-circularstd: 'CircularStd', Plus Jakarta Sans;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.14px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -0.12px;
  --text-heading: 32px;
  --leading-heading: 1;
  --tracking-heading: -0.32px;
  --text-display-sm: 48px;
  --leading-display-sm: 1.2;
  --tracking-display-sm: -0.14px;
  --text-display: 55px;
  --leading-display: 1.32;
  --tracking-display: -0.16px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-75: 75px;
  --spacing-140: 140px;
  --spacing-207: 207px;
  --radius-default: 0px;
  --surface-canvas: #fafafa;
  --surface-light-linen: #eeeeee;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #000000;
  --color-canvas: #fafafa;
  --color-light-linen: #eeeeee;
  --color-horizon-violet: #5e8cff;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-hatton: 'Hatton', Playfair Display;
  --font-circularstd: 'CircularStd', Plus Jakarta Sans;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.14px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -0.12px;
  --text-heading: 32px;
  --leading-heading: 1;
  --tracking-heading: -0.32px;
  --text-display-sm: 48px;
  --leading-display-sm: 1.2;
  --tracking-display-sm: -0.14px;
  --text-display: 55px;
  --leading-display: 1.32;
  --tracking-display: -0.16px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-75: 75px;
  --spacing-140: 140px;
  --spacing-207: 207px;
  --radius-default: 0px;
  --surface-canvas: #fafafa;
  --surface-light-linen: #eeeeee;
}
```
