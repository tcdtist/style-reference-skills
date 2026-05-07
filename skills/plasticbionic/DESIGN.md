---
version: alpha
name: "plasticbionic"
description: "plasticbionic employs a stark, minimalist aesthetic with an extreme contrast between pure black and white surfaces. Typography is the primary visual element, often very large and spaced out, creating a deliberate, unhurried rhythm. The system prioritizes quiet backgrounds and delicate boundary lines, allowing content blocks to define themselves through negative space and subtle shifts in background color. Interactions are marked by thin, almost invisible borders and transitions."
theme: "light"
industry: "design"
source_url: "https://plasticbionic.com"
refero_style_id: "8904c855-fae9-489c-8aed-e2f7846fb27f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514337262-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514337262-thumb.jpg"
extracted_at: "2026-04-30T01:59:17.100Z"
---

# plasticbionic — Style Reference

> Monochrome Gallery Canvas – a stark, high-contrast canvas where art is king.

**Theme:** light

**Industry:** design

plasticbionic employs a stark, minimalist aesthetic with an extreme contrast between pure black and white surfaces. Typography is the primary visual element, often very large and spaced out, creating a deliberate, unhurried rhythm. The system prioritizes quiet backgrounds and delicate boundary lines, allowing content blocks to define themselves through negative space and subtle shifts in background color. Interactions are marked by thin, almost invisible borders and transitions.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #000000 | `--color-midnight-void` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page background, text on dark backgrounds, subtle surface overlays, inactive borders |
| Stonewash Gray | #c5c1c0 | `--color-stonewash-gray` | Secondary background surface, offering a slight visual break from pure white |
| Warm Mist | #e8e1d9 | `--color-warm-mist` | Tertiary background surface, providing a warm, almost beige undertone for content sections |

## Tokens — Typography

### Lausanne-Regular

- **Token:** `--font-lausanne-regular`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 9px, 14px, 26px, 150px
- **Line heights:** 0.78, 1.00, 1.20, 1.48
- **Letter spacing:** 0.14, 0.14, -0.027, -0.027
- **Role:** All text elements: headings, body copy, navigation, links, and various labels. The family's clean lines and varied letter-spacing at different sizes contribute to a distinct, almost architectural feel, especially with the extremely wide tracking on some elements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1 | 0.14px | `--text-body` |
| heading | 26px | 1.2 | -0.027px | `--text-heading` |
| display | 150px | 0.78 | -0.027px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-90 | 90px | `--spacing-90` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 90px |
| cardPadding | 15px |
| elementGap | 10px |

## Components

### Navigation Link

**Role:** Interactive text link in the top navigation or content filtering.

Uses Lausanne-Regular, 14px, weight 400. Text color is Midnight Void (#000000). On hover/active, a thin 1px border appears below the text using Midnight Void (#000000).

### Large Display Headline

**Role:** Prominent headings for showcasing project names.

Lausanne-Regular, 150px, weight 400, color Midnight Void (#000000), letter spacing -0.027em. Features extremely large size and wide tracking for an impactful, sparse delivery.

### Subtle Section Divider

**Role:** Separates content sections or UI elements with a delicate line.

A 1px border using Canvas White (#ffffff) or Midnight Void (#000000) for visual separation, often acting as a bottom border for interactive areas.

### Actionable Text Label

**Role:** Labels for interactive actions like 'Change View'.

Lausanne-Regular, 9px, weight 400, color Midnight Void (#000000), letter spacing 0.14em. Features a subtle, widely tracked uppercase style.

### Project Overview Tag

**Role:** Tags for project categories (e.g., 'Ai, Art Direction').

Lausanne-Regular, 9px, weight 400, color Midnight Void (#000000), letter spacing 0.14em. Used in close proximity to project titles at a smaller scale.

## Do's and Don'ts

### Do

- Use Midnight Void (#000000) as the default text color on Canvas White (#ffffff) backgrounds, ensuring maximum contrast.
- Apply Lausanne-Regular at 150px with a letter-spacing of -0.027em for primary page headings to create a signature large, spaced-out typographic style.
- Utilize a 1px border of Midnight Void (#000000) or Canvas White (#ffffff) for all interactive element boundaries and visual dividers.
- Divide content sections primarily using background color changes between Canvas White (#ffffff), Stonewash Gray (#c5c1c0), and Warm Mist (#e8e1d9).
- Maintain a default padding of 15px for content surrounding interactive elements to ensure comfortable spacing.
- Implement a generous 90px vertical gap between major content sections to enhance the sense of space and visual quiet.
- Employ the 9px Lausanne-Regular with 0.14em letter-spacing for all secondary labels and tags, ensuring a consistent micro-typography style.

### Don't

- Avoid using drop shadows or heavy box shadows; rely on background color changes and thin borders for visual hierarchy.
- Do not introduce additional color beyond the established achromatic palette; color should be absent to maintain focus on content and form.
- Refrain from using varied font families; Lausanne-Regular is the sole typeface for all content.
- Do not use generic padding values; adhere to 15px for horizontal component padding and 10px for vertical element spacing.
- Avoid adding corner radii to cards or containers; all elements should have sharp, square edges.
- Do not use different letter-spacing values from those defined for Lausanne-Regular at specific sizes (0.14em for small text, -0.027em for large text).
- Do not use highly saturated brand colors for interactive elements; all interactivity cues should be expressed through the monochrome palette and subtle borders.

## Imagery

The visual language is characterized by direct, centered product or project showcases. Imagery is large-scale, often full-width, focusing on the output of creative work. There's no use of photography in the traditional sense, but rather high-quality product visuals or digital art. When present, images are treated as contained blocks within the expansive monochrome canvas, without overlapping or complex masking. Icons are minimal, likely outlined and monochromatic where needed, such as the '+' sign for expansion.

## Layout

The page structure is full-bleed horizontally, but content is often visually centered within a clear vertical rhythm. The hero section is dominated by a large, centered project title against a pure black background. Subsequent sections feature large, distinct project showcases, each occupying a significant vertical slice of the screen. Navigation is a minimalist top bar, with thin separators or subtle hover states. The grid usage is implicit, with projects acting as large, self-contained blocks rather than a dense, repeating grid.

## Similar Brands

- **Stripe** — Similar focus on stark surfaces, high contrast typography, and minimal use of color to highlight content.
- **Muzli** — Uses large-scale project showcases and a content-forward design, with background color shifts to delineate sections.
- **AIGA Design Archives** — Emphasizes typography as a primary visual element, often at large scales, against clean, neutral backgrounds.
- **Obys Agency** — Shares the use of full-bleed sections, large, statement typography, and a refined, visually quiet aesthetic.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #000000;
  --color-canvas-white: #ffffff;
  --color-stonewash-gray: #c5c1c0;
  --color-warm-mist: #e8e1d9;
  --font-lausanne-regular: 'Lausanne-Regular', Inter;
  --text-body: 14px;
  --leading-body: 1;
  --tracking-body: 0.14px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -0.027px;
  --text-display: 150px;
  --leading-display: 0.78;
  --tracking-display: -0.027px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-40: 40px;
  --spacing-90: 90px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #000000;
  --color-canvas-white: #ffffff;
  --color-stonewash-gray: #c5c1c0;
  --color-warm-mist: #e8e1d9;
  --font-lausanne-regular: 'Lausanne-Regular', Inter;
  --text-body: 14px;
  --leading-body: 1;
  --tracking-body: 0.14px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -0.027px;
  --text-display: 150px;
  --leading-display: 0.78;
  --tracking-display: -0.027px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-40: 40px;
  --spacing-90: 90px;
  --radius-default: 0px;
}
```
