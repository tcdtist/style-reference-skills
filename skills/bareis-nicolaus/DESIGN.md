---
version: alpha
name: "Bareis + Nicolaus"
description: "Bareis + Nicolaus employs a high-contrast, starkly monochrome aesthetic defined by a dominant black canvas and pure white typography. The visual focus is on precise typographic hierarchy and minimal, utilitarian components. Interactivity is signaled through inverted color states or simple bordering, maintaining a graphic, almost print-like presentation with deep, comfortable spacing that allows elements to breathe."
theme: "dark"
industry: "agency"
source_url: "https://www.bareis-nicolaus.com"
refero_style_id: "e80c5b4a-fd03-460e-a577-49928a4ab5db"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512921961-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512921961-thumb.jpg"
extracted_at: "2026-04-30T01:36:13.844Z"
---

# Bareis + Nicolaus — Style Reference

> Graphic Monochrome Canvas: crisp, high-contrast, typographic art.

**Theme:** dark

**Industry:** agency

Bareis + Nicolaus employs a high-contrast, starkly monochrome aesthetic defined by a dominant black canvas and pure white typography. The visual focus is on precise typographic hierarchy and minimal, utilitarian components. Interactivity is signaled through inverted color states or simple bordering, maintaining a graphic, almost print-like presentation with deep, comfortable spacing that allows elements to breathe.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Black | #000000 | `--color-canvas-black` | Page background, primary button fill, interactive link borders — establishing a high-contrast dark theme |
| Arctic White | #ffffff | `--color-arctic-white` | Primary text color, button and navigation borders, active button fill — serves as the primary contrasting element against Canvas Black |
| Subtle Gray | #a9a9a9 | `--color-subtle-gray` | Secondary text and muted borders — offering a slight de-emphasis while maintaining readability on Canvas Black |

## Tokens — Typography

### Lausanne

- **Token:** `--font-lausanne`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 24px, 72px
- **Line heights:** 1.00, 1.20
- **Role:** Headings, body text, and interactive elements – a custom typeface providing a strong, modern, and distinct voice, critical for the brand's graphic identity.

### Victor Serif

- **Token:** `--font-victor-serif`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 24px
- **Line heights:** 1.20
- **Role:** Decorative or specific content text – a custom serif font used sparingly to add a subtle contrasting texture.

### Black Tie

- **Token:** `--font-black-tie`
- **Substitute:** DM Mono
- **Weights:** 400
- **Sizes:** 24px
- **Line heights:** 1.00
- **Role:** Highly specific, rarely used content – a custom font reserved for unique graphic elements, emphasizing rarity.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-29 | 29px | `--spacing-29` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 120px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 721px |
| sectionGap | 29px |
| cardPadding | 13px |
| elementGap | 13px |

## Components

### Pill Button - Dark Filled

**Role:** Primary action, navigation items

Solid Canvas Black background with Arctic White text and a 2px Arctic White border, 120px border radius for a distinct pill shape. Padding is 12px vertical, 13.2px horizontal.

### Pill Button - Light Filled

**Role:** Active state or selected filter

Arctic White background with Arctic White text and a 2px Arctic White border, 120px border radius. Padding is 12px vertical, 13.2px horizontal. This button likely inverts on hover/active.

### Pill Button - Ghost

**Role:** Secondary actions, filters, navigation

Transparent background with Arctic White text and a 2px Arctic White border, 120px border radius. Padding is 12px vertical, 13.2px horizontal. Used for most interactive elements where a visual hierarchy is not needed over the background.

### Content Card - Default

**Role:** Project showcase, content containers

Transparent background with no border radius or shadow, effectively blending into the Canvas Black page background. Padding is 0px allowing content to dictate visual spacing. Contains specific project imagery and text.

### Footer Link

**Role:** Informational links in the footer

Arctic White text on Canvas Black, 2px Arctic White border on inactive state, 13px padding applied for interactive area. Text uses Lausanne font at 24px.

## Do's and Don'ts

### Do

- Prioritize Canvas Black (#000000) as the dominant background color for all primary surfaces.
- Use Arctic White (#ffffff) exclusively for primary text, borders, and active states to maintain high contrast.
- Apply a 120px border radius to all interactive elements like buttons and navigation items for a consistent 'pill' shape.
- Maintain a 2px stroke width for all borders, particularly for ghost buttons and interactive links (e.g., Arctic White on Canvas Black).
- Employ the Lausanne font for all navigational text, headings, and body copy to ensure brand consistency.
- Utilize 13px as the primary 'elementGap' between interactive components and internal card padding.

### Don't

- Avoid using saturated colors; the system relies strictly on a monochrome palette of Canvas Black, Arctic White, and Subtle Gray.
- Do not introduce shadows or elevation; surfaces are flat and blend seamlessly into the background.
- Never deviate from the 2px border width for interactive elements, as this is a core stylistic cue.
- Do not use highly decorative gradients or background images in primary UI components; the focus is on typography and clean interaction.
- Avoid arbitrary changes in border radius; the 120px value is a signature design element for interactive components.
- Do not use font weights other than 400 for any of the typefaces, as weight variation is not part of the system's expressive range.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Page Canvas | #000000 | Dominant background for the entire page, setting the dark theme. |
| 2 | Interactive Surface | #ffffff | Used for selected states of buttons and navigation, providing visual emphasis through color inversion. |

## Imagery

This system features a dynamic mix of product photography and lifestyle imagery, often cropped and presented within a full-bleed grid pattern that contrasts sharply with the typographic UI. Photography is typically vibrant and detailed, often showing close-ups or action shots. The imagery acts as the visual counterpoint to the stark, minimal UI, providing bursts of detailed, contextual information. Images are generally contained within their own visual blocks, without overlapping, and often appear as part of a two-column grid. Icons are simple, outlined, and monochromatic, matching the overall UI aesthetic.

## Layout

The page structure is a split layout: a dominant left-hand navigation and content area, set against a dynamic, image-heavy right column that showcases projects in a full-bleed manner. The left column maintains a contained max-width of 721px. Sections are visually separated by deep vertical spacing provided by a 29px section gap. The hero section is characterized by large, bold typography on the left and a prominent, full-bleed image on the right. Content within the left column is often a centered stack of typographic elements and pill-shaped filters. Navigation is a sticky top bar within the left column.

## Similar Brands

- **Kerem Suer** — High-contrast dark mode with minimal UI and a strong focus on typography and image grids.
- **Basic Type** — Monochrome palette, emphasis on custom typography, and a grid-based content presentation.
- **Build in Amsterdam** — Stark contrast, dark canvas, and a focus on large-scale typography paired with bold imagery.
- **Anthony Gribben** — Black and white visual language, oversized type, and a clean, almost 'anti-design' component approach.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-black: #000000;
  --color-arctic-white: #ffffff;
  --color-subtle-gray: #a9a9a9;
  --font-lausanne: 'Lausanne', Inter;
  --font-victor-serif: 'Victor Serif', Lora;
  --font-black-tie: 'Black Tie', DM Mono;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-29: 29px;
  --radius-all: 120px;
  --surface-page-canvas: #000000;
  --surface-interactive-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-black: #000000;
  --color-arctic-white: #ffffff;
  --color-subtle-gray: #a9a9a9;
  --font-lausanne: 'Lausanne', Inter;
  --font-victor-serif: 'Victor Serif', Lora;
  --font-black-tie: 'Black Tie', DM Mono;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-29: 29px;
  --radius-all: 120px;
  --surface-page-canvas: #000000;
  --surface-interactive-surface: #ffffff;
}
```
