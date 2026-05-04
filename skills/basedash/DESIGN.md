---
version: alpha
name: Basedash
description: Basedash employs a 'dark studio canvas' aesthetic, designed to showcase product functionality with stark clarity against a deep, almost black background. White typography and a single vibrant purple accent provide functional highlights and interactive cues, giving the interface a precise, analytical feel. Components are minimalist, often defined by subtle borders or ghost styles, suggesting a lightweight and highly performant system. The overall impression is one of focused utility, where UI elements serve to illuminate data rather than compete with it.
colors:
  obsidian-canvas: "#000000"
  eclipse-surface: "#050607"
  ghost-white: "#ffffff"
  ash-gray: "#b3b3b3"
  steel-gray: "#808080"
  carbon-detail: "#333333"
  illumination-white: "#e8eaee"
  vivid-violet: "#9984d8"
  gradient-violet: "#6b5aa8"
  alert-green: "#3fcb7f"
  radial-violet-glow: "#a366ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.54px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.33
    letterSpacing: -0.9px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.2
    letterSpacing: -1.02px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 12px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Call to action button for starting free trials or sign-ups.
  ghost-accent-button:
    role: Secondary call to action button, or action that needs subtle visual emphasis.
  navigation-link-button:
    role: Links within the main navigation bar.
  small-dark-button:
    role: Compact utility buttons, often for logging in or secondary actions in header.
  content-card:
    role: Containers for content blocks like testimonials or feature descriptions.
  live-status-badge:
    role: Used to denote 'Live' status or positive indicators.
---

## Overview

**North Star:** Midnight data studio.

Basedash employs a 'dark studio canvas' aesthetic, designed to showcase product functionality with stark clarity against a deep, almost black background. White typography and a single vibrant purple accent provide functional highlights and interactive cues, giving the interface a precise, analytical feel. Components are minimalist, often defined by subtle borders or ghost styles, suggesting a lightweight and highly performant system. The overall impression is one of focused utility, where UI elements serve to illuminate data rather than compete with it.

### Do's

- Use Obsidian Canvas (#000000) as the dominant background color for seamless dark mode cohesion.
- Apply Ghost White (#ffffff) for primary text and calls to action against dark backgrounds to ensure high contrast.
- Employ Vivid Violet (#9984d8) as a border accent for interactive elements or visual framing, not as a primary fill color for buttons.
- Utilize Inter font for all functional text: body, buttons, navigation, and smaller headings at its specified letter spacing -0.0300em.
- Maintain a clear visual hierarchy by limiting Alpha Lyrae to prominent headlines at 48px, with its unique font feature settings "ss01" and "ss02".
- Define card surfaces with Eclipse Surface (#050607) and a 14px border-radius, reserving elevation for occasional, subtle glows.
- Apply 6px border-radius for buttons and input fields, and 16px for cards to maintain consistent shape language.
- Use Alert Green (#3fcb7f) specifically for positive semantic indicators like 'Live' status or success messages.

### Don'ts

- Avoid using bright, saturated colors for large background areas; stick to the neutral palette for canvas and surfaces.
- Do not introduce strong visual shadows on elements; elevation is primarily achieved through subtle background glows or no shadow at all.
- Do not use Iowan Old Style for general UI text; reserve it for specific, larger body sections or quotes requiring a refined feel.
- Refrain from drastically altering letter-spacing for Inter font; maintain -0.0300em for consistent text density.
- Do not deviate from the established padding values for buttons (8px vertical, 20px horizontal for larger, 8px vertical, 12px horizontal for small) to preserve component weight.
- Avoid adding new radii values; adhere to 6px, 14px/16px, and 999px for consistency across components.
- Do not use Vivid Violet (#9984d8) as a background for primary calls to action, as it functions as an accent border or decorative element.

### Layout

The page structure favors a full-bleed layout, particularly in the hero section, but maintains content within discernable, perhaps implied, max-width constraints in other areas. The hero features a centered headline over a dark, subtly animated product visual. Section rhythm is primarily consistent vertical spacing on a dark canvas, utilizing the Obsidian Canvas as a continuous background rather than alternating light/dark bands. Content is arranged in flexible patterns, including centered stacks for key messages and multi-column grids for integrations. Navigation is a sticky top bar, minimalist and unobtrusive.

### Imagery

Imagery on Basedash is primarily functional product screenshots and data visualizations, presented directly with minimal framing. These are often enveloped by subtle atmospheric gradients or glows (like the Radial Violet Glow) that hint at functionality without being distracting. The icons are mostly monochromatic (white), with some being multi-colored, and serve to represent data sources or integrations in a compact, recognizable format. There’s a balance between text dominance and visual explanation, where images clarity illustrates product features.
