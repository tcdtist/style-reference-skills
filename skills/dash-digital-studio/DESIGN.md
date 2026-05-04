---
version: alpha
name: Dash Digital Studio
description: Dash Digital Studio employs a stark and confident design language, built on a monochromatic palette of industrial grays and pure black. Typography is sharp and impactful, leveraging precise letter-spacing to create a sense of focused clarity. The layout is disciplined, using robust hairline borders to define content blocks, and relies on subtle motion and confident imagery over color to convey a sense of premium precision.
colors:
  storm-canvas: "#f0f0f0"
  carbon-text: "#2a2a2a"
  midnight-ink: "#000000"
  cloud-gray: "#fafafa"
  slate-divider: "#d6d6d6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: -0.36px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: -0.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.9
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 0.88
    letterSpacing: -2.1px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 101px
    lineHeight: 0.8
    letterSpacing: -3.03px
spacing:
  elementGap: 4px
  sectionGap: 115px
components:
  ghost-nav-link:
    role: Navigation item and secondary calls to action
  text-accent-button:
    role: Outlined textual action prompts, typically for 'View Case Study' or 'More +' links
  project-card:
    role: Displays individual portfolio projects or featured content.
  information-block-card:
    role: Structured content blocks, such as client testimonials or service descriptions.
  pill-badge:
    role: Small, descriptive labels or navigational markers.
---

## Overview

**North Star:** Architectural blueprints on concrete

Dash Digital Studio employs a stark and confident design language, built on a monochromatic palette of industrial grays and pure black. Typography is sharp and impactful, leveraging precise letter-spacing to create a sense of focused clarity. The layout is disciplined, using robust hairline borders to define content blocks, and relies on subtle motion and confident imagery over color to convey a sense of premium precision.

### Do's

- Prioritize Founders Grotesk for all primary textual content and UI, defaulting to weight 400 for body text and 300 for large headings.
- Use a monochromatic palette concentrating on Storm Canvas (#f0f0f0) for backgrounds, Carbon Text (#2a2a2a) for most text and borders, and Midnight Ink (#000000) for strong headings and dividers.
- Employ consistent 1px hairline borders for clear delineation of sections and content blocks, primarily in Carbon Text (#2a2a2a) or Midnight Ink (#000000).
- Apply specific negative letter-spacing values to Founders Grotesk headings (-0.03em for 40px, -0.023em for 70px, -0.018em for 101px) to maintain visual tightness.
- Structure layouts using a max-width of 1200px centered on the page, with a consistent section gap of 115px.
- Utilize a precise 999px border-radius for pill-shaped elements like badges and tags, maintaining crisp, sharp corners for all other components.
- Integrate subtle transform and opacity transitions with `ease` timing functions over 1s for interactive elements to create a responsive, fluid feel.

### Don'ts

- Avoid introducing any new chromatic colors; maintain the gray-scale and black-and-white aesthetic.
- Do not use generic border-radii; adhere strictly to 0px for most elements and 999px for specific pill-like components.
- Refrain from using drop shadows or heavy box-shadows; the design relies on stark contrast and borders for depth.
- Do not use body text larger than 17px or smaller than 12px for primary content; maintain the established type hierarchy.
- Avoid unnecessary padding or excessive white space within components; maintain a comfortable, not overly sparse, density.
- Do not use generic sans-serif system fonts as primary typography; Founders Grotesk is key to the brand's voice.

### Layout

The site employs a max-width, center-aligned layout of 1200px. The hero section is full-width, utilizing a dark background with a large, centered headline and a subtle subtext. Content sections primarily follow a consistent vertical rhythm with alternating light/gray backgrounds. Most content is presented in a two-column grid, often with text on one side and an image or illustrative graphic on the other, creating a clean left-right visual rhythm. Feature and client sections adapt to multi-column card grids, where each card is visually distinct, often bordered. Navigation is a sticky top bar with a minimal brand logo and a 'Menu +' toggle for expanding a full-screen menu. The overall density is comfortable, with ample whitespace balancing content blocks.

### Imagery

This site features highly stylized, editorial photography and product shots. Images are typically contained within strict rectangular frames (0px radius), either full-width within their columns or slightly off-set. Product shots are often tight, focused crops, sometimes isolated on a neutral background or with dramatic lighting to create visual interest. There is a strong emphasis on showcasing the 'work' itself, without much lifestyle context. Photography is high-contrast, with deep blacks and bright whites, and sometimes a moody or dramatic tone. Icons are generally minimal, outlined, and monochromatic, matching the overall stark aesthetic. Imagery plays a content-dominant and aesthetic role, providing visual richness within a formally structured layout.
