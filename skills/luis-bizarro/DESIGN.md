---
version: alpha
name: "Luis Bizarro"
description: "Luis Bizarro's portfolio establishes itself as a minimalist, high-contrast dark canvas, where sparse white typography takes center stage. A grid-based layout with generous vertical spacing emphasizes content partitions. The visual style is stark and intentional, using only black and white to create a focused, almost archival presentation of work, with interactivity implied through subtle hover states rather than overt color cues."
theme: "dark"
industry: "design"
source_url: "https://bizar.ro"
refero_style_id: "c23be526-89e8-468f-ba35-9ab647908325"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517356003-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517356003-thumb.jpg"
extracted_at: "2026-04-30T02:49:35.941Z"
---

# Luis Bizarro — Style Reference

> monochrome digital ledger

**Theme:** dark

**Industry:** design

Luis Bizarro's portfolio establishes itself as a minimalist, high-contrast dark canvas, where sparse white typography takes center stage. A grid-based layout with generous vertical spacing emphasizes content partitions. The visual style is stark and intentional, using only black and white to create a focused, almost archival presentation of work, with interactivity implied through subtle hover states rather than overt color cues.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #000000 | `--color-void-black` | Page background, surface backgrounds, dominant UI color |
| Ghost White | #ffffff | `--color-ghost-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### FK Grotesk Neue

- **Token:** `--font-fk-grotesk-neue`
- **Substitute:** Inter, sans-serif
- **Weights:** 400
- **Sizes:** 8px, 14px, 18px, 30px, 32px, 38px, 45px, 60px, 75px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.0620em for small text, -0.0500em for medium text, tapering to -0.0210em for larger headlines
- **Role:** All textual content, from small metadata to large hero headlines. The consistent weight but varied tracking creates hierarchical distinction.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 14px | 1.2 | -0.7px | `--text-body-sm` |
| body | 18px | 1.2 | -0.76px | `--text-body` |
| heading-sm | 30px | 1.2 | -0.93px | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.8px | `--text-heading` |
| heading-lg | 38px | 1.2 | -0.79px | `--text-heading-lg` |
| display | 45px | 1.2 | -1.04px | `--text-display` |
| display-lg | 60px | 1 | -1.5px | `--text-display-lg` |
| display-xl | 75px | 1 | -1.58px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-184 | 184px | `--spacing-184` |
| spacing-220 | 220px | `--spacing-220` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 5px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 45px |
| cardPadding | 0px |
| elementGap | 19px |

## Components

### Navigation Link

**Role:** Primary navigation and interactive text links

Ghost White text set in FK Grotesk Neue at 19px, line height 1.2, with a subtly reduced letter spacing. Employs a 1px Ghost White border on hover.

### Project Overview Card (Interactive)

**Role:** Container for individual project entries, signaling interactivity

A block of Void Black background with Ghost White text and details. The entire block is bordered by a 1px Ghost White line, serving as the interactive element boundary. Features 19px internal element spacing and rounded corners at 5px.

### Subtle Metadata Tag

**Role:** Small, functional information labels

Ghost White text in FK Grotesk Neue, typically 8px, with specific letter spacing of -0.0620em. Used for secondary information like 'Building Hypercube' or 'Apple'.

### Large Numeric Display

**Role:** Prominent, data-driven typographic element

Ghost White numbers (e.g., '95', '25') set in FK Grotesk Neue, size 60px or 75px, with tight line height 1.0. Creates a bold, almost code-like aesthetic.

### Section Header (Stacked)

**Role:** Divisive title for portfolio projects

Multiple lines of Ghost White text, uppercase, usually 38px or 45px FK Grotesk Neue, 1.2 line height, stacked vertically with some letter spacing adjustments (-0.024em or -0.021em). Examples: 'APPLE VISION PRO', 'XBOX MUSEUM'.

## Do's and Don'ts

### Do

- Maintain maximum contrast: use only Ghost White (#ffffff) text and borders on Void Black (#000000) backgrounds.
- Utilize FK Grotesk Neue weight 400 for all typography, varying sizes and letter spacing to establish hierarchy.
- Apply a global border-radius of 5px to all rectangular interactive elements and containers.
- Implement a 1px Ghost White (#ffffff) border for interactive elements to indicate their clickable nature, particularly for project cards and navigation.
- Employ consistent vertical spacing for sections, preferentially using `sectionGap` of 45px and `elementGap` of 19px within containers.
- Use tight line heights (1.0 for large numbers, 1.2 for text blocks) to maintain typographic density and control vertical rhythm.

### Don't

- Avoid any color other than Ghost White for text, borders, or accents; the system is strictly monochrome.
- Do not introduce unnecessary shadows or complex elevation; surfaces should primarily be flat against the Void Black background.
- Do not vary font weights; FK Grotesk Neue weight 400 is the sole weight for all type.
- Do not use generic padding values; rely instead on `elementGap` for internal spacing and `sectionGap` for block separation.
- Avoid decorative line breaks or excessive horizontal rules; vertical spacing and subtle borders are the primary separators.
- Do not use imagery in a way that breaks the strict monochrome palette or introduces significant color; if imagery is present, it should be abstract or minimal.

## Imagery

The site largely avoids traditional imagery, focusing instead on stark typography. When visuals are present, they are either abstract, pixelated, or technical renders (like the pixelated face or the Apple Vision Pro render), adhering to a muted, often monochromatic or desaturated color palette that blends with the dark UI. Icons are simple, outlined, and monochromatic (Ghost White). The overall density is image-light, with visuals serving as abstract texture rather than detailed content.

## Layout

The page follows a full-bleed, dark-themed model with no explicit page max-width, allowing content to stretch across the viewport, though text blocks are inherently contained. The hero section features large, centered typography flanked by smaller, aligned metadata. Subsequent sections predominantly use a high-contrast text-on-black layout, often featuring vertically stacked, large-format project titles. Vertical rhythm is established through consistent `sectionGap` (45px) between content blocks and larger `marginTop` values (up to 220px) for prominent headings. Navigation is minimal, presented as Ghost White text links.

## Similar Brands

- **Bruno Simon** — Monochromatic interface with a strong focus on interactive text and minimal graphics on a dark background.
- **Obys Agency** — High-contrast, text-heavy design on dark backgrounds, often utilizing large, spaced-out sans-serif typography for visual impact.
- **Garden of Delete** — Experimental typography, stark black and white palette, and a focus on unique type treatments to form the primary visual identity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #000000;
  --color-ghost-white: #ffffff;
  --font-fk-grotesk-neue: 'FK Grotesk Neue', Inter, sans-serif;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.7px;
  --text-body: 18px;
  --leading-body: 1.2;
  --tracking-body: -0.76px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.93px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.8px;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.79px;
  --text-display: 45px;
  --leading-display: 1.2;
  --tracking-display: -1.04px;
  --text-display-lg: 60px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.5px;
  --text-display-xl: 75px;
  --leading-display-xl: 1;
  --tracking-display-xl: -1.58px;
  --spacing-0: 0px;
  --spacing-8: 8px;
  --spacing-19: 19px;
  --spacing-45: 45px;
  --spacing-75: 75px;
  --spacing-150: 150px;
  --spacing-184: 184px;
  --spacing-220: 220px;
  --radius-default: 5px;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #000000;
  --color-ghost-white: #ffffff;
  --font-fk-grotesk-neue: 'FK Grotesk Neue', Inter, sans-serif;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.7px;
  --text-body: 18px;
  --leading-body: 1.2;
  --tracking-body: -0.76px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.93px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.8px;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.79px;
  --text-display: 45px;
  --leading-display: 1.2;
  --tracking-display: -1.04px;
  --text-display-lg: 60px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.5px;
  --text-display-xl: 75px;
  --leading-display-xl: 1;
  --tracking-display-xl: -1.58px;
  --spacing-0: 0px;
  --spacing-8: 8px;
  --spacing-19: 19px;
  --spacing-45: 45px;
  --spacing-75: 75px;
  --spacing-150: 150px;
  --spacing-184: 184px;
  --spacing-220: 220px;
  --radius-default: 5px;
}
```
