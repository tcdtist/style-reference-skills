---
version: alpha
name: Bou
description: Bou employs a crisp, airy aesthetic with clean typography and a strong emphasis on monochrome surfaces. Interactive elements are softened by extreme radii, creating a comfortable, approachable feel despite the stark black and white palette. Subtle background color shifts break up sections, while a singular light-green wash provides a moment of visual pause. The system prioritizes content legibility through high contrast and generous spacing.
colors:
  obsidian: "#0a0a0a"
  canvas: "#ffffff"
  mist: "#ebebeb"
  pewter: "#dbd9dc"
  faded-steel: "#858585"
  soft-jade-wash: "#cbecec"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
spacing:
  cardRadius: 4px
  buttonRadius: 1497.6px
  elementGap: 8px
  sectionGap: 60px
components:
  filled-primary-button:
    role: Calls to action, emphasized links.
  ghost-navigation-link:
    role: Navigation items, secondary actions within dark sections.
  ghost-accent-button:
    role: Secondary actions, subtle interactive elements on textured backgrounds.
  text-only-button-dark:
    role: Subtle actions or links within light sections.
  content-card:
    role: Grouping related content or feature highlights.
---

## Overview

**North Star:** Crisp canvas, pill buttons.

Bou employs a crisp, airy aesthetic with clean typography and a strong emphasis on monochrome surfaces. Interactive elements are softened by extreme radii, creating a comfortable, approachable feel despite the stark black and white palette. Subtle background color shifts break up sections, while a singular light-green wash provides a moment of visual pause. The system prioritizes content legibility through high contrast and generous spacing.

### Do's

- Use Obsidian (#0a0a0a) for primary text and interactions, ensuring AAA contrast against light backgrounds.
- Apply Canvas (#ffffff) for all main page and card backgrounds to maintain a bright, expansive canvas.
- Implement a 1497.6px border-radius for all primary action buttons, rendering them as distinct pill shapes.
- Introduce Mist (#ebebeb) as a background for secondary content blocks to create subtle visual breaking points.
- Prioritize the Custom Font at weight 400 for body text, ensuring legibility with a line-height of 1.5.
- Use 0.0600em letter-spacing consistently across all text to maintain a refined, airy feel.
- Employ the Soft Jade Wash gradient for hero sections or atmospheric backgrounds to introduce subtle, ethereal color.

### Don'ts

- Avoid arbitrary uses of color; reserve saturated hues for specific brand-aligned visual moments like the Soft Jade Wash.
- Do not deviate from the established pill and 4px radii; circularity and soft corners are key brand identifiers.
- Never use heavy shadows or gradients on interactive elements beyond what's specified, as the system favors lightness.
- Refrain from tight spacing; maintain a comfortable element gap of 8px and generous section gaps of 60px.
- Do not introduce additional font families or weights outside of the 'Custom Font' weights 300-600.
- Avoid bolding words unnecessarily; visual hierarchy is primarily managed through size and a restrained palette of weights.
- Do not use highly saturated color for text; stick to Obsidian (#0a0a0a) and Faded Steel (#858585) for optimal contrast on white/light backgrounds.

### Layout

The page adheres to a max-width contained layout, though the exact width is not explicitly defined, it maintains generous horizontal padding. The hero section often features a soft, background gradient (Soft Jade Wash) with centered headlines and minimal navigation hints. Section rhythm is managed through alternating background colors, primarily Canvas (#ffffff) and Mist (#ebebeb), with consistent vertical spacing provided by a 60px section gap. Content arrangement frequently uses a centered stack, and for showcasing work, a multi-column card-like grid with images and text overlays. Navigation is a sticky top bar with minimal links.

### Imagery

The site predominantly uses product screenshots or minimal abstract graphics, often presented without heavy adornment. Imagery is contained, rather than full-bleed, usually with either sharp 0px or soft 4px border radii, fitting neatly into the UI. There's a notable absence of lifestyle photography. Icons, when present, are simple, outlined, and monochrome, integrating seamlessly with the clean aesthetic. Imagery serves primarily to showcase client work or provide clear functional cues rather than creating atmospheric decoration.
