---
version: alpha
name: "KeepGrading"
description: "KeepGrading employs a deep, dark canvas as its primary backdrop, featuring a striking black and white contrast. Typography is the main vehicle for conveying information, appearing in clean geometric sans-serifs. Interactive elements are subtly outlined rather than boldly filled, maintaining the overall sleek, low-key aesthetic, ensuring that images and video content are the focal point."
theme: "dark"
industry: "media"
source_url: "https://www.keepgrading.com"
refero_style_id: "2f0a053b-0596-4212-a4f4-8a7b580acb90"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514973022-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514973022-thumb.jpg"
extracted_at: "2026-04-30T02:09:47.543Z"
---

# KeepGrading — Style Reference

> Gallery in an Empty Room

**Theme:** dark

**Industry:** media

KeepGrading employs a deep, dark canvas as its primary backdrop, featuring a striking black and white contrast. Typography is the main vehicle for conveying information, appearing in clean geometric sans-serifs. Interactive elements are subtly outlined rather than boldly filled, maintaining the overall sleek, low-key aesthetic, ensuring that images and video content are the focal point.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #080808 | `--color-void-black` | Page backgrounds, card surfaces, primary text for dark backgrounds |
| Canvas White | #f8f8f8 | `--color-canvas-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Onyx Shadow | #000000 | `--color-onyx-shadow` | Illustrative fill for icons and SVG elements, creating subtle depth against darker backgrounds |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px, 20px
- **Line heights:** 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Body copy and navigation links — a functional, legible sans-serif for everyday content.

### Cabinet Grotesk

- **Token:** `--font-cabinet-grotesk`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 16px, 20px, 24px, 96px
- **Line heights:** 1.00, 1.33, 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Headings and prominent display text — a custom geometric sans-serif that provides a distinct, modern voice without excessive ornamentation.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 16px | 1.4 | — | `--text-caption` |
| body-sm | 20px | 1.4 | — | `--text-body-sm` |
| body | 24px | 1.3 | — | `--text-body` |
| body-lg | 96px | 1.3 | — | `--text-body-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 160px |
| buttons | 9999px |
| navigation | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 24px |
| elementGap | 15px |

## Components

### Navigation Link

**Role:** Top-level navigation items and secondary links.

Inter font, 16px, weight 400, Canvas White text (#f8f8f8) on Void Black background (#080808). Hover state shows a subtle underline. Radius 9999px for rounded visual shape on hover/active.

### Primary Heading

**Role:** Main page titles and large section headings.

Cabinet Grotesk font, 96px, weight 400, Canvas White text (#f8f8f8).

### Ghost Button

**Role:** Secondary calls to action or navigation elements.

Canvas White text (#f8f8f8) with a 1px Canvas White border (#f8f8f8). Void Black background (#080808). Inter font, 16px, weight 400. Padding 12px vertical, 24px horizontal. Full pill shape radius 9999px.

### Media Card

**Role:** Containers for images and videos with associated text.

Void Black background (#080808). Text in Canvas White (#f8f8f8). Features a significantly rounded border radius of 160px, making the cards distinctively soft-edged.

### Menu Toggle Button

**Role:** Hamburger menu icon for mobile or hidden navigation.

A circular button with a 2px Canvas White stroke (#f8f8f8) and an Onyx Shadow fill (#000000) for the icon. Radius 9999px for a perfect circle.

## Do's and Don'ts

### Do

- Prioritize Void Black (#080808) for all primary background surfaces and Canvas White (#f8f8f8) for primary text to maintain high contrast.
- Use Cabinet Grotesk for all primary headings and display text, reserving Inter for body copy and navigation.
- Employ a 9999px border-radius for all interactive buttons and navigation elements to achieve a fully rounded, 'pill' shape.
- Apply a 160px border-radius to all content-bearing cards, giving them a distinctively soft, organic container.
- Maintain a comfortable rhythm with element gaps set to 15px and general section padding at 48px.
- Ensure all interactive elements, where not a solid fill, use a 1px border of Canvas White (#f8f8f8) against the dark background.

### Don't

- Do not introduce strong accent colors; the palette is intentionally monochrome, letting imagery provide visual interest.
- Avoid using filled buttons as primary calls to action; prefer ghost buttons with Canvas White borders.
- Do not use generic square or slightly rounded corners for cards; the 160px radius is a signature element.
- Do not deviate from the specified font families; Cabinet Grotesk and Inter are integral to the brand's typographic identity.
- Avoid tight spacing; maintain the comfortable density established by 15px element gaps and 48px section padding.

## Imagery

This site prominently features high-quality, full-color photography and video stills. Imagery is generally contained within cards with 160px rounded corners, creating a soft-edged visual presentation. The visuals serve as the primary content, showcasing work examples and creating atmospheric context for the studio's services. The density is image-heavy, with substantial visual real estate dedicated to showcasing product shots often in lifestyle or professional contexts, appearing unmasked with raw edges within their rounded containers. Icons are kept minimal, outlined, and monochromatic, serving purely functional roles like menu toggles.

## Layout

The page operates on a full-bleed black background (#080808) that expands to the edges of the viewport, with content centered. Featured image/video content is displayed within distinctively rounded cards (160px radius) that float within this dark space. The hero section likely features a large, impacting visual due to the nature of the brand. Sections appear to maintain consistent vertical spacing of 48px, creating clear divisions. Content is primarily image-dominant, using a grid-like arrangement for projects.

## Similar Brands

- **Aardman Digital** — Heavy use of dark backgrounds to showcase visual work, relying on high-contrast text and minimal UI elements.
- **Unit9** — Portfolio-centric site that prioritizes large visuals and video over heavy UI, using a simple dark theme.
- **PostPanic** — Film/animation studio sites that often feature dark interfaces with subtle typography to let their visual projects stand out.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #080808;
  --color-canvas-white: #f8f8f8;
  --color-onyx-shadow: #000000;
  --font-inter: 'Inter', system-ui;
  --font-cabinet-grotesk: 'Cabinet Grotesk', sans-serif;
  --text-caption: 16px;
  --leading-caption: 1.4;
  --text-body-sm: 20px;
  --leading-body-sm: 1.4;
  --text-body: 24px;
  --leading-body: 1.3;
  --text-body-lg: 96px;
  --leading-body-lg: 1.3;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --radius-cards: 160px;
  --radius-buttons: 9999px;
  --radius-navigation: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #080808;
  --color-canvas-white: #f8f8f8;
  --color-onyx-shadow: #000000;
  --font-inter: 'Inter', system-ui;
  --font-cabinet-grotesk: 'Cabinet Grotesk', sans-serif;
  --text-caption: 16px;
  --leading-caption: 1.4;
  --text-body-sm: 20px;
  --leading-body-sm: 1.4;
  --text-body: 24px;
  --leading-body: 1.3;
  --text-body-lg: 96px;
  --leading-body-lg: 1.3;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --radius-cards: 160px;
  --radius-buttons: 9999px;
  --radius-navigation: 9999px;
}
```
