---
version: alpha
name: Lift-off challenge
description: This design evokes a retro-futuristic mission control panel, blending a stark, industrial realism with an urgent, high-stakes atmosphere. The dominance of a light grey canvas punctuated by sharp, dark-grey interfaces creates a sense of mechanical precision. Visual urgency is delivered through vibrant, almost alarm-like red accents, sparingly used on critical elements like "Lift-off" buttons and warning indicators, contrasting with the otherwise monochromatic scene.
colors:
  control-panel-grey: "#e5e7eb"
  display-black: "#11161c"
  obsidian-grey: "#000000"
  digital-white: "#ffffff"
  graphite: "#bbbbbb"
  steel-grey: "#a3a3a3"
  slate-blue: "#575c75"
  urgency-red: "#f43325"
  active-blue: "#0078a8"
  gradient-night: "#c9cbe4"
  gradient-combustion: "#f43325"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 0.8
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.013px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: 0.014px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.16
    letterSpacing: -0.071px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.071px
  display:
    fontFamily: "system-ui"
    fontSize: 106px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  cardRadius: 127.397px
  buttonRadius: 270.89px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-action-button:
    role: Main call-to-action
  ghost-button:
    role: Secondary or tertiary actions
  dark-interface-card:
    role: Content presentation within a dark display area
  pill-card:
    role: Small, contained information units or selectors
  input-field:
    role: Data entry
  lift-off-button:
    role: Critical, visually dominant interaction
  status-indicator:
    role: Visual feedback for states (waiting, warning)
  doto-number-display:
    role: Large, eye-catching numerical readouts
---

## Overview

**North Star:** Aircraft control panel — high-contrast modular interfaces on a rigid, light-grey chassis with urgent red signals.

This design evokes a retro-futuristic mission control panel, blending a stark, industrial realism with an urgent, high-stakes atmosphere. The dominance of a light grey canvas punctuated by sharp, dark-grey interfaces creates a sense of mechanical precision. Visual urgency is delivered through vibrant, almost alarm-like red accents, sparingly used on critical elements like "Lift-off" buttons and warning indicators, contrasting with the otherwise monochromatic scene.

### Do's

- Use Control Panel Grey #e5e7eb as the primary canvas for all page backgrounds and top-level panels.
- Apply Urgency Red #f43325 exclusively for critical action buttons and warning states, ensuring strong visual signaling.
- Implement Display Black #11161c for all interactive data displays and information cards to maintain the control panel aesthetic.
- For large numerical data, use the Doto font at 106px font size with Digital White #ffffff color against a Display Black #11161c background.
- Utilize border-radius 270.89px for primary buttons and 9999px for small, contained elements like pill buttons or tags, while using 127.397px for cards.
- Maintain high contrast text: Obsidian Grey #000000 on Control Panel Grey #e5e7eb, and Digital White #ffffff on Display Black #11161c.
- Use SF Mono for any small, technical or data-driven text elements to reinforce the retro-futuristic theme.

### Don'ts

- Do not use gradients or colored backgrounds on general text or informational sections, as they are reserved for prominent elements like the Lift-off button.
- Avoid applying Urgency Red #f43325 for decorative purposes or non-critical text; its impact must be preserved for alerts and main calls to action.
- Do not use generic square radius for buttons; leverage the defined 270.89px or 9999px for consistent button styling.
- Refrain from using heavily saturated colors beyond Urgency Red #f43325 or Active Blue #0078a8; the color palette is intentionally restrained.
- Do not introduce drop shadows on every element; elevation is minimal, reserving white shadows for subtle card lifts and dark shadow for deeper interaction states.
- Avoid excessive spacing between elements; maintain a compact information density typical of control interfaces, using 8px as the primary element gap.
- Do not deviate from the specified font families; their distinct characteristics are crucial for maintaining the thematic integrity.

### Layout

The page model is a full-bleed, multi-panel interface, resembling a grid of modular embedded screens rather than a traditional web page. The hero section is not distinct but rather the 'Lift-off' panel, a circular, urgent red button embedded within one of the lighter sections. Section rhythm is driven by the clear borders and distinct backgrounds of each 'panel' or module, arranged in an asymmetric, dense composition. There isn't a strict grid for content arrangement but rather a collection of rectangular and circular modules nested within the larger light-grey 'chassis'. Navigation is minimal, implied through in-panel links and small interactive elements, with no visible global navigation bar.

### Imagery

The visual language is characterized by a complete absence of photography or illustration in the traditional sense. Instead, the design relies heavily on technical UI elements: pixelated fonts for impactful numbers, grid lines on maps, simple geometric icons, and monochrome charts. Any 'imagery' serves a functional, data-driven purpose, mimicking readouts from a mission control system or engineering schematics. Icons are simple, outlined, and monochromatic, integrated seamlessly into the panel aesthetic. The density is high, with imagery and technical graphics embedded within text-dominant sections, purely for informative or functional visual flair rather than aesthetic decoration.
