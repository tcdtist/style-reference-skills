---
version: alpha
name: "Crown + Conquer"
description: "The Crown + Conquer design system exudes a minimalist, high-contrast aesthetic, built on a foundation of stark black text on a subtly off-white canvas. The visual identity is defined by a striking custom script display font for brand elements, juxtaposed with a utilitarian, all-caps sans-serif for functional text. Spacing is generous, creating an atmosphere of exclusivity and focus, with interactive elements subtly outlined rather than filled, reinforcing an understated directness."
theme: "light"
industry: "other"
source_url: "https://crownandconquer.com"
refero_style_id: "7e487226-14fc-4068-813d-569f663fa399"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517432312-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517432312-thumb.jpg"
extracted_at: "2026-04-30T02:50:49.030Z"
---

# Crown + Conquer — Style Reference

> Minimalist gallery wall

**Theme:** light

**Industry:** other

The Crown + Conquer design system exudes a minimalist, high-contrast aesthetic, built on a foundation of stark black text on a subtly off-white canvas. The visual identity is defined by a striking custom script display font for brand elements, juxtaposed with a utilitarian, all-caps sans-serif for functional text. Spacing is generous, creating an atmosphere of exclusivity and focus, with interactive elements subtly outlined rather than filled, reinforcing an understated directness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | #f5f5f5 | `--color-canvas` | Page backgrounds, underlying surfaces |
| Midnight Ink | #000000 | `--color-midnight-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |

## Tokens — Typography

### Fokus

- **Token:** `--font-fokus`
- **Substitute:** Montserrat, Open Sans
- **Weights:** 400, 700
- **Sizes:** 14px, 16px
- **Line heights:** 1.43, 1.50
- **Role:** Functional text: used for all body copy, navigation links, and footer information, usually in an all-caps form. Its consistent weight and clear letterforms provide an anchor to the unique branding.

### Chronik

- **Token:** `--font-chronik`
- **Substitute:** Tangerine, Great Vibes
- **Weights:** 700
- **Sizes:** 16px
- **Line heights:** 1.50
- **Role:** Decorative display font for primary brand statements, giving an elegant, bespoke feel. Used sparingly for key headings.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-16 | 16px | `--spacing-16` |
| spacing-32 | 32px | `--spacing-32` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 32px |
| elementGap | 16px |

## Components

### Navigation Link

**Role:** Interactive text link in the footer.

Fokus font, 14px, weight 400, color #000000. Underlined on hover.

### Footer Text Block

**Role:** Informational text in the page footer.

Fokus font, 14px, weight 400, color #000000, uppercase. Padded by 32px on top, right, and bottom. Margins of 16px between elements.

### Call to Action Headline

**Role:** Prominent statement text to draw attention to the brand's purpose.

Chronik font, 16px, weight 700, color #000000, uppercase. Line height 1.5. Centered on the page.

### Brandmark Text

**Role:** Main company logo text.

Custom script font rendered as an image, visually large and centered.

## Do's and Don'ts

### Do

- Use Canvas (#f5f5f5) as the primary background for all page sections.
- Employ Midnight Ink (#000000) for all text elements to maintain high contrast and sophistication.
- Apply Fokus font with a weight of 400 for all body text, navigation, and footer details, typically in uppercase.
- Utilize Chronik font exclusively for primary brand statements or key headings, maintaining its default weight of 700.
- Maintain a minimum element gap of 16px between UI items horizontally and vertically.
- Use 32px for section padding, especially for top and bottom margins of major content blocks.
- Center all significant page sections and content blocks, adhering to the expansive full-bleed page model.

### Don't

- Do not introduce additional background colors; maintain the stark #f5f5f5 background throughout.
- Avoid using saturated or chromatic accent colors in UI elements; color is reserved for content if present, not interface.
- Do not use multiple font sizes or weights for Fokus text within the same semantic block (e.g., body text); stick to 14px/16px at weight 400.
- Do not use Chronik for body text; its script style is for impactful, sparse headings only.
- Avoid shadows or complex elevation; the design relies on flat, high-contrast separation.
- Do not add border radii to UI elements; the system emphasizes sharp, clean edges.
- Do not introduce gradients into the UI; maintain flat colors.

## Imagery

Imagery style is not explicitly defined in the provided data or screenshot; the visual focus is on typography and stark contrast. Any imagery would need to align with a minimalist, high-contrast, potentially monochrome aesthetic, serving as decorative atmosphere rather than content explanation.

## Layout

The page operates on a full-bleed model, with content centered horizontally without a defined `pageMaxWidth`. The hero features a large, centered brandmark image followed by a centered headline statement. Sections appear to have consistent vertical spacing (32px padding surrounding content blocks, 16px element gaps). The footer is minimal, also centered, with text details and a contact link. The overall rhythm is sparse and symmetrical, emphasizing individual elements rather than dense information blocks.

## Similar Brands

- **Acne Studios** — High-contrast, minimalist aesthetic with focus on typography and stark presentation.
- **The Row** — Understated luxury through limited color palettes, generous spacing, and fine typographic details.
- **Squarespace** — Emphasizes clean visual layouts with strong typography and ample white space, often using monochrome palettes.
- **Zara** — Simple, bold black-on-white text, often uppercase, with minimalist UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas: #f5f5f5;
  --color-midnight-ink: #000000;
  --font-fokus: 'Fokus', Montserrat, Open Sans;
  --font-chronik: 'Chronik', Tangerine, Great Vibes;
  --spacing-16: 16px;
  --spacing-32: 32px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas: #f5f5f5;
  --color-midnight-ink: #000000;
  --font-fokus: 'Fokus', Montserrat, Open Sans;
  --font-chronik: 'Chronik', Tangerine, Great Vibes;
  --spacing-16: 16px;
  --spacing-32: 32px;
}
```
