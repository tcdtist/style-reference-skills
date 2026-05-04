---
version: alpha
name: Cup of Couple
description: Cup of Couple presents a sophisticated and minimalist editorial aesthetic, mimicking a high-fashion magazine layout with a stark, achromatic palette. Typography reigns supreme, utilizing distinct serif and sans-serif fonts to establish clear visual hierarchy and a refined, curated feel. The design relies on generous white space and subtle hairline borders to delineate content, maintaining an airy lightness without heavy visual anchors. Surfaces are flat and un-elevated, emphasizing content over decorative UI elements.
colors:
  ink: "#303030"
  ash-gray: "#808080"
  canvas-white: "#f0f0f0"
  subtle-gray: "#767676"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 12px
  sectionGap: 36px
components:
  ghost-navigation-button:
    role: Navigation and interactive links with a subtle underline effect on hover/active.
  content-grid-card:
    role: Container for visual diary and project entries.
  minimal-search-input:
    role: Search field with a discreet bottom border.
  featured-project-header:
    role: Header for prominent content sections.
---

## Overview

**North Star:** Monochrome Editorial Canvas

Cup of Couple presents a sophisticated and minimalist editorial aesthetic, mimicking a high-fashion magazine layout with a stark, achromatic palette. Typography reigns supreme, utilizing distinct serif and sans-serif fonts to establish clear visual hierarchy and a refined, curated feel. The design relies on generous white space and subtle hairline borders to delineate content, maintaining an airy lightness without heavy visual anchors. Surfaces are flat and un-elevated, emphasizing content over decorative UI elements.

### Do's

- Prioritize ITCFranklinGothicStdBook and Garamond for readability in body copy and detailed information.
- Use PerpetuaTitlingMT for all primary headings and titles to establish a refined editorial tone.
- Apply Canvas White (#f0f0f0) as the dominant background color for all surfaces and sections.
- Utilize 0px border-radius for all interface elements including buttons, cards, and inputs, maintaining a sharp, angular aesthetic.
- Delimit content and sections using a `1px` solid border in Ash Gray (#808080) or Ink (#303030), avoiding heavy visual dividers.
- Maintain generous `36px` vertical spacing between major page sections to ensure airiness and reduce visual clutter.
- Employ the DisplaceKC font exclusively for the main brand logo 'Cup of Couple' — it should not be used for any other text.

### Don'ts

- Do not introduce any chromatic colors for interactive elements; all accents should be within the achromatic palette.
- Avoid using drop shadows or any form of elevation; the design system mandates a flat, two-dimensional aesthetic.
- Do not use highly decorative UI elements or complex gradients, as the system relies on simplicity and typography.
- Do not deviate from the specified font families; their distinct characteristics are critical to brand identity.
- Never use rounded corners on any UI elements; the system's aesthetic is defined by sharp, precise edges.
- Avoid dense information blocks; instead, use ample padding and single-column layouts for featured content.

### Layout

The page structure is primarily max-width contained, but hero sections extend full-bleed for visual impact. The hero often features a large image with a centered, stylized brand title. Content sections typically follow a vertical rhythm of alternating two-column layouts (image-left/text-right or vice versa) or card grids, maintaining consistent vertical spacing. Navigation is a persistent top bar featuring ghosted text links and a minimal search input, with the brand name 'Cup of Couple' serving as the central identifier.

### Imagery

The imagery leans heavily on high-quality, aspirational photography with a slightly desaturated, film-like quality. Photos are presented within contained, rectangular frames with raw edges, often featuring close-ups of lifestyle scenes, product details, or evocative interior shots. Imagery serves both decorative atmosphere and explanatory content, showcasing product or experience in a sophisticated, unadorned manner. The density is moderate, with images forming large, impactful blocks balanced by significant whitespace.
