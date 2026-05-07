---
version: alpha
name: "Endless"
description: "This system projects an academic, almost clinical, precision with its sparse layout and strict monochrome palette. The design balances significant negative space with dense, information-rich text blocks, reminiscent of a research paper's appendix. Inter's subtle letter-spacing adjustments, especially noticeable at smaller text sizes, carve out readable blocks, contrasting with the bold visual statements of fluid, almost psychedelic, gradients used in portfolio showcases. The singular design choice is the use of perfectly circular 9999px pill buttons, offering the only soft, organic shape in an otherwise angular and purely functional interface."
theme: "light"
industry: "design"
source_url: "https://endless.design"
refero_style_id: "da316896-0121-433a-8188-e785ce7eac68"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923955749-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923955749-thumb.jpg"
extracted_at: "2026-04-11T16:12:52.773Z"
---

# Endless — Style Reference

> Academic monograph on a clean desk. Information density without visual clutter, framed by stark black and white.

**Theme:** light

**Industry:** design

This system projects an academic, almost clinical, precision with its sparse layout and strict monochrome palette. The design balances significant negative space with dense, information-rich text blocks, reminiscent of a research paper's appendix. Inter's subtle letter-spacing adjustments, especially noticeable at smaller text sizes, carve out readable blocks, contrasting with the bold visual statements of fluid, almost psychedelic, gradients used in portfolio showcases. The singular design choice is the use of perfectly circular 9999px pill buttons, offering the only soft, organic shape in an otherwise angular and purely functional interface.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #000000 | `--color-ink` | Primary text, headings, button background, critical UI borders. The dominant dark element, providing visual weight. |
| Graphite | #737373 | `--color-graphite` | Secondary text, navigation items, subtle borders. Establishes hierarchy and softens strict black without introducing color. |
| Canvas | #ffffff | `--color-canvas` | Page background, primary surface color, text on dark buttons. The pervasive white creates an open, almost stark, environment. |
| Ghost | #f5f5f5 | `--color-ghost` | Subtle button background for secondary actions. A very light gray providing a hint of separation without adding visual noise. |
| Charcoal | #0a0a0a | `--color-charcoal` | Button background for primary actions. A slightly lighter black than 'Ink', offering a subtle variation for interactive elements. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 14px, 16px, 22px
- **Line heights:** 1.25, 1.43
- **Letter spacing:** -0.238, -0.24, -0.242
- **Role:** The sole typeface, Inter, handles all text roles. Its neutral, highly legible geometry at weight 400 is signature, emphasizing content over decorative flair.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | -0.238px | `--text-caption` |
| body | 16px | 1.43 | -0.24px | `--text-body` |
| heading-sm | 22px | 1.25 | -0.242px | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-32 | 32px | `--spacing-32` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 9999px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 950px |
| sectionGap | 32px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Text Block with Client List

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Services & Pricing Info Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Interactive element

A pill-shaped button with 'Charcoal' (#0a0a0a) background, 'Canvas' (#ffffff) text, and 'Canvas' (#ffffff) border, indicating a primary call to action. Padding is 0px vertical, 12px horizontal. Text is Inter 16px, 400 weight.

### Secondary Action Button

**Role:** Interactive element

A pill-shaped button with 'Ghost' (#f5f5f5) background, 'Ink' (#000000) text, and 'Ink' (#000000) border. This variant signals a less emphatic action. Padding is 0px vertical, 12px horizontal. Text is Inter 16px, 400 weight.

### Navigation Link

**Role:** Navigation element

Text link using 'Ink' (#000000) for standard state and 'Graphite' (#737373) for inactive or less prominent items. Uses Inter 14px, 400 weight.

### Main Heading

**Role:** Headline

Headline text using 'Ink' (#000000), Inter 22px, 400 weight, with a tight lineHeight of 1.25 and letter-spacing -0.242px, making it precise and compact.

### Body Text

**Role:** Content

General body text primarily in 'Ink' (#000000), utilizing Inter 16px, 400 weight, with a lineHeight of 1.43 and letter-spacing -0.24px for readability in information-dense blocks.

### Caption/Utility Text

**Role:** Supporting content

Smaller descriptive text, often in 'Graphite' (#737373), using Inter 14px, 400 weight, with lineHeight 1.43 and letter-spacing -0.238px for detailed information.

## Do's and Don'ts

### Do

- Prioritize 'Ink' (#000000) for all primary text and critical UI elements, ensuring maximum contrast against 'Canvas' (#ffffff).
- Maintain a maximal radius of 9999px for all interactive buttons or tags, creating a distinct pill shape.
- Utilize Inter at weight 400 for all typography, adjusting size and letter-spacing (-0.238px to -0.242px) to define hierarchy, not weight variation.
- Employ 'Graphite' (#737373) specifically for secondary information or subdued interactive states, adhering to its moderate contrast.
- Adhere to the compact spacing system, using 2px, 4px, 6px, 8px, 12px, 16px, 20px, and 32px increments to create dense but organized layouts.

### Don't

- Do not introduce additional font weights or families; Inter 400 is the only typeface.
- Avoid using saturated colors in the main UI; restrict color to embedded portfolio imagery or gradients.
- Do not deviate from the pill shape (9999px radius) for buttons; all other elements should retain sharp 0px corners, or very subtle rounding where necessary for images.
- Do not use generic box shadows or elevation; depth should be created through color contrast and layered gradients within content blocks, not UI chrome.
- Do not use letter-spacing values outside the established -0.011em to -0.017em range; tight tracking is a signature element.

## Imagery

The visual language is split: the UI itself is text-dominant with no decorative imagery, focusing on pure content. However, portfolio showcases prominently feature vibrant, abstract, swirling gradient backgrounds with product screenshots or logos superimposed. These are full-bleed within their card containers, often featuring soft, organic color blends that stand in stark contrast to the monochrome UI. The imagery serves as a 'window' into client work, visually rich but isolated from the functional interface.

## Layout

The page adheres to a max-width of 950px, centered on a 'Canvas' (#ffffff) background. The hero section is a minimal, left-aligned text column with a bold headline. Content primarily flows in a single column, with occasionally split sections (e.g., client lists). Information is densified through tight line heights and compact block elements, creating a sense of a packed, highly organized document. Navigation is a simple top-left set of text links, maintaining a subdued presence.

## Similar Brands

- **Linear** — Shares a monochromatic, text-focused UI with precise typography and a strong emphasis on content over decorative elements.
- **Stripe (Docs)** — Features dense, information-heavy layouts within a narrow max-width, using a clean, systematic approach to typography and spacing.
- **Contra** — Similar use of pill-shaped buttons and a general minimalist aesthetic, though Contra uses more accent colors.
- **Framer** — Employs an almost academic rigor in layout and typography, with a bias towards functional, clean design and minimal color.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #000000;
  --color-graphite: #737373;
  --color-canvas: #ffffff;
  --color-ghost: #f5f5f5;
  --color-charcoal: #0a0a0a;
  --font-inter: 'Inter', system-ui;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: -0.238px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: -0.24px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.242px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --radius-buttons: 9999px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #000000;
  --color-graphite: #737373;
  --color-canvas: #ffffff;
  --color-ghost: #f5f5f5;
  --color-charcoal: #0a0a0a;
  --font-inter: 'Inter', system-ui;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: -0.238px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: -0.24px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.242px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --radius-buttons: 9999px;
  --radius-default: 0px;
}
```
