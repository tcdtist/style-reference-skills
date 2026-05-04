---
version: alpha
name: Pauliandsisters
description: The Pauli & Sisters visual system evokes a natural and understated aesthetic, built upon a palette of organic greens and soft neutrals. Typography balances elegant, structured serifs with clean, approachable sans-serifs, creating a grounded yet refined feel. Spacing is generous, allowing elements to breathe and emphasizing content clarity over density. Components prioritize utility and a sense of craft, often appearing as subtle outlines or ghost elements rather than bold, filled forms.
colors:
  forest-canopy: "#152800"
  spring-meadow: "#d8ffa4"
  limestone: "#8b9682"
  sky-pale: "#d0e3ff"
  faded-denim: "#bdd2dc"
  azure-haze: "#a0c8ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
spacing:
  elementGap: 6px
  sectionGap: 70px
components:
  outline-ghost-button:
    role: Primary call to action.
  outline-text-input:
    role: User input fields.
  badge-with-padding:
    role: Informational labels or tags.
---

## Overview

**North Star:** Organic botanical serenity

The Pauli & Sisters visual system evokes a natural and understated aesthetic, built upon a palette of organic greens and soft neutrals. Typography balances elegant, structured serifs with clean, approachable sans-serifs, creating a grounded yet refined feel. Spacing is generous, allowing elements to breathe and emphasizing content clarity over density. Components prioritize utility and a sense of craft, often appearing as subtle outlines or ghost elements rather than bold, filled forms.

### Do's

- Always use 'Forest Canopy' (#152800) for primary text and key interactive elements.
- Prioritize 'Spring Meadow' (#d8ffa4) and 'Sky Pale' (#d0e3ff) for background sections to maintain brand neutrality.
- Employ generous vertical spacing, primarily using `sectionGap` of 70px between major content blocks.
- Set borders to 0px radius across all components for a sharp, deliberate aesthetic.
- Use Cooper Lt BT Light for all main headings and Sharp Sans for body copy and navigation links.
- Implement the 'Outline Ghost Button' for primary calls to action to reinforce the subtle interaction style.
- Ensure all input fields utilize a 'Limestone' (#8b9682) outline for consistent form styling.

### Don'ts

- Avoid solid, filled buttons; all primary actions should be ghosted or outlined.
- Do not introduce strong accent colors outside the defined palette of greens and cool neutrals.
- Refrain from using any border-radius greater than 0px on UI elements.
- Avoid dense layouts; always maintain the generous 70px `sectionGap` between primary content blocks.
- Do not apply shadow to any component, maintaining a flat and clean visual style.
- Never use a different font family for headings or body text than Cooper Lt BT Light and Sharp Sans, respectively.
- Do not use inline padding for elements within components where specific `elementGap` of 6px or `cardPadding` of 24px should apply.

### Layout

The page uses a maximum width of 1341px, centered, creating a contained content experience. The hero section often features a full-width image with text overlaid, sometimes with a split layout incorporating a solid color panel. Section rhythm is managed through consistent vertical spacing of 70px and alternating background colors (Spring Meadow, Sky Pale, Faded Denim). Content is arranged in alternating text-left/image-right patterns, centered stacks for headlines, and occasional 2-column breakdowns for detailed information. Navigation is a sticky top bar with centrally aligned brand logo and dispersed links.

### Imagery

The visual language for imagery is a mix of product photography and stylized abstract graphics. Photography consists of authentic, unedited shots of models in natural poses, often with a subtle light blue or green tint. Product elements are minimal, tightly cropped, and presented directly. Illustrations are flat, organic shapes, relying on the brand's green palette. Icons are minimal, outlined, and monochromatic, maintaining a light stroke weight.

### Elevation

The design intentionally avoids shadows to create a flat, natural, and grounded aesthetic. All depth is conveyed through distinct background color shifts and generous spacing rather than simulated elevation.
