---
version: alpha
name: Ashleyandco
description: Ashleyandco presents a serene and understated aesthetic, rooted in subtle monochromatic branding. The interface uses generous white space and clean typography, establishing an atmosphere of calm and elegance. Components are defined by their soft ghost states and minimal borders, often blending seamlessly into surfaces, with primary actions expressed through subtle fill and text color shifts. The overall impression is one of quiet luxury, allowing content to take precedence.
colors:
  canvas: "#f6f3f0"
  ink: "#3c3c3c"
  onyx: "#000000"
  mist: "#dedfdb"
  porcelain: "#ffffff"
  ash: "#434343"
  stone: "#939393"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.1
    letterSpacing: 0.253px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.1
    letterSpacing: -0.09px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
    letterSpacing: 0.28px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.12px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 0.72
    letterSpacing: -0.21px
spacing:
  elementGap: 15px
  sectionGap: 80px
components:
  ghost-button-light-text:
    role: Default interactive element, often for secondary actions or navigation.
  ghost-button-muted-text:
    role: Subtle interactive elements, often found in footers or less prominent areas.
  ghost-button-hero-white-text:
    role: Interactive elements against dark or image backgrounds.
  primary-filled-button:
    role: Key call-to-action button for initiating primary actions.
  untouched-card-media-holder:
    role: Container for images, product listings, or informational content.
  modal-overlay-card:
    role: Dialogs and pop-ups that require a distinct surface.
---

## Overview

**North Star:** Warm gray minimalism on unbleached paper.

Ashleyandco presents a serene and understated aesthetic, rooted in subtle monochromatic branding. The interface uses generous white space and clean typography, establishing an atmosphere of calm and elegance. Components are defined by their soft ghost states and minimal borders, often blending seamlessly into surfaces, with primary actions expressed through subtle fill and text color shifts. The overall impression is one of quiet luxury, allowing content to take precedence.

### Do's

- Prioritize Neue Haas Grotesk Text 400 for all body copy and most UI elements, reserving Martina Plant for headlines to maintain visual hierarchy.
- Use #f6f3f0 (Canvas) as the primary background color for most page sections, ensuring a consistent light aesthetic.
- Employ #3c3c3c (Ink) for primary text and strong outline borders to define interactive areas without heavy fills.
- Define interactive states with subtle border changes using #000000 (Onyx) for active ghost buttons.
- Apply 0px border-radius to most buttons and interactive elements for a crisp, rectangular aesthetic.
- Maintain a clear visual hierarchy by utilizing the 80px section gap for content block separation.
- Use #434343 (Ash) for primary button backgrounds with #f6f3f0 (Canvas) text, creating a soft but distinct call to action.

### Don'ts

- Avoid using highly saturated or vibrant colors; stick to the established achromatic and muted palette.
- Do not introduce significant box-shadows or elevation effects; the design relies on flat surfaces and subtle borders.
- Do not use generic system fonts; always specify Neue Haas Grotesk Text or Martina Plant.
- Avoid unnecessary decorative elements or heavy gradients; minimalism is key to the brand's identity.
- Do not deviate from the general 0px border-radius for interactive components unless a specific, subtle 10px radius is explicitly required for a card or modal.
- Do not vary line-height significantly from the type scale values; maintain the controlled density.
- Avoid aggressive letter-spacing for body text; apply tracking judiciously as specified by the type profiles.

### Layout

The page layout utilizes a contained maximum width for primary content, centered on a light canvas. The hero section often features full-bleed atmospheric photography with text overlaid, immediately establishing a refined tone. Sections are demarcated by consistent vertical spacing (80px), creating a comfortable rhythm. Content typically alternates between text-dominant blocks, two-column text-and-image arrangements, and multi-column product grids. Navigation is a top-bar sticky header, minimal and unobtrusive. The density is spacious, providing ample breathing room around elements.

### Imagery

This site predominantly uses clean, product-focused photography and minimal graphic elements. Photography features tightly cropped products on soft, often desaturated backgrounds, with occasional lifestyle shots that maintain a muted, high-key aesthetic. Images are typically contained within rectangular frames, with sharp edges and no overlap. Icons are minimal, outlined, and monochromatic, with a fine stroke weight. The imagery serves to showcase products and create an atmospheric, curated feel rather than providing dense informational content.
