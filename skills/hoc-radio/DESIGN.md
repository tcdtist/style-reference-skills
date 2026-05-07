---
version: alpha
name: "HOC Radio"
description: "HOC Radio employs a high-contrast dark mode aesthetic, presenting a stark, functional interface ideal for a digital radio platform. The design prioritizes clear information hierarchy through a grid-based layout and precise typographic contrasts. The entire system uses achromatic colors, with pure white text and borders against a jet black background, creating an atmosphere of focus and quiet intensity. Visual elements are minimal, relying on strong lines and text to convey information and structure."
theme: "dark"
industry: "media"
source_url: "https://hocradio.eu"
refero_style_id: "e03e957e-eb5b-45d5-8944-2650dafab3c9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519136819-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519136819-thumb.jpg"
extracted_at: "2026-04-30T03:19:27.819Z"
---

# HOC Radio — Style Reference

> High-contrast digital darkroom

**Theme:** dark

**Industry:** media

HOC Radio employs a high-contrast dark mode aesthetic, presenting a stark, functional interface ideal for a digital radio platform. The design prioritizes clear information hierarchy through a grid-based layout and precise typographic contrasts. The entire system uses achromatic colors, with pure white text and borders against a jet black background, creating an atmosphere of focus and quiet intensity. Visual elements are minimal, relying on strong lines and text to convey information and structure.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Eclipse | #000000 | `--color-midnight-eclipse` | Page backgrounds, surface fills, component backdrops — provides a deep, immersive canvas |
| Lunar White | #ffffff | `--color-lunar-white` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |

## Tokens — Typography

### Roobert

- **Token:** `--font-roobert`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 12px, 16px, 20px, 24px
- **Line heights:** 0.80, 1.20, 1.40, 1.50
- **Role:** The primary typeface for all textual content, from headings to body and functional elements. Its clear, geometric forms contribute to the system's precise and modern feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| badge | 12px | 1.5 | 0px | `--text-badge` |
| body | 16px | 1.5 | 0px | `--text-body` |
| heading | 20px | 1.2 | 0px | `--text-heading` |
| display | 24px | 0.8 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-265 | 265px | `--spacing-265` |
| spacing-279 | 279px | `--spacing-279` |
| spacing-289 | 289px | `--spacing-289` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |
| inputs | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 8px |
| elementGap | 16px |

## Components

### Ghost Button

**Role:** Interactive elements, navigation links, and subtle calls to action.

Transparent background, Lunar White text, and minimal 1px padding. No border unless hovered or focused.

### Item Card

**Role:** Displays individual content entries in a grid, like radio shows or artists.

Jet black background, defined by 1px solid Lunar White borders on the right and bottom. Text in Lunar White. Internal padding for text: 8px bottom and 16px left/right.

### Text Input (Search)

**Role:** Search fields.

Transparent background, Lunar White text, 1px solid Lunar White border with 4px radius. Left padding 80px for icon placement, right padding 16px.

### Content Tag

**Role:** Labels for content categories or keywords.

Transparent background, Lunar White text, no border. Appears as a line of text, not a distinct framed element. Uses 12px Roobert.

### Header Navigation Item

**Role:** Top-level navigation.

Lunar White text, 20px Roobert with 1.2 line height. Functionally a Ghost Button, but with distinct header typography and a 5px top, 10px right/left padding and a 1px bottom border.

### Info Panel

**Role:** Displays detailed information blocks.

Jet black background with a 1px solid Lunar White border on the left. All text is Lunar White. Uses 16px Roobert for body copy.

## Do's and Don'ts

### Do

- Maintain a strict achromatic palette: Lunar White (#ffffff) for all foreground elements and Midnight Eclipse (#000000) for all backgrounds.
- Use 1px Lunar White borders as primary visual separators for information and grid elements.
- Apply the Roobert typeface consistently across all text elements, leveraging its provided weights for hierarchy.
- Structure content primarily through a symmetrical grid with clearly defined 1px Lunar White divisional lines.
- Utilize 8px vertical spacing between closely related text elements and 16px for larger component gaps.
- Keep border-radius at 0px for most elements, reserving 4px solely for specific input fields to subtly differentiate them.

### Don't

- Introduce any saturated colors unless specifically for semantic states (e.g., success, error) which are not currently defined.
- Use shadows or any form of elevation (unless for focus states) — surfaces are flat and defined solely by borders and typography.
- Break the grid structure with irregular spacing or misaligned elements; precision is key to this system's aesthetic.
- Apply varied line spacing that deviates from the Roobert font's predefined lineHeight values for consistency.
- Use decorative imagery or complex illustrations; the system is text and line-art dominant.
- Increase component padding beyond 8px for internal content, aiming for a contained and dense information display.

## Imagery

The visual system is entirely devoid of photography or complex illustrations. It relies on minimalist line icons, simple geometric shapes, and text as its primary visual language. Icons are outlined in Lunar White, strictly functional rather than decorative, and appear in contexts like expand/collapse toggles and media playback controls. Visual density is high, with imagery occupying virtually no space, yielding a UI focused purely on content and interaction.

## Layout

The page model is full-bleed, extending edge-to-edge for its dark canvas. The hero presents a minimal header with navigation links. The primary content area is a rigid, symmetrical grid composed of equally sized content blocks. Each block is delineated by fine 1px Lunar White lines, forming a tight, uniform matrix. The information panel on the right acts as a persistent sidebar, also defined by a single vertical 1px line. Navigation is a top bar, with elements separated by vertical lines. The density is very high, characterized by compact information blocks and minimal breathing room between content sections.

## Similar Brands

- **SoundCloud** — Similar focus on audio content organized in a grid, and a generally minimalist design approach.
- **Are.na** — Grid-based content organization and strong emphasis on text-heavy information display, using borders as primary separators.
- **Resident Advisor** — Dark mode UI and focus on electronic music culture, often featuring minimalist design with strict typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-eclipse: #000000;
  --color-lunar-white: #ffffff;
  --font-roobert: 'Roobert', Inter;
  --text-badge: 12px;
  --leading-badge: 1.5;
  --tracking-badge: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading: 20px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-display: 24px;
  --leading-display: 0.8;
  --tracking-display: 0px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-48: 48px;
  --spacing-265: 265px;
  --spacing-279: 279px;
  --spacing-289: 289px;
  --radius-none: 0px;
  --radius-inputs: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-eclipse: #000000;
  --color-lunar-white: #ffffff;
  --font-roobert: 'Roobert', Inter;
  --text-badge: 12px;
  --leading-badge: 1.5;
  --tracking-badge: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading: 20px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-display: 24px;
  --leading-display: 0.8;
  --tracking-display: 0px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-48: 48px;
  --spacing-265: 265px;
  --spacing-279: 279px;
  --spacing-289: 289px;
  --radius-none: 0px;
  --radius-inputs: 4px;
}
```
