---
version: alpha
name: "Schulhaus Tirol"
description: "Schulhaus Tirol embraces an earthy, rustic elegance with its primary focus on rich, warm tones and robust typography. The design system emphasizes distinct content blocks against a deeply saturated background. Text is generally dark and grounded, providing strong contrast while an accent color creates deliberate visual punctuation. Visuals are contained within defined areas, contributing to a feeling of curated information rather than expansive, flowing layouts."
theme: "light"
industry: "other"
source_url: "https://www.schulhaus.tirol"
refero_style_id: "dbddcf46-f564-4b8b-8f3a-9b32e04b1639"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515079563-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515079563-thumb.jpg"
extracted_at: "2026-04-30T02:11:38.665Z"
---

# Schulhaus Tirol — Style Reference

> Warm earthy heritage

**Theme:** light

**Industry:** other

Schulhaus Tirol embraces an earthy, rustic elegance with its primary focus on rich, warm tones and robust typography. The design system emphasizes distinct content blocks against a deeply saturated background. Text is generally dark and grounded, providing strong contrast while an accent color creates deliberate visual punctuation. Visuals are contained within defined areas, contributing to a feeling of curated information rather than expansive, flowing layouts.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Terracotta | #ff7d50 | `--color-terracotta` | Dominant background for content sections and navigational elements, creating the warm, earthy foundation of the design. Also used for modal backgrounds |
| Carbon Black | #000000 | `--color-carbon-black` | Primary text color for headlines, body text, and links, ensuring high contrast against lighter surfaces. Also used for default icon fills and borders |
| Ash Gray | #e5e7eb | `--color-ash-gray` | Subtle border color for dividing elements and providing light visual structure within cards and against darker backgrounds |
| Charcoal Ink | #1d1d1b | `--color-charcoal-ink` | Secondary text and icon color, used for less prominent content and SVG fills |
| Pewter | #555555 | `--color-pewter` | Tertiary border color, used sparingly for very thin dividers |

## Tokens — Typography

### Office Times Sharp

- **Token:** `--font-office-times-sharp`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 14px, 16px, 20px, 26px
- **Line heights:** 1.20, 1.25, 1.42, 1.50
- **Letter spacing:** 0.0120em for 14px, 0.0160em for 16px, 0.0340em for 20px and 26px.
- **Role:** Primary typeface for headlines, body text, navigation items, and buttons. Its single 400 weight emphasizes a unified, unpretentious voice, relying on size for hierarchy.

### Office Times Sharp Mono

- **Token:** `--font-office-times-sharp-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px
- **Line heights:** 1.42, 1.70
- **Letter spacing:** 0.0340em for 10px, 0.0400em for 12px, 0.0480em for 14px.
- **Role:** Monospaced secondary typeface primarily for small labels, input fields, and some body text variations, providing a technical contrast to the primary serif font. Its generous letter-spacing enhances legibility at small sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.42 | 0.34px | `--text-caption` |
| body | 14px | 1.2 | 0.168px | `--text-body` |
| heading | 20px | 1.42 | 0.68px | `--text-heading` |
| heading-lg | 26px | 1.5 | 0.884px | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-241 | 241px | `--spacing-241` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 30px |
| elementGap | 12px |

## Components

### Ghost Button

**Role:** Text-only button for navigation or secondary actions, relying on text color for prominence. Appears as a simple text link.

backgroundColor: transparent, color: Carbon Black (#000000), borderRadius: 0px, padding: 0px.

### Outlined Input Field

**Role:** Minimal input field with distinct padding, designed for unobtrusive data entry.

backgroundColor: transparent, color: Carbon Black (#000000), borderColor: Carbon Black (#000000), borderRadius: 0px, padding: 0px 10px.

### Modal Dialog

**Role:** Overlays content with a Terracotta background to highlight important information.

background-color: Terracotta (#ff7d50), text-color: Carbon Black (#000000), includes a 'Schliessen' ghost button.

### Section Divider

**Role:** Hairline horizontal divider used to visually separate content blocks.

1px solid Ash Gray (#e5e7eb) border, no radius.

## Do's and Don'ts

### Do

- Always use Terracotta (#ff7d50) as the background for primary content sections to establish the brand's warm, earthy tone.
- Utilize Carbon Black (#000000) for all primary text and calls to action where high contrast is essential.
- Apply Office Times Sharp at font-weight 400 for all headlines and body text, relying on size to define hierarchy.
- Space elements using multiples of 12px for `elementGap` to maintain a comfortable density.
- Implement 1px solid Ash Gray (#e5e7eb) for subtle borders and element separation.
- Use Office Times Sharp Mono with its characteristic letter-spacing for smaller, functional text elements like captions and input labels.
- Ensure all interactive elements, including buttons and inputs, have a borderRadius of 0px to maintain the clean, sharp aesthetic.

### Don't

- Avoid using bright or overly saturated colors outside of the Terracotta base, as they will conflict with the muted palette.
- Do not deviate from the specified font weights; the system is designed around the deliberate use of single-weight typefaces.
- Refrain from using shadows or strong elevation for UI elements, as the design emphasizes flat surfaces.
- Do not introduce rounded corners; maintain the sharp, defined edges of existing components.
- Avoid large negative letter-spacing values; the monospaced font is intentionally more open.
- Do not create large, full-bleed images that distract from the typographic focus; images should be contained and integrated with text.
- Do not use generic system fonts; stick to Office Times Sharp and Office Times Sharp Mono for brand consistency.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #ff7d50 | Dominant page background and large content blocks. |
| 1 | Subtle Surface | #dbdbdb | Underlying background color that appears in negative spaces or behind some elements to provide subtle depth. |

## Imagery

The imagery on the site consists of diverse photography, including atmospheric landscapes (mountains), candid portraits, and highly stylized, close-up product shots (food). The treatment is primarily isolated within rectangular frames, often appearing on a dark background within the Terracotta page. There are no apparent borders or rounded corners on the images themselves. Imagery serves both decorative and explanatory roles, setting a mood while also showcasing offerings.

## Layout

The page primarily uses a full-bleed layout, with content sections extending edge-to-edge. The hero section features a centered headline over a background that appears to be the dominant Terracotta color, possibly with dark imagery overlaying it. Content generally alternates between large, rectangular blocks of text and image sections. There's an underlying grid implied by horizontally aligned content, but specific column counts are not consistently rigid. Overall, the layout feels spacious and content-focused, with strong vertical rhythm established by generously spaced sections.

## Similar Brands

- **Aritzia** — Uses a similar warm, earthy color palette combined with strong typography for a sophisticated, understated feel.
- **Aesop** — Employs a minimalist aesthetic with a focus on quality typography and natural, muted color schemes.
- **Monocle Magazine** — Features a similar editorial layout with contained imagery and a blend of serif and sans-serif typefaces.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-terracotta: #ff7d50;
  --color-carbon-black: #000000;
  --color-ash-gray: #e5e7eb;
  --color-charcoal-ink: #1d1d1b;
  --color-pewter: #555555;
  --font-office-times-sharp: 'Office Times Sharp', Georgia;
  --font-office-times-sharp-mono: 'Office Times Sharp Mono', IBM Plex Mono;
  --text-caption: 10px;
  --leading-caption: 1.42;
  --tracking-caption: 0.34px;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: 0.168px;
  --text-heading: 20px;
  --leading-heading: 1.42;
  --tracking-heading: 0.68px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.5;
  --tracking-heading-lg: 0.884px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-241: 241px;
  --radius-none: 0px;
  --surface-canvas: #ff7d50;
  --surface-subtle-surface: #dbdbdb;
}
```

### Tailwind v4

```css
@theme {
  --color-terracotta: #ff7d50;
  --color-carbon-black: #000000;
  --color-ash-gray: #e5e7eb;
  --color-charcoal-ink: #1d1d1b;
  --color-pewter: #555555;
  --font-office-times-sharp: 'Office Times Sharp', Georgia;
  --font-office-times-sharp-mono: 'Office Times Sharp Mono', IBM Plex Mono;
  --text-caption: 10px;
  --leading-caption: 1.42;
  --tracking-caption: 0.34px;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: 0.168px;
  --text-heading: 20px;
  --leading-heading: 1.42;
  --tracking-heading: 0.68px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.5;
  --tracking-heading-lg: 0.884px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-241: 241px;
  --radius-none: 0px;
  --surface-canvas: #ff7d50;
  --surface-subtle-surface: #dbdbdb;
}
```
