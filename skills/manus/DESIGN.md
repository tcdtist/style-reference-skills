---
version: alpha
name: Manus
description: Manus employs a stark, functional interface with a restrained achromatic palette, punctuated by deep charcoal accents. The design prioritizes clear information hierarchy and interaction over elaborate aesthetics, featuring rounded corners for components and subtle shadow for depth. Typography is crisp and minimal, supporting a quick, efficient user experience.
colors:
  canvas-ice: "#f8f8f7"
  surface-snow: "#ffffff"
  ghost-border: "#e5e7eb"
  text-primary: "#34322d"
  text-secondary: "#5e5e5b"
  action-ink: "#1a1a19"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.29
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.22
spacing:
  cardRadius: 22px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 100px
components:
  primary-filled-button:
    role: Main call-to-action button.
  ghost-button:
    role: Secondary action button.
  outlined-button:
    role: Tertiary action or navigational button.
  pill-ghost-button:
    role: Filter or tag button.
  elevated-card:
    role: Content container with subtle depth.
  header-navigation-link:
    role: Top-level navigation items.
  banner-alert:
    role: Informational banner.
  input-field:
    role: User input area.
---

## Overview

**North Star:** Monochromatic command center: Efficient, responsive, and quietly powerful.

Manus employs a stark, functional interface with a restrained achromatic palette, punctuated by deep charcoal accents. The design prioritizes clear information hierarchy and interaction over elaborate aesthetics, featuring rounded corners for components and subtle shadow for depth. Typography is crisp and minimal, supporting a quick, efficient user experience.

### Do's

- Prioritize Canvas Ice (#f8f8f7) for primary page backgrounds to maintain a bright, expansive feel.
- Use Action Ink (#1a1a19) exclusively for primary call-to-action button backgrounds to preserve its impact.
- Apply 22px border-radius to large content cards for a soft, approachable aesthetic.
- Use 8px border-radius for interactive elements like buttons and input fields for consistent component styling.
- Maintain -apple-system as the default font for all UI text, leveraging its multiple weights for hierarchy.
- Employ Text Primary (#34322d) for all main content and heading text to ensure readability.
- Utilize Ghost Border (#e5e7eb) for subtle dividers and outlining ghost buttons to provide visual structure without heaviness.

### Don'ts

- Avoid using saturated colors in backgrounds or for large decorative elements; color should be functional punctuation.
- Do not deviate from the established type scale and font families; introducing new fonts or arbitrary sizes will break hierarchy.
- Do not introduce strong, dark shadows; the system relies on a very subtle rgba(0, 0, 0, 0.02) 0px 12px 32px 0px for elevation.
- Avoid excessive use of borders; use Ghost Border (#e5e7eb) sparingly for emphasis, not for every container.
- Do not use multiple font weights within a single text block; use weights to establish hierarchy between elements.
- Do not create complex layouts; default to centered or clearly defined grid structures with ample Canvas Ice (#f8f8f7) as whitespace.

### Layout

The page uses a contained layout with a maximum visible width, ensuring content is centered. The hero section appears full-width with a dark background for contrast, housing textual content and navigation. Subsequent sections utilize alternating light/dark bands, but in the screenshot, the dominant layout is a light canvas (#f8f8f7). Content arrangement primarily consists of centered stacks for interactive elements. There are no obvious multi-column card grids visible in the provided view, but implied horizontal menus suggest a linear, organized flow.

### Imagery

This site predominantly uses clean, minimal UI elements with an icon-only visual language. Icons are outlined, monochrome, and functional, providing visual cues without adding decorative weight. Product screenshots or abstract illustrations are absent, emphasizing a pure UI experience. Imagery is not used for atmosphere or content, but strictly for basic UI interaction cues. The density of imagery is extremely low, making it a text-dominant interface.
