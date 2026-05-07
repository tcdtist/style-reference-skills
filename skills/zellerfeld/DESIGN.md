---
version: alpha
name: "Zellerfeld"
description: "Zellerfeld's visual style is a 'concrete brutalism meets digital futurism' aesthetic. It pairs stark, unadorned typography with substantial, well-defined components, often set against a cool gray canvas. There's a deliberate lack of decorative elements, keeping the focus on solid forms and product imagery. Elevation is minimal, often relying on subtle background shifts or high-contrast borders rather than deep shadows. A single vibrant blue acts as a functional highlight, drawing attention to active states and new content."
theme: "light"
industry: "ecommerce"
source_url: "https://www.zellerfeld.com"
refero_style_id: "a6efcd16-dcd8-435b-9bd6-8c590589b424"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508333567-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508333567-thumb.jpg"
extracted_at: "2026-04-30T00:19:23.270Z"
---

# Zellerfeld — Style Reference

> Sculpted forms, digital canvas

**Theme:** light

**Industry:** ecommerce

Zellerfeld's visual style is a 'concrete brutalism meets digital futurism' aesthetic. It pairs stark, unadorned typography with substantial, well-defined components, often set against a cool gray canvas. There's a deliberate lack of decorative elements, keeping the focus on solid forms and product imagery. Elevation is minimal, often relying on subtle background shifts or high-contrast borders rather than deep shadows. A single vibrant blue acts as a functional highlight, drawing attention to active states and new content.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #111111 | `--color-midnight-ink` | Primary text, deep backgrounds, strong borders |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button text |
| Shadow | #000000 | `--color-shadow` | Layered backgrounds, strong text, dark element borders |
| Stone Gray | #a1a4aa | `--color-stone-gray` | Placeholder text, subtle borders, inactive elements |
| Fog | #d7d7d7 | `--color-fog` | Subtle dividers, light backgrounds |
| Surface Gray | #ecedee | `--color-surface-gray` | Secondary backgrounds, subtle UI element backgrounds |
| Stonewash | #444955 | `--color-stonewash` | Secondary text, muted borders, navigation accents |
| Sky Tint | #e5e7ff | `--color-sky-tint` | Very light backgrounds, subtle highlight accents |
| Subtle Slate | #737780 | `--color-subtle-slate` | Muted text, less prominent borders |
| Electric Blue | #000aff | `--color-electric-blue` | New content indicators, active states, key call-to-action fills |

## Tokens — Typography

### Roobert

- **Token:** `--font-roobert`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600, 700
- **Sizes:** 13px, 14px, 15px, 16px, 20px, 32px, 40px, 64px, 128px
- **Line heights:** 1.00, 1.15, 1.20, 1.35, 1.40, 1.50
- **Letter spacing:** -0.04em
- **Role:** Primary UI font for headings, body text, buttons, and navigation. Its slightly condensed, geometric structure reinforces the futuristic and engineered brand image. The uniform tight letter-spacing across all sizes maintains a consistent compact feel.

### Space Mono

- **Token:** `--font-space-mono`
- **Substitute:** monospace
- **Weights:** 400, 600
- **Sizes:** 12px, 14px
- **Line heights:** 1.00, 1.35, 1.50
- **Letter spacing:** normal
- **Role:** Used for code-like snippets, product IDs, and secondary information where a technical, precise tone is desired. Its monospaced nature provides visual distinction from the primary typeface.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1 | — | `--text-caption` |
| body | 14px | 1.35 | — | `--text-body` |
| body-lg | 16px | 1.4 | — | `--text-body-lg` |
| heading-sm | 20px | 1.4 | — | `--text-heading-sm` |
| heading | 32px | 1.15 | — | `--text-heading` |
| heading-lg | 40px | 1.15 | — | `--text-heading-lg` |
| display-sm | 64px | 1 | — | `--text-display-sm` |
| display | 128px | 1 | — | `--text-display` |

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
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-169 | 169px | `--spacing-169` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| badges | 30px |
| images | 10px |
| inputs | 10px |
| buttons | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1440px |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Primary Action Button

**Role:** Main call-to-action button

Filled with `Electric Blue` (#000aff) on a `Canvas White` text. Rounded corners at `10px`. Internal padding of `16px` vertical and `32px` horizontal.

### Ghost Button (Dark)

**Role:** Secondary action on dark backgrounds

Transparent background, `Midnight Ink` (#111111) text and border. No border radius. No padding.

### Ghost Button (Light)

**Role:** Secondary actions on light backgrounds

Transparent background, `Midnight Ink` (#111111) text, `Stone Gray` (#a1a4aa) border. No border radius. No padding.

### Faded Button

**Role:** Tertiary or disabled button states

Semi-transparent `rgba(116, 114, 114, 0.5)` background with `Canvas White` text and border. `10px` border radius. Internal padding of `16px` vertical and `32px` horizontal.

### Light Opaque Button

**Role:** Standard button on neutral backgrounds

Solid `Surface Gray` (#ecedee) background with `Shadow` (#000000) text. `10px` border radius. Internal padding of `16px` vertical and `32px` horizontal.

### Glass Input

**Role:** Input fields on light backgrounds

Semi-transparent `rgba(255, 255, 255, 0.5)` background with `Shadow` (#000000) text. `10px` border radius. Internal padding of `16px`.

### Dark Overlay Card

**Role:** Prominent content sections or overlays

Solid `Midnight Ink` (#111111) background with `10px` border radius. Vertical padding of `48px`, no horizontal padding.

### Neutral Product Card

**Role:** Default display for product listings

Uses transparent background and no box shadow. `10px` border radius when it includes an image. Features a `Stone Gray` (#a1a4aa) border for structure.

### Glass Product Card

**Role:** Product card with a subtle transparent background

Semi-transparent `rgba(255, 255, 255, 0.5)` background with `10px` border radius. Internal padding of `16px`.

### New In Badge

**Role:** Highlights new items or features

Filled with `Electric Blue` (#000aff) and `Canvas White` text. Highly rounded corners at `30px`. Padding `4px` vertical and `16px` horizontal.

## Do's and Don'ts

### Do

- Use Roobert with a letter-spacing of -0.04em for all primary text elements to maintain a compact, engineered aesthetic.
- Apply `10px` border radius consistently to buttons, product images, and cards for a subtly softened but deliberate edge.
- Reserve `Electric Blue` (#000aff) strictly for 'new' badges, active states, and primary call-to-action buttons to ensure maximum functional emphasis.
- Adhere to the `16px` unit for `elementGap` and `cardPadding` to establish a comfortable yet structured density.
- Utilize `Stone Gray` (#a1a4aa) for subtle borders and placeholders, creating a tiered visual hierarchy for non-interactive elements.
- Establish clear visual separation between sections by using `48px` for `sectionGap` and alternating `Canvas White` and `Surface Gray` (#ecedee) backgrounds.
- Incorporate `Space Mono` for small, numeric, or technical details, setting it apart with its monospaced character and normal letter-spacing.

### Don't

- Do not deviate from the standardized letter-spacing of -0.04em for Roobert, as it defines the text's character.
- Avoid using `Electric Blue` (#000aff) for purely decorative elements; its purpose is functional emphasis.
- Do not introduce heavy drop shadows, as the system relies on subtle background shifts and high-contrast borders for depth.
- Do not use generic system fonts where Roobert or Space Mono are specified; the custom typography is a core brand identifier.
- Avoid arbitrary padding or margin values; stick to the `4px` base unit and specified `elementGap` and `cardPadding`.
- Do not round corners excessively beyond `10px` for cards and buttons, except for `30px` on badges, to maintain a solid, architectural feel.
- Do not use highly saturated colors outside the defined accent color; the palette is primarily neutral to highlight products.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background layer, underlying most content. |
| 1 | Surface Gray | #ecedee | Subtle secondary background for alternating sections and UI elements, providing a slight elevation from the canvas. |
| 2 | Fog | #d7d7d7 | Used for specific background sections to create a distinct, slightly darker block. |
| 3 | Neutral Product Card Base | #ffffff80 | Semi-transparent card backgrounds, creating a frosted glass effect over underlying content. |
| 4 | Dark Overlay | #111111 | Background for prominent, isolated content blocks or sections requiring high contrast. |

## Imagery

Imagery primarily features product shots: 3D rendered shoes on plain, often monolithic backgrounds, sometimes featuring stylized human elements (legs, poses) but always framing the product as the central hero. Photography is high-key, with bright, even lighting and minimal shadows to showcase texture and form. The focus is on the object itself, often with a slightly desaturated overall tone to the environment, allowing vibrant product colors (like the purple shoe) to pop. Icons are minimal, utilitarian, and use outlined or filled styles, typically in `Midnight Ink`.

## Layout

The page adheres to a max-width `1440px` centered container for most content, with occasional full-bleed sections. The hero consistently presents a large, visually dominant product image or render, often with overlaid text. Section rhythm is driven by generous vertical spacing (`48px`) and alternating background colors (primarily `Canvas White` and `Surface Gray`) to differentiate content blocks. Content is typically arranged in adaptive grid layouts (e.g., 4-column product grids) or symmetrical centered stacks, with an emphasis on visual balance. Navigation features a subtle top bar and a sticky header, suggesting a lightweight and clean user experience.

## Similar Brands

- **A-COLD-WALL*** — Shares a brutalist, industrial aesthetic with stark typography and a focus on product form over decorative flourishes.
- **Balenciaga (website)** — Employs a similar high-contrast, often monochromatic design with strong, minimal typography and prominent product imagery.
- **The Row** — Exhibits a refined, understated visual language with generous white space, a limited color palette, and a focus on premium product presentation.
- **Acne Studios** — Uses a clean, modern aesthetic with robust sans-serif typography, large imagery, and functional color accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #111111;
  --color-canvas-white: #ffffff;
  --color-shadow: #000000;
  --color-stone-gray: #a1a4aa;
  --color-fog: #d7d7d7;
  --color-surface-gray: #ecedee;
  --color-stonewash: #444955;
  --color-sky-tint: #e5e7ff;
  --color-subtle-slate: #737780;
  --color-electric-blue: #000aff;
  --font-roobert: 'Roobert', system-ui;
  --font-space-mono: 'Space Mono', monospace;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1;
  --text-body: 14px;
  --leading-body: 1.35;
  --text-body-lg: 16px;
  --leading-body-lg: 1.4;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.15;
  --text-display-sm: 64px;
  --leading-display-sm: 1;
  --text-display: 128px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-169: 169px;
  --radius-cards: 10px;
  --radius-badges: 30px;
  --radius-images: 10px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --surface-canvas-white: #ffffff;
  --surface-surface-gray: #ecedee;
  --surface-fog: #d7d7d7;
  --surface-neutral-product-card-base: #ffffff80;
  --surface-dark-overlay: #111111;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #111111;
  --color-canvas-white: #ffffff;
  --color-shadow: #000000;
  --color-stone-gray: #a1a4aa;
  --color-fog: #d7d7d7;
  --color-surface-gray: #ecedee;
  --color-stonewash: #444955;
  --color-sky-tint: #e5e7ff;
  --color-subtle-slate: #737780;
  --color-electric-blue: #000aff;
  --font-roobert: 'Roobert', system-ui;
  --font-space-mono: 'Space Mono', monospace;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1;
  --text-body: 14px;
  --leading-body: 1.35;
  --text-body-lg: 16px;
  --leading-body-lg: 1.4;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.15;
  --text-display-sm: 64px;
  --leading-display-sm: 1;
  --text-display: 128px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-169: 169px;
  --radius-cards: 10px;
  --radius-badges: 30px;
  --radius-images: 10px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --surface-canvas-white: #ffffff;
  --surface-surface-gray: #ecedee;
  --surface-fog: #d7d7d7;
  --surface-neutral-product-card-base: #ffffff80;
  --surface-dark-overlay: #111111;
}
```
