---
version: alpha
name: Simon Foster
description: Simon Foster's portfolio design emphasizes an artistic, editorial feel through high-contrast monochrome typography and striking, playful imagery. The layout prioritizes ample whitespace and subtle textural backgrounds, allowing the curated content to breathe. Interactions are minimal and ghosted, retaining a refined, understated aesthetic that directs focus to the work rather than the interface itself.
colors:
  canvas-white: "#ffffff"
  charcoal-text: "#393737"
  subtle-gray: "#e7e5e5"
  pitch-black: "#000000"
  highlight-yellow: "#ffed8b"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.56
    letterSpacing: 0.005px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.49
    letterSpacing: 0.005px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.42
    letterSpacing: 0.005px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 1.19
    letterSpacing: 0.005px
  display:
    fontFamily: "system-ui"
    fontSize: 92px
    lineHeight: 1.04
    letterSpacing: 0.005px
spacing:
  cardRadius: 20px
  buttonRadius: 48px
  elementGap: 6px
  sectionGap: 43px
components:
  ghost-outline-button:
    role: Call to action, navigation items
  work-showcase-card:
    role: Portfolio item display
  featured-project-card:
    role: Highlighting specific projects
  solid-background-card:
    role: Alternative background for cards
  highlight-card:
    role: Prominent information blocks
---

## Overview

**North Star:** Sculptural Monochrome Canvas

Simon Foster's portfolio design emphasizes an artistic, editorial feel through high-contrast monochrome typography and striking, playful imagery. The layout prioritizes ample whitespace and subtle textural backgrounds, allowing the curated content to breathe. Interactions are minimal and ghosted, retaining a refined, understated aesthetic that directs focus to the work rather than the interface itself.

### Do's

- Use Charcoal Text (#393737) for all primary body and heading text.
- Apply Canvas White (#ffffff) as the dominant page and surface background color.
- Implement a 48px border-radius for all interactive elements like buttons and navigation items.
- Maintain a spacious rhythm with 43px vertical gaps between major content sections.
- Utilize ghost buttons with `transparent` background and Charcoal Text (#393737) outline for all calls to action.
- Employ a 20px border-radius for all non-interactive card surfaces.
- Ensure all typography uses 'Neue Montreal Regular' with its specified weights and letter-spacing of 0.0050em across all sizes.

### Don'ts

- Avoid solid, filled CTA buttons; interactions should be ghosted or subtly outlined.
- Do not introduce new typefaces; 'Neue Montreal Regular' is the only approved font.
- Refrain from using hard shadows; the design relies on subtle texture and contrast for depth.
- Do not deviate from the specified spacing units; maintain 6px for element gaps and 32px for card internal padding.
- Avoid excessive use of the Highlight Yellow (#ffed8b); reserve it for impactful, single-instance accents.

### Layout

The page maintains a centered max-width content area for text and most sections, but the hero image can be full-bleed. The hero features a large, dramatic image of a classical bust with a large, decorative brand name centered over it, setting a distinct artistic tone. Subsequent sections follow a consistent vertical rhythm with ample whitespace created by section gaps. Content is arranged in alternating image-left/text-right or text-left/image-right patterns, often using a 2-column grid. A 3-column card grid is used for portfolio items. The navigation is a minimalist top-right cluster of ghost buttons, while a prominent scroll-down indicator is centered at the bottom of the hero.

### Imagery

The site uses a striking combination of classical sculpture, contemporary product screenshots, and playful, minimalist single-color illustrations. Photography (for products) is high-key with tight crops, showcasing the object against neutral or slight pastel backgrounds, indicating a focus on product detail rather than lifestyle. Illustrations are abstract, flat, and often monochromatic or use a single accent color (like pink), treated with organic shapes, adding a whimsical, artistic touch. Icons are minimal, outlined, and utilize the primary text color. Imagery plays a dual role: product showcasing and atmospheric decoration, maintaining a text-dominant, high-impact visual density.
