---
version: alpha
name: "Atlas Card"
description: "Atlas Card is a statement in understated luxury, built on a near-black canvas that allows its singular, deep violet accent to resonate with subtle authority. The design emanates a curated exclusivity through its scarce use of high-contrast elements, relying instead on a precise monochromatic scale and bespoke typography with unique letter-spacing to convey richness. Form is dictated by function, with oversized rounded buttons providing a soft, approachable counterpoint to the otherwise sharp, clean lines of the underlying layout."
theme: "dark"
industry: "fintech"
source_url: "https://atlascard.com"
refero_style_id: "3f6ef3c1-f98f-4cd9-bdf0-545059758705"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924224330-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924224330-thumb.jpg"
extracted_at: "2026-04-11T16:17:25.246Z"
---

# Atlas Card — Style Reference

> Midnight Velvet Vault – rich, dark surfaces punctuated by a single, deep gem-toned light.

**Theme:** dark

**Industry:** fintech

Atlas Card is a statement in understated luxury, built on a near-black canvas that allows its singular, deep violet accent to resonate with subtle authority. The design emanates a curated exclusivity through its scarce use of high-contrast elements, relying instead on a precise monochromatic scale and bespoke typography with unique letter-spacing to convey richness. Form is dictated by function, with oversized rounded buttons providing a soft, approachable counterpoint to the otherwise sharp, clean lines of the underlying layout.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Page backgrounds, section backgrounds, deep surface elements. |
| Smoked Glass | #1e1e1 | `--color-smoked-glass` | Button backgrounds for secondary actions, subtle background shifts. |
| Charcoal Grey | #272727 | `--color-charcoal-grey` | Tertiary backgrounds, slightly elevated surfaces. |
| Dark Slate | #333333 | `--color-dark-slate` | Minimal background shifts, almost imperceptible texture. |
| Deep Graphite | #3d3d3d | `--color-deep-graphite` | Minimal background shifts, almost imperceptible texture. |
| Bright Silver | #f8f8f8 | `--color-bright-silver` | Primary text color, button text, high-contrast foreground elements against dark backgrounds. |
| Pure White | #ffffff | `--color-pure-white` | Subtle highlights, specific text elements for highest contrast. |
| Cadet Grey | #cccccc | `--color-cadet-grey` | Border colors for interactive elements, secondary text. |
| Mid-Grey | #808080 | `--color-mid-grey` | Placeholder text, minor labels, low-emphasis information. |
| Atlas Violet | #001391 | `--color-atlas-violet` | Primary buttons, interactive state indicators, active links — the single point of visual interest against the dark canvas. |
| Dark Gradient | #000000 | `--color-dark-gradient` | Subtle background depth for certain sections, adding visual richness. |
| Mist Gradient | #9B97B8 | `--color-mist-gradient` | Background for hero sections, blending atmospheric photographic elements. |

## Tokens — Typography

### Sequel Sans Headline Book

- **Token:** `--font-sequel-sans-headline-book`
- **Substitute:** Inter, sans-serif
- **Weights:** 400, 700
- **Sizes:** 16px, 23px, 24px, 28px
- **Line heights:** 1.17, 1.30, 1.40
- **Letter spacing:** -0.008em at 23-28px, 0.008em at 16px
- **Role:** Headlines and emphasis text; the letter-spacing is precisely tuned for specific sizes to give a refined feel, with subtle tightening for larger displays and a relaxed feel for smaller functional text.

### Sequel Sans Book

- **Token:** `--font-sequel-sans-book`
- **Substitute:** Inter, sans-serif
- **Weights:** 400
- **Sizes:** 17px
- **Line heights:** 1.24
- **Letter spacing:** normal
- **Role:** Primary body text, standard button labels, general informational text. Its clean, readable form complements the headline variant.

### ApercuMono Pro Medium

- **Token:** `--font-apercumono-pro-medium`
- **Substitute:** IBM Plex Mono, monospace
- **Weights:** 400
- **Sizes:** 12px, 15px
- **Line heights:** 1.40, 1.67
- **Letter spacing:** normal
- **Role:** Small functional text, legal disclaimers, metadata. The monospace quality adds a subtle technical or editorial aesthetic without overwhelming the design.

### ApercuMono Pro Regular

- **Token:** `--font-apercumono-pro-regular`
- **Substitute:** IBM Plex Mono, monospace
- **Weights:** 400
- **Sizes:** 10px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Smallest print text, often used for footers or copyright notices, maintaining the monospace character at minimal sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| body | 15px | 1.67 | — | `--text-body` |
| body-lg | 17px | 1.24 | — | `--text-body-lg` |
| subheading | 23px | 1.3 | -0.18px | `--text-subheading` |
| heading-lg | 28px | 1.17 | -0.22px | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-104 | 104px | `--spacing-104` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-176 | 176px | `--spacing-176` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 8px |
| default | 4px |
| buttons-pill | 128px |
| buttons-square | 18px |
| buttons-outline | 24px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48-64px |
| cardPadding | 16px |
| elementGap | 8-32px |

## Components

### Request Invite CTA Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ticker Marquee Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group Showcase

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Pill Button

**Role:** Call to action

Rounded, vibrant 'Atlas Violet' button. Text: Bright Silver, Sequel Sans Book 17px. Background: #001391. Border: 1px solid #f8f8f8. Radius: 128px. Padding: 0px top/bottom, 32px left/right.

### Ghost Feature Button

**Role:** Secondary action in content

Ghost button for engaging with features. Text: Pure White 80% opacity, Sequel Sans Book 17px. Background: transparent. Border: 1px solid rgba(255, 255, 255, 0.8). Radius: 24px. Padding: 8px top/bottom, 16px left/right.

### Dark Square Button

**Role:** Secondary navigation or minor actions

Dark button with bright text. Text: Bright Silver, Sequel Sans Book 17px. Background: #1e1e1e. Border: 1px solid #f8f8f8. Radius: 18px. Padding: 0px top/bottom, 24px right, 32px left.

### Text Link Button

**Role:** Inline textual actions

Essentially a styled link. Text: Bright Silver, Sequel Sans Book 17px. Background: transparent. Border: 1px solid #f8f8f8. Radius: 16px. Padding: 0px.

### Footer Link

**Role:** Navigation in the footer

Small, functional links in the footer. Text: Mid-Grey, ApercuMono Pro Regular 10px. No explicit background or border, maintains natural link behavior.

### Hero Text Overlay

**Role:** Dominant initial messaging

Large text presented over the hero image. Text: Bright Silver, Sequel Sans Headline Book 28px weight 400, line-height 1.17, letter-spacing -0.22px. Typically centered on screen.

### Body Paragraph

**Role:** Main content narrative

Standard body text for descriptions and detail. Text: Bright Silver, Sequel Sans Book 17px weight 400, line-height 1.24.

## Do's and Don'ts

### Do

- Use Midnight Ink (#000000) for all main page backgrounds to maintain the deep, luxurious theme.
- Apply Atlas Violet (#001391) exclusively for primary calls to action and active interactive states.
- Ensure all body text uses Sequel Sans Book at 17px, weight 400, and line-height 1.24 for consistent readability.
- Implement letter-spacing adjustments for Sequel Sans Headline Book: -0.008em for 23px and 28px, 0.008em for 16px.
- Utilize 128px radius for primary pill buttons to create a soft, distinctive silhouette.
- Maintain a clear distinction between button types using background colors: #001391 for primary, #1e1e1 for secondary, and transparent for ghost buttons.
- Employ Bright Silver (#f8f8f8) as the predominant text color for all main content against dark backgrounds.

### Don't

- Do not introduce new chromatic colors; restrict brand accents solely to Atlas Violet (#001391).
- Avoid using any radii less than 4px; the smallest defined radius for non-interactive elements is 4px.
- Do not use generic system fonts; always map to the provided custom typefaces or their specified substitutes.
- Refrain from using hard, sharp shadows; the design relies on subtle background color shifts and photography for depth.
- Do not deviate from the specified letter-spacing for headlines; it is a critical component of the typographic identity.
- Avoid using #808080 for primary body text; reserve it for low-emphasis or secondary information.
- Do not use highly saturated primary colors for UI elements other than the designated Atlas Violet CTA.

## Imagery

The visual language for imagery is characterized by atmospheric, often misty or fog-enshrouded cityscapes and interior shots, typically with a cool, desaturated color palette that blends seamlessly into the dark UI background. Photography is large-scale, often full-bleed in hero sections, serving as decorative atmosphere rather than direct informational content. Product photography, such as of the card, is rendered as a clean, illuminated object against a muted, almost abstract backdrop, emphasizing its premium feel. Icons are monochrome, simple, and functional, typically rendered in Bright Silver against dark surfaces.

## Layout

The site uses a full-bleed page model, with content centered within implicit max-width boundaries that create spacious margins. The hero section is a full-viewport, atmospheric photographic background with a centered, minimalist text overlay. Following sections feature a consistent vertical rhythm and often present text-dominant content, frequently centered in a single column block for dramatic effect. There are no apparent grid layouts for cards or complex content arrangements; instead, content is presented sequentially with generous vertical spacing, emphasizing a focused reading experience. Navigation is minimal, likely a top bar and a footer with simple textual links.

## Similar Brands

- **Amex Centurion (Black Card Experience)** — Shares the 'exclusive, luxury, access-oriented' vibe with an emphasis on premium service, dark aesthetic, and subtle branding.
- **Capital One Venture X (Premium Card)** — Focuses on high-end travel perks and a sophisticated, digital-first experience with a sleek, often dark UI similar to Atlas.
- **Acme Card** — Utlizes a predominantly dark theme with minimal accent colors and bespoke typography to convey exclusivity and a premium feel.
- **N26 (early dark mode)** — Early use of dark UIs for fintech, combining clean typography and a single accent color for interaction cues in a minimalist style.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-smoked-glass: #1e1e1;
  --color-charcoal-grey: #272727;
  --color-dark-slate: #333333;
  --color-deep-graphite: #3d3d3d;
  --color-bright-silver: #f8f8f8;
  --color-pure-white: #ffffff;
  --color-cadet-grey: #cccccc;
  --color-mid-grey: #808080;
  --color-atlas-violet: #001391;
  --color-dark-gradient: #000000;
  --color-mist-gradient: #9B97B8;
  --font-sequel-sans-headline-book: 'Sequel Sans Headline Book', Inter, sans-serif;
  --font-sequel-sans-book: 'Sequel Sans Book', Inter, sans-serif;
  --font-apercumono-pro-medium: 'ApercuMono Pro Medium', IBM Plex Mono, monospace;
  --font-apercumono-pro-regular: 'ApercuMono Pro Regular', IBM Plex Mono, monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 15px;
  --leading-body: 1.67;
  --text-body-lg: 17px;
  --leading-body-lg: 1.24;
  --text-subheading: 23px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.18px;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.22px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-88: 88px;
  --spacing-104: 104px;
  --spacing-128: 128px;
  --spacing-144: 144px;
  --spacing-176: 176px;
  --radius-inputs: 8px;
  --radius-default: 4px;
  --radius-buttons-pill: 128px;
  --radius-buttons-square: 18px;
  --radius-buttons-outline: 24px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-smoked-glass: #1e1e1;
  --color-charcoal-grey: #272727;
  --color-dark-slate: #333333;
  --color-deep-graphite: #3d3d3d;
  --color-bright-silver: #f8f8f8;
  --color-pure-white: #ffffff;
  --color-cadet-grey: #cccccc;
  --color-mid-grey: #808080;
  --color-atlas-violet: #001391;
  --color-dark-gradient: #000000;
  --color-mist-gradient: #9B97B8;
  --font-sequel-sans-headline-book: 'Sequel Sans Headline Book', Inter, sans-serif;
  --font-sequel-sans-book: 'Sequel Sans Book', Inter, sans-serif;
  --font-apercumono-pro-medium: 'ApercuMono Pro Medium', IBM Plex Mono, monospace;
  --font-apercumono-pro-regular: 'ApercuMono Pro Regular', IBM Plex Mono, monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 15px;
  --leading-body: 1.67;
  --text-body-lg: 17px;
  --leading-body-lg: 1.24;
  --text-subheading: 23px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.18px;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.22px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-88: 88px;
  --spacing-104: 104px;
  --spacing-128: 128px;
  --spacing-144: 144px;
  --spacing-176: 176px;
  --radius-inputs: 8px;
  --radius-default: 4px;
  --radius-buttons-pill: 128px;
  --radius-buttons-square: 18px;
  --radius-buttons-outline: 24px;
}
```
