---
version: alpha
name: "Gumroad"
description: "This design system feels like a digital playground, blending a stark, utilitarian aesthetic with unexpected bursts of vibrant color. The liberal use of pure black and white creates a high-contrast canvas, punctuated by a signature hot pink and other vivid, almost neon, hues. Geometric illustrations and sharp angles are softened only by pill-shaped buttons and subtle rounded card edges, creating a playful yet focused environment for digital creators."
theme: "light"
industry: "ecommerce"
source_url: "https://gumroad.com"
refero_style_id: "d67e1407-6d16-47e8-89cf-22f5c5f2dd88"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924510561-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924510561-thumb.jpg"
extracted_at: "2026-04-11T16:22:10.728Z"
---

# Gumroad — Style Reference

> High-contrast digital playground. A stark black and white digital canvas splashed with vivid, almost neon, color accents.

**Theme:** light

**Industry:** ecommerce

This design system feels like a digital playground, blending a stark, utilitarian aesthetic with unexpected bursts of vibrant color. The liberal use of pure black and white creates a high-contrast canvas, punctuated by a signature hot pink and other vivid, almost neon, hues. Geometric illustrations and sharp angles are softened only by pill-shaped buttons and subtle rounded card edges, creating a playful yet focused environment for digital creators.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Primary text, critical buttons, borders, and main icons — establishing a strong, authoritative presence. |
| Light Linen | #ffffff | `--color-light-linen` | Page backgrounds, card surfaces, and text on dark elements — provides a clean, extensive canvas. |
| Marketplace Gray | #f4f4f0 | `--color-marketplace-gray` | Subtle background for input fields and secondary content blocks, providing slight visual separation from pure white. |
| Graphite Border | #242423 | `--color-graphite-border` | Input borders, secondary text, and outline strokes — a slightly softer alternative to Pitch Black for structural elements. |
| Subtle Ash | #d1d5dc | `--color-subtle-ash` | Soft button borders, creating a barely-there outline for less prominent actions. |
| Creator Pink | #ff90e8 | `--color-creator-pink` | Illustrative elements, decorative accents, and subtle background hints — injecting a signature playful and energetic brand identity. |
| Sunshine Yellow | #ffc900 | `--color-sunshine-yellow` | Used for occasional graphic accents and background elements, bringing warmth and vibrancy. |
| Lime Glow | #f1f333 | `--color-lime-glow` | Secondary illustrative accents, signaling growth or fresh ideas. |
| Firecracker Orange | #dc341 | `--color-firecracker-orange` | Tertiary illustrative accents, adding a dynamic, bold pop of color. |

## Tokens — Typography

### ABC Favorit

- **Token:** `--font-abc-favorit`
- **Substitute:** Inter, Arial
- **Weights:** 400, 500, 700
- **Sizes:** 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px, 72px, 96px, 192px
- **Line heights:** 0.90, 1.00, 1.11, 1.20, 1.25, 1.33, 1.38, 1.40, 1.43, 1.50, 1.56, 1.63
- **Letter spacing:** -0.0290em, -0.0250em, -0.0220em, -0.0200em, -0.0170em, -0.0130em, -0.0110em, -0.0080em, -0.0060em, -0.0040em, -0.0020em
- **OpenType features:** "ss04", "ss11"
- **Role:** The primary typeface for all content. Its subtle geometric qualities and high x-height contribute to the system's clarity and modern feel. Varied line heights and negative letter-spacing for larger sizes prevent text from feeling too open, maintaining visual density.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | -0.406px | `--text-caption` |
| body | 16px | 1.4 | -0.32px | `--text-body` |
| subheading | 20px | 1.33 | -0.34px | `--text-subheading` |
| heading | 36px | 1.25 | -0.396px | `--text-heading` |
| heading-lg | 72px | 1 | -1.44px | `--text-heading-lg` |
| display | 96px | 0.9 | -1.92px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-101 | 101px | `--spacing-101` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-137 | 137px | `--spacing-137` |
| spacing-143 | 143px | `--spacing-143` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-207 | 207px | `--spacing-207` |
| spacing-224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| buttons | 1.67772e+07px |
| default | 4px |
| largeElements | 24px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| elementGap | 8px |

## Components

### Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Search Input Field

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Black Button

**Role:** Critical CTAs

Solid Pitch Black background, Light Linen text, 4px border radius. Padding 0px top/bottom, 40px left/right. Uses ABC Favorit at 16px.

### Ghost Header Button

**Role:** Navigation links, secondary actions in headers

Transparent background, Pitch Black text, 1.67772e+07px (pill) border radius. Padding 8px top/bottom, 16px left/right. Uses ABC Favorit at 16px.

### Outline Pill Button

**Role:** Tertiary actions, filters, tags

White background, Pitch Black text, Subtle Ash border, 1.67772e+07px (pill) border radius. Padding 8px top/bottom, 16px left/right. Uses ABC Favorit at 16px.

### GitHub Link Button

**Role:** External links to code repositories

Transparent background, Pitch Black text, Subtle Ash border with 1.67772e+07px (pill) border radius. Internal padding 6px. Uses ABC Favorit at 14px.

### Search Input Field

**Role:** Primary search functionality

Marketplace Gray background, Pitch Black text, Graphite Border with 4px radius. Large horizontal padding 32px left/80px right (for icon). Uses ABC Favorit at 16px.

### Ghost Input Field (Dark)

**Role:** Placeholder for dark-themed inputs

Transparent background, Light Linen text at 30% opacity for placeholder, 4px radius. Padding 0px top/bottom, 16px left/right. Uses ABC Favorit at 16px.

## Do's and Don'ts

### Do

- Prioritize Pitch Black (#000000) for all primary text and calls to action.
- Use Light Linen (#ffffff) as the default background for most page sections and card surfaces.
- Apply 1.67772e+07px (pill shape) border-radius only for buttons and small interactive elements like tags.
- Maintain ABC Favorit for all typography, leveraging its specific weights and letter-spacing values from the type scale.
- Utilize Creator Pink (#ff90e8) exclusively for brand iconography and illustrative elements, not for interactive states or text.
- Introduce Marketplace Gray (#f4f4f0) for subtle background differentiation in input fields or less prominent content sections.

### Don't

- Avoid using chromatic brand/accent colors for large blocks of text or primary UI elements; they are strictly for accents.
- Do not deviate from the specified ABC Favorit letter-spacing values, especially at larger type sizes, to preserve typographic character.
- Never introduce shadows as an elevation method; rely on color planes and borders for depth.
- Under no circumstances use default browser link styles; all links must adopt Pitch Black (#000000) or Light Linen (#ffffff) as appropriate contextually.
- Do not round corners to 24px if the element is not a larger, self-contained interactive block or card.
- Avoid mixing button styles; for primary actions, use the solid black button to maintain visual hierarchy.

## Imagery

The site uses flat, outlined illustrations with a clear geometric style. The key visual motif is a pastel pink coin with a 'G' emblazoned on it, often depicted in a dynamically floating, isometric perspective, adding a sense of movement and playfulness. These illustrations are decorative, establishing brand identity rather than explaining complex concepts. The overall density of imagery is moderate, primarily acting as background accents or small, focused product illustrations.

## Layout

The page primarily follows a max-width contained layout, centering content within the viewport against a Light Linen background. The hero section features a centered, large headline and subtext, flanked by the signature floating coin illustrations, and is followed by a horizontal arrangement of primary and secondary CTA buttons. Subsequent sections appear to alternate between large, impactful type elements and more structured content blocks, likely arranged in multi-column grids or distinct feature sections. Vertical spacing is consistent and generous, creating a comfortable density.

## Similar Brands

- **Figma** — High-contrast black & white base palette with vibrant, illustrative accents and strong typography.
- **Superhuman** — Focus on high contrast, a strong grid, and deliberate use of negative space with specific font choices for efficiency.
- **Notion** — Minimalist aesthetic combined with a functional, content-first layout, and limited but impactful color usage.
- **Linear** — Clean, high-contrast interface with subtle gray tones for surface differentiation and sharp, functional typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-light-linen: #ffffff;
  --color-marketplace-gray: #f4f4f0;
  --color-graphite-border: #242423;
  --color-subtle-ash: #d1d5dc;
  --color-creator-pink: #ff90e8;
  --color-sunshine-yellow: #ffc900;
  --color-lime-glow: #f1f333;
  --color-firecracker-orange: #dc341;
  --font-abc-favorit: 'ABC Favorit', Inter, Arial;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: -0.406px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.32px;
  --text-subheading: 20px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.34px;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --tracking-heading: -0.396px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.44px;
  --text-display: 96px;
  --leading-display: 0.9;
  --tracking-display: -1.92px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-101: 101px;
  --spacing-115: 115px;
  --spacing-128: 128px;
  --spacing-137: 137px;
  --spacing-143: 143px;
  --spacing-160: 160px;
  --spacing-207: 207px;
  --spacing-224: 224px;
  --radius-cards: 16px;
  --radius-buttons: 1.67772e+07px;
  --radius-default: 4px;
  --radius-largeelements: 24px;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-light-linen: #ffffff;
  --color-marketplace-gray: #f4f4f0;
  --color-graphite-border: #242423;
  --color-subtle-ash: #d1d5dc;
  --color-creator-pink: #ff90e8;
  --color-sunshine-yellow: #ffc900;
  --color-lime-glow: #f1f333;
  --color-firecracker-orange: #dc341;
  --font-abc-favorit: 'ABC Favorit', Inter, Arial;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: -0.406px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.32px;
  --text-subheading: 20px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.34px;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --tracking-heading: -0.396px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.44px;
  --text-display: 96px;
  --leading-display: 0.9;
  --tracking-display: -1.92px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-101: 101px;
  --spacing-115: 115px;
  --spacing-128: 128px;
  --spacing-137: 137px;
  --spacing-143: 143px;
  --spacing-160: 160px;
  --spacing-207: 207px;
  --spacing-224: 224px;
  --radius-cards: 16px;
  --radius-buttons: 1.67772e+07px;
  --radius-default: 4px;
  --radius-largeelements: 24px;
}
```
