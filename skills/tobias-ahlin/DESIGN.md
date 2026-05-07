---
version: alpha
name: "Tobias Ahlin"
description: "The design system for Tobias Ahlin is a stark, high-contrast exploration of typography and structured negative space. It combines large, confident black sans-serif headlines with a minimalist canvas, often featuring a subtle off-white background. The visual identity is strongly tied to line-art graphics and geometric shapes, with a single muted orange hue serving as a delicate accent. Components are borderless and box-shadow-free, relying on distinct background colors and ample padding for definition. The overall feeling is precise, unornamented, and direct."
theme: "light"
industry: "design"
source_url: "https://tobiasahlin.com"
refero_style_id: "7a79144f-e9a2-4e60-8b90-a9409273da45"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519470989-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519470989-thumb.jpg"
extracted_at: "2026-04-30T03:24:50.547Z"
---

# Tobias Ahlin — Style Reference

> High-contrast typographic canvas

**Theme:** light

**Industry:** design

The design system for Tobias Ahlin is a stark, high-contrast exploration of typography and structured negative space. It combines large, confident black sans-serif headlines with a minimalist canvas, often featuring a subtle off-white background. The visual identity is strongly tied to line-art graphics and geometric shapes, with a single muted orange hue serving as a delicate accent. Components are borderless and box-shadow-free, relying on distinct background colors and ample padding for definition. The overall feeling is precise, unornamented, and direct.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Oyster | #fefbf5 | `--color-canvas-oyster` | Page backgrounds, large inactive surfaces, base canvas for all content |
| Text Ink | #000000 | `--color-text-ink` | Primary body text, bold headlines, high-contrast UI elements, icons |
| Surface Frost | #ffffff | `--color-surface-frost` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Muted Ash | #9ba5b6 | `--color-muted-ash` | Subtle background for UI elements, secondary card surfaces |
| Slate Gray | #2b2f3c | `--color-slate-gray` | Darker background variations for content sections or interactive states |
| Warm Clay | #d67a60 | `--color-warm-clay` | Decorative line art illustration accent, subtle graphic elements – provides visual zest without overwhelming high-contrast text |
| Ocean Deep | #26555d | `--color-ocean-deep` | Link borders, subtle background tint for specific content blocks – a cool, muted contrast to Warm Clay |
| Cerulean Ink | #1f4954 | `--color-cerulean-ink` | Primary action background (filled buttons), distinct content section backgrounds |
| Purple Haze | #8e5ea2 | `--color-purple-haze` | Alternative action background, background for specific content cards |
| Moss Green | #3bab87 | `--color-moss-green` | Green action color for filled buttons, selected navigation states, and focused conversion moments |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 700, 800
- **Sizes:** 11px, 13px, 15px, 16px, 40px, 46px, 58px, 73px, 160px
- **Line heights:** 0.76, 1.00, 1.30, 1.90, 2.03, 2.34, 2.76
- **Letter spacing:** -0.02em at 160px, -0.007em at 73px, -0.005em at 58px, 0.025em at 11px, 0.063em at 13px, 0.26em at 15px, 0.40em at 40px
- **Role:** Primary typeface for all headlines, body text, and UI elements. Its strong presence and varied weight scale form the backbone of the visual hierarchy.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.9 | — | `--text-caption` |
| body-sm | 13px | 1.9 | — | `--text-body-sm` |
| body | 15px | 1.9 | — | `--text-body` |
| body-lg | 16px | 1.9 | — | `--text-body-lg` |
| heading-sm | 40px | 1.3 | — | `--text-heading-sm` |
| heading | 46px | 1.3 | — | `--text-heading` |
| heading-lg | 58px | 1.3 | — | `--text-heading-lg` |
| display-sm | 73px | 1.3 | — | `--text-display-sm` |
| display | 160px | 1.3 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-81 | 81px | `--spacing-81` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-121 | 121px | `--spacing-121` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-177 | 177px | `--spacing-177` |
| spacing-204 | 204px | `--spacing-204` |
| spacing-205 | 205px | `--spacing-205` |
| spacing-239 | 239px | `--spacing-239` |
| spacing-240 | 240px | `--spacing-240` |
| spacing-256 | 256px | `--spacing-256` |
| spacing-274 | 274px | `--spacing-274` |
| spacing-283 | 283px | `--spacing-283` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |
| small | 2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 40px |
| elementGap | 20px |

## Components

### Ghost Button

**Role:** Outlined button for secondary actions or navigation links

Transparent background, Text Ink color for text and border. No border radius. Padding: 10px.

### Primary Action CTA

**Role:** Filled button for main calls to action

Background: Cerulean Ink (#1f4954). Text: Surface Frost (#ffffff). No border radius. Padding: 50px horizontal, 90px vertical.

### Monochrome Container Card

**Role:** Informational card with a distinct background

Background: Muted Ash (#9ba5b6). Text: Text Ink (#000000). No border radius. Padding: 40px all sides. No shadow.

### Text Block Card

**Role:** Basic content container, often with a subtle background

Background: transparent. No border radius. Padding: 40px. No shadow.

### Branded Callout Card - Purple

**Role:** A distinct, colored card to highlight specific content or actions

Background: Purple Haze (#8e5ea2). Text: Surface Frost (#ffffff). No border radius. Padding: 50px horizontal, 90px vertical.

### Branded Callout Card - Green

**Role:** A distinct, colored card to highlight specific content or actions

Background: Moss Green (#3bab87). Text: Surface Frost (#ffffff). No border radius. Padding: 50px horizontal, 90px vertical.

## Do's and Don'ts

### Do

- Prioritize bold, black Inter typography with high contrast against light or subtly colored backgrounds.
- Use 0px (sharp corners) for all component edges unless explicitly specified as 2px for small elements.
- Define separation between elements and sections primarily through generous spacing (20px, 60px) and distinct background colors, not borders or shadows.
- Apply Warm Clay (#d67a60) exclusively for decorative, geometric line-art elements or subtle accents, never for functional text or backgrounds.
- Use distinct, saturated background colors (Cerulean Ink, Purple Haze, Moss Green) for primary actions and highlighted content blocks, ensuring white text for legibility.
- Maintain a spacious density across all layouts, utilizing sectionGap (60px) for vertical rhythm and cardPadding (40px) for internal content spacing.
- Favor white (#ffffff) or Canvas Oyster (#fefbf5) as primary surface colors, grounding the design in a light theme.

### Don't

- Avoid using multiple border radii values; stick to 0px or 2px.
- Do not introduce drop shadows or other elevation cues; the visual system is entirely flat.
- Do not clutter layouts; keep information organized in clear, separate blocks with ample negative space.
- Refrain from using Warm Clay (#d67a60) for text or interactive elements; its role is purely decorative.
- Do not use subtle variations of neutral colors right next to each other. Rely on strong contrast or generous spacing for distinction.
- Do not apply borders to cards or main content blocks; boundaries are defined by background color and spacing.
- Avoid generic system fonts if Inter is available; Inter's distinct weights and condensed tracking are key to the brand's typographic voice.

## Imagery

The visual language focuses on geometric line-art illustrations, often in a muted orange hue (Warm Clay), serving a purely decorative and atmospheric role. These graphics are abstract, not metaphorical, creating a sense of precision and structure without literal representation. There is no photography or product photography. Icons are minimal, outlined, and high-contrast, typically Text Ink on light backgrounds. The imagery is sparse, allowing text and strong layouts to dominate, emphasizing content and UI rather than illustrative storytelling.

## Layout

The page primarily employs a full-bleed layout for sections, but content within these sections often appears to be contained and centered. The hero section features a large, horizontally sprawling typographic logo with an abstract line-art graphic, framed by centered text. Section rhythm is achieved through alternating background colors, moving between Canvas Oyster and various muted-blue or colored blocks. Content blocks frequently feature a two-column layout with text and a visual element, or stacked, wide cards. Layout density is spacious, ensuring significant breathing room around all elements. Navigation is a simple, high-contrast black text menu at the top, along with a 'hamburger' icon for mobile or secondary navigation.

## Similar Brands

- **Brave Browser** — Similar usage of a deep, high-contrast dark text on light background with a single vibrant accent color (orange for Brave, Warm Clay for Tobias Ahlin) and a focus on geometric clean shapes.
- **Figma** — Employs heavy, confident sans-serif typography, large headings, and relies on distinct background colors for sectioning rather than shadows or borders.
- **Linear** — Features a strong emphasis on clean, borderless UI elements, high contrast text, and a minimal, functional use of color for actions or status indicators.
- **Apple (recent marketing sites)** — Leverages extremely large, bold typography as a primary visual element, generous white space, and a sparse color palette that focuses on content and product clarity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-oyster: #fefbf5;
  --color-text-ink: #000000;
  --color-surface-frost: #ffffff;
  --color-muted-ash: #9ba5b6;
  --color-slate-gray: #2b2f3c;
  --color-warm-clay: #d67a60;
  --color-ocean-deep: #26555d;
  --color-cerulean-ink: #1f4954;
  --color-purple-haze: #8e5ea2;
  --color-moss-green: #3bab87;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.9;
  --text-body-sm: 13px;
  --leading-body-sm: 1.9;
  --text-body: 15px;
  --leading-body: 1.9;
  --text-body-lg: 16px;
  --leading-body-lg: 1.9;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1.3;
  --text-heading: 46px;
  --leading-heading: 1.3;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 73px;
  --leading-display-sm: 1.3;
  --text-display: 160px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-57: 57px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-81: 81px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-115: 115px;
  --spacing-121: 121px;
  --spacing-125: 125px;
  --spacing-177: 177px;
  --spacing-204: 204px;
  --spacing-205: 205px;
  --spacing-239: 239px;
  --spacing-240: 240px;
  --spacing-256: 256px;
  --spacing-274: 274px;
  --spacing-283: 283px;
  --radius-none: 0px;
  --radius-small: 2px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-oyster: #fefbf5;
  --color-text-ink: #000000;
  --color-surface-frost: #ffffff;
  --color-muted-ash: #9ba5b6;
  --color-slate-gray: #2b2f3c;
  --color-warm-clay: #d67a60;
  --color-ocean-deep: #26555d;
  --color-cerulean-ink: #1f4954;
  --color-purple-haze: #8e5ea2;
  --color-moss-green: #3bab87;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.9;
  --text-body-sm: 13px;
  --leading-body-sm: 1.9;
  --text-body: 15px;
  --leading-body: 1.9;
  --text-body-lg: 16px;
  --leading-body-lg: 1.9;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1.3;
  --text-heading: 46px;
  --leading-heading: 1.3;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 73px;
  --leading-display-sm: 1.3;
  --text-display: 160px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-57: 57px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-81: 81px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-115: 115px;
  --spacing-121: 121px;
  --spacing-125: 125px;
  --spacing-177: 177px;
  --spacing-204: 204px;
  --spacing-205: 205px;
  --spacing-239: 239px;
  --spacing-240: 240px;
  --spacing-256: 256px;
  --spacing-274: 274px;
  --spacing-283: 283px;
  --radius-none: 0px;
  --radius-small: 2px;
}
```
