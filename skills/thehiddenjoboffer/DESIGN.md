---
version: alpha
name: "Thehiddenjoboffer"
description: "Thehiddenjoboffer.net employs a subtle, dark-themed aesthetic with a strong emphasis on spaciousness and restrained interactivity. Its visual identity centers around a deep violet canvas, accented by lighter purples and a 'velvet gray' for muted text and borders. Typography is clean and direct, relying on a system sans-serif contrasted with bold headlines. The overall impression is one of quiet, understated elegance, with minimal elements allowing content to breathe."
theme: "dark"
industry: "other"
source_url: "https://thehiddenjoboffer.net"
refero_style_id: "35f96e5f-f48a-4158-be2f-293a45c81fa3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515198569-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515198569-thumb.jpg"
extracted_at: "2026-04-30T02:13:53.053Z"
---

# Thehiddenjoboffer — Style Reference

> deep violet canvas, quiet atmosphere

**Theme:** dark

**Industry:** other

Thehiddenjoboffer.net employs a subtle, dark-themed aesthetic with a strong emphasis on spaciousness and restrained interactivity. Its visual identity centers around a deep violet canvas, accented by lighter purples and a 'velvet gray' for muted text and borders. Typography is clean and direct, relying on a system sans-serif contrasted with bold headlines. The overall impression is one of quiet, understated elegance, with minimal elements allowing content to breathe.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Violet | #5e42a6 | `--color-deep-violet` | Primary background for hero and main page sections, creating a dark, immersive canvas |
| Aubergine | #493382 | `--color-aubergine` | Subtler background for footer and secondary content blocks, providing depth within the violet palette |
| Velvet Gray | #a29cb0 | `--color-velvet-gray` | Muted text, hairline borders, and decorative lines. Its cool tone adds a sophisticated counterpoint to the violet |
| Lunar White | #ffffff | `--color-lunar-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Fog Gray | #79718d | `--color-fog-gray` | Fine borders and very subtle text elements, appearing muted against the violet background |

## Tokens — Typography

### Arial

- **Token:** `--font-arial`
- **Substitute:** system-ui
- **Weights:** 400, 700
- **Sizes:** 10px, 14px, 17px, 22px, 48px
- **Line heights:** 1.00, 1.50, 1.75
- **Letter spacing:** 0.2500em
- **Role:** A minimal sans-serif choice for both headings and body text, ensuring direct readability. The tight line height of 1.00 for 48px headings creates a compact, strong visual presence, while the wider 1.50-1.75 for smaller text offers comfort.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0.25px | `--text-caption` |
| body-sm | 14px | 1.75 | 0.25px | `--text-body-sm` |
| body | 17px | 1.75 | 0.25px | `--text-body` |
| subheading | 22px | 1.5 | 0.25px | `--text-subheading` |
| display | 48px | 1 | 0.25px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-14 | 14px | `--spacing-14` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-69 | 69px | `--spacing-69` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 31.2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1113px |
| sectionGap | 43px |
| elementGap | 21px |

## Components

### Outline Pill Button

**Role:** Primary action button, providing a clear call to action without a filled background, maintaining the light touch of the design.

Outline button with a border of 1px solid 'Lunar White' (#ffffff), 'Lunar White' (#ffffff) text, and 31.2px border-radius. Padding is 39px horizontally and 14px vertically. Text is Arial at 14px weight 400 with 0.25em letter-spacing.

### Navigation Link

**Role:** Discreet navigation items in the sidebar, providing subtle guidance.

Text link in 'Velvet Gray' (#a29cb0) using Arial at 10px weight 400, with a 1px solid 'Velvet Gray' (#a29cb0) border-bottom.

### Dominant Headline

**Role:** High-impact headlines, designed to quickly convey key information.

Large text in Lunar White (#ffffff), Arial at 48px weight 700 with a line-height of 1.0 and 0.25em letter-spacing.

## Do's and Don'ts

### Do

- Use 'Deep Violet' (#5e42a6) as the default background for large hero sections and primary page areas.
- Apply 'Aubergine' (#493382) for content blocks or footers to introduce subtle tonal shifts without breaking the dark theme.
- Set dominant headlines (48px) in 'Lunar White' (#ffffff) and Arial 700 with a tight line height of 1.0 for maximum impact.
- Use 'Velvet Gray' (#a29cb0) for all hairline borders and muted textual elements to maintain a sophisticated contrast.
- Maintain a clear visual hierarchy by limiting prominent colors to backgrounds and primary text, and using 'Velvet Gray' (#a29cb0) for secondary details.
- Ensure interactive elements like buttons have a high border-radius of 31.2px, creating a distinctive pill shape.
- Implement consistent horizontal padding of 39px and vertical padding of 14px for interactive elements.

### Don't

- Avoid introducing bright, saturated colors outside the specified violet range, as this contradicts the site's muted palette.
- Do not use heavy box-shadows or gradients, as the design philosophy leans towards flat surfaces and minimal elevation.
- Do not vary font families; stick to the specified Arial (or system-ui) to maintain typographic consistency.
- Avoid dense layouts; prioritize generous spacing with '21px' as the base element gap and '43px' for section gaps.
- Do not use filled buttons as primary actions; prefer the outlined pill button style with white text on a dark background.
- Do not use dark text colors on the 'Aubergine' (#493382) or 'Deep Violet' (#5e42a6) backgrounds, as contrast will be insufficient.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Deep Violet Canvas | #5e42a6 | Dominant background for main content areas and hero sections. |
| 2 | Aubergine Base | #493382 | Background for footer and subtly distinct content blocks, offering a darker shade within the violet range. |

## Imagery

The site uses minimal imagery, primarily relying on abstract, light-line vector graphics on the main violet background. These lines form geometric patterns that provide subtle texture and depth without distracting from the core content or introducing photographic elements. Icons are not visible, suggesting a text-dominant, clean UI approach prioritizing pure typography and layout.

## Layout

The layout is characterized by a two-column structure. A narrow, dark violet sidebar on the left (`#312450`, inferred from contrast data as background for #a29cb0 links) houses navigation, while the main content area occupies the majority of the screen with a broader, lighter violet background (`#5e42a6`). Content is primarily centered within this main area, featuring a large headline, explanatory body text, and a centered interactive button. The max-width of the content appears to be around 1113px, ensuring a contained experience even on wider screens. Vertical rhythm is established through generous section gaps of 43px.

## Similar Brands

- **Fathom Analytics** — Uses a dark, minimalist UI with a single accent color for interaction and a focus on clean typography.
- **Linear** — Employs a sophisticated dark theme with subtle background variations and a primary focus on UI elements over heavy imagery.
- **Notion** — Known for a clean, spacious aesthetic that prioritizes content and typography, even in its darker themes.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-violet: #5e42a6;
  --color-aubergine: #493382;
  --color-velvet-gray: #a29cb0;
  --color-lunar-white: #ffffff;
  --color-fog-gray: #79718d;
  --font-arial: 'Arial', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.25px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.75;
  --tracking-body-sm: 0.25px;
  --text-body: 17px;
  --leading-body: 1.75;
  --tracking-body: 0.25px;
  --text-subheading: 22px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0.25px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: 0.25px;
  --spacing-14: 14px;
  --spacing-21: 21px;
  --spacing-35: 35px;
  --spacing-39: 39px;
  --spacing-43: 43px;
  --spacing-69: 69px;
  --radius-buttons: 31.2px;
  --surface-deep-violet-canvas: #5e42a6;
  --surface-aubergine-base: #493382;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-violet: #5e42a6;
  --color-aubergine: #493382;
  --color-velvet-gray: #a29cb0;
  --color-lunar-white: #ffffff;
  --color-fog-gray: #79718d;
  --font-arial: 'Arial', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.25px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.75;
  --tracking-body-sm: 0.25px;
  --text-body: 17px;
  --leading-body: 1.75;
  --tracking-body: 0.25px;
  --text-subheading: 22px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0.25px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: 0.25px;
  --spacing-14: 14px;
  --spacing-21: 21px;
  --spacing-35: 35px;
  --spacing-39: 39px;
  --spacing-43: 43px;
  --spacing-69: 69px;
  --radius-buttons: 31.2px;
  --surface-deep-violet-canvas: #5e42a6;
  --surface-aubergine-base: #493382;
}
```
