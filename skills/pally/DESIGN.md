---
version: alpha
name: "Pally"
description: "Pally presents a dark-mode interface, creating a contained, focused experience. UI surfaces are predominantly deep charcoal, accented by a subtle, almost ethereal gradient for hero elements and interactive components. Typography is crisp and minimal, embracing negative tracking to maintain sophistication even at larger display sizes. Components are lightweight with large border radii, suggesting a friendly yet refined digital identity."
theme: "dark"
industry: "productivity"
source_url: "https://www.pally.com"
refero_style_id: "029d3ce0-0fe5-4a8c-99c4-4f9d704f1c60"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507867826-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507867826-thumb.jpg"
extracted_at: "2026-04-30T00:11:26.858Z"
---

# Pally — Style Reference

> Deep space command center

**Theme:** dark

**Industry:** productivity

Pally presents a dark-mode interface, creating a contained, focused experience. UI surfaces are predominantly deep charcoal, accented by a subtle, almost ethereal gradient for hero elements and interactive components. Typography is crisp and minimal, embracing negative tracking to maintain sophistication even at larger display sizes. Components are lightweight with large border radii, suggesting a friendly yet refined digital identity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Slate | #161e29 | `--color-midnight-slate` | Page background, primary surface for dark mode cards, text on light-mode controls |
| Ghost White | #fefcfb | `--color-ghost-white` | Primary text color in dark mode, button backgrounds, interactive elements |
| Off-White Canvas | #eae5dd | `--color-off-white-canvas` | Secondary card background color, often for featured or distinct content blocks |
| Carbon Text | #1e1d1d | `--color-carbon-text` | Muted text, subheadings, and borders for subtle contrast |
| Faded Steel | #b8b9bc | `--color-faded-steel` | Placeholder text, secondary body text |
| Light Steel | #d0d0d1 | `--color-light-steel` | Fine borders, helper text |
| Cosmic Gradient | #e9b3f2 | `--color-cosmic-gradient` | Hero section background, decorative elements, accent glow |
| Deep Space Black | #000000 | `--color-deep-space-black` | Border color, button text when against light backgrounds |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Test Untitled Sans

- **Token:** `--font-test-untitled-sans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 19px
- **Line heights:** 1.00
- **Letter spacing:** -0.0600em at 64px, -0.0400em at 48px, -0.0200em at 24px and below
- **Role:** Primary brand typeface for headings and body text. Its subtle negative tracking across multiple sizes creates a serious yet inviting tone.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 500
- **Sizes:** 14px
- **Line heights:** 1.40
- **Role:** Used for specific interactive elements such as navigation links, providing a slightly more structured feel.

### Test Untitled Sans Regular

- **Token:** `--font-test-untitled-sans-regular`
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 24px, 26px, 28px, 48px, 64px
- **Line heights:** 0.9, 1, 1.1, 1.2, 1.4
- **Letter spacing:** -0.06, -0.04, -0.02
- **Role:** Test Untitled Sans Regular — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 16px | 1.2 | -0.32px | `--text-body` |
| subheading | 18px | 1.1 | -0.36px | `--text-subheading` |
| heading-sm | 24px | 1.1 | -0.48px | `--text-heading-sm` |
| heading | 28px | 1.1 | -0.56px | `--text-heading` |
| heading-lg | 48px | 1 | -1.92px | `--text-heading-lg` |
| display | 64px | 0.9 | -3.84px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| images | 12px |
| buttons | 100px |
| formFields | 100px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 12px |
| elementGap | 10px |

## Components

### Primary Waitlist Button

**Role:** Button

Ghost White (#fefcfb) background with Deep Space Black (#000000) text. Padding of 10px vertical and 16px horizontal. Features a large 100px border radius for a distinctive pill shape.

### Dark Mode Card

**Role:** Card

Midnight Slate (#161e29) background with a 12px border radius. Used for product UI elements and informational blocks within the dark theme.

### Light Mode Feature Card

**Role:** Card

Off-White Canvas (#eae5dd) background with a 12px border radius. Used for emphasizing key features or content in a lighter context against the dark page background.

### Navigation Link

**Role:** Link

Faded Steel (#b8b9bc) text (weight 500 Test Untitled Sans) with 5px vertical padding, becoming Ghost White (#fefcfb) on hover.

## Do's and Don'ts

### Do

- Prioritize Midnight Slate (#161e29) for all primary background surfaces to maintain the deep, dark aesthetic.
- Apply negative letter-spacing from the Test Untitled Sans font to all headlines and display text, specifically -0.0600em for 64px and -0.0400em at 48px, for a sophisticated feel.
- Use a 100px border-radius for all interactive buttons and form fields to create a consistent soft, pill-shaped UI element.
- Employ the Cosmic Gradient (linear-gradient rgb(233, 179, 242) 22%, rgb(152, 104, 204) 74%, rgb(95, 77, 189) 100%) for impactful hero sections and subtle brand highlights.
- Maintain a clear visual hierarchy using Ghost White (#fefcfb) for primary text and Midnight Slate (#161e29) for primary backgrounds in dark mode, ensuring strong contrast (16.4:1 ratio).

### Don't

- Avoid using bright, saturated colors for large UI elements; color should serve as subtle accent or dynamic interactive effects, not primary surface color.
- Do not deviate from the established large border radii (100px for buttons, 12px for cards); sharp corners conflict with the brand's soft, modern aesthetic.
- Do not use generic, default sans-serif fonts; custom font 'Test Untitled Sans' with its specific tracking is crucial for brand identity.
- Avoid adding heavy shadows or excessive elevation; the design relies on subtle gradients and distinct surface colors for depth.
- Do not use small, dense line heights for body text; ensure adequate line-height for readability, especially with the negative letter-spacing.

## Imagery

This design system uses abstract, blurred organic shapes for atmosphere, often with gradients (Cosmic Gradient). Product screenshots are integrated directly, appearing as floating UI elements on the dark background, maintaining the dark mode aesthetic within the product visuals themselves. Icons, when present, are subtly glowing or outlined. Imagery is used to set a mood and illustrate product functionality in a non-literal, atmospheric way rather than showing direct product-in-use photography. The density of imagery is balanced, with a few key visuals commanding attention against otherwise minimalist UI.

## Layout

The page primarily uses a full-bleed layout for the main background (Midnight Slate), which is then overlaid with a contained max-width content area for text and components. The hero section features a centered headline and subtext, often against an atmospheric gradient background. Content sections flow vertically with consistent 80px section gaps. There's a subtle use of a two-panel layout for feature explanations, alternating content left/right. The header is sticky, compact, and centrally aligned, providing essential navigation.

## Similar Brands

- **Superhuman** — Dark-mode interface with a focus on productivity, subtle gradients, and minimalist typography.
- **Linear** — Combines a dark background with crisp, understated UI elements and a focus on polished functionality.
- **Cron** — Modern dark UI with subtle color accents and clean typography for a professional, focused application.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-slate: #161e29;
  --color-ghost-white: #fefcfb;
  --color-off-white-canvas: #eae5dd;
  --color-carbon-text: #1e1d1d;
  --color-faded-steel: #b8b9bc;
  --color-light-steel: #d0d0d1;
  --color-cosmic-gradient: #e9b3f2;
  --color-deep-space-black: #000000;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --font-test-untitled-sans: 'Test Untitled Sans', Inter;
  --font-inter: 'Inter', Inter;
  --font-test-untitled-sans-regular: 'Test Untitled Sans Regular', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.1;
  --tracking-heading: -0.56px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.92px;
  --text-display: 64px;
  --leading-display: 0.9;
  --tracking-display: -3.84px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-150: 150px;
  --spacing-200: 200px;
  --radius-cards: 12px;
  --radius-images: 12px;
  --radius-buttons: 100px;
  --radius-formfields: 100px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-slate: #161e29;
  --color-ghost-white: #fefcfb;
  --color-off-white-canvas: #eae5dd;
  --color-carbon-text: #1e1d1d;
  --color-faded-steel: #b8b9bc;
  --color-light-steel: #d0d0d1;
  --color-cosmic-gradient: #e9b3f2;
  --color-deep-space-black: #000000;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --font-test-untitled-sans: 'Test Untitled Sans', Inter;
  --font-inter: 'Inter', Inter;
  --font-test-untitled-sans-regular: 'Test Untitled Sans Regular', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.1;
  --tracking-heading: -0.56px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.92px;
  --text-display: 64px;
  --leading-display: 0.9;
  --tracking-display: -3.84px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-150: 150px;
  --spacing-200: 200px;
  --radius-cards: 12px;
  --radius-images: 12px;
  --radius-buttons: 100px;
  --radius-formfields: 100px;
}
```
