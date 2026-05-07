---
version: alpha
name: "Away"
description: "This system evokes the precise, understated elegance of luxury travel goods, balancing functionality with a subtle hint of aspirational lifestyle. A near-monochromatic palette built on deep charcoal (#111111) and crisp white (#FFFFFF) defines the surfaces, accented by muted, earthy tones in photography. Typography leans into a custom sans-serif for headlines, providing a distinctive voice without being overly loud, reinforced by a tightly tracked, all-caps presentation for key navigation elements. The design prioritizes clear information hierarchy and a clean, almost modular aesthetic, avoiding excessive ornamentation or bold primary colors."
theme: "light"
industry: "ecommerce"
source_url: "https://awaytravel.com"
refero_style_id: "3ddaa1f6-bebc-44e3-a6df-b653179f3fd9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924510994-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924510994-thumb.jpg"
extracted_at: "2026-04-11T16:22:12.953Z"
---

# Away — Style Reference

> Luxury travel catalogue

**Theme:** light

**Industry:** ecommerce

This system evokes the precise, understated elegance of luxury travel goods, balancing functionality with a subtle hint of aspirational lifestyle. A near-monochromatic palette built on deep charcoal (#111111) and crisp white (#FFFFFF) defines the surfaces, accented by muted, earthy tones in photography. Typography leans into a custom sans-serif for headlines, providing a distinctive voice without being overly loud, reinforced by a tightly tracked, all-caps presentation for key navigation elements. The design prioritizes clear information hierarchy and a clean, almost modular aesthetic, avoiding excessive ornamentation or bold primary colors.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Charcoal | #111111 | `--color-midnight-charcoal` | Primary text, headline text, dark button backgrounds, interactive element states. This deep, near-black sets a sophisticated, premium tone. |
| Canvas White | #FFFFFF | `--color-canvas-white` | Page backgrounds, card surfaces, light button backgrounds, inverse text. Provides a clean, expansive backdrop. |
| Pale Earth | #f7f4f1 | `--color-pale-earth` | Input fields, secondary background areas. A subtle, warm off-white that adds a touch of natural texture. |
| Border Fog | #e5e7eb | `--color-border-fog` | Subtle borders, dividers, outlines for inactive elements. Helps define structure without harsh lines. |
| Muted Gray | #6b7280 | `--color-muted-gray` | Secondary text, placeholder text, disabled states. A desaturated gray providing visual relief without losing legibility. |
| Faded Red | #d31b3b | `--color-faded-red` | Sale indicators, badge accents, notification states. A vivid red, used sparingly for emphasis. |
| Muted Terracotta | #722519 | `--color-muted-terracotta` | Limited accent use, perhaps in specific product highlights or banners. A warm, earthy tone that complements the brand's aesthetic without dominating. |

## Tokens — Typography

### Graphik

- **Token:** `--font-graphik`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 15px, 16px, 18px, 32px, 36px, 38px, 56px
- **Line heights:** 0.85, 1.00, 1.10, 1.13, 1.20, 1.50
- **Letter spacing:** -0.48px at 12px, -0.62px at 14px, -0.99px at 32px, 0.47px at 15px, 0.60px at 18px
- **Role:** Primary typeface for all UI elements, body text, navigation, and most headings. Its clean, geometric form supports the modern aesthetic. Headlines often use tight letter spacing for a refined presentation.

### Lyon Display

- **Token:** `--font-lyon-display`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 18px, 26px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.72px at 18px, 0.24px at 24px
- **Role:** Used for specific body text and subheadings, offering a subtle serif counterpoint to Graphik. It appears selectively, adding a touch of classicism without detracting from the overall modernity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | -0.48px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.62px | `--text-body-sm` |
| body-lg | 16px | 1.5 | 0px | `--text-body-lg` |
| subheading | 18px | 1.2 | -0.72px | `--text-subheading` |
| heading-sm | 24px | 1.2 | 0.24px | `--text-heading-sm` |
| heading | 26px | 1.2 | -1.04px | `--text-heading` |
| heading-lg | 32px | 1.13 | -1.28px | `--text-heading-lg` |
| display | 56px | 0.85 | -1.57px | `--text-display` |

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
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| inputs | 0px |
| buttons | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.24) 0px 1px 2px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 10px |

## Components

### Cookie Consent Modal

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Shop by Category Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Product Card with Badge & CTA

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Top-level navigation items

Text is Graphik 16px weight 400, Midnight Charcoal (#111111). Underlined on hover. No padding or border. Letter spacing is often slightly increased for emphasis.

### Outline CTA Button

**Role:** Secondary calls to action

Background transparent, text Midnight Charcoal (#111111), border 1px solid Midnight Charcoal (#111111). No border radius (0px). Padding varies, e.g., 10px.

### Solid CTA Button

**Role:** Primary calls to action

Background Midnight Charcoal (#111111), text Canvas White (#FFFFFF). No border radius (0px). Padding varies, e.g., 10px.

### Cookie Consent Modal Button - Solid

**Role:** Confirmation or primary actions within modals

Background #000000 (black), text Canvas White (#FFFFFF). Radius 0px. Padding 10px. This button is slightly more opaque than the standard solid CTA.

### Cookie Consent Modal Button - Outline

**Role:** Secondary actions within modals

Background transparent, text #000000 (black), border 1px solid #000000 (black). Radius 0px. Padding 10px.

### Form Input Field

**Role:** User input fields

Background Pale Earth (#f7f4f1), text Midnight Charcoal (#111111), 1px solid Midnight Charcoal (#111111) border. No radius. Padding 24px top, 30px right/left, 6px bottom. Placeholder text is Muted Gray (#6b7280).

### Product Highlight Badge - Light

**Role:** Product features or promotions

Background Canvas White (#FFFFFF), text Midnight Charcoal (#111111). No border radius. Padding 5px. Typically found on product images or listings.

### Product Highlight Badge - Sale

**Role:** Discount indicators

Background transparent, text Faded Red (#d31b3b). No border radius or padding. Used for 'Sale' or discount amounts.

## Do's and Don'ts

### Do

- Use Graphik for all primary text, headlines, and navigation. Apply `letterSpacing: -0.0400em` for headings 32px and above for a distinctive, tight feel.
- Maintain a strict achromatic base: Midnight Charcoal (#111111) for foregrounds and Canvas White (#FFFFFF) or Pale Earth (#f7f4f1) for backgrounds.
- Reserve Faded Red (#d31b3b) strictly for sale indicators, badges, or crucial error states, never for general interaction.
- Keep all button, input, and card radii at 0px to maintain a sharp, deliberate aesthetic.
- Employ the Pale Earth (#f7f4f1) background for input fields to create a subtle textural difference within forms.
- Implement the 1px solid Midnight Charcoal border for outline buttons and input fields for high contrast and definition.

### Don't

- Do not introduce new primary colors; maintain the brand's subdued, achromatic palette with limited accent colors.
- Avoid soft shadows or gradients; elevation is achieved through distinct color blocking and borders, not subtle shading.
- Do not round corners on any major UI elements (buttons, cards, inputs); the design relies on sharp, clean edges.
- Do not vary font families excessively; Graphik is the workhorse, with Lyon Display as a subtle counterpoint for specific text blocks.
- Avoid generic icon libraries; maintain the simple, outlined icon style seen throughout the system.
- Do not use overly expressive or decorative typography; readability and precision are paramount.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.24) 0px 1px 2px 0px`

## Imagery

Photography is product-focused and lifestyle-oriented, showcasing travel items in aspirational, muted environments (e.g., luggage by a dock, backpacks in natural settings). Images are typically full-bleed or large-format product shots with a natural, slightly desaturated color treatment, emphasizing the product's design and utility within a broader, sophisticated travel narrative. There's a clear emphasis on the product's visual appeal and integration into a stylish, curated experience rather than raw, vivid imagery. Icons are minimal, subtle, and outlined, primarily serving functional purposes within the UI.

## Layout

The site uses a contained width layout, primarily centered, with a `pageMaxWidth` of approximately 1200px. The hero section often features a full-width image with text overlaid, creating an immersive initial impression. Content sections generally alternate between large imagery and descriptive text, often in horizontal pairs or grids. Clear vertical section gaps (e.g., 48px) create breathable rhythm between content blocks. Navigation is a prominent top bar, sticky on scroll, with a clean and clear structure. The overall impression is one of spaciousness and deliberate content presentation.

## Similar Brands

- **Rimowa** — Shares a focus on luxury travel goods with a minimalist, product-centric aesthetic and a sophisticated, subdued color palette.
- **Everlane** — Exhibits a similar clean, direct e-commerce design with a strong emphasis on typography, photography of products, and an achromatic base.
- **Monocle** — A content-driven site with a similar appreciation for custom sans-serif typography, precise layouts, and a curated, high-quality visual presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-charcoal: #111111;
  --color-canvas-white: #FFFFFF;
  --color-pale-earth: #f7f4f1;
  --color-border-fog: #e5e7eb;
  --color-muted-gray: #6b7280;
  --color-faded-red: #d31b3b;
  --color-muted-terracotta: #722519;
  --font-graphik: 'Graphik', system-ui, sans-serif;
  --font-lyon-display: 'Lyon Display', serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.48px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.62px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.72px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0.24px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -1.04px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -1.28px;
  --text-display: 56px;
  --leading-display: 0.85;
  --tracking-display: -1.57px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --shadow-xl: rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-charcoal: #111111;
  --color-canvas-white: #FFFFFF;
  --color-pale-earth: #f7f4f1;
  --color-border-fog: #e5e7eb;
  --color-muted-gray: #6b7280;
  --color-faded-red: #d31b3b;
  --color-muted-terracotta: #722519;
  --font-graphik: 'Graphik', system-ui, sans-serif;
  --font-lyon-display: 'Lyon Display', serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.48px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.62px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.72px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0.24px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -1.04px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -1.28px;
  --text-display: 56px;
  --leading-display: 0.85;
  --tracking-display: -1.57px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --shadow-xl: rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}
```
