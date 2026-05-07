---
version: alpha
name: "CHELSEA"
description: "Chelsea evokes a stark, filmic mood with a dark canvas and luminous text-based navigation. Typography is the primary visual element, given weight and presence through color and generous spacing. A single vivid blue accent color is reserved for interactive elements, creating points of distinct focus against the monochromatic backdrop. Components are minimal and flat, emphasizing content over decorative chrome, with an overall impression of focused elegance."
theme: "dark"
industry: "media"
source_url: "https://www.chelsea.com"
refero_style_id: "905beb8c-9788-4ff4-888b-13370cacd4b0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514133621-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514133621-thumb.jpg"
extracted_at: "2026-04-30T01:55:47.840Z"
---

# CHELSEA — Style Reference

> Cinematic Night Canvas — light through shadow.

**Theme:** dark

**Industry:** media

Chelsea evokes a stark, filmic mood with a dark canvas and luminous text-based navigation. Typography is the primary visual element, given weight and presence through color and generous spacing. A single vivid blue accent color is reserved for interactive elements, creating points of distinct focus against the monochromatic backdrop. Components are minimal and flat, emphasizing content over decorative chrome, with an overall impression of focused elegance.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Page backgrounds, significant content blocks, footer; establishes the dark theme |
| Ash Gray | #1f2937 | `--color-ash-gray` | Muted text, subtle borders, secondary labels – provides depth without visual noise |
| Ghost White | #f4efe9 | `--color-ghost-white` | Primary text on dark backgrounds, high-contrast labels |
| Polar White | #ffffff | `--color-polar-white` | Pure white for occasional high-contrast accents or specific text elements |
| Pavement Gray | #e5e7eb | `--color-pavement-gray` | Very light borders; provides a subtle division on dark surfaces |
| Electric Blue | #4490ff | `--color-electric-blue` | Primary actionable elements like links, buttons, and selected states — the only vivid color that draws the eye |

## Tokens — Typography

### Neue Haas Unica Pro

- **Token:** `--font-neue-haas-unica-pro`
- **Substitute:** Helvetica Neue
- **Weights:** 400, 700
- **Sizes:** 12px, 14px, 16px, 32px, 48px
- **Line heights:** 1.00, 1.10, 1.12, 1.15, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** Primary typeface for all text content including headings, body, and navigation. Its clean, condensed nature provides a modern, impactful presence while maintaining readability on a dark canvas.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.15 | — | `--text-caption` |
| body-sm | 14px | 1.15 | — | `--text-body-sm` |
| body | 16px | 1.15 | — | `--text-body` |
| body-lg | 32px | 1.15 | — | `--text-body-lg` |
| heading-sm | 48px | 1.15 | — | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 9999px |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 96px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Navigation Link

**Role:** Main navigation items and sub-navigation lists.

Ghost White text (#f4efe9) at 14px (body), 16px (heading) with variable line height. Interactive states turn Electric Blue (#4490ff). Focus states may show a hairline Pavement Gray (#e5e7eb) border.

### Pill Accent Button

**Role:** Primary action button that stands out.

Filled with Electric Blue (#4490ff), with Electric Blue text (#4490ff) which is likely overridden to white in practice to be legible against the blue fill. Has a 9999px border radius for a distinct pill shape. Padding is minimal or zero indicating a tight fit around content.

### Ghost Border Button

**Role:** Secondary action or categorized filters.

Transparent background with a Pavement Gray (#e5e7eb) border, likely 1px. No padding or radius specified, suggesting a minimalist, outline-only presentation for elements like 'US'/'UK' selectors. Text is Ash Gray (#1f2937).

### Text List Item

**Role:** Displaying team members or project names in a list.

Ghost White text (#f4efe9) with potential bold weight for names or categories. Uses 8px for element spacing and 16px as internal padding for containers.

## Do's and Don'ts

### Do

- Always use Midnight Ink (#000000) as the canvas background for new pages to maintain the dark theme.
- Reserve Electric Blue (#4490ff) exclusively for interactive elements and state indicators, never for decorative purposes.
- Prioritize Neue Haas Unica Pro for all text, varying weight (400, 700) and size (12-48px) to establish hierarchy.
- Apply a 9999px border radius for all pill-shaped buttons and interactive elements requiring a soft, rounded aesthetic.
- Utilize Ash Gray (#1f2937) for subtle borders and secondary information, maintaining visual quietness.
- Implement a compact density with 8px as the default element spacing in components and layouts.
- Ensure primary text is Ghost White (#f4efe9) against the dark background for optimal contrast.

### Don't

- Do not introduce new vibrant colors outside of the defined Electric Blue; maintain a monochrome palette with strategic accents.
- Avoid heavy shadows or gradients; components should remain flat and minimalist to align with the stark aesthetic.
- Do not use generic system fonts; Neue Haas Unica Pro is critical for brand identity.
- Do not apply large, decorative border radii to elements other than specific buttons/links with the 9999px radius.
- Avoid overly dense layouts; use 96px for section gaps to ensure generous breathing room horizontally and vertically.
- Do not use Electric Blue for non-interactive text or static elements.
- Avoid changing the default 1px border thickness for dividers unless explicitly specified for a unique component.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #000000 | Primary page background and large structural areas, establishing the dark mode. |
| 1 | Interactive Overlay | #4490ff | Used for filled buttons and active states, creating distinct interactive surface elements. |

## Imagery

The site uses video and photography prominently, treated with a cinematic, high-contrast, and often low-key aesthetic that suits the film production context. Product shots, when present, are full-bleed capturing an immersive experience. There is no usage of abstract graphics or highly stylized illustrations; the focus is on realistic, high-quality visual content. Icons are minimal, likely grayscale or the accent blue, and purely functional. Imagery is dominant, often replacing the background, creating an image-rich experience.

## Layout

The page primarily employs a full-bleed layout, particularly for the hero section, embedding video or photography as the dominant visual. Content sections maintain a contained, centered structure with text blocks. The header is a minimal, top-bar navigation that remains sticky, featuring text links that highlight subtly. Section rhythm is often seamless, blending content over continuous dark backgrounds rather than distinct bands, punctuated by generous vertical spacing (96px). Content arrangement is text-dominant with clear, left-aligned typography.

## Similar Brands

- **A24 FILMS** — Similar dark, text-focused aesthetic with minimal UI and strong cinematic associations.
- **Squarespace** — Emphasizes sleek typography, generous whitespace (or negative space in dark mode), and high-quality photography.
- **Artemis (financial platform)** — Uses a dark, sophisticated theme with a single prominent accent color for interactivity.
- **Wieden+Kennedy** — Agency website with emphasis on full-bleed video/image content and minimal, text-driven navigation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-ash-gray: #1f2937;
  --color-ghost-white: #f4efe9;
  --color-polar-white: #ffffff;
  --color-pavement-gray: #e5e7eb;
  --color-electric-blue: #4490ff;
  --font-neue-haas-unica-pro: 'Neue Haas Unica Pro', Helvetica Neue;
  --text-caption: 12px;
  --leading-caption: 1.15;
  --text-body-sm: 14px;
  --leading-body-sm: 1.15;
  --text-body: 16px;
  --leading-body: 1.15;
  --text-body-lg: 32px;
  --leading-body-lg: 1.15;
  --text-heading-sm: 48px;
  --leading-heading-sm: 1.15;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-32: 32px;
  --spacing-96: 96px;
  --radius-links: 9999px;
  --radius-buttons: 9999px;
  --surface-canvas: #000000;
  --surface-interactive-overlay: #4490ff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-ash-gray: #1f2937;
  --color-ghost-white: #f4efe9;
  --color-polar-white: #ffffff;
  --color-pavement-gray: #e5e7eb;
  --color-electric-blue: #4490ff;
  --font-neue-haas-unica-pro: 'Neue Haas Unica Pro', Helvetica Neue;
  --text-caption: 12px;
  --leading-caption: 1.15;
  --text-body-sm: 14px;
  --leading-body-sm: 1.15;
  --text-body: 16px;
  --leading-body: 1.15;
  --text-body-lg: 32px;
  --leading-body-lg: 1.15;
  --text-heading-sm: 48px;
  --leading-heading-sm: 1.15;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-32: 32px;
  --spacing-96: 96px;
  --radius-links: 9999px;
  --radius-buttons: 9999px;
  --surface-canvas: #000000;
  --surface-interactive-overlay: #4490ff;
}
```
