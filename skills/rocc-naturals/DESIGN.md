---
version: alpha
name: Rocc Naturals
description: Rocc Naturals presents a minimal, product-focused aesthetic, blending soft neutrals with a signature muted green. Textures are subtle, with a visual grid framework providing structure against clean surfaces. The design feels grounded and approachable, relying on direct communication and sparse visual elements rather than elaborate decoration.
colors:
  canvas-white: "#ffffff"
  dusty-sage: "#526e3e"
  graphite-text: "#636363"
  muted-text: "#6e6e6e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.33
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
spacing:
  buttonRadius: 8px
  elementGap: 18px
  sectionGap: 80px
components:
  ghost-button:
    role: Secondary action. Low visual priority.
  solid-button:
    role: Primary action. High visual priority.
  text-input:
    role: User input fields.
---

## Overview

**North Star:** grid on soft sage

Rocc Naturals presents a minimal, product-focused aesthetic, blending soft neutrals with a signature muted green. Textures are subtle, with a visual grid framework providing structure against clean surfaces. The design feels grounded and approachable, relying on direct communication and sparse visual elements rather than elaborate decoration.

### Do's

- Use `Canvas White` (#ffffff) for all main page backgrounds and component surfaces unless a `Dusty Sage` filled button.
- Prioritize `Dusty Sage` (#526e3e) for primary calls to action, ensuring it is the main brand accent.
- Apply the Suisse font family for all text elements, utilizing appropriate weights (300, 500) and sizes (13px, 15px, 16px) for hierarchy.
- Maintain a comfortable rhythm between sections using an `80px` section gap.
- Ensure all buttons have an `8px` border radius, creating a consistent soft corner styling.
- Employ `1px` border radius for inputs to maintain a subtle, almost-sharp form that contrasts with the buttons.
- Use `Graphite Text` (#636363) for primary body copy across the site to ensure readability against light backgrounds.

### Don'ts

- Do not introduce new saturated colors; adhere strictly to the established `Dusty Sage` for brand accents.
- Avoid heavy shadows or gradients; the design thrives on flat surfaces and subtle distinctions.
- Do not deviate from the specified spacing values of `10px` for button padding and `15px` for input padding.
- Do not use letter spacing greater than 0.0120em or less than 0.0100em; these values are precisely set.
- Do not use black for text; `Graphite Text` (#636363) and `Muted Text` (#6e6e6e) are the darkest sanctioned text colors.
- Avoid complex component borders; stick to the `1px solid` border pattern where needed, especially in inputs.

### Layout

The page uses a contained, centered layout, with content primarily arranged in vertical stacks. The hero section features a centered headline over a distinctive grid background, drawing attention to a central product display. Vertical rhythm is established through consistent section gaps, creating deliberate breathing room. There are no obvious alternating light/dark bands, rather a consistent light background. The overall arrangement emphasizes clarity and directness through a simple, organized presentation.

### Imagery

Imagery is minimal and primarily conceptual, featuring 3D rendered product packaging (like tubes) and abstract geometric shapes (cubes, spheres). Product elements are treated realistically with subtle textures and lighting, while abstract shapes are often monochromatic with clean edges. The primary role of imagery is decorative and atmospheric, creating a controlled, almost studio-like environment rather than showcasing in-use contexts or lifestyle. Icons are not visible. The density of imagery is low, with visuals serving as artistic accents around key text content.
