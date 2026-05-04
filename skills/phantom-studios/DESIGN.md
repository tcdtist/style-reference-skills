---
version: alpha
name: Phantom Studios
description: Phantom Studios presents a stark, high-contrast dark theme optimized for technical and creative content. The visual system relies on pure black canvases and crisp white typography, punctuated sparingly by a single vibrant green for active states and highlights. This creates a focused, almost clinical atmosphere where content takes absolute precedence, with subtle geometric shapes and a mono-spaced accent font hinting at precision and digital craft. Surfaces are flat and unlayered, with UI elements defined by minimal borders rather than shadows.
colors:
  midnight-ink: "#000000"
  ghost-white: "#ffffff"
  slate-border: "#333333"
  muted-gray: "#666666"
  neon-green: "#1eff66"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.2
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  outline-text-link:
    role: Interactive text link
  monospace-data-label:
    role: Small descriptive label
  primary-section-heading:
    role: Main content division title
  subtle-content-divider:
    role: Visual separator for content areas
---

## Overview

**North Star:** Black canvas, vivid pixel shimmer

Phantom Studios presents a stark, high-contrast dark theme optimized for technical and creative content. The visual system relies on pure black canvases and crisp white typography, punctuated sparingly by a single vibrant green for active states and highlights. This creates a focused, almost clinical atmosphere where content takes absolute precedence, with subtle geometric shapes and a mono-spaced accent font hinting at precision and digital craft. Surfaces are flat and unlayered, with UI elements defined by minimal borders rather than shadows.

### Do's

- Always use Midnight Ink (#000000) for primary backgrounds to maintain the dark, immersive aesthetic.
- Prioritize Ghost White (#ffffff) for all main textual content and actively interactive elements against dark backgrounds for clarity.
- Employ Neon Green (#1eff66) exclusively for accenting active states, selected items, and functional highlights, ensuring it remains a distinct visual cue.
- Utilize Helvetica Now for all primary typography, varying weights (400, 500, 700) to establish hierarchy.
- Apply 14px border-radius to container-like elements such as cards or bodies, softening the geometric starkness.
- Maintain comfortable vertical rhythm with 48px section gaps and 16px element gaps as default.
- Use ballinger-mono at 11px for small, precise labels or technical indicators, contrasting with the main typeface.

### Don'ts

- Avoid using any colors other than Neon Green (#1eff66) for primary accents or interactive states.
- Do not introduce shadows or significant elevation; maintain a flat UI aesthetic, using borders for separation instead.
- Refrain from using gradients on backgrounds or interactive elements; the visual system is purposefully flat and monochromatic.
- Do not deviate from the specified typography families; no other fonts should be introduced.
- Avoid excessive imagery; the design is text and UI-dominant, with a focus on clear, functional presentation.
- Do not vary paragraph line heights; use 1.20 for Helvetica Now body text and 1.10 for ballinger-mono.
- Do not use generic button styles; active elements should rely on Ghost White text with subtle Slate Border outlining where appropriate, or Neon Green for overt action.

### Layout

The page maintains a full-bleed dark background, setting a consistent immersive tone. Content is centered and structured with comfortable vertical spacing, allowing elements to breathe without feeling sparse. There are no clear indications of a fixed width container for global content. Sections are defined by typographic hierarchy and subtle borders, rather than distinct visual bands or complex grid structures. The rhythm is consistent and spacious, facilitating focused reading and interaction.

### Imagery

Minimal to none; the site is primarily text-dominant with UI elements. If imagery is present, it's implied to be high-contrast, technical, or monochromatic to match the system's aesthetic, likely product shots or abstract representations within a contained frame. Icons (if present) would be minimal outlined or filled simple forms, mono-color.
