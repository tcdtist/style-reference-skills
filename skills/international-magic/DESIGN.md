---
version: alpha
name: International Magic
description: International Magic employs a dark, high-contrast aesthetic that feels like a digital portal. Text is predominantly white or light gray against a near-black canvas, with accents of off-white used minimally for interactive elements. Surfaces are stark and planar, relying on large, abstract shadows for subtle depth rather than complex gradients or border treatments. Typography is compact and precise, maintaining a high information density within fixed-width page layouts, while interactive components feature extremely rounded, almost pill-like shapes.
colors:
  midnight-ink: "#0a0a0a"
  ghost-white: "#f7f7f7"
  ash-gray: "#7c7c7c"
  steel-gray: "#4d4d4d"
  porcelain: "#ebebeb"
  muted-slate: "#616161"
  shadowened-clay: "#585858"
  faded-silver: "#707070"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.25px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -1.63px
spacing:
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 64px
components:
  ghost-header-button:
    role: Navigation links and primary actions in headers
  secondary-filled-button:
    role: Subtle interactive elements, 'Subscribe' button
  badge:
    role: Categorization and metadata labels
---

## Overview

**North Star:** Midnight Terminal, Pixelated Echoes

International Magic employs a dark, high-contrast aesthetic that feels like a digital portal. Text is predominantly white or light gray against a near-black canvas, with accents of off-white used minimally for interactive elements. Surfaces are stark and planar, relying on large, abstract shadows for subtle depth rather than complex gradients or border treatments. Typography is compact and precise, maintaining a high information density within fixed-width page layouts, while interactive components feature extremely rounded, almost pill-like shapes.

### Do's

- Prioritize Midnight Ink (#0a0a0a) for all primary backgrounds and surfaces to maintain the dark theme.
- Use Ghost White (#f7f7f7) for primary text and significant text elements like headings.
- Apply Wand UI Pro for all typography, ensuring font feature settings 'ordn' and 'ss01' are enabled.
- Utilize 9999px radius for all button and badge elements to create a distinctive pill-like shape.
- Maintain a default letter-spacing of -0.017em for large display text (96px) and 0.025em for small caption text (10px).
- Implement the large shadow 'rgba(0, 0, 0, 0.25) 0px 64px 72px 0px' for elevated elements to create depth without overt borders.
- Employ Ash Gray (#7c7c7c) or Steel Gray (#4d4d4d) for secondary information or links, ensuring sufficient contrast against the dark background.

### Don'ts

- Avoid using bright or overly saturated colors, as the palette is strictly achromatic with very minimal white/gray accents.
- Do not use generic border-radii; adhere strictly to 9999px for buttons/badges and 24px for other interactive elements.
- Do not introduce gradients unless they match the detected shadow style, as the system relies on flat surfaces and minimal elevation.
- Avoid excessive spacing or padding; the design system favors a compact, information-dense layout.
- Do not use box shadows for button states; interaction is indicated primarily by text color changes or subtle background fills.
- Do not center page content on a fixed-width container; the layout is full-bleed with content contained by padding.
- Avoid mixing sans-serif typefaces; Wand UI Pro is the only approved typeface.

### Layout

The page adopts a full-bleed dark canvas model. The hero section displays large, centered headings, often layered over product imagery or abstract visuals. Content sections appear to flow vertically with consistent, yet comfortable 64px gaps, but without distinct alternating bands or strong visual dividers, contributing to a seamless, continuous digital experience. Navigation is handled by a minimal top bar with ghost-style links. The visual rhythm is direct and linear, guiding the user vertically through content without complex grid systems or asymmetric arrangements, though interactive elements may float over content like a video player.

### Imagery

Imagery consists of product screenshots and abstract graphic elements, often rendered as animated video or glitched visual effects. Photography, when present (e.g., person's face), is styled with muted colors and typically contained within rounded containers. Icons are minimal, featuring outlined styles with a clean stroke weight, and primarily serve a functional purpose in media playback controls or navigation. The overall density of imagery is balanced with text, acting as compelling visual anchors for textual information.
