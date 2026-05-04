---
version: alpha
name: Warp
description: This design system conjures a high-tech command center feel, where dark surfaces meet crisp, focused information. The primary visual choice is the deeply desaturated dark background (#121212) contrasted with luminous white text (#FAFAFA), creating a sense of precision and low-light operations. Subtle uses of a muted violet (#CBB0F7) and an infrequent vivid green (#2ECC71) serve as functional indicators, akin to status lights on a console, reinforcing the industrial yet refined atmosphere. The almost exclusive use of the Matter font family, with its defined structure and variable weights, maintains a consistent technical aesthetic.
colors:
  deep-space: "#000000"
  console-dark: "#121212"
  surface-dark: "#1E1E1D"
  ghost-gray: "#868684"
  luminous-white: "#FAF9F6"
  polar-white: "#FFFFFF"
  deep-gray: "#333333"
  storm-gray: "#B4B4B2"
  ash-gray: "#A0A0A0"
  light-driftwood: "#E3E2E0"
  twilight-gray: "#40403F"
  eclipse-black: "#080808"
  crystal-silver: "#EBEBEB"
  battleship-gray: "#666469"
  agent-violet: "#CBB0F7"
  success-green: "#2ECC71"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.12px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.38
    letterSpacing: -0.17px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.32px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.15
    letterSpacing: -0.42px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.48px
spacing:
  buttonRadius: 4px, 33.17px, 50px
  elementGap: 8px
  sectionGap: 60px
components:
  product-cards-warp-terminal-oz:
    role: 
  testimonial-cards:
    role: 
  announcement-banner-button-group:
    role: 
  primary-action-button:
    role: Call to action for downloads or critical next steps.
  secondary-ghost-button:
    role: Less prominent interactive actions.
  tertiary-dark-button:
    role: Navigation items or filter buttons.
  pill-status-button:
    role: Informational tags or minor selections.
  image-card-wrapper:
    role: Containers for product screenshots or visual content.
---

## Overview

**North Star:** Midnight Command Center. Deeply desaturated dark surfaces provide a stage for precise, luminous information, like a control panel in low light.

This design system conjures a high-tech command center feel, where dark surfaces meet crisp, focused information. The primary visual choice is the deeply desaturated dark background (#121212) contrasted with luminous white text (#FAFAFA), creating a sense of precision and low-light operations. Subtle uses of a muted violet (#CBB0F7) and an infrequent vivid green (#2ECC71) serve as functional indicators, akin to status lights on a console, reinforcing the industrial yet refined atmosphere. The almost exclusive use of the Matter font family, with its defined structure and variable weights, maintains a consistent technical aesthetic.

### Do's

- Use Console Dark (#121212) for primary backgrounds and Surface Dark (#1E1E1D) for secondary sections to create a sense of layered depth.
- Employ Luminous White (#FAF9F6) and Polar White (#FFFFFF) as primary text colors on all dark backgrounds for maximum readability.
- Apply Matter font with negative letter spacing for display headlines (e.g., Matter 56px with -0.04em, -0.48px) to achieve a precise, high-tech aesthetic.
- Utilize Agent Violet (#CBB0F7) exclusively for interactive elements and brand accents like links and primary buttons.
- Ensure buttons maintain varying radius profiles: 33.17px for primary actions, 4px for secondary, and 50px for pill-shaped status elements.
- Maintain a compact spacing density, utilizing 8px for element gaps and multiples of 5-14px for internal padding within components.

### Don'ts

- Avoid introducing additional saturated colors beyond Agent Violet (#CBB0F7) and Success Green (#2ECC71) to preserve the desaturated, focused environment.
- Do not use generic system fonts for prominent text; always prioritize Matter and Geist Mono for brand consistency.
- Resist using hard-edged rectangles for cards or buttons where a subtle radius (4px, 7px, or 33.17px) is intended, as it softens the technical aesthetic appropriately.
- Do not deviate from the tight line heights and letter spacing defined in the Matter font profiles; they are critical for the system's precise feel.
- Avoid large, open white spaces; the design emphasizes compact information blocks within dark, structured sections.
- Do not use box-shadows or significant elevation; depth is created through subtle background shifts rather than visual lifts.
