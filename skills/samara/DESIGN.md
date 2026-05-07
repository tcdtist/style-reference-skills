---
version: alpha
name: "Samara"
description: "The design feels like an architectural plan rendered on warm, premium paper. It establishes authority through restraint, using vast negative space and a whisper-thin display font (Regola Light) for headlines, making them feel expansive and considered rather than loud. The palette is strictly controlled: a warm off-white (#fdfdf7) background, black ink for text, and a single, vibrant Sky Blue (#0096f7) for all primary actions. This creates a calm, focused environment where the product—modern, livable spaces—is the hero. Soft 12px radii on cards and buttons provide a touch of organic friendliness to the otherwise precise, geometric typography."
theme: "light"
industry: "agency"
source_url: "https://samara.com"
refero_style_id: "934a61aa-50ff-4e90-852b-4ad0b8262d54"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929928220-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929928220-thumb.jpg"
extracted_at: "2026-04-11T17:53:21.380Z"
---

# Samara — Style Reference

> Sunlit architectural model. The design combines the precision of a blueprint with the warmth and airiness of natural light.

**Theme:** light

**Industry:** agency

The design feels like an architectural plan rendered on warm, premium paper. It establishes authority through restraint, using vast negative space and a whisper-thin display font (Regola Light) for headlines, making them feel expansive and considered rather than loud. The palette is strictly controlled: a warm off-white (#fdfdf7) background, black ink for text, and a single, vibrant Sky Blue (#0096f7) for all primary actions. This creates a calm, focused environment where the product—modern, livable spaces—is the hero. Soft 12px radii on cards and buttons provide a touch of organic friendliness to the otherwise precise, geometric typography.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Sky Blue | #0096f7 | `--color-sky-blue` | Primary CTAs, interactive links, iconography — a single point of vivid color signifying action. |
| Signal Orange | #ff4000 | `--color-signal-orange` | Secondary high-visibility CTAs, often used in dark contexts for urgent calls to action. |
| Ink | #000000 | `--color-ink` | Headlines, body text, UI labels. |
| Pure White | #ffffff | `--color-pure-white` | Text on dark or colored backgrounds, button text. |
| Parchment | #fdfdf7 | `--color-parchment` | Primary page background, giving a warm, tactile feel. |
| Warm Sand | #f5f2de | `--color-warm-sand` | Card backgrounds. |
| Driftwood | #e7e3e1 | `--color-driftwood` | Button surfaces for secondary or tertiary actions. |
| Ash | #d3d3d3 | `--color-ash` | Decorative elements, disabled states. |
| Stone | #999999 | `--color-stone` | Subtle borders, placeholder text. |
| Graphite | #666666 | `--color-graphite` | Secondary text, metadata. |
| Evergreen | #375033 | `--color-evergreen` | Product visualization accents within text blocks. |

## Tokens — Typography

### regola

- **Token:** `--font-regola`
- **Substitute:** Plus Jakarta Sans, Manrope
- **Weights:** 400 (aliased as 'light', 'book', 'regular')
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 21px, 23px, 29px, 30px, 36px, 43px, 48px, 60px, 96px
- **Line heights:** 0.90, 0.96, 1.00, 1.10, 1.12, 1.14, 1.16, 1.20, 1.25, 1.28, 1.33, 1.49, 1.50, 1.60
- **OpenType features:** "lnum", "tnum"
- **Role:** The signature font for the entire system. The 'light' variant is used for large, airy headlines, creating a distinctive look of understated confidence. 'Book' and 'regular' weights are for body copy and UI text. Tight negative letter-spacing is applied at larger sizes, enhancing its geometric precision.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption-sm | 12px | 1.5 | -0.48px | `--text-caption-sm` |
| caption | 14px | 1.5 | -0.56px | `--text-caption` |
| body-sm | 16px | 1.49 | -0.22px | `--text-body-sm` |
| body | 18px | 1.33 | -0.18px | `--text-body` |
| body-lg | 23px | 1.25 | -0.46px | `--text-body-lg` |
| subheading | 30px | 1.14 | -0.9px | `--text-subheading` |
| heading-sm | 36px | 1.1 | -0.5px | `--text-heading-sm` |
| heading | 48px | 1 | -1.3px | `--text-heading` |
| heading-lg | 60px | 0.96 | -2.46px | `--text-heading-lg` |
| display | 96px | 0.9 | -4.51px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
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
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-167 | 167px | `--spacing-167` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| pills | 24px |
| inputs | 12px |
| buttons | 12px |
| specialtyCards | 18px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.08) 0px 2px 10px 0px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.2) 0px 2px 4px 0px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.12) 0px 2px 4px 0px | `--shadow-xl-4` |
| xl-5 | rgba(0, 0, 0, 0.12) 0px 0.5px 1px 0px | `--shadow-xl-5` |
| xl-6 | rgba(0, 0, 0, 0.2) 0px 0.5px 2px 0px | `--shadow-xl-6` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |

## Components

### Alert Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Model Feature Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Button

**Role:** The main call-to-action button.

Background: #0096f7 (Sky Blue). Text: #ffffff (Pure White). Padding: 14px. Radius: 12px. Font: regola, 14-15px.

### Urgent CTA Button

**Role:** A high-contrast call-to-action for dark headers.

Background: #ff4000 (Signal Orange). Text: #ffffff (Pure White). Padding: ~8px 18px. Radius: 12px.

### Pill Ghost Button

**Role:** A subtle, secondary action link styled as a button.

Background: rgba(0, 0, 0, 0.04). Text: #000000 (Ink). Radius: 24px. Padding may vary, often used for text links.

### Standard Card

**Role:** Default content container for features or testimonials.

Background: #f7f7f0 (darker Parchment). Radius: 12px. Shadow: `rgba(0, 0, 0, 0.2) 0px 2px 4px 0px`. Contains its own padded content.

### Warm Sand Card

**Role:** A warmer, more prominent card variant.

Background: #f5f2de (Warm Sand). Radius: 18px. Shadow: `rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px`. Padding: 36px.

### Text Input Field

**Role:** Standard user input field.

Background: rgba(0, 0, 0, 0.03). Border: 1px solid rgba(0, 0, 0, 0.1). Radius: 12px. Padding: 15px. Text: #000000 (Ink).

### Hero Banner

**Role:** The top-of-page introduction, transitioning on scroll.

Initial state: Black (#000000) background with white text and a Sky Blue or Signal Orange CTA. Scrolls to a transparent or white background integrated with the main page content.

### Inline-Render Headline

**Role:** A signature component mixing large text with small 3D product renders.

Uses `display` or `heading-lg` typography with small, floating product models (e.g., houses) interspersed within the text flow, creating a dynamic, informational headline.

## Do's and Don'ts

### Do

- Use `regola-light` with tight negative letter-spacing for all headlines above 30px.
- Set the primary page background to #fdfdf7 (Parchment), never pure #ffffff.
- Reserve the vibrant #0096f7 (Sky Blue) for primary interactive elements like CTAs and links.
- Apply a consistent 12px border-radius to almost all buttons, inputs, and cards.
- Employ generous whitespace (96px-120px) between major content sections.
- Use subtle, short shadows like `rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px` to gently lift elements.
- Mix large, airy typography with high-quality product photography and clean 3D renders.

### Don't

- Don't use pure white (#ffffff) for large background areas.
- Don't use bold or heavy font weights for headlines; use size and light weight instead.
- Don't use sharp 0px corners on primary UI components like buttons and cards.
- Don't use a busy color palette; stick to the core Parchment/Ink/Sky Blue system.
- Don't use strong, deep, or colored shadows.
- Don't neglect typography details; specific letter-spacing and line-height values are critical.
- Don't place elements close together; the design relies on spaciousness.

## Elevation

- **Subtle Card/Button:** `rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px`
- **Elevated Card:** `rgba(0, 0, 0, 0.2) 0px 2px 4px 0px`
- **Hover/Active Interaction:** `rgba(0, 0, 0, 0.08) 0px 2px 10px 0px`

## Imagery

The visual language is a dichotomy of warm aspiration and clean objectivity. Product photography is dominant, featuring the homes in bright, natural, sunlit environments, often surrounded by nature to evoke a feeling of peaceful, premium living. This is contrasted with clean, isolated 3D product renders embedded directly within text blocks, which serve to explain features with technical clarity. All imagery is contained within sharp-edged containers or cards with a soft 12px radius; there are no abstract or decorative graphics.

## Layout

The layout is built on a centered, max-width container of approximately 1280px, creating generous white space on either side. The page begins with a full-bleed hero image or a dark banner with overlaid text, transitioning to a vertical stack of content sections on the warm Parchment background. Section breaks are defined by large vertical gaps (96-120px) rather than visual dividers, creating a calm, unhurried rhythm. Content is arranged in simple, centered 1-column stacks for narrative and 2- or 3-column grids for feature breakdowns.

## Similar Brands

- **Oura** — Similar use of a custom geometric sans-serif, spacious light UI, and a focus on premium hardware.
- **Tonal** — Combines high-end hardware with a clean, tech-forward aesthetic and typographic precision.
- **Anyone** — Shares the architectural, minimalist aesthetic with an emphasis on structure and form.
- **Rivian** — Mixes hardware innovation with a clean, adventurous, and nature-adjacent visual language.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-sky-blue: #0096f7;
  --color-signal-orange: #ff4000;
  --color-ink: #000000;
  --color-pure-white: #ffffff;
  --color-parchment: #fdfdf7;
  --color-warm-sand: #f5f2de;
  --color-driftwood: #e7e3e1;
  --color-ash: #d3d3d3;
  --color-stone: #999999;
  --color-graphite: #666666;
  --color-evergreen: #375033;
  --font-regola: 'regola', Plus Jakarta Sans, Manrope;
  --text-caption-sm: 12px;
  --leading-caption-sm: 1.5;
  --tracking-caption-sm: -0.48px;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: -0.56px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.49;
  --tracking-body-sm: -0.22px;
  --text-body: 18px;
  --leading-body: 1.33;
  --tracking-body: -0.18px;
  --text-body-lg: 23px;
  --leading-body-lg: 1.25;
  --tracking-body-lg: -0.46px;
  --text-subheading: 30px;
  --leading-subheading: 1.14;
  --tracking-subheading: -0.9px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.5px;
  --text-heading: 48px;
  --leading-heading: 1;
  --tracking-heading: -1.3px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 0.96;
  --tracking-heading-lg: -2.46px;
  --text-display: 96px;
  --leading-display: 0.9;
  --tracking-display: -4.51px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
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
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-54: 54px;
  --spacing-89: 89px;
  --spacing-113: 113px;
  --spacing-167: 167px;
  --radius-cards: 12px;
  --radius-pills: 24px;
  --radius-inputs: 12px;
  --radius-buttons: 12px;
  --radius-specialtycards: 18px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;
  --shadow-xl-5: rgba(0, 0, 0, 0.12) 0px 0.5px 1px 0px;
  --shadow-xl-6: rgba(0, 0, 0, 0.2) 0px 0.5px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-sky-blue: #0096f7;
  --color-signal-orange: #ff4000;
  --color-ink: #000000;
  --color-pure-white: #ffffff;
  --color-parchment: #fdfdf7;
  --color-warm-sand: #f5f2de;
  --color-driftwood: #e7e3e1;
  --color-ash: #d3d3d3;
  --color-stone: #999999;
  --color-graphite: #666666;
  --color-evergreen: #375033;
  --font-regola: 'regola', Plus Jakarta Sans, Manrope;
  --text-caption-sm: 12px;
  --leading-caption-sm: 1.5;
  --tracking-caption-sm: -0.48px;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: -0.56px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.49;
  --tracking-body-sm: -0.22px;
  --text-body: 18px;
  --leading-body: 1.33;
  --tracking-body: -0.18px;
  --text-body-lg: 23px;
  --leading-body-lg: 1.25;
  --tracking-body-lg: -0.46px;
  --text-subheading: 30px;
  --leading-subheading: 1.14;
  --tracking-subheading: -0.9px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.5px;
  --text-heading: 48px;
  --leading-heading: 1;
  --tracking-heading: -1.3px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 0.96;
  --tracking-heading-lg: -2.46px;
  --text-display: 96px;
  --leading-display: 0.9;
  --tracking-display: -4.51px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
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
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-54: 54px;
  --spacing-89: 89px;
  --spacing-113: 113px;
  --spacing-167: 167px;
  --radius-cards: 12px;
  --radius-pills: 24px;
  --radius-inputs: 12px;
  --radius-buttons: 12px;
  --radius-specialtycards: 18px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;
  --shadow-xl-5: rgba(0, 0, 0, 0.12) 0px 0.5px 1px 0px;
  --shadow-xl-6: rgba(0, 0, 0, 0.2) 0px 0.5px 2px 0px;
}
```
