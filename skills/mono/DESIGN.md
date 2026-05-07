---
version: alpha
name: "mono"
description: "MONO X7 employs a stark, almost architectural aesthetic, reminiscent of an artist's canvas or technical drawing. The visual system is dominated by high contrast black text and lines on a pristine white background, often utilizing a grid-like structure. Typography is precise and highly customized, with distinct weight and letter-spacing variations that dictate hierarchy through subtle means. Interactions are signaled not with color, but by the presence or absence of thin, sharp borders, giving components a planar rather than volumetric feel."
theme: "light"
industry: "design"
source_url: "https://mono.frm.fm/en"
refero_style_id: "859f6be7-9d2d-4da6-a9b7-baa658172696"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516910260-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516910260-thumb.jpg"
extracted_at: "2026-04-30T02:42:12.027Z"
---

# mono — Style Reference

> Architectural grid on white

**Theme:** light

**Industry:** design

MONO X7 employs a stark, almost architectural aesthetic, reminiscent of an artist's canvas or technical drawing. The visual system is dominated by high contrast black text and lines on a pristine white background, often utilizing a grid-like structure. Typography is precise and highly customized, with distinct weight and letter-spacing variations that dictate hierarchy through subtle means. Interactions are signaled not with color, but by the presence or absence of thin, sharp borders, giving components a planar rather than volumetric feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, form input fields — a stark, pure white for a clean, expansive feel |
| Ink Black | #292929 | `--color-ink-black` | Primary text, headings, button borders, icons, dividing lines — provides sharp definition against Canvas White. Acts as the primary border and text color for interactive elements |
| Deep Black | #000000 | `--color-deep-black` | Decorative fills (SVGs), input text, and borders — used sparingly for maximum contrast in specific UI elements |

## Tokens — Typography

### NH

- **Token:** `--font-nh`
- **Substitute:** Helvetica Neue
- **Weights:** 100, 300, 400
- **Sizes:** 16px, 18px, 25px, 32px, 40px, 43px
- **Line heights:** 1.20, 1.25, 1.27, 1.34, 1.50
- **Letter spacing:** -0.0200em
- **Role:** Primary headings and body text. Its subtle negative letter-spacing contributes to the precise, condensed feel.

### S-Condensed

- **Token:** `--font-s-condensed`
- **Substitute:** Impact
- **Weights:** 300, 400, 500
- **Sizes:** 12px, 14px, 40px
- **Line heights:** 0.90, 1.18, 1.20, 1.34
- **Letter spacing:** 0.1000em, 0.2000em
- **Role:** Navigation links, metadata, and labels. The pronounced positive letter-spacing creates a distinctive, airy appearance for functional text.

### EV

- **Token:** `--font-ev`
- **Substitute:** Roboto Thin
- **Weights:** 100
- **Sizes:** 28px
- **Line heights:** 0.90
- **Letter spacing:** -0.0500em
- **Role:** Specialized, extremely light headlines. Its very tight tracking and light weight make it feel almost etched.

### S-Works

- **Token:** `--font-s-works`
- **Substitute:** Bebas Neue Pro
- **Weights:** 350
- **Sizes:** 40px
- **Line heights:** 1.34
- **Letter spacing:** normal
- **Role:** Unique, expressive headlines. The moderate weight and normal letter-spacing allow it to stand out against more tracked and condensed fonts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.18 | 1.2px | `--text-caption` |
| body | 16px | 1.5 | -0.32px | `--text-body` |
| subheading | 18px | 1.25 | -0.36px | `--text-subheading` |
| heading | 25px | 1.27 | -0.5px | `--text-heading` |
| heading-lg | 32px | 1.2 | -0.64px | `--text-heading-lg` |
| display-sm | 40px | 1.34 | -0.8px | `--text-display-sm` |
| display | 43px | 1.34 | -0.86px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### Outline Button

**Role:** Primary and secondary actions with minimal visual weight.

Text in Ink Black (#292929) on a transparent background, with a 1px solid Ink Black border and 0px radius. Padding is 0px top/bottom, 20px left/right, giving a wide, flat appearance.

### Minimal Input Field

**Role:** Standard text input fields.

Background is Canvas White (#ffffff), text is Deep Black (#000000), with a 1px solid Deep Black border. No border-radius. Padding is 8px top/bottom, 0px left/right, emphasizing vertical alignment.

### Navigation Link

**Role:** Top-level navigation items and language selectors.

Utilizes S-Condensed, with specific letter-spacing. Colors are Ink Black (#292929) for text. Often appears with a thin Ink Black border on hover or active state to denote selection.

### Section Heading

**Role:** Major content section titles.

Typography from NH family, often at 43px or 40px, with specific letter-spacing -0.0200em. Uses Ink Black (#292929) color. Frequently bordered by Ink Black lines to separate content areas.

## Do's and Don'ts

### Do

- Maintain a clear, high-contrast between Ink Black (#292929) text/lines and Canvas White (#ffffff) backgrounds.
- Utilize 0px border-radius for all interactive elements and containers to maintain the precise, angular aesthetic.
- Apply positive letter-spacing (0.1em or 0.2em) from S-Condensed for navigation, tags, and small labels to distinguish them from body text.
- Use thin (1px) Ink Black (#292929) borders as the primary visual cue for interactive elements and content divisions.
- Structure layouts using visible grid lines or strong horizontal/vertical divisions rather than relying on card elevation or soft shadows.
- Emphasize content hierarchy through variations in font-family, weight, and letter-spacing rather than relying on color or large size differences.
- For buttons, use transparent backgrounds with Ink Black (#292929) text and borders, with 0px vertical padding and 20px horizontal padding.

### Don't

- Avoid using any color other than Ink Black (#292929), Deep Black (#000000), or Canvas White (#ffffff) for primary UI elements.
- Do not introduce rounded corners or soft shadows; all elements should adhere to a sharp, planar aesthetic.
- Do not use generic system fonts for headings or key interface elements; always select from the specified custom typography. 
- Avoid large and complex hero components; opt for minimal, high-contrast textual statements or product visuals on a Canvas White (#ffffff) background.
- Do not use subtle gray text for functional elements; all text, save for contextual accents, should be Ink Black for maximum impact.
- Do not use excessive padding or element gaps; maintain an efficient information density with 8px as a common element gap and 20px for card padding.
- Do not design buttons with solid background fills; all buttons should be ghosted or outlined.

## Imagery

Imagery primarily consists of product photography, abstract graphics, and occasional textual illustrations. Product photos are tight crops, often showcasing the hardware in an abstract or deconstructed manner, with a heavy emphasis on geometric patterns and technical diagrams. Illustrations are abstract, using a monochromatic palette to match the UI, with strong geometric shapes, dots, and lines (e.g., printed circuit board patterns). Icons are minimalist, outlined, and monochromatic, with a fine stroke weight. The role of imagery is primarily decorative atmosphere and product showcase, with a relatively low density compared to text-heavy sections. Images are typically contained within defined areas, often bordered by the same thin black lines as other UI elements.

## Layout

The page uses a full-bleed layout, particularly for the main canvas, but frequently employs strong vertical and horizontal dividers to create distinct, modular content blocks. The hero section often features a large, singular product image or graphic, sometimes with overlay text, defining a clear focal point. Content progresses with a mix of stacked, centered headlines and text blocks, alongside two-column layouts where text and visuals alternate. A strong underlying grid is evident, with elements often snapping to these implicit lines. Vertical rhythm is established through consistent spacing, and sections can alternate between pure white and light gray backgrounds for differentiation. Navigation is minimalist, adhering to a fixed top bar on larger screens with simple text links.

## Similar Brands

- **Teenage Engineering** — Shares a precise, almost brutalist, high-contrast monochrome aesthetic with custom, technical typography.
- **Braun (Dieter Rams era)** — Emphasizes clear functional hierarchy, minimalist forms, and a strict adherence to grid systems, leveraging whitespace dramatically.
- **Ars Technica** — Uses a similarly crisp, high-contrast black-on-white layout with distinct typography for a dense, information-rich presentation.
- **OP-1** — Strong product focus on geometric design, often showcased with technical diagrams and a minimalist approach to branding and UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #292929;
  --color-deep-black: #000000;
  --font-nh: 'NH', Helvetica Neue;
  --font-s-condensed: 'S-Condensed', Impact;
  --font-ev: 'EV', Roboto Thin;
  --font-s-works: 'S-Works', Bebas Neue Pro;
  --text-caption: 12px;
  --leading-caption: 1.18;
  --tracking-caption: 1.2px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.36px;
  --text-heading: 25px;
  --leading-heading: 1.27;
  --tracking-heading: -0.5px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.64px;
  --text-display-sm: 40px;
  --leading-display-sm: 1.34;
  --tracking-display-sm: -0.8px;
  --text-display: 43px;
  --leading-display: 1.34;
  --tracking-display: -0.86px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-25: 25px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #292929;
  --color-deep-black: #000000;
  --font-nh: 'NH', Helvetica Neue;
  --font-s-condensed: 'S-Condensed', Impact;
  --font-ev: 'EV', Roboto Thin;
  --font-s-works: 'S-Works', Bebas Neue Pro;
  --text-caption: 12px;
  --leading-caption: 1.18;
  --tracking-caption: 1.2px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.36px;
  --text-heading: 25px;
  --leading-heading: 1.27;
  --tracking-heading: -0.5px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.64px;
  --text-display-sm: 40px;
  --leading-display-sm: 1.34;
  --tracking-display-sm: -0.8px;
  --text-display: 43px;
  --leading-display: 1.34;
  --tracking-display: -0.86px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-25: 25px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --radius-none: 0px;
}
```
