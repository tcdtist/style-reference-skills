---
version: alpha
name: Sociotype
description: Sociotype presents as a serious, editorial platform for typography, characterized by an expansive white canvas, precise black typography, and highly controlled spacing. Interaction elements are almost entirely ghosted or underlined, relying on a subtle shift to black for active states. The visual weight is carried by the large, expressive font specimens and carefully structured content blocks, rather than decorative colors or heavy UI components.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  medium-gray: "#818181"
  light-gray: "#d6d6d6"
  faded-gray: "#9d9d9d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.38
    letterSpacing: 0.88px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
    letterSpacing: 0.35px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.13
    letterSpacing: 0.26px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: 0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 251px
    lineHeight: 1.25
    letterSpacing: 2.51px
spacing:
  elementGap: 12px
  sectionGap: 120px
components:
  ghost-button-inactive:
    role: Navigational and call-to-action link styling
  ghost-button-muted:
    role: Secondary actions or menu items
  featured-card:
    role: Displaying prominent typefaces without visual distraction
  text-input:
    role: User input for forms (e.g., newsletter signup)
---

## Overview

**North Star:** Editorial White Canvas

Sociotype presents as a serious, editorial platform for typography, characterized by an expansive white canvas, precise black typography, and highly controlled spacing. Interaction elements are almost entirely ghosted or underlined, relying on a subtle shift to black for active states. The visual weight is carried by the large, expressive font specimens and carefully structured content blocks, rather than decorative colors or heavy UI components.

### Do's

- Prioritize Ink Black (#000000) for all primary text and interactive element outlines on default light backgrounds.
- Use Canvas White (#ffffff) as the dominant page, card, and footer background, establishing a clean, expansive aesthetic.
- Maintain a strict 0px border-radius for all components, including buttons, cards, and input fields, for a sharp, precise feel.
- Implement interactive elements primarily as ghost buttons or underlined text, with minimal visual styling beyond color and text decoration transitions.
- Structure content with ample vertical spacing, leveraging the implied section gap of 120px to create distinct content blocks.
- Employ the Onsite font for all functional text under 'display' sizes, ensuring consistency in body, navigation, and button labels.
- Utilize Avec Sharp, Ceno, Meso, Gestura, or Rework fonts exclusively for large, impactful display typography to showcase different font characteristics.

### Don'ts

- Avoid using saturated background colors or heavy fills for interactive elements; stick to the achromatic palette.
- Do not introduce shadows or significant elevation on cards or buttons; elements should appear flat against the canvas.
- Refrain from applying rounded corners to any UI elements; all corners should be sharp 0px radius.
- Do not use highly contrasting accent colors for calls to action; rely on text weight, size, and subtle border changes for emphasis.
- Avoid dense, clustered layouts; allow generous empty space around content sections and individual elements.
- Do not deviate from the specified typefaces Onsite, Avec Sharp, Ceno, Meso, Gestura, or Rework; no other typefaces are part of this system.
- Do not use generic system fonts or default browser styles for links; ensure all interactive text uses the defined ghost button or underlined styles.

### Layout

The page maintains a full-bleed structure without a fixed maximum width for its main content, allowing elements to span the entire viewport. The hero section often features a large-scale, sometimes abstract image or graphic background with centered, prominent type specimen alongside informative text. Content sections below the hero typically follow a two-column layout with text on one side and associated visuals or another type specimen on the other. Navigation is a minimalist top bar with ghosted links, and a very large, eye-catching text (Sociotype) floats over the hero graphic. Vertical rhythm is established through generous, consistent section gaps, creating a spacious, editorial flow rather than a dense grid.

### Imagery

This design system relies heavily on large-scale typographic specimen imagery and abstract, sometimes vibrant, graphic backgrounds behind hero sections. Photography is absent. Illustrations are primarily abstract, organic, and colorful, serving as striking backdrops that contrast with the monochrome UI. Icons, if present, are minimal vector outlines, like the 'Cart' icon, suggesting a thin stroke weight. The imagery serves a decorative, atmospheric role, often full-bleed in hero sections, providing visual intrigue without distracting from the UI or text.
