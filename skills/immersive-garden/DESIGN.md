---
version: alpha
name: "Immersive Garden"
description: "This design system evokes the delicate, architectural quality of a bas-relief sculpture, where details whisper rather than shout. The entire page functions as a single, subtly textured canvas of near-white, with form and depth communicated through the negative space and the gentle play of light and shadow, not distinct color blocks. Typography is precise and understated, acting as fine etchings on the surface, allowing the sculptural elements to dominate and define the brand's aesthetic of immersive, artistic digital experiences."
theme: "light"
industry: "agency"
source_url: "https://immersive-g.com"
refero_style_id: "0b285f89-599f-4d6e-b7cd-3f39abac80c6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925492455-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925492455-thumb.jpg"
extracted_at: "2026-04-11T16:38:29.742Z"
---

# Immersive Garden — Style Reference

> Bas-relief on white marble — a singular textured surface sculpted with light and shadow.

**Theme:** light

**Industry:** agency

This design system evokes the delicate, architectural quality of a bas-relief sculpture, where details whisper rather than shout. The entire page functions as a single, subtly textured canvas of near-white, with form and depth communicated through the negative space and the gentle play of light and shadow, not distinct color blocks. Typography is precise and understated, acting as fine etchings on the surface, allowing the sculptural elements to dominate and define the brand's aesthetic of immersive, artistic digital experiences.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, primary surface. |
| Etched Graphite | #030303 | `--color-etched-graphite` | Primary text, interactive elements, subtle outlines. |
| Ink Black | #000000 | `--color-ink-black` | Secondary text, icons. Provides highest contrast on 'Canvas White'. |

## Tokens — Typography

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line heights:** 1.10
- **Letter spacing:** normal
- **Role:** Captions, navigation links, secondary labels – providing utilitarian clarity against the subtle backdrop.

### PSTimes

- **Token:** `--font-pstimes`
- **Substitute:** Times New Roman, serif
- **Weights:** 400
- **Sizes:** 28px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Primary headlines and core content – a whisper of classic serif that adds a refined, almost literary weight without being overly formal.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Standard body text and interactive elements. A pragmatic, legible choice for essential communication.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.1 | — | `--text-caption` |
| body-sm | 14px | 1.1 | — | `--text-body-sm` |
| body | 16px | 1.2 | — | `--text-body` |
| heading | 28px | 1.2 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-40 | 40px | `--spacing-40` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 40px |
| elementGap | 5px |

## Components

### Hero Headline Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Brand Identity & Navigation Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Call to Action & Scroll Indicator Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Top-right navigation item

Text in 'Etched Graphite' (#030303), using Helvetica Neue at 12px, weight 400. Letter spacing normal. Understated, blending with the subtle aesthetic.

### Logo

**Role:** Brand identity

Text 'IMMERISVE GARDEN' in 'Etched Graphite' (#030303), Helvetica Neue at 12px, weight 400, coupled with an iconic graphic. The logo treatment aligns with the general text style to avoid visual dissonance.

### Call to Action Link

**Role:** Initiating user interaction

Text 'See all projects' in 'Etched Graphite' (#030303), sans-serif (system) at 16px, weight 400. Includes a subtle colon at the end, acting as a visual cue rather than a strong button treatment.

### Hero Headline

**Role:** Main page title

'Innovative digital experiences studio' rendered in PSTimes at 28px, weight 400, 'Etched Graphite' (#030303). It's the most prominent text, yet its size and serif style maintain the delicate, curated feel.

### Scroll Down Indicator

**Role:** User guidance

Text 'Scroll down' in 'Etched Graphite' (#030303), Helvetica Neue at 12px, weight 400. Positioned discreetly, it serves a functional purpose without breaking the minimal visual language.

## Do's and Don'ts

### Do

- Prioritize 'Canvas White' (#ffffff) as the primary background for all major sections and surfaces, maintaining the single-canvas aesthetic.
- Use PSTimes at 28px, weight 400 for primary headings to establish a refined tone.
- Employ Helvetica Neue at 12px or 14px, weight 400 for all navigation, labels, and secondary information to maintain a crisp, minimal hierarchy.
- Utilize 'Etched Graphite' (#030303) for all primary text and interactive elements.
- Maintain generous spacing with a general `elementGap` of 5px and `cardPadding` of 40px to enhance the sense of space and visual quietude.

### Don't

- Do not introduce highly saturated or brightly colored elements; the system relies on achromatic tones and subtle relief.
- Avoid strong box-shadows or distinct borders that would disrupt the singular, textured surface feel of the design.
- Refrain from using bold or heavy font weights; the typography is designed to be understated and delicate.
- Do not use highly contrasting backgrounds or text colors beyond 'Canvas White' (#ffffff) and 'Etched Graphite' (#030303) / 'Ink Black' (#000000).
- Avoid creating traditional button styles with solid fills or strong outlines. Interactive elements should be indicated primarily through text and subtle hover effects if any.

## Imagery

The site employs a distinctive sculptural bas-relief style for its visuals, appearing embedded directly into the 'Canvas White' background. These are not photography or illustrations in the traditional sense, but rather rendered forms that create depth and shadow as if carved from the page itself. The treatment is full-bleed, seamlessly integrating with the background without any borders or masking, providing an immersive, tactile quality. Their role is primarily artistic and atmospheric, defining the brand's 'immersive' identity without relying on literal product showcases or lifestyle photography. The density is moderate, with these abstract forms occupying significant visual space to establish mood.

## Layout

The page maintains a full-bleed layout, using the entire viewport as a single, uniform textured canvas. There is no `pageMaxWidth`, creating an expansive, borderless experience. The hero section is characterized by a centered headline over the minimalist, sculptural background. Subsequent sections follow a consistent vertical rhythm, separated implicitly by the continuous background canvas and explicit content blocks that are spatially separated, rather than by alternating background colors. Content arrangement is typically centered or subtly offset, emphasizing negative space. There are hints of a fluid grid for content organization, allowing elements to breathe within the vast, singular background. Navigation is minimal, confined to a 'About' link in the top-right and a logo in the top-left, reinforcing the content-first, art-gallery feel.

## Similar Brands

- **Awwwards Nominees** — Often features websites that prioritize abstract visual experiences and subtle interactions over conventional UI elements.
- **Griflan** — Similar use of expansive negative space and a focus on unique background textures or subtle motion for brand identity.
- **Future London Academy** — Employs an elegant, content-focused approach with subtle typography and a clean, almost 'blank page' aesthetic for impact.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-etched-graphite: #030303;
  --color-ink-black: #000000;
  --font-helvetica-neue: 'Helvetica Neue', system-ui, sans-serif;
  --font-pstimes: 'PSTimes', Times New Roman, serif;
  --font-sans-serif: 'sans-serif', Arial, Helvetica, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --text-body-sm: 14px;
  --leading-body-sm: 1.1;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --spacing-5: 5px;
  --spacing-16: 16px;
  --spacing-40: 40px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-etched-graphite: #030303;
  --color-ink-black: #000000;
  --font-helvetica-neue: 'Helvetica Neue', system-ui, sans-serif;
  --font-pstimes: 'PSTimes', Times New Roman, serif;
  --font-sans-serif: 'sans-serif', Arial, Helvetica, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --text-body-sm: 14px;
  --leading-body-sm: 1.1;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --spacing-5: 5px;
  --spacing-16: 16px;
  --spacing-40: 40px;
}
```
