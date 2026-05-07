---
version: alpha
name: "SwimClub"
description: "SwimClub projects authority through a deliberate contrast of quiet, near-monochromatic UI with a singular vivid orange accent, and a blend of modern grotesk typography with a distinctive pixelated display font for key statistics. The design feels grounded and scientific, utilizing strong visual hierarchy and a comfortable density. Subtle gradients add depth to backgrounds, while component treatments remain lightweight, emphasizing content over heavy decoration."
theme: "light"
industry: "other"
source_url: "https://swimclub.co"
refero_style_id: "d7a73e16-4b3e-4b9d-aef2-2c31a9db7457"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508957998-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508957998-thumb.jpg"
extracted_at: "2026-04-30T00:29:44.491Z"
---

# SwimClub — Style Reference

> Scientific precision, stark contrast

**Theme:** light

**Industry:** other

SwimClub projects authority through a deliberate contrast of quiet, near-monochromatic UI with a singular vivid orange accent, and a blend of modern grotesk typography with a distinctive pixelated display font for key statistics. The design feels grounded and scientific, utilizing strong visual hierarchy and a comfortable density. Subtle gradients add depth to backgrounds, while component treatments remain lightweight, emphasizing content over heavy decoration.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, strong borders, dark backgrounds in mixed sections, button text on light backgrounds |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, button backgrounds, text on dark backgrounds |
| Atlantic Fog | #d2dce1 | `--color-atlantic-fog` | Dominant canvas color, subtle background for sections and footers |
| Mid-Gray | #666666 | `--color-mid-gray` | Muted text, secondary information, auxiliary borders |
| Silver Dust | #b3b3b3 | `--color-silver-dust` | Faint borders, decorative elements, ghost button states |
| Sunset Orange | #ff9e00 | `--color-sunset-orange` | Accent backgrounds for highlight sections, indicators, and as a strong supporting color |
| Oceanic Gradient | #417390 | `--color-oceanic-gradient` | Hero section background, creating depth and a sense of calm |
| Subtle Surface Gradient | #d2dce0 | `--color-subtle-surface-gradient` | Soft transition for surface backgrounds, adding subtle texture |

## Tokens — Typography

### Px Grotesk

- **Token:** `--font-px-grotesk`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 12px, 15px, 16px, 17px, 21px, 31px, 37px, 52px, 74px
- **Line heights:** 1.05, 1.10, 1.30, 1.70
- **Letter spacing:** normal
- **Role:** Primary typeface for most text elements including body, headings, and navigation. Its clean, geometric form provides a modern and authoritative tone.

### Apercu Mono Pro

- **Token:** `--font-apercu-mono-pro`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 15px, 17px
- **Line heights:** 1.10, 1.20
- **Letter spacing:** 0.0200em
- **Role:** Used for specific functional text, like links in navigation or data points, providing a technical, precise feel with its monospaced appearance and slight tracking.

### Swimclub

- **Token:** `--font-swimclub`
- **Substitute:** Pixelify Sans
- **Weights:** 400
- **Sizes:** 96px, 105px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Exclusive display font for impactful numerical data or special headlines, giving a distinctive retro-digital, scientific-data aesthetic. The large size and pixelated style are key to its identity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.7 | — | `--text-caption` |
| body-sm | 15px | 1.7 | — | `--text-body-sm` |
| subheading | 21px | 1.3 | — | `--text-subheading` |
| heading-sm | 31px | 1.1 | — | `--text-heading-sm` |
| heading | 37px | 1.1 | — | `--text-heading` |
| heading-lg | 52px | 1.05 | — | `--text-heading-lg` |
| display | 74px | 1.05 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-251 | 251px | `--spacing-251` |
| spacing-277 | 277px | `--spacing-277` |
| spacing-283 | 283px | `--spacing-283` |
| spacing-308 | 308px | `--spacing-308` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 0px |
| buttons | 0px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 120px |
| cardPadding | 32px |
| elementGap | 4px |

## Components

### Primary Ghost Button

**Role:** Interactive element, calls to action

Ghost button with no background, black text, and a 1px solid black border. Used for navigation and primary actions that need prominence without a filled background. Text is Px Grotesk, weight 400. Padding zero for nav elements. Color #000000, border #000000, radius 0px.

### Filled White Button

**Role:** Interactive element, calls to action

Solid white background button with black text. Used for primary calls to action like 'GET STARTED'. Text is Px Grotesk, weight 400. Color #000000, background #ffffff, border #000000, radius 0px.

### Subtle Accent Button

**Role:** Secondary interactive element, filtering, categorization

Lightly tinted background, black text, and a 0px border. For less prominent actions or active states that require a subtle visual cue. Text Px Grotesk, weight 400. Color #000000, background oklab(0 0 0 / 0.05), radius 0px. Padding 32px all around.

### Muted Border Button

**Role:** Tertiary interactive element, inactive states

Transparent background button with muted black text and muted black border. Used for inactive or less emphasized actions. Text Px Grotesk, weight 400. Color oklab(0 0 0 / 0.3), border oklab(0 0 0 / 0.3), radius 0px.

### Text Input (Default)

**Role:** Form element

Standard input field with a white background and black text. Features a 0px border. Text is Px Grotesk. Color #000000, background #ffffff. Padding 0px top/bottom, 8px left/right.

### Info Card

**Role:** Content container, feature display

Rectangular container with a white background and a 1px solid black border. Houses text content. Padding 32px, radius 0px.

### Highlight Section

**Role:** Prominent information display

A full-width section with a Sunset Orange (#ff9e00) background. Contains contrast text and distinct pixelated numbers for stats. This defines a visually important content block. Padding is substantial and consistent.

## Do's and Don'ts

### Do

- Prioritize Px Grotesk for all body and heading text, reserving Apercu Mono Pro for technical details and Swimclub for large numerical displays.
- Use Midnight Ink (#000000) for primary text on light backgrounds and Canvas White (#ffffff) for text on dark or Sunset Orange (#ff9e00) backgrounds to maintain contrast.
- Employ Atlantic Fog (#d2dce1) as the default background for general page sections, creating a subtle visual distinction from pure white content blocks.
- Maintain a strict 0px border-radius for all interactive elements and containers, emphasizing a sharp, precise brand aesthetic.
- Utilize liberal padding, especially '32px' for cards and buttons, and '120px' for vertical section gaps, to create a comfortable, spacious layout.
- Employ the Oceanic Gradient as a background for hero sections or prominent visual blocks to introduce subtle depth and visual interest.
- Use Sunset Orange (#ff9e00) sparingly as an accent color for highlight sections or critical information, ensuring it stands out against the neutral palette.

### Don't

- Avoid using rounded corners; the system's aesthetic is defined by sharp, precise edges.
- Do not introduce additional vibrant colors; Sunset Orange (#ff9e00) is the only chromatic accent.
- Refrain from using heavy shadows or complex elevation; components should feel grounded and part of the surface.
- Do not deviate from the specified typography families, weights, or the intentional use of Apercu Mono Pro for data and Swimclub for large numbers.
- Avoid tight spacing; maintain the comfortable density with `120px` section gaps and `32px` card/button padding.
- Do not use gradients as primary fills for interactive elements; they are reserved for background depth.
- Introduce no new border styles beyond solid 1px lines; the system relies on clean, unambiguous divisions.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Atlantic Fog Canvas | #d2dce1 | Primary page background, footer background. |
| 1 | Canvas White Panel | #ffffff | Dominant surface for content blocks, cards, and primary sections. |
| 2 | Subtle Accent Surface | #0000000d | Slightly elevated or interactive elements, like some button backgrounds. |

## Similar Brands

- **Huel** — Stark, scientific aesthetic with bold typography and a limited, punchy accent color against neutrals.
- **Glossier** — Clean, product-focused photography and a modern, no-nonsense typographic approach with a single, recognizable brand color.
- **Magic Spoon** — Playful, custom typography mixed with a generally clean UI and bright, singular accent colors for energy.
- **Whoop** — Data-driven, scientific presentation with a strong emphasis on clean typography and a defined accent color for interactive elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-atlantic-fog: #d2dce1;
  --color-mid-gray: #666666;
  --color-silver-dust: #b3b3b3;
  --color-sunset-orange: #ff9e00;
  --color-oceanic-gradient: #417390;
  --color-subtle-surface-gradient: #d2dce0;
  --font-px-grotesk: 'Px Grotesk', Inter;
  --font-apercu-mono-pro: 'Apercu Mono Pro', Space Mono;
  --font-swimclub: 'Swimclub', Pixelify Sans;
  --text-caption: 12px;
  --leading-caption: 1.7;
  --text-body-sm: 15px;
  --leading-body-sm: 1.7;
  --text-subheading: 21px;
  --leading-subheading: 1.3;
  --text-heading-sm: 31px;
  --leading-heading-sm: 1.1;
  --text-heading: 37px;
  --leading-heading: 1.1;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.05;
  --text-display: 74px;
  --leading-display: 1.05;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-251: 251px;
  --spacing-277: 277px;
  --spacing-283: 283px;
  --spacing-308: 308px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --radius-default: 0px;
  --surface-atlantic-fog-canvas: #d2dce1;
  --surface-canvas-white-panel: #ffffff;
  --surface-subtle-accent-surface: #0000000d;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-atlantic-fog: #d2dce1;
  --color-mid-gray: #666666;
  --color-silver-dust: #b3b3b3;
  --color-sunset-orange: #ff9e00;
  --color-oceanic-gradient: #417390;
  --color-subtle-surface-gradient: #d2dce0;
  --font-px-grotesk: 'Px Grotesk', Inter;
  --font-apercu-mono-pro: 'Apercu Mono Pro', Space Mono;
  --font-swimclub: 'Swimclub', Pixelify Sans;
  --text-caption: 12px;
  --leading-caption: 1.7;
  --text-body-sm: 15px;
  --leading-body-sm: 1.7;
  --text-subheading: 21px;
  --leading-subheading: 1.3;
  --text-heading-sm: 31px;
  --leading-heading-sm: 1.1;
  --text-heading: 37px;
  --leading-heading: 1.1;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.05;
  --text-display: 74px;
  --leading-display: 1.05;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-251: 251px;
  --spacing-277: 277px;
  --spacing-283: 283px;
  --spacing-308: 308px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --radius-default: 0px;
  --surface-atlantic-fog-canvas: #d2dce1;
  --surface-canvas-white-panel: #ffffff;
  --surface-subtle-accent-surface: #0000000d;
}
```
