---
version: alpha
name: Lightship
description: Lightship embraces a rugged, understated aesthetic, emphasizing content through a play of stark black and white interrupted by natural textures. Typography is compact and precise, maintaining clarity across varied scales. Interactive elements are either subtly integrated or appear as stark, high-contrast outlines against the dominant photographic or canvas backgrounds. The design prioritizes visual storytelling and a confident, unembellished presentation, using a warm off-white canvas and pure black to define primary surfaces and text.
colors:
  pure-black: "#000000"
  canvas: "#ffffff"
  paper-white: "#faf6ef"
  subtle-gray: "#999999"
  outline-gray: "#d9d9d9"
  medium-gray: "#a1a1a1"
  action-orange: "#fa5c40"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1
    letterSpacing: -2.25px
spacing:
  cardRadius: 0px
  buttonRadius: 20px
  elementGap: 16px
  sectionGap: 100px
components:
  text-button-dark:
    role: Ghost
  text-button-light:
    role: Ghost
  outlined-button-light:
    role: Ghost
  outlined-button-dark:
    role: Ghost
  default-card:
    role: Content Container
  circular-input:
    role: Text Input
---

## Overview

**North Star:** Black & White Canvas: a crisp, high-contrast visual journey on a warm, earthy canvas.

Lightship embraces a rugged, understated aesthetic, emphasizing content through a play of stark black and white interrupted by natural textures. Typography is compact and precise, maintaining clarity across varied scales. Interactive elements are either subtly integrated or appear as stark, high-contrast outlines against the dominant photographic or canvas backgrounds. The design prioritizes visual storytelling and a confident, unembellished presentation, using a warm off-white canvas and pure black to define primary surfaces and text.

### Do's

- Prioritize F37Bolton weight 400 for body text at 16px with Pure Black (#000000) for high readability.
- Use Canvas white (#ffffff) for all primary page backgrounds and component surfaces to maintain a clean, bright aesthetic.
- Apply a 20px border radius to all interactive links and buttons where a radius is needed, ensuring a consistent softened edge.
- Utilize Pure Black (#000000) for all significant borders, including interactive states and menu outlines.
- Maintain minimal padding values like 8px or 16px for comfortable density in elements like list items and small components.
- Ensure all card elements have a border radius of 0px to preserve the sharp, modern edge of content blocks.
- Leverage F37Bolton weight 700 with generous sizes (48px, 64px, 75px) for headlines, using a line-height of 1.0 to 1.2 for compact impact.

### Don'ts

- Avoid using multiple chromatic colors; limit vibrant accents to the Action Orange (#fa5c40) for specific decorative purposes not as interactive states.
- Do not introduce shadows or artificial elevation, as the design system relies on flat surfaces and high-contrast outlines.
- Do not use highly saturated colors for text or primary UI elements; reserve them for decorative highlights only.
- Avoid large horizontal padding on content sections; the design uses full-bleed imagery and minimal margins for key content.
- Do not use generic system fonts; F37Bolton is core to the brand's typographic identity.
- Resist using gradients or complex background patterns; the design is characterized by solid colors and photographic content contrasting with clean UI.

### Layout

The page primarily uses a full-bleed layout for hero sections, featuring large photography with overlaying text. Subsequent sections tend towards a more constrained, centered content approach, often arranging content in asymmetric compositions or overlapping elements that break a rigid grid. Section gaps are generous, notably 100px, creating ample whitespace. Navigation is a sticky top bar with minimal links, becoming a floating, semi-transparent bar upon scroll. There are no strict card grids, but rather artfully arranged images that create dynamic visual flow.

### Imagery

The imagery features high-resolution lifestyle and product photography of outdoor adventures and the Lightship travel trailer. Photos are often full-bleed or large, contained rectangles with subtly rounded corners (sometimes 20px radius). They are primarily natural, candid, and aspirational, showcasing the product in its intended use context. The overall tone is authentic and rugged, with a focus on immersive scenes and direct product views. Icons are monochrome, simple, and outlined, used functionally within the UI.
