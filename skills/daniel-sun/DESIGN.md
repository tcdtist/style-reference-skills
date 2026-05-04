---
version: alpha
name: Daniel Sun
description: This design system feels like a bold, sunny declaration. It pairs extreme typographic scale with a soft, limited color palette focused on vivid yellow and stark black and white. The visual identity hinges on the tension between playful handwritten accents and massive, condensed sans-serif headlines, creating a brand that feels both approachable and impactful.
colors:
  sunbeam-yellow: "#ffd500"
  pitch-black: "#000000"
  canvas-white: "#ffffff"
  pale-gray: "#f5f5f5"
  ash-gray: "#808080"
  silver-mist: "#a6a6a6"
  shadow-gradient: "#e6e6e6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.1
    letterSpacing: -0.648px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.35
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.9
    letterSpacing: -2.628px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 0.96
    letterSpacing: -2.992px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 246px
    lineHeight: 1
    letterSpacing: -6.888px
spacing:
  buttonRadius: 32px
  sectionGap: 64px
components:
  navigation-bar:
    role: 
  work-showcase-card:
    role: 
  button-group-cta-strip:
    role: 
  navigation-button:
    role: Interactive element
  work-showcase-card:
    role: Content display
  primary-heading-sectional:
    role: Information hierarchy
  sub-heading-descriptor:
    role: Contextual information
  hero-display-text:
    role: Brand statement
---

## Overview

**North Star:** Solar Flare Canvas. A radiant yellow burst on a clean, stark white backdrop defines the visual energy.

This design system feels like a bold, sunny declaration. It pairs extreme typographic scale with a soft, limited color palette focused on vivid yellow and stark black and white. The visual identity hinges on the tension between playful handwritten accents and massive, condensed sans-serif headlines, creating a brand that feels both approachable and impactful.

### Do's

- Use Reddit Sans Condensed (weight 900) for all main headlines and significant display text to maintain the strong, condensed visual identity.
- Pair the bold Reddit Sans Condensed with Inter Display (weight 500) for body text to ensure readability and balance.
- Introduce playful, handwritten elements using Caveat (weight 700) for dates, sub-headers like 'from 2020 'til today', or subtle accent text.
- Apply Sunbeam Yellow (#ffd500) sparingly as a vivid accent color, primarily for interactive elements or to draw attention to specific keywords.
- Maintain a predominantly Canvas White (#ffffff) and Pale Gray (#f5f5f5) background with Pitch Black (#000000) text for high contrast and readability.
- Use 32px border-radius for all primary buttons and interactive elements, giving them a distinct pill-like shape.
- Apply 14px border-radius consistently to all image containers and content cards (like Work Showcase Cards).

### Don'ts

- Do not use generic sans-serif fonts for headlines; always default to Reddit Sans Condensed for brand consistency.
- Avoid overusing Sunbeam Yellow (#ffd500); its impact comes from its scarcity and specific application.
- Do not introduce additional bold, condensed typefaces or calligraphic scripts; maintain the established font hierarchy.
- Avoid complex gradients beyond the subtle linear-gradient(rgb(230, 230, 230) 0%, rgb(166, 166, 166) 100%) for backgrounds.
- Do not use box-shadows other than rgba(0, 0, 0, 0.12) -2px 3px 3px 0px for element elevation.
- Do not introduce new border radii values; stick to 14px for cards/images and 32px for buttons.
- Avoid heavily stylized backgrounds or textures that detract from the clean canvas aesthetic.

### Layout

The page primarily uses a full-bleed design, allowing the striking yellow sunbeam graphic to dominate the initial viewport. Content sections generally appear centered but without a strict max-width, allowing for large-scale typography and images to stretch. The rhythm is characterized by distinct, vertically stacked sections, often alternating between stark white backgrounds and subtle Pale Gray (#f5f5f5). Content is arranged in prominent stacks of headline-level text, followed by descriptive copy and product showcases. There's a strong emphasis on spaciousness, with ample vertical padding between sections (implied by 'sectionGap' and general visual breaks).

### Imagery

The site uses a mix of photographic hero elements (the sunbeam graphic) and product screenshots within a clean UI. Photography is treated as a full-bleed background for the hero, creating an atmospheric backdrop. Product screenshots are contained within rounded (14px radius) card components, presented clearly with minimal embellishment, serving an explanatory and showcasing role. Icons are minimal, monochromatic, and likely part of a utility set, primarily functional rather than decorative. The overall density is balanced, with imagery serving as clear illustrative content contrasted against large type.
