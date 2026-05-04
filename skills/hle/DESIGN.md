---
version: alpha
name: HLE
description: HLE employs a grayscale retro-digital aesthetic, presenting an interface that feels like a vintage computer terminal. The design is characterized by its high contrast starkness and extremely compact, monochromatic typography with a distinct pixelated mono-space flair. Functional elements appear as subtle text-based interactions or simple toggle switches, maintaining an atmosphere of focused, understated utility rather than modern graphical richness. Surface treatments are minimal, relying on subtle background shifts and hard-edged borders for separation, eschewing shadows or complex gradients.
colors:
  midnight-base: "#101011"
  ghost-canvas: "#ffffff"
  slate-highlight: "#bbbbbb"
  elevated-panel: "#313131"
  subtle-gray: "#8a8a8a"
  medium-gray: "#717172"
  toggle-blue: "#32A4C3"
spacing:
  elementGap: 8px
  sectionGap: 48px
components:
  text-link-ghost-button:
    role: Interactive element for navigation and actions that appears as simple text. It has a subtle 4px internal padding, drawing a thin line around itself on hover or focus using the text color to maintain its ghost-like appearance.
  navigation-toggle-switch:
    role: Binary control for activating or deactivating features, like sound. Styled as a small, pill-shaped switch with a distinct accent color for its active state.
---

## Overview

**North Star:** grayscale retro-digital terminal

HLE employs a grayscale retro-digital aesthetic, presenting an interface that feels like a vintage computer terminal. The design is characterized by its high contrast starkness and extremely compact, monochromatic typography with a distinct pixelated mono-space flair. Functional elements appear as subtle text-based interactions or simple toggle switches, maintaining an atmosphere of focused, understated utility rather than modern graphical richness. Surface treatments are minimal, relying on subtle background shifts and hard-edged borders for separation, eschewing shadows or complex gradients.

### Do's

- Prioritize PPSupplyMonoRegular (or IBM Plex Mono) for all body text, navigation, and button labels to establish the core retro-digital aesthetic, using 15px/1.3 line height.
- Implement Ghost Canvas #ffffff as the primary text color on Midnight Base #101011 backgrounds, reserving Midnight Base #101011 for text on lighter backgrounds.
- Use a 0px border-radius as a default for all UI elements, reinforcing the sharp, hard-edged character of the design.
- All interactive elements should rely on text color changes or thin, same-color borders for interactive states, avoiding filled button backgrounds or significant elevation.
- Employ a 4px padding for minimal interactive elements like navigation items and ghost buttons, maintaining compactness.
- Section spacing should consistently use 48px vertical padding to create clear content blocks without feeling overly dense.
- When a container needs subtle differentiation, use Elevated Panel #313131 as the background color, indicating a layered context without heavy visual weight.

### Don'ts

- Avoid using drop shadows or complex gradients; the system relies on flat colors, stark contrast, and minimal shifts between grayscale tones for visual depth.
- Do not introduce bright, saturated colors unless explicitly tied to an accent or semantic role defined in the color palette (e.g., Toggle Blue, Alert Red).
- Do not use overly large or decorative heading styles that deviate from the compact, utilitarian typography; stick to PPSupplySansRegular with minimal letter spacing.
- Do not create complex layouts with overlapping elements or varied border radii; maintain a clean, organized, and almost grid-like structure.
- Avoid decorative imagery or illustrations; imagery should be minimal and either abstract or product-focused to align with the technical, terminal-like atmosphere.
- Do not use multiple font families beyond PPSupplySansRegular and PPSupplyMonoRegular, as this dilutes the distinctive typographic identity.

### Layout

The page uses a full-bleed layout, with content often centered but without a fixed `pageMaxWidth` value, adapting responsively to the viewport. The hero section features a central, symbolic graphic (the retro monitor) that acts as an anchor for the primary interaction text 'Switch Day 'N' Night'. Sections are delineated by consistent vertical spacing of 48px, creating clear, distinct blocks without overt visual dividers. Content elements, such as the navigation in the top-left, tend to be anchored to screen corners. The layout is sparse and text-dominant, with a clear bottom-aligned footer containing utilitarian information. The overall rhythm is calm and deliberate, guiding the eye vertically.

### Imagery

The site uses minimal imagery, primarily focusing on abstract or product-focused visuals such as the retro CRT monitor. There are no expansive photographs or complex illustrations. Iconography, like the current time display, is simple, mono-color, and uses a thick stroke weight to match the overall aesthetic. Imagery serves an explanatory or atmospheric role, not a decorative one, and is always isolated rather than overlapping, integrated seamlessly into the monochromatic UI.
