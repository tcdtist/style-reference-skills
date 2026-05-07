---
version: alpha
name: "Jakub Reis"
description: "Jakub Reis employs a minimalist, high-contrast aesthetic, building a portfolio experience around crisp black text on a bright canvas. The typography is precise, with varied weights and letter-spacing creating a sophisticated rhythm. The layout prioritizes ample negative space, directing focus to individual project showcases and their accompanying metadata, creating a gallery-like atmosphere."
theme: "light"
industry: "design"
source_url: "https://jakubreis.com"
refero_style_id: "3af36935-8383-49e7-857e-9fb5caa06966"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520513056-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520513056-thumb.jpg"
extracted_at: "2026-04-30T03:42:10.013Z"
---

# Jakub Reis — Style Reference

> Gallery Grid of Precision

**Theme:** light

**Industry:** design

Jakub Reis employs a minimalist, high-contrast aesthetic, building a portfolio experience around crisp black text on a bright canvas. The typography is precise, with varied weights and letter-spacing creating a sophisticated rhythm. The layout prioritizes ample negative space, directing focus to individual project showcases and their accompanying metadata, creating a gallery-like atmosphere.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #f8f8f8 | `--color-canvas-white` | Page background, primary surface for content areas |
| Ink Black | #000000 | `--color-ink-black` | All text (headings, body, links, navigation), border elements, and functional UI strokes. Its starkness against Canvas White defines the visual impact |
| Ash Black | #080808 | `--color-ash-black` | Subtle variation of Ink Black, used for text and borders |
| Sandstone Tan | #f8e8d8 | `--color-sandstone-tan` | Secondary background surface, used for alternating content sections |
| Lavendar Gray | #e8d8f8 | `--color-lavendar-gray` | Tertiary background surface, for distinguishing content blocks |
| Slate Gray | #d8d8d8 | `--color-slate-gray` | Lightest gray surface or subtle divider |
| Electric Violet | #7848e8 | `--color-electric-violet` | Accent color |

## Tokens — Typography

### Degular

- **Token:** `--font-degular`
- **Substitute:** system-ui
- **Weights:** 300, 400
- **Sizes:** 16px, 18px, 24px, 30px, 50px
- **Line heights:** 0.92, 1.00, 1.11, 1.25, 1.33
- **Letter spacing:** 0.0330em, 0.0330em, 0.0330em, 0.0560em, 0.0560em
- **Role:** Primary typeface for all content. The varied weights and precise letter-spacing create a distinct typographic voice, balancing impact with refinement.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 16px | 1.33 | 0.53px | `--text-caption` |
| body | 18px | 1.25 | 0.59px | `--text-body` |
| subheading | 24px | 1.11 | 0.79px | `--text-subheading` |
| heading | 30px | 1 | 1.68px | `--text-heading` |
| display | 50px | 0.92 | 2.8px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### Primary Text

**Role:** Standard body copy and descriptive text.

Uses Degular, 'Ink Black' (#000000) at 18px with 1.25 line height and 0.59px letter spacing.

### Navigation Link

**Role:** Global header and footer navigation items.

Uses Degular, 'Ink Black' (#000000) at 16px with 1.33 line height and 0.53px letter spacing. Links have a 5px right margin or 10px padding.

### Project Title

**Role:** Main heading for individual project showcases.

Uses Degular, 'Ink Black' (#000000) at 30px with 1.00 line height, 1.68px letter spacing. Followed by an 8px bottom margin.

### Project Metadata

**Role:** Secondary description under project titles.

Uses Degular, 'Ink Black' (#000000) at 18px with 1.25 line height, 0.59px letter spacing. Often appearing after a project title.

### Hero Headline

**Role:** Prominent headline on the landing screen.

Uses Degular, 'Ink Black' (#000000) at 50px with 0.92 line height and 2.8px letter spacing.

## Do's and Don'ts

### Do

- Prioritize 'Canvas White' (#f8f8f8) as the dominant background, ensuring ample negative space around all content.
- Use 'Ink Black' (#000000) for all text and UI outlines to maintain a stark, high-contrast appearance.
- Apply Degular font with precise letter-spacing values from the type scale to all text elements.
- Maintain a comfortable density with 80px section gaps and 20px padding for content blocks.
- Align link elements using 5px right margins or 10px internal padding for consistent spacing.
- Utilize 0px border-radius across all components to preserve the sharp, orthogonal aesthetic.

### Don't

- Avoid gradients or soft shadows; the design relies on flat surfaces and crisp contrasts.
- Do not introduce colored primary action buttons; interactives are primarily defined by text and underlines using 'Ink Black'.
- Refrain from using rounded corners; all elements should adhere to the strict 0px radius.
- Do not deviate from the specified letter-spacing for each type size; it is a signature of the design's precision.
- Avoid decorative icons or complex SVG fills that introduce additional colors; stick to monochrome if necessary.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #f8f8f8 | Primary page background |
| 2 | Sandstone Tan | #f8e8d8 | Alternating background for content sections |
| 3 | Lavendar Gray | #e8d8f8 | Background for specific content blocks or sections |
| 4 | Slate Gray | #d8d8d8 | Subtle surface variation or divider |

## Imagery

This site features a mix of high-quality, product-focused photography and more artistic, mood-setting visual content. Imagery is generally contained within rectangular frames, with no rounded corners or overlapping elements. Photography varies from crisp, well-lit product shots (e.g., watch in 'Le Modello') to more atmospheric, staged scenes with strong color casts and dramatic lighting (e.g., 'Midnight Studios' car scene). Illustrations, when present, appear as simple, bold color shapes (e.g., circles in 'Le Modello'). Icons are minimal, likely outlined and monochrome, serving a purely functional role in navigation. The role of imagery is primarily to showcase work, with some atmospheric content for visual interest. The site is image-heavy, using large blocks for project visuals.

## Layout

The page adheres to a mostly full-bleed layout, allowing images to extend edge-to-edge horizontally within their sections. Content is structured in clear, vertically stacked sections, featuring a prominent hero area with a large, centered headline and a multi-column grid of project previews below. The main content area uses a consistent vertical rhythm with 80px gaps between major sections. Project previews are arranged in a dynamic grid, often two columns, with each project thumbnail linking to more details. The header and footer are distinct, contained elements providing navigation and contact information. The overall density is spacious, emphasizing individual content blocks.

## Similar Brands

- **Stripe** — High contrast typography, ample white space, and a focus on clean, precise textual presentation.
- **Basic Agency** — Minimalist portfolio style with large imagery and strong typographic hierarchy on stark backgrounds.
- **Figma** — Emphasis on clear UI, high readability, and restrained use of color to highlight functional elements.
- **Linear** — Sleek, monochrome interface design with precise typography and a focus on content presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #f8f8f8;
  --color-ink-black: #000000;
  --color-ash-black: #080808;
  --color-sandstone-tan: #f8e8d8;
  --color-lavendar-gray: #e8d8f8;
  --color-slate-gray: #d8d8d8;
  --color-electric-violet: #7848e8;
  --font-degular: 'Degular', system-ui;
  --text-caption: 16px;
  --leading-caption: 1.33;
  --tracking-caption: 0.53px;
  --text-body: 18px;
  --leading-body: 1.25;
  --tracking-body: 0.59px;
  --text-subheading: 24px;
  --leading-subheading: 1.11;
  --tracking-subheading: 0.79px;
  --text-heading: 30px;
  --leading-heading: 1;
  --tracking-heading: 1.68px;
  --text-display: 50px;
  --leading-display: 0.92;
  --tracking-display: 2.8px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --radius-default: 0px;
  --surface-canvas-white: #f8f8f8;
  --surface-sandstone-tan: #f8e8d8;
  --surface-lavendar-gray: #e8d8f8;
  --surface-slate-gray: #d8d8d8;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #f8f8f8;
  --color-ink-black: #000000;
  --color-ash-black: #080808;
  --color-sandstone-tan: #f8e8d8;
  --color-lavendar-gray: #e8d8f8;
  --color-slate-gray: #d8d8d8;
  --color-electric-violet: #7848e8;
  --font-degular: 'Degular', system-ui;
  --text-caption: 16px;
  --leading-caption: 1.33;
  --tracking-caption: 0.53px;
  --text-body: 18px;
  --leading-body: 1.25;
  --tracking-body: 0.59px;
  --text-subheading: 24px;
  --leading-subheading: 1.11;
  --tracking-subheading: 0.79px;
  --text-heading: 30px;
  --leading-heading: 1;
  --tracking-heading: 1.68px;
  --text-display: 50px;
  --leading-display: 0.92;
  --tracking-display: 2.8px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --radius-default: 0px;
  --surface-canvas-white: #f8f8f8;
  --surface-sandstone-tan: #f8e8d8;
  --surface-lavendar-gray: #e8d8f8;
  --surface-slate-gray: #d8d8d8;
}
```
