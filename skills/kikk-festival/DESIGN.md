---
version: alpha
name: "Kikk Festival"
description: "Kikk Festival employs a stark, high-contrast, monochrome visual system, built around a utilitarian aesthetic and robust typography. The primary canvas is a pale gray, providing a subtle backdrop for the dominant black elements. Visual hierarchy is achieved through scale and weight in typography, rather than color, creating a direct and assertive communication style. Interactivity is signaled through subtle background changes and prominent borders, reinforcing the system's structured and functional character."
theme: "light"
industry: "other"
source_url: "https://www.kikk.be/2021"
refero_style_id: "94ea1ae0-1b51-4c77-9662-b40fcaf82ecd"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520769030-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520769030-thumb.jpg"
extracted_at: "2026-04-30T03:46:25.843Z"
---

# Kikk Festival — Style Reference

> monochrome industrial blueprint

**Theme:** light

**Industry:** other

Kikk Festival employs a stark, high-contrast, monochrome visual system, built around a utilitarian aesthetic and robust typography. The primary canvas is a pale gray, providing a subtle backdrop for the dominant black elements. Visual hierarchy is achieved through scale and weight in typography, rather than color, creating a direct and assertive communication style. Interactivity is signaled through subtle background changes and prominent borders, reinforcing the system's structured and functional character.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Fog | #f1f1f1 | `--color-canvas-fog` | Page backgrounds, button backgrounds |
| Midnight Ink | #101010 | `--color-midnight-ink` | Primary text, borders, default icon fills |
| Deep Black | #000000 | `--color-deep-black` | Stronger text emphasis, specific icon fills, button text |
| Medium Gray | #aeaeae | `--color-medium-gray` | Subtle secondary text or inactive elements |

## Tokens — Typography

### Suisse Int'l

- **Token:** `--font-suisse-int-l`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 12px, 24px, 60px, 375px
- **Line heights:** 0.70, 0.80, 0.90, 1.10, 1.30
- **Letter spacing:** -0.0400em
- **Role:** All textual elements from headings to body text and interactive elements. Its wide range of weights and sizes, combined with consistent negative letter-spacing, creates a cohesive and impactful typographic hierarchy, lending a strong, technical voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.3 | -0.48px | `--text-caption` |
| body | 24px | 1.1 | -0.96px | `--text-body` |
| heading | 60px | 0.9 | -2.4px | `--text-heading` |
| display | 375px | 0.7 | -15px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-90 | 90px | `--spacing-90` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 18px |
| elementGap | 18px |

## Components

### Outline Nav Link

**Role:** Header navigation items

Text link with Deep Black text on Canvas Fog background. Features a 1px Deep Black border on hover or active states. Padding is 0px top/bottom and 18px left/right. Zero border-radius for a sharp, angular look.

### Ghost Button

**Role:** Primary Call-to-action

A ghost button for actions, featuring Deep Black text on a transparent background with a 1px Deep Black border. Zero border-radius, with 12px top/bottom and 12px left/right padding. The background changes to Canvas Fog on hover.

### Navigation Button

**Role:** Utility navigation items or dropdown triggers

Minimal button with 0px padding and a 0px border-radius. Uses Deep Black for text and a transparent background. Often seen with specific icons.

### Filled Basic Button

**Role:** Secondary action button for internal navigation.

Filled button with Canvas Fog background and Midnight Ink text. Features a 1px Midnight Ink border and 0px border-radius. Padding is 12px top/bottom and 12px left/right.

## Do's and Don'ts

### Do

- Always use 'Suisse Int'l' or its substitute for all text, adhering strictly to the defined weights and sizes for typographic hierarchy.
- Maintain a monochrome palette: use Canvas Fog (#f1f1f1) for primary backgrounds and Midnight Ink (#101010) or Deep Black (#000000) for text and strong accents.
- Apply a global border-radius of 0px to all interactive elements and containers to reinforce the angular, industrial aesthetic.
- Utilize 1px borders in Midnight Ink (#101010) or Deep Black (#000000) for interactive states and structural divisions.
- Employ consistent letter-spacing of -0.0400em for all text, regardless of size, for a tight, controlled typographic appearance.
- Structure layout with strict vertical rhythm using 24px section gaps and 18px element gaps, without exception.
- Signal interactivity through background color changes from transparent to Canvas Fog (#f1f1f1) on hover for ghost elements, rather than chromatic alterations.

### Don't

- Do not introduce vibrant accent colors; the design relies on a strictly achromatic palette.
- Avoid rounded corners; all elements should maintain sharp, 0px corner radii.
- Do not use box shadows or other elevation effects; all surfaces are flat and defined by borders.
- Never vary letter-spacing based on text size; the consistent narrow tracking is a core identity feature.
- Do not use generic system fonts; 'Suisse Int'l' is critical to the brand's typographic voice.
- Avoid soft or subtle borders; structural elements and interactive states demand distinct 1px black borders.
- Do not rely on subtle changes in neutral hues for hierarchy; instead, use explicit borders, text weight, and text scale.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Base Canvas | #f1f1f1 | Dominant page background |
| 1 | Interactive Surface | #101010 | Hover/active state background for ghost elements, and background for elements that need strong contrast against Base Canvas. |

## Imagery

The site's visual language for imagery is minimal and functional, featuring dark, distinct icons or symbolic graphics rather than photography or detailed illustrations. Icons are solid-filled or outlined in black, with sharp, geometric forms. The large '404' graphic appears to be a distorted, monumental typographic element rather than a traditional image, reinforcing a strong, graphic-design-led aesthetic. Imagery serves a purely indicative or decorative function, always adhering to the monochrome palette and angular style, never for atmosphere or detailed content explanation. Density is image-sparse, prioritizing text and structural elements.

## Layout

The page maintains a centered, maximal-width content area rather than full-bleed. The hero section presents very large, impactful typography as the primary visual element. Content is arranged in stacked blocks with significant vertical separation, indicated by clear section gaps. Distinct horizontal dividers in black reinforce structural breaks. Navigation is a minimalist top bar with ghost utility links and discrete bordered buttons, emphasizing clear boundaries over seamless flow.

## Similar Brands

- **AIGA** — Monochromatic, grid-based aesthetic with bold typography and strong borders.
- **Gropius House** — Bauhaus-inspired starkness, functional forms, and high-contrast black and white.
- **The Next Web (older designs)** — Aggressive use of typography, tight letter-spacing, and clear, defined UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-fog: #f1f1f1;
  --color-midnight-ink: #101010;
  --color-deep-black: #000000;
  --color-medium-gray: #aeaeae;
  --font-suisse-int-l: 'Suisse Int'l', Inter;
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.48px;
  --text-body: 24px;
  --leading-body: 1.1;
  --tracking-body: -0.96px;
  --text-heading: 60px;
  --leading-heading: 0.9;
  --tracking-heading: -2.4px;
  --text-display: 375px;
  --leading-display: 0.7;
  --tracking-display: -15px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-90: 90px;
  --radius-all: 0px;
  --surface-base-canvas: #f1f1f1;
  --surface-interactive-surface: #101010;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-fog: #f1f1f1;
  --color-midnight-ink: #101010;
  --color-deep-black: #000000;
  --color-medium-gray: #aeaeae;
  --font-suisse-int-l: 'Suisse Int'l', Inter;
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.48px;
  --text-body: 24px;
  --leading-body: 1.1;
  --tracking-body: -0.96px;
  --text-heading: 60px;
  --leading-heading: 0.9;
  --tracking-heading: -2.4px;
  --text-display: 375px;
  --leading-display: 0.7;
  --tracking-display: -15px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-90: 90px;
  --radius-all: 0px;
  --surface-base-canvas: #f1f1f1;
  --surface-interactive-surface: #101010;
}
```
