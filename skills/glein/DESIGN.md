---
version: alpha
name: "Glein"
description: "Glein embraces a stark, high-contrast aesthetic reminiscent of black-and-white photography, presenting product with minimal visual distraction. The design prioritizes readability and directness through utilitarian custom typography and a precise, monochromatic color palette. Surfaced content often features a muted, off-white background, creating subtle depth while maintaining an overall light theme. Components are frequently borderless or use fine, dark strokes to delineate elements, emphasizing content through clear separation rather than heavy ornamentation. Layouts are structured and rectilinear, relying on robust typographic hierarchy to guide the eye."
theme: "light"
industry: "ecommerce"
source_url: "https://glein.wien"
refero_style_id: "2e4ce685-9f49-47a3-9577-bc4f196bd8f7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521509168-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521509168-thumb.jpg"
extracted_at: "2026-04-30T03:58:51.117Z"
---

# Glein — Style Reference

> Monochromatic architectural clarity: product as sculpture, framed by pure light and shadow.

**Theme:** light

**Industry:** ecommerce

Glein embraces a stark, high-contrast aesthetic reminiscent of black-and-white photography, presenting product with minimal visual distraction. The design prioritizes readability and directness through utilitarian custom typography and a precise, monochromatic color palette. Surfaced content often features a muted, off-white background, creating subtle depth while maintaining an overall light theme. Components are frequently borderless or use fine, dark strokes to delineate elements, emphasizing content through clear separation rather than heavy ornamentation. Layouts are structured and rectilinear, relying on robust typographic hierarchy to guide the eye.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Raven Black | #000000 | `--color-raven-black` | Primary text, interactive elements, section borders, button backgrounds, accent details — a deep, true black creates strong contrast against light surfaces, grounding the UI |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page and card backgrounds, default text for dark buttons — provides a clean, expansive foundation for content |
| Warm Parchment | #ebe6dc | `--color-warm-parchment` | Secondary background accent, subtle surface differentiation — a warm, desaturated off-white softens larger content blocks without introducing overt color |
| Muted Ash | #b3b3b3 | `--color-muted-ash` | Light secondary text, subtle borders — used for less prominent text elements or decorative navigation elements where a full contrast is not desired |

## Tokens — Typography

### F-Grotesk

- **Token:** `--font-f-grotesk`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 13px, 15px, 20px, 30px, 111px
- **Line heights:** 1.00, 1.19, 1.20, 1.30
- **Role:** Headlines, body text, general UI elements — a custom grotesque sans-serif provides a sturdy, direct, and highly legible voice. Its geometric simplicity reinforces the brand's 'product as sculpture' ethos.

### Maison-Neue-Mono

- **Token:** `--font-maison-neue-mono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 13px, 15px, 20px
- **Line heights:** 1.00, 1.19, 1.20, 1.30
- **Role:** Callouts, metadata, navigation, button labels — a custom monospaced sans-serif offers a technical, precise counterpoint to F-Grotesk, lending an artisanal, craft-focused feel to functional text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1 | — | `--text-caption` |
| body | 15px | 1 | — | `--text-body` |
| subheading | 20px | 1.19 | — | `--text-subheading` |
| heading | 30px | 1.2 | — | `--text-heading` |
| display | 111px | 1.3 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-91 | 91px | `--spacing-91` |
| spacing-156 | 156px | `--spacing-156` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-245 | 245px | `--spacing-245` |
| spacing-267 | 267px | `--spacing-267` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 42px |
| cardPadding | 24px |
| elementGap | 13px |

## Components

### Filled Primary Button

**Role:** Primary Call to Action

Solid Raven Black background (#000000) with Canvas White text (#ffffff). Features 2.25px vertical padding and 6px horizontal padding. No border radius, maintaining a sharp, utilitarian edge.

### Ghost Button

**Role:** Secondary Action

Transparent background with Raven Black text (#000000). Used for subtle actions or navigation elements that should not dominate the visual hierarchy. No padding or border radius for a seamless integration with text.

### Navigation Link

**Role:** Primary Navigation

Raven Black text (#000000) with no background or border. Text is typically Maison-Neue-Mono at 15px. Emphasizes content over interactive chrome.

### Callout Badge

**Role:** Informational Display

Maison-Neue-Mono 400 text, 13px size, with no background, intended for short informational text like 'mehr anzeigen'. It appears frequently as a text label overlaying images or section titles.

### Cookie Consent Modal

**Role:** Privacy Notice

A rectangular overlay with Canvas White background (#ffffff) and Raven Black text (#000000). Contains primary and secondary buttons for user input, displaying a sharp 0px border-radius to match the overall aesthetic.

## Do's and Don'ts

### Do

- Always use Raven Black (#000000) for primary text and interactive elements to maintain high contrast and legibility.
- Prioritize Canvas White (#ffffff) as the base background for main content areas, reserving Warm Parchment (#ebe6dc) for subtle content block distinctions.
- Employ F-Grotesk for all primary headings and body text to convey a direct, sculptural presence.
- Utilize Maison-Neue-Mono for nav links and button labels, leveraging its monospaced character for a precise, crafted feel.
- Maintain hard, 0px border-radii for all buttons and interactive elements, reinforcing the sharp, architectural visual language.
- Structure layouts with implied grid systems and strong vertical rhythm, using minimal explicit dividers where possible.
- Ensure all interactive elements maintain a hover state that aligns with the Raven Black and Canvas White contrast, such as a background fill on Raven Black from a ghost element.

### Don't

- Avoid introducing any saturated colors; the system is strictly achromatic, with no accent hues beyond brand neutrals.
- Do not soften edges with border-radii; all interactive elements and contained components should maintain crisp, 0px corners.
- Refrain from using drop shadows or heavy elevation styles; rely on color contrast and subtle background changes for layering.
- Do not use generic sans-serif fonts; custom F-Grotesk and Maison-Neue-Mono are essential to the brand's unique typographic fingerprint.
- Avoid decorative gradients or complex overlays; maintain a flat, stark aesthetic for backgrounds and surfaces.
- Do not break rhythm with irregular spacing; adhere to the defined base unit of 6px and derived element/section gaps.
- Do not use any iconography that deviates from simple, single-color line art in Raven Black or Muted Ash.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, default content surfaces |
| 1 | Warm Parchment | #ebe6dc | Secondary background, subtle content block separation, card backgrounds |
| 2 | Overlay/Active | #000000 | Full-bleed hero sections, solid button fills, active states, text against light backgrounds |

## Imagery

This site uses large, editorial-style product photography, often featuring models against minimalist, neutral backgrounds. Images are typically full-bleed within their section or occupy significant visual space, acting as primary content elements rather than mere decorations. The photography style is high-key and focused, with clean crops and natural lighting that emphasizes product textures and forms. There are no overt illustrations or abstract graphics; instead, imagery directly showcases the product. Icons are minimal, single-color (Raven Black), and functional, receding into the UI rather than drawing attention. The density is image-heavy, with large product visuals dominating sections and text used sparingly to frame or narrate.

## Layout

The page primarily follows a max-width contained model with sections flowing vertically, but often features full-bleed hero sections or large image blocks that break this convention to create visual impact. The hero section frequently uses large background imagery with centered overlay text or split-screen layouts. Sections maintain a consistent vertical rhythm, often alternating between large image blocks and cleaner text-dominant areas. Content is arranged in flexible grid patterns, frequently two-column for text alongside visuals, or implicit grids for product displays. The overall density is balanced, allowing breathing room around large images while maintaining readable text blocks. Navigation is a sticky top bar, minimal and unembellished, emphasizing direct links.

## Similar Brands

- **Acne Studios** — Stark, high-contrast black and white palette, minimalist typography, and editorial-style product photography.
- **COS (Collection of Style)** — Focus on clean lines, utilitarian design, and a restrained color palette in product presentation and website UI.
- **A.P.C.** — Understated design, emphasis on material quality over ornamentation, and a monochromatic visual language.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-raven-black: #000000;
  --color-canvas-white: #ffffff;
  --color-warm-parchment: #ebe6dc;
  --color-muted-ash: #b3b3b3;
  --font-f-grotesk: 'F-Grotesk', Inter;
  --font-maison-neue-mono: 'Maison-Neue-Mono', Space Mono;
  --text-caption: 13px;
  --leading-caption: 1;
  --text-body: 15px;
  --leading-body: 1;
  --text-subheading: 20px;
  --leading-subheading: 1.19;
  --text-heading: 30px;
  --leading-heading: 1.2;
  --text-display: 111px;
  --leading-display: 1.3;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-91: 91px;
  --spacing-156: 156px;
  --spacing-200: 200px;
  --spacing-245: 245px;
  --spacing-267: 267px;
  --radius-default: 0px;
  --surface-canvas-white: #ffffff;
  --surface-warm-parchment: #ebe6dc;
  --surface-overlay-active: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-raven-black: #000000;
  --color-canvas-white: #ffffff;
  --color-warm-parchment: #ebe6dc;
  --color-muted-ash: #b3b3b3;
  --font-f-grotesk: 'F-Grotesk', Inter;
  --font-maison-neue-mono: 'Maison-Neue-Mono', Space Mono;
  --text-caption: 13px;
  --leading-caption: 1;
  --text-body: 15px;
  --leading-body: 1;
  --text-subheading: 20px;
  --leading-subheading: 1.19;
  --text-heading: 30px;
  --leading-heading: 1.2;
  --text-display: 111px;
  --leading-display: 1.3;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-91: 91px;
  --spacing-156: 156px;
  --spacing-200: 200px;
  --spacing-245: 245px;
  --spacing-267: 267px;
  --radius-default: 0px;
  --surface-canvas-white: #ffffff;
  --surface-warm-parchment: #ebe6dc;
  --surface-overlay-active: #000000;
}
```
