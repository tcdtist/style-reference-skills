---
version: alpha
name: "Bang & Olufsen"
description: "This design system balances classic luxury with contemporary minimalism. Rich, deep indigo (#060daa) and elegant black (#191817) create a sophisticated backdrop, punctuated by a delicate, almost cream-colored off-white (#fcfaee) for textual contrast. The signature element is the custom BeoSupreme typeface, used across all text sizes, which brings a unique, refined character, with precise letter-spacing adjustments at every size. The dominant visual language is clean, centered product photography on stark backgrounds, framed by generous negative space and a strict typographic hierarchy."
theme: "mixed"
industry: "ecommerce"
source_url: "https://bang-olufsen.com"
refero_style_id: "27a4a4fa-4b1a-4e7e-b2c3-3e5bf57f00e5"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924446065-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924446065-thumb.jpg"
extracted_at: "2026-04-11T16:21:06.829Z"
---

# Bang & Olufsen — Style Reference

> Gallery of precise objects. A dark, velvet-lined showcase where each product rests, spotlighted with refined exactitude.

**Theme:** mixed

**Industry:** ecommerce

This design system balances classic luxury with contemporary minimalism. Rich, deep indigo (#060daa) and elegant black (#191817) create a sophisticated backdrop, punctuated by a delicate, almost cream-colored off-white (#fcfaee) for textual contrast. The signature element is the custom BeoSupreme typeface, used across all text sizes, which brings a unique, refined character, with precise letter-spacing adjustments at every size. The dominant visual language is clean, centered product photography on stark backgrounds, framed by generous negative space and a strict typographic hierarchy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Indigo | #060daa | `--color-midnight-indigo` | Footer background, primary accent for deep sections – creating a luxurious, immersive foundation. |
| Carbon Black | #191817 | `--color-carbon-black` | Dominant text color for headings and body content on light backgrounds, input borders – provides stark contrast and grounded presence. |
| Barely White | #fcfaee | `--color-barely-white` | Primary text color on dark backgrounds, selected button text – a creamy off-white that softens the high contrast. |
| Ash Gray | #555555 | `--color-ash-gray` | Secondary text, subtle link color – offers a muted informational tone against white. |
| Pure White | #ffffff | `--color-pure-white` | Page backgrounds, card backgrounds, input backgrounds – provides clean, expansive canvas. |
| Pale Silver | #e5e5e5 | `--color-pale-silver` | Subtle border colors for inputs – an almost imperceptible divider. |
| Pure Black | #000000 | `--color-pure-black` | Primary icon color, borders on ghost buttons – a hard, crisp edge or fill. |

## Tokens — Typography

### BeoSupreme

- **Token:** `--font-beosupreme`
- **Substitute:** Open Sans
- **Weights:** 400, 500, 700
- **Sizes:** 12px, 14px, 16px, 24px, 36px
- **Line heights:** 1.00, 1.15, 1.25, 1.33, 1.43, 1.50, 1.63, 1.67, 1.71, 2.19
- **Letter spacing:** -0.056em at 36px, -0.014em at 24px, 0.006em at 16px, 0.007em at 14px, 0.008em at 12px, then other specific values for a finely tuned optical balance
- **Role:** Primary typeface for all headings, body text, and UI elements. Its broad range of weights and precise letter-spacing across sizes is a core visual identity feature, conveying understated luxury.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.43 | 0.007px | `--text-body` |
| heading | 24px | 1.25 | -0.014px | `--text-heading` |
| display | 36px | 1.15 | -0.056px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-86 | 86px | `--spacing-86` |
| spacing-97 | 97px | `--spacing-97` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-236 | 236px | `--spacing-236` |

### Border Radius

| Element | Value |
| --- | --- |
| badges | 2px |
| buttons | 40px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 0px |
| elementGap | 4px |

## Components

### Product Cards — Explore Superventas

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero CTA — Beo Grace

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — B&O Style System

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Button (Honey Tone CTA)

**Role:** Call to action

Rounded pill button with 'Carbon Black' (#191817) background and 'Barely White' (#fcfaee) text. Has a 40px border-radius, 8px vertical padding, and 32px horizontal padding. Uses BeoSupreme text.

### Ghost Button (Menu/Search)

**Role:** Navigation/Utility

Transparent background with 'Carbon Black' (#000000) text and border. No border-radius, 0px padding. Used for minimal UI controls.

### Text Link Button

**Role:** Tertiary action/Navigation

Transparent background with 'Barely White' (#fcfaee) text and a 'Barely White' (#fcfaee) bottom border of 1px. 4px vertical padding, 0px horizontal padding. Typically used in dark sections like the hero or footer.

### Feature Card

**Role:** Product display

A completely transparent card with no padding, border, or shadow. It acts as a container for product images and descriptive text. Text is 'Carbon Black' (#191817) and headings use BeoSupreme.

### Input Field

**Role:** User entry

White background (#ffffff) with 'Carbon Black' (#191817) text and a 1px 'Carbon Black' (#191817) bottom border. No border-radius. 1px vertical padding and 2px right padding.

### New Product Badge

**Role:** Highlight new items

Rectangular badge with 'Pure White' (#ffffff) background and 'Carbon Black' (#191817) text. Has a 2px border-radius, 4px vertical padding, and 8px horizontal padding. Uses BeoSupreme text.

## Do's and Don'ts

### Do

- Prioritize the custom 'BeoSupreme' font for all textual content, leveraging its unique character and precise letter-spacing.
- Use 'Midnight Indigo' (#060daa) exclusively for foundational elements like the footer to establish a luxurious, deep anchor.
- Maintain a clear visual hierarchy by contrasting 'Carbon Black' (#191817) text on light backgrounds (#ffffff, #fcfaee) and 'Barely White' (#fcfaee) on dark backgrounds (#060daa).
- Employ the 40px border-radius strictly for primary CTA buttons, ensuring they stand out as the sole 'soft' element.
- Utilize generous negative space around product imagery and text blocks to convey a sense of premium quality and focus, with section gaps around 48px.
- Ensure all interactive elements, especially primary CTAs, meet a minimum contrast ratio of 4.5:1 against their background.
- Use a subtle 1px border for ghost button states and text links to provide definition without visual weight.

### Don't

- Do not introduce additional font families; 'BeoSupreme' defines the typographic identity.
- Avoid using multiple accent colors; 'Midnight Indigo' is reserved for specific, prominent sectional backgrounds.
- Do not deviate from the established border-radius values (0px, 2px, 40px); rounded corners are intentional and scarce.
- Do not use box-shadows; elevation is handled through background color changes and spatial separation.
- Avoid decorative elements or busy backgrounds; the aesthetic emphasizes product clarity and clean UI.
- Do not create dense content blocks; the comfortable density principle with a 4px base unit should be consistently applied.
- Never use the browser default blue for links; control all link colors with 'Carbon Black', 'Ash Gray', or 'Barely White'.

## Imagery

The visual language focuses on meticulously staged product photography. Products are often isolated or tightly cropped, centered on pure white backgrounds or against deep, velvety textiles like the 'Midnight Indigo' in the hero. The treatment is clean and raw-edged, with no masking or overlapping effects. Photography is clearly high-key for white backgrounds and moody/dark for dramatic impact on colored backgrounds, emphasizing the texture and material of the products. Images are explanatory and showcase the product as the hero, occupying significant visual space in sections to convey luxury and technical precision. Icons are minimal, monochromatic, and outlined, primarily in 'Pure Black' or 'Barely White', complementing the UI's precision.

## Layout

The page uses a mixed layout approach, blending full-bleed sections with constrained content. The hero prominently features a full-bleed dark background ('Midnight Indigo') with a large, centered product image and left-aligned headline/CTA. Subsequent sections alternate between full-bleed white backgrounds for product listings (often displaying items in a clean, centered grid of 4) and some potentially full-bleed sections with strong, singular background colors like the red observed. Content is generally centered within a comfortable maximum width when not full-bleed. Vertical rhythm is maintained by consistent spacing between sections (around 48px), creating a spacious and unhurried browsing experience. The navigation is a minimalist sticky top bar, providing persistent access without visual clutter.

## Similar Brands

- **Apple** — Shares a focus on pristine product photography on white or dark backgrounds, minimalist UI, and premium brand perception through typography and negative space.
- **Dyson** — Employs high-end product imagery, a clean, spacious layout, and a focus on precise details and materials, often with strong visual sections.
- **Bose (certain product lines)** — Exhibits a similar sophisticated, high-contrast aesthetic with an emphasis on product design and clean typographic presentation for technology goods.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-indigo: #060daa;
  --color-carbon-black: #191817;
  --color-barely-white: #fcfaee;
  --color-ash-gray: #555555;
  --color-pure-white: #ffffff;
  --color-pale-silver: #e5e5e5;
  --color-pure-black: #000000;
  --font-beosupreme: 'BeoSupreme', Open Sans;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.007px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.014px;
  --text-display: 36px;
  --leading-display: 1.15;
  --tracking-display: -0.056px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-61: 61px;
  --spacing-80: 80px;
  --spacing-86: 86px;
  --spacing-97: 97px;
  --spacing-115: 115px;
  --spacing-236: 236px;
  --radius-badges: 2px;
  --radius-buttons: 40px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-indigo: #060daa;
  --color-carbon-black: #191817;
  --color-barely-white: #fcfaee;
  --color-ash-gray: #555555;
  --color-pure-white: #ffffff;
  --color-pale-silver: #e5e5e5;
  --color-pure-black: #000000;
  --font-beosupreme: 'BeoSupreme', Open Sans;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.007px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.014px;
  --text-display: 36px;
  --leading-display: 1.15;
  --tracking-display: -0.056px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-61: 61px;
  --spacing-80: 80px;
  --spacing-86: 86px;
  --spacing-97: 97px;
  --spacing-115: 115px;
  --spacing-236: 236px;
  --radius-badges: 2px;
  --radius-buttons: 40px;
}
```
