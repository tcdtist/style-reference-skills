---
version: alpha
name: Liquid Ideas
description: The Studio Lathe design system evokes a raw, digital blueprint aesthetic. It features stark contrasts and a minimal color palette predominantly using black text on a pale, almost invisible background. Interactive elements are subtly highlighted with a vivid yellow that appears to switch content sections or navigational context rather than acting as a traditional brand accent. Typography is a key identifier, utilizing system fonts with precise letter-spacing to achieve a crisp, understated texture against the dominant white space. Visual density is low, emphasizing content rather than decorative flourishes.
colors:
  canvas-parchment: "#FFFF00"
  ink-jot: "#000000"
  badge-fog: "#DADADA"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.3
    letterSpacing: -0.04px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.3
    letterSpacing: -0.034px
spacing:
  elementGap: 8px
  sectionGap: 180px
components:
  standard-list-item:
    role: Navigational link or content entry in vertical lists
  footer-contact-link:
    role: Minimal contact information links
  tag-badge:
    role: Categorization tag for project types
  top-navigation-link:
    role: Primary site navigation links.
---

## Overview

**North Star:** Digital Blueprint on Vellum

The Studio Lathe design system evokes a raw, digital blueprint aesthetic. It features stark contrasts and a minimal color palette predominantly using black text on a pale, almost invisible background. Interactive elements are subtly highlighted with a vivid yellow that appears to switch content sections or navigational context rather than acting as a traditional brand accent. Typography is a key identifier, utilizing system fonts with precise letter-spacing to achieve a crisp, understated texture against the dominant white space. Visual density is low, emphasizing content rather than decorative flourishes.

### Do's

- Use Canvas Parchment (#FFFF00) as the primary background for sections that act as a visual content canvas or are currently interactive.
- Apply Ink Jot (#000000) for all text elements to maintain high contrast and a stark aesthetic.
- Utilize the system-ui font at weight 300 for all typography, adjusting letter-spacing as per the type scale for 10px and 17px sizes.
- Employ Badge Fog (#DADADA) for subtle 1px borders on ghost-style badge components.
- Adhere to an 8px element gap for horizontal spacing between elements like tags and 180px for section separators.
- Ensure all interactive badge elements use a 5px border-radius with 3px vertical and 6px horizontal padding.

### Don'ts

- Do not introduce additional saturated colors; the palette is strictly monochrome with a single vivid yellow for interaction.
- Avoid heavy shadows or gradients; the design relies on flat surfaces and high contrast for definition.
- Do not vary font families or weights beyond the single defined system-ui 300; consistency is paramount for this typographic identity.
- Do not use generic button styles; prefer ghost buttons or text links with distinct background changes for interactive states.
- Do not create complex layouts that deviate from the compact, maximum-width constrained structure; simplicity and directness are key.

### Layout

The page adheres to a centered maximum width of 353px, creating a compact, focused viewing experience reminiscent of a detailed document or a console interface. The hero section, if implicitly defined, presents critical navigation in a high-contrast format. Sections are clearly demarcated by substantial vertical spacing (specifically 180px `sectionGap`), fostering a minimalist rhythm. Content is primarily arranged in single-column stacks for lists and multi-column grids for badges, with an implicit left-alignment for main content. Navigation is a simple top-bar and footer links, designed for quick access rather than exploration.

### Imagery

This site uses no imagery, illustrations, or graphics. The visual language is entirely expressed through typography, spacing, and stark color contrasts, creating an object-oriented, content-first experience. Icons, if present, are purely functional and monochromatic, likely a simple outlined style matching the text weight.
