---
version: alpha
name: "Dopper"
description: "Dopper's design evokes a sense of playful environmentalism, blending a cheerful primary color palette with crisp typography. The abundant use of `Pale Sand` (#f6ecc8) as a primary background creates a warm, inviting canvas, contrasting sharply with the deep, saturated blues and vivid yellow. Rounded corners at `20px` are applied universally to interactive elements and cards, giving components a friendly, approachable character that softens the otherwise direct, functional aesthetic."
theme: "light"
industry: "ecommerce"
source_url: "https://dopper.com"
refero_style_id: "734ab03c-a326-43e3-a463-c5f90247404f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933023266-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933023266-thumb.jpg"
extracted_at: "2026-04-11T18:44:05.302Z"
---

# Dopper — Style Reference

> Playful Marine Minimalism — like sunshine bouncing off clear blue water.

**Theme:** light

**Industry:** ecommerce

Dopper's design evokes a sense of playful environmentalism, blending a cheerful primary color palette with crisp typography. The abundant use of `Pale Sand` (#f6ecc8) as a primary background creates a warm, inviting canvas, contrasting sharply with the deep, saturated blues and vivid yellow. Rounded corners at `20px` are applied universally to interactive elements and cards, giving components a friendly, approachable character that softens the otherwise direct, functional aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pale Sand | #f6ecc8 | `--color-pale-sand` | Major background areas, accent panels on cards, giving a warm and inviting base. |
| Ocean Deep | #000f2 | `--color-ocean-deep` | Primary text, headings, and key structural elements. Its depth anchors the brighter palette. |
| True Black | #000000 | `--color-true-black` | Headings, body text, and icons; provides maximum contrast and legibility against light backgrounds. |
| Sky Blue | #0067e5 | `--color-sky-blue` | Primary call-to-action buttons, interactive elements, and illustrations; conveys trust and freshness. |
| Teal Splash | #116973 | `--color-teal-splash` | Accent background on specific product cards; adds a cool, sophisticated touch. |
| Sea Mist | #8ab1e6 | `--color-sea-mist` | Accent background on specific product cards; a lighter, softer blue that complements `Sky Blue`. |
| Sunbeam Yellow | #fed200 | `--color-sunbeam-yellow` | Accent background on specific product cards, drawing attention with its vivid warmth. |
| Slate Gray | #515a8a | `--color-slate-gray` | Secondary text and subtle interactive states, providing hierarchy without stark contrast. |
| Glacier Blue | #cce2ff | `--color-glacier-blue` | Subtle background tint for informational sections. |
| Clear Sky Gradient | #0067e5 | `--color-clear-sky-gradient` | Gradient for prominent elements, transitioning from bold blue to a slightly softer shade, suggesting depth and movement. |
| Off White | #fcfaf2 | `--color-off-white` | Subtle alternative background for nested UI elements or very light sections, offering a slight visual break from Pale Sand. |

## Tokens — Typography

### Gilroy

- **Token:** `--font-gilroy`
- **Substitute:** system-ui (e.g., Arial, Helvetica)
- **Weights:** 400, 600, 700
- **Sizes:** 18px, 20px, 24px, 27px, 43px, 48px
- **Line heights:** 1.10, 1.20, 1.30
- **Role:** Headlines, subheadings, and prominent body text. Gilroy's geometric structure provides a clean, modern feel, essential for conveying brand messaging clearly.

### Dopper

- **Token:** `--font-dopper`
- **Substitute:** Poppins, Montserrat
- **Weights:** 400
- **Sizes:** 58px, 72px
- **Line heights:** 1.00
- **Role:** Display headings for hero sections, lending a unique, custom brand voice at large sizes. Its distinct character prevents the larger text from feeling generic.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Role:** Standard body text and navigation links, ensuring high readability and system-level performance.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1 | — | `--text-body` |
| body-lg | 18px | 1.3 | — | `--text-body-lg` |
| subheading | 20px | 1.2 | — | `--text-subheading` |
| heading | 24px | 1.2 | — | `--text-heading` |
| heading-lg | 27px | 1.1 | — | `--text-heading-lg` |
| display | 43px | 1.1 | — | `--text-display` |
| display-lg | 48px | 1.1 | — | `--text-display-lg` |
| hero | 58px | 1 | — | `--text-hero` |
| hero-lg | 72px | 1 | — | `--text-hero-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-85 | 85px | `--spacing-85` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-142 | 142px | `--spacing-142` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 20px |
| buttons | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Solutions Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Headline Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call-to-Action Button

**Role:** Interactive element

Filled button with `Sky Blue` (#0067e5) background, `True Black` (#000000) text. Border radius `20px`. The solid, saturated color ensures high visibility.

### Outline Secondary Button

**Role:** Interactive element

Transparent background, `True Black` (#000000) text color, `True Black` (#000000) border, and `20px` border radius. Provides an alternative, less prominent action.

### Navigation Link

**Role:** Interactive element

Transparent background, `True Black` (#000000) text. No explicit border radius or padding, relying on surrounding spacing for definition. Uses system font `-apple-system` at `16px` weight `400`.

### Product Feature Card - Sky Blue

**Role:** Informational display

Background `Sky Blue` (#0067e5), `20px` border radius, no shadow. Content padding `0px` based on variants but visually appears to have internal padding. Text is typically `True Black` or `Off White` for contrast.

### Product Feature Card - Sea Mist

**Role:** Informational display

Background `Sea Mist` (#8ab1e6), `20px` border radius, no shadow. Offers a softer visual alongside more intense brand colors.

### Plain Content Card

**Role:** Informational display/Container

Transparent background, `0px` border radius, no shadow. Used for grouping content sections where the background color of the parent section defines its visual presence. Internal padding is `20px`.

## Do's and Don'ts

### Do

- Prioritize `Pale Sand` (#f6ecc8) as the dominant page background to establish a consistent brand canvas.
- Apply `20px` border radius consistently to all interactive buttons, cards, and image containers for a friendly, approachable feel.
- Use `Ocean Deep` (#000f2e) for primary headings and prominent text to create a strong visual presence.
- Reserve `Sky Blue` (#0067e5) and its gradient for primary calls-to-action to highlight key interactions.
- Maintain a clear visual hierarchy by using `Gilroy` weights `700` and `600` for headlines and `400` for body text with `-apple-system` for accessibility details.
- Utilize a 4px grid for all spacing; common values include `8px` for element gaps and `20px` for internal component padding.
- Ensure contrast: `True Black` (#000000) text on `Pale Sand` (#f6ecc8) backgrounds is the default for readability.

### Don't

- Avoid arbitrary border radii; stick strictly to `20px` for rounded elements and `0px` for sharp edges.
- Do not introduce new saturated colors outside the defined `accent` and `brand` palettes to maintain visual consistency.
- Never use `Ocean Deep` (#000f2e) as a background for primary buttons; it is reserved for text dominance.
- Avoid applying drop shadows; the design relies on bold color blocks and internal content for visual depth, not traditional elevation.
- Do not use system fonts for prominent headlines or branding elements; `Gilroy` and `Dopper` carry the brand's typographic identity.
- Refrain from using monochrome photography; imagery should be vibrant and full-color to match the playful aesthetic of the brand colors.
- Do not create complex layouts that deviate from clear, sectioned content blocks; simplicity and directness are key.

## Imagery

The site uses a mix of high-quality product photography and vibrant, bold graphics. Product imagery features tight crops of bottles, often against clean white or brand-colored backgrounds, emphasizing utility and design. Illustrations are typically geometric and flat, using the brand's vibrant color palette to communicate concepts. Photography, when humans are present, is lifestyle-oriented but clean and aspirational, showcasing people actively using the products in positive, outdoor settings. The overall feel is image-heavy, using visuals to tell a story alongside compelling typography, and images are contained within card structures with `20px` rounded corners, maintaining a consistent brand aesthetic.

## Layout

The layout primarily uses a full-bleed page model, with content sections extending edge-to-edge laterally. Content within sections is often centered or arranged in alternating two-column text-left/image-right compositions. The hero section features large, centered headlines over a `Pale Sand` background, setting a bright and open tone. Section rhythm is defined by large vertical spacing, with subsequent sections filling the width but using various background colors (like `Pale Sand`, `Sky Blue`, or custom colors for product cards) to create visual breaks rather than strict horizontal dividers. Card grids, particularly 5-column product feature cards, are a common pattern for showcasing multiple items, demonstrating both variety and consistency. Navigation is a persistent top bar with minimal styling.

## Similar Brands

- **Hydro Flask** — Bright, clear product photography, focus on hydration products, and a generally clean, optimistic brand presentation.
- **Owala** — Playful, colorful brand identity for reusable drinkware, with a similar emphasis on product features and vibrant accents.
- **Chilly's** — Minimalist product-focused e-commerce, using a clean aesthetic and clear categorization for different bottle types.
- **Figma** — Bold, blocky color usage, strong geometric typography, and a modern, friendly feel achieved through rounded elements and clean lines.
- **Mailchimp** — Use of vibrant, playful colors, custom bold typography for headlines, and a generally uplifting, approachable visual tone.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pale-sand: #f6ecc8;
  --color-ocean-deep: #000f2;
  --color-true-black: #000000;
  --color-sky-blue: #0067e5;
  --color-teal-splash: #116973;
  --color-sea-mist: #8ab1e6;
  --color-sunbeam-yellow: #fed200;
  --color-slate-gray: #515a8a;
  --color-glacier-blue: #cce2ff;
  --color-clear-sky-gradient: #0067e5;
  --color-off-white: #fcfaf2;
  --font-gilroy: 'Gilroy', system-ui (e.g., Arial, Helvetica);
  --font-dopper: 'Dopper', Poppins, Montserrat;
  --font-apple-system: '-apple-system', system-ui;
  --text-body: 16px;
  --leading-body: 1;
  --text-body-lg: 18px;
  --leading-body-lg: 1.3;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 27px;
  --leading-heading-lg: 1.1;
  --text-display: 43px;
  --leading-display: 1.1;
  --text-display-lg: 48px;
  --leading-display-lg: 1.1;
  --text-hero: 58px;
  --leading-hero: 1;
  --text-hero-lg: 72px;
  --leading-hero-lg: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-85: 85px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-142: 142px;
  --spacing-150: 150px;
  --radius-tags: 9999px;
  --radius-cards: 20px;
  --radius-buttons: 20px;
}
```

### Tailwind v4

```css
@theme {
  --color-pale-sand: #f6ecc8;
  --color-ocean-deep: #000f2;
  --color-true-black: #000000;
  --color-sky-blue: #0067e5;
  --color-teal-splash: #116973;
  --color-sea-mist: #8ab1e6;
  --color-sunbeam-yellow: #fed200;
  --color-slate-gray: #515a8a;
  --color-glacier-blue: #cce2ff;
  --color-clear-sky-gradient: #0067e5;
  --color-off-white: #fcfaf2;
  --font-gilroy: 'Gilroy', system-ui (e.g., Arial, Helvetica);
  --font-dopper: 'Dopper', Poppins, Montserrat;
  --font-apple-system: '-apple-system', system-ui;
  --text-body: 16px;
  --leading-body: 1;
  --text-body-lg: 18px;
  --leading-body-lg: 1.3;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 27px;
  --leading-heading-lg: 1.1;
  --text-display: 43px;
  --leading-display: 1.1;
  --text-display-lg: 48px;
  --leading-display-lg: 1.1;
  --text-hero: 58px;
  --leading-hero: 1;
  --text-hero-lg: 72px;
  --leading-hero-lg: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-85: 85px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-142: 142px;
  --spacing-150: 150px;
  --radius-tags: 9999px;
  --radius-cards: 20px;
  --radius-buttons: 20px;
}
```
