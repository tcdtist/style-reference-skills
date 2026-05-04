---
version: alpha
name: Simon Liesinger
description: Simon Liesinger's design system evokes an architectural blueprint on a muted canvas, utilizing precise typography and a stark achromatic palette. It emphasizes clear visual boundaries and a spacious layout, highlighted by subtle hairline borders. A single vivid red accent is reserved exclusively for navigation cues, drawing attention without visual clutter. The overall effect is one of restrained precision, where information is carefully presented with minimal adornment.
colors:
  canvas-fog: "#f2f2f2"
  midnight-graphite: "#181818"
  deep-ink: "#000000"
  muted-slate: "#6e6e6e"
  navigation-ember: "#fc523b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.28
    letterSpacing: 0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.22
    letterSpacing: 0.464px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.86
    letterSpacing: 0.576px
spacing:
  elementGap: 10-40px
  sectionGap: 160px
components:
  navigation-link:
    role: Primary site navigation links at the footer.
  contact-link:
    role: Interactive contact information links.
  section-divider-panel:
    role: Separating content sections and categories.
  work-award-list-item:
    role: Displaying entries in lists of work or awards.
---

## Overview

**North Star:** Architectural blueprint on warm grey

Simon Liesinger's design system evokes an architectural blueprint on a muted canvas, utilizing precise typography and a stark achromatic palette. It emphasizes clear visual boundaries and a spacious layout, highlighted by subtle hairline borders. A single vivid red accent is reserved exclusively for navigation cues, drawing attention without visual clutter. The overall effect is one of restrained precision, where information is carefully presented with minimal adornment.

### Do's

- Use Deep Ink (#000000) for all headings to establish strong visual presence, with at least 30px left/right padding.
- Employ Canvas Fog (#f2f2f2) as the primary page background and for subtle, recessed content areas.
- Define clear content boundaries using 1px solid Midnight Graphite (#181818) borders, especially for section dividers and list elements.
- Reserve Navigation Ember (#fc523b) exclusively for the arrow icon within footer navigation links and their hover/active states.
- Maintain a spacious rhythm between content blocks by applying section gaps of 160px vertically.
- Apply `GaramondRg` with '0.016em' letter-spacing for all significant body text and subheadings to ensure a refined editorial aesthetic.
- Use `HelveticaRg` with its specific font features for all interactive links and compact informational text (e.g., contact info, small notes).

### Don'ts

- Do not use Navigation Ember (#fc523b) for any purpose other than navigation directional cues or their associated borders.
- Avoid using drop shadows or heavy elevation; prefer flat surfaces and hairline borders for visual separation.
- Do not introduce new typefaces; rely solely on Times, GaramondRg, and HelveticaRg.
- Refrain from using strong, solid background colors other than Midnight Graphite (#181818) or Canvas Fog (#f2f2f2) for structural elements.
- Avoid decorative imagery; stick to minimalist wireframe-style graphics or pure UI elements.
- Do not use highly saturated colors for text or backgrounds outside of the defined accent color for navigation.
- Do not introduce rounded corners; maintain sharp, crisp edges for all UI elements to uphold the architectural aesthetic.

### Layout

The page primarily uses a full-bleed, vertically stacking layout. The hero section features large, centered text elements over the Canvas Fog background, with abstract graphics. Subsequent sections alternate between full-width content panes and structured grid-like displays (e.g., service/award lists) using the defined border patterns. The footer is a full-width Midnight Graphite bar. The overall rhythm is spacious with significant section gaps and consistent padding for encased content, creating a well-organized, almost grid-paper feel.

### Imagery

The site uses abstract, red-lined wireframe 3D graphics (like the down arrow) as the primary visual element, serving as decorative atmosphere rather than conveying content. Icons, such as the '↗' for external links, are minimalistic, either line-drawn in text color or the accent color for navigation. There are no photographs or complex illustrations, contributing to a text-dominant, clean interface where graphics serve as geometric punctuation.
