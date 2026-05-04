---
version: alpha
name: Dylanbrouwer
description: The Dylanbrouwer design system projects a bold, industrial aesthetic through a highly constrained greyscale palette, sharp edges, and oversized, tightly tracked typography. A single vibrant orange hue serves as a sharp, functional accent. Component surfaces are mostly transparent or subtle, emphasizing a layered, almost architectural feel rather than solid blocks. Interactions are minimal and precise, with an underlying sense of restrained power.
colors:
  ink-slate: "#3c3a3e"
  ghost-gray: "#a2a2a2"
  canvas-white: "#ffffff"
  platinum-mist: "#c9c7cc"
  silver-dust: "#f1f1f1"
  cool-stone: "#7b7a7c"
  deep-space: "#161616"
  sunrise-orange: "#ff4c24"
  action-orange: "#ff6436"
  grey-scale-gradient: "#000000"
  dark-overlay-gradient: "#040305"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.3
    letterSpacing: -0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.28px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.1
    letterSpacing: -0.21px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1
    letterSpacing: -1.08px
  display:
    fontFamily: "system-ui"
    fontSize: 288px
    lineHeight: 0.74
    letterSpacing: -5.76px
spacing:
  elementGap: 6px
  sectionGap: 24px
components:
  ghost-button:
    role: Text-based navigation or secondary actions
  card-transparent:
    role: Informational grouping, background for labels
  card-white-subtle:
    role: Content container with slight prominence
  badge-transparent:
    role: Categorization or decorative text labels
  badge-vivid-accent:
    role: Small, high-visibility status indicators
  badge-dark-subtle:
    role: Muted labels against dark backgrounds
  badge-solid-dark:
    role: Prominent tags or status on very light backgrounds
---

## Overview

**North Star:** Brutalism meets engineered minimalism.

The Dylanbrouwer design system projects a bold, industrial aesthetic through a highly constrained greyscale palette, sharp edges, and oversized, tightly tracked typography. A single vibrant orange hue serves as a sharp, functional accent. Component surfaces are mostly transparent or subtle, emphasizing a layered, almost architectural feel rather than solid blocks. Interactions are minimal and precise, with an underlying sense of restrained power.

### Do's

- Use 'Die Grotesk B' 500 for all primary headings, adjusting letter spacing specific to each size to maintain visual tension.
- Apply 'ABC Gravity Variable' for large display typography, ensuring tight letterSpacing to maximize impact and solidity.
- Maintain a monochromatic base with 'Ink Slate' #3c3a3, 'Ghost Gray' #a2a2a2, and 'Canvas White' #ffffff for 95% of UI elements and backgrounds.
- Introduce 'Sunrise Orange' #ff4c24 or 'Action Orange' #ff6436 only as a distinct, vivid accent for functional cues or compelling highlights.
- Utilize a 14.4px border radius for all corner rounding, contributing to the distinct, subtle softness in an otherwise sharp design.
- Prioritize transparent or semi-transparent backgrounds for cards and overlays, using `rgba(255, 255, 255, 0.5)` for a frosted effect or full transparency.
- Implement the base unit of 6px for all spacing, with element gaps at 6px and card padding at 12px, to reinforce the compact density.

### Don'ts

- Avoid introducing additional saturated colors beyond the established orange accents, as it dilutes the brand's sharp monochromatic identity.
- Do not use heavy shadows or significant elevation, as the system prefers transparent layering and subtle background shifts over pronounced depth.
- Refrain from altering the prescribed letter-spacing values for 'Die Grotesk B' and 'ABC Gravity Variable'; these are critical to the typographic personality.
- Do not break the compact density by introducing large, inconsistent spacing between elements or sections.
- Avoid decorative imagery that isn't either tightly cropped product shots or abstract, monochromatic visuals, to maintain focus on the UI.
- Do not use generic system fonts without explicit reasoning; prioritize 'Die Grotesk B' and 'IBM Plex Mono' for their specific roles.
- Resist using heavily decorated or outlined buttons; the system favors ghost buttons or solid, color-neutral badges.

### Layout

The page primarily uses a full-bleed structure for its dramatic hero section, transitioning into a contained max-width layout for subsequent content. The hero features monumental, centered typography over a dark-to-light gradient background, with key interactive elements positioned strategically. Sections below often alternate between 'Canvas White' and 'Silver Dust' backgrounds, featuring a strong vertical rhythm. Content arrangement frequently pairs text with visual elements, sometimes in alternating left/right configurations or stacked for impact. Navigation is a minimal, top-aligned bar with ghost links, emphasizing the content's dominance. A 3-column card grid is observed for features, maintaining visual density.

### Imagery

This system primarily uses product-focused imagery, often displayed within mock-up screens or as tightly cropped, editorial-style photography. Visuals are typically contained, not full-bleed, and integrated into the layout rather than used as large decorative blocks. There's a preference for abstract, geometric compositions or monochromatic palettes within images, mirroring the UI's own restraint. Icons are minimal, likely outlined or solid, with a consistent stroke weight to match the precise typography. Imagery functions to showcase specific work or provide functional context, maintaining a high density of information without feeling cluttered.
