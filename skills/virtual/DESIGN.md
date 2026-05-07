---
version: alpha
name: "Virtual"
description: "This design system presents a stark, high-contrast digital interface. Dominated by deep black backgrounds and crisp white text, it leverages an accent orange purely for subtle guidance and status. Interaction elements are clearly defined by white outline borders, maintaining the minimalist aesthetic. Typography combines a structured, technical display font with a more flexible body font to create hierarchy within this constrained palette. The overall impression is one of precise control and focused functionality within a dark, almost console-like environment."
theme: "dark"
industry: "other"
source_url: "https://virtual.plus-ex.com/showroom"
refero_style_id: "572bc29f-8827-4f77-b248-08dddf1c2e26"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515622785-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515622785-thumb.jpg"
extracted_at: "2026-04-30T02:20:39.517Z"
---

# Virtual — Style Reference

> Minimalist digital console.

**Theme:** dark

**Industry:** other

This design system presents a stark, high-contrast digital interface. Dominated by deep black backgrounds and crisp white text, it leverages an accent orange purely for subtle guidance and status. Interaction elements are clearly defined by white outline borders, maintaining the minimalist aesthetic. Typography combines a structured, technical display font with a more flexible body font to create hierarchy within this constrained palette. The overall impression is one of precise control and focused functionality within a dark, almost console-like environment.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #000000 | `--color-midnight-void` | Page background, button text on outlined buttons |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text, outlined button borders, decorative framework lines |
| Muted Ash | #666666 | `--color-muted-ash` | Secondary helper text, subtle borders |
| Accent Orange | #ff5c00 | `--color-accent-orange` | Subtle instruction text, highlights, low-prominence accents |

## Tokens — Typography

### neue-haas-grotesk-display

- **Token:** `--font-neue-haas-grotesk-display`
- **Substitute:** Helvetica Neue
- **Weights:** 500
- **Sizes:** 10px, 12px, 16px
- **Line heights:** 1.00, 1.20, 1.40
- **Letter spacing:** normal
- **Role:** Body text and navigation elements. Its crisp, modern lines provide legibility against dark backgrounds.

### IPM

- **Token:** `--font-ipm`
- **Substitute:** Staatliches
- **Weights:** 500
- **Sizes:** 30px, 60px
- **Line heights:** 1.20, 1.30
- **Letter spacing:** -0.0200em
- **Role:** Strong, attention-grabbing headlines. The tight tracking at larger sizes creates a condensed, impactful presence.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Button subtext and secondary labels, offering clear readability at smaller sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1 | — | `--text-caption` |
| heading | 30px | 1.2 | -0.6px | `--text-heading` |
| display | 60px | 1.3 | -1.2px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-156 | 156px | `--spacing-156` |
| spacing-280 | 280px | `--spacing-280` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 30px |
| elementGap | 10px |

## Components

### Outlined Button

**Role:** Primary interaction element for choices.

Features a 10px borderRadius, 2px Ghost White border, Midnight Void background, and Midnight Void text. Padding is 30px on all sides. Internal text uses Arial 13px weight 400.

### Hero Headline

**Role:** Main page title.

Uses IPM font at 60px size, weight 500, with -0.0200em letter-spacing and Ghost White color.

### Instruction Text

**Role:** Guidance or secondary hierarchy within sections.

Styled with Accent Orange, using neue-haas-grotesk-display font at 16px size, weight 500.

### Button Subtext

**Role:** Contextual information for interactive elements.

Appears below button labels; uses Arial 13px, weight 400, Muted Ash color.

## Do's and Don'ts

### Do

- Maintain a primary contrast ratio of Ghost White (#ffffff) text on Midnight Void (#000000) backgrounds.
- Use IPM font only for headlines and large display text, applying -0.0200em letter-spacing.
- Apply 10px border-radius to all buttons and similar interactive containers.
- Ensure horizontal and vertical spacing around main content blocks respects the 'spacious' density, with section gaps between 156px and 280px.
- Define interactive elements with a 2px Ghost White border over a Midnight Void background.
- Reserve Accent Orange (#ff5c00) for subtle instructional text or small, non-primary highlights.
- Use Muted Ash (#666666) exclusively for secondary, low-prominence text, like helper or descriptive labels.

### Don't

- Do not introduce new background colors; maintain the #000000 dominant canvas.
- Avoid using bold or heavy font weights; the system relies on lighter weights for a structured feel.
- Do not deviate from the outlined button style; avoid solid filled buttons.
- Prevent excessive use of Accent Orange; it is a highlight, not a primary color.
- Do not overcrowd sections; the design relies on spacious layouts and generous use of negative space.
- Avoid decorative imagery that breaks from the stark, high-contrast aesthetic; prefer purely functional or technical visuals.
- Do not use letter-spacing on neue-haas-grotesk-display or Arial; only IPM headlines feature tracking.

## Imagery

The visual language is strictly UI-focused, devoid of photography or complex illustrations. It features simple, geometric outline graphics (like the corner brackets) which serve a decorative and structural purpose, echoing a technical blueprint or digital interface. Icons are implied to be minimalist and outlined, consistent with the overall aesthetic. Imagery plays a purely decorative atmospheric role, enhancing the 'digital console' feel without conveying specific content.

## Layout

The page maintains a centered, contained layout, with content focused in the middle of the screen against a full-bleed Midnight Void background. The hero section features a prominent, centered headline with a secondary instruction line. Interactive elements, such as buttons, are also centrally aligned, arranged horizontally. Vertical rhythm is established through significant top and bottom margins on the main content block, creating ample whitespace and a spacious density. Navigation appears to be minimal, suggested by a small 'W.' icon and 'Site of the Day' label in the top right, hinting at off-canvas or minimal global controls.

## Similar Brands

- **Aerolab** — Stark dark theme with minimal accent color, strong typography, and outlined interactive elements.
- **Bruno (personal site)** — High-contrast dark mode, focus on custom typography, and use of single accent color for emphasis.
- **Locomotive** — Black backgrounds with white text, strong grid-like visual structure, and a modern, digital aesthetic.
- **Akufen (agency)** — Dark UI, distinct display typography, and a deliberate sparse use of color limited to functional highlights.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #000000;
  --color-ghost-white: #ffffff;
  --color-muted-ash: #666666;
  --color-accent-orange: #ff5c00;
  --font-neue-haas-grotesk-display: 'neue-haas-grotesk-display', Helvetica Neue;
  --font-ipm: 'IPM', Staatliches;
  --font-arial: 'Arial', Arial;
  --text-caption: 10px;
  --leading-caption: 1;
  --text-heading: 30px;
  --leading-heading: 1.2;
  --tracking-heading: -0.6px;
  --text-display: 60px;
  --leading-display: 1.3;
  --tracking-display: -1.2px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-17: 17px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-156: 156px;
  --spacing-280: 280px;
  --radius-buttons: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #000000;
  --color-ghost-white: #ffffff;
  --color-muted-ash: #666666;
  --color-accent-orange: #ff5c00;
  --font-neue-haas-grotesk-display: 'neue-haas-grotesk-display', Helvetica Neue;
  --font-ipm: 'IPM', Staatliches;
  --font-arial: 'Arial', Arial;
  --text-caption: 10px;
  --leading-caption: 1;
  --text-heading: 30px;
  --leading-heading: 1.2;
  --tracking-heading: -0.6px;
  --text-display: 60px;
  --leading-display: 1.3;
  --tracking-display: -1.2px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-17: 17px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-156: 156px;
  --spacing-280: 280px;
  --radius-buttons: 10px;
}
```
