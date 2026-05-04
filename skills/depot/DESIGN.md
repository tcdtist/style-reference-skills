---
version: alpha
name: Depot
description: Depot’s aesthetic is a high-contrast dark mode, evoking a command center's precision. Deep, near-black backgrounds frame content, punctuated by vivid green accents that immediately draw the eye to critical interactive elements. A subtle progression of dark grays creates layered surfaces, adding depth and structure without reliance on heavy shadows. The overall impression is one of efficiency and focused power without distraction, like a purpose-built tool designed for speed.
colors:
  carbon-black: "#04040b"
  night-sky: "#121113"
  ash-gray: "#323035"
  storm-gray: "#3c393f"
  cloud-burst: "#b5b2bc"
  snow-drift: "#eeeef0"
  terminal-green: "#71d083"
  canopy-green: "#366740"
  link-blue: "#70b8ff"
  twilight-purple: "#473876"
  crimson-spark: "#ff9592"
  green-burst-gradient: "#46a758"
  radial-glow-gradient: "#64c878"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.25px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.35px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
    letterSpacing: -0.9px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -1.5px
spacing:
  cardRadius: 6px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  product-tab-selector-cards:
    role: 
  announcement-banner-highlight-badge:
    role: 
  primary-action-button:
    role: Call to action
  secondary-action-button:
    role: Secondary call to action
  tertiary-ghost-button:
    role: Mildly emphasized action
  navigation-link-button:
    role: Navigation and internal links
  feature-card:
    role: Content grouping
  highlight-badge:
    role: Small, informative label
  hero-headline:
    role: Primary page title
  secondary-headline:
    role: Section titles
---

## Overview

**North Star:** Deep space console: focused intensity.

Depot’s aesthetic is a high-contrast dark mode, evoking a command center's precision. Deep, near-black backgrounds frame content, punctuated by vivid green accents that immediately draw the eye to critical interactive elements. A subtle progression of dark grays creates layered surfaces, adding depth and structure without reliance on heavy shadows. The overall impression is one of efficiency and focused power without distraction, like a purpose-built tool designed for speed.

### Do's

- Use `Carbon Black` (#04040b) for primary page backgrounds to maintain a consistent dark theme.
- Apply `Canopy Green` (#366740) for all primary call-to-action button backgrounds, paired with `Terminal Green` (#71d083) text.
- Implement 6px border radius as the default for most interface elements, with 10px used for key interactive elements like primary buttons.
- Ensure `Red Hat Text Variable` with 0.0250em letter-spacing is used for all body text and secondary UI elements for optimal legibility.
- Maintain a clear visual hierarchy using `Red Hat Display Variable` for headlines, particularly with its tight -0.0250em letter-spacing to distinguish it from body copy.
- Utilize `Ash Gray` (#323035) for button backgrounds and secondary content blocks to create subtle elevation on dark surfaces.

### Don'ts

- Avoid using bright, high-saturation colors for large background areas; colors like `Terminal Green` (#71d083) are strictly for accents and interactive elements.
- Do not deviate from the specified letter-spacing values across `Red Hat Display Variable` and `Red Hat Text Variable` as they are integral to the system's character.
- Avoid excessive use of shadows; the system relies on layer colors (`Night Sky`, `Ash Gray`) and subtle inset shadows for depth.
- Do not introduce new typefaces; `Red Hat Display`, `Red Hat Text`, and `Red Hat Mono` are the only approved families.
- Refrain from using color in body text that does not meet the specified `Snow Drift` (#eeeef0) or `Cloud Burst` (#b5b2bc) for readability against dark backgrounds.
- Do not use generic square or fully rounded (pill) shapes; adhere to the 6px and 10px radii for a consistent, structured appearance.

### Layout

The layout is predominantly full-bleed dark, with content constrained within a centered max-width, though the exact `pageMaxWidth` is not explicitly defined it appears to allow generous negative space. The hero section features a centered headline over a dark background, with clear calls to action below. Sections are visually distinct, often with solid color backgrounds for separation, like the alternating `Night Sky` (#121113) and `Carbon Black` (#04040b) sections. Content is frequently arranged in two-column layouts, with text and descriptions on one side and a visual (code example, product screenshot, or illustration) on the other. A structured card grid appears for feature showcases. The navigation is a sticky top bar, providing persistent access to key links.

### Imagery

This design primarily uses product screenshots and brand-colored illustrations. Product screenshots are typically contained within card-like structures, showing UI elements and code, often with a subtle `Terminal Green` (#71d083) highlight to draw attention to key features. Illustrations are flat, geometric, and follow the brand's green and dark gray palette, used decoratively to break up sections or emphasize concepts, rather than depicting real-world scenarios. Small, mono-color icons, usually `Snow Drift` (#eeeef0) or `Terminal Green` (#71d083), are extensively used to denote features, actions, and navigation elements. The overall density of imagery is balanced, supporting the text-heavy technical content without overwhelming it, acting as visual cues rather than dominant storytelling elements.

### Elevation

Depot deliberately avoids strong, drop-shadow-based elevation. Instead, depth and layering are achieved through a carefully considered progression of background colors, from `Carbon Black` (#04040b) for the base canvas to `Night Sky` (#121113) for cards and `Ash Gray` (#323035) for interactive elements. This approach maintains a flat, precise, and high-tech feel, with only a very subtle inset white shadow (`rgba(255, 255, 255, 0.06) 0px 1px 0px 0px inset`) on certain cards to denote a slight raised surface, enhancing the 'screen-like' quality.
