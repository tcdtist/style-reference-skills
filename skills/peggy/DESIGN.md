---
version: alpha
name: Peggy
description: Peggy is a design system built on a monochrome palette with sharp contrasts and minimal embellishment. It employs a modern, sans-serif primary typeface for body text and a distinctive serif for headlines, creating a duality of contemporary clarity and artistic gravitas. Components are lightweight with strong outlines and often stark backgrounds, emphasizing content through a lack of decorative elements. The overall aesthetic is one of understated authority, reflecting a serious approach to the art market.
colors:
  canvas-fog: "#f4f4f4"
  midnight-ink: "#000000"
  white-canvas: "#ffffff"
  deep-graphite: "#141414"
  muted-ash: "#e2e8f0"
  soft-stone: "#666666"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.11
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
spacing:
  elementGap: 16px
  sectionGap: 32px
components:
  primary-ghost-button:
    role: Action button with a subtle outline, used for secondary actions or links where emphasis isn't on a filled background.
  filled-primary-button:
    role: High-emphasis action button with a dark background, indicating primary actions like 'Join Peggy' or 'Download'.
  light-filled-button:
    role: Action button with a light background for contexts requiring less visual weight, such as within dark backgrounds or for less critical actions.
  simple-card:
    role: Used for informational display, feature lists, and content grouping. Emphasizes clean content presentation.
  app-download-banner:
    role: Prominent notification bar for app download. Uses stark black and white for clear call to action.
---

## Overview

**North Star:** Monochrome Gallery Wall

Peggy is a design system built on a monochrome palette with sharp contrasts and minimal embellishment. It employs a modern, sans-serif primary typeface for body text and a distinctive serif for headlines, creating a duality of contemporary clarity and artistic gravitas. Components are lightweight with strong outlines and often stark backgrounds, emphasizing content through a lack of decorative elements. The overall aesthetic is one of understated authority, reflecting a serious approach to the art market.

### Do's

- Prioritize Inter for all body text, UI elements, and supplementary information for clear readability, using weights 400 and 500.
- Utilize Reckless for all headings, subheadings, and display text, explicitly using weights 300 and 400 to convey a distinctive artistic voice.
- Maintain a strict monochrome palette (#f4f4f4, #000000, #ffffff, #141414, #e2e8f0, #666666) for all UI elements, reserving color only for embedded imagery.
- Apply 0px border-radius to all structural components like buttons, cards, and sections, unless the element is an image with 9999px radius.
- Implement a 1px solid #f4f4f4 border for visual separation of UI elements, such as in navigation or list items.
- Use 16px for `elementGap` to ensure consistent spacing between small interactive elements and text blocks.
- Employ a base `sectionGap` of 32px to create distinct visual breaks between major content blocks.

### Don'ts

- Avoid introducing any additional chromatic colors into the UI; strictly adhere to the defined monochrome palette.
- Do not use box shadows or elevation effects on cards or panels, maintaining a flat, two-dimensional aesthetic.
- Do not deviate from the 0px border-radius unless specifically applied to images where 9999px (a full circle/pill shape) is required.
- Never use generic sans-serif fonts for headlines; the distinct character of Reckless is essential for brand identity.
- Do not vary line heights outside of the specified values for each typeface; maintain the established vertical rhythm.
- Avoid dense placement of elements; ensure ample use of whitespace, guided by the defined spacing tokens.
- Do not use outline styles on primary action buttons; use distinct background and text colors to convey hierarchy.

### Layout

The page primarily uses a max-width contained layout of 1280px, centered on a light (Canvas Fog) background. The hero section often features a split layout, with a large Reckless headline and Inter body text on one side, and a compelling image or artwork on the other. Sections maintain a consistent vertical rhythm, with clear visual breaks created by the sectionGap. Content organization moves between centered stacks for headings and text, and multi-column grids (like the four-column feature section) for presenting information. Navigation is a minimalist top bar, sticky only for the main logo and 'Join Peggy' button, contrasting with a dark ephemeral alert bar.

### Imagery

Imagery primarily consists of high-quality product photography (artwork) and atmospheric, often abstract or architectural photographs presented within the content. Photography is generally light-filled and high-key. Icons are monochrome, outlined, and minimal, serving purely functional roles. Product imagery (artworks) often has soft, rounded corners (9999px) for a subtle visual break, but UI elements typically maintain sharp edges. Imagery serves both as decorative atmosphere and explanatory content, illustrating how art interacts with the platform without heavy visual clutter. Density is moderate, balancing large hero images with text-heavy explanatory sections.
