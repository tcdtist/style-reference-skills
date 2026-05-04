---
version: alpha
name: Monologue
description: Monologue evokes a 'hacker garage at midnight' aesthetic, blending retro tech charm with modern dark mode sophistication. The design utilizes a deep, multi-layered neutral palette of dark grays and blacks as its canvas, punctuated by selective, vivid aqua accents. Typography combines a classic serif for imposing headlines with a monospaced font for functional elements, creating a distinctive contrast. Components are minimal, often transparent or outlined, and sparingly employ subtle inner shadows for depth rather than heavy elevation.
colors:
  absolute-zero: "#000000"
  deep-graphite: "#010101"
  carbon-black: "#191919"
  dark-charcoal: "#282828"
  slate-gray: "#3f3f3f"
  ash-gray: "#7f7f7f"
  near-white: "#ffffff"
  sea-glass: "#062f34"
  electric-aqua: "#19d0e8"
  sky-burst: "#44ccff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.2px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.096px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.16px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.9
    letterSpacing: -3.84px
spacing:
  cardRadius: 10px
  buttonRadius: 100000px
  elementGap: 10px
  sectionGap: 40px
components:
  filled-dark-button:
    role: Primary action button
  ghost-accent-button:
    role: Secondary action or featured link
  info-card:
    role: Content container for features or testimonials
  highlight-card-sea-glass:
    role: Emphasized feature card
  highlight-card-sky-burst:
    role: Prominent feature card
  media-player-card:
    role: Distinctive object container, often for media
  text-input-container:
    role: Container for form inputs or code snippets
---

## Overview

**North Star:** Midnight Terminal with Aqua Glow. A luminous aqua cursor on a deep, textured black screen, where retro-futuristic forms hint at precision and understated power.

Monologue evokes a 'hacker garage at midnight' aesthetic, blending retro tech charm with modern dark mode sophistication. The design utilizes a deep, multi-layered neutral palette of dark grays and blacks as its canvas, punctuated by selective, vivid aqua accents. Typography combines a classic serif for imposing headlines with a monospaced font for functional elements, creating a distinctive contrast. Components are minimal, often transparent or outlined, and sparingly employ subtle inner shadows for depth rather than heavy elevation.

### Do's

- Prioritize `Absolute Zero` (#000000) or `Deep Graphite` (#010101) as primary background colors for large sections.
- Use `Instrument Serif` for all primary headlines, leveraging its unique character and impactful size variations.
- Apply `DM Mono` for any code snippets, secondary headings, or UI labels to maintain the retro-tech aesthetic.
- Incorporate `Electric Aqua` (#19d0e8) sparingly for interactive elements, links, and small functional accents to provide a 'switched-on' feel.
- Use `10px` border-radius for cards and content containers, and `100000px` for all buttons to achieve a consistent pill shape.
- Employ the subtle inner shadow `rgba(0, 0, 0, 0.7) 3px 3px 2px 0px inset, rgba(255, 255, 255, 0.25) 3px 2px 2px 0px` on surfaces to add depth rather than heavy external shadows.
- Maintain a conservative compact density, using `10px` as a default `elementGap` between UI elements and `16px` for `cardPadding`.

### Don'ts

- Avoid using bright or overly saturated colors outside of the designated `Electric Aqua` and `Sky Burst` accents.
- Do not introduce heavy drop shadows or strong external elevation as the design favors subtle inset shadows for depth.
- Refrain from using generic sans-serif fonts for headlines; `Instrument Serif` is key to the brand's typographic identity.
- Avoid large, content-heavy image banners; imagery should be contained, illustrative, or product-focused within the dark UI.
- Do not use multiple accent colors; stick to the `Electric Aqua` and `Sky Burst` for highlights to maintain focus.
- Avoid excessive use of gradients; if used, they should be subtle dark-to-dark transitions for background textures, not vivid multi-color displays.
- Do not use sharp corners; the design consistently uses rounded corners, with `10px` or `8px` being common for main containers and `100000px` for interactive elements.

### Layout

The page primarily uses a max-width contained layout, likely around `1200px`, centered on the screen. The hero section is full-bleed dark, featuring prominent `Instrument Serif` headlines and a central product graphic or media player, with call-to-action buttons below it. Content sections often follow an alternating pattern of text on one side and a product screenshot/illustration on the other. Feature lists and other information are arranged in vertically stacked blocks, sometimes within cards. The overall rhythm is consistent vertical spacing between sections. Navigation is a sticky top bar, likely minimal in appearance. The density is compact, prioritizing information without feeling cramped, with clear visual separation between content blocks.

### Imagery

The visual language focuses on stylized product representations and abstract tech-inspired graphics. Photography is minimal, if present, and would likely be high-contrast and monochrome. Illustrations are flat, geometric, and often incorporate the vivid `Electric Aqua` accent color, suggesting digital interfaces or data visualization. Icons are outlined, simple, and functional, maintaining a high stroke weight for clarity within the dark theme. Imagery serves both decorative atmosphere and explanatory content, often highlighting product features or conceptual processes. The density is medium, with visuals integrated into content blocks rather than full-bleed, ensuring the UI remains the primary focus.
