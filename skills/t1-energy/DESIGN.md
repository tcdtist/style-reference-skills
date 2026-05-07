---
version: alpha
name: "T1 Energy"
description: "T1 Energy employs a sophisticated industrial blueprint aesthetic. It uses a restricted, monochromatic palette of deep charcoals, muted grays, and pure white to create a serious, high-tech atmosphere. Typography is precise and confident, often appearing in subtle weights or as a functional overlay. Elements feel lightweight with soft, large radius surfaces and minimal elevation, avoiding heavy borders or decorative flourishes, giving the impression of advanced machinery on a white canvas."
theme: "light"
industry: "other"
source_url: "https://t1energy.com"
refero_style_id: "e79b761d-f476-4c5d-8943-e31a58664e4d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509054633-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509054633-thumb.jpg"
extracted_at: "2026-04-30T00:31:18.209Z"
---

# T1 Energy — Style Reference

> Industrial Blueprint on White Marble

**Theme:** light

**Industry:** other

T1 Energy employs a sophisticated industrial blueprint aesthetic. It uses a restricted, monochromatic palette of deep charcoals, muted grays, and pure white to create a serious, high-tech atmosphere. Typography is precise and confident, often appearing in subtle weights or as a functional overlay. Elements feel lightweight with soft, large radius surfaces and minimal elevation, avoiding heavy borders or decorative flourishes, giving the impression of advanced machinery on a white canvas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Nightfall Onyx | #0f0e12 | `--color-nightfall-onyx` | Footer backgrounds, deep surface accents, primary text on light backgrounds — providing strong contrast and a sense of gravitas |
| Platinum White | #ffffff | `--color-platinum-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Technical Carbon | #322d2a | `--color-technical-carbon` | Secondary text, faint borders for cards and images, UI accents like dividers — creating visual structure without harshness |
| Cloud Chalk | #f0efe9 | `--color-cloud-chalk` | Default page canvas background — acting as a slightly off-white, warm base that prevents starkness |
| Steel Gray | #8b8b8b | `--color-steel-gray` | Backgrounds for ghost buttons, prominent navigation elements — providing a subtle interactive surface within the monochromatic scheme |

## Tokens — Typography

### T1 Sans

- **Token:** `--font-t1-sans`
- **Substitute:** Inter
- **Weights:** 300, 400
- **Sizes:** 14px, 52px
- **Line heights:** 1.00, 1.30
- **Letter spacing:** 0.0100em
- **Role:** Primary brand typeface. Its light and regular weights are used for both body text and prominent headlines, setting a tone of understated technical authority.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1 | — | `--text-body` |
| display | 52px | 1.3 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 80px |
| buttons | 16px |
| elements | 12px |
| smallInteractive | 100px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 22px |
| elementGap | 8px |

## Components

### Ghost Header Button

**Role:** Primary navigation and action button within the hero overlay.

Text: Platinum White (#ffffff) on a semi-transparent Steel Gray (#8b8b8b) background at 50% opacity. Border-radius is 16px. Padding 17.5px vertical, 22.4px horizontal. Uses T1 Sans, weight 400.

### Pill Ghost Button

**Role:** Compact action button, often for secondary navigation or small interactive elements.

Text: Platinum White (#ffffff) on a semi-transparent Steel Gray (#8b8b8b) background at 50% opacity. Border-radius is 100px (pill shape). Minimal padding 4px vertical, 22.4px horizontal. Uses T1 Sans, weight 400.

### Transparent Card

**Role:** Displaying informational content without a distinct visual border or background, creating a light, airy feel.

Background is fully transparent (rgba(0,0,0,0)). No box shadow. Border-radius 0px. No padding.

### Rounded Informational Card

**Role:** Content container with a distinctly large rounded corner, providing a softer boundary.

Background is fully transparent (rgba(0,0,0,0)). No box shadow. Border-radius 80px. No padding.

### Learn More Button

**Role:** Secondary action button for deeper content exploration.

Background #ffffff, text in an unspecified dark neutral (likely Midnight Onyx or Technical Carbon). 1px border of #322d2a. Border-radius 12px. Padding 18px vertical, 22px horizontal. Uses T1 Sans, weight 400.

## Do's and Don'ts

### Do

- Prioritize Cloud Chalk (#f0efe9) and Platinum White (#ffffff) as dominant background colors to support the light theme.
- Use Nightfall Onyx (#0f0e12) or Technical Carbon (#322d2a) for all primary and secondary text for maximum readability.
- Apply T1 Sans consistently, leveraging weight 300 for a lighter touch on larger headlines and weight 400 for body text.
- Utilize 80px border-radius for large surface elements like cards and images to establish the signature soft, rounded aesthetic.
- For interactive elements such as buttons and navigation, prefer semi-transparent Steel Gray (#8b8b8b) backgrounds with Platinum White (#ffffff) text to maintain the clean, technical overlay appearance.
- Employ consistent section gaps of 48px to create a comfortable, structured vertical rhythm across pages.
- Use a base unit of 4px for all spacing decisions to maintain proportional consistency.

### Don't

- Avoid introducing vibrant, saturated colors outside of purely decorative image content; the system relies on a near-monochromatic palette.
- Do not use harsh, sharp-cornered elements on larger components; prioritize the 80px and 16px radii for their characteristic softness.
- Refrain from using strong drop shadows or complex elevation; the design system prefers minimal visual depth.
- Do not deviate from T1 Sans as the primary typeface; maintain its subtle weights and consistent letter spacing.
- Avoid small, tight letter spacing for body text; a uniform 0.0100em should be maintained.
- Do not overuse borders; when present, they should be subtle (#322d2a or #ffffff at 1px) to avoid a heavy appearance.
- Do not introduce strong visual gradients or complex background textures; the aesthetic leans towards clean, flat surfaces.

## Similar Brands

- **Tesla** — Monochromatic palette, emphasis on product and industrial imagery, and a clean, technical typography style.
- **Boston Dynamics** — Focus on advanced technology, clean UI with minimal color, and a sophisticated, slightly futuristic feel through typography and sparse design elements.
- **Siemens Energy** — Industrial and manufacturing focus, with a serious and authoritative visual language relying on grays, blacks, and whites to convey reliability.
- **NVIDIA** — High-tech brand with an emphasis on cutting-edge visuals, clean layouts, and a predominantly dark/monochrome aesthetic that allows product imagery to stand out.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-nightfall-onyx: #0f0e12;
  --color-platinum-white: #ffffff;
  --color-technical-carbon: #322d2a;
  --color-cloud-chalk: #f0efe9;
  --color-steel-gray: #8b8b8b;
  --font-t1-sans: 'T1 Sans', Inter;
  --text-body: 14px;
  --leading-body: 1;
  --text-display: 52px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --radius-cards: 80px;
  --radius-buttons: 16px;
  --radius-elements: 12px;
  --radius-smallinteractive: 100px;
}
```

### Tailwind v4

```css
@theme {
  --color-nightfall-onyx: #0f0e12;
  --color-platinum-white: #ffffff;
  --color-technical-carbon: #322d2a;
  --color-cloud-chalk: #f0efe9;
  --color-steel-gray: #8b8b8b;
  --font-t1-sans: 'T1 Sans', Inter;
  --text-body: 14px;
  --leading-body: 1;
  --text-display: 52px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --radius-cards: 80px;
  --radius-buttons: 16px;
  --radius-elements: 12px;
  --radius-smallinteractive: 100px;
}
```
