---
version: alpha
name: "Norm"
description: "Norm employs a utilitarian, minimalist visual language, focusing on stark contrasts and direct communication. The design uses a limited achromatic palette, relying heavily on pure black text on clean white surfaces. Typography is a central element, with commanding display-sized text setting a precise, unornamented tone. Components are stripped down, favoring simple outlined forms and large, soft radii to provide subtle tactile warmth against the otherwise stark visual field."
theme: "light"
industry: "other"
source_url: "https://norm.store"
refero_style_id: "8d66df35-a06c-4ea9-ae8b-ab3e1c01f797"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514746585-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514746585-thumb.jpg"
extracted_at: "2026-04-30T02:05:59.357Z"
---

# Norm — Style Reference

> Architectural blueprint on white marble. Precision, clean lines, and stark mono-palette highlight a single, functional object.

**Theme:** light

**Industry:** other

Norm employs a utilitarian, minimalist visual language, focusing on stark contrasts and direct communication. The design uses a limited achromatic palette, relying heavily on pure black text on clean white surfaces. Typography is a central element, with commanding display-sized text setting a precise, unornamented tone. Components are stripped down, favoring simple outlined forms and large, soft radii to provide subtle tactile warmth against the otherwise stark visual field.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, general container backgrounds |
| Pitch Black | #000000 | `--color-pitch-black` | Primary text, prominent headings, default icon fills, active outline borders |
| Near Black | #282828 | `--color-near-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |

## Tokens — Typography

### custom_50109

- **Token:** `--font-custom-50109`
- **Weights:** 400
- **Sizes:** 16px, 24px, 48px
- **Line heights:** 1.00, 1.50, 1.56
- **Letter spacing:** -0.0170em at 48px, -0.0080em at 24px, normal at 16px
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Primary headings, subheadings, and key marketing statements. The limited weights coupled with large, precise sizing creates a strong, no-nonsense voice.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Interface text, navigation links, and small functional labels. A system font ensures clarity and efficiency for utility content.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter Sans
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.33
- **Letter spacing:** normal
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Supportive body text. Its inclusion suggests a slight textural variation for longer passages without deviating from the overall sparse aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1 | 0px | `--text-body` |
| body-lg | 18px | 1.33 | 0px | `--text-body-lg` |
| heading | 24px | 1.5 | -0.48px | `--text-heading` |
| display | 48px | 1.56 | -0.816px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 57px |
| buttons | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 0px |
| elementGap | 16px |

## Components

### Ghost Button Large

**Role:** Secondary calls to action and navigational links within content blocks. Its transparent background and thick border suggest a less intrusive action.

Text: Pitch Black (#000000), custom_50109 400, 16px. Background: Canvas White (#ffffff). Border: 0.5px solid Pitch Black (#000000). Padding: 16px vertical, 24px horizontal. Corner radius: 12px.

### Ghost Button Small

**Role:** Utility links in header navigation. A compact, outlined button that provides clear interaction without visual dominance.

Text: Pitch Black (#000000), -apple-system 400, 16px. Background: Canvas White (#ffffff), Border: 0.5px solid Pitch Black (#000000). Padding: 8px vertical, 12px horizontal. Corner radius: 12px.

### Ghost Button Tag

**Role:** Informational tags or very subtle calls to action within header. The extreme radius makes it visually distinct.

Text: Pitch Black (#000000), -apple-system 400, 16px. Background: Canvas White (#ffffff). Border: 0.5px solid Pitch Black (#000000). Padding: 4px vertical, 12px horizontal. Corner radius: 57px.

### Section Divider

**Role:** Horizontal rule for content separation. Provides visual structure between sections.

Height: 0.5px. Color: Near Black (#282828).

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) as the primary background for all major content sections and surfaces.
- Use Pitch Black (#000000) for all primary body text, headlines, and calls to action text.
- Employ custom_50109 400 at 48px or 24px, with specific letter-spacing, for all prominent headings and content titles.
- Use Ghost Button styling, with a 0.5px Pitch Black (#000000) border and 12px radius, for all interactive elements.
- Apply 12px border-radius consistently to all button-like components, and 57px for small tags.
- Maintain generous negative space around content blocks, using implied section gaps of 64px.
- Apply 0.5px borders in Near Black (#282828) for subtle visual separation and detailed outlines.

### Don't

- Avoid using saturated colors; the palette is strictly achromatic.
- Do not use solid background buttons; all interactive elements should be ghosted or text-only.
- Do not introduce shadows; elevation is achieved solely through stark contrast and spacing.
- Avoid decorative imagery that competes with the product photography or text-heavy content.
- Do not deviate from the specified letter-spacing for custom_50109, especially for display sizes.
- Do not use heavy weights for typography; 400 is the only active weight in the system.
- Do not use small, tight radii; larger radii of 12px or 57px are signature elements.

## Imagery

The site's imagery is characterized by minimalist, product-focused photography under bright, even lighting. The 'Norm' desk is presented in tight crops on a pure white background, emphasizing its physical form and material without lifestyle context. There are no illustrations or abstract graphics. Icons are minimal, implied through text or simple outlined shapes. The visual language is image-scarce, with photography serving as a direct product showcase rather than decorative atmosphere, allowing text to dominate the layout's density.

## Layout

The page primarily uses a full-bleed, vertically segmented layout, alternating between large, centered text blocks and centered product imagery. Each section has a consistent vertical rhythm, with generous implied section gaps. The hero features a centered product shot above a large, centered multi-line headline. Subsequent sections also predominantly use centered stacks of text. There is no explicit grid for cards, and content is primarily a single column. Navigation is minimal, limited to a top-right utility bar with ghost buttons, suggesting a more focused, uncluttered experience.

## Similar Brands

- **Apple (product pages)** — Focus on singular product imagery on clean backgrounds, large and precise typography, and a deliberate scarcity of UI elements.
- **Field Notes** — Utilitarian design, strong reliance on typography for brand voice, and a muted, functional color palette.
- **Braun (historical product design)** — Emphasis on functional purity, minimal embellishment, and clear, legible information hierarchy over decorative elements.
- **Oura Ring** — Product-centric visuals with clean backgrounds, understated UI, and succinct messaging.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-pitch-black: #000000;
  --color-near-black: #282828;
  --font-custom-50109: 'custom_50109', ui-sans-serif, system-ui, sans-serif;
  --font-apple-system: '-apple-system', system-ui;
  --font-inter: 'Inter', Inter Sans;
  --text-body: 16px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.33;
  --tracking-body-lg: 0px;
  --text-heading: 24px;
  --leading-heading: 1.5;
  --tracking-heading: -0.48px;
  --text-display: 48px;
  --leading-display: 1.56;
  --tracking-display: -0.816px;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --spacing-64: 64px;
  --radius-tags: 57px;
  --radius-buttons: 12px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-pitch-black: #000000;
  --color-near-black: #282828;
  --font-custom-50109: 'custom_50109', ui-sans-serif, system-ui, sans-serif;
  --font-apple-system: '-apple-system', system-ui;
  --font-inter: 'Inter', Inter Sans;
  --text-body: 16px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.33;
  --tracking-body-lg: 0px;
  --text-heading: 24px;
  --leading-heading: 1.5;
  --tracking-heading: -0.48px;
  --text-display: 48px;
  --leading-display: 1.56;
  --tracking-display: -0.816px;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --spacing-64: 64px;
  --radius-tags: 57px;
  --radius-buttons: 12px;
}
```
