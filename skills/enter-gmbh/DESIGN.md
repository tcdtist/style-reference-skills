---
version: alpha
name: "Enter GmbH"
description: "Enter GmbH presents a bold, utilitarian aesthetic marked by high-contrast typography and a distinct lack of decorative elements. The visual system operates on contrasting surfaces of muted and vibrant hues, with a focus on clear, unembellished communication. Components are straightforward, featuring strong outlines and full-block backgrounds, reinforcing a sense of directness and functional clarity."
theme: "light"
industry: "other"
source_url: "https://enter-support.de"
refero_style_id: "87da9872-f6cc-4354-bf6a-1c02f0394d45"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520733758-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520733758-thumb.jpg"
extracted_at: "2026-04-30T03:45:50.431Z"
---

# Enter GmbH — Style Reference

> High-contrast functional block

**Theme:** light

**Industry:** other

Enter GmbH presents a bold, utilitarian aesthetic marked by high-contrast typography and a distinct lack of decorative elements. The visual system operates on contrasting surfaces of muted and vibrant hues, with a focus on clear, unembellished communication. Components are straightforward, featuring strong outlines and full-block backgrounds, reinforcing a sense of directness and functional clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ocean Mist | #a5d3d4 | `--color-ocean-mist` | Primary page background — a cool, muted base that allows energetic accents to pop |
| Warm Canvas | #f9f8ea | `--color-warm-canvas` | Secondary surface background, providing subtle warmth for content sections |
| Pure White | #ffffff | `--color-pure-white` | Foreground elements and text for maximum contrast on darker surfaces |
| Charcoal Black | #000000 | `--color-charcoal-black` | Primary text, borders, and icons — the dominant dark color providing strong contrast |
| Graphite | #282828 | `--color-graphite` | Button backgrounds and footer background — a slightly softer dark for layered elements |
| Muted Stone | #6a6a6a | `--color-muted-stone` | Hairline borders and subtle dividers |
| Flame Orange | #ff5000 | `--color-flame-orange` | Decorative highlights, impactful section backgrounds, and a key brand accent color |

## Tokens — Typography

### Helvetica

- **Token:** `--font-helvetica`
- **Substitute:** Arial
- **Weights:** 400, 700
- **Sizes:** 10px
- **Line heights:** 1.15
- **Role:** System font for utility text, navigation items, and small labels, leveraging built-in readability for functional roles.

### Maax Mono

- **Token:** `--font-maax-mono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.50, 1.60
- **Role:** Primary body and descriptive text, chosen for a technical, precise, and understated corporate voice.

### Sofia-Regular

- **Token:** `--font-sofia-regular`
- **Substitute:** Work Sans
- **Weights:** 400
- **Sizes:** 28px
- **Line heights:** 1.29, 1.36
- **Role:** Distinctive headlines and section titles, providing a touch of stylized uniqueness while maintaining legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.15 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| heading | 28px | 1.29 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 25px |
| buttons | 25px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 13px |
| elementGap | 24px |

## Components

### Primary Action Button

**Role:** Interactive element for key user actions.

Solid Graphite (#282828) background with Pure White (#ffffff) text. Features a 25px border-radius, creating a pill-like shape. Padding is 13px vertically and dynamically 13-25px horizontally. Text uses Helvetica 10px weight 400.

### Navigation Link

**Role:** Top-level navigation items.

Inline text in Helvetica 10px weight 400. In an active state, it may have a 1px solid Charcoal Black (#000000) border-bottom or hover interaction.

### Decorative Text Link

**Role:** Subtle links within body content or lists.

Appears as Maax Mono 16px text with an implicit hover effect, indicated by a visual arrow or border on interaction. Uses Charcoal Black (#000000) text.

### News Banner

**Role:** Informational banner at the top of the page.

Uses a white background (#ffffff) with black text (#000000). Text in Helvetica 10px weight 400.

## Do's and Don'ts

### Do

- Always use Charcoal Black (#000000) for primary text on light backgrounds for maximum contrast.
- Apply 25px border-radius to all interactive buttons and prominent links.
- Use Maax Mono at 16px with 1.5 line height for all extended body copy.
- Employ Flame Orange (#ff5000) sparingly for high-impact section backgrounds or decorative accents to draw attention.
- Maintain a comfortable density with element gaps typically at 24px and card padding at 13px.
- Contrast bold, solid Graphite (#282828) buttons with Pure White (#ffffff) text.
- Leverage the cool Ocean Mist (#a5d3d4) or warm Warm Canvas (#f9f8ea) for distinct full-width section backgrounds.

### Don't

- Do not introduce gradients or soft shadows; the design relies on flat, high-contrast elements.
- Avoid using more than two distinct font families on a single page, adhering to Helvetica, Maax Mono, and Sofia-Regular.
- Do not use subtle color variations for interactive states; rely on direct changes in background, border, or text color.
- Do not use descriptive words like 'click here' – always make the link target clear.
- Refrain from using thin fonts or light greys for critical information, as legibility is prioritized through high contrast.
- Do not mix border radii values; consistently apply 25px for interactive elements and none for block content.
- Avoid excessive imagery; the visual identity is driven by bold color blocks and typography.

## Imagery

The visual language predominantly features abstract, geometric illustrations with a stark, blocky style. These are typically simple shapes in Charcoal Black, Flame Orange, and Pure White, serving as decorative atmosphere rather than content explanation. Imagery serves a bold, graphic purpose, providing visual anchors in an otherwise text-dominant layout. There is a minimal use of icons, which are outlined and in Charcoal Black.

## Layout

The page maintains a contained maximum width for text content, but sections frequently employ full-bleed background colors for visual impact. The hero section uses a full-bleed Ocean Mist background with abstract illustrations, centered body text, and a distinct link below. Section rhythm alternates between muted (Ocean Mist, Warm Canvas) and vibrant (Flame Orange) full-width color blocks. Content arrangement is primarily centered stacks of text, with some two-column text and link patterns. Navigation is a minimalist sticky top bar with a 'Support' button and a 'plus' icon acting as a menu toggle.

## Similar Brands

- **Basecamp** — Shares a utilitarian, no-frills aesthetic with strong typography and solid color blocks, prioritizing function over elaborate design.
- **HEY.com** — Features a direct, unembellished approach to UI, contrasting vibrant accents against neutral backgrounds and using custom, distinct typography.
- **37signals** — Similar focus on robust, functional design, clear hierarchy through high-contrast text, and a limited, impactful color palette.
- **Stripe (early versions)** — Exhibited a clean, geometric visual style with strong typography and minimal decorative elements, using color strategically for emphasis.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ocean-mist: #a5d3d4;
  --color-warm-canvas: #f9f8ea;
  --color-pure-white: #ffffff;
  --color-charcoal-black: #000000;
  --color-graphite: #282828;
  --color-muted-stone: #6a6a6a;
  --color-flame-orange: #ff5000;
  --font-helvetica: 'Helvetica', Arial;
  --font-maax-mono: 'Maax Mono', Space Mono;
  --font-sofia-regular: 'Sofia-Regular', Work Sans;
  --text-caption: 10px;
  --leading-caption: 1.15;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading: 28px;
  --leading-heading: 1.29;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --radius-links: 25px;
  --radius-buttons: 25px;
}
```

### Tailwind v4

```css
@theme {
  --color-ocean-mist: #a5d3d4;
  --color-warm-canvas: #f9f8ea;
  --color-pure-white: #ffffff;
  --color-charcoal-black: #000000;
  --color-graphite: #282828;
  --color-muted-stone: #6a6a6a;
  --color-flame-orange: #ff5000;
  --font-helvetica: 'Helvetica', Arial;
  --font-maax-mono: 'Maax Mono', Space Mono;
  --font-sofia-regular: 'Sofia-Regular', Work Sans;
  --text-caption: 10px;
  --leading-caption: 1.15;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading: 28px;
  --leading-heading: 1.29;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --radius-links: 25px;
  --radius-buttons: 25px;
}
```
