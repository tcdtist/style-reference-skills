---
version: alpha
name: Josh Warner
description: Josh Warner's portfolio combines stark dark surfaces with a clean, highly legible typography scale. The design system emphasizes clarity and directness through minimal use of color, relying instead on high contrast, subtle achromatic gradients, and precise spacing. Interactive elements are softly rounded, creating a tactile impression against the otherwise structured aesthetic. Most visual weight is carried by conceptual 3D renders rather than UI adornment.
colors:
  deep-space: "#0f0f0f"
  inky-void: "#000000"
  pure-canvas: "#f0f0f0"
  medium-gray: "#696969"
  light-gray: "#b8b8b8"
  darkened-canvas: "#1a1a1a"
  shadow-base: "#080808"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.4px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.56
    letterSpacing: 0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: 0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.43
    letterSpacing: 0.4px
spacing:
  cardRadius: 4px
  buttonRadius: 100px
  elementGap: 10px
  sectionGap: 64px
components:
  ghost-header-button:
    role: Navigation button, pill-shaped
  hire-me-button:
    role: Primary action button, filled and subtly rounded
  avatar-button:
    role: Profile or identity button
  project-card:
    role: Item display in a grid, image-focused
  interactive-link:
    role: Inline textual link
---

## Overview

**North Star:** Midnight gallery, sculpted light

Josh Warner's portfolio combines stark dark surfaces with a clean, highly legible typography scale. The design system emphasizes clarity and directness through minimal use of color, relying instead on high contrast, subtle achromatic gradients, and precise spacing. Interactive elements are softly rounded, creating a tactile impression against the otherwise structured aesthetic. Most visual weight is carried by conceptual 3D renders rather than UI adornment.

### Do's

- Prioritize high contrast using Pure Canvas (#f0f0f0) for text on Deep Space (#0f0f0f) or Inky Void (#000000) backgrounds.
- Use Inter Display for all major text (headings, body), ensuring 0.04em letter-spacing is applied consistently.
- Apply Deep Space (#0f0f0f) for main backgrounds and Darkened Canvas (#1a1a1a) for secondary backgrounds like footers or distinct sections.
- Utilize large border-radii (100px, 40px) for buttons and interactive elements to create a soft, pill-like appearance.
- Maintain compact spacing, with a default elementGap of 10px between interactive components and text blocks.
- Emphasize content over UI chrome; keep borders minimal and colors purely functional.
- Use the system sans-serif font at 12px for utility text, navigation, and minimal interactive elements.

### Don'ts

- Avoid using saturated colors for UI elements; color is reserved for content aesthetics, not interface.
- Do not introduce complex gradients or inner shadows on UI elements; elevation is sparse and subtle.
- Steer clear of aggressive, heavy typography for headlines; rely on Inter Display's light weight and 0.04em tracking.
- Do not use small border-radii (e.g., 2px) on buttons or primary interactive elements; aim for 8px, 40px, or 100px.
- Introduce excessive padding or wide margins that disrupt the compact information density.
- Do not use dark gray text on a dark background; ensure compliance with the 15:1 contrast ratios provided.
- Avoid any drop shadows on text, and keep container shadows subtle and very low opacity.

### Layout

The page primarily uses a full-bleed dark background with content centered and constrained by an implicit max-width, around 1200px. The hero section is full-bleed with large, conceptual 3D renders and centered, high-contrast headlines. Subsequent sections can alternate between centered content blocks and full-width imagery, often with text-left/image-right or vice-versa patterns for project showcases. Vertical spacing between sections is generous (around 64px), creating distinct visual breaks. Navigation is a sticky top bar with minimal ghost buttons and a prominent brand emblem.

### Imagery

This site features highly stylized 3D renders that serve as key hero elements and section dividers. Images feature sharp details, often with metallic or textured surfaces against dark backgrounds, sometimes with subtle dramatic lighting. The renders are full-bleed for hero sections or artfully integrated into the layout, taking up significant visual space to convey artistic skill. Product mockups are clean and high-fidelity, presented either as isolated objects or within conceptual environments. Iconography is minimal, primarily text-based or simple system icons.
