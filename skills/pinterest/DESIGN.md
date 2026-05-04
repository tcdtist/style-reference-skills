---
version: alpha
name: Pinterest
description: Pinterest's design aesthetic is that of a bustling creative workshop — a bright, expansive canvas where visual ideas are quickly surfaced and organized. Large, clean typography draws immediate attention, feeling both direct and friendly, while a vibrant signature red provides energetic points of interaction. Subtle, rounded cornering across all interactive elements, paired with ample whitespace, cultivates an approachable and clear interface that supports rapid content browsing and discovery.
colors:
  canvas-white: "#ffffff"
  jet-black: "#000000"
  graphite: "#211922"
  ash-gray: "#666666"
  muted-slate: "#8c8c8c"
  whisper-gray: "#e5e5e0"
  pinterest-red: "#e60023"
  idea-violet: "#9270d7"
  discovery-blue: "#2b48d4"
  highlight-yellow: "#fffd92"
  impact-orange: "#fa5f2"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.52px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.59px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.74px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -1.18px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.2
    letterSpacing: -1.41px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -1.85px
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1
    letterSpacing: -2.59px
spacing:
  cardRadius: 20px
  buttonRadius: 16px
  elementGap: 4px
  sectionGap: 80px
components:
  cta-button-group:
    role: 
  search-bar-with-filter-tags:
    role: 
  cookie-notice-banner:
    role: 
  primary-cta-button:
    role: Call to action
  secondary-ghost-button:
    role: Secondary action
  hovered-secondary-button:
    role: Secondary action (hover state)
  header-navigation-link:
    role: Navigation item
  primary-navigation-link:
    role: Main navigation item
---

## Overview

**North Star:** Bright Workshop Canvas — A clean, spacious white background provides the stage for vibrant, curated content, like a well-lit studio.

Pinterest's design aesthetic is that of a bustling creative workshop — a bright, expansive canvas where visual ideas are quickly surfaced and organized. Large, clean typography draws immediate attention, feeling both direct and friendly, while a vibrant signature red provides energetic points of interaction. Subtle, rounded cornering across all interactive elements, paired with ample whitespace, cultivates an approachable and clear interface that supports rapid content browsing and discovery.

### Do's

- Prioritize Pin Sans throughout all UI elements, using its negative letter-spacing for a consistent, modern feel.
- Use Pinterest Red (#e60023) exclusively for primary calls-to-action and strong brand emphasis.
- Apply a 16px border-radius to all primary interactive elements like buttons and input fields.
- Maintain a clear visual hierarchy with Canvas White (#ffffff) as the dominant background and Graphite (#211922) as the primary text color.
- Employ the 4px base unit for all spacing decisions, translating to common increments like 4px, 8px, 16px, and 24px and section gaps up to 80px.
- Ensure headings utilize Idea Violet (#9270d7) or Jet Black (#000000) with generous spacing to command attention.

### Don'ts

- Avoid using highly saturated colors for large background areas; reserve vibrancy for accents and interactive elements.
- Do not introduce new typefaces; Pin Sans must be the only font family in use.
- Refrain from using hard, sharp corners; all interactive and card-like elements should embrace rounded corners, with 16px being common for buttons/inputs.
- Do not use shadows for elevation. Depth in the UI is created through changes in background color and generous spacing.
- Avoid decorative gradients; rely on solid colors and imagery for visual richness.
- Do not use default browser link colors (e.g., blue #0000ee); all links should be styled with Discovery Blue (#2b48d4), Graphite (#211922), or Jet Black (#000000).

### Layout

The page employs a max-width centered layout for its main content sections, but the header is full-bleed. The hero section features a split layout: left-aligned headline and CTA on a white background, balanced by an overlapping collage of vibrant, masked photographic elements on the right. Section rhythm is primarily vertical stacking with clear 80px `sectionGap` between distinct content blocks, presenting information in a spacious and uncrowded manner. The site favors a clean, column-based arrangement, featuring large visual content blocks positioned alongside concise text. Navigation is via a sticky top bar, providing persistent access to search and core actions.

### Imagery

This site features a dynamic mix of product photography, lifestyle photography, and abstract graphics, all contained and often masked into organic, squishy shapes or perfect circles (like the hero images). Photography is typically high-key, vibrant, and product-focused, showcasing diverse subjects relevant to user interests (food, fashion, home decor). Illustrations are dimensional and often playful, integrated seamlessly into the content flow as explanatory or decorative elements. Icons are filled and simple, contributing to content clarity. Imagery's role is primarily to showcase and inspire, acting as the core content of the platform, presented densely yet with ample visual breathing room provided by the overall layout.
