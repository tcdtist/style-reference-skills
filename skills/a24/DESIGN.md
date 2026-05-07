---
version: alpha
name: "A24"
description: "A24’s visual design is a stark, high-contrast exploration of cinematic black and white. It features an almost entirely achromatic palette, punctuated by bold, unapologetic typography that dictates hierarchy through size and placement rather than color. Layouts are spacious, almost sparse, creating a gallery-like feel where content commands attention. Interactive elements are minimal, often border-only or ghost-like, preserving the strong monochromatic aesthetic."
theme: "light"
industry: "media"
source_url: "https://a24films.com"
refero_style_id: "6afa22a6-bec8-47c3-b5ee-5d11d64902cb"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509600056-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509600056-thumb.jpg"
extracted_at: "2026-04-30T00:40:24.897Z"
---

# A24 — Style Reference

> Monochromatic cinematic gallery.

**Theme:** light

**Industry:** media

A24’s visual design is a stark, high-contrast exploration of cinematic black and white. It features an almost entirely achromatic palette, punctuated by bold, unapologetic typography that dictates hierarchy through size and placement rather than color. Layouts are spacious, almost sparse, creating a gallery-like feel where content commands attention. Interactive elements are minimal, often border-only or ghost-like, preserving the strong monochromatic aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Fog | #eeeeee | `--color-fog` | Page background (dominant canvas for light theme) |
| Graphite | #888888 | `--color-graphite` | Medium-contrast borders, control outlines, and structural separators. Do not promote it to the primary CTA color |
| Ash Gray | #cacaca | `--color-ash-gray` | Subtle border accents, fine print text |

## Tokens — Typography

### NB International Web

- **Token:** `--font-nb-international-web`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 10px, 11px, 12px, 13px, 15px, 18px, 21px, 74px
- **Line heights:** 0.92, 1.00, 1.07, 1.20, 1.23, 1.30, 1.32, 1.33, 1.50, 1.67, 1.92
- **Letter spacing:** -0.0400em at 74px, -0.0120em at 21px, -0.0090em at 18px
- **OpenType features:** "cpsp"
- **Role:** Primary typeface for all text content, including headings, body, and navigation. Its sans-serif geometry provides a crisp, modern feel, while varied letter spacing across sizes adapts its presence from impact to readability. The 'cpsp' feature indicates custom kerning for character spacing.

### NB International Mono Web

- **Token:** `--font-nb-international-mono-web`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 15px
- **Line heights:** 0.92
- **Letter spacing:** -0.0650em
- **Role:** Monospaced typeface used for specific data points or stylistic elements, offering a technical, precise contrast to the main font. Its characteristic tight letter spacing at 15px emphasizes its distinct, ordered appearance.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| heading-lg | 18px | 1.07 | -0.009px | `--text-heading-lg` |
| display | 74px | 0.92 | -0.04px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 96px |
| cardPadding | 22px |
| elementGap | 9px |

## Components

### Ghost Button - Light Theme

**Role:** Interactive element (e.g., 'Shop Now', 'Listen Now')

Transparent background, Canvas White text and border, 0px border-radius, 6px padding. This light theme ghost button allows text to stand out against a dark background, becoming a subtle call to action without being visually heavy.

### Ghost Button - Dark Theme

**Role:** Interactive element (e.g., 'Shop Now', 'Listen Now')

Transparent background, Midnight Ink text and border, 0px border-radius, 6px padding. This dark theme ghost button maintains a minimal, unobtrusive interactive element against a light background.

### Newsletter Modal Input

**Role:** Email input field within modals

Transparent background with Canvas White text, Midnight Ink border matching the modal's foreground, 0px border-radius, 22px vertical padding and 18px horizontal padding. Complements the dark modal aesthetic.

### Newsletter Modal Button

**Role:** Submit button for newsletter signup

Transparent background with Canvas White text, Canvas White border, 0px border-radius, 6px padding. This accentuates the button against the dark modal background.

### Navigation Link - Primary

**Role:** Main navigation items

Text link using NB International Web, weight 500, with Midnight Ink for the light theme and Canvas White for the dark theme. Underlines appear on hover/active states, not as static elements.

### Navigation Link - Muted

**Role:** Secondary navigation items or footer links

Text link using NB International Web, weight 400, in Graphite. Used for less prominent navigation elements to provide a subtle hierarchy.

### Modal Overlay

**Role:** Background for pop-up modals

Solid Midnight Ink background, often appearing as an opaque layer over content. Provides a strong visual separation for focused interaction.

## Do's and Don'ts

### Do

- Use Midnight Ink (#000000) as the primary text color on light backgrounds and Canvas White (#FFFFFF) for text on dark backgrounds to ensure high contrast.
- Apply NB International Web at weight 400 for all body copy and standard UI text, reserving weight 500 for bolder headings and key callouts.
- Maintain a 0px border-radius across all interactive elements, containers, and images to enforce a sharp, deliberate aesthetic.
- Utilize Ghost Buttons (transparent background, text matching its border color) for all primary actions, distinguishing them with text color and subtle borders rather than solid fills.
- Employ consistent vertical spacing of 96px for main section separation, establishing a clear rhythm and generous breathing room between content blocks.
- Prioritize text and bold typography as the primary means of conveying visual hierarchy; avoid decorative elements or heavy gradients.
- Use NB International Mono Web 15px with -0.0650em letter spacing for any stylized metadata or specific emphasis where a precise, technical tone is needed.

### Don't

- Do not introduce saturated colors; the palette is strictly achromatic with black, white, and a range of grays.
- Avoid using box-shadows or other elevation techniques; the design relies on flat surfaces and high contrast for definition.
- Do not use default browser link styling; all links should be explicitly styled with NB International Web and only reveal an underline on hover/focus.
- Do not introduce rounded corners; all elements should adhere to the strict 0px border-radius.
- Avoid excessive imagery; when images are used, they should be high-contrast, often black and white, and serve a functional or editorial purpose within the gallery-like layout.
- Do not add heavy borders or background fills to buttons; maintain the ghost button aesthetic.
- Avoid centered text blocks for large content sections; prefer left-aligned typography for readability and structured presentation.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Fog Canvas | #eeeeee | Primary page background for light-themed sections, offering a subtle, soft base. |
| 2 | Canvas White Panel | #ffffff | Elevated white panels or card-like structures on the Fog Canvas, providing contrast for content. |
| 3 | Midnight Ink Overlay | #000000 | Dominant background for full-bleed dark sections and modal overlays, creating stark contrast and focus. |

## Imagery

Imagery treatment varies. On light backgrounds, product shots often appear as contained, slightly offset elements. For editorials or film promotion, imagery can be full-bleed, high-contrast, black and white photography. There are no consistent rounded corners or masking; images are presented with sharp, raw edges. Icons are typically minimalist, outlined, and monochromatic, with a thin stroke weight. Imagery primarily serves to showcase products, present film stills or talent, and establish an editorial atmosphere, often functioning as large, impactful visual breaks between text-heavy sections. The density is moderate, allowing visuals to occupy significant space without overwhelming the text.

## Layout

The page primarily uses a max-width contained layout, though some sections, particularly on dark backgrounds, appear full-bleed. The hero pattern often involves a centered headline over a dark background or a split text+visual approach. Section rhythm is driven by alternating light (#eeeeee) and dark (#000000) bands, creating a distinct visual flow. Content is arranged in flexible patterns, including centered stacks for headlines and calls to action, as well as alternating text-left/image-right compositions. The absence of heavy grids creates a spacious, almost architectural feel. Navigation is handled by a minimal sticky top header with a hamburger menu for more options, reinforcing the clean, uncluttered aesthetic.

## Similar Brands

- **Apple (Product Pages)** — High-contrast, spacious layouts, and a focus on product visuals with minimal distracting UI elements, often using stark black and white.
- **Acne Studios** — Minimalist, high-fashion aesthetic with a strong emphasis on typography, monochromatic palettes, and unconventional spacing for an editorial feel.
- **The New York Times** — Strong typographic hierarchy, a largely achromatic palette for content, and clean, legible layout despite high information density (albeit different content focus).
- **SSENSE** — Editorial style with large images, strong typography, and a deliberate use of white space, creating a gallery-like product display.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-fog: #eeeeee;
  --color-graphite: #888888;
  --color-ash-gray: #cacaca;
  --font-nb-international-web: 'NB International Web', Inter;
  --font-nb-international-mono-web: 'NB International Mono Web', Space Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-heading-lg: 18px;
  --leading-heading-lg: 1.07;
  --tracking-heading-lg: -0.009px;
  --text-display: 74px;
  --leading-display: 0.92;
  --tracking-display: -0.04px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-54: 54px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-120: 120px;
  --radius-default: 0px;
  --surface-fog-canvas: #eeeeee;
  --surface-canvas-white-panel: #ffffff;
  --surface-midnight-ink-overlay: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-fog: #eeeeee;
  --color-graphite: #888888;
  --color-ash-gray: #cacaca;
  --font-nb-international-web: 'NB International Web', Inter;
  --font-nb-international-mono-web: 'NB International Mono Web', Space Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-heading-lg: 18px;
  --leading-heading-lg: 1.07;
  --tracking-heading-lg: -0.009px;
  --text-display: 74px;
  --leading-display: 0.92;
  --tracking-display: -0.04px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-54: 54px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-66: 66px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-120: 120px;
  --radius-default: 0px;
  --surface-fog-canvas: #eeeeee;
  --surface-canvas-white-panel: #ffffff;
  --surface-midnight-ink-overlay: #000000;
}
```
