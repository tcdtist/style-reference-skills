---
version: alpha
name: "Chantlings"
description: "Chantlings uses a nocturnal, atmospheric design language, evoking a digital instrument in a dark, quiet room. The canvas is deep black, allowing subtle gradients and glowing elements to emerge. Typography is highly refined, with an elegant serif for headlines that whispers rather than shouts. Interactive elements are minimal, often ghosted, with one vivid orange accent color for fills, giving a sense of warmth and focused interactivity."
theme: "dark"
industry: "other"
source_url: "https://www.iorama.studio/chantlings"
refero_style_id: "5090ce54-9097-4d29-a741-2847dbacc419"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513881276-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513881276-thumb.jpg"
extracted_at: "2026-04-30T01:51:59.147Z"
---

# Chantlings — Style Reference

> Moonlit Forest Floor: glowing forms in the deep dark

**Theme:** dark

**Industry:** other

Chantlings uses a nocturnal, atmospheric design language, evoking a digital instrument in a dark, quiet room. The canvas is deep black, allowing subtle gradients and glowing elements to emerge. Typography is highly refined, with an elegant serif for headlines that whispers rather than shouts. Interactive elements are minimal, often ghosted, with one vivid orange accent color for fills, giving a sense of warmth and focused interactivity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Noir | #000000 | `--color-midnight-noir` | Page background, primary surface for most elements — creates a deep, infinite canvas |
| Ghostly Gray | #333333 | `--color-ghostly-gray` | Muted text, inactive borders, general UI elements and ghost button text |
| Canvas White | #ffffff | `--color-canvas-white` | Primary text color, background for outlined buttons, secondary borders — creates sharp contrast against the dark canvas |
| Shadow Tint | #222222 | `--color-shadow-tint` | Subtle borders and muted accents, lighter than Ghostly Gray |
| Active Fire | #ff8800 | `--color-active-fire` | Filled action buttons, interactive elements — a warm, vivid orange that provides a focused point of interaction |
| Subtle Glow | #ffaa20 | `--color-subtle-glow` | Outlined action borders, decorative link accents — a slightly softer orange, suggesting a secondary interactive state or highlight |

## Tokens — Typography

### Mija webfont

- **Token:** `--font-mija-webfont`
- **Substitute:** Lora, Playfair Display
- **Weights:** 100, 300
- **Sizes:** 14px, 20px, 24px, 25px, 32px
- **Line heights:** 0.80, 0.83, 1.00, 1.06, 1.33, 1.42, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** All text: headlines use weight 300 for a distinguished, unassertive presence; body text and links are also from this family to maintain a consistent, refined voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | 0px | `--text-caption` |
| body | 20px | 1.42 | 0px | `--text-body` |
| subheading | 24px | 1.06 | 0px | `--text-subheading` |
| display | 32px | 0.8 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-196 | 196px | `--spacing-196` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 50px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100px |
| cardPadding | 18px |
| elementGap | 10px |

## Components

### Ghost Navigation Button

**Role:** Header navigation, secondary actions

Transparent background, Ghostly Gray (#333333) text and 1px border, 0px border radius, 18px padding for a minimalist, integrated look. Font is Mija, weight is not explicitly stated but inherits body style.

### Primary Action Button

**Role:** Main calls to action

Active Fire (#ff8800) background, Canvas White (#ffffff) text, 50px border radius for a distinctive pill shape, 18px vertical and 23px horizontal padding. Font is Mija.

### Outlined Accent Link

**Role:** Secondary links with visual emphasis

Transparent background, Subtle Glow (#ffaa20) text and 1px border, 0px border radius, with 100px horizontal padding, often used in decorative contexts. Font is Mija.

### App Store Download Button

**Role:** Directing users to download the app

Features a transparent background with a Canvas White (#ffffff) border, text, and icon. Uses an 18px vertical and 23px horizontal padding, with a 50px radius to match the primary button's pill shape. Font is Mija.

## Do's and Don'ts

### Do

- Prioritize deep Midnight Noir (#000000) for all main backgrounds to maintain the dark, atmospheric tone.
- Use Mija webfont weight 300 for all headlines and significant text at larger sizes (24px, 32px) to convey understated elegance.
- Apply a 50px border-radius to all primary action buttons for a consistent pill-shaped aesthetic.
- Use Active Fire (#ff8800) exclusively for filled primary calls to action to ensure visual hierarchy and warmth.
- Maintain generous sectionGap of 100px between major content blocks to create ample breathing room in the dark layout.
- Use Canvas White (#ffffff) for primary text and Ghostly Gray (#333333) for muted text and subtle UI elements, ensuring readability against the dark background.

### Don't

- Avoid using bright or light backgrounds for main content sections; the system relies on a dark theme.
- Do not introduce sharp, angular shapes for interactive elements; prefer soft curves or pill shapes for buttons.
- Refrain from heavy drop shadows or excessive elevation; the design system favors a flat, subtle luminescence.
- Do not clutter layouts; aim for comfortable density with 100px section gaps and clear, isolated element placement.
- Avoid generic sans-serif fonts; Mija's distinct serif style is central to the brand's sophisticated visual identity.
- Do not use multiple accent colors; concentrate on the Active Fire (#ff8800) and Subtle Glow (#ffaa20) palette for all interactive highlights.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Noir Canvas | #000000 | Dominant page background, providing a deep, immersive context |

## Imagery

This site uses minimal, abstract, and stylized 3D graphics that seem to pulsate with a soft internal glow. The 'Chantlings' themselves appear as dark, bulbous, vaguely organic shapes with glowing orange internal elements, contained within a dark, almost sculptural environment. Imagery serves an atmospheric and symbolic role rather than explanatory content, blending seamlessly into the dark UI without sharp edges or heavy outlines. The iconography focuses on simple, outlined white forms against the dark background, maintaining a light footprint.

## Layout

The page uses a full-bleed, dark layout without a fixed max-width, allowing background elements to extend edge-to-edge. The hero section features a centered headline and description over a dark, atmospheric visual. Content sections maintain consistent vertical spacing of 100px, although specific internal content structures are minimal, mainly focusing on centered text blocks and a single mobile device visual. Navigation is handled by a minimal top-left logo and a hamburger menu icon on the top right, with no visible sticky header.

## Similar Brands

- **Calm** — Uses a dark, immersive interface with subtle glow effects and a focus on atmospheric visuals to create a serene user experience.
- **Endel** — Employs dark backgrounds and abstract, often glowing, visual elements to represent sound and create an ambient, focused environment.
- **Headspace (dark mode)** — Similar approach to deep, dark backgrounds with gentle, outlined illustrations and minimal, friendly typography for a calming effect.
- **Arc Browser** — Embraces a highly customized, sometimes dark, UI with a focus on fluid interactions and subtle, integrated visual accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-noir: #000000;
  --color-ghostly-gray: #333333;
  --color-canvas-white: #ffffff;
  --color-shadow-tint: #222222;
  --color-active-fire: #ff8800;
  --color-subtle-glow: #ffaa20;
  --font-mija-webfont: 'Mija webfont', Lora, Playfair Display;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: 0px;
  --text-body: 20px;
  --leading-body: 1.42;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.06;
  --tracking-subheading: 0px;
  --text-display: 32px;
  --leading-display: 0.8;
  --tracking-display: 0px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-65: 65px;
  --spacing-100: 100px;
  --spacing-108: 108px;
  --spacing-196: 196px;
  --radius-buttons: 50px;
  --radius-default: 0px;
  --surface-midnight-noir-canvas: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-noir: #000000;
  --color-ghostly-gray: #333333;
  --color-canvas-white: #ffffff;
  --color-shadow-tint: #222222;
  --color-active-fire: #ff8800;
  --color-subtle-glow: #ffaa20;
  --font-mija-webfont: 'Mija webfont', Lora, Playfair Display;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: 0px;
  --text-body: 20px;
  --leading-body: 1.42;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.06;
  --tracking-subheading: 0px;
  --text-display: 32px;
  --leading-display: 0.8;
  --tracking-display: 0px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-65: 65px;
  --spacing-100: 100px;
  --spacing-108: 108px;
  --spacing-196: 196px;
  --radius-buttons: 50px;
  --radius-default: 0px;
  --surface-midnight-noir-canvas: #000000;
}
```
