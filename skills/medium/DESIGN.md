---
version: alpha
name: "Medium"
description: "Medium's design evokes the feeling of a refined, minimalist literary journal, emphasizing content over chrome. The dominant use of a warm off-white background (#f7f4ed) creates a soft, inviting canvas for the high-contrast text. Typography is the cornerstone, with a stately serif font for headlines paired with a clean sans-serif for body text, creating a classic yet accessible reading experience. Accent colors are deliberately minimal, primarily using deep black for interactive elements to draw clear focus and a vibrant green for specific illustrative brand moments."
theme: "light"
industry: "media"
source_url: "https://medium.com"
refero_style_id: "9c92c3d1-a2fe-4a27-a324-826b19501774"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776105334073-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776105334073-thumb.jpg"
extracted_at: "2026-04-13T18:35:58.237Z"
---

# Medium — Style Reference

> Literary Cafe, Digital Ink on Vellum.

**Theme:** light

**Industry:** media

Medium's design evokes the feeling of a refined, minimalist literary journal, emphasizing content over chrome. The dominant use of a warm off-white background (#f7f4ed) creates a soft, inviting canvas for the high-contrast text. Typography is the cornerstone, with a stately serif font for headlines paired with a clean sans-serif for body text, creating a classic yet accessible reading experience. Accent colors are deliberately minimal, primarily using deep black for interactive elements to draw clear focus and a vibrant green for specific illustrative brand moments.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Vellum Background | #f7f4ed | `--color-vellum-background` | Page background, primary canvas. |
| Parchment White | #ffffff | `--color-parchment-white` | Secondary background for minor UI elements against warmer canvas. |
| Charcoal Black | #191919 | `--color-charcoal-black` | Primary text for headings and bold interactive elements like buttons. |
| Inkwell Black | #242424 | `--color-inkwell-black` | Standard body text color, dark but slightly softer than charcoal black for readability. |
| Book Text Gray | #333333 | `--color-book-text-gray` | Main body text, general text accents, and borders. |
| Muted Text Gray | #6b6b6b | `--color-muted-text-gray` | Secondary or muted text, such as footer links and captions. |
| Story Green | #50B33A | `--color-story-green` | Brand accent for illustrative elements and visual flair, marking the creative, organic aspect of the brand. |

## Tokens — Typography

### medium-content-sans-serif-font

- **Token:** `--font-medium-content-sans-serif-font`
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** 0
- **Role:** Content body text, designed for extended reading passages. Its custom nature likely provides specific readability optimizations.

### gt-super

- **Token:** `--font-gt-super`
- **Weights:** 400
- **Sizes:** 120px
- **Line heights:** 0.83
- **Letter spacing:** -0.055
- **OpenType features:** "lnum" on, "pnum"
- **Role:** Display headlines and primary page titles. The wide letter-spacing creates a sense of gravitas and classic editorial style.

### sohne

- **Token:** `--font-sohne`
- **Weights:** 400
- **Sizes:** 13px, 14px, 20px, 22px
- **Line heights:** 1.27, 1.40, 1.43, 1.54
- **Letter spacing:** 0
- **Role:** Body text, navigation links, and button labels. Its clean sans-serif nature provides high readability for continuous reading.

### Times

- **Token:** `--font-times`
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.2
- **Role:** Times — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.27 | — | `--text-caption` |
| body | 16px | 1.2 | — | `--text-body` |
| subheading | 20px | 1.43 | — | `--text-subheading` |
| heading-sm | 22px | 1.54 | — | `--text-heading-sm` |
| display | 120px | 0.83 | -6.6px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 1386px |
| pillButtons | 1980px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Primary Filled Button

**Role:** Call to action button for primary actions.

Filled with Charcoal Black (#191919), text in Parchment White (#ffffff). Rounded corners set extremely high at 1386px for a pill shape. Padding is 8px vertical, 16px horizontal.

### Pill Accent Button

**Role:** Secondary call to action button, used primarily in navigation.

Filled with Charcoal Black (#191919), text in Parchment White (#ffffff). Features significantly higher rounded corners at 1980px, creating a distinct pill shape. Padding is 8px vertical, 20px horizontal.

### Header Navigation Link

**Role:** Standard text link within the header.

Uses Inkwell Black (#242424) text, font family 'sohne' weight 400, size 14px, line height 1.40. No specific padding but follows element spacing of 16px.

### Footer Navigation Link

**Role:** Muted text links in the footer.

Uses Muted Text Gray (#6b6b6b) text, font family 'sohne' weight 400, size 13px, line height 1.27. Organized with element gaps.

## Do's and Don'ts

### Do

- Do use Vellum Background (#f7f4ed) as the primary page background to maintain the soft, inviting tone.
- Do apply gt-super for headlines at weight 400 with 'lnum' and 'pnum' font features enabled for distinct editorial typography.
- Do use Charcoal Black (#191919) for primary interactive elements like buttons and primary text, and Inkwell Black (#242424) for standard body text.
- Do use a generous horizontal padding of 16px or 20px for buttons to emphasize their pill shape.
- Do rely on a minimal set of neutral colors for UI elements, reserving Story Green (#50B33A) exclusively for brand illustrations and impactful visuals.
- Do maintain element gaps of 16px between most inline UI elements to ensure comfortable density.

### Don't

- Don't use strong, saturated colors for backgrounds or text, which would disrupt the subtle and content-focused aesthetic.
- Don't add shadows or heavy borders to UI components; design should feel flat and integrated with the canvas.
- Don't deviate from the established pill shapes for buttons; all interactive buttons should have extremely high border radii.
- Don't introduce additional serif fonts; the contrast between gt-super and sohne (or medium-content-sans-serif-font) is a core part of the identity.
- Don't animate UI elements with excessive complexity or duration beyond the 'ease' timing and 0.3s duration for subtle transitions.
- Don't use dense layouts; ensure comfortable spacing with a base unit of 8px and larger gaps for sections.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Vellum Background | #f7f4ed | Base page background |
| 1 | Parchment White | #ffffff | Subtle surface for minor UI elements or specific content blocks |

## Imagery

The site uses a combination of abstract, illustrative graphics and highly stylized conceptual visuals. The key pieces include a hand drawing with a pen, geometric patterns (possibly related to design or mathematics), and a bold, illustrative flower in Story Green (#50B33A). Imagery is used decoratively, providing visual metaphors for 'stories & ideas' rather than literal representations, enhancing the brand's creative and thoughtful atmosphere. Icons are minimal, primarily functional, and likely monochrome.

## Layout

The layout is predominantly content-focused, utilizing a maximum width for readability while allowing key elements like the hero illustration to span wider. The hero section features a large, centered headline (`gt-super` 120px) under a sticky top navigation bar. Content is arranged with clear vertical separation between sections (64px `sectionGap`), often with text blocks and illustrative elements in a balanced composition. The footer is minimalistic, presenting links in a compact horizontal arrangement. The overall impression is spacious and breathable, prioritizing legibility and a calm reading experience.

## Similar Brands

- **The New York Times** — Emphasizes classic serif typography for headlines and a strong content-over-chrome aesthetic with a focus on readability.
- **Farnam Street Blog** — Uses a clean, minimalist layout with a warm off-white background and high-contrast text, prioritizing a focused reading experience.
- **Substack** — Provides a platform for individual writers with a similar emphasis on readable content, clear typography, and minimal UI distractions, often using a single brand accent color.
- **WordPress.com** — Offers blogging and publishing tools with a focus on simple, elegant themes that prioritize text display and ease of use, often with muted color palettes.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-vellum-background: #f7f4ed;
  --color-parchment-white: #ffffff;
  --color-charcoal-black: #191919;
  --color-inkwell-black: #242424;
  --color-book-text-gray: #333333;
  --color-muted-text-gray: #6b6b6b;
  --color-story-green: #50B33A;
  --font-medium-content-sans-serif-font: 'medium-content-sans-serif-font', ui-sans-serif, system-ui, sans-serif;
  --font-gt-super: 'gt-super', ui-sans-serif, system-ui, sans-serif;
  --font-sohne: 'sohne', ui-sans-serif, system-ui, sans-serif;
  --font-times: 'Times', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.27;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.43;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.54;
  --text-display: 120px;
  --leading-display: 0.83;
  --tracking-display: -6.6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --radius-buttons: 1386px;
  --radius-pillbuttons: 1980px;
  --surface-vellum-background: #f7f4ed;
  --surface-parchment-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-vellum-background: #f7f4ed;
  --color-parchment-white: #ffffff;
  --color-charcoal-black: #191919;
  --color-inkwell-black: #242424;
  --color-book-text-gray: #333333;
  --color-muted-text-gray: #6b6b6b;
  --color-story-green: #50B33A;
  --font-medium-content-sans-serif-font: 'medium-content-sans-serif-font', ui-sans-serif, system-ui, sans-serif;
  --font-gt-super: 'gt-super', ui-sans-serif, system-ui, sans-serif;
  --font-sohne: 'sohne', ui-sans-serif, system-ui, sans-serif;
  --font-times: 'Times', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.27;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.43;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.54;
  --text-display: 120px;
  --leading-display: 0.83;
  --tracking-display: -6.6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --radius-buttons: 1386px;
  --radius-pillbuttons: 1980px;
  --surface-vellum-background: #f7f4ed;
  --surface-parchment-white: #ffffff;
}
```
