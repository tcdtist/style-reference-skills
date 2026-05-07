---
version: alpha
name: "pluto.app"
description: "GoDaddy's Pluto.app page uses a direct, functional interface language on a bright canvas. Dark surfaces and robust typography provide clarity, anchored by a single vibrant teal accent for key interactive elements. Content is structured within clear, card-like containers, employing subtle elevation to distinguish interactive panels without heavy ornamentation, prioritizing straightforward information presentation."
theme: "light"
industry: "other"
source_url: "https://www.pluto.app"
refero_style_id: "a805bf0a-7a2f-4ba2-a4a2-73440e1291c7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517655090-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517655090-thumb.jpg"
extracted_at: "2026-04-30T02:54:33.917Z"
---

# pluto.app — Style Reference

> Bright canvas, dark contrast

**Theme:** light

**Industry:** other

GoDaddy's Pluto.app page uses a direct, functional interface language on a bright canvas. Dark surfaces and robust typography provide clarity, anchored by a single vibrant teal accent for key interactive elements. Content is structured within clear, card-like containers, employing subtle elevation to distinguish interactive panels without heavy ornamentation, prioritizing straightforward information presentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #111111 | `--color-midnight-ink` | Primary text, dark surface backgrounds, button fills for primary actions |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button text, prominent headings against dark backgrounds |
| Subtle Gray | #d4dbe0 | `--color-subtle-gray` | Hairline card borders, subtle dividers |
| Pure Black | #000000 | `--color-pure-black` | Secondary text, icon fills, strong borders |
| Muted Gray | #767676 | `--color-muted-gray` | Link borders, input borders, less prominent button borders |
| Deep Gray | #444444 | `--color-deep-gray` | Secondary text, footer links |
| Action Teal | #00a4a6 | `--color-action-teal` | Primary call-to-action fills, active states, accent borders, link text for critical information |

## Tokens — Typography

### gdsherpa

- **Token:** `--font-gdsherpa`
- **Substitute:** Arial
- **Weights:** 400, 500, 700
- **Sizes:** 11px, 13px, 14px, 16px, 18px, 24px, 26px, 56px
- **Line heights:** 0.71, 1.00, 1.22, 1.25, 1.33, 1.38, 1.50
- **Letter spacing:** normal
- **Role:** All text elements including headings, body, buttons, and links. The consistent use of a single custom typeface reinforces brand identity through every textual element.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | — | `--text-caption` |
| heading-sm | 18px | 1.38 | — | `--text-heading-sm` |
| heading | 24px | 1.25 | — | `--text-heading` |
| heading-lg | 26px | 1.22 | — | `--text-heading-lg` |
| display | 56px | 0.71 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-163 | 163px | `--spacing-163` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 10px |
| cards | 6px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 5px 10px 0px, rgba(0, 0, 0, 0.1) 0px 5px 10px 0px | `--shadow-xl` |
| xl-2 | rgb(128, 128, 128) 0px 0px 1px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Main call-to-action

Filled with Midnight Ink (#111111), white Canvas White (#ffffff) text, 6px border-radius, 16px vertical padding, 12px horizontal padding. Prominent and directs user flow.

### Teal Call-to-Action Button

**Role:** Secondary, accent call-to-action

Filled with Action Teal (#00a4a6), white Canvas White (#ffffff) text, 6px border-radius. Found in side panels for interaction.

### Ghost Button

**Role:** Supportive, low-emphasis action

Transparent background, Midnight Ink (#111111) text, 0px padding, 0px border-radius. Primarily used for inline actions.

### Outlined Button

**Role:** Alternative interaction, explicit selection

Canvas White (#ffffff) background, Midnight Ink (#111111) text, 1px Muted Gray (#767676) border, 6px border-radius, 8px vertical padding, 12px horizontal padding.

### Information Card

**Role:** Content grouping, interactive panel

Canvas White (#ffffff) background, 6px border-radius, subtle shadow rgba(0, 0, 0, 0.1) 0px 5px 10px 0px, 16px all-around padding. Contains related content and forms.

### Form Input Field

**Role:** User data entry

Transparent background, 1px Midnight Ink (#111111) border at bottom for an underline effect, 8px padding. Uses the gdsherpa font at a functional size.

## Do's and Don'ts

### Do

- Use Midnight Ink (#111111) for primary text and dark backgrounds and Canvas White (#ffffff) for light backgrounds and main surfaces, adhering to robust contrast.
- Apply Action Teal (#00a4a6) exclusively for primary interactive elements, critical links, and distinct accents to guide user attention.
- Standardize on 6px border-radius for cards and buttons to provide a consistent soft-edged feel.
- Maintain a clear visual hierarchy using gdsherpa at various weights and sizes, reserving larger, bolder text for key headlines.
- Structure content with a default element gap of 8px and card padding of 16px for comfortable density and readability.
- Employ the subtle card shadow `rgba(0, 0, 0, 0.1) 0px 5px 10px 0px` for interactive panels to provide a soft lift without heavy elevation.

### Don't

- Do not introduce new saturated accent colors beyond Action Teal (#00a4a6) to maintain focus and brand consistency.
- Avoid strong, multi-layered shadows; elevation should be subtle, not a dominant visual feature.
- Do not use highly decorative or script fonts; stick to the gdsherpa family for all text to preserve the clean, direct tone.
- Refrain from varying border-radius values excessively; maintain 6px for most interactive elements and cards for visual harmony.
- Do not center-align large blocks of body text; left-alignment is preferred for readability within content sections.
- Avoid full-bleed, uncontained element layouts outside of hero sections; use max-width containers and consistent spacing for content.

## Elevation

- **Information Card:** `rgba(0, 0, 0, 0.1) 0px 5px 10px 0px, rgba(0, 0, 0, 0.1) 0px 5px 10px 0px`
- **Teal Call-to-Action Button:** `rgb(128, 128, 128) 0px 0px 1px 0px`

## Similar Brands

- **Stripe** — Clean white backgrounds with dark, robust typography and a measured use of brand accent colors for interactive elements.
- **Notion** — Focus on high-contrast text and minimal UI elements, using cards and panels to organize information on a bright canvas.
- **Linear** — Dominant use of dark UI components against a light background, with a single, clear accent color to delineate active states and actions.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #111111;
  --color-canvas-white: #ffffff;
  --color-subtle-gray: #d4dbe0;
  --color-pure-black: #000000;
  --color-muted-gray: #767676;
  --color-deep-gray: #444444;
  --color-action-teal: #00a4a6;
  --font-gdsherpa: 'gdsherpa', Arial;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.38;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.22;
  --text-display: 56px;
  --leading-display: 0.71;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-71: 71px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-163: 163px;
  --radius-tags: 10px;
  --radius-cards: 6px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 5px 10px 0px, rgba(0, 0, 0, 0.1) 0px 5px 10px 0px;
  --shadow-xl-2: rgb(128, 128, 128) 0px 0px 1px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #111111;
  --color-canvas-white: #ffffff;
  --color-subtle-gray: #d4dbe0;
  --color-pure-black: #000000;
  --color-muted-gray: #767676;
  --color-deep-gray: #444444;
  --color-action-teal: #00a4a6;
  --font-gdsherpa: 'gdsherpa', Arial;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.38;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.22;
  --text-display: 56px;
  --leading-display: 0.71;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-71: 71px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-163: 163px;
  --radius-tags: 10px;
  --radius-cards: 6px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 5px 10px 0px, rgba(0, 0, 0, 0.1) 0px 5px 10px 0px;
  --shadow-xl-2: rgb(128, 128, 128) 0px 0px 1px 0px;
}
```
