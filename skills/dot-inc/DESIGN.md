---
version: alpha
name: Dot Inc.
description: Dot Inc. employs a stark, functional aesthetic with high-contrast monochrome UI elements, punctuated by a single vibrant orange accent. The design feels spacious and robust, using generous padding and rounded corners to soften otherwise sharp information blocks. Typography is clear and direct, reinforcing a sense of precise utility. This system prioritizes straightforward presentation in a light theme environment, with color reserved for interactive elements and brand recognition.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ash-gray: "#e5e7eb"
  dark-graphite: "#1f1f1f"
  stone-gray: "#b7bfc1"
  cloud-gray: "#f5f5f5"
  charcoal-text: "#333333"
  mid-gray: "#707070"
  light-gray: "#dddddd"
  sunburst-orange: "#ff5a2f"
  flame-orange: "#f15b2b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.64
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.45
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.34
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.34
spacing:
  cardRadius: 20px
  buttonRadius: 8px
  elementGap: 24px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Primary call-to-action button, highly visible.
  outlined-call-to-action-button:
    role: Secondary action button, providing a clear but less dominant call to action.
  ghost-button:
    role: Tertiary action button or navigation item.
  standard-card:
    role: Container for content sections, features, or product details.
  alternating-background-card:
    role: Container for content sections in an alternating background layout.
  feature-badge:
    role: Highlights key features or attributes.
  image-card:
    role: Container for product imagery with descriptive text.
---

## Overview

**North Star:** Crisp monochrome utility with orange spark

Dot Inc. employs a stark, functional aesthetic with high-contrast monochrome UI elements, punctuated by a single vibrant orange accent. The design feels spacious and robust, using generous padding and rounded corners to soften otherwise sharp information blocks. Typography is clear and direct, reinforcing a sense of precise utility. This system prioritizes straightforward presentation in a light theme environment, with color reserved for interactive elements and brand recognition.

### Do's

- Use Sunburst Orange (#ff5a2f) exclusively for primary action backgrounds and brand highlights.
- Maintain a clear visual hierarchy with Plus Jakarta Sans: use heavier weights (700, 800) for headlines and 400 for body text.
- Apply generous vertical spacing between sections, adhering to multiples of 24px for `elementGap` and `sectionGap`.
- Round all interactive elements like buttons and badges with a 30px or 8px radius to convey approachability; use 20px for cards and images.
- Utilize Ash Gray (#e5e7eb) for subtle borders and dividers to maintain a light and spacious feel.
- Ensure all primary text uses Ink Black (#000000) or Dark Graphite (#1f1f1f) for maximum contrast against light surfaces.
- Employ the `Cloud Gray` (#f5f5f5) as a background for alternating content blocks to create visual rhythm without heavy division.

### Don'ts

- Do not introduce new typefaces; rely solely on Plus Jakarta Sans for all typographic needs.
- Avoid using multiple chromatic colors; restrict accents to the defined Sunburst Orange and Flame Orange derivatives.
- Do not apply drop shadows broadly to cards or sections; reserve the subtle shadow for interactive buttons only.
- Do not deviate from the established border radii; irregular rounding breaks the visual rhythm.
- Avoid dense, information-heavy layouts; favor spacious arrangements and clear visual separation.
- Do not use highly saturated colors for backgrounds; stick to the neutral palette for canvas and surfaces.
- Do not use dark backgrounds for entire pages; the system is designed around a dominant light theme.

### Layout

The page primarily uses a full-bleed top section often with a hero image, transitioning into a contained max-width content area (implicitly around 1200px based on component widths). Vertical rhythm is established through consistent section gaps (around 24px). Content often alternates between image-left/text-right and text-left/image-right patterns, providing dynamic flow. Card grids are used for features, showcasing multiple items in a structured layout. The overall density is spacious with ample white space between elements and sections, enhancing readability and focus. Navigation is a sticky top bar, providing persistent access.

### Imagery

This system features a mix of product shots and subtle ambient visuals. Product imagery is typically clean, tightly cropped, and often set against muted or dark backgrounds to emphasize the device itself. Visuals can fill containers or be softly rounded (20px radius). There is minimal use of photography or human elements, focusing instead on the technology. Icons are outlined, simple, and monochrome, often using Ink Black or a muted gray. Imagery functions primarily to showcase products and illustrate features directly.
