---
version: alpha
name: Philosophical Foxes
description: Philosophical Foxes adopts a pixel-art aesthetic integrated into a sophisticated, minimalist interface, evoking a gallery or museum catalog. The visual system pairs a stark black-on-parchment color scheme with a monospace typeface, reminiscent of terminal output or code. Component outlines and boxy forms reinforce a digital, almost wireframe-like structure for the interactive elements, while the content itself leverages a detailed pixel art style.
colors:
  parchment: "#f6f2e4"
  terminal-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.45
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.42
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.63
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.56
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.14
  display:
    fontFamily: "system-ui"
    fontSize: 133px
    lineHeight: 1
spacing:
  cardRadius: 24px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 74px
components:
  primary-action-button:
    role: Call to action button
  ghost-action-button:
    role: Secondary action button/navigation
  info-card:
    role: Content container for detailed information
  headline-card:
    role: Large, dark background card for prominent headlines or sections
  navigation-tab-box:
    role: Tab-style navigation elements
  outlined-input-field:
    role: User input for data
---

## Overview

**North Star:** Pixelated Grand Library

Philosophical Foxes adopts a pixel-art aesthetic integrated into a sophisticated, minimalist interface, evoking a gallery or museum catalog. The visual system pairs a stark black-on-parchment color scheme with a monospace typeface, reminiscent of terminal output or code. Component outlines and boxy forms reinforce a digital, almost wireframe-like structure for the interactive elements, while the content itself leverages a detailed pixel art style.

### Do's

- Prioritize Terminal Black (#000000) for all text elements to ensure high contrast against the Parchment (#f6f2e4) background.
- Use IBM Plex Mono as the primary typeface for all UI elements and body text, maintaining 'normal' letter-spacing.
- Apply a 100px border-radius for all primary action buttons and navigation pills to achieve a distinct pill shape.
- Construct information cards with a 24px border-radius on a Parchment (#f6f2e4) background, with a consistent 25px horizontal padding.
- Employ the Code 7x5 font for large, impactful headlines to leverage its pixelated, retro-digital aesthetic.
- Maintain a clear visual hierarchy using strong Terminal Black borders (1px solid) to define content blocks, cards, and input fields.
- Utilize a section gap of 74px and an element gap of 16px to create a comfortable, structured layout density.

### Don'ts

- Do not introduce new colors that deviate from the core Parchment and Terminal Black palette; color should be functionally minimal.
- Avoid using soft shadows or complex gradients; the system relies on strong outlines and flat surfaces for definition.
- Do not round corners on general purpose information badges; they should be strictly rectilinear (0px border-radius).
- Refrain from varying letter spacing for IBM Plex Mono; it should remain 'normal' for consistent readability.
- Do not use generic sans-serif fonts for headlines; the distinctive Code 7x5 is essential for brand identity.
- Avoid dense, overcrowded layouts; respect the established 16px element gap and 74px section gap to provide visual breathing room.
- Do not introduce multi-color illustrations or photographs into a UI context; all imagery within the interface should adhere to the pixel art style.

### Layout

The page structure favors a max-width, center-aligned containment, creating a focused content area despite the full screen pixel art hero. The hero section often features large pixel art scenes that extend to the viewport edges, with centered headlines overlaying them. Content sections typically use a consistent vertical rhythm (74px section gap) and often arrange information in two-column text+image patterns or stacked, outlined cards. Navigation is handled by a minimal top bar with text links and pill-shaped 'ghost' buttons, appearing above the primary content.

### Imagery

The imagery is exclusively pixel art, featuring intricate scenes and characters with a detailed, classic video game aesthetic. Visuals are contained within the layout, never full-bleed, and often appear as content within cards or as large, central decorative elements. Treatment is raw-edged, without masking or rounding, embracing the pixel grid. Icons, while minimal, follow an outlined, monochrome style with implied stroke weight, complementing the overall aesthetic.
