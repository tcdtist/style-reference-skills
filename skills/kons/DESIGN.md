---
version: alpha
name: Kons
description: Kons presents a minimalist interface, characterized by a stark white background and primarily achromatic text. The design is a study in restraint, relying on subtle gray tones for body copy and reserving vibrant, highly saturated colors exclusively for interactive button states, creating a focused, high-contrast interaction model. This approach elevates functionality, where color guides the user rather than decorating the interface, resulting in a direct, utilitarian aesthetic.
colors:
  canvas-white: "#ffffff"
  text-gray: "#757575"
  accent-green: "#00b849"
  accent-orange: "#f57200"
  action-blue: "#008bf5"
spacing:
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 64px
components:
  button-group-pill-variants:
    role: 
  toggle-add-action-control:
    role: 
  stat-metric-card-block:
    role: 
  ghost-button-pill:
    role: Primary interactive element for navigation and secondary actions.
  accent-green-button:
    role: Call-to-action button, indicating successful or primary actions.
  accent-orange-button:
    role: Secondary call-to-action button, for important but not primary actions.
  link:
    role: Inline text navigation.
---

## Overview

**North Star:** White paper blueprint – precise, high-contrast, functional.

Kons presents a minimalist interface, characterized by a stark white background and primarily achromatic text. The design is a study in restraint, relying on subtle gray tones for body copy and reserving vibrant, highly saturated colors exclusively for interactive button states, creating a focused, high-contrast interaction model. This approach elevates functionality, where color guides the user rather than decorating the interface, resulting in a direct, utilitarian aesthetic.

### Do's

- Prioritize 'Canvas White' (#ffffff) for all main backgrounds to maintain visual brevity.
- Use 'Text Gray' (#757575) exclusively for body copy and descriptive text.
- Apply 9999px border-radius to all interactive buttons for a consistent pill-shaped aesthetic.
- Reserve 'Accent Green' (#00b849), 'Accent Orange' (#f57200), and 'Action Blue' (#008bf5) for button backgrounds only, to highlight interactive elements.
- Maintain minimal padding (4-8px) around interactive elements to keep dense information layout.
- Use Inter at weight 400 for all primary text elements, and restrict letter-spacing adjustments to `-0.02em` or `-0.01em` at smaller sizes.

### Don'ts

- Do not use color for decorative purposes; every color must serve a functional role.
- Avoid shadows or complex gradients; the design relies on flat colors and clean lines for depth.
- Do not introduce additional font families beyond Inter and Karla.
- Do not use a border-radius other than 9999px for primary buttons or 4px for links, unless explicitly defined for a specific component.
- Avoid excessive spacing between elements; maintain a compact information density.
- Do not use highly saturated colors for text or non-interactive elements.

### Layout

The layout is characterized by a central, information-dense block against a full-bleed 'Canvas White' background. There is no discernible `pageMaxWidth` value, suggesting a potentially fluid or center-aligned content area that adapts to viewport width. The hero section, if present, is a simple, typography-focused statement. Section rhythm is implied by vertical spacing, not by alternating background colors or distinct dividers. Content appears to be stacked vertically, with elements like buttons and links grouping together. Navigation, as seen in the isolated button variant, consists of distinct, pill-shaped elements.

### Imagery

This design system primarily relies on UI elements and typography to convey information. There is no visible use of photography, complex illustrations, or 3D renders. Icons, if present (as suggested by the button content), are minimal and monochromatic, acting as functional indicators rather than decorative elements. The visual language is purely UI-driven, focusing on text and interactive components.
