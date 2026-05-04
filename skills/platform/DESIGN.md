---
version: alpha
name: PLATFORM
description: PLATFORM employs a high-contrast, minimalist gallery style, reminiscent of exhibition space. The visual system relies heavily on stark black and white, creating a strong editorial feel where artwork takes center stage. Typography is reserved and precise, with tight tracking. Components are ghosted or outlined, never interfering with content, maintaining a sense of refinement and directness.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.15
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.15
  body-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.15
spacing:
  elementGap: 10px
  sectionGap: 72px
components:
  ghost-navigation-button:
    role: Interactive elements within the top navigation and inline actions.
  text-button:
    role: Call to action for secondary actions or text-based prompts.
  artwork-card:
    role: Displaying individual artworks in grid layouts.
  text-input:
    role: Form fields for user input.
---

## Overview

**North Star:** monochromatic gallery exhibition

PLATFORM employs a high-contrast, minimalist gallery style, reminiscent of exhibition space. The visual system relies heavily on stark black and white, creating a strong editorial feel where artwork takes center stage. Typography is reserved and precise, with tight tracking. Components are ghosted or outlined, never interfering with content, maintaining a sense of refinement and directness.

### Do's

- Prioritize Ink Black (#000000) for text and primary UI interactions against Canvas White (#ffffff) backgrounds to maintain high contrast and sophistication.
- Use MediumLLWeb weight 500 for all large headings (48px, 72px) with the specified letter-spacing to create an open and editorial feel.
- Maintain a strict 0px border-radius for all components and elements; rounded corners are not part of this visual language.
- Employ ghost or outlined styles for interactive elements, using Ink Black (#000000) for borders or text, to preserve content as the primary focus.
- Utilize 'elementGap' of 10px for vertical spacing between related content blocks for a compact, intentional rhythm.
- Ensure all interactive elements have hover effects that subtly highlight their interactive nature within the black and white palette.
- Keep backgrounds for all major sections and components as Canvas White (#ffffff) or transparent, allowing content to define visual interest.

### Don'ts

- Do not introduce strong chromatic colors into the core UI; color should only appear within artwork or imagery, not structural elements.
- Avoid heavy drop shadows or complex elevation; mimic the flatness of a printed page or gallery wall.
- Do not use typography weights heavier than MediumLLWeb 500; the brand's authority comes from thoughtful spacing and elegant forms, not visual weight.
- Refrain from using padding within cards displaying artwork; the art should bleed to the edge of its boundary.
- Do not vary from the established letter-spacing values for MediumLLWeb; precise tracking is a signature of this system.
- Avoid introducing rounded corners on any UI element; the design maintains a sharp, architectural edge.
- Do not use generic system fonts when MediumLLWeb (or its defined substitutes) should be used; font choice is critical to brand identity.

### Layout

The page primarily uses a full-bleed layout for the hero section, with a centered headline and subordinate text over a dark, textural background. Subsequent sections often feature a limited max-width for textual content, contrasting with grid-based image displays that utilize the full horizontal space. Content is arranged in alternating sections, typically with consistent vertical spacing. Text blocks tend to be centered or left-aligned within their containers, while image grids align to the overall page structure. Navigation is a minimalist top bar, with prominent 'PLATFORM:' branding and subtle text links.

### Imagery

This site predominantly uses large, high-resolution imagery showcasing fine art. Images are typically full-bleed within their sections or tightly cropped and contained within a 1px Ink Black (#000000) border, mimicking a framed piece. There is no usage of abstract graphics, 3D renders, or heavily treated photography. Icons are minimal, outlined Ink Black (#000000) pictograms, serving purely functional roles like search or user profile. The visual density is high on imagery, allowing the artwork to speak for itself, with explanatory text kept concise and positioned carefully around the visuals.
