---
version: alpha
name: "Moffitt.Moffitt. -"
description: "Moffitt.Moffitt. evokes a gallery-like atmosphere, pairing high-contrast monochrome with ample negative space to emphasize content over interface. Its visual language relies on stark black and white, subtly textured neutrals, and a complete absence of vibrant accents. Typography is the primary vehicle for detail, with a focus on distinct display and body faces. Components are minimal and often borderless, blending into the canvas to allow imagery and strong type to command attention."
theme: "light"
industry: "design"
source_url: "https://moffittmoffitt.com"
refero_style_id: "4244637b-e27b-4962-b586-cb3ac605e5aa"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514614554-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514614554-thumb.jpg"
extracted_at: "2026-04-30T02:04:05.182Z"
---

# Moffitt.Moffitt. - — Style Reference

> monochrome gallery canvas

**Theme:** light

**Industry:** design

Moffitt.Moffitt. evokes a gallery-like atmosphere, pairing high-contrast monochrome with ample negative space to emphasize content over interface. Its visual language relies on stark black and white, subtly textured neutrals, and a complete absence of vibrant accents. Typography is the primary vehicle for detail, with a focus on distinct display and body faces. Components are minimal and often borderless, blending into the canvas to allow imagery and strong type to command attention.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated card surfaces, clean sections that emphasize content |
| Ink Black | #000000 | `--color-ink-black` | Primary text, strong headlines, button backgrounds, borders, and interactive elements. Establishes high contrast |
| Fog Gray | #f5f5f5 | `--color-fog-gray` | Subtle background for secondary sections, creating visual segmentation without strong contrast |
| Charcoal Gray | #595b60 | `--color-charcoal-gray` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Stone Gray | #888888 | `--color-stone-gray` | Muted text, helper text, and decorative strokes where minimal contrast is desired |
| Divider Gray | #d8d8da | `--color-divider-gray` | Fine borders and subtle dividers, providing structural separation |

## Tokens — Typography

### Suisse

- **Token:** `--font-suisse`
- **Substitute:** Helvetica Neue, Arial
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 16px, 22px, 24px, 40px
- **Line heights:** 1.00, 1.13, 1.17, 1.20, 1.25, 1.33, 1.39, 2.00
- **Letter spacing:** normal
- **Role:** Primary sans-serif for all UI text, headings, and body copy. Its range of weights and sizes supports a hierarchical information architecture, from compact labels to prominent titles.

### Lyon

- **Token:** `--font-lyon`
- **Substitute:** Georgia, serif
- **Weights:** 100
- **Sizes:** 13px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Specialized light-weight serif for small text elements, such as metadata, captions, or callouts. Its delicacy provides a visual counterpoint to the more robust Suisse.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.33 | — | `--text-caption` |
| body | 16px | 1.25 | — | `--text-body` |
| subheading | 22px | 1.13 | — | `--text-subheading` |
| heading | 24px | 1.17 | — | `--text-heading` |
| display | 40px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 50px |
| cards | 0px |
| images | 5px |
| inputs | 0px |
| buttons | 50px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Pill Button - Light

**Role:** Interactive element (button).

White background, Ink Black text, 50px border-radius, 11px horizontal padding, 0px vertical padding. Used for secondary actions and tags.

### Pill Button - Dark

**Role:** Interactive element (button).

Ink Black background, Canvas White text, 50px border-radius, 11px horizontal padding, 0px vertical padding. Used for primary actions and prominent tags.

### Ghost Link

**Role:** Interactive text link/button.

Transparent background, Ink Black text, no border-radius or padding. Appears as pure text, often with an implicit interactive area.

### Muted Ghost Link

**Role:** Interactive text link/button (muted).

Transparent background, Stone Gray text, no border-radius or padding. Used for tertiary actions or less prominent links that fade into the background.

### Content Card

**Role:** Container for content.

Transparent background, 0px border-radius, no box shadow, 0px internal padding. Content within defines its visual boundaries.

### Form Input

**Role:** User input field.

Transparent background, Canvas White text, Canvas White 1px border, 0px border-radius, no padding. Minimalist input field for forms.

## Do's and Don'ts

### Do

- Prioritize high contrast between Ink Black (#000000) and Canvas White (#ffffff) for primary text and backgrounds.
- Use Fog Gray (#f5f5f5) as a subtle background for sections to create soft visual transitions, not strong divisions.
- Apply 50px border-radius for all interactive buttons and tags to maintain the distinct pill shape.
- Employ the Suisse font family for all functional text elements, varying weight to establish hierarchy.
- Maintain generous negative space around content blocks, ensuring a breathable and uncrowded layout.
- Use 0px radius for content cards and inputs, ensuring a sharp, modern appearance.
- Ensure borders, when present, are 1px solid using Divider Gray (#d8d8da) or Ink Black (#000000) for clean definition.

### Don't

- Do not introduce any saturated colors; resist the urge to add color for emphasis.
- Avoid using box shadows; prefer flat, stacked surfaces or subtle background color changes for depth.
- Do not use generic button styles; all primary and secondary buttons must adhere to the 50px pill-shape radius.
- Do not add unnecessary padding or borders to cards; keep them visually lightweight and integrated with the canvas.
- Avoid heavy or complex gradients; prefer solid colors or the natural gradients of photography.
- Do not use letter-spacing other than 'normal' for Suisse and Lyon fonts.
- Do not deviate from the specified font families; avoid system defaults or other creative typographies.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Primary page background and default surface for most content sections. |
| 2 | Fog Gray | #f5f5f5 | Secondary background for alternating content sections, providing a subtle shift in visual texture. |
| 3 | Ink Black | #000000 | Used as an occasional dark surface for highly impactful sections or controls, creating maximum contrast. |

## Imagery

The visual language is characterized by high-quality photography, often depicting architectural spaces, product shots, or stylized portraits. Images generally have a muted, almost desaturated color palette, aligning with the overall monochrome aesthetic. They are often full-bleed or large format, acting as primary visual content. For iconography, a minimalist, outlined style is preferred, typically in Ink Black or Stone Gray, maintaining a delicate and unobtrusive presence. Imagery serves to establish atmosphere, showcase projects, and provide a sophisticated backdrop, rather than acting as purely decorative elements.

## Layout

The page model is largely full-bleed, but with a strong emphasis on horizontal centering and comfortable negative space. Hero sections often feature large, impactful imagery alongside concise, high-contrast typography. Section rhythm is created through alternating Canvas White and Fog Gray backgrounds, providing clear visual breaks. Content arrangement frequently uses large, single-column blocks for impactful statements, or balanced two-column layouts pairing imagery with text. Navigation is minimal, typically a subtle sticky header with a hamburger menu icon. The overall density is spacious, allowing each element to breathe and resonate.

## Similar Brands

- **Stripe** — Shares a sophisticated, high-contrast monochrome aesthetic with clean typography and minimal UI elements.
- **Apple** — Employs extensive use of negative space, large impactful imagery, and a focus on subtle surfaces with high contrast text.
- **B&O (Bang & Olufsen)** — Similar focus on premium, minimalist design with a heavy reliance on a black and white palette and quality photography to convey brand value.
- **Linear** — Features a highly refined, almost entirely achromatic UI where typography and crisp lines define components, and color is used sparingly for functional accents (though Linear uses a distinct accent color, Moffitt.Moffitt. explicitly does not).

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-fog-gray: #f5f5f5;
  --color-charcoal-gray: #595b60;
  --color-stone-gray: #888888;
  --color-divider-gray: #d8d8da;
  --font-suisse: 'Suisse', Helvetica Neue, Arial;
  --font-lyon: 'Lyon', Georgia, serif;
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 22px;
  --leading-subheading: 1.13;
  --text-heading: 24px;
  --leading-heading: 1.17;
  --text-display: 40px;
  --leading-display: 1.2;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --radius-tags: 50px;
  --radius-cards: 0px;
  --radius-images: 5px;
  --radius-inputs: 0px;
  --radius-buttons: 50px;
  --surface-canvas-white: #ffffff;
  --surface-fog-gray: #f5f5f5;
  --surface-ink-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-fog-gray: #f5f5f5;
  --color-charcoal-gray: #595b60;
  --color-stone-gray: #888888;
  --color-divider-gray: #d8d8da;
  --font-suisse: 'Suisse', Helvetica Neue, Arial;
  --font-lyon: 'Lyon', Georgia, serif;
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 22px;
  --leading-subheading: 1.13;
  --text-heading: 24px;
  --leading-heading: 1.17;
  --text-display: 40px;
  --leading-display: 1.2;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --radius-tags: 50px;
  --radius-cards: 0px;
  --radius-images: 5px;
  --radius-inputs: 0px;
  --radius-buttons: 50px;
  --surface-canvas-white: #ffffff;
  --surface-fog-gray: #f5f5f5;
  --surface-ink-black: #000000;
}
```
