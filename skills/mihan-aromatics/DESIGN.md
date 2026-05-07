---
version: alpha
name: "Mihan Aromatics ™"
description: "Mihan Aromatics ™ operates on a high-contrast minimalist aesthetic, emphasizing stark black and white with subtle gray accents. Typography is compact and precise, maintaining a refined elegance. Surfaces are predominantly flat, and component weights are light, prioritizing content and product imagery. The overall impression is one of considered simplicity and understated luxury, with structure revealed through fine borders and purposeful spacing rather than heavy visual elements."
theme: "light"
industry: "ecommerce"
source_url: "https://mihanaromatics.com"
refero_style_id: "95140276-f52b-4655-8fa2-e765126c949d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513484846-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513484846-thumb.jpg"
extracted_at: "2026-04-30T01:45:27.794Z"
---

# Mihan Aromatics ™ — Style Reference

> monochrome canvas, refined contrast

**Theme:** light

**Industry:** ecommerce

Mihan Aromatics ™ operates on a high-contrast minimalist aesthetic, emphasizing stark black and white with subtle gray accents. Typography is compact and precise, maintaining a refined elegance. Surfaces are predominantly flat, and component weights are light, prioritizing content and product imagery. The overall impression is one of considered simplicity and understated luxury, with structure revealed through fine borders and purposeful spacing rather than heavy visual elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, default icon fill |
| Midnight Ink | #000000 | `--color-midnight-ink` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Ash Gray | #878787 | `--color-ash-gray` | Muted text or decorative borders, used for less prominent visual elements |
| Charcoal | #333333 | `--color-charcoal` | Secondary body text for detailed content, slightly softer than Midnight Ink |
| Shadow Tint | #4d4d4d | `--color-shadow-tint` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |

## Tokens — Typography

### Mihan

- **Token:** `--font-mihan`
- **Substitute:**  serif
- **Weights:** 300, 400, 500
- **Sizes:** 10px, 11px, 12px, 13px, 14px, 16px, 18px, 20px, 32px, 44px, 48px
- **Line heights:** 1.00, 1.20, 1.38, 1.40, 1.80
- **Letter spacing:** -0.01em at 48px, 0.05em at 10px
- **Role:** The primary typeface for all text content. Its variable weight allows for subtle hierarchy; the lighter 300 weight for marketing headlines creates an airy, sophisticated feel, while the consistent tracking across sizes helps maintain a precise, refined look.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.4 | 0.05px | `--text-caption` |
| heading | 32px | 1.2 | 0.036px | `--text-heading` |
| heading-lg | 44px | 1 | 0.023px | `--text-heading-lg` |
| display | 48px | 1 | 0.02px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-137 | 137px | `--spacing-137` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 32px |
| elementGap | 8px |

## Components

### Ghost Button - Minimal

**Role:** Subtle call to action for secondary actions or navigation.

Background rgba(0, 0, 0, 0), text Midnight Ink (#000000), 1px border in Midnight Ink (#000000), 0px border-radius, 1px vertical padding, 6px horizontal padding. This button is visually very light, almost blending with the background.

### Filled Button - White

**Role:** Primary Call to Action, stands out against darker backgrounds.

Background Canvas White (#ffffff), text Midnight Ink (#000000), 0px border-radius, 8px vertical padding, 13.6px horizontal padding. No visible border distinction, it's a solid block of white.

### Ghost Button - White/Transparent

**Role:** Call to action used on hero images, designed for high contrast against diverse media.

Background rgba(255, 255, 255, 0), text Canvas White (#ffffff), 1px border in Canvas White (#ffffff), 0px border-radius, 5px vertical padding, 11px horizontal padding.

### Feature Card

**Role:** Content container for showcasing features or product details.

Background Canvas White (#ffffff), 0px border-radius, no box shadow, 64px vertical padding, 32px horizontal padding. Features a very minimalist design with ample whitespace.

### Text Input - Underlined

**Role:** Standard input field for user data.

Background rgba(255, 255, 255, 0), text Midnight Ink (#000000), 0px border-radius, 1px bottom border in Midnight Ink (#000000), 16px vertical padding, 0px left padding. Emphasizes an understated form experience.

### Navigation Badge

**Role:** Categorization or informational tags within menus or lists.

Background rgba(0, 0, 0, 0), text Midnight Ink (#000000), 0px border-radius, 5px all-around padding. Designed for minimal visual distraction.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) for backgrounds and Midnight Ink (#000000) for text and interactive borders to maintain high contrast and clarity.
- Use Mihan typeface at weight 300 for all large headlines (32px and above) to convey authority through restraint.
- Apply 0px border-radius consistently across all UI elements, including buttons, cards, and inputs, for a sharp, angular aesthetic.
- Employ ghost buttons with 1px borders in the primary text color (Midnight Ink #000000) for secondary actions or where a lightweight interaction is desired.
- Maintain a clear vertical rhythm using 64px for section gaps and 32px for inner card padding, creating breathing room within the compact layout.
- Use -0.01em letter-spacing for display typography and 0.05em for caption-sized text to optimize readability at each scale.
- Ensure all interactive elements, even if ghost-style, have a visible border or clear text color in Midnight Ink (#000000) against Canvas White (#ffffff).

### Don't

- Avoid chromatic colors for primary calls to action; stick to the black and white palette for core interactive elements.
- Do not introduce rounded corners; all elements must adhere to the strict 0px border-radius.
- Refrain from using heavy shadows or complex gradients; rely on contrast, fine borders, and spacing for visual hierarchy.
- Do not vary text letter-spacing randomly; apply specific values based on the type scale to maintain precision.
- Avoid using multiple font families or weights outside of the specified Mihan family and its defined weights.
- Do not use overly verbose or decorative language in component descriptions or labels; maintain compact and precise text.
- Do not use more than 1px for borders on interactive elements or separators unless for specific semantic purposes (e.g., error states).

## Similar Brands

- **Aesop** — Monochromatic color palette, minimalist typography, and emphasis on product photography in clean, structured layouts.
- **Byredo** — High-contrast black and white aesthetic, luxury product focus, and elegant, understated component styling.
- **Le Labo** — Sparsely designed, text-heavy sections paired with precise product imagery and a focus on essential information.
- **Studio McGee** — Minimalist e-commerce with a focus on product presentation through high-quality photography and restrained UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #000000;
  --color-ash-gray: #878787;
  --color-charcoal: #333333;
  --color-shadow-tint: #4d4d4d;
  --font-mihan: 'Mihan',  serif;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.05px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: 0.036px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0.023px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: 0.02px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-75: 75px;
  --spacing-83: 83px;
  --spacing-100: 100px;
  --spacing-137: 137px;
  --radius-all: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #000000;
  --color-ash-gray: #878787;
  --color-charcoal: #333333;
  --color-shadow-tint: #4d4d4d;
  --font-mihan: 'Mihan',  serif;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.05px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: 0.036px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0.023px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: 0.02px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-75: 75px;
  --spacing-83: 83px;
  --spacing-100: 100px;
  --spacing-137: 137px;
  --radius-all: 0px;
}
```
