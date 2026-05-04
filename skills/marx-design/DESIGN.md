---
version: alpha
name: Marx Design
description: Marx Design uses a stark, high-contrast visual language with a focus on bold typography and achromatic tones. The design system emphasizes clarity and directness through prominent text elements on a predominantly black background. Visual interest is derived from strong typographic presence and the occasional use of black-and-white imagery, creating an atmosphere that is both authoritative and understated.
colors:
  obsidian-black: "#000000"
  canvas-white: "#ffffff"
  ash-gray: "#ece8e7"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.29
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.37
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 108px
    lineHeight: 1
    letterSpacing: -1.08px
spacing:
  cardRadius: 0px
  buttonRadius: 0px for ghost, 50% for filled
  elementGap: 6px
components:
  ghost-navigation-button:
    role: Primary navigation and menu items.
  filled-circular-button:
    role: Call to action or prominent interaction.
  body-text-container:
    role: Wrapping descriptive content and secondary information.
---

## Overview

**North Star:** monochrome cinematic canvas

Marx Design uses a stark, high-contrast visual language with a focus on bold typography and achromatic tones. The design system emphasizes clarity and directness through prominent text elements on a predominantly black background. Visual interest is derived from strong typographic presence and the occasional use of black-and-white imagery, creating an atmosphere that is both authoritative and understated.

### Do's

- Prioritize Obsidian Black (#000000) for backgrounds and main body text to create a high-contrast foundation.
- Use Canvas White (#ffffff) exclusively for primary headings and interactive text on dark backgrounds to ensure maximum prominence.
- Apply the 'black' font at 108px with -0.0250em letter-spacing for all significant hero headlines.
- Utilize Ash Gray (#ece8e7) for all subtle UI text, borders on neutral elements, and secondary content.
- Employ a border-radius of 0px for all non-interactive elements and informational blocks to maintain a sharp, architectural edge.
- Ensure all text (except headings) uses 'untitled' font with 'kern' feature settings for consistent body typography.
- For primary navigation, use link-styled text in Canvas White (#ffffff) on Obsidian Black (#000000) without explicit padding or borders.

### Don'ts

- Avoid using highly saturated colors for functional UI elements; color is reserved for content or specific brand applications outside general UI.
- Do not introduce gradients into core UI components; the system relies on flat colors and strong contrast.
- Refrain from using any borders with a radius greater than 0px on cards or section dividers; maintain sharp, defined edges.
- Do not stack multiple shadow layers; the system intentionally avoids depth through elevation for a flat aesthetic.
- Do not deviate from the specified letter-spacing for headlines and button text; precise tracking is key to the typographic identity.
- Avoid mixed alignment or playful spacing; maintain a sense of order and directness through consistent grid-like structures and centered content.
- Do not use font weights other than 400; the system achieves distinctiveness through size and tracking rather than varied weight.

### Layout

The page structure is full-bleed, dominated by a stark Obsidian Black (#000000) background. Content, including the hero section, is centrally aligned. Headings utilize extremely large typography for immediate impact. The design avoids complex grids for content presentation, favoring stacked, centered elements with generous vertical spacing between sections. Navigation is minimal, presented as a 'Menu' link in the top right corner.

### Imagery

This design system primarily utilizes black-and-white photography, often historical or abstract, serving as a decorative and atmospheric element rather than explanatory content. Images are contained within the layout, not full-bleed, and generally appear without rounded corners, maintaining the sharp aesthetic. The imagery density is low, making text the dominant visual element on the page.
