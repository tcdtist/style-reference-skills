---
version: alpha
name: "Julien Renau"
description: "Julien Renau's site establishes a stark, monochrome aesthetic with a strong emphasis on precise spacing and subtle typography. Content is presented in an architectural grid, using strong horizontal and vertical lines as visual dividers. The design relies on achromatic colors for all elements, creating a highly structured and understated presentation. Typography is compact and confidently spaced, maintaining clarity amidst the dense layout."
theme: "light"
industry: "design"
source_url: "https://julienrenau.com"
refero_style_id: "38f3a11c-ac61-40f3-934e-088d8dbb9467"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521121061-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521121061-thumb.jpg"
extracted_at: "2026-04-30T03:52:16.317Z"
---

# Julien Renau — Style Reference

> Architectural Blueprint Grid: Pure white canvas delineated by ultra-fine graphite lines, creating a structured, content-rich display.

**Theme:** light

**Industry:** design

Julien Renau's site establishes a stark, monochrome aesthetic with a strong emphasis on precise spacing and subtle typography. Content is presented in an architectural grid, using strong horizontal and vertical lines as visual dividers. The design relies on achromatic colors for all elements, creating a highly structured and understated presentation. Typography is compact and confidently spaced, maintaining clarity amidst the dense layout.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, primary surface for content blocks |
| Charcoal Text | #272727 | `--color-charcoal-text` | Primary text color for headings and body content, prominent borders for UI elements |
| Graphite Black | #000000 | `--color-graphite-black` | Strongest text contrast, prominent borders, decorative strokes, and occasional dark backgrounds for specific elements |
| Fog Gray | #ebebeb | `--color-fog-gray` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Muted Ash | #979797 | `--color-muted-ash` | Secondary text, descriptive elements, and subtle borders |
| Soft Gray | #898989 | `--color-soft-gray` | Tertiary text for helper information or less emphasized content |

## Tokens — Typography

### Founders Grotesk

- **Token:** `--font-founders-grotesk`
- **Substitute:** Inter
- **Weights:** 300, 500, 700
- **Sizes:** 16px, 22px, 45px
- **Line heights:** 1.00, 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Primary typeface for all headings and substantial body content. Its consistent weight spectrum across sizes supports structured visual hierarchy.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 16px, 24px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** System font for links, occasional labels, and fallback text, ensuring broad compatibility and readability.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 16px | 1.4 | — | `--text-caption` |
| body-sm | 22px | 1.4 | — | `--text-body-sm` |
| body | 45px | 1.3 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100px |
| cardPadding | 18px |
| elementGap | 20px |

## Components

### Section Divider Thin

**Role:** Visual separator for content sections.

A 1px solid line using Graphite Black (#000000), spanning the full width of the content area.

### Project Card Outlined

**Role:** Container for individual project descriptions.

Content area with Charcoal Text (#272727) and a 1px solid border of Charcoal Text (#272727). No border-radius. Inner padding varies to accommodate content, with observed padding-left and padding-right of 46px, padding-bottom of 18px.

### Ghost Button (Link)

**Role:** Interactive text link with hover state emphasis.

Text in Charcoal Text (#272727) with a subtle bottom border in Fog Gray (#ebebeb) that clarifies interactivity without drawing excessive attention.

### Inline Badge

**Role:** Small, informational tags appearing within content.

Text in Charcoal Text (#272727) with no background or border, serving as a clean, integrated label.

### Header Navigation Link

**Role:** Primary navigation item.

Text in Charcoal Text (#272727), often accompanied by a bottom border of 1px in Charcoal Text (#272727) or Graphite Black (#000000) for active states or emphasis.

## Do's and Don'ts

### Do

- Use Canvas White (#ffffff) as the default page background.
- Apply Charcoal Text (#272727) for all primary headings and body text.
- Utilize 1px solid borders in Charcoal Text (#272727) or Graphite Black (#000000) for all content dividers and structural elements.
- Maintain a consistent 0px border-radius for all elements, prioritizing sharpness and a structured aesthetic.
- Employ Founders Grotesk for all primary textual content, leveraging its various weights for hierarchy.
- Ensure generous horizontal padding, with at least 46px on the left and right for main content blocks.
- Space elements using a base unit of 20px, specifically for `elementGap` between components.

### Don't

- Avoid using any chromatic colors; the system is strictly achromatic.
- Do not introduce rounded corners; all elements must maintain sharp, geometric edges.
- Refrain from using shadows or elevation effects; the design relies on flat surfaces and line dividers.
- Do not deviate from the specified font families or their letter-spacing values.
- Do not use background colors on buttons or badges; interactivity is indicated by borders and text color changes only.
- Avoid decorative imagery; content is communicated primarily through text and structured layout.
- Do not break the strict grid alignment; all elements should adhere to vertical and horizontal precision.

## Imagery

The site uses no explicit decorative imagery or photography. The visual language is entirely functional, relying on plain text, lines, and subtle achromatic fills. Icons, when present, are minimalistic and line-drawn, without color. The overall impression is text-dominant and stark, focusing purely on content and structure.

## Layout

The page primarily uses a max-width contained layout, though specific section width is not explicitly fixed, it suggests a contained model. The hero section displays the name 'Julien Renau' as a large, centered text block. The section rhythm is consistent, separated by thin horizontal lines. Content is frequently presented in a stacked, centered fashion, or in two-column layouts featuring text-heavy blocks. There's a strong vertical alignment with minimal white space between dense content sections, emphasizing information density. Navigation is implied through discreet text links and likely a sticky top bar or simplified menu, not fully visible but implied by the content flow.

## Similar Brands

- **Are.na** — Monochromatic palette, strict grid layout, and emphasis on content with minimal visual adornment.
- **Linear** — Achromatic UI with sharp edges, high information density, and functional typography.
- **Stripe (early UI)** — Focus on clean lines, lack of ornamentation, and a functional, monochrome design.
- **Read.cv** — Minimalist design, strong typography, and a grid-like structure for presenting information.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-charcoal-text: #272727;
  --color-graphite-black: #000000;
  --color-fog-gray: #ebebeb;
  --color-muted-ash: #979797;
  --color-soft-gray: #898989;
  --font-founders-grotesk: 'Founders Grotesk', Inter;
  --font-sans-serif: 'sans-serif', Arial;
  --text-caption: 16px;
  --leading-caption: 1.4;
  --text-body-sm: 22px;
  --leading-body-sm: 1.4;
  --text-body: 45px;
  --leading-body: 1.3;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-44: 44px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-charcoal-text: #272727;
  --color-graphite-black: #000000;
  --color-fog-gray: #ebebeb;
  --color-muted-ash: #979797;
  --color-soft-gray: #898989;
  --font-founders-grotesk: 'Founders Grotesk', Inter;
  --font-sans-serif: 'sans-serif', Arial;
  --text-caption: 16px;
  --leading-caption: 1.4;
  --text-body-sm: 22px;
  --leading-body-sm: 1.4;
  --text-body: 45px;
  --leading-body: 1.3;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-44: 44px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --radius-default: 0px;
}
```
