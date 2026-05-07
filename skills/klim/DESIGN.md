---
version: alpha
name: "Klim"
description: "Klim Type Foundry utilizes a 'digital minimalist' approach, establishing authority through stark contrasts and precise typography on an almost entirely dark canvas. A restrained palette of bold, single-hue accents punctuates the monochromatic UI, guiding attention without visual clutter. Components prioritize clarity and function, often appearing as subtle outlines or ghost elements, reinforcing the typography's central role. The overall impression is one of meticulous craft and intentional restraint, where every visual element serves a purpose."
theme: "dark"
industry: "design"
source_url: "https://klim.co.nz"
refero_style_id: "0dad8530-9422-4d9e-8622-1f50ee4bc702"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520054937-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520054937-thumb.jpg"
extracted_at: "2026-04-30T03:34:35.962Z"
---

# Klim — Style Reference

> Type specimen on black velvet

**Theme:** dark

**Industry:** design

Klim Type Foundry utilizes a 'digital minimalist' approach, establishing authority through stark contrasts and precise typography on an almost entirely dark canvas. A restrained palette of bold, single-hue accents punctuates the monochromatic UI, guiding attention without visual clutter. Components prioritize clarity and function, often appearing as subtle outlines or ghost elements, reinforcing the typography's central role. The overall impression is one of meticulous craft and intentional restraint, where every visual element serves a purpose.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Primary page background, text on light surfaces, filled button backgrounds. Creates a strong, confident base for content |
| Ghost Gray | #555555 | `--color-ghost-gray` | Subtle border colors for outlined elements and cards, secondary body text on dark backgrounds. Softer contrast for less prominent information |
| Input Dark | #1c1c1c | `--color-input-dark` | Background for input fields and other utility UI elements. Darker than base background to suggest interactivity |
| Text White | #ffffff | `--color-text-white` | Primary text color, outlined button borders, element borders on dark backgrounds. Ensures high readability against dark surfaces |
| Ocean Blue | #24a7f2 | `--color-ocean-blue` | Highlight accents for interactive elements and call-to-action backgrounds, used sparingly to draw focus |
| Forest Green | #3c585f | `--color-forest-green` | Alternative highlight accent for interactive elements and call-to-action backgrounds. Provides variety while maintaining saturation |
| Fire Orange | #d33c03 | `--color-fire-orange` | Accent color for interactive elements, links, and highlighted content. A vibrant, warm pop against the dark theme |
| Vivid Red | #e90702 | `--color-vivid-red` | Link color for specific emphasized text elements |
| Neon Teal | #93ffe6 | `--color-neon-teal` | Link color for specific emphasized text elements |
| Muted Peach | #ffe6d9 | `--color-muted-peach` | Link color for specific emphasized text elements |
| Lemon Yellow | #ffff79 | `--color-lemon-yellow` | Link color for specific emphasized text elements |

## Tokens — Typography

### SOEHNE

- **Token:** `--font-soehne`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 16px, 36px
- **Line heights:** 0.98, 1.19, 1.20, 1.33, 1.50
- **Letter spacing:** normal
- **OpenType features:** "ordn", "tnum"
- **Role:** Primary typeface for all UI elements, body text, and some headings. Its clean, geometric form provides a contemporary feel and excellent readability across various weights and sizes. Weight 700 is reserved for strong emphasis and certain navigational elements, while 400 is the workhorse.

### SOEHNE_IKON

- **Token:** `--font-soehne-ikon`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20, 1.33, 1.50
- **Letter spacing:** normal
- **OpenType features:** "tnum", "calt"
- **Role:** Specialized variant of Soehne, likely for icon-like characters or specific display elements. Used minimally, maintaining character of the main typeface while allowing for specific glyphs.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-69 | 69px | `--spacing-69` |
| spacing-137 | 137px | `--spacing-137` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| links | 2px |
| images | 2px |
| inputs | 2px |
| buttons | 2px |
| navItems | 2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 69px |
| cardPadding | 0px |
| elementGap | 10px |

## Components

### Filled Primary Button

**Role:** Call-to-action button for initiating primary actions.

Background: Pitch Black (#000000), Text: Text White (#ffffff), Border Radius: 2px, Padding: 0px 8px.

### Outlined Secondary Button

**Role:** Secondary action button, providing a less prominent interactive element.

Background: transparent (rgba(0,0,0,0)), Text: Text White (#ffffff), Border: 1px solid Ghost Gray (#555555), Border Radius: 2px, Padding: 0px 8px.

### Navigation Link Button

**Role:** Interactive text link within navigation areas.

Text: Text White (#ffffff), Padding: 0px 8px, Border Radius: 2px.

### Text Input Field

**Role:** Form input for user text entry.

Background: Input Dark (#1c1c1c), Text: Text White (#ffffff), Border: 1px solid Input Dark (#1c1c1c), Border Radius: 2px, Padding: 0px 8px.

### Transparent Card

**Role:** Content container that blends into the background, often for lists of items.

Background: transparent (rgba(0,0,0,0)), Border: none, Border Radius: 0px, Padding: 0px across all sides.

## Do's and Don'ts

### Do

- Prioritize high contrast between text and background, especially for readability on dark surfaces.
- Use Pitch Black (#000000) as the dominant background color for most sections to maintain the dark theme.
- Apply Text White (#ffffff) for all primary text and important UI borders against dark backgrounds.
- Reserve vibrant accent colors (Ocean Blue, Forest Green, Fire Orange) for intentional highlighting of interactive elements or key information, using them sparingly.
- Apply a consistent 2px border radius to all interactive elements (buttons, inputs) for subtle softening without losing sharpness.
- Maintain a compact element gap of 10px where precision and visual density are desired.
- Use SOEHNE, weight 700, for section headings and primary navigation items to establish strong hierarchy.

### Don't

- Avoid introducing additional saturated colors beyond the defined accent palette to prevent visual chaos.
- Do not use soft, low-contrast text on dark backgrounds; ensure sufficient contrast with Text White (#ffffff).
- Do not vary border radius values across interactive elements; strictly adhere to 2px for all button-like components.
- Avoid large, soft shadows or heavy elevation treatments; the design relies on flat surfaces and clean lines.
- Do not use generic system fonts; always specify SOEHNE for all text elements.
- Refrain from excessive internal padding on cards or list items, maintaining a compact aesthetic with 0px padding on card surfaces.
- Do not mix line heights arbitrarily; follow the defined line-height ratios for SOEHNE to preserve typographic rhythm.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Pitch Black Canvas | #000000 | Primary page background, foundation for all content. |
| 1 | Dark Panel | #101c19 | Used for content sections or background variations on the main canvas. |
| 2 | Input Dark Surface | #1c1c1c | Background for interactive input fields and similar components, indicating focus. |

## Imagery

The imagery on Klim Type Foundry is highly varied and serves a decorative, artistic purpose rather than being purely functional or explanatory. It features abstract product renders (like the orange crate), highly stylized and conceptual photography (like the bacon flag), and direct product showcases (typography demonstrations). The treatment is typically full-bleed or large-format, often against a black background, allowing images to dominate the visual space. Photography is often high-key or dramatically lit, emphasizing texture and form. Illustrations are absent; the focus is on photographic or rendered realism. Icons, if present, appear to be minimal and outline-based, serving as functional UI elements rather than decorative art. Imagery is dense, often occupying entire screen real estate and driving page sections.

## Layout

The page employs a full-bleed and contained layout model, alternating between completely full-width visual sections and content blocks constrained by a maximum width. Hero sections often feature full-viewport imagery or stark, text-only displays on Pitch Black. Section rhythm is driven by alternating dark and slightly lighter neutral backgrounds, creating distinct visual bands for content grouping. Content arrangement varies, from centered stacks of text on feature sections to grid-like displays for font families. There's a strong emphasis on consistent vertical padding between major sections. Navigation is a minimal top bar, with a persistent header that appears fixed, featuring the brand logo on the left and a hamburger menu on the right.

## Similar Brands

- **Fonts In Use** — Heavy reliance on black/dark backgrounds as canvas, with typography as the primary visual element.
- **Future Fonts** — Showcases typefaces directly on dark backgrounds, using vibrant accents to highlight examples and actions.
- **Velocity Partners** — Monochrome, high-contrast aesthetic with minimal elements and careful typographic hierarchy.
- **Braid** — Strong dark mode aesthetic with crisp typography and subtle use of accent colors for interaction.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-ghost-gray: #555555;
  --color-input-dark: #1c1c1c;
  --color-text-white: #ffffff;
  --color-ocean-blue: #24a7f2;
  --color-forest-green: #3c585f;
  --color-fire-orange: #d33c03;
  --color-vivid-red: #e90702;
  --color-neon-teal: #93ffe6;
  --color-muted-peach: #ffe6d9;
  --color-lemon-yellow: #ffff79;
  --font-soehne: 'SOEHNE', Inter;
  --font-soehne-ikon: 'SOEHNE_IKON', Inter;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-69: 69px;
  --spacing-137: 137px;
  --radius-cards: 0px;
  --radius-links: 2px;
  --radius-images: 2px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;
  --radius-navitems: 2px;
  --surface-pitch-black-canvas: #000000;
  --surface-dark-panel: #101c19;
  --surface-input-dark-surface: #1c1c1c;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-ghost-gray: #555555;
  --color-input-dark: #1c1c1c;
  --color-text-white: #ffffff;
  --color-ocean-blue: #24a7f2;
  --color-forest-green: #3c585f;
  --color-fire-orange: #d33c03;
  --color-vivid-red: #e90702;
  --color-neon-teal: #93ffe6;
  --color-muted-peach: #ffe6d9;
  --color-lemon-yellow: #ffff79;
  --font-soehne: 'SOEHNE', Inter;
  --font-soehne-ikon: 'SOEHNE_IKON', Inter;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-69: 69px;
  --spacing-137: 137px;
  --radius-cards: 0px;
  --radius-links: 2px;
  --radius-images: 2px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;
  --radius-navitems: 2px;
  --surface-pitch-black-canvas: #000000;
  --surface-dark-panel: #101c19;
  --surface-input-dark-surface: #1c1c1c;
}
```
