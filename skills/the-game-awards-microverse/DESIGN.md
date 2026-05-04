---
version: alpha
name: The Game Awards Microverse
description: The Game Awards Microverse immerses users in a dark, atmospheric virtual environment. Its design language is driven by luminous UI elements floating within a deep, inky canvas. Typography is compact and precise, often used in all-caps for labels and navigation. Components are subtle, translucent overlays, appearing as frosted glass panels that provide contextual information without breaking the immersive dark aesthetic. The system prioritizes functional clarity amidst a visually rich, low-light setting.
colors:
  void-black: "#000000"
  ghost-white: "#ffffff"
  system-ui-gray: "#f4f4f4"
  panel-dark: "#313131"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 10px
  sectionGap: 60px
components:
  microverse-card:
    role: Contextual information display.
  ghost-ui-button:
    role: Interactive controls within the immersive environment.
  help-overlay-panel:
    role: Instructional text and control displays.
---

## Overview

**North Star:** Midnight Command Center

The Game Awards Microverse immerses users in a dark, atmospheric virtual environment. Its design language is driven by luminous UI elements floating within a deep, inky canvas. Typography is compact and precise, often used in all-caps for labels and navigation. Components are subtle, translucent overlays, appearing as frosted glass panels that provide contextual information without breaking the immersive dark aesthetic. The system prioritizes functional clarity amidst a visually rich, low-light setting.

### Do's

- Use `Void Black` for primary backgrounds and text for maximum contrast and an immersive dark atmosphere.
- Apply `Ghost White` for all interactive text and icons to ensure visibility against dark backgrounds.
- Prefer `Red Hat Display` for all UI text, utilizing weights 400 and 600 for hierarchy.
- Maintain a consistent border-radius of `10px` for all interactive elements and contained content like cards.
- Implement card padding of `38px` vertical and `24px` horizontal, using rgba(0, 0, 0, 0.8) for the background to create translucent layers.
- Utilize `System UI Gray` for subtle background elements or less prominent text to introduce visual variety without distracting from the immersive dark theme.
- Ensure headings and calls to action are presented in all-caps using `Red Hat Display` weight 600 for emphasis.

### Don'ts

- Avoid using bright or highly saturated colors for large background areas; color should be reserved for functional accents or atmospheric elements.
- Do not introduce complex shadows or extreme elevation; the design relies on subtle layering effects with translucent backgrounds.
- Do not deviate from the `Red Hat Display` font family; font consistency is key to the system's precise feel.
- Do not use generic button styles; interactive elements should echo the Ghost UI Button aesthetic with translucent backgrounds and subtle borders.
- Avoid varying component radii; `10px` is the signature shape for all defined components.
- Do not use letter-spacing other than 'normal' for `Red Hat Display` to maintain its intended compact readability.
- Do not embed images or graphics that break the dark, immersive aesthetic with incongruent brightness or style.

### Layout

The layout is full-bleed, with a deeply immersive background occupying the entire viewport. Informational cards and instructional overlays are positioned contextually, often floating against the dark, detailed environment. The hero pattern is a central, luminous visual element (the vortex) with primary branding embedded within. Content is arranged in compact, self-contained panels, often centered or left-aligned within a smaller logical content area. There is no visible grid for features; individual UI elements are placed functionally. Navigation is minimal, likely consisting of small, contextual icons or text links that appear as needed. The density is spacious, allowing the background environment to dominate.

### Imagery

This design system primarily uses dark, immersive, 3D rendered environments as its visual backdrop rather than traditional imagery. The 'game awards' logo itself is integrated into a central swirling vortex graphic. UI elements rely on simple icons with a subtle outlined style and 'Ghost White' fills. Product screenshots are absent, with the environment itself serving as the primary visual content. Density is low; large areas of the dark environment are juxtaposed with small, functional UI elements.
