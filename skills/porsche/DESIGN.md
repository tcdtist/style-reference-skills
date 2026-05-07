---
version: alpha
name: "Porsche"
description: "This system projects an image of controlled power and exclusivity, reflecting the Porsche brand. The primary visual tension arises from the interplay of stark black and white surfaces, punctuated by crisp, minimal typography. Design decisions lean towards functional elegance, conveying luxury through restraint and precise spacing rather than overt embellishment, often employing photography within geometric containers."
theme: "mixed"
industry: "other"
source_url: "https://porsche.com"
refero_style_id: "98676f9d-5c41-413b-afdc-4a87deb154d6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775927603337-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775927603337-thumb.jpg"
extracted_at: "2026-04-11T17:13:40.207Z"
---

# Porsche — Style Reference

> Precision engineered sleekness – every element is a calculated, high-contrast decision on a clean canvas.

**Theme:** mixed

**Industry:** other

This system projects an image of controlled power and exclusivity, reflecting the Porsche brand. The primary visual tension arises from the interplay of stark black and white surfaces, punctuated by crisp, minimal typography. Design decisions lean towards functional elegance, conveying luxury through restraint and precise spacing rather than overt embellishment, often employing photography within geometric containers.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian | #000000 | `--color-obsidian` | Major text, site background for dark sections, button text on light backgrounds, card surfaces in dark mode, significant border colors. |
| Ghost White | #ffffff | `--color-ghost-white` | Default page background, text on dark backgrounds, interactive element backgrounds. |
| Charcoal Accent | #0e0e12 | `--color-charcoal-accent` | Secondary text in dark sections, subtle background variations to create depth. |
| Slate Text | #535457 | `--color-slate-text` | Supporting text, input placeholder text. |
| Deep Black Text | #010205 | `--color-deep-black-text` | Primary headings and prominent body text on light backgrounds. |
| Input Placeholder | #949598 | `--color-input-placeholder` | Placeholder text for input fields, light borders. |

## Tokens — Typography

### Porsche Next

- **Token:** `--font-porsche-next`
- **Substitute:** Inter, Montserrat
- **Weights:** 400, 600
- **Sizes:** 14px, 16px, 33px, 43px, 73px, 95px
- **Line heights:** 1.19, 1.21, 1.26, 1.31, 1.50, 1.55, 1.88
- **Letter spacing:** normal
- **Role:** The sole typeface, used across all elements from headings to body text and interactive components. The variable weights and sizes allow for a highly refined typographic hierarchy without introducing additional families, prioritizing brand consistency.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-81 | 81px | `--spacing-81` |
| spacing-179 | 179px | `--spacing-179` |
| spacing-186 | 186px | `--spacing-186` |
| spacing-211 | 211px | `--spacing-211` |
| spacing-225 | 225px | `--spacing-225` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| badges | 4px |
| inputs | 4px |
| buttons | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 0px |

## Components

### Countdown Teaser Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Model Cards Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Footer Scroll Indicator & Section Title

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Headline

**Role:** Primary visual weight on section introductions.

Set in Porsche Next, weight 400 or 600, size 73px or 95px on a dark background, using Ghost White text. Positioned left-aligned on the hero image.

### Transparent Border Button

**Role:** Secondary call to action.

Background transparent, text Obsidian, border Obsidian, 12px border radius. Padding is not explicitly defined but appears minimal around text.

### Dark Overlay Card

**Role:** Content container for showcasing product categories.

Background Obsidian, 8px border radius, no box-shadow. Zero padding, with image content filling the card. Inner text is Ghost White, Porsche Next, typically 33px or 43px.

### Standard Input Field

**Role:** User data entry.

Background transparent, text Input Placeholder (#949598), border Input Placeholder (#949598), 4px border radius. Padding 8px vertical, 49px horizontal.

### Ghost Badge

**Role:** Category labels or navigation items.

Background transparent, text Obsidian, 0px border radius for most variants, 4px for some. Minimal padding for text-only, or significant bottom padding for larger, image-related badges.

### Footer Scroll Indicator

**Role:** Navigation cue for returning to top.

Small arrow icon pointing up, with 'Volver arriba' (Go back up) text. Text is Ghost White on an Obsidian background, Porsche Next, weight 400, size 14px or 16px.

## Do's and Don'ts

### Do

- Use Obsidian (#000000) for all primary body text and most UI elements on light backgrounds.
- Maintain a clear visual hierarchy with Porsche Next, reserving larger sizes (73px, 95px) for hero headlines and smaller sizes (14px, 16px) for details and navigation.
- Apply 8px radius consistently to all content cards and larger visual containers.
- Employ the 12px radius for interactive elements like buttons, creating a subtle contrast with card radii.
- Prioritize generous vertical section gaps of 63px or 81px to ensure a spacious and premium feel.
- Leverage the pure contrast of #000000 and #ffffff for text and background pairings to achieve maximum readability and a bold aesthetic.

### Don't

- Avoid using multiple font families; adhere strictly to Porsche Next for all typography.
- Do not introduce decorative shadows; the design relies on flat, high-contrast surfaces and careful spacing for depth.
- Refrain from using saturated accent colors; the palette is strictly achromatic to maintain sophistication.
- Do not deviate from the established radii of 8px (cards), 12px (buttons), and 4px (inputs/badges); consistent subtle shaping is key.
- Avoid dense information blocks; use spacious layouts with ample white (or black) space around content.
- Do not use gradients; the system employs flat colors for a crisp, unambiguous presentation.

## Imagery

Photography is paramount, featuring product (cars) either tightly cropped and pristine, often under a dark veil to hint at new releases, or in epic, dynamic landscape settings. Images are mostly full-bleed within sections or large product cards, with sharp, unmasked edges. No illustrations or abstract graphics are present; the visual focus is entirely on the vehicles themselves and their aspirational context. The icons are universally outlined and achromatic, blending seamlessly into the UI.

## Layout

The layout combines full-bleed visual sections with contained content blocks. The hero features a large, dark, full-viewport image with white, left-aligned typography. Subsequent sections alternate between full-width black backgrounds and pure white content areas. Content frequently uses a two-column distribution with text on one side and an image or card on the other, or grids of product cards. A consistent pageMaxWidth is not imposed, with elements adapting to fill available space or aligning to a logical content core. Vertical spacing is generous, creating distinct visual breaks between sections.

## Similar Brands

- **Aston Martin** — Shares a monochromatic, high-contrast aesthetic and a focus on premium product photography against stark backgrounds.
- **Mercedes-Benz** — Employs similar typography and a spacious, clean layout to convey luxury and technological advancement without excessive visual noise.
- **Rimowa** — Uses high-contrast black and white, minimalist typography, and a strong emphasis on product imagery within a structured, often grid-based layout.
- **Apple** — Similar approach to product marketing through clean layouts, generous whitespace, and high-quality, often full-bleed, product photography to emphasize design purity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian: #000000;
  --color-ghost-white: #ffffff;
  --color-charcoal-accent: #0e0e12;
  --color-slate-text: #535457;
  --color-deep-black-text: #010205;
  --color-input-placeholder: #949598;
  --font-porsche-next: 'Porsche Next', Inter, Montserrat;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-30: 30px;
  --spacing-49: 49px;
  --spacing-63: 63px;
  --spacing-81: 81px;
  --spacing-179: 179px;
  --spacing-186: 186px;
  --spacing-211: 211px;
  --spacing-225: 225px;
  --radius-cards: 8px;
  --radius-badges: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 12px;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian: #000000;
  --color-ghost-white: #ffffff;
  --color-charcoal-accent: #0e0e12;
  --color-slate-text: #535457;
  --color-deep-black-text: #010205;
  --color-input-placeholder: #949598;
  --font-porsche-next: 'Porsche Next', Inter, Montserrat;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-30: 30px;
  --spacing-49: 49px;
  --spacing-63: 63px;
  --spacing-81: 81px;
  --spacing-179: 179px;
  --spacing-186: 186px;
  --spacing-211: 211px;
  --spacing-225: 225px;
  --radius-cards: 8px;
  --radius-badges: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 12px;
}
```
