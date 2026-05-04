---
version: alpha
name: Elvina Prasad
description: This system projects an academic, almost stark modernity with its high-contrast monochrome palette. The design relies on generous white space and bold typography for impact. Interaction is subtle, using ghost buttons and thin borders rather than heavy fills. The overall atmosphere is discerning and direct, prioritizing content and clarity over decorative flourishes.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  text-graphite: "#333333"
  surface-frost: "#f7f7f7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: 0.05px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: 0.05px
  subheading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.1
    letterSpacing: 0.05px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: 0.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: 0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 178px
    lineHeight: 1
    letterSpacing: 0.05px
spacing:
  elementGap: 16px
  sectionGap: 85px
components:
  ghost-navigation-link:
    role: Primary navigation element
  body-text-block:
    role: Standard paragraph content
  hero-headline:
    role: Main page headline
  scroll-indicator-text:
    role: Directional UI helper
  minimal-call-to-action-button:
    role: Secondary action button
  image-border:
    role: Framing for visual content
---

## Overview

**North Star:** Academic monograph with confident typography.

This system projects an academic, almost stark modernity with its high-contrast monochrome palette. The design relies on generous white space and bold typography for impact. Interaction is subtle, using ghost buttons and thin borders rather than heavy fills. The overall atmosphere is discerning and direct, prioritizing content and clarity over decorative flourishes.

### Do's

- Prioritize Neue Montreal for all textual elements unless explicitly specified otherwise, using its full range of weights (300, 400, 500).
- Maintain a bold, high-contrast aesthetic using Ink Black on Canvas White or Canvas White on Ink Black as the primary foreground/background pairs.
- Apply a consistent letter-spacing of 0.0500em for all Neue Montreal and Neue Montreal Variable text to maintain its unique visual signature.
- Utilize 'Text Graphite' (#333333) for all border details, ensuring a unified and subtle visual separation for elements like buttons and images.
- Use generous vertical spacing, typically 85px between major sections, to create an open and uncrowded page layout.
- Employ 'Surface Frost' (#f7f7f7) sparingly as a subtle background for secondary UI elements or to break up white sections without introducing strong color.

### Don'ts

- Avoid decorative gradients or shadows; the visual system is flat and direct, relying on high contrast and typography.
- Do not introduce strong accent colors or vivid hues unless for specific visual assets (e.g., product screenshots) that are considered content, not UI.
- Resist the temptation to add rounded corners; elements should predominantly use sharp, 0px radii.
- Do not deviate from the specified letter-spacing of 0.0500em for display and body text, as it's a key brand identifier.
- Avoid dense, information-heavy blocks of text; instead, break content into manageable, well-spaced paragraphs.
