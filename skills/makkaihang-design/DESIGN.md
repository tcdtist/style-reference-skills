---
version: alpha
name: "makkaihang design"
description: "The makkaihang design system establishes a minimal, almost invisible interface ethos. A stark charcoal canvas serves as the dominant background, providing a neutral backdrop for content. Text is a bright white, ensuring high contrast. Subtle light gray borders are used sparingly for visual segmentation rather than heavy containers. The overall aesthetic suggests an emphasis on content and unadorned presentation."
theme: "dark"
industry: "design"
source_url: "https://makkaihang.com"
refero_style_id: "adbdc8b1-be46-4d4c-a973-5022f6fd381e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512481052-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512481052-thumb.jpg"
extracted_at: "2026-04-30T01:28:14.300Z"
---

# makkaihang design — Style Reference

> Midnight canvas, silver thread

**Theme:** dark

**Industry:** design

The makkaihang design system establishes a minimal, almost invisible interface ethos. A stark charcoal canvas serves as the dominant background, providing a neutral backdrop for content. Text is a bright white, ensuring high contrast. Subtle light gray borders are used sparingly for visual segmentation rather than heavy containers. The overall aesthetic suggests an emphasis on content and unadorned presentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Carbon | #1a1a1a | `--color-carbon` | Page background (primary canvas), deeply recessed surfaces |
| Frost | #ffffff | `--color-frost` | Light text on dark surfaces, inverse labels, and high-contrast captions. Do not promote it to the primary CTA color |
| Smoke | #e5e7eb | `--color-smoke` | Hairline borders, subtle dividers, ghost button outlines — providing minimal separation on dark backgrounds |

## Tokens — Typography

### Untitled Sans

- **Token:** `--font-untitled-sans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **OpenType features:** "lnum" on, "tnum" on
- **Role:** Primary typeface for all text content, including headings, body, and navigation. Its singularity at a single weight and size reinforces the minimalist and content-focused approach.

### ui-sans-serif

- **Token:** `--font-ui-sans-serif`
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.5
- **Role:** ui-sans-serif — detected in extracted data but not described by AI

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-32 | 32px | `--spacing-32` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 0px |
| elementGap | 12px |

## Components

### Ghost Border Button

**Role:** Interactive Element

Transparent background, white text (#ffffff), and a light gray (#e5e7eb) bottom border. Used for navigation links and subtle actions. Features a 0px border-radius, emphasizing sharp, unadorned interaction points. Padding is absent.

### Naked Card

**Role:** Content container

Transparent background, no border, no shadow, and 0px border-radius. These cards serve as purely semantic groupings, relying on content and spacing for definition rather than visual affordances. No padding is applied.

## Do's and Don'ts

### Do

- Always use Carbon (#1a1a1a) for primary page backgrounds to maintain the deep, dark ambiance.
- Render all primary text in Frost (#ffffff) to ensure readability against dark surfaces.
- Employ Smoke (#e5e7eb) for all borders and subtle separators, keeping visual distractions to a minimum.
- Use Untitled Sans (or a suitable substitute) at weight 400 for all typographic elements, prioritizing content clarity over size-based hierarchy.
- Maintain 0px border-radius across all UI elements for a consistently sharp and unadorned aesthetic.
- Utilize 12px for horizontal and vertical element separation within components or content blocks.
- Apply 32px as the standard vertical spacing between distinct content sections.

### Don't

- Avoid using any vibrantly saturated colors; restrict the palette to the defined achromatic grays.
- Do not introduce shadows or elevation; surfaces should remain flat and blend with the background.
- Never use rounded corners on any UI element; the design mandates strict 0px radii.
- Refrain from altering font sizes or weights for hierarchy; rely on spacing and position for emphasis.
- Do not use background colors on buttons or cards; maintain a 'ghost' or 'naked' appearance.
- Avoid using decorative imagery or complex illustrations; the focus is on clean UI and textual content.
- Do not vary paragraph line heights; maintain the established 1.5 ratio for all body text.

## Imagery

The visual language is characterized by an absence of imagery on the page itself, relying instead on pure UI and typography. When visuals appear, as suggested by the 'Identity Book Design' content, they are likely confined to product showcases or project portfolios, presenting the work directly without decorative framing. Iconography, if present, would likely be minimal, outlined, and monochromatic, maintaining the severe aesthetic. The system is text-dominant.

## Layout

The page maintains a full-bleed, uncontained content model, with no defined `pageMaxWidth`. The headers and navigation are integrated into this full-width presentation. Content appears to be structured in blocks, with 32px vertical gaps separating major sections. The navigation and header elements are positioned at the top of the page, potentially overlapping or layering content. Minimal layout elements are used, giving the feeling of content floating on a dark canvas, with an absence of clear grid structures outside of basic vertical and horizontal spacing.

## Similar Brands

- **Are.na** — Similar focus on minimal design, achromatic palette, and content as the primary visual element.
- **Manual Studio** — Uses a stark, almost brutalist typographic approach with a subdued color scheme and emphasis on white space or dark canvases.
- **Superside** — Employs a largely monochrome interface with clean typography and minimal visual adornment, prioritizing function over decoration.
- **Read.cv** — Features a content-first design with a simple color palette, strong typographic hierarchy, and limited use of decorative elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-carbon: #1a1a1a;
  --color-frost: #ffffff;
  --color-smoke: #e5e7eb;
  --font-untitled-sans: 'Untitled Sans', Inter;
  --font-ui-sans-serif: 'ui-sans-serif', ui-sans-serif, system-ui, sans-serif;
  --spacing-0: 0px;
  --spacing-12: 12px;
  --spacing-32: 32px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-carbon: #1a1a1a;
  --color-frost: #ffffff;
  --color-smoke: #e5e7eb;
  --font-untitled-sans: 'Untitled Sans', Inter;
  --font-ui-sans-serif: 'ui-sans-serif', ui-sans-serif, system-ui, sans-serif;
  --spacing-0: 0px;
  --spacing-12: 12px;
  --spacing-32: 32px;
  --radius-none: 0px;
}
```
