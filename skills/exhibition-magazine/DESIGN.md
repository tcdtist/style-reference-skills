---
version: alpha
name: "Exhibition Magazine"
description: "Exhibition Magazine embraces a high-contrast editorial aesthetic: stark black and white punctuated by strong photographic imagery. Content is presented on clean, unadorned surfaces with minimal elevation, emphasizing typography and photography. Subtle linear borders provide structure without visual weight. The overall impression is one of confident, minimalist sophistication, focusing reader attention on the curated content."
theme: "light"
industry: "media"
source_url: "https://exhibition-magazine.com"
refero_style_id: "597355de-6167-4f37-8f14-b3897919a94c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517891383-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517891383-thumb.jpg"
extracted_at: "2026-04-30T02:58:39.740Z"
---

# Exhibition Magazine — Style Reference

> monochrome editorial canvas

**Theme:** light

**Industry:** media

Exhibition Magazine embraces a high-contrast editorial aesthetic: stark black and white punctuated by strong photographic imagery. Content is presented on clean, unadorned surfaces with minimal elevation, emphasizing typography and photography. Subtle linear borders provide structure without visual weight. The overall impression is one of confident, minimalist sophistication, focusing reader attention on the curated content.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, header, card backgrounds. Provides a clean, bright stage for content |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, navigational elements. Establishes a bold and authoritative textual presence against light backgrounds |
| Divider Gray | #e5e7eb | `--color-divider-gray` | Subtle borders for cards, navigation items, and other structural dividers. Provides soft visual separation without being intrusive |
| Muted Surface | #a9a9a9 | `--color-muted-surface` | Secondary card backgrounds, subtly differentiating content blocks or for specific sections |
| Blush Card Back | #fff5fa | `--color-blush-card-back` | Accent background for specific featured cards or content areas, adding a hint of warmth |
| Swiper Accent | #007aff | `--color-swiper-accent` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |

## Tokens — Typography

### Cochin

- **Token:** `--font-cochin`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 16px, 46px
- **Line heights:** 1.20, 1.50
- **Role:** Primary body text and descriptive links. Its humanist serifs provide a classic, editorial feel against the modern sans-serifs, a deliberate contrast for readability and character.

### DIN

- **Token:** `--font-din`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 25px, 36px, 40px, 50px, 52px, 90px, 100px
- **Line heights:** 0.75, 0.80, 1.00, 1.20
- **Letter spacing:** -0.0080em, -0.0060em, -0.0040em
- **Role:** Dominant display typography for headings, titles, and calls to action. Its condensed, strong sans-serif form exudes a bold, confident voice, with tight letter-spacing enhancing its impact.

### forma-djr-display

- **Token:** `--font-forma-djr-display`
- **Substitute:** Roboto Mono
- **Weights:** 500
- **Sizes:** 13px
- **Line heights:** 1.60
- **Letter spacing:** 0.0620em
- **Role:** Small, highly tracked uppercase text for descriptors and meta-information. The wide letter-spacing adds a contemporary, functional touch for annotation.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.6 | 0.79px | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 25px | 1.2 | -0.2px | `--text-subheading` |
| heading | 36px | 1.2 | -0.2px | `--text-heading` |
| heading-lg | 40px | 1 | -0.2px | `--text-heading-lg` |
| display-sm | 46px | 1.2 | — | `--text-display-sm` |
| display | 90px | 0.8 | -0.36px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-235 | 235px | `--spacing-235` |
| spacing-253 | 253px | `--spacing-253` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| buttons | 100% |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 24px |
| elementGap | 12px |

## Components

### Carousel Navigation Button

**Role:** Interactive element to navigate image carousels

Ghost button with an Ink Black border on hover, 100% border-radius for a circular shape, with its primary text also in Ink Black. No explicit padding, relying on content for size.

### Load More Button

**Role:** Expands content using a prominent call to action.

Ink Black text, sans background, underlined with Ink Black for emphasis. Utilizes the DIN font for its commanding presence.

### Image Card Default

**Role:** Displays articles or features prominently with large imagery.

Transparent background with no shadow or border-radius, images are typically full-bleed within the card area. Text overlays are in Ink Black, featuring Cochin for descriptive text and DIN for titles.

### Blush Content Card

**Role:** Highlights specific curated content or editorial picks.

Uses Blush Card Back (#fff5fa) as its background color, with 24px padding on all sides. No border-radius or shadow, maintaining the flat aesthetic.

### Hero Section Header

**Role:** Primary visual for articles, featuring a large image and overlaid title.

Full-bleed image background with overlaid Ink Black text using the DIN font for headlines. Associated descriptive text uses Cochin. The layout is centered, minimalist.

### Navigation Link

**Role:** Top-level navigation items

Ink Black text in DIN font, with a Divider Gray underline on hover, contributing to the stark, functional header.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for all primary text and headings against Canvas White (#ffffff) backgrounds for maximum contrast.
- Use DIN font exclusively for all headings and significant display text, with its characteristic tight letter-spacing.
- Structure content using Divider Gray (#e5e7eb) for subtle linear borders and dividers, rather than heavy backgrounds or shadows.
- Treat images as full-bleed within their content containers, adhering to the 0px border-radius for a stark, unconstrained look.
- Reserve the Swiper Accent (#007aff) for minimal interactive cues, avoiding its use for primary calls to action or decorative elements.
- Maintain generous section gaps of 60px to provide ample white space and visual breathing room between content blocks.
- Utilize forma-djr-display for small supporting text, always uppercase and highly tracked (0.0620em) to differentiate it.

### Don't

- Avoid using drop shadows or complex gradients; the design relies on flat surfaces and high contrast.
- Do not introduce new saturated colors; the palette is intentionally monochromatic with a single, highly controlled accent.
- Do not apply rounded corners to cards or main content blocks; maintain sharp, crisp edges (0px radius).
- Avoid decorative background patterns or textures; surfaces should remain clean and uncluttered.
- Do not use Cochin for headlines or large display text; its role is specifically for body copy and descriptive links.
- Do not place buttons or interactive elements on Muted Surface (#a9a9a9) or Blush Card Back (#fff5fa) backgrounds without sufficient contrast for text and interaction states.
- Do not create dense, information-heavy blocks without substantial white space; content should be spaced out to maintain clarity.

## Imagery

This design system primarily utilizes photography, which is often full-bleed and serves as the dominant visual element. Images are usually high-contrast and often moody, presented with raw, un-masked edges and no rounding. Product shots are contained within image cards, and lifestyle photography in hero sections is used to set the tone rather than provide explicit information. Icons are minimal, likely outlined and monochromatic, acting as functional cues rather than decorative elements. Image density is high, with visuals often taking precedence over text in content blocks.

## Layout

The page primarily uses a full-bleed layout for hero sections, filling the viewport horizontally. Content sections then generally narrow to a contained maximum width, centered on the page. The hero features a large full-bleed image with centered overlaid text. Sections follow a consistent vertical rhythm with a 60px gap. Content is arranged in alternating patterns, often with large image cards followed by text blocks. There's a clear 4-column implied grid for card layouts, though some sections use a single dominant image. Navigation is a minimalist top bar, sticky or otherwise. The overall density is comfortable, allowing for strong visual impact from images and typography.

## Similar Brands

- **The Gentlewoman** — Similar high-contrast, black-and-white editorial aesthetic with strong typography and photography.
- **AIGA Eye on Design** — Focus on strong visual hierarchy, bold type choices, and clean layouts for content presentation.
- **Vogue Runway** — Heavy reliance on full-bleed imagery and minimalist UI to showcase visual content like fashion photography.
- **Kinfolk Magazine** — Employs ample white space and curated photography in a clean, sophisticated layout.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-divider-gray: #e5e7eb;
  --color-muted-surface: #a9a9a9;
  --color-blush-card-back: #fff5fa;
  --color-swiper-accent: #007aff;
  --font-cochin: 'Cochin', Georgia;
  --font-din: 'DIN', Inter;
  --font-forma-djr-display: 'forma-djr-display', Roboto Mono;
  --text-caption: 13px;
  --leading-caption: 1.6;
  --tracking-caption: 0.79px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 25px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.2px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.2px;
  --text-display-sm: 46px;
  --leading-display-sm: 1.2;
  --text-display: 90px;
  --leading-display: 0.8;
  --tracking-display: -0.36px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-235: 235px;
  --spacing-253: 253px;
  --radius-cards: 0px;
  --radius-buttons: 100%;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-divider-gray: #e5e7eb;
  --color-muted-surface: #a9a9a9;
  --color-blush-card-back: #fff5fa;
  --color-swiper-accent: #007aff;
  --font-cochin: 'Cochin', Georgia;
  --font-din: 'DIN', Inter;
  --font-forma-djr-display: 'forma-djr-display', Roboto Mono;
  --text-caption: 13px;
  --leading-caption: 1.6;
  --tracking-caption: 0.79px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 25px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.2px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.2px;
  --text-display-sm: 46px;
  --leading-display-sm: 1.2;
  --text-display: 90px;
  --leading-display: 0.8;
  --tracking-display: -0.36px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-235: 235px;
  --spacing-253: 253px;
  --radius-cards: 0px;
  --radius-buttons: 100%;
}
```
