---
version: alpha
name: Verse
description: Verse employs a stark, high-contrast dark mode aesthetic, reminiscent of a terminal interface or a hacker's workbench. The visual system is built on a foundation of pure black with minimal use of grays, allowing code-like typography and crisp borders to define the structure. Interactive elements are subtle, relying on text color changes and thin border lines rather than prominent fills. The overall impression is one of focused utility and technical precision, avoiding decorative flourishes.
colors:
  deep-space: "#171717"
  cloud-gray: "#e5e7eb"
  digital-silver: "#d4d4d4"
  muted-ash: "#737373"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 80px
components:
  project-card:
    role: Displays individual project entries with an image, title, and link.
  ghost-button:
    role: Interactive text or link, appearing within content blocks.
  metadata-text:
    role: Used for descriptive text like 'Twitter:' or project technologies.
---

## Overview

**North Star:** midnight command center

Verse employs a stark, high-contrast dark mode aesthetic, reminiscent of a terminal interface or a hacker's workbench. The visual system is built on a foundation of pure black with minimal use of grays, allowing code-like typography and crisp borders to define the structure. Interactive elements are subtle, relying on text color changes and thin border lines rather than prominent fills. The overall impression is one of focused utility and technical precision, avoiding decorative flourishes.

### Do's

- Use Deep Space (#171717) as the primary background for all surfaces and page canvas.
- Typography should exclusively use Commit Mono to maintain the consistent code-centric aesthetic, with weight 600 for subtle emphasis and 400 for all other body text.
- Render all borders, including those for interactive states and content cards, as 1px solid lines using Cloud Gray (#e5e7eb).
- Maintain a stark, no-radius aesthetic with all corners sharp at 0px radius for all components and containers.
- Employ Digital Silver (#d4d4d4) for all primary text content to ensure high contrast against the dark background.
- Utilize Muted Ash (#737373) for secondary text and metadata to create subtle hierarchy without introducing additional colors.
- Structure content with an 80px vertical section gap for clear separation between major content blocks.

### Don'ts

- Do not introduce any saturated colors for UI elements; color should be restricted to imagery or embedded content only.
- Avoid using any form of box-shadow or elevation as the design relies on flat, border-defined separation.
- Do not apply radius to any interactive elements, cards, or containers; all corners must be sharp 0px.
- Refrain from using prominent filled buttons or primary actions; all interactive elements should be styled as text links or ghost buttons.
- Do not deviate from the monochrome palette by introducing any chromatic text colors or background tints.
- Avoid decorative gradients or background patterns; surfaces should remain solid Deep Space (#171717).

### Layout

The page uses a full-bleed black background from edge to edge. The main content is vertically stacked in a centered column, appearing as discrete blocks. The hero section features a centered headline and description. Subsequent sections are grid-based, primarily a 2-column or 3-column masonry-like grid for project showcases, with content cells having a 1px Cloud Gray border. Vertical rhythm is established by an 80px gap between these main content sections. Navigation is minimal, consisting of simple text links in the header area.

### Imagery

The site primarily uses product screenshots and embedded visual content to showcase work, rather than distinct branding imagery. When present, images maintain their original aspect ratios and coloring, embedded within card-like structures. There are no consistent icon styles or illustrative elements; visuals are content-driven, serving as direct examples of projects.
