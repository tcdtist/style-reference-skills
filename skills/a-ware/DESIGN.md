---
version: alpha
name: "A-WARE"
description: "A-WARE cultivates a natural and premium aesthetic through a minimal, high-contrast monochrome palette punctuated by a single warm golden accent. Typography is a deliberate interplay of bold, expanded sans-serifs and a refined serif, creating a distinct brand voice. Surfaces are predominantly light and matte, achieving depth through subtle off-white tones rather than shadows, reinforcing a sense of clean, unadulterated quality. Layouts are spacious and structured, guiding the eye with generous negative space."
theme: "light"
industry: "ecommerce"
source_url: "https://a-ware.at"
refero_style_id: "5681f7b6-c665-44b8-a065-da7180133149"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515684819-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515684819-thumb.jpg"
extracted_at: "2026-04-30T02:21:50.169Z"
---

# A-WARE — Style Reference

> Minimalist alpine clean

**Theme:** light

**Industry:** ecommerce

A-WARE cultivates a natural and premium aesthetic through a minimal, high-contrast monochrome palette punctuated by a single warm golden accent. Typography is a deliberate interplay of bold, expanded sans-serifs and a refined serif, creating a distinct brand voice. Surfaces are predominantly light and matte, achieving depth through subtle off-white tones rather than shadows, reinforcing a sense of clean, unadulterated quality. Layouts are spacious and structured, guiding the eye with generous negative space.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, major headings, borders, button backgrounds (filled), active icons, primary action borders for ghost buttons. Controls the stark contrast against light surfaces |
| Alabaster White | #ffffff | `--color-alabaster-white` | Canvas background, card backgrounds, text on dark buttons, interactive element backgrounds. Provides a clean, bright foundation |
| Greige Canvas | #f7f5ee | `--color-greige-canvas` | Secondary surface background for cards and featured sections, subtle variant from pure white to introduce warmth and depth. Often used for subtle elevation |
| Stone Whisper | #ece9df | `--color-stone-whisper` | Footer background, very subtle content section backgrounds. A soft, warm off-white, slightly darker than Greige Canvas, for grounding elements |
| Subtle Ash | #888783 | `--color-subtle-ash` | Muted text, secondary link color, subtle borders, inactive elements. Provides a softer secondary textual element |
| Harvest Gold | #a77a41 | `--color-harvest-gold` | Highlight text, decorative borders, unique element accents (e.g. email input border focus). The sole chromatic accent, used sparingly to draw attention to specific informational elements |

## Tokens — Typography

### practice

- **Token:** `--font-practice`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 14px, 16px, 18px, 23px, 25px, 36px, 38px, 88px
- **Line heights:** 1.00, 1.05, 1.19, 1.20, 1.40, 1.45
- **Letter spacing:** -0.02em, 0.02em, 0.04em, 0.10em
- **Role:** Primary and secondary headings, call-to-action text, navigation items, and descriptive body text. Its wide range of weights and letter-spacing options allow it to establish strong hierarchy and impact, from large, tracked-out display text to compact labels.

### plantin

- **Token:** `--font-plantin`
- **Substitute:** Playfair Display
- **Weights:** 300, 400
- **Sizes:** 24px, 38px
- **Line heights:** 1.05, 1.20, 1.33
- **Letter spacing:** -0.43em, -0.02em
- **Role:** Hero headlines, sometimes used for subheadings. The very tight negative letter-spacing at large sizes creates a distinctive, impactful, almost sculptural text block, while the serif character adds a touch of classic authority.

### lab-mono

- **Token:** `--font-lab-mono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.33
- **Letter spacing:** -0.02em
- **Role:** Small functional text like captions, labels, and metadata. Its monospace nature provides a technical, precise feel for auxiliary information.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.33 | -0.24px | `--text-caption` |
| body-sm | 14px | 1.4 | 0.28px | `--text-body-sm` |
| body | 16px | 1.45 | — | `--text-body` |
| subheading | 23px | 1.2 | — | `--text-subheading` |
| heading | 36px | 1.05 | — | `--text-heading` |
| heading-lg | 38px | 1.2 | -7.98px | `--text-heading-lg` |
| display | 88px | 1 | -17.6px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-117 | 117px | `--spacing-117` |
| spacing-130 | 130px | `--spacing-130` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-220 | 220px | `--spacing-220` |
| spacing-229 | 229px | `--spacing-229` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| badges | 6px |
| inputs | 8px |
| buttons | 32px |
| general | 6px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 72px |
| elementGap | 24px |

## Components

### Ghost Outline Button (Light Text)

**Role:** Primary Call to Action on dark backgrounds.

Transparent background with a 1px border of Alabaster White. Text is Alabaster White, practice font at a variable size. No padding directly applied to the button, but often contained within larger elements. Radius is 0px for sharp edges.

### Ghost Outline Button (Dark Text)

**Role:** Secondary Call to Action, active state for navigation.

Transparent background with a 1px border of Midnight Ink. Text is Midnight Ink, practice font at a variable size. Padding of 0px top/bottom and 12px left/right. Radius is 0px for sharp edges.

### Pill Button (Filled)

**Role:** Primary Call to Action on light backgrounds.

Solid Alabaster White background with Midnight Ink text. Practice font, 0px top/bottom padding, 32px left/right padding, and a prominent 32px border radius for a soft, pill-like shape. Has a 1px Midnight Ink border.

### Product Card

**Role:** Displaying product information and features.

Background is Greige Canvas, no shadow, with 12px border radius. Generous 72px padding on all sides, creating substantial negative space around content.

### Text Input Field

**Role:** Collecting user input.

Transparent background with Midnight Ink text. Features a subtle 1px border in a very light gray (rgba(0,0,0,0.12)). Rounded corners with an 8px border radius. Padding of 20px top/bottom and 24px left/right.

### Tag Badge (Light Text)

**Role:** Categorization and metadata on dark backgrounds.

Transparent background with Alabaster White text. Uses a 6px border radius. No specific padding defined, relies on content wrapping.

### Tag Badge (Dark Text)

**Role:** Categorization and metadata on light backgrounds.

Transparent background with Midnight Ink text. Uses a 0px border radius. No specific padding defined, relies on content wrapping.

## Do's and Don'ts

### Do

- Use Midnight Ink (#000000) for all primary text and major headlines to maintain high contrast and legibility.
- Apply Alabaster White (#ffffff) for primary canvas backgrounds and text on dark elements, supporting the clean aesthetic.
- Introduce warmth and subtle hierarchy on light surfaces by using Greige Canvas (#f7f5ee) for cards and secondary content blocks.
- Prioritize the 'practice' font for all interactive elements, navigation, and most body text, using its variable weights and letter-spacing to control emphasis.
- Reserve the 'plantin' font with aggressive negative letter-spacing for impactful, large display headlines to create a distinctive brand presence.
- Employ the Harvest Gold (#a77a41) accent color extremely sparingly, primarily for functional highlights like input borders or specific, small informational text.
- Maintain generous spacing around elements and within content blocks, using 72px padding for cards and a comfortable 24px element gap to enhance readability and the sense of premium quality.

### Don't

- Avoid using multiple accent colors; stick to Harvest Gold for all chromatic emphasis.
- Do not introduce heavy shadows or gradients; rely on color temperature and subtle background shifts (e.g., from Alabaster White to Greige Canvas) for depth.
- Do not use generic system fonts; always specify 'practice', 'plantin', or 'lab-mono' to preserve brand identity.
- Refrain from tight, cramped layouts; ensure ample whitespace, especially around components like cards and headings, to support the spacious and natural feel.
- Do not deviate from the specified border radii (e.g., 32px for pill buttons, 12px for cards, 8px for inputs) to maintain design consistency.
- Avoid using Harvest Gold for large text blocks or backgrounds; its impact is derived from its scarcity.
- Do not use highly saturated or neon colors; the palette is deliberately muted and natural, with Harvest Gold being the only chromatic exception.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Alabaster White Canvas | #ffffff | Primary page background, base for light elements. |
| 1 | Greige Canvas Card | #f7f5ee | Background for elevated content sections, cards, and product listings, providing a subtle visual separation and warmth. |
| 2 | Stone Whisper Footer | #ece9df | Background for the footer and other grounding structural elements for a slightly cooler and darker contrast against the canvas. |

## Imagery

The visual language predominantly features clean, product-focused photography and lifestyle images of athletes in natural settings. Photography is high-key and bright, often with tight crops on products against light backgrounds or individuals engaged in activities in well-lit natural environments. Product images are typically isolated or presented minimally. There are no heavy illustrations or abstract graphics. Icons are minimal, outlined (e.g., shopping cart, search) or filled, presenting a simple, functional aesthetic primarily in Midnight Ink or Alabaster White. Imagery serves both decorative atmosphere and product showcase roles, with a medium density, balancing visual interest with text-dominant content sections.

## Layout

The page uses a full-bleed model with content centered within an implied maximum width, creating a spacious and structured feel. The hero section is often full-viewport, featuring a striking photographic background with large, centered, and overlaying typography. Sections maintain a consistent vertical rhythm, often alternating between a clean Alabaster White background and a slightly warmer Greige Canvas for cards and content blocks. Content arrangement frequently uses a centered stack for textual elements and 2-column or 3-column grids for product displays or feature lists, maintaining clear divisions. Navigation is a sticky top bar with minimal links and icons, emphasizing a clean header area.

## Similar Brands

- **Oura** — High-contrast monochrome palette with minimal accent color, strong bespoke typography, and a focus on premium aesthetics through spacious layouts.
- **Aesop** — Natural, muted color palette, generous whitespace, and a sophisticated approach to typography that feels both classic and distinctly modern.
- **Moment** — Emphasizes product photography, clean and minimal UI, and a limited color palette to highlight the brand and products.
- **Vuori** — Utilizes lifestyle imagery combined with clean typographic hierarchy and a restrained color palette to convey a premium, active brand.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-alabaster-white: #ffffff;
  --color-greige-canvas: #f7f5ee;
  --color-stone-whisper: #ece9df;
  --color-subtle-ash: #888783;
  --color-harvest-gold: #a77a41;
  --font-practice: 'practice', Inter;
  --font-plantin: 'plantin', Playfair Display;
  --font-lab-mono: 'lab-mono', Space Mono;
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0.28px;
  --text-body: 16px;
  --leading-body: 1.45;
  --text-subheading: 23px;
  --leading-subheading: 1.2;
  --text-heading: 36px;
  --leading-heading: 1.05;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -7.98px;
  --text-display: 88px;
  --leading-display: 1;
  --tracking-display: -17.6px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-117: 117px;
  --spacing-130: 130px;
  --spacing-160: 160px;
  --spacing-220: 220px;
  --spacing-229: 229px;
  --radius-cards: 12px;
  --radius-badges: 6px;
  --radius-inputs: 8px;
  --radius-buttons: 32px;
  --radius-general: 6px;
  --surface-alabaster-white-canvas: #ffffff;
  --surface-greige-canvas-card: #f7f5ee;
  --surface-stone-whisper-footer: #ece9df;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-alabaster-white: #ffffff;
  --color-greige-canvas: #f7f5ee;
  --color-stone-whisper: #ece9df;
  --color-subtle-ash: #888783;
  --color-harvest-gold: #a77a41;
  --font-practice: 'practice', Inter;
  --font-plantin: 'plantin', Playfair Display;
  --font-lab-mono: 'lab-mono', Space Mono;
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0.28px;
  --text-body: 16px;
  --leading-body: 1.45;
  --text-subheading: 23px;
  --leading-subheading: 1.2;
  --text-heading: 36px;
  --leading-heading: 1.05;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -7.98px;
  --text-display: 88px;
  --leading-display: 1;
  --tracking-display: -17.6px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-117: 117px;
  --spacing-130: 130px;
  --spacing-160: 160px;
  --spacing-220: 220px;
  --spacing-229: 229px;
  --radius-cards: 12px;
  --radius-badges: 6px;
  --radius-inputs: 8px;
  --radius-buttons: 32px;
  --radius-general: 6px;
  --surface-alabaster-white-canvas: #ffffff;
  --surface-greige-canvas-card: #f7f5ee;
  --surface-stone-whisper-footer: #ece9df;
}
```
