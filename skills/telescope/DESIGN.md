---
version: alpha
name: "Telescope"
description: "Telescope embraces a warm, organic minimalism with off-white canvases and rich, dark typography. The design feels grounded through a single vibrant green accent used sparingly for active states and highlights. A sense of relaxed, curated discovery is conveyed by the loose typographic arrangements and the overall spaciousness. Imagery, when present, is small, floating, and acts as visual anchors in a predominantly airy layout."
theme: "light"
industry: "other"
source_url: "https://telescope.fyi"
refero_style_id: "e6fb72b4-877d-46ab-8f94-590b971d4dc1"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509035495-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509035495-thumb.jpg"
extracted_at: "2026-04-30T00:30:59.172Z"
---

# Telescope — Style Reference

> Warm parchment, scattered Polaroids

**Theme:** light

**Industry:** other

Telescope embraces a warm, organic minimalism with off-white canvases and rich, dark typography. The design feels grounded through a single vibrant green accent used sparingly for active states and highlights. A sense of relaxed, curated discovery is conveyed by the loose typographic arrangements and the overall spaciousness. Imagery, when present, is small, floating, and acts as visual anchors in a predominantly airy layout.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Soft Vanilla | #f4f3f0 | `--color-soft-vanilla` | Page backgrounds, card surfaces, UI canvases — a foundational warm off-white |
| Deep Graphite | #1a1915 | `--color-deep-graphite` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Spring Bud | #e3f794 | `--color-spring-bud` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| White Canvas | #ffffff | `--color-white-canvas` | Secondary surface background, elevated UI elements |
| Ash Gray | #82868e | `--color-ash-gray` | Muted body text, secondary icons, subtle borders for informational elements |
| Pure Black | #000000 | `--color-pure-black` | Decorative SVG fills, illustrative elements |

## Tokens — Typography

### Beausite

- **Token:** `--font-beausite`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 19px, 23px, 55px, 57px
- **Line heights:** 1.05, 1.15
- **Letter spacing:** -0.0200em, -0.0170em, -0.0070em
- **Role:** Primary headings and body text — conveys a premium, relaxed editorial style with its wide tracking for large sizes, tightening for smaller text.

### DM Mono

- **Token:** `--font-dm-mono`
- **Substitute:** Menlo
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.10
- **Letter spacing:** 0.0300em
- **Role:** Utility text, badges, and smaller labels — a clear, spaced-out monospace for functional elements.

### CM Geom

- **Token:** `--font-cm-geom`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 250px
- **Line heights:** 1.00
- **Letter spacing:** -0.0020em
- **Role:** Display headings — reserved for high-impact, oversized titles; its negative letter-spacing creates a sense of gravitas and modernity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.1 | 0.36px | `--text-caption` |
| body | 19px | 1.15 | -0.38px | `--text-body` |
| subheading | 23px | 1.15 | -0.39px | `--text-subheading` |
| heading | 55px | 1.05 | -0.38px | `--text-heading` |
| display | 250px | 1 | -0.5px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-135 | 135px | `--spacing-135` |
| spacing-225 | 225px | `--spacing-225` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| buttons | 0px |
| default | 2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 135px |
| cardPadding | 0px |
| elementGap | 10px |

## Components

### Ghost Button

**Role:** Secondary action button

Text-only buttons using Deep Graphite (#1a1915) for text and border, with 0px radius and minimal padding.

### Accent Filled Button

**Role:** Primary action button

Filled button with Spring Bud (#e3f794) background and Deep Graphite (#1a1915) text, using 0px radius.

### Information Badge

**Role:** Informational tag

Text-only badges with Deep Graphite (#1a1915) text on a transparent background, 0px radius.

### Floating Content Card

**Role:** Visual content container

Image-focused cards with 0px radius borders, no background, and no shadow, acting as unconstrained visual elements.

## Do's and Don'ts

### Do

- Prioritize Deep Graphite (#1a1915) for all primary text and headers to maintain a grounded aesthetic.
- Use Soft Vanilla (#f4f3f0) as the default background for most page sections and card surfaces.
- Apply Spring Bud (#e3f794) sparingly for action indicators, accent fills, and highlights to provide a focused point of interest.
- Maintain 0px border radius for all buttons and content cards, promoting a sharp, clean edge.
- Utilize a 135px vertical section gap to ensure abundant breathing room between distinct content blocks.
- Set the letter-spacing for display typography (250px CM Geom) to -0.0020em to achieve a refined, tight fit.
- Employ DM Mono at 12px with 0.0300em letter spacing for small functional text like captions and badges.

### Don't

- Avoid using harsh white backgrounds directly adjacent to type; prefer the softer Soft Vanilla (#f4f3f0).
- Do not introduce additional saturated colors; the Spring Bud (#e3f794) is the singular chromatic accent.
- Refrain from using shadows or elevation on cards; content should feel flat and unburdened.
- Do not deviate from 0px border radius for primary UI elements like buttons and cards, as rounded corners are not part of this visual system.
- Avoid dense, stacked content; prioritize whitespace and generous element gaps (10px minimum).
- Do not use overly bold or heavy weights for headings; maintain the Beausite 400 weight for a refined feel.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Soft Vanilla Canvas | #f4f3f0 | Primary page background and default content area. |
| 1 | White Canvas | #ffffff | Secondary background for specific interactive areas or contained content sections. |
| 2 | Spring Bud Accent | #e3f794 | Highlight surfaces, interactive states, or small decorative fills. |

## Similar Brands

- **Are.na** — Similar focus on content curation, off-white canvas, and minimal UI with emphasis on text and scattered visual content.
- **Read.cv** — Uses subtle neutral palettes and emphasizes typography and content through a spacious and uncluttered layout.
- **Letterboxd** — Community-driven content platform with subtle branding, prioritizing user-generated content and personal expression over heavy UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-soft-vanilla: #f4f3f0;
  --color-deep-graphite: #1a1915;
  --color-spring-bud: #e3f794;
  --color-white-canvas: #ffffff;
  --color-ash-gray: #82868e;
  --color-pure-black: #000000;
  --font-beausite: 'Beausite', system-ui;
  --font-dm-mono: 'DM Mono', Menlo;
  --font-cm-geom: 'CM Geom', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --tracking-caption: 0.36px;
  --text-body: 19px;
  --leading-body: 1.15;
  --tracking-body: -0.38px;
  --text-subheading: 23px;
  --leading-subheading: 1.15;
  --tracking-subheading: -0.39px;
  --text-heading: 55px;
  --leading-heading: 1.05;
  --tracking-heading: -0.38px;
  --text-display: 250px;
  --leading-display: 1;
  --tracking-display: -0.5px;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-71: 71px;
  --spacing-135: 135px;
  --spacing-225: 225px;
  --radius-cards: 0px;
  --radius-buttons: 0px;
  --radius-default: 2px;
  --surface-soft-vanilla-canvas: #f4f3f0;
  --surface-white-canvas: #ffffff;
  --surface-spring-bud-accent: #e3f794;
}
```

### Tailwind v4

```css
@theme {
  --color-soft-vanilla: #f4f3f0;
  --color-deep-graphite: #1a1915;
  --color-spring-bud: #e3f794;
  --color-white-canvas: #ffffff;
  --color-ash-gray: #82868e;
  --color-pure-black: #000000;
  --font-beausite: 'Beausite', system-ui;
  --font-dm-mono: 'DM Mono', Menlo;
  --font-cm-geom: 'CM Geom', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --tracking-caption: 0.36px;
  --text-body: 19px;
  --leading-body: 1.15;
  --tracking-body: -0.38px;
  --text-subheading: 23px;
  --leading-subheading: 1.15;
  --tracking-subheading: -0.39px;
  --text-heading: 55px;
  --leading-heading: 1.05;
  --tracking-heading: -0.38px;
  --text-display: 250px;
  --leading-display: 1;
  --tracking-display: -0.5px;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-71: 71px;
  --spacing-135: 135px;
  --spacing-225: 225px;
  --radius-cards: 0px;
  --radius-buttons: 0px;
  --radius-default: 2px;
  --surface-soft-vanilla-canvas: #f4f3f0;
  --surface-white-canvas: #ffffff;
  --surface-spring-bud-accent: #e3f794;
}
```
