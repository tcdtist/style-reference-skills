---
version: alpha
name: "Tesla"
description: "The design operates like a premium automotive showroom translated to the screen. Every section is a full-bleed, cinematic product photograph, with UI elements acting as minimal, functional plaques. The palette is starkly achromatic, save for a single, electric Tesla Blue (#3e6ae1) reserved exclusively for primary calls-to-action, functioning like an ignition button. Typography is neutral and technical, serving information without asserting its own personality. This systematic subordination of UI to imagery ensures the product—the car, the solar panel—is always the undisrupted hero."
theme: "light"
industry: "other"
source_url: "https://tesla.com"
refero_style_id: "7266b546-2fb0-465c-acd6-79001c39829a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929531558-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929531558-thumb.jpg"
extracted_at: "2026-04-11T17:46:47.791Z"
---

# Tesla — Style Reference

> Automotive Showroom on Screen. High-fidelity product visuals dominate, framed by a minimal, functional interface that gets out of the way.

**Theme:** light

**Industry:** other

The design operates like a premium automotive showroom translated to the screen. Every section is a full-bleed, cinematic product photograph, with UI elements acting as minimal, functional plaques. The palette is starkly achromatic, save for a single, electric Tesla Blue (#3e6ae1) reserved exclusively for primary calls-to-action, functioning like an ignition button. Typography is neutral and technical, serving information without asserting its own personality. This systematic subordination of UI to imagery ensures the product—the car, the solar panel—is always the undisrupted hero.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Tesla Blue | #3e6ae1 | `--color-tesla-blue` | Primary CTAs ('Order Now') — a single, focused point of saturated color in an otherwise grayscale environment, creating an unmissable action prompt. |
| Pure White | #ffffff | `--color-pure-white` | Primary page backgrounds, card surfaces, text on dark/blue buttons. |
| Off-White | #eeeeee | `--color-off-white` | Secondary content cards, subtle dividers between white sections. |
| Parchment | #e5e3df | `--color-parchment` | Rare alternative background color for specific sections. |
| Light Border | #cccccc | `--color-light-border` | Inactive UI element borders, subtle dividers. |
| Subtle Gray | #8e8e8 | `--color-subtle-gray` | Placeholder text, tertiary UI details. |
| Steel | #5c5e62 | `--color-steel` | Secondary text, footer links, icon fills. |
| Charcoal | #393c41 | `--color-charcoal` | Primary body text, text on light buttons, header navigation. |
| Onyx | #171a20 | `--color-onyx` | Primary heading text, dark button backgrounds. |
| Carbon | #000000 | `--color-carbon` | SVG icon fills, text overlays on light images. |

## Tokens — Typography

### Universal Sans Display

- **Token:** `--font-universal-sans-display`
- **Substitute:** Inter, Manrope
- **Weights:** 400, 500
- **Sizes:** 12px, 20px, 28px, 34px, 40px, 48px
- **Line heights:** 1.17-1.41
- **Role:** Used for all major headings and product titles. Its clean, geometric form provides a technical and confident voice that feels engineered, not decorated.

### Universal Sans Text

- **Token:** `--font-universal-sans-text`
- **Substitute:** Inter, SF Pro Text
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 17px
- **Line heights:** 1.00-1.67
- **Role:** The workhorse font for body copy, buttons, navigation, and all UI text. Chosen for its supreme legibility and neutrality, it delivers information efficiently without distracting from the product visuals.

### Roboto

- **Token:** `--font-roboto`
- **Substitute:** Roboto, system-ui
- **Weights:** 400, 500
- **Sizes:** 11px
- **Line heights:** 1.20
- **Role:** Reserved for fine print, legal disclaimers, and other low-hierarchy text where utility is the sole concern.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.2 | — | `--text-caption` |
| body | 14px | 1.43 | — | `--text-body` |
| heading-sm | 20px | 1.4 | — | `--text-heading-sm` |
| heading | 28px | 1.29 | — | `--text-heading` |
| heading-lg | 40px | 1.2 | — | `--text-heading-lg` |
| display | 48px | 1.17 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| inputs | 4px |
| modals | 8px |
| buttons | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.25) 0px 4px 4px 0px | `--shadow-xl` |
| xl-2 | rgb(255, 255, 255) 0px 2px 0px -1px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### Region Selector Modal

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Offer Cards — Current Offers & American Heroes

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Bottom Action Bar — Ask a Question & Schedule a Drive

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main action button for ordering or engaging.

Solid Tesla Blue (#3e6ae1) background with Pure White (#ffffff) text. 4px border radius. Padding is 4px top/bottom, 24px left/right.

### Secondary Ghost Button

**Role:** Secondary action like 'Learn More' or 'Demo'.

Transparent background with a thin Onyx (#171a20) border. Text is also Onyx (#171a20). 4px border radius. Padding is 4px top/bottom, 16px left/right.

### Modal Button (White)

**Role:** Secondary option within a modal or pop-up.

Solid Off-White (#eeeeee) background with Charcoal (#393c41) text. 4px border radius. Padding is 4px top/bottom, 24px left/right.

### Header Navigation Link

**Role:** Main site navigation.

Unstyled text link with Charcoal (#393c41) color. No background or borders.

### Footer Navigation Link

**Role:** Tertiary links in the site footer.

Unstyled text link with Steel (#5c5e62) color. Appears smaller than header navigation.

### Product Hero Section

**Role:** Full-screen container showcasing a single product.

Full-bleed background image. Contains a centered, stacked group of a Display heading (Onyx #171a20 or White #ffffff depending on image), Subheading text, and a pair of Primary/Secondary CTA buttons.

## Do's and Don'ts

### Do

- Always lead with a full-bleed, high-quality product image for every major section.
- Center-align text and CTAs over background images.
- Use Tesla Blue (#3e6ae1) exclusively for primary, high-priority actions like 'Order Now'.
- Pair a filled primary CTA with a white or ghost secondary CTA.
- Maintain a strict achromatic palette (white, grays, black) for all UI outside of the primary CTA.
- Use the 4px base unit for all padding, margins, and radii (e.g., 4px, 8px, 16px, 24px).
- Keep UI chrome, like headers and footers, visually minimal and unobtrusive.

### Don't

- Don't use Tesla Blue (#3e6ae1) for text, headlines, or decorative elements.
- Don't introduce any other saturated colors into the UI palette.
- Don't use complex components; prefer simple, stacked text and button layouts.
- Don't use large shadows, gradients, or heavy visual effects on UI elements.
- Don't create layouts where text dominates over imagery.
- Don't use border radii larger than 8px.
- Don't use serif or expressive display fonts; maintain a neutral, technical typographic voice.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`
- **Shadow 2:** `rgb(255, 255, 255) 0px 2px 0px -1px`

## Imagery

The visual language is defined by cinematic, high-fidelity product photography. Every image is treated as a hero shot, typically full-bleed, occupying the entire viewport. The photography style is sharp, clean, and often aspirational, showing products in ideal contexts (a car on an open road, solar panels on a modern home). Color grading is natural and vibrant to make the product pop against the neutral UI. The density is image-dominant; text and UI exist only to support the visual narrative established by the photos.

## Layout

The page structure is a vertical series of full-screen, edge-to-edge content blocks, creating a 'scrolling presentation' experience. The dominant pattern is a centered stack: a large headline, supporting subtext, and action buttons overlaid directly onto a full-bleed background image. There is no visible page container; the browser viewport is the frame. Navigation is confined to a thin, non-sticky header bar at the very top, preserving maximum screen real estate for product visuals. Section transitions are seamless, with no visible gaps or dividers.

## Similar Brands

- **Apple** — Identical product-as-hero philosophy with full-bleed imagery, minimal UI, and a clean, technical sans-serif typography.
- **Rivian** — Direct competitor using a similar full-screen, scroll-based storytelling layout with centered text over aspirational vehicle photography.
- **Sonos** — Shares the use of pristine product shots on clean, achromatic backgrounds with minimal, functional UI components.
- **DJI** — Employs a similar high-tech, premium aesthetic with cinematic product visuals and a dark/light minimalist interface.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-tesla-blue: #3e6ae1;
  --color-pure-white: #ffffff;
  --color-off-white: #eeeeee;
  --color-parchment: #e5e3df;
  --color-light-border: #cccccc;
  --color-subtle-gray: #8e8e8;
  --color-steel: #5c5e62;
  --color-charcoal: #393c41;
  --color-onyx: #171a20;
  --color-carbon: #000000;
  --font-universal-sans-display: 'Universal Sans Display', Inter, Manrope;
  --font-universal-sans-text: 'Universal Sans Text', Inter, SF Pro Text;
  --font-roboto: 'Roboto', Roboto, system-ui;
  --text-caption: 11px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 28px;
  --leading-heading: 1.29;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display: 48px;
  --leading-display: 1.17;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --radius-cards: 8px;
  --radius-inputs: 4px;
  --radius-modals: 8px;
  --radius-buttons: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
  --shadow-xl-2: rgb(255, 255, 255) 0px 2px 0px -1px;
}
```

### Tailwind v4

```css
@theme {
  --color-tesla-blue: #3e6ae1;
  --color-pure-white: #ffffff;
  --color-off-white: #eeeeee;
  --color-parchment: #e5e3df;
  --color-light-border: #cccccc;
  --color-subtle-gray: #8e8e8;
  --color-steel: #5c5e62;
  --color-charcoal: #393c41;
  --color-onyx: #171a20;
  --color-carbon: #000000;
  --font-universal-sans-display: 'Universal Sans Display', Inter, Manrope;
  --font-universal-sans-text: 'Universal Sans Text', Inter, SF Pro Text;
  --font-roboto: 'Roboto', Roboto, system-ui;
  --text-caption: 11px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 28px;
  --leading-heading: 1.29;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display: 48px;
  --leading-display: 1.17;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --radius-cards: 8px;
  --radius-inputs: 4px;
  --radius-modals: 8px;
  --radius-buttons: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
  --shadow-xl-2: rgb(255, 255, 255) 0px 2px 0px -1px;
}
```
