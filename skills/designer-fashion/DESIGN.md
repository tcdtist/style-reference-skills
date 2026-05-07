---
version: alpha
name: "Designer Fashion"
description: "Selfridges presents a classic e-commerce aesthetic with a foundation of stark white surfaces and unapologetic black typography. A single, vibrant yellow accent color acts as a high-contrast call to action, drawing immediate attention. The design prioritizes clear information hierarchy through careful use of neutral shades for borders and secondary text, paired with crisp, unrounded edges across most interactive elements to convey directness."
theme: "light"
industry: "ecommerce"
source_url: "https://www.selfridges.com"
refero_style_id: "e9791a47-474b-4bd6-8957-b16fb4728d4a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509983426-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509983426-thumb.jpg"
extracted_at: "2026-04-30T00:47:02.997Z"
---

# Designer Fashion — Style Reference

> High-contrast retail catalog.

**Theme:** light

**Industry:** ecommerce

Selfridges presents a classic e-commerce aesthetic with a foundation of stark white surfaces and unapologetic black typography. A single, vibrant yellow accent color acts as a high-contrast call to action, drawing immediate attention. The design prioritizes clear information hierarchy through careful use of neutral shades for borders and secondary text, paired with crisp, unrounded edges across most interactive elements to convey directness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Selfridges Yellow | #ffe255 | `--color-selfridges-yellow` | Primary action backgrounds, high-attention elements — a bright, unmissable signal |
| Raisin Black | #212121 | `--color-raisin-black` | Primary text, prominent borders, active states — the dominant dark tone for content and structure |
| True Black | #000000 | `--color-true-black` | Strongest text emphasis, input borders, button text, icons — used for maximum contrast and definition |
| Canvas White | #ffffff | `--color-canvas-white` | Main page background, card surfaces, form inputs — the foundational light surface |
| Whisper Gray | #f6f6f6 | `--color-whisper-gray` | Secondary section backgrounds, subtle surface separation — provides a soft break from pure white |
| Porcelain Gray | #eaeaea | `--color-porcelain-gray` | Subtle button backgrounds, navigation borders — a light, almost imperceptible boundary |
| Input Border Gray | #767676 | `--color-input-border-gray` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Stone Gray | #545454 | `--color-stone-gray` | Navigation text, less prominent borders — a mid-tone for secondary navigational text |
| Light Pearl | #efefef | `--color-light-pearl` | Secondary button backgrounds — a slightly darker off-white for visual distinction |
| Muted Silver | #b7b7b7 | `--color-muted-silver` | Muted button text, decorative body text — minimal visual weight |

## Tokens — Typography

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Body copy, button labels, and all general interface text. Its ubiquity reinforces a no-frills, direct communication style.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| other | 4px |
| inputs | 0px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Selfridges Primary Button

**Role:** Call to action

A striking yellow filled button for primary calls to action. Uses Selfridges Yellow (#ffe255) for background and border, with True Black (#000000) text. Features 12px vertical and 48px horizontal padding, with zero border radius to maintain a sharp, deliberate edge.

### Navigation Link Button

**Role:** Navigation button

A ghost button for navigation and secondary actions. No background or border, using True Black (#000000) for text. Features 8px vertical and 4px horizontal padding, with zero border radius.

### Ghost Secondary Button

**Role:** Secondary action

A minimally styled button for tertiary actions. Light Pearl (#efefef) background with True Black (#000000) text, no border. Features 1px vertical and 6px horizontal padding, zero border radius.

### Shop Service Button

**Role:** Shopping service action

A light gray background button often used for shopping services. Porcelain Gray (#eaeaea) background and True Black (#000000) text. Features 1px vertical and 6px horizontal padding. A distinctive 100% border radius gives it a pill-like shape, often differentiating it from other buttons.

### Default Input Field

**Role:** User input

Standard input field with Canvas White (#ffffff) background, True Black (#000000) text, and a border in Input Border Gray (#767676). Padding is 1px vertical and 2px horizontal, with zero border radius.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) as the dominant background color for content areas.
- Use Selfridges Yellow (#ffe255) exclusively for primary action backgrounds and high-attention graphical elements, never for text or borders unless it's for an active button state.
- Ensure all primary text uses Raisin Black (#212121) for maximum readability and contrast.
- Apply a 0px border-radius to all buttons and input fields to maintain a sharp, angular aesthetic, reserving 4px for specific non-interactive elements.
- Maintain generous section gaps of 24px to create distinct content blocks and avoid visual clutter.
- Use Porcelain Gray (#eaeaea) or Light Pearl (#efefef) for subtle button backgrounds only, not for large surface areas.
- Utilize Input Border Gray (#767676) for all input field borders and secondary text where less emphasis is needed.

### Don't

- Do not introduce additional chromatic accent colors beyond Selfridges Yellow (#ffe255).
- Avoid softened edges with large border radii; the design relies on square and rectangular forms.
- Do not use dark backgrounds for main content sections; the system is built on a light theme with minimal dark elements.
- Refrain from using Raisin Black (#212121) or True Black (#000000) as background colors for large sections or cards.
- Do not use subtle gradients or shadows; the aesthetic is flat and direct and relies on color and line for definition.
- Avoid compacting elements with less than 8px of element gap; space is used to ensure clarity.
- Do not override the default Arial font; consistency across all text is key.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #ffffff | Primary page background, main content area. |
| 1 | Subtle Canvas | #f6f6f6 | Secondary background sections, often for footers or larger content blocks. |
| 2 | Interactive Surface | #efefef | Background for secondary buttons or interactive elements seeking slight elevation. |
| 3 | Accent Surface | #ffe255 | High-visibility backgrounds for primary calls to action. |

## Imagery

The site uses a mix of high-fashion photography and styled product shots. Photography is typically full-bleed or large-scale, often featuring models in editorial poses, with a clean white or light background when showing products directly. Images are untrimmed, using sharp edges to integrate seamlessly into content blocks. There is a strong emphasis on showcasing products and lifestyle, with imagery playing a key role in visual storytelling and product presentation.

## Layout

The site employs a primarily contained fixed-width layout within a maximum width section, centered on the page. The hero features a large, often full-width photograph with overlaid text and a clear call-to-action on the left. Content sections flow vertically with a consistent 24px section gap, transitioning between full-width imagery and more structured grid-based content like product carousels or feature blocks. Navigation is a persistent top bar, with elements arranged in a classic retail pattern: logo top-left, search bar central, and utility icons/services top-right. Grid usage includes multi-column layouts for product listings and feature showcases.

## Similar Brands

- **Net-a-Porter** — High-fashion e-commerce, dominant white space, strong photography, and minimal UI accents.
- **Farfetch** — Focus on product imagery, clean borders, and a similar approach to typographic hierarchy in a luxury retail context.
- **MR PORTER** — Classic men's fashion e-commerce with a similar high-contrast text on white background and restrained use of color.
- **SSENSE** — Minimalist layout, strong dependence on editorial photography, and high-contrast black and white palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-selfridges-yellow: #ffe255;
  --color-raisin-black: #212121;
  --color-true-black: #000000;
  --color-canvas-white: #ffffff;
  --color-whisper-gray: #f6f6f6;
  --color-porcelain-gray: #eaeaea;
  --color-input-border-gray: #767676;
  --color-stone-gray: #545454;
  --color-light-pearl: #efefef;
  --color-muted-silver: #b7b7b7;
  --font-arial: 'Arial', Arial, sans-serif;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --radius-cards: 0px;
  --radius-other: 4px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --surface-canvas: #ffffff;
  --surface-subtle-canvas: #f6f6f6;
  --surface-interactive-surface: #efefef;
  --surface-accent-surface: #ffe255;
}
```

### Tailwind v4

```css
@theme {
  --color-selfridges-yellow: #ffe255;
  --color-raisin-black: #212121;
  --color-true-black: #000000;
  --color-canvas-white: #ffffff;
  --color-whisper-gray: #f6f6f6;
  --color-porcelain-gray: #eaeaea;
  --color-input-border-gray: #767676;
  --color-stone-gray: #545454;
  --color-light-pearl: #efefef;
  --color-muted-silver: #b7b7b7;
  --font-arial: 'Arial', Arial, sans-serif;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --radius-cards: 0px;
  --radius-other: 4px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --surface-canvas: #ffffff;
  --surface-subtle-canvas: #f6f6f6;
  --surface-interactive-surface: #efefef;
  --surface-accent-surface: #ffe255;
}
```
