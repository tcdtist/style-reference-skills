---
version: alpha
name: "Analogue"
description: "Analogue's design system evokes a dark, digital command center aesthetic with a focus on deep contrast and crisp typography. The visual mood is serious and professional, leveraging near-black and dark gray canvases accented by stark white and light gray text. Transparency and blur effects create a sense of depth and layered information, while minimal use of saturated color keeps the interface focused and understated, allowing the content to dominate."
theme: "dark"
industry: "design"
source_url: "https://analogueagency.com"
refero_style_id: "f68dd3d8-e8fa-4d2c-8c59-28aba06c9d8a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507051087-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507051087-thumb.jpg"
extracted_at: "2026-04-29T23:57:55.394Z"
---

# Analogue — Style Reference

> Midnight data stream

**Theme:** dark

**Industry:** design

Analogue's design system evokes a dark, digital command center aesthetic with a focus on deep contrast and crisp typography. The visual mood is serious and professional, leveraging near-black and dark gray canvases accented by stark white and light gray text. Transparency and blur effects create a sense of depth and layered information, while minimal use of saturated color keeps the interface focused and understated, allowing the content to dominate.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #000000 | `--color-deep-space` | Primary background for dark sections, robust borders, black text on light surfaces |
| Ghostly Gray | #ededed | `--color-ghostly-gray` | Key surfaces and text on dark backgrounds – creates contrast without stark pure white. Also used as background for content sections |
| Shadow | #1c1c1c | `--color-shadow` | Dark body text, secondary backgrounds in a subtle gradient from pure black, and borders for elevated elements |
| Stone | #b8b8b8 | `--color-stone` | Placeholder text, subtle dividers, and tertiary background fills for depth |
| Cloud | #ffffff | `--color-cloud` | Content backgrounds, especially for overlay elements and pure white text on dark backgrounds |
| Ash | #7a7a7a | `--color-ash` | Muted subtext, disabled states, and subtle border accents |
| Horizon | #a6a6a6 | `--color-horizon` | Helper text, less prominent headings, and soft UI accents |

## Tokens — Typography

### Graphik Medium

- **Token:** `--font-graphik-medium`
- **Substitute:** system-ui
- **Weights:** 400, 500
- **Sizes:** 11px, 13px, 17px, 18px, 40px, 60px
- **Line heights:** 1.00, 1.05, 1.10, 1.18, 1.25, 1.30
- **Letter spacing:** -0.05em at 60px, -0.04em at 40px, -0.035em at 18px, -0.031em at 17px, -0.027em at 13px, normal at 11px
- **Role:** Primary brand typeface for all headings and body copy. Its precise tracking and range of weights maintain a formal, technical feel, especially the tightly tracked larger sizes.

### sans-serif

- **Token:** `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Role:** Fallback system font for small text elements, ensuring broad compatibility.

### LCDDot TR Regular

- **Token:** `--font-lcddot-tr-regular`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 20px
- **Line heights:** 1.00
- **Letter spacing:** 0.04em for headings, 0.025em for body text
- **Role:** Decorative monospace font used sparingly for unique, data-driven or 'display' elements, such as the widely spaced 'E m o t i o n i s t h e' in the hero, adding a retro-futuristic counterpoint.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.3 | — | `--text-caption` |
| subheading | 18px | 1.18 | -0.63px | `--text-subheading` |
| heading | 40px | 1.05 | -1.6px | `--text-heading` |
| display | 60px | 1 | -3px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 1000px |
| badges | 100px |
| buttons | 13px |
| default | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Ghost Navigation Item

**Role:** Navigation links in the header

Text in Ghostly Gray (#ededed) for active states or Shadow (#1c1c1c) for inactive, on a transparent background, with 13px border radius. Hover adds a subtle blur effect to the background.

### Text Link

**Role:** Inline textual hyperlinks

Text color Deep Space (#000000) or Ash (#7a7a7a), no underline by default. On hover, text color shifts, and sometimes a subtle border appears.

### Hero Headline

**Role:** Primary heading in the hero section

Graphik Medium, primarily size 60px, weight 400 or 500, with a tight letter spacing of -0.05em, color Ghostly Gray (#ededed). Sometimes features individual characters spaced out using LCDDot TR Regular with wide tracking (0.04em).

### Body Text

**Role:** General paragraph content

Graphik Medium, size 17px, weight 400, color Shadow (#1c1c1c) on light backgrounds, or Ghostly Gray (#ededed) on dark backgrounds. Line height 1.18 maintains a dense, compact feel.

### Navigation Bar

**Role:** Main top-level persistent navigation

Frosted glass effect using a transparent Deep Space background with a backdrop filter blur(10px) or blur(20px). Features Ghost Navigation Items, centered logo, and a subtle border with Shadow (#1c1c1c).

## Do's and Don'ts

### Do

- Use Deep Space (#000000) as the primary background for dark mode sections, often with an overlying content layer using Shadow (#1c1c1c).
- Apply Graphik Medium for all textual elements and reserve LCDDot TR Regular for highly stylized, spaced-out display text.
- Maintain tight letter spacing for Graphik headings: -0.05em for display, -0.04em for headings, and -0.035em for subheadings.
- Leverage transparency and backdrop-filter: blur(10px) or blur(20px) to create layered, 'frosted glass' UI elements, especially for navigation.
- Utilize a minimal color palette composed primarily of Deep Space (#000000), Shadow (#1c1c1c), Ghostly Gray (#ededed), and Cloud (#ffffff) to maintain a monochromatic, high-contrast aesthetic.
- Implement a 10px default border radius for cards and images, with 13px for interactive elements like buttons and links.
- Employ an element spacing of 10px for vertical and horizontal rhythm between components, and 40px for section separation.

### Don't

- Avoid introducing additional saturated colors; maintain the monochromatic focus with blue tones for only the most interactive, brand-defining elements if needed.
- Do not use generic system fonts for prominent headings or body copy; always prioritize Graphik Medium.
- Refrain from using strong, opaque background colors for interactive elements. Prefer ghost buttons or subtle fills that blend with the background.
- Do not rely on large, heavy drop shadows for elevation; instead, use subtle border treatments, background blurs, and shifts in neutral color for perceived depth.
- Avoid excessive padding or large gaps; the design system favors a compact and dense information display.
- Do not use highly decorative imagery; visuals should be abstract, motion-focused, or product-centric, blending with the dark interface.

## Imagery

The visual language is characterized by abstract, high-speed light beam graphics, often full-bleed and serving as dynamic backgrounds. There's a strong emphasis on motion and digital effects rather than static photography or ornate illustrations. When type is used decoratively, it leverages wide letter-spacing, almost transforming into graphic elements itself. Iconography, if present, is expected to be simple, outlined, and monochromatic, maintaining the minimal and technical feel. Imagery acts as atmospheric mood-setting rather than direct content explanation, creating an immersive, futuristic environment.

## Layout

The page primarily uses a full-bleed structure, with the hero section dominating the viewport with a dynamic abstract background. Text and navigation elements are typically centered or symmetrically balanced within a conceptual max-width container, without explicit pageMaxWidth. Vertical rhythm is established through consistent sectionGap of 40px. Content sections appear to alternate between large, impactful headlines (sometimes widely spaced) and standard text blocks, with a compact density for body content. Navigation is a minimalist, centered floating bar with a translucent, blurred background.

## Similar Brands

- **Stripe** — High-contrast dark mode, minimalist UI with strong focus on typography, and subtle use of interactive elements.
- **Framer** — Modern web agency aesthetic, emphasizing dark backgrounds, crisp type, and often employing blur effects for UI elements.
- **Linear** — Productivity dark theme, focusing on clarity through high contrast text on dark neutral backgrounds, and compact UI density.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #000000;
  --color-ghostly-gray: #ededed;
  --color-shadow: #1c1c1c;
  --color-stone: #b8b8b8;
  --color-cloud: #ffffff;
  --color-ash: #7a7a7a;
  --color-horizon: #a6a6a6;
  --font-graphik-medium: 'Graphik Medium', system-ui;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --font-lcddot-tr-regular: 'LCDDot TR Regular', monospace;
  --text-caption: 11px;
  --leading-caption: 1.3;
  --text-subheading: 18px;
  --leading-subheading: 1.18;
  --tracking-subheading: -0.63px;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --tracking-heading: -1.6px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -3px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-100: 100px;
  --radius-pill: 1000px;
  --radius-badges: 100px;
  --radius-buttons: 13px;
  --radius-default: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #000000;
  --color-ghostly-gray: #ededed;
  --color-shadow: #1c1c1c;
  --color-stone: #b8b8b8;
  --color-cloud: #ffffff;
  --color-ash: #7a7a7a;
  --color-horizon: #a6a6a6;
  --font-graphik-medium: 'Graphik Medium', system-ui;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --font-lcddot-tr-regular: 'LCDDot TR Regular', monospace;
  --text-caption: 11px;
  --leading-caption: 1.3;
  --text-subheading: 18px;
  --leading-subheading: 1.18;
  --tracking-subheading: -0.63px;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --tracking-heading: -1.6px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -3px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-100: 100px;
  --radius-pill: 1000px;
  --radius-badges: 100px;
  --radius-buttons: 13px;
  --radius-default: 10px;
}
```
