---
version: alpha
name: Eindhoven Design District
description: Eindhoven Design District presents a high-contrast rectilinear system, built on stark black and white with an almost entire absence of grays, emphasizing clarity and bold forms. Type is a core visual element, with large, confident headlines often appearing as graphic elements. Imagery is integrated as clean, self-contained rectangles, maintaining the sharp visual rhythm. A playful use of occasional vivid color blocks acts as a punctuation rather than an integral part of the primary interface.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ash-gray: "#e8e8e8"
  silver-thread: "#bfbfbf"
  focus-red: "#ff0000"
  blush-pink: "#ffc2eb"
  electric-blue: "#0f26ed"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.47
    letterSpacing: 0.15px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.005px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.31
    letterSpacing: -0.004px
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.15
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1
    letterSpacing: -0.024px
  display:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 0.93
    letterSpacing: -0.03px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 0.93
    letterSpacing: -0.05px
spacing:
  cardRadius: 0px
  buttonRadius: 500px
  elementGap: 20px
  sectionGap: 35px
components:
  ghost-button:
    role: Navigation, secondary actions, and inline links.
  primary-action-button:
    role: Key interactions and calls to action.
  icon-button:
    role: Standalone interactive icons, such as menu toggles or search.
  plain-link-button:
    role: Text-based actions that blend seamlessly with content.
  article-card:
    role: Displaying content previews in grid layouts.
  gray-background-card:
    role: Highlighting distinct content blocks within a section.
---

## Overview

**North Star:** Graphic Modernist Poster

Eindhoven Design District presents a high-contrast rectilinear system, built on stark black and white with an almost entire absence of grays, emphasizing clarity and bold forms. Type is a core visual element, with large, confident headlines often appearing as graphic elements. Imagery is integrated as clean, self-contained rectangles, maintaining the sharp visual rhythm. A playful use of occasional vivid color blocks acts as a punctuation rather than an integral part of the primary interface.

### Do's

- Use Ink Black (#000000) for all primary text and Canvas White (#ffffff) for all main backgrounds to achieve maximum contrast.
- Apply a 500px border-radius to all interactive buttons and tags for a consistent pill-shaped aesthetic.
- Reinforce design elements with 1px Ink Black (#000000) borders for definition, maintaining a very clean and sharp edge.
- Employ Helvetica Now as the sole typeface, varying weight and size to establish typographic hierarchy rather than introducing additional fonts.
- Utilize large display typography with tight letter-spacing (-0.05em at 50px, -0.03em at 46px) as a prominent graphic component in hero sections and headlines.
- Implement a spacious `elementGap` of 20px and a `sectionGap` of 35px to create ample negative space and visual breathing room between UI elements and content blocks.
- Integrate photographic imagery as contained rectangles with 0px border-radius, maintaining the overall rectilinear and stark aesthetic.

### Don'ts

- Do not introduce mid-tone gray backgrounds or text colors beyond Ash Gray (#e8e8e8) or Silver Thread (#bfbfbf), as the system relies on stark black and white contrast.
- Avoid using drop shadows or complex elevation styles; the design emphasizes flat surfaces and clear planar separation.
- Do not deviate from the Helvetica Now typeface; its specific character and variable weights are central to the brand's typographic identity.
- Refrain from using gradients for backgrounds, text, or UI elements; the system prioritizes solid color blocks.
- Do not apply rounded corners to images or cards; maintain the strict rectilinear forms defined by '0px' border-radius.
- Avoid excessive use of vivid chromatic colors; they are reserved for controlled, decorative blocks and specific content emphasis, not general UI components.
- Do not use generic font icons or heavily stylized icons; prefer simple, monochrome, possibly outlined icons that maintain the graphical integrity.

### Layout

The page maintains a crisp, high-contrast layout, primarily favoring a max-width, center-aligned container for content, though the hero section breaks this to full-bleed. The hero often employs large, graphic typography interacting with contained rectangular images. Content sections have a consistent vertical rhythm (35px sectionGap) and use alternating single-column centered text blocks, 2-column text+image arrangements, and 3-column card grids for features and articles. The navigation is a minimalist top bar with utility icons and a hamburger menu.

### Imagery

This system primarily uses high-contrast photography, often featuring architectural details, urban landscapes, or candid people shots. Images are treated as clean, unmasked rectangular blocks, integrated directly into the layout without rounded corners or complex treatments. There are no illustrations or 3D renders; the visual language is grounded in photography. Icons are minimal, outlined, and monochromatic (Ink Black), serving purely functional roles.
