---
version: alpha
name: "Stykka"
description: "Stykka's visual system evokes a sense of understated craftsmanship and natural permanence. It combines a restrained, almost monochromatic palette with a strong typographic presence and material-focused imagery. The design is airy and structured, using subtle layering and natural light to highlight content rather than bold colors or heavy UI elements. Typography varies between a clean sans-serif for main content and a distinctive monospaced font for key statements, creating an intentional rhythm."
theme: "light"
industry: "design"
source_url: "https://stykka.com"
refero_style_id: "b43fdb3c-85e9-4282-9262-1d3deb4b679d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515724840-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515724840-thumb.jpg"
extracted_at: "2026-04-30T02:22:24.080Z"
---

# Stykka — Style Reference

> Architectural blueprint on white marble

**Theme:** light

**Industry:** design

Stykka's visual system evokes a sense of understated craftsmanship and natural permanence. It combines a restrained, almost monochromatic palette with a strong typographic presence and material-focused imagery. The design is airy and structured, using subtle layering and natural light to highlight content rather than bold colors or heavy UI elements. Typography varies between a clean sans-serif for main content and a distinctive monospaced font for key statements, creating an intentional rhythm.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Primary text, main headings, critical UI strokes, page background overlay in hero sections. Its deep, pure black anchors the otherwise light design |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, secondary text in dark contexts. Provides a clean, expansive base |
| Ash Gray | #f6f6f6 | `--color-ash-gray` | Subtle background tones, dividers, and ghost buttons for elements that need to recede slightly from Canvas White |
| Medium Gray | #2e2e20 | `--color-medium-gray` | Secondary text, muted icons, and subtle borders where Absolute Zero would be too dominant |
| Light Gray | #c9c9c9 | `--color-light-gray` | Hairline borders, subtle separators, and inactive states for minimal visual interruption |
| Translucent Gray Lite | #00000008 | `--color-translucent-gray-lite` | Subtle, near-invisible overlays or very faint box shadows, adding a hint of depth without starkness |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 11px, 14px, 16px, 22px, 24px, 30px, 46px
- **Line heights:** 1.00, 1.05, 1.10, 1.20, 1.25, 1.50
- **Letter spacing:** -0.042em at 46px, -0.040em at 30px, -0.037em at 24px, -0.036em at 22px, -0.023em at 16px, 0.021em at 11-14px
- **Role:** Versatile workhorse sans-serif for body text, subheadings, and navigation. Its slightly condensed forms maintain compactness while remaining legible.

### Azeret Mono

- **Token:** `--font-azeret-mono`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.00
- **Letter spacing:** -0.010em
- **Role:** Distinctive monospaced font used for key declarations and hero typography, adding a technical, crafted aesthetic through its wide letter-spacing and uniform width.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Small functional text for captions, metadata, and fine print. Default system font ensures wide compatibility for less critical content.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | 0.23px | `--text-caption` |
| body | 14px | 1.5 | 0.294px | `--text-body` |
| heading-sm | 18px | 1 | -0.18px | `--text-heading-sm` |
| heading | 22px | 1.25 | -0.803px | `--text-heading` |
| heading-lg | 24px | 1.25 | -0.888px | `--text-heading-lg` |
| display | 30px | 1.05 | -1.2px | `--text-display` |
| display-lg | 46px | 1 | -1.932px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| buttons | 8px |
| navigation | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 24px |
| elementGap | 10px |

## Components

### Ghost Primary Button

**Role:** Call to action button for primary user actions, designed to integrate subtly into the layout.

Text color Absolute Zero (#000000). Transparent background. Border color Absolute Zero (#000000). Border radius 8px. Padding 10px vertical, 36px horizontal. Uses 'Stykka Blue' for link action per original data, but rendered `transparent`/`#000000` from page. Needs explicit definition for functional link-blue to be present on actual usage.

### Information Card

**Role:** Container for showcasing features, testimonials, or short content blocks.

Background color Ash Gray (#f6f6f6). No box shadow. Border radius 16px. Padding 33px vertical, 24px horizontal. These cards have no explicit border, creating a floating appearance.

### Navigation Link

**Role:** Standard navigation item in header and footer.

Text color Absolute Zero (#000000). Interactive border bottom color Absolute Zero (#000000) for hover/active states at 1px thickness. Default line height 1.20.

## Do's and Don'ts

### Do

- Use Canvas White (#ffffff) as the primary background for all page sections unless an image or specific brand block dictates otherwise.
- Apply Absolute Zero (#000000) for all primary text content and main headings to maintain stark contrast and strong legibility.
- Ensure large headlines, particularly in hero sections, use Azeret Mono 400 with a wide letter spacing of -0.010em and a line height of 1.0.
- Group related UI elements with an element gap of 10px to maintain a slightly compact but clear arrangement.
- Implement a border-radius of 16px for all card-like containers, and 8px for buttons and interactive navigation elements.
- Use Ash Gray (#f6f6f6) sparingly for subtle background distinctions or low-prominence UI elements, such as card backgrounds that are not meant to pop.
- For ghost buttons, define text and border in Absolute Zero (#000000) with a transparent background, ensuring a subtle call to action.

### Don't

- Avoid using highly saturated colors for backgrounds or large UI areas; maintain a largely monochromatic base palette.
- Do not introduce strong box shadows or heavy elevation effects; the design relies on subtle background shifts and natural light.
- Do not deviate from the specified negative letter spacing for large type; it is a signature element of the typographic style.
- Do not use generic, unstyled links. All links should explicitly reference Absolute Zero for text, with optional border-bottom interaction states.
- Avoid arbitrary custom padding values for cards and buttons; stick to the defined 33px vertical / 24px horizontal for cards and 10px vertical / 36px horizontal for buttons.
- Do not introduce decorative gradients or complex overlays; keep surfaces and backgrounds clean and simple.
- Do not use system sans-serif for headlines or main body text; it is reserved for captions and minor functional text.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Base page background, predominant clean surface |
| 2 | Ash Gray | #f6f6f6 | Subtle secondary background for content cards and distinct sections, creating soft separation. |
| 3 | Absolute Zero (Hero Overlay) | #000000 | Used as a full-bleed background for certain hero or header sections, creating a strong visual anchor and contrast for white text. |

## Imagery

The visual language is dominated by high-quality photography of wooden architectural spaces and kitchen interiors. Images are typically full-bleed or large blocks, featuring natural light and honest materiality. Product photography uses tight crops focusing on the crafted details of the kitchen elements. There's an absence of abstract graphics or illustrations, emphasizing real-world context and tangible quality. Icons are minimal, subtle, and monochromatic, primarily used for navigation or small functional elements. The density is image-heavy, serving as primary content rather than mere decoration.

## Layout

The page uses a maximum content width, centered horizontally, alternating with full-bleed hero sections. The initial hero features a full-width background image with strong visual depth, overlaid with centered, large-scale typography. Subsequent sections follow a consistent vertical rhythm with clear spacing between content blocks. Content is primarily arranged in multi-column grids or alternating text-and-image layouts, often with text on the left and visuals on the right, or a 4-column card grid. The navigation is a sticky top bar with minimal links on the far left and right. Density is balanced, with generous white space around elements and sections.

## Similar Brands

- **Frama** — Shares a monochromatic palette, natural material focus in photography, and a clean, architectural aesthetic with minimal UI ornaments.
- **B&B Italia** — Employs high-quality product photography, understated typography, and a structured layout to emphasize craftsmanship and design purity.
- **Muuto** — Features a similar light-themed, Scandinavian design aesthetic with an emphasis on natural textures, clear typography, and spacious layouts.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-canvas-white: #ffffff;
  --color-ash-gray: #f6f6f6;
  --color-medium-gray: #2e2e20;
  --color-light-gray: #c9c9c9;
  --color-translucent-gray-lite: #00000008;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-azeret-mono: 'Azeret Mono', monospace;
  --font-sans-serif: 'sans-serif', system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 0.23px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.294px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: -0.18px;
  --text-heading: 22px;
  --leading-heading: 1.25;
  --tracking-heading: -0.803px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.888px;
  --text-display: 30px;
  --leading-display: 1.05;
  --tracking-display: -1.2px;
  --text-display-lg: 46px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.932px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-33: 33px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-70: 70px;
  --spacing-100: 100px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
  --radius-navigation: 8px;
  --surface-canvas-white: #ffffff;
  --surface-ash-gray: #f6f6f6;
  --surface-absolute-zero-hero-overlay: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-canvas-white: #ffffff;
  --color-ash-gray: #f6f6f6;
  --color-medium-gray: #2e2e20;
  --color-light-gray: #c9c9c9;
  --color-translucent-gray-lite: #00000008;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-azeret-mono: 'Azeret Mono', monospace;
  --font-sans-serif: 'sans-serif', system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 0.23px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.294px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: -0.18px;
  --text-heading: 22px;
  --leading-heading: 1.25;
  --tracking-heading: -0.803px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.888px;
  --text-display: 30px;
  --leading-display: 1.05;
  --tracking-display: -1.2px;
  --text-display-lg: 46px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.932px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-33: 33px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-70: 70px;
  --spacing-100: 100px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
  --radius-navigation: 8px;
  --surface-canvas-white: #ffffff;
  --surface-ash-gray: #f6f6f6;
  --surface-absolute-zero-hero-overlay: #000000;
}
```
