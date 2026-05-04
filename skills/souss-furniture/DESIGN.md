---
version: alpha
name: Souss Furniture
description: Souss Furniture embodies a minimalist, industrial aesthetic with a muted color palette serving as a stark backdrop for product forms. Typography is direct and unstyled, primarily focusing on conveying product names and essential navigation. The system emphasizes clear object presentation over decorative flair, with most visual weight coming from the products themselves and strong text contrasts. Layouts are spacious, allowing elements to breathe, reflecting a gallery-like presentation of individual pieces.
colors:
  canvas-grey: "#f2f2f2"
  matte-black: "#000000"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
spacing:
  elementGap: 20px
  sectionGap: 60px
components:
  product-title-link:
    role: Interactive text for product names
  header-navigation-link:
    role: Top-right navigation items
  logo-icon:
    role: Site identifier in the top-left
---

## Overview

**North Star:** industrial rawness, refined quiet: a cool grey canvas for stark matte black forms and unadorned typography.

Souss Furniture embodies a minimalist, industrial aesthetic with a muted color palette serving as a stark backdrop for product forms. Typography is direct and unstyled, primarily focusing on conveying product names and essential navigation. The system emphasizes clear object presentation over decorative flair, with most visual weight coming from the products themselves and strong text contrasts. Layouts are spacious, allowing elements to breathe, reflecting a gallery-like presentation of individual pieces.

### Do's

- Prioritize Canvas Grey (#f2f2f2) for backgrounds, providing a clean, cool, and neutral base for all content.
- Use Matte Black (#000000) exclusively for all text, icons, and interactive strokes to maintain stark contrast and visual consistency.
- Present typography unadorned; use acumin-pro (system-ui fallback) at weight 400 across all text roles.
- Maintain generous spacing with an element gap of 20px and section gaps of 60px to ensure visual calm and focus on individual items.
- Ensure interactive text elements, like product titles, are underlined in Matte Black (#000000) to clearly indicate their link status.
- Use a max content width of 1440px, centering all content to provide a focused viewing experience.

### Don'ts

- Avoid decorative elements, additional colors, or complex gradients that would detract from the industrial presentation.
- Do not introduce multiple font weights or styles that could disrupt the uniform and functional typographic system.
- Refrain from using strong shadows or heavy borders, as this would contradict the light, raw aesthetic.
- Do not clutter the layout; elements should appear spacious and largely isolated in their presentation.
- Avoid photographic imagery; instead, rely on isolated product renders or clean, symbolic icons.
- Do not use animation other than very subtle transitions if absolutely necessary; the design is static and focused.

### Layout

The page adheres to a max-width contained layout, centering content within a 1440px wide frame. The hero section is characterized by a centered, large-scale product image with minimal surrounding text, creating a strong focal point. Content is arranged predominantly in a single-column, stacked format, with product titles listed sequentially. The rhythm is open and spacious, with generous vertical spacing between text blocks and images, making each element feel distinct and important. Navigation is a minimalist top bar with links aligned to the top-right, while a simple logo resides in the top-left, reinforcing a gallery-like, un-cluttered presentation.

### Imagery

The site primarily features 3D product renders set against a plain, light background. These renders showcase the physical form of furniture pieces with realistic shadows but without environmental context or lifestyle photography. The focus is entirely on the object itself, treated as a sculptural form. Icons are simple, outlined, and monochromatic, like the hand icon in the header, serving a purely functional rather than decorative role. The imagery is content-specific, acting as a direct product showcase rather than atmospheric decoration.
