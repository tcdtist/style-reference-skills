---
version: alpha
name: "Hardworkclub"
description: "Hardworkclub presents a dark, minimalist aesthetic, using deep black as the primary canvas for content. Typography is dense and commanding, often rendered in stark white against the dark background. A single, vivid violet accent color is reserved for subtle interactive elements, making its infrequent appearance impactful. The design emphasizes content through strong contrasts, creating a sophisticated and focused visual experience."
theme: "dark"
industry: "agency"
source_url: "https://www.hardworkclub.com"
refero_style_id: "1775bf6a-afdd-48b1-8435-b92ec585c674"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515722385-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515722385-thumb.jpg"
extracted_at: "2026-04-30T02:22:17.490Z"
---

# Hardworkclub — Style Reference

> Midnight Stage Black: content bathed in light, surrounded by deep, velvety darkness.

**Theme:** dark

**Industry:** agency

Hardworkclub presents a dark, minimalist aesthetic, using deep black as the primary canvas for content. Typography is dense and commanding, often rendered in stark white against the dark background. A single, vivid violet accent color is reserved for subtle interactive elements, making its infrequent appearance impactful. The design emphasizes content through strong contrasts, creating a sophisticated and focused visual experience.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary background, text on light surfaces |
| Ghost White | #ffffff | `--color-ghost-white` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Violet Bloom | #1200e3 | `--color-violet-bloom` | Violet wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Slate Whisper | #313130 | `--color-slate-whisper` | Muted borders |

## Tokens — Typography

### Founders Grotesk

- **Token:** `--font-founders-grotesk`
- **Substitute:** Inter
- **Weights:** 300, 500, 700
- **Sizes:** 16px, 18px, 22px, 31px
- **Line heights:** 0.78, 1.00, 1.10, 1.20, 1.21, 1.50, 1.67
- **Letter spacing:** -0.0300em
- **Role:** Primary typeface for all text content including headings, body, and interactive elements. Its versatility across weights supports hierarchical differentiation.

### Maligna

- **Token:** `--font-maligna`
- **Substitute:** Playfair Display
- **Weights:** 300, 500
- **Sizes:** 31px, 61px
- **Line heights:** 1.10, 1.20
- **Letter spacing:** -0.0300em
- **Role:** Reserved for large, impactful headings. Its distinct character provides a decorative counterpoint to Founders Grotesk, making headlines feel artistic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.5 | -0.48px | `--text-body` |
| subheading | 18px | 1.21 | -0.54px | `--text-subheading` |
| heading-sm | 22px | 1.1 | -0.66px | `--text-heading-sm` |
| heading | 31px | 1.1 | -0.93px | `--text-heading` |
| display | 61px | 1.2 | -1.83px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 1440px |
| buttons | 1440px |
| default | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 96px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Ghost Button

**Role:** Call to action button for secondary actions or navigation.

Transparent background with a 1px 'Slate Whisper' border, 'Ghost White' text. Padding is 7px bottom, 4.5px top, 13px horizontal. Features a large 1440px border-radius for a pill shape.

### Pill Link

**Role:** Interactive elements that appear as text but have a distinct pill-shaped hover state or background.

'Ghost White' text on 'Midnight Ink' background, often with an 8px border-radius. On hover, background fills with 'Midnight Ink' and border appears 'Ghost White'. Radius is 1440px.

### Work Card

**Role:** Container for showcasing featured work items.

Implied dark background with text ('Ghost White') overlaid. Features rounded corners at 8px radius and a soft 'Slate Whisper' border on hover/focus states, or as a subtle divider.

## Do's and Don'ts

### Do

- Use 'Midnight Ink' (#000000) as the default background, ensuring high contrast with 'Ghost White' text.
- Apply Founders Grotesk for all primary text, varying weight and size for hierarchy.
- Reserve Maligna for prominent headlines at 31px or 61px, maintaining its -0.0300em letter spacing.
- Utilize 'Violet Bloom' (#1200e3) sparingly for interactive feedback or subtle visual accents, never for large blocks of color.
- Maintain a comfortable density with an 8px base unit for most element gaps and 96px for section spacing.
- Apply a 1440px border-radius for all buttons and pill-shaped interactive elements to achieve a distinctive rounded look.
- Use 'Ghost White' (#ffffff) for borders on interactive elements against dark backgrounds.

### Don't

- Avoid using 'Violet Bloom' (#1200e3) for primary call-to-action button backgrounds or large text areas, as it isn't used for such a purpose.
- Do not introduce additional saturated colors; stick to 'Violet Bloom' as the sole chromatic accent.
- Avoid box-shadows or heavy elevation effects; rely on color contrast and subtle borders for visual separation.
- Do not deviate from the specified Malinga or Founders Grotesk font families for any text roles.
- Avoid using radii less than 8px, as the system favors either very subtle rounding or full pill shapes.
- Do not use generic system fonts; Founders Grotesk and Maligna are integral to the brand's typographic identity.
- Do not employ solid black borders; use either 'Slate Whisper' (#313130) for subtle definition or 'Ghost White' (#ffffff) for interactive elements.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas | #000000 | The foundational background for all pages and sections. |
| 2 | Interactive Surface | #1200e3 | Subtle background for specific interactive elements when they require a distinct, non-textual highlight. |
| 3 | Accent Surface | #ffffff | Used sparingly for inverted sections or to highlight full-bleed content, creating strong visual breaks. |

## Imagery

The site uses a mix of evocative, dark-toned product and lifestyle photography, often with a cinematic quality. Imagery is typically contained within semi-rounded or pill-shaped masks, emphasizing the object or subject directly. There's an absence of overly vibrant or desaturated images, maintaining a consistent subdued mood. Icons are minimal, likely outlined or simple solid shapes.

## Layout

The page structure is primarily max-width contained, centered on a deep black canvas. The hero section is full-bleed, often featuring a video or large image with centered, stark white text. Sections are clearly delineated with consistent vertical spacing (96px). Content arrangement frequently uses a two-column grid for images and text, often alternating sides. A card-grid layout is used for 'Featured Work' items. The overall density is comfortable, allowing elements to breathe within the dark space.

## Similar Brands

- **Alinea** — Heavy reliance on a dark background with bright, contrasting typography and minimal use of accent colors.
- **Stripe** — Clean, almost sparse design, with strong typographic hierarchy against a neutral background, and interactive elements highlighted by a single accent color.
- **Huge** — Advertising agency with a dark, refined aesthetic and understated use of color, focusing on large-scale imagery and bold typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-ghost-white: #ffffff;
  --color-violet-bloom: #1200e3;
  --color-slate-whisper: #313130;
  --font-founders-grotesk: 'Founders Grotesk', Inter;
  --font-maligna: 'Maligna', Playfair Display;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.48px;
  --text-subheading: 18px;
  --leading-subheading: 1.21;
  --tracking-subheading: -0.54px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.66px;
  --text-heading: 31px;
  --leading-heading: 1.1;
  --tracking-heading: -0.93px;
  --text-display: 61px;
  --leading-display: 1.2;
  --tracking-display: -1.83px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-160: 160px;
  --radius-pill: 1440px;
  --radius-buttons: 1440px;
  --radius-default: 8px;
  --surface-canvas: #000000;
  --surface-interactive-surface: #1200e3;
  --surface-accent-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-ghost-white: #ffffff;
  --color-violet-bloom: #1200e3;
  --color-slate-whisper: #313130;
  --font-founders-grotesk: 'Founders Grotesk', Inter;
  --font-maligna: 'Maligna', Playfair Display;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.48px;
  --text-subheading: 18px;
  --leading-subheading: 1.21;
  --tracking-subheading: -0.54px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.66px;
  --text-heading: 31px;
  --leading-heading: 1.1;
  --tracking-heading: -0.93px;
  --text-display: 61px;
  --leading-display: 1.2;
  --tracking-display: -1.83px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-160: 160px;
  --radius-pill: 1440px;
  --radius-buttons: 1440px;
  --radius-default: 8px;
  --surface-canvas: #000000;
  --surface-interactive-surface: #1200e3;
  --surface-accent-surface: #ffffff;
}
```
