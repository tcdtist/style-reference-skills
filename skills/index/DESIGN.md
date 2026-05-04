---
version: alpha
name: Index
description: Index employs a stark, high-contrast visual identity, reminiscent of avant-garde print media. The design prioritizes typography, using a mix of serif, sans-serif, and condensed styles to convey distinct content hierarchy against a largely achromatic canvas. Interactivity is highlighted through simple border treatments and monochromatic fills, with navigation elements often appearing as outlined or inverted states rather than distinct chromatic accents. Layouts are content-centered, favoring clear segmentation and generous vertical spacing to emphasize textual information.
colors:
  white-canvas: "#ffffff"
  ink-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
    letterSpacing: 0.096px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.216px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.88px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -1.512px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.9
    letterSpacing: -2.96px
spacing:
  cardRadius: 16px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 40px
components:
  filled-primary-button:
    role: Call to action, critical navigation.
  ghost-border-button:
    role: Secondary actions, emphasis on linked text.
  pill-outline-button:
    role: Tagging, category filters.
  navigation-link:
    role: Top-level navigation and utility links.
  simple-card-dark:
    role: Content grouping, featured sections.
  search-input-outlined:
    role: Site search, form fields.
---

## Overview

**North Star:** monochrome academic journal

Index employs a stark, high-contrast visual identity, reminiscent of avant-garde print media. The design prioritizes typography, using a mix of serif, sans-serif, and condensed styles to convey distinct content hierarchy against a largely achromatic canvas. Interactivity is highlighted through simple border treatments and monochromatic fills, with navigation elements often appearing as outlined or inverted states rather than distinct chromatic accents. Layouts are content-centered, favoring clear segmentation and generous vertical spacing to emphasize textual information.

### Do's

- Prioritize Ink Black (#000000) and White Canvas (#ffffff) for all background, text, and border elements to maintain high contrast.
- Use ABCDiatypeLight (weight 300, -0.0370em at 80px) for prominent headlines to achieve a modern, airy feel.
- Employ ITCGaramondStdLtCond (weight 300, -0.0220em at 75px) for critical section titles, leveraging its condensed form for visual impact.
- Apply 0px border-radius to all filled buttons to maintain a sharp, deliberate aesthetic.
- Ensure section gaps consistently use 40px vertical spacing for clear content segmentation.
- Center all page content and adhere to a maximum width of 520px to create a focused reading experience.
- Utilize 1px borders with Ink Black (#000000) for interactive elements and content divisions to establish structure without heavy visual weight.

### Don'ts

- Avoid using any colors outside of the Ink Black (#000000) and White Canvas (#ffffff) palette for primary UI elements.
- Do not introduce rounded corners for primary buttons or input fields; maintain the strict 0px border-radius.
- Refrain from using shadows or artificial elevation, as the design system relies on stark color contrast and borders for depth.
- Do not deviate from the specified type scales and letter-spacing for ABCDiatypeLight or ITCGaramondStdLtCond; these are critical for brand typography.
- Avoid full-bleed layouts for main content sections; always constrain content to the 520px maximum width.
- Do not apply padding to inline interactive elements unless explicitly defined as a button variant; text links should primarily rely on their typographic styling.
- Never use generic block quotes or colored background for content emphasis; rely on typographic hierarchy and borders.

### Elevation

The design intentionally avoids shadows entirely. Hierarchy and visual separation are achieved through high-contrast color shifts between Ink Black and White Canvas, paired with solid borders rather than depth effects. This approach reinforces a flat, graphic, and editorial aesthetic.
