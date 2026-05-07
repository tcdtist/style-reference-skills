---
version: alpha
name: "Simon Foster"
description: "Simon Foster's portfolio design emphasizes an artistic, editorial feel through high-contrast monochrome typography and striking, playful imagery. The layout prioritizes ample whitespace and subtle textural backgrounds, allowing the curated content to breathe. Interactions are minimal and ghosted, retaining a refined, understated aesthetic that directs focus to the work rather than the interface itself."
theme: "light"
industry: "design"
source_url: "https://www.simonfosters.website"
refero_style_id: "79d341db-8d54-46cd-9d22-2cc576548cfc"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520242913-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520242913-thumb.jpg"
extracted_at: "2026-04-30T03:37:40.508Z"
---

# Simon Foster — Style Reference

> Sculptural Monochrome Canvas

**Theme:** light

**Industry:** design

Simon Foster's portfolio design emphasizes an artistic, editorial feel through high-contrast monochrome typography and striking, playful imagery. The layout prioritizes ample whitespace and subtle textural backgrounds, allowing the curated content to breathe. Interactions are minimal and ghosted, retaining a refined, understated aesthetic that directs focus to the work rather than the interface itself.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary text on dark backgrounds |
| Charcoal Text | #393737 | `--color-charcoal-text` | Primary text, outline button borders, primary content on light backgrounds |
| Subtle Gray | #e7e5e5 | `--color-subtle-gray` | Decorative borders or subtle dividers |
| Pitch Black | #000000 | `--color-pitch-black` | Strong accents, footer borders, potential secondary text or icons |
| Highlight Yellow | #ffed8b | `--color-highlight-yellow` | Accent backgrounds for specific cards or callouts, drawing immediate attention |

## Tokens — Typography

### Neue Montreal Regular

- **Token:** `--font-neue-montreal-regular`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px, 19px, 20px, 24px, 26px, 55px, 61px, 73px, 92px
- **Line heights:** 1.04, 1.10, 1.18, 1.19, 1.42, 1.49, 1.56, 2.75
- **Letter spacing:** 0.0050em
- **Role:** The sole typeface, used for all content from headlines to body text; its clean sans-serif quality provides a modern counterpoint to the site's classical imagery, maintaining clarity across varied scales.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.56 | 0.005px | `--text-body` |
| heading-sm | 19px | 1.49 | 0.005px | `--text-heading-sm` |
| heading | 24px | 1.42 | 0.005px | `--text-heading` |
| heading-lg | 55px | 1.19 | 0.005px | `--text-heading-lg` |
| display | 92px | 1.04 | 0.005px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-318 | 318px | `--spacing-318` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| buttons | 48px |
| navigation | 48px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 43px |
| cardPadding | 32px |
| elementGap | 6px |

## Components

### Ghost Outline Button

**Role:** Call to action, navigation items

Transparent background with a Charcoal Text (#393737) 1px border and text. Rounded with a 48px radius. Padding is 16px vertical, 32px horizontal. Promotes interaction without visual clutter.

### Work Showcase Card

**Role:** Portfolio item display

Transparent background, no border, no shadow, with 0px corner radius. Padding of 0px top, 32px right, 32px bottom, 32px left for text content.

### Featured Project Card

**Role:** Highlighting specific projects

Transparent background with a 20px corner radius, no border or shadow. Content takes full width and height with no internal padding.

### Solid Background Card

**Role:** Alternative background for cards

Solid background of Charcoal Text (#393737) or Canvas White (#ffffff) with a 20px corner radius, no border or shadow. Content takes full width and height with no internal padding.

### Highlight Card

**Role:** Prominent information blocks

Background color of Highlight Yellow (#ffed8b). No border, no shadow, with 0px corner radius. Used for single instances to draw attention.

## Do's and Don'ts

### Do

- Use Charcoal Text (#393737) for all primary body and heading text.
- Apply Canvas White (#ffffff) as the dominant page and surface background color.
- Implement a 48px border-radius for all interactive elements like buttons and navigation items.
- Maintain a spacious rhythm with 43px vertical gaps between major content sections.
- Utilize ghost buttons with `transparent` background and Charcoal Text (#393737) outline for all calls to action.
- Employ a 20px border-radius for all non-interactive card surfaces.
- Ensure all typography uses 'Neue Montreal Regular' with its specified weights and letter-spacing of 0.0050em across all sizes.

### Don't

- Avoid solid, filled CTA buttons; interactions should be ghosted or subtly outlined.
- Do not introduce new typefaces; 'Neue Montreal Regular' is the only approved font.
- Refrain from using hard shadows; the design relies on subtle texture and contrast for depth.
- Do not deviate from the specified spacing units; maintain 6px for element gaps and 32px for card internal padding.
- Avoid excessive use of the Highlight Yellow (#ffed8b); reserve it for impactful, single-instance accents.

## Imagery

The site uses a striking combination of classical sculpture, contemporary product screenshots, and playful, minimalist single-color illustrations. Photography (for products) is high-key with tight crops, showcasing the object against neutral or slight pastel backgrounds, indicating a focus on product detail rather than lifestyle. Illustrations are abstract, flat, and often monochromatic or use a single accent color (like pink), treated with organic shapes, adding a whimsical, artistic touch. Icons are minimal, outlined, and utilize the primary text color. Imagery plays a dual role: product showcasing and atmospheric decoration, maintaining a text-dominant, high-impact visual density.

## Layout

The page maintains a centered max-width content area for text and most sections, but the hero image can be full-bleed. The hero features a large, dramatic image of a classical bust with a large, decorative brand name centered over it, setting a distinct artistic tone. Subsequent sections follow a consistent vertical rhythm with ample whitespace created by section gaps. Content is arranged in alternating image-left/text-right or text-left/image-right patterns, often using a 2-column grid. A 3-column card grid is used for portfolio items. The navigation is a minimalist top-right cluster of ghost buttons, while a prominent scroll-down indicator is centered at the bottom of the hero.

## Similar Brands

- **Awwwards-style portfolio sites** — Shares the use of large, distinctive typography, striking hero imagery, and a monochrome palette with artistic accents.
- **Manylabs.ai** — Similar preference for spacious layouts, minimalist user interfaces, and a strong focus on high-impact visual content.
- **Garden.io** — Exhibits analogous ghost button interaction styles and general aesthetic cleanliness, prioritizing content over heavy UI components.
- **Braid.io** — Mirrors the use of a single, opinionated sans-serif typeface across all roles for a unified typographic voice.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-charcoal-text: #393737;
  --color-subtle-gray: #e7e5e5;
  --color-pitch-black: #000000;
  --color-highlight-yellow: #ffed8b;
  --font-neue-montreal-regular: 'Neue Montreal Regular', Inter;
  --text-body: 16px;
  --leading-body: 1.56;
  --tracking-body: 0.005px;
  --text-heading-sm: 19px;
  --leading-heading-sm: 1.49;
  --tracking-heading-sm: 0.005px;
  --text-heading: 24px;
  --leading-heading: 1.42;
  --tracking-heading: 0.005px;
  --text-heading-lg: 55px;
  --leading-heading-lg: 1.19;
  --tracking-heading-lg: 0.005px;
  --text-display: 92px;
  --leading-display: 1.04;
  --tracking-display: 0.005px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-43: 43px;
  --spacing-51: 51px;
  --spacing-58: 58px;
  --spacing-66: 66px;
  --spacing-318: 318px;
  --radius-cards: 20px;
  --radius-buttons: 48px;
  --radius-navigation: 48px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-charcoal-text: #393737;
  --color-subtle-gray: #e7e5e5;
  --color-pitch-black: #000000;
  --color-highlight-yellow: #ffed8b;
  --font-neue-montreal-regular: 'Neue Montreal Regular', Inter;
  --text-body: 16px;
  --leading-body: 1.56;
  --tracking-body: 0.005px;
  --text-heading-sm: 19px;
  --leading-heading-sm: 1.49;
  --tracking-heading-sm: 0.005px;
  --text-heading: 24px;
  --leading-heading: 1.42;
  --tracking-heading: 0.005px;
  --text-heading-lg: 55px;
  --leading-heading-lg: 1.19;
  --tracking-heading-lg: 0.005px;
  --text-display: 92px;
  --leading-display: 1.04;
  --tracking-display: 0.005px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-43: 43px;
  --spacing-51: 51px;
  --spacing-58: 58px;
  --spacing-66: 66px;
  --spacing-318: 318px;
  --radius-cards: 20px;
  --radius-buttons: 48px;
  --radius-navigation: 48px;
}
```
