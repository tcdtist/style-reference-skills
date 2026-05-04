---
version: alpha
name: Joséphine Löchen
description: Joséphine Löchen employs a stark, monochromatic aesthetic, creating a visual language that emphasizes raw content over elaborate UI. The design is a minimalist canvas where imagery and text hold equal weight, defined by precise typography, tight spacing, and an absence of color. The overall impression is one of high-fidelity, unadorned presentation, allowing the creative work to take center stage.
colors:
  ink-black: "#000000"
  canvas-white: "#ffffff"
  muted-gray: "#cecece"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
    letterSpacing: 0.21px
spacing:
  elementGap: 7px
  sectionGap: 50px
components:
  text-link-outlined:
    role: Interactive navigation and informational links
  body-text-block:
    role: Descriptive text and content listings
  header-branding:
    role: Site title
  gallery-navigation:
    role: Contextual navigation within image galleries
  information-link:
    role: Secondary navigation or utility link
---

## Overview

**North Star:** monochromatic gallery, stark and precise

Joséphine Löchen employs a stark, monochromatic aesthetic, creating a visual language that emphasizes raw content over elaborate UI. The design is a minimalist canvas where imagery and text hold equal weight, defined by precise typography, tight spacing, and an absence of color. The overall impression is one of high-fidelity, unadorned presentation, allowing the creative work to take center stage.

### Do's

- Maintain a strictly monochromatic palette, using only Ink Black (#000000), Canvas White (#ffffff), and Muted Gray (#cecece).
- Apply the EU-SwissRail-Medium font consistently for all text elements, at 14px size and 400 weight with 0.0150em letter spacing.
- Use 1px borders to define interactive areas or visual separation for text-based elements, often implied rather than explicitly drawn.
- Ensure all interactive elements animate with an 'ease' timing function over 0.4s to convey responsiveness.
- Utilize 7px as a compact default for spacing between related elements and 50px for vertical separation between distinct content sections.
- Place the brand name in the top-left corner and supplementary navigation items in the top-right, maintaining a consistent header pattern.

### Don'ts

- Introduce any saturated colors; limit the palette to the defined achromatic neutrals.
- Vary font families, sizes, or weights from EU-SwissRail-Medium 14px/400, to preserve typographic precision.
- Use prominent or heavy shadows for elevation; rely on subtle visual cues like borders and compact spacing.
- Break the full-bleed content layout with a max-width container; content should extend to the viewport edges.
- Decorate with graphic elements that are not core to the content itself; the focus is on content presentation.
- Disturb the compact spacing rhythm with large, airy gaps, particularly for element gaps.

### Layout

The site follows a full-bleed layout model, where primary content, mainly large-scale photography, extends edge-to-edge. The hero section is a full-viewport image with crisp, minimal navigation text overlaid at the top left and right. Sections flow seamlessly without distinct visual dividers or alternating background bands, maintaining consistent vertical spacing. Content is highly image-dominant, using a minimal grid for text arrangements, mostly stacking text centrally or in small, precise blocks. The navigation is a fixed top bar with a left-aligned brand name and right-aligned links, maintaining a subtle presence over the full-bleed imagery.

### Imagery

The site primarily features high-contrast, black and white fine-art photography. Images are full-bleed, occupying the entire viewport or significant sections of it, serving as the dominant visual content rather than decorative elements. There are no rounded corners or complex masking; images are presented squarely, often with a raw, unedited edge quality, emphasizing the starkness and directness of the work. Icons are not present, and the visual language is entirely image-driven with minimal interface elements.
