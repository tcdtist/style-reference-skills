---
version: alpha
name: Inngest
description: This design system evokes a sense of ordered complexity within a high-contrast dark environment, much like an advanced control panel. The muted black and deep charcoal surfaces provide a sophisticated backdrop, against which subtle geometric patterns and a restrained, precise typography establish a serious, tech-forward identity. Strategic use of a single amber accent color guides the eye to interactive elements, while the generous application of rounded corners on buttons softens the otherwise sharp, grid-like aesthetic, making the technical feel approachable.
colors:
  background-charcoal: "#0c0a09"
  surface-dark-gray: "#1c1917"
  text-white: "#ffffff"
  text-light-gray: "#f6f6f6"
  text-medium-gray: "#a89984"
  border-light-gray: "#e5e7eb"
  border-accent-gray: "#44403c"
  amber-glow: "#cab16a"
  highlight-green: "#59a569"
  muted-red: "#ea6962"
  vivid-orange: "#cc5b33"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.63
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.56px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.11
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  elementGap: 4-24px
  sectionGap: 24-40px
components:
  cta-button-group:
    role: 
  feature-cards-infraless-agnostic-observable:
    role: 
  enterprise-trust-built-for-trust-feature-block:
    role: 
  navigation-link:
    role: Primary navigation item
  primary-call-to-action-button:
    role: Key interactive element
  secondary-button:
    role: Secondary action or link button
  tertiary-button:
    role: Subtle button for minor actions
  dark-overlay-card:
    role: Information container, features
  highlight-card:
    role: Featured information container
  pill-button:
    role: Status indicator or filter button
---

## Overview

**North Star:** Midnight Grid Console — where precision meets a soft amber glow.

This design system evokes a sense of ordered complexity within a high-contrast dark environment, much like an advanced control panel. The muted black and deep charcoal surfaces provide a sophisticated backdrop, against which subtle geometric patterns and a restrained, precise typography establish a serious, tech-forward identity. Strategic use of a single amber accent color guides the eye to interactive elements, while the generous application of rounded corners on buttons softens the otherwise sharp, grid-like aesthetic, making the technical feel approachable.

### Do's

- Prioritize `Background Charcoal` (#0C0A09) for primary dark surfaces and `Surface Dark Gray` (#1C1917) for elevated content containers.
- Use `Amber Glow` (#CAB16A) exclusively for primary calls to action, active states, and critical highlights to maintain its impact.
- Employ `Whyte` or `Whyte Inktrap` for all display and large headlines, utilizing their tight letter spacing (`-0.0560em`, `-0.0250em`) for a condensed, impactful look.
- Apply `9999px` border-radius for all interactive buttons and pill-shaped elements to create a consistent soft touch amidst sharper elements.
- Maintain generous vertical spacing between content sections, using `24px` to `40px` padding to provide breathing room on the dark canvas.
- Layer cards atop `Background Charcoal` using `Surface Dark Gray` and the subtle shadow `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`.

### Don'ts

- Do not introduce new primary accent colors; `Amber Glow` (#CAB16A) is the singular visual indicator for key interactions.
- Avoid standard rectangular shapes for buttons; either use `0px` radius for a sharp, embedded look or `9999px` for pill forms.
- Do not apply strong, opaque shadows; leverage subtle, low-opacity dark shadows (`rgba(0, 0, 0, 0.1)`) to create depth without visual weight.
- Refrain from using heavily saturated images or illustrations; opt for abstract, geometric shapes or desaturated imagery that complements the dark theme.
- Do not use generic system fonts; always map to `CircularXX` for body text and `Whyte` for headlines to preserve brand distinctiveness.
- Avoid highly expressive or decorative typography for body copy, stick to the clear and professional feel of `CircularXX`.

### Layout

The site employs a primarily max-width contained layout, centering content blocks on a dark canvas, though the hero section often uses a full-bleed dark background. The hero features a centered headline over an abstract geometric background. Section rhythm is generally consistent with vertical spacing, often introducing alternating content arrangements like text-left/image-right or centered stacks. Card grids are used to display features or trusted brands, typically in 3-column layouts. The navigation is a sticky top bar, providing persistent access across the dark interface. The overall density is comfortable, with ample breathing room between sections, creating a sense of clarity and focus.

### Imagery

The visual language predominantly features abstract, geometric shapes and patterns, emphasizing structure and technicality. These graphics are often composed of solid, brand-colored blocks (green, amber, orange) or subtle gradients, placed in a grid-like arrangement that occasionally breaks bounds for visual interest. There's a notable absence of photography or detailed illustrations. Icons are simple, outlined, and monochromatic, used functionally to represent concepts or features. The imagery's role is primarily decorative and atmospheric, reinforcing the 'control panel' metaphor rather than conveying specific product details, contributing to a high-tech, somewhat abstracted feel. Density is moderate, with images typically contained within sections rather than full-bleed.
