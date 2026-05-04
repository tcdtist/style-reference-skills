---
version: alpha
name: Liron Moran Interiors
description: Liron Moran Interiors employs a bold, architectural visual style, characterized by a dominant dark canvas that creates a sophisticated, gallery-like setting for minimalist UI elements. Overlaid huge serif typography with transparent image cutouts defines an immersive and dramatic presentation. The sparse use of neutral colors and ample whitespace around oversized elements contributes to a feeling of premium, considered design where content is paramount and UI recedes until interaction.
colors:
  greyscale-canvas: "#41443e"
  overlaid-paper: "#f2f0ed"
  text-and-accent-light: "#eeeeee"
  midnight-ink: "#000000"
  deepest-black: "#050505"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 0.8
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 0.8
    letterSpacing: -0.004px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 0.8
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 0.8
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 0.8
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 0.8
  display-xl:
    fontFamily: "system-ui"
    fontSize: 93px
    lineHeight: 0.8
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 185px
    lineHeight: 0.8
  display-max:
    fontFamily: "system-ui"
    fontSize: 260px
    lineHeight: 1
spacing:
  buttonRadius: 50%
  elementGap: 5px
  sectionGap: 89px
components:
  ghost-circular-button:
    role: Interactive element (e.g., menu toggle, accessibility toggle)
  dark-circular-button:
    role: Interactive element (e.g., close button on overlay)
  ghost-rectangular-button:
    role: Text link or secondary action
  main-navigation-link:
    role: Top-level navigation items
---

## Overview

**North Star:** Gallery backdrop with monumental typography

Liron Moran Interiors employs a bold, architectural visual style, characterized by a dominant dark canvas that creates a sophisticated, gallery-like setting for minimalist UI elements. Overlaid huge serif typography with transparent image cutouts defines an immersive and dramatic presentation. The sparse use of neutral colors and ample whitespace around oversized elements contributes to a feeling of premium, considered design where content is paramount and UI recedes until interaction.

### Do's

- Use Greyscale Canvas (#41443e) as the dominant background color for most page sections.
- Typography should prioritize cardinalfruit-regular for large, impactful headlines, leveraging its unique serif character.
- Implement Ghost Circular Buttons (#eeeeee border/text) for subtle, interactive controls like menu toggles.
- Maintain a spacious density, with section gaps of 89px to ensure breathing room between content blocks.
- Ensure all text, borders, and icons on Greyscale Canvas backgrounds use Text and Accent Light (#eeeeee) for visibility.
- For oversized display text, use Lausanne-300 at 185px with a line height of 0.8.
- Apply 39px horizontal padding for contained content elements, complementing the spacious layout.

### Don'ts

- Avoid using highly saturated colors; maintain a largely achromatic palette apart from imagery.
- Do not introduce sharp, angular strokes or imagery against the soft, serif typography without a clear design rationale.
- Do not clutter the layout with dense information blocks; prioritize spaciousness and dramatic visual pauses.
- Avoid generic sans-serif fonts for primary headlines; the distinct serif is key to brand identity.
- Do not deviate from circular or sharp rectangular shapes for buttons; avoid rounded corner treatments.
- Do not use box shadows for elevation; rely on color contrast and spatial separation to differentiate elements.
- Do not use dark text (Midnight Ink) on Greyscale Canvas (#41443e); it lacks sufficient contrast.
