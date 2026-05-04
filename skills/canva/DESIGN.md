---
version: alpha
name: Canva
description: Canva's design language evokes a vibrant, creative toolkit, powered by a dynamic and playful color spectrum. The foundation is a cool, dark canvas illuminated by a kaleidoscope of vivid gradients and accent colors, signaling a platform built for imagination. A consistent softness is achieved through prevalent 8px and 9999px border radii, contrasting with the sharpness of sans-serif typography. This creates an accessible but powerful experience, where creativity feels both boundless and precisely guided.
colors:
  midnight-ink: "#0f1015"
  canvas-white: "#ffffff"
  deepest-shadow: "#000000"
  ash-grey: "#575a5f"
  silver-mist: "#d7d9de"
  rich-plum: "#8b3dff"
  electric-lavender: "#a370fc"
  fuchsia-burst: "#e950f7"
  scarlet-glow: "#ff3d4d"
  tangerine-pop: "#ff6105"
  vivid-violet: "#9729ff"
  turquoise-dream-gradient: "#00C4CC"
  sunset-fire-gradient: "#FF3B4C"
  digital-spectrum-gradient: "#992BFF"
  ocean-twilight-gradient: "#00C4CC"
  magenta-bloom-gradient: "#BD19FF"
  emerald-growth-gradient: "#007D26"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: -0.28px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.32px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -0.56px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -0.64px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.1
    letterSpacing: -0.8px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 4px
  sectionGap: 44px
components:
  primary-ghost-button:
    role: Main call to action on vibrant backgrounds
  primary-filled-button:
    role: Default interactive button
  pill-button:
    role: Category filters, tags, or secondary actions
  navigation-link:
    role: Top-level navigation items
  feature-card-dark:
    role: Content container for features or product sections on dark backgrounds
  gradient-section-card:
    role: Highlighting distinct product features with a strong visual identity
  header-navigation:
    role: Global site navigation
  hero-cta-button:
    role: Prominent call to action in hero sections.
---

## Overview

**North Star:** Vibrant digital toolkit — a painter's palette on a dark canvas, each tool glowing with possibility.

Canva's design language evokes a vibrant, creative toolkit, powered by a dynamic and playful color spectrum. The foundation is a cool, dark canvas illuminated by a kaleidoscope of vivid gradients and accent colors, signaling a platform built for imagination. A consistent softness is achieved through prevalent 8px and 9999px border radii, contrasting with the sharpness of sans-serif typography. This creates an accessible but powerful experience, where creativity feels both boundless and precisely guided.

### Do's

- Prioritize 'Canva Sans' across all typographic elements, leveraging its 400, 500, and 600 weights.
- Use 8px border radius for all card and button components to ensure a consistent friendly softness, with 9999px reserved for pill shapes.
- Implement 'Midnight Ink' (#0f1015) as the primary background for dark themed content blocks to maximize vibrancy of super-imposed elements.
- Pair 'Deepest Shadow' (#000000) for text on 'Canvas White' (#ffffff) for maximum readability and AAA contrast.
- Utilize the brand gradients (e.g., Turquoise Dream Gradient, Sunset Fire Gradient) for main hero sections and feature highlights.
- Apply 'Rich Plum' (#8b3dff) as the primary accent for interactive elements and links.

### Don'ts

- Avoid using Times or Arial for primary brand content; reserve them for legacy or specific minor contexts as detected.
- Do not introduce new border radii beyond 8px and 9999px.
- Do not overuse 'Deepest Shadow' for backgrounds; it is primarily intended for text and sharp UI elements.
- Avoid using a flat color for hero sections; leverage a brand gradient to convey dynamism.
- Do not introduce new color hues; work within the established vivid brand and accent palettes.
- Do not apply shadows without purpose; use the defined shadows for subtle elevation or interactive states only.

### Layout

The page primarily uses a max-width contained layout pattern but features full-bleed hero sections for dramatic effect. The overall rhythm combines expansive, gradient-filled introductory areas with alternating light and dark bands for content sections, providing visual segmentation and interest. Content is frequently arranged in two or three-column grids for features and templates, often with text-left/image-right or image-top/text-bottom compositions within cards. Spaces between sections are comfortable (sectionGap of roughly 44px). The header is a sticky top bar, providing global navigation and calls to action.

### Imagery

The visual language is a blend of conceptual, playful product illustrations and tightly cropped, brand-aligned photography or 3D renders. Illustrations are colorful, dimensional, and often feature floating UI elements or abstract shapes, designed to convey dynamism and creativity. Photography, when used, tends to be product-focused or lifestyle, but always integrated with graphic overlays or bold color treatments. Icons are filled, colorful, and often use the accent and brand gradients, reinforcing the vibrant palette. Imagery serves both decorative atmosphere and explanatory content, often layered to demonstrate product capabilities in a vibrant, engaging way. Density is moderate, balancing textual information with impactful visual storytelling.
