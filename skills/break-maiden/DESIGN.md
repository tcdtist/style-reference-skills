---
version: alpha
name: "Break Maiden"
description: "Break Maiden employs a high-contrast cinematic dark mode, characterized by stark black backgrounds and bold, expansive white typography. The design emphasizes content-first presentation, with large product imagery and minimal UI adornment. Typography is used as a primary design element, leveraging a custom, display-style sans-serif for striking headlines. Interaction is subtle, relying on ghost elements and border changes rather than saturated color for feedback, creating a focused and dramatic visual experience."
theme: "dark"
industry: "agency"
source_url: "https://www.breakmaiden.co"
refero_style_id: "02610b06-d16e-47bd-a1ea-18979a9ed4f5"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520445024-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520445024-thumb.jpg"
extracted_at: "2026-04-30T03:41:05.192Z"
---

# Break Maiden — Style Reference

> High-contrast cinematic dark

**Theme:** dark

**Industry:** agency

Break Maiden employs a high-contrast cinematic dark mode, characterized by stark black backgrounds and bold, expansive white typography. The design emphasizes content-first presentation, with large product imagery and minimal UI adornment. Typography is used as a primary design element, leveraging a custom, display-style sans-serif for striking headlines. Interaction is subtle, relying on ghost elements and border changes rather than saturated color for feedback, creating a focused and dramatic visual experience.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Canvas | #000000 | `--color-midnight-canvas` | Page backgrounds, card backgrounds, button backgrounds for ghost buttons — provides a deep, immersive dark theme |
| Ghostly White | #ffffff | `--color-ghostly-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Muted Stone | #8e8e8e | `--color-muted-stone` | Secondary text, subtle navigation accents, muted informational text — offers a softer contrast than Ghostly White for less prominent content |

## Tokens — Typography

### Martin

- **Token:** `--font-martin`
- **Substitute:** Anton
- **Weights:** 400
- **Sizes:** 153px
- **Role:** Primary display headlines — its large size and standard weight command attention, creating a bold, statement-making visual.

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** Arial
- **Weights:** 400, 500
- **Sizes:** 25px
- **Line heights:** 1.00
- **Role:** Navigation, secondary headings, card titles — a versatile sans-serif used for structure and clear content labeling.

### America

- **Token:** `--font-america`
- **Substitute:** Open Sans
- **Weights:** 400
- **Sizes:** 19px, 22px
- **Line heights:** 1.00, 1.25, 1.50
- **Role:** Body text, links, descriptions — used for general content, providing readability with classic proportions.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-110 | 110px | `--spacing-110` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 43px |
| cardPadding | 0px |
| elementGap | 18px |

## Components

### Primary Ghost Button

**Role:** Subtle interactive element for primary actions.

Background: Midnight Canvas (#000000). Text: Ghostly White (#ffffff). Border: 1.5px solid Ghostly White (#ffffff). Radius: 0px. Padding: 17.51px vertical, 77.824px horizontal.

### Navigation Link

**Role:** Top-level navigation items.

Text color: Muted Stone (#8e8e8e) for inactive, Ghostly White (#ffffff) for active/hover. Font: Helvetica Neue, 25px, weight 400.

### Product Grid Card

**Role:** Container for showcasing product imagery.

Background: Midnight Canvas (#000000). Border: None. Box Shadow: None. Radius: 0px. Padding: 0px. Contains an image and text overlay.

### Hero Headline

**Role:** Dominant text element at the top of the page.

Text: Ghostly White (#ffffff). Font: Martin, 153px, weight 400, letter-spacing normal. Displays without additional padding or background.

## Do's and Don'ts

### Do

- Use Midnight Canvas (#000000) as the default background for all main sections and UI surfaces.
- Apply Ghostly White (#ffffff) for all primary text, headlines, and active states to maintain high contrast.
- Utilize the Martin font at 153px for primary page headings, leveraging its large size as a key visual element.
- Ensure all interactive elements, such as buttons and cards, maintain a 0px border-radius for a sharp, angular aesthetic.
- Implement a 1.5px solid Ghostly White (#ffffff) border for button outlines and subtle interactive element highlights.
- Employ a section gap of 43px to create distinct visual divisions between major content blocks.
- Use a comfortable element gap of 18px for spacing between most internal elements like text blocks or image captions.

### Don't

- Avoid using saturated accent colors for primary interactive states; rely on Ghostly White (#ffffff) borders and text for feedback.
- Do not introduce rounded corners (border-radius > 0px) on any components or elements.
- Refrain from using drop shadows or complex elevation effects; the design is intentionally flat and high-contrast.
- Do not deviate from the specified font families; avoid system defaults unless explicitly defined.
- Minimize extraneous UI elements; the design prioritizes content and typography as primary visual drivers.
- Avoid mixing different background colors in adjacent sections; maintain a consistent Midnight Canvas (#000000) base.
- Do not use overly complex or busy imagery; opt for clean, focused product photography or stark graphics.

## Similar Brands

- **Huge Inc.** — High-contrast dark theme with bold typography and prominent, graphic layouts for case studies.
- **Work & Co** — Minimalist dark aesthetic, large image blocks within grids, and a focus on stark typography as a visual element.
- **Basic/Dept** — Content-forward portfolio sites with strong photographic elements and a clean, high-contrast, often dark interface.
- **Pentagram** — Emphasis on impactful typography and strong visual identity without excessive decorative elements, using a dark canvas to highlight work.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-canvas: #000000;
  --color-ghostly-white: #ffffff;
  --color-muted-stone: #8e8e8e;
  --font-martin: 'Martin', Anton;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-america: 'America', Open Sans;
  --spacing-0: 0px;
  --spacing-13: 13px;
  --spacing-18: 18px;
  --spacing-27: 27px;
  --spacing-43: 43px;
  --spacing-78: 78px;
  --spacing-110: 110px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-canvas: #000000;
  --color-ghostly-white: #ffffff;
  --color-muted-stone: #8e8e8e;
  --font-martin: 'Martin', Anton;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-america: 'America', Open Sans;
  --spacing-0: 0px;
  --spacing-13: 13px;
  --spacing-18: 18px;
  --spacing-27: 27px;
  --spacing-43: 43px;
  --spacing-78: 78px;
  --spacing-110: 110px;
  --radius-none: 0px;
}
```
