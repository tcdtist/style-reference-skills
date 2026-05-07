---
version: alpha
name: "LogoArchive"
description: "LogoArchive presents a commanding dark-mode experience, reminiscent of a digital archive or library. Its aesthetic is dominated by deep, muted neutrals, creating a profound backdrop for content. Typography favors compact, confident sans-serifs, reserving a single, vivid yellow for functional accents. Components are lightweight with subtle border treatments and generous curves, balancing utility with a soft, approachable feel against the dark canvas."
theme: "dark"
industry: "design"
source_url: "https://www.logo-archive.org"
refero_style_id: "b63cc4ca-52c6-4b70-9a5a-cb04bae15edb"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514639552-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514639552-thumb.jpg"
extracted_at: "2026-04-30T02:04:18.998Z"
---

# LogoArchive — Style Reference

> Deep Digital Archive.

**Theme:** dark

**Industry:** design

LogoArchive presents a commanding dark-mode experience, reminiscent of a digital archive or library. Its aesthetic is dominated by deep, muted neutrals, creating a profound backdrop for content. Typography favors compact, confident sans-serifs, reserving a single, vivid yellow for functional accents. Components are lightweight with subtle border treatments and generous curves, balancing utility with a soft, approachable feel against the dark canvas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Page background (primary), card surfaces, text on bright surfaces |
| Carbon | #18181b | `--color-carbon` | Decorative fill for icons and abstract shapes |
| Steel Gray | #27272a | `--color-steel-gray` | Card backgrounds, button backgrounds, secondary surface color |
| Ash Gray | #343538 | `--color-ash-gray` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Sky Haze | #a8afb7 | `--color-sky-haze` | Muted secondary text, helper text, subtle borders |
| Stone | #8c8c8d | `--color-stone` | List item backgrounds, tertiary background for subtle differentiation |
| Porcelain | #ffffff | `--color-porcelain` | Primary text, icon fill, button text, card borders |
| Polar Mist | #dadee4 | `--color-polar-mist` | Subtle background tones, light border accents |
| Amber Glow | #fde533 | `--color-amber-glow` | Yellow outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### Suisse International

- **Token:** `--font-suisse-international`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px, 19px, 24px, 28px, 65px, 96px
- **Line heights:** 0.90, 1.00, 1.20, 1.75
- **Letter spacing:** normal
- **Role:** Primary content font for all text elements: headings (bold, large), body text, navigation, and button labels. Its wide range of weights and sizes provides clear visual hierarchy within a consistent aesthetic.

### Suisse Works Book

- **Token:** `--font-suisse-works-book`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 65px, 96px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** normal
- **Role:** Used selectively for large, prominent headings, specifically for the main hero statements. Its distinct character provides a stylistic contrast to Suisse International while maintaining legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.75 | — | `--text-caption` |
| body-sm | 14px | 1.75 | — | `--text-body-sm` |
| body | 16px | 1.75 | — | `--text-body` |
| subheading | 18px | 1.75 | — | `--text-subheading` |
| heading-sm | 24px | 1.2 | — | `--text-heading-sm` |
| heading | 28px | 1.2 | — | `--text-heading` |
| heading-lg | 65px | 1 | — | `--text-heading-lg` |
| display | 96px | 0.9 | — | `--text-display` |

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
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-306 | 306px | `--spacing-306` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| cards | 28px |
| lists | 40px |
| buttons | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 32px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Call to action

Filled with Amber Glow (#fde533) with Midnight Ink (#000000) text, 20px border radius, and 4px 10px padding.

### Ghost Secondary Button

**Role:** Secondary action

Transparent background with Porcelain (#ffffff) text and 1px Porcelain (#ffffff) border, 20px border radius, and 4px 10px padding.

### Subtle Secondary Button

**Role:** Secondary action on dark backgrounds

Filled with Steel Gray (#27272a) background with Porcelain (#ffffff) text, 20px border radius, and 4px 10px padding.

### Standard Content Card

**Role:** Content grouping

Steel Gray (#27272a) background, 28px border radius, and 120px 0px 0px 0px padding. No shadow.

### Elevated Content Card

**Role:** Content grouping, slightly more prominent

Ash Gray (#343538) background, 22px border radius, and 32px 48px 32px 32px padding. No shadow.

### Minimal Card

**Role:** Basic container

Midnight Ink (#000000) background, 28px border radius. No padding.

### Pill Tag

**Role:** Informational tag or filter

Porcelain (#ffffff) background with Midnight Ink (#000000) text, 999px border radius for a pill shape.

## Do's and Don'ts

### Do

- Use Midnight Ink (#000000) for all primary page backgrounds and main text on Amber Glow surfaces.
- Apply Suisse International for all type, adjusting weight and size to create hierarchy, except for specific large hero headlines.
- Employ Steel Gray (#27272a) for default card backgrounds and subtle interactive elements.
- Prioritize a 28px border radius for most content cards and a 20px radius for buttons.
- Use Amber Glow (#fde533) exclusively for primary calls to action, tags, and small functional highlights.
- Maintain a compact element spacing with 8px as the default gap between components where possible.
- Ensure primary text is Porcelain (#ffffff) on dark backgrounds for optimal contrast.

### Don't

- Avoid using multiple chromatic colors; Amber Glow (#fde533) is the primary accent.
- Do not use box shadows for elevation; rely on background color differences and subtle borders instead.
- Refrain from using thin weights of type on dark backgrounds where legibility could be compromised.
- Do not introduce square or minimally rounded corners; all interface elements should embrace significant corner radii.
- Avoid large empty spaces beyond the pageMaxWidth; the layout should feel dense yet organized.
- Do not use generic system fonts; Suisse International and Suisse Works Book define the brand's typographic voice.
- Do not use generic grey for interactive states; utilize the Amber Glow (#fde533) for hover/active where appropriate for primary actions.

## Imagery

This site prominently features product screenshots and abstract graphics. Product screenshots are typically close-cropped UI elements or full interface views presented on the deep dark background, often showcasing geometric logo arrays. Imagery is contained, never full-bleed, and integrates seamlessly with the surrounding UI. Icons are simple, outlined or filled in monochromatic tones (Porcelain, Carbon), maintaining a clean, utilitarian aesthetic. The focus is on visual content as explanatory rather than decorative, showcasing the product directly.

## Layout

The page maintains a centered, max-width contained layout rather than full-bleed, creating a focused experience within the surrounding Midnight Ink canvas. The hero section features large, centered headlines over the dark background, often incorporating a single graphic element. Section rhythm is built on consistent vertical spacing, often with content blocks stacking vertically or arranging in multi-column grids (like the pricing cards). There are no overt visual dividers; sections flow into each other via background changes. Navigation is a minimal top bar with simple text links.

## Similar Brands

- **Linear** — Shares a sophisticated dark mode, compact typography, and subtle, often monochromatic, UI elements and iconography without heavy visual effects.
- **Raycast** — Similar focus on minimalist, functional UI in a dark theme, utilizing a single accent color for interaction and highlighting.
- **Figma (dark mode)** — Employs a deep dark background, clean sans-serif typography, and clear visual hierarchy through surface contrast rather than shadows, much like LogoArchive.
- **Setapp** — Uses a dark, content-focused layout with light typography and a single bright accent color to guide user attention and denote interactivity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-carbon: #18181b;
  --color-steel-gray: #27272a;
  --color-ash-gray: #343538;
  --color-sky-haze: #a8afb7;
  --color-stone: #8c8c8d;
  --color-porcelain: #ffffff;
  --color-polar-mist: #dadee4;
  --color-amber-glow: #fde533;
  --font-suisse-international: 'Suisse International', Inter;
  --font-suisse-works-book: 'Suisse Works Book', Lora;
  --text-caption: 12px;
  --leading-caption: 1.75;
  --text-body-sm: 14px;
  --leading-body-sm: 1.75;
  --text-body: 16px;
  --leading-body: 1.75;
  --text-subheading: 18px;
  --leading-subheading: 1.75;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --text-heading-lg: 65px;
  --leading-heading-lg: 1;
  --text-display: 96px;
  --leading-display: 0.9;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-306: 306px;
  --radius-tags: 999px;
  --radius-cards: 28px;
  --radius-lists: 40px;
  --radius-buttons: 20px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-carbon: #18181b;
  --color-steel-gray: #27272a;
  --color-ash-gray: #343538;
  --color-sky-haze: #a8afb7;
  --color-stone: #8c8c8d;
  --color-porcelain: #ffffff;
  --color-polar-mist: #dadee4;
  --color-amber-glow: #fde533;
  --font-suisse-international: 'Suisse International', Inter;
  --font-suisse-works-book: 'Suisse Works Book', Lora;
  --text-caption: 12px;
  --leading-caption: 1.75;
  --text-body-sm: 14px;
  --leading-body-sm: 1.75;
  --text-body: 16px;
  --leading-body: 1.75;
  --text-subheading: 18px;
  --leading-subheading: 1.75;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --text-heading-lg: 65px;
  --leading-heading-lg: 1;
  --text-display: 96px;
  --leading-display: 0.9;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-306: 306px;
  --radius-tags: 999px;
  --radius-cards: 28px;
  --radius-lists: 40px;
  --radius-buttons: 20px;
}
```
