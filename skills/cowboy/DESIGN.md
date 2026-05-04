---
version: alpha
name: Cowboy
description: Cowboy presents a functional and understated interface, emphasizing clean typography and a largely monochromatic palette. Visuals are grounded in strong product photography, with UI elements maintaining a soft, rounded aesthetic that feels approachable and human. The design prioritizes clarity and a quiet confidence, allowing product imagery and concise messaging to take center stage.
colors:
  canvas-white: "#ffffff"
  ink-black: "#1d1d1d"
  whisper-gray: "#e5e7eb"
  dim-gray: "#737373"
  ash-cloud: "#f3f4f6"
  stone-gray: "#a3a3a3"
  slate-border: "#6b7280"
  forest-whisper: "#569d5f"
  action-blue: "#2563eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.47
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.3px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.05
    letterSpacing: -0.54px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1
    letterSpacing: -0.84px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 0.95
    letterSpacing: -1.3px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.9
    letterSpacing: -1.8px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.9
    letterSpacing: -2.5px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 60px
components:
  primary-filled-button:
    role: Main call-to-action button, conveying primary interaction.
  secondary-outlined-button:
    role: Secondary calls-to-action, less prominent but still interactive.
  ghost-header-button:
    role: Navigation and utility actions within headers, minimal visual weight.
  feature-card:
    role: Displaying product features or key information blocks.
  alternating-section-card:
    role: Providing visual distinction between content blocks, often for related features.
  product-display-card:
    role: Large, immersive display for product imagery or specific model information.
  input-field:
    role: Standard input for user data entry.
  round-tag-button:
    role: Categorization or small actions, highly rounded.
---

## Overview

**North Star:** Minimalist Product Canvas

Cowboy presents a functional and understated interface, emphasizing clean typography and a largely monochromatic palette. Visuals are grounded in strong product photography, with UI elements maintaining a soft, rounded aesthetic that feels approachable and human. The design prioritizes clarity and a quiet confidence, allowing product imagery and concise messaging to take center stage.

### Do's

- Prioritize SuisseIntl for all text elements, setting it with precise letter-spacing based on size from the typography rules.
- Use Ink Black (#1d1d1d) sparingly for primary headings and call-to-action buttons, creating focal points against lighter backgrounds.
- Apply a border-radius of 8px to all cards and general containers for a consistent soft corner aesthetic.
- Apply a border-radius of 9999px to all buttons and tags to create distinct pill shapes.
- Maintain a clear visual hierarchy by limiting saturated colors to functional states or subtle informational blocks like Forest Whisper (#569d5f) and Action Blue (#2563eb).
- Use Whisper Gray (#e5e7eb) for hairline borders and minimal dividers to separate UI elements without heavy lines.
- Ensure generous vertical spacing between sections, adhering to the 60px section gap for readability and breathability.

### Don'ts

- Avoid introducing additional saturated colors unless explicitly assigned a semantic role; maintain the largely achromatic palette.
- Do not use hard, sharp corners; all significant UI elements like cards and buttons should soften with the established radii of 8px or 9999px.
- Refrain from using strong, opaque box shadows; prefer the subtle elevation provided by the detected shadows for interactive elements if needed, or no shadow at all.
- Do not vary line heights or letter-spacing outside the defined SuisseIntl and ui-monospace typography rules.
- Avoid complex gradients; adhere to solid color fills for backgrounds and surfaces.
- Do not rely on color alone to convey crucial information; always pair color with text or iconography.
- Steer clear of dense, cluttered layouts; prioritize ample white space, especially around body copy and calls to action.

### Layout

The page primarily utilizes a full-bleed layout for hero sections, often featuring large product photography or conceptual imagery. Subsequent content sections frequently adopt a max-width contained pattern, with a strong vertical rhythm. Content often alternates between centered stacks of text and visuals, or two-column layouts where text and product imagery are presented side-by-side. Card grids are used for features or selections. The navigation is a persistent top bar, shifting between transparent on dark heroes and solid on lighter sections. Vertical spacing is comfortable, supporting a clean and uncrowded presentation.

### Imagery

The visual language predominantly features high-quality product photography of the e-bikes. These are often tightly cropped on pure white or cream backgrounds to highlight product details, or shown in dynamic lifestyle shots with blurred urban environments. Imagery is frequently full-bleed in hero sections or large content blocks, allowing the product to dominate. Icons are minimal, featuring a clean, outlined style in a single color, primarily for functional annotation rather than decoration. The overall impression is product-focused and sleek, with imagery playing a key role in conveying brand identity and product aspiration.
