---
version: alpha
name: Bibliothèque
description: Bibliothèque embraces a stark, high-contrast dark mode aesthetic where pure black canvas meets crisp white typography. The design emphasizes content-forward presentation with minimal UI distraction, relying on a restrained typographic hierarchy and ample negative space to define structure. Interactions are subtle, often border-based, maintaining the monochrome integrity, with a focus on presenting strong editorial content without overt visual flair.
colors:
  midnight-noir: "#000000"
  canvas-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.22
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.22
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
  body-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.22
spacing:
  elementGap: 5px
  sectionGap: 47px
components:
  project-card:
    role: Displaying project thumbnails and titles.
  navigation-link:
    role: Interactive menu items in the main navigation.
---

## Overview

**North Star:** Monochrome Editorial Command: Pure black and white, sharp text, and border-defined interactions create an atmosphere of focused, high-contrast authority.

Bibliothèque embraces a stark, high-contrast dark mode aesthetic where pure black canvas meets crisp white typography. The design emphasizes content-forward presentation with minimal UI distraction, relying on a restrained typographic hierarchy and ample negative space to define structure. Interactions are subtle, often border-based, maintaining the monochrome integrity, with a focus on presenting strong editorial content without overt visual flair.

### Do's

- Maintain a strict monochrome palette using only `Midnight Noir` (#000000) and `Canvas White` (#ffffff).
- Utilize `Unica77 LL` weight 400 for all typography, varying only size and line-height for hierarchy.
- Implement `0px` border-radius for all elements, maintaining a sharp, angular aesthetic.
- Prioritize generous negative space; the canvas is a prominent design element.
- Use subtle border changes or text color shifts for interactive states, avoiding fills or robust shadows and leveraging `ACTION_BORDER` colors where appropriate.
- Structure content with clear, compact sections and consistent `5px` element gaps.

### Don'ts

- Introduce any saturated or chromatic colors; the system is strictly achromatic.
- Use any custom border-radius values other than `0px`.
- Apply elevation via box-shadows; the design favors a flat aesthetic.
- Employ multiple font families or weights beyond `Unica77 LL` 400.
- Break the consistent vertical rhythm provided by the `5px` element gap and other specified spacing tokens.
- Use large, decorative imagery that distracts from the core content and typographic focus.

### Layout

The page adheres to a full-bleed layout, where content spans the entire viewport width, creating an immersive experience. The hero section, if present, is likely a full-width block with centered typographically-driven content. Section rhythm is driven by consistent vertical spacing, creating distinct yet seamlessly flowing content blocks without overt dividers. Content arrangement primarily appears to be vertical stacks of text, with projects perhaps arranged in a grid that respects the `0px` card padding. Navigation is a minimal top bar, suggesting a subtle, always-present control without being intrusive.

### Imagery

The site's visual language is characterized by an almost complete absence of decorative imagery; instead, it uses the UI itself as the primary visual element. When present, images are content-driven project showcases, likely presented without additional borders or visual treatments, blending seamlessly into the dark canvas. Icons are minimal, likely monochromatic line icons if any, maintaining the stark aesthetic. The density is extremely text-dominant, allowing information and typography to command attention.
