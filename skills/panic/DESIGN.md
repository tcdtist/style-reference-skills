---
version: alpha
name: "Panic"
description: "Panic Studio's design system combines bold, expressive typography with a vibrant, contrasting color palette. The visual identity alternates between a warm, soft peach background with dark text and a moody, dark background punctuated by energetic yellow headlines. Components are minimal, relying on generous spacing and high contrast to define their presence. The overall impression is playful yet authoritative, reflecting a creative agency that values strong visual storytelling."
theme: "mixed"
industry: "media"
source_url: "https://panicstudio.tv"
refero_style_id: "7dfbb863-e3bb-4894-9ea9-c782efa85a2d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513938379-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513938379-thumb.jpg"
extracted_at: "2026-04-30T01:52:34.681Z"
---

# Panic — Style Reference

> Vibrant type on contrasting canvas.

**Theme:** mixed

**Industry:** media

Panic Studio's design system combines bold, expressive typography with a vibrant, contrasting color palette. The visual identity alternates between a warm, soft peach background with dark text and a moody, dark background punctuated by energetic yellow headlines. Components are minimal, relying on generous spacing and high contrast to define their presence. The overall impression is playful yet authoritative, reflecting a creative agency that values strong visual storytelling.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Panic Peach | #f8e2db | `--color-panic-peach` | Dominant background for light sections, providing a warm and inviting base |
| Midnight Ink | #0e1017 | `--color-midnight-ink` | Primary text color, dark backgrounds for contrasting sections, and ghost button borders. High contrast to emphasize content |
| Emerald Pop | #16ffbd | `--color-emerald-pop` | Background for the brand's circular logo, providing a vivid, unexpected burst of color against neutrals |
| Sunbeam Yellow | #fff050 | `--color-sunbeam-yellow` | Accent for large, impactful headlines in dark sections and decorative flourishes like stars and arrows, creating an electrifying contrast |
| Pure White | #ffffff | `--color-pure-white` | Used for occasional text in dark sections and subtle border elements |
| Absolute Black | #000000 | `--color-absolute-black` | Alternative color for primary text and various border elements, reinforcing high contrast |

## Tokens — Typography

### Roslindale

- **Token:** `--font-roslindale`
- **Substitute:** Playfair Display
- **Weights:** 500
- **Sizes:** 45px, 65px, 75px
- **Line heights:** 1.00, 1.10, 1.15
- **Letter spacing:** 0.04em
- **Role:** Headlines and emphasis text. Its ornate, high-contrast display characteristics make it feel premium and bold, demanding attention.

### GT Pressura

- **Token:** `--font-gt-pressura`
- **Substitute:** Inter
- **Weights:** 300
- **Sizes:** 22px
- **Line heights:** 1.45
- **Letter spacing:** 0.005em
- **Role:** Body text, navigation, and button labels. Its lightness and slightly condensed form keep text feeling modern and airy, preventing it from competing with the expressive headlines.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 22px | 1.45 | 0.11px | `--text-body` |
| heading | 45px | 1.15 | 1.8px | `--text-heading` |
| heading-lg | 65px | 1.1 | 2.6px | `--text-heading-lg` |
| display | 75px | 1 | 3px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-213 | 213px | `--spacing-213` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 60px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 90px |
| cardPadding | 30px |
| elementGap | 12px |

## Components

### Ghost Button - Light

**Role:** Call to action button for light backgrounds.

Transparent background with a 2px solid border in Midnight Ink (#0e1017) and Midnight Ink (#0e1017) text. Highly rounded corners (60px radius). Padding of 10px vertical and 35px horizontal. Uses GT Pressura font at 22px, weight 300.

### Logo Circle

**Role:** Brand identity mark.

A circular element with a solid Emerald Pop (#16ffbd) fill. Contains the brand name in a dark font.

### Primary Navigation Link

**Role:** Top-level navigation item.

Text link in Midnight Ink (#0e1017) against light backgrounds or Pure White (#ffffff) against dark backgrounds. Uses GT Pressura font. Hover states likely involve an underline or color shift.

## Do's and Don'ts

### Do

- Use Panic Peach (#f8e2db) as the dominant background for light-themed sections, providing warmth.
- Pair Roslindale 500 headlines with GT Pressura 300 body text for consistent typographic contrast.
- Implement 60px border-radius for all interactive elements like buttons to maintain a soft, friendly aesthetic.
- Utilize Sunbeam Yellow (#fff050) exclusively for dramatic headlines or decorative graphical elements on dark backgrounds.
- Maintain generous 90px vertical section gaps and 50px horizontal column gaps to create a spacious, breathable layout.
- Employ Midnight Ink (#0e1017) for all primary text and un-filled button borders for strong contrast and legibility.
- Use Emerald Pop (#16ffbd) only for the brand logo or other specific brand marks, not for general UI elements.

### Don't

- Do not use Roslindale for body text; reserve it entirely for headlines and display text.
- Avoid using Sunbeam Yellow (#fff050) as a button background color or for large blocks of text.
- Do not introduce square or low-radius corners on interactive elements; enforce 60px radius.
- Do not use multiple font families beyond Roslindale and GT Pressura without explicit approval.
- Avoid tight element spacing; prioritize the generous 12px element gap and larger section paddings.
- Do not use Emerald Pop (#16ffbd) for any interactive states or general background elements.
- Do not use gradients; the system relies on solid color blocks for structure and impact.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Panic Peach Canvas | #f8e2db | Base background for light-themed page sections. |
| 1 | Midnight Ink Canvas | #0e1017 | Base background for dark-themed page sections. |

## Imagery

This system primarily uses iconography and limited imagery. The branding relies on abstract, geometric shapes (like the circular logo background) and simple, expressive icons (e.g., down arrows, small starbursts). When present, product imagery is likely to be high-quality, contained, and without busy backgrounds, allowing the expressive typography to dominate. Icons should be monochrome outlined or filled with the brand's key accent colors (Sunbeam Yellow). Imagery is decorative and used to punctuate text rather than being content-heavy.

## Layout

Pages are structured with a full-bleed background that alternates between Panic Peach and Midnight Ink. Content is centered and largely contained within a flexible max-width, creating a clear content rhythm. The hero section often features large, centered headlines over a solid background. Sections are separated by generous vertical spacing (90px). Content flows in mostly single-column stacks with occasional multi-column feature or work showcases, but always high contrast and centered. Navigation is a minimal top-right bar with simple text links.

## Similar Brands

- **Stripe** — Uses high-contrast typography and a clean, spacious layout with a distinctive accent color for brand elements.
- **Figma** — Employs a bold, expressive typography style for headlines alongside a minimalist UI with a strong brand color.
- **Huge Inc.** — Showcases creative work using large, impactful headlines and a simple, highly contrasting color palette.
- **Active Theory** — Features a strong dark mode aesthetic with vibrant, almost neon accent colors used sparingly for emphasis and interactivity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-panic-peach: #f8e2db;
  --color-midnight-ink: #0e1017;
  --color-emerald-pop: #16ffbd;
  --color-sunbeam-yellow: #fff050;
  --color-pure-white: #ffffff;
  --color-absolute-black: #000000;
  --font-roslindale: 'Roslindale', Playfair Display;
  --font-gt-pressura: 'GT Pressura', Inter;
  --text-body: 22px;
  --leading-body: 1.45;
  --tracking-body: 0.11px;
  --text-heading: 45px;
  --leading-heading: 1.15;
  --tracking-heading: 1.8px;
  --text-heading-lg: 65px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 2.6px;
  --text-display: 75px;
  --leading-display: 1;
  --tracking-display: 3px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-120: 120px;
  --spacing-153: 153px;
  --spacing-213: 213px;
  --radius-buttons: 60px;
  --surface-panic-peach-canvas: #f8e2db;
  --surface-midnight-ink-canvas: #0e1017;
}
```

### Tailwind v4

```css
@theme {
  --color-panic-peach: #f8e2db;
  --color-midnight-ink: #0e1017;
  --color-emerald-pop: #16ffbd;
  --color-sunbeam-yellow: #fff050;
  --color-pure-white: #ffffff;
  --color-absolute-black: #000000;
  --font-roslindale: 'Roslindale', Playfair Display;
  --font-gt-pressura: 'GT Pressura', Inter;
  --text-body: 22px;
  --leading-body: 1.45;
  --tracking-body: 0.11px;
  --text-heading: 45px;
  --leading-heading: 1.15;
  --tracking-heading: 1.8px;
  --text-heading-lg: 65px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 2.6px;
  --text-display: 75px;
  --leading-display: 1;
  --tracking-display: 3px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-120: 120px;
  --spacing-153: 153px;
  --spacing-213: 213px;
  --radius-buttons: 60px;
  --surface-panic-peach-canvas: #f8e2db;
  --surface-midnight-ink-canvas: #0e1017;
}
```
