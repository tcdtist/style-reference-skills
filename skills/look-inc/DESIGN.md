---
version: alpha
name: Look inc
description: Look.inc embraces a stark, high-contrast aesthetic, juxtaposing crisp black text against a pure white canvas. This foundation emphasizes editorial quality, reinforced by classic serif typography for headlines and clean sans-serif for body text. Thin borders and generous spacing create a sense of spaciousness, drawing focus to the content and imagery with minimal decorative interference. The design system is largely achromatic, relying on strong typographic hierarchy and clean visual separation.
colors:
  midnight-ink: "#000000"
  paper-white: "#ffffff"
  smoke-grey: "#878787"
  whisper-white: "#e5e5e5"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.65
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.7
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.4
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: 0px
spacing:
  elementGap: 19px
  sectionGap: 64px
components:
  hero-headline:
    role: Primary page title
  navigation-link:
    role: Top navigation item
  info-block-text:
    role: Descriptive text accompanying hero
  project-card-title:
    role: Title for individual portfolio projects
  project-card-description:
    role: Brief description of a portfolio project
  horizontal-divider:
    role: Visual separation between content blocks
---

## Overview

**North Star:** Editorial canvas, bold type

Look.inc embraces a stark, high-contrast aesthetic, juxtaposing crisp black text against a pure white canvas. This foundation emphasizes editorial quality, reinforced by classic serif typography for headlines and clean sans-serif for body text. Thin borders and generous spacing create a sense of spaciousness, drawing focus to the content and imagery with minimal decorative interference. The design system is largely achromatic, relying on strong typographic hierarchy and clean visual separation.

### Do's

- Prioritize Midnight Ink (#000000) for all main text and essential borders to maintain high contrast.
- Use Paper White (#ffffff) as the dominant background color for all content areas.
- Employ Old Standard for all prominent headlines and Old Standard (or similar serif) for longer descriptive text blocks.
- Use GT America (or similar sans-serif) for body text, navigation elements, and shorter descriptions.
- Maintain generous vertical spacing between sections, aiming for a visual 'breathing room' of at least 64px.
- Apply hairline dividers at 1px solid in Whisper White (#e5e5e5) for subtle content separation.
- Ensure all imagery is presented with sharp, unrounded corners, maintaining a crisp edges aesthetic.

### Don'ts

- Do not introduce highly saturated or vibrant colors for UI elements; maintain an achromatic palette for structure.
- Avoid using rounded corners on any UI elements or imagery.
- Do not use shadows or elevation effects; the design relies on flat surfaces and strong contrasts for visual hierarchy.
- Do not overcrowd sections; preserve ample white space for a clean, editorial layout.
- Avoid overly bold or decorative typography for body text; prioritize legibility with system or GT America equivalents.
- Do not use gradients in UI backgrounds or overlays; stick to solid colors.
- Do not introduce complex UI components that detract from the visual simplicity and focus on content.

### Layout

The page maintains a max-width centered layout for its primary content sections, though specific imagery blocks can break out to larger widths or full-bleed. The hero section features a prominent headline and descriptive text, with other content arranged in a clean, consistent grid pattern below. Image-heavy sections often use a 2-column grid. Vertical section rhythm is maintained by generous spacing, with subtle thin lines acting as minimal dividers for navigational links. The navigation is a fixed top bar on a white background, containing minimal links.

### Imagery

The site heavily features photography of product and lifestyle contexts from brand campaigns. Images are high-resolution and displayed without any padding or rounded corners, often spanning full width within their grid containers. They serve primarily as content showcase and product examples, rather than decorative atmosphere. There are subtle visual effects like text overlays on some images, but the focus is on the raw visual impact of the photography. Iconography is minimal and not explicitly visible in its raw form.
