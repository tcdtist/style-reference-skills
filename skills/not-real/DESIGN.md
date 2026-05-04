---
version: alpha
name: Not Real
description: NotReal employs a stark, print-inspired aesthetic characterized by high-contrast typography and a restrained achromatic palette. The design system emphasizes generous white space and precise visual hierarchy through font choices, rather than color or complex layouts. Project showcases act as vibrant focal points within an otherwise minimalist, editorial grid.
colors:
  canvas-white: "#f2f2f2"
  ink-black: "#292a2c"
  deepest-black: "#000000"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.67
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: 0.38px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 0.75
    letterSpacing: -1.98px
spacing:
  elementGap: 11px
  sectionGap: 44px
components:
  primary-navigation-link:
    role: Top-level navigation element
  site-logo:
    role: Brand identifier
  hero-description-block:
    role: Introductory text for the agency
  project-thumbnail-card:
    role: Showcase individual projects
  copyright-status-text:
    role: Informational text in footer or sidebar
---

## Overview

**North Star:** High-contrast editorial canvas

NotReal employs a stark, print-inspired aesthetic characterized by high-contrast typography and a restrained achromatic palette. The design system emphasizes generous white space and precise visual hierarchy through font choices, rather than color or complex layouts. Project showcases act as vibrant focal points within an otherwise minimalist, editorial grid.

### Do's

- Prioritize high contrast between text (#292a2c, #000000) and background (#f2f2f2).
- Use Ogg font for all prominent headings and brand elements to establish a distinct editorial tone, applying its specific negative letter spacing for a dense effect.
- Employ Telegraf for all body text, navigation, and secondary UI elements, maintaining its default letter spacing for optimal readability.
- Maintain a compact density for typography by using specified line heights such as 1.33 for 18px body text and 0.75 to 1.10 for larger headings.
- Structure layouts with generous Canvas White (#f2f2f2) surrounding content blocks to create breathing room and emphasize core visual elements.
- Apply Deepest Black (#000000) as a 1px border for interactive states or as an accent border for text links and visual separators.
- Ensure all imagery is crisp and occupies significant visual space, acting as the primary splash of color and detail against the monochrome UI.

### Don'ts

- Do not introduce new color hues; strictly adhere to the achromatic palette with #f2f2f2, #292a2c, and #000000.
- Avoid decorative elements like shadows, gradients, or complex background patterns; rely on typography and spacing for visual hierarchy.
- Do not use generic system fonts or fallbacks as primary UI text; Telegraf and Ogg are fundamental to the brand's identity.
- Prevent cluttered layouts; prioritize white space, using 44px for section gaps and 18px for internal padding around content.
- Do not round corners on any UI elements; all shapes should be sharp and angular, reflecting a precise, craft-oriented aesthetic.
- Avoid using multiple font families beyond Telegraf and Ogg; maintain typographic simplicity.
- Do not apply excessive padding or margin to small text elements; keep them dense and contained within 11px general element spacing.

### Layout

The page exhibits a full-bleed layout for its overall structure, embracing the screen edges. The hero section features the logo and navigation prominently at the top, with a centered description block, while project showcases are arranged in an alternating text-left/image-right pattern or stacked vertically. Sections maintain consistent vertical spacing of 44px, creating a rhythmic, clean flow. There is a strong single-column grid for content blocks, with images often spanning full width, and an implicit two-column grid for text-and-image pairings. Navigation is a minimal top-bar, always visible.

### Imagery

Imagery primarily consists of high-quality, product-focused 3D renders and CGI, often showcasing intricate textures and dynamic lighting. The treatment is full-bleed or contained within a sharp, rectangular frame, never overlapping or with rounded corners. Images serve as vibrant, expressive focal points that break the monochromatic UI, acting as a product showcase to explain content and impress. Density is high within the image blocks themselves, but these blocks are surrounded by text-dominant and spacious negative space.
