---
version: alpha
name: "Grok"
description: "Grok employs a stark, minimalist aesthetic with a dominant achromatic palette, creating a quiet backdrop for AI interaction. The design emphasizes speed and clarity through compact typography and high-contrast elements. Surfaces are primarily clean white with subtle gray accents, while interactive elements are defined by their form and subtle border treatments rather than bold colors. The overall impression is one of crisp efficiency and focused utility."
theme: "light"
industry: "ai"
source_url: "https://grok.com"
refero_style_id: "bbb993bc-1452-4a22-8cc9-a44b91d79723"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509931711-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509931711-thumb.jpg"
extracted_at: "2026-04-30T00:45:49.604Z"
---

# Grok — Style Reference

> Monochrome AI canvas

**Theme:** light

**Industry:** ai

Grok employs a stark, minimalist aesthetic with a dominant achromatic palette, creating a quiet backdrop for AI interaction. The design emphasizes speed and clarity through compact typography and high-contrast elements. Surfaces are primarily clean white with subtle gray accents, while interactive elements are defined by their form and subtle border treatments rather than bold colors. The overall impression is one of crisp efficiency and focused utility.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #ffffff | `--color-absolute-zero` | Page backgrounds, elevated card surfaces, text on dark buttons |
| Deep Space | #050505 | `--color-deep-space` | Primary text, headings, icons, backgrounds for filled buttons |
| Shadowstone | #636363 | `--color-shadowstone` | Muted text, secondary icons, placeholder text, descriptive captions |
| Outline Gray | #1d1d1d | `--color-outline-gray` | Borders for inactive fields, button outlines, subtle dividers |

## Tokens — Typography

### Universal Sans

- **Token:** `--font-universal-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 550
- **Sizes:** 13px, 14px, 16px
- **Line heights:** 1.20, 1.50, 1.75
- **Letter spacing:** -0.0080em at 16px, -0.0070em at 14px, -0.0060em at 13px
- **Role:** The primary typeface for all text content, from body text to interactive elements. The variety of subtle weight and letter-spacing adjustments allows for precise control of visual density and hierarchy within the predominantly monochrome interface.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |

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
| spacing-36 | 36px | `--spacing-36` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 8px |
| inputs | 9999px |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 36px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Ghost Button

**Role:** Secondary actions and navigation items

Text in Deep Space (#050505) on a transparent background, with a full-round radius (9999px). Padding is 8px vertical and 16px horizontal. Used for actions like 'Imagine' or 'Sign in'.

### Outlined Button

**Role:** Tertiary actions or subtle interactive elements

Text in Deep Space (#050505) on a transparent background, with a full-round radius (9999px) and a subtle 1px border in Outline Gray (#1d1d1d, which uses oklch(0.1157 0 none / 0.1) as borderTopColor). Padding is 8px vertical and 16px horizontal.

### Filled Primary Button

**Role:** Primary calls to action

Text in Absolute Zero (#ffffff) on a Deep Space (#050505) background, with a full-round radius (9999px). Padding is 8px vertical and 16px horizontal. Used for 'Sign up'.

### Minimal Input Field

**Role:** User input for search or queries

Text in Deep Space (#050505) on a transparent background, placeholder text in Shadowstone (#636363), with a full-round radius (9999px, likely an override from the 0px input variant). Features a subtle 1px border in Outline Gray (#1d1d1d, via oklch(0.1157 0 none / 0.06)). Padding is 16px vertical and 8px horizontal. Has internal element gaps of 8px for icons.

## Do's and Don'ts

### Do

- Prioritize Deep Space (#050505) for all primary text and interactive elements to maintain high contrast against Absolute Zero (#ffffff) backgrounds.
- Utilize 9999px border-radius for all buttons and interactive input fields to support the soft, accessible aesthetic.
- Implement the Universal Sans font family with precise letter-spacing adjustments: -0.0080em for larger text (16px), -0.0070em for medium (14px), and -0.0060em for smaller text (13px).
- Maintain a clear functional hierarchy for buttons: transparent for ghost, subtle border for outlined secondary, and Deep Space (#050505) background for primary actions.
- Apply 8px as the default `elementGap` between internal components within an input or button group to ensure clear separation without excessive whitespace.
- Use Shadowstone (#636363) only for muted, secondary, or placeholder text, never for primary content or calls to action.
- Ensure all interactive elements have 8px vertical and 16px horizontal padding, adapting to the full-round radius.

### Don't

- Do not introduce vibrant or highly saturated colors; the system is strictly achromatic.
- Avoid sharp corners; all interactive elements and contained components should use the specified large border radii.
- Do not use heavy shadows or gradients; elevation is subtly conveyed through borders or background tints, not complex visual effects.
- Refrain from using varied font families; Universal Sans is the sole typeface for all content.
- Do not apply excessive line height or loose letter spacing; the typography is compact and designed for efficiency.
- Avoid varying input field border styles; all should consistently use the 1px Outline Gray (#1d1d1d) border.
- Do not use `pageMaxWidth` as the layout is full-bleed, centering content without explicit max-width containment.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Dominant background for the entire application, creating a stark, expansive canvas. |
| 1 | Subtle Gray | #f5f5f5 | Very subtle background tint for card-like elements or subtly differentiated surface regions (inferred from input field background, not explicitly in Color Usage Evidence but common pattern). |

## Imagery

This design system primarily relies on simple, monochromatic icons with a clean, outlined style. No photography, complex illustrations, or significant graphical elements are present. Imagery serves a purely functional role, such as the Grok logo and UI icons, maintaining a low visual density and supporting the text-dominant interface.

## Layout

The page exhibits a full-bleed layout, with content centered horizontally without a fixed maximum width. The hero section features the brand logo and primary input field centrally stacked on a clean white background. Navigation is handled by a minimal top bar with ghost and filled buttons. Section rhythm is sparse, emphasizing a clear, uncluttered 'canvas' for interaction, marked by generous vertical spacing between the main query input and footer. The overall density is low, prioritizing breathing room around key interactive elements.

## Similar Brands

- **ChatGPT** — Monochromatic, conversational AI UI with prominent central input field and minimal surrounding elements.
- **Google Search** — Dominantly white background, central search bar, and clean, high-contrast typography focused on utility.
- **Linear** — Minimalist UI, strong emphasis on functional typography, and subtle border treatments for interactive elements rather than strong color.
- **Arc Browser** — Clean, understated UI with a focus on core functionality, often using subtle monochrome variations for interactive states and surfaces.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #ffffff;
  --color-deep-space: #050505;
  --color-shadowstone: #636363;
  --color-outline-gray: #1d1d1d;
  --font-universal-sans: 'Universal Sans', Inter;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --radius-links: 8px;
  --radius-inputs: 9999px;
  --radius-buttons: 9999px;
  --surface-canvas-white: #ffffff;
  --surface-subtle-gray: #f5f5f5;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #ffffff;
  --color-deep-space: #050505;
  --color-shadowstone: #636363;
  --color-outline-gray: #1d1d1d;
  --font-universal-sans: 'Universal Sans', Inter;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --radius-links: 8px;
  --radius-inputs: 9999px;
  --radius-buttons: 9999px;
  --surface-canvas-white: #ffffff;
  --surface-subtle-gray: #f5f5f5;
}
```
