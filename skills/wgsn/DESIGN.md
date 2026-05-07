---
version: alpha
name: "WGSN"
description: "WGSN's visual system evokes a precise, authoritative environment through high-contrast typography and a stark monochrome palette. Information is presented on a clean white canvas, punctuated by dark, almost black, interactive elements. The design prioritizes clear communication and efficient navigation, using compact components and minimal decorative flourishes. Large, impactful headlines command attention, while subtle gray text provides supporting details, establishing a clear visual hierarchy."
theme: "light"
industry: "other"
source_url: "https://www.wgsn.com/en"
refero_style_id: "6cf3aec4-d028-44b0-b634-cc93e6c08e3c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515803908-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515803908-thumb.jpg"
extracted_at: "2026-04-30T02:23:47.988Z"
---

# WGSN — Style Reference

> High-contrast monochrome canvas.

**Theme:** light

**Industry:** other

WGSN's visual system evokes a precise, authoritative environment through high-contrast typography and a stark monochrome palette. Information is presented on a clean white canvas, punctuated by dark, almost black, interactive elements. The design prioritizes clear communication and efficient navigation, using compact components and minimal decorative flourishes. Large, impactful headlines command attention, while subtle gray text provides supporting details, establishing a clear visual hierarchy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, default text color for dark components |
| Ink Black | #000000 | `--color-ink-black` | Primary headline text, key interface elements on white backgrounds, section backgrounds, accent for focus states |
| Graphite | #333333 | `--color-graphite` | Secondary text, link text, borders for dark ghost buttons |
| Steel Gray | #666666 | `--color-steel-gray` | Muted body text, subtle borders, inactive elements |
| Ash Gray | #999999 | `--color-ash-gray` | Placeholder text, very subtle borders, decorative lines |
| Fog Gray | #f5f5f5 | `--color-fog-gray` | Subtle background for card surfaces and input fields, creating soft visual separation |
| Divider Gray | #cccccc | `--color-divider-gray` | Hairline separators and subtle outlines |
| Input Text Gray | #495057 | `--color-input-text-gray` | Text color specifically for input fields |
| Button Solid Black | #212121 | `--color-button-solid-black` | Primary button background, active navigation backgrounds — an almost-black that offers better contrast than pure black against white text |

## Tokens — Typography

### DM Sans

- **Token:** `--font-dm-sans`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 16px, 17px, 18px, 20px, 24px, 28px, 32px, 36px, 40px, 48px, 92px
- **Line heights:** 0.79, 1.10, 1.17, 1.18, 1.20, 1.33, 1.50, 1.60, 1.90
- **Letter spacing:** -0.0110em at larger sizes (e.g. 92px), 0.0560em at smaller sizes (e.g. 12px)
- **Role:** The sole typeface, used across all elements from headlines to body text. Its clean, geometric sans-serif nature underpins the system's precise and direct communication style. Varied letter-spacing tightens tracking for larger display text and loosens it slightly for smaller body text, enhancing legibility at different scales.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-lg | 14px | 1.6 | 0.784px | `--text-body-lg` |
| heading-sm | 18px | 1.6 | -0.198px | `--text-heading-sm` |
| heading | 20px | 1.6 | -0.22px | `--text-heading` |
| heading-lg | 24px | 1.5 | -0.264px | `--text-heading-lg` |
| display-sm | 32px | 1.33 | -0.352px | `--text-display-sm` |
| display | 48px | 1.18 | -0.528px | `--text-display` |
| display-lg | 92px | 0.79 | -1.012px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-127 | 127px | `--spacing-127` |
| spacing-307 | 307px | `--spacing-307` |
| spacing-313 | 313px | `--spacing-313` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| inputs | 8px |
| buttons | 40px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(0, 0, 0) 0px 0px 0px 1px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1370px |
| sectionGap | 32px |
| cardPadding | 24px |
| elementGap | 18px |

## Components

### Primary Filled Button

**Role:** Call-to-action button for initiating key actions.

Filled with Button Solid Black (#212121), white text (Canvas White, #ffffff). Uses a highly rounded (40px) border-radius for a distinct visual. Padding is 12px top, 22px right, 11px bottom, 22px left.

### Outlined Light Button

**Role:** Secondary action button on dark backgrounds.

Transparent background, white text (Canvas White, #ffffff), outlined with Canvas White (#ffffff). Inherits the 40px border-radius and 12px top, 22px right, 11px bottom, 22px left padding of other buttons.

### Outlined Dark Button

**Role:** Secondary action button on light backgrounds.

Transparent background, text in Graphite (#333333), outlined with Ink Black (#000000). Also uses 40px border-radius and 12px top, 22px right, 11px bottom, 22px left padding.

### Standard Card

**Role:** Container for content sections, often with imagery.

Transparent background with a 0px border-radius by default, or Fog Gray (#f5f5f5) background with 16px border-radius where elevation is implied. No box-shadows are used. Padding is internal to content blocks, not on the card itself (0px total).

### Feature Card

**Role:** Prominent content card, often with an associated image.

White background (Canvas White, #ffffff) and a 16px border-radius. No box-shadow. Padding is internal to content blocks (0px on the card itself), emphasizing the content within.

### Primary Input Field

**Role:** Standard editable text input.

Background is Fog Gray (#f5f5f5), text color is Input Text Gray (#495057). Has a distinct 8px border-radius. Padding is 13px all around, with the border color matching the background, indicating an inset style rather than an explicit border.

### Dark Overlay Input

**Role:** Input field designed for dark backgrounds.

Transparent background with white text (Canvas White, #ffffff). Has a 0px border-radius, relying on an Ink Black (#000000) border bottom for definition. Padding is 4px top, 12px right, 4px bottom, 0px left.

### Headline Badge

**Role:** Small, descriptive text element above headlines.

Transparent background with muted white text (Canvas White, #ffffff at 70% opacity). Minimal styling with 0px border-radius and no padding, designed to sit unobtrusively.

## Do's and Don'ts

### Do

- Use DM Sans exclusively for all typography, leveraging its weights and responsive letter-spacing for hierarchy.
- Maintain high contrast ratios for text and interactive elements. Against Canvas White (#ffffff), use Ink Black (#000000) or Button Solid Black (#212121).
- Apply a 40px border-radius to all interactive buttons and navigation elements for a consistent soft pill-shape.
- Utilize Fog Gray (#f5f5f5) sparingly for subtle surface distinction on cards and input fields, never for primary background.
- Ensure section gaps between content blocks are consistent, defaulting to elementGap (18px) or sectionGap (32px) for major divisions.
- Use Steel Gray (#666666) for secondary informational text, not for primary content or interactive labels.
- Adopt the maximum page width of 1370px for all main content, centered on the screen.

### Don't

- Avoid using box-shadows for elevation; rely on background color changes or subtle borders for visual layering.
- Do not introduce new colors; adhere strictly to the monochrome palette with its specific gray values.
- Do not deviate from the defined border-radii; 40px for buttons, 16px for cards, and 8px for inputs are fixed values.
- Avoid decorative gradients; the system is flat and high-contrast.
- Do not use highly saturated brand colors. The visual system does not rely on typical chromatic accents.
- Do not use overly dense text blocks without appropriate contrast; prioritize readability with varied text weights and colors.
- Avoid complex overlapping elements; maintain a clean, organized, and explicit separation of components.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, base for content. |
| 1 | Fog Gray | #f5f5f5 | Secondary background for cards and input fields, providing slight visual depth without shadows. |
| 2 | Ink Black | #000000 | Hero sections, footers or prominent callout blocks, acting as a high-contrast anchor. |

## Elevation

- **Shadow 1:** `rgb(0, 0, 0) 0px 0px 0px 1px inset`

## Imagery

Imagery consists primarily of tight product crops, lifestyle photography, and abstract studio shots, often presented without strong visual effects. Photography is contained within cards or grids, rarely full-bleed, emphasizing the product or a specific detail. There are no consistent illustration styles, implying a focus on real-world examples and sophisticated UI. Icons are typically solid, monochromatic, with a moderate stroke weight, serving functional roles rather than decorative ones. The density is moderate, allowing space for text, with imagery mainly serving to contextualize content.

## Layout

The page adheres to a max-width of 1370px, centered on the screen. The hero section is characterized by a full-bleed dark background (Ink Black) with a prominent centered headline, framed by images for visual interest. Content sections alternate between the primary Canvas White and the slightly distinct Fog Gray backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column text-left/image-right or centered stacks. Feature sections often employ a multi-column card grid. The navigation is a sticky top bar, providing persistent access to key links.

## Similar Brands

- **Figma** — Monochromatic interface with strict color hierarchy and focus on clear typography for tool presentation.
- **Stripe** — Clean, high-contrast aesthetic with abundant white space and a deliberate use of blacks and grays to convey sophistication.
- **Linear** — Minimalist dark/light mode interface with strong emphasis on typography and functional, compact components.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-graphite: #333333;
  --color-steel-gray: #666666;
  --color-ash-gray: #999999;
  --color-fog-gray: #f5f5f5;
  --color-divider-gray: #cccccc;
  --color-input-text-gray: #495057;
  --color-button-solid-black: #212121;
  --font-dm-sans: 'DM Sans', system-ui;
  --text-body-lg: 14px;
  --leading-body-lg: 1.6;
  --tracking-body-lg: 0.784px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.6;
  --tracking-heading-sm: -0.198px;
  --text-heading: 20px;
  --leading-heading: 1.6;
  --tracking-heading: -0.22px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.5;
  --tracking-heading-lg: -0.264px;
  --text-display-sm: 32px;
  --leading-display-sm: 1.33;
  --tracking-display-sm: -0.352px;
  --text-display: 48px;
  --leading-display: 1.18;
  --tracking-display: -0.528px;
  --text-display-lg: 92px;
  --leading-display-lg: 0.79;
  --tracking-display-lg: -1.012px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-127: 127px;
  --spacing-307: 307px;
  --spacing-313: 313px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 40px;
  --shadow-xl: rgb(0, 0, 0) 0px 0px 0px 1px inset;
  --surface-canvas-white: #ffffff;
  --surface-fog-gray: #f5f5f5;
  --surface-ink-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-graphite: #333333;
  --color-steel-gray: #666666;
  --color-ash-gray: #999999;
  --color-fog-gray: #f5f5f5;
  --color-divider-gray: #cccccc;
  --color-input-text-gray: #495057;
  --color-button-solid-black: #212121;
  --font-dm-sans: 'DM Sans', system-ui;
  --text-body-lg: 14px;
  --leading-body-lg: 1.6;
  --tracking-body-lg: 0.784px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.6;
  --tracking-heading-sm: -0.198px;
  --text-heading: 20px;
  --leading-heading: 1.6;
  --tracking-heading: -0.22px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.5;
  --tracking-heading-lg: -0.264px;
  --text-display-sm: 32px;
  --leading-display-sm: 1.33;
  --tracking-display-sm: -0.352px;
  --text-display: 48px;
  --leading-display: 1.18;
  --tracking-display: -0.528px;
  --text-display-lg: 92px;
  --leading-display-lg: 0.79;
  --tracking-display-lg: -1.012px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-127: 127px;
  --spacing-307: 307px;
  --spacing-313: 313px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 40px;
  --shadow-xl: rgb(0, 0, 0) 0px 0px 0px 1px inset;
  --surface-canvas-white: #ffffff;
  --surface-fog-gray: #f5f5f5;
  --surface-ink-black: #000000;
}
```
