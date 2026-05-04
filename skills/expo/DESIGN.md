---
version: alpha
name: Expo
description: Expo's design system feels like a precise technical blueprint on a minimalist canvas. It leverages a stark achromatic palette as its foundation, creating an atmosphere of clarity and focused utility. The singular bold blue (#0090ff) is reserved strictly for interactive elements like primary buttons and specific navigation items, acting as an indicator light in an otherwise subdued interface. Subtle rounded corners, particularly the exaggerated 36px radius on primary buttons, soften the otherwise sharp, text-heavy presentation, introducing an element of approachability to a highly technical subject.
colors:
  midnight-ink: "#1c2024"
  ghost-white: "#ffffff"
  cool-gray: "#60646c"
  whisper-gray: "#f0f0f3"
  parchment-gray: "#d9d9e0"
  steel-gray: "#80838d"
  expo-blue: "#0090ff"
  deep-sea-blue: "#0072de"
  ocean-tint: "#405d96"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: -0.64px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.6
    letterSpacing: -0.8px
spacing:
  cardRadius: 0px
  buttonRadius: 36px
  elementGap: 8px
  sectionGap: 40px
components:
  button-group:
    role: 
  policy-section-card:
    role: 
  policy-section-with-badge-tags:
    role: 
  primary-navigation-button-text:
    role: Primary navigation links and actions within the header.
  pill-navigation-item:
    role: Contextual navigation or subtle interactive elements.
  primary-action-button-filled:
    role: Primary Call-to-Action for high-importance user actions.
  secondary-navigation-button-small:
    role: Less prominent navigation links and contextual actions.
  headline:
    role: Primary section titles.
  body-text:
    role: Standard content and paragraph text.
  bullet-list-item:
    role: Detailed factual listings, like policies or features.
---

## Overview

**North Star:** A precise technical blueprint on a minimalist canvas. Focus is achieved through stark neutrals and a single, deliberate accent.

Expo's design system feels like a precise technical blueprint on a minimalist canvas. It leverages a stark achromatic palette as its foundation, creating an atmosphere of clarity and focused utility. The singular bold blue (#0090ff) is reserved strictly for interactive elements like primary buttons and specific navigation items, acting as an indicator light in an otherwise subdued interface. Subtle rounded corners, particularly the exaggerated 36px radius on primary buttons, soften the otherwise sharp, text-heavy presentation, introducing an element of approachability to a highly technical subject.

### Do's

- Use Inter font family exclusively for all text elements to maintain typographic consistency.
- Apply #0090ff (Expo Blue) only to primary interactive elements and active states to preserve its signalling value.
- Employ borderRadius: 36px for all primary buttons and pill-shaped elements to establish a consistent soft touch.
- Prioritize the neutral palette of #1c2024, #ffffff, #60646c, #f0f0f3 for structure and content to maintain visual clarity.
- Utilize 4px as the base unit for all spacing, scaling up in multiples (e.g., 8px, 16px, 20px, 24px) for harmonious spatial relationships.
- Use text links that are #1c2024 (Midnight Ink) with 0px border radius and 0px padding, making them visually subtle until interaction.

### Don'ts

- Do not introduce new typefaces; rely solely on Inter for all text.
- Avoid using highly saturated, non-blue chromatic colors for primary UI elements; maintain the achromatic base with specific blue accents.
- Do not use box-shadows for elevation; rely on background color changes or borders for differentiation between surface levels.
- Do not deviate from the established padding and radius values for buttons and interactive components; uniformity is key.
- Avoid applying a background color to generic text links; they should appear as plain text until hovered or active.
- Do not use strong, contrasting borders on elements that are meant to be visually soft or secondary; use subtle neutrals like #d9d9e0 instead.

### Imagery

The site's visual language is almost entirely UI-driven, with minimal decorative graphics. When present, images are limited to small, functional icons. These icons are typically outlined or filled in #1c2024 (Midnight Ink) or #60646c (Cool Gray), maintaining a functional, monochrome aesthetic. There is no photography or complex illustration, reinforcing the technical and content-focused nature of the brand. Imagery plays a supporting, explanatory role, never decorative or atmospheric, ensuring content takes center stage.
