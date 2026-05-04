---
version: alpha
name: Folkert Gorter
description: Folkert Gorter employs a stark, almost brutalist approach, reminiscent of early web interfaces or terminal UIs. The design emphasizes content over adornment, featuring a high-contrast achromatic palette with text-heavy layouts. Typography is functional and monospace-leaning, creating a spartan, technical feel. Minimalist borders and an absence of shadows highlight a flat-design ethos, where visual cues are direct and unembellished.
colors:
  canvas-yellow: "#ffff00"
  ink-black: "#000000"
  graphite: "#404040"
  ash-gray: "#999999"
  link-blue: "#0064E1"
spacing:
  elementGap: 6px
  sectionGap: 45px
components:
  content-card:
    role: Information container, project listing block
  navigational-link-list:
    role: Primary navigation and project indexing
  section-heading:
    role: Categorization of content groups
  project-metadata-text:
    role: Supplemental information or descriptions
---

## Overview

**North Star:** Terminal black-on-white grid

Folkert Gorter employs a stark, almost brutalist approach, reminiscent of early web interfaces or terminal UIs. The design emphasizes content over adornment, featuring a high-contrast achromatic palette with text-heavy layouts. Typography is functional and monospace-leaning, creating a spartan, technical feel. Minimalist borders and an absence of shadows highlight a flat-design ethos, where visual cues are direct and unembellished.

### Do's

- Use 'Canvas Yellow' #ffff00 as the foundational background color for all page sections.
- Apply 'Ink Black' #000000 for primary text, structural borders, and the most prominent interactive states.
- Utilize 'Monument Grotesk Mono Variable' at 13px/1.30 line-height for all lists and core navigation items.
- Employ a sparse border radius, with a default of 12.96px for defining card-like containers, maintaining a rectilinear, functional aesthetic.
- Maintain high contrast (minimum 9.7:1) between text ('Ink Black' or 'Graphite') and 'Canvas Yellow' backgrounds.
- Use 26px for vertical and horizontal padding around distinct content blocks and inside card components.
- Differentiate clickable links and hover states with 'Link Blue' #0064E1 where color is permitted to break the achromatic palette.

### Don'ts

- Avoid using shadows or complex elevation; the design system relies on flat surfaces and high-contrast borders for separation.
- Do not introduce gradients; the system exclusively uses solid colors.
- Refrain from using decorative imagery or photography; the visual language is text-dominant and utilitarian.
- Do not vary font families beyond 'Monument Grotesk Mono Variable' and '-apple-system' for text content.
- Avoid using padding values other than 6px, 13px, 26px, 39px, 45px, 65px; consistency is built on these foundational units.
- Do not use color for emotional emphasis (e.g., green for success, red for error) unless explicitly defined; color is for brand and interaction only.
- Avoid large, editorial headlines; the system prefers compact, functional text sizes across the board.

### Layout

The page structure is full-bleed, adapting to the viewport width without a maximum content width, lending an expansive feel. The hero section often presents a centered, oversized, rotating text element over the 'Canvas Yellow' background. Content sections generally follow a vertical rhythm with distinct blocks of information using thin borders as dividers. Navigation appears as simple text lists horizontally or vertically. The overall density is spacious, with ample padding separating content elements.

### Imagery

Minimal imagery is present; the design prioritizes plain UI elements. When images are used, as seen in the project preview section, they appear as small, unstylized rectangular thumbnails. Iconography is extremely sparse, with a single instance of a classic comic character illustration used decoratively, not integrally. The system is text-dominant with visuals serving secondary, illustrative roles within content blocks rather than being primary drivers of engagement.
