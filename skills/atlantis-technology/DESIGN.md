---
version: alpha
name: Atlantis Technology
description: Atlantis uses a high-contrast dark theme, creating a serious and impactful atmosphere. The design is dominated by deep space blacks and stark whites, with a single luminous orange accent for calls to action and critical highlights, balanced by a subtle, resonant purple for supporting elements. Typography is bold and concise, emphasizing clear messaging over visual noise. Surfaces are mostly flat, with minimal elevation implied through light borders rather than heavy shadows, and cards often feature asymmetric corner radii.
colors:
  deep-midnight: "#0a0c10"
  slate-card: "#12151c"
  ghostly-gray: "#b5b6b7"
  fog-whisper: "#858688"
  shadow-touch: "#545558"
  pure-white: "#ffffff"
  black-ink: "#000000"
  flare-orange: "#f7931a"
  amber-glow: "#ffad42"
  orbital-violet: "#8b5fc8"
  deep-current-violet: "#6b3fa0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.36px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.7
    letterSpacing: 0.42px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.8
    letterSpacing: 0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.6
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.3
    letterSpacing: -0.52px
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.88px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.06
    letterSpacing: -1.8px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 16px
  buttonRadius: 10px
  elementGap: 24px
  sectionGap: 48px
components:
  primary-action-button:
    role: Call-to-action button for initiating key user actions.
  navigation-link-button:
    role: Primary navigation element in the header.
  feature-card-asymmetric:
    role: Container for showcasing key features or content blocks.
  content-card-standard:
    role: Generic card for content sections, no distinct corner treatment.
  accent-badge:
    role: Small informational tag or category label.
  ghost-link-button:
    role: Secondary action or informational link, often accompanying a primary button.
---

## Overview

**North Star:** Midnight Command Center

Atlantis uses a high-contrast dark theme, creating a serious and impactful atmosphere. The design is dominated by deep space blacks and stark whites, with a single luminous orange accent for calls to action and critical highlights, balanced by a subtle, resonant purple for supporting elements. Typography is bold and concise, emphasizing clear messaging over visual noise. Surfaces are mostly flat, with minimal elevation implied through light borders rather than heavy shadows, and cards often feature asymmetric corner radii.

### Do's

- Always use Deep Midnight (#0a0c10) as the base page background for consistency in dark mode.
- Emphasize key words in headlines with Flare Orange (#f7931a) to draw immediate attention and convey importance.
- Apply the 100px radius for all badges to create clear, pill-shaped elements.
- Use Space Grotesk for all headlines and subheadings to maintain a sharp, impactful typographic tone, leveraging its tight letter spacing at larger sizes.
- Ensure generous vertical spacing between sections, using the sectionGap of '48px' to create breathing room.
- Implement asymmetric radii of 16px (e.g., 16px 0 0 16px or 0 16px 16px 0) on cards to add a distinctive, modern edge.
- Use Orbital Violet (#8b5fc8) sparingly for decorative UI elements, icons, and subtle textual accents, ensuring it supports and doesn't compete with Flare Orange.

### Don'ts

- Never introduce additional primary accent colors; Flare Orange (#f7931a) and Orbital Violet (#8b5fc8) are the only brand accents permitted.
- Avoid heavy box shadows; elevation should be primarily communicated through subtle borders and background variations like Slate Card (#12151c).
- Do not use generic system fonts; always prioritize Inter and Space Grotesk to maintain brand identity.
- Do not excessively bold body text; use Inter at weights 400 or 500, reserving heavier weights of Space Grotesk for headlines only.
- Avoid tight element spacing; maintain an adequate elementGap of '24px' to prevent visual clutter.
- Do not place text directly on complex photographic backgrounds; use either solid color overlays or clearly defined text blocks to ensure legibility.
- Do not use bright or light backgrounds for main content sections; strictly adhere to the established dark theme.

### Layout

The page primarily follows a max-width contained model, typically centered. The hero section is full-bleed with Deep Midnight background, featuring a centered headline with accented text and calls to action. Subsequent sections alternate between full-width black bands and contained content blocks, creating a consistent vertical rhythm. Content often arranges as stacked centered elements or two-column layouts, with text-heavy blocks on the left and supporting visuals (or sometimes text) on the right. There's a notable absence of dense card grids, favoring individual, impactful content blocks. The site navigation is a sticky top bar, minimally styled, offering key links and a prominent primary action button.

### Imagery

The site uses a combination of abstract, wireframe-like geometric graphics and occasional illustrative elements to convey complex concepts. Photography is largely absent from UI, replaced by visual metaphors of progression and structure. Icons are simple, outlined, and monochromatic, with a very light stroke weight, primarily using Pure White or Ghostly Gray, occasionally accented with Orbital Violet. The overall density of imagery is low, allowing text and typography to dominate, supporting the precise, authoritative tone.
