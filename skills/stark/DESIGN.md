---
version: alpha
name: "Stark"
description: "Stark employs a clean, purposeful aesthetic built around a vivid purple accent against a largely achromatic backdrop. Its visual language prioritizes clear communication through robust typography and generous spacing, allowing functional elements to stand out. Component surfaces are light, with subtle shadow usage, focusing on content over heavy decoration. The overall impression is one of efficiency and directness, with the purple acting as a focused 'activate' signal."
theme: "light"
industry: "saas"
source_url: "https://www.getstark.co"
refero_style_id: "ea9c37e8-c56c-42aa-8e81-9b55222a5cd3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520078545-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520078545-thumb.jpg"
extracted_at: "2026-04-30T03:35:01.725Z"
---

# Stark — Style Reference

> Vivid Purple Actuator

**Theme:** light

**Industry:** saas

Stark employs a clean, purposeful aesthetic built around a vivid purple accent against a largely achromatic backdrop. Its visual language prioritizes clear communication through robust typography and generous spacing, allowing functional elements to stand out. Component surfaces are light, with subtle shadow usage, focusing on content over heavy decoration. The overall impression is one of efficiency and directness, with the purple acting as a focused 'activate' signal.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #10284b | `--color-midnight-ink` | Primary heading and body text, button text on yellow. This deep blue-gray provides strong contrast and a sense of authority |
| Stark Violet | #381fd1 | `--color-stark-violet` | Primary action background, interactive element highlights, and key brand accents. This vivid violet acts as a strong activation signal; Decorative background gradient. Often appears in conjunction with transparent areas |
| Seafoam Mint | #99d6cc | `--color-seafoam-mint` | Card background, decorative surface. A muted, cool green providing a soft, secondary surface treatment |
| Stark Gold | #fedb63 | `--color-stark-gold` | Secondary action background, decorative gradient elements. A vivid yellow for contrast and emphasis; Decorative background gradient. Often appears in conjunction with transparent areas |
| Lavender Mist | #e5e0ff | `--color-lavender-mist` | Lightest button background, soft background for interactive elements |
| Linen Canvas | #faf5ff | `--color-linen-canvas` | Card backgrounds, section backgrounds. A very light, slightly tinted base for UI elements |
| Cloud White | #ffffff | `--color-cloud-white` | Page backgrounds, elevated card surfaces, primary text on dark backgrounds |
| Outline Gray | #e5e7eb | `--color-outline-gray` | Hairline borders, dividers, subtle separators |
| Carbon Black | #000000 | `--color-carbon-black` | Secondary text, dark iconography |
| Bone White | #f6f6eb | `--color-bone-white` | Muted body text, subtle background tint |

## Tokens — Typography

### ArminGrotesk

- **Token:** `--font-armingrotesk`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 900
- **Sizes:** 14px, 16px, 20px, 24px, 28px, 48px, 56px, 110px
- **Line heights:** 1.10, 1.43, 1.50, 1.70
- **Letter spacing:** -0.0200em at 110px, -0.0100em at 56px, 0.0200em at 14px, 0.0800em at 16px
- **Role:** Primary typeface for all UI elements, headings, and body text. The range of weights and negative letter-spacing on larger sizes creates a confident yet refined presence.

### RobotoMono

- **Token:** `--font-robotomono`
- **Substitute:** Space Mono
- **Weights:** 700
- **Sizes:** 13px, 16px
- **Line heights:** 1.40
- **Letter spacing:** 0.0800em at 13px, 0.0800em at 16px
- **Role:** Used for code snippets or technical annotations, providing a distinct, monospace feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.4 | 1.04px | `--text-caption` |
| body | 16px | 1.5 | 0.08px | `--text-body` |
| subheading | 20px | 1.5 | — | `--text-subheading` |
| heading-sm | 24px | 1.5 | — | `--text-heading-sm` |
| heading | 28px | 1.43 | — | `--text-heading` |
| heading-lg | 48px | 1.1 | — | `--text-heading-lg` |
| display | 56px | 1.1 | -0.56px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-188 | 188px | `--spacing-188` |
| spacing-233 | 233px | `--spacing-233` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 20px |
| cards | 12px |
| buttons | 6px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Filled button for primary calls to action.

Background: Stark Violet (#381fd1), Text: Cloud White (#ffffff). Padding: 6px vertical, 24px horizontal. Border Radius: 6px. Uses ArminGrotesk.

### Secondary Action Button

**Role:** Filled button for secondary calls to action.

Background: Stark Gold (#fedb63), Text: Midnight Ink (#10284b). Padding: 6px vertical, 24px horizontal. Border Radius: 6px. Uses ArminGrotesk.

### Ghost Internal Link Button

**Role:** Minimal button for internal navigation links, often in headers or footers.

Background: transparent, Text: Cloud White (#ffffff). Padding: 0px vertical, 8px horizontal. Border Radius: 6px. Uses ArminGrotesk.

### Information Card Button

**Role:** Larger area button used for descriptive information, often within a card layout.

Background: Lavender Mist (#e5e0ff), Text: Stark Violet (#381fd1). Padding: 24px all sides. Border Radius: 20px. Uses ArminGrotesk.

### Feature Card (Teal)

**Role:** Informational card highlighted with a distinct background.

Background: Seafoam Mint (#99d6cc). Padding: 64px all sides. Border Radius: 40px. No shadow.

### Feature Card (Lavender)

**Role:** Informational card with a soft background.

Background: Linen Canvas (#faf5ff). Padding: 56px all sides. Border Radius: 40px. No shadow.

### Nested UI Card

**Role:** Card used for encapsulating UI elements or content, often found within other sections.

Background: Linen Canvas (#faf5ff). Padding: 24px all sides. Border Radius: 12px. No shadow.

## Do's and Don'ts

### Do

- Use Stark Violet (#381fd1) exclusively for primary interactive actions or key brand accents to ensure focus.
- Apply ArminGrotesk weight 900 for all main headings (display, heading-lg) to convey impact.
- Maintain a clear visual hierarchy by utilizing Midnight Ink (#10284b) for primary text and Carbon Black (#000000) for secondary or supporting text.
- Employ Outline Gray (#e5e7eb) for all hairline borders and dividers to maintain a light, open aesthetic.
- Use a consistent border-radius of 6px for interactive buttons and 12px for content cards, reserving 40px for larger, decorative cards.
- Ensure generous spacing around content with sections separated by 48px and card content padded by 24px.
- Pair Stark Gold (#fedb63) with Midnight Ink (#10284b) text for secondary call-to-action buttons, creating a vibrant contrast.

### Don't

- Do not use saturated colors for large background areas unless it is the hero section utilizing Stark Violet (#381fd1).
- Avoid arbitrary use of shadows; most cards and surfaces should remain flat or use very subtle elevation, as indicated by the absence of explicit shadow tokens.
- Do not introduce new typefaces; rely solely on ArminGrotesk and RobotoMono for all typographic needs.
- Refrain from using more than two distinct accent colors on a single screen to prevent visual clutter and maintain focus on Stark Violet.
- Do not break the established spacing rhythm; for example, avoid small, inconsistent element gaps other than the default 8px.
- Do not use generic gray tones when specific neutral tints like Linen Canvas (#faf5ff) or Bone White (#f6f6eb) are available for surfaces and muted text.
- Avoid applying strong gradients unless they are the specific linear-gradient patterns using Stark Gold or Stark Violet against transparent backgrounds for decorative purposes.

## Imagery

This system primarily uses product screenshots that are full-bleed or strategically placed on light backgrounds, often with a slight perspective to reveal multiple application windows. Illustrations, when present, are flat, outlined, geometric, and use a limited brand-color palette (Stark Violet, Stark Gold, and muted blues/greens) to explain concepts rather than merely decorate. Icons are outlined, mono-color (usually Carbon Black or Stark Violet), with a medium stroke weight. Imagery is present but the UI remains text-dominant, with visuals serving to explain or showcase the product rather than create atmosphere.

## Layout

The page primarily uses a max-width contained layout for content sections, set against full-bleed backgrounds that alternate between Cloud White and Linen Canvas. The hero section is full-bleed Stark Violet with a large, centered white headline and supporting body text. Content beyond the hero typically follows a two-column distribution, often alternating text-left/image-right. Feature sections sometimes employ a 4-column card grid. Vertical spacing is generous and consistent, with sections clearly delineated by background changes and a typical section gap of 48px. The navigation is a sticky top bar with a logo, text links, and two distinct action buttons.

## Similar Brands

- **Figma** — Clean, light UI with strong emphasis on product screenshots and a distinctive brand accent color for interactive elements.
- **Linear** — Purposeful use of typography, tight information density with clear spacing, and a focus on functionality over heavy styling.
- **Notion** — Achromatic canvas with subtle surface variations and a single, vibrant accent color that defines interactive states and brand marks.
- **Asana** — Clear, hierarchy-driven layouts, functional color use for status and actions, and lightweight component design.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #10284b;
  --color-stark-violet: #381fd1;
  --color-seafoam-mint: #99d6cc;
  --color-stark-gold: #fedb63;
  --color-lavender-mist: #e5e0ff;
  --color-linen-canvas: #faf5ff;
  --color-cloud-white: #ffffff;
  --color-outline-gray: #e5e7eb;
  --color-carbon-black: #000000;
  --color-bone-white: #f6f6eb;
  --font-armingrotesk: 'ArminGrotesk', Inter;
  --font-robotomono: 'RobotoMono', Space Mono;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: 1.04px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.08px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --text-heading: 28px;
  --leading-heading: 1.43;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --text-display: 56px;
  --leading-display: 1.1;
  --tracking-display: -0.56px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-144: 144px;
  --spacing-188: 188px;
  --spacing-233: 233px;
  --radius-tags: 20px;
  --radius-cards: 12px;
  --radius-buttons: 6px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #10284b;
  --color-stark-violet: #381fd1;
  --color-seafoam-mint: #99d6cc;
  --color-stark-gold: #fedb63;
  --color-lavender-mist: #e5e0ff;
  --color-linen-canvas: #faf5ff;
  --color-cloud-white: #ffffff;
  --color-outline-gray: #e5e7eb;
  --color-carbon-black: #000000;
  --color-bone-white: #f6f6eb;
  --font-armingrotesk: 'ArminGrotesk', Inter;
  --font-robotomono: 'RobotoMono', Space Mono;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: 1.04px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.08px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --text-heading: 28px;
  --leading-heading: 1.43;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --text-display: 56px;
  --leading-display: 1.1;
  --tracking-display: -0.56px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-144: 144px;
  --spacing-188: 188px;
  --spacing-233: 233px;
  --radius-tags: 20px;
  --radius-cards: 12px;
  --radius-buttons: 6px;
}
```
