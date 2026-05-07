---
version: alpha
name: "Aesop"
description: "The design evokes a scholarly apothecary's formulary, where every element is presented with meticulous precision. It operates on a starkly limited palette of warm off-white and charcoal, creating a high-contrast, text-forward environment. A rigid, architectural layout with sharp 0px corners dominates, reinforcing a sense of order and clinical quality. The system's signature is the typographic tension between the humanist serif 'Zapf-Humanist' for expressive headlines and the neutral sans-serif 'SuisseIntl' for all functional text, lending an air of classicism to a modern digital interface."
theme: "light"
industry: "ecommerce"
source_url: "https://aesop.com"
refero_style_id: "24c0de95-295d-42aa-8240-4e36683cf35b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929922608-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929922608-thumb.jpg"
extracted_at: "2026-04-11T17:53:01.853Z"
---

# Aesop — Style Reference

> NGLORA - Apothecary's Formulary. A meticulously organized space where typography and product photography are treated with scientific precision.

**Theme:** light

**Industry:** ecommerce

The design evokes a scholarly apothecary's formulary, where every element is presented with meticulous precision. It operates on a starkly limited palette of warm off-white and charcoal, creating a high-contrast, text-forward environment. A rigid, architectural layout with sharp 0px corners dominates, reinforcing a sense of order and clinical quality. The system's signature is the typographic tension between the humanist serif 'Zapf-Humanist' for expressive headlines and the neutral sans-serif 'SuisseIntl' for all functional text, lending an air of classicism to a modern digital interface.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Parchment | #fffef2 | `--color-parchment` | Primary page background, light surfaces. |
| Charcoal | #333333 | `--color-charcoal` | Primary text, UI icons, primary buttons, borders. |
| Ink Black | #000000 | `--color-ink-black` | Hero section text, high-emphasis text elements. |
| Carbon | #252525 | `--color-carbon` | Footer background, secondary dark surfaces. |
| Stone | #666666 | `--color-stone` | Secondary body text. |
| Slate | #d6d5cc | `--color-slate` | Carousel scrollbar track. |
| Alabaster | #ffffff | `--color-alabaster` | Text on dark backgrounds, rare highlight surfaces. |
| Umber | #945c26 | `--color-umber` | Accent text on specific badges; provides a rare, earthy color pop. |

## Tokens — Typography

### SuisseIntl

- **Token:** `--font-suisseintl`
- **Substitute:** Inter, Helvetica Neue
- **Weights:** 400, 700
- **Sizes:** 11px, 12px, 14px, 16px, 18px, 30px
- **Line heights:** 1.20-2.86
- **Role:** The workhorse font for all UI text, body copy, navigation, product titles, and buttons. Its neutrality provides a stable, legible foundation for the more expressive serif.

### Zapf-Humanist

- **Token:** `--font-zapf-humanist`
- **Substitute:** Optima, Palatino
- **Weights:** 400
- **Sizes:** 31px
- **Line heights:** 1.33
- **Role:** Reserved for major, atmospheric headlines. Its humanist serif form contrasts with the clinical sans-serif, adding an editorial, classic quality.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.7 | — | `--text-caption` |
| body | 14px | 1.6 | — | `--text-body` |
| heading-sm | 18px | 1.33 | — | `--text-heading-sm` |
| heading | 30px | 1.2 | — | `--text-heading` |

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
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-180 | 180px | `--spacing-180` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 0px |
| cards | 0px |
| inputs | 0px |
| buttons | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(51, 51, 51, 0.2) 0px 0px 4px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1600px |
| sectionGap | 96-128px |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### Product Card — Animal

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Product Carousel Section — New and Notable

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero CTA Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Dark Action Button

**Role:** Primary call-to-action, such as 'Add to Cart'.

Background: Charcoal (#333333). Text: Parchment (#fffef2). Padding: 12px 24px. Radius: 0px. No border. Font: SuisseIntl.

### Outline Navigation Button

**Role:** Secondary header actions like 'Email sign up' or 'Search'.

Background: transparent. Text: Charcoal (#333333). Border: 1px solid rgba(51, 51, 51, 0.2). Padding: ~8px 16px. Radius: 0px. Font: SuisseIntl.

### Text Link

**Role:** Inline navigation or tertiary actions.

Background: transparent. Text: Charcoal (#333333). No border or padding. Underlined on hover. Font: SuisseIntl.

### Hero Outline Button

**Role:** Main CTA within the hero section.

Background: transparent. Text: Alabaster (#FFFFFF) or Ink Black (#000000) depending on hero video. Border: 1px solid matching text color. Padding: 12px 24px. Radius: 0px. Font: SuisseIntl.

### Text Input / Select

**Role:** Form fields for user input or selection.

Background: Parchment (#fffef2). Text: Charcoal (#333333). Border: 1px solid rgba(51, 51, 51, 0.2). Radius: 0px. Padding: ~12px 20px.

### Informational Badge

**Role:** Small text labels above product titles, e.g., 'New addition'.

Background: transparent. Text: Charcoal (#333333). Radius: 0px. Font: SuisseIntl, 11px, bold.

### Circular Arrow Button

**Role:** Carousel navigation controls.

Background: transparent. Border: none. Radius: 9999px. Contains a simple arrow icon in Charcoal (#333333).

## Do's and Don'ts

### Do

- Use Zapf-Humanist exclusively for large, emotive headlines, otherwise default to SuisseIntl.
- Maintain sharp 0px corners on all rectangular UI elements like cards, buttons, and inputs.
- Rely on generous whitespace (96px+ between sections) for separation, not dividers or shadows.
- Center-align text and imagery within product cards and feature blocks.
- Use the Parchment (#fffef2) and Charcoal (#333333) combination for primary content.
- Keep layouts simple: centered stacks or balanced multi-column grids.
- Use the Dark Action Button for all primary purchasing actions.

### Don't

- Do not use rounded corners on any element other than circular icon buttons.
- Do not use drop shadows or any other 3D-effect for elevation.
- Do not introduce new colors; the palette is intentionally restricted.
- Do not use gradients.
- Do not place text over complex parts of images; ensure high contrast.
- Do not use lifestyle photography that shows models or hands using products.
- Do not create complex, overlapping, or asymmetrical layouts.

## Elevation

- **Shadow 1:** `rgba(51, 51, 51, 0.2) 0px 0px 4px 0px`

## Imagery

The visual language for imagery is stark and artifact-like. Product photography features items isolated and centrally framed against the Parchment (#fffef2) background, akin to specimens in a lab or objects in a gallery. There is a deliberate absence of lifestyle context, models, or hands. The focus is purely on the product's form, amber glass, and typographic labels. Hero sections may use moody, atmospheric video focusing on texture and sensation (e.g., fur, water) rather than direct product use, providing a sensory counterpoint to the clinical product shots.

## Layout

The page follows a highly structured, architectural model with a generous max-width of around 1600px, within which content is neatly centered. The structure is a vertical stack of full-width bands, often alternating between the Parchment background and full-bleed imagery or video in the hero. Vertical rhythm is defined by expansive gaps (96px+) between sections. Content is arranged in simple, centered stacks or rigid 3-column grids for product carousels. This methodical, spacious, and grid-based approach reinforces the brand's precision and focus.

## Similar Brands

- **Byredo** — Similar minimalist product photography, monochrome palettes, and premium typographic focus.
- **Le Labo** — Shares the 'apothecary' label aesthetic, reliance on typography for branding, and a refined e-commerce experience.
- **SSENSE** — Employs a similar brutalist-inspired grid layout and a strong, singular sans-serif font as a core identity element.
- **Vitra** — Swiss design sensibility with a focus on gridded layouts, high-quality typography (sans-serif), and clean product presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-parchment: #fffef2;
  --color-charcoal: #333333;
  --color-ink-black: #000000;
  --color-carbon: #252525;
  --color-stone: #666666;
  --color-slate: #d6d5cc;
  --color-alabaster: #ffffff;
  --color-umber: #945c26;
  --font-suisseintl: 'SuisseIntl', Inter, Helvetica Neue;
  --font-zapf-humanist: 'Zapf-Humanist', Optima, Palatino;
  --text-caption: 11px;
  --leading-caption: 1.7;
  --text-body: 14px;
  --leading-body: 1.6;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.33;
  --text-heading: 30px;
  --leading-heading: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-73: 73px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-180: 180px;
  --radius-tags: 0px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --shadow-xl: rgba(51, 51, 51, 0.2) 0px 0px 4px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-parchment: #fffef2;
  --color-charcoal: #333333;
  --color-ink-black: #000000;
  --color-carbon: #252525;
  --color-stone: #666666;
  --color-slate: #d6d5cc;
  --color-alabaster: #ffffff;
  --color-umber: #945c26;
  --font-suisseintl: 'SuisseIntl', Inter, Helvetica Neue;
  --font-zapf-humanist: 'Zapf-Humanist', Optima, Palatino;
  --text-caption: 11px;
  --leading-caption: 1.7;
  --text-body: 14px;
  --leading-body: 1.6;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.33;
  --text-heading: 30px;
  --leading-heading: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-73: 73px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-180: 180px;
  --radius-tags: 0px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --shadow-xl: rgba(51, 51, 51, 0.2) 0px 0px 4px 0px;
}
```
