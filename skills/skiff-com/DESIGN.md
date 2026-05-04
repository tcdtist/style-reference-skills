---
version: alpha
name: skiff.com
description: Skiff adopts a crisp, functional aesthetic with a dominant light theme and a single vibrant orange as its brand accent. The design leans into distinct typographic contrasts using a custom sans-serif display font for impactful headlines and system fonts for readability in body text. UI elements are sharp and precise, avoiding heavy shadows or elaborate gradients, focusing instead on clear boundaries and ample negative space. The overall impression is one of modern utility with a hint of warm, energetic personality.
colors:
  pitch-black: "#000000"
  deep-gray: "#303030"
  medium-gray: "#505050"
  muted-text: "#8f8f8f"
  divider-gray: "#d6d6d6"
  border-light: "#dfdfdf"
  canvas-white: "#ffffff"
  brand-orange: "#ef5a3c"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.35
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.95
    letterSpacing: -0.64px
spacing:
  elementGap: 8px
  sectionGap: 48px
components:
  navigation-menu-item:
    role: Interactive menu item for top navigation or secondary links.
  top-navigation-dropdown:
    role: Contextual menu for product or resource groups.
  accent-headline:
    role: Primary headings with brand emphasis.
  body-text-block:
    role: Standard paragraph content and descriptive rich text.
  informational-section-card:
    role: Container for showcasing key information or logos.
  pill-tag:
    role: Small, semantic labels or interactive filters.
---

## Overview

**North Star:** Crisp digital canvas with energetic orange

Skiff adopts a crisp, functional aesthetic with a dominant light theme and a single vibrant orange as its brand accent. The design leans into distinct typographic contrasts using a custom sans-serif display font for impactful headlines and system fonts for readability in body text. UI elements are sharp and precise, avoiding heavy shadows or elaborate gradients, focusing instead on clear boundaries and ample negative space. The overall impression is one of modern utility with a hint of warm, energetic personality.

### Do's

- Prioritize Canvas White (#ffffff) for page backgrounds and primary content surfaces.
- Use Pitch Black (#000000) for all primary text and critical UI elements to ensure high contrast.
- Apply Brand Orange (#ef5a3c) sparingly as a functional accent for active states, key data points, and brand communication.
- Ensure all interactive elements have a visible Border Light (#dfdfdf) border or a subtle dark overlay (rgba(0,0,0,.08)) for definition.
- Employ Skiff Sans Display at 64px, weight 380, with a negative letter-spacing of -0.0100em for all main page headlines.
- Maintain a comfortable density with an 8px elementGap and 48px sectionGap for clear content separation.
- Use 4px border-radius for subtle component rounding, 12px or 16px for cards, and 36px for distinct pill shapes.

### Don'ts

- Avoid using multiple chromatic colors; limit the accent palette strictly to variations of Brand Orange.
- Do not introduce heavy shadows or complex gradients unless explicitly defined in component specifications.
- Do not use typography weights heavier than 400; the system relies on lighter weights for a modern, understated aesthetic.
- Do not deviate from the established spacing scale (multiples of 4px) to retain consistent rhythm and density.
- Do not use highly saturated photography; imagery should be clean, focused, or abstract to complement the UI.
- Do not use any blue as an accent or primary color, as it would conflict with the brand's orange identity.
- Do not use default browser link styling; all links should use Pitch Black text and Brand Orange on hover or active.

### Layout

The page structure is primarily content-contained with no explicit `pageMaxWidth` suggesting a flexible, fluid-width approach, although content appears centered. The hero section features a prominent, often accented, headline. Sections are defined by consistent vertical spacing with ample padding, creating a comfortable density. Element layout is typically centered within content blocks or laid out side-by-side. Layout is generally linear and stacked, without complex grid systems or overlapping elements.

### Imagery

This design system primarily relies on icons and simple graphic elements. Where imagery is present for brand logos, it is simple, monochromatic (black on white), and contained within defined spaces. There is no large-scale photography or complex illustrations. Iconography is filled, in Pitch Black. The overall density of imagery is low, with text dominating the content areas.
