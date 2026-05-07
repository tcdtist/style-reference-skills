---
version: alpha
name: "WePresent"
description: "WePresent adopts an editorial, deep-contrast aesthetic designed for immersive digital experiences. Its visual system pairs dark, luxurious backgrounds with stark white typography, creating a gallery-like atmosphere. The design emphasizes clear boundaries through prevalent outline styles for interactive elements, reinforcing a sense of curated content behind a frame. Typography is confident and expressive, balancing classic elegance with modern readability, while accent colors are restrained, used primarily for subtle interactive cues."
theme: "dark"
industry: "media"
source_url: "https://wepresent.wetransfer.com/story/marina-abramovic-traces"
refero_style_id: "1203f8b5-f7ef-4960-96c1-145143909910"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516603442-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516603442-thumb.jpg"
extracted_at: "2026-04-30T02:37:03.503Z"
---

# WePresent — Style Reference

> Dramatic editorial contrast

**Theme:** dark

**Industry:** media

WePresent adopts an editorial, deep-contrast aesthetic designed for immersive digital experiences. Its visual system pairs dark, luxurious backgrounds with stark white typography, creating a gallery-like atmosphere. The design emphasizes clear boundaries through prevalent outline styles for interactive elements, reinforcing a sense of curated content behind a frame. Typography is confident and expressive, balancing classic elegance with modern readability, while accent colors are restrained, used primarily for subtle interactive cues.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Roast | #000000 | `--color-midnight-roast` | Page backgrounds, elevated card surfaces, primary text color for light backgrounds |
| Canvas White | #ffffff | `--color-canvas-white` | Interface text, button text on dark backgrounds, primary borders, card backgrounds on light sections |
| Flame Accent | #fd4344 | `--color-flame-accent` | Outlined button borders, subtle interactive highlights, decorative accents in UI elements |

## Tokens — Typography

### FaktProBlond

- **Token:** `--font-faktproblond`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 10px, 13px, 14px, 16px, 18px, 21px, 22px
- **Line heights:** 1.00, 1.20, 1.35
- **Letter spacing:** -0.0150em
- **Role:** Body text, navigation links, and most informational elements. Its clean, sans-serif structure ensures readability across varying sizes.

### FaktProMedium

- **Token:** `--font-faktpromedium`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 15px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Used for specific secondary text elements, providing a slightly more pronounced weight than FaktProBlond without over-emphasizing.

### GTAlpinaStandardThinItalic

- **Token:** `--font-gtalpinastandardthinitalic`
- **Substitute:** Playfair Display Italic
- **Weights:** 400
- **Sizes:** 13px, 22px
- **Line heights:** 1.00, 1.35
- **Letter spacing:** -0.0150em
- **Role:** Headline display font, used for artistic titles and short, impactful statements. Its thin italic form creates a sophisticated, editorial signature.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.35 | — | `--text-caption` |
| heading-sm | 18px | 1.35 | — | `--text-heading-sm` |
| heading-lg | 22px | 1 | -0.33px | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-287 | 287px | `--spacing-287` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 35px |
| elementGap | 5px |

## Components

### Outline Button (Dark)

**Role:** Primary Call to Action

Ghost button with no background, 'Canvas White' text and a 1px 'Canvas White' border. Padding is 35px horizontal, 40px bottom, 35px top. Sharp 0px border-radius emphasizes the structured design.

### Outline Button (Light)

**Role:** Primary Call to Action on Dark Backgrounds

Ghost button with no background, 'Midnight Roast' text and a 1px 'Midnight Roast' border. Padding is 35px horizontal, 40px bottom, 35px top. Sharp 0px border-radius.

### Image Card (Dark)

**Role:** Content container for images

Transparent background, 0px border-radius, no shadow. Used for showcasing visual content without added visual weight. All padding is 0px directly around the image.

### Image Card (Light)

**Role:** Content container for images on Light Backgrounds

Canvas White background, 0px border-radius, no shadow. Used when a clear content boundary is needed on a lighter section. All padding is 0px directly around the image.

## Do's and Don'ts

### Do

- Prioritize 'Midnight Roast' and 'Canvas White' for most background and text pairings to maintain high contrast and dramatic readability.
- Use FaktProBlond for all body text, links, and minor UI elements, ensuring good readability at sizes from 10px to 22px with a letter-spacing of -0.0150em.
- Reserve GTAlpinaStandardThinItalic exclusively for headlines and impactful titles, leveraging its unique italic style for brand distinctiveness.
- Apply 0px border-radius to all interactive elements and content containers for a consistently sharp, intentional aesthetic.
- Frame interactive elements like buttons with a 1px border using 'Canvas White' on dark backgrounds or 'Midnight Roast' on light backgrounds.
- Maintain a spacious density; use 40px for section gaps and 35px for internal card padding to give content ample breathing room.

### Don't

- Avoid using saturation to differentiate interactive states; rely on border-only outlines and text color changes.
- Do not introduce rounded corners; commit to a rectilinear visual language across all components and layouts.
- Do not use drop shadows for elevation; surfaces should rely on background color changes or clear border distinctions.
- Avoid mixed-case typography for headlines; stick to all-caps or title-case as dictated by content, but maintain the specified font and weight.
- Do not use 'Flame Accent' as a background color for major elements; it is reserved for subtle interactive cues and decorative details.
- Do not vary letter spacing from -0.0150em for FaktProBlond or GTAlpinaStandardThinItalic; consistent tight tracking is key to its brand identity.

## Imagery

This site predominantly uses a 'no imagery, pure UI' approach for foundational elements. When images are present (not explicitly in provided data but implied by card components), they are expected to be full-bleed or contained within sharp, borderless structures, treated as content rather than decorative UI. The overall impression leans towards a dark, immersive canvas that foregrounds textual and interactive elements, suggesting minimal, high-impact visuals if any.

## Layout

The page exhibits a full-bleed layout on a dark background, establishing an immersive, almost theatre-like experience. The hero section features a centered, high-contrast headline and supporting text with an outlined call-to-action button, conveying an editorial and focused entry point. Content arrangement is primarily stacked vertically, allowing ample whitespace and leading. The general approach seems to be max-width content blocks within the full-bleed canvas, ensuring readability without a strict pageMaxWidth, rather using generous horizontal padding or margins to frame the text.

## Similar Brands

- **The New York Times** — Similar editorial, high-contrast black-on-white (or white-on-dark) typographic aesthetic with a focus on clear hierarchy and minimal decorative elements.
- **A24** — Employs an art-house, cinematic design with bold typography and a preference for dark themes and stark visual treatments.
- **Nowness** — Focuses on curated cultural content with a clean, grid-based layout, strong typographic choices, and an emphasis on visual storytelling.
- **Apple (Product Pages)** — High-contrast text on dark backgrounds, large display typography, and a 'less is more' approach to interface elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-roast: #000000;
  --color-canvas-white: #ffffff;
  --color-flame-accent: #fd4344;
  --font-faktproblond: 'FaktProBlond', Montserrat;
  --font-faktpromedium: 'FaktProMedium', Montserrat;
  --font-gtalpinastandardthinitalic: 'GTAlpinaStandardThinItalic', Playfair Display Italic;
  --text-caption: 10px;
  --leading-caption: 1.35;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.35;
  --text-heading-lg: 22px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.33px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-20: 20px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-63: 63px;
  --spacing-80: 80px;
  --spacing-287: 287px;
  --radius-all: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-roast: #000000;
  --color-canvas-white: #ffffff;
  --color-flame-accent: #fd4344;
  --font-faktproblond: 'FaktProBlond', Montserrat;
  --font-faktpromedium: 'FaktProMedium', Montserrat;
  --font-gtalpinastandardthinitalic: 'GTAlpinaStandardThinItalic', Playfair Display Italic;
  --text-caption: 10px;
  --leading-caption: 1.35;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.35;
  --text-heading-lg: 22px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.33px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-20: 20px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-63: 63px;
  --spacing-80: 80px;
  --spacing-287: 287px;
  --radius-all: 0px;
}
```
