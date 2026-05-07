---
version: alpha
name: "Daniellelevitt"
description: "Daniellelevitt embraces an expressive, art-forward visual system pairing bold, high-contrast typography with a vibrant, playful color palette. The primary canvas shifts dramatically between an intense, almost acidic green and stark white, serving as a dynamic backdrop for overlaid photography and minimalist text. Typography is a dominant visual element, oversized and often cropped, creating a sense of dramatic scale and artistic edge. Components are lightweight and almost invisible, letting the visual content and distinctive typography define the aesthetic."
theme: "mixed"
industry: "design"
source_url: "https://www.daniellelevitt.com"
refero_style_id: "1a8d2d66-bb84-4929-acbe-2685fc9ab6e7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512632563-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512632563-thumb.jpg"
extracted_at: "2026-04-30T01:30:53.224Z"
---

# Daniellelevitt — Style Reference

> Vivid editorial canvas

**Theme:** mixed

**Industry:** design

Daniellelevitt embraces an expressive, art-forward visual system pairing bold, high-contrast typography with a vibrant, playful color palette. The primary canvas shifts dramatically between an intense, almost acidic green and stark white, serving as a dynamic backdrop for overlaid photography and minimalist text. Typography is a dominant visual element, oversized and often cropped, creating a sense of dramatic scale and artistic edge. Components are lightweight and almost invisible, letting the visual content and distinctive typography define the aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Orange Peel | #d15022 | `--color-orange-peel` | Brand accent for interactive elements, headlines, and key text highlighting. Its vividness provides a striking contrast against both the White Canvas and Mint Canvas |
| Mint Canvas | #75dfb5 | `--color-mint-canvas` | Dominant background color for sections, creating a distinctive and energetic brand presence. Also used for text backgrounds to visually separate content |
| Midnight Ink | #000000 | `--color-midnight-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Purple Haze | #E676B6 | `--color-purple-haze` | Decorative color, likely for specific branding elements or accents, derived from `--logo-color` |

## Tokens — Typography

### Helvetica Now Display

- **Token:** `--font-helvetica-now-display`
- **Substitute:** system-ui
- **Weights:** 800
- **Sizes:** 10px, 18px, 29px
- **Line heights:** 0.95, 1.00, 1.60
- **Letter spacing:** -0.01
- **Role:** Used for all primary text elements, including body text, navigation, and smaller headings. The consistent extra-bold weight (800) and tight letter-spacing create a compact, impactful, and modern tone, even at smaller sizes.

### Helvetica Now Display Condensed

- **Token:** `--font-helvetica-now-display-condensed`
- **Substitute:** system-ui
- **Weights:** 800
- **Sizes:** 72px
- **Line heights:** 0.95
- **Letter spacing:** -0.01
- **Role:** The signature display font for large headlines. Its condensed nature and heavy weight, combined with exceptionally tight line-height and letter-spacing, create a bold, art-driven statement. It's often used at an oversized scale, allowing it to interact graphically with the canvas.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 0.95 | -0.1px | `--text-caption` |
| body | 18px | 1 | -0.18px | `--text-body` |
| subheading | 29px | 1.6 | -0.29px | `--text-subheading` |
| display | 72px | 0.95 | -0.72px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-50 | 50px | `--spacing-50` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 0px |
| elementGap | 20px |

## Components

### Text Link

**Role:** Standard interactive link for navigation and inline references.

Text uses 'Orange Peel' (`#d15022`) with no underline by default. On hover, it maintains the color, often appearing within contexts like the main navigation or content references. Some links also use 'Midnight Ink' (`#000000`) for text.

### Ghost Button

**Role:** Minimalist button with text acting as the primary visual. Used for navigation and calls to action.

Text is 'Orange Peel' (`#d15022`), size `10px`, weight `800`, letter-spacing `-0.01em` from 'Helvetica Now Display'. It has `0px` radius, `0px` padding, and a transparent background. A thin 'Orange Peel' border appears on interaction or for emphasis, providing definition without heavy styling.

### Minimal Navigation Link

**Role:** Top-level navigation items.

Text is 'Orange Peel' (`#d15022`) for active items or 'Midnight Ink' (`#000000`) for other menu items, using 'Helvetica Now Display' at `10px` and `800` weight, with `20px` right and left padding. These links often function graphically as part of the overall page layout.

### Content Card (Image)

**Role:** Displays visual content within dynamic layouts.

Images are often framed with a 'Midnight Ink' (`#000000`) border and `0px` radius, creating clear visual separation from the background. No explicit padding is applied to the image itself, allowing it to sit flush with its container.

### Background Block (Mint)

**Role:** Large, distinct sections of content.

A full-width block with a 'Mint Canvas' (`#75dfb5`) background. Text within these blocks typically uses 'Orange Peel' (`#d15022`) for contrast, often with large 'Helvetica Now Display Condensed' headlines.

## Do's and Don'ts

### Do

- Use 'Orange Peel' (`#d15022`) for all interactive text elements and primary calls to action, maintaining its vividness.
- Set the main canvas background either to pure white or 'Mint Canvas' (`#75dfb5`), alternating between sections to create visual rhythm.
- Apply 'Helvetica Now Display' (weight 800) for all body copy and standard navigation at `10px` and `18px`, ensuring a consistent energetic textual presence.
- Employ oversized 'Helvetica Now Display Condensed' (weight 800, `72px`) for headlines, allowing it to stretch and often break out of standard text flow.
- Frame images and content blocks with a `0px` radius and a 'Midnight Ink' (`#000000`) border to give structure without softening the visual edge.
- Use `20px` as the standard `elementGap` between diverse content elements and `50px` for `sectionGap` to manage vertical rhythm.
- Maintain a `0px` border-radius for all components and elements, aligning with the sharp, unyielding aesthetic.

### Don't

- Avoid soft shadows or subtle elevation; the design system relies on flat planes and strong color contrast for depth.
- Do not use generic system fonts; always prioritize 'Helvetica Now Display' and 'Helvetica Now Display Condensed' to maintain brand identity.
- Refrain from using subdued or desaturated colors for primary elements; the system thrives on bold, high-chroma statements.
- Do not introduce padding or rounded corners on buttons or cards; maintain a crisp, minimalist interaction style.
- Avoid complex layouts that obscure the photography or dominant typography; prioritize clear, often dramatic, presentation of visual assets.

## Imagery

The visual language is dominated by high-impact photography, primarily portraits and fashion/editorial shots, used in a full-bleed or contained, square/rectangular, unmasked format. Graphics are minimal, often manifested as oversized, cropped typography that functions as a graphic element itself. Images are treated realistically, with natural color palettes and varied lighting, from studio shots to outdoor scenes, emphasizing the subject. Iconography is text-based ('D-L', 'Menu') or omitted. Images are the primary content, with text playing a supporting or complementary graphic role, resulting in an image-heavy, visually dense experience.

## Layout

The layout is flexible and dynamic, with sections that often shift between a full-bleed white canvas and an equally full-bleed 'Mint Canvas' background. The hero section displays a collage of irregularly placed, framed images over a white background, with oversized, dynamically rendered brand typography ('Danielle Levitt') serving as a central graphic element. Subsequent sections can feature a full-bleed 'Mint Canvas' background with centered headlines and descriptive text and then return to an image-focused or text-over-image layout. There's no fixed max-width, allowing content to stretch across the viewport. Navigation is minimal, consisting of 'D-L' (logo) and 'Menu' aligned to the top corners.

## Similar Brands

- **A24 (website)** — Shares a sensibility for oversized, graphically rich typography and a bold, almost brutalist approach to visual layout, often letting imagery and text dominate the canvas.
- **Other photography/portfolio sites using Readymag** — Similar experimental layouts with emphasis on full-bleed imagery and dynamic text placement, often challenging conventional grid systems.
- **Independent art gallery websites** — They often use stark contrasts, minimal chrome, and allow artwork or striking photography to be the primary interface element, similar to Daniellelevitt's image-first approach.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-orange-peel: #d15022;
  --color-mint-canvas: #75dfb5;
  --color-midnight-ink: #000000;
  --color-purple-haze: #E676B6;
  --font-helvetica-now-display: 'Helvetica Now Display', system-ui;
  --font-helvetica-now-display-condensed: 'Helvetica Now Display Condensed', system-ui;
  --text-caption: 10px;
  --leading-caption: 0.95;
  --tracking-caption: -0.1px;
  --text-body: 18px;
  --leading-body: 1;
  --tracking-body: -0.18px;
  --text-subheading: 29px;
  --leading-subheading: 1.6;
  --tracking-subheading: -0.29px;
  --text-display: 72px;
  --leading-display: 0.95;
  --tracking-display: -0.72px;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-20: 20px;
  --spacing-50: 50px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-orange-peel: #d15022;
  --color-mint-canvas: #75dfb5;
  --color-midnight-ink: #000000;
  --color-purple-haze: #E676B6;
  --font-helvetica-now-display: 'Helvetica Now Display', system-ui;
  --font-helvetica-now-display-condensed: 'Helvetica Now Display Condensed', system-ui;
  --text-caption: 10px;
  --leading-caption: 0.95;
  --tracking-caption: -0.1px;
  --text-body: 18px;
  --leading-body: 1;
  --tracking-body: -0.18px;
  --text-subheading: 29px;
  --leading-subheading: 1.6;
  --tracking-subheading: -0.29px;
  --text-display: 72px;
  --leading-display: 0.95;
  --tracking-display: -0.72px;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-20: 20px;
  --spacing-50: 50px;
  --radius-none: 0px;
}
```
