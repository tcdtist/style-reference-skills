---
version: alpha
name: "Deezer"
description: "This design system evokes a 'Digital Nightclub' vibe, pairing a dark, almost black background with vibrant, single-hue accents. Prominent high-contrast typography, especially the massive, weighty headlines, grabs immediate attention. The liberal use of a vivid violet for interactive elements and highlights creates an energetic pulse against the deep neutrals, reminiscent of neon lighting in a dim space. Sharp corners on most elements are softened by a few key rounded components, adding subtle visual dynamism."
theme: "dark"
industry: "media"
source_url: "https://deezer.com"
refero_style_id: "502af24a-b765-44b2-828f-dd610f27a125"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775943804340-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775943804340-thumb.jpg"
extracted_at: "2026-04-11T21:43:47.024Z"
---

# Deezer — Style Reference

> Electric Violet Nightclub – a bold, high-contrast digital space pulsates with vibrant purple against a deep, dark backdrop.

**Theme:** dark

**Industry:** media

This design system evokes a 'Digital Nightclub' vibe, pairing a dark, almost black background with vibrant, single-hue accents. Prominent high-contrast typography, especially the massive, weighty headlines, grabs immediate attention. The liberal use of a vivid violet for interactive elements and highlights creates an energetic pulse against the deep neutrals, reminiscent of neon lighting in a dim space. Sharp corners on most elements are softened by a few key rounded components, adding subtle visual dynamism.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #0f0d13 | `--color-midnight-void` | Primary background, deep sections, dark text on light elements. |
| Ghost White | #fdfcfe | `--color-ghost-white` | Primary text, contrasting backgrounds for nested elements, card surfaces. |
| Slate Echo | #555257 | `--color-slate-echo` | Secondary text, disabled states, subtle borders. A desaturated shadow of the primary text. |
| Ash Whisper | #a9a6aa | `--color-ash-whisper` | Tertiary text, subtle separators, less prominent information. Acts as a light gray against the dark background. |
| Deep Violet | #a238ff | `--color-deep-violet` | Primary interactive elements like CTA buttons and active navigation items — providing focus and urgency against the dark theme. |
| Lavender Haze | #d09aff | `--color-lavender-haze` | Subtle visual highlights, secondary interactive elements, or thematic details. |
| Dark Plum | #14041 | `--color-dark-plum` | Decorative strokes, background patterns, adding depth with a hint of purple tint to near-black. |

## Tokens — Typography

### Deezer Brand

- **Token:** `--font-deezer-brand`
- **Substitute:** Montserrat Black
- **Weights:** 700, 800
- **Sizes:** 18px, 19px, 24px, 35px, 46px, 56px, 120px, 140px
- **Line heights:** 0.71, 0.90, 1.00, 1.04, 1.20
- **Letter spacing:** 0.002, 0.004, 0.005, 0.013
- **Role:** Display headlines and prominent calls-to-action. The extremely tight line height and bold weight create an aggressive, confident statement.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 20px
- **Line heights:** 1.00, 1.20, 1.33, 1.38, 1.50, 1.56, 1.75, 1.79
- **Letter spacing:** normal
- **Role:** Body copy, navigation links, button labels, and secondary information. Its clean legibility provides a functional contrast to the expressive display font.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0px | `--text-caption` |
| body-sm | 14px | 1.56 | 0px | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 18px | 1.2 | 0.005px | `--text-subheading` |
| heading-sm | 20px | 1.33 | 0px | `--text-heading-sm` |
| heading | 24px | 1 | 0.004px | `--text-heading` |
| heading-lg | 35px | 1.04 | 0.002px | `--text-heading-lg` |
| display | 56px | 0.9 | 0.013px | `--text-display` |
| display-xl | 120px | 0.71 | 0.013px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-127 | 127px | `--spacing-127` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-190 | 190px | `--spacing-190` |
| spacing-235 | 235px | `--spacing-235` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| badges | 9px / 75% |
| buttons | 12px |
| general | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 90-140px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Pricing Card — Premium 1 Month Free

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### FAQ Accordion

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### CTA Banner — Live the Music with Deezer

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Secondary Ghost Button

**Role:** Action

Ghost White (#fdfcfe) background, Midnight Void (#191922) text, 12px border-radius, 8px vertical padding, 32px horizontal padding. Used for less prominent actions.

### Tertiary Dark Button

**Role:** Action

Midnight Void (#121216 - derived from component), Ghost White (#fdfcfe) text, 8px border-radius, 4px vertical padding, 16px horizontal padding. For minor actions or within darker sections.

### Feature Card

**Role:** Content container

Ghost White (#fdfcfe) background, 8px border-radius, 24px padding on all sides. Used for presenting information blocks on a light surface.

### Navigation Link

**Role:** Navigation

Inter font, 16px, 400 weight, Midnight Void (#0f0d13) color on light background or Ghost White (#fdfcfe) on dark background. No explicit background/border, interaction is text color change.

## Do's and Don'ts

### Do

- Prioritize Deep Violet (#a238ff) for all primary interactive elements to maintain energetic brand presence.
- Use Deezer Brand font exclusively for display headings (35px and above) and critical calls to action, leveraging weights 700 and 800 for maximum impact.
- Maintain a clear high-contrast hierarchy with Midnight Void (#0f0d13) and Ghost White (#fdfcfe) as primary text/background pairing.
- Apply 12px border-radius for primary buttons and 8px for cards and secondary buttons to establish a consistent softness.
- Ensure generous vertical spacing between sections (90-140px) to provide clear visual breaks and comfortable density.
- Utilize Inter font for all body copy, navigation, and detailed information, at weights 400-600 for optimal legibility.

### Don't

- Avoid using gray tones for primary interactive elements; reserve Deep Violet (#a238ff) for key actions.
- Do not use Deezer Brand font for body text or small labels; its scale and letter spacing are designed for display.
- Refrain from introducing additional saturated colors beyond the established violet palette, as it dilutes the brand's energetic focus.
- Do not use soft shadows for elevation; rely on background color shifts between Midnight Void (#0f0d13) and Ghost White (#fdfcfe) for depth.
- Avoid mixed border-radii within the same component type; stick to 12px for prominent buttons and 8px for cards.
- Do not introduce tight letter spacing on Inter font family smaller than 16px; it should remain 'normal' for readability.

## Similar Brands

- **Spotify** — Dominant use of a dark theme with a single prominent accent color for interactivity, though Spotify uses green.
- **Apple Music** — Clean, high-contrast dark mode interfaces with focus on bold typography and a limited bright color palette for highlights.
- **Tidal** — Sleek dark interface with an emphasis on strong typography and a focused color scheme to highlight content and calls to action.
- **SoundCloud** — Features a strong brand color (orange) used as a primary accent against a predominantly dark or light neutral canvas.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #0f0d13;
  --color-ghost-white: #fdfcfe;
  --color-slate-echo: #555257;
  --color-ash-whisper: #a9a6aa;
  --color-deep-violet: #a238ff;
  --color-lavender-haze: #d09aff;
  --color-dark-plum: #14041;
  --font-deezer-brand: 'Deezer Brand', Montserrat Black;
  --font-inter: 'Inter', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0.005px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: 0px;
  --text-heading: 24px;
  --leading-heading: 1;
  --tracking-heading: 0.004px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: 0.002px;
  --text-display: 56px;
  --leading-display: 0.9;
  --tracking-display: 0.013px;
  --text-display-xl: 120px;
  --leading-display-xl: 0.71;
  --tracking-display-xl: 0.013px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-56: 56px;
  --spacing-90: 90px;
  --spacing-112: 112px;
  --spacing-125: 125px;
  --spacing-127: 127px;
  --spacing-140: 140px;
  --spacing-153: 153px;
  --spacing-190: 190px;
  --spacing-235: 235px;
  --radius-cards: 8px;
  --radius-badges: 9px / 75%;
  --radius-buttons: 12px;
  --radius-general: 8px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #0f0d13;
  --color-ghost-white: #fdfcfe;
  --color-slate-echo: #555257;
  --color-ash-whisper: #a9a6aa;
  --color-deep-violet: #a238ff;
  --color-lavender-haze: #d09aff;
  --color-dark-plum: #14041;
  --font-deezer-brand: 'Deezer Brand', Montserrat Black;
  --font-inter: 'Inter', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0.005px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: 0px;
  --text-heading: 24px;
  --leading-heading: 1;
  --tracking-heading: 0.004px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: 0.002px;
  --text-display: 56px;
  --leading-display: 0.9;
  --tracking-display: 0.013px;
  --text-display-xl: 120px;
  --leading-display-xl: 0.71;
  --tracking-display-xl: 0.013px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-56: 56px;
  --spacing-90: 90px;
  --spacing-112: 112px;
  --spacing-125: 125px;
  --spacing-127: 127px;
  --spacing-140: 140px;
  --spacing-153: 153px;
  --spacing-190: 190px;
  --spacing-235: 235px;
  --radius-cards: 8px;
  --radius-badges: 9px / 75%;
  --radius-buttons: 12px;
  --radius-general: 8px;
}
```
