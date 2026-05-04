---
version: alpha
name: Pipe
description: Pipe presents a confident, high-contrast dark theme. The almost-black background paired with stark white typography gives it a technical, no-nonsense feel, while a single vivid orange accent color slices through to highlight key interactions. Typography, primarily in a custom sans-serif, maintains a clean and readable texture against the dark canvas, with subtle variations in weight and spacing. The overall impression is one of digital infrastructure and precision.
colors:
  midnight-core: "#000000"
  ivory-canvas: "#ffffff"
  slate-text: "#808080"
  onyx-layer: "#1a1a1a"
  ghost-white: "#f5f5f5"
  molten-orange: "#e2572c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.1
    letterSpacing: -0.7px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 64-72px
components:
  primary-cta-button-group:
    role: 
  feature-cards-dark-surface-grid:
    role: 
  stat-metric-block:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  secondary-ghost-button:
    role: Interactive element
  sign-in-button:
    role: Interactive element
  navigation-link-button:
    role: Interactive element
  dark-surface-card:
    role: Content container
  light-surface-card:
    role: Content container
---

## Overview

**North Star:** Blackrock and Molten Orange. A landscape of dark, solid forms punctuated by sharp, glowing accents.

Pipe presents a confident, high-contrast dark theme. The almost-black background paired with stark white typography gives it a technical, no-nonsense feel, while a single vivid orange accent color slices through to highlight key interactions. Typography, primarily in a custom sans-serif, maintains a clean and readable texture against the dark canvas, with subtle variations in weight and spacing. The overall impression is one of digital infrastructure and precision.

### Do's

- Prioritize Midnight Core (#000000) for primary dark backgrounds and Ivory Canvas (#ffffff) for primary text achieving AAA contrast.
- Use Molten Orange (#e2572c) exclusively for high-impact CTAs and key interactive elements.
- Apply an 8px border-radius for all interactive buttons and a 16px radius for content cards.
- Maintain Suisse Font 400 throughout the interface, leveraging size and line-height for hierarchy.
- Ensure consistent spacing with the 8px base unit, particularly 24px-48px for horizontal padding and 64px-72px for section gaps.
- Utilize Slate Text (#808080) for all secondary and tertiary textual content against dark backgrounds to soften hierarchy.

### Don'ts

- Avoid introducing additional saturated colors; maintain the Molten Orange (#e2572c) as the sole brand accent.
- Do not use box-shadows; depth is created through variations of dark neutral backgrounds.
- Refrain from using varied font weights; the system relies on the singular Suisse Font 400, adjusting size and line-height for visual distinction.
- Do not create buttons with less than 8px border-radius or cards with less than 16px border-radius.
- Avoid placing Ivory Canvas (#ffffff) text directly on Molten Orange (#e2572c) elements due to insufficient contrast (5.6:1 AA).

### Layout

The layout is predominantly a max-width contained design on a dark canvas, with the hero section stretching full-bleed vertically. Content is largely divided into clear, vertically stacked sections. The primary hero pattern features a split-screen approach: prominent headline and CTA on the left on a dark background, paired with a dark-toned photographic image on the right. Section rhythm is mostly seamless, relying on internal content differentiation rather than alternating background bands. Content arrangement employs centered stacks for main headings and descriptions, with implied multi-column grids for feature presentations. Density is comfortable, with generous vertical spacing between content blocks, but without feeling sparse. Navigation is a sticky top bar, minimal and functional, featuring text links and a 'Demo' button.

### Imagery

The site uses a mix of candid, dark-toned photography and abstract, minimal product-oriented graphics. Photography like the hero image features real people in professional, albeit natural, settings. The color treatment of these images is often desaturated, blending seamlessly into the dark UI. Visuals are typically contained within defined sections rather than full-bleed, maintaining a structured feel. Icons, while not explicitly detailed, appear monochrome and functional, supporting the UI without drawing excessive attention. The role of imagery is primarily atmospheric and supplementary, providing context for the software without distracting from the UI's focus.

### Elevation

This design system explicitly avoids traditional box-shadows for elevation. Instead, depth and hierarchy are established through the use of varied background colors within the dark neutral palette (e.g., Midnight Core, Onyx Layer) and border-radius. Surfaces are layered by changing background color, creating distinct, flat planes without the visual noise of shadows.
