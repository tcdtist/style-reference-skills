---
version: alpha
name: Greenspace
description: Greenspace embodies a brutalist-inspired minimalism, featuring stark monochrome surfaces and expansive negative space. The visual system operates on a high-contrast binary of black and white, punctuated by muted gray typography that hints at legacy and heritage. Typography is bold and architectural, often serving as a primary visual element, while a generous use of spacing emphasizes clarity and the monumental scale of projects.
colors:
  greenspace-carbon: "#000000"
  subtle-ash: "#bebebe"
  canvas-white: "#ffffff"
spacing:
  elementGap: 37px
  sectionGap: 200px
components:
  navigation-link-active:
    role: Main navigation and hero links when active or hovered.
  navigation-link-inactive:
    role: Main navigation and hero links when inactive.
  project-list-item:
    role: Listings for selected projects.
  section-separator:
    role: Visual divider for content sections.
---

## Overview

**North Star:** Monumental monochrome canvas

Greenspace embodies a brutalist-inspired minimalism, featuring stark monochrome surfaces and expansive negative space. The visual system operates on a high-contrast binary of black and white, punctuated by muted gray typography that hints at legacy and heritage. Typography is bold and architectural, often serving as a primary visual element, while a generous use of spacing emphasizes clarity and the monumental scale of projects.

### Do's

- Prioritize Greenspace Carbon (#000000) as the dominant background color for most page areas and major content blocks.
- Use Canvas White (#ffffff) sparingly for text on dark backgrounds and for high-contrast link states.
- Employ Subtle Ash (#bebebe) for all secondary and tertiary text, including inactive navigation and project listings, to create a sense of understated authority.
- Maintain a generous 200px vertical section gap to enforce strict separation and emphasize content monumentality.
- Use haas_grotesk (or substitute Inter) at 72px with a line height of 1.03 for all primary calls to action and prominent headings.
- Leverage haas_grotesk (or substitute Inter) at 24px with a line height of 1.15 for all body text, project lists, and secondary content blocks.
- Adhere to a strict 0px border-radius system across all components and elements for a brutalist, architectural feel.

### Don'ts

- Avoid introducing any additional chromatic colors; maintain a strictly achromatic palette.
- Do not use subtle gradients or soft shadows; elevation is achieved through color contrast and spatial separation.
- Do not create explicit card borders or outlines; content boundaries are defined by background changes and spacing.
- Do not use smaller font sizes for captions or body text; the minimal display emphasizes impact over detail density.
- Avoid complex or decorative imagery; visuals should be integrated as impactful, high-contrast product shots or abstract elements.
- Do not layer elements or use overlays unless functionally critical; prioritize flat, distinct content blocks.
- Do not vary line heights or letter spacing from the tokenized values; consistency is key to the system's precision.

### Layout

The page primarily utilizes a full-bleed layout, where content sections often extend across the entire viewport width. The hero section features a prominent visual with large, centered navigation elements. Content is typically arranged in distinct, vertically stacked blocks that leverage large section gaps (200px) to create a spacious rhythm. There's a strong emphasis on full-width content blocks and large-scale typography, suggesting a contained but expansive page model. Navigation is likely a sticky top bar or off-canvas element from the 'GS' emblem, given the minimal on-page navigation elements.

### Imagery

This system primarily uses stark, high-contrast product photography with deep blacks and bright highlights. Imagery is usually full-bleed or cropped tightly, creating immersive backgrounds or focused product showcases. There are no illustrations or complex graphical elements; the focus is on the object or scene itself, often with a moody, almost cinematic treatment. Icons are minimal, likely monochromatic, and serve purely functional roles. The density is image-heavy in hero sections, with images serving as dominant visual anchors rather than decorative accents.
