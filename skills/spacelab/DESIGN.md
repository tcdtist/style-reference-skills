---
version: alpha
name: Spacelab
description: Spacelab employs a stark, high-contrast visual language reminiscent of architectural blueprints or gallery spaces. Typography is critical, with a single, highly legible sans-serif used across all scales, grounding the design in clarity and precision. The visual field prioritizes ample negative space; elements are sparsely distributed, creating a sense of calm and order. A single muted violet-blue serves as the primary accent, providing a deep, grounding touch of color against an otherwise achromatic palette of black, white, and subtle grays. Component styling is minimalist and functional, relying on sharp edges and direct expression rather than ornamentation.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  graphite: "#2c2222"
  stone-gray: "#b2b4b1"
  deep-violet: "#495472"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1
    letterSpacing: 0.011px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.2
    letterSpacing: 0.011px
  body:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.1
    letterSpacing: 0.011px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.15
    letterSpacing: 0.011px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: 0.011px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.07
    letterSpacing: 0.011px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 21px
  sectionGap: 42px
components:
  primary-action-button:
    role: Interactive element
  navigation-link-list:
    role: Navigation element
  feature-card:
    role: Content display
  circular-image-card:
    role: Visual content display
  subtle-link-text:
    role: Secondary navigation or semantic link
---

## Overview

**North Star:** Architectural blueprint on white marble

Spacelab employs a stark, high-contrast visual language reminiscent of architectural blueprints or gallery spaces. Typography is critical, with a single, highly legible sans-serif used across all scales, grounding the design in clarity and precision. The visual field prioritizes ample negative space; elements are sparsely distributed, creating a sense of calm and order. A single muted violet-blue serves as the primary accent, providing a deep, grounding touch of color against an otherwise achromatic palette of black, white, and subtle grays. Component styling is minimalist and functional, relying on sharp edges and direct expression rather than ornamentation.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background, creating an expansive, gallery-like canvas for all content.
- Use Ink Black (#000000) for primary headings and prominent text elements to ensure high contrast and visual weight.
- Apply Deep Violet (#495472) exclusively for primary interactive elements like button backgrounds and active states, making actions deliberate and distinct.
- Maintain sharp, unrounded corners (0px radius) for all primary components like buttons and cards, reinforcing a precise, architectural aesthetic.
- Employ a consistent 21px `elementGap` and `cardPadding` for horizontal and some vertical spacing, establishing a clear and comfortable rhythm.
- Use Helvetica Neue 400 across all typographic elements with a consistent 0.0110em letter-spacing to ensure legibility and a unified, refined voice.
- Integrate Stone Gray (#b2b4b1) for less prominent text, inactive links, or subtle decorative lines to provide visual texture without competing with primary content.

### Don'ts

- Avoid using rounded corners on any primary interactive elements or content containers; the system is defined by its sharp, clean edges.
- Do not introduce additional chromatic colors beyond the established Deep Violet (#495472) as the primary brand accent, to maintain a minimalist palette.
- Refrain from using shadows or gradients on interactive elements or surfaces; the design relies on flat, direct visual communication.
- Do not increase letter-spacing beyond 0.0110em for any text, as the system relies on tight, controlled typography for its crisp appearance.
- Avoid dense UI layouts; maintain generous negative space around elements and between sections to emphasize clarity and breathability.
- Do not use decorative background patterns or expressive textures; the design values clean, solid surfaces and high contrast.
- Avoid mixing typefaces; the design relies on the singular, precise character of Helvetica Neue for all textual expression.

### Layout

The page adheres to a maximal-width, side-aligned layout with no explicit pageMaxWidth, allowing content to stretch. The hero section features a prominent brand name and navigation vertically aligned to the left, occupying significant negative space adjacent to a large, compelling image. Content sections appear to be vertically stacked, defined by generous vertical spacing (42px `sectionGap`) and large visual blocks, often with a clear left-aligned typographic emphasis and a significant image on the right or below. The main layout seems to be a two-column division between navigation/branding (left, narrow) and content (right, wide), which then breaks into full-width content blocks. The rhythm is sparse and open, creating a sense of spaciousness and ease of focus.

### Imagery

The site heavily features high-resolution photography, specifically of architectural interiors and people within these spaces. Images are contained and often full-width or large-scale, acting as primary content blocks. When shown in component context, like the Circular Image Card, they are cropped precisely. There's an absence of decorative illustrations or abstract graphics. Photography is likely high-key but can include natural lighting, maintaining a realistic and professional aesthetic. Icons are minimal, likely monochromatic and vector-based, serving purely functional roles.
