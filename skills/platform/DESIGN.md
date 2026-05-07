---
version: alpha
name: "PLATFORM"
description: "PLATFORM employs a high-contrast, minimalist gallery style, reminiscent of exhibition space. The visual system relies heavily on stark black and white, creating a strong editorial feel where artwork takes center stage. Typography is reserved and precise, with tight tracking. Components are ghosted or outlined, never interfering with content, maintaining a sense of refinement and directness."
theme: "light"
industry: "design"
source_url: "https://www.platformart.com"
refero_style_id: "81507860-e43d-4c50-b371-7267af9a914b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518830331-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518830331-thumb.jpg"
extracted_at: "2026-04-30T03:14:12.334Z"
---

# PLATFORM — Style Reference

> monochromatic gallery exhibition

**Theme:** light

**Industry:** design

PLATFORM employs a high-contrast, minimalist gallery style, reminiscent of exhibition space. The visual system relies heavily on stark black and white, creating a strong editorial feel where artwork takes center stage. Typography is reserved and precise, with tight tracking. Components are ghosted or outlined, never interfering with content, maintaining a sense of refinement and directness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, default text color for inverse elements |
| Ink Black | #000000 | `--color-ink-black` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |

## Tokens — Typography

### MediumLLWeb

- **Token:** `--font-mediumllweb`
- **Substitute:** system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
- **Weights:** 400
- **Sizes:** 12px, 15px, 20px, 48px, 72px
- **Line heights:** 1.15
- **Letter spacing:** 0.12px at 12px, 0.15px at 15px, 0.2px at 20px
- **Role:** Body copy, captions, links, and secondary navigation items. Its regular weight ensures readability while maintaining the understated tone.

### MediumLLWeb

- **Token:** `--font-mediumllweb`
- **Substitute:** system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
- **Weights:** 500
- **Sizes:** 12px, 15px, 20px, 48px, 72px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** 0.96px at 48px, 1.44px at 72px
- **Role:** Headings and spotlight titles. The medium weight combined with generous letter-spacing creates an open, editorial display quality, asserting presence without typical bolding.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.15 | — | `--text-caption` |
| body-sm | 15px | 1.15 | — | `--text-body-sm` |
| body | 20px | 1.15 | — | `--text-body` |
| body-lg | 48px | 1.15 | — | `--text-body-lg` |
| heading-sm | 72px | 1.15 | — | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-122 | 122px | `--spacing-122` |
| spacing-198 | 198px | `--spacing-198` |
| spacing-262 | 262px | `--spacing-262` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 72px |
| cardPadding | 0px |
| elementGap | 10px |

## Components

### Ghost Navigation Button

**Role:** Interactive elements within the top navigation and inline actions.

Transparent background, Ink Black (#000000) text, no border or padding, font MediumLLWeb weight 400. This minimal styling makes navigation blend seamlessly with the content.

### Text Button

**Role:** Call to action for secondary actions or text-based prompts.

Background transparent, Ink Black (#000000) text (MediumLLWeb weight 400), 8px top/bottom padding, 13px left/right padding, with a 1px bottom border on interaction for subtle emphasis. No border radius.

### Artwork Card

**Role:** Displaying individual artworks in grid layouts.

Transparent background with a 1px Ink Black (#000000) border. No padding within the card itself as artwork fills the space. All corners are sharp (0px radius). Artwork information appears directly below the image using MediumLLWeb, weight 400.

### Text Input

**Role:** Form fields for user input.

Transparent background, Ink Black (#000000) text and border, 10px padding on all sides. No border radius. The simple, sharp input field matches the overall aesthetic.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for text and primary UI interactions against Canvas White (#ffffff) backgrounds to maintain high contrast and sophistication.
- Use MediumLLWeb weight 500 for all large headings (48px, 72px) with the specified letter-spacing to create an open and editorial feel.
- Maintain a strict 0px border-radius for all components and elements; rounded corners are not part of this visual language.
- Employ ghost or outlined styles for interactive elements, using Ink Black (#000000) for borders or text, to preserve content as the primary focus.
- Utilize 'elementGap' of 10px for vertical spacing between related content blocks for a compact, intentional rhythm.
- Ensure all interactive elements have hover effects that subtly highlight their interactive nature within the black and white palette.
- Keep backgrounds for all major sections and components as Canvas White (#ffffff) or transparent, allowing content to define visual interest.

### Don't

- Do not introduce strong chromatic colors into the core UI; color should only appear within artwork or imagery, not structural elements.
- Avoid heavy drop shadows or complex elevation; mimic the flatness of a printed page or gallery wall.
- Do not use typography weights heavier than MediumLLWeb 500; the brand's authority comes from thoughtful spacing and elegant forms, not visual weight.
- Refrain from using padding within cards displaying artwork; the art should bleed to the edge of its boundary.
- Do not vary from the established letter-spacing values for MediumLLWeb; precise tracking is a signature of this system.
- Avoid introducing rounded corners on any UI element; the design maintains a sharp, architectural edge.
- Do not use generic system fonts when MediumLLWeb (or its defined substitutes) should be used; font choice is critical to brand identity.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, base surface for content. |

## Imagery

This site predominantly uses large, high-resolution imagery showcasing fine art. Images are typically full-bleed within their sections or tightly cropped and contained within a 1px Ink Black (#000000) border, mimicking a framed piece. There is no usage of abstract graphics, 3D renders, or heavily treated photography. Icons are minimal, outlined Ink Black (#000000) pictograms, serving purely functional roles like search or user profile. The visual density is high on imagery, allowing the artwork to speak for itself, with explanatory text kept concise and positioned carefully around the visuals.

## Layout

The page primarily uses a full-bleed layout for the hero section, with a centered headline and subordinate text over a dark, textural background. Subsequent sections often feature a limited max-width for textual content, contrasting with grid-based image displays that utilize the full horizontal space. Content is arranged in alternating sections, typically with consistent vertical spacing. Text blocks tend to be centered or left-aligned within their containers, while image grids align to the overall page structure. Navigation is a minimalist top bar, with prominent 'PLATFORM:' branding and subtle text links.

## Similar Brands

- **Artnet** — Shares a monochromatic color scheme with stark black and white for UI, prioritizing artwork display.
- **Saatchi Art** — Employs a clean, minimalist layout with prominent artwork imagery and subtle, ghosted navigation.
- **Paddle8** — Features a high-contrast aesthetic with sharp edges and a focus on editorial typography for art listings.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --font-mediumllweb: 'MediumLLWeb', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --font-mediumllweb: 'MediumLLWeb', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --text-caption: 12px;
  --leading-caption: 1.15;
  --text-body-sm: 15px;
  --leading-body-sm: 1.15;
  --text-body: 20px;
  --leading-body: 1.15;
  --text-body-lg: 48px;
  --leading-body-lg: 1.15;
  --text-heading-sm: 72px;
  --leading-heading-sm: 1.15;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-72: 72px;
  --spacing-122: 122px;
  --spacing-198: 198px;
  --spacing-262: 262px;
  --radius-all: 0px;
  --surface-canvas-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --font-mediumllweb: 'MediumLLWeb', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --font-mediumllweb: 'MediumLLWeb', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --text-caption: 12px;
  --leading-caption: 1.15;
  --text-body-sm: 15px;
  --leading-body-sm: 1.15;
  --text-body: 20px;
  --leading-body: 1.15;
  --text-body-lg: 48px;
  --leading-body-lg: 1.15;
  --text-heading-sm: 72px;
  --leading-heading-sm: 1.15;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-72: 72px;
  --spacing-122: 122px;
  --spacing-198: 198px;
  --spacing-262: 262px;
  --radius-all: 0px;
  --surface-canvas-white: #ffffff;
}
```
