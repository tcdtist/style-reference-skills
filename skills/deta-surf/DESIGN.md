---
version: alpha
name: Deta Surf
description: Deta Surf uses a refreshing, sky-inspired aesthetic, where a vivid blue gradient forms the primary background, evoking expanse and clarity. UI elements are typically white, rounded cards, often with subtle shadows that provide a soft lift from the blue canvas. Typography blends elegant, traditional serifs for headlines with clean, modern sans-serifs for body text, creating a contrast that feels both authoritative and accessible. Interactive elements feature a bright, vivid blue, acting as functional punctuation against the otherwise serene palette.
colors:
  sky-canvas: "#a8d5ff"
  cloud-white: "#ffffff"
  fog-gray: "#f3f4f6"
  deep-space-blue: "#009afc"
  ocean-shadow: "#006dc8"
  graphite-text: "#000000"
  slate-text: "#5b6882"
  light-steel-border: "#e5e7eb"
  faint-blue-border: "#cfe9fd"
  ash-gray: "#808080"
  deta-pink-glow: "#ed008d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.108px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.126px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.144px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.11
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -0.6px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Main call-to-action
  ghost-open-source-button:
    role: Secondary action or status indicator
  search-notebook-input:
    role: Interactive input field
  standard-card:
    role: Content container
  muted-card-background:
    role: Secondary content container
  header-navigation-link:
    role: Global navigation item
  text-link-in-body:
    role: Interactive text element
---

## Overview

**North Star:** Sky-bound clarity

Deta Surf uses a refreshing, sky-inspired aesthetic, where a vivid blue gradient forms the primary background, evoking expanse and clarity. UI elements are typically white, rounded cards, often with subtle shadows that provide a soft lift from the blue canvas. Typography blends elegant, traditional serifs for headlines with clean, modern sans-serifs for body text, creating a contrast that feels both authoritative and accessible. Interactive elements feature a bright, vivid blue, acting as functional punctuation against the otherwise serene palette.

### Do's

- Use Sky Canvas (#a8d5ff) with its default linear gradient for primary backgrounds to establish an expansive feel.
- Employ Cloud White (#ffffff) for all interactive cards and input surfaces to create bright, readable content blocks.
- Apply a 9999px border-radius to all buttons for a friendly, pill-shaped aesthetic.
- Set primary action buttons with Deep Space Blue (#009afc) background and Cloud White (#ffffff) text to guide user interaction.
- Maintain a clear visual hierarchy by using Gambarino for headlines (sizes 20px-60px) and Switzer for body text (sizes 12px-18px).
- Use a subtle shadow rgba(0, 0, 0, 0.05) 0px 1px 2px 0px for cards to provide minimal depth without visual heaviness.
- Leverage Faint Blue Border (#cfe9fd) for ghost button borders or secondary outlines to soften interactive elements.

### Don'ts

- Avoid sharp corners; all UI elements should have a radius of at least 8px, with interactive elements preferring 16.2px or 9999px.
- Do not introduce strong, dark backgrounds other than the hero gradient; maintain a predominantly light aesthetic for content sections.
- Refrain from using generic gray shadows for interactive elements; instead, use Ocean Shadow (#006dc8) for blue-tinted elevation.
- Do not apply excessive letter-spacing to body text; maintain the subtle negative tracking specified in Switzer and Gambarino for dense readability.
- Avoid using multiple vivid accent colors; Deep Space Blue (#009afc) should be the primary chromatic accent for user interaction.
- Do not deviate from the specified font families; Switzer and Gambarino are key to the brand's typographic identity.
- Do not use transparent backgrounds for text-heavy content cards; always provide a solid Cloud White or Fog Gray background for readability.

### Layout

The page uses a full-bleed layout for the hero section, featuring a prominent blue gradient background and centered, large typography. Subsequent sections appear to use a max-width content container, centered on the page. Content arrangement often alternates between text-dominant blocks and visual elements, creating a balanced rhythm. A visual grid is subtly suggested by the placement of multiple floating card-like elements in the hero. Vertical spacing is comfortable, with clear separation between sections. The navigation is a minimal top bar with brand logo and utilitarian links (Students, GitHub).

### Imagery

Imagery primarily consists of conceptual 3D renders (e.g., notebook, floating elements) and stylized, high-key photography of hands interacting with small, digital-like objects. The renders are often slightly tilted or floating to convey lightness and innovation. Photos are clean and bright, frequently using water or reflective surfaces, featuring product elements rather than lifestyle scenes. Icons are simple, outlined or filled, with a consistent stroke weight and occasionally feature the Deta Pink Glow accent. Visuals are used decoratively to enhance the 'elevate your thinking' metaphor.
