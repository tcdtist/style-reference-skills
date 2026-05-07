---
version: alpha
name: "nabr"
description: "Nabr presents a visually serene and understated system, balancing traditional corporate professionalism with a touch of warmth. Its design relies on a minimalist canvas, punctuated by a single muted accent color that provides guidance without demanding attention. Typography is compact and precise, maintaining clarity within a spacious layout that champions legibility over ornate visual flair. The overall impression is one of quiet competence and thoughtful, unhurried communication."
theme: "light"
industry: "other"
source_url: "https://nabr.com"
refero_style_id: "4719adfd-b9a9-4c25-9be2-8a7fb88a2621"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519193771-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519193771-thumb.jpg"
extracted_at: "2026-04-30T03:20:07.006Z"
---

# nabr — Style Reference

> Architectural blueprint on white marble. Lines are clean and intentional, against a calm, expansive background.

**Theme:** light

**Industry:** other

Nabr presents a visually serene and understated system, balancing traditional corporate professionalism with a touch of warmth. Its design relies on a minimalist canvas, punctuated by a single muted accent color that provides guidance without demanding attention. Typography is compact and precise, maintaining clarity within a spacious layout that champions legibility over ornate visual flair. The overall impression is one of quiet competence and thoughtful, unhurried communication.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background — a pristine, expansive surface that anchors all content |
| Graphite | #333333 | `--color-graphite` | Primary text, structural UI elements, and strong borders — providing solid contrast against the light canvas |
| Muted Truffle | #555555 | `--color-muted-truffle` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Desert Sienna | #b08968 | `--color-desert-sienna` | Headline accents and subtle typographic distinctions — a warm, earthy tone that indicates importance without high saturation |

## Tokens — Typography

### Poppins

- **Token:** `--font-poppins`
- **Substitute:** system-ui
- **Weights:** 300
- **Sizes:** 14px, 16px, 40px
- **Line heights:** 1.20, 1.30
- **Role:** Display headlines and sub-headlines — a lightweight expression that conveys authority through restraint.

### Poppins

- **Token:** `--font-poppins`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 14px, 16px, 40px
- **Line heights:** 1.20, 1.30
- **Role:** Body text, links, and secondary UI copy — standard weight for optimal readability.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.3 | — | `--text-caption` |
| body | 16px | 1.3 | — | `--text-body` |
| display | 40px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-16 | 16px | `--spacing-16` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 64px |
| elementGap | 16px |

## Components

## Do's and Don'ts

### Do

- Prioritize a spacious, minimalist canvas using Canvas White (#ffffff) for backgrounds.
- Use Graphite (#333333) for primary textual content that requires strong emphasis.
- Apply Desert Sienna (#b08968) exclusively for headline accents; avoid using it for critical interactive elements.
- Maintain a clear visual hierarchy with Poppins weight 300 for display text (40px) and weight 400 for body text (14px, 16px).
- Employ consistent 64px horizontal padding to contain content within sections, allowing ample negative space.
- Utilize Muted Truffle (#555555) for secondary informational text and unobtrusive link styling.

### Don't

- Avoid introducing additional saturated colors; Desert Sienna (#b08968) is the primary chromatic accent.
- Do not use heavy shadows or gradients; the design relies on flat surfaces and clean lines.
- Refrain from using bold typography for body text; Poppins weight 400 is the standard for readability.
- Do not break the wide, uncluttered layout with unnecessary borders or visual dividers.
- Avoid complex component styling; components should remain simple, functional, and blend into the light canvas.
- Do not use decorative imagery that introduces conflicting color palettes; stick to subtle, illustrative brand visuals.

## Imagery

This system primarily uses rendered 3D architectural illustrations to represent concepts. These visuals are depicted from an isometric perspective, using muted, pastel-like colors (light blues, pale yellows, soft pinks, and earthy greens). The elements within these illustrations, like buildings and trees, are simple, geometric forms, and often appear illuminated as if from within by a soft, warm glow. They serve an explanatory role, concretely illustrating abstract ideas (like connected systems) without detailed realism, maintaining a clean aesthetic. There are no photographs or complex textures, reinforcing the clean, schematic feel. No discernible icon style is present beyond the 'n' logo in the illustration.

## Layout

The page primarily employs a max-width contained layout, though the section containing the 3D illustration appears to fill the available width while maintaining significant internal padding. The primary structure (as seen in the screenshot) consists of a two-column hero section with text on the left and a prominent illustrative visual on the right. Content sections generally follow a vertical rhythm with ample spacing between them. The navigation is minimal, consisting of a standalone logo. The layout is spacious with large areas of negative space, suggesting a focus on clarity rather than information density.

## Similar Brands

- **Linear** — Clean, light UI with functional typography and minimal color usage, focusing on clear information presentation.
- **Figma** — Dominant white canvas with clean, accessible typography and a subtle use of brand color for accents and states.
- **Stripe** — Modern, spacious layouts with strong typographic hierarchy against a neutral background, using color sparingly for impact.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-graphite: #333333;
  --color-muted-truffle: #555555;
  --color-desert-sienna: #b08968;
  --font-poppins: 'Poppins', system-ui;
  --font-poppins: 'Poppins', system-ui;
  --text-caption: 14px;
  --leading-caption: 1.3;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-display: 40px;
  --leading-display: 1.2;
  --spacing-16: 16px;
  --spacing-64: 64px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-graphite: #333333;
  --color-muted-truffle: #555555;
  --color-desert-sienna: #b08968;
  --font-poppins: 'Poppins', system-ui;
  --font-poppins: 'Poppins', system-ui;
  --text-caption: 14px;
  --leading-caption: 1.3;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-display: 40px;
  --leading-display: 1.2;
  --spacing-16: 16px;
  --spacing-64: 64px;
  --radius-none: 0px;
}
```
