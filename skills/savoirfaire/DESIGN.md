---
version: alpha
name: "Savoirfaire"
description: "Savoirfaire's design evokes a gallery-like atmosphere, stark and minimal, where a single vibrant accent commands attention. The all-black background with subtle gray text offers a high-contrast canvas, allowing the searing neon green to act as a singular, sharp focal point. Typography features extreme weight variations; ultra-thin headlines dominate at immense sizes, lending an almost whispered authority, while body text remains crisp and functional against the dark. The absence of gradients, shadows, or rounded elements emphasizes the flat, almost two-dimensional nature of the display."
theme: "dark"
industry: "agency"
source_url: "https://savoirfaire.nyc"
refero_style_id: "e9f1b24a-26c1-49e0-9b5f-74f492185664"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926141432-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926141432-thumb.jpg"
extracted_at: "2026-04-11T16:49:17.198Z"
---

# Savoirfaire — Style Reference

> Black canvas, neon spark. A singular, vivid green element electrifies an otherwise monochrome dark mode interface.

**Theme:** dark

**Industry:** agency

Savoirfaire's design evokes a gallery-like atmosphere, stark and minimal, where a single vibrant accent commands attention. The all-black background with subtle gray text offers a high-contrast canvas, allowing the searing neon green to act as a singular, sharp focal point. Typography features extreme weight variations; ultra-thin headlines dominate at immense sizes, lending an almost whispered authority, while body text remains crisp and functional against the dark. The absence of gradients, shadows, or rounded elements emphasizes the flat, almost two-dimensional nature of the display.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #000000 | `--color-void-black` | Page backgrounds, container backgrounds, primary text for inverted elements. |
| Glow Green | #cdfd50 | `--color-glow-green` | Primary accent color for interactive elements, highlights, and calls to action. Its vividness creates immediate visual interest against the dark background. |
| Cloud White | #ffffff | `--color-cloud-white` | Secondary text color for primary headings on dark backgrounds, offering maximum contrast and visual weight. |
| Ghost Gray | #899090 | `--color-ghost-gray` | Subtle secondary text, icons, and non-critical information on dark backgrounds. Provides readability without overwhelming the primary white text. |
| Mist Gray | #808080 | `--color-mist-gray` | Tertiary text and subtle distinctions on dark backgrounds for a softer, understated appearance. |

## Tokens — Typography

### editorial-thin

- **Token:** `--font-editorial-thin`
- **Substitute:** IBM Plex Sans Thin
- **Weights:** 100
- **Sizes:** 360px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Display headlines and large numerical indicators. The ultra-thin weight at extreme sizes creates a sense of fragility and high fashion, distinguishing it from conventional bold headings.

### haas-regular

- **Token:** `--font-haas-regular`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 13px, 20px
- **Line heights:** 1.00, 1.11
- **Letter spacing:** normal
- **Role:** Body copy, primary navigation, and detailed information. Its regular weight ensures readability against the dark background while complementing the extreme headline style.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-50 | 50px | `--spacing-50` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 0px |
| elementGap | 50px |

## Components

### Hero Display Numerals

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Accent Link Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stat Block with Body Copy

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Display Numerals

**Role:** Headline component

Large, ultra-thin numerals set against the Void Black background. Uses 'editorial-thin' font at 360px, weight 100, color Cloud White (#ffffff). No padding or borders, as it's a pure overlay element.

### Paragraph Text

**Role:** Body text component

Standard body text using 'haas-regular' font at 20px for primary paragraphs, 13px for smaller annotations, weight 400. Color is Ghost Gray (#899090) or Mist Gray (#808080) for softer emphasis.

### Accent Link

**Role:** Interactive element

Inline text link with 'haas-regular', weight 400. Color is Glow Green (#cdfd50). No underline or other decorative elements, focus is purely on color change.

## Do's and Don'ts

### Do

- Do use Void Black (#000000) as the universal background color for all sections and surfaces.
- Do apply Glow Green (#cdfd50) strictly for interactive elements and brand highlights to maintain its prominent effect.
- Do use editorial-thin, weight 100, at sizes of 360px for all display-level headings and numerical elements to create drama.
- Do maintain a stark, borderless, and shadow-free aesthetic for all containers and elements.
- Do use Ghost Gray (#899090) or Mist Gray (#808080) for body text and secondary information, choosing based on desired contrast level.
- Do align primary content to the left margin, maintaining a minimalist information hierarchy.
- Do maintain 0px radius for all elements, ensuring sharp, unyielding edges.

### Don't

- Don't introduce any colors other than the defined brand palette.
- Don't add any form of shadows or gradients; rely on color contrast and typographic scale for depth.
- Don't use bold weights for headlines; the 100-weight of 'editorial-thin' is crucial to the brand's quiet authority.
- Don't apply rounded corners to any component; maintain the sharp, angular aesthetic.
- Don't use underlines for links; color change to Glow Green (#cdfd50) is the sole indicator of interactivity.
- Don't use photography or illustrations that clash with the stark, flat, and minimalist aesthetic.

## Imagery

The site's visual language is characterized by an almost complete absence of traditional rich imagery like photography or complex illustrations. Instead, it relies on stark, elemental graphics, most notably the 'Glow Green' starburst motif acting as a singular, abstract brand marker. The focus is purely on typography and color contrast, with any visual elements serving as decorative accents or abstract markers rather than conveying narrative or product information. The general density is text-dominant, with graphic elements providing visual breaks rather than competing for attention.

## Layout

The page maintains an essentially full-bleed, max-width layout pattern where content is centered horizontally but often left-aligned within its content block. The hero section is a full-viewport dark background with centered, extremely large typography. Sections proceed with a consistent vertical spacing of 50px, providing ample breathing room. Content arrangement is primarily a single column for text blocks, frequently punctuated by large numerical displays. There are no apparent grid structures for cards or feature sections; the layout is linear and vertical, emphasizing sequential viewing. Navigation is implicit within the content flow rather than a fixed header or sidebar.

## Similar Brands

- **A.P.C.** — Monochromatic approach with minimalist typography and stark product presentation.
- **Acne Studios** — Emphasis on large, simple typography and a clean, almost sterile visual environment.
- **The Row** — Understated luxury through extreme minimalism, reliance on texture (implied by darkness) and precise typography.
- **Balenciaga (some campaigns)** — Dark, severe aesthetic with sharp contrasts and a focus on essential, bold statements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #000000;
  --color-glow-green: #cdfd50;
  --color-cloud-white: #ffffff;
  --color-ghost-gray: #899090;
  --color-mist-gray: #808080;
  --font-editorial-thin: 'editorial-thin', IBM Plex Sans Thin;
  --font-haas-regular: 'haas-regular', Inter;
  --spacing-0: 0px;
  --spacing-50: 50px;
  --radius-all: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #000000;
  --color-glow-green: #cdfd50;
  --color-cloud-white: #ffffff;
  --color-ghost-gray: #899090;
  --color-mist-gray: #808080;
  --font-editorial-thin: 'editorial-thin', IBM Plex Sans Thin;
  --font-haas-regular: 'haas-regular', Inter;
  --spacing-0: 0px;
  --spacing-50: 50px;
  --radius-all: 0px;
}
```
