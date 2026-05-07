---
version: alpha
name: "Taiki Murayama"
description: "Taiki Murayama's portfolio design evokes a tactile, high-contrast, 'digital-brutalism-meets-luxe' aesthetic. Sharp, often square visual elements are juxtaposed with a single, highly saturated 'cyber green' accent that signals interaction and focus. Typography leans towards expansive, confident sans-serifs, with some oversized headings creating an editorial, high-fashion feel. The overall presentation is sparse, leaving ample negative space, and prioritizing strong visual statements over dense information."
theme: "light"
industry: "design"
source_url: "https://www.taiki-murayama.com"
refero_style_id: "6b3d1095-2e60-4e7a-a4e2-eb4bf67e5d1f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518764874-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518764874-thumb.jpg"
extracted_at: "2026-04-30T03:13:04.757Z"
---

# Taiki Murayama — Style Reference

> High-contrast digital brutalism.

**Theme:** light

**Industry:** design

Taiki Murayama's portfolio design evokes a tactile, high-contrast, 'digital-brutalism-meets-luxe' aesthetic. Sharp, often square visual elements are juxtaposed with a single, highly saturated 'cyber green' accent that signals interaction and focus. Typography leans towards expansive, confident sans-serifs, with some oversized headings creating an editorial, high-fashion feel. The overall presentation is sparse, leaving ample negative space, and prioritizing strong visual statements over dense information.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, base surface for card elements, subtle borders |
| Deep Graphite | #0b0b0f | `--color-deep-graphite` | Primary text color, bold accent borders, and background for high-contrast elements |
| Pure Black | #000000 | `--color-pure-black` | Dominant color for headlines and strong decorative borders, achieving maximum contrast |
| Muted Silver | #c6c5c2 | `--color-muted-silver` | Subtle secondary text, hairline borders, and decorative accents |
| Pale Ash | #efefef | `--color-pale-ash` | Secondary background surfaces, providing a slight visual separation from Canvas White |
| Cyber Green | #42ff00 | `--color-cyber-green` | Primary interactive element highlight, button backgrounds, and strong accent borders. This is the singular chromatic element signaling action |
| Ghost Green | #a1ff81 | `--color-ghost-green` | Translucent background for active navigation states, giving a hint of energy without being fully opaque |

## Tokens — Typography

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 16px, 28px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.56, -0.32
- **Role:** Universal sans-serif for body text, navigation items, links, and various UI elements. Its clean, functional aesthetic underpins the minimal design.

### HelveticaNeue.tcc

- **Token:** `--font-helveticaneue-tcc`
- **Substitute:** IBM Plex Sans
- **Weights:** 400
- **Sizes:** 87px, 109px
- **Line heights:** 0.78
- **Letter spacing:** -3.48, -4.36
- **Role:** Custom, expansive sans-serif for display-level headlines, creating an authoritative and bold visual statement. The tight line height and negative letter spacing add to its impact.

### FHPhemister-Bold.woff2

- **Token:** `--font-fhphemister-bold-woff2`
- **Substitute:** Oswald Bold
- **Weights:** 400
- **Sizes:** 109px
- **Line heights:** 0.78
- **Letter spacing:** -4.36
- **Role:** A decorative custom bold font used for specific, high-impact headings, often layered or used subtly. Creates distinct brand identity through its exaggerated forms.

### Poppins

- **Token:** `--font-poppins`
- **Substitute:** Inter
- **Weights:** 500
- **Sizes:** 14px
- **Line heights:** 1.20
- **Letter spacing:** 0.28
- **Role:** A secondary sans-serif primarily used for button text, offering a slightly more rounded and distinct voice for calls to action.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-79 | 79px | `--spacing-79` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 15px |
| buttons | 300px |
| general | 15px |
| navigation | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 79px |
| cardPadding | 40px |
| elementGap | 11px |

## Components

### Text-Only Button

**Role:** Navigational or secondary action button with a bottom border.

Transparent background, Deep Graphite text (16px Helvetica Neue, 400 weight), with a 1px Deep Graphite bottom border. Padding of 40px top, 0px right, 15px bottom, 0px left.

### Pill Cyber Green Button

**Role:** Primary call to action.

Filled with Cyber Green, text is Deep Graphite (14px Poppins, 500 weight). Features a full pill shape with 300px border-radius and 14.4px top/bottom, 25.6px left/right padding.

### Ghost Portfolio Card

**Role:** Showcasing individual portfolio pieces or larger content blocks without visual framing.

Transparent background, 0px border-radius, no box-shadow, and 0px padding. This acts as a container for images and text that rely on adjacent elements for visual grouping.

### Elevated Portfolio Card

**Role:** Used for specific content blocks that require a subtle background separation.

Pale Ash background with 15px border-radius, no box-shadow, and 0px padding. Provides a faint surface distinction from the Canvas White page background.

### Navigation Link Highlight

**Role:** Active state for navigation items.

Background is Ghost Green with 4px border radius. This subtle, translucent green visually indicates the currently active page.

## Do's and Don'ts

### Do

- Prioritize Canvas White for page backgrounds with Deep Graphite/Pure Black for primary text to maintain high contrast.
- Use Cyber Green exclusively for primary interactive elements like buttons and active states to signal action and create visual punctuation.
- Apply 15px border-radius for cards and content blocks, and a tight 300px for pill-shaped buttons and tags.
- Utilize Helvetica Neue weights 400 for body text and navigation, ensuring -0.035em letter-spacing for 16px text and -0.020em for 28px text.
- Employ custom HelveticaNeue.tcc or FHPhemister-Bold.woff2 for large display headings (87px-109px) with negative letter-spacing (-40em relative to size) for maximal impact.
- Maintain a clear visual hierarchy by employing 1px Deep Graphite or Pure Black bottom borders on text-only buttons and interactive elements.
- Ensure generous negative space; the elementGap of 11px should be a minimum baseline for tight internal elements, with sectionGap of 79px for major content divisions.

### Don't

- Do not introduce additional saturated colors; Cyber Green should be the only vivid chromatic element for interaction.
- Avoid using box-shadows or significant elevation; prefer subtle background color changes or strong borders for visual hierarchy.
- Do not apply standard positive letter-spacing to large headlines; tight tracking (e.g., -4.36px for 109px text) is key to the aesthetic.
- Do not deviate from the specified border-radii; 15px for cards and 300px for buttons are signature elements.
- Do not clutter content areas; maintain the ample negative space and minimal information density.
- Avoid using Helvetica Neue for button text; use Poppins at 14px, weight 500 with letter-spacing 0.02em for these elements.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Primary page background and default content surface. |
| 2 | Pale Ash | #efefef | Slightly recessed background for distinct content blocks or secondary card surfaces. |

## Imagery

This site features a clean, product-focused imagery style. Primarily product crops and lifestyle shots are tightly contained within ghost cards, floating cleanly on the Canvas White background. Images are not full-bleed and often have raw, unmasked edges, contributing to a digital collage or 'moodboard' aesthetic. The treatment is direct and unadorned, allowing the content of the image to speak for itself without heavy styling. Icons, if present, are minimal outlined styles. The density is image-heavy in portfolio sections, using visuals as primary content showcases, balanced by text-dominant sections.

## Layout

The page uses a maximum-width contained layout with heavy emphasis on vertical stacking and generous white space. The hero section features a centered headline over a collection of floating portfolio images and product shots, creating a dynamic, almost scattered presentation. Content sections typically follow a consistent vertical rhythm with minimal visual dividers. Text-dominant sections are often left-aligned, showcasing large typography, while image sections employ an asymmetric, somewhat scattered grid approach where elements are positioned with intentional whitespace. Navigation is a minimalist top bar, anchored in place, providing clear but understated access to sections.

## Similar Brands

- **Huge Inc.** — High-contrast, brutalist typography and monochromatic palette with a single accent color.
- **Active Theory** — Interactive, immersive portfolio feel with strong graphic elements and unconventional layouts.
- **B&R Design** — Focus on large, impactful typography and bold, clean layouts for portfolio presentation.
- **Basic. Space** — Minimalist aesthetic with high visual impact, unusual content arrangements, and strong brand color usage.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-deep-graphite: #0b0b0f;
  --color-pure-black: #000000;
  --color-muted-silver: #c6c5c2;
  --color-pale-ash: #efefef;
  --color-cyber-green: #42ff00;
  --color-ghost-green: #a1ff81;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-helveticaneue-tcc: 'HelveticaNeue.tcc', IBM Plex Sans;
  --font-fhphemister-bold-woff2: 'FHPhemister-Bold.woff2', Oswald Bold;
  --font-poppins: 'Poppins', Inter;
  --spacing-6: 6px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-79: 79px;
  --radius-cards: 15px;
  --radius-buttons: 300px;
  --radius-general: 15px;
  --radius-navigation: 4px;
  --surface-canvas-white: #ffffff;
  --surface-pale-ash: #efefef;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-deep-graphite: #0b0b0f;
  --color-pure-black: #000000;
  --color-muted-silver: #c6c5c2;
  --color-pale-ash: #efefef;
  --color-cyber-green: #42ff00;
  --color-ghost-green: #a1ff81;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-helveticaneue-tcc: 'HelveticaNeue.tcc', IBM Plex Sans;
  --font-fhphemister-bold-woff2: 'FHPhemister-Bold.woff2', Oswald Bold;
  --font-poppins: 'Poppins', Inter;
  --spacing-6: 6px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-79: 79px;
  --radius-cards: 15px;
  --radius-buttons: 300px;
  --radius-general: 15px;
  --radius-navigation: 4px;
  --surface-canvas-white: #ffffff;
  --surface-pale-ash: #efefef;
}
```
