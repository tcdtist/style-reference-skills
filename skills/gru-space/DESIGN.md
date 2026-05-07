---
version: alpha
name: "GRU Space"
description: "GRU Space presents a 'cosmic minimalist' aesthetic, leveraging deep blacks and stark whites to evoke the vastness of space and the precision of engineering. The combination of two distinct custom typefaces — one a contemporary sans-serif, the other a more traditional serif for display — creates a tension between futuristic ambition and foundational elegance. Minimalist border-only buttons, coupled with a complete absence of shadows, emphasize a flat, high-contrast digital environment, akin to looking at a star chart."
theme: "dark"
industry: "other"
source_url: "https://www.gru.space"
refero_style_id: "d58d888e-85ed-4273-9816-2c83f65f6f1d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776010486894-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776010486894-thumb.jpg"
extracted_at: "2026-04-12T16:15:08.420Z"
---

# GRU Space — Style Reference

> Star Chart Blueprint: High-contrast, sharp, and focused on pure form against a dark void.

**Theme:** dark

**Industry:** other

GRU Space presents a 'cosmic minimalist' aesthetic, leveraging deep blacks and stark whites to evoke the vastness of space and the precision of engineering. The combination of two distinct custom typefaces — one a contemporary sans-serif, the other a more traditional serif for display — creates a tension between futuristic ambition and foundational elegance. Minimalist border-only buttons, coupled with a complete absence of shadows, emphasize a flat, high-contrast digital environment, akin to looking at a star chart.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #080808 | `--color-void-black` | Primary background for the entire application, creating a deep, infinite canvas. Also used for some text. |
| Lunar White | #ffffff | `--color-lunar-white` | Dominant text color for headings and body, accent color for borders and interactive elements, providing high contrast against the Void Black. |
| Slate Gray | #9c9c9c | `--color-slate-gray` | Secondary text and informational accents, offering a subtle contrast to Lunar White without diminishing readability. |
| Obsidian Grey | #191919 | `--color-obsidian-grey` | Subtle border color, creating very low-contrast divisions within the dark theme. |
| Meteorite Gray | #393939 | `--color-meteorite-gray` | Background for minor elements or dividers, a slightly lighter shade of the background. |
| Moon Rock | #b4b7b8 | `--color-moon-rock` | Background for specific card elements, providing a distinct, slightly desaturated surface within the dark theme. |

## Tokens — Typography

### Overused Grotesk

- **Token:** `--font-overused-grotesk`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px, 19px, 20px, 24px, 28px, 51px
- **Line heights:** 1.10, 1.20, 1.30, 1.40, 1.50, 1.60
- **Letter spacing:** -0.01em at larger sizes; 0.02em for smaller text, maintaining legibility across contrast levels.
- **Role:** The primary workhorse typeface for all body text, navigation, buttons, and most headings below display size. Its modern, sans-serif character supports the technical and forward-looking brand identity.

### PP Mondwest

- **Token:** `--font-pp-mondwest`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 16px, 51px, 54px
- **Line heights:** 1.00, 1.10, 1.20, 1.40
- **Letter spacing:** -0.011em at 54px, -0.01em at 51px, -0.009em at 16px, creating a refined, tight feel for headlines.
- **Role:** Used exclusively for large display headings; its classical serif form provides a sense of gravitas and sophistication, contrasting with the technical sans-serif to create an elevated, almost luxury, feel for key brand statements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0.24px | `--text-caption` |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 16px | 1.4 | -0.16px | `--text-body` |
| subheading | 19px | 1.3 | — | `--text-subheading` |
| heading | 24px | 1.2 | — | `--text-heading` |
| heading-lg | 28px | 1.2 | — | `--text-heading-lg` |
| display | 51px | 1.1 | -0.51px | `--text-display` |
| display-xl | 54px | 1 | -0.59px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-67 | 67px | `--spacing-67` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-98 | 98px | `--spacing-98` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-184 | 184px | `--spacing-184` |
| spacing-231 | 231px | `--spacing-231` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 6px |
| badges | 20px |
| inputs | 0px |
| buttons | 1440px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |

## Components

### Primary Ghost Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Featured In — Press Article Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Headline & CTA Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Ghost Button

**Role:** Call to action button for primary actions

Border-only button with Lunar White text and 1440px border-radius, giving it a pill shape. Text is Overused Grotesk, 16px, weight 400. No background, transparent.

### Header Navigation Link

**Role:** Navigation items in the header

Text link using Overused Grotesk, 16px, weight 400, Lunar White color, no background or border, 0px border-radius.

### Featured Article Card

**Role:** Displays news articles or similar content

Transparent background card with 0px border-radius. Text uses Overused Grotesk or PP Mondwest with Lunar White or Slate Gray color. Padding of 80px top/bottom and 72px left on desktop. Hover state darkens text to 60% opacity.

### Badge with Moon Rock Background

**Role:** Category tags or specific status indicators

Rectangle with 20px border-radius and Moon Rock background (#b4b7b8). Padding of 16px around content. Text is Overused Grotesk, Lunar White.

### Dark Overlay Card

**Role:** Informational cards with slight background emphasis

Card with a translucent dark background (rgba(0,0,0,0.4)) and 8px border-radius. Padding of 12px vertical and 20px horizontal. Text is Lunar White with Overused Grotesk.

### Text Input Field

**Role:** User input for forms

White background, Lunar White border with 0px border-radius. Text is Void Black. Padding of 8px vertical and 24px horizontal. Placeholder text is Slate Grey (#6b6b6b).

## Do's and Don'ts

### Do

- Use Overused Grotesk (or Inter) for all body copy and UI elements, prioritizing readability with Lunar White #ffffff on Void Black #080808.
- Employ PP Mondwest (or Playfair Display) exclusively for large, impactful headlines at sizes 51px and 54px to convey brand authority.
- Maintain a fully dark theme with 'Void Black' #080808 as the pervasive background color.
- Apply a 1440px border-radius to all buttons for a distinctive pill shape, ensuring a soft touch within the otherwise sharp interface.
- Utilize 'Lunar White' #ffffff for all interactive element borders and primary text to ensure maximum contrast and visual guidance.
- Use letter-spacing as specified for PP Mondwest headlines (-0.011em at largest size) to ensure a high-end, tight typographic presentation.

### Don't

- Do not use shadows for elevation; rely solely on color contrast and background changes for layering and hierarchy.
- Avoid using chromatic colors; the palette is strictly achromatic with very subtle dark and light grays.
- Do not introduce new fonts; restrict typography to Overused Grotesk and PP Mondwest to maintain distinct roles.
- Do not deviate from the specified border-radii; especially the 1440px pill shape for buttons and 0px for inputs.
- Do not use generic button styles; all buttons are primarily ghost buttons with a visible border, not solid fills.
- Avoid excessive imagery; the aesthetic is text and UI-dominant, with imagery used sparingly and powerfully (e.g., full-bleed backgrounds).

## Imagery

The visual language is characterized by realistic, high-resolution photography of celestial bodies (planets, stars, sun flares) used full-bleed as background elements, creating an immersive, atmospheric context. These images are often dark and moody, serving as subtle backdrops rather than focal points. Product-specific visuals are minimal, with abstract UI graphics represented through high-contrast grid lines (+ shapes) on dark surfaces. Icons are typically monochromatic white outlines. The density is image-heavy in the hero but otherwise text-dominant, with imagery functioning decoratively to establish mood and theme.

## Layout

The page employs a full-bleed layout, where background imagery and dark gradients extend to the edges of the viewport, creating a vast, immersive experience. Content is primarily centered within a flexible max-width container that isn't strictly defined but provides comfortable reading lines. The hero section features a full-viewport visual (dynamic video/image) with a centered headline and navigation pinned to the top. Subsequent sections maintain consistent vertical spacing (sectionGap of 80px) and often utilize a single-column stacked content arrangement, with text-heavy blocks contrasting against the dark backgrounds. There's no distinct grid for cards or features, rather content flows linearly. Navigation is a sticky top bar with minimal links and a prominent 'Reserve a Spot' ghost button.

## Similar Brands

- **Axiom Space** — Dark-mode UI, focus on space exploration, high-contrast text on dark backgrounds, and a blend of modern sans-serifs with a touch of elegance.
- **SpaceX** — Technical, minimalist design, dark UI with strong typography, and a brand focus on futuristic endeavors.
- **Apple (Pro product pages)** — High-contrast dark themes, strong emphasis on typography, and a sophisticated, almost stark presentation of advanced technology.
- **Baidu (Science & Tech pages)** — Utilizes a clean, dark interface with prominent header typography, blending technological advancement with a refined visual style.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #080808;
  --color-lunar-white: #ffffff;
  --color-slate-gray: #9c9c9c;
  --color-obsidian-grey: #191919;
  --color-meteorite-gray: #393939;
  --color-moon-rock: #b4b7b8;
  --font-overused-grotesk: 'Overused Grotesk', Inter;
  --font-pp-mondwest: 'PP Mondwest', Playfair Display;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.16px;
  --text-subheading: 19px;
  --leading-subheading: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --text-display: 51px;
  --leading-display: 1.1;
  --tracking-display: -0.51px;
  --text-display-xl: 54px;
  --leading-display-xl: 1;
  --tracking-display-xl: -0.59px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-59: 59px;
  --spacing-64: 64px;
  --spacing-67: 67px;
  --spacing-68: 68px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-98: 98px;
  --spacing-103: 103px;
  --spacing-110: 110px;
  --spacing-184: 184px;
  --spacing-231: 231px;
  --radius-cards: 6px;
  --radius-badges: 20px;
  --radius-inputs: 0px;
  --radius-buttons: 1440px;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #080808;
  --color-lunar-white: #ffffff;
  --color-slate-gray: #9c9c9c;
  --color-obsidian-grey: #191919;
  --color-meteorite-gray: #393939;
  --color-moon-rock: #b4b7b8;
  --font-overused-grotesk: 'Overused Grotesk', Inter;
  --font-pp-mondwest: 'PP Mondwest', Playfair Display;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.16px;
  --text-subheading: 19px;
  --leading-subheading: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --text-display: 51px;
  --leading-display: 1.1;
  --tracking-display: -0.51px;
  --text-display-xl: 54px;
  --leading-display-xl: 1;
  --tracking-display-xl: -0.59px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-59: 59px;
  --spacing-64: 64px;
  --spacing-67: 67px;
  --spacing-68: 68px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-98: 98px;
  --spacing-103: 103px;
  --spacing-110: 110px;
  --spacing-184: 184px;
  --spacing-231: 231px;
  --radius-cards: 6px;
  --radius-badges: 20px;
  --radius-inputs: 0px;
  --radius-buttons: 1440px;
}
```
