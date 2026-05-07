---
version: alpha
name: "Custo"
description: "Custo presents a restrained, product-focused aesthetic, blending industrial-grade minimalism with an approachable comfort. The visual system uses achromatic tones, allowing product imagery to take center stage. Typography is clean and assertive, providing clear information without unnecessary ornamentation. Components are subtly interactive with ghosted borders and generous padding, creating an experience that feels understated yet responsive."
theme: "light"
industry: "other"
source_url: "https://custo.io"
refero_style_id: "3ad131ed-b603-49a3-9491-7407db6cb423"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513349167-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513349167-thumb.jpg"
extracted_at: "2026-04-30T01:42:50.725Z"
---

# Custo — Style Reference

> Industrial product showcase, matte gray

**Theme:** light

**Industry:** other

Custo presents a restrained, product-focused aesthetic, blending industrial-grade minimalism with an approachable comfort. The visual system uses achromatic tones, allowing product imagery to take center stage. Typography is clean and assertive, providing clear information without unnecessary ornamentation. Components are subtly interactive with ghosted borders and generous padding, creating an experience that feels understated yet responsive.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Graphite | #000000 | `--color-midnight-graphite` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button text and borders, secondary UI elements |
| Platinum Gray | #d8d8d8 | `--color-platinum-gray` | Input element borders, subtle dividers, footer borders |
| Hero Ash | #9ea29f | `--color-hero-ash` | Dominant background for hero sections, large-scale UI surfaces |
| Muted Steel | #8e9194 | `--color-muted-steel` | Secondary text, link borders when inactive, list item borders, supporting UI text |
| Lightest Slate | #a7aaad | `--color-lightest-slate` | Tertiary text, subtle borders around headings and body elements |

## Tokens — Typography

### PP Neue Montreal

- **Token:** `--font-pp-neue-montreal`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 15px, 16px, 19px, 20px, 30px, 38px, 57px
- **Line heights:** 1.00, 1.05, 1.15, 1.25, 1.38, 1.42, 1.43, 1.62
- **Letter spacing:** normal
- **OpenType features:** "kern", "liga"
- **Role:** The sole typeface, carrying all textual weight. Its consistent weight across different sizes provides a calm, authoritative voice without resorting to heavy or bold treatments, creating a uniform, technical feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 15px | 1.62 | 0px | `--text-caption` |
| subheading | 19px | 1.42 | 0px | `--text-subheading` |
| heading | 30px | 1.25 | 0px | `--text-heading` |
| heading-lg | 38px | 1.15 | 0px | `--text-heading-lg` |
| display | 57px | 1.05 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-62 | 62px | `--spacing-62` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-182 | 182px | `--spacing-182` |
| spacing-278 | 278px | `--spacing-278` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| links | 31.35px |
| inputs | 8px |
| buttons | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 110px |
| cardPadding | 20px |
| elementGap | 24px |

## Components

### Outline Accent Button

**Role:** Primary Call to Action

Ghost button with no background, 'Canvas White' text and border on dark backgrounds, or 'Midnight Graphite' on light backgrounds. No corner radius. Padding is 0.

### Contained Small Button

**Role:** Secondary Call to Action

Ghost button with no background. 'Midnight Graphite' text and border. Radius 8px. Text is 'Midnight Graphite', padding 20px vertical, 32px horizontal.

### Input Field

**Role:** Standard Data Entry

No background, 'Platinum Gray' border, 'Midnight Graphite' text. Radius 8px. Padding 20px vertical, 32px horizontal.

### Compact Input Field

**Role:** Header Search/Small Field

No background, 'Platinum Gray' border, 'Midnight Graphite' text. Radius 7px. Padding 16px vertical, 52px left, 60px right.

## Do's and Don'ts

### Do

- Prioritize achromatic colors (Midnight Graphite, Canvas White, Platinum Gray) for all UI elements to maintain a neutral, product-focused aesthetic.
- Utilize PP Neue Montreal Medium (weight 400) consistently for all text, relying on size and line-height for hierarchy rather than varied weights.
- Maintain generous vertical spacing between sections, using the 110px section gap to prevent visual clutter.
- Apply an 8px border-radius to all interactive elements like buttons and input fields to convey a soft, modern touch.
- Use 'Midnight Graphite' for primary text and 'Muted Steel' for secondary or helper text to establish clear content hierarchy.
- Frame primary call-to-action buttons as ghost buttons with contrasting borders and text, rather than solid fills, to integrate with the minimalist aesthetic.

### Don't

- Avoid introducing any additional saturated colors beyond the existing achromatic palette; color should be restricted to product imagery.
- Do not use varied font weights; all typography should use PP Neue Montreal Medium at weight 400.
- Refrain from heavy drop shadows or significant elevation; components should generally remain flat or have minimal depth.
- Do not use overly complex or decorative backgrounds; stick to solid achromatic tones or large product photography.
- Avoid tight, condensed layouts; ensure comfortable padding using the 20px card padding and 24px element gap.
- Never use solid-fill primary buttons; all primary interaction should use the ghosted border style.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Hero Ash Background | #9ea29f | Primary background for the main hero section, providing a muted foundation for product display. |
| 1 | Canvas White | #ffffff | Standard page and content section backgrounds, offering a clean, expansive substrate for information. |

## Imagery

The visual language is split between high-key, tightly cropped product photography on neutral backgrounds (Hero Ash or Canvas White) and aspirational lifestyle imagery featuring people interacting with the product in real-world settings. Product shots are typically isolated, highlighting the device as the hero. Icons are simple, outlined, monochromatic, and used functionally for navigation or feature explanation, appearing as thin strokes aligning with the minimal component style. Imagery primarily serves to showcase the product and its benefits, rather than just decorative atmosphere, occupying significant visual space in alternating sections.

## Layout

The page structure favors a full-bleed layout for hero sections, while subsequent content is often implicitly contained without explicit max-width settings, achieving a sense of spaciousness. The hero features a large product image with a contrasting achromatic background (Hero Ash), overlaid with a prominent headline. Content sections alternate between visually distinct blocks, often presenting a large headline followed by a ghosted call-to-action, or a two-column layout with product imagery on one side and text on the other. Navigation is a minimalist top bar, disappearing against the white canvas or black header, with ghosted menu items and a subtly outlined 'Order now' button. Vertical rhythm is consistent, with generous spacing between major sections.

## Similar Brands

- **Oura Ring** — Achromatic color palette, focus on clean product photography, and restrained typography for a tech product.
- **Linear** — Minimalist UI, heavy use of ghost buttons, and achromatic UI elements.
- **Apple (product pages)** — Emphasis on large-scale product imagery against neutral backgrounds, sparse text, and premium, understated feel.
- **Whoop** — Clean, predominantly grayscale aesthetic with emphasis on functionality and hardware showcases.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-graphite: #000000;
  --color-canvas-white: #ffffff;
  --color-platinum-gray: #d8d8d8;
  --color-hero-ash: #9ea29f;
  --color-muted-steel: #8e9194;
  --color-lightest-slate: #a7aaad;
  --font-pp-neue-montreal: 'PP Neue Montreal', system-ui;
  --text-caption: 15px;
  --leading-caption: 1.62;
  --tracking-caption: 0px;
  --text-subheading: 19px;
  --leading-subheading: 1.42;
  --tracking-subheading: 0px;
  --text-heading: 30px;
  --leading-heading: 1.25;
  --tracking-heading: 0px;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: 0px;
  --text-display: 57px;
  --leading-display: 1.05;
  --tracking-display: 0px;
  --spacing-5: 5px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-62: 62px;
  --spacing-76: 76px;
  --spacing-110: 110px;
  --spacing-115: 115px;
  --spacing-182: 182px;
  --spacing-278: 278px;
  --radius-cards: 8px;
  --radius-links: 31.35px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --surface-hero-ash-background: #9ea29f;
  --surface-canvas-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-graphite: #000000;
  --color-canvas-white: #ffffff;
  --color-platinum-gray: #d8d8d8;
  --color-hero-ash: #9ea29f;
  --color-muted-steel: #8e9194;
  --color-lightest-slate: #a7aaad;
  --font-pp-neue-montreal: 'PP Neue Montreal', system-ui;
  --text-caption: 15px;
  --leading-caption: 1.62;
  --tracking-caption: 0px;
  --text-subheading: 19px;
  --leading-subheading: 1.42;
  --tracking-subheading: 0px;
  --text-heading: 30px;
  --leading-heading: 1.25;
  --tracking-heading: 0px;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: 0px;
  --text-display: 57px;
  --leading-display: 1.05;
  --tracking-display: 0px;
  --spacing-5: 5px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-62: 62px;
  --spacing-76: 76px;
  --spacing-110: 110px;
  --spacing-115: 115px;
  --spacing-182: 182px;
  --spacing-278: 278px;
  --radius-cards: 8px;
  --radius-links: 31.35px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --surface-hero-ash-background: #9ea29f;
  --surface-canvas-white: #ffffff;
}
```
