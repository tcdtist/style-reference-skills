---
version: alpha
name: "Koox"
description: "Koox establishes a raw, organic aesthetic through high-contrast typography, distinct dark neutrals, and stark rectangular forms. The design relies on photography of ingredients and products set against a simple white tiled background, creating a kitchen laboratory feel. Accent colors are earthy and bold, used sparingly to highlight primary actions or calls to attention against the dominant monochrome palette."
theme: "light"
industry: "ecommerce"
source_url: "https://koox.co.uk"
refero_style_id: "d1ca41ff-1bcc-4081-b1fd-bdcf380ba749"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518179364-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518179364-thumb.jpg"
extracted_at: "2026-04-30T03:03:20.738Z"
---

# Koox — Style Reference

> kitchen laboratory blueprint

**Theme:** light

**Industry:** ecommerce

Koox establishes a raw, organic aesthetic through high-contrast typography, distinct dark neutrals, and stark rectangular forms. The design relies on photography of ingredients and products set against a simple white tiled background, creating a kitchen laboratory feel. Accent colors are earthy and bold, used sparingly to highlight primary actions or calls to attention against the dominant monochrome palette.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Noir | #000000 | `--color-midnight-noir` | Primary text, navigation links, bold headings, borders, button text on light backgrounds — a stark, graphic black |
| Tile White | #ffffff | `--color-tile-white` | Content surfaces, card backgrounds, input fields, navigation background. A clean, crisp white that mimics tiled surfaces |
| Laboratory Gray | #efefef | `--color-laboratory-gray` | Subtle background for varied content sections, secondary card backgrounds, creates a slight elevation from white |
| Deep Forest | #113722 | `--color-deep-forest` | Primary action button background, representing natural ingredients and brand's organic ethos |
| Spiced Orange | #d25a24 | `--color-spiced-orange` | Highlight accents for links, badges, and attention-grabbing elements, adding a natural, vibrant pop |
| Berry Rouge | #6b1229 | `--color-berry-rouge` | Secondary action button background and shadow for key interactive elements, a warm, rich accent |
| Charcoal Text | #232323 | `--color-charcoal-text` | Secondary text for headings and content, slightly softer than Midnight Noir but maintaining strong contrast |
| Border Gray | #cccccc | `--color-border-gray` | Subtle borders and dividers for UI elements, less prominent than Midnight Noir borders |
| Input Border | #d7d7d7 | `--color-input-border` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Placeholder Gray | #646464 | `--color-placeholder-gray` | Placeholder text in input fields, softer visibility |

## Tokens — Typography

### Helvetica

- **Token:** `--font-helvetica`
- **Substitute:** Arial
- **Weights:** 400, 500, 600, 700, 900
- **Sizes:** 14px, 16px, 18px, 20px, 24px, 26px, 30px, 32px, 40px, 46px, 48px
- **Line heights:** 0.70, 0.80, 0.88, 1.00, 1.03, 1.10, 1.20, 1.30, 1.38, 1.44, 1.50, 1.57, 1.63, 1.71, 1.75, 1.79, 2.19, 2.50
- **Letter spacing:** 0.008em at 14px, 0.012em at 16px, 0.016em at 18px, 0.018em at 20px, 0.020em at 24px, 0.050em at 48px
- **Role:** Primary typeface for all text types, from body to large headings. Its clean, sans-serif nature provides a modern, legible base for conveying product information and brand messaging. The wide range of weights supports a clear typographic hierarchy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.44 | — | `--text-caption` |
| body-sm | 16px | 1.44 | — | `--text-body-sm` |
| body | 20px | 1.44 | — | `--text-body` |
| body-lg | 24px | 1.3 | — | `--text-body-lg` |
| heading-sm | 26px | 1.3 | — | `--text-heading-sm` |
| heading | 30px | 1.3 | — | `--text-heading` |
| heading-lg | 40px | 1.3 | — | `--text-heading-lg` |
| display-sm | 46px | 1.3 | — | `--text-display-sm` |
| display | 48px | 1.3 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-228 | 228px | `--spacing-228` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 5px |
| links | 5px |
| lists | 5px |
| inputs | 0px |
| buttons | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(107, 18, 41) 5px 5px 0px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1800px |
| sectionGap | 27px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Primary Action Button

**Role:** Main call-to-action button, directing users to core functions.

Filled button with 'Deep Forest' background (#113722), 'Tile White' text, no border radius, 11px vertical padding, 15px horizontal padding. Delivers a bold, grounded aesthetic.

### Secondary Action Button

**Role:** Alternative call-to-action, visually distinct but still impactful.

Filled button with 'Berry Rouge' background (#6b1229), 'Tile White' text, no border radius, 11px vertical padding, 15px horizontal padding. A distinct color for different types of actions.

### Text Link Button

**Role:** Minimal interactive element, appearing as simple text.

Transparent background, 'Midnight Noir' text, no padding or borders. Used for navigation and less prominent actions.

### Product Card

**Role:** Container for product listings or category previews.

Transparent background, 0px border radius, no box shadow, 0px padding. Image-driven cards without visual chrome.

### Input Field

**Role:** Standard form input element.

Background 'Tile White', text 'Placeholder Gray' (#646464), 'Input Border' (#d7d7d7) 1px solid border, no border radius, 11px vertical padding, 15px horizontal padding.

## Do's and Don'ts

### Do

- Use 'Midnight Noir' (#000000) for all primary text and strong headings to maintain high contrast and graphic clarity.
- Apply 'Deep Forest' (#113722) exclusively to primary call-to-action button backgrounds for immediate visual recognition.
- Maintain a 0px border radius for all buttons and input fields to support the sharp, utilitarian aesthetic.
- Employ 'Spiced Orange' (#d25a24) as a judicious accent for links, special offers, or badges to draw specific attention without overwhelming the design.
- Utilize Helvetica 900 for hero headlines and important section titles to convey authority and directness.
- Ensure all product imagery or visual content is set against a 'Tile White' (#ffffff) background or visual equivalent to maintain the laboratory aesthetic.
- Use a base padding of 15px for horizontal spacing within interactive elements and text blocks.

### Don't

- Do not use subtle gradients or soft drop shadows, as they contradict the stark and raw visual language.
- Avoid using multiple accent colors in close proximity; the system relies on a single, focused chromatic pop.
- Do not introduce rounded corners for primary UI elements like buttons or cards, as the design emphasizes sharp, clean edges.
- Refrain from using light gray text on light gray backgrounds; prioritize high contrast with 'Midnight Noir' or 'Charcoal Text'.
- Do not use decorative background patterns beyond the implied 'Tile White' base; surfaces should remain clean and uniform.
- Avoid excessive spacing between elements that are functionally related; maintain a comfortable but not overly airy density.
- Do not introduce highly saturated imagery that clashes with the muted, natural tones of the primary brand accents.

## Elevation

- **Shadow 1:** `rgb(107, 18, 41) 5px 5px 0px 0px`

## Similar Brands

- **Oatly** — Uses bold, sans-serif typography, stark layouts, and focuses on core product visuals with minimal decorative elements.
- **Daily Harvest** — Features clean product photography against simple backgrounds, emphasizing natural ingredients and a fresh aesthetic.
- **Soylent** — Employs a utilitarian and direct visual style with clear product shots and a focus on essential information.
- **Huel** — Combines a monochrome base with one or two strong accent colors for calls to action, maintaining a clean and functional interface.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-noir: #000000;
  --color-tile-white: #ffffff;
  --color-laboratory-gray: #efefef;
  --color-deep-forest: #113722;
  --color-spiced-orange: #d25a24;
  --color-berry-rouge: #6b1229;
  --color-charcoal-text: #232323;
  --color-border-gray: #cccccc;
  --color-input-border: #d7d7d7;
  --color-placeholder-gray: #646464;
  --font-helvetica: 'Helvetica', Arial;
  --text-caption: 14px;
  --leading-caption: 1.44;
  --text-body-sm: 16px;
  --leading-body-sm: 1.44;
  --text-body: 20px;
  --leading-body: 1.44;
  --text-body-lg: 24px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.3;
  --text-heading: 30px;
  --leading-heading: 1.3;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 46px;
  --leading-display-sm: 1.3;
  --text-display: 48px;
  --leading-display: 1.3;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-150: 150px;
  --spacing-228: 228px;
  --radius-cards: 5px;
  --radius-links: 5px;
  --radius-lists: 5px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --shadow-xl: rgb(107, 18, 41) 5px 5px 0px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-noir: #000000;
  --color-tile-white: #ffffff;
  --color-laboratory-gray: #efefef;
  --color-deep-forest: #113722;
  --color-spiced-orange: #d25a24;
  --color-berry-rouge: #6b1229;
  --color-charcoal-text: #232323;
  --color-border-gray: #cccccc;
  --color-input-border: #d7d7d7;
  --color-placeholder-gray: #646464;
  --font-helvetica: 'Helvetica', Arial;
  --text-caption: 14px;
  --leading-caption: 1.44;
  --text-body-sm: 16px;
  --leading-body-sm: 1.44;
  --text-body: 20px;
  --leading-body: 1.44;
  --text-body-lg: 24px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.3;
  --text-heading: 30px;
  --leading-heading: 1.3;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 46px;
  --leading-display-sm: 1.3;
  --text-display: 48px;
  --leading-display: 1.3;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-150: 150px;
  --spacing-228: 228px;
  --radius-cards: 5px;
  --radius-links: 5px;
  --radius-lists: 5px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --shadow-xl: rgb(107, 18, 41) 5px 5px 0px 0px;
}
```
