---
version: alpha
name: Charlie
description: Charlie Le Maignan showcases a bold, high-contrast visual identity, blending classic editorial typography with experimental letterforms. The system operates on a stark black canvas, punctuated by intense red and crisp white. Typography takes center stage, acting as both content and artistic expression, with custom fonts driving a distinctive, almost art-gallery aesthetic. Component design is minimal, emphasizing outlines and high contrast over complex surfaces or shadows.
colors:
  midnight-ink: "#000000"
  paper-white: "#ffffff"
  concrete-gray: "#838383"
  alert-red: "#ff0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.32
  subheading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.08
  heading:
    fontFamily: "system-ui"
    fontSize: 145px
    lineHeight: 0.7
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 360px
    lineHeight: 0.7
    letterSpacing: -0.079px
spacing:
  buttonRadius: 100px
  elementGap: 30px
  sectionGap: 59px
components:
  ghost-navigation-button:
    role: Ghost button for primary navigation
  filled-navigation-button:
    role: Filled button for active navigation states
  footer-link:
    role: Secondary interactive elements in the footer
  hero-banner-red:
    role: Full-width background section for dramatic visual impact
---

## Overview

**North Star:** High-contrast editorial experimentalism

Charlie Le Maignan showcases a bold, high-contrast visual identity, blending classic editorial typography with experimental letterforms. The system operates on a stark black canvas, punctuated by intense red and crisp white. Typography takes center stage, acting as both content and artistic expression, with custom fonts driving a distinctive, almost art-gallery aesthetic. Component design is minimal, emphasizing outlines and high contrast over complex surfaces or shadows.

### Do's

- Prioritize text as a primary visual element, using Brasparz Variable for large, impactful headlines.
- Maintain high contrast with a strict black and white base palette; use Alert Red sparingly for strong statements.
- Apply a 100px border radius to all buttons to create a distinct pill shape.
- Utilize NeueHaas for all functional UI elements, ensuring readability against the expressive display typography.
- Implement the large negative letter-spacing provided for Brasparz Variable headlines to achieve the signature condensed aesthetic.
- Use Paper White for borders and text on dark backgrounds to define interactive elements and important information.

### Don'ts

- Avoid using multiple chromatic colors; limit color accents strictly to Alert Red.
- Do not introduce complex UI shadows, as the system relies on high-contrast borders and solid color blocks for depth.
- Refrain from using moderate or low-contrast text on dark backgrounds; always ensure text elements are Paper White or Concrete Gray for legibility.
- Do not deviate from the specified custom typefaces; their unique characteristics are central to the brand identity.
- Avoid generic button shapes; buttons must maintain the distinct pill shape with a 100px border radius.
- Do not use subtle background patterns or textures; surfaces should remain flat and monochromatic.

### Layout

The page primarily uses a full-bleed layout for sections, but content within these sections is constrained to a `pageMaxWidth` of 1306px, centered. The hero pattern features large-format typography (Brasparz Variable) over a full-bleed Alert Red background. Sections maintain consistent vertical spacing of 59px. Content is arranged in alternating blocks, often a full-bleed color block followed by a dark background section. Navigation is a minimal top bar with ghost or filled pill-shaped buttons.

### Imagery

The site primarily uses bold, custom typography as its main imaginal and graphic element. When present, imagery (implied in background content) is likely treated with high contrast and minimal adornment, often acting as a canvas for text. Icons are implied to be minimal and monochromatic (Paper White on Midnight Ink) with defined strokes. The overall density is image-light, text-dominant, with typeforms themselves providing visual richness.
