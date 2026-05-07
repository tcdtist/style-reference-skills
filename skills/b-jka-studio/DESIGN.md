---
version: alpha
name: "Bōjka Studio"
description: "Bōjka Studio uses a high-contrast, energetic visual language: a blindingly bright neon green dominates as the primary canvas, providing an unmissable backdrop. This vividness is grounded by uncompromisingly black, blocky typography that commands attention. Essential UI elements and navigation are stripped back to stark black and white, allowing the potent color-type dynamic to define the brand. The overall impression is direct, confident, and visually distinct."
theme: "light"
industry: "agency"
source_url: "https://bojka.studio"
refero_style_id: "286b6ba8-a45d-48e0-b556-ff6aeac68058"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517198916-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517198916-thumb.jpg"
extracted_at: "2026-04-30T02:46:57.910Z"
---

# Bōjka Studio — Style Reference

> Neon Green Canvas, Bold Black Type

**Theme:** light

**Industry:** agency

Bōjka Studio uses a high-contrast, energetic visual language: a blindingly bright neon green dominates as the primary canvas, providing an unmissable backdrop. This vividness is grounded by uncompromisingly black, blocky typography that commands attention. Essential UI elements and navigation are stripped back to stark black and white, allowing the potent color-type dynamic to define the brand. The overall impression is direct, confident, and visually distinct.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Neon Green | #0af500 | `--color-neon-green` | Primary page background, hero section accent — establishes the brand's bold and energetic presence |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, navigation links, card backgrounds — provides strong contrast against the Neon Green and white |
| Dark Charcoal | #282828 | `--color-dark-charcoal` | Secondary text, subtle borders, supporting elements — a slightly softer black for visual relief while maintaining high contrast |
| Canvas White | #ffffff | `--color-canvas-white` | Secondary page backgrounds, navigation backgrounds, occasional card backgrounds — stark contrast to Ink Black, provides breathing room |
| Sunset Orange | #ff4600 | `--color-sunset-orange` | Highlight text, decorative accents — a flash of warm color that draws attention without diluting the primary green/black dynamic |

## Tokens — Typography

### custom_15364

- **Token:** `--font-custom-15364`
- **Substitute:** Archivo Black
- **Weights:** 400
- **Sizes:** 22px, 44px, 157px
- **Line heights:** 1.00, 1.09, 2.73
- **Letter spacing:** -0.0080em at 157px, 0.0090em at 22px
- **Role:** All headings and prominent display text. The singular heavy weight and tight tracking create a strong, unyielding presence.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Body copy and standard informational text. A system sans-serif for legibility in smaller contexts where custom_15364 would be too heavy.

### Roboto

- **Token:** `--font-roboto`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.44
- **Letter spacing:** normal
- **Role:** Secondary body text and detailed descriptions. Provides a slightly larger size and more generous line height than -apple-system for content blocks.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 16px | 1 | 0px | `--text-body-sm` |
| body | 18px | 1.44 | 0px | `--text-body` |
| subheading | 22px | 2.73 | 0.2px | `--text-subheading` |
| heading | 44px | 1.09 | 0px | `--text-heading` |
| display | 157px | 1 | -12.5px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-16 | 16px | `--spacing-16` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 68px |
| buttons | 68px |
| default | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 0px |
| elementGap | 16px |

## Components

### Hero Headline Block

**Role:** Primary attention-grabber on the landing page.

Features 'custom_15364' font, 157px size, weight 400, Ink Black text on a Neon Green background. Letter spacing is a tight -0.008em.

### Navigation Link

**Role:** Interactive navigation elements in footers and headers.

Uses 'custom_15364' font, 22px size, weight 400, Ink Black text on a Canvas White background. Letter spacing is 0.009em.

### Dark Card

**Role:** Container for content sections, often displaying project previews.

Features an Ink Black background with a 68px border-radius. Padding is 0px internally.

### White Card

**Role:** Alternative content container, offering visual break.

Features a Canvas White background with a 0px border-radius. Padding is 0px internally.

### Body Text Block

**Role:** Standard textual content for descriptions and paragraphs.

Uses 'Roboto' font, 18px size, weight 400. Text color is Dark Charcoal, with normal letter spacing and a line height of 1.44.

## Do's and Don'ts

### Do

- Prioritize high contrast: Ink Black on Neon Green or Canvas White for all primary content.
- Use 'custom_15364' weight 400 for all headlines and prominent text to maintain visual impact and brand voice.
- Maintain a border-radius of 68px for large interactive elements and cards to reinforce the brand's soft, approachable edge.
- Employ Neon Green (#0af500) as a full-bleed background for key sections or the entire page to command attention.
- Keep internal component padding at 0px where possible to allow content to fill its container and maximize visual density.
- Ensure navigation links use Canvas White backgrounds with Ink Black text, differentiating them from the main content sections.

### Don't

- Do not introduce subtle accent colors; stick to the core palette of Neon Green, Ink Black, Dark Charcoal, Canvas White, and Sunset Orange.
- Avoid using multiple font weights within a single text block of 'custom_15364'; it is designed for a singular, bold impact.
- Do not introduce square-edged cards or elements; border radii are intentionally large for softness.
- Avoid gradients or complex shadows; the design relies on flat, high-contrast color blocks.
- Do not use Sunset Orange (#ff4600) as a primary background or action color; it's an accent for highlights only.
- Refrain from altering the prescribed letter-spacing for 'custom_15364'; it's integral to its distinct visual impact.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Page Canvas | #0af500 | Dominant background for interactive sections and hero areas, defining the primary brand color. |
| 2 | Content Surface (White) | #ffffff | Secondary background for navigation and some content cards, providing a stark neutral contrast. |
| 3 | Content Surface (Black) | #000000 | Background for feature cards and elevated content blocks, creating depth and a strong visual anchor. |

## Imagery

The site's visual language for imagery is based on tightly cropped, high-resolution product photography featuring digital devices. These images are contained and serve an explanatory or showcase role rather than decorative. They appear without complex masks or overlays, maintaining sharp rectangular edges. There is a notable absence of illustrations, abstract graphics, or lifestyle photography, placing emphasis squarely on clean product presentation.

## Layout

The layout is primarily full-bleed, especially for the hero section which uses a vibrant Neon Green background spanning the entire viewport. Content is arranged in prominent, often centered blocks of text and headings, with a clear vertical rhythm. Below the hero, sections transition to a split layout where imagery appears in a contained block. Navigation is present as a minimalist, horizontally aligned list at the bottom of the viewport, staying consistent with the highly contrasted and direct visual approach.

## Similar Brands

- **Huge Inc.** — Uses bright, bold primary colors (often green or yellow) with stark typography and minimal UI elements.
- **Anagram Studio** — Features high-impact, full-bleed primary colors, and very large, confident typography as a core visual identifier.
- **BASIC/DEPT®** — Employs strong typographic statements, high contrast, and a focus on essential elements, often with monochrome or limited color schemes punctuated by a single vibrant accent.
- **Sagmeister & Walsh** — Known for highly experimental and bold use of color, typography, and minimalist layouts to create distinctive brand identities.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-neon-green: #0af500;
  --color-ink-black: #000000;
  --color-dark-charcoal: #282828;
  --color-canvas-white: #ffffff;
  --color-sunset-orange: #ff4600;
  --font-custom-15364: 'custom_15364', Archivo Black;
  --font-apple-system: '-apple-system', Inter;
  --font-roboto: 'Roboto', Inter;
  --text-body-sm: 16px;
  --leading-body-sm: 1;
  --tracking-body-sm: 0px;
  --text-body: 18px;
  --leading-body: 1.44;
  --tracking-body: 0px;
  --text-subheading: 22px;
  --leading-subheading: 2.73;
  --tracking-subheading: 0.2px;
  --text-heading: 44px;
  --leading-heading: 1.09;
  --tracking-heading: 0px;
  --text-display: 157px;
  --leading-display: 1;
  --tracking-display: -12.5px;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --radius-cards: 68px;
  --radius-buttons: 68px;
  --radius-default: 20px;
  --surface-page-canvas: #0af500;
  --surface-content-surface-white: #ffffff;
  --surface-content-surface-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-neon-green: #0af500;
  --color-ink-black: #000000;
  --color-dark-charcoal: #282828;
  --color-canvas-white: #ffffff;
  --color-sunset-orange: #ff4600;
  --font-custom-15364: 'custom_15364', Archivo Black;
  --font-apple-system: '-apple-system', Inter;
  --font-roboto: 'Roboto', Inter;
  --text-body-sm: 16px;
  --leading-body-sm: 1;
  --tracking-body-sm: 0px;
  --text-body: 18px;
  --leading-body: 1.44;
  --tracking-body: 0px;
  --text-subheading: 22px;
  --leading-subheading: 2.73;
  --tracking-subheading: 0.2px;
  --text-heading: 44px;
  --leading-heading: 1.09;
  --tracking-heading: 0px;
  --text-display: 157px;
  --leading-display: 1;
  --tracking-display: -12.5px;
  --spacing-0: 0px;
  --spacing-16: 16px;
  --radius-cards: 68px;
  --radius-buttons: 68px;
  --radius-default: 20px;
  --surface-page-canvas: #0af500;
  --surface-content-surface-white: #ffffff;
  --surface-content-surface-black: #000000;
}
```
