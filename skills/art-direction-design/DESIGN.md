---
version: alpha
name: "Art Direction/Design"
description: "Lundqvist & Dallyn presents as a disciplined, high-contrast monochrome canvas, where bold typography and intentional negative space command attention. Visual information is presented with stark clarity, often reversing between black text on white and white text on black. The system uses a single, vibrant teal accent color sparingly, injecting a precise jolt of energy into an otherwise composed and minimal aesthetic. Imagery is integrated as bold, contained blocks, maintaining the overall sense of deliberate, high-impact design."
theme: "light"
industry: "design"
source_url: "https://www.lundqvistdallyn.studio"
refero_style_id: "733f32ca-efc3-40fb-bc58-327bd2b45828"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520651091-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520651091-thumb.jpg"
extracted_at: "2026-04-30T03:44:27.499Z"
---

# Art Direction/Design — Style Reference

> High-contrast monochrome blueprint

**Theme:** light

**Industry:** design

Lundqvist & Dallyn presents as a disciplined, high-contrast monochrome canvas, where bold typography and intentional negative space command attention. Visual information is presented with stark clarity, often reversing between black text on white and white text on black. The system uses a single, vibrant teal accent color sparingly, injecting a precise jolt of energy into an otherwise composed and minimal aesthetic. Imagery is integrated as bold, contained blocks, maintaining the overall sense of deliberate, high-impact design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page and section backgrounds, primary surface for content |
| Ink Black | #1d1d1d | `--color-ink-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Accent Teal | #75fbee | `--color-accent-teal` | Teal wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |

## Tokens — Typography

### Favorit

- **Token:** `--font-favorit`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 21px, 51px, 60px
- **Line heights:** 1.10, 1.20
- **Letter spacing:** -0.0350em
- **Role:** Headlines, section titles, prominent display text — its wider tracking (-0.035em) gives it a composed, editorial feel.

### AkkuratMonoLLWeb

- **Token:** `--font-akkuratmonollweb`
- **Substitute:** Menlo
- **Weights:** 400
- **Sizes:** 11px, 18px
- **Line heights:** 1.00, 1.70
- **Letter spacing:** 0.1000em
- **Role:** Navigation links, body text, meta information, and functional UI elements — the monospaced, slightly wider tracking (0.1em) provides a technical, precise voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1 | 1.1px | `--text-caption` |
| body | 18px | 1.7 | 1.8px | `--text-body` |
| subheading | 21px | 1.1 | -0.735px | `--text-subheading` |
| heading | 51px | 1.2 | -1.785px | `--text-heading` |
| display | 60px | 1.2 | -2.1px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-113 | 113px | `--spacing-113` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 113px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Primary Navigation Link

**Role:** Top-level navigation items

Text in AkkuratMonoLLWeb, weight 400, 11px, line-height 1.00, letter-spacing 0.1em, Ink Black (#1d1d1d). Receives a 10px padding-bottom on hover, and an Ink Black (#1d1d1d) border-bottom.

### Hero Headline

**Role:** Main page headline

Favorit, weight 400, 60px, line-height 1.20, letter-spacing -0.035em, Ink Black (#1d1d1d). Presented with generous vertical spacing (marginTop 75px).

### Content Grid Item

**Role:** Individual elements within a layout grid for work examples or features

Each item uses an image or graphic as its main visual. Headings within are Favorit, weight 400, 21px, line-height 1.10, letter-spacing -0.035em, Ink Black (#1d1d1d). Subtext in AkkuratMonoLLWeb, weight 400, 18px, line-height 1.70, letter-spacing 0.1em, Ink Black (#1d1d1d).

### Footer Canvas

**Role:** Page footer background

Background color of Accent Teal (#75fbee), with Ink Black (#1d1d1d) text.

## Do's and Don'ts

### Do

- Use Canvas White (#ffffff) as the dominant background color for all main content areas.
- Employ Ink Black (#1d1d1d) exclusively for primary text, headings, and interactive element borders.
- Apply AkkuratMonoLLWeb for all functional text, navigation, and small information at 11px or 18px, with 0.1em letter-spacing.
- Reserve Favorit for headlines and prominent textual statements, at sizes 21px, 51px, or 60px, with -0.035em letter-spacing.
- Introduce Accent Teal (#75fbee) only as a background color for distinct content blocks, like the footer or specific highlighted sections.
- Maintain generous negative space, with a section gap of 113px between major content blocks.
- Utilize a compact element gap of 10px, especially for horizontal spacing within navigation or grouped links.

### Don't

- Do not use Accent Teal (#75fbee) for text or borders; it is strictly a background color.
- Avoid using any other colors beyond Canvas White, Ink Black, and Accent Teal.
- Do not vary the letter-spacing of Favorit or AkkuratMonoLLWeb from their specified values.
- Do not add shadows or heavy borders to elements; surfaces are largely flat.
- Avoid mixing text styles; Favorit is for display, AkkuratMonoLLWeb for everything else.
- Do not use subtle gradients or overlays; maintain a stark, high-contrast aesthetic.
- Do not introduce rounded corners; elements should adhere to sharp, precise edges.

## Imagery

Imagery primarily consists of contained, high-impact product photography or abstract graphics, often presented as large, full-width blocks within the layout. The treatment leans towards stark presentation with minimal context, emphasizing the object or subject itself. Icons are minimal, monochromatic, and typically outlined (#1d1d1d on #ffffff). The density is high-impact visual, where imagery takes up significant screen real estate, acting as both decorative atmosphere and content showcase, with a text-light approach.

## Layout

The page adheres to a full-bleed structure without a fixed max-width, allowing content to stretch across the viewport, then often containing inner elements. The hero features a centered headline over a background that alternates between Canvas White and Ink Black. Sections maintain a consistent vertical rhythm with a 113px section gap. Content is arranged in alternating structures, including text-left/image-right and centered stacks for large headlines. There's an implicit grid for case studies or portfolio pieces, where visuals are presented as large, distinct blocks. The layout is spacious yet compact in information flow, guiding the eye through deliberate, large-scale compositions. Navigation is a minimal top-bar, fixed to the top right corner, while the brand logo 'L&D' is top-left.

## Similar Brands

- **Stripe** — Monochrome base palette with precise accent colors and strong, hierarchical typography.
- **Linear** — High-contrast UI, emphasis on clean typography and functional, restrained use of color.
- **AIGA Design Archives** — Editorial feel, strong focus on stark typography, and a deliberate use of negative space.
- **Hey.com** — Clear, direct visual language with high contrast and minimal adornment, letting content lead.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #1d1d1d;
  --color-accent-teal: #75fbee;
  --font-favorit: 'Favorit', Arial;
  --font-akkuratmonollweb: 'AkkuratMonoLLWeb', Menlo;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: 1.1px;
  --text-body: 18px;
  --leading-body: 1.7;
  --tracking-body: 1.8px;
  --text-subheading: 21px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.735px;
  --text-heading: 51px;
  --leading-heading: 1.2;
  --tracking-heading: -1.785px;
  --text-display: 60px;
  --leading-display: 1.2;
  --tracking-display: -2.1px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-75: 75px;
  --spacing-113: 113px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #1d1d1d;
  --color-accent-teal: #75fbee;
  --font-favorit: 'Favorit', Arial;
  --font-akkuratmonollweb: 'AkkuratMonoLLWeb', Menlo;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: 1.1px;
  --text-body: 18px;
  --leading-body: 1.7;
  --tracking-body: 1.8px;
  --text-subheading: 21px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.735px;
  --text-heading: 51px;
  --leading-heading: 1.2;
  --tracking-heading: -1.785px;
  --text-display: 60px;
  --leading-display: 1.2;
  --tracking-display: -2.1px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-75: 75px;
  --spacing-113: 113px;
}
```
