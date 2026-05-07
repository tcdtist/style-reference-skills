---
version: alpha
name: "LaunchDarkly"
description: "LaunchDarkly employs a dark, almost charcoal canvas paired with crisp white text to evoke a serious, technical atmosphere. Accents of vivid violet and electric blue cut through the darkness, signaling interactive elements and key information. Surfaces are softly rounded and slightly elevated, creating a layered, dimensional feel rather than a flat interface. Typography is direct and precise, favoring confident body text over overly decorative headlines, establishing authority through clarity."
theme: "dark"
industry: "saas"
source_url: "https://launchdarkly.com"
refero_style_id: "18a75348-513a-49d8-94f5-e2df8c118b6b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518225326-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518225326-thumb.jpg"
extracted_at: "2026-04-30T03:04:18.317Z"
---

# LaunchDarkly — Style Reference

> Midnight Terminal, Violet Haze

**Theme:** dark

**Industry:** saas

LaunchDarkly employs a dark, almost charcoal canvas paired with crisp white text to evoke a serious, technical atmosphere. Accents of vivid violet and electric blue cut through the darkness, signaling interactive elements and key information. Surfaces are softly rounded and slightly elevated, creating a layered, dimensional feel rather than a flat interface. Typography is direct and precise, favoring confident body text over overly decorative headlines, establishing authority through clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Carbon Black | #191919 | `--color-carbon-black` | Primary surface background for cards and buttons, footer regions, and navigation elements. This deep neutral provides the foundational dark aesthetic |
| Graphite | #414042 | `--color-graphite` | Dominant page background, providing a slightly lighter dark tone for the overall canvas |
| Deep Space Gray | #2c2c2c | `--color-deep-space-gray` | Subtle list item borders and dividers, providing a minimal contrast against darker surfaces |
| Mercury White | #ffffff | `--color-mercury-white` | Primary text color for headlines and body text on dark backgrounds, input fields, and brand logos. Offers high contrast and readability |
| Stardust Gray | #f8f8f2 | `--color-stardust-gray` | Secondary text on some dark surfaces, a slightly warmer off-white for subtle variation |
| Cadet Gray | #a7a9ac | `--color-cadet-gray` | Muted body text and subheadings, providing a softer contrast than Mercury White while remaining legible |
| Silver Mist | #d1d3d4 | `--color-silver-mist` | Tertiary body text, icon borders, and subtle list item text, for less prominent information |
| Input Gray | #58595b | `--color-input-gray` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Launch Violet | #7084ff | `--color-launch-violet` | Interactive link text and borders, decorative icon accents, and outlined buttons, creating a vibrant focal point |
| Orbital Blue | #405bff | `--color-orbital-blue` | Background for selected states and subtle box shadows, providing a cohesive secondary accent |
| Electric Cyan | #61d6f5 | `--color-electric-cyan` | Highlight accents within gradients for visual distinction |
| Ocean Blue | #0073e6 | `--color-ocean-blue` | Specific navigation link text, offering a deeper blue variant for certain UI elements |

## Tokens — Typography

### bodyFont

- **Token:** `--font-bodyfont`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 32px, 36px, 40px, 66px, 84px, 85px, 100px, 125px
- **Line heights:** 1.00, 1.09, 1.20, 1.30, 1.40, 1.50, 1.60, 1.71
- **Letter spacing:** 0.1290em, 0.1670em
- **Role:** The primary typeface for all body text, navigation items, and most UI elements. Its range of weights and sizes supports a clear information hierarchy without resorting to multiple font families. Default letter spacing is normal for readability, but can be adjusted for specific titles.

### bodyFont

- **Token:** `--font-bodyfont`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 32px, 36px, 40px, 66px, 84px, 85px, 100px, 125px
- **Line heights:** 1.00, 1.09, 1.20, 1.30, 1.40, 1.50, 1.60, 1.71
- **Letter spacing:** 0.1290em, 0.1670em
- **Role:** Used for bolding in body copy, and occasionally for sub-headings or emphasized text in UI elements.

### bodyFont

- **Token:** `--font-bodyfont`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 32px, 36px, 40px, 66px, 84px, 85px, 100px, 125px
- **Line heights:** 1.00, 1.09, 1.20, 1.30, 1.40, 1.50, 1.60, 1.71
- **Letter spacing:** 0.1290em, 0.1670em
- **Role:** Emphasized headlines and crucial information that requires more visual weight without being heavy. Carries key messages in a strong, clear voice against dark backgrounds.

### bodyFont

- **Token:** `--font-bodyfont`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 32px, 36px, 40px, 66px, 84px, 85px, 100px, 125px
- **Line heights:** 1.00, 1.09, 1.20, 1.30, 1.40, 1.50, 1.60, 1.71
- **Letter spacing:** 0.1290em, 0.1670em
- **Role:** Used for button text and other elements that require maximum emphasis and distinctness in a functional context.

### monoFont

- **Token:** `--font-monofont`
- **Substitute:** Menlo, Consolas, monospace
- **Weights:** 400
- **Sizes:** 16px, 20px, 22px
- **Line heights:** 1.09, 1.50, 1.65
- **Role:** For code snippets and technical displays, providing precise character alignment for improved readability in a development context.

### headingFont1

- **Token:** `--font-headingfont1`
- **Substitute:** system-ui, sans-serif
- **Weights:** 500
- **Sizes:** 125px
- **Line heights:** 1.00
- **Role:** Single-use extremely large hero headline, providing impactful visual scale without excessive weight, reinforcing modern authority.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Helvetica

- **Token:** `--font-helvetica`
- **Weights:** 400
- **Sizes:** 15px
- **Line heights:** 1.5
- **Letter spacing:** 0.007
- **Role:** Helvetica — detected in extracted data but not described by AI

### Sohne

- **Token:** `--font-sohne`
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.5
- **Role:** Sohne — detected in extracted data but not described by AI

### Sohne Mono

- **Token:** `--font-sohne-mono`
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.5
- **Role:** Sohne Mono — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | — | `--text-caption` |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 18px | 1.4 | — | `--text-body` |
| body-lg | 22px | 1.4 | — | `--text-body-lg` |
| heading-sm | 26px | 1.3 | — | `--text-heading-sm` |
| heading | 32px | 1.3 | — | `--text-heading` |
| heading-lg | 66px | 1.3 | — | `--text-heading-lg` |
| display-sm | 85px | 1.3 | — | `--text-display-sm` |
| display | 125px | 1.3 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-99 | 99px | `--spacing-99` |
| spacing-104 | 104px | `--spacing-104` |
| spacing-106 | 106px | `--spacing-106` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-133 | 133px | `--spacing-133` |
| spacing-143 | 143px | `--spacing-143` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-175 | 175px | `--spacing-175` |
| spacing-283 | 283px | `--spacing-283` |
| spacing-308 | 308px | `--spacing-308` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 60px |
| cards | 30px |
| input | 10px |
| buttons | 30px |
| navigation | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.45) 0px 4px 20px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1188px |
| sectionGap | 32px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Navigation Link

**Role:** Top navigation items with ghost styling

Background transparent, text 'Mercury White' (#ffffff), no border, 0px radius, 0px padding. Active state uses 'Launch Violet' (#7084ff) text.

### Primary Action Button

**Role:** Calls to action with filled background

Background 'Carbon Black' (#191919), text 'Mercury White' (#ffffff), 30px border-radius, 40px horizontal padding, 40px vertical padding. Used for the prominent 'Get a demo' button.

### Outlined Action Button

**Role:** Secondary action buttons with a border

Background transparent, text 'Mercury White' (#ffffff), border is 1px solid 'Launch Violet' (#7084ff), 60px border-radius, 38px horizontal padding, 16px vertical padding. Used for 'Get started' in the hero.

### Toggle Button

**Role:** Segmented control option

Background transparent, text 'Mercury White' (#ffffff), 30px border-radius, 24px horizontal padding, 10px vertical padding. Active state has a 'Carbon Black' (#191919) background and 'Launch Violet' (#7084ff) text.

### Feature Card

**Role:** Container for feature descriptions or callouts

Background transparent or 'Carbon Black' (#191919), border 1px solid 'Graphite' (#414042), 30px border-radius, 32px horizontal padding, 40px top padding, 24px bottom padding. Provides a subtle visual grouping.

### Input Field

**Role:** User input area

Background 'Mercury White' (#ffffff), text 'Input Gray' (#58595b), border 1px solid 'Input Gray' (#58595b), 10px border-radius (left side) and 0px (right side) for a compound input. 16px horizontal padding, 11px vertical padding.

## Do's and Don'ts

### Do

- Prioritize 'Mercury White' (#ffffff) for all main headings and body text on dark backgrounds to ensure legibility.
- Use 'Launch Violet' (#7084ff) as the primary accent for interactive elements like links and outlined buttons.
- Apply a 30px border-radius to cards and primary action buttons, and 60px to ghost/outlined buttons for a consistent rounded aesthetic.
- Maintain a clear visual hierarchy using 'Graphite' (#414042) for page backgrounds and 'Carbon Black' (#191919) for card/component surfaces.
- Structure content with 16px element gaps and 32px section gaps to provide comfortable density and readability.
- Employ the `monoFont` family for all code snippets and technical examples to differentiate them visually.
- Apply the `rgba(0, 0, 0, 0.45) 0px 4px 20px 0px` shadow only to the main navigation for subtle elevation against the dark background.

### Don't

- Avoid using highly saturated colors for large background areas; reserve chromatic colors for small accent details.
- Do not introduce new border radii beyond 4px, 10px, 30px, 40px, or 60px.
- Never use the `headingFont1` for body text or sub-headings; reserve it strictly for monumental hero headlines.
- Refrain from using hard, sharp corners; all UI interactives and containers should use specified border radii.
- Do not deviate from the specified 'Graphite' (#414042) or 'Carbon Black' (#191919) as primary dark backgrounds.
- Avoid multiple drop shadows on elements; elevation signals should be subtle and singular.
- Do not use generic system fonts when `bodyFont` or `monoFont` are available and semantically appropriate.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Graphite | #414042 | Base page background |
| 1 | Carbon Black | #191919 | Card and button backgrounds, Footer |
| 2 | Deep Space Gray | #2c2c2c | Subtle border/divider on cards |

## Elevation

- **Navigation Bar:** `rgba(0, 0, 0, 0.45) 0px 4px 20px 0px`

## Imagery

This system primarily uses iconography and UI elements rather than large photographic or illustrative imagery. When present, images like product screenshots are contained within cards with rounded corners. Small, functional icons are typically monochrome or leverage the 'Launch Violet' accent. There is a strong emphasis on clean, legible UI over decorative visuals, with gradients used as a subtle background treatment rather than a primary visual element.

## Layout

The page maintains a centered, max-width layout of 1188px, with a full-bleed dark hero area that establishes the brand tone. Sections are vertically stacked with consistent 32px gaps. Content often alternates between left-aligned text and right-aligned visuals (or vice-versa) in a two-column arrangement. Feature lists are presented with clear checkmarks and subtle card containers. The overall density is comfortable, ensuring information is digestible without feeling sparse, and the fixed top navigation maintains context.

## Similar Brands

- **Darklang** — Shares a similar dark-mode interface with a focus on developer tools and abstract, subtle gradient backgrounds.
- **Vercel** — Utilizes a dark, technical aesthetic with white typography and a strong emphasis on product UI and code examples.
- **Auth0** — Exhibits a dark theme with structured layouts, clear typography, and strategic use of a single accent color for calls to action.
- **Linear** — Features a dark, minimalist UI, precise typography, and a subtle but effective use of accent colors for interactive elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-carbon-black: #191919;
  --color-graphite: #414042;
  --color-deep-space-gray: #2c2c2c;
  --color-mercury-white: #ffffff;
  --color-stardust-gray: #f8f8f2;
  --color-cadet-gray: #a7a9ac;
  --color-silver-mist: #d1d3d4;
  --color-input-gray: #58595b;
  --color-launch-violet: #7084ff;
  --color-orbital-blue: #405bff;
  --color-electric-cyan: #61d6f5;
  --color-ocean-blue: #0073e6;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-monofont: 'monoFont', Menlo, Consolas, monospace;
  --font-headingfont1: 'headingFont1', system-ui, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, sans-serif;
  --font-sohne: 'Sohne', ui-sans-serif, system-ui, sans-serif;
  --font-sohne-mono: 'Sohne Mono', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 18px;
  --leading-body: 1.4;
  --text-body-lg: 22px;
  --leading-body-lg: 1.4;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.3;
  --text-heading: 32px;
  --leading-heading: 1.3;
  --text-heading-lg: 66px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 85px;
  --leading-display-sm: 1.3;
  --text-display: 125px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-74: 74px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-99: 99px;
  --spacing-104: 104px;
  --spacing-106: 106px;
  --spacing-120: 120px;
  --spacing-133: 133px;
  --spacing-143: 143px;
  --spacing-160: 160px;
  --spacing-175: 175px;
  --spacing-283: 283px;
  --spacing-308: 308px;
  --radius-tags: 60px;
  --radius-cards: 30px;
  --radius-input: 10px;
  --radius-buttons: 30px;
  --radius-navigation: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.45) 0px 4px 20px 0px;
  --surface-graphite: #414042;
  --surface-carbon-black: #191919;
  --surface-deep-space-gray: #2c2c2c;
}
```

### Tailwind v4

```css
@theme {
  --color-carbon-black: #191919;
  --color-graphite: #414042;
  --color-deep-space-gray: #2c2c2c;
  --color-mercury-white: #ffffff;
  --color-stardust-gray: #f8f8f2;
  --color-cadet-gray: #a7a9ac;
  --color-silver-mist: #d1d3d4;
  --color-input-gray: #58595b;
  --color-launch-violet: #7084ff;
  --color-orbital-blue: #405bff;
  --color-electric-cyan: #61d6f5;
  --color-ocean-blue: #0073e6;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-bodyfont: 'bodyFont', system-ui, sans-serif;
  --font-monofont: 'monoFont', Menlo, Consolas, monospace;
  --font-headingfont1: 'headingFont1', system-ui, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, sans-serif;
  --font-sohne: 'Sohne', ui-sans-serif, system-ui, sans-serif;
  --font-sohne-mono: 'Sohne Mono', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 18px;
  --leading-body: 1.4;
  --text-body-lg: 22px;
  --leading-body-lg: 1.4;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.3;
  --text-heading: 32px;
  --leading-heading: 1.3;
  --text-heading-lg: 66px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 85px;
  --leading-display-sm: 1.3;
  --text-display: 125px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-74: 74px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-99: 99px;
  --spacing-104: 104px;
  --spacing-106: 106px;
  --spacing-120: 120px;
  --spacing-133: 133px;
  --spacing-143: 143px;
  --spacing-160: 160px;
  --spacing-175: 175px;
  --spacing-283: 283px;
  --spacing-308: 308px;
  --radius-tags: 60px;
  --radius-cards: 30px;
  --radius-input: 10px;
  --radius-buttons: 30px;
  --radius-navigation: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.45) 0px 4px 20px 0px;
  --surface-graphite: #414042;
  --surface-carbon-black: #191919;
  --surface-deep-space-gray: #2c2c2c;
}
```
