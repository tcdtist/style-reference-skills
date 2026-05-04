---
version: alpha
name: Gus
description: The Gus design system evokes a playful, almost retro, digital workspace. A dominant, vibrant teal acts as the primary canvas, overlaid with a subtle grid pattern, giving the impression of an engineering blueprint or a pixel art canvas. Typography is minimal and pragmatic, with an emphasis on system fonts, contrasting sharply with occasional bursts of bright, primary accent colors that draw attention to key interactive elements. Visual treatments are flat with sharply defined shapes, avoiding shadows or complex gradients.
colors:
  grid-canvas: "#008263"
  grid-line: "#050000"
  midnight-ink: "#000000"
  paper-white: "#ffffff"
  scroll-highlight: "#f5c04f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  body-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
spacing:
  buttonRadius: 9999px
  elementGap: 0px
components:
  ghost-header-navigation-link:
    role: Navigation element
  menu-toggle-button:
    role: Toggle control
  scroll-call-to-action:
    role: Interactive indicator
  starburst-logo-placeholder:
    role: Brand mark
  adage-award-banner:
    role: Informational banner
---

## Overview

**North Star:** Pixelated grid playground.

The Gus design system evokes a playful, almost retro, digital workspace. A dominant, vibrant teal acts as the primary canvas, overlaid with a subtle grid pattern, giving the impression of an engineering blueprint or a pixel art canvas. Typography is minimal and pragmatic, with an emphasis on system fonts, contrasting sharply with occasional bursts of bright, primary accent colors that draw attention to key interactive elements. Visual treatments are flat with sharply defined shapes, avoiding shadows or complex gradients.

### Do's

- Prioritize '#008263' for large background areas, emphasizing the grid pattern with '#050000' lines.
- Use 'Times' for paragraph text and 'Arial' for all UI labels, headings, and buttons.
- Apply 9999px border-radius to perfect circular elements like the 'Scroll' button.
- Maintain a flat visual hierarchy with no shadows or complex gradients unless explicitly defined.
- Employ the starburst shape with '#ff0000' for key brand accents or playful callouts.
- Use '#000000' for primary text on light backgrounds and '#ffffff' on dark backgrounds or highlights.
- Ensure interactive elements like buttons and links use distinct accent colors or clear text-on-background contrast.

### Don'ts

- Avoid using any form of drop shadows or box shadows, as the system relies on flat aesthetics.
- Do not introduce gradients; the visual system is strictly flat color.
- Do not deviate from the specified circular or sharp-edged radii; curved rects are not part of this system.
- Do not use generic system UI elements or styles that introduce elevation or depth.
- Avoid mixing primary and secondary fonts unnecessarily; adhere strictly to their defined roles.
- Do not use subtle color variations for interactive states; rely on direct background or text color changes.

### Elevation

The design intentionally avoids shadows and any form of visual elevation. All elements lie flat against the page, adhering to a two-dimensional, pixel-art inspired aesthetic. This creates a direct, unfussy user experience where clarity comes from color contrast and strong outlines rather than depth cues.
