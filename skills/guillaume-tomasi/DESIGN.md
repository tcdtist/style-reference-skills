---
version: alpha
name: Guillaume Tomasi
description: The Guillaume Tomasi design system uses a stark, high-contrast aesthetic characterized by a pure white canvas and dominant black typography. The visual rhythm is established through a seemingly random but controlled placement of large, non-interactive rectangular blocks of varied neutral tones and cropped atmospheric photography. Minimalism in color is paired with a strong, industrial typeface, giving the impression of an art gallery catalogue or editorial spread.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  stone-gray: "#bfbfbf"
  deep-slate: "#212121"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.7
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.46
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.15
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 0.88
spacing:
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-text-button:
    role: Interactive text link, often used for navigation and system controls.
---

## Overview

**North Star:** Gallery Canvas, Monochromatic Depth

The Guillaume Tomasi design system uses a stark, high-contrast aesthetic characterized by a pure white canvas and dominant black typography. The visual rhythm is established through a seemingly random but controlled placement of large, non-interactive rectangular blocks of varied neutral tones and cropped atmospheric photography. Minimalism in color is paired with a strong, industrial typeface, giving the impression of an art gallery catalogue or editorial spread.

### Do's

- Prioritize a high-contrast palette of Canvas White backgrounds and Ink Black foregrounds for all primary content.
- Maintain a monochromatic base with occasional inclusion of Stone Gray and Deep Slate as abstract visual blocks or background tints.
- Use NeueMachina 400 for all typography, ensuring consistency across headlines, body, and UI elements.
- Apply 0px border-radius to all interactive and static elements to maintain sharp, unyielding geometric forms.
- Implement motion with `ease` timing functions and durations of 0.5s or 1s for subtle, controlled transitions.
- Treat images as art objects, often with stark compositions resembling photographic prints, integrated as large blocks in the layout.
- Utilize 20px of spacing as a default `margin-bottom` for content blocks and `padding-left`/`padding-right` for container elements.

### Don'ts

- Avoid color in the primary UI; reserve any color for embedded imagery or specific artistic elements.
- Do not use rounded corners or any soft shaping on UI components; all elements should adhere to strict 0px radius.
- Refrain from using drop shadows or complex elevation; maintain a flat, two-dimensional aesthetic for all surfaces.
- Do not introduce decorative gradients; preserve the solid, stark color blocks.
- Avoid decorative iconography; the visual language relies on pure text and photographic elements.
- Do not use excessive visual hierarchy through varying font weights; all typography is NeueMachina 400, relying on size and position for emphasis.
- Prevent cluttered layouts; prioritize ample whitespace, with spacing mostly derived from the 20px and 40px tokens.

### Layout

The page structure is full-bleed, adapting to the viewport width without a maximum content constraint. The hero section often features a large, centered headline or an impactful image block. Sections flow seamlessly, using consistent vertical spacing but without alternating background bands. Content arrangement is highly asymmetric, eschewing traditional grids for an artfully scattered composition of text blocks and visual elements, creating dynamic visual tension rather than ordered rhythm. The navigation is a minimalist top bar, likely sticky, with minimal links or a simple 'menu' toggle.

### Imagery

This system primarily uses atmospheric and sometimes abstract photography or image-like monochromatic blocks. Images are treated as embedded art pieces, often cropped tightly within rectangular frames. They are typically product-focused or environmental, presented without rounded corners or complex masking, contributing to the overall starkness. A single style of minimalist, outlined icon may be present, but the system is image-heavy in its content sections rather than text-dominant, with images serving both decorative atmosphere and explicit content.
