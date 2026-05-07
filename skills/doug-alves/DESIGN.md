---
version: alpha
name: "Doug–Alves"
description: "Doug–Alves presents a stark, high-contrast digital portfolio. Its design language is driven by highly structured, compact typography that carves out information on a dark plane, occasionally giving way to white canvases. The interaction design emphasizes functional clarity over ornamental flourishes, using subtle transitions and strong typographic scale to create visual rhythm."
theme: "light"
industry: "design"
source_url: "https://dougalves.work"
refero_style_id: "24c54bfb-959d-4ca3-b274-e76ba823f3c0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521265424-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521265424-thumb.jpg"
extracted_at: "2026-04-30T03:54:44.201Z"
---

# Doug–Alves — Style Reference

> Type-driven architectural blueprint

**Theme:** light

**Industry:** design

Doug–Alves presents a stark, high-contrast digital portfolio. Its design language is driven by highly structured, compact typography that carves out information on a dark plane, occasionally giving way to white canvases. The interaction design emphasizes functional clarity over ornamental flourishes, using subtle transitions and strong typographic scale to create visual rhythm.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #282828 | `--color-ink` | Primary text, core UI elements, canvas background for information sections |
| Canvas | #ffffff | `--color-canvas` | Main page background, content cards, and occasional text against dark backgrounds |
| Deep Space | #000000 | `--color-deep-space` | Most prominent background for primary text, subtle borders, and fills for certain icons |
| Charcoal | #333333 | `--color-charcoal` | Secondary text, subheadings, and borders within content areas |

## Tokens — Typography

### wtqc

- **Token:** `--font-wtqc`
- **Substitute:** Arial, sans-serif
- **Weights:** 300, 400
- **Sizes:** 12px, 28px, 72px, 197px
- **Line heights:** 1.00, 1.04, 1.29, 1.33
- **Letter spacing:** -0.0330em at 197px, -0.0210em at 72px, -0.0140em at 28px, -0.0030em at 12px
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Display headlines and subheadings. The extreme letter-spacing and varied weights create a distinctive, impactful and architectural feel, especially the thin 300 weight for large headings.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Helvetica Neue, Arial, sans-serif
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 0.89, 2.00
- **Letter spacing:** normal
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Primary body text, used for detailed descriptions and longer content blocks. Its neutral tone supports the minimal aesthetic.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** Arial, sans-serif
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Utility text, labels, and smaller navigational elements. Provides system-level readability.

### Roboto

- **Token:** `--font-roboto`
- **Substitute:** Arial, sans-serif
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.33
- **Letter spacing:** normal
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Smallest supporting text, captions, and fine print. Used sparingly for compact information.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.33 | -0.003px | `--text-caption` |
| body | 18px | 2 | 0px | `--text-body` |
| subheading | 28px | 1.04 | -0.014px | `--text-subheading` |
| heading | 72px | 1.29 | -0.021px | `--text-heading` |
| display | 197px | 1 | -0.033px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-265 | 265px | `--spacing-265` |

### Border Radius

| Element | Value |
| --- | --- |
| other | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 0px |
| elementGap | 24px |

## Components

### Information Card Group

**Role:** Container for related text and links, often appearing in horizontal grids.

Transparent background, 0px border radius, no box shadow. Content relies on strong typography and layout for separation. Text uses Ink (#282828) or Charcoal (#333333).

### Text Link

**Role:** Interactive text elements.

wtqc font family, various sizes and weights. Text color is Ink (#282828) or Canvas (#ffffff) depending on background. Underlined on hover.

### Header Title

**Role:** Prominent page titles and section headers.

wtqc font family, weight 300 or 400. Sizes range from 28px to 197px with significant negative letter-spacing for a modern, architectural feel. Color is Ink (#282828) or Canvas (#ffffff).

## Do's and Don'ts

### Do

- Prioritize wtqc font family for all primary headings, leveraging its strong letter-spacing and weight variations for visual impact.
- Maintain a strict color palette of Ink (#282828) for most text and dark backgrounds, and Canvas (#ffffff) for light canvases and contrasting text.
- Use 0px border-radius for informational cards and sections, allowing typography and internal spacing to define boundaries.
- Apply precise letter-spacing values to wtqc typography at all sizes, especially for large headings, to preserve its distinctive crispness.
- Employ the compact Inter font for body text to maintain density and readability within content blocks.

### Don't

- Avoid decorative gradients or vivid colors; the system relies on high contrast and typographic hierarchy.
- Do not introduce box-shadows on cards or standard interface elements; maintain a flat, architectural surface aesthetic.
- Refrain from using common rounded button styles; interactive elements are primarily text-based or minimal-border outlines.
- Do not deviate from the defined letter-spacing values for wtqc; this is a signature characteristic of the branding.
- Avoid excessive whitespace; the design is compact, leveraging density to present information efficiently.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Deep Space Canvas | #000000 | Base background for hero sections and main navigation. |
| 1 | Ink Interface | #282828 | Primary background for informational sections and interactive areas. |
| 2 | White Canvas | #ffffff | Background for detailed content pages and card-like containers. |

## Imagery

This design system primarily relies on crisp, functional UI elements rather than prominent imagery. When visuals are present, they are either abstract and minimal (like the image of a binder with text) or highly focused product-like shots. Imagery serves an explanatory or showcase role, not decorative atmosphere. Photography is high-key, product-focused, and tightly cropped. Icons are not explicitly defined in the data but can be inferred as minimal and functional, likely monochromatic to match the system's overall restraint. The density is text-dominant with visuals supporting the content, not dictating the layout.

## Layout

The page structure balances full-bleed dark sections with contained, maximal-width light sections. The initial hero pattern features a monumental, centered headline against a dark background. Content sections flow with a consistent vertical rhythm, lacking overt visual dividers between logically grouped information blocks. Content arrangement often appears in a grid-like or tabular structure, particularly for biographical and experience details. There is no rigid max-width for the entire page; some elements stretch edge-to-edge while others are implicitly contained by text width. Navigation is minimal and integrated into the footer-like areas, with links existing as part of information groups rather than a distinct, persistent header.

## Similar Brands

- **Huge Inc.** — Employs high-contrast typography, a monochromatic palette, and a focus on clean, architectural layouts.
- **Pentagram** — Showcases portfolio work with a strong emphasis on typographic details, often with minimal imagery and high contrast.
- **Kikk.be (design conference)** — Uses large, impactful typography, structured content blocks, and a dark/light alternating background for rhythm.
- **Build in Public** — Minimalist portfolio style with a strong focus on text hierarchy, precise spacing, and a limited color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #282828;
  --color-canvas: #ffffff;
  --color-deep-space: #000000;
  --color-charcoal: #333333;
  --font-wtqc: 'wtqc', Arial, sans-serif;
  --font-inter: 'Inter', Helvetica Neue, Arial, sans-serif;
  --font-apple-system: '-apple-system', Arial, sans-serif;
  --font-roboto: 'Roboto', Arial, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.003px;
  --text-body: 18px;
  --leading-body: 2;
  --tracking-body: 0px;
  --text-subheading: 28px;
  --leading-subheading: 1.04;
  --tracking-subheading: -0.014px;
  --text-heading: 72px;
  --leading-heading: 1.29;
  --tracking-heading: -0.021px;
  --text-display: 197px;
  --leading-display: 1;
  --tracking-display: -0.033px;
  --spacing-0: 0px;
  --spacing-24: 24px;
  --spacing-64: 64px;
  --spacing-265: 265px;
  --radius-other: 20px;
  --surface-deep-space-canvas: #000000;
  --surface-ink-interface: #282828;
  --surface-white-canvas: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #282828;
  --color-canvas: #ffffff;
  --color-deep-space: #000000;
  --color-charcoal: #333333;
  --font-wtqc: 'wtqc', Arial, sans-serif;
  --font-inter: 'Inter', Helvetica Neue, Arial, sans-serif;
  --font-apple-system: '-apple-system', Arial, sans-serif;
  --font-roboto: 'Roboto', Arial, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.003px;
  --text-body: 18px;
  --leading-body: 2;
  --tracking-body: 0px;
  --text-subheading: 28px;
  --leading-subheading: 1.04;
  --tracking-subheading: -0.014px;
  --text-heading: 72px;
  --leading-heading: 1.29;
  --tracking-heading: -0.021px;
  --text-display: 197px;
  --leading-display: 1;
  --tracking-display: -0.033px;
  --spacing-0: 0px;
  --spacing-24: 24px;
  --spacing-64: 64px;
  --spacing-265: 265px;
  --radius-other: 20px;
  --surface-deep-space-canvas: #000000;
  --surface-ink-interface: #282828;
  --surface-white-canvas: #ffffff;
}
```
