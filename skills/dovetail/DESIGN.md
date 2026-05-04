---
version: alpha
name: Dovetail
description: Dovetail uses a sophisticated, deep-space interface strategy: a dominant dark canvas creates depth, accented by bright, functional typography and subtle gray surfaces. Visual hierarchy is established through precise alignment, judicious use of white text, and a single, vivid blue violet. Interactive elements are clearly delineated with contrasting backgrounds and precise spacing, maintaining a sense of order against the immersive dark theme.
colors:
  deep-night: "#0a0a0a"
  graphite: "#1e1e1e"
  abyssal-plane: "#141414"
  ghost: "#313131"
  ash: "#454545"
  skybound-violet: "#6798ff"
  pure-white: "#ffffff"
  silver-pine: "#a7a7a7"
  stone-dust: "#7c7c7c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0.996px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.7px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -1px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.14
    letterSpacing: -1.74px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.13
    letterSpacing: -2.3px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 32px
components:
  ghost-navigation-button:
    role: Primary navigation and subtle actions in headers
  subtle-nav-button:
    role: Secondary navigation items, subtly interactive elements
  standard-button:
    role: General purpose call-to-action buttons
  outlined-elevated-button:
    role: Secondary call-to-action, ghost buttons with higher prominence
  prominent-spotlight-card:
    role: Highlighted content panels, visual breaks with strong presence
  default-card:
    role: Standard content containers
---

## Overview

**North Star:** Midnight command center

Dovetail uses a sophisticated, deep-space interface strategy: a dominant dark canvas creates depth, accented by bright, functional typography and subtle gray surfaces. Visual hierarchy is established through precise alignment, judicious use of white text, and a single, vivid blue violet. Interactive elements are clearly delineated with contrasting backgrounds and precise spacing, maintaining a sense of order against the immersive dark theme.

### Do's

- Prioritize Absolute White (#ffffff) for primary text on dark backgrounds and Skybound Violet (#6798ff) for critical interactive states to ensure immediate attention.
- Utilize Graphite (#1e1e1e) for interactive surface elements and Abyssal Plane (#141414) for static card backgrounds, creating a distinct visual layering.
- Apply Inter font family for all main content and headings, adjusting weights from 400 to 600 to control hierarchy, with letter-spacing decreasing for larger sizes.
- Employ JetBrains Mono at 12px or 14px with positive letter-spacing (0.0710em or 0.0830em) for labels, data, or code elements to provide a precise, technical feel.
- Maintain an 8px border-radius for all standard interactive components and cards, ensuring a consistent softened-edge aesthetic.
- Use Ash (#454545) or Ghost (#313131) sparingly for hairline borders and subtle dividers, allowing elements to breathe without harsh separation.
- Ensure generous sectionGap of 32px between major content blocks to prevent visual crowding on the dark canvas.

### Don'ts

- Avoid introducing additional chromatic colors; Skybound Violet (#6798ff) is the singular accent for focus and interaction.
- Do not use dark backgrounds that are too light or saturated, as this dilutes the deep-space theme and affects readability of white text.
- Refrain from using strong shadows or complex elevation; the visual hierarchy is primarily achieved through background color shifts and precise borders.
- Do not deviate from the specified letter-spacing for Inter at different sizes; the precise tracking is crucial for the typography's authoritative feel.
- Avoid arbitrary border-radius values; adhere strictly to 8px for standard components, 4px for tags, and 66px for distinct spotlight cards.
- Do not overload interface elements with borders; rely on background color changes for surface distinction, reserving borders for subtle cues.
- Avoid using decorative imagery or photography that introduces light tones or busy compositions, as this would conflict with the dark, focused UI.
