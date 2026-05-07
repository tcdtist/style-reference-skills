---
version: alpha
name: "Volume"
description: "Volume's design system evokes an editorial quality through stark contrasts and classic typographic choices. The visual style pairs deep, rich imagery with highly legible, monochrome UI elements. Text is typically dark on light, using a limited color palette that emphasizes clarity and content over decorative flair. Subtle radii are used primarily for interactive elements, while backgrounds remain sharp, creating a sophisticated and somewhat archival feel."
theme: "light"
industry: "media"
source_url: "https://vol.co"
refero_style_id: "edc0c03e-8c20-4e22-badd-2735fcb9f4a8"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519877971-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519877971-thumb.jpg"
extracted_at: "2026-04-30T03:31:40.481Z"
---

# Volume — Style Reference

> Editorial archive, high contrast.

**Theme:** light

**Industry:** media

Volume's design system evokes an editorial quality through stark contrasts and classic typographic choices. The visual style pairs deep, rich imagery with highly legible, monochrome UI elements. Text is typically dark on light, using a limited color palette that emphasizes clarity and content over decorative flair. Subtle radii are used primarily for interactive elements, while backgrounds remain sharp, creating a sophisticated and somewhat archival feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, input fields, primary surface for content |
| Ink Black | #272727 | `--color-ink-black` | Primary text, headings, navigation links, dark surface backgrounds |
| Ash Gray | #717171 | `--color-ash-gray` | Muted text, secondary information, borders for form elements |
| Stone Button | #949494 | `--color-stone-button` | Default button background, subtle accent |
| Obsidian Pill | #000000 | `--color-obsidian-pill` | Deep canvas for dark sections, primary dark surfaces, and high-contrast framing |
| Whisper Text | #cdcccc | `--color-whisper-text` | Placeholder text in dark input fields |
| Crimson Pill | #962921 | `--color-crimson-pill` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Scarlet Pill | #c52910 | `--color-scarlet-pill` | Orange wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Blaze Pill | #e75a00 | `--color-blaze-pill` | Orange wash for highlight backgrounds, decorative bands, and soft emphasis behind content |

## Tokens — Typography

### Messina Sans

- **Token:** `--font-messina-sans`
- **Substitute:** system-ui, sans-serif
- **Weights:** 300, 350
- **Sizes:** 14px, 18px, 20px, 32px, 50px, 80px
- **Line heights:** 1.00, 1.18, 1.40, 2.00
- **Letter spacing:** -0.0200em at 50px, 0.0700em at 14px
- **Role:** The primary typeface for all text. Its lightness (300) for large headlines creates a refined, understated impact, while the moderate spacing (0.0700em) in smaller sizes ensures legibility and a classic, almost monospaced editorial feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 2 | 1.4px | `--text-caption` |
| body | 18px | 1.4 | — | `--text-body` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading-sm | 32px | 1.18 | — | `--text-heading-sm` |
| heading | 50px | 1.18 | -1px | `--text-heading` |
| display | 80px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-60 | 60px | `--spacing-60` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| pills | 50px |
| inputs | 0px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1400px |
| sectionGap | 45px |
| cardPadding | 30px |
| elementGap | 10px |

## Components

### Filled Button

**Role:** Primary action button for sign-ups or confirmations.

Solid 'Stone Button' (#949494) background, 'Canvas White' (#ffffff) text, with sharp 0px corners and generous vertical padding (18.75px top/bottom).

### Default Card

**Role:** Container for products, articles, or featured content.

Transparent background with 0px border-radius, relying on imagery for visual separation. No explicit padding, content often full-bleed to card edges.

### Funding Status Pill (Obsidian)

**Role:** Small, rounded label indicating successful funding or status.

Dark 'Obsidian Pill' (#000000) background with 50px border-radius, 'Canvas White' (#ffffff) text. Padding is 7.5px vertical, 12px horizontal.

### Funding Status Pill (Crimson)

**Role:** Small, rounded label indicating specific campaign status.

Dark red 'Crimson Pill' (#962921) background with 50px border-radius, 'Canvas White' (#ffffff) text. Padding is 7.5px vertical, 12px horizontal.

### Funding Status Pill (Scarlet)

**Role:** Small, rounded label indicating urgent campaign status.

Bright red 'Scarlet Pill' (#c52910) background with 50px border-radius, 'Canvas White' (#ffffff) text. Padding is 7.5px vertical, 12px horizontal.

### Funding Status Pill (Blaze)

**Role:** Small, rounded label indicating high visibility campaign status (e.g. sold out).

Orange 'Blaze Pill' (#e75a00) background with 50px border-radius, 'Canvas White' (#ffffff) text. Padding is 7.5px vertical, 12px horizontal.

### Light Input Field

**Role:** Standard input field for light backgrounds.

Background is 'Canvas White' (#ffffff), text 'Ink Black' (#272727). Features a 1px solid 'Ash Gray' (#717171) bottom border and 0px border-radius. Padding is 12.5px vertical, 16.6667px horizontal.

### Dark Input Field

**Role:** Standard input field for dark backgrounds.

Background is 'Ink Black' (#272727), text 'Whisper Text' (#cdcccc). Features a 1px solid 'Ash Gray' (#717171) bottom border and 0px border-radius. Minimal vertical padding, 13.0435px horizontal.

## Do's and Don'ts

### Do

- Use 'Ink Black' (#272727) for all primary body and heading text for high contrast on light backgrounds.
- Apply Messina Sans weight 300 for display and large headings, and weight 350 for body text and navigation to maintain an editorial tone.
- Structure layouts with a maximum width of 1400px and ensure content is centered within this constraint.
- Employ 0px border-radius for main containers, buttons, and input fields to sustain a sharp, modern aesthetic, reserving 50px for small status pills.
- Utilize 'Canvas White' (#ffffff) as the dominant page and card background color to provide a clean reading experience.
- Maintain a comfortable element spacing of 10px between interactive items and form elements.
- Use distinct accent colors for 'Funding Status Pills' to immediately convey status or category, differentiating them from the main content.

### Don't

- Avoid using decorative shadows or excessive gradients; keep surfaces flat and defined by solid colors or subtle borders.
- Do not introduce additional typefaces; Messina Sans is the sole typographic voice of the brand.
- Do not use highly saturated colors for large UI elements; confine chromatic accents to small, functional components like status pills.
- Refrain from altering the established 0px border-radius on major components, as this is a core aspect of the brand's sharp visual identity.
- Do not deviate from the high-contrast color pairings for text and backgrounds to preserve readability.
- Avoid arbitrary uses of spacing; adhere to the 10px element gap and 30px card padding for consistent rhythm.
- Do not apply `0.0700em` letter-spacing to large headlines; it is specifically for smaller text to enhance legibility.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page and card backgrounds. |
| 1 | Stone Button | #949494 | Background for default interactive elements. |
| 2 | Obsidian Pill | #000000 | Elevated card pill backgrounds for status. |

## Imagery

The visual language is characterized by bold, impactful photography or abstract graphics that often serve as full-bleed backgrounds for content sections. Imagery is central to defining specific content blocks, with text overlaid, often contained within semi-transparent overlays. When visible, icons appear to follow a simple, geometric style, primarily monochrome or using brand accent colors for highlighting. The overall impression is image-heavy, using visuals to establish mood and context rather than just decoration, with content often presented as product showcases.

## Layout

The page layout utilizes a max-width contained model (1400px) with content sections centered. The hero sections are full-bleed with large background images and overlaid text, establishing a strong visual anchor. The section rhythm appears to be based on distinct content blocks, some with dark backgrounds and light text, others following the primary light theme. Content often alternates between large imagery and text blocks, suggesting a journalistic or editorial spread. There's no evident grid for cards, which seem to be presented in sequential blocks rather than uniform columns. Navigation is a minimalist top bar, sticky or otherwise. The density is comfortable, providing sufficient breathing room around key content.

## Similar Brands

- **AIGA Journal** — Classic editorial layout, strong typography, and emphasis on visual content over decorative UI.
- **The New York Times** — High-contrast text on clean backgrounds, conservative use of color, and focus on legibility.
- **monocle.com** — Understated navigation, clean content presentation, and reliance on photography to establish mood.
- **Taschen** — Strong visual bookseller aesthetic with prominent imagery and clear, uncluttered text areas.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #272727;
  --color-ash-gray: #717171;
  --color-stone-button: #949494;
  --color-obsidian-pill: #000000;
  --color-whisper-text: #cdcccc;
  --color-crimson-pill: #962921;
  --color-scarlet-pill: #c52910;
  --color-blaze-pill: #e75a00;
  --font-messina-sans: 'Messina Sans', system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 2;
  --tracking-caption: 1.4px;
  --text-body: 18px;
  --leading-body: 1.4;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.18;
  --text-heading: 50px;
  --leading-heading: 1.18;
  --tracking-heading: -1px;
  --text-display: 80px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-45: 45px;
  --spacing-60: 60px;
  --radius-cards: 0px;
  --radius-pills: 50px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --surface-canvas-white: #ffffff;
  --surface-stone-button: #949494;
  --surface-obsidian-pill: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #272727;
  --color-ash-gray: #717171;
  --color-stone-button: #949494;
  --color-obsidian-pill: #000000;
  --color-whisper-text: #cdcccc;
  --color-crimson-pill: #962921;
  --color-scarlet-pill: #c52910;
  --color-blaze-pill: #e75a00;
  --font-messina-sans: 'Messina Sans', system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 2;
  --tracking-caption: 1.4px;
  --text-body: 18px;
  --leading-body: 1.4;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.18;
  --text-heading: 50px;
  --leading-heading: 1.18;
  --tracking-heading: -1px;
  --text-display: 80px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-45: 45px;
  --spacing-60: 60px;
  --radius-cards: 0px;
  --radius-pills: 50px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --surface-canvas-white: #ffffff;
  --surface-stone-button: #949494;
  --surface-obsidian-pill: #000000;
}
```
