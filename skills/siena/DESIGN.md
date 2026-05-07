---
version: alpha
name: "Siena"
description: "Siena's visual system evokes a raw, cinematic grit, operating in a deep dark mode with sparse, high-contrast typography. The design relies on angular forms and a stark white accent color that punctuates the darkness. Components are minimal, often borderless, and prioritize functionality over decorative embellishment. The overall experience is one of understated intensity, allowing textual content and motion to drive narrative."
theme: "dark"
industry: "media"
source_url: "https://www.siena.film"
refero_style_id: "1bee2c77-8c47-44f6-b784-ef7aa45d4f93"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509582476-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509582476-thumb.jpg"
extracted_at: "2026-04-30T00:40:01.257Z"
---

# Siena — Style Reference

> midnight canvas, stark light

**Theme:** dark

**Industry:** media

Siena's visual system evokes a raw, cinematic grit, operating in a deep dark mode with sparse, high-contrast typography. The design relies on angular forms and a stark white accent color that punctuates the darkness. Components are minimal, often borderless, and prioritize functionality over decorative embellishment. The overall experience is one of understated intensity, allowing textual content and motion to drive narrative.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Screen | #000000 | `--color-midnight-screen` | Page background, primary card surfaces, foundational dark tones for content |
| Graphite Canvas | #1f1f1f | `--color-graphite-canvas` | Secondary card backgrounds, slightly elevated surfaces offering subtle visual depth on a dark canvas |
| Ghost Ivory | #faf7ef | `--color-ghost-ivory` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |

## Tokens — Typography

### NB International

- **Token:** `--font-nb-international`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 10px, 20px
- **Line heights:** 1.00, 1.30, 2.60
- **Letter spacing:** 0.080em
- **Role:** Body copy and interactive elements like buttons. Its moderate letter spacing provides breathing room within a dark, compact design.

### Neue Brucke

- **Token:** `--font-neue-brucke`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 10px, 12px
- **Line heights:** 0.90, 2.71
- **Letter spacing:** 0.150em
- **Role:** Used for small, high-impact text such as icons and badges. The generous letter spacing enhances legibility at small sizes and adds to a distinct, technical feel.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-1 | 1px | `--spacing-1` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 14px |
| elements | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 6px |
| elementGap | 1px |

## Components

### Ghost Button

**Role:** Primary action button

Transparent background with a Ghost Ivory border and text. Uses NB International font at 10px, weight 400, with 0.08em letter spacing. Padding is 1px vertical, 6px horizontal. Corners are sharp at 0px radius.

### Film Thumbnail Card

**Role:** Decorative content display

A square card with a Graphite Canvas (#1f1f1f) background and 14px border radius. Contains internal padding of 6.4px on all sides, suitable for displaying film stills or related content.

### Circular Dark Overlay

**Role:** Interactive indicator or avatar

A perfectly circular element with a Midnight Screen (#000000) background and 100% border radius. Used for minimalist UI elements where shape implies interaction or status.

### Ghost Text Badge

**Role:** Informational tag

A badge with a transparent background and Ghost Ivory (#faf7ef) text. Uses Neue Brucke font, transparent background, no padding or border radius, making it blend seamlessly with text.

## Do's and Don'ts

### Do

- Prioritize Midnight Screen (#000000) for all main backgrounds and primary content containers for a true dark mode experience.
- Use Ghost Ivory (#faf7ef) exclusively for all readable text, interactive element borders, and essential icons to maintain high contrast and visual focus.
- Apply NB International at 400 weight with 0.08em letter spacing for general body text and functional UI copy.
- Employ Neue Brucke at 400 weight with 0.15em letter spacing for small label text, ensuring legibility and a distinctive style in compact spaces.
- Maintain a compact element layout using 1px gaps between tightly related elements and 6px padding for internal component spacing.
- Keep all interactive elements, like buttons, with 0px border-radius, emphasizing sharp, angular lines.
- Reserve the 14px border-radius specifically for content cards, distinguishing them from interactive controls.

### Don't

- Avoid using saturated or chromatic colors for backgrounds or primary textual content; color should be reserved for subtle accents or functional indicators only.
- Do not introduce unnecessary shadows; the design relies on flat surfaces and high contrast for hierarchy, not elevation.
- Refrain from using rounded corners on interactive elements; they should remain sharp and angular.
- Do not deviate from NB International and Neue Brucke for typography; these fonts define the brand's voice.
- Avoid large, airy padding or gaps between elements and sections; the design embraces a compact, dense arrangement.
- Do not use gradients; the visual system is anchored in flat, high-contrast color blocks.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Screen | #000000 | Dominant page background and base-level surfaces. |
| 1 | Graphite Canvas | #1f1f1f | Slightly elevated card and content backgrounds, subtly distinguishing content blocks. |

## Imagery

This design system is image-centric, showcasing full-bleed hero visuals and contained film stills within cards. All imagery is treated naturally, focusing on the cinematic quality of the content. There are no stylistic overlays or effects. Icons, when present, are minimalistic, outlined, and monochromatic (Ghost Ivory), serving as functional cues rather than decorative elements. The density is image-heavy, with visuals occupying significant screen real estate, letting the film content speak for itself.

## Layout

The page primarily uses a full-bleed layout, allowing hero sections and visual content to extend to the edges. Content sections tend to be centered, often featuring a single, strong headline or visual. The rhythm is established by distinct, self-contained blocks. There are no visible grid structures for content layout beyond implicit alignment. The design feels dense but deliberate, with minimal negative space, creating an immersive, focused experience. Navigation is likely a sticky top navigation or a minimalist hamburger menu to preserve screen space for content.

## Similar Brands

- **A24 Films** — Dark UI with cinematic, text-focused presentation and stark, high-contrast typography.
- **Netflix (dark theme)** — Dominant dark background, high-contrast text, and a focus on visual content display.
- **MUBI** — Minimalist dark aesthetic focused on film art, with custom typography and subdued UI elements.
- **Letterboxd** — Emphasis on dark mode, clear typography for film-related content, and functional but minimal UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-screen: #000000;
  --color-graphite-canvas: #1f1f1f;
  --color-ghost-ivory: #faf7ef;
  --font-nb-international: 'NB International', Inter;
  --font-neue-brucke: 'Neue Brucke', Space Mono;
  --spacing-1: 1px;
  --spacing-6: 6px;
  --spacing-48: 48px;
  --radius-cards: 14px;
  --radius-elements: 0px;
  --surface-midnight-screen: #000000;
  --surface-graphite-canvas: #1f1f1f;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-screen: #000000;
  --color-graphite-canvas: #1f1f1f;
  --color-ghost-ivory: #faf7ef;
  --font-nb-international: 'NB International', Inter;
  --font-neue-brucke: 'Neue Brucke', Space Mono;
  --spacing-1: 1px;
  --spacing-6: 6px;
  --spacing-48: 48px;
  --radius-cards: 14px;
  --radius-elements: 0px;
  --surface-midnight-screen: #000000;
  --surface-graphite-canvas: #1f1f1f;
}
```
