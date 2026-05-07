---
version: alpha
name: "Bee Home"
description: "Bee Home's design system evokes a handcrafted blueprint aesthetic, combining structured layouts with an organic, tactile feel. Predominantly monochrome with subtle creams and charcoal grays, the visual system suggests natural materials and understated functionality. Typography uses a single confident, yet friendly, sans-serif, often in outlined states for interactive elements. Components prioritize soft edges and a light touch, focusing on content over heavy decoration."
theme: "light"
industry: "design"
source_url: "https://www.beehome.design"
refero_style_id: "a2788be7-a5dc-4828-86b8-3c1345a25049"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518529382-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518529382-thumb.jpg"
extracted_at: "2026-04-30T03:09:09.350Z"
---

# Bee Home — Style Reference

> natural blueprint, organic craft

**Theme:** light

**Industry:** design

Bee Home's design system evokes a handcrafted blueprint aesthetic, combining structured layouts with an organic, tactile feel. Predominantly monochrome with subtle creams and charcoal grays, the visual system suggests natural materials and understated functionality. Typography uses a single confident, yet friendly, sans-serif, often in outlined states for interactive elements. Components prioritize soft edges and a light touch, focusing on content over heavy decoration.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Inkwell Black | #2a2920 | `--color-inkwell-black` | Primary text, headings, button borders, navigation accents — a deep, muted charcoal that provides strong contrast against lighter surfaces |
| Canvas Cream | #e9e9e1 | `--color-canvas-cream` | Secondary text, ghost button outlines, navigation borders, card backgrounds in content areas. Serves as a less stark alternative to pure white, contributing to the organic feel |
| Linen White | #ffffff | `--color-linen-white` | Card backgrounds, overall page background in some sections, providing a clean working surface |
| Stone Gray | #d3d3ce | `--color-stone-gray` | Subtle card backgrounds, creating a slight visual distinction from Canvas Cream without introducing strong color |
| Text Secondary Dim | #2a29208a | `--color-text-secondary-dim` | Muted helper text and secondary information, a translucent variant of Inkwell Black |

## Tokens — Typography

### Neue Haas Unica W1G

- **Token:** `--font-neue-haas-unica-w1g`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 14px, 16px, 17px, 28px, 32px
- **Line heights:** 1.30
- **Role:** All textual elements from body copy to headings. Its singular weight and consistent line height contribute to a unified, approachable voice across the interface. The custom font choice avoids generic system fonts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 14px | 1.3 | — | `--text-body-sm` |
| heading | 28px | 1.3 | — | `--text-heading` |
| heading-lg | 32px | 1.3 | — | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 22px |
| buttons | 38px |
| navItems | 38px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 6px |

## Components

### Pill Ghost Button (Inkwell Text)

**Role:** Primary Call to Action

Ghost button with Inkwell Black text and a 2px stroke border of Inkwell Black. Rounded with a 38px radius, providing a tactile, pill-like shape. Padding: 6px top, 9px bottom, 20px horizontal.

### Pill Ghost Button (Canvas Text)

**Role:** Secondary Call to Action, Navigation

Ghost button with Canvas Cream text and a 2px stroke border of Canvas Cream. Rounded with a 38px radius for a soft, pill-like appearance. Padding: 6px top, 9px bottom, 20px horizontal.

### Underlined Text Button

**Role:** Tertiary Action, Inline Navigation

Ghost button with Inkwell Black text and a 2px stroke border of Inkwell Black, but with a 0px radius, essentially creating an underlined text link. Padding: 0px top/bottom, 30px horizontal.

### Content Card (Linen White)

**Role:** Categorized Content Display

Card with Linen White background and no shadow, featuring a top border-radius of 22px and bottom squared (0px). No internal padding specified for primary content.

### Content Card (Canvas Cream)

**Role:** Categorized Content Display

Card with Canvas Cream background and no shadow, featuring a top border-radius of 22px and bottom squared (0px). No internal padding specified for primary content.

### Content Card (Stone Gray)

**Role:** Categorized Content Display

Card with Stone Gray background and no shadow, featuring a top border-radius of 22px and bottom squared (0px). No internal padding specified for primary content.

## Do's and Don'ts

### Do

- Use Neue Haas Unica W1G weight 400 for all text, maintaining a consistent brand voice without font variation.
- Prioritize Canvas Cream (#e9e9e1) and Inkwell Black (#2a2920) for ghost button borders and primary text to highlight interactive elements.
- Apply a 38px border-radius to all interactive buttons and navigation items for a distinct pill shape.
- Use 22px border-radius for cards, applied only to the top corners, to create a consistent grounded element.
- Employ a 2px solid border for all strokes, borders, and outlined elements to maintain the handcrafted aesthetic.
- Maintain a compact spacing rhythm, with element gaps typically around 6px and card padding at 20px.
- Utilize Inkwell Black for primary text and headings, providing strong legibility against cream and white backgrounds.

### Don't

- Avoid using box-shadows or significant elevation; maintain a flat, natural surface aesthetic.
- Do not introduce additional font weights or families; Neue Haas Unica W1G 400 is the only typographic choice.
- Steer clear of vivid or vibrant colors; the palette is strictly monochrome with muted, natural tones.
- Do not use sharp 0px radii for cards or buttons, unless it explicitly represents an underlined text link.
- Avoid large empty spaces; maintain a compact information density across layouts.
- Do not add gradients or complex background fills; surfaces should be solid, single colors.

## Imagery

The imagery is split between stylized product photography and lifestyle photography. Product shots feature the bee home modules as wooden architectural models, precisely lit against a warm, neutral background, emphasizing craftsmanship and material. Lifestyle photography features people engaged in creative or natural activities. All images are contained within rounded (22px) card frames, or integrated seamlessly as background textures for hero sections. Icons are minimal, outlined, and monochromatic, matching the overall subdued aesthetic. Imagery serves both decorative atmosphere and explanatory content, often pairing human activity with the product ethos.

## Layout

The page primarily uses a max-width contained layout, though the hero section is full-bleed. The hero features a centered headline over a background image of the product. Subsequent sections alternate between full-width typographic elements and a grid-based content consumption. A common pattern is a 2-column layout for text and image; images are often treated as cards with specific radii. Vertical spacing is consistent but compact, creating a flowing, unified experience. Navigation is a top-bar sticky header with ghost buttons, converting to a hamburger menu on smaller screens or specific interactions. A consistent feature is the use of large, stylized typographic elements acting as visual dividers or section headlines.

## Similar Brands

- **Oura Ring** — Monochrome palette with earthy tones, minimalist UI, and emphasis on product design with high-quality photography.
- **Sense by Headspace** — Tactile, organic aesthetic, soft neutral colors, and subtle UI elements over bold statements.
- **B&O (Bang & Olufsen)** — Focus on natural materials, considered typography, and an understated, premium visual identity, with subtle ghost buttons.
- **Linear (before dark mode)** — Clean, functional design with a strong typographic presence and minimal use of color for functional accents, though Bee Home is softer.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-inkwell-black: #2a2920;
  --color-canvas-cream: #e9e9e1;
  --color-linen-white: #ffffff;
  --color-stone-gray: #d3d3ce;
  --color-text-secondary-dim: #2a29208a;
  --font-neue-haas-unica-w1g: 'Neue Haas Unica W1G', Helvetica Neue;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --text-heading: 28px;
  --leading-heading: 1.3;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.3;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --radius-cards: 22px;
  --radius-buttons: 38px;
  --radius-navitems: 38px;
}
```

### Tailwind v4

```css
@theme {
  --color-inkwell-black: #2a2920;
  --color-canvas-cream: #e9e9e1;
  --color-linen-white: #ffffff;
  --color-stone-gray: #d3d3ce;
  --color-text-secondary-dim: #2a29208a;
  --font-neue-haas-unica-w1g: 'Neue Haas Unica W1G', Helvetica Neue;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --text-heading: 28px;
  --leading-heading: 1.3;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.3;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --radius-cards: 22px;
  --radius-buttons: 38px;
  --radius-navitems: 38px;
}
```
