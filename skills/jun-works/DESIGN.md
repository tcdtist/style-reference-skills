---
version: alpha
name: "jun.works"
description: "jun.works presents a typographic-centric aesthetic, leveraging bold, custom-designed lettering for primary information and system fonts for supporting details. The design is monochromatic, relying entirely on black on white with precise outlines and very generous radii to define interactive elements. Visual weight is managed through typography and border treatments on otherwise minimal components, creating a stark, high-contrast, text-heavy experience. Interaction elements are defined by rounded pill shapes rather than fills."
theme: "light"
industry: "design"
source_url: "https://jun.works"
refero_style_id: "02ba867b-49e3-4ab4-ad23-c30baf345078"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518795719-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518795719-thumb.jpg"
extracted_at: "2026-04-30T03:13:34.704Z"
---

# jun.works — Style Reference

> typographic canvas, pill-outlined actions

**Theme:** light

**Industry:** design

jun.works presents a typographic-centric aesthetic, leveraging bold, custom-designed lettering for primary information and system fonts for supporting details. The design is monochromatic, relying entirely on black on white with precise outlines and very generous radii to define interactive elements. Visual weight is managed through typography and border treatments on otherwise minimal components, creating a stark, high-contrast, text-heavy experience.  Interaction elements are defined by rounded pill shapes rather than fills.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, overall site canvas, main surface for content |
| Ink Black | #000000 | `--color-ink-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Muted Gray | #cccccc | `--color-muted-gray` | Subtle borders and decorative fills, providing a slight visual separation or distinction where a full Ink Black is too strong |

## Tokens — Typography

### Standard

- **Token:** `--font-standard`
- **Substitute:** Arial Narrow
- **Weights:** 400
- **Sizes:** 45px, 54px
- **Line heights:** 1.12, 1.15, 1.70
- **Letter spacing:** -0.0540em at 54px, -0.0450em at 45px
- **Role:** The primary display font for brand identity, headings, and key messaging. Its custom nature and tight letter spacing deliver a distinctive, condensed, and impactful visual presence, designed to be read as graphic elements.

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Used for all body copy and descriptive text. Its classic, serif appearance provides a contrasting texture to the bespoke 'Standard' font, grounding the content with traditional readability.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-26 | 26px | `--spacing-26` |

### Border Radius

| Element | Value |
| --- | --- |
| overall | 129.6px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 26px |
| cardPadding | 19px |
| elementGap | 13px |

## Components

### Pill Outline Button

**Role:** Primary interactive element for navigation and calls to action.

Defined by a 4.5px Ink Black border, a 129.6px border-radius creating a pill shape, and Canvas White background. Text is Ink Black at 13px 'Times' 400. Padding is 5px top, 3px bottom, 18-19px left/right. Emphasizes an 'outlined' interaction style with no fill.

### Section Heading Tag

**Role:** Distinctive visual tags for section titles like 'Service' or 'Recognition'.

Uses Ink Black background with Canvas White text at 45px 'Standard' 400, letter-spacing -0.0450em. Features a 129.6px border-radius and generous padding (19px top/left/right, 13px bottom) to create a prominent, pill-shaped visual block.

### Navigation Link

**Role:** Top-level navigation items.

Text is Ink Black at 45px 'Standard' 400, letter-spacing -0.0450em. Interactive state suggested by a 4.5px Ink Black border underneath, mirroring the aesthetic of the Pill Outline Button without being a fully formed button.

### Body Text Block

**Role:** General descriptive text and paragraphs.

Rendered in Ink Black 'Times' 400 at 13px with 1.2 line height. The overall effect is dense text arranged on a sparse Canvas White background.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for all text, borders, and interactive outlines against Canvas White (#ffffff) backgrounds.
- Apply a 129.6px border-radius to all interactive elements, section tags, and any visually significant blocks to achieve the signature 'pill' aesthetic.
- Use 'Standard' font for all headings, brand marks, and prominent text elements, leveraging its custom design and tight letter-spacing for graphic impact.
- Maintain a clear visual hierarchy by strictly adhering to the monochromatic palette, letting typography and outlined shapes guide the eye.
- Employ consistent 4.5px borders around interactive elements that use the Ink Black color for emphasis.
- Use 'Times' font for all body copy and secondary information to provide contrast and readability.
- Utilize 13px as a general minimum vertical spacing between content elements to maintain a comfortable density.

### Don't

- Avoid using any fill colors for buttons or interactive states; rely exclusively on Ink Black outlines on Canvas White backgrounds.
- Do not introduce color accents outside of the established monochromatic palette; color is not a component of brand identity here.
- Do not use generic or default border-radius values; the 129.6px radius is critical to the brand's visual language.
- Do not deviate from the specified font families; 'Standard' and 'Times' are fundamental to the system's character.
- Do not add shadows or elevation effects; the design language is flat and relies on crisp outlines and strong contrast.
- Avoid excessive imagery or complex background graphics; the focus is on typography and clean UI.
- Do not use letter-spacing outside the defined values for 'Standard' font; its specific tracking is part of its graphic appeal.

## Imagery

This system features a 'no imagery, pure UI' approach. The visual language is entirely functional and typographic, with brand identity conveyed through custom fonts, strict monochrome colors, and distinct component shapes. Icons, when present (like the menu icon), are minimal, outlined, and monochromatic, emphasizing a clean, graphic sensibility. There are no photographs, illustrations, or product screenshots—the text and layout are the visual content.

## Similar Brands

- **Kerem Suer** — Monochromatic palette with a focus on sophisticated typography and minimal UI elements.
- **Active Theory** — Stark contrast, large impactful typography, and minimal interaction elements, often outlined.
- **Tobias van Schneider** — Designer portfolio sites using limited color palettes, heavy focus on content, and clean, spacious layouts.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-muted-gray: #cccccc;
  --font-standard: 'Standard', Arial Narrow;
  --font-times: 'Times', Times New Roman;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-13: 13px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-26: 26px;
  --radius-overall: 129.6px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-muted-gray: #cccccc;
  --font-standard: 'Standard', Arial Narrow;
  --font-times: 'Times', Times New Roman;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-13: 13px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-26: 26px;
  --radius-overall: 129.6px;
}
```
