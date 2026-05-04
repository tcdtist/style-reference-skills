---
version: alpha
name: TWOMUCH.STUDIO
description: TWOMUCH.STUDIO embraces a digital collage aesthetic, leveraging a chaotic white canvas heavily populated with overlapping 3D objects, renders, and varied media. The UI elements are starkly minimalist and functional: monochrome, unadorned typography, and rectangular card surfaces, serving as stoic anchors within the visual deluge. The system emphasizes clear delineation of interactive elements through a single vivid lime accent, creating functional clarity amidst the visual noise.
colors:
  canvas-white: "#ffffff"
  subtle-gray: "#f4f4f4"
  border-ash: "#e5e7eb"
  warm-gray: "#dedede"
  ink-black: "#000000"
  digital-lime: "#e2ff70"
  clay-earth: "#68340e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.34px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
    letterSpacing: -0.43px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.05
    letterSpacing: -0.54px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
    letterSpacing: -0.68px
  display:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 0.9
    letterSpacing: -0.88px
spacing:
  elementGap: 4px
components:
  default-button:
    role: Informational or secondary action buttons
  hover-button:
    role: Interacted state for informational buttons
  ghost-button:
    role: Minimalist interactive elements, often for pagination or navigation
  accent-button:
    role: Small, contained informational buttons often for menu or numbers
  menu-box:
    role: Interactive menu indicator, often containing a numerical count
  card-surface:
    role: Content container for project details or informational blocks
  interactive-link:
    role: Navigational or primary links
---

## Overview

**North Star:** Digital Art Assemblage

TWOMUCH.STUDIO embraces a digital collage aesthetic, leveraging a chaotic white canvas heavily populated with overlapping 3D objects, renders, and varied media. The UI elements are starkly minimalist and functional: monochrome, unadorned typography, and rectangular card surfaces, serving as stoic anchors within the visual deluge. The system emphasizes clear delineation of interactive elements through a single vivid lime accent, creating functional clarity amidst the visual noise.

### Do's

- Prioritize 'Ink Black' (#000000) for all primary text and headings against lighter backgrounds to maintain high contrast and legibility.
- Use 'Canvas White' (#ffffff) as the default background for most content areas, providing a neutral base for complex visuals.
- Apply 'Border Ash' (#e5e7eb) for all hairline borders and subtle dividers to define content areas without adding heavy visual weight.
- Utilize 'Digital Lime' (#e2ff70) exclusively for interactive elements like active navigation items, menu indicators, and 'Shop' buttons, ensuring clear affordance.
- Maintain a compact density using a 4px base unit for all internal component spacing and 8px for element gaps to keep information tight.
- Employ ABCMonumentGrotesk (or Space Grotesk) at weight 500 for all typography, with specific letter-spacing adjustments as defined in the type scale to control visual density.
- Design all interactive buttons and cards with a 0px border radius, except for small circular elements which get a 9999px radius, creating a stark, functional aesthetic.

### Don'ts

- Do not introduce additional saturated colors beyond 'Digital Lime' (#e2ff70) or 'Clay Earth' (#68340e) into the UI, as the visual style relies on minimal accentuation.
- Avoid using drop shadows or heavy elevation; surfaces should remain flat or defined by subtle borders.
- Do not use generic typography; all text must adhere to the specified ABCMonumentGrotesk (or Space Grotesk) profiles to maintain the system's precise, dense feel.
- Steer clear of rounded corners on primary content cards or buttons; maintain a sharp, angular aesthetic for structural elements.
- Do not include large, decorative imagery that competes with the layered product visuals; imagery should serve content or clear brand identity.
- Avoid open, airy layouts. The design system is dense and uses tight spacing; larger gaps should be intentional and rare.
- Do not use highly saturated hero banners that detract from the visual 'collage'; backgrounds should remain largely neutral or monochromatic.

### Layout

The page maintains a compact, contained layout with a maximum width of 300px, heavily featuring a dense, overlapping arrangement of visual content. The hero section is characterized by a central brand identity and menu within a light background, surrounded by a chaotic, full-bleed assemblage of 3D objects and digital art. Content sections flow seamlessly with minimal vertical gaps, creating an information-dense feel. Interaction points are small, discrete textual or numerical buttons positioned within the visual noise. The overall rhythm is one of visual saturation within a constrained UI, with no distinct grid patterns for content organization beyond the overlapping elements.

### Imagery

The site's visual language is characterized by an eclectic mix of 3D renders, product photography with a studio-like cleanliness, and abstract graphics. Imagery is typically raw, unmasked, and presented as overlapping elements on a white canvas, creating a digital collage effect. Product shots are contained and focused on the object itself, rather than lifestyle context. Icons, where present, appear as monochrome text or simple outlines. The role of imagery is primarily decorative atmosphere and product showcase, with a high density that makes visuals often dominant over text.
