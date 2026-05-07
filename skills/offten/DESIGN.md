---
version: alpha
name: "Offten"
description: "Offten's design system evokes a glitch-art, digital-native aesthetic, intentionally breaking common UI conventions. It features a stark monochromatic palette of black and white, punctuated by vivid green for interactive elements and deep orange for decorative accents. Typography is heavily tracked and often letter-spaced, creating a distinct, fragmented visual rhythm. Surfaces are minimal, relying on subtle backgrounds and borders rather than strong elevation to define elements. The overall feel is raw and experimental, prioritizing visual impact over traditional interface smoothness."
theme: "light"
industry: "design"
source_url: "https://offten.xyz"
refero_style_id: "32036fa8-39f0-4ebb-b05e-f5b11038d87a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520720452-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520720452-thumb.jpg"
extracted_at: "2026-04-30T03:45:40.724Z"
---

# Offten — Style Reference

> Pixelated monochrome glitch

**Theme:** light

**Industry:** design

Offten's design system evokes a glitch-art, digital-native aesthetic, intentionally breaking common UI conventions. It features a stark monochromatic palette of black and white, punctuated by vivid green for interactive elements and deep orange for decorative accents. Typography is heavily tracked and often letter-spaced, creating a distinct, fragmented visual rhythm. Surfaces are minimal, relying on subtle backgrounds and borders rather than strong elevation to define elements. The overall feel is raw and experimental, prioritizing visual impact over traditional interface smoothness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, card borders, navigation outlines, general UI borders — establishes high contrast against white backgrounds; Subtle card backgrounds, providing a light frosted effect without full opacity |
| Canvas White | #ffffff | `--color-canvas-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Signal Green | #00db00 | `--color-signal-green` | Interactive elements, outlined button borders, icon accents — provides a stark, vivid contrast for actions |
| Sunset Orange | #d53f09 | `--color-sunset-orange` | Decorative text highlights, border accents, occasional heading color |
| Mango Pop | #f77647 | `--color-mango-pop` | Illustrative fills and strokes, decorative graphic elements |

## Tokens — Typography

### nh

- **Token:** `--font-nh`
- **Substitute:** monospace
- **Weights:** 400, 700
- **Sizes:** 14px, 15px, 16px, 19px, 26px, 39px
- **Line heights:** 1.15, 2.50
- **Letter spacing:** 0.36, 0.38, 0.4, 0.49, 0.67, 1.07
- **Role:** Primary typeface for all text. Its unique square-like glyphs and heavy letter spacing, especially at larger sizes, create a distinctive, fragmented, almost pixelated appearance, reinforcing the digital art aesthetic. Weights 400 and 700 are used interchangeably for emphasis.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.15 | 0.36px | `--text-caption` |
| body | 16px | 1.15 | 0.4px | `--text-body` |
| subheading | 19px | 1.15 | 0.49px | `--text-subheading` |
| heading | 26px | 1.15 | 0.67px | `--text-heading` |
| display | 39px | 2.5 | 1.07px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 22.5px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48-64px |
| elementGap | 6px |

## Components

### Ghost Button

**Role:** Interactive element, navigation links

Transparent background, Midnight Ink text and border, 0px border-radius. Padding is minimal (0px).

### Outline Accent Button

**Role:** Primary interactive element, call to action

Transparent background, Signal Green text, 50% border-radius (pill-shaped), Signal Green 1px border. Padding is 1px 6px. Features a distinctive small size and vivid color for focus.

### Subtle Frosted Card

**Role:** Content container, information grouping

Background is Translucent Smoke (rgba(0,0,0,0.1)), with a 22.5px border-radius. Generous horizontal padding of 37.5px, but no vertical padding specified to create dense information blocks.

### Monochromatic Badge

**Role:** Descriptive tag, category label

Transparent background, Midnight Ink text, 0px border-radius. No specified padding, indicating a tight fit around text content.

## Do's and Don'ts

### Do

- Prioritize Midnight Ink for all primary text and UI outlines to maintain a stark monochromatic core.
- Use Signal Green exclusively for outlined interactive elements and critical icons to ensure visual emphasis.
- Apply nh font with its distinct letter-spacing for all text elements; ensure tracking is consistent across sizes.
- Implement the 22.5px border-radius consistently for card-like surfaces to create a uniform soft edge.
- Employ a base unit of 6px for all spacing decisions, especially for micro-padding and element gaps.
- Utilize Translucent Smoke (rgba(0,0,0,0.1)) subtly for card backgrounds, avoiding strong, opaque surface differences.
- Ensure headings use increased letter-spacing to enhance the signature 'fragmented' typographic style.

### Don't

- Avoid using drop shadows or heavy elevation; surfaces should remain flat or rely on subtle background tints.
- Do not introduce additional background or accent colors beyond Canvas White, Midnight Ink, Signal Green, and the orange tones.
- Do not use standard sans-serif fonts; the unique nh typeface is fundamental to the brand's identity.
- Do not deviate from the specified letter-spacing values, as they are integral to the typographic impression.
- Avoid using large, filled buttons; all primary actions should be represented by the outlined Signal Green variant.
- Do not round corners excessively on elements other than cards; buttons and badges should mostly be sharp or pill-shaped.
- Avoid generic imagery or illustrations; instead, favor abstract, glitch-like, or heavily processed visuals.

## Imagery

The visual language of imagery is abstract and graphic, leaning heavily into stylized, almost glitch-art effects. There are no traditional photographs or realistic illustrations. Instead, visuals feature abstract shapes and patterns, often with a raw, distressed, or pixelated aesthetic. The prominent use of orange and its variations (#f77647, #d53f09) suggests these are decorative, brand-specific elements, possibly serving as background textures or visual noise rather than conveying literal meaning. Icons, when present, are simple outlines or solid fills, often in Signal Green or Midnight Ink, contributing to the stark, functional yet experimental UI.

## Layout

The page structure often uses a full-bleed model, especially for hero sections, which can feature centered headlines over abstract backgrounds. Content sections tend to display a comfortable density with strong vertical rhythm, but specific section gaps can vary. There isn't a rigid grid system for content, rather a flowing arrangement of text and card-like elements. Navigation is minimal, often appearing as highly stylized text links or outlined buttons in the header/footer. Elements exhibit a sense of being intentionally 'broken' or out of place, such as widely spaced text within a minimal layout, contributing to the glitch aesthetic.

## Similar Brands

- **A-COLD-WALL*** — Stark, monochrome palette with strong architectural lines and a single contrasting accent color, often green or red.
- **Y-3 (Adidas x Yohji Yamamoto)** — Minimalist, fashion-forward aesthetic with heavy use of black, white, and subtle, often abstract, typographic treatments.
- **Balenciaga (early Demna Gvasalia era)** — Raw, almost 'ugly' aesthetic deliberately eschewing traditional elegance, paired with blocky, heavily-tracked typography and minimal color.
- **Studio Fnt (design agency)** — Experimental graphic design with bold, custom typography, often using exaggerated letter-spacing, and a limited, high-contrast color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-signal-green: #00db00;
  --color-sunset-orange: #d53f09;
  --color-mango-pop: #f77647;
  --font-nh: 'nh', monospace;
  --text-caption: 14px;
  --leading-caption: 1.15;
  --tracking-caption: 0.36px;
  --text-body: 16px;
  --leading-body: 1.15;
  --tracking-body: 0.4px;
  --text-subheading: 19px;
  --leading-subheading: 1.15;
  --tracking-subheading: 0.49px;
  --text-heading: 26px;
  --leading-heading: 1.15;
  --tracking-heading: 0.67px;
  --text-display: 39px;
  --leading-display: 2.5;
  --tracking-display: 1.07px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-17: 17px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-38: 38px;
  --spacing-48: 48px;
  --radius-cards: 22.5px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-signal-green: #00db00;
  --color-sunset-orange: #d53f09;
  --color-mango-pop: #f77647;
  --font-nh: 'nh', monospace;
  --text-caption: 14px;
  --leading-caption: 1.15;
  --tracking-caption: 0.36px;
  --text-body: 16px;
  --leading-body: 1.15;
  --tracking-body: 0.4px;
  --text-subheading: 19px;
  --leading-subheading: 1.15;
  --tracking-subheading: 0.49px;
  --text-heading: 26px;
  --leading-heading: 1.15;
  --tracking-heading: 0.67px;
  --text-display: 39px;
  --leading-display: 2.5;
  --tracking-display: 1.07px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-17: 17px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-38: 38px;
  --spacing-48: 48px;
  --radius-cards: 22.5px;
}
```
