---
version: alpha
name: OhDada
description: OhDada's visual system evokes a serene, gallery-like atmosphere, reminiscent of antique paper and muted tones. Typography is a central expressive element, contrasting modern sans-serif body text with large, delicate serif headlines that command attention. The color palette is minimal, built around a warm, earthy brown and soft, desaturated neutrals, allowing the content to breathe and stand out. Components are subtly delineated, relying on light borders and ample negative space rather than heavy fills or shadows.
colors:
  kinetic-brown: "#5d3a19"
  canvas-parchment: "#e6e0d9"
  stone-mist: "#b7b3be"
  ink-depth: "#000000"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
spacing:
  elementGap: 10px
  sectionGap: 115px
components:
  hero-headline:
    role: Large, decorative primary headline
  secondary-headline:
    role: Product section or general content headline
  product-link-card:
    role: Interactive list item for products
  body-text-block:
    role: General descriptive text
  subtle-section-separator:
    role: Visual division between content blocks
---

## Overview

**North Star:** Antique Papyrus Canvas

OhDada's visual system evokes a serene, gallery-like atmosphere, reminiscent of antique paper and muted tones. Typography is a central expressive element, contrasting modern sans-serif body text with large, delicate serif headlines that command attention. The color palette is minimal, built around a warm, earthy brown and soft, desaturated neutrals, allowing the content to breathe and stand out. Components are subtly delineated, relying on light borders and ample negative space rather than heavy fills or shadows.

### Do's

- Use Canvas Parchment (#e6e0d9) as the primary page background for most sections.
- Employ GrandSlang-Roman at weight 100 for all critical, large-scale headlines, setting it in Kinetic Brown (#5d3a19).
- Utilize neue-haas-grotesk-display for all body text, links, and product titles, defaulting to weight 400 and Kinetic Brown (#5d3a19).
- Define interactive elements like links and buttons with a subtle Kinetic Brown (#5d3a19) border, avoiding heavy fills.
- Maintain generous vertical spacing (115px) between major content sections to create a calm and unburdened layout.
- Apply a base unit of 6px for deriving minor spacing values, such as the 5px left padding on text blocks.
- Introduce Stone Mist (#b7b3be) as a background for alternating sections to provide gentle visual rhythm and hierarchy.

### Don'ts

- Avoid using bold or heavy weights for headline typography; the brand relies on ultra-light serene weights for impact.
- Do not use highly saturated colors; the palette is intentionally muted and earthy.
- Refrain from applying strong shadows or excessive elevation to components; rely on subtle background shifts and fine borders for distinction.
- Do not use small, dense text blocks; prioritize readability and a feeling of spaciousness.
- Avoid decorative gradients or complex overlays; the design emphasizes clean surfaces and natural textures.
- Do not deviate from the two primary font families; they are central to the brand's typographic identity.
- Do not introduce strong accent colors beyond Kinetic Brown; color should be used sparingly as punctuation, not decoration.

### Layout

The page maintains a centered, contained layout with no explicit pageMaxWidth, implying content adapts dynamically or has inherent maximums. The hero section features a large, expressive headline centrally aligned, framed against a soft background. Sections below alternate between Canvas Parchment (#e6e0d9) and Stone Mist (#b7b3be) backgrounds, creating a subtle vertical rhythm. Content often appears as single-column stacks or simple product listings. Navigation is implied as minimal, with content driving the user experience.

### Imagery

The site uses product photography featuring kinetic sculptures in clean, bright, and often minimalist settings. The objects themselves are the focus, often presented against neutral backgrounds (like Canvas Parchment or light gray walls) to highlight their form and movement. Imagery is generally contained within sections, not full-bleed, and appears integrated with the clean UI. Icons are simple, likely monolinear (implied by the lack of specific icon data, but fitting the minimalist aesthetic).
