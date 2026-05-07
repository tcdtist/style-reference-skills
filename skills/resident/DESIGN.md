---
version: alpha
name: "Resident"
description: "Resident employs a disciplined, gallery-like visual language, emphasizing product photography with stark white space and precise, minimal typography. Achromatic tones of black and white dominate, providing a quiet canvas for product hero shots. The design system leans into content-rich layouts, using tight typographic control for an authoritative, editorial feel, with interactive elements sparingly articulated through subtle borders and text rather than bold fills."
theme: "light"
industry: "ecommerce"
source_url: "https://resident.co.nz"
refero_style_id: "f451c085-f048-4c9c-ae3b-03acc88320ab"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513488410-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513488410-thumb.jpg"
extracted_at: "2026-04-30T01:45:08.913Z"
---

# Resident — Style Reference

> Gallery Grid Serenity

**Theme:** light

**Industry:** ecommerce

Resident employs a disciplined, gallery-like visual language, emphasizing product photography with stark white space and precise, minimal typography. Achromatic tones of black and white dominate, providing a quiet canvas for product hero shots. The design system leans into content-rich layouts, using tight typographic control for an authoritative, editorial feel, with interactive elements sparingly articulated through subtle borders and text rather than bold fills.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button fills |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, strong link and button borders, active states, most icons — establishes a stark, high-contrast visual identity |
| Muted Ash | #979797 | `--color-muted-ash` | Muted helper text, secondary information, soft border accents for inputs or subtle dividers |
| Graphite | #333333 | `--color-graphite` | Muted icon strokes, separators, and secondary graphic details. Do not promote it to the primary CTA color |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line heights:** 1.20, 1.30
- **Letter spacing:** normal
- **Role:** Utility text for navigation, small print, image captions, and general body content where unobtrusive clarity is key. Its system-font nature aids quick loading and broad compatibility.

### MessinaSansWeb

- **Token:** `--font-messinasansweb`
- **Substitute:** Helvetica Neue
- **Weights:** 400, 500
- **Sizes:** 14px, 18px, 19px, 23px, 27px
- **Line heights:** 1.00, 1.20, 1.29, 1.40
- **Letter spacing:** -0.0370em at 27px, -0.0300em at 23px
- **Role:** Primary headings, article titles, prominent body text, and some navigation elements. Tightly tracked letter spacing, especially at larger sizes, gives a refined and architectural precision.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.3 | — | `--text-body-sm` |
| subheading | 18px | 1.2 | -0.03px | `--text-subheading` |
| heading | 23px | 1.29 | -0.03px | `--text-heading` |
| display | 27px | 1 | -0.037px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-93 | 93px | `--spacing-93` |
| spacing-280 | 280px | `--spacing-280` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |
| pill | 50% |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 35px |
| cardPadding | 14px |
| elementGap | 21px |

## Components

### Primary Navigation Link

**Role:** Top-level navigation items

Ink Black text at MessinaSansWeb, weight 400, 14px, lineHeight 1.4. No padding, no border. Interactive via hover for subtle change.

### Secondary Ghost Button

**Role:** Language switcher, login links

Canvas White background, Ink Black text (sans-serif, weight 400), 0px border-radius, 0px padding. Designed to be unobtrusive and blend with the Canvas White background.

### Outlined Pill Button

**Role:** Small interactive elements like language selection (e.g. 'EN/DE')

Transparent background, Graphite text (333333), 1px Graphite border, 50% border-radius (pill shape). Minimal 1px vertical, 6px horizontal padding. A subtle, functional touch.

### Product Grid Card

**Role:** Displaying product images and brief descriptions in a gallery format

Transparent background, 0px border-radius, no shadow. Product image acts as its visual anchor. Content padding is 0px directly surrounding the image, with Ink Black text for titles and pricing.

### Text Input Field

**Role:** Form fields like login, password

Transparent background, Ink Black text (sans-serif, weight 400) and 1px Ink Black border only on the bottom. No border-radius. Features 9.8px vertical padding. Focus state likely uses a similar subtle border highlight.

## Do's and Don'ts

### Do

- Prioritize product photography as the focal point, allowing images to extend full-bleed or occupy significant visual space without heavy UI overlays.
- Use Ink Black (#000000) for all primary text and headings against Canvas White (#ffffff) backgrounds to maintain a high-contrast, editorial feel.
- Maintain a density of comfortable spacing by defaulting to 21px for element gaps and 14px for card padding, creating breathing room around content.
- Apply 0px border-radius to all major interactive elements and cards, preserving the sharp, architectural aesthetic.
- Utilize MessinaSansWeb for headlines and prominent body text with letter-spacing adjusted for precise visual fit, like -0.0370em at 27px.
- Employ `sans-serif` (system font) for secondary and utility text, ensuring high legibility and efficiency for smaller, functional details.
- Use subtle, text-based interactive elements (buttons, links) with minimal styling — often transparent backgrounds and thin borders instead of filled shapes.

### Don't

- Avoid using saturated or bright colors; restrict the palette almost entirely to achromatic neutrals (Canvas White, Ink Black, Muted Ash, Graphite).
- Do not use box-shadows or elevated elements; maintain a flat, two-dimensional design language for all UI components.
- Refrain from using heavily styled buttons with solid color fills; default to text links, ghost buttons, or subtly outlined elements.
- Do not introduce decorative gradients or complex backgrounds; interfaces should be clean Canvas White to highlight content.
- Avoid generic large-scale letter-spacing; use the precise, negative letter-spacing defined for MessinaSansWeb at larger sizes for consistency.
- Do not break away from the minimal, stark presentation of interactive elements; avoid hover effects that drastically change component appearance.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background and default surface for all content areas. |

## Imagery

The imagery is dominated by high-quality product photography and architectural interior shots. Treatment is often full-bleed or large-format, allowing the visual to dictate the section. Products are typically shown in sophisticated, minimalist environments, often with stark lighting. Some lifestyle and landscape photography provides contextual atmosphere. Image density is high, with visuals often taking precedence over text. Icons (e.g., search, cart) are minimal, outlined, and in Ink Black, reinforcing the austere aesthetic.

## Similar Brands

- **Fritz Hansen** — Shares a high-end furniture and lighting product focus with a clean, gallery-like layout and strong emphasis on product photography.
- **Carl Hansen & Søn** — Similar minimalist design, extensive use of white space, and a refined typographic approach to showcase premium design products.
- **String Furniture** — Employs an achromatic color palette and a grid-based system where product images are paramount, with sparse, precise text.
- **Menu (now Audo Copenhagen)** — Known for a stark, modern aesthetic, deep engagement with photography, and a subdued UI that puts product at the forefront.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-muted-ash: #979797;
  --color-graphite: #333333;
  --font-sans-serif: 'sans-serif', system-ui;
  --font-messinasansweb: 'MessinaSansWeb', Helvetica Neue;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.03px;
  --text-heading: 23px;
  --leading-heading: 1.29;
  --tracking-heading: -0.03px;
  --text-display: 27px;
  --leading-display: 1;
  --tracking-display: -0.037px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-21: 21px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-35: 35px;
  --spacing-42: 42px;
  --spacing-56: 56px;
  --spacing-83: 83px;
  --spacing-93: 93px;
  --spacing-280: 280px;
  --radius-none: 0px;
  --radius-pill: 50%;
  --surface-canvas-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-muted-ash: #979797;
  --color-graphite: #333333;
  --font-sans-serif: 'sans-serif', system-ui;
  --font-messinasansweb: 'MessinaSansWeb', Helvetica Neue;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.03px;
  --text-heading: 23px;
  --leading-heading: 1.29;
  --tracking-heading: -0.03px;
  --text-display: 27px;
  --leading-display: 1;
  --tracking-display: -0.037px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-21: 21px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-35: 35px;
  --spacing-42: 42px;
  --spacing-56: 56px;
  --spacing-83: 83px;
  --spacing-93: 93px;
  --spacing-280: 280px;
  --radius-none: 0px;
  --radius-pill: 50%;
  --surface-canvas-white: #ffffff;
}
```
