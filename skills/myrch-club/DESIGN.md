---
version: alpha
name: "Myrch Club"
description: "Myrch Club employs a stark, archival aesthetic, where content is displayed on clean white or near-white surfaces, punctuated by crisp black typography. A single vibrant red is used sparingly as a striking, almost disruptive brand accent. The system favors spacious layouts, minimal ornamentation, and clear visual separation of elements, evoking a catalog or museum exhibition feel."
theme: "light"
industry: "other"
source_url: "https://www.myrch.club"
refero_style_id: "528683fb-6b17-4fc6-b37e-d831ee1b20e2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519206390-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519206390-thumb.jpg"
extracted_at: "2026-04-30T03:20:21.297Z"
---

# Myrch Club — Style Reference

> Archival white space

**Theme:** light

**Industry:** other

Myrch Club employs a stark, archival aesthetic, where content is displayed on clean white or near-white surfaces, punctuated by crisp black typography. A single vibrant red is used sparingly as a striking, almost disruptive brand accent. The system favors spacious layouts, minimal ornamentation, and clear visual separation of elements, evoking a catalog or museum exhibition feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated surfaces, button text on filled buttons |
| Pale Gray Surface | #f9f9f9 | `--color-pale-gray-surface` | Card backgrounds, secondary container surfaces |
| Text Black | #000000 | `--color-text-black` | Primary text, strong headings, default body copy |
| Ink Detail | #111111 | `--color-ink-detail` | Primary action button backgrounds, default button borders, darker text details |
| Muted Gray Text | #cfcfcf | `--color-muted-gray-text` | Muted body text, secondary information, decorative borders |
| Dark Gray Text | #888888 | `--color-dark-gray-text` | Subtle body text, tertiary information |
| Archive Red | #ff0000 | `--color-archive-red` | Red decorative accent for icons, marks, and small graphic details. Do not promote it to the primary CTA color |

## Tokens — Typography

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback font for general text, links, and minor UI elements. Provides a classic, almost report-like baseline.

### Arial Narrow

- **Token:** `--font-arial-narrow`
- **Weights:** 400
- **Sizes:** 14px, 20px, 42px
- **Line heights:** 1.24, 1.33, 1.40, 1.43
- **Letter spacing:** normal
- **Role:** The primary font for headings, body text, and interactive elements. Its condensed structure and consistent weight support the efficient, archival feel of the site.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | — | `--text-caption` |
| body | 16px | 1.2 | — | `--text-body` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading | 42px | 1.33 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-60 | 60px | `--spacing-60` |

### Border Radius

| Element | Value |
| --- | --- |
| misc | 23px |
| cards | 10px |
| buttons | 10px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(17, 17, 17, 0.3) 0px 0px 20px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 30px |
| elementGap | 20px |

## Components

### Navigation Button

**Role:** Ghost interactive element

Text in Ink Detail (#111111), background transparent, 1px Ink Detail (#111111) border on hover/active. Radius: 10px. Padding 6px vertical, 12px horizontal. Font: Arial Narrow, weight 400.

### Active Navigation Button

**Role:** Filled interactive element

Background Ink Detail (#111111), text Canvas White (#ffffff). Radius: 10px. Padding 6px vertical, 12px horizontal. Font: Arial Narrow, weight 400.

### Product Card

**Role:** Display individual merchandise items

Background Pale Gray Surface (#f9f9f9), no shadow. Radius: 10px. Padding 30px on all sides.

### Minimal Badge

**Role:** Informational label

Text Ink Detail (#111111), background transparent, no border. Radius: 0px. No padding.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) as the dominant background color for most page content, ensuring ample negative space.
- Use Text Black (#000000) for primary textual content and Ink Detail (#111111) for interactive elements and stronger outlines.
- Maintain a clear visual hierarchy with Arial Narrow as the primary display and body font, reserving Times for secondary roles.
- Apply 10px border-radius consistently to all interactive components like buttons and cards for a softened but contained feel.
- Utilize Archive Red (#ff0000) strictly as a decorative brand accent, primarily in large-scale graphical elements or SVGs, avoiding its use for interactive states or general UI.
- Implement a spacious layout rhythm, maintaining at least 20px gap between elements and 30px padding within cards.
- Employ the light shadow rgba(17, 17, 17, 0.3) 0px 0px 20px 0px sparingly, specifically for prominent, interactive elements as a subtle elevation cue.

### Don't

- Do not use Archive Red (#ff0000) for interactive elements like buttons, links, or alerts; it is a decorative brand element only.
- Avoid introducing additional chromatic colors; the system is designed around a monochrome base with one vivid red accent.
- Do not vary the border-radius from 10px for standard UI components like buttons and cards, unless for specific, deliberate exceptions like the 23px radius noted for distinct elements.
- Refrain from using bold typefaces or excessively large font sizes for body text, maintaining an understated and efficient textual presentation.
- Do not clutter page sections; adhere to the spacious density by using 40px section gaps and 20px element gaps.
- Avoid heavy drop shadows or vibrant background gradients; the visual identity relies on flatness and subtle elevation.

## Elevation

- **Shadow 1:** `rgba(17, 17, 17, 0.3) 0px 0px 20px 0px`

## Imagery

The site's imagery primarily consists of high-quality product photography: items isolated on pure white backgrounds, often centered, treated with soft, even lighting to showcase detail. There's an absence of lifestyle photography or complex compositions. Icons are minimal, mostly text-based (All caps, no fill, 1px stroke for 'All' or 'Other' text). The visual emphasis is on the object itself, presented in a clean, catalog-like manner, without extraneous decorative elements or busy backdrops.

## Layout

The page operates on a contained max-width model, with content centered on a dominant Canvas White (#ffffff) background. The hero section features a large, decorative Archive Red (#ff0000) graphic or wordmark, with core text overlaid, establishing the brand's graphic identity immediately. Content sections below are primarily grids of Product Cards on a Pale Gray Surface (#f9f9f9) or Canvas White (#ffffff), maintaining consistent 30px padding and 20px element gaps. The overall rhythm is spacious and orderly, prioritizing clear visual separation and uncrowded presentation of items, reminiscent of a gallery or archive display.

## Similar Brands

- **Are.na** — Monochrome palette with a focus on content, clean white surfaces, and precise typography for an archival, collected feel.
- **Superscript** — Minimalistic layout, sharp black-and-white aesthetic, and subtle use of color as a disruptive brand element.
- **The Brand Identity** — Clean layouts, strong typography, and a catalog-like presentation of design work with minimal UI chrome.
- **Vessel Gallery** — White gallery-like presentation of objects, spacious layouts, and a subdued color palette to highlight item details.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-pale-gray-surface: #f9f9f9;
  --color-text-black: #000000;
  --color-ink-detail: #111111;
  --color-muted-gray-text: #cfcfcf;
  --color-dark-gray-text: #888888;
  --color-archive-red: #ff0000;
  --font-times: 'Times', Times New Roman;
  --font-arial-narrow: 'Arial Narrow', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading: 42px;
  --leading-heading: 1.33;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --radius-misc: 23px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --shadow-xl: rgba(17, 17, 17, 0.3) 0px 0px 20px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-pale-gray-surface: #f9f9f9;
  --color-text-black: #000000;
  --color-ink-detail: #111111;
  --color-muted-gray-text: #cfcfcf;
  --color-dark-gray-text: #888888;
  --color-archive-red: #ff0000;
  --font-times: 'Times', Times New Roman;
  --font-arial-narrow: 'Arial Narrow', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading: 42px;
  --leading-heading: 1.33;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --radius-misc: 23px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --shadow-xl: rgba(17, 17, 17, 0.3) 0px 0px 20px 0px;
}
```
