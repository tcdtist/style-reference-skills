---
version: alpha
name: Kobu
description: Kobu employs a sophisticated, exclusive ambiance, built on a minimalist achromatic palette. Deep blacks and off-white neutrals provide a clean canvas for high-quality photography, while precise typography, featuring a striking large serif for branding and refined sans-serifs for content, conveys an understated luxury. The system prioritizes ample whitespace and minimal UI elements, letting content and imagery speak, with borders and subtle text variations indicating interactivity and hierarchy.
colors:
  ink-black: "#000000"
  off-white-canvas: "#f9f5f2"
  ghost-white: "#ffffff"
  detail-gray: "#242429"
  subtle-gray: "#919191"
  dark-charcoal: "#3e3e3e"
  shadow-dark: "#070707"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.25
    letterSpacing: 0.007px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.43
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
spacing:
  elementGap: 10px
  sectionGap: 60px
components:
  navigation-link:
    role: Top navigation items
  minimal-card:
    role: Content container for media and text pairings
  feature-badge-white:
    role: Small informational tags on images (e.g., 'Featured', 'New')
  feature-badge-dark:
    role: Small informational tags on images (e.g., 'Featured', 'New')
---

## Overview

**North Star:** Gallery Wall on Linen Canvas

Kobu employs a sophisticated, exclusive ambiance, built on a minimalist achromatic palette. Deep blacks and off-white neutrals provide a clean canvas for high-quality photography, while precise typography, featuring a striking large serif for branding and refined sans-serifs for content, conveys an understated luxury. The system prioritizes ample whitespace and minimal UI elements, letting content and imagery speak, with borders and subtle text variations indicating interactivity and hierarchy.

### Do's

- Prioritize photography and rich content over UI elements, using the Off-White Canvas background (#f9f5f2) as a clean stage.
- Use Gill Sans MT Pro at large sizes and Ink Black (#000000) for primary headlines to establish an immediate sense of scale and brand identity.
- Define interactive elements like navigation links with subtle hairline borders in Detail Gray (#242429), rather than background fills.
- Employ ample whitespace. Use 60px as the default vertical section gap and 10px for internal element spacing to create breathing room.
- Use Fira Mono for metadata or supplementary information, applying its characteristic wide letter-spacing to underscore a crafted, editorial feel.
- Maintain an achromatic palette. Introduce color only through rich, natural photography.
- Ensure all card-like components have a border-radius of 0px for a sharp, architectural quality.

### Don'ts

- Avoid heavy borders, drop shadows, or background fills on cards; let imagery and typography define content blocks.
- Do not use explicit background colors for primary buttons; rely on transparent backgrounds with text and subtle borders.
- Refrain from using strong, saturated colors in the UI; the visual system is almost entirely achromatic, with color derived from content.
- Do not introduce decorative icons or graphic elements that distract from the photography or minimalist aesthetic.
- Avoid excessive element padding; elements should feel compact and integrated, allowing whitespace between them to manage density.
- Do not use 'standard' button radii; specifically use 0px or 5px (for badges) as defined by the system.
- Never use generic system fonts without carefully considering the Gill Sans and Fira Mono families for their specific roles in creating the brand's voice.

### Layout

The page primarily uses a max-width contained layout, with content centered. The hero section often features full-bleed imagery (or near full-bleed within a section) establishing an immersive feel. Sections flow seamlessly, often with consistent vertical spacing of around 60px, without hard visual dividers. Content is arranged in alternating patterns, such as text-left, image-right compositions, and responsive multi-column (e.g., 2-3 column) card grids for displaying properties. The navigation is a minimal, top-aligned header, static and unobtrusive, featuring essential links and a search icon. Density is comfortable, with a noticeable emphasis on breathable whitespace providing a gallery-like presentation.

### Imagery

The visual language is dominated by professional, high-quality photography of architectural spaces, interiors, and natural landscapes. Images are typically full-bleed or very large within their containers, acting as primary content rather than decorative elements. They lean towards a desaturated, sophisticated aesthetic, often showcasing deep greens, warm earth tones, and cool grays, reflecting a luxurious and serene atmosphere. There are minimal icons, which are thin-lined and monochrome, supporting UI functions without drawing undue attention. Imagery serves to immediately immerse the user in the 'experience' of the featured properties, occupying significant visual space relative to text.
