---
version: alpha
name: "Ferrari"
description: "This design system evokes precision engineering and focused luxury through a high-contrast, almost entirely achromatic palette. Deep blacks and stark whites create a dramatic stage for the content, focusing attention on high-performance imagery. Subtle gray variations provide surface differentiation, akin to different finishes on precision metal, rather than relying on chromatic accents for visual hierarchy. The custom typography, characterized by its wide letter-spacing, projects a sense of deliberate pacing and exclusivity, ensuring every word commands attention."
theme: "mixed"
industry: "other"
source_url: "https://ferrari.com"
refero_style_id: "80164adf-a898-4f7c-bce7-12f3f62e1649"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924835013-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924835013-thumb.jpg"
extracted_at: "2026-04-11T16:27:33.690Z"
---

# Ferrari — Style Reference

> Precision engineered machinery. Like the interior of a sleek, high-performance engine, where every component is black or silver, and only critical indicators glow red.

**Theme:** mixed

**Industry:** other

This design system evokes precision engineering and focused luxury through a high-contrast, almost entirely achromatic palette. Deep blacks and stark whites create a dramatic stage for the content, focusing attention on high-performance imagery. Subtle gray variations provide surface differentiation, akin to different finishes on precision metal, rather than relying on chromatic accents for visual hierarchy. The custom typography, characterized by its wide letter-spacing, projects a sense of deliberate pacing and exclusivity, ensuring every word commands attention.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian Black | #000000 | `--color-obsidian-black` | Page backgrounds, navigation bars, dramatic photographic backdrops for product showcases. |
| Polar White | #ffffff | `--color-polar-white` | Primary text, prominent page sections, content cards, and interactive elements – providing crisp contrast against dark backgrounds. |
| Shadow Graphite | #181818 | `--color-shadow-graphite` | Secondary text in navigation, footer elements, and subtle background shading to create depth without overt shadows. |
| Steel Gray | #303030 | `--color-steel-gray` | Minor dividers, borders, and backgrounds for less prominent UI elements, establishing a subtle hierarchy within dark themes. |
| Ash Mist | #8f8f8f | `--color-ash-mist` | Supportive text, icon fills, and subtle hints where softer contrast is desired, such as secondary information or disabled states. |
| Rosso Corsa | #FF0000 | `--color-rosso-corsa` | Accent color for interactive elements, progress indicators, underlines on active navigation items - the iconic visual signature of the brand, used sparingly for impact. |

## Tokens — Typography

### custom

- **Token:** `--font-custom`
- **Substitute:** Arial, Helvetica, sans-serif
- **Sizes:** 11px, 12px, 13px
- **Line heights:** 1.27, 1.50, 1.78, 2.00
- **Letter spacing:** 0.0150em, 0.0220em, 0.0280em, 0.0830em, 0.0910em
- **Role:** Primary typeface for all body text, navigational links, buttons, and footers. The intentional wide letter-spacing across all sizes is a distinctive characteristic, giving each word room to breathe and contributing to the premium, measured feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.78 | — | `--text-caption` |
| body-sm | 12px | 1.78 | — | `--text-body-sm` |
| body | 13px | 1.78 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-62 | 62px | `--spacing-62` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-67 | 67px | `--spacing-67` |
| spacing-123 | 123px | `--spacing-123` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Hero Slide Indicator & CTA

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### News Feature Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Link Group & Carousel Pagination

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Navigation Link

**Role:** Primary navigation item

Text link with no background. Text color `Polar White` (#ffffff), `Body-Font` weight 400, size 13px. On hover/active, a 1px `Rosso Corsa` (#FF0000) bottom border appears. Padding is 5px top/bottom, 0px left/right. Letter spacing 0.0830em.

### Hero Action Arrow Button

**Role:** Call to action in hero section

Transparent background button with `Polar White` (#ffffff) text and an integrated arrow icon. No border-radius, `Body-Font` weight 400. Text is uppercase. Associated with a line-based active state indicator (e.g., a short red underline appearing on interaction).

### Minimal Pill Indicator

**Role:** Carousel/slider pagination

Small, horizontally oriented pills. Inactive indicators are thin gray outlines or filled with `Ash Mist` (#8f8f8f). Active indicator is a `Rosso Corsa` (#FF0000) filled pill, signaling current slide without heavy branding.

### Feature Card Headline

**Role:** Editorial content headline

Large, bold `Polar White` (#ffffff) text using the `Body-Font` with wide letter-spacing, set against a dark background or on a `Polar White` content card. Accompanied by a smaller `Body-Font` body text.

### Body Text Paragraph

**Role:** Standard informational text

Light gray `Ash Mist` (#8f8f8f) or `Polar White` (#ffffff) body text at 12px with a line-height of 1.78 to 2.00, and letter-spacing of 0.0150em or 0.0220em, providing comfortable readability on both dark and light sections.

### Footer Link

**Role:** Secondary navigation and informational links

`Shadow Graphite` (#181818) text on a dark background, or `Polar White` (#ffffff) text where more emphasis is needed. Uses `Body-Font` at 11px or 12px, with a generous line-height and medium letter-spacing.

## Do's and Don'ts

### Do

- Do utilize a high-contrast palette of `Obsidian Black` (#000000) and `Polar White` (#ffffff) as the primary background and text colors to maintain a dramatic and luxurious feel.
- Do apply `Rosso Corsa` (#FF0000) as the sole accent color, reserving it exclusively for interactive elements and key indicators to command attention.
- Do apply custom `Body-Font` with generous letter-spacing (e.g., 0.0830em for navigation) for headlines and navigation to emphasize precision and exclusivity.
- Do use a 'comfortably spaced' rhythm with `elementGap` of `10px` and `cardPadding` of `20px` to maintain order and focus.
- Do maintain sharp, `0px` radius on all interactive elements and containers to reinforce the engineered aesthetic.
- Do use the `Shadow Graphite` (#181818) and `Steel Gray` (#303030) as subtle surface variations rather than relying on drop shadows for depth.

### Don't

- Don't introduce additional chromatic colors; the system is built on a black-and-white foundation with a single `Rosso Corsa` accent.
- Don't use rounded corners or soft edges on any components; the design demands sharp, precise lines (`0px` radius).
- Don't use drop shadows for elevation; rely on shifts in neutral background colors (`#000000`, `#181818`, `#ffffff`) to create hierarchy and depth.
- Don't use tight letter-spacing; the custom `Body-Font`'s inherent wide spacing is a core part of the brand's typographic identity.
- Don't embed images with external context; use tightly cropped, abstract, or studio-shot product imagery that isolates the subject.
- Don't deviate from the `Body-Font` for text elements; the system relies on this single typeface for typographic consistency and brand identity.

## Imagery

Photography focuses almost exclusively on high-performance vehicles, often in dramatic, dark studio settings with stark lighting (e.g., single spotlight revealing lines). Images are full-bleed within sections or large, contained blocks, presented with sharp, unmasked edges (0px radius). They serve a dual role: showcasing product and creating an aspirational, atmospheric mood. The visual density is high, with images frequently dominating sections and often carrying the primary visual weight over text.

## Layout

The page exhibits a mixed layout: the hero is a full-bleed dark video/image with centered text and call to action. Subsequent sections alternate between dark and light backgrounds, using a flexible, full-width model. Content is primarily arranged in two-column layouts, often with text on one side and a large, impactful image on the other. Vertical spacing between logical sections is consistent, around `48px`. The overall impression is information-rich but carefully composed, guiding the eye through high-impact visuals and concise text blocks.

## Similar Brands

- **Porsche** — High-performance automotive brand with a focus on product imagery, often in dark, dramatic settings, and a sophisticated, precise UI.
- **Lamborghini** — Luxury automotive brand employing high-contrast visuals, minimalist typography, and a powerful, exclusive aesthetic.
- **Aston Martin** — Another iconic car brand that typically uses sophisticated, often dark, interfaces with an emphasis on aspirational photography and precise typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian-black: #000000;
  --color-polar-white: #ffffff;
  --color-shadow-graphite: #181818;
  --color-steel-gray: #303030;
  --color-ash-mist: #8f8f8f;
  --color-rosso-corsa: #FF0000;
  --font-custom: 'custom', Arial, Helvetica, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.78;
  --text-body-sm: 12px;
  --leading-body-sm: 1.78;
  --text-body: 13px;
  --leading-body: 1.78;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-34: 34px;
  --spacing-37: 37px;
  --spacing-39: 39px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-53: 53px;
  --spacing-54: 54px;
  --spacing-55: 55px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-61: 61px;
  --spacing-62: 62px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-67: 67px;
  --spacing-123: 123px;
  --radius-all: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian-black: #000000;
  --color-polar-white: #ffffff;
  --color-shadow-graphite: #181818;
  --color-steel-gray: #303030;
  --color-ash-mist: #8f8f8f;
  --color-rosso-corsa: #FF0000;
  --font-custom: 'custom', Arial, Helvetica, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.78;
  --text-body-sm: 12px;
  --leading-body-sm: 1.78;
  --text-body: 13px;
  --leading-body: 1.78;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-34: 34px;
  --spacing-37: 37px;
  --spacing-39: 39px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-53: 53px;
  --spacing-54: 54px;
  --spacing-55: 55px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-61: 61px;
  --spacing-62: 62px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-67: 67px;
  --spacing-123: 123px;
  --radius-all: 0px;
}
```
