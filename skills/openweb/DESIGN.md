---
version: alpha
name: OpenWeb
description: OpenWeb employs a refined, editorial aesthetic, utilizing a restrained palette dominated by off-white and stark black. Typography is central, featuring a serif display font for headlines and a system sans-serif for functional text, establishing a balance between classic gravitas and modern clarity. The design prioritizes generous spacing and clean lines over heavy ornamentation, allowing content to breathe and accentuating the sophisticated type choices. Interactions are subtle, highlighted by a single vibrant blue that acts as a precise functional accent.
colors:
  parchment-white: "#f1e9e7"
  midnight-ink: "#000000"
  arctic-frost: "#ffffff"
  slate-gray: "#7b7f83"
  vivid-cobalt: "#0058fe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.3
    letterSpacing: -0.11px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.28
    letterSpacing: -0.18px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.27
    letterSpacing: -0.23px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.21
    letterSpacing: -0.38px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.3px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
    letterSpacing: -0.47px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.48px
spacing:
  buttonRadius: 0px
  elementGap: 15px
  sectionGap: 50px
components:
  ghost-navigation-button:
    role: Primary navigation links and secondary actions
  filled-action-button:
    role: Primary call to action.
  outlined-link-button-cobalt:
    role: Secondary call to action, promoting related content or navigation.
  outlined-link-button-ink:
    role: Secondary call to action, promoting related content or navigation.
  input-field:
    role: Standard user input fields for text or selections.
---

## Overview

**North Star:** Editorial calm on parchment.

OpenWeb employs a refined, editorial aesthetic, utilizing a restrained palette dominated by off-white and stark black. Typography is central, featuring a serif display font for headlines and a system sans-serif for functional text, establishing a balance between classic gravitas and modern clarity. The design prioritizes generous spacing and clean lines over heavy ornamentation, allowing content to breathe and accentuating the sophisticated type choices. Interactions are subtle, highlighted by a single vibrant blue that acts as a precise functional accent.

### Do's

- Prioritize Copernicus font for all headings, subheadings, and lead paragraphs to maintain the editorial tone, adjusting letter spacing to match the specified values, particularly negative tracking for larger sizes.
- Use Parchment White (#f1e9e7) for all main page backgrounds and content canvases.
- All primary text, including headings and body copy on light backgrounds, should be Midnight Ink (#000000).
- Apply Vivid Cobalt (#0058fe) exclusively for interactive elements like links and outlined button borders to preserve its accent status.
- Maintain 0px border-radius for most interactive elements and cards, emphasizing crisp, defined edges.
- Use Midnight Ink (#000000) filled buttons for high-priority actions, ensuring they stand out with strong contrast.
- Implement consistent internal padding of 12px vertical and 26px horizontal for primary action buttons.

### Don'ts

- Avoid introducing additional chromatic colors; the palette is intentionally restrained to Parchment White, Midnight Ink, Arctic Frost, Slate Gray, and Vivid Cobalt.
- Do not use highly rounded corners (e.g., 8px or 16px radius) for standard UI elements; stick to 0px for clean edges, or 40px for specific decorative elements where noted.
- Do not use generic sans-serif fonts for headlines; always use Copernicus to preserve the distinctive brand voice.
- Avoid excessive use of drop shadows; the design relies on flat planes and strong typographic hierarchy for visual depth.
- Do not vary line heights without explicit instruction; adhere strictly to the specified lineHeight values per text size to control content density.
- Do not use Vivid Cobalt for static elements or large background areas; its impact comes from its selective application as an accent.
- Avoid breaking the established spacing rhythm; maintain an element gap of 15px, and a section gap of 50px as default.

### Layout

The page adheres to a maximum width of 1200px, with content centered. The hero section is full-bleed, featuring a dark background extending to the edges of the viewport with a centered headline. Subsequent sections alternate between the soft Parchment background and the deep Midnight Ink, creating a clear vertical rhythm. Content is generally arranged in centered stacks for headlines and subtext, or in two-column layouts with text and visuals side-by-side. Navigation is a persistent top bar, sticky or otherwise. The layout is spacious with comfortable vertical breathing room between sections, emphasizing clarity and readability over dense information architecture.

### Imagery

This site features product screenshots presented within minimal, modern smartphone mockups, displayed at an angle and layered, suggesting depth while maintaining a clean aesthetic. Visuals are functional and explanatory, showing the product in use rather than decorative stock photography. Icons are outlined, simple, and monochrome, primarily in Midnight Ink or Arctic Frost, serving as direct visual cues without ornamentation. The overall density of imagery is balanced, with visuals strategically placed to break up text blocks and provide context, but text remains dominant and core to the communication.
