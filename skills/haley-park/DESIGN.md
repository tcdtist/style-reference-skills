---
version: alpha
name: "Haley Park"
description: "Haley Park employs a 'Gothic manuscript' aesthetic: a deeply saturated, muted forest green canvas provides a rich backdrop for delicate, antiqued typography, often accompanied by thin, almost calligraphic underlines or borders. Surface treatments are minimal, favoring ghostly lines and subtle background patterns over solid cards or elevation. The visual system feels quietly scholarly and meticulously crafted, with a restrained use of contrast to maintain a calm, focused atmosphere. The typography is a key expressive element, mixing classical serifs with a distinctive, almost whimsical display font."
theme: "dark"
industry: "design"
source_url: "https://haleys.design"
refero_style_id: "c47654a9-7d7a-4b2c-8e0a-cd9296719c69"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519465539-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519465539-thumb.jpg"
extracted_at: "2026-04-30T03:24:46.654Z"
---

# Haley Park — Style Reference

> Gothic manuscript on dark parchment

**Theme:** dark

**Industry:** design

Haley Park employs a 'Gothic manuscript' aesthetic: a deeply saturated, muted forest green canvas provides a rich backdrop for delicate, antiqued typography, often accompanied by thin, almost calligraphic underlines or borders. Surface treatments are minimal, favoring ghostly lines and subtle background patterns over solid cards or elevation. The visual system feels quietly scholarly and meticulously crafted, with a restrained use of contrast to maintain a calm, focused atmosphere. The typography is a key expressive element, mixing classical serifs with a distinctive, almost whimsical display font.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Forest Canopy | #143930 | `--color-forest-canopy` | Page background, heading background fills, primary surface. Creates a deep, contemplative atmosphere |
| Parchment White | #f8f2de | `--color-parchment-white` | Primary text, link text, borders, decorative accents. Its slight warmth prevents a stark contrast with the dark background, maintaining the antique feel. Used for outlined ghost buttons |
| Moss Line | #456859 | `--color-moss-line` | Subtle borders, secondary decorative elements, icon outlines. Offers just enough contrast for structural lines without disrupting the soft visual texture |

## Tokens — Typography

### EditorialOld

- **Token:** `--font-editorialold`
- **Substitute:** Lora
- **Weights:** 200
- **Sizes:** 16px, 19px, 21px, 22px, 27px, 32px
- **Line heights:** 1.20, 1.30, 1.50
- **Letter spacing:** 0.0040em, 0.0050em
- **Role:** Primary body text, links, list items, and smaller headings. Its classic serif forms contribute to the traditional, manuscript-like character.

### Wispy

- **Token:** `--font-wispy`
- **Substitute:** Recursive Sans
- **Weights:** 100
- **Sizes:** 96px
- **Line heights:** 1.00
- **Letter spacing:** -0.96px at 96px
- **Role:** Display headlines – extremely light weight and tight tracking create an ethereal, elegant title that feels whispered rather than shouted.

### Old Standard TT

- **Token:** `--font-old-standard-tt`
- **Substitute:** Old Standard TT
- **Weights:** 200
- **Sizes:** 13px, 16px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Auxiliary body text, helper text, and secondary information presented in a highly readable, classic serif.

### GTA

- **Token:** `--font-gta`
- **Substitute:** Playfair Display
- **Weights:** 300
- **Sizes:** 15px, 21px
- **Line heights:** 1.60
- **Letter spacing:** 0.0040em
- **Role:** Secondary textual content, possibly for smaller annotations or details where a slightly more contemporary serif is desired.

### bodoni-classic-ornaments

- **Token:** `--font-bodoni-classic-ornaments`
- **Substitute:** Decorative Dingbats or Zapf Dingbats
- **Weights:** 200, 300, 400
- **Sizes:** 16px, 21px
- **Line heights:** 1.44, 1.50
- **Letter spacing:** 0.0110em
- **Role:** Decorative icons and ornamental text elements, evoking historical printing.

### altesse-std-24pt

- **Token:** `--font-altesse-std-24pt`
- **Substitute:** Perpetua Titling MT
- **Weights:** 300
- **Sizes:** 27px
- **Line heights:** 1.10
- **Letter spacing:** normal
- **Role:** A distinct heading font for specific sections, offering a unique, elegant serif character that complements the primary heading style.

### ui-sans-serif

- **Token:** `--font-ui-sans-serif`
- **Weights:** 100, 400
- **Sizes:** 16px
- **Line heights:** 1.5
- **Role:** ui-sans-serif — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 16px | 1.3 | — | `--text-caption` |
| body-sm | 19px | 1.3 | — | `--text-body-sm` |
| body | 21px | 1.3 | — | `--text-body` |
| body-lg | 22px | 1.3 | — | `--text-body-lg` |
| heading-sm | 27px | 1.3 | — | `--text-heading-sm` |
| heading | 32px | 1.3 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-102 | 102px | `--spacing-102` |
| spacing-138 | 138px | `--spacing-138` |

### Border Radius

| Element | Value |
| --- | --- |
| circle | 64px |
| default | 4.8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 26px |
| cardPadding | 26px |
| elementGap | 11px |

## Components

### Ghost Navigation Link

**Role:** Header navigation items and project links

Text in Parchment White (#f8f2de) on a transparent background, with a 1px bottom border in Parchment White. No padding beyond content spacing. Letter spacing matches the corresponding font style. Interactivity is subtle, focused on text and border changes rather than solid fills. Uses EditorialOld font.

### Project Card (Outlined)

**Role:** Containers for project listings, often appearing in grid layouts.

Transparent background with a 1px Parchment White (#f8f2de) border. Text in Parchment White (#f8f2de). Uses body-level typography from EditorialOld. Radius is 0px, reinforcing a traditional, unembellished aesthetic.

### Section Divider with Text

**Role:** Visual separation between content sections, enhanced with centered text

A thin line, 1px solid Parchment White (#f8f2de), horizontally spanning the content width. Text (e.g., 'Work projects') is centered on this line using Parchment White (#f8f2de) on a Forest Canopy (#143930) background as needed to create a clear break. Spacing includes `elementGap` vertically.

### Ornamental Icon

**Role:** Decorative crosses or geometric patterns

Rendered as SVG fills or strokes in Moss Line (#456859). Used sparingly as visual anchors or section elaborations, drawing from the `bodoni-classic-ornaments` typeface for specific shapes. Adds to the historical, manuscript aesthetic.

## Do's and Don'ts

### Do

- Prioritize Forest Canopy (#143930) for all main backgrounds to maintain the deep, dark ambiance.
- Use Parchment White (#f8f2de) exclusively for primary text, links, and borders, reserving it for elements that need to stand out from the dark background.
- Apply Moss Line (#456859) for secondary decorative strokes, subtle outlines, and subdued graphic elements to add detail without high contrast.
- Employ the 'Wispy' font (96px, 100 weight, -0.96px letter-spacing) for primary hero headlines to achieve an ethereal, elegant feel.
- Structure interactive elements like navigation and project listings with text on transparent backgrounds, using only a Parchment White (#f8f2de) border or underline for definition.
- Maintain a comfortable density with element gaps at `11px` and section gaps at `26px` to allow content to breathe without feeling sparse.
- Utilize 0px border-radius for components like project cards and buttons to reinforce a sharp, traditional print aesthetic.

### Don't

- Avoid using bright, saturated colors for UI elements; stick to the muted palette provided.
- Do not introduce heavy shadows or prominent elevation; maintain a flat, layered visual approach with subtle outlines.
- Refrain from using bold or heavy font weights for headlines or primary text where lightness and elegance are key.
- Do not use large, solid background fills for interactive components; prefer ghost styles with borders or underlines.
- Avoid decorative imagery that clashes with the site's 'Gothic manuscript' aesthetic; prioritize line art, subtle textures, or classic ornaments.
- Do not deviate from the specified typefaces and their distinct letter-spacing values to preserve the unique typographic voice.
- Avoid arbitrary border radii; use 0px by default, and 4.8px very sparingly for elements that require a slight softening.

## Imagery

This site features a 'graphics-only' visual language. Imagery consists primarily of highly stylized, almost architectural line art and geometric forms, reminiscent of stained glass or gothic arches, rendered in Moss Line (#456859) or as subtle grayscale patterns on the dark background. Icons are minimal, outlined, and monochromatic, often using complex, antique-inspired symbols derived from `bodoni-classic-ornaments`. Visuals serve a decorative and atmospheric role, adding texture and historical depth rather than conveying explicit content or product functionalities. They are dense in pattern but low in color, maintaining the site's quiet, scholarly mood.

## Layout

The page uses a full-bleed layout for its background, but content is visually constrained to a central column (though `pageMaxWidth` is null, the arrangement suggests a conceptual max-width with ample horizontal padding). The hero section features a centered headline over a textured background. Sections are delineated by subtle horizontal dividers often accompanied by centered textual titles. Content is primarily arranged in multi-column grids for project listings (e.g., 2-column or 3-column), using the 'Project Card (Outlined)' component. The overall density is comfortable, with consistent vertical spacing and minimal visual clutter, emphasizing typography and subtle graphic textures. Navigation is a simple, horizontal top bar with ghost links, consistent throughout the experience.

## Similar Brands

- **The New York Times (older eras)** — Classic serif typography, restrained color palette, and sense of authority through careful composition over flashy elements.
- **AIGA Design Archives** — Focus on clean typography, structured layouts, and a scholarly presentation of design work.
- **Medieval manuscript replicas online** — Dark parchment backgrounds, intricate line work, and classic serif fonts create a similar 'antique document' aesthetic.
- **Aperture Magazine** — Emphasis on high-quality visual content (typography/graphics) within a minimalist, curated design system.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-forest-canopy: #143930;
  --color-parchment-white: #f8f2de;
  --color-moss-line: #456859;
  --font-editorialold: 'EditorialOld', Lora;
  --font-wispy: 'Wispy', Recursive Sans;
  --font-old-standard-tt: 'Old Standard TT', Old Standard TT;
  --font-gta: 'GTA', Playfair Display;
  --font-bodoni-classic-ornaments: 'bodoni-classic-ornaments', Decorative Dingbats or Zapf Dingbats;
  --font-altesse-std-24pt: 'altesse-std-24pt', Perpetua Titling MT;
  --font-ui-sans-serif: 'ui-sans-serif', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 16px;
  --leading-caption: 1.3;
  --text-body-sm: 19px;
  --leading-body-sm: 1.3;
  --text-body: 21px;
  --leading-body: 1.3;
  --text-body-lg: 22px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 27px;
  --leading-heading-sm: 1.3;
  --text-heading: 32px;
  --leading-heading: 1.3;
  --spacing-4: 4px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-51: 51px;
  --spacing-64: 64px;
  --spacing-102: 102px;
  --spacing-138: 138px;
  --radius-circle: 64px;
  --radius-default: 4.8px;
}
```

### Tailwind v4

```css
@theme {
  --color-forest-canopy: #143930;
  --color-parchment-white: #f8f2de;
  --color-moss-line: #456859;
  --font-editorialold: 'EditorialOld', Lora;
  --font-wispy: 'Wispy', Recursive Sans;
  --font-old-standard-tt: 'Old Standard TT', Old Standard TT;
  --font-gta: 'GTA', Playfair Display;
  --font-bodoni-classic-ornaments: 'bodoni-classic-ornaments', Decorative Dingbats or Zapf Dingbats;
  --font-altesse-std-24pt: 'altesse-std-24pt', Perpetua Titling MT;
  --font-ui-sans-serif: 'ui-sans-serif', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 16px;
  --leading-caption: 1.3;
  --text-body-sm: 19px;
  --leading-body-sm: 1.3;
  --text-body: 21px;
  --leading-body: 1.3;
  --text-body-lg: 22px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 27px;
  --leading-heading-sm: 1.3;
  --text-heading: 32px;
  --leading-heading: 1.3;
  --spacing-4: 4px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-51: 51px;
  --spacing-64: 64px;
  --spacing-102: 102px;
  --spacing-138: 138px;
  --radius-circle: 64px;
  --radius-default: 4.8px;
}
```
