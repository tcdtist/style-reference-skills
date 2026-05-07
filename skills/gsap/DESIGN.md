---
version: alpha
name: "Gsap"
description: "GSAP uses a dynamic 'dark playground' aesthetic, where a deep black canvas provides a dramatic stage for vibrant, evolving highlight colors and bold, unconventional typography. The system emphasizes clear content hierarchy through stark contrast, with interactive elements outlined in subtle, near-white tones rather than filled. The overall impression is one of sophisticated, high-performance tooling for creative animation."
theme: "dark"
industry: "devtools"
source_url: "https://gsap.com"
refero_style_id: "00537a20-e99e-4ef2-b119-c6f532c44cc9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509454607-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509454607-thumb.jpg"
extracted_at: "2026-04-30T00:37:59.738Z"
---

# Gsap — Style Reference

> Midnight kinetic canvas

**Theme:** dark

**Industry:** devtools

GSAP uses a dynamic 'dark playground' aesthetic, where a deep black canvas provides a dramatic stage for vibrant, evolving highlight colors and bold, unconventional typography. The system emphasizes clear content hierarchy through stark contrast, with interactive elements outlined in subtle, near-white tones rather than filled. The overall impression is one of sophisticated, high-performance tooling for creative animation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #0e100f | `--color-absolute-zero` | Page background, primary surface color, neutral text on bright surfaces |
| Frosted Canvas | #fffce1 | `--color-frosted-canvas` | Primary text, outlined button borders, key interactive elements, secondary surface color for contrast |
| Faded Steel | #7c7c6f | `--color-faded-steel` | Muted text, secondary navigation items, subtle borders, inactive icons |
| Deep Graphite | #42433d | `--color-deep-graphite` | Delineators and subtle borders on Frosted Canvas surfaces |
| Neon Pink | #fec5fb | `--color-neon-pink` | Decorative accents, text highlights, graphic elements, section dividers |
| Fiery Orange | #ff8709 | `--color-fiery-orange` | Decorative accents, text highlights, graphic elements |
| Shocking Green | #0ae448 | `--color-shocking-green` | Green outline accent for tags, dividers, and focused UI edges; Used for hero banners and vibrant background fills, signifying energy and dynamism |
| Digital Violet | #9d95ff | `--color-digital-violet` | Decorative accents, text highlights, graphic elements |
| Aqua Glow | #00bae2 | `--color-aqua-glow` | Decorative accents, text highlights, graphic elements |
| Mint Burst | #abff84 | `--color-mint-burst` | Decorative accents, text highlights, graphic elements |

## Tokens — Typography

### Mori

- **Token:** `--font-mori`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 600
- **Sizes:** 14px, 16px, 17px, 18px, 19px, 20px, 21px, 23px, 24px, 32px, 33px, 34px, 40px, 44px, 66px, 76px, 89px, 101px, 224px
- **Line heights:** 1.00, 1.05, 1.15, 1.20, 1.38, 1.40
- **Letter spacing:** -4.48, -2.02, -1.78, -1.52, -1.32, -0.88, -0.8, -0.68, -0.66, -0.64, -0.24, -0.23, -0.21, -0.2, -0.19, -0.18, -0.17, -0.16, -0.14
- **Role:** All text roles: headings, body copy, navigation, buttons. Its geometric sans-serif shapes and precise tracking define the brand's sharp, technical yet playful voice, especially at large display sizes with significant negative tracking.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.4 | -0.14px | `--text-caption` |
| body-sm | 16px | 1.4 | -0.16px | `--text-body-sm` |
| body | 18px | 1.4 | -0.18px | `--text-body` |
| subheading | 24px | 1.38 | -0.24px | `--text-subheading` |
| heading-sm | 32px | 1.2 | -0.64px | `--text-heading-sm` |
| heading | 44px | 1.15 | -0.88px | `--text-heading` |
| heading-lg | 66px | 1.05 | -1.32px | `--text-heading-lg` |
| display | 224px | 0.9 | -4.48px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-119 | 119px | `--spacing-119` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 100px |
| buttons | 100px |
| default | 8px |
| dividers | 1px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 34px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Pill Ghost Button

**Role:** Primary action button

Text in Frosted Canvas (#fffce1), with a Frosted Canvas border (#fffce1) of 1px, and a 100px border-radius, giving it a pill shape. Padding is 15px vertical, 24px horizontal. No background fill.

### Text Only Button

**Role:** Secondary action or navigation link

Text in Faded Steel (#7c7c6f), with no border or background. Padding is 16px vertical, 0px horizontal. Typically used for internal navigation or less prominent actions.

### Icon Only Button

**Role:** Tertiary action or purely decorative icon button

Frosted Canvas (#fffce1) icon, with no border or background, and a 50% border-radius for a circular shape. Zero padding, used mainly for functional icons rather than text labels.

### Internal Link Nav Item

**Role:** Navigation links

Text in Frosted Canvas (#fffce1), no background, no border, uses 100px border radius for its hit area. Padding 15px vertically, 24px horizontally.

### Branded Section Card

**Role:** Container for product features or content sections

Background is Absolute Zero (#0e100f). Features an 8px border-radius, with varying accent border colors like Neon Pink or Fiery Orange, and a 2px stroke. Internal padding of 16px.

## Do's and Don'ts

### Do

- Use Absolute Zero (#0e100f) as the default background for all pages and primary content sections.
- Prioritize Frosted Canvas (#fffce1) for all primary text and interactive elements to ensure high contrast on dark backgrounds.
- Apply Mori font with variable letter-spacing, using the tighter tracking values for larger display text (e.g., -0.0200em for 224px display text) and standard tracking for body copy.
- Employ the 100px border-radius for all primary buttons and navigation items to maintain a distinct pill-shaped interactive element.
- Integrate brand accent colors (Neon Pink, Fiery Orange, Shocking Green, Digital Violet, Aqua Glow, Mint Burst) in graphical elements, animated components, and section highlights using 2px borders.
- Maintain a comfortable density with element gaps typically at 16px, and card padding at 16px for content blocks.
- Outline interactive elements like buttons and input fields rather than filling them, using Frosted Canvas (#fffce1) for borders to keep the primary background clean.

### Don't

- Avoid using solid background fills for primary action buttons; instead, opt for outlined styles with Frosted Canvas borders.
- Do not introduce new color palettes; stick to the defined brand accents and neutral scale.
- Never use generic square or rounded-square buttons; all primary interactive elements should leverage the 100px border-radius for the signature pill shape.
- Resist adding unnecessary elevation or shadows; the design relies on flat surfaces and vibrant color outlines for visual interest.
- Do not deviate from the Mori font or introduce other font families; all textual content must use Mori to maintain brand consistency.
- Avoid overly bright or light background sections; the design system is anchored in a dark theme where brighter elements serve as accents.
- Do not use generic gray text for headlines or section titles; they should always be Frosted Canvas (#fffce1) or a specific brand accent color for emphasis.

## Similar Brands

- **Framer** — Fluid, interactive dark UI with a focus on animation and dynamic elements, using bold typography.
- **Lumen5** — Prominent use of dark backgrounds with bright, colorful highlights in illustrations and UI elements.
- ** spline.design** — Emphasis on 3D/abstract graphics and a darker UI to highlight creative tools.
- **Webflow** — Clean, contemporary design with a strong focus on typography and subtle interactive elements on a dark canvas, often with a hint of energetic accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #0e100f;
  --color-frosted-canvas: #fffce1;
  --color-faded-steel: #7c7c6f;
  --color-deep-graphite: #42433d;
  --color-neon-pink: #fec5fb;
  --color-fiery-orange: #ff8709;
  --color-shocking-green: #0ae448;
  --color-digital-violet: #9d95ff;
  --color-aqua-glow: #00bae2;
  --color-mint-burst: #abff84;
  --font-mori: 'Mori', system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: -0.14px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.16px;
  --text-body: 18px;
  --leading-body: 1.4;
  --tracking-body: -0.18px;
  --text-subheading: 24px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.24px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.64px;
  --text-heading: 44px;
  --leading-heading: 1.15;
  --tracking-heading: -0.88px;
  --text-heading-lg: 66px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -1.32px;
  --text-display: 224px;
  --leading-display: 0.9;
  --tracking-display: -4.48px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-41: 41px;
  --spacing-43: 43px;
  --spacing-49: 49px;
  --spacing-54: 54px;
  --spacing-59: 59px;
  --spacing-65: 65px;
  --spacing-76: 76px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-110: 110px;
  --spacing-119: 119px;
  --radius-tags: 100px;
  --radius-buttons: 100px;
  --radius-default: 8px;
  --radius-dividers: 1px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #0e100f;
  --color-frosted-canvas: #fffce1;
  --color-faded-steel: #7c7c6f;
  --color-deep-graphite: #42433d;
  --color-neon-pink: #fec5fb;
  --color-fiery-orange: #ff8709;
  --color-shocking-green: #0ae448;
  --color-digital-violet: #9d95ff;
  --color-aqua-glow: #00bae2;
  --color-mint-burst: #abff84;
  --font-mori: 'Mori', system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: -0.14px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.16px;
  --text-body: 18px;
  --leading-body: 1.4;
  --tracking-body: -0.18px;
  --text-subheading: 24px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.24px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.64px;
  --text-heading: 44px;
  --leading-heading: 1.15;
  --tracking-heading: -0.88px;
  --text-heading-lg: 66px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -1.32px;
  --text-display: 224px;
  --leading-display: 0.9;
  --tracking-display: -4.48px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-41: 41px;
  --spacing-43: 43px;
  --spacing-49: 49px;
  --spacing-54: 54px;
  --spacing-59: 59px;
  --spacing-65: 65px;
  --spacing-76: 76px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-110: 110px;
  --spacing-119: 119px;
  --radius-tags: 100px;
  --radius-buttons: 100px;
  --radius-default: 8px;
  --radius-dividers: 1px;
}
```
