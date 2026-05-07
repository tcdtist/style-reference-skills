---
version: alpha
name: "Shopify"
description: "Shopify's visual design embodies a 'midnight command center' aesthetic, contrasting deep, near-black surfaces with crisp, luminous text. The use of a vivid, slightly desaturated green as the primary accent color injects a dynamic energy against the dark backdrop, appearing precisely where interactivity or emphasis is needed. Typography, featuring a custom variable font 'NeueHaasGrotesk', maintains clarity and a subtle technical feel, further enhanced by precise letter-spacing. Shadows are subtle but add discernible depth, creating a refined, multi-layered dark interface."
theme: "dark"
industry: "ecommerce"
source_url: "https://www.shopify.com"
refero_style_id: "f212ff99-24fa-4646-a0f2-46a815736ecd"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777422557366-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777422557366-thumb.jpg"
extracted_at: "2026-04-29T00:29:44.352Z"
---

# Shopify — Style Reference

> Midnight Command Center: A sophisticated dark interface, both precise and dynamically lit.

**Theme:** dark

**Industry:** ecommerce

Shopify's visual design embodies a 'midnight command center' aesthetic, contrasting deep, near-black surfaces with crisp, luminous text. The use of a vivid, slightly desaturated green as the primary accent color injects a dynamic energy against the dark backdrop, appearing precisely where interactivity or emphasis is needed. Typography, featuring a custom variable font 'NeueHaasGrotesk', maintains clarity and a subtle technical feel, further enhanced by precise letter-spacing. Shadows are subtle but add discernible depth, creating a refined, multi-layered dark interface.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Footer background, secondary text, button text on light backgrounds |
| Deep Ocean | #02090a | `--color-deep-ocean` | Primary canvas background for most sections |
| Charcoal Grey | #061a1c | `--color-charcoal-grey` | Card backgrounds, elevated surface background |
| Steel Gaze | #1e2c31 | `--color-steel-gaze` | Card borders, subtle dividers |
| Twilight Indigo | #000a10 | `--color-twilight-indigo` | Secondary background for deeply elevated cards or panels |
| Abyssal Violet | #010624 | `--color-abyssal-violet` | Distinct card background, used sparingly for emphasis |
| Dark Forest | #072720 | `--color-dark-forest` | Navigation background, specific card background |
| Snowdrift | #ffffff | `--color-snowdrift` | Primary text color, button backgrounds, interactive text |
| Ash Grey | #a1a1aa | `--color-ash-grey` | Muted text, secondary information, disabled states |
| Cloud Mist | #e5e7eb | `--color-cloud-mist` | Primary border color, subtle highlight for inactive elements |
| Jade Glow | #36f4a4 | `--color-jade-glow` | Accent for active navigation items, highlighted text, link emphasis |
| Muted Sage | #99b3ad | `--color-muted-sage` | Tertiary body text, less prominent links |
| Aurora Blue | #1260ff | `--color-aurora-blue` | Supporting palette color with insufficient usage evidence for a stronger role. Extracted usage does not support a distinct primary control color. |
| Mystic Teal | #157076 | `--color-mystic-teal` | Gradient for background embellishment |
| Synthwave Sunset | #5fd5b6 | `--color-synthwave-sunset` | Decorative gradient for backgrounds |
| Deep Sea Gradient | #244749 | `--color-deep-sea-gradient` | Background gradient for sections |
| Dark Inlet Gradient | #0a2c30 | `--color-dark-inlet-gradient` | Subtle background gradient for dark surfaces |
| Chromatic Orb Gradient | #3e4646 | `--color-chromatic-orb-gradient` | Complex radial background gradient for visual depth |

## Tokens — Typography

### NeueHaasGrotesk

- **Token:** `--font-neuehaasgrotesk`
- **Substitute:** Helvetica Neue, Aktiv Grotesk
- **Weights:** 330, 400, 500, 550, 600
- **Sizes:** 14px, 16px, 18px, 20px, 24px, 28px, 48px, 55px, 70px, 96px
- **Line heights:** 0.83, 0.96, 1.00, 1.14, 1.16, 1.25, 1.28, 1.40, 1.49, 1.50
- **Letter spacing:** 0.015, 0.02, 0.04, -0.72, -0.83, -1.05, -1.44
- **OpenType features:** "ss03"
- **Role:** Primary display and content font. Its range of weights allows for nuanced hierarchy, making headlines authoritative at larger sizes and body text highly legible. The 'ss03' feature is vital for consistent digit and character rendering.

### Inter-Variable

- **Token:** `--font-inter-variable`
- **Substitute:** Inter
- **Weights:** 400, 420, 450, 550
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Line heights:** 1.00, 1.20, 1.29, 1.43, 1.50, 1.56
- **Letter spacing:** 0.072, 0.084, 0.096, 0.108, 0.12
- **OpenType features:** "ss03"
- **Role:** Supportive functional text, used for navigation, buttons, and detailed information. Its legibility at smaller sizes and controlled letter-spacing ensure clarity in interactive elements. The 'ss03' feature provides consistent digit styling.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0.072px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.015px | `--text-body-sm` |
| body | 16px | 1.5 | 0.02px | `--text-body` |
| subheading | 20px | 1.4 | 0.04px | `--text-subheading` |
| heading-sm | 24px | 1.25 | -0.36px | `--text-heading-sm` |
| heading | 28px | 1.28 | -0.42px | `--text-heading` |
| heading-lg | 48px | 1.16 | -0.72px | `--text-heading-lg` |
| display | 96px | 0.96 | -1.44px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-94 | 94px | `--spacing-94` |
| spacing-98 | 98px | `--spacing-98` |
| spacing-127 | 127px | `--spacing-127` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-157 | 157px | `--spacing-157` |
| spacing-208 | 208px | `--spacing-208` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| media | 8px |
| inputs | 4px |
| avatars | 340px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 8px 8px 0px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.2) 10px 13px 12px 2px | `--shadow-xl-2` |
| xl-3 | rgba(255, 255, 255, 0.05) 0px 1px 2px 0px, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset | `--shadow-xl-3` |
| xl-4 | rgba(64, 71, 77, 0.4) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px | `--shadow-xl-4` |
| xl-5 | rgba(5, 24, 19, 0.05) 0px 20px 60px 0px, rgb(19, 59, 50) 0px 1px 0px 0px inset | `--shadow-xl-5` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 13px |
| elementGap | 12px |

## Components

### Primary Filled Button

**Role:** Interactive element

Filled button with `Snowdrift` background, `Pitch Black` text at NeueHaasGrotesk weight 600. `9999px` border-radius for a pill shape. Padding is `8px` vertical and `20px` horizontal.

### Ghost Button (Subtle)

**Role:** Interactive element

Ghost button with `oklab(0.999994 0.0000455678 0.0000200868 / 0.2)` background, `Snowdrift` text at Inter-Variable weight 550, `Cloud Mist` border, `4px` border-radius. Padding is `12px` vertical and `16px` horizontal.

### Ghost Button (Outlined)

**Role:** Interactive element

Ghost button with transparent background, `Snowdrift` text at NeueHaasGrotesk weight 500, `Snowdrift` border, `9999px` border-radius. Padding is `12px` vertical and `24px` horizontal.

### Hero Card (Dark Elevated)

**Role:** Information display

Card with `Charcoal Grey` background, `12px` border-radius, and a pronounced shadow: `rgba(0,0,0,0.1) 0px 8px 8px, rgba(0,0,0,0.1) 0px 4px 4px, rgba(0,0,0,0.1) 0px 2px 2px, rgba(0,0,0,0.1) 0px 0px 0px 1px, rgba(255,255,255,0.03) 0px 1px 0px 0px inset`.

### Interactive Card (Light Border)

**Role:** Interactive element

Card with transparent background, `4px` border-radius, `Snowdrift` text, and subtle shadows for interactivity and depth: `rgba(255,255,255,0.03) 0px 0.929px 0px 0px inset, rgba(0,0,0,0.1) 0px 0px 0px 0.929px, rgba(0,0,0,0.1) 0px 1.858px 1.858px 0px, rgba(0,0,0,0.1) 0px 3.717px 3.717px 0px`.

### Content Card (Minimal)

**Role:** Content container

Card with `Charcoal Grey` background, `0px` border-radius, and no shadow. Padding is `0px`.

### Overlay Card (Light)

**Role:** Information display

Card with `Snowdrift` background, `8px` border-radius, and no shadow. Padding is `16px` on all sides.

## Do's and Don'ts

### Do

- Use `Deep Ocean` (#02090a) as the default canvas background for most sections to maintain a consistent dark theme.
- Accent interactive elements with `Jade Glow` (#36f4a4) for emphasis, such as active navigation items or highlighted links.
- Apply a `9999px` border-radius from the 'radius' token for all primary and ghost buttons to achieve a consistent pill shape.
- Employ `NeueHaasGrotesk` with `weight 330` for large display headings (e.g., 70px, 96px) to create a sophisticated, restrained presence, rather than strong visual shouting.
- Utilize `Snowdrift` (#ffffff) for primary text on dark backgrounds and for backgrounds of filled buttons.
- For cards and elevated surfaces, use `Charcoal Grey` (#061a1c) with the specified card shadow to delineate distinct content blocks.
- Set text color to `Ash Grey` (#a1a1aa) for secondary information, muted links, or disabled states to indicate diminished priority.

### Don't

- Avoid using bright, saturated colors for full sections or large background areas; reserve these for accents and dynamic elements.
- Do not deviate from the `9999px` pill shape for buttons or `12px` for cards, as these radii are central to the brand's identity.
- Refrain from heavy, intense shadows on `Deep Ocean` backgrounds, as the system relies on subtle shadow progressions and background color shifts for depth.
- Do not use `Pitch Black` (#000000) for primary canvas backgrounds; it is intended for the footer and specific text elements to achieve high contrast.
- Avoid using `Inter-Variable` for large display headings; its optimized legibility is for functional, smaller text sizes below 20px.
- Never use `Snowdrift` (#ffffff) as the primary background for full page sections, as it is mainly for text, buttons, and specific elevated overlays.
- Do not introduce additional accent colors; stick to `Jade Glow` (#36f4a4) for emphasis against the dark background.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Deep Ocean Canvas | #02090a | Primary page background and base layer. |
| 1 | Charcoal Grey Card | #061a1c | Standard card backgrounds and elevated content blocks. |
| 2 | Twilight Indigo Elevated | #000a1 | Secondary elevated background for distinct panels or deeper content isolation. |
| 3 | Snowdrift Overlay | #ffffff | Light-themed elements, modals, or contextual pop-ups that stand out from the dark theme. |

## Elevation

- **Hero Card (Dark Elevated):** `rgba(0,0,0,0.1) 0px 8px 8px, rgba(0,0,0,0.1) 0px 4px 4px, rgba(0,0,0,0.1) 0px 2px 2px, rgba(0,0,0,0.1) 0px 0px 0px 1px, rgba(255,255,255,0.03) 0px 1px 0px 0px inset`
- **Interactive Card (Light Border):** `rgba(255,255,255,0.03) 0px 0.929px 0px 0px inset, rgba(0,0,0,0.1) 0px 0px 0px 0.929px, rgba(0,0,0,0.1) 0px 1.858px 1.858px 0px, rgba(0,0,0,0.1) 0px 3.717px 3.717px 0px`
- **Button:** `rgba(255, 255, 255, 0.05) 0px 1px 2px 0px, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset`
- **List Item with Shadow:** `rgba(0, 0, 0, 0.2) 10px 13px 12px 2px`

## Imagery

This design primarily uses photography within contained card elements or as large, immersive background elements often overlaid with dark gradients. Product photography is typically lifestyle-oriented, showcasing human interaction or aspirational scenes, often desaturated or subtly tinted to blend with the dark interface. Illustrations are minimal, hinted at by abstract graphic patterns in background gradients. Icons are typically mono-color, in `Snowdrift` or `Jade Glow`, outlining essential functions. Images serve both decorative atmosphere and explanatory content roles, creating an engaging visual narrative without overwhelming the UI.

## Layout

The layout is primarily a max-width contained structure, with some full-bleed sections, particularly for hero banners and background visuals. The hero section features a full-bleed dark background with a centered, prominent headline and calls to action. Section rhythm is driven by consistent vertical spacing and alternating background colors (dark canvas vs. slightly darker cards or gradient sections), creating visual breaks. Content is arranged in alternating text-left/image-right or centered stacks, with card grids appearing for feature showcases. The site is text-dominant in informational blocks but uses large hero images for visual impact. A sticky top navigation bar provides consistent access.

## Similar Brands

- **Vercel** — Shares a sophisticated dark mode, a preference for variable fonts, and subtle gradients for depth.
- **Linear** — Similar aesthetic with restrained dark UI, crisp typography, and an accent color used sparingly for interactive elements.
- **Stripe** — Employs clean, high-contrast typography, strategic use of brand accents, and a focus on clarity in complex product interfaces.
- **GitHub** — Features a prominent dark theme with distinct surface levels defined by color and subtle shadow for hierarchy.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-deep-ocean: #02090a;
  --color-charcoal-grey: #061a1c;
  --color-steel-gaze: #1e2c31;
  --color-twilight-indigo: #000a10;
  --color-abyssal-violet: #010624;
  --color-dark-forest: #072720;
  --color-snowdrift: #ffffff;
  --color-ash-grey: #a1a1aa;
  --color-cloud-mist: #e5e7eb;
  --color-jade-glow: #36f4a4;
  --color-muted-sage: #99b3ad;
  --color-aurora-blue: #1260ff;
  --color-mystic-teal: #157076;
  --color-synthwave-sunset: #5fd5b6;
  --color-deep-sea-gradient: #244749;
  --color-dark-inlet-gradient: #0a2c30;
  --color-chromatic-orb-gradient: #3e4646;
  --font-neuehaasgrotesk: 'NeueHaasGrotesk', Helvetica Neue, Aktiv Grotesk;
  --font-inter-variable: 'Inter-Variable', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.072px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.015px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.02px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.04px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.36px;
  --text-heading: 28px;
  --leading-heading: 1.28;
  --tracking-heading: -0.42px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.72px;
  --text-display: 96px;
  --leading-display: 0.96;
  --tracking-display: -1.44px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-94: 94px;
  --spacing-98: 98px;
  --spacing-127: 127px;
  --spacing-128: 128px;
  --spacing-157: 157px;
  --spacing-208: 208px;
  --radius-cards: 12px;
  --radius-media: 8px;
  --radius-inputs: 4px;
  --radius-avatars: 340px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 8px 8px 0px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.2) 10px 13px 12px 2px;
  --shadow-xl-3: rgba(255, 255, 255, 0.05) 0px 1px 2px 0px, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset;
  --shadow-xl-4: rgba(64, 71, 77, 0.4) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px;
  --shadow-xl-5: rgba(5, 24, 19, 0.05) 0px 20px 60px 0px, rgb(19, 59, 50) 0px 1px 0px 0px inset;
  --surface-deep-ocean-canvas: #02090a;
  --surface-charcoal-grey-card: #061a1c;
  --surface-twilight-indigo-elevated: #000a1;
  --surface-snowdrift-overlay: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-deep-ocean: #02090a;
  --color-charcoal-grey: #061a1c;
  --color-steel-gaze: #1e2c31;
  --color-twilight-indigo: #000a10;
  --color-abyssal-violet: #010624;
  --color-dark-forest: #072720;
  --color-snowdrift: #ffffff;
  --color-ash-grey: #a1a1aa;
  --color-cloud-mist: #e5e7eb;
  --color-jade-glow: #36f4a4;
  --color-muted-sage: #99b3ad;
  --color-aurora-blue: #1260ff;
  --color-mystic-teal: #157076;
  --color-synthwave-sunset: #5fd5b6;
  --color-deep-sea-gradient: #244749;
  --color-dark-inlet-gradient: #0a2c30;
  --color-chromatic-orb-gradient: #3e4646;
  --font-neuehaasgrotesk: 'NeueHaasGrotesk', Helvetica Neue, Aktiv Grotesk;
  --font-inter-variable: 'Inter-Variable', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.072px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.015px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.02px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.04px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.36px;
  --text-heading: 28px;
  --leading-heading: 1.28;
  --tracking-heading: -0.42px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.72px;
  --text-display: 96px;
  --leading-display: 0.96;
  --tracking-display: -1.44px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-94: 94px;
  --spacing-98: 98px;
  --spacing-127: 127px;
  --spacing-128: 128px;
  --spacing-157: 157px;
  --spacing-208: 208px;
  --radius-cards: 12px;
  --radius-media: 8px;
  --radius-inputs: 4px;
  --radius-avatars: 340px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 8px 8px 0px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.2) 10px 13px 12px 2px;
  --shadow-xl-3: rgba(255, 255, 255, 0.05) 0px 1px 2px 0px, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset;
  --shadow-xl-4: rgba(64, 71, 77, 0.4) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px;
  --shadow-xl-5: rgba(5, 24, 19, 0.05) 0px 20px 60px 0px, rgb(19, 59, 50) 0px 1px 0px 0px inset;
  --surface-deep-ocean-canvas: #02090a;
  --surface-charcoal-grey-card: #061a1c;
  --surface-twilight-indigo-elevated: #000a1;
  --surface-snowdrift-overlay: #ffffff;
}
```
