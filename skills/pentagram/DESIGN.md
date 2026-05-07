---
version: alpha
name: "Pentagram"
description: "Pentagram employs a rigorous, authoritative visual aesthetic characterized by high contrast neutrals and a precise typographic hierarchy. The design emphasizes clarity through stark monochromatic palettes, sharp edges, and minimal ornamentation. Components are typically unstyled or outlined, maintaining a lightweight feel, with subtle interactive states. This approach projects a serious, intellectual, and focused brand presence."
theme: "light"
industry: "design"
source_url: "https://pentagram.com"
refero_style_id: "86b56f02-57da-48a1-a647-fda9bbdf2c97"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509127559-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509127559-thumb.jpg"
extracted_at: "2026-04-30T00:32:38.640Z"
---

# Pentagram — Style Reference

> Architectural Drafting on Blueprint

**Theme:** light

**Industry:** design

Pentagram employs a rigorous, authoritative visual aesthetic characterized by high contrast neutrals and a precise typographic hierarchy. The design emphasizes clarity through stark monochromatic palettes, sharp edges, and minimal ornamentation. Components are typically unstyled or outlined, maintaining a lightweight feel, with subtle interactive states. This approach projects a serious, intellectual, and focused brand presence.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #1a1a1a | `--color-midnight-ink` | Primary text, darker borders, subtle background tints on neutral elements. Establishes a highly legible, sober tone |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, and strong contrast text on darker elements |
| Stone Gray | #8c8c8c | `--color-stone-gray` | Muted secondary text, subtle decorative borders, footer text. Provides a softer contrast than primary text |
| Pitch Black | #000000 | `--color-pitch-black` | Section backgrounds, filled action button backgrounds, card background for prominent content. Serves as a strong visual anchor |
| Charcoal | #222222 | `--color-charcoal` | Darker background variations, input fields on dark themes. A soft black alternative |
| Silver Mist | #e3e4e5 | `--color-silver-mist` | Subtle background for UI elements, light dividers |
| Deep Graphite | #333333 | `--color-deep-graphite` | Card borders, subtle dividers. Mid-tone gray for structural elements |
| Soft Stone | #767676 | `--color-soft-stone` | Iconography, muted headings, subtle borders. A slightly warmer gray for less emphasis |
| Pentagram Blue | #007aff | `--color-pentagram-blue` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |

## Tokens — Typography

### Plain

- **Token:** `--font-plain`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 400, 500
- **Sizes:** 13px, 16px, 19px, 27px, 32px, 52px
- **Line heights:** 1.00, 1.05, 1.19, 1.20, 1.25, 1.32, 1.88
- **Letter spacing:** -0.0200em, -0.0100em
- **OpenType features:** "kern"; "case"
- **Role:** The primary typeface for all textual content, including headings, body text, navigation, and buttons. Its clean, sans-serif design and varied weights maintain legibility and a professional tone across different scales. Tight letter-spacing contributes to its compact, efficient feel, particularly in larger sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.32 | -0.26px | `--text-caption` |
| body | 16px | 1.25 | -0.16px | `--text-body` |
| subheading | 19px | 1.2 | -0.19px | `--text-subheading` |
| heading | 27px | 1.19 | -0.54px | `--text-heading` |
| heading-lg | 32px | 1.05 | -0.64px | `--text-heading-lg` |
| display | 52px | 1 | -1.04px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| buttons | 4px |
| default | 4px |
| pillButtons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1728px |
| sectionGap | 96px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Ghost Button Inverse

**Role:** Interactive elements for secondary actions or navigation.

Text: Midnight Ink (#1a1a1a), Background: Canvas White (#ffffff), Border: 1px solid Midnight Ink (#1a1a1a). Padding: 8px vertical, 24px horizontal. Radius: 0px.

### Pill Button Inverse

**Role:** Small, contained labels or filters.

Text: Midnight Ink (#1a1a1a), Background: Canvas White (#ffffff). Radius: 9999px. Minimal padding around text.

### Soft Tag Button

**Role:** Categorization or filter tags with a subtle background.

Text: Midnight Ink (#1a1a1a), Background: rgba(0, 0, 0, 0.07). Padding: 6px vertical, 8px horizontal. Radius: 4px.

### Filled Action Button

**Role:** Primary calls to action with high visual weight.

Text: Canvas White (#ffffff), Background: Pitch Black (#000000). Border: 1px solid Canvas White (#ffffff). Padding: 7px vertical. Radius: 4px. No horizontal padding, as it's designed for full-bleed or content-adaptive width.

### Clear Card

**Role:** Container for content where the background is part of the overall page design.

Background: transparent (rgba(0,0,0,0)). No border or shadow. Radius: 0px. Padding: 0px. Used for visual content grids.

### Project Detail Card

**Role:** Structured content blocks for individual projects.

Background: Pitch Black (#000000). No border or shadow. Radius: 8px. Padding: 24px on all sides. Used for displaying project previews.

### Dark Input Field

**Role:** User input fields on darker backgrounds.

Text: Canvas White (#ffffff), Background: Charcoal (#222222). Border: 1px solid Canvas White (#ffffff). Radius: 0px. Padding: 0px. Typically full width for inline text input.

## Do's and Don'ts

### Do

- Prioritize high contrast between text and background using only Midnight Ink (#1a1a1a) on Canvas White (#ffffff) or Canvas White (#ffffff) on Pitch Black (#000000).
- Maintain geometric precision by using 0px radius for primary containers and text boundaries, reserving 4px and 8px for specific button and card elements.
- Use Plain typeface with 'kern' and 'case' font features for all typography to ensure visual consistency and tight letter-spacing.
- Apply Pitch Black (#000000) for hero sections and full-width content blocks to create strong visual anchors and differentiate sections.
- Use a default padding of 8px around most elements to maintain a sense of order and density.
- Employ the Pill Button Inverse (9999px radius) sparingly for distinctive, small, content-agnostic labels or filters.
- Ensure all interactive elements have a clear hover/active state, even if implied by color change or subtle border adjustment, not just an accent color.

### Don't

- Avoid decorative shadows or complex gradients; the design relies on flat surfaces and direct contrast.
- Do not introduce new color hues; strictly adhere to the monochromatic palette with the limited accent of Pentagram Blue (#007aff) for highly interactive components.
- Do not use generic system fonts; always utilize 'Plain' with its specific letter spacing and font features.
- Do not deviate from the established border radii; avoid rounded corners on elements not explicitly defined (buttons, cards).
- Avoid sparse layouts with excessive whitespace; the density is 'compact', implying efficient use of space.
- Do not create filled buttons in colors other than Pitch Black (#000000); other buttons are ghost or soft-background.
- Do not use type tracking wider than the defined values; the system leans into tight letter-spacing to reinforce its precise aesthetic.

## Imagery

The imagery features high-quality photography as visual showcases for projects, often full-bleed or contained within structured blocks. Product shots and architectural photography are common, meticulously framed and lit, often revealing textures and built environments. There's an absence of lifestyle photography, focusing instead on the visual output of design work itself. Icons, when present, are minimal, outlined, and monochromatic, seamlessly integrating with the UI without adding color. Imagery is primarily explanatory, showcasing project outcomes rather than decorative atmosphere, often presented framed within distinct cards or sections to isolate one project from another.

## Layout

The page structure employs a max-width contained layout at 1728px, fostering a focused content experience within generous margins. The hero section is full-bleed, often featuring large-scale photography with overlaid minimal text. Section rhythm is driven by alternating Pitch Black (#000000) and Canvas White (#ffffff) backgrounds, creating clear visual segmentation without explicit dividers. Content is largely arranged in a grid system, ranging from 2-column text/image layouts to dense 3-column card grids for project features, maintaining consistent 24px gutters. The layout can switch to full-width horizontal scrolling display for certain content blocks (not shown in screenshots but implied by component usage). Navigation is a sticky top bar, minimal and unadorned, providing essential links.

## Similar Brands

- **AIGA** — Similar focus on strict typographic hierarchies, grid-based layouts, and a predominantly monochrome palette to showcase design work.
- **Paula Scher portfolio** — Emphasizes large, impactful typography and a clean, direct presentation of projects with minimal visual distraction.
- **Manual (design agency)** — Shares the use of strong contrast, clear content blocks, and a professional, uncluttered aesthetic for a design-focused audience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #1a1a1a;
  --color-canvas-white: #ffffff;
  --color-stone-gray: #8c8c8c;
  --color-pitch-black: #000000;
  --color-charcoal: #222222;
  --color-silver-mist: #e3e4e5;
  --color-deep-graphite: #333333;
  --color-soft-stone: #767676;
  --color-pentagram-blue: #007aff;
  --font-plain: 'Plain', Arial, Helvetica, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.32;
  --tracking-caption: -0.26px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: -0.16px;
  --text-subheading: 19px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.19px;
  --text-heading: 27px;
  --leading-heading: 1.19;
  --tracking-heading: -0.54px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.64px;
  --text-display: 52px;
  --leading-display: 1;
  --tracking-display: -1.04px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-96: 96px;
  --radius-cards: 8px;
  --radius-buttons: 4px;
  --radius-default: 4px;
  --radius-pillbuttons: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #1a1a1a;
  --color-canvas-white: #ffffff;
  --color-stone-gray: #8c8c8c;
  --color-pitch-black: #000000;
  --color-charcoal: #222222;
  --color-silver-mist: #e3e4e5;
  --color-deep-graphite: #333333;
  --color-soft-stone: #767676;
  --color-pentagram-blue: #007aff;
  --font-plain: 'Plain', Arial, Helvetica, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.32;
  --tracking-caption: -0.26px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: -0.16px;
  --text-subheading: 19px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.19px;
  --text-heading: 27px;
  --leading-heading: 1.19;
  --tracking-heading: -0.54px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.64px;
  --text-display: 52px;
  --leading-display: 1;
  --tracking-display: -1.04px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-96: 96px;
  --radius-cards: 8px;
  --radius-buttons: 4px;
  --radius-default: 4px;
  --radius-pillbuttons: 9999px;
}
```
