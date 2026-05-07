---
version: alpha
name: "Socialclub"
description: "Socialclub presents a sparse, high-contrast aesthetic where large, neutral typography dominates the visual field. The design emphasizes content through intentional negative space and a clean, almost monochrome palette. A single muted yellow hue provides a subtle warmth, occasionally appearing as a border or background accent to differentiate sections without overwhelming the stark presentation. The overall impression is one of confident restraint, letting the content speak for itself against minimal interface elements."
theme: "light"
industry: "agency"
source_url: "https://socialclubparis.com"
refero_style_id: "9d1234b7-1e6c-4eb3-9ebb-2cc40c688090"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513735813-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513735813-thumb.jpg"
extracted_at: "2026-04-30T01:49:12.167Z"
---

# Socialclub — Style Reference

> Bare canvas, whispered giants.

**Theme:** light

**Industry:** agency

Socialclub presents a sparse, high-contrast aesthetic where large, neutral typography dominates the visual field. The design emphasizes content through intentional negative space and a clean, almost monochrome palette. A single muted yellow hue provides a subtle warmth, occasionally appearing as a border or background accent to differentiate sections without overwhelming the stark presentation. The overall impression is one of confident restraint, letting the content speak for itself against minimal interface elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #faf9f6 | `--color-canvas-white` | Primary page background, neutral surface |
| Ink Black | #000000 | `--color-ink-black` | Primary text, borders, decorative UI elements — establishes strong visual contrast |
| Muted Gold | #ffdaa7 | `--color-muted-gold` | Subtle background accents, decorative borders, minor highlights for UI elements |

## Tokens — Typography

### Monumentgrotesk

- **Token:** `--font-monumentgrotesk`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 10px, 46px, 62px, 158px
- **Line heights:** 0.80, 1.00, 1.67
- **Letter spacing:** -0.0200em at 158px/62px/46px, -0.0150em at 10px
- **Role:** Dominant headlines and large display text, characterized by its wide, sans-serif structure and significant negative letter-spacing for an expansive feel. The extreme sizing variance creates dramatic visual hierarchy.

### Monumentgrotesk Semimono

- **Token:** `--font-monumentgrotesk-semimono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 10px, 11px
- **Line heights:** 1.50, 1.67
- **Role:** Monospaced headings and sub-headings, used sparingly to provide a technical, structured contrast to the main Monumentgrotesk. Its slightly larger line height offers better readability for short blocks of text.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 11px, 14px
- **Line heights:** 1.00, 1.39
- **Role:** Functional text such as navigation links, labels, and small informational text. The system font choice ensures legibility and a neutral voice for secondary content.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 16.7 | -0.15px | `--text-caption` |
| body | 14px | 19.46 | 0px | `--text-body` |
| heading | 46px | 36.8 | -0.92px | `--text-heading` |
| heading-lg | 62px | 49.6 | -1.24px | `--text-heading-lg` |
| display | 158px | 126.4 | -3.16px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-81 | 81px | `--spacing-81` |
| spacing-106 | 106px | `--spacing-106` |
| spacing-151 | 151px | `--spacing-151` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1419px |
| sectionGap | 81px |
| cardPadding | 10px |
| elementGap | 6px |

## Components

### Navigation Link

**Role:** Global navigation item

Arial, 14px, weight 400, Ink Black text on Canvas White background. Hover state shows an Ink Black bottom border of 1px.

### Hero Display Text

**Role:** Primary headline text on hero section

Monumentgrotesk, 158px, weight 400, Canvas White text on a background of varied image content. Letter spacing -0.0200em.

### Muted Gold Accent Box

**Role:** Decorative border around content, or subtle background

Features a 1px border of Muted Gold (#ffdaa7) around content. Can also be used as a background fill.

### Section Subtitle

**Role:** Secondary heading for content sections

Monumentgrotesk Semimono, 10px, weight 400, Ink Black text. Line height 1.50 for improved legibility.

### Image Card

**Role:** Container for visual content

Images contained within a 4px border-radius, often with a subtle Muted Gold (#ffdaa7) border and a bottom margin of 26px.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#faf9f6) as the dominant background color for all main content areas.
- Use Ink Black (#000000) for all primary text, ensuring a high-contrast reading experience against light backgrounds.
- Apply Monumentgrotesk with negative letter-spacing for all major headlines to maintain the expansive, bold aesthetic.
- Employ the 4px border-radius for all image containers and small interactive elements.
- Maintain generous section gaps (around 81px) to create ample negative space and visual breathing room between content blocks.
- Reserve Muted Gold (#ffdaa7) for subtle decorative accents or borders, not as a primary action color.
- Use Arial, 14px, weight 400, for all navigation and functional UI text.

### Don't

- Avoid using saturated or vibrant colors for backgrounds or large content blocks.
- Do not use generic system fonts for headlines; Monumentgrotesk is essential for brand identity.
- Do not combine multiple border-radius values on the same element or within close proximity, maintain the unified 4px radius.
- Do not introduce heavy shadows or gradients; the design relies on flat surfaces and clean lines.
- Avoid tight spacing between elements; ensure an element gap of at least 6px and ample padding.
- Do not use Muted Gold as an active text color; its role is primarily decorative or as a soft background accent.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Background | #faf9f6 | Predominant global background for the entire page, providing a clean, bright foundation. |

## Imagery

The visual language focuses on a mix of curated photography and evocative abstract imagery. Photography is often rich and moody, frequently with muted tones or dramatic lighting, presented within contained frames with a 4px border radius. Imagery serves an atmospheric and sometimes abstract purpose rather than direct product showcase or literal explanation. There are no prominent illustrations, filled icons, or graphic elements; the focus is on photographic or video content.

## Similar Brands

- **AIGA Eye on Design** — Shares a heavy reliance on strong typography, ample negative space, and a curated, minimalist color palette.
- **Kerning Cultures** — Similar use of large, impactful headline typography and a clean, spacious layout against a light background.
- **Minimalissimo** — Adheres to a strong preference for achromatic palettes (black, white, gray) with sparse, measured use of accent colors.
- **Off-White** — Employs an editorial-like layout with large text, high contrast, and a raw, almost deconstructed feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #faf9f6;
  --color-ink-black: #000000;
  --color-muted-gold: #ffdaa7;
  --font-monumentgrotesk: 'Monumentgrotesk', Helvetica Neue;
  --font-monumentgrotesk-semimono: 'Monumentgrotesk Semimono', Space Mono;
  --font-arial: 'Arial', Inter;
  --text-caption: 10px;
  --leading-caption: 16.7;
  --tracking-caption: -0.15px;
  --text-body: 14px;
  --leading-body: 19.46;
  --tracking-body: 0px;
  --text-heading: 46px;
  --leading-heading: 36.8;
  --tracking-heading: -0.92px;
  --text-heading-lg: 62px;
  --leading-heading-lg: 49.6;
  --tracking-heading-lg: -1.24px;
  --text-display: 158px;
  --leading-display: 126.4;
  --tracking-display: -3.16px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-39: 39px;
  --spacing-57: 57px;
  --spacing-66: 66px;
  --spacing-81: 81px;
  --spacing-106: 106px;
  --spacing-151: 151px;
  --radius-default: 4px;
  --surface-canvas-background: #faf9f6;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #faf9f6;
  --color-ink-black: #000000;
  --color-muted-gold: #ffdaa7;
  --font-monumentgrotesk: 'Monumentgrotesk', Helvetica Neue;
  --font-monumentgrotesk-semimono: 'Monumentgrotesk Semimono', Space Mono;
  --font-arial: 'Arial', Inter;
  --text-caption: 10px;
  --leading-caption: 16.7;
  --tracking-caption: -0.15px;
  --text-body: 14px;
  --leading-body: 19.46;
  --tracking-body: 0px;
  --text-heading: 46px;
  --leading-heading: 36.8;
  --tracking-heading: -0.92px;
  --text-heading-lg: 62px;
  --leading-heading-lg: 49.6;
  --tracking-heading-lg: -1.24px;
  --text-display: 158px;
  --leading-display: 126.4;
  --tracking-display: -3.16px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-39: 39px;
  --spacing-57: 57px;
  --spacing-66: 66px;
  --spacing-81: 81px;
  --spacing-106: 106px;
  --spacing-151: 151px;
  --radius-default: 4px;
  --surface-canvas-background: #faf9f6;
}
```
