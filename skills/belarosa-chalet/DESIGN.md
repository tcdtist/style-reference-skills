---
version: alpha
name: "BelArosa Chalet"
description: "BelArosa Chalet evokes a bespoke alpine luxury aesthetic, blending raw natural textures with refined details. A palette of deep, muted teal and warm off-white creates an understated elegance, punctuated by a delicate golden accent. Typography combines the classic formality of ITC Giovanni Std with the modern versatility of Avenir LT Pro, applied at a comfortable density. Components are minimal, often outlined or ghosted, prioritizing content and image presentation over heavy UI elements."
theme: "light"
industry: "agency"
source_url: "https://www.belarosa-chalet.ch"
refero_style_id: "46c8dbc5-47c8-4796-b94c-5e46dcda3532"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513112362-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513112362-thumb.jpg"
extracted_at: "2026-04-30T01:38:58.813Z"
---

# BelArosa Chalet — Style Reference

> Alpine Chalet Refinement: warm, textural, and quietly luxurious.

**Theme:** light

**Industry:** agency

BelArosa Chalet evokes a bespoke alpine luxury aesthetic, blending raw natural textures with refined details. A palette of deep, muted teal and warm off-white creates an understated elegance, punctuated by a delicate golden accent. Typography combines the classic formality of ITC Giovanni Std with the modern versatility of Avenir LT Pro, applied at a comfortable density. Components are minimal, often outlined or ghosted, prioritizing content and image presentation over heavy UI elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Chalet Teal | #193741 | `--color-chalet-teal` | Primary text, darkened background sections, button borders, subtle UI accents — establishes a sophisticated, grounding depth |
| Deep Teal | #1d414d | `--color-deep-teal` | Gray accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Alpine Gold | #eac486 | `--color-alpine-gold` | Decorative icons, seasonal highlights, subtle branding elements — provides a touch of warmth and luxury against the cool neutrals |
| Paper White | #ffffff | `--color-paper-white` | Page backgrounds, default text in dark sections, borders for light sections, icon fills — functions as the primary canvas |
| Warm Linen | #ebe7e1 | `--color-warm-linen` | Secondary background surfaces, card backgrounds in light contexts — a soft, off-white that adds warmth without starkness |
| Muted Stone | #8c9ba0 | `--color-muted-stone` | Subtle borders, secondary text, inactive states, ghost button borders in a light context — a cool-toned gray for quiet details |
| Rich Black | #000000 | `--color-rich-black` | Input borders, decorative fills, some icon fills — used for high-contrast details against lighter backgrounds |

## Tokens — Typography

### ITC Giovanni Std

- **Token:** `--font-itc-giovanni-std`
- **Substitute:** Georgia, Playfair Display
- **Weights:** 700
- **Sizes:** 16px, 18px, 28px, 48px, 64px
- **Line heights:** 1.10, 1.20, 1.30, 1.40
- **Role:** Display headings and prominent section titles — its seriffed elegance and bold weight establishes a traditional, luxurious tone.

### Avenir LT Pro

- **Token:** `--font-avenir-lt-pro`
- **Substitute:** Open Sans, Lato
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px, 20px, 24px, 28px, 40px
- **Line heights:** 1.00, 1.20, 1.25, 1.40, 1.43, 1.50, 1.71
- **Letter spacing:** 0.1250em, 0.1670em
- **Role:** Body copy, navigation, functional elements, and subheadings — its clean, open forms ensure readability while supporting the sophisticated aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.71 | 1.5px | `--text-caption` |
| body-sm | 14px | 1.5 | 1.5px | `--text-body-sm` |
| body | 16px | 1.43 | 1.5px | `--text-body` |
| subheading | 20px | 1.25 | 1.5px | `--text-subheading` |
| heading | 28px | 1.2 | 0px | `--text-heading` |
| heading-lg | 40px | 1 | 1.25px | `--text-heading-lg` |
| display | 64px | 1.1 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-129 | 129px | `--spacing-129` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-240 | 240px | `--spacing-240` |
| spacing-305 | 305px | `--spacing-305` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 12px |
| buttons | 80px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 24px |

## Components

### Outlined Button

**Role:** Primary action button with a luxury aesthetic

Ghost-style button with a border of Chalet Teal (#193741) or Paper White (#ffffff) and matching text color. Padding is 20px vertical, 32px horizontal. Full pill shape with an 80px border-radius, emphasizing natural and soft forms.

### Text Link

**Role:** Navigation and secondary calls to action

Simple text link, either Chalet Teal (#193741) or Paper White (#ffffff), with no background or padding. Avenir LT Pro, weight 400. Letter spacing of 0.125em at smaller sizes and 0.167em at larger.

### Circular Card Accent

**Role:** Decorative card element for emphasis

Small circular card with Chalet Teal (#193741) background, 100% border-radius, and 16px of horizontal padding to contain content without explicit vertical padding.

### Input Field (Text)

**Role:** Form input elements

Input fields have a Chalet Teal (#193741) background with Paper White (#ffffff) text. A 1px Rich Black (#000000) bottom border for definition. Padding is 8px vertical, 0px horizontal.

## Do's and Don'ts

### Do

- Prioritize ITC Giovanni Std 700 for all display and major section headings to maintain a sense of traditional luxury.
- Use Avenir LT Pro 400 for all body text, navigation, and subordinate UI elements, ensuring consistency and readability.
- Apply Chalet Teal (#193741) as the primary accent color for outlines and text, reserving Alpine Gold (#eac486) for subtle highlights only.
- Employ the 80px border-radius for all primary buttons to achieve a soft, pill-shaped aesthetic.
- Maintain comfortable spacing with 24px as a standard `elementGap` between UI elements and `sectionGap` between major content blocks.
- Use Paper White (#ffffff) as the primary page canvas for light sections and Warm Linen (#ebe7e1) for secondary interactive surfaces.
- Establish interactive elements with an outlined or ghost style using Chalet Teal (#193741) or Deep Teal (#1d414d) borders, avoiding solid filled buttons for primary calls to action.

### Don't

- Avoid using solid filled buttons for primary calls to action; always prefer the outlined or ghost styles.
- Do not introduce new saturated primary colors; limit the accent palette to Alpine Gold (#eac486).
- Avoid using drop shadows or heavy box-shadows that would detract from the site's flat, natural aesthetic.
- Do not deviate from the specified letter-spacing for Avenir LT Pro; its subtle tracking is part of the brand's typographic signature.
- Do not use hard-edged, 0px border-radius for buttons; always apply the 80px radius for a consistent soft feel.
- Do not assume color #0000ee is a brand color; this is a browser default that must be overridden with brand-approved values.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Paper White Canvas | #ffffff | Primary page background for most light-themed sections. |
| 1 | Warm Linen Surface | #ebe7e1 | Secondary background for alternating sections and subtle card surfaces in light contexts. |
| 2 | Chalet Teal Deep Surface | #193741 | Dark background for feature sections, footer, and navigation in header, providing contrast and visual depth. |

## Similar Brands

- **Airelles** — Luxury hotel experience with a focus on immersive photography and sophisticated serif typography on a light canvas.
- **The Chedi Andermatt** — High-end alpine hospitality, using a refined color palette, large imagery, and classic-modern font pairing.
- **Virgin Limited Edition** — Brand of exclusive properties, with similar layout patterns balancing large visuals, elegant text, and a discerning color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-chalet-teal: #193741;
  --color-deep-teal: #1d414d;
  --color-alpine-gold: #eac486;
  --color-paper-white: #ffffff;
  --color-warm-linen: #ebe7e1;
  --color-muted-stone: #8c9ba0;
  --color-rich-black: #000000;
  --font-itc-giovanni-std: 'ITC Giovanni Std', Georgia, Playfair Display;
  --font-avenir-lt-pro: 'Avenir LT Pro', Open Sans, Lato;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --tracking-caption: 1.5px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 1.5px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: 1.5px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: 1.5px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 1.25px;
  --text-display: 64px;
  --leading-display: 1.1;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-129: 129px;
  --spacing-160: 160px;
  --spacing-240: 240px;
  --spacing-305: 305px;
  --radius-links: 12px;
  --radius-buttons: 80px;
  --surface-paper-white-canvas: #ffffff;
  --surface-warm-linen-surface: #ebe7e1;
  --surface-chalet-teal-deep-surface: #193741;
}
```

### Tailwind v4

```css
@theme {
  --color-chalet-teal: #193741;
  --color-deep-teal: #1d414d;
  --color-alpine-gold: #eac486;
  --color-paper-white: #ffffff;
  --color-warm-linen: #ebe7e1;
  --color-muted-stone: #8c9ba0;
  --color-rich-black: #000000;
  --font-itc-giovanni-std: 'ITC Giovanni Std', Georgia, Playfair Display;
  --font-avenir-lt-pro: 'Avenir LT Pro', Open Sans, Lato;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --tracking-caption: 1.5px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 1.5px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: 1.5px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: 1.5px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 1.25px;
  --text-display: 64px;
  --leading-display: 1.1;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-129: 129px;
  --spacing-160: 160px;
  --spacing-240: 240px;
  --spacing-305: 305px;
  --radius-links: 12px;
  --radius-buttons: 80px;
  --surface-paper-white-canvas: #ffffff;
  --surface-warm-linen-surface: #ebe7e1;
  --surface-chalet-teal-deep-surface: #193741;
}
```
