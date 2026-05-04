---
version: alpha
name: David Reid
description: David Reid's site presents a stark, minimalist portfolio style. A monochromatic palette with deep charcoal text on an off-white canvas foregrounds content, reflecting a deliberate restraint. Visual hierarchy is established through a spacious, comfortable layout and a subtle interplay of fine lines and a single distinct radius. The design avoids illustrative elements, focusing instead on stark typography and photographic compositions, creating an atmosphere of quiet authority and directness.
colors:
  canvas-white: "#ffffff"
  lead-text: "#222222"
  muted-ash: "#999999"
spacing:
  elementGap: 20px
  sectionGap: 200px
components:
  image-card-with-caption:
    role: Displays photographic work with associated descriptive text.
  ghost-link-button:
    role: Navigational elements and external links.
  secondary-text-section:
    role: Provides context and description for projects or personal information.
  project-headline:
    role: Section titles for different projects or categories.
---

## Overview

**North Star:** Photographic gallery on parchment

David Reid's site presents a stark, minimalist portfolio style. A monochromatic palette with deep charcoal text on an off-white canvas foregrounds content, reflecting a deliberate restraint. Visual hierarchy is established through a spacious, comfortable layout and a subtle interplay of fine lines and a single distinct radius. The design avoids illustrative elements, focusing instead on stark typography and photographic compositions, creating an atmosphere of quiet authority and directness.

### Do's

- Prioritize a monochromatic palette of Canvas White (#ffffff), Lead Text (#222222), and Muted Ash (#999999) to maintain a restrained aesthetic.
- Use `Modern Era` weight 400 for primary text and links, and `system-ui` weight 100 or `Noto Sans TC` weight 100 for secondary, lighter text.
- Apply a consistent `6px` border-radius to all images to softly contain visual elements.
- Implement `20px` as the standard `elementGap` for horizontal and vertical spacing between distinct UI elements, and `200px` for `sectionGap`.
- Design interactive elements as 'ghost' components, relying on Lead Text (#222222) for borders and text, rather than filled backgrounds.
- Maintain a comfortable density with `10px` and `20px` margins for internal text blocks and `80px` for vertical content separation.

### Don'ts

- Avoid introducing additional chromatic colors beyond the established monochromatic scheme.
- Do not use heavy shadows or gradients, as the design uses minimal elevation and a flat aesthetic.
- Refrain from using strong, bold typography for headlines; lean on `system-ui` weight 100 or `Italian Garamond` weight 400 for subtle impact.
- Do not deviate from the `6px` image border-radius; all images must conform to this softening treatment.
- Avoid dense, information-packed sections; ensure generous `elementGap` and `sectionGap` for comfortable reading.
- Do not use conventional filled buttons; all calls to action should be ghost links with subtle borders or simple text.

### Layout

The page maintains a full-bleed layout for large visual sections, allowing photography to dominate the viewport, but content frequently snaps to a max-width within those sections. The hero consists of simple descriptive text followed by a large photographic grid. Content arrangement appears as two-column grids for project showcases, often alternating large imagery with explanatory text sections. Vertical rhythm is established by section gaps up to 200px, which creates significant breathing room between major content blocks. Navigation is minimal, limited to discreet text links in the header.

### Imagery

The site primarily uses high-quality photography and product screenshots. Photography is typically full-bleed or large-format, often featuring single subjects in clear, well-lit environments. Product screenshots are typically clean, showcasing digital interfaces with a focus on functionality. Images consistently use a 6px border-radius for a subtle softening effect across all visual media. Imagery serves to showcase work and provide content rather than being purely decorative, with a high density relative to text in project sections.
