---
version: alpha
name: "AllCaps"
description: "AllCaps is a stark, high-contrast system where typography takes center stage, often acting as the primary visual element. It uses pure white canvases and deep black text, punctuated by bold, almost neon, fuchsia and an unexpected violet. This creates an energetic and unconventional aesthetic focused on typographic expression rather than complex layouts or decorative elements. Surfaces are flat, and interactions are minimal, emphasizing direct visual communication."
theme: "light"
industry: "design"
source_url: "https://www.allcapstype.com"
refero_style_id: "b024c7cb-c0b6-413d-9caf-5fec7ed5071e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514360805-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514360805-thumb.jpg"
extracted_at: "2026-04-30T01:59:38.423Z"
---

# AllCaps — Style Reference

> Typographic Playground, Neon Pop

**Theme:** light

**Industry:** design

AllCaps is a stark, high-contrast system where typography takes center stage, often acting as the primary visual element. It uses pure white canvases and deep black text, punctuated by bold, almost neon, fuchsia and an unexpected violet. This creates an energetic and unconventional aesthetic focused on typographic expression rather than complex layouts or decorative elements. Surfaces are flat, and interactions are minimal, emphasizing direct visual communication.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, input backgrounds |
| Ink Black | #000000 | `--color-ink-black` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Action Fuchsia | #ff003c | `--color-action-fuchsia` | Red outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Neon Violet | #e508ff | `--color-neon-violet` | Pink wash for highlight backgrounds, decorative bands, and soft emphasis behind content |

## Tokens — Typography

### MG ALLCAPS

- **Token:** `--font-mg-allcaps`
- **Substitute:** Montserrat
- **Weights:** 400, 475
- **Sizes:** 12px, 16px
- **Line heights:** 1.15, 1.22
- **Letter spacing:** -0.01em at 12px, -0.013em at 16px
- **Role:** Primary typeface for all UI text, headings, and body content. Its custom nature and varying letter-spacing contribute to the unique typographic voice.

### Bandit Luv

- **Token:** `--font-bandit-luv`
- **Substitute:** Pacifico
- **Weights:** 400
- **Sizes:** 32px, 432px
- **Line heights:** 0.75, 1.15
- **Letter spacing:** normal
- **Role:** Decorative display font for large, brand-specific statements, creating a playful, emphatic effect.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-82 | 82px | `--spacing-82` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-142 | 142px | `--spacing-142` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 3.33333px |
| default | 0px |
| special | 16px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 29px |
| cardPadding | 0px |
| elementGap | 7px |

## Components

### Ghost Button

**Role:** Interactive elements for navigation and secondary actions.

Transparent background, Ink Black text, no borders or padding directly on the element itself, giving a 'ghost' appearance. Radius of 0px.

### Font Specimen Card

**Role:** Display individual typeface styles.

Transparent background, no border, no shadow, and 0px padding. Text is Ink Black from MG ALLCAPS, showcasing different weights and styles. Vertical gap between items is 14px. No specific radius.

### Style Tag

**Role:** Indicate available styles or status.

Small, functional tags with Neon Violet background and Canvas White text, featuring a 3.33333px border radius. Padding of 2px top/bottom and 7px left/right.

### Purchase Callout Badge

**Role:** Small, immediately visible purchase link within a product listing.

Small button with Neon Violet background (#e508ff), Canvas White text (#ffffff). No distinct padding/radius specified on the button itself, often appears directly adjacent to text.

### Minimal Input Field

**Role:** User input for forms.

Canvas White background, Ink Black text. Borders are present but often subtle or contextually defined. Top and bottom padding of 4px. Radius is 0px.

## Do's and Don'ts

### Do

- Always use Ink Black (#000000) for all text and UI outlines unless explicitly specified as an accent.
- Utilize Canvas White (#ffffff) as the dominant background color for all pages and components to maintain a stark, high-contrast look.
- Apply Action Fuchsia (#ff003c) sparingly for decorative elements or specific highlight borders to draw attention.
- Employ Neon Violet (#e508ff) for background accents on small components like tags, ensuring high contrast with Canvas White text.
- Keep all component borders and radii at 0px by default, except for specific tags which use 3.33333px.
- Maintain a compact density with an element gap of 7px and section gap of 29px.
- Leverage the MG ALLCAPS font for all primary text content, using its variable weight and letter-spacing for typographic expression.

### Don't

- Avoid using multiple colors for text or borders; maintain the strict Ink Black and Canvas White contrast.
- Do not introduce shadows or complex elevation; the system is characteristically flat.
- Do not use generic system fonts; MG ALLCAPS and Bandit Luv are essential for brand identity.
- Refrain from adding decorative gradients or elaborate backgrounds; stick to solid colors.
- Do not introduce inconsistent padding on buttons or cards; maintain 0px padding and 0px radius for most interactive elements.
- Avoid breaking line height relationships, particularly with MG ALLCAPS, to preserve the intended typographic density.

## Similar Brands

- **Future Fonts** — Showcases typefaces with minimal UI, letting the typography shine, often using stark contrasts and adventurous display fonts.
- **OHNO Type Co.** — Focus on experimental type design with a dark/light contrast, often featuring large, impactful type as primary imagery.
- **Pangram Pangram Foundry** — Clean, typographic-focused design, frequently using black and white palettes with a single vibrant accent color.
- **Grilli Type** — Prioritizes typography within a clean, high-contrast digital environment, utilizing minimal UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-action-fuchsia: #ff003c;
  --color-neon-violet: #e508ff;
  --font-mg-allcaps: 'MG ALLCAPS', Montserrat;
  --font-bandit-luv: 'Bandit Luv', Pacifico;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-29: 29px;
  --spacing-82: 82px;
  --spacing-89: 89px;
  --spacing-142: 142px;
  --radius-tags: 3.33333px;
  --radius-default: 0px;
  --radius-special: 16px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-action-fuchsia: #ff003c;
  --color-neon-violet: #e508ff;
  --font-mg-allcaps: 'MG ALLCAPS', Montserrat;
  --font-bandit-luv: 'Bandit Luv', Pacifico;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-29: 29px;
  --spacing-82: 82px;
  --spacing-89: 89px;
  --spacing-142: 142px;
  --radius-tags: 3.33333px;
  --radius-default: 0px;
  --radius-special: 16px;
}
```
