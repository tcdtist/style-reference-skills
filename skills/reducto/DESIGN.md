---
version: alpha
name: Reducto
description: Reducto embraces a clean, purposeful aesthetic, pairing high-contrast typography with a striking purple accent. The visual system features sharp edges and minimal elevation, emphasizing data clarity and directness. Monochrome interfaces are punctuated by a single vibrant brand color, creating focal points and guiding user interaction. Strong borders and subtle textural backgrounds provide structure without adding visual weight.
colors:
  ghostly-gray: "#fafaf9"
  reducto-black: "#292524"
  subtle-ash: "#79716b"
  medium-gray: "#57534d"
  canvas-white: "#ffffff"
  reducto-purple-dark: "#310632"
  reducto-purple-accent: "#9d17a0"
  reducto-purple-border: "#690f6b"
  whisper-lilac: "#dcbffb"
  sage-green: "#718613"
  sunburst-orange: "#a2541b"
  ocean-blue: "#2482db"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.32px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.13
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 136px
    lineHeight: 0.74
    letterSpacing: -1.36px
spacing:
  elementGap: 24px
  sectionGap: 64px
components:
  primary-action-button:
    role: Filled button for primary calls to action.
  ghost-action-button:
    role: Outlined button for secondary or tertiary actions.
  navigation-link-button:
    role: Small, ghost-like button for navigation items.
  outline-secondary-button:
    role: Outlined button variant for less prominent actions, found in content areas.
  hero-headline:
    role: Large, impactful display text for hero sections.
  feature-card:
    role: Container for individual feature descriptions within a grid.
  brand-notification-bar:
    role: Top-banner for important announcements.
---

## Overview

**North Star:** Crisp Data Canvas

Reducto embraces a clean, purposeful aesthetic, pairing high-contrast typography with a striking purple accent. The visual system features sharp edges and minimal elevation, emphasizing data clarity and directness. Monochrome interfaces are punctuated by a single vibrant brand color, creating focal points and guiding user interaction. Strong borders and subtle textural backgrounds provide structure without adding visual weight.

### Do's

- Use Reducto Purple Accent (#9d17a0) sparingly and intentionally for primary interactive elements, such as buttons and active states, to create clear focal points.
- Maintain strict square edges (0px border-radius) for all interactive components and foundational elements like cards, adhering to the crisp aesthetic.
- Prioritize ReductoSerif for large, impactful headlines, leveraging its reduced letter-spacing (-0.01em) to convey a sense of precision.
- Structure layouts using strong visual borders like 1px solid #d7ccc1 or #e7e5e4 to define sections and separate content rather than relying on heavy shadows or background colors.
- Apply Reducto Black (#292524) for primary content text and headings, ensuring high contrast against light backgrounds.
- Utilize Inter for all functional UI text, ensuring readability and consistency across smaller text elements.
- Ensure all buttons use sharp 0px corners, reinforcing the precise and direct brand identity.

### Don'ts

- Avoid using multiple chromatic colors in close proximity; maintain a largely monochrome palette punctuated by the Reducto Purple Accent.
- Do not introduce rounded corners on primary components like buttons, cards, or input fields, as this conflicts with the sharp aesthetic.
- Refrain from heavy drop shadows or diffused elevation; rely on subtle inset shadows for interactive states or thin borders for separation.
- Do not use generic sans-serif fonts for main display text; always use reductoSerif for a distinct brand voice in headlines.
- Avoid large areas of saturated color that are not Reducto Purple Accent; color should serve a functional or highlight purpose.
- Do not clutter layouts with excessive elements; maintain comfortable density with explicit spacing tokens like 24px element gaps and 64px section gaps.
- Avoid using light text on light backgrounds or dark text on dark backgrounds without ensuring sufficient contrast (minimum AAA).

### Layout

The page adheres to a max-width, center-aligned containment model, with content breaking into a full-bleed purple announcement bar at the very top. The hero section features a centered headline over a light background, followed by sections that alternate between centered stacks of text and visual elements, and multi-column card grids. Vertical rhythm is maintained by consistent section gaps. Navigation is a persistent top bar with a distinct call-to-action button, while internal navigation within content blocks appears as simple text links. The overall density is comfortable, balancing whitespace with structured information blocks.

### Imagery

The visual language for imagery is primarily functional and illustrative. It features abstract, sparse dot-grid patterns and wireframe-style product renders, suggesting data structures and digital processes. These illustrations use simple lines and occasional brand-colored accents, never photographic. Icons are minimal, featuring thin strokes or solid fills, often monochrome with occasional use of spot accent colors (Sage Green, Sunburst Orange, Ocean Blue). Imagery serves to explain abstract concepts or showcase product functionality in a clean, technical context, often contained within defined sections rather than full-bleed.

### Elevation

Reducto intentionally minimizes traditional drop shadows. Its design relies on strong contrast, explicit borders (#d7ccc1, #e7e5e4), and distinct background colors (#fafaf9, #ffffff) for visual hierarchy and separation. When shadows appear, they are either subtle inset shadows on buttons for interaction feedback or very faint 1px drop shadows for slight depth, avoiding heavy floating effects. Flatness and clarity are prioritized over dimensional layering.
