---
version: alpha
name: "Little Troop"
description: "Little Troop sculpts a playful yet authoritative visual identity through stark monochrome contrast and oversized, almost cartoonish, typographic gestures. Surfaces are a crisp white canvas, against which dense, rounded blocks of content float. The system uses a limited color palette to emphasize form and content, with visual interest created through unexpected scale shifts and exaggerated shapes, lending a whimsical but professional feel."
theme: "light"
industry: "design"
source_url: "https://littletroop.com"
refero_style_id: "bd62b51f-e1be-4e4f-b3d9-e9b91f817625"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517465797-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517465797-thumb.jpg"
extracted_at: "2026-04-30T02:51:23.883Z"
---

# Little Troop — Style Reference

> monochrome playful sculpture

**Theme:** light

**Industry:** design

Little Troop sculpts a playful yet authoritative visual identity through stark monochrome contrast and oversized, almost cartoonish, typographic gestures. Surfaces are a crisp white canvas, against which dense, rounded blocks of content float. The system uses a limited color palette to emphasize form and content, with visual interest created through unexpected scale shifts and exaggerated shapes, lending a whimsical but professional feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Inkwell | #000000 | `--color-inkwell` | Primary text, borders, decorative elements — stark density against the white canvas |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, large content surfaces, negative space |
| Ocean Mist | #8bc3bd | `--color-ocean-mist` | Accents, decorative elements, subtle highlights |
| Sunset Ember | #e78f40 | `--color-sunset-ember` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |

## Tokens — Typography

### Arial Narrow

- **Token:** `--font-arial-narrow`
- **Substitute:** Arial Condensed
- **Weights:** 400, 700
- **Sizes:** 14px, 16px
- **Line heights:** 0.86, 1.00, 1.14
- **Letter spacing:** normal
- **Role:** Body text, navigation links, secondary headings — provides a utilitarian contrast to display type, prioritizing legibility at smaller scales.

### Times Now

- **Token:** `--font-times-now`
- **Substitute:** Times New Roman
- **Weights:** 250
- **Sizes:** 76px
- **Line heights:** 0.79
- **Letter spacing:** -0.0660em
- **Role:** Dominant display headings where a light, wide, and tightly tracked textual punch is needed, creating a signature high-impact, minimalist statement.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-173 | 173px | `--spacing-173` |
| spacing-231 | 231px | `--spacing-231` |
| spacing-250 | 250px | `--spacing-250` |
| spacing-289 | 289px | `--spacing-289` |
| spacing-316 | 316px | `--spacing-316` |

### Border Radius

| Element | Value |
| --- | --- |
| shapes | 50px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Navigation Link

**Role:** Header and footer navigation elements, work item links.

Text in Arial Narrow, typically 14px or 16px, color Inkwell (#000000). Hover states might apply a border or color change as suggested by the accent colors. These minimal links maintain the clean negative space without heavy button styles.

### Project Index Card

**Role:** Container for individual work project previews.

A ghost card with transparent background, zero border radius, and no box shadow. Content within has padding of 20px on left/right. The distinct rounded shape and visible content defines the card, not the container properties.

### Filter Toggle Button

**Role:** Used for filtering content, specifically on the Project Index.

A ghost button, with a transparent background, white text (#ffffff), and a 1px border in Canvas White (#ffffff) on the top. Uses Arial Narrow font. The minimal styling ensures it integrates seamlessly into the content display.

### Filter Checkbox

**Role:** Interactive element to select filter criteria.

A small circular checkbox with a 1px Inkwell (#000000) border, transparent background, and 50px radius. Checked state implied by color fill from --clr-accent. This rounded shape is a key visual identifier.

## Do's and Don'ts

### Do

- Use Canvas White (#ffffff) as the dominant background for all pages and primary content containers.
- Employ Inkwell (#000000) for all primary text, borders, and main decorative outlines to maintain high contrast.
- Apply a 50px border-radius to any background panels or interactive elements that should appear as distinct, soft-edged shapes.
- Use Arial Narrow for body text and navigation, adjusting line height as needed between 0.86 and 1.14 based on context.
- Reserve Times Now (weight 250, 76px, letter-spacing -0.066em) for impactful display headings, emphasizing its unique character.
- Maintain generous negative space with a 100px section gap between major content blocks to ensure breathing room.
- Introduce Ocean Mist (#8bc3bd) or Sunset Ember (#e78f4e) sparingly for subtle accents or hover states to highlight interaction.

### Don't

- Avoid introducing additional saturated colors beyond specified accents to preserve the monochrome focus.
- Do not use heavy box shadows or overly complex gradients; the design relies on flat planes and subtle elevation changes.
- Do not vary border-radius for non-container elements; the 50px radius is a signature shape.
- Avoid dense, text-heavy blocks; break content into manageable, visually distinct units.
- Do not use bold or heavy weights for Times Now; its personality comes from its light 250 weight combined with tight tracking.
- Do not use generic system fonts for display text; Times Now defines a core part of the brand's typographic identity.
- Avoid decorative imagery that conflicts with the clean, bold, typography-driven aesthetic; use clear product captures or abstract forms.

## Imagery

This system primarily uses product screenshots and brand identity artwork, often presented within rounded, contained shapes or as part of a larger, abstract layout. Imagery is typically high-fidelity and product-focused, rather than lifestyle or stock photography. Icons, when present (e.g., filter checkboxes), are simple, outlined, and monochromatic, aligning with the minimal aesthetic. The role of imagery is to showcase design work or provide functional context, maintaining a text-dominant to image-balanced density, often with images deeply integrated into the layout rather than merely decorative.

## Layout

The page maintains a full-bleed layout, using a max-width approach for content containment. The initial hero section often features a distorted or spherical graphic, creating an immediate, abstract visual impact. Content sections are vertically stacked with a consistent 100px gap, using a flexible grid that can accommodate single large hero elements or multiple smaller 'card' items. The Project Index utilizes a dynamic, responsive grid of ghost cards, each implicitly defined by its rounded outline or contained content, rather than explicit borders. Navigation is presented minimally in a fixed header, with a large footer section. The overall density is comfortable, with ample whitespace provided by the Canvas White background.

## Similar Brands

- **Stripe** — Similar approach to clean, spacious layouts with strong typography and minimal, functional use of color, primarily monochromatic with subtle accents.
- **Kikkland Design** — Emphasizes typography and graphic shapes over complex imagery, creating a distinct visual voice with a limited color palette.
- **AIGA Design** — Utilizes a strong grid, high-contrast black and white, and often incorporates unique typographic treatments for headlines.
- **The Brand Identity** — Focuses on case studies and project displays within a clean, editorial layout, minimal UI, and a strong emphasis on the work itself.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-inkwell: #000000;
  --color-canvas-white: #ffffff;
  --color-ocean-mist: #8bc3bd;
  --color-sunset-ember: #e78f40;
  --font-arial-narrow: 'Arial Narrow', Arial Condensed;
  --font-times-now: 'Times Now', Times New Roman;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-40: 40px;
  --spacing-89: 89px;
  --spacing-100: 100px;
  --spacing-173: 173px;
  --spacing-231: 231px;
  --spacing-250: 250px;
  --spacing-289: 289px;
  --spacing-316: 316px;
  --radius-shapes: 50px;
}
```

### Tailwind v4

```css
@theme {
  --color-inkwell: #000000;
  --color-canvas-white: #ffffff;
  --color-ocean-mist: #8bc3bd;
  --color-sunset-ember: #e78f40;
  --font-arial-narrow: 'Arial Narrow', Arial Condensed;
  --font-times-now: 'Times Now', Times New Roman;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-40: 40px;
  --spacing-89: 89px;
  --spacing-100: 100px;
  --spacing-173: 173px;
  --spacing-231: 231px;
  --spacing-250: 250px;
  --spacing-289: 289px;
  --spacing-316: 316px;
  --radius-shapes: 50px;
}
```
