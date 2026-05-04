---
version: alpha
name: Jonas Pelzer
description: Jonas Pelzer's design system evokes an industrial, dot-matrix digital aesthetic on a clean white canvas. Typography blends a monospaced display font with a classic serif for body text, creating a tech-forward yet grounded feel. Interactions are highlighted with a distinct violet, often in subtle outlines or transparent fills, suggesting responsive interfaces and active states without overwhelming the stark, high-contrast monochrome base. Surface treatments favor soft, rounded cards and ghost buttons, maintaining lightness across the layout.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ghost-gray: "#d4d6dd"
  digital-violet: "#3502ff"
  muted-lilac: "#d7ccff"
  action-grape: "#5d35ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.1
    letterSpacing: 0.26px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
    letterSpacing: 0.3px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: 0.55px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1
    letterSpacing: 0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1
    letterSpacing: 1.512px
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 5px
  sectionGap: 64px
components:
  ghost-button:
    role: Navigation and secondary actions
  outlined-violet-button:
    role: Primary Call to Action
  work-card:
    role: Portfolio item container
  navigation-link-active:
    role: Current page indicator
  navigation-wrap:
    role: Container for primary navigation
---

## Overview

**North Star:** dot-matrix digital blueprint

Jonas Pelzer's design system evokes an industrial, dot-matrix digital aesthetic on a clean white canvas. Typography blends a monospaced display font with a classic serif for body text, creating a tech-forward yet grounded feel. Interactions are highlighted with a distinct violet, often in subtle outlines or transparent fills, suggesting responsive interfaces and active states without overwhelming the stark, high-contrast monochrome base. Surface treatments favor soft, rounded cards and ghost buttons, maintaining lightness across the layout.

### Do's

- Prioritize Canvas White (#ffffff) for page backgrounds to maintain an open, clean aesthetic.
- Use Ink Black (#000000) for all primary text elements, ensuring high contrast and legibility.
- Apply Digital Violet (#3502ff) exclusively for active navigation states and decorative accents.
- Use the Scope typeface for all headings and navigation to leverage its distinctive digital character.
- Employ a 12px border-radius for all cards and buttons to ensure a consistent softened aesthetic.
- Utilize Muted Lilac (#d7ccff) for ghost button outlines and subtle card backgrounds.
- Maintain a compact elementGap of 5px to keep interactive elements closely related.

### Don'ts

- Do not use highly saturated colors for large background areas; maintain a light monochromatic base.
- Avoid heavy drop shadows; implement transparent shadows like rgba(53, 2, 255, 0.1) 0px 1px 4px 2px sparingly, only for elevated components like the navigation wrap.
- Do not use generic system fonts for headings; maintain the distinct visual identity provided by Scope.
- Do not apply excessive padding to cards or buttons; adhere to the compact 6px vertical, 14px horizontal button padding and 14px card padding.
- Do not introduce strong visual dividers between sections; rely on spacing and subtle background shifts to define content blocks.
- Avoid bold or heavy weights for any typeface; the design relies on the weight 400 of Scope and Signifier for consistent typography.
- Do not use solid fills for primary action buttons; always use the outlined Muted Lilac style.
