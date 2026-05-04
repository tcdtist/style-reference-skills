---
version: alpha
name: The Sea We Breathe
description: The Sea We Breathe uses a serene, atmospheric design language focused on the interplay of water and sky. The visual system is minimal, utilizing large-scale imagery and almost monochrome interface elements to evoke a sense of calm and vastness. Interaction elements are almost invisible, relying on subtle borders and text color changes rather than solid fills. The typography is light and spacious, complementing the open, uncluttered layout.
colors:
  sky-blue: "#94e6fb"
  sea-foam: "#e5faff"
  canvas-white: "#ffffff"
  midnight-accent: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 1.672px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 2.128px
spacing:
  buttonRadius: 0px
  elementGap: 0px
  sectionGap: 44px
components:
  ghost-navigation-button:
    role: Interactive element to switch language or navigate secondary options.
---

## Overview

**North Star:** Vast Blue Expanse

The Sea We Breathe uses a serene, atmospheric design language focused on the interplay of water and sky. The visual system is minimal, utilizing large-scale imagery and almost monochrome interface elements to evoke a sense of calm and vastness. Interaction elements are almost invisible, relying on subtle borders and text color changes rather than solid fills. The typography is light and spacious, complementing the open, uncluttered layout.

### Do's

- Prioritize full-bleed, immersive imagery as background elements where appropriate.
- Use Sky Blue (#94E6FB) and Sea Foam (#E5FAFF) sparingly for inactive states, borders, or subtle text accents.
- Maintain a spacious, uncluttered layout with minimal UI elements to emphasize content.
- Utilize 0px border-radius for all interactive elements to maintain a sharp, deliberate edge.
- Ensure all text, including interactive elements, uses TT Lakes at weight 400 for consistency.
- Employ transparent backgrounds for most interactive components, relying on border-based visual cues.

### Don'ts

- Avoid using saturated background colors or heavy shadows, as they create visual density inconsistent with the brand.
- Do not use solid background fills for primary buttons; instead, opt for ghost or border-only styles.
- Do not introduce additional font families or weights beyond TT Lakes 400.
- Avoid visually complex components or excessive decorative elements; keep UI simple and functional.
- Do not use varied border radii; maintain 0px radius for all corners.
- Avoid dense information blocks; break content into manageable, well-spaced sections.

### Layout

The page primarily employs a full-bleed layout, where the hero section extends to the viewport edges, featuring a prominent atmospheric image as its background. Content is placed minimally on top of this background. The overall structure appears to be max-width contained for textual content within sections, although the hero explicitly breaks this. Vertical rhythm is suggested by deliberate spacing between implied sections, though no distinct dividers are present. Navigation is minimal, consisting of a top bar with a logo and a language selector, likely sticky to maintain presence over the expansive imagery.

### Imagery

The site predominantly uses full-bleed, expansive photographic imagery of open ocean and sky, creating an immersive atmospheric backdrop. The treatment is naturalistic and high-key, with no obvious stylistic filters or heavy post-processing. The imagery serves a decorative, atmospheric role, setting the mood rather than conveying specific product information. Icons are minimal, likely monochrome (white or black), and contribute to the clean, uncluttered aesthetic.
