---
version: alpha
name: "Josh Warner"
description: "Josh Warner's portfolio combines stark dark surfaces with a clean, highly legible typography scale. The design system emphasizes clarity and directness through minimal use of color, relying instead on high contrast, subtle achromatic gradients, and precise spacing. Interactive elements are softly rounded, creating a tactile impression against the otherwise structured aesthetic. Most visual weight is carried by conceptual 3D renders rather than UI adornment."
theme: "dark"
industry: "design"
source_url: "https://www.joshwarner.design"
refero_style_id: "e2e9b80c-b548-4f86-a4d7-7a6b07d1c2e1"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514482364-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514482364-thumb.jpg"
extracted_at: "2026-04-30T02:01:39.741Z"
---

# Josh Warner — Style Reference

> Midnight gallery, sculpted light

**Theme:** dark

**Industry:** design

Josh Warner's portfolio combines stark dark surfaces with a clean, highly legible typography scale. The design system emphasizes clarity and directness through minimal use of color, relying instead on high contrast, subtle achromatic gradients, and precise spacing. Interactive elements are softly rounded, creating a tactile impression against the otherwise structured aesthetic. Most visual weight is carried by conceptual 3D renders rather than UI adornment.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #0f0f0f | `--color-deep-space` | Primary background, primary surface color for larger sections |
| Inky Void | #000000 | `--color-inky-void` | Dominant text color for light backgrounds, borders, and subtle shadow definition against darker surfaces |
| Pure Canvas | #f0f0f0 | `--color-pure-canvas` | Primary text color against dark backgrounds, ghost button text and borders |
| Medium Gray | #696969 | `--color-medium-gray` | Secondary text and subtle accent lines for headings |
| Light Gray | #b8b8b8 | `--color-light-gray` | Muted body text and less prominent borders |
| Darkened Canvas | #1a1a1a | `--color-darkened-canvas` | Footer background, slightly darker than the main background for subtle section separation |
| Shadow Base | #080808 | `--color-shadow-base` | Darkest shadow base, used for subtle depth |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui, 'Helvetica Neue', Arial, sans-serif
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Role:** Utility text, navigation links, button text, and small interactive elements. Relies on system defaults for efficiency and clean rendering.

### Inter Display

- **Token:** `--font-inter-display`
- **Substitute:** 'Inter', sans-serif
- **Weights:** 400
- **Sizes:** 14px, 16px, 20px, 32px, 40px
- **Line heights:** 1.00, 1.20, 1.25, 1.43, 1.50, 1.56
- **Letter spacing:** 0.0400em
- **Role:** Primary text for body content and all headings. Its uniform letter-spacing across sizes maintains a consistent optical density, contributing to the site's compact and readable feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.5 | 0.4px | `--text-body-sm` |
| body | 16px | 1.2 | 0.4px | `--text-body` |
| subheading | 20px | 1.56 | 0.4px | `--text-subheading` |
| heading | 32px | 1.25 | 0.4px | `--text-heading` |
| display | 40px | 1.43 | 0.4px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 40px |
| cards | 4px |
| icons | 12px |
| inputs | 8px |
| buttons | 100px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.5) 0px 1px 10px -2px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.16) 0px 0px 10px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 14px |
| elementGap | 10px |

## Components

### Ghost Header Button

**Role:** Navigation button, pill-shaped

Transparent background, Pure Canvas text and border, with a large 100px border-radius for a distinct pill shape. Padding: 4px vertical, 16px horizontal.

### Hire Me Button

**Role:** Primary action button, filled and subtly rounded

Filled with Pure Canvas, Inky Void text color, with 8px border-radius. Padding: 6px vertical, 14px horizontal. Appears for crucial calls to action.

### Avatar Button

**Role:** Profile or identity button

Transparent background with a subtle Inky Void border. Features an internal 4px left padding to accommodate an icon, and a significant 100px border-radius for a circle or long pill shape. Text is Inter Display, size 12px, weight 400.

### Project Card

**Role:** Item display in a grid, image-focused

Uses a 4px border-radius on images to imply containment. Images are often full-bleed within a section that hints at minimal borders.

### Interactive Link

**Role:** Inline textual link

Uses system sans-serif font at 12px weight 400. Hover effects may involve subtle background changes or underline, using Pure Canvas color.

## Do's and Don'ts

### Do

- Prioritize high contrast using Pure Canvas (#f0f0f0) for text on Deep Space (#0f0f0f) or Inky Void (#000000) backgrounds.
- Use Inter Display for all major text (headings, body), ensuring 0.04em letter-spacing is applied consistently.
- Apply Deep Space (#0f0f0f) for main backgrounds and Darkened Canvas (#1a1a1a) for secondary backgrounds like footers or distinct sections.
- Utilize large border-radii (100px, 40px) for buttons and interactive elements to create a soft, pill-like appearance.
- Maintain compact spacing, with a default elementGap of 10px between interactive components and text blocks.
- Emphasize content over UI chrome; keep borders minimal and colors purely functional.
- Use the system sans-serif font at 12px for utility text, navigation, and minimal interactive elements.

### Don't

- Avoid using saturated colors for UI elements; color is reserved for content aesthetics, not interface.
- Do not introduce complex gradients or inner shadows on UI elements; elevation is sparse and subtle.
- Steer clear of aggressive, heavy typography for headlines; rely on Inter Display's light weight and 0.04em tracking.
- Do not use small border-radii (e.g., 2px) on buttons or primary interactive elements; aim for 8px, 40px, or 100px.
- Introduce excessive padding or wide margins that disrupt the compact information density.
- Do not use dark gray text on a dark background; ensure compliance with the 15:1 contrast ratios provided.
- Avoid any drop shadows on text, and keep container shadows subtle and very low opacity.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Main Canvas | #0f0f0f | Primary page background, base for content sections. |
| 2 | Footer Canvas | #1a1a1a | Dedicated background for footer sections, slightly darker for visual separation. |

## Elevation

- **Hovered Button:** `rgba(0, 0, 0, 0.16) 0px 0px 10px 0px`
- **Card/Container:** `rgba(0, 0, 0, 0.5) 0px 1px 10px -2px`

## Imagery

This site features highly stylized 3D renders that serve as key hero elements and section dividers. Images feature sharp details, often with metallic or textured surfaces against dark backgrounds, sometimes with subtle dramatic lighting. The renders are full-bleed for hero sections or artfully integrated into the layout, taking up significant visual space to convey artistic skill. Product mockups are clean and high-fidelity, presented either as isolated objects or within conceptual environments. Iconography is minimal, primarily text-based or simple system icons.

## Layout

The page primarily uses a full-bleed dark background with content centered and constrained by an implicit max-width, around 1200px. The hero section is full-bleed with large, conceptual 3D renders and centered, high-contrast headlines. Subsequent sections can alternate between centered content blocks and full-width imagery, often with text-left/image-right or vice-versa patterns for project showcases. Vertical spacing between sections is generous (around 64px), creating distinct visual breaks. Navigation is a sticky top bar with minimal ghost buttons and a prominent brand emblem.

## Similar Brands

- **Stripe** — Shares a sophisticated dark mode aesthetic with high-contrast typography and subtle interactive elements.
- **Linear** — Features a minimalist UI, compact spatial density, and a focus on content clarity over decorative components.
- **Figma** — Exhibits a clean, functional design with high legibility and precise use of typography, using a reduced color palette.
- **Roblox Developer Documentation** — Utilizes a dark, high-contrast theme where text and code are presented with clarity, relying on strong visual hierarchy through typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #0f0f0f;
  --color-inky-void: #000000;
  --color-pure-canvas: #f0f0f0;
  --color-medium-gray: #696969;
  --color-light-gray: #b8b8b8;
  --color-darkened-canvas: #1a1a1a;
  --color-shadow-base: #080808;
  --font-sans-serif: 'sans-serif', system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-inter-display: 'Inter Display', 'Inter', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.4px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: 0.4px;
  --text-subheading: 20px;
  --leading-subheading: 1.56;
  --tracking-subheading: 0.4px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: 0.4px;
  --text-display: 40px;
  --leading-display: 1.43;
  --tracking-display: 0.4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --radius-tags: 40px;
  --radius-cards: 4px;
  --radius-icons: 12px;
  --radius-inputs: 8px;
  --radius-buttons: 100px;
  --shadow-xl: rgba(0, 0, 0, 0.5) 0px 1px 10px -2px;
  --shadow-xl-2: rgba(0, 0, 0, 0.16) 0px 0px 10px 0px;
  --surface-main-canvas: #0f0f0f;
  --surface-footer-canvas: #1a1a1a;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #0f0f0f;
  --color-inky-void: #000000;
  --color-pure-canvas: #f0f0f0;
  --color-medium-gray: #696969;
  --color-light-gray: #b8b8b8;
  --color-darkened-canvas: #1a1a1a;
  --color-shadow-base: #080808;
  --font-sans-serif: 'sans-serif', system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-inter-display: 'Inter Display', 'Inter', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.4px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: 0.4px;
  --text-subheading: 20px;
  --leading-subheading: 1.56;
  --tracking-subheading: 0.4px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: 0.4px;
  --text-display: 40px;
  --leading-display: 1.43;
  --tracking-display: 0.4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --radius-tags: 40px;
  --radius-cards: 4px;
  --radius-icons: 12px;
  --radius-inputs: 8px;
  --radius-buttons: 100px;
  --shadow-xl: rgba(0, 0, 0, 0.5) 0px 1px 10px -2px;
  --shadow-xl-2: rgba(0, 0, 0, 0.16) 0px 0px 10px 0px;
  --surface-main-canvas: #0f0f0f;
  --surface-footer-canvas: #1a1a1a;
}
```
