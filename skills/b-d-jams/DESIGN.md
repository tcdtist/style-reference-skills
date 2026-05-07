---
version: alpha
name: "B/D® JAMS"
description: "The B/D® JAMS design system presents a clean, editorial aesthetic reminiscent of a digital zine, prioritizing spaciousness and direct typography over decorative elements. Its visual language relies on a monochrome palette of stark black text and crisp backgrounds, occasionally softened by subtle gray borders. Layouts are deliberately sparse, framing content with generous whitespace, and interactions are signaled through direct text changes rather than elaborate animations or vivid highlights. Components are minimalist, focusing on function with zero radii and transparent backgrounds."
theme: "light"
industry: "media"
source_url: "https://jams.basicagency.com"
refero_style_id: "f53d4664-017b-46d1-9336-ec555dc9022e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512467827-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512467827-thumb.jpg"
extracted_at: "2026-04-30T01:28:03.991Z"
---

# B/D® JAMS — Style Reference

> Editorial White Canvas

**Theme:** light

**Industry:** media

The B/D® JAMS design system presents a clean, editorial aesthetic reminiscent of a digital zine, prioritizing spaciousness and direct typography over decorative elements. Its visual language relies on a monochrome palette of stark black text and crisp backgrounds, occasionally softened by subtle gray borders. Layouts are deliberately sparse, framing content with generous whitespace, and interactions are signaled through direct text changes rather than elaborate animations or vivid highlights. Components are minimalist, focusing on function with zero radii and transparent backgrounds.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Ice | #f1f1f1 | `--color-canvas-ice` | Primary page background, expansive surfaces |
| Ink Black | #0e0e0e | `--color-ink-black` | Primary text, strong headings, button borders, and essential UI strokes. Establishes a bold, high-contrast presence |
| Border Fog | #e5e7eb | `--color-border-fog` | Subtle borders and dividers for nuanced separation |
| True White | #ffffff | `--color-true-white` | Secondary text in specific contexts, subtle border accents, and for maximum contrast elements |

## Tokens — Typography

### SctoGroteskA

- **Token:** `--font-sctogroteska`
- **Substitute:** Inter
- **Weights:** 300, 700
- **Sizes:** 16px, 24px, 48px
- **Line heights:** 1.00, 1.13, 1.17
- **Letter spacing:** -0.04em at 48px, -0.03em at 24px and 16px
- **Role:** All textual content, from navigation links and body text to prominent headings. The varied weights with tight letter-spacing contribute to its editorial, almost typewritten feel, emphasizing clarity and precision over decorative flair.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.17 | -0.48px | `--text-body` |
| subheading | 24px | 1.13 | -0.72px | `--text-subheading` |
| heading | 48px | 1 | -1.92px | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 0px |
| elementGap | 30px |

## Components

### Ghost Navigation Button

**Role:** Interactive element for navigation and primary actions.

Background transparent (rgba(0, 0, 0, 0)), text color Ink Black (#0e0e0e), with no padding or border by default. Focus states are indicated by border.

### Information Card (minimal)

**Role:** Container for content.

Background transparent (rgba(0, 0, 0, 0)), no border, no shadow, and zero padding. Achieves separation primarily through generous vertical spacing.

## Do's and Don'ts

### Do

- Prioritize Canvas Ice (#f1f1f1) for all background surfaces to maintain a clean, expansive feel.
- Use Ink Black (#0e0e0e) for primary text and borders to ensure strong contrast and visual hierarchy.
- Apply SctoGroteskA (or Inter) with letter-spacing -0.04em for headings at 48px, and -0.03em for 16px and 24px text to consistently deliver the concise, editorial aesthetic.
- Maintain a zero border-radius for all interactive elements and containers to preserve the sharp, angular aesthetic.
- Utilize 80px for vertical spacing between major sections, and 30px for horizontal and vertical spacing within content blocks to ensure generous whitespace.
- Implement Ghost Navigation Buttons with a transparent background and Ink Black (#0e0e0e) text, only showing a border on hover/focus using Ink Black (#0e0e0e).

### Don't

- Do not use highly saturated colors for main UI elements; chromatic colors are not part of the brand's core palette.
- Avoid using box-shadows or elevated elements; the design emphasizes a flat, two-dimensional aesthetic.
- Do not introduce decorative borders or excessive padding on cards; they should remain minimalist and transparent.
- Do not use rounded corners on any UI element; all corners should be sharp and angular.
- Avoid dense information blocks; instead, use ample whitespace and clear typographic hierarchy for content organization.
- Do not use generic system fonts; always prioritize SctoGroteskA (or Inter) to maintain the brand's unique typographic voice.

## Imagery

The site's imagery primarily consists of full-bleed, raw photographic or abstract visuals acting as background elements, specifically a weathered-looking sky. These images are treated without specific masking or prominent borders, integrating seamlessly into the minimalist design, acting more as atmospheric textures than focal points. There are no obvious icons or complex illustrations, preserving a text-dominant and stark visual environment.

## Layout

The page maintains a full-bleed, canvas-like aesthetic, allowing background imagery to extend edge-to-edge. Content appears to be horizontally centered within a broad but undefined maximum width. The hero pattern features minimal navigation text elements positioned prominently at the top, overlaying the background. Sections are separated by generous vertical spacing, typically 80px, maintaining significant breathing room between content blocks. The primary content arrangement is a simple, stacked typographic hierarchy creating an editorial, almost printed page feel with no complex grids or alternating visual patterns.

## Similar Brands

- **Are.na** — Shares a stark, minimalist visual style with a heavy reliance on monochrome typography and visible borders for UI elements.
- **Basic Type Foundry** — Features a strong, editorial typographic voice, high contrast, and a sparse, content-focused layout with minimal decorative elements.
- **The New York Times (digital archives)** — Employs an editorial grid, high typographic rigor, and a focus on clean, legible text without excessive visual distraction, often using large amounts of white space.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-ice: #f1f1f1;
  --color-ink-black: #0e0e0e;
  --color-border-fog: #e5e7eb;
  --color-true-white: #ffffff;
  --font-sctogroteska: 'SctoGroteskA', Inter;
  --text-body: 16px;
  --leading-body: 1.17;
  --tracking-body: -0.48px;
  --text-subheading: 24px;
  --leading-subheading: 1.13;
  --tracking-subheading: -0.72px;
  --text-heading: 48px;
  --leading-heading: 1;
  --tracking-heading: -1.92px;
  --spacing-0: 0px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-80: 80px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-ice: #f1f1f1;
  --color-ink-black: #0e0e0e;
  --color-border-fog: #e5e7eb;
  --color-true-white: #ffffff;
  --font-sctogroteska: 'SctoGroteskA', Inter;
  --text-body: 16px;
  --leading-body: 1.17;
  --tracking-body: -0.48px;
  --text-subheading: 24px;
  --leading-subheading: 1.13;
  --tracking-subheading: -0.72px;
  --text-heading: 48px;
  --leading-heading: 1;
  --tracking-heading: -1.92px;
  --spacing-0: 0px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-80: 80px;
  --radius-default: 0px;
}
```
