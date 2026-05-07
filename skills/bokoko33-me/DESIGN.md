---
version: alpha
name: "bokoko33.me"
description: "The bokoko33.me system presents a sparse, structured portfolio space, utilizing a near-monochrome palette with a single vibrant violet to delineate interactive elements and accents. Typography is compact and precise, favoring a monospace font that lends a technical, direct feel. Components are extremely lightweight, largely relying on subtle borders and minimal padding rather than heavy fills or shadows. The overall impression is one of uncluttered professional directness, where visual focus is drawn by clear information hierarchy and discrete points of color."
theme: "light"
industry: "design"
source_url: "https://bokoko33.me"
refero_style_id: "075fda17-544b-4a02-86ff-5e3ea59f96d6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513659499-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513659499-thumb.jpg"
extracted_at: "2026-04-30T01:47:56.135Z"
---

# bokoko33.me — Style Reference

> Monospace grid on a violet canvas

**Theme:** light

**Industry:** design

The bokoko33.me system presents a sparse, structured portfolio space, utilizing a near-monochrome palette with a single vibrant violet to delineate interactive elements and accents. Typography is compact and precise, favoring a monospace font that lends a technical, direct feel. Components are extremely lightweight, largely relying on subtle borders and minimal padding rather than heavy fills or shadows. The overall impression is one of uncluttered professional directness, where visual focus is drawn by clear information hierarchy and discrete points of color.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Fog | #fafcfc | `--color-canvas-fog` | Page background, providing a subtle off-white base |
| Twilight Violet | #5a2fc3 | `--color-twilight-violet` | Primary text color for headings and body text, with a deep purple hue that retains legibility |
| Link Grape | #6135d0 | `--color-link-grape` | Interactive link backgrounds and borders, providing a distinct active state contrast. Also used for the dominant canvas background in some sections |
| Subtle Lavender | #dad3f1 | `--color-subtle-lavender` | Hairline borders and muted separators, creating a delicate visual division |
| Frost White | #ffffff | `--color-frost-white` | Light text on dark surfaces, inverse labels, and high-contrast captions. Do not promote it to the primary CTA color |

## Tokens — Typography

### Geist Mono

- **Token:** `--font-geist-mono`
- **Substitute:** Space Mono, Fira Code
- **Weights:** 400, 500
- **Sizes:** 15px, 17px, 30px
- **Line heights:** 1.30, 1.50, 1.60
- **Letter spacing:** normal
- **Role:** The primary typeface for all content, including headings, body text, and navigation. Its monospace nature provides a consistent, technical aesthetic and uniform line rhythm.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 15px | 1.5 | — | `--text-caption` |
| body-sm | 17px | 1.5 | — | `--text-body-sm` |
| body | 30px | 1.3 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-118 | 118px | `--spacing-118` |
| spacing-142 | 142px | `--spacing-142` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 5.27px |
| interactive | 3.16px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 142px |
| cardPadding | 24px |
| elementGap | 21px |

## Components

### Header Navigation Link

**Role:** Interactive link in the primary navigation.

Text in Twilight Violet, Geist Mono regular, 3.16px border-radius, 6px horizontal padding. On hover/active, a Link Grape background with Frost White text, indicating selection.

### Project Card Item

**Role:** Container for individual project entries.

Transparent background with no boxShadow detected. Uses 23.61px vertical padding and 0px horizontal padding, with a 1px solid Subtle Lavender border. Content is aligned to a grid line, not contained by internal padding.

### Project URL Link

**Role:** External link to a project website.

Background is Link Grape with Frost White text, 3.16px border-radius and 6px horizontal padding. Font is Geist Mono regular.

### Footer Navigation Link

**Role:** Interactive link in the footer navigation.

Text in Twilight Violet, Geist Mono regular, no explicit background or border, minimal padding.

## Do's and Don'ts

### Do

- Use Twilight Violet (#5a2fc3) for all primary body text and headings.
- Apply Geist Mono for all typographic elements, maintaining normal letter-spacing.
- Wrap interactive links with a Link Grape (#6135d0) background and Frost White (#ffffff) text to signify action.
- Reinforce interactive states and element boundaries using 1px borders of Subtle Lavender (#dad3f1).
- Maintain generous vertical spacing between sections, using a sectionGap of 142px.
- Apply a 3.16px border-radius consistently to all interactive elements like links and buttons.
- Use Canvas Fog (#fafcfc) as the general page background color.

### Don't

- Avoid using any form of boxShadow or drop-shadow on elements; elevation is not part of this visual system.
- Do not introduce gradients; the system relies on solid color fills for all elements.
- Do not use highly saturated colors for decorative elements; restrict vibrant color primarily to interactive link backgrounds.
- Avoid heavy borders or solid fills for general cards; they should remain transparent with subtle borders.
- Do not vary letter-spacing for different type sizes; keep it at normal across the board.
- Do not use rounded corners beyond 5.27px; the system prefers subtle rounding or sharp edges.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas Fog Base | #fafcfc | Dominant background for the entire page, providing an airy base. |
| 2 | Link Grape Active Surface | #6135d0 | Background for interactive elements like buttons and links, making them 'pop' from the neutral canvas. |

## Imagery

The site's imagery consists primarily of product screenshots or contained visual representations of websites/projects, showcased within a visual frame. Images appear flat and contained without overlapping elements or raw edges. There are no full-bleed photographs or illustrations; the focus is on displaying the work itself in a structured, almost technical manner. Icons, if present, are minimal and likely outlined to match the system's lightweight aesthetic. Imagery serves primarily as direct content showcase rather than decorative atmosphere.

## Layout

The page exhibits a content-contained model, with a visual maximum width (though not explicitly constrained by a single `pageMaxWidth` value, content appears to align centrally). The hero section is minimal, acting as a clear title area. Content areas follow a consistent vertical rhythm with significant spacing between sections (142px), creating a breathable, sparse composition. Projects are presented in a two-column grid-like structure, with text descriptions to the left and project visuals to the right. There are no alternating background bands, maintaining a consistent Canvas Fog background throughout. Navigation is a simple top-right minimalist link list, repeated in a footer.

## Similar Brands

- **Fey** — Sparse, monochrome design with a single highly saturated accent color for interaction.
- **Blinkist** — Emphasis on clear typography and minimal UI, using subtle borders over heavy container elements.
- **Linear** — Monospace font usage across UI, structured grid layouts, and restrained use of color for functional elements.
- **Savon** — Focus on content-forward presentation with ample whitespace and precise typographic hierarchy without decorative flourishes.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-fog: #fafcfc;
  --color-twilight-violet: #5a2fc3;
  --color-link-grape: #6135d0;
  --color-subtle-lavender: #dad3f1;
  --color-frost-white: #ffffff;
  --font-geist-mono: 'Geist Mono', Space Mono, Fira Code;
  --text-caption: 15px;
  --leading-caption: 1.5;
  --text-body-sm: 17px;
  --leading-body-sm: 1.5;
  --text-body: 30px;
  --leading-body: 1.3;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-42: 42px;
  --spacing-47: 47px;
  --spacing-100: 100px;
  --spacing-118: 118px;
  --spacing-142: 142px;
  --radius-default: 5.27px;
  --radius-interactive: 3.16px;
  --surface-canvas-fog-base: #fafcfc;
  --surface-link-grape-active-surface: #6135d0;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-fog: #fafcfc;
  --color-twilight-violet: #5a2fc3;
  --color-link-grape: #6135d0;
  --color-subtle-lavender: #dad3f1;
  --color-frost-white: #ffffff;
  --font-geist-mono: 'Geist Mono', Space Mono, Fira Code;
  --text-caption: 15px;
  --leading-caption: 1.5;
  --text-body-sm: 17px;
  --leading-body-sm: 1.5;
  --text-body: 30px;
  --leading-body: 1.3;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-42: 42px;
  --spacing-47: 47px;
  --spacing-100: 100px;
  --spacing-118: 118px;
  --spacing-142: 142px;
  --radius-default: 5.27px;
  --radius-interactive: 3.16px;
  --surface-canvas-fog-base: #fafcfc;
  --surface-link-grape-active-surface: #6135d0;
}
```
