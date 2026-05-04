---
version: alpha
name: Sprout Social
description: Sprout Social presents a commanding, professional digital environment with a strong dark foundation accented by clean white surfaces and precise typography. The design emphasizes clarity and direct interaction, utilizing a single vivid green as its primary action indicator to punctuate key user pathways. Components maintain a uniform, measured appearance with consistent corner radii, conveying stability and trustworthiness. The overall feel is one of a dense, feature-rich interface presented with visual order and an accessible rhythm.
colors:
  midnight-core: "#040404"
  canvas-white: "#ffffff"
  ghost-gray: "#d9d9d9"
  focus-silver: "#cbcece"
  slate-text: "#162020"
  olive-accent: "#98e58e"
  sky-spectrum-fade: "#59cb59"
  magenta-mist-fade: "#ac44a8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.48
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.18
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1.12
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 32px
components:
  primary-action-button-filled:
    role: Call to action
  ghost-button-dark:
    role: Secondary action
  ghost-button-light:
    role: Secondary action
  white-information-card:
    role: Content container
  dark-feature-card:
    role: Feature showcase
  hero-input-field:
    role: User input
  navigation-link:
    role: Navigation element
---

## Overview

**North Star:** Ordered command center

Sprout Social presents a commanding, professional digital environment with a strong dark foundation accented by clean white surfaces and precise typography. The design emphasizes clarity and direct interaction, utilizing a single vivid green as its primary action indicator to punctuate key user pathways. Components maintain a uniform, measured appearance with consistent corner radii, conveying stability and trustworthiness. The overall feel is one of a dense, feature-rich interface presented with visual order and an accessible rhythm.

### Do's

- Prioritize text legibility by ensuring Midnight Core (#040404) on Canvas White (#ffffff) backgrounds, and Canvas White on Midnight Core backgrounds.
- Use Olive Accent (#98e58e) exclusively for primary calls-to-action or key success indicators; avoid decorative use.
- Apply a 16px border-radius to all primary content cards and navigation containers to maintain a consistent soft edge.
- Maintain a comfortable rhythm with 'elementGap': 16px between most interactive elements and 'sectionGap': 32px between major content blocks.
- All headings should use Proxima Nova weight 700 or 800, carefully selecting corresponding sizes from the typescale to establish a clear hierarchy.
- Employ the rgba(39, 51, 51, 0.24) 0px 4px 8px 0px shadow sparingly, primarily for the sticky navigation, to indicate subtle elevation without visual clutter.
- Ensure input fields have a 1px Focus Silver (#cbcece) border and a 4px border-radius for clear definition and soft containment.

### Don'ts

- Do not introduce new chromatic colors outside of Olive Accent (#98e58e) for interactive elements.
- Avoid arbitrary changes in border-radius; adhere to 16px for cards, 6px for buttons/inputs, and 24px for badges.
- Do not use generic system fonts; only use Proxima Nova or its designated substitute.
- Do not use shadows on content cards directly; rely on background color changes for surface differentiation.
- Do not deviate from the established spacing units; avoid custom padding or margin values that aren't multiples of 4px.
- Avoid hero sections with busy imagery; prioritize gradients or a solid Midnight Core background to highlight text content and interactive elements.
- Do not use black (#000000) for primary text on default light backgrounds where Midnight Core (#040404) is available for better visual cohesion.

### Layout

The page primarily uses a full-bleed structure with content often contained within a maximum width section, likely centered. The hero section is full-bleed with a dark background, featuring a prominent centered headline and input fields. Subsequent sections alternate between dark (Midnight Core) and light (Canvas White) backgrounds, creating a clear vertical rhythm. Content within sections is often arranged in multi-column layouts, such as two-column text-left/visual-right patterns or three-column card grids for features and integrations. Navigation is a fixed top bar on a Canvas White background, while the header itself is initially on Midnight Core. The overall density feels comfortable, providing ample breathing room around content blocks.

### Imagery

The visual language relies heavily on product UI screenshots and stylized workflow diagrams, which are embedded within soft-edged white cards or presented within the primary content area. When photography is used, it features high-key, professional, and slightly staged images of individuals interacting with technology, often with a clear focus on the user. Illustrations are dimensional and gradient-filled, avoiding hard outlines, featuring organic shapes that blend into backgrounds. Icons are minimal, either solid-filled or slightly outlined, often monochrome. Imagery serves an explanatory and product-showcasing role, rarely decorative atmosphere, and is generally contained within defined spaces rather than full-bleed.
