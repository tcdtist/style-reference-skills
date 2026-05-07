---
version: alpha
name: "Swap"
description: "Swap's design system evokes an 'AI as a service' aesthetic with a bright, spacious, and slightly austere canvas adorned with precise, geometric forms. Typography is a key differentiator: elegant, thin headings juxtapose with a workhorse sans-serif for body text, creating a contrast of sophistication and clarity. A prominent, vibrant green gradient is used sparingly as a functional accent, making interactive elements feel 'charged'. Surfaces are predominantly clean white, occasionally featuring subtle shadows for a light sense of elevation or rich, deep-toned section cards. Components are generally compact and direct, prioritizing information delivery over heavy ornamentation."
theme: "light"
industry: "saas"
source_url: "https://www.swap-commerce.com"
refero_style_id: "15d10d6c-1844-46c6-ae69-c99a56e6ad41"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508371908-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508371908-thumb.jpg"
extracted_at: "2026-04-30T00:19:58.161Z"
---

# Swap — Style Reference

> Crisp AI Canvas

**Theme:** light

**Industry:** saas

Swap's design system evokes an 'AI as a service' aesthetic with a bright, spacious, and slightly austere canvas adorned with precise, geometric forms. Typography is a key differentiator: elegant, thin headings juxtapose with a workhorse sans-serif for body text, creating a contrast of sophistication and clarity. A prominent, vibrant green gradient is used sparingly as a functional accent, making interactive elements feel 'charged'. Surfaces are predominantly clean white, occasionally featuring subtle shadows for a light sense of elevation or rich, deep-toned section cards. Components are generally compact and direct, prioritizing information delivery over heavy ornamentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page and card backgrounds |
| Graphite Inset | #2d3637 | `--color-graphite-inset` | Darker, rich card backgrounds typically for content sections |
| Shadow Green BG | #0d5b3b | `--color-shadow-green-bg` | Background for rich content blocks and section cards |
| Deep Forest BG | #083a26 | `--color-deep-forest-bg` | Background for rich content blocks and section cards, slightly darker than Shadow Green |
| Stone Beige | #e9e7e2 | `--color-stone-beige` | Subtle background for ghost button fills and secondary elements |
| Outline Gray | #cccccc | `--color-outline-gray` | Hairline borders and divider lines |
| Text Black | #000000 | `--color-text-black` | Primary text, headings, and icon fill |
| Muted Ash | #999999 | `--color-muted-ash` | Tertiary text, subtle link backgrounds |
| Mint Accent | #a3fda7 | `--color-mint-accent` | Primary action backgrounds, active states, and decorative accents |
| Subtle Sage | #9cb0a8 | `--color-subtle-sage` | Outline for ghost buttons, soft borders for interactive elements |
| Agentic Gradient | #82ff87 | `--color-agentic-gradient` | Hero text and prominent graphical elements — conveys digital energy |
| Subtle Gray Card | #838676 | `--color-subtle-gray-card` | Background for specific content cards or sections, a cool gray |

## Tokens — Typography

### mainFont

- **Token:** `--font-mainfont`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 9px, 12px, 15px, 16px, 18px, 24px, 30px
- **Line heights:** 1.00, 1.20, 1.40, 1.50
- **Letter spacing:** -0.01
- **Role:** Primary text across body, buttons, and system elements. Its neutral forms ensure legibility and a consistent functional tone.

### secondaryFont

- **Token:** `--font-secondaryfont`
- **Substitute:** Playfair Display
- **Weights:** 100, 300
- **Sizes:** 72px, 80px, 120px
- **Line heights:** 0.95, 1.00
- **Letter spacing:** -0.017
- **Role:** Display headlines and hero text. The extremely light weights (100, 300) combined with generous sizes create an airy, sophisticated, and slightly understated grandeur for bold statements, contrasting with conventional heavy headings.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 15px | 1.4 | — | `--text-body` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading | 24px | 1.4 | — | `--text-heading` |
| heading-lg | 30px | 1.2 | — | `--text-heading-lg` |
| display | 72px | 0.95 | -1.22px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-85 | 85px | `--spacing-85` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-165 | 165px | `--spacing-165` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-240 | 240px | `--spacing-240` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| inputs | 100px |
| buttons | 200px |
| general | 10px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.09) 0px 0px 28px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### Ghost Text Button

**Role:** Navigation links and secondary actions

Background transparent, text 'Text Black' (#000000), no border, no radius. Padding: 1.5px vertical, 0px horizontal.

### Pill Accent Button

**Role:** Primary call-to-actions

Background 'Mint Accent' (#a3fda7), text 'Text Black' (#000000), border 'Mint Accent' (#a3fda7). Radius: 200px. Padding: 0px vertical, 18.8px horizontal.

### Pill Ghost Button

**Role:** Secondary and descriptive actions

Background 'Stone Beige' (#e9e7e2), text 'Text Black' (#000000), border 'Stone Beige' (#e9e7e2). Radius: 1.67772e+07px (effectively full pill). Padding: 7.2px vertical, 10.2px horizontal.

### Card with Shadow

**Role:** Content containers with subtle elevation

Background 'Canvas White' (#ffffff), radius 24px. Shadow: 'rgba(0, 0, 0, 0.09) 0px 0px 28px 0px'. Padding: 20px all sides.

### Dark Content Card

**Role:** Prominent content blocks, often for feature showcases

Background 'Graphite Inset' (#2d3637), radius 24px. No shadow. No padding (content handles internal spacing).

### Accent Gradient Card

**Role:** Prominent content blocks, usually for features or special offers

Background 'Deep Forest BG' (#083a26), radius 24px. No shadow. No padding (content handles internal spacing).

### Minimal Input Field

**Role:** Form inputs

Background transparent, text 'Canvas White' (#ffffff) or 'Text Black' (#000000). Border 1px solid 'Outline Gray' (#cccccc). Radius: 100px. Padding: 12px vertical, 18.8px horizontal.

## Do's and Don'ts

### Do

- Use 'Canvas White' (#ffffff) as the primary background for most sections.
- Apply 'Text Black' (#000000) for all primary body text and headings.
- Emphasize primary calls-to-action with the 'Pill Accent Button' featuring 'Mint Accent' (#a3fda7) background.
- Use 'secondaryFont' at weight 100 or 300 for all large display headlines to maintain a refined, light aesthetic.
- Apply a 24px border-radius to all card components (Card with Shadow, Dark Content Card, Accent Gradient Card).
- Maintain generous vertical spacing between major sections, utilizing the 'sectionGap' of 30px.
- Utilize the 'Agentic Gradient' only for hero text or distinct graphical elements, never for backgrounds or small UI details.

### Don't

- Avoid heavy shadows; use 'rgba(0, 0, 0, 0.09) 0px 0px 28px 0px' only for intentionally elevated cards.
- Do not use highly saturated colors for general UI elements; reserve 'Mint Accent' (#a3fda7) for primary actions and highlights.
- Never use bold (weight 700) from 'secondaryFont' for headlines; its characteristic is its lightness.
- Do not add additional decorative borders or heavy backgrounds to input fields, they should remain minimal and pill-shaped.
- Avoid tightly packed content; ensure a minimum 'elementGap' of 8px between discrete UI elements.
- Do not use generic square buttons; all distinct interactive buttons should leverage the 200px (full pill) or 1.67772e+07px (rounded pill) radius.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background |
| 1 | Card with Shadow | #ffffff | Default elevated content cards |
| 2 | Dark Content Card | #2d3637 | Dark background for feature sections or distinct content blocks |
| 2 | Accent Gradient Card | #083a26 | Accent colored background for specific content cards or sections |

## Elevation

- **Card with Shadow:** `rgba(0, 0, 0, 0.09) 0px 0px 28px 0px`

## Imagery

This system primarily uses product-focused design, with custom graphics being a prominent feature. There's a strong lean towards abstract, gradient-filled typography for hero sections and illustrative elements, embodying the 'Agentic Gradient'. Where present, imagery appears to be either logo displays (customer stories) or product screenshots integrated seamlessly into the UI. Icons are minimal, typically 'Text Black' (#000000), and outlined rather than filled, maintaining the lightweight feel. The density is moderate, with ample negative space around key textual and interactive elements, allowing the custom graphics and bold typography to dominate focal points.

## Similar Brands

- **Rive** — Uses a similar light theme with specific accent colors for interactivity and large, expressive typography for headlines.
- **Framer** — Features a spacious, clean UI with a strong emphasis on typography as a design element and minimal, crisp components.
- **Supabase** — Combines a white/light background with a focus on code-like precision and distinctive, often gradient, accent colors for branding and actions.
- **Vercel** — Minimalist aesthetic with highly constrained color palette, sharp typography, and a focus on content hierarchy and spatial arrangement.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-graphite-inset: #2d3637;
  --color-shadow-green-bg: #0d5b3b;
  --color-deep-forest-bg: #083a26;
  --color-stone-beige: #e9e7e2;
  --color-outline-gray: #cccccc;
  --color-text-black: #000000;
  --color-muted-ash: #999999;
  --color-mint-accent: #a3fda7;
  --color-subtle-sage: #9cb0a8;
  --color-agentic-gradient: #82ff87;
  --color-subtle-gray-card: #838676;
  --font-mainfont: 'mainFont', Inter;
  --font-secondaryfont: 'secondaryFont', Playfair Display;
  --text-body: 15px;
  --leading-body: 1.4;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.2;
  --text-display: 72px;
  --leading-display: 0.95;
  --tracking-display: -1.22px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-53: 53px;
  --spacing-80: 80px;
  --spacing-85: 85px;
  --spacing-160: 160px;
  --spacing-165: 165px;
  --spacing-200: 200px;
  --spacing-240: 240px;
  --radius-cards: 24px;
  --radius-inputs: 100px;
  --radius-buttons: 200px;
  --radius-general: 10px;
  --shadow-xl: rgba(0, 0, 0, 0.09) 0px 0px 28px 0px;
  --surface-canvas-white: #ffffff;
  --surface-card-with-shadow: #ffffff;
  --surface-dark-content-card: #2d3637;
  --surface-accent-gradient-card: #083a26;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-graphite-inset: #2d3637;
  --color-shadow-green-bg: #0d5b3b;
  --color-deep-forest-bg: #083a26;
  --color-stone-beige: #e9e7e2;
  --color-outline-gray: #cccccc;
  --color-text-black: #000000;
  --color-muted-ash: #999999;
  --color-mint-accent: #a3fda7;
  --color-subtle-sage: #9cb0a8;
  --color-agentic-gradient: #82ff87;
  --color-subtle-gray-card: #838676;
  --font-mainfont: 'mainFont', Inter;
  --font-secondaryfont: 'secondaryFont', Playfair Display;
  --text-body: 15px;
  --leading-body: 1.4;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.2;
  --text-display: 72px;
  --leading-display: 0.95;
  --tracking-display: -1.22px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-53: 53px;
  --spacing-80: 80px;
  --spacing-85: 85px;
  --spacing-160: 160px;
  --spacing-165: 165px;
  --spacing-200: 200px;
  --spacing-240: 240px;
  --radius-cards: 24px;
  --radius-inputs: 100px;
  --radius-buttons: 200px;
  --radius-general: 10px;
  --shadow-xl: rgba(0, 0, 0, 0.09) 0px 0px 28px 0px;
  --surface-canvas-white: #ffffff;
  --surface-card-with-shadow: #ffffff;
  --surface-dark-content-card: #2d3637;
  --surface-accent-gradient-card: #083a26;
}
```
