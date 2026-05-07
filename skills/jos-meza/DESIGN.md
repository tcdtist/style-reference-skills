---
version: alpha
name: "José Meza"
description: "José Meza presents a stark, high-contrast visual system where typography is the primary aesthetic element. The design uses an almost pure black canvas, allowing crisp white and muted gray text to define hierarchy and interaction. Spacing is generous, creating an atmosphere of spaciousness and deliberate calm. The overall impression is one of directness and essential information rather than rich ornamentation or complex layouts."
theme: "dark"
industry: "design"
source_url: "https://josemeza.info"
refero_style_id: "8321c2d1-686f-4752-9156-ea613a879b9e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517631551-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517631551-thumb.jpg"
extracted_at: "2026-04-30T02:54:08.113Z"
---

# José Meza — Style Reference

> Minimalist Dark Canvas

**Theme:** dark

**Industry:** design

José Meza presents a stark, high-contrast visual system where typography is the primary aesthetic element. The design uses an almost pure black canvas, allowing crisp white and muted gray text to define hierarchy and interaction. Spacing is generous, creating an atmosphere of spaciousness and deliberate calm. The overall impression is one of directness and essential information rather than rich ornamentation or complex layouts.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #000000 | `--color-midnight-void` | Primary page background, component backdrops — a deep, true black creates high contrast with text |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text, active navigation, headings, and outlines for ghost buttons, providing maximum readability against the dark background |
| Slate Echo | #585858 | `--color-slate-echo` | Muted text for secondary information, inactive navigation items, and subtle borders. Provides visual separation without harshness |

## Tokens — Typography

### Untitled Sans

- **Token:** `--font-untitled-sans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 43px, 97px
- **Line heights:** 1.10, 1.20
- **Letter spacing:** -0.021em at 43px, -0.023em at 97px
- **Role:** The singular typeface for all textual elements, ranging from large, impactful headlines to functional navigation links. Its clean, sans-serif form reinforces the minimalist aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 43px | 1.2 | -0.903px | `--text-body` |
| display | 97px | 1.1 | -2.231px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-60 | 60px | `--spacing-60` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1320px |
| sectionGap | 60px |
| cardPadding | 60px |
| elementGap | 60px |

## Components

### Primary Navigation Link

**Role:** Interactive text link for site navigation.

Text is Ghost White (#ffffff) using Untitled Sans, weight 400, at 43px with line-height 1.2 and letter-spacing -0.021em. On hover/active, this text remains Ghost White, and its interactive state is implied by context or system-level visual changes.

### Secondary Navigation Link

**Role:** Inactive or secondary interactive text link.

Text is Slate Echo (#585858) using Untitled Sans, weight 400, at 43px with line-height 1.2 and letter-spacing -0.021em.

### Display Headline

**Role:** Large, prominent branding or section title.

Text is Ghost White (#ffffff) using Untitled Sans, weight 400, at 97px with line-height 1.1 and letter-spacing -0.023em. Used for primary page titles or hero sections.

## Do's and Don'ts

### Do

- Prioritize Ghost White (#ffffff) for all primary text and active states against the Midnight Void (#000000) background.
- Use Slate Echo (#585858) exclusively for secondary text, inactive states, and subtle visual dividers.
- Maintain a spacious layout with a consistent 60px vertical and horizontal spacing unit between major content blocks and elements.
- Apply Untitled Sans, weight 400, for all typography, adjusting size and letter-spacing according to the type scale.
- Ensure the page content is contained within a 1320px maximum width, centered on the screen.
- Leverage the high contrast between Midnight Void and Ghost White to establish clear visual hierarchy without needing additional colors.

### Don't

- Avoid introducing any colors other than Midnight Void, Ghost White, and Slate Echo unless for specific functional or branding elements (not detected here).
- Do not use multiple font families or weights, as the system relies on a singular typeface for consistency.
- Refrain from using shadows or complex gradients; the aesthetic is flat and relies on color contrast and spacing.
- Introduce complex component structures or decorative elements that detract from the minimalist, text-focused presentation.
- Vary the letter-spacing or line-height from the defined typographic scale values for Untitled Sans.

## Imagery

This design system primarily uses a 'no imagery, pure UI' approach. The visual emphasis is entirely on typography and spaciousness. If imagery were to be introduced, it would need to align with a stark, high-contrast, minimalist aesthetic, likely involving full-bleed or tightly cropped visuals that maintain an elegant, understated presence without clashing with the dominant dark canvas and crisp white text. Icons, if present (none detected), should be monochromatic, probably outlined, with medium stroke weight, to blend seamlessly with the typographic style rather than introducing new visual complexity.

## Layout

The page adheres to a maximalist typographic hero pattern, where the primary content (name and role) is displayed prominently as large, centered text, followed by navigation links. The layout is generally contained within a 1320px maximum width, centered. Vertical rhythm is established by consistent 60px gaps, creating generous breathing room between sections and elements. The navigation is a simple vertical list of text links, suggesting a minimal structure rather than complex menus. The main interaction happens through the text itself, highlighting a content-first, direct approach.

## Similar Brands

- **Basic Apple website UI (pre-product imagery)** — Shares the use of a simple, high-contrast dark background with prominent white text for headings and navigation, prioritizing typography.
- **Certain graphic design portfolio sites** — Employs an extremely minimalist approach with large, focal type and minimal visual clutter, letting the work speak for itself.
- **Are.na** — Features a stark, high-contrast interface with a focus on textual content and navigation, often using simple black and white schemes.
- **Editorial design layouts** — Emphasizes typographic hierarchy, negative space, and large, impactful text elements over heavy graphical components.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #000000;
  --color-ghost-white: #ffffff;
  --color-slate-echo: #585858;
  --font-untitled-sans: 'Untitled Sans', Inter;
  --text-body: 43px;
  --leading-body: 1.2;
  --tracking-body: -0.903px;
  --text-display: 97px;
  --leading-display: 1.1;
  --tracking-display: -2.231px;
  --spacing-60: 60px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #000000;
  --color-ghost-white: #ffffff;
  --color-slate-echo: #585858;
  --font-untitled-sans: 'Untitled Sans', Inter;
  --text-body: 43px;
  --leading-body: 1.2;
  --tracking-body: -0.903px;
  --text-display: 97px;
  --leading-display: 1.1;
  --tracking-display: -2.231px;
  --spacing-60: 60px;
}
```
