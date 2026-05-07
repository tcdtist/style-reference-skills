---
version: alpha
name: "Desktop.fm"
description: "This design system evokes a sense of digital minimalism, like an operating system interface. It uses a predominantly achromatic palette with subtle gradients on surfaces, creating depth without heavy shadows. The overall feel is one of understated functionality and quiet efficiency, utilizing precise typography and a singular vibrant accent for interactive elements."
theme: "light"
industry: "media"
source_url: "https://desktop.fm"
refero_style_id: "cb266ff9-f168-4a42-a522-f0e84508f90f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925790808-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925790808-thumb.jpg"
extracted_at: "2026-04-11T16:43:24.232Z"
---

# Desktop.fm — Style Reference

> Operating System Interface — clean-cut, functional, and digital.

**Theme:** light

**Industry:** media

This design system evokes a sense of digital minimalism, like an operating system interface. It uses a predominantly achromatic palette with subtle gradients on surfaces, creating depth without heavy shadows. The overall feel is one of understated functionality and quiet efficiency, utilizing precise typography and a singular vibrant accent for interactive elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Cloud Cover | #f1f2f3 | `--color-cloud-cover` | Page backgrounds, neutral surfaces. |
| Graphite | #111111 | `--color-graphite` | Primary text, prominent UI elements. High contrast for readability. |
| Light Steel | #dddddd | `--color-light-steel` | Button backgrounds, light interactive states. |
| Snow | #ffffff | `--color-snow` | Text on dark backgrounds, selected icons. |
| Dark Slate | #2d2d2d | `--color-dark-slate` | Secondary text, backgrounds for dark components, internal card surfaces. Offers good contrast against Snow. |
| Mid Grey | #b4b4b4 | `--color-mid-grey` | Button backgrounds for less prominent actions. |
| Ash | #777777 | `--color-ash` | Subtle stroke and icon details. |
| Neon Green | #009942 | `--color-neon-green` | Accents for decorative elements and visual interest. Its vividness pops against the neutral palette. |

## Tokens — Typography

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui, sans-serif
- **Weights:** 500, 700, 800
- **Sizes:** 12px, 16px, 18px, 28px
- **Line heights:** 1.25
- **Letter spacing:** -0.432, -0.256, -0.288, -1.008
- **Role:** Primary typeface for all UI text, headings, and buttons. Variable letter spacing maintains visual density across sizes, making UI feel compact and precise.

### monospace

- **Token:** `--font-monospace`
- **Substitute:** Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace
- **Weights:** 800
- **Sizes:** 12px
- **Line heights:** 1.25
- **Role:** Used for specific technical or code-like elements, offering a distinct visual break. The bold weight ensures it remains legible at small sizes.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-2 | 2px | `--spacing-2` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 25px |
| buttons | 20px |
| default | 1.5px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 0px |
| elementGap | 2px |

## Components

### Main CTA Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — Primary & Utility

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Status Badge & Monospace Tag Collection

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Info Button

**Role:** Utility button

Circular button with a 50% border radius acting as an info icon. Background: Light Steel (#dddddd), text: Graphite (#2d2d2d). No internal padding specified, implies icon fitting tightly.

### Selected Info Button

**Role:** Active utility button

Circular button with a 50% border radius for active states. Background: Mid Grey (#b4b4b4), text: Snow (#ffffff). No internal padding, indicates a toggle or enabled state.

### Main Card

**Role:** Content container

A light content container with Cloud Cover (#f1f2f3) background and a 25px border-radius. Features a prominent shadow: rgba(51, 51, 51, 0.1) 0px 0px 40px 0px, suggesting an elevated, floating presence on the page.

## Do's and Don'ts

### Do

- Prioritize the achromatic palette with Cloud Cover (#f1f2f3) as background and Graphite (#111111) as primary text for core content.
- Apply a 25px border-radius to all primary content cards, reinforcing the soft, digital aesthetic.
- Use the specific letter-spacing values from the -apple-system font profiles (-0.0360em at 12px, -0.0160em at 16px, etc.) for all text to maintain visual density.
- Implement the rgba(51, 51, 51, 0.1) 0px 0px 40px 0px shadow for all elevated card components to create subtle depth.
- Reserve Neon Green (#009942) exclusively for decorative elements or non-critical accents in illustrations and icons.
- Use Dark Slate (#2d2d2d) for primary call-to-action buttons, with 5px vertical and 20px horizontal padding and 20px border-radius.

### Don't

- Avoid strong, saturated colors outside of the designated accent palette; maintain the dominant neutral scheme.
- Do not deviate from the specified border radii; avoid sharp corners or excessively rounded elements beyond the 20px/25px standard.
- Do not use generic shadows; adhere strictly to the defined card shadow for all elevated elements.
- Avoid large negative letter spacing on display type; only apply the precisely defined values for -apple-system.
- Do not introduce additional font families; stick to -apple-system (or its system-ui substitute) and monospace.
- Do not use more than two distinct button styles on a single screen without a clear hierarchy.

## Imagery

The site uses abstract 3D renders with strong reflections and geometric light lines. The central image of a reflective silver CD-ROM, bathed in dynamic blue-green light, is surrounded by thin, vivid Neon Green (#009942) laser-like lines that crisscross the background. Imagery serves a decorative and atmospheric role, establishing a futuristic, tech-oriented mood without direct product representation. The treatment is full-bleed for the background element, with a contained, center-stage main object.

## Layout

The layout is primarily centered and minimal, focusing on a single hero element. The page operates on a full-bleed model with a light gray background, presenting a single focal point (the 3D CD render) with interactive elements centered beneath it. Elements are stacked vertically with compact spacing, creating a dense yet clean presentation. There is no visible navigation or complex grid structure, suggesting a single-purpose landing page rather than a multi-page site.

## Similar Brands

- **Linear** — Shares a highly constrained achromatic palette with a single vibrant accent color and precise, compact typography.
- **Dropbox (new branding)** — Uses subtle shadows and rounded corners on cards combined with a light, airy, and functional aesthetic.
- **Raycast** — Features a strong focus on minimalist UI, functional iconography, and a digital tool aesthetic.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-cloud-cover: #f1f2f3;
  --color-graphite: #111111;
  --color-light-steel: #dddddd;
  --color-snow: #ffffff;
  --color-dark-slate: #2d2d2d;
  --color-mid-grey: #b4b4b4;
  --color-ash: #777777;
  --color-neon-green: #009942;
  --font-apple-system: '-apple-system', system-ui, sans-serif;
  --font-monospace: 'monospace', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  --spacing-0: 0px;
  --spacing-2: 2px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --radius-cards: 25px;
  --radius-buttons: 20px;
  --radius-default: 1.5px;
}
```

### Tailwind v4

```css
@theme {
  --color-cloud-cover: #f1f2f3;
  --color-graphite: #111111;
  --color-light-steel: #dddddd;
  --color-snow: #ffffff;
  --color-dark-slate: #2d2d2d;
  --color-mid-grey: #b4b4b4;
  --color-ash: #777777;
  --color-neon-green: #009942;
  --font-apple-system: '-apple-system', system-ui, sans-serif;
  --font-monospace: 'monospace', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  --spacing-0: 0px;
  --spacing-2: 2px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --radius-cards: 25px;
  --radius-buttons: 20px;
  --radius-default: 1.5px;
}
```
