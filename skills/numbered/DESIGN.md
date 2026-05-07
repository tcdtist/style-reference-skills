---
version: alpha
name: "Numbered"
description: "Numbered employs a deep, high-contrast visual system, where stark black canvases provide a dramatic backdrop for crisp white typography and subtle, refined interactions. The design uses spacious layouts and minimal ornamentation, allowing large-scale imagery and bold headlines to dominate. Interactive elements are understated, relying on elegant hover states rather than overt visual cues, contributing to a premium, editorial aesthetic."
theme: "dark"
industry: "agency"
source_url: "https://numbered.studio"
refero_style_id: "50f0b6d5-9e96-42a1-9564-a6e99c289f98"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517254050-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517254050-thumb.jpg"
extracted_at: "2026-04-30T02:47:51.461Z"
---

# Numbered — Style Reference

> Shadowy Gallery Canvas

**Theme:** dark

**Industry:** agency

Numbered employs a deep, high-contrast visual system, where stark black canvases provide a dramatic backdrop for crisp white typography and subtle, refined interactions. The design uses spacious layouts and minimal ornamentation, allowing large-scale imagery and bold headlines to dominate. Interactive elements are understated, relying on elegant hover states rather than overt visual cues, contributing to a premium, editorial aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Black | #111111 | `--color-canvas-black` | Page backgrounds, section backgrounds, hero areas — this deep black provides high contrast for all content |
| Ghost White | #ffffff | `--color-ghost-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Muted Ash | #4f4f4f | `--color-muted-ash` | Subtle borders, secondary navigation elements |
| Desert Sand | #bc9873 | `--color-desert-sand` | Subtle surface accents, potentially for card backgrounds or specific content areas |

## Tokens — Typography

### aktiv-web

- **Token:** `--font-aktiv-web`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 12px, 13px, 15px, 25px, 54px, 74px
- **Line heights:** 1.00, 1.20, 1.50, 2.00
- **Letter spacing:** normal
- **Role:** Primary font for all text from headings to body, and navigation. Its clean, sans-serif structure alongside the high contrast background ensures clarity while maintaining a contemporary feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 13px | 1.5 | — | `--text-body-sm` |
| body | 15px | 1.5 | — | `--text-body` |
| body-lg | 25px | 1.3 | — | `--text-body-lg` |
| heading-sm | 54px | 1.3 | — | `--text-heading-sm` |
| heading | 74px | 1.3 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-79 | 79px | `--spacing-79` |
| spacing-99 | 99px | `--spacing-99` |
| spacing-119 | 119px | `--spacing-119` |
| spacing-178 | 178px | `--spacing-178` |
| spacing-238 | 238px | `--spacing-238` |
| spacing-297 | 297px | `--spacing-297` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 99px |
| cardPadding | 0px |
| elementGap | 20px |

## Components

### Ghost Border Button

**Role:** Call to action or navigation links.

Text in Ghost White (#ffffff), bordered by 1px solid Ghost White (#ffffff). Features minimal padding of 1px vertical and 6px horizontal, with a 0px border-radius, giving it a sharp, understated outline against the dark background.

### Content Card

**Role:** Displaying featured work or case studies.

Transparent background (rgba(0,0,0,0)) with no border, shadow, or border-radius. Content within the card is responsible for its own styling, maintaining the minimalist dark aesthetic. Padding is 0px.

### Navigation Link

**Role:** Top-level navigation items or footer links.

Ghost White (#ffffff) text using aktiv-web font, weight 400. Features small bottom padding of 3px, creating a subtle visual space under the text, often appearing as an underline on hover without being explicitly declared.

## Do's and Don'ts

### Do

- Prioritize Canvas Black (#111111) as the default background for all sections to maintain a high-contrast dark theme.
- Use Ghost White (#ffffff) for all primary text, headlines, and interactive element outlines.
- Apply aktiv-web (or Inter) font at various sizes, ensuring body text remains legible on the dark background.
- Maintain a spacious layout with a section gap of 99px to emphasize content separation and visual breathing room.
- Utilize 0px border-radius for all elements, including buttons and cards, to enforce the sharp, modern aesthetic.
- Employ minimal borders of 1px solid Ghost White (#ffffff) for interactive elements, focusing on subtle visual cues.
- Leverage large-scale, striking imagery as primary visual content within sections, allowing them to bleed to the edges.

### Don't

- Do not introduce overt border-radius on any components; adhere to the sharp, angular aesthetic with 0px radius.
- Avoid using drop shadows or heavy box-shadows, as the design relies on flat surfaces and high contrast.
- Refrain from adding vibrant or numerous accent colors; the system is built on a restrained, monochromatic palette with minimal accentuation.
- Do not use generic system fonts when aktiv-web (or Inter) is available, as the specific font style contributes significantly to brand identity.
- Avoid tight spacing; maintain the generous sectionGap of 99px and general spaciousness.
- Do not add filled button variants; interactive elements should primarily be ghosted outlines or text links.
- Do not introduce unnecessary dividers or heavy visual separators between content blocks; rely on background color changes and generous spacing.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Black | #111111 | Dominant background for the entire site, creating a deep, immersive dark theme. |
| 1 | Desert Sand Accent | #bc9873 | A secondary, subtle accent surface for specific content blocks or cards, providing a mild contrast without disrupting the dark theme. |

## Imagery

The site features high-quality, large-format photography and product shots, often full-bleed or occupying significant visual space. Imagery is treated realistically, focusing on natural light and candid moments for lifestyle shots, or clean, well-lit product focus for case studies. There are no overt graphic treatments like duotones or heavy filters; images maintain their natural color and detail. The role of imagery is primarily decorative atmosphere and showcasing client work, rather than explanatory diagrams or abstract graphics. Density is image-heavy, with full-screen visuals interspersed with text.

## Layout

The page primarily uses a full-bleed layout, particularly for hero sections and large image blocks, filling the entire viewport horizontally. Content within sections, when not full-bleed imagery, is typically constrained by a maximum width and centered, allowing for visual breathing room on the sides. The hero pattern often involves large, striking photography with white, often serif, text overlaid, creating an editorial masthead feel. Sections generally flow vertically with consistent, generous spacing (99px section gap), providing a clean rhythm. Content arrangement frequently alternates between large visual blocks and stacked text sections, sometimes with implied two-column structures for text-heavy areas. There is no explicit grid for cards but content blocks are large and distinct. Navigation is a minimal top-right 'Contact' button, with a full-page menu invoked for comprehensive navigation.

## Similar Brands

- **Basic. Space** — Similar high-contrast dark theme, large-scale imagery, and minimalist typography.
- **Locomotive Agency** — Uses a dark background, bold type, and a focus on visual impact through photography with minimal UI chrome.
- **Work & Co** — Employs a premium, editorial feel with generous spacing, high-contrast text, and a focus on case studies presented with large visuals.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-black: #111111;
  --color-ghost-white: #ffffff;
  --color-muted-ash: #4f4f4f;
  --color-desert-sand: #bc9873;
  --font-aktiv-web: 'aktiv-web', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 13px;
  --leading-body-sm: 1.5;
  --text-body: 15px;
  --leading-body: 1.5;
  --text-body-lg: 25px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 54px;
  --leading-heading-sm: 1.3;
  --text-heading: 74px;
  --leading-heading: 1.3;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-20: 20px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-59: 59px;
  --spacing-79: 79px;
  --spacing-99: 99px;
  --spacing-119: 119px;
  --spacing-178: 178px;
  --spacing-238: 238px;
  --spacing-297: 297px;
  --radius-cards: 0px;
  --radius-buttons: 0px;
  --surface-canvas-black: #111111;
  --surface-desert-sand-accent: #bc9873;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-black: #111111;
  --color-ghost-white: #ffffff;
  --color-muted-ash: #4f4f4f;
  --color-desert-sand: #bc9873;
  --font-aktiv-web: 'aktiv-web', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 13px;
  --leading-body-sm: 1.5;
  --text-body: 15px;
  --leading-body: 1.5;
  --text-body-lg: 25px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 54px;
  --leading-heading-sm: 1.3;
  --text-heading: 74px;
  --leading-heading: 1.3;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-20: 20px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-59: 59px;
  --spacing-79: 79px;
  --spacing-99: 99px;
  --spacing-119: 119px;
  --spacing-178: 178px;
  --spacing-238: 238px;
  --spacing-297: 297px;
  --radius-cards: 0px;
  --radius-buttons: 0px;
  --surface-canvas-black: #111111;
  --surface-desert-sand-accent: #bc9873;
}
```
