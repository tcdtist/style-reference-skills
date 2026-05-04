---
version: alpha
name: Bird
description: Bird's design system evokes a midnight command center atmosphere, characterized by a predominantly dark canvas and a restricted, achromatic color palette. High contrast between crisp white text and dark backgrounds ensures legibility, while muted grays provide subtle visual hierarchy. The system prioritizes functional, compact layouts with soft-cornered components and a clean, unobtrusive feel, reserving color for minimal functional accents.
colors:
  pitch-black: "#141414"
  ghost-white: "#f7f7f7"
  muted-ash: "#aaaaaa"
  deep-grey: "#0d0d0d"
  soft-stone: "#737373"
  panel-background: "#212121"
  skeleton-glow: "#303030"
  error-red: "#cb0f00"
  selected-blue: "#001040"
  selected-hover-blue: "#001959"
  light-button-fill: "#f5f5f5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.43
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.3
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 8px
  sectionGap: 24px
components:
  navigation-item-inactive:
    role: Sidebar navigation links that are not currently active.
  navigation-item-active:
    role: Highlighted sidebar navigation links.
  default-button:
    role: General purpose button with a subtle appearance.
  prominent-button:
    role: Button with higher visual emphasis for key actions.
  inline-text-button:
    role: Button integrated directly within text, removing borders and padding.
  filled-button-light:
    role: Primary call-to-action button, standing out against dark backgrounds.
  error-badge:
    role: Small informational badge, indicating an error or warning.
---

## Overview

**North Star:** Midnight command center

Bird's design system evokes a midnight command center atmosphere, characterized by a predominantly dark canvas and a restricted, achromatic color palette. High contrast between crisp white text and dark backgrounds ensures legibility, while muted grays provide subtle visual hierarchy. The system prioritizes functional, compact layouts with soft-cornered components and a clean, unobtrusive feel, reserving color for minimal functional accents.

### Do's

- Prioritize a dark background (Pitch Black #141414) for main content areas.
- Use Ghost White (#f7f7f7) for primary text and active navigational elements to maintain high contrast.
- Apply Muted Ash (#aaaaaa) for secondary text, disabled states, and subtle UI elements like icons.
- Ensure all buttons and interactive elements use a 10px border radius for a consistent soft-cornered aesthetic.
- Maintain an 8px vertical spacing unit for consistency in padding and element gaps.
- Use Lausanne font family exclusively, with its specified weights and letter-spacing for all text.
- Employ the Light Button Fill (#f5f5f5) with Deep Grey (#0d0d0d) text for primary calls-to-action.

### Don'ts

- Avoid introducing additional saturated colors unless explicitly assigned a functional role (e.g., error states).
- Do not vary border radii inconsistently; adhere to the 10px standard for most components.
- Refrain from using strong shadows or heavy visual elevation; subtle changes in surface color or minimal borders are preferred.
- Do not introduce new typefaces; Lausanne is the sole approved font.
- Avoid large, impactful imagery that breaks the dark, functional aesthetic.
- Do not deviate from the specified contrast ratios; legibility is paramount in the dark theme.
- Do not use generic system icon styles; all icons should align with the outlined style seen in the sidebar.

### Layout

The page adheres to a two-column layout: a fixed-width left sidebar and a flexible main content area. The overall page is full-bleed, with the dark background extending across the viewport. The hero pattern (if present) would likely feature a centered headline over the dark canvas. Vertical rhythm is established by consistent 24px section gaps with smaller 8px element gaps, creating a compact information-dense feel rather than spacious, airy sections. Navigation is presented via a fixed, always-visible left sidebar.

### Imagery

The visual language is UI-dominant, with minimal use of imagery. What photography exists is entirely abstract or iconographic, focusing on functional symbols rather than expressive visuals. Icons are outlined, subtle monochromes, consistent in stroke weight and color (Muted Ash #aaaaaa). No product screenshots, illustrations, or lifestyle photography are present. The density is text-dominant, with icons serving as small, functional orienting elements rather than decorative features.
