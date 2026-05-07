---
version: alpha
name: "Marylou Faure"
description: "Marylou Faure's design system embraces a vibrant, playful energy through a stark white canvas punctuated by bold, flat blocks of color. Typography is functional and direct, primarily in black, grounding the energetic visuals. The system relies on prominent imagery, often full-bleed, to convey its character-rich, graphic-heavy style, with UI elements remaining minimal and secondary to the artwork."
theme: "light"
industry: "design"
source_url: "https://maryloufaure.com"
refero_style_id: "6b2e2cb8-b217-4395-a664-8795b6002315"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517738677-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517738677-thumb.jpg"
extracted_at: "2026-04-30T02:56:20.949Z"
---

# Marylou Faure — Style Reference

> Vibrant canvas, graphic stories

**Theme:** light

**Industry:** design

Marylou Faure's design system embraces a vibrant, playful energy through a stark white canvas punctuated by bold, flat blocks of color. Typography is functional and direct, primarily in black, grounding the energetic visuals. The system relies on prominent imagery, often full-bleed, to convey its character-rich, graphic-heavy style, with UI elements remaining minimal and secondary to the artwork.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, default surface color, supporting element borders |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, button backgrounds, primary borders, icon fills. Provides high contrast against light surfaces |
| Charcoal Gray | #737373 | `--color-charcoal-gray` | Secondary text, muted links, subtle borders. Offers a softer contrast than Ink Black |
| Illustrative Red | #ff0000 | `--color-illustrative-red` | Dominant background for product showcases and bold visual sections. Creates high energy and impact |
| Playful Pink | #ffbbff | `--color-playful-pink` | Background for visual sections, secondary accent. Adds a soft yet vibrant touch |
| Sky Blue | #72c2f2 | `--color-sky-blue` | Background for visual sections, secondary accent. Provides a cool, cheerful tone |
| Blush Pink | #f7b2de | `--color-blush-pink` | Background for visual sections, tertiary accent for softer visual breaks |
| Vivid Pink | #ffa3fe | `--color-vivid-pink` | Background for visual sections, and occasionally as a link background, adding a bright, almost neon pop |
| Lime Green | #32c24d | `--color-lime-green` | Background for visual sections, offering a fresh, energetic accent |
| Cyan Blue | #96d6ff | `--color-cyan-blue` | Background for visual sections, providing a light and airy accent |

## Tokens — Typography

### Helvetica Now

- **Token:** `--font-helvetica-now`
- **Substitute:** Arial
- **Weights:** 400, 600
- **Sizes:** 12px, 16px, 20px, 22px, 40px
- **Line heights:** 0.80, 1.00, 1.20, 1.25, 1.35, 1.38, 1.50
- **Letter spacing:** 0.042, 0.031, 0.023
- **Role:** Primary typeface for all text content including headings, body text, links, and navigation. Its clean lines provide a structured counterpoint to the graphic imagery.

### GTStandard-M

- **Token:** `--font-gtstandard-m`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.50
- **Letter spacing:** 0.042
- **Role:** Secondary display typeface, used sparingly for specific content or branding elements to add a distinct, custom feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0.042px | `--text-caption` |
| body | 16px | 1.5 | 0.031px | `--text-body` |
| subheading | 20px | 1.25 | — | `--text-subheading` |
| heading | 22px | 1.2 | — | `--text-heading` |
| display | 40px | 1 | 0.023px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-159 | 159px | `--spacing-159` |
| spacing-188 | 188px | `--spacing-188` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 33px |
| cardPadding | 15px |
| elementGap | 15px |

## Components

### Primary Action Button

**Role:** Interactive element for key calls to action.

Filled button with Ink Black background, Canvas White text. Rounded corners at 8px. Padding is 8px top, 9px bottom, 30px left/right. Font is Helvetica Now, weight 400.

### Ghost Circular Icon Button

**Role:** Minimal interactive element, typically for navigation or utility icons.

Ghost button with 5% Ink Black background, Ink Black icon/text. Perfectly circular with 50% border radius. No explicit padding, acts as a container for an icon.

### Client Logo Grid Item

**Role:** Display individual client logos.

Centered client logo with 15px padding on all sides, often rendered in Ink Black against Canvas White. Grouped in a grid with 15px element gaps.

### Project Thumbnail Card

**Role:** Visually rich preview for portfolio projects.

Full-bleed imagery within a dynamic grid. Background colors will be one of the brand's vibrant palette colors (#ff0000, #ffbbff, #72c2f2, #f7b2de, #ffa3fe, #32c24d, #96d6ff). No explicit border or radius, imagery fills the card area.

### Top Navigation Link

**Role:** Primary navigation items in the header.

Text link using Helvetica Now, weight 400, 16px size, Ink Black color, with 10px right padding between items. Underlines on hover or active state.

## Do's and Don'ts

### Do

- Prioritize vibrant, full-bleed imagery and color blocks for main content areas.
- Use Canvas White (#ffffff) as the dominant page background to ensure art stands out.
- Apply Ink Black (#000000) for all primary text and calls to action for high legibility.
- Maintain a clear hierarchy with Helvetica Now; use lighter weights for body, heavier for titles.
- Keep interactive elements like buttons and navigation visually minimal to not detract from artwork.
- Use 8px border-radius for all interactive buttons for a consistent, soft touch.
- Employ a base unit of 8px for all spacing measurements, defaulting to 15px for element and card gaps, and 33px for section breaks.

### Don't

- Do not introduce gradients or complex shadows; maintain a flat, graphic aesthetic.
- Avoid decorative borders on content elements or cards; let color blocks define sections.
- Do not use subtle color variations for background elements; embrace bold, distinct color blocks.
- Refrain from using more than two font families; Helvetica Now and GTStandard-M cover all typographic needs.
- Do not add excessive padding to images; allow them to fill their containers for visual impact.
- Avoid using additional system blues/reds/greens; stick to the established brand palette for accent colors.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Primary page background and default surface for UI elements. |
| 2 | Subtle Gray | #f5f5f5 | Slightly off-white primary tint, used for subtle visual breaks or backgrounds. |
| 3 | Muted Blue | #e7f2f7 | Secondary tint for distinct sections or background accents. |

## Imagery

The visual language is dominantly illustration-based, featuring bold, organic character designs with strong outlines and flat fills. Photography, when present (e.g., product shots), is tightly cropped and focused on vibrant objects, often with a stark, single-color background or simple ice texture. Icons are filled with a medium stroke weight. Imagery plays a central role in conveying content and atmosphere, often occupying large, full-bleed areas, demonstrating a high density of visuals relative to text.

## Layout

The page primarily uses a max-width contained layout for text-heavy sections, but extensively leverages full-bleed, edge-to-edge imagery and color blocks for portfolio items. The hero section introduces the brand with a text block and small artwork, followed by a grid of client logos. Subsequent sections are visually driven, presenting large, alternating full-width image blocks. Vertical rhythm is consistent with substantial section gaps (33px), creating clear visual separation between content blocks. Navigation is a minimal top bar, featuring brand name and simple textual links.

## Similar Brands

- **Jiaqi Wang** — Similar use of illustration-heavy portfolio with bold, flat color blocks as background sections.
- **Malika Favre** — Employs a graphic, minimalist style with strong lines and limited, impactful color palettes.
- **Studio Airport** — High-impact visual portfolios that prioritize large, striking imagery and simple typography against clean backgrounds.
- **Blinkist (illustration style)** — Features a distinct, playful illustration style with strong character design and vivid, flat colors.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal-gray: #737373;
  --color-illustrative-red: #ff0000;
  --color-playful-pink: #ffbbff;
  --color-sky-blue: #72c2f2;
  --color-blush-pink: #f7b2de;
  --color-vivid-pink: #ffa3fe;
  --color-lime-green: #32c24d;
  --color-cyan-blue: #96d6ff;
  --font-helvetica-now: 'Helvetica Now', Arial;
  --font-gtstandard-m: 'GTStandard-M', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.042px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.031px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 22px;
  --leading-heading: 1.2;
  --text-display: 40px;
  --leading-display: 1;
  --tracking-display: 0.023px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-30: 30px;
  --spacing-33: 33px;
  --spacing-50: 50px;
  --spacing-159: 159px;
  --spacing-188: 188px;
  --radius-buttons: 8px;
  --surface-canvas-white: #ffffff;
  --surface-subtle-gray: #f5f5f5;
  --surface-muted-blue: #e7f2f7;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal-gray: #737373;
  --color-illustrative-red: #ff0000;
  --color-playful-pink: #ffbbff;
  --color-sky-blue: #72c2f2;
  --color-blush-pink: #f7b2de;
  --color-vivid-pink: #ffa3fe;
  --color-lime-green: #32c24d;
  --color-cyan-blue: #96d6ff;
  --font-helvetica-now: 'Helvetica Now', Arial;
  --font-gtstandard-m: 'GTStandard-M', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.042px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.031px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 22px;
  --leading-heading: 1.2;
  --text-display: 40px;
  --leading-display: 1;
  --tracking-display: 0.023px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-30: 30px;
  --spacing-33: 33px;
  --spacing-50: 50px;
  --spacing-159: 159px;
  --spacing-188: 188px;
  --radius-buttons: 8px;
  --surface-canvas-white: #ffffff;
  --surface-subtle-gray: #f5f5f5;
  --surface-muted-blue: #e7f2f7;
}
```
