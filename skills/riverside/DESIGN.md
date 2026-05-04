---
version: alpha
name: Riverside
description: Riverside's aesthetic is a dark-mode canvas punctuated by vibrant purple actions and crisp, clean typography. The interface uses deep, near-black backgrounds as primary surfaces, softened by subtle elevation with faint shadows. Interactive components are intentionally weighty and prominent, contrasting with the overall muted background, while information is delivered with ample whitespace and clear typographic hierarchy.
colors:
  obsidian: "#1d1d1d"
  white-canvas: "#ffffff"
  smokey-white: "#f6f6f6"
  carbon-black: "#111111"
  deep-graphite: "#000000"
  silver-mist: "#bfbfbf"
  muted-grey: "#d2d2d2"
  dark-shale: "#383838"
  pale-ash: "#969696"
  electric-violet: "#9671ff"
  soft-lavender: "#f2eeff"
  twilight-purple: "#ad98fa"
  tinted-white: "#eae3ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.006px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.006px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.006px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.006px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.18
    letterSpacing: -0.006px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.21
    letterSpacing: -0.006px
spacing:
  cardRadius: 8px
  buttonRadius: 300px
  elementGap: 10px
  sectionGap: 43px
components:
  primary-call-to-action-button:
    role: Main interactive button
  ghost-navigation-button:
    role: Navigation and secondary actions
  light-secondary-button:
    role: Alternate call to action on light backgrounds
  dark-content-card:
    role: Container for content sections
  subtle-feature-card:
    role: Feature or showcase card
  elevated-content-card:
    role: Emphasized content or testimonials
  light-badge:
    role: Categorization or tags
---

## Overview

**North Star:** Midnight production studio

Riverside's aesthetic is a dark-mode canvas punctuated by vibrant purple actions and crisp, clean typography. The interface uses deep, near-black backgrounds as primary surfaces, softened by subtle elevation with faint shadows. Interactive components are intentionally weighty and prominent, contrasting with the overall muted background, while information is delivered with ample whitespace and clear typographic hierarchy.

### Do's

- Prioritize Electric Violet (#9671ff) for all primary calls to action to maintain interaction consistency.
- Use Obsidian (#1d1d1d) as the default background for most content sections and cards, creating a consistent dark-mode base.
- Apply White Canvas (#ffffff) for all main body text and crucial information on dark backgrounds, ensuring high legibility.
- Utilize Inter font family with its variable weights for all typographic elements, leveraging its versatility for hierarchy.
- Maintain a 300px border-radius on all primary buttons for a distinct, pill-like appearance.
- Incorporate 8px border-radius for card backgrounds and contained elements using Obsidian (#1d1d1d) or Subtle Feature Card styling.
- Implement -0.0060em letter spacing for Inter font wherever applied, creating a compact and modern text feel.

### Don'ts

- Avoid using bright, highly saturated colors for large background areas; maintain a dominant dark, muted palette.
- Do not introduce new shadow styles beyond rgba(0, 0, 0, 0.25) 0px 4px 15px 0px, maintaining a consistent, subtle elevation effect.
- Refrain from using thin borders or outlines as primary button styles when a clear call to action is needed; prefer the filled Electric Violet (#9671ff) button.
- Avoid using White Canvas (#ffffff) as a primary background for entire sections, reserving it for text or contained components within darker canvases.
- Do not deviate from the established padding and radius values for specific components like buttons and cards to ensure visual consistency.
- Restrict the use of IBM Plex Sans to specified heading contexts; Inter is the primary typeface for general content.
- Do not overuse Soft Lavender or Tinted White; these are subtle accents, not primary interface colors.

### Layout

The page uses a full-bleed layout for sections, with content mostly constrained to a centered maximum width (implied, not explicit in data but visible in screenshots). The hero section is full-bleed dark with a prominent, centered headline and a person in the foreground. Subsequent sections alternate between dark and light full-width background bands, featuring two-column layouts with text-left/image-right or centered feature stacks. Content blocks are comfortably spaced with ample vertical rhythm, creating a spacious but focused presentation. Navigation is a sticky top bar with a primary action button on the right.

### Imagery

Imagery primarily consists of tight product crops and professional photography of individuals speaking or presenting, often with a product UI overlay. Images are typically contained within cards with 4px or 8px rounded corners, sometimes with a subtle shadow. The overall treatment is realistic and product-focused, serving to showcase the platform's utility with minimal decorative elements. Icons are filled, monochrome, and typically in White Canvas (#ffffff) against dark backgrounds, providing clear functional indicators.
