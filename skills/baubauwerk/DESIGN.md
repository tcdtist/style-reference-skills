---
version: alpha
name: "Baubauwerk"
description: "Baubauwerk presents a stark, high-contrast visual system built on uncompromising black and white. Typography carries the primary visual weight, feeling both academic and modern, with minimal use of color beyond functional roles. Surfaces are flat and unadorned, relying on crisp text and strong compositional lines rather than elevation or gradients. The overall atmosphere is direct, confident, and text-focused, allowing content to take precedence without visual interruption."
theme: "light"
industry: "design"
source_url: "https://baubauwerk.com"
refero_style_id: "dbfeb56b-8802-4166-b51f-714b3cfddb40"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520590436-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520590436-thumb.jpg"
extracted_at: "2026-04-30T03:43:28.850Z"
---

# Baubauwerk — Style Reference

> Black & White Manifesto

**Theme:** light

**Industry:** design

Baubauwerk presents a stark, high-contrast visual system built on uncompromising black and white. Typography carries the primary visual weight, feeling both academic and modern, with minimal use of color beyond functional roles. Surfaces are flat and unadorned, relying on crisp text and strong compositional lines rather than elevation or gradients. The overall atmosphere is direct, confident, and text-focused, allowing content to take precedence without visual interruption.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, primary card surfaces, inverse text on dark elements |
| Midnight Black | #000000 | `--color-midnight-black` | Primary text, heading text, navigation elements, dark background accents, button backgrounds. Defines the core contrast |
| Ghost Border | #d8d8d8 | `--color-ghost-border` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Subtle Gray | #9b9b9b | `--color-subtle-gray` | Muted text, secondary navigation items, and hairline borders for less prominent elements |
| Button Text Gray | #4e4a4a | `--color-button-text-gray` | Text color for default, non-filled buttons, chosen for readability against white |

## Tokens — Typography

### Quattrocento Sans

- **Token:** `--font-quattrocento-sans`
- **Substitute:** Open Sans
- **Weights:** 400, 700
- **Sizes:** 14px, 16px, 24px, 30px
- **Line heights:** 1.25, 1.33, 1.60, 1.71
- **Role:** Body text, smaller headings, navigation links, and footer content. Its legibility balances the bolder display font.

### Telegraf

- **Token:** `--font-telegraf`
- **Substitute:** Montserrat
- **Weights:** 400, 500
- **Sizes:** 14px, 22px, 23px, 25px, 48px, 60px
- **Line heights:** 1.00, 1.10, 1.60, 1.71
- **Role:** Dominant display font for large headings, hero text, and key brand statements. Its geometric structure and varying weights create a commanding presence.

### Roboto

- **Token:** `--font-roboto`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 12px
- **Line heights:** 1.00
- **Role:** Used specifically for button text at a small size, maintaining crispness and efficiency.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1 | — | `--text-caption` |
| body-sm | 14px | 1.25 | — | `--text-body-sm` |
| body | 16px | 1.33 | — | `--text-body` |
| subheading | 22px | 1.1 | — | `--text-subheading` |
| heading | 24px | 1.25 | — | `--text-heading` |
| heading-lg | 30px | 1.25 | — | `--text-heading-lg` |
| display | 48px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-81 | 81px | `--spacing-81` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-220 | 220px | `--spacing-220` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Ghost Action Button

**Role:** Secondary action button for filtering and navigation.

Text in Button Text Gray (#4e4a4a), no background, 1px Ghost Border (#d8d8d8). Padding is 5px top, 20px right, 6px bottom, 20px left. Zero border-radius for sharp, decisive edges.

### Primary Action Button

**Role:** Prominent calls to action.

Solid Midnight Black (#000000) background with Canvas White (#ffffff) text. Padding is 8px top, 13px right, 10px bottom, 13px left. Zero border-radius for a strong, unyielding presence.

### Feature Card

**Role:** Content container for articles or project showcases.

Transparent background with no box shadow and 0px border-radius. Padding is 0px on all sides, allowing content to dictate visual spacing. Borders are applied semantically to elements within the card, not the card itself.

### Category Badge

**Role:** Small, descriptive labels for content.

Transparent background with Midnight Black (#000000) text. Padding is 1px top, 0px right, 0px bottom, 1px left. Zero border-radius, often with 15px top margin for separation.

## Do's and Don'ts

### Do

- Prioritize text with Midnight Black (#000000) on Canvas White (#ffffff) for all primary content and actions, ensuring AAA contrast.
- Use Telegraf for all headline-level text (sizes 22px-60px) and Quattrocento Sans for body text (sizes 14px-30px, always with letterSpacing normal).
- Maintain a strict '0px' border-radius for all component corners, reinforcing a sharp and angular aesthetic.
- Implement Ghost Action Buttons with 1px Ghost Border (#d8d8d8) and text color Button Text Gray (#4e4a4a) for secondary interactions.
- Implement Primary Action Buttons with solid Midnight Black (#000000) backgrounds and Canvas White (#ffffff) text for critical interactions.
- Employ consistent 20px padding for element and card spacing, allowing content to breathe without excessive white space.

### Don't

- Avoid using saturated or bright colors; the system relies almost exclusively on achromatic tones.
- Do not introduce rounded corners or soft edges; all visual elements should adhere to a strict 0px border-radius.
- Refrain from adding UI shadows or significant elevation; surfaces should remain flat and compositional.
- Do not use generic system fonts when custom fonts Telegraf and Quattrocento Sans are specified; their distinctiveness is key to the brand.
- Avoid decorative gradients or background imagery on UI elements; maintain a clean, text-first presentation.
- Do not deviate from the specified spacing units; consistent element and card spacing is crucial for structure.

## Imagery

This system primarily uses embedded functional imagery: product screenshots, tightly cropped visual examples of work, and small profile pictures. Photography is typically high-contrast, often with a stark, journalistic quality and a focus on the subject. Illustrations, if present, are minimal and flat. Icons are generally filled and monochromatic. Imagery serves as explanatory content or showcases product/portfolio, rather than decorative atmosphere, and is often presented in small, contained squares.

## Layout

The page structure is a contained layout, with content centered within a maximum width that supports a clear columned approach. The hero section features a prominent, centered headline with a minimal visual accent (the Berlin bear graphic). Sections often alternate between content blocks and image galleries. A consistent vertical rhythm is maintained with specific section and element gaps. Navigation is a simple top bar with left-aligned links and a right-aligned language toggle. Content often uses 2 or 3-column grids for feature cards or blog posts, creating a structured, information-dense display.

## Similar Brands

- **AIGA** — Strong typographic focus, black and white palette, and grid-based content presentation.
- **Pentagram** — Emphasis on content, flat design surfaces, and minimal color with strong typographic hierarchy.
- **Manual (design studio)** — High-contrast visuals, sharp edges, and a clean, direct approach to UI without embellishment.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-midnight-black: #000000;
  --color-ghost-border: #d8d8d8;
  --color-subtle-gray: #9b9b9b;
  --color-button-text-gray: #4e4a4a;
  --font-quattrocento-sans: 'Quattrocento Sans', Open Sans;
  --font-telegraf: 'Telegraf', Montserrat;
  --font-roboto: 'Roboto', Inter;
  --text-caption: 12px;
  --leading-caption: 1;
  --text-body-sm: 14px;
  --leading-body-sm: 1.25;
  --text-body: 16px;
  --leading-body: 1.33;
  --text-subheading: 22px;
  --leading-subheading: 1.1;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.25;
  --text-display: 48px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-33: 33px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-81: 81px;
  --spacing-84: 84px;
  --spacing-220: 220px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-midnight-black: #000000;
  --color-ghost-border: #d8d8d8;
  --color-subtle-gray: #9b9b9b;
  --color-button-text-gray: #4e4a4a;
  --font-quattrocento-sans: 'Quattrocento Sans', Open Sans;
  --font-telegraf: 'Telegraf', Montserrat;
  --font-roboto: 'Roboto', Inter;
  --text-caption: 12px;
  --leading-caption: 1;
  --text-body-sm: 14px;
  --leading-body-sm: 1.25;
  --text-body: 16px;
  --leading-body: 1.33;
  --text-subheading: 22px;
  --leading-subheading: 1.1;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.25;
  --text-display: 48px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-33: 33px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-81: 81px;
  --spacing-84: 84px;
  --spacing-220: 220px;
  --radius-none: 0px;
}
```
