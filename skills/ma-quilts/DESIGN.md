---
version: alpha
name: "MA Quilts"
description: "MA Quilts employs a vibrant, handcrafted aesthetic with a focus on bold typography and a playful, primary color palette. The design balances generous white space with striking color blocks and outlined interactive elements. Typography is confident and uppercase for headlines, creating a distinct visual voice, while subtle dashed borders and high radius buttons add a touch of playful warmth."
theme: "light"
industry: "design"
source_url: "https://maquilts.com"
refero_style_id: "6d4ef8f4-badd-4e3c-a168-0cc89c833b26"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521315902-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521315902-thumb.jpg"
extracted_at: "2026-04-30T03:55:29.272Z"
---

# MA Quilts — Style Reference

> Joyful Quilted Canvas

**Theme:** light

**Industry:** design

MA Quilts employs a vibrant, handcrafted aesthetic with a focus on bold typography and a playful, primary color palette. The design balances generous white space with striking color blocks and outlined interactive elements. Typography is confident and uppercase for headlines, creating a distinct visual voice, while subtle dashed borders and high radius buttons add a touch of playful warmth.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page and primary surface backgrounds |
| Text Black | #000000 | `--color-text-black` | Primary body text, decorative SVG fills |
| Accent Orange | #f15a24 | `--color-accent-orange` | Orange accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Canary Yellow | #ffed8c | `--color-canary-yellow` | Section backgrounds and promotional blocks, providing a soft but clear distinction from white canvases |
| Midnight Ink | #050133 | `--color-midnight-ink` | Footer text, secondary links, and occasional outlined elements, offering deep contrast to light backgrounds |
| Secondary Text Gray | #333333 | `--color-secondary-text-gray` | Secondary text in navigation and supporting content, decorative borders for images |
| Utility Gray | #cce1e2 | `--color-utility-gray` | Decorative SVG fills, light background shading |

## Tokens — Typography

### Manrope

- **Token:** `--font-manrope`
- **Substitute:** Inter
- **Weights:** 200, 400, 700
- **Sizes:** 23px, 29px, 30px, 36px, 60px, 68px, 72px, 126px
- **Line heights:** 1.00, 1.20, 1.40, 2.00, 2.40
- **Letter spacing:** 0.0600em, 0.1200em
- **Role:** Used for all headings, buttons, and primary content. The wide range of weights and sizes with precise letter-spacing controls the visual impact, especially the large, tracked headlines.

### Roboto Mono

- **Token:** `--font-roboto-mono`
- **Substitute:** Space Mono
- **Weights:** 400, 700
- **Sizes:** 14px, 18px, 30px
- **Line heights:** 1.60, 2.00
- **Letter spacing:** normal
- **Role:** Used for body text, meta-information, and code-like elements where a monospace font conveys technical detail or a distinct voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.6 | — | `--text-caption` |
| body | 18px | 2 | — | `--text-body` |
| button | 23px | 1.2 | 0.06px | `--text-button` |
| subheading | 29px | 1.2 | — | `--text-subheading` |
| heading | 36px | 1.2 | — | `--text-heading` |
| heading-lg | 60px | 1.2 | 0.12px | `--text-heading-lg` |
| display | 126px | 1 | 0.06px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 66px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 54px |
| cardPadding | 46px |
| elementGap | 14px |

## Components

### Primary Outlined Button

**Role:** Call to action button

Text: Accent Orange, Manrope Bold, 23px. Background: transparent. Border: Accent Orange, 1px solid, 66px radius. Padding: 9px vertical, 46.08px horizontal.

### Hero Headline

**Role:** Largest display text

Font: Manrope, weight 700. Size: 126px. Color: Accent Orange. Letter spacing: 0.06em.

### Section Headline

**Role:** Major section titles

Font: Manrope, weight 700. Size: 60px. Color: Accent Orange. Letter spacing: 0.12em. Margin bottom: 35px.

### Nav Link

**Role:** Main navigation item

Font: Manrope, weight 700. Size: 23px. Color: Accent Orange. Underlined on hover.

### Image Card Footer

**Role:** Caption for product or blog post image

Font: Roboto Mono, weight 400. Size: 14px. Color: Secondary Text Gray. Dashed border for visual separation.

## Do's and Don'ts

### Do

- Use Accent Orange (#f15a24) exclusively for primary interactive elements, major headings, and brand accents.
- Maintain a clear visual hierarchy by employing Manrope for all headings with appropriate letter-spacing, and Roboto Mono for body and supporting text.
- Apply a 66px border-radius to all buttons for a consistent soft, pill-like appearance.
- Implement dashed borders (e.g., 4px dashed) for subtle visual divisions or decorative elements, particularly around image cards.
- Utilize Canvas White (#ffffff) as the dominant background, balanced with Canary Yellow (#ffed8c) for distinct section breaks or focused content blocks.
- Ensure generous spacing around all components; an `elementGap` of 14px is a good default.
- Adopt an uppercase style for all significant headings using Manrope to reinforce the system's bold typographic identity.

### Don't

- Do not introduce new primary action colors; Accent Orange (#f15a24) serves this role through its outlined usage.
- Avoid using solid background fills for buttons; prefer the outlined style with Accent Orange borders.
- Do not deviate from the Manrope and Roboto Mono font families for text content.
- Avoid tight spacing between elements; maintain adequate `elementGap` and `cardPadding` to prevent a cramped appearance.
- Do not use shadows for elevation; the design system relies on color blocks, borders, and spacing for visual hierarchy instead.
- Do not use generic system fonts; always specify Manrope or Roboto Mono.
- Avoid using full-bleed imagery without surrounding white space; images should feel contained within the layout.

## Imagery

The site heavily features product photography of textile art (quilts and quilted coats). These images are tightly cropped, showcasing patterns and textures, often against solid, contrasting backgrounds like pale pink. The photography is clean, well-lit, and product-focused, with no lifestyle elements. Icons are minimal, represented by the custom 'MA' logo in the header, suggesting a clean, graphic approach. The overall density is balanced, allowing the product visuals to speak for themselves within a spacious layout.

## Layout

The page uses a maximum-width contained layout, with content centered. The hero section is characterized by a two-column split, with a large, bold headline on the left against a Canary Yellow background and a compelling product image on the right. Subsequent sections feature alternating text and visual content, with a clear vertical rhythm. Content is arranged in flexible grids for product displays (3-4 columns) and blog posts (3 columns). The navigation is a minimalist top bar with text links, reinforcing the clean aesthetic.

## Similar Brands

- **Etsy** — Handcrafted product focus with emphasis on product imagery and a clean, gallery-like layout.
- **Blockshop Textiles** — Uses a similar vibrant, geometric aesthetic for textile goods with bold typography and a playful color palette.
- **Studio Arhoj** — Showcases artisanal crafts with a clean background, strong product photography, and a distinct, modern typographic style.
- **Marimekko** — Bold patterns and colors are central to the brand, using clean layouts to highlight textiles and prints.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-text-black: #000000;
  --color-accent-orange: #f15a24;
  --color-canary-yellow: #ffed8c;
  --color-midnight-ink: #050133;
  --color-secondary-text-gray: #333333;
  --color-utility-gray: #cce1e2;
  --font-manrope: 'Manrope', Inter;
  --font-roboto-mono: 'Roboto Mono', Space Mono;
  --text-caption: 14px;
  --leading-caption: 1.6;
  --text-body: 18px;
  --leading-body: 2;
  --text-button: 23px;
  --leading-button: 1.2;
  --tracking-button: 0.06px;
  --text-subheading: 29px;
  --leading-subheading: 1.2;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0.12px;
  --text-display: 126px;
  --leading-display: 1;
  --tracking-display: 0.06px;
  --spacing-4: 4px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-54: 54px;
  --spacing-58: 58px;
  --spacing-66: 66px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-115: 115px;
  --spacing-192: 192px;
  --radius-buttons: 66px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-text-black: #000000;
  --color-accent-orange: #f15a24;
  --color-canary-yellow: #ffed8c;
  --color-midnight-ink: #050133;
  --color-secondary-text-gray: #333333;
  --color-utility-gray: #cce1e2;
  --font-manrope: 'Manrope', Inter;
  --font-roboto-mono: 'Roboto Mono', Space Mono;
  --text-caption: 14px;
  --leading-caption: 1.6;
  --text-body: 18px;
  --leading-body: 2;
  --text-button: 23px;
  --leading-button: 1.2;
  --tracking-button: 0.06px;
  --text-subheading: 29px;
  --leading-subheading: 1.2;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0.12px;
  --text-display: 126px;
  --leading-display: 1;
  --tracking-display: 0.06px;
  --spacing-4: 4px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-54: 54px;
  --spacing-58: 58px;
  --spacing-66: 66px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-115: 115px;
  --spacing-192: 192px;
  --radius-buttons: 66px;
}
```
