---
version: alpha
name: "MAD"
description: "MAD's visual identity is a study in muted intensity, emphasizing a monochromatic, pixel-precise aesthetic. Typography, in custom fonts, defines hierarchy with varied weights and micro-adjusted letter-spacing, providing a crisp, technical yet artistic feel. Interaction elements are ghost-like, relying on subtle borders and color shifts rather than filled states. The overall impression is one of meticulous craft and understated digital elegance."
theme: "light"
industry: "design"
source_url: "https://mad.ac"
refero_style_id: "4ab90069-caed-4431-ade3-fcc44ef5e568"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520142352-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520142352-thumb.jpg"
extracted_at: "2026-04-30T03:36:02.203Z"
---

# MAD — Style Reference

> Pixel-perfect Monochrome Precision

**Theme:** light

**Industry:** design

MAD's visual identity is a study in muted intensity, emphasizing a monochromatic, pixel-precise aesthetic. Typography, in custom fonts, defines hierarchy with varied weights and micro-adjusted letter-spacing, providing a crisp, technical yet artistic feel. Interaction elements are ghost-like, relying on subtle borders and color shifts rather than filled states. The overall impression is one of meticulous craft and understated digital elegance.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Stormy Ash | #111313 | `--color-stormy-ash` | Primary text, icon fill, active button borders, pixel art elements — a grounding dark tone against light surfaces |
| Cloud Canvas | #d4d8d8 | `--color-cloud-canvas` | Page background, primary surface color — a soft, almost white base |
| Muted Steel | #4b5353 | `--color-muted-steel` | Secondary text, link text, subtle borders, inactive elements — a mid-tone gray for supporting information |
| Deep Space | #000000 | `--color-deep-space` | Decorative icon black, text color on high contrast backgrounds |

## Tokens — Typography

### ABCWalterNeue

- **Token:** `--font-abcwalterneue`
- **Substitute:** Inter
- **Weights:** 500, 560, 740
- **Sizes:** 12px, 14px, 18px
- **Line heights:** 1.00, 1.10
- **Letter spacing:** -0.0270em at 18px, -0.0230em at 14px, -0.0180em at 12px
- **Role:** Primary headings, body text, and navigation items. Its varied weights and negative letter-spacing contribute to a precise, editorial feel. Use 1.0 line height for tight, stacked headers and 1.1 for readable body copy.

### InputMono

- **Token:** `--font-inputmono`
- **Substitute:** IBM Plex Mono
- **Weights:** 500
- **Sizes:** 14px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.0230em
- **Role:** Used for specific functional text like interactive elements and code-like displays. Its monospace nature provides a technical, structured counterpoint to the primary typeface.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1 | -0.216px | `--text-caption` |
| body | 14px | 1.1 | -0.322px | `--text-body` |
| heading | 18px | 1 | -0.486px | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-72 | 72px | `--spacing-72` |

### Border Radius

| Element | Value |
| --- | --- |
| nav | 4px |
| other | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 72px |
| cardPadding | 0px |
| elementGap | 4px |

## Components

### Navigation Link (Active)

**Role:** Interactive text link, primarily for navigation.

Text in ABCWalterNeue, 14px, weight 500, color Stormy Ash (#111313), with a 0.5px border-top in Stormy Ash, 2px padding top/bottom and 6px left/right. Negative letter spacing at -0.023em.

### Navigation Link (Default)

**Role:** Interactive text link, primarily for navigation.

Text in ABCWalterNeue, 14px, weight 500, color Muted Steel (#4b5353), with no visible border. 2px padding top/bottom and 6px left/right. Negative letter spacing at -0.023em.

### Ghost Button

**Role:** Clickable action with minimal visual footprint.

Transparent background with a 1px Stormy Ash (#111313) border. Text in Stormy Ash, InputMono, 14px, weight 500, letter-spacing -0.023em. 2px padding top/bottom and 6px left/right. Radius 0px.

### Information Card

**Role:** Display descriptive content with a distinct visual boundary.

Transparent background, no box shadow, no borders. Content inside is typically 14px ABCWalterNeue, weight 500, color Stormy Ash (#111313). Radius 0px. Padding 0px.

## Do's and Don'ts

### Do

- Prioritize Stormy Ash (#111313) for primary text and interactive elements against Cloud Canvas (#d4d8d8) for maximal contrast and digital sharpness.
- Use ABCWalterNeue for all primary brand communication, varying its weights (500, 560, 740) to establish visual hierarchy without introducing new typefaces.
- Apply specific negative letter-spacing values (-0.0270em, -0.0230em, -0.0180em) to maintain the precise, tight typographic aesthetic.
- Maintain a compact density with element gaps typically at 4px and section gaps at 72px to create clear visual separation.
- Implement interactive states using subtle borders in Stormy Ash (#111313) or color shifts to Muted Steel (#4b5353), avoiding solid background fills for general buttons.
- Use radius 0px for all button-like components to maintain a stark, precise aesthetic, except where 4px is explicitly specified for internal navigation elements or 8px for specific 'other' components.

### Don't

- Avoid using saturated accent colors; the palette is strictly monochromatic with Stormy Ash, Cloud Canvas, and Muted Steel.
- Do not introduce new fonts; the system relies exclusively on ABCWalterNeue and InputMono.
- Do not use generic padding or margins; adhere to the defined 2px, 4px, 6px, and 72px units for consistent rhythm.
- Do not apply soft shadows, gradients, or rounded corners beyond the specified radii of 0px, 4px, and 8px, as this contradicts the crisp, pixel-perfect feel.
- Avoid large imagery or decorative elements that disrupt the text-dominant, monochromatic, and structured layout.
- Do not use block-style buttons with solid backgrounds for primary actions; prefer ghost buttons with borders or text-based links.
- Never use line heights other than 1.0 or 1.1; they are reserved for specific typographic use cases.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Cloud Canvas | #d4d8d8 | Dominant page background and foundational surface. |
| 1 | Stormy Ash Accent | #111313 | Used sparingly as a background for interactive or focused elements, creating high contrast. |

## Imagery

The site uses minimal imagery, focusing on pixel-art style custom icons and a stylized, noisy signature graphic. If photography or richer graphics were introduced, they would need to align with a stark, high-contrast, possibly monochromatic or duotone treatment to maintain the system's austere, digital craft aesthetic. Icons are filled, pixel-based, and black (#000000) or Stormy Ash (#111313) on a light background. Imagery serves a decorative, conceptual role rather than illustrative or product showcase, emphasizing minimalism.

## Layout

The page primarily uses a full-bleed layout for the main content area, with a strong implied central axis for navigation elements. The hero section is characterized by centered textual content and prominent pixel-art icons. Sections are visually distinct through consistent vertical spacing (72px section gap) rather than alternating background bands. Content arrangement is typically centered or implicitly aligned, fostering a sense of balance. Navigation is provided via a minimalist top bar with pixel-icon links.

## Similar Brands

- **Are.na** — Monochromatic palette, text-heavy UI, and a focus on precise typographic presentation.
- **Babel / Design Systems** — Heavy reliance on custom monospaced fonts and a stark, almost brutalist approach to layout and component design.
- **Certain graphic studios in the 90s** — A pixel-art aesthetic and stark, high-contrast monochromatic design.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-stormy-ash: #111313;
  --color-cloud-canvas: #d4d8d8;
  --color-muted-steel: #4b5353;
  --color-deep-space: #000000;
  --font-abcwalterneue: 'ABCWalterNeue', Inter;
  --font-inputmono: 'InputMono', IBM Plex Mono;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.216px;
  --text-body: 14px;
  --leading-body: 1.1;
  --tracking-body: -0.322px;
  --text-heading: 18px;
  --leading-heading: 1;
  --tracking-heading: -0.486px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-72: 72px;
  --radius-nav: 4px;
  --radius-other: 8px;
  --surface-cloud-canvas: #d4d8d8;
  --surface-stormy-ash-accent: #111313;
}
```

### Tailwind v4

```css
@theme {
  --color-stormy-ash: #111313;
  --color-cloud-canvas: #d4d8d8;
  --color-muted-steel: #4b5353;
  --color-deep-space: #000000;
  --font-abcwalterneue: 'ABCWalterNeue', Inter;
  --font-inputmono: 'InputMono', IBM Plex Mono;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.216px;
  --text-body: 14px;
  --leading-body: 1.1;
  --tracking-body: -0.322px;
  --text-heading: 18px;
  --leading-heading: 1;
  --tracking-heading: -0.486px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-72: 72px;
  --radius-nav: 4px;
  --radius-other: 8px;
  --surface-cloud-canvas: #d4d8d8;
  --surface-stormy-ash-accent: #111313;
}
```
