---
version: alpha
name: "wix.com"
description: "Wix.com's system is a canvas of light, subtly animated surfaces, where interactive elements pulse with a vivid blue. The visual style balances a strong, opinionated display typography with more conventional body text for clarity. Cards and interactive components feature generous rounded corners, giving the interface a friendly, approachable feel, while the dominant white background is punctuated by soft, pastel-toned background fills and gradients."
theme: "light"
industry: "saas"
source_url: "https://www.wix.com"
refero_style_id: "a31f5b99-6e7d-4e13-9b80-cd60e455bd76"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510214951-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510214951-thumb.jpg"
extracted_at: "2026-04-30T00:50:51.075Z"
---

# wix.com — Style Reference

> Animated digital canvas – an interactive, slightly playful yet authoritative workspace.

**Theme:** light

**Industry:** saas

Wix.com's system is a canvas of light, subtly animated surfaces, where interactive elements pulse with a vivid blue. The visual style balances a strong, opinionated display typography with more conventional body text for clarity. Cards and interactive components feature generous rounded corners, giving the interface a friendly, approachable feel, while the dominant white background is punctuated by soft, pastel-toned background fills and gradients.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, icon fill, borders for ghost components, neutral action outlines. Serves as a grounding contrast against the light canvas |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, default card surfaces, primary button text, input backgrounds – the dominant base layer |
| Cloud Gray | #f1f5f9 | `--color-cloud-gray` | Subtle background surfaces for secondary sections and elevated cards, providing a soft visual break from Canvas White |
| Silver Mist | #d0d0d0 | `--color-silver-mist` | Divider lines, subtle borders, disabled states, and muted interface elements |
| Steel Blue | #1c1d21 | `--color-steel-blue` | Secondary text, subheadings, providing a slightly softer yet highly readable alternative to Midnight Ink |
| Sky Blue | #166aea | `--color-sky-blue` | Primary action buttons, prominent icons, focus indicators – the main interactive accent color |
| Deep Violet | #101585 | `--color-deep-violet` | Decorative accents in headings and backgrounds, contributing to the brand's creative and digital essence |
| Lime Zest | #dff994 | `--color-lime-zest` | Decorative fills and borders, providing a vibrant, energetic visual counterpoint |
| Twilight Indigo | #2c34af | `--color-twilight-indigo` | Accent text in headlines, adding depth and a premium feel; Dynamic background for hero sections, communicating energy and innovation |
| Ocean Teal | #024051 | `--color-ocean-teal` | Background for specific card types, indicating a distinct content category |
| Pale Sage | #d1e6d1 | `--color-pale-sage` | Subtle background for specific card types, a gentle, organic accent |
| Terracotta | #863a29 | `--color-terracotta` | Distinct background for specific card types, providing warmth and earthiness |
| Amethyst | #bea3e7 | `--color-amethyst` | Background for specific card types, a soft, creative violet hue |
| Cerise Glow | #ffc2fe | `--color-cerise-glow` | Background for specific card types, a bright, playful pink accent |
| Sunflower Yellow | #fdf4a1 | `--color-sunflower-yellow` | Decorative borders and text accents, adding a cheerful, optimistic touch |
| Info Blue | #538ab6 | `--color-info-blue` | Blue state accent for badges, validation surfaces, and short status labels. Do not promote it to the primary CTA color |
| Sky Gradient | #bdc5ec | `--color-sky-gradient` | Subtle background for hero sections or elevated areas, creating a soft, ethereal atmosphere |
| Deep Sea Gradient | #095b71 | `--color-deep-sea-gradient` | Background for informational or immersive content blocks |
| Lavender Gradient | #8f69ff | `--color-lavender-gradient` | Background for feature highlights, softening the UI with a playful tone |

## Tokens — Typography

### madefor-display

- **Token:** `--font-madefor-display`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 10px, 13px, 14px, 16px, 21px, 24px, 31px, 48px, 82px, 89px, 104px, 184px
- **Line heights:** 0.85, 1.00, 1.10, 1.20, 1.30, 1.40, 1.48, 1.50, 1.60
- **Letter spacing:** -0.03, -0.02, -0.01
- **Role:** Headlines and prominent display text. Its range of oversized sizes and tight tracking creates a bold, modern voice.

### wix-madefor-display-v2

- **Token:** `--font-wix-madefor-display-v2`
- **Substitute:** Arial
- **Weights:** 400, 500
- **Sizes:** 20px, 21px, 53px
- **Line heights:** 1.00, 1.10, 1.20
- **Letter spacing:** normal
- **Role:** Main display headings, offering a slightly refined take on the primary display font with additional weight options.

### madefor-text

- **Token:** `--font-madefor-text`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 10px, 13px, 14px, 15px, 16px, 18px, 21px, 25px
- **Line heights:** 1.00, 1.20, 1.29, 1.30, 1.50, 1.60, 1.71
- **Letter spacing:** -0.01
- **Role:** Body text and functional interface elements, ensuring readability at smaller sizes with minimal tracking.

### wix-madefor-text-v2

- **Token:** `--font-wix-madefor-text-v2`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 15px, 21px
- **Line heights:** 1.30, 1.35, 1.50
- **Letter spacing:** normal
- **Role:** Supplementary body text and longer-form content, optimized for reading comfort.

### madefor-text-mediumbold

- **Token:** `--font-madefor-text-mediumbold`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 12px, 14px, 15px, 16px, 18px, 20px, 21px, 23px, 24px
- **Line heights:** 1.10, 1.20, 1.30, 1.50, 1.60, 1.71
- **Letter spacing:** -0.01
- **Role:** Highlighting key information within body text and navigation elements. The subtle weight increase provides emphasis without shouting.

### madefor-text-bold

- **Token:** `--font-madefor-text-bold`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 15px
- **Line heights:** 1.60
- **Letter spacing:** normal
- **Role:** Emphasized body text details, providing direct highlights.

### Arial

- **Token:** `--font-arial`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 10px, 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** System fallback and micro-text, used for elements like timestamps or metadata where a simple, universal font is preferred.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.2 | — | `--text-caption` |
| subheading | 21px | 1.2 | -0.21px | `--text-subheading` |
| heading-sm | 31px | 1.3 | — | `--text-heading-sm` |
| heading | 48px | 1.2 | -1.44px | `--text-heading` |
| heading-lg | 82px | 1.1 | -1.64px | `--text-heading-lg` |
| display | 184px | 0.85 | -5.52px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-67 | 67px | `--spacing-67` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-81 | 81px | `--spacing-81` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-101 | 101px | `--spacing-101` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-158 | 158px | `--spacing-158` |
| spacing-173 | 173px | `--spacing-173` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 50px |
| cards | 20px |
| images | 20px |
| inputs | 999px |
| buttons | 50px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px -1px 0px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 81px |
| cardPadding | 12px |
| elementGap | 12px |

## Components

### Primary Filled Button

**Role:** Call to action, primary interaction

Filled with Sky Blue (#166aea), white text (#ffffff), and a 50px border-radius. Padding is 0px top/bottom, 12px horizontal from text edges. Uses madefor-display-v2 at 16px.

### Ghost Button

**Role:** Secondary action, navigation

Transparent background, Midnight Ink (#000000) text, no border or padding visible in data. Uses Arial at 13px.

### Black Rounded Button

**Role:** Alternative call to action, often accentuating a dark background.

Filled with Midnight Ink (#000000), white text (#ffffff), and a 50px border-radius. Padding is 0px top/bottom, 10px right, 36px left. Uses madefor-display at 16px.

### Square Corner Card

**Role:** Content container, information display

Transparent background, no shadow, 0px border-radius. No explicit padding detected by default, content dictates spacing.

### Rounded Corner Card

**Role:** Elevated content container, featured information

Transparent background, no shadow, 20px border-radius. No explicit padding detected by default. Often features soft background fills like Cloud Gray (#f1f5f9) or accent colors.

### Shadowed Navigation Bar

**Role:** Global navigation header

White background, with a subtle dark shadow: `rgba(0, 0, 0, 0.1) 0px -1px 0px 0px`. Contains navigation links and primary actions. Heights vary.

### Rounded Input Field

**Role:** User data entry

White background (#ffffff), Midnight Ink (#000000) text, Info Blue (#538ab6) border on focus. 999px border-radius creates a pill shape. Padding is 3px top/bottom.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) for primary backgrounds and Cloud Gray (#f1f5f9) for secondary content sections, ensuring a bright, spacious feel.
- Use Sky Blue (#166aea) exclusively for primary interactive elements, reserving it for clear calls to action and active states.
- Apply 50px border-radius to all buttons and tags, creating a consistent, friendly pill shape.
- Employ madefor-display for all headlines, utilizing its generous sizes and tight letter-spacing for impact.
- Maintain a comfortable rhythm with an 81px section gap, creating clear visual separation between content blocks.
- Use subtle borders and dividers with Silver Mist (#d0d0d0) to structure content without adding visual weight.
- Infuse dynamism into hero sections with gradient backgrounds like Sky Gradient (#bdc5ec) or Electric Gradient (#2c34af) for visual interest.

### Don't

- Avoid using Midnight Ink (#000000) as a solid background fill for large sections; its primary role is text and sparse borders.
- Refrain from using Sky Blue (#166aea) for purely decorative purposes; it's reserved for functional interactions.
- Do not deviate from the established 20px radius for cards and images, as it's a signature element of the design language.
- Avoid excessive letter-spacing on display fonts; madefor-display benefits from its naturally tight tracking.
- Do not introduce strong, opaque shadows for elevation, as the system relies on subtle, tinted shadows or no shadows at all for depth.
- Do not use generic system fonts for branding or display text, as the custom madefor family is key to visual identity.
- Avoid overly complex nested layouts; prefer clear sectioning with alternating backgrounds and distinct component areas.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #ffffff | Dominant page background, primary stage for content. |
| 1 | Base Card | #f1f5f9 | Background for secondary content areas or simple cards. |
| 2 | Decorative Card | #dff994 | Specific card backgrounds using brand or accent colors (e.g., Lime Zest, Pale Sage, Amethyst). |

## Elevation

- **Navigation Bar:** `rgba(0, 0, 0, 0.1) 0px -1px 0px 0px`

## Imagery

The site predominantly uses product screenshots and abstract graphics. Product screenshots are typically contained within cards, often with rounded corners (20px radius) and sometimes featuring a subtle drop-shadow (rgba(50, 48, 126, 0.28) 5.04px 6.48px 15.84px) that visually lifts them from the surface. Illustrations are geometric and often leverage brand accent colors like Lime Zest and Deep Violet. Icons are typically filled with Midnight Ink or Sky Blue, sometimes outlined. Imagery plays an explanatory and product-showcase role, rather than purely decorative, creating a moderately image-heavy but content-dominant density across sections.

## Layout

The page primarily uses a max-width contained model for content, though the hero sections often go full-bleed with gradients or background patterns. The hero pattern frequently features a centered headline over a background that can be either white, a soft gradient, or a dynamic electric gradient. Sections alternate between standard white backgrounds and Cloud Gray (#f1f5f9) bands, creating a clear vertical rhythm. Content arrangement frequently uses a 2-column text+image pattern or centered stacks, with features often presented in multi-column card grids. Navigation is a sticky top bar with global links and primary actions, retaining visibility while scrolling.

## Similar Brands

- **Figma** — Clear, bright interface with prominent blue accents for interactive elements and a focus on clean typography.
- **Webflow** — Heavy reliance on custom display fonts for headlines, light canvas, and strong, clear CTA buttons.
- **Notion** — Predominantly light theme, functional use of color for status/tags, and an emphasis on approachable, minimalist components.
- **Canva** — Playful use of gradients and vibrant accent colors against a mostly white background, with friendly rounded corners.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #f1f5f9;
  --color-silver-mist: #d0d0d0;
  --color-steel-blue: #1c1d21;
  --color-sky-blue: #166aea;
  --color-deep-violet: #101585;
  --color-lime-zest: #dff994;
  --color-twilight-indigo: #2c34af;
  --color-ocean-teal: #024051;
  --color-pale-sage: #d1e6d1;
  --color-terracotta: #863a29;
  --color-amethyst: #bea3e7;
  --color-cerise-glow: #ffc2fe;
  --color-sunflower-yellow: #fdf4a1;
  --color-info-blue: #538ab6;
  --color-sky-gradient: #bdc5ec;
  --color-deep-sea-gradient: #095b71;
  --color-lavender-gradient: #8f69ff;
  --font-madefor-display: 'madefor-display', Arial;
  --font-wix-madefor-display-v2: 'wix-madefor-display-v2', Arial;
  --font-madefor-text: 'madefor-text', Arial;
  --font-wix-madefor-text-v2: 'wix-madefor-text-v2', Arial;
  --font-madefor-text-mediumbold: 'madefor-text-mediumbold', Arial;
  --font-madefor-text-bold: 'madefor-text-bold', Arial;
  --font-arial: 'Arial', sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-subheading: 21px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.21px;
  --text-heading-sm: 31px;
  --leading-heading-sm: 1.3;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -1.44px;
  --text-heading-lg: 82px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.64px;
  --text-display: 184px;
  --leading-display: 0.85;
  --tracking-display: -5.52px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-33: 33px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-37: 37px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-54: 54px;
  --spacing-58: 58px;
  --spacing-66: 66px;
  --spacing-67: 67px;
  --spacing-68: 68px;
  --spacing-73: 73px;
  --spacing-75: 75px;
  --spacing-81: 81px;
  --spacing-83: 83px;
  --spacing-84: 84px;
  --spacing-101: 101px;
  --spacing-105: 105px;
  --spacing-144: 144px;
  --spacing-158: 158px;
  --spacing-173: 173px;
  --radius-tags: 50px;
  --radius-cards: 20px;
  --radius-images: 20px;
  --radius-inputs: 999px;
  --radius-buttons: 50px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px;
  --surface-canvas: #ffffff;
  --surface-base-card: #f1f5f9;
  --surface-decorative-card: #dff994;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #f1f5f9;
  --color-silver-mist: #d0d0d0;
  --color-steel-blue: #1c1d21;
  --color-sky-blue: #166aea;
  --color-deep-violet: #101585;
  --color-lime-zest: #dff994;
  --color-twilight-indigo: #2c34af;
  --color-ocean-teal: #024051;
  --color-pale-sage: #d1e6d1;
  --color-terracotta: #863a29;
  --color-amethyst: #bea3e7;
  --color-cerise-glow: #ffc2fe;
  --color-sunflower-yellow: #fdf4a1;
  --color-info-blue: #538ab6;
  --color-sky-gradient: #bdc5ec;
  --color-deep-sea-gradient: #095b71;
  --color-lavender-gradient: #8f69ff;
  --font-madefor-display: 'madefor-display', Arial;
  --font-wix-madefor-display-v2: 'wix-madefor-display-v2', Arial;
  --font-madefor-text: 'madefor-text', Arial;
  --font-wix-madefor-text-v2: 'wix-madefor-text-v2', Arial;
  --font-madefor-text-mediumbold: 'madefor-text-mediumbold', Arial;
  --font-madefor-text-bold: 'madefor-text-bold', Arial;
  --font-arial: 'Arial', sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-subheading: 21px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.21px;
  --text-heading-sm: 31px;
  --leading-heading-sm: 1.3;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -1.44px;
  --text-heading-lg: 82px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.64px;
  --text-display: 184px;
  --leading-display: 0.85;
  --tracking-display: -5.52px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-33: 33px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-37: 37px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-54: 54px;
  --spacing-58: 58px;
  --spacing-66: 66px;
  --spacing-67: 67px;
  --spacing-68: 68px;
  --spacing-73: 73px;
  --spacing-75: 75px;
  --spacing-81: 81px;
  --spacing-83: 83px;
  --spacing-84: 84px;
  --spacing-101: 101px;
  --spacing-105: 105px;
  --spacing-144: 144px;
  --spacing-158: 158px;
  --spacing-173: 173px;
  --radius-tags: 50px;
  --radius-cards: 20px;
  --radius-images: 20px;
  --radius-inputs: 999px;
  --radius-buttons: 50px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px;
  --surface-canvas: #ffffff;
  --surface-base-card: #f1f5f9;
  --surface-decorative-card: #dff994;
}
```
