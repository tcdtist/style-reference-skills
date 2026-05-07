---
version: alpha
name: "Charlie"
description: "Charlie Le Maignan showcases a bold, high-contrast visual identity, blending classic editorial typography with experimental letterforms. The system operates on a stark black canvas, punctuated by intense red and crisp white. Typography takes center stage, acting as both content and artistic expression, with custom fonts driving a distinctive, almost art-gallery aesthetic. Component design is minimal, emphasizing outlines and high contrast over complex surfaces or shadows."
theme: "dark"
industry: "design"
source_url: "https://charlielemaignan.com"
refero_style_id: "34aa811f-6084-484c-b4c0-f587b514e970"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520895656-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520895656-thumb.jpg"
extracted_at: "2026-04-30T03:48:32.129Z"
---

# Charlie — Style Reference

> High-contrast editorial experimentalism

**Theme:** dark

**Industry:** design

Charlie Le Maignan showcases a bold, high-contrast visual identity, blending classic editorial typography with experimental letterforms. The system operates on a stark black canvas, punctuated by intense red and crisp white. Typography takes center stage, acting as both content and artistic expression, with custom fonts driving a distinctive, almost art-gallery aesthetic. Component design is minimal, emphasizing outlines and high contrast over complex surfaces or shadows.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Page backgrounds, headings (on white surfaces), button text on filled buttons |
| Paper White | #ffffff | `--color-paper-white` | Contrasting surfaces, button backgrounds, text, borders, active states — the primary highlight color against the dark canvas |
| Concrete Gray | #838383 | `--color-concrete-gray` | Subtle border accents, muted text, secondary link text, for a softer contrast |
| Alert Red | #ff0000 | `--color-alert-red` | Striking background for hero sections, strong visual emphasis, full-bleed content blocks |

## Tokens — Typography

### NeueHaas

- **Token:** `--font-neuehaas`
- **Substitute:** Helvetica Neue
- **Weights:** 400, 700
- **Sizes:** 19px, 20px, 40px
- **Line heights:** 1.08, 1.25, 1.32
- **Letter spacing:** normal
- **OpenType features:** "calt", "case", "liga", "ss01", "ss02"
- **Role:** Primary UI text, body copy, navigation, and footer links. Its classic structure provides stability for content sections.

### Brasparz Variable

- **Token:** `--font-brasparz-variable`
- **Substitute:** Bebas Neue
- **Weights:** 400
- **Sizes:** 145px, 360px
- **Line heights:** 0.70
- **Letter spacing:** -0.0790em at 360px, -0.0770em at 360px, -0.0720em at 360px, -0.0690em at 360px, -0.0610em at 360px, -0.0510em at 360px, -0.0200em at 145px
- **OpenType features:** "ss01" 0; "ss02" 0
- **Role:** Dominant display headlines and stylistic elements. Its highly experimental variable nature and dramatic negative letter-spacing define the brand's 'wizardry' aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 19px | 1.32 | — | `--text-caption` |
| subheading | 40px | 1.08 | — | `--text-subheading` |
| heading | 145px | 0.7 | -0.02px | `--text-heading` |
| display | 360px | 0.7 | -0.079px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-7 | 7px | `--spacing-7` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-127 | 127px | `--spacing-127` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 100px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1306px |
| sectionGap | 59px |
| cardPadding | 20px |
| elementGap | 30px |

## Components

### Ghost Navigation Button

**Role:** Ghost button for primary navigation

Text: NeueHaas, 19px, weight 400, Paper White. Border: 2px solid Paper White. Padding: 7px vertical, 20px horizontal. Radius: 100px. Background: transparent.

### Filled Navigation Button

**Role:** Filled button for active navigation states

Text: NeueHaas, 19px, weight 400, Midnight Ink. Background: Paper White. Padding: 7px vertical, 20px horizontal. Radius: 100px.

### Footer Link

**Role:** Secondary interactive elements in the footer

Text: NeueHaas, 19px, weight 400, Concrete Gray. Underlined on hover (implied).

### Hero Banner - Red

**Role:** Full-width background section for dramatic visual impact

Background: Alert Red. Content usually includes large-format Brasparz Variable typography in Midnight Ink.

## Do's and Don'ts

### Do

- Prioritize text as a primary visual element, using Brasparz Variable for large, impactful headlines.
- Maintain high contrast with a strict black and white base palette; use Alert Red sparingly for strong statements.
- Apply a 100px border radius to all buttons to create a distinct pill shape.
- Utilize NeueHaas for all functional UI elements, ensuring readability against the expressive display typography.
- Implement the large negative letter-spacing provided for Brasparz Variable headlines to achieve the signature condensed aesthetic.
- Use Paper White for borders and text on dark backgrounds to define interactive elements and important information.

### Don't

- Avoid using multiple chromatic colors; limit color accents strictly to Alert Red.
- Do not introduce complex UI shadows, as the system relies on high-contrast borders and solid color blocks for depth.
- Refrain from using moderate or low-contrast text on dark backgrounds; always ensure text elements are Paper White or Concrete Gray for legibility.
- Do not deviate from the specified custom typefaces; their unique characteristics are central to the brand identity.
- Avoid generic button shapes; buttons must maintain the distinct pill shape with a 100px border radius.
- Do not use subtle background patterns or textures; surfaces should remain flat and monochromatic.

## Imagery

The site primarily uses bold, custom typography as its main imaginal and graphic element. When present, imagery (implied in background content) is likely treated with high contrast and minimal adornment, often acting as a canvas for text. Icons are implied to be minimal and monochromatic (Paper White on Midnight Ink) with defined strokes. The overall density is image-light, text-dominant, with typeforms themselves providing visual richness.

## Layout

The page primarily uses a full-bleed layout for sections, but content within these sections is constrained to a `pageMaxWidth` of 1306px, centered. The hero pattern features large-format typography (Brasparz Variable) over a full-bleed Alert Red background. Sections maintain consistent vertical spacing of 59px. Content is arranged in alternating blocks, often a full-bleed color block followed by a dark background section. Navigation is a minimal top bar with ghost or filled pill-shaped buttons.

## Similar Brands

- **AIGA Eye on Design** — They share a focus on experimental typography, high contrast, and a dark mode aesthetic with bold accent colors.
- **Certain graphic design portfolios** — Specific, custom typefaces are often the brand's main visual asset, used as expressive, artful elements rather than strictly functional text.
- **Brand New (Under Consideration)** — Similar editorial feel with strong typographic hierarchy, high contrast, and minimal UI elements drawing attention to content.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-paper-white: #ffffff;
  --color-concrete-gray: #838383;
  --color-alert-red: #ff0000;
  --font-neuehaas: 'NeueHaas', Helvetica Neue;
  --font-brasparz-variable: 'Brasparz Variable', Bebas Neue;
  --text-caption: 19px;
  --leading-caption: 1.32;
  --text-subheading: 40px;
  --leading-subheading: 1.08;
  --text-heading: 145px;
  --leading-heading: 0.7;
  --tracking-heading: -0.02px;
  --text-display: 360px;
  --leading-display: 0.7;
  --tracking-display: -0.079px;
  --spacing-7: 7px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-50: 50px;
  --spacing-59: 59px;
  --spacing-127: 127px;
  --radius-buttons: 100px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-paper-white: #ffffff;
  --color-concrete-gray: #838383;
  --color-alert-red: #ff0000;
  --font-neuehaas: 'NeueHaas', Helvetica Neue;
  --font-brasparz-variable: 'Brasparz Variable', Bebas Neue;
  --text-caption: 19px;
  --leading-caption: 1.32;
  --text-subheading: 40px;
  --leading-subheading: 1.08;
  --text-heading: 145px;
  --leading-heading: 0.7;
  --tracking-heading: -0.02px;
  --text-display: 360px;
  --leading-display: 0.7;
  --tracking-display: -0.079px;
  --spacing-7: 7px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-50: 50px;
  --spacing-59: 59px;
  --spacing-127: 127px;
  --radius-buttons: 100px;
}
```
