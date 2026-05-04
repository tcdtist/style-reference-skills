---
version: alpha
name: 247Studio
description: This design system presents as a crisp, high-contrast, and almost clinical aesthetic, focusing heavily on legibility and minimalist presentation. The absence of color, save for pure black and white, forces attention onto typography and spatial relationships. It creates an atmosphere of precise, no-nonsense communication, suggesting an emphasis on clear information delivery over decorative flourishes.
colors:
  storm-black: "#000000"
  cloud-white: "#ffffff"
  deep-graphite: "#1f1f1f"
  slate-gray: "#808080"
  light-concrete: "#f2f2f2"
  shadow-ash: "#666666"
  silver-mist: "#999999"
  border-grey: "#cccccc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 73px
    lineHeight: 1
spacing:
components:
  announcement-banner:
    role: 
  client-logos-grid:
    role: 
  project-cards-grid:
    role: 
  primary-button:
    role: Call to action, navigation
  secondary-button:
    role: Alternative actions, subtle interaction
  basic-card:
    role: Content grouping, visual separation
  elevated-card:
    role: Highlighted content, distinct sections
  subtle-background-card:
    role: Softly delineated content areas
  navigation-link:
    role: Site navigation, internal links
  small-text-link:
    role: Supporting links, footnotes
---

## Overview

**North Star:** Black & White Blueprint: A stark, high-contrast canvas where information is meticulously laid out like an architectural plan.

This design system presents as a crisp, high-contrast, and almost clinical aesthetic, focusing heavily on legibility and minimalist presentation. The absence of color, save for pure black and white, forces attention onto typography and spatial relationships. It creates an atmosphere of precise, no-nonsense communication, suggesting an emphasis on clear information delivery over decorative flourishes.

### Do's

- Prioritize pure black (#000000) and pure white (#ffffff) for dominant text and background elements to maintain high contrast.
- Use 247 grotesk for all headlines and significant UI text, manipulating size and weight for hierarchy rather than color.
- Apply Ntbau (with its 0.0190em letter-spacing) for specific technical or descriptive text, offering visual variety.
- Structure content primarily through generous vertical spacing (sectionGap) and typography, avoiding strong visual dividers or shadows.
- Maintain hard edges and 0px border-radius for almost all elements except specific brand assets to preserve the stark, precise aesthetic.
- Ensure interactive elements (buttons, links) are clearly distinguishable by their #000000/#ffffff color inversions or slight background shifts.

### Don'ts

- Do not introduce any chromatic colors into the main UI; the system relies strictly on a grayscale palette.
- Avoid using box-shadows or complex elevation styles; depth should be created through surface color changes and spacing.
- Do not use heavily rounded elements; stick to the hard-edged aesthetic defined by 0px border radii.
- Do not vary letter-spacing for 247 grotesk unless explicitly defined for a specific type role; it is generally 'normal'.
- Avoid decorative imagery that introduces color or excessive visual noise that would conflict with the minimalist, high-contrast theme.

### Layout

The page adheres to a full-bleed model, with content often stretching edge-to-edge. However, text and core UI elements are generally confined to an implied central content area, creating a sense of spaciousness around them. The hero section is a full-bleed white background with a large, centered headline that bleeds off the right side, immediately establishing the typographic emphasis. Sections alternate between pure white and subtle off-white backgrounds (#f2f2f2), creating a gentle rhythm. Content arrangement frequently features centered text blocks or alternating text-left/image-right (or vice-versa) compositions. There's dense vertical spacing between sections (around 400px), indicating a desire for significant breathing room. Navigation is primarily a top bar with a sticky header, augmented by a 'Kontakt +' button always present on the right edge.

### Imagery

The visual language is characterized by an absence of traditional photography or illustrations. Instead, it features product screenshots or 3D renders that are either monochrome or desaturated, contained within solid blocks of black or white. These visuals serve an explanatory/product showcase role, stripped of context, focusing solely on the object or interface itself. The density of imagery is low, with text dominating the page. Iconography, when present, is starkly outlined or filled in monochrome, reinforcing the precise, functional aesthetic.

### Elevation

This design intentionally avoids any form of elevation (box-shadows) or subtle dimensional cues. Its philosophy relies purely on the stark contrast between black and white, and subtle changes in background color, to differentiate elements and create visual hierarchy. The absence of shadows contributes to a flat, print-like aesthetic, emphasizing clarity and directness over simulated depth.
