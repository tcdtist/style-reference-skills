---
version: alpha
name: Zipline
description: Zipline's aesthetic is an open-air flight path: stark typography grounded in cream and black, punctuated by a single vibrant violet. The system prioritizes crisp text on expansive, neutral backgrounds, using strong contrasts to anchor content. Components are lightweight and direct, relying on bold text and large-radius containers rather than subtle shadows or complex surface layering. Color is deployed sparingly to highlight navigation, branding, and interactive elements, retaining an overall impression of efficiency and precision.
colors:
  cream-canvas: "#f7f4e8"
  midnight-ink: "#000000"
  cloud-gray: "#c6c3ba"
  zipline-violet: "#643aed"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.85
    letterSpacing: 0px
  display-md:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.85
    letterSpacing: 0px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.85
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 150px
    lineHeight: 0.85
    letterSpacing: 0px
spacing:
  cardRadius: 20px
  buttonRadius: 20px
  elementGap: 24px
  sectionGap: 53px
components:
  filled-primary-button:
    role: Call to action
  outlined-secondary-button:
    role: Secondary action
  ghost-text-button:
    role: Navigation or tertiary action
  standard-card:
    role: Content grouping
  branded-violet-card:
    role: Emphasized content grouping
---

## Overview

**North Star:** Open-air flight path – vast, clean, and direct.

Zipline's aesthetic is an open-air flight path: stark typography grounded in cream and black, punctuated by a single vibrant violet. The system prioritizes crisp text on expansive, neutral backgrounds, using strong contrasts to anchor content. Components are lightweight and direct, relying on bold text and large-radius containers rather than subtle shadows or complex surface layering. Color is deployed sparingly to highlight navigation, branding, and interactive elements, retaining an overall impression of efficiency and precision.

### Do's

- Use Midnight Ink (#000000) for all primary text and calls to action against Cream Canvas (#f7f4e8) backgrounds.
- Apply fkScreamer Bold (700 weight) for all hero and display headings, ranging from 40px to 150px with a tight line-height of 0.85.
- Maintain a uniform border radius of 20px across all buttons, cards, and images, promoting a soft, approachable feel.
- Employ the Cream Canvas (#f7f4e8) as the predominant page background and for ghost button text.
- Utilize a baseline letter-spacing of -0.01em for all fkGroteskNeue body text, navigation, and button labels to improve density.
- Structure content with section gaps of 53px and element gaps of 24px to create a comfortable, airy feel.
- Limit the use of Zipline Violet (#643aed) to specific cards or decorative elements; avoid using it for primary interactive states.

### Don'ts

- Do not introduce new primary action colors; Midnight Ink (#000000) filled buttons and Midnight Ink borders for outlined buttons are the defined interactive styles.
- Avoid applying shadows or complex elevations to cards or components; the design relies on flat surfaces and color contrast for hierarchy.
- Do not deviate from the 20px border radius for interactive elements and content containers; consistency is key to the brand's shape language.
- Refrain from using fkScreamer or fkDisplay for body copy or navigation; these are strictly for large, impactful headings.
- Do not use generic gray tones for backgrounds or text; adhere to Cream Canvas (#f7f4e8), Cloud Gray (#c6c3ba), and Midnight Ink (#000000).
- Avoid excessive use of Zipline Violet (#643aed); it's an accent, not a primary color for large areas or ubiquitous interface elements.
- Do not introduce highly saturated or brightly colored illustrations in contexts where photography or minimal graphics are typically used; maintain visual restraint.

### Layout

The page model is primarily a max-width contained layout of 1320px, with occasional full-bleed sections, especially for heroes. The hero pattern is often a full-viewport dynamic video or large image with a centered, bold headline. Sections alternate between light and cream backgrounds, creating a clear vertical rhythm. Content often uses 2-column layouts with text and visuals, but also features centered stacks for impactful messages. There are instances of 3-column card grids for features or articles. Overall density is comfortable, with generous breathing room between sections. Navigation is a sticky top bar with a left-aligned hamburger menu, a center-aligned logo, and right-aligned ghost buttons.

### Imagery

Imagery predominantly features dynamic, high-motion photography, often showcasing drones or expansive natural landscapes from a unique perspective, reinforcing the theme of flight and speed. There's also some use of tightly-cropped product photography or candid lifestyle shots, often integrated directly into text blocks. Visuals are full-bleed for hero sections or contained within organic, wave-like masks. When present, icons are minimalist, outlined, and monochromatic, primarily in Midnight Ink.

### Elevation

This design system explicitly avoids complex shadows. Elevation is conveyed through stark color contrast and inherent structure rather than subtle atmospheric effects. Components are mostly flat against the background, or leverage solid color blocks for implied depth.
