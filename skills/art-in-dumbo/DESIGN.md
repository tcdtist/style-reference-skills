---
version: alpha
name: Art In DUMBO
description: Art In DUMBO employs a high-contrast, text-dominant aesthetic that prioritizes content display with minimal visual adornment. Typography is bold and direct, setting a clear, editorial tone. A singular, vivid orange serves as a powerful accent color, appearing primarily in functional contexts, while an accompanying soft green provides a secondary, grounding chromatic element. The design favors sharp edges and flat surfaces, maintaining a clear separation between content blocks.
colors:
  inkwell: "#000000"
  canvas-white: "#ffffff"
  fog: "#e5e3df"
  whisper-gray: "#f1f2f2"
  driftwood: "#bdbdbd"
  charcoal-accent: "#828282"
  shadow-tint: "#b3b3b3"
  gallery-orange: "#ff7f41"
  beacon-green: "#71cc98"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.09
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.08
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
spacing:
  buttonRadius: 2px
  elementGap: 20px
  sectionGap: 144px
components:
  ghost-text-button:
    role: Interactive text links and navigation items that visually blend into the background.
  clear-text-button:
    role: Interactive elements on Canvas White backgrounds that maintain a text-only appearance.
  circular-utility-button:
    role: Small, functional buttons often used for icons or minimal controls.
  beacon-green-button:
    role: Primary action button, visually prominent and signaling an important interaction.
  content-card:
    role: Container for event listings or feature sections, visually defined by content rather than a strong border/shadow.
  accent-card-beacon-green:
    role: Highlights specific content blocks with a distinct background color.
  accent-card-gallery-orange:
    role: Highlights specific content blocks with a distinct background color.
  email-input:
    role: Standard input field for user text entry.
---

## Overview

**North Star:** Gallery Guidebook

Art In DUMBO employs a high-contrast, text-dominant aesthetic that prioritizes content display with minimal visual adornment. Typography is bold and direct, setting a clear, editorial tone. A singular, vivid orange serves as a powerful accent color, appearing primarily in functional contexts, while an accompanying soft green provides a secondary, grounding chromatic element. The design favors sharp edges and flat surfaces, maintaining a clear separation between content blocks.

### Do's

- Always use the Helvetica N typeface at weight 500 for all primary content, headlines, and UI elements to maintain a consistent editorial voice.
- Utilize Canvas White (#ffffff) as the default background for most content and Inkwell (#000000) for all primary text to ensure high contrast and readability.
- Apply Gallery Orange (#ff7f41) sparingly as a functional highlight for critical information or states like 'Closing Soon'.
- Employ Beacon Green (#71cc98) specifically for primary action buttons, such as 'Map & Directory', to guide user interaction.
- Maintain sharp, 0px border radii for general content cards and layout blocks to reinforce the graphic, editorial aesthetic.
- Use a minimum element spacing of 20px and a section gap of 144px to create a comfortable, uncluttered reading experience.
- Prefer text-only or ghost button styles over filled buttons, unless explicitly using Beacon Green for a primary call to action.

### Don'ts

- Avoid using multiple font weights within a single typographic element; Helvetica N 500 is sufficient for most hierarchical needs.
- Do not introduce additional saturated colors beyond Gallery Orange (#ff7f41) and Beacon Green (#71cc98) without specific functional justification.
- Never add significant box shadows or decorative gradients to interface elements, as the design prioritizes flat surfaces.
- Resist rounding corners on cards or major content blocks, reserving the 50px radius exclusively for specific accent cards and pill-shaped utilities.
- Do not use generic gray buttons or actions where a clear Beacon Green (#71cc98) action is needed; primary actions should stand out.
- Avoid dense or cluttered layouts; maintain ample whitespace and comfortable element spacing like 20px to ensure content breathability.
- Do not use subtle or low-contrast text colors for essential information; Inkwell (#000000) and Canvas White (#ffffff) are fundamental to readability.

### Layout

The page primarily uses a max-width contained layout, with content centered. The hero section often features a full-bleed photographic background with the brand name as a prominent overlay. Section rhythm is driven by distinct content blocks, with some alternating background colors (Canvas White #ffffff and Fog #e5e3df) to delineate sections. Content is often presented in a clear, single-column stack, but also utilizes list-like structures and two-column layouts for event or exhibition details. Navigation is a simple top bar, with a prominent 'Map & Directory' button fixed to the bottom right of the viewport.

### Imagery

The site uses a mix of high-quality, candid photography featuring people in art-related settings, like studios or galleries. Images are treated naturally, with realistic lighting and color, serving to establish a welcoming atmosphere rather than as product showcases. Iconic typography ('ART IN DUMBO') is boxed in white against some imagery, functioning as a brand overlay. There is limited use of simple, descriptive icons, which appear as filled monochromatic shapes (Inkwell #000000) or outlined elements.
