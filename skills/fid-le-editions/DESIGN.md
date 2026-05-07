---
version: alpha
name: "Fidèle Editions"
description: "Fidèle Editions presents an analog craft workshop aesthetic: a warm off-white canvas, sturdy typography, and a single vibrant blue brand accent. Product surfaces are subtle, often borderless, letting the rich product imagery dominate. Typography combines playful, condensed headlines with robust body text, creating a tactile, hand-printed feel across the interface."
theme: "light"
industry: "ecommerce"
source_url: "https://fidele-editions.com"
refero_style_id: "957da5c3-7063-4992-9d25-e255752dc9b3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521518478-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521518478-thumb.jpg"
extracted_at: "2026-04-30T03:59:02.644Z"
---

# Fidèle Editions — Style Reference

> Risographic print workshop: layers of paper and ink, tactile and vibrant.

**Theme:** light

**Industry:** ecommerce

Fidèle Editions presents an analog craft workshop aesthetic: a warm off-white canvas, sturdy typography, and a single vibrant blue brand accent. Product surfaces are subtle, often borderless, letting the rich product imagery dominate. Typography combines playful, condensed headlines with robust body text, creating a tactile, hand-printed feel across the interface.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Faded Paper | #f8f7ef | `--color-faded-paper` | Page background, input fields, subtle card surfaces — a warm, creamy off-white that creates a paper-like canvas |
| Printmaker Blue | #1664eb | `--color-printmaker-blue` | Primary brand accent, link text, active states, decorative borders around text, and outlined action highlights — a vivid, almost electric blue that cuts through the warm neutrals |
| Shop Grid Blue | #4f89ec | `--color-shop-grid-blue` | Link text within product grids, secondary icon tinting — a slightly softer variant of the brand blue, used for less prominent interactive elements |
| Ink Black | #121212 | `--color-ink-black` | High-contrast neutral action fill for primary buttons on light surfaces. |
| Dusty Gray | #e2e2df | `--color-dusty-gray` | Divider lines, subtle backgrounds for content grouping — a light, cool gray that provides minimal visual separation |
| Pure White | #ffffff | `--color-pure-white` | Text on dark backgrounds, selected border accents, icon colors — used sparingly for contrast against Ink Black or Printmaker Blue |
| Link Blue | #006ce5 | `--color-link-blue` | Specific link colors, typically within text blocks, providing a slightly darker, more traditional blue for internal navigation |

## Tokens — Typography

### BaselGrotesk Book

- **Token:** `--font-baselgrotesk-book`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px, 16px, 20px, 22px, 24px, 26px, 28px, 32px, 37px, 38px, 41px, 62px
- **Line heights:** 0.92, 0.96, 1.00, 1.20, 1.30, 1.50, 1.80
- **Letter spacing:** -0.0490em, -0.0200em, -0.0160em, 0.0250em, 0.0430em, 0.0630em, 0.0670em
- **Role:** General text, navigation, product titles — this semi-condensed grotesque forms the backbone of the site’s voice through its wide range of sizes and line heights. The negative letter-spacing for larger sizes gives it a compact, intentional feel.

### BaselGrotesk Regular

- **Token:** `--font-baselgrotesk-regular`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px, 17px, 19px, 32px, 62px
- **Line heights:** 0.92, 1.00, 1.50
- **Letter spacing:** -0.0160em, 0.0230em
- **Role:** Secondary headings, smaller labels, and image captions — offering a slightly more open form compared to 'Book' for readability at varied sizes.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Utility text, small buttons, and system-level messages — a highly legible sans-serif for functional elements where clarity is paramount.

### BaselGrotesk Bold

- **Token:** `--font-baselgrotesk-bold`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 22px, 32px
- **Line heights:** 0.92, 1.00
- **Letter spacing:** normal
- **Role:** High-impact statements and critical body text emphasis — used sparingly to draw attention without shouting. Note that its 'bold' variant defaults to 400 weight visually.

### OTMagisterUnlicensedTrial Regular

- **Token:** `--font-otmagisterunlicensedtrial-regular`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 62px
- **Line heights:** 0.92
- **Letter spacing:** -0.0160em
- **Role:** Unique display font for hero headlines and key promotional elements — its distinctive character adds a sophisticated, almost artistic touch to focal points.

### GTStandard-M

- **Token:** `--font-gtstandard-m`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Specialized small-text contexts, possibly for metadata or fine print — a robust monospace-esque font for structured data presentation.

### Assistant

- **Token:** `--font-assistant`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 26px
- **Line heights:** 1.50
- **Letter spacing:** 0.0250em
- **Role:** Input field text with slightly elevated letter spacing to maintain readability in interactive contexts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.2 | — | `--text-caption` |
| body | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | 22px | 0.92 | — | `--text-subheading` |
| heading | 32px | 1 | -0.64px | `--text-heading` |
| display | 62px | 0.92 | -0.99px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-156 | 156px | `--spacing-156` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 42px |
| cardPadding | 19px |
| elementGap | 5px |

## Components

### Outlined Brand Link

**Role:** Hypertext link or navigation item with an underline.

Text is 'Printmaker Blue' (#1664eb), font 'BaselGrotesk Book', with a 'Printmaker Blue' (#1664eb) underline on hover/active. No border radius.

### Ghost Command Button

**Role:** A utility button designed for low hierarchy actions or page navigation (e.g. 'Skip to content').

Background is transparent, text is 'Ink Black' (#121212), font 'Arial' 13px weight 400. Padding varies significantly but can be simulated using 48px horizontal for large and 0px for small. No border radius.

### Filled Footer Button

**Role:** A solid background button for secondary actions usually against dark backgrounds (e.g. newsletter subscribe).

Background is 'Ink Black' (#121212), text is 'Pure White' (#ffffff), font 'Arial' 13px weight 400. Padding: 0px vertical, 48px horizontal. No border radius.

### Product Input Field

**Role:** Input fields for forms (e.g. search, email).

Background is 'Faded Paper' (#f8f7ef), text color is 'Printmaker Blue' (#1664eb) or 'Ink Black' (#121212) for input value. Border is 'Printmaker Blue' (#1664eb) at the bottom. Padding: 24px vertical, 24px horizontal. No border radius.

### Header Nav Link

**Role:** Primary navigation items in the header.

Text is 'Printmaker Blue' (#1664eb), font 'BaselGrotesk Book' 14px weight 400. On hover, a border appears, colored 'Printmaker Blue' (#1664eb).

### Product Listing Card

**Role:** Container for individual product items in a grid.

Background is transparent, text for title and price is 'Ink Black' (#121212) using 'BaselGrotesk Book'. Image is central. No explicit border or shadow, relying on spacing and clear areas for definition.

## Do's and Don'ts

### Do

- Use 'Faded Paper' (#f8f7ef) as the primary page background to maintain the consistent paper-like canvas.
- Apply 'Printmaker Blue' (#1664eb) selectively for interactive text, primary links, and accent borders to ensure it remains a potent visual highlight.
- For headlines, prioritize 'OTMagisterUnlicensedTrial Regular' at 62px, 'BaselGrotesk Book' or 'BaselGrotesk Regular' at larger sizes (32px, 41px), employing negative letter-spacing for impact.
- Structure content using defined element gaps: 5px for close internal elements, 19px for card padding, and 42px for distinct section breaks.
- Maintain zero border radius across all UI elements (buttons, inputs, cards) to preserve the sharp, print-inspired aesthetic.
- When displaying product imagery, ensure it is unmasked and contained, allowing the product itself to be the central visual focus.

### Don't

- Avoid using gradients or drop shadows as primary visual cues; the design relies on flat colors and distinct typography.
- Do not introduce additional saturated colors; restrict the palette to primary brand blue, neutrals, and incidental chromatic link colors to maintain focus.
- Refrain from using 'Arial' for prominent headings or marketing copy; reserve it for utility text or smaller functional elements.
- Do not set border-radius on any component; the site's aesthetic is characterized by sharp, defined edges.
- Avoid heavy borders or solid backgrounds on informational cards or product listings; maintain an open, airy feel with minimal visual clutter.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Faded Paper | #f8f7ef | Base page background, input fields. |
| 1 | Dusty Gray | #e2e2df | Section dividers, subtle background distinction for content blocks. |
| 2 | Ink Black | #121212 | Dark mode backgrounds where applicable, solid background buttons for contrast. |

## Similar Brands

- **It's Nice That** — Combination of bold typography, curated imagery as content, and a strong editorial feel with a clean, light base.
- **Printed Matter** — Focus on risograph and independent publishing, with a similar emphasis on raw product presentation and a slightly utilitarian design aesthetic.
- **Doane Paper** — Clean, almost minimalist design featuring stationery and paper products, using strong typography and ample negative space.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-faded-paper: #f8f7ef;
  --color-printmaker-blue: #1664eb;
  --color-shop-grid-blue: #4f89ec;
  --color-ink-black: #121212;
  --color-dusty-gray: #e2e2df;
  --color-pure-white: #ffffff;
  --color-link-blue: #006ce5;
  --font-baselgrotesk-book: 'BaselGrotesk Book', Inter;
  --font-baselgrotesk-regular: 'BaselGrotesk Regular', Inter;
  --font-arial: 'Arial', Helvetica Neue;
  --font-baselgrotesk-bold: 'BaselGrotesk Bold', Inter;
  --font-otmagisterunlicensedtrial-regular: 'OTMagisterUnlicensedTrial Regular', Playfair Display;
  --font-gtstandard-m: 'GTStandard-M', Space Mono;
  --font-assistant: 'Assistant', Inter;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 22px;
  --leading-subheading: 0.92;
  --text-heading: 32px;
  --leading-heading: 1;
  --tracking-heading: -0.64px;
  --text-display: 62px;
  --leading-display: 0.92;
  --tracking-display: -0.99px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-35: 35px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-96: 96px;
  --spacing-156: 156px;
  --radius-default: 0px;
  --surface-faded-paper: #f8f7ef;
  --surface-dusty-gray: #e2e2df;
  --surface-ink-black: #121212;
}
```

### Tailwind v4

```css
@theme {
  --color-faded-paper: #f8f7ef;
  --color-printmaker-blue: #1664eb;
  --color-shop-grid-blue: #4f89ec;
  --color-ink-black: #121212;
  --color-dusty-gray: #e2e2df;
  --color-pure-white: #ffffff;
  --color-link-blue: #006ce5;
  --font-baselgrotesk-book: 'BaselGrotesk Book', Inter;
  --font-baselgrotesk-regular: 'BaselGrotesk Regular', Inter;
  --font-arial: 'Arial', Helvetica Neue;
  --font-baselgrotesk-bold: 'BaselGrotesk Bold', Inter;
  --font-otmagisterunlicensedtrial-regular: 'OTMagisterUnlicensedTrial Regular', Playfair Display;
  --font-gtstandard-m: 'GTStandard-M', Space Mono;
  --font-assistant: 'Assistant', Inter;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 22px;
  --leading-subheading: 0.92;
  --text-heading: 32px;
  --leading-heading: 1;
  --tracking-heading: -0.64px;
  --text-display: 62px;
  --leading-display: 0.92;
  --tracking-display: -0.99px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-35: 35px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-96: 96px;
  --spacing-156: 156px;
  --radius-default: 0px;
  --surface-faded-paper: #f8f7ef;
  --surface-dusty-gray: #e2e2df;
  --surface-ink-black: #121212;
}
```
