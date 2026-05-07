---
version: alpha
name: "pampam.city"
description: "PamPam uses a bright, inviting canvas with clean, minimalist typography and subtle accents. The interface prioritizes clarity and a light, spacious feel, with elements appearing on a slightly off-white background. The design is subtly playful yet functional, using rounded corners and muted chromatic touches for interactive elements and brand differentiation. Overall, the visual style supports a product that is approachable and easy to use."
theme: "light"
industry: "design"
source_url: "https://www.pampam.city"
refero_style_id: "001480cb-05f4-4802-be39-84b942169481"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509804014-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509804014-thumb.jpg"
extracted_at: "2026-04-30T00:43:53.320Z"
---

# pampam.city — Style Reference

> Soft Canvas Typography

**Theme:** light

**Industry:** design

PamPam uses a bright, inviting canvas with clean, minimalist typography and subtle accents. The interface prioritizes clarity and a light, spacious feel, with elements appearing on a slightly off-white background. The design is subtly playful yet functional, using rounded corners and muted chromatic touches for interactive elements and brand differentiation. Overall, the visual style supports a product that is approachable and easy to use.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card and component surfaces in some contexts, text on darker backgrounds |
| Buttermilk | #faf2ec | `--color-buttermilk` | Primary background for the application, secondary card and component surfaces |
| Ash Gray | #e5e5e5 | `--color-ash-gray` | Subtle background for UI elements, dividers, or very light borders |
| Ink Black | #000000 | `--color-ink-black` | Primary text for headings and body, accent for outlining non-primary buttons and inputs |
| Charcoal | #1b1917 | `--color-charcoal` | Main heading text color, providing strong contrast against light backgrounds |
| Cool Gray | #8f8f8f | `--color-cool-gray` | Muted secondary text, helper text, and subtle interface elements |
| Slate Blue | #9894a8 | `--color-slate-blue` | Muted interactive text, outlined button borders for secondary actions, and placeholder-like text |
| Field Green | #2b3ea7 | `--color-field-green` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 16px, 18px, 24px
- **Line heights:** 1.00, 1.20, 1.56
- **Letter spacing:** normal
- **Role:** Body text, navigation links, and some button labels. Provides universal readability.

### inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 550
- **Sizes:** 14px, 16px, 18px, 19px
- **Line heights:** 1.43, 1.47, 1.50, 1.56
- **Letter spacing:** normal
- **OpenType features:** "cv02", "cv03", "cv04", "cv06", "cv11"
- **Role:** Utility text, small labels, and input fields. Enhances legibility at smaller sizes.

### nineties

- **Token:** `--font-nineties`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 28px, 48px, 80px
- **Line heights:** 1.08
- **Letter spacing:** normal
- **Role:** Display headlines and prominent titles. Its unique character defines the brand's typographic voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | — | `--text-caption` |
| body | 16px | 1.56 | — | `--text-body` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading | 28px | 1.08 | — | `--text-heading` |
| heading-lg | 48px | 1.08 | — | `--text-heading-lg` |
| display | 80px | 1.08 | — | `--text-display` |

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
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-161 | 161px | `--spacing-161` |
| spacing-225 | 225px | `--spacing-225` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| buttons | 16px |
| general | 20px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgb(99, 135, 244) 0px 2px 0px 0px inset | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 12px |
| elementGap | 12px |

## Components

### Standard Button

**Role:** Primary interaction button

Buttermilk background (#faf2ec) with Ink Black text (#000000) and a 16px border-radius. Padding is 16px all around.

### Outlined Muted Button

**Role:** Secondary interaction or ghost button

Transparent background with Slate Blue text (#9894a8) and a Slate Blue border (#9894a8), 0px border-radius. Padding is 8px vertical, 12px horizontal.

### Feature Card

**Role:** Content container for features or examples

Buttermilk background (#faf2ec) with 12px border-radius and no shadow or border. Content inside has no additional padding.

### Standard Input Field

**Role:** Form input elements

Transparent background with Charcoal text (#222222) and Charcoal border (#222222). Padding is 8px vertical.

## Do's and Don'ts

### Do

- Use Buttermilk (#faf2ec) as the default background for most content sections and cards to maintain visual lightness.
- Apply a 12px border-radius to all cards and images for a consistent soft-edged aesthetic.
- Reserve the 'nineties' font for display-level headlines (48px, 80px) using Charcoal (#1b1917) for strong visual impact.
- Utilize Ink Black (#000000) for primary body text and as a strong border color for key interactive elements.
- Maintain comfortable density by using 12px for `elementGap` between most UI components.
- Prioritize the `Standard Button` with a Buttermilk (#faf2ec) background and Ink Black (#000000) text for main calls to action.
- Employ Slate Blue (#9894a8) for subtle interactive text and outlined button borders for less prominent actions immediately adjacent to content.

### Don't

- Avoid using harsh, saturated colors as primary backgrounds; adhere to the neutral palette for canvas and surfaces.
- Do not deviate from the specified border-radius values (e.g., 12px for cards, 16px for buttons) to preserve the design's rounded character.
- Refrain from using the 'nineties' font for body copy or small text, as it is intended for display purposes only.
- Do not introduce strong, intrusive shadows; existing shadows are subtle and provide minimal depth.
- Avoid excessive use of outlines; apply the `Outlined Muted Button` sparingly for secondary actions.
- Do not reduce content padding within cards; maintain the spacious feel with the default 12px card padding.
- Resist using bold font weights for body text; rely on the '-apple-system' and 'inter' fonts at their specified weights for readability.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White Base | #ffffff | Primary page background layer, providing high contrast for text. |
| 1 | Buttermilk Canvas | #faf2ec | Secondary background layer for most content areas, cards, and sections. |
| 2 | Ash Gray Detail | #e5e5e5 | Subtle background for specific UI elements, dividers, or very light container backgrounds. |

## Elevation

- **Card/Interactive Element:** `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px`
- **Accent Element (Inset):** `rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgb(99, 135, 244) 0px 2px 0px 0px inset`
- **Minor Element:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`

## Similar Brands

- **Figma** — Clean white interface, soft curves, and a focus on product screenshots within the UI.
- **Notion** — Minimalist aesthetic with high contrast text, comfortable spacing, and soft neutral palettes supporting content.
- **Linear** — Emphasis on crisp typography and subtle use of accent colors to denote interactivity over heavy branding.
- **Webflow** — Product-focused design, use of rounded cards, and a balance of clear text with illustrative visuals.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-buttermilk: #faf2ec;
  --color-ash-gray: #e5e5e5;
  --color-ink-black: #000000;
  --color-charcoal: #1b1917;
  --color-cool-gray: #8f8f8f;
  --color-slate-blue: #9894a8;
  --color-field-green: #2b3ea7;
  --font-apple-system: '-apple-system', system-ui;
  --font-inter: 'inter', Inter;
  --font-nineties: 'nineties', Playfair Display;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body: 16px;
  --leading-body: 1.56;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 28px;
  --leading-heading: 1.08;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.08;
  --text-display: 80px;
  --leading-display: 1.08;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-161: 161px;
  --spacing-225: 225px;
  --radius-cards: 12px;
  --radius-buttons: 16px;
  --radius-general: 20px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgb(99, 135, 244) 0px 2px 0px 0px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  --surface-canvas-white-base: #ffffff;
  --surface-buttermilk-canvas: #faf2ec;
  --surface-ash-gray-detail: #e5e5e5;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-buttermilk: #faf2ec;
  --color-ash-gray: #e5e5e5;
  --color-ink-black: #000000;
  --color-charcoal: #1b1917;
  --color-cool-gray: #8f8f8f;
  --color-slate-blue: #9894a8;
  --color-field-green: #2b3ea7;
  --font-apple-system: '-apple-system', system-ui;
  --font-inter: 'inter', Inter;
  --font-nineties: 'nineties', Playfair Display;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body: 16px;
  --leading-body: 1.56;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 28px;
  --leading-heading: 1.08;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.08;
  --text-display: 80px;
  --leading-display: 1.08;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-161: 161px;
  --spacing-225: 225px;
  --radius-cards: 12px;
  --radius-buttons: 16px;
  --radius-general: 20px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgb(99, 135, 244) 0px 2px 0px 0px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  --surface-canvas-white-base: #ffffff;
  --surface-buttermilk-canvas: #faf2ec;
  --surface-ash-gray-detail: #e5e5e5;
}
```
