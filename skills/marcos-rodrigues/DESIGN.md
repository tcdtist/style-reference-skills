---
version: alpha
name: Marcos Rodrigues
description: Marcos Rodrigues employs a stark, high-contrast aesthetic, reminiscent of a digital gallery space. The primary interface relies on pure black and white, punctuated by subtle gray typography and hairline borders. Visual hierarchy is established through minimal layout and precise element positioning, with imagery serving as focal points rather than decorative backdrops. Components are unadorned and structural, emphasizing content visibility over elaborate interactive elements. The system feels reserved yet impactful, prioritizing clarity and directness.
colors:
  raven-black: "#000000"
  canvas-white: "#ffffff"
  graphite: "#191919"
  charcoal-grey: "#4c4c4c"
  mist: "#bcbcbc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
spacing:
  cardRadius: 8px
  elementGap: 6px
  sectionGap: 130px
components:
  project-card:
    role: Container for individual portfolio items
  navigational-link:
    role: Interactive text for site navigation and external references
---

## Overview

**North Star:** Minimalist digital gallery

Marcos Rodrigues employs a stark, high-contrast aesthetic, reminiscent of a digital gallery space. The primary interface relies on pure black and white, punctuated by subtle gray typography and hairline borders. Visual hierarchy is established through minimal layout and precise element positioning, with imagery serving as focal points rather than decorative backdrops. Components are unadorned and structural, emphasizing content visibility over elaborate interactive elements. The system feels reserved yet impactful, prioritizing clarity and directness.

### Do's

- Maintain high contrast by always pairing Canvas White (#ffffff) text on Raven Black (#000000) backgrounds or vice-versa.
- Use Sometype Mono (or Space Mono) at 10px, weight 500, for all body text and general labels to establish a technical, precise voice.
- Apply 1px padding-bottom to all interactive links, combined with a 1px border-bottom in either Graphite (#191919) or Canvas White (#ffffff) to denote interactivity.
- Utilize 8px border radius for all images and internal card elements to introduce a subtle softening to the stark aesthetic.
- Structure pages with a base unit of 6px for internal element spacing, and significant vertical rhythm using 130px gaps between major sections.
- Prioritize minimal, unadorned surfaces with no background, border, or shadow, allowing content to define its own boundaries and presence.
- Employ Times (or Times New Roman) at 13px, weight 400, for specific project titles or contextual text as a deliberate serif accent.

### Don'ts

- Avoid using saturated or chromatic colors; the system is strictly achromatic, with no accent colors.
- Do not introduce complex shadows or elevated components; surfaces should remain flat and minimal.
- Refrain from using varied backgrounds or complex textures; stick to solid Raven Black (#000000) as the dominant canvas.
- Do not add additional padding or border styles to the primary Project Card component; it should remain transparent and borderless.
- Avoid decorative imagery; all visuals should be content-driven product shots or conceptual art directly related to the work.
- Do not use generic system fonts without a specific purpose; adhere to Sometype Mono and Times as the defined typographic palette.
- Steer clear of any element that appears glossy, translucent, or employs gradients; the visual language is matte and direct.

### Layout

The page model is full-bleed with a strong left-aligned bias for content. The hero section often features a minimal, centered element or a primary image against the deep black background. Section rhythm is driven by significant 130px vertical gaps, creating distinct conceptual breaks between content blocks rather than visual dividers. Content arrangement leans heavily into single-column centered stacks or a single, large visual with associated text. There's a notable absence of grid-based layouts or alternating text/image patterns. The overall density is very spacious, emphasizing negative space. Navigation currently appears minimal, likely a simple text-based footer.

### Imagery

This system primarily uses product-focused photography and highly stylized graphic designs / illustrations. Images are presented as contained elements, often with crisp 8px rounded corners, against the stark black background. There's no full-bleed photography or lifestyle shots. The focus is on the object and its form, with lighting often highlighting texture and dimension. Photography appears high-key for specific objects against a solid background or moody for artistic compositions. Icons are not a pervasive element, with the visual system favoring content-rich graphics over symbolic iconography.
