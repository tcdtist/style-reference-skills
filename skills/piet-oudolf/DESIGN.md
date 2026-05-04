---
version: alpha
name: Piet Oudolf
description: The Piet Oudolf visual system is a minimalist canvas with a typographic core, emphasizing content with subtle interactions. Its primary characteristic is the textured, almost camouflaged typography that appears to blend with its surroundings, creating an organic, almost ethereal display of information. Navigation is understated, relying on delicate borders and a sparse layout to guide the user, hinting at a natural, understated aesthetic where content is paramount and visual clutter is absent.
colors:
  canvas-white: "#ffffff"
  textured-gray: "#808080"
  muted-gray: "#b3b3b3"
  outline-gray: "#999999"
  icon-black: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.87
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.25
spacing:
  elementGap: 6px
  sectionGap: 40px
components:
  header-navigation-link:
    role: Interactive text link in the page header.
  main-project-text-link:
    role: Primary interactive text links for project names.
  small-country-code-label:
    role: Contextual label for project locations.
  footer-navigation-link:
    role: Secondary navigation in the page footer.
---

## Overview

**North Star:** Typographic whisper on textured canvas

The Piet Oudolf visual system is a minimalist canvas with a typographic core, emphasizing content with subtle interactions. Its primary characteristic is the textured, almost camouflaged typography that appears to blend with its surroundings, creating an organic, almost ethereal display of information. Navigation is understated, relying on delicate borders and a sparse layout to guide the user, hinting at a natural, understated aesthetic where content is paramount and visual clutter is absent.

### Do's

- Use Canvas White #ffffff as the primary background for all page sections to maintain a bright, airy feel.
- Apply Textured Gray #808080 for all primary text content and interactive borders, leveraging its subtle visual texture.
- Employ Maison Neue Book weight 300 at 60px for all page-level headlines, emphasizing understated authority.
- Incorporate UniversLTStd-Light weight 400 at 12px for body copy and navigational elements, preserving a delicate typographic presentation.
- Maintain the comfortable density by respecting a 40px vertical gap between main page sections.
- Utilize a 6px right margin for horizontal spacing between inline elements like links or keywords.
- For all interactive borders, use a 1px solid stroke with Outline Gray #999999 for clarity and a 0.3s ease transition on hover.

### Don'ts

- Avoid using bold or heavy font weights for headlines; the system relies on lighter weights for its distinctive tone.
- Do not introduce strong, saturated colors for backgrounds or primary text; maintain the monochromatic and achromatic palette.
- Refrain from using prominent shadows or elevation effects; the design emphasizes flatness and subtle depth through typography.
- Do not use generic button styles; interactive elements should primarily be text-based with subtle border feedback.
- Avoid tight, condensed line spacing; ensure generous line heights (e.g., 1.6-2.33) for improved readability and visual calm.
- Do not deviate from the specified font families; their unique characteristics are central to the brand's identity.
- Avoid prominent page dividers; section separation is primarily achieved through semantic grouping and vertical spacing, not explicit lines.

### Layout

The page model is full-bleed, with all content expanding to the edges of the viewport horizontally. The hero section features the brand name, a horizontal navigation bar, and is followed by large, text-dominant sections. Content is primarily arranged in centered stacks, with a large, fluid block of text links acting as the main content area. Vertical spacing between sections appears consistent, with no hard visual dividers. The navigation is a minimalist top bar, likely sticky, with subtle interactive states.

### Imagery

The site uses no explicit imagery in its UI outside of what appears to be part of the text rendering, which creates a textured, almost ephemeral effect within the typographic elements themselves. There are no standalone photographs, illustrations, or icons except potentially for very small, functional SVGs rendered in Icon Black. The visual system is entirely dominant by typography, which acts as the primary visual element and source of aesthetic interest.
