---
version: alpha
name: Cron Calendar
description: This design system evokes a refined, understated dark mode, like a well-crafted instrument panel in a high-end vehicle. Its strength lies in a stark contrast between near-black surfaces and bright white typography, creating immediate clarity. A single, vibrant orange serves as the primary accent, drawing attention only to key interactive elements. The system feels direct and functional, prioritizing information hierarchy and calls to action over decorative flourishes.
colors:
  cron-black: "#0f0d0a"
  deep-graphite: "#161412"
  bright-white: "#ffffff"
  subtle-gray: "#cccccc"
  action-orange: "#ff4700"
  soft-ember: "#451e0"
  deep-ember: "#8b2e09"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.7
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.7
    letterSpacing: 0.15px
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 140px
    lineHeight: 0.9
    letterSpacing: -2.94px
spacing:
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 80px
components:
  announcement-pill-banner:
    role: 
  button-group-primary-secondary:
    role: 
  feature-stat-metric-cards:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  secondary-button:
    role: Interactive element
  header-navigation-link:
    role: Navigation
  footer-link:
    role: Navigation
---

## Overview

**North Star:** Minimal dark cockpit. Clean contrast of white text on deep gray surfaces, punctuated by a vivid orange accent.

This design system evokes a refined, understated dark mode, like a well-crafted instrument panel in a high-end vehicle. Its strength lies in a stark contrast between near-black surfaces and bright white typography, creating immediate clarity. A single, vibrant orange serves as the primary accent, drawing attention only to key interactive elements. The system feels direct and functional, prioritizing information hierarchy and calls to action over decorative flourishes.

### Do's

- Maintain a clear visual hierarchy by limiting prominent chromatic colors to the Action Orange (#ff4700) for primary CTAs.
- Utilize Bright White (#ffffff) text for primary content and Subtle Gray (#cccccc) for secondary, ensuring high readability on dark backgrounds.
- Apply Helvetica Neue universally, leveraging its differing weights (e.g., 700 for display, 400 for body) to establish content importance.
- Employ `sectionGap` of 80px between main content blocks to maintain a spacious, uncluttered flow.
- Use 4px border radius for all actionable buttons to provide subtle rounding without compromising precision.
- Apply `padding` of 0px top, 24px right, 1px bottom, 24px left for all buttons, maintaining a consistent minimalist vertical spacing.
- Use a 9999px border radius for tags and prominent notifications like 'Cron is now Notion Calendar' to create distinct pill shapes.

### Don'ts

- Do not introduce additional vivid chromatic colors beyond the established Action Orange (#ff4700) to maintain focus.
- Avoid using box shadows that introduce strong light colors or blur, as the system relies on flat, high-contrast surfaces augmented by subtle amber tints.
- Do not create extensive text blocks using Helvetica Neue at sizes larger than 22px; large text is reserved for display headlines.
- Avoid generic button styles; every button should either be Primary Call-to-Action (Action Orange) or Secondary (Deep Graphite).
- Do not vary `elementGap` from 16px unless explicitly for full-bleed section alignment or dense content blocks.
- Do not use overly complex or illustrative imagery; prefer UI screenshots or abstract graphics to align with the functional aesthetic.

### Layout

The overarching layout is a max-width contained model, centered on the page, providing clear boundaries for content. The hero section is full-bleed dark with a strong centered headline and smaller subtext that guides the eye towards the central product showcase. Section rhythm is primarily established by consistent vertical spacing (80px `sectionGap`) rather than alternating background colors, although subtle variations in surface color (not evident in the main screenshot but common in dark themes) may exist. Content is generally arranged in a stacked, single-column fashion for primary messaging, potentially transitioning to multi-column grids for features or details. Navigation is a simple top bar with left-aligned branding and right-aligned links and a primary CTA button, sticky to the top of the viewport.

### Imagery

The visual language for imagery is predominantly product screenshots, showcasing the cron calendar interface in dark mode. These are presented without ornate treatments, simply as contained, rectangular displays of the application. The primary role of imagery is explanatory and product-showcasing, focusing on functional aspects of the UI rather than decorative or atmospheric elements. There's a notable absence of lifestyle photography or complex illustrations, reinforcing the tool's utilitarian and professional identity.

### Elevation

The design strongly favors flat UI surfaces and high contrast over complex shadows. Where elevation is present (e.g., subtle button glows), it's achieved through a subdued, slightly chromatic tint in the `box-shadow` rather than distinct layers or heavy blurring, maintaining the system's clean, precise feel.
