---
version: alpha
name: "Christopherdoyle"
description: "Christopher Doyle & Co. employs a stark, editorial aesthetic centered on high-contrast typography and a monochrome palette. Visual impact comes from precise typographic arrangements and the bold use of negative space. Elements are lightweight, relying on inherent content structure rather than heavy borders or shadows. Color is reserved for accent imagery and bold typographic callouts, creating a strong brand presence through restraint and clear communication."
theme: "light"
industry: "design"
source_url: "https://christopherdoyle.co"
refero_style_id: "e1223d32-c423-4c95-ae0a-8a6f8585e6a2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521496099-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521496099-thumb.jpg"
extracted_at: "2026-04-30T03:58:28.989Z"
---

# Christopherdoyle — Style Reference

> Editorial Grid, Ink on Paper

**Theme:** light

**Industry:** design

Christopher Doyle & Co. employs a stark, editorial aesthetic centered on high-contrast typography and a monochrome palette. Visual impact comes from precise typographic arrangements and the bold use of negative space. Elements are lightweight, relying on inherent content structure rather than heavy borders or shadows. Color is reserved for accent imagery and bold typographic callouts, creating a strong brand presence through restraint and clear communication.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, primary surface for content areas, creating a clean white canvas |
| Jet Black | #000000 | `--color-jet-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Ash Gray | #ababab | `--color-ash-gray` | Muted secondary text, subtle borders, and supporting information where a softer contrast is desired |
| Machine Orange | #ff5c26 | `--color-machine-orange` | Illustrative accent within content, serving as a vibrant brand identifier in select visuals and prominent typographic elements |

## Tokens — Typography

### Founders Grotesk X Condensed

- **Token:** `--font-founders-grotesk-x-condensed`
- **Substitute:** Bebas Neue
- **Weights:** 400
- **Sizes:** 81px
- **Line heights:** 1.00
- **Letter spacing:** -0.0100em at 81px
- **OpenType features:** "kern"
- **Role:** Prominent navigation and headings requiring a strong, condensed visual presence. Its tightly tracked, bold nature establishes a distinct brand voice.

### Die Grotesk A

- **Token:** `--font-die-grotesk-a`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line heights:** 1.21, 1.28
- **Letter spacing:** normal
- **OpenType features:** "kern"
- **Role:** Primary body text, descriptive content, and subheadings. This font provides readability and a clean, direct tone for all textual information.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-246 | 246px | `--spacing-246` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 75px |
| cardPadding | 0px |
| elementGap | 15px |

## Components

### Ghost Button

**Role:** Interactive element

Minimal interactive elements rendered as plain text or linked content, using the default text color with no background or border. This focuses interaction directly on the text while maintaining a clean aesthetic. Text is Jet Black, background is transparent, and border is 0px.

## Do's and Don'ts

### Do

- Prioritize Jet Black (#000000) for all primary text and headings against Canvas White (#ffffff) backgrounds to maintain high contrast and legibility.
- Utilize Founders Grotesk X Condensed Semibold at 81px with -0.0100em letter spacing for page titles and navigation to project a bold, editorial feel.
- Employ Die Grotesk A Regular at 14px for main body text and 12px for smaller content, ensuring ample line height for comfortable reading.
- Use a default padding of 15px around content sections and between grouped elements for comfortable density.
- Reserve Machine Orange (#ff5c26) exclusively for key brand accents in illustrations or powerful typographic statements, not for functional UI elements.
- Maintain sharp, 0px border radii for all elements to reinforce the architectural and precise visual style.
- Implement motion transitions with `ease` timing function and a duration of 0.3s for interactive elements like color changes to provide smooth feedback.

### Don't

- Avoid using drop shadows or complex gradients on UI elements; the design emphasizes flat surfaces.
- Do not introduce additional bold, saturated colors beyond Machine Orange (#ff5c26) as primary accents; maintain the strict monochrome base.
- Refrain from using varied border radii; all corners should be sharp 0px.
- Do not deviate from the established typographic scale and font families; inconsistent typography dilutes the brand's directness.
- Avoid excessive spacing or overly sparse layouts that might break the content's structured read on the page.
- Do not use #ababab (Ash Gray) for primary calls to action or essential information; it is reserved for secondary, muted content.

## Imagery

This site predominantly uses large, editorial lifestyle photography integrated directly into the layout, often cropped to fill significant portions of the screen. The imagery is product-focused, featuring models interacting with apparel, rendered in natural lighting with colors that pop. There are no illustrations or abstract graphics. Icons are minimal or absent. Imagery serves as atmospheric content and product showcase, with a high density, often competing for visual space with large typographic elements.

## Layout

The page structure is a full-bleed design, allowing content to extend to the viewport edges without a maximum width constraint. The hero section is characterized by a large-scale photograph directly behind overlapping typographic elements, creating a layered effect. The overall section rhythm appears to be based on large, distinct content blocks. Navigation is a simple, high-contrast textual top bar. Content is arranged in a dynamic, offset grid, with text blocks often juxtaposed against imagery, creating an asymmetrical composition that emphasizes individual elements. The density is comfortable but with bold, prominent features.

## Similar Brands

- **AIGA** — High-contrast, bold typography and editorial grid layouts.
- **Pentagram** — Minimalist design, strong emphasis on typography, and strategic use of negative space.
- **Sagmeister & Walsh** — Experimental typography and photography as central design elements.
- **The New York Times (Digital)** — Clean, content-driven layout with a focus on black-and-white photography and strong textual hierarchy.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-jet-black: #000000;
  --color-ash-gray: #ababab;
  --color-machine-orange: #ff5c26;
  --font-founders-grotesk-x-condensed: 'Founders Grotesk X Condensed', Bebas Neue;
  --font-die-grotesk-a: 'Die Grotesk A', Inter;
  --spacing-0: 0px;
  --spacing-15: 15px;
  --spacing-75: 75px;
  --spacing-246: 246px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-jet-black: #000000;
  --color-ash-gray: #ababab;
  --color-machine-orange: #ff5c26;
  --font-founders-grotesk-x-condensed: 'Founders Grotesk X Condensed', Bebas Neue;
  --font-die-grotesk-a: 'Die Grotesk A', Inter;
  --spacing-0: 0px;
  --spacing-15: 15px;
  --spacing-75: 75px;
  --spacing-246: 246px;
  --radius-none: 0px;
}
```
