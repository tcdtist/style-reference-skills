---
version: alpha
name: Tally Forms
description: Tally Forms presents a lighthearted, yet highly functional workspace. Its design language blends clean, achromatic UI elements with playful, hand-drawn illustrations and a singular vibrant blue accent for primary actions. Surfaces are layered subtly with soft shadows, creating depth without heaviness. Typography is crisp and purposeful, maintaining readability amidst the visual whimsy. The overall experience is one of approachable productivity.
colors:
  midnight-charcoal: "#37352f"
  white-canvas: "#ffffff"
  soft-mist: "#e0e0df"
  ash-gray: "#898884"
  steel-gray: "#777672"
  jet-black: "#000000"
  faded-ink: "#45433e"
  tally-blue: "#0070d7"
  sketch-pink: "#f81ce5"
  soft-sketch-pink: "#fcadf6"
  gradient-aura: "#8a46ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: -0.403px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.465px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.558px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.682px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.25
    letterSpacing: -0.806px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
    letterSpacing: -1.116px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -1.984px
spacing:
  cardRadius: 10px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 30px
components:
  primary-action-button:
    role: Button
  ghost-navigation-button:
    role: Button
  standard-card:
    role: Card
  elevated-feature-card:
    role: Card
  accent-border-card:
    role: Card
  input-field:
    role: Form Element
  product-hunt-award-badge:
    role: Badge
---

## Overview

**North Star:** white canvas, playful ink sketches

Tally Forms presents a lighthearted, yet highly functional workspace. Its design language blends clean, achromatic UI elements with playful, hand-drawn illustrations and a singular vibrant blue accent for primary actions. Surfaces are layered subtly with soft shadows, creating depth without heaviness. Typography is crisp and purposeful, maintaining readability amidst the visual whimsy. The overall experience is one of approachable productivity.

### Do's

- Prioritize 'Tally Blue' #0070d7 for all primary interactive elements, ensuring strong visual hierarchy for actions.
- Use a 10px border-radius for all cards and container elements to maintain a consistent soft geometric aesthetic.
- Employ the multi-layered shadow rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 3px 9px 0px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px for elevated cards.
- Maintain 'White Canvas' #ffffff as the dominant background for all content areas, providing a clean foundation.
- Apply 'Inter' font with appropriate weights and sizes from the scale, ensuring text clarity and consistent letter-spacing of -0.0310em.
- Integrate playful Sketch Pink #f81ce5 for decorative accents, illustrations, or subtle highlights, contrasting with the neutral UI.
- Utilize 8px for most element gaps and element block padding around interactive controls for a comfortable density.

### Don'ts

- Avoid using multiple chromatic colors for primary actions; reserve 'Tally Blue' #0070d7 for this role.
- Do not introduce strong, hard-edged shadows; maintain the soft, layered elevation style.
- Refrain from using sharp corners on interactive elements or cards; always apply a border-radius of 7px or 10px.
- Do not deviate from the Inter typeface; it is fundamental to the brand's typographic identity.
- Avoid excessive use of vivid accent colors; they should act as punctuation, not dominate the visual field.
- Do not use high-contrast borders on cards; elevation should primarily be conveyed through subtle box-shadows.
- Do not use generic or default system shadows; always apply the specified multi-layered shadows for cards.

### Layout

The page structure is primarily max-width contained with content centered. The hero section features a large, centered headline over a white background, implicitly full-bleed via background-color, with playful illustrations around it. Vertical rhythm is established by consistent section gaps, although some sections are visually connected. Content is arranged using alternating text-left/image-right or centered stacks, sometimes employing a two-column grid for feature comparisons or information blocks. Cards are often arranged in grids. The layout is spacious, allowing elements to breathe. Navigation is a sticky top bar.

### Imagery

The site uses a combination of playful, hand-drawn vector illustrations and product screenshots. Illustrations are organic and 'sketchy,' using a mix of Sketch Pink, Gradient Aura, and desaturated grays like Ash Gray for outlines and fills, adding a whimsical touch. These are often scattered around the page, sometimes overlapping. Product screenshots are typically clean, direct, and contained within card components, focusing on the interface itself with minimal context. Icons are primarily outlined or solid, matching the sketch aesthetic or functional branding.
