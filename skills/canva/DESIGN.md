---
version: alpha
name: "Canva"
description: "Canva's design language evokes a vibrant, creative toolkit, powered by a dynamic and playful color spectrum. The foundation is a cool, dark canvas illuminated by a kaleidoscope of vivid gradients and accent colors, signaling a platform built for imagination. A consistent softness is achieved through prevalent 8px and 9999px border radii, contrasting with the sharpness of sans-serif typography. This creates an accessible but powerful experience, where creativity feels both boundless and precisely guided."
theme: "mixed"
industry: "design"
source_url: "https://canva.com"
refero_style_id: "62f89392-609d-45b7-b9df-7a5acd529864"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776119257790-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776119257790-thumb.jpg"
extracted_at: "2026-04-13T22:28:04.561Z"
---

# Canva — Style Reference

> Vibrant digital toolkit — a painter's palette on a dark canvas, each tool glowing with possibility.

**Theme:** mixed

**Industry:** design

Canva's design language evokes a vibrant, creative toolkit, powered by a dynamic and playful color spectrum. The foundation is a cool, dark canvas illuminated by a kaleidoscope of vivid gradients and accent colors, signaling a platform built for imagination. A consistent softness is achieved through prevalent 8px and 9999px border radii, contrasting with the sharpness of sans-serif typography. This creates an accessible but powerful experience, where creativity feels both boundless and precisely guided.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #0f1015 | `--color-midnight-ink` | Primary background for dark sections, text, and primary surface containers. Provides high contrast for vibrant accents. |
| Canvas White | #ffffff | `--color-canvas-white` | Dominant page background for light sections, primary text on dark backgrounds, and interactive element fills. |
| Deepest Shadow | #000000 | `--color-deepest-shadow` | Primary text color on light backgrounds, strong borders, and most icon fills. Used for maximum contrast. |
| Ash Grey | #575a5f | `--color-ash-grey` | Secondary text, subtle icon fills, and borders for less prominent elements. A softer alternative to black. |
| Silver Mist | #d7d9de | `--color-silver-mist` | Subtle borders, very light backgrounds for hover states, and divider lines. A near-white neutral. |
| Rich Plum | #8b3dff | `--color-rich-plum` | Interactive elements, links, and primary brand accent color. A recurring vivid violet. |
| Electric Lavender | #a370fc | `--color-electric-lavender` | Lighter shade of violet for secondary accents, hover states on interactive elements, and illustrative touches. |
| Fuchsia Burst | #e950f7 | `--color-fuchsia-burst` | Illustrative accents and occasional highlights, adding a pop of magenta. |
| Scarlet Glow | #ff3d4d | `--color-scarlet-glow` | Eye-catching accents, status indicators, and illustrative elements. A vibrant, warm pop. |
| Tangerine Pop | #ff6105 | `--color-tangerine-pop` | Highlighting elements, icons, and occasional accents for warmth and vibrancy. |
| Vivid Violet | #9729ff | `--color-vivid-violet` | Specific illustrative and icon accents, adding depth to the purple palette. |
| Turquoise Dream Gradient | #00C4CC | `--color-turquoise-dream-gradient` | Highlighting key sections, hero backgrounds, and illustrative elements. Creates a dynamic and modern feel. |
| Sunset Fire Gradient | #FF3B4C | `--color-sunset-fire-gradient` | Vivid, energetic backgrounds for call-to-action sections or celebratory elements. |
| Digital Spectrum Gradient | #992BFF | `--color-digital-spectrum-gradient` | Complex background for hero sections or unique promotional areas, showcasing range and creativity. |
| Ocean Twilight Gradient | #00C4CC | `--color-ocean-twilight-gradient` | Atmospheric background for sections emphasizing depth, technology, or creative tools. |
| Magenta Bloom Gradient | #BD19FF | `--color-magenta-bloom-gradient` | Accent gradient for dramatic flair or to highlight specific product features. |
| Emerald Growth Gradient | #007D26 | `--color-emerald-growth-gradient` | Used for 'success' or 'growth' themed sections, adding a lush, positive tone. |

## Tokens — Typography

### Canva Sans

- **Token:** `--font-canva-sans`
- **Substitute:** Inter, Arial, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 18px, 24px, 28px, 32px, 36px, 56px, 64px, 80px
- **Line heights:** 1.10, 1.25, 1.33, 1.38, 1.40, 1.50, 1.57
- **Letter spacing:** -0.0100em
- **OpenType features:** "ss02", "ss03"
- **Role:** Primary brand typeface used across all UI elements from body text to display headlines. Its weights and feature settings ('ss02', 'ss03') contribute to a modern, friendly yet precise feel.

### Times

- **Token:** `--font-times`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 10px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Legacy font with sparse usage, appearing in specific minor contexts.

### Arial

- **Token:** `--font-arial`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback font used in specific button and body contexts, for broad compatibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.2 | — | `--text-caption` |
| body-lg | 16px | 1.38 | -0.16px | `--text-body-lg` |
| subheading | 18px | 1.33 | -0.18px | `--text-subheading` |
| heading-sm | 24px | 1.25 | -0.24px | `--text-heading-sm` |
| heading | 28px | 1.25 | -0.28px | `--text-heading` |
| heading-lg | 32px | 1.25 | -0.32px | `--text-heading-lg` |
| display-sm | 36px | 1.25 | -0.36px | `--text-display-sm` |
| display | 56px | 1.1 | -0.56px | `--text-display` |
| display-lg | 64px | 1.1 | -0.64px | `--text-display-lg` |
| display-xl | 80px | 1.1 | -0.8px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-212 | 212px | `--spacing-212` |
| spacing-256 | 256px | `--spacing-256` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| pills | 9999px |
| buttons | 8px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(64, 79, 109, 0.06) 0px 0px 0px 0.5px, rgba(24, 44, 89, 0.137) 0px 2px 4px 0px, rgba(24, 44, 89, 0.07) 0px 6px 12px 0px | `--shadow-xl` |
| xl-2 | rgba(53, 65, 90, 0.2) 0px 0px 0px 1px inset | `--shadow-xl-2` |
| xl-3 | rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 44px |
| cardPadding | 12px |
| elementGap | 4px |

## Components

### Primary Ghost Button

**Role:** Main call to action on vibrant backgrounds

White text on transparent background, with 8px border-radius and 4px vertical, 8px horizontal padding. Border highlights on hover.

### Primary Filled Button

**Role:** Default interactive button

White background with 'Deepest Shadow' text. Border radius 8px, padding 0px vertical, 12px horizontal. Subtle top and bottom borders from the same color.

### Pill Button

**Role:** Category filters, tags, or secondary actions

Transparent background with 'Deepest Shadow' text. 9999px border radius for a full pill shape. Generous 16px vertical, 24px horizontal padding.

### Navigation Link

**Role:** Top-level navigation items

Transparent background with 'Deepest Shadow' text. No padding or border. Used for lightweight navigation.

### Feature Card (Dark)

**Role:** Content container for features or product sections on dark backgrounds

Background color 'Midnight Ink' with 8px border radius. No internal padding or shadow (content fills card).

### Gradient Section Card

**Role:** Highlighting distinct product features with a strong visual identity

Utilizes one of the vivid thematic gradients (e.g., Turquoise Dream Gradient, Sunset Fire Gradient) as background. Features prominent imagery and concise text.

### Header Navigation

**Role:** Global site navigation

Consists of multiple 'Navigation Link' components. Occupies 0-80px height of the header area. Links are 'Deepest Shadow' on `Canvas White` context.

### Hero CTA Button

**Role:** Prominent call to action in hero sections.

White text on transparent background, 8px radius, 7px vertical and 12px horizontal padding. The text is 'Canvas White'.

## Do's and Don'ts

### Do

- Prioritize 'Canva Sans' across all typographic elements, leveraging its 400, 500, and 600 weights.
- Use 8px border radius for all card and button components to ensure a consistent friendly softness, with 9999px reserved for pill shapes.
- Implement 'Midnight Ink' (#0f1015) as the primary background for dark themed content blocks to maximize vibrancy of super-imposed elements.
- Pair 'Deepest Shadow' (#000000) for text on 'Canvas White' (#ffffff) for maximum readability and AAA contrast.
- Utilize the brand gradients (e.g., Turquoise Dream Gradient, Sunset Fire Gradient) for main hero sections and feature highlights.
- Apply 'Rich Plum' (#8b3dff) as the primary accent for interactive elements and links.

### Don't

- Avoid using Times or Arial for primary brand content; reserve them for legacy or specific minor contexts as detected.
- Do not introduce new border radii beyond 8px and 9999px.
- Do not overuse 'Deepest Shadow' for backgrounds; it is primarily intended for text and sharp UI elements.
- Avoid using a flat color for hero sections; leverage a brand gradient to convey dynamism.
- Do not introduce new color hues; work within the established vivid brand and accent palettes.
- Do not apply shadows without purpose; use the defined shadows for subtle elevation or interactive states only.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background for light content sections. |
| 1 | Midnight Ink | #0f1015 | Primary background for dark product UI and card surfaces. |

## Elevation

- **Card Interaction:** `rgba(64, 79, 109, 0.06) 0px 0px 0px 0.5px, rgba(24, 44, 89, 0.137) 0px 2px 4px 0px, rgba(24, 44, 89, 0.07) 0px 6px 12px 0px`
- **Inset Button (Dark):** `rgba(53, 65, 90, 0.2) 0px 0px 0px 1px inset`
- **Inset Button (Light):** `rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset`

## Imagery

The visual language is a blend of conceptual, playful product illustrations and tightly cropped, brand-aligned photography or 3D renders. Illustrations are colorful, dimensional, and often feature floating UI elements or abstract shapes, designed to convey dynamism and creativity. Photography, when used, tends to be product-focused or lifestyle, but always integrated with graphic overlays or bold color treatments. Icons are filled, colorful, and often use the accent and brand gradients, reinforcing the vibrant palette. Imagery serves both decorative atmosphere and explanatory content, often layered to demonstrate product capabilities in a vibrant, engaging way. Density is moderate, balancing textual information with impactful visual storytelling.

## Layout

The page primarily uses a max-width contained layout pattern but features full-bleed hero sections for dramatic effect. The overall rhythm combines expansive, gradient-filled introductory areas with alternating light and dark bands for content sections, providing visual segmentation and interest. Content is frequently arranged in two or three-column grids for features and templates, often with text-left/image-right or image-top/text-bottom compositions within cards. Spaces between sections are comfortable (sectionGap of roughly 44px). The header is a sticky top bar, providing global navigation and calls to action.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #0f1015;
  --color-canvas-white: #ffffff;
  --color-deepest-shadow: #000000;
  --color-ash-grey: #575a5f;
  --color-silver-mist: #d7d9de;
  --color-rich-plum: #8b3dff;
  --color-electric-lavender: #a370fc;
  --color-fuchsia-burst: #e950f7;
  --color-scarlet-glow: #ff3d4d;
  --color-tangerine-pop: #ff6105;
  --color-vivid-violet: #9729ff;
  --color-turquoise-dream-gradient: #00C4CC;
  --color-sunset-fire-gradient: #FF3B4C;
  --color-digital-spectrum-gradient: #992BFF;
  --color-ocean-twilight-gradient: #00C4CC;
  --color-magenta-bloom-gradient: #BD19FF;
  --color-emerald-growth-gradient: #007D26;
  --font-canva-sans: 'Canva Sans', Inter, Arial, sans-serif;
  --font-times: 'Times', serif;
  --font-arial: 'Arial', sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body-lg: 16px;
  --leading-body-lg: 1.38;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.24px;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --tracking-heading: -0.28px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.32px;
  --text-display-sm: 36px;
  --leading-display-sm: 1.25;
  --tracking-display-sm: -0.36px;
  --text-display: 56px;
  --leading-display: 1.1;
  --tracking-display: -0.56px;
  --text-display-lg: 64px;
  --leading-display-lg: 1.1;
  --tracking-display-lg: -0.64px;
  --text-display-xl: 80px;
  --leading-display-xl: 1.1;
  --tracking-display-xl: -0.8px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-76: 76px;
  --spacing-212: 212px;
  --spacing-256: 256px;
  --radius-cards: 8px;
  --radius-pills: 9999px;
  --radius-buttons: 8px;
  --radius-default: 8px;
  --shadow-xl: rgba(64, 79, 109, 0.06) 0px 0px 0px 0.5px, rgba(24, 44, 89, 0.137) 0px 2px 4px 0px, rgba(24, 44, 89, 0.07) 0px 6px 12px 0px;
  --shadow-xl-2: rgba(53, 65, 90, 0.2) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset;
  --surface-canvas-white: #ffffff;
  --surface-midnight-ink: #0f1015;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #0f1015;
  --color-canvas-white: #ffffff;
  --color-deepest-shadow: #000000;
  --color-ash-grey: #575a5f;
  --color-silver-mist: #d7d9de;
  --color-rich-plum: #8b3dff;
  --color-electric-lavender: #a370fc;
  --color-fuchsia-burst: #e950f7;
  --color-scarlet-glow: #ff3d4d;
  --color-tangerine-pop: #ff6105;
  --color-vivid-violet: #9729ff;
  --color-turquoise-dream-gradient: #00C4CC;
  --color-sunset-fire-gradient: #FF3B4C;
  --color-digital-spectrum-gradient: #992BFF;
  --color-ocean-twilight-gradient: #00C4CC;
  --color-magenta-bloom-gradient: #BD19FF;
  --color-emerald-growth-gradient: #007D26;
  --font-canva-sans: 'Canva Sans', Inter, Arial, sans-serif;
  --font-times: 'Times', serif;
  --font-arial: 'Arial', sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body-lg: 16px;
  --leading-body-lg: 1.38;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.24px;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --tracking-heading: -0.28px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.32px;
  --text-display-sm: 36px;
  --leading-display-sm: 1.25;
  --tracking-display-sm: -0.36px;
  --text-display: 56px;
  --leading-display: 1.1;
  --tracking-display: -0.56px;
  --text-display-lg: 64px;
  --leading-display-lg: 1.1;
  --tracking-display-lg: -0.64px;
  --text-display-xl: 80px;
  --leading-display-xl: 1.1;
  --tracking-display-xl: -0.8px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-76: 76px;
  --spacing-212: 212px;
  --spacing-256: 256px;
  --radius-cards: 8px;
  --radius-pills: 9999px;
  --radius-buttons: 8px;
  --radius-default: 8px;
  --shadow-xl: rgba(64, 79, 109, 0.06) 0px 0px 0px 0.5px, rgba(24, 44, 89, 0.137) 0px 2px 4px 0px, rgba(24, 44, 89, 0.07) 0px 6px 12px 0px;
  --shadow-xl-2: rgba(53, 65, 90, 0.2) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset;
  --surface-canvas-white: #ffffff;
  --surface-midnight-ink: #0f1015;
}
```
