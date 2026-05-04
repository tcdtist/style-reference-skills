---
version: alpha
name: Tofu Collective
description: Tofu Collective employs a stark, high-contrast, black and white aesthetic that evokes a gallery's minimalist elegance. The visual system foregrounds content through bold typography and generous negative space, with a deliberate absence of color and soft components. Layouts are strictly structured with strong horizontal and vertical lines maintaining a rigid grid. The overall impression is one of clean, intellectual presentation designed to frame artistic or niche content without visual distraction.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  muted-ash: "#282828"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.44
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.97
    letterSpacing: -0.025px
spacing:
  elementGap: 1px
  sectionGap: 200px
components:
  basic-card:
    role: Content container
  primary-heading:
    role: Main page titles
  navigation-link:
    role: Top-level navigation items
---

## Overview

**North Star:** Gallery Canvas, Monochromatic Punctuation

Tofu Collective employs a stark, high-contrast, black and white aesthetic that evokes a gallery's minimalist elegance. The visual system foregrounds content through bold typography and generous negative space, with a deliberate absence of color and soft components. Layouts are strictly structured with strong horizontal and vertical lines maintaining a rigid grid. The overall impression is one of clean, intellectual presentation designed to frame artistic or niche content without visual distraction.

### Do's

- Use Ink Black (#000000) for all primary text and critical UI elements like borders to maintain high contrast.
- Employ Canvas White (#ffffff) as the dominant background color for all page sections and content cards.
- Apply 'wtqc' font at 90px with -0.025em letter spacing for main headings to achieve the signature bold, condensed look.
- Ensure horizontal and vertical lines (borders, dividers) use Ink Black (#000000) at 1px thickness.
- Maintain 0px border-radius for surfaces and active components to preserve the stark, angular aesthetic, with the exception of specific, highly decorative elements that may use 20px radius.
- Structure primary page sections with a 200px vertical gap, creating clear visual separation and breathing room.
- Utilize a split-screen or grid-based layout for content areas, balancing large typographic elements with visual imagery.

### Don'ts

- Avoid introducing any colors outside of the defined Ink Black, Muted Ash, and Canvas White palette for UI elements.
- Do not use soft shadows or gradients on any interactive components or surfaces; elevation should be purely through borders and contrast.
- Do not use generic system fonts for headings or navigation; 'wtqc' is essential for brand identity.
- Avoid excessive padding within components; this system is compact and relies on minimal spacing between elements (e.g., 0px card padding, 1px element gap).
- Do not use rounded corners universally; most elements are sharp-edged, with 20px radius reserved for specific non-UI elements if needed.
- Do not break away from the dominant grid structure with asymmetrical or overlapping elements unless it's for photographic content.

### Layout

The page adheres to a maximalist layout with no explicit global max-width, allowing content to bleed to the edges. The hero section is characterized by a stark left-aligned, oversized typographic headline contrasting with a large, full-bleed aesthetic photograph on the right. Vertical rhythm is established through explicit section gaps of 200px. Content is often divided into two primary columns, featuring large text blocks on one side and an accompanying photograph or strong visual on the other. Navigation is a simple, fixed header with text links, divided by thin Ink Black vertical lines.

### Imagery

This site features curated photography, often abstract or artistic, presented without framing or heavy manipulation. Photography occupies significant visual real estate, frequently appearing as large, full-bleed backgrounds or occupying one half of a split layout. Images are typically vivid and raw, showcasing expressive subjects or scenes in high detail, juxtaposed against the minimalist UI to create strong visual tension. There are no illustrations, product screenshots, or 3D renders. Icons are minimal, likely text-based or simple geometric forms for navigation.
