---
version: alpha
name: Gumroad
description: This design system feels like a digital playground, blending a stark, utilitarian aesthetic with unexpected bursts of vibrant color. The liberal use of pure black and white creates a high-contrast canvas, punctuated by a signature hot pink and other vivid, almost neon, hues. Geometric illustrations and sharp angles are softened only by pill-shaped buttons and subtle rounded card edges, creating a playful yet focused environment for digital creators.
colors:
  pitch-black: "#000000"
  light-linen: "#ffffff"
  marketplace-gray: "#f4f4f0"
  graphite-border: "#242423"
  subtle-ash: "#d1d5dc"
  creator-pink: "#ff90e8"
  sunshine-yellow: "#ffc900"
  lime-glow: "#f1f333"
  firecracker-orange: "#dc341"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.406px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.34px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.396px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.9
    letterSpacing: -1.92px
spacing:
  cardRadius: 16px
  buttonRadius: 1.67772e+07px
  elementGap: 8px
  sectionGap: 48px
components:
  button-group:
    role: 
  search-input-field:
    role: 
  feature-cards:
    role: 
  primary-black-button:
    role: Critical CTAs
  ghost-header-button:
    role: Navigation links, secondary actions in headers
  outline-pill-button:
    role: Tertiary actions, filters, tags
  github-link-button:
    role: External links to code repositories
  search-input-field:
    role: Primary search functionality
  ghost-input-field-dark:
    role: Placeholder for dark-themed inputs
---

## Overview

**North Star:** High-contrast digital playground. A stark black and white digital canvas splashed with vivid, almost neon, color accents.

This design system feels like a digital playground, blending a stark, utilitarian aesthetic with unexpected bursts of vibrant color. The liberal use of pure black and white creates a high-contrast canvas, punctuated by a signature hot pink and other vivid, almost neon, hues. Geometric illustrations and sharp angles are softened only by pill-shaped buttons and subtle rounded card edges, creating a playful yet focused environment for digital creators.

### Do's

- Prioritize Pitch Black (#000000) for all primary text and calls to action.
- Use Light Linen (#ffffff) as the default background for most page sections and card surfaces.
- Apply 1.67772e+07px (pill shape) border-radius only for buttons and small interactive elements like tags.
- Maintain ABC Favorit for all typography, leveraging its specific weights and letter-spacing values from the type scale.
- Utilize Creator Pink (#ff90e8) exclusively for brand iconography and illustrative elements, not for interactive states or text.
- Introduce Marketplace Gray (#f4f4f0) for subtle background differentiation in input fields or less prominent content sections.

### Don'ts

- Avoid using chromatic brand/accent colors for large blocks of text or primary UI elements; they are strictly for accents.
- Do not deviate from the specified ABC Favorit letter-spacing values, especially at larger type sizes, to preserve typographic character.
- Never introduce shadows as an elevation method; rely on color planes and borders for depth.
- Under no circumstances use default browser link styles; all links must adopt Pitch Black (#000000) or Light Linen (#ffffff) as appropriate contextually.
- Do not round corners to 24px if the element is not a larger, self-contained interactive block or card.
- Avoid mixing button styles; for primary actions, use the solid black button to maintain visual hierarchy.

### Layout

The page primarily follows a max-width contained layout, centering content within the viewport against a Light Linen background. The hero section features a centered, large headline and subtext, flanked by the signature floating coin illustrations, and is followed by a horizontal arrangement of primary and secondary CTA buttons. Subsequent sections appear to alternate between large, impactful type elements and more structured content blocks, likely arranged in multi-column grids or distinct feature sections. Vertical spacing is consistent and generous, creating a comfortable density.

### Imagery

The site uses flat, outlined illustrations with a clear geometric style. The key visual motif is a pastel pink coin with a 'G' emblazoned on it, often depicted in a dynamically floating, isometric perspective, adding a sense of movement and playfulness. These illustrations are decorative, establishing brand identity rather than explaining complex concepts. The overall density of imagery is moderate, primarily acting as background accents or small, focused product illustrations.
