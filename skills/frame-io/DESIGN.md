---
version: alpha
name: "Frame.io"
description: "Frame.io's design evokes a sophisticated, high-tech command center with a dark, immersive background that immediately draws focus to content. Dark, deeply saturated purples and blues provide an atmospheric stage, accented by electric blue interactive elements that pulse like system indicators. Sharp typography with generous letter-spacing on display elements contrasts with soft-cornered cards, creating a tension between precision and approachability, suitable for creative professionals who value both. The overall impression is one of quiet power and focused efficiency."
theme: "dark"
industry: "saas"
source_url: "https://frame.io"
refero_style_id: "30c3aa18-4323-4448-8ddd-3ca933fe5780"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924773678-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924773678-thumb.jpg"
extracted_at: "2026-04-11T16:26:36.427Z"
---

# Frame.io — Style Reference

> Midnight control panel, glowing with purpose.

**Theme:** dark

**Industry:** saas

Frame.io's design evokes a sophisticated, high-tech command center with a dark, immersive background that immediately draws focus to content. Dark, deeply saturated purples and blues provide an atmospheric stage, accented by electric blue interactive elements that pulse like system indicators. Sharp typography with generous letter-spacing on display elements contrasts with soft-cornered cards, creating a tension between precision and approachability, suitable for creative professionals who value both. The overall impression is one of quiet power and focused efficiency.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Deepest dark for backgrounds and text when used against lightest accents, like a black hole absorbing light. |
| Void Black | #0a0a13 | `--color-void-black` | Primary surface background, creating the foundational darkness for the UI. |
| Dark Nebula | #08080c | `--color-dark-nebula` | Secondary surface background, subtly lighter than Void Black for nested elements, suggesting layered depth. |
| Twilight Graphite | #757580 | `--color-twilight-graphite` | Subtle text and icon color, providing contrast against dark backgrounds without being stark white. |
| Cloud Whisper | #fcfcfc | `--color-cloud-whisper` | High-contrast text color against dark backgrounds, for primary headlines and interactive elements. |
| Pale Ash | #a3a3b3 | `--color-pale-ash` | Subtle supporting text and soft borders, offering a muted contrast. |
| Frost Gleam | #dedfee | `--color-frost-gleam` | Very light text and borders, almost white, used for highlights and delicate details. |
| Space Blue Gradient | #0a001 | `--color-space-blue-gradient` | Hero section background, establishing the deep, cosmic aesthetic. |
| Electric Indigo | #6199f6 | `--color-electric-indigo` | Primary accent for interactive elements, links, and icons, drawing immediate attention. |
| Cosmic Violet | #5b53ff | `--color-cosmic-violet` | Distinctive accent for key call-to-actions, signaling prime interactivity. |
| Peripheral Haze Gradient | #000b35 | `--color-peripheral-haze-gradient` | Subtle background gradient for atmospheric depth, hinting at distant light sources. |
| Violet Hue Radial | #4e55a8 | `--color-violet-hue-radial` | Localized background glow, adding subtle color variation and depth. |

## Tokens — Typography

### FrameGothic

- **Token:** `--font-framegothic`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 11px, 12px, 13px, 14px, 15px, 16px, 18px, 24px, 30px, 38px, 48px, 80px
- **Line heights:** 0.96, 1.00, 1.02, 1.04, 1.16, 1.20, 1.25, 1.30, 1.45, 1.50
- **Letter spacing:** -0.045em at 80px, -0.04em at 48px, -0.035em at 38px, -0.03em at 30px, 0.01em for body text
- **Role:** Primary brand typeface for all headings, body text, and UI elements. Its sharp, modern sans-serif structure underpins the tech-forward identity. Condensed letter spacing at large sizes creates a focused, intense feel unlike typical web fonts.

### NeueMachinaInktrap

- **Token:** `--font-neuemachinainktrap`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 0.90
- **Letter spacing:** 0.06em
- **Role:** Monospace-style font used for small, technical labels or secondary information where a 'data' look is desired. Its very tight line height and wide letter spacing contribute to its distinct, machine-like character.

### Times

- **Token:** `--font-times`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 10px
- **Line heights:** 1.00
- **Role:** Incidental system font for browser-default elements or extremely small print, indicating minimal brand intervention in these areas.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Role:** Fallback font for general button text and other UI elements, ensuring readability across diverse environments.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0.01px | `--text-caption` |
| body | 14px | 1.5 | 0.01px | `--text-body` |
| subheading | 18px | 1.45 | — | `--text-subheading` |
| heading | 24px | 1.3 | — | `--text-heading` |
| heading-lg | 30px | 1.25 | -0.48px | `--text-heading-lg` |
| display | 80px | 0.96 | -3.6px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-62 | 62px | `--spacing-62` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-106 | 106px | `--spacing-106` |
| spacing-124 | 124px | `--spacing-124` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-176 | 176px | `--spacing-176` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| buttons | 100px |
| small-elements | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner + Section Label

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Ghost Button

**Role:** Default interactive element for secondary actions.

backgroundColor: rgba(0, 0, 0, 0), color: #fcfcfc, borderTopColor: #fcfcfc, borderRadius: 100px (fully rounded ends), paddingTop: 0px, paddingRight: 24px, paddingBottom: 0px, paddingLeft: 24px. Text uses FrameGothic 400. This is the main button style for calls to action against dark backgrounds.

### Tertiary Ghost Button (Dark Text)

**Role:** Subtle interactive elements on lighter backgrounds or when contrast to white text needs adjustment.

backgroundColor: rgba(0, 0, 0, 0), color: #000000, borderTopColor: #000000, borderRadius: 100px, paddingTop: 0px, paddingRight: 24px, paddingBottom: 0px, paddingLeft: 24px. Text uses FrameGothic 400. Used sparingly.

### Navigation Link Button

**Role:** Styling for interactive text navigation elements.

backgroundColor: rgba(0, 0, 0, 0), color: #fcfcfc, borderTopColor: #fcfcfc, borderRadius: 0px, paddingTop: 0px, paddingRight: 0px, paddingBottom: 0px, paddingLeft: 0px. Text uses FrameGothic 400 at small sizes. This is a text-only link that gains button characteristics dynamically.

### Feature Card

**Role:** Used to group related content, often with an icon or small visual.

backgroundColor: #090a18, borderRadius: 24px, boxShadow: none, paddingTop: varies (e.g., 0px), paddingRight: 0px, paddingBottom: varies (e.g., 0px), paddingLeft: 0px. This card is visually distinct with its rounded corners and subtle background.

### Nested UI Card

**Role:** Interior application-like cards for displaying specific content blocks.

backgroundColor: rgba(16, 16, 23, 0.5), borderRadius: 10px, boxShadow: inset 12px 12px 50px 0px #181826, with softer outer shadows. paddingTop: 24px, paddingRight: 24px, paddingBottom: 24px, paddingLeft: 24px. This card creates a strong sense of depth and separation from the background.

## Do's and Don'ts

### Do

- Use Cosmic Violet (#5b53ff) for primary call-to-action buttons, such as 'Start Free Trial'.
- Apply FrameGothic at 80px, weight 400, with -0.045em letter-spacing and 0.96 line-height for main display headlines.
- Utilize the Space Blue Gradient for the hero section background to establish the immersive dark aesthetic.
- Ensure all interactive elements like buttons and navigation links use a borderRadius of 100px for a fully rounded capsule shape.
- Maintain a primary text color of Cloud Whisper (#fcfcfc) on dark backgrounds for readability.
- For nested UI elements, apply the Nested UI Card styling with its distinct inset and outer shadows.
- Employ Pale Ash (#a3a3b3) for secondary informational text and muted borders against darker backgrounds.

### Don't

- Avoid using bright, high-saturation colors beyond Electric Indigo or Cosmic Violet; maintain the muted, dark palette.
- Do not use hard-edged rectangles for buttons or interactive cards; consistently apply the rounded corner radii.
- Refrain from shadows on basic static cards (like Feature Card) unless they are specifically designed for 'nested UI' components.
- Do not vary line-height significantly for body text; stick to 1.5 for FrameGothic at body sizes to preserve readability.
- Avoid generic system fonts for any primary content; always use our custom FrameGothic or NeueMachinaInktrap when appropriate.
- Do not use small letter-spacing on small body text; maintain a 0.01em or normal letter-spacing for readability.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Void Black | #0a0a13 | Base page background, the deepest layer. |
| 1 | Dark Nebula | #08080c | Primary card and content block background, slightly raised from the base. |
| 2 | Nested UI Card Background | #10101780 | Overlay for interactive or highlighted content, creating significant visual separation and depth. |

## Elevation

- **Nested UI Card:** `inset 12px 12px 50px 0px #181826, 84.68px 149.711px 80px 0px rgba(0, 0, 0, 0.31), 54.885px 97.035px 46.852px 0px rgba(0, 0, 0, 0.26), 32.618px 57.666px 25.481px 0px rgba(0, 0, 0, 0.23), 16.936px 29.942px 13px 0px rgba(0, 0, 0, 0.2), 6.9px 12.199px 6.519px 0px rgba(0, 0, 0, 0.18), 1.568px 2.772px 3.148px 0px rgba(0, 0, 0, 0.2)`

## Imagery

This design primarily uses dark product screenshots and UI mockups, often presented within 'virtual screens' or cards that appear to float in the dark space. The treatment is contained within defined shapes, usually with slightly rounded corners (10px). When photography is present, it is dark, moody, and often features human subjects in a somewhat stylized, perhaps technical, context. Icons are typically monoline, filled with Electric Indigo or Cloud Whisper, and serve an explanatory or navigational role. The overall density of imagery is balanced with text, allowing for product features to be visually demonstrated without overwhelming the UI.

## Layout

The page primarily follows a max-width contained layout, likely around 1200px, but with full-bleed hero sections that leverage atmospheric gradients. The hero section is characterized by a large, centered headline over a dark, gradient background, paired with a prominent product screenshot or video. Section rhythms alternate between full-bleed dark gradient backgrounds and more structured dark panels with content. Content arrangements often feature large headlines with supportive body text, followed by multi-column grids (e.g., 4-column feature grids, 2-column text+image layouts). There's a spacious feel between sections, with subtle visual dividers achieved through background shifts. The navigation is a sticky top bar, providing persistent access.

## Similar Brands

- **Figma** — Dark-mode UI, emphasis on creative tools, and often uses specific, distinct typography choices to convey a professional yet accessible feel.
- **GitHub** — Dark theme, use of subtle gradients and shadows for depth, and sharp sans-serif typography for code and UI elements.
- **Linear** — Highly refined dark theme, strategic use of accent colors for interactivity, and emphasis on clear, functional typography with good letter spacing.
- **Spline** — Immersive, dark canvas aesthetic for creative tools, often featuring glowing elements and a focus on product visuals embedded within the UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-void-black: #0a0a13;
  --color-dark-nebula: #08080c;
  --color-twilight-graphite: #757580;
  --color-cloud-whisper: #fcfcfc;
  --color-pale-ash: #a3a3b3;
  --color-frost-gleam: #dedfee;
  --color-space-blue-gradient: #0a001;
  --color-electric-indigo: #6199f6;
  --color-cosmic-violet: #5b53ff;
  --color-peripheral-haze-gradient: #000b35;
  --color-violet-hue-radial: #4e55a8;
  --font-framegothic: 'FrameGothic', Inter;
  --font-neuemachinainktrap: 'NeueMachinaInktrap', IBM Plex Mono;
  --font-times: 'Times', Lora;
  --font-arial: 'Arial', Helvetica Neue;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.48px;
  --text-display: 80px;
  --leading-display: 0.96;
  --tracking-display: -3.6px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-62: 62px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-106: 106px;
  --spacing-124: 124px;
  --spacing-144: 144px;
  --spacing-160: 160px;
  --spacing-176: 176px;
  --radius-cards: 24px;
  --radius-buttons: 100px;
  --radius-small-elements: 10px;
  --surface-void-black: #0a0a13;
  --surface-dark-nebula: #08080c;
  --surface-nested-ui-card-background: #10101780;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-void-black: #0a0a13;
  --color-dark-nebula: #08080c;
  --color-twilight-graphite: #757580;
  --color-cloud-whisper: #fcfcfc;
  --color-pale-ash: #a3a3b3;
  --color-frost-gleam: #dedfee;
  --color-space-blue-gradient: #0a001;
  --color-electric-indigo: #6199f6;
  --color-cosmic-violet: #5b53ff;
  --color-peripheral-haze-gradient: #000b35;
  --color-violet-hue-radial: #4e55a8;
  --font-framegothic: 'FrameGothic', Inter;
  --font-neuemachinainktrap: 'NeueMachinaInktrap', IBM Plex Mono;
  --font-times: 'Times', Lora;
  --font-arial: 'Arial', Helvetica Neue;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.48px;
  --text-display: 80px;
  --leading-display: 0.96;
  --tracking-display: -3.6px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-62: 62px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-106: 106px;
  --spacing-124: 124px;
  --spacing-144: 144px;
  --spacing-160: 160px;
  --spacing-176: 176px;
  --radius-cards: 24px;
  --radius-buttons: 100px;
  --radius-small-elements: 10px;
  --surface-void-black: #0a0a13;
  --surface-dark-nebula: #08080c;
  --surface-nested-ui-card-background: #10101780;
}
```
