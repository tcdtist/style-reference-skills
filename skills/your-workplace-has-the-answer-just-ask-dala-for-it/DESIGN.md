---
version: alpha
name: "Your workplace has the answer. Just ask Dala for it."
description: "Dala adopts a deep space digital aesthetic: a completely dark canvas punctuated by holographic, energetic typography and interactive elements. Its visual identity relies on vibrant, glowing accents against achromatic backgrounds. Components are lightweight and often border-driven, emphasizing digital dimensionality over physical presence. The overall mood is futuristic and intelligent, with strong visual hierarchy created through size and color contrast."
theme: "dark"
industry: "ai"
source_url: "https://dala.craftedbygc.com"
refero_style_id: "e5f5f8cf-e68d-4ed1-bbf5-6b67569af648"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516414291-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516414291-thumb.jpg"
extracted_at: "2026-04-30T02:33:56.653Z"
---

# Your workplace has the answer. Just ask Dala for it. — Style Reference

> Deep space digital holo-deck

**Theme:** dark

**Industry:** ai

Dala adopts a deep space digital aesthetic: a completely dark canvas punctuated by holographic, energetic typography and interactive elements. Its visual identity relies on vibrant, glowing accents against achromatic backgrounds. Components are lightweight and often border-driven, emphasizing digital dimensionality over physical presence. The overall mood is futuristic and intelligent, with strong visual hierarchy created through size and color contrast.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #000000 | `--color-midnight-void` | Page background, primary text on light elements, subtle borders |
| Holo White | #ffffff | `--color-holo-white` | Primary text, major headings, key UI components against dark backgrounds, border accents |
| Stardust Gray | #bdbdbd | `--color-stardust-gray` | Muted text, secondary information, decorative borders |
| Ghost Gray | #9a9a9a | `--color-ghost-gray` | Tertiary text, inactive navigation items, ghost button borders |
| Cosmic Violet | #8052ff | `--color-cosmic-violet` | Primary action buttons, active navigation, interactive elements — a vivid highlight against the dark canvas |
| Sunflare Yellow | #ffb829 | `--color-sunflare-yellow` | Accent text highlights, decorative borders, secondary interactive states — adds a warm, vivid contrast |
| Quantum Teal | #15846e | `--color-quantum-teal` | Subtle background fills, decorative elements in navigation – a cool undertone in some UI spaces |

## Tokens — Typography

### Acronym

- **Token:** `--font-acronym`
- **Substitute:** Montserrat, Raleway
- **Weights:** 200, 400, 600, 700
- **Sizes:** 12px, 14px, 15px, 18px, 24px, 27px, 36px, 42px, 48px, 78px, 113px
- **Line heights:** 0.81, 0.90, 1.00, 1.10, 1.20, 1.25, 1.30, 1.50
- **Letter spacing:** -0.0400em for headings at 113px, 0.0500em for uppercase navigation, 0.0210em for larger body copy, 0.0250em for smaller body copy.
- **Role:** Primary typeface for all text. Its varied weights and negative letter-spacing for large headlines create a modern, impactful, yet legible digital aesthetic. The use of specific positive letter-spacing for navigation and smaller text maintains readability even with all caps.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0.025px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.025px | `--text-body-sm` |
| subheading | 24px | 1.25 | — | `--text-subheading` |
| heading-sm | 36px | 1.1 | — | `--text-heading-sm` |
| heading | 48px | 1 | — | `--text-heading` |
| heading-lg | 78px | 0.9 | — | `--text-heading-lg` |
| display | 113px | 0.81 | -0.04px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-268 | 268px | `--spacing-268` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| buttons | 24px |
| navItems | 24px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 15px |
| elementGap | 6px |

## Components

### Primary Action Button

**Role:** Main call-to-action

Filled button with Cosmic Violet background (#8052ff), Holo White text (#ffffff), and a 24px border-radius. Padding of 14.4px vertical and 15.96px horizontal.

### Ghost Navigation Button

**Role:** Secondary navigation or text-based actions

Transparent background button with Ghost Gray text (#9a9a9a) and no border-radius. Padding is minimal at 1px vertical and 6px horizontal; often uppercase and letter-spaced.

### Naked Link

**Role:** Inline text links

Transparent background with Holo White text (#ffffff), no specific padding or border-radius. Relies on text color for distinction.

### Main Header

**Role:** Site-wide sticky header

Transparent background that floats over the page content. Contains Holo White text elements (logo, navigation) with Cosmic Violet (#8052ff) used for active states or accent colors. Padding 14px vertical, 16px horizontal. Navigation items have a 24px border-radius.

## Do's and Don'ts

### Do

- Prioritize Cosmic Violet (#8052ff) for all primary interactive elements.
- Use Holo White (#ffffff) for main headings and key UI text against Midnight Void (#000000) backgrounds to ensure high contrast and readability.
- Apply a 24px border-radius consistently to all interactive elements such as buttons and navigation items, and for card-like structures.
- Maintain a clear visual hierarchy by utilizing the large headline type sizes (48px, 78px, 113px) with reduced letter-spacing for impactful statements.
- Employ Ghost Gray (#9a9a9a) for subtle secondary navigation and text, ensuring it recedes while remaining legible.
- Use Sunflare Yellow (#ffb829) sparingly as an accent for highlighted text or decorative borders to draw attention.

### Don't

- Avoid using flat, opaque background colors unless for specific branded components, preserving the dark, spacious canvas.
- Do not introduce new color palettes; stick to the defined chromatically vivid or achromatic colors.
- Do not use generic system fonts; always utilize Acronym or its designated substitutes.
- Avoid heavy drop shadows or physical metaphors; embrace the flat, digital aesthetic with strong color contrast.
- Do not add conflicting border-radii; adhere strictly to the 24px value for UI elements and cards.
- Resist dense layouts; use the established elementGap and sectionGap for comfortable content separation and a sense of depth.

## Similar Brands

- **Anthropic** — Shares a dark-mode philosophy, focusing on text and minimalist UI against deep backgrounds, evoking seriousness.
- **Linear** — Similar approach to clean, border-driven components and a strong emphasis on typography as a primary visual element, even with a lighter theme.
- **Cognition Labs (Devin AI)** — Futuristic UI, dark background with glowing accents, and emphasis on abstract/tech-inspired visuals for AI products.
- **Replit** — Utilizes a dark background with specific accent colors for code syntax highlighting and interactive elements, creating a digital workspace feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #000000;
  --color-holo-white: #ffffff;
  --color-stardust-gray: #bdbdbd;
  --color-ghost-gray: #9a9a9a;
  --color-cosmic-violet: #8052ff;
  --color-sunflare-yellow: #ffb829;
  --color-quantum-teal: #15846e;
  --font-acronym: 'Acronym', Montserrat, Raleway;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.025px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.025px;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.1;
  --text-heading: 48px;
  --leading-heading: 1;
  --text-heading-lg: 78px;
  --leading-heading-lg: 0.9;
  --text-display: 113px;
  --leading-display: 0.81;
  --tracking-display: -0.04px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-115: 115px;
  --spacing-120: 120px;
  --spacing-268: 268px;
  --radius-cards: 24px;
  --radius-buttons: 24px;
  --radius-navitems: 24px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #000000;
  --color-holo-white: #ffffff;
  --color-stardust-gray: #bdbdbd;
  --color-ghost-gray: #9a9a9a;
  --color-cosmic-violet: #8052ff;
  --color-sunflare-yellow: #ffb829;
  --color-quantum-teal: #15846e;
  --font-acronym: 'Acronym', Montserrat, Raleway;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.025px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.025px;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.1;
  --text-heading: 48px;
  --leading-heading: 1;
  --text-heading-lg: 78px;
  --leading-heading-lg: 0.9;
  --text-display: 113px;
  --leading-display: 0.81;
  --tracking-display: -0.04px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-115: 115px;
  --spacing-120: 120px;
  --spacing-268: 268px;
  --radius-cards: 24px;
  --radius-buttons: 24px;
  --radius-navitems: 24px;
}
```
