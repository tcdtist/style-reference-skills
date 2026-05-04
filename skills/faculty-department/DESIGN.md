---
version: alpha
name: Faculty Department
description: Faculty Department establishes a refined editorial aesthetic with a warm, desaturated canvas and minimalist, text-focused layouts. The design emphasizes clear information hierarchy through understated typography and subtle visual separation, using fine hairline borders rather than heavy containers or shadows. The overall impression is one of calm restraint, allowing content to take precedence, supported by a muted background palette and precise typographic detailing.
colors:
  parchment: "#f2efe3"
  card-ivory: "#ffffff"
  text-black: "#000000"
  headline-ink: "#222222"
  muted-ash: "#6a6a6a"
  divider-clay: "#dad9cd"
  accent-blue-gray: "#abb8c3"
  header-linen: "#FCF9EE"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.31
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  navigation-link:
    role: Top navigation items and inline text links.
  story-item-header:
    role: Title for individual stories or entries.
  story-item-description:
    role: Descriptive text accompanying a story header.
  view-more-link:
    role: Call to action for expanding content.
  grid-item-card:
    role: Containers for image-less content previews in a grid layout.
---

## Overview

**North Star:** Warm parchment archive.

Faculty Department establishes a refined editorial aesthetic with a warm, desaturated canvas and minimalist, text-focused layouts. The design emphasizes clear information hierarchy through understated typography and subtle visual separation, using fine hairline borders rather than heavy containers or shadows. The overall impression is one of calm restraint, allowing content to take precedence, supported by a muted background palette and precise typographic detailing.

### Do's

- Prioritize the Parchment (#f2efe3) background as the primary canvas for most content sections.
- Use Text Black (#000000) minimally for primary text and significant headings to maintain contrast on the warm background.
- Employ thin 1px solid dividers in Text Black (#000000) to create separation between content blocks, especially for story lists.
- Maintain consistent vertical spacing of 48px between major sections to ensure ample whitespace.
- Apply 16px inner padding to all content blocks and card elements.
- Ensure all interactive text elements use Tiempos-Text, 16px, weight 400, color Text Black (#000000) and are underlined on hover to denote interactivity.
- Prefer the 0px border-radius for all elements, maintaining a sharp, structured aesthetic.

### Don'ts

- Avoid using bold or heavy font weights for headlines; use Tiempos-Headline at weight 400 exclusively for titles.
- Do not introduce strong accent colors; leverage the existing desaturated neutrals and subtle brand colors.
- Refrain from using drop shadows or complex elevation effects; visual hierarchy is established through typography, spacing, and subtle background shifts.
- Do not use highly saturated photography or complex illustrations; imagery should align with the muted and editorial aesthetic.
- Avoid tight, compact layouts; maintain comfortable spacing between elements and sections.
- Do not vary color for links unless it’s the default browser blue; all links should be Text Black (#000000) or Muted Ash (#6a6a6a).
- Do not use rounded corners on any UI elements. The design consistently employs sharp, 0px radii.

### Layout

The page adheres to a maximal-width fluid layout for its main content, with a centered implied column for text. The header is a sticky, full-width top bar. The hero section is characterized by a centered, multi-line headline and descriptive text, followed by an immediate transition into list-based content. Sections are clearly delineated by consistent vertical spacing (48px) and fine hairline borders for content grouping. The primary content presentation uses sequential, stacked information blocks, often with a prominent title, a number, and a descriptive subtitle. A three-column grid is used for 'Selected Stories' or similar feature listings, where each card acts as a contained content unit, prioritizing an image placeholder (though none are currently visible) and text.

### Imagery

The site predominantly uses minimalistic imagery, focusing on photography of objects or abstract concepts when visuals are present. Product images are typically presented in a contained, isolated manner without complex backgrounds or lifestyle context. There are no heavy illustrations or 3D renders. Icons are absent from active UI, contributing to the text-dominant, editorial aesthetic. When imagery is implied in content areas (like the grid cards), it is subtle, suggesting a placeholder for future content rather than a defined asset type.
