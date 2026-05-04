---
version: alpha
name: Cursor
description: Cursor's design language evokes a functional, precise studio environment, blending the tactile feel of physical tools with the clean, digital interface of modern software. A foundation of warm, off-white backgrounds (#f7f7f4) and subtle, multi-layered shadows create a sense of depth and hierarchy, mimicking stacked, floating interface elements. Typography is highly refined, utilizing custom mono and gothic fonts with precise letter-spacing and stylistic alternates that convey technical sophistication.
colors:
  canvas-parchment: "#f7f7f4"
  inkwell: "#262510"
  muted-stone: "#7a7974"
  deep-shadow: "#141414"
  pebble-gray: "#e6e5e0"
  onyx-outline: "#f54e00"
  chartreuse-alert: "#4ade80"
  goldenrod-accent: "#c08532"
  forest-green-action: "#34785c"
  highlight-beige: "#cdcdc9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.1
    letterSpacing: 0.06px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.08px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.08px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -0.35px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.45px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -2.16px
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 43px
components:
  cta-button-group:
    role: 
  trusted-by-brand-grid:
    role: 
  cursor-agent-activity-card:
    role: 
  primary-filled-button:
    role: Interactive element
  ghost-action-button:
    role: Interactive element
  outlined-accent-button:
    role: Interactive element
  elevated-content-card:
    role: Content container
  flat-background-card:
    role: Content container
  text-input-field:
    role: Form element
  icon-button:
    role: Interactive element
  branding-card:
    role: Informational display
---

## Overview

**North Star:** Warm ivory software studio.

Cursor's design language evokes a functional, precise studio environment, blending the tactile feel of physical tools with the clean, digital interface of modern software. A foundation of warm, off-white backgrounds (#f7f7f4) and subtle, multi-layered shadows create a sense of depth and hierarchy, mimicking stacked, floating interface elements. Typography is highly refined, utilizing custom mono and gothic fonts with precise letter-spacing and stylistic alternates that convey technical sophistication.

### Do's

- Use CursorGothic for all headings and primary UI text, applying precise letter-spacing values (e.g., -0.45px at 72px, -0.08px at 22px).
- Elevate content with the multi-layered shadow token: rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px.
- Apply Canvas Parchment (#f7f7f4) as the primary background for all major page sections and UI elements.
- Reserve Onyx Outline (#f54e00) exclusively for outlined interactive elements or prominent link text to signal primary action.
- Use 4px border-radius for most general rounded elements like cards and buttons, with 8px radius for more visually distinct components.
- Maintain a compact information density with an 8px element gap between related UI elements.
- Ensure input fields use a transparent background with Muted Stone (#7a7974) for borders, prioritizing readability of the input over strong visual containment.

### Don'ts

- Do not use solid background colors for primary call-to-action buttons; prefer bordered actions with Onyx Outline (#f54e00).
- Avoid arbitrary shadow values; adhere strictly to the defined multi-layered shadow for all elevated cards and elements.
- Never use purely achromatic grays for primary text or borders; always use Inkwell (#26251e) or Muted Stone (#7a7974).
- Do not introduce new font families or weights beyond CursorGothic (400), Lato (400, 600), and berkeleyMono (400, 500).
- Do not use the vivid accent color Onyx Outline (#f54e00) as a background fill for any component.
- Avoid large, uncontained background images; all visuals should appear within component bounds or as subtle, textural overlays.
- Do not vary letter-spacing for standard body text or inputs; only apply the specified letter-spacing values for CursorGothic headlines.

### Layout

The page adheres to a max-width of 1300px, creating a contained, spacious feel. The hero section is a split layout, featuring a prominent headline next to a contextual product screenshot, providing an immediate understanding of the tool. Content sections alternate between visually distinct blocks, often with a large left-aligned text column paired with right-aligned product imagery or stacked UI elements. A central element on the page is the responsive display of product screenshots, often overlapping, giving the impression of a live, multi-tasking interface on the screen. The overall rhythm is unhurried, with generous vertical spacing between sections, avoiding a dense, information-heavy presentation. Navigation is a simple top bar with distinct links and a primary download button.

### Imagery

The visual language for imagery is driven by product screenshots and UI examples, emphasizing the tool's functionality. These are typically contained within card-like structures, often floating with subtle shadows, and sometimes overlapping to create a dynamic, multi-windowed feel. The product screenshots themselves feature a dark UI with distinct syntax highlighting, contrasting with the light surrounding page, effectively showcasing the software environment. There is minimal photography; the focus is on UI and code. Icons are simple, monochrome, using Muted Stone (#7a7974) for fills, suggesting utility over embellishment. Density is balanced, with imagery illustrating explanations rather than dominating sections.
