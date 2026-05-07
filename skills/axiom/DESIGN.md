---
version: alpha
name: "Axiom"
description: "Axiom's design evokes a high-tech data interface, offering clarity and focus within a rich, dark environment. The foundational black (#000000) coupled with various shades of dark gray creates a deep, layered surface system without relying on heavy shadows. A single vivid orange (#DA5C2C) serves as the primary accent, providing clear calls to action and visual emphasis against the monochromatic backdrop. The minimal use of rounded corners (primarily 2px) maintains an industrial, precise feel, only softened by 9999px pill shapes for very specific interactive elements."
theme: "dark"
industry: "devtools"
source_url: "https://axiom.co"
refero_style_id: "c809190a-035c-458d-87ed-4758807dd84e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923322779-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923322779-thumb.jpg"
extracted_at: "2026-04-11T16:02:22.906Z"
---

# Axiom — Style Reference

> Dark Matter Console — a vast, organized digital workspace with critical data highlighted by a vibrant, focused glow.

**Theme:** dark

**Industry:** devtools

Axiom's design evokes a high-tech data interface, offering clarity and focus within a rich, dark environment. The foundational black (#000000) coupled with various shades of dark gray creates a deep, layered surface system without relying on heavy shadows. A single vivid orange (#DA5C2C) serves as the primary accent, providing clear calls to action and visual emphasis against the monochromatic backdrop. The minimal use of rounded corners (primarily 2px) maintains an industrial, precise feel, only softened by 9999px pill shapes for very specific interactive elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Page backgrounds, significant section dividers, default text in light contexts. |
| Deep Graphite | #111111 | `--color-deep-graphite` | Interface backgrounds like header and primary navigation, providing a subtle lift from the absolute black. |
| Charcoal Surface | #191919 | `--color-charcoal-surface` | Card backgrounds, secondary interactive elements, providing a distinct, darker surface layer. |
| Dark Slate | #202020 | `--color-dark-slate` | Text color for less prominent information, borders of unselected interactive elements. |
| Medium Gray | #3a3a3a | `--color-medium-gray` | Most secondary text, disabled states, borders for subtle separation. |
| Stone Accent | #606060 | `--color-stone-accent` | Placeholder text, minor body text, subtle iconography. |
| Light Steel | #b4b4b4 | `--color-light-steel` | Primary body text in dark contexts, button text in secondary states. |
| Almost White | #eeeeee | `--color-almost-white` | Dominant text color for headings and bold statements against dark backgrounds, inverse button backgrounds. |
| Highlight Orange | #DA5C2C | `--color-highlight-orange` | Primary call-to-action buttons, active states, key data visualizations — this vivid color draws immediate attention against the dark palette. |

## Tokens — Typography

### BerkeleyMono

- **Token:** `--font-berkeleymono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400, 700
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 20px, 24px, 32px
- **Line heights:** 1.00, 1.25, 1.33, 1.40, 1.43, 1.50, 1.56, 1.57, 1.71
- **Letter spacing:** normal
- **Role:** Primary display font for headlines, body copy, and UI elements. Its monospace nature grounds the design in a technical, precise aesthetic, emphasizing the data-driven focus of the brand.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px
- **Line heights:** 1.33, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** Secondary sans-serif font for supplemental information, short descriptions, and helper texts, providing readability when the monospace style might be too strong.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body | 14px | 1.43 | — | `--text-body` |
| heading | 20px | 1.4 | — | `--text-heading` |
| heading-lg | 24px | 1.33 | — | `--text-heading-lg` |
| display | 32px | 1.25 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 9999px |
| default | 2px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.05) 0px 1px 2px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 32px |
| elementGap | 8px |

## Components

### Hero CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call-to-Action Button

**Role:** Interactive element

Solid `Highlight Orange` (#DA5C2C) background with `Almost White` (#eeeeee) text. `BerkeleyMono` weight 400. `2px` border-radius. Padding: `0px` top/bottom, `16px` left/right.

### Outlined Button

**Role:** Interactive element

Transparent background with an `Almost White` (#eeeeee) fill, `Midnight Ink` (#000000) text. `2px` border-radius. Padding: `0px` top/bottom, `16px` left/right. Used for secondary actions, mirroring the primary button's form factor.

### Ghost Navigation Button

**Role:** Interactive navigation element

Transparent background with `Light Steel` (#b4b4b4) text. `2px` border-radius. No explicit padding (0px), blending into the navigation bar.

### Feature Card

**Role:** Content display

Uses `Charcoal Surface` (#191919) as background directly. Text is `Almost White` (#eeeeee) for headings and `Light Steel` (#b4b4b4) for body. Features `2px` radius and internal padding of `32px`.

### Input Field

**Role:** Form element

Background matches `Charcoal Surface` (#191919) or `Deep Graphite` (#111111). Borders are `Medium Gray` (#3a3a3a). Placeholder text is `Stone Accent` (#606060). Focus ring subtle, likely a glow or border change to `Highlight Orange`.

## Do's and Don'ts

### Do

- Use `Midnight Ink` (#000000) for page backgrounds and `Deep Graphite` (#111111) for primary UI surfaces like headers and footers.
- Apply `Highlight Orange` (#DA5C2C) exclusively for primary calls to action and active states, ensuring high visibility.
- Maintain a `2px` border-radius for all interactive elements and content cards to preserve the precise, defined aesthetic.
- Utilize `BerkeleyMono` for headlines and key information at various weights and sizes from `12px` to `32px` to convey a technical, authoritative tone.
- Provide ample internal padding of `32px` for feature cards and other content blocks to prevent a cramped feel within dark surfaces.
- Use `b4b4b4` as primary body text color on dark backgrounds for optimal readability and a consistent soft contrast.

### Don't

- Avoid using `Highlight Orange` (#DA5C2C) for decorative purposes or non-interactive elements, as it dilutes its impact as a CTA.
- Do not introduce additional vibrant colors; rely solely on the defined color palette to maintain visual discipline.
- Refrain from using strong, diffuse shadows; subtle box shadows like `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` are acceptable only for hints of elevation.
- Do not deviate from the `2px` border-radius for most elements; reserve `9999px` for specific pill-shaped components only.
- Avoid large variations in letter spacing; stick to 'normal' for both `BerkeleyMono` and `Inter` unless explicitly called for in a specific component.
- Do not use generic gray values for borders; default to `Medium Gray` (#3a3a3a) or `Dark Slate` (#202020) for consistency.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Base Black | #000000 | Primary page background, deepest layer. |
| 2 | Header & Footer | #111111 | Main navigation and global footers, slightly lifted from the base. |
| 3 | Card & Component | #191919 | Contained sections like feature cards, toolbars, and input fields, providing distinct content separation. |

## Elevation

- **Card:** `box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Button:** `box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

## Imagery

This design primarily relies on UI elements and data visualizations, rather than traditional imagery. Product screenshots of the Axiom observability dashboard are integrated directly into the layout, often with a dark theme consistent with the site's overall aesthetic. These are contained, not full-bleed, and serve an explanatory rather than decorative role. Iconography is simple, line-based, and monochromatic, typically rendered in `Light Steel` (#b4b4b4) or `Medium Gray` (#3a3a3a). There are no photographs or complex illustrations, emphasizing a practical, data-focused experience.

## Layout

The site uses a full-bleed page model, where the dark background extends to the edges of the viewport. Content within sections is centrally aligned with generous horizontal padding, suggesting a maximum content width though not strictly constrained. The hero section features a full-bleed dark background with a large, centered headline and calls to action. Sections alternate between solid dark backgrounds for content and black backgrounds for separating larger blocks. Content is arranged in stacked blocks, occasionally using two-column layouts for text-plus-callout or feature cards. A prominent 3-column grid is used for customer testimonials/features. Spacing between sections is consistent at `40px` or `64px`, providing ample breathing room. The navigation is a sticky top bar.

## Similar Brands

- **Vercel** — Shares a strong dark-mode aesthetic with crisp, technically-oriented typography and a single bright accent color for CTAs.
- **Supabase** — Employs a similar high-contrast dark theme, monospace fonts for code and data, and a focus on developer tools with clear, functional UI.
- **Linear** — Features a highly refined dark UI with subtle surface variations, precise typography, and minimal use of color to distinguish interactive elements.
- **Datadog** — Utilizes a dark background for its monitoring and observability dashboards, often with distinct colored elements for alerts and data visualization.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-deep-graphite: #111111;
  --color-charcoal-surface: #191919;
  --color-dark-slate: #202020;
  --color-medium-gray: #3a3a3a;
  --color-stone-accent: #606060;
  --color-light-steel: #b4b4b4;
  --color-almost-white: #eeeeee;
  --color-highlight-orange: #DA5C2C;
  --font-berkeleymono: 'BerkeleyMono', IBM Plex Mono;
  --font-inter: 'Inter', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.33;
  --text-display: 32px;
  --leading-display: 1.25;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --radius-pill: 9999px;
  --radius-default: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --surface-base-black: #000000;
  --surface-header-footer: #111111;
  --surface-card-component: #191919;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-deep-graphite: #111111;
  --color-charcoal-surface: #191919;
  --color-dark-slate: #202020;
  --color-medium-gray: #3a3a3a;
  --color-stone-accent: #606060;
  --color-light-steel: #b4b4b4;
  --color-almost-white: #eeeeee;
  --color-highlight-orange: #DA5C2C;
  --font-berkeleymono: 'BerkeleyMono', IBM Plex Mono;
  --font-inter: 'Inter', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.33;
  --text-display: 32px;
  --leading-display: 1.25;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --radius-pill: 9999px;
  --radius-default: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --surface-base-black: #000000;
  --surface-header-footer: #111111;
  --surface-card-component: #191919;
}
```
