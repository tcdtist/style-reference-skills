---
version: alpha
name: "Quo (formerly OpenPhone)"
description: "Quo adopts a stark, high-contrast digital workspace aesthetic: a spacious white canvas punctuated by bold black typography and strategic use of a single vivid lime accent. The design feels direct and functional, leveraging strong visual hierarchy created by heavy black text and subtle, almost invisible UI elements. Components are lightweight with minimal borders, emphasizing content over chrome, and utilizing soft gray backgrounds for subtle differentiation."
theme: "light"
industry: "saas"
source_url: "https://www.openphone.com"
refero_style_id: "792089e6-c045-498c-8ba1-48d72c206c66"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510846773-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510846773-thumb.jpg"
extracted_at: "2026-04-30T01:01:16.418Z"
---

# Quo (formerly OpenPhone) — Style Reference

> High-contrast digital workspace.

**Theme:** light

**Industry:** saas

Quo adopts a stark, high-contrast digital workspace aesthetic: a spacious white canvas punctuated by bold black typography and strategic use of a single vivid lime accent. The design feels direct and functional, leveraging strong visual hierarchy created by heavy black text and subtle, almost invisible UI elements. Components are lightweight with minimal borders, emphasizing content over chrome, and utilizing soft gray backgrounds for subtle differentiation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, strong borders, filled button backgrounds, brand logo |
| Surface Gray | #f7f6f5 | `--color-surface-gray` | Secondary surface backgrounds, subtle card backgrounds, soft button fills |
| Supporting Text Grey | #4d4d4d | `--color-supporting-text-grey` | Body text, secondary descriptive text |
| Subtle Border Gray | #cccccc | `--color-subtle-border-gray` | Hairline borders, dividers, disabled states |
| Dark Charcoal | #0a0a0c | `--color-dark-charcoal` | Deepest background for contrast, specialized text |
| Lime Accent | #edfc47 | `--color-lime-accent` | Green decorative accent for icons, marks, and small graphic details. Do not promote it to the primary CTA color |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Line heights:** 1.00, 1.20, 1.30, 1.50
- **Letter spacing:** normal
- **Role:** Body text, navigation, links, captions, small functional labels. A versatile workhorse for content, maintaining readability at all sizes.

### Roobert

- **Token:** `--font-roobert`
- **Substitute:** Arial
- **Weights:** 500
- **Sizes:** 20px, 24px, 40px, 48px, 56px, 64px, 88px
- **Line heights:** 0.90, 1.10, 1.20
- **Letter spacing:** -0.0200em at large sizes, -0.0100em at smaller headline sizes
- **Role:** Headlines, section titles, and prominent callouts. The specific 500 weight and tight letter-spacing create a confident, assertive tone without being overtly heavy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0px | `--text-caption` |
| body-sm | 14px | 1.5 | 0px | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 20px | 1.2 | -0.2px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.24px | `--text-heading-sm` |
| heading | 40px | 1.1 | -0.8px | `--text-heading` |
| heading-lg | 56px | 0.9 | -1.12px | `--text-heading-lg` |
| display | 88px | 0.9 | -1.76px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-189 | 189px | `--spacing-189` |
| spacing-252 | 252px | `--spacing-252` |
| spacing-255 | 255px | `--spacing-255` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 100px |
| cards | 10px |
| buttons | 6px |
| default | 10px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 11px 17px -10px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Primary Filled Button

**Role:** Call to action

Solid Ink Black (#000000) background with Canvas White (#ffffff) text. Features a 6px border radius and generous 16px horizontal/vertical padding. Dominant action element.

### Ghost Button

**Role:** Secondary action / navigation link

Transparent background with Ink Black (#000000) text and a 1px Ink Black (#000000) border. No border radius. Minimum 8px vertical and 16px horizontal padding.

### Soft Filled Button

**Role:** Light background action / tag

Surface Gray (#f7f6f5) background with Ink Black (#000000) text. Features a 10px border radius and 16px horizontal/vertical padding. Used for filters or less prominent actions.

### Default Card

**Role:** Content container

Transparent background, 10px border radius, no box shadow. 32px internal padding on all sides. Used for structured information blocks.

### Surface Accent Card

**Role:** Information display

Surface Gray (#f7f6f5) background, 10px border radius, no box shadow. No internal padding by default, allowing content to control spacing. Used for visually distinct content blocks.

### Elevated Tooltip Card

**Role:** Ephemeral information

Transparent background with a subtle shadow (rgba(0, 0, 0, 0.1) 0px 11px 17px -10px) and 10px border radius. Padding set to 24px vertical and 32px horizontal. Used for UI overlays or popups.

### Navigation Link

**Role:** Header navigation

Ink Black (#000000) text at 16px Inter 500 weight. Transparent background, no border, no padding or radius. Interactive but visually minimal.

### Subtle Badge

**Role:** Highlight label

Transparent background with Ink Black (#000000) text. No padding or radius. Used for small, unobtrusive labels.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for primary text and calls to action against Canvas White (#ffffff).
- Use Roobert 500 with tight letter-spacing for all headlines and impactful text, emphasizing confidence.
- Apply Surface Gray (#f7f6f5) for subtle background differentiation on cards and soft buttons, maintaining a muted base.
- Incorporate Lime Accent (#edfc47) sparingly for interactive elements, highlights, and decorative touches to provide energetic punctuation.
- Ensure generous internal padding of 32px for main content cards to create a spacious feel.
- Maintain a clear visual hierarchy with strong contrast between text and background, adhering to AAA accessibility standards where possible.
- Utilize 10px border radii for most containers and 6px for buttons, with 100px for pill-shaped elements like tags.

### Don't

- Avoid using multiple accent colors; rely on Lime Accent (#edfc47) as the sole chromatic highlight.
- Do not use heavy shadows or gradients; components should generally remain flat or subtly elevated with minimal box-shadows.
- Do not introduce complex background patterns; maintain large areas of Canvas White (#ffffff) or Surface Gray (#f7f6f5).
- Do not use generic system fonts for headlines; always default to Roobert 500 for brand consistency.
- Avoid excessive use of borders; elements should primarily rely on background color to define their boundaries.
- Do not use rounded corners larger than 10px for cards or smaller than 6px for active buttons.
- Do not clutter layouts; aim for comfortable density and clear visual separation with generous spacing.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.1) 0px 11px 17px -10px`

## Imagery

The visual language for imagery is minimal and functional, primarily using product screenshots and software interface depictions. These are often flat, contained within subtle card-like structures with 10px rounded corners, or occasionally full-bleed to showcase the UI. Photography is absent. Illustrations are rare, but when present, they appear as simple, almost outlined or filled icons with a flat, geometric style (e.g., illustrated money stacks in the hero). Icons are typically outlined and monochrome, carrying a consistent stroke weight. Imagery serves an explanatory or product showcase role, focusing on functionality rather than atmosphere or branding, leading to a text-dominant layout with imagery providing visual anchors.

## Layout

The page adheres to a max-width of 1200px, with content centrally aligned. The hero section is full-width, featuring a prominent centered headline over a white background, occasionally with large, simple illustrative elements. The section rhythm is primarily continuous white space, occasionally broken by soft Surface Gray (#f7f6f5) background bands that seamlessly transition into the next feature block. Content is arranged in alternating text-left/image-right or text-right/image-left patterns, often within multi-column card grids (e.g., 2-column or 3-column feature setups). The layout is spacious with clear vertical separation between sections. Navigation consists of a simple top bar with primary links and prominent 'Log in' and 'Try for free' ghost and filled buttons.

## Similar Brands

- **Superhuman** — High-contrast text on white surfaces, minimal UI chrome, dark-colored primary actions, and a focus on speed.
- **Linear** — Clean, almost monochrome interface, strong typographic hierarchy, subtle card dividers, and a focus on efficient interaction through lightweight components.
- **Notion** — White canvas, emphasis on content, soft background grays for subtle UI elements, and a system built around flexible blocks.
- **Figma** — Dominant white canvas, high-contrast text, clear functional typography, and subtle use of background colors for interactive states.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-surface-gray: #f7f6f5;
  --color-supporting-text-grey: #4d4d4d;
  --color-subtle-border-gray: #cccccc;
  --color-dark-charcoal: #0a0a0c;
  --color-lime-accent: #edfc47;
  --font-inter: 'Inter', system-ui;
  --font-roobert: 'Roobert', Arial;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -1.12px;
  --text-display: 88px;
  --leading-display: 0.9;
  --tracking-display: -1.76px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-189: 189px;
  --spacing-252: 252px;
  --spacing-255: 255px;
  --radius-tags: 100px;
  --radius-cards: 10px;
  --radius-buttons: 6px;
  --radius-default: 10px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 11px 17px -10px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-surface-gray: #f7f6f5;
  --color-supporting-text-grey: #4d4d4d;
  --color-subtle-border-gray: #cccccc;
  --color-dark-charcoal: #0a0a0c;
  --color-lime-accent: #edfc47;
  --font-inter: 'Inter', system-ui;
  --font-roobert: 'Roobert', Arial;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -1.12px;
  --text-display: 88px;
  --leading-display: 0.9;
  --tracking-display: -1.76px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-189: 189px;
  --spacing-252: 252px;
  --spacing-255: 255px;
  --radius-tags: 100px;
  --radius-cards: 10px;
  --radius-buttons: 6px;
  --radius-default: 10px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 11px 17px -10px;
}
```
