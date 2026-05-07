---
version: alpha
name: "Michael Wandelmaier"
description: "This design system presents a dark canvas with strong typographical elements and sporadic, vibrant accents. Large, custom typefaces create a bold, editorial feel, while custom-shaped, brightly colored interactive elements punctuate the monochrome background. The overall impression is one of confident, art-directed simplicity, eschewing typical interface conventions for a more graphic, playful approach."
theme: "dark"
industry: "design"
source_url: "https://wandelmaier.com"
refero_style_id: "5b405eec-67ba-4dd0-8dab-ace000151a78"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516460921-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516460921-thumb.jpg"
extracted_at: "2026-04-30T02:34:42.764Z"
---

# Michael Wandelmaier — Style Reference

> Dark canvas, bold blobs

**Theme:** dark

**Industry:** design

This design system presents a dark canvas with strong typographical elements and sporadic, vibrant accents. Large, custom typefaces create a bold, editorial feel, while custom-shaped, brightly colored interactive elements punctuate the monochrome background. The overall impression is one of confident, art-directed simplicity, eschewing typical interface conventions for a more graphic, playful approach.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Canvas Dark | #191816 | `--color-canvas-dark` | Page and section backgrounds, primary surface for content |
| Cloud White | #ffffff | `--color-cloud-white` | Primary text, ghost button borders, button text on accent colors |
| Soft Gray | #a9a9a9 | `--color-soft-gray` | Muted text, secondary information, divider lines |
| Deep Graphite | #302f2d | `--color-deep-graphite` | Subtle borders and dividers on dark backgrounds |
| Spring Bud | #34a847 | `--color-spring-bud` | Primary action background, active badge, success states. Provides a vivid, high-contrast focal point |
| Flamingo Pink | #fbcbcb | `--color-flamingo-pink` | Decorative card background, visual interest element. Creates a soft, warm highlight |
| Sunset Orange | #f27851 | `--color-sunset-orange` | Decorative card background, visual interest element. Adds a strong, vibrant pop |

## Tokens — Typography

### PolySans

- **Token:** `--font-polysans`
- **Substitute:** system-ui
- **Weights:** 100
- **Sizes:** 12px, 24px, 32px, 187px
- **Line heights:** 0.90, 1.00, 1.33, 2.50, 2.67
- **Letter spacing:** 0.2000em
- **Role:** Headings and prominent display text that demand attention with a wide, almost whispering character. Its extreme lightness is a signature element.

### Canela Web

- **Token:** `--font-canela-web`
- **Substitute:** Playfair Display
- **Weights:** 100
- **Sizes:** 40px, 50px, 80px
- **Line heights:** 1.20, 1.30, 2.40
- **Role:** Editorial headings, creating an elegant, serif counterpoint to the sans-serif. Its light weight keeps it refined.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Role:** Body text and functional UI elements where clarity and neutrality are prioritized.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.2 | — | `--text-body` |
| subheading | 24px | 1.33 | 4.8px | `--text-subheading` |
| heading | 32px | 1.33 | 6.4px | `--text-heading` |
| heading-lg | 40px | 1.2 | — | `--text-heading-lg` |
| display-sm | 50px | 1.3 | — | `--text-display-sm` |
| display-md | 80px | 1.2 | — | `--text-display-md` |
| display-lg | 187px | 0.9 | 37.4px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-16 | 16px | `--spacing-16` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10000px |
| badges | 48px |
| buttons | 72px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1760px |
| sectionGap | 96px |
| cardPadding | 32px |
| elementGap | 22px |

## Components

### Primary Action Button

**Role:** Main call to action, visually distinct and interactive.

Filled with Spring Bud (#34a847), text is Midnight Ink (#000000), 72px radius. Padding 29px vertical, 48px horizontal. Uses PolySans at 24px.

### Ghost Outline Button

**Role:** Secondary action or navigation link, subtle and integrates with the dark theme.

Transparent background, Cloud White (#ffffff) text and 2.5px border, 72px radius. Padding 29px vertical, 48px horizontal. Uses PolySans at 24px.

### Accent Blob Card - Flamingo Pink

**Role:** Decorative background for featured items or visual breaks.

Flamingo Pink (#fbcbcb) background, extreme 10000px radius to create a 'blob' shape. No padding, acting purely as a background visual.

### Accent Blob Card - Sunset Orange

**Role:** Decorative background for featured items or visual breaks.

Sunset Orange (#f27851) background, extreme 10000px radius to create a 'blob' shape. No padding, acting purely as a background visual.

### Accent Blob Card - Spring Bud

**Role:** Decorative background for featured items or visual breaks.

Spring Bud (#34a847) background, extreme 10000px radius to create a 'blob' shape. No padding, acting purely as a background visual.

### Standard Badge (Ghost)

**Role:** Categorization or tagging, visually lightweight.

Transparent background, Cloud White (#ffffff) text and 2.5px border, 48px radius. Padding 29px vertical, 61px horizontal. Uses PolySans at 24px.

### Accent Badge (Spring Bud)

**Role:** Highlighted categorization or tag, draws attention.

Spring Bud (#34a847) background, Midnight Ink (#000000) text, 48px radius. Padding 29px vertical, 61px horizontal. Uses PolySans at 24px.

### List Item Divider

**Role:** Separates content lines in lists, subtle presence.

1px solid Deep Graphite (#302f2d) border.

## Do's and Don'ts

### Do

- Use Canvas Dark (#191816) as the base background for most sections.
- Apply Cloud White (#ffffff) for all primary text elements, including headings and body copy.
- Utilize PolySans Bold (weight 100) and Canela Web (weight 100) at large sizes and Cloud White for impactful headings.
- Embed accent colors (Flamingo Pink #fbcbcb, Sunset Orange #f27851, Spring Bud #34a847) in large, irregular 10000px radius 'blob' shapes for visual interest where appropriate.
- Implement 72px radius for all interactive buttons and 48px for badges to maintain the rounded, soft aesthetic.
- Maintain a clear visual hierarchy by using Spring Bud (#34a847) only for primary actions and key highlights.
- Ensure consistent spaciousness with column/element gaps of 22px and section gaps of 96px.

### Don't

- Avoid using multiple accent colors in close proximity; let one color pop per visual cluster.
- Do not use box-shadows or significant elevation; maintain a flat, graphic aesthetic.
- Refrain from tight, dense layouts; prioritize generous spacing for a breathy, premium feel.
- Do not use generic system fonts for prominent headings; PolySans and Canela Web are critical for brand identity.
- Avoid sharp corners; all interactive elements and decorative shapes should feature extreme rounding (48px, 72px, 10000px).
- Do not vary font weights for PolySans headers; the consistent weight 100 is a signature choice.
- Avoid using any other color than Cloud White (#ffffff) for primary text on dark backgrounds.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Dark | #191816 | Primary page and section backgrounds, dominant theme for the entire experience. |
| 1 | Accent Blob Surface | #fbcbcb | Decorative, irregularly shaped background for specific content blocks, introducing bursts of color. |

## Imagery

This system primarily uses embedded photography treated as full-bleed, unmasked rectangles set against the dark canvas for product and team shots. There's a mix of candid lifestyle and focused close-ups. Icons are minimal, subtle, and appear as outlined strokes in Cloud White. Imagery, especially the full-bleed photos, acts as content showcases rather than purely decorative elements, often integrated into larger grid layouts with generous spacing.

## Layout

The page operates on a contained max-width of 1760px, centered on the screen. The hero section features large, custom typography and vibrant 'blob' components, creating a bold, graphic introduction. Section rhythm is driven by generous vertical spacing (96px section gaps) and the alternation between text-dominant blocks and photo grids. Content often appears in a simple two-column layout for text and images, or in a multi-column grid for work showcases. Navigation is minimal and fixed at the top, integrating subtly into the dark canvas.

## Similar Brands

- **Alinea** — Dominant dark mode, large custom typography for headings, and minimal use of bright accent colors in 'blob' shapes.
- **Blinkist** — Utilizes a clear, spacious layout with strong text hierarchy and selective splashes of vibrant color on a mostly neutral background.
- **Framer** — Employs an editorial type treatment with large, light-weight headings and a dark theme, punctuated by colorful, graphic UI elements.
- **Pitch** — Features oversized, custom typography as a core design element, combined with a stark background and limited, but impactful, accent colors.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-dark: #191816;
  --color-cloud-white: #ffffff;
  --color-soft-gray: #a9a9a9;
  --color-deep-graphite: #302f2d;
  --color-spring-bud: #34a847;
  --color-flamingo-pink: #fbcbcb;
  --color-sunset-orange: #f27851;
  --font-polysans: 'PolySans', system-ui;
  --font-canela-web: 'Canela Web', Playfair Display;
  --font-sans-serif: 'sans-serif', Arial;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: 4.8px;
  --text-heading: 32px;
  --leading-heading: 1.33;
  --tracking-heading: 6.4px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display-sm: 50px;
  --leading-display-sm: 1.3;
  --text-display-md: 80px;
  --leading-display-md: 1.2;
  --text-display-lg: 187px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: 37.4px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-43: 43px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-96: 96px;
  --spacing-192: 192px;
  --radius-cards: 10000px;
  --radius-badges: 48px;
  --radius-buttons: 72px;
  --surface-canvas-dark: #191816;
  --surface-accent-blob-surface: #fbcbcb;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-dark: #191816;
  --color-cloud-white: #ffffff;
  --color-soft-gray: #a9a9a9;
  --color-deep-graphite: #302f2d;
  --color-spring-bud: #34a847;
  --color-flamingo-pink: #fbcbcb;
  --color-sunset-orange: #f27851;
  --font-polysans: 'PolySans', system-ui;
  --font-canela-web: 'Canela Web', Playfair Display;
  --font-sans-serif: 'sans-serif', Arial;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: 4.8px;
  --text-heading: 32px;
  --leading-heading: 1.33;
  --tracking-heading: 6.4px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display-sm: 50px;
  --leading-display-sm: 1.3;
  --text-display-md: 80px;
  --leading-display-md: 1.2;
  --text-display-lg: 187px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: 37.4px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-43: 43px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-96: 96px;
  --spacing-192: 192px;
  --radius-cards: 10000px;
  --radius-badges: 48px;
  --radius-buttons: 72px;
  --surface-canvas-dark: #191816;
  --surface-accent-blob-surface: #fbcbcb;
}
```
