---
version: alpha
name: ChatGPT
description: This design system presents an austere, functional interface resembling a digital workspace focused on clarity. Predominantly achromatic with precise geometry and subtle textural shifts in its grays, it creates an environment where content takes precedence. The judicious use of system fonts with controlled letter spacing ensures legibility, while rounded forms are reserved for interactive elements, providing visual cues for action within an otherwise stark layout.
colors:
  carbon: "#0d0d0d"
  snow: "#ffffff"
  fog: "#f9f9f9"
  pewter: "#5d5d5d"
  stone: "#8f8f8f"
  arctic-mist: "#ececec"
  link-blue: "#007aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
spacing:
  buttonRadius: 10px
  elementGap: 4px
  sectionGap: 64px
components:
  ask-anything-input:
    role: 
  auth-button-group:
    role: 
  sidebar-login-prompt-card:
    role: 
  primary-ghost-button:
    role: Interactive element
  pill-outline-button:
    role: Main CTAs
  black-filled-button:
    role: Key CTAs
  input-with-voice-button:
    role: Primary interaction input
  sidebar-navigation-item:
    role: Navigation links
  sidebar-login-prompt:
    role: Information/action block
  contextual-link:
    role: Informational links
---

## Overview

**North Star:** Frosted glass workstation. An environment of quiet focus, where soft grays frame crisp textual interaction.

This design system presents an austere, functional interface resembling a digital workspace focused on clarity. Predominantly achromatic with precise geometry and subtle textural shifts in its grays, it creates an environment where content takes precedence. The judicious use of system fonts with controlled letter spacing ensures legibility, while rounded forms are reserved for interactive elements, providing visual cues for action within an otherwise stark layout.

### Do's

- Use Carbon (#0d0d0d) for all primary text content to ensure maximum legibility against light backgrounds.
- Apply Snow (#ffffff) for primary page and component backgrounds, utilizing Fog (#f9f9f9) for secondary background panels like sidebars.
- Ensure interactive components like buttons and inputs feature generous border radii; use 16px for buttons and 28px for the main input field.
- Maintain a clear visual hierarchy by using OpenAI Sans weight 600 at 18px for main conversational prompts and ui-sans-serif for all other UI text.
- Implement 6px vertical padding paired with 8px horizontal padding for active navigation items to establish distinctive hover/selected states.
- Utilize Pewter (#5d5d5d) for all secondary, descriptive, or placeholder text, providing subtle content without drawing primary attention.

### Don'ts

- Avoid introducing any colors other than the defined neutrals and Link Blue (#007aff), to preserve the system's austere palette.
- Do not use sharp corners for interactive elements; all buttons and inputs must adhere to the specified radii of 16px or 28px.
- Never use type weights exceeding 600; the system relies on lighter weights for a calm, understated voice.
- Refrain from adding explicit shadows; the system prioritizes background color shifts (e.g., from Snow to Fog) for depth, with only subtle borders or pseudo-shadows for outlines.
- Do not deviate from the established spacing scale of 4px, 6px, 8px, 10px, 12px, 16px, 20px, 60px, 64px, 127px for element and section separation.
- Avoid full-bleed backgrounds for content sections; adhere to the 1150px max-width content container, even for the main interaction area.

### Layout

The page adheres to a two-column, fixed-width layout, centered within a max-width of 1150px. A left sidebar (nav) provides persistent global navigation, while the main content area (main) is dedicated to the AI chat interface. The hero pattern is a centered, conversational prompt ('Where should we begin?') above a single prominent input field. Sections are delineated by clear white space and subtle background color shifts rather than dividers. The overall density is spacious, ensuring focus on the primary interaction. A top-right header contains utility buttons.

### Imagery

The design relies primarily on clean, outlined icons for navigation and functional elements. There are no prominent photographs or illustrations; visual storytelling is achieved through minimalist iconography. Icons are monochromatic, mostly in Carbon or Stone, and serve a purely functional, explanatory role rather than decorative. The density is extremely low, preferring white space and typography to communicate.
