---
version: alpha
name: "Magda Reyman"
description: "Magda Reyman's design system evokes a minimalist, high-contrast digital notebook. Typography is the primary visual element, eschewing colorful branding for stark black and white text against a soft, light gray canvas. Layout prioritizes clarity and directness, with a strong emphasis on content over decorative elements. Visual weight comes from precise typographic choices and close-cropped product imagery within iPhone mockups, suggesting a focus on functional, UI-centric design."
theme: "light"
industry: "design"
source_url: "https://magdareyman.com"
refero_style_id: "d60499c7-9e48-4bdf-8194-c168bb274c9e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519066872-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519066872-thumb.jpg"
extracted_at: "2026-04-30T03:18:04.062Z"
---

# Magda Reyman — Style Reference

> High-contrast digital notebook.

**Theme:** light

**Industry:** design

Magda Reyman's design system evokes a minimalist, high-contrast digital notebook. Typography is the primary visual element, eschewing colorful branding for stark black and white text against a soft, light gray canvas. Layout prioritizes clarity and directness, with a strong emphasis on content over decorative elements. Visual weight comes from precise typographic choices and close-cropped product imagery within iPhone mockups, suggesting a focus on functional, UI-centric design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Fog | #c0c0c0 | `--color-canvas-fog` | Primary page background, neutral base |
| Surface Frost | #ffffff | `--color-surface-frost` | Card backgrounds, elevated surface treatments within the UI |
| Text Charcoal | #090909 | `--color-text-charcoal` | Primary body text, link text, strong headings. Creates strong contrast against light backgrounds |
| Text Graphite | #282828 | `--color-text-graphite` | Secondary text, subtle details, and borders |
| Text Ink | #000000 | `--color-text-ink` | Bold text and high-emphasis elements, typically used sparingly for maximum impact |

## Tokens — Typography

### custom_30190

- **Token:** `--font-custom-30190`
- **Weights:** 400, 700
- **Sizes:** 8px, 24px, 40px
- **Line heights:** 1.00, 1.25, 1.58
- **Letter spacing:** 0.0250em
- **OpenType features:** 'liga'
- **Role:** Headings, body text, and links. The consistent tracking across sizes is a signature choice creating a technical, precise feel. Exact substitute unknown without brand guidance.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** System Font
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **OpenType features:** 'dlig' 0, 'hlig' 0, 'liga' 0, 'rlig' 0, 'smcp' 0
- **Role:** Secondary short text and utility information.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.67
- **Letter spacing:** normal
- **OpenType features:** 'dlig' 0, 'hlig' 0, 'liga' 0, 'rlig' 0, 'smcp' 0
- **Role:** Paragraph text for readability on longer blocks.

### custom_351

- **Token:** `--font-custom-351`
- **Weights:** 400
- **Sizes:** 24px
- **Line heights:** 1.25
- **Letter spacing:** normal
- **OpenType features:** 'dlig' 0, 'hlig' 0, 'liga' 0, 'rlig' 0, 'smcp' 0
- **Role:** Specific heading elements. Exact substitute unknown without brand guidance.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-16 | 16px | `--spacing-16` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| other_elements | 32px |
| elements_circular | 162px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 0px |

## Components

### Rectangular Card

**Role:** Content container.

Background is Surface Frost (#ffffff) with 0px border-radius and no shadow. No intrinsic padding, content defines internal spacing.

### Circular Element

**Role:** Decorative or functional elements with extreme curvature.

Uses a 162px border-radius, often with transparent background (rgba(9, 9, 9, 0)) and no shadow, allowing elements to appear as if 'ghosted' or purely textual.

## Do's and Don'ts

### Do

- Prioritize text as the primary visual communication tool, using Text Charcoal (#090909) on Surface Frost (#ffffff) or Canvas Fog (#c0c0c0) for high contrast.
- Use a 0px border-radius for main content cards and containers to maintain a sharp, angular aesthetic.
- Apply 162px border-radius to create distinctly circular or pill-shaped decorative elements for contrast.
- Maintain a compact density, allowing typography to breathe without excessive white space around text blocks; use 1px or 16px vertical padding where defined.
- Utilize 'custom_30190' with its precise 0.0250em letter-spacing for all headings and emphasis to establish a consistent, technical tone.
- Keep backgrounds and surfaces in the achromatic neutral palette (Canvas Fog, Surface Frost) to keep the focus on content and typography.
- Ensure all text, especially links, is in Text Charcoal (#090909) for optimal readability and a consistent dark-on-light appearance.

### Don't

- Do not introduce color into primary UI elements such as backgrounds, buttons, or navigation; reserve color strictly for content if at all.
- Avoid decorative shadows or complex gradients on UI components; elevation is achieved through distinct color surfaces or sharp typographic hierarchy.
- Do not use generic system fonts for prominent headings or body text where a custom font is specified; the precise letter-spacing of 'custom_30190' is key.
- Refrain from varying border-radius widely; stick to 0px for main containers and 162px for specialty circular elements.
- Do not embed imagery haphazardly; product screenshots should be tightly contained and presented cleanly, as seen in the iPhone mockups.
- Avoid large, sparse sections; content should feel intentional and dense, with tight vertical rhythm.
- Do not use multiple font families for similar purposes; the typographic system is minimal and direct.

## Imagery

Imagery consists primarily of clean, contained product screenshots (specifically, app interfaces within iPhone mockups) without external context or lifestyle elements. They are used as illustrative content, not decorative atmosphere, and are tightly integrated into the UI. Icons are typically solid and monochromatic, used functionally.

## Layout

The page uses a full-bleed model without a defined `pageMaxWidth`, creating expansive, content-first sections. The hero section features centered, strong typographic statements on the light gray background. Content often arranges in alternating text and visual blocks, with text-dominant areas and specific product displays embedded within the flow. Vertical spacing is consistent but compact, focusing on direct communication rather than spacious visual breaks. Navigation is a minimal top bar.

## Similar Brands

- **Awwwards-featured portfolio sites** — High-contrast typography-driven aesthetic with minimal color and sharp, deliberate layout choices.
- **Linear** — Emphasis on sharp lines, high contrast, and a lack of decorative flourish, prioritizing functional clarity.
- **Stripe (early branding)** — Clean, technical aesthetic with strong typography and controlled use of visual hierarchy without complex gradients or shadows.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-fog: #c0c0c0;
  --color-surface-frost: #ffffff;
  --color-text-charcoal: #090909;
  --color-text-graphite: #282828;
  --color-text-ink: #000000;
  --font-custom-30190: 'custom_30190', ui-sans-serif, system-ui, sans-serif;
  --font-apple-system: '-apple-system', System Font;
  --font-inter: 'Inter', Inter;
  --font-custom-351: 'custom_351', ui-sans-serif, system-ui, sans-serif;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --radius-cards: 0px;
  --radius-other-elements: 32px;
  --radius-elements-circular: 162px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-fog: #c0c0c0;
  --color-surface-frost: #ffffff;
  --color-text-charcoal: #090909;
  --color-text-graphite: #282828;
  --color-text-ink: #000000;
  --font-custom-30190: 'custom_30190', ui-sans-serif, system-ui, sans-serif;
  --font-apple-system: '-apple-system', System Font;
  --font-inter: 'Inter', Inter;
  --font-custom-351: 'custom_351', ui-sans-serif, system-ui, sans-serif;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --radius-cards: 0px;
  --radius-other-elements: 32px;
  --radius-elements-circular: 162px;
}
```
