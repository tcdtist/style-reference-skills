---
version: alpha
name: Letterboxd
description: Letterboxd employs a film-noir inspired aesthetic, using a deep, nearly monochromatic dark mode to provide a cinematic backdrop for film content. The visual hierarchy is built on subtle color shifts and varied text weights rather than strong contrast. A single vivid green accent is reserved for interactive elements, creating clear focal points against the muted palette, reminiscent of a discreetly lit movie theater screen where only key information is highlighted.
colors:
  midnight-ink: "#14181c"
  charcoal-canvas: "#202830"
  shadow-gray: "#2c3440"
  ghostly-grey: "#586370"
  steel-text: "#667788"
  cloudburst-text: "#778899"
  mist-text: "#8899aa"
  ash-text: "#99aabb"
  porcelain-text: "#ddeeff"
  whiteout: "#ffffff"
  deep-ocean: "#445566"
  electric-green: "#00ac1c"
  vivid-green: "#00e054"
  status-green: "#00c030"
  star-dust: "#c8d4e0"
  golden-star: "#ff9933"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.83px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: 0.083px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.075px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.33
spacing:
  buttonRadius: 3px
  elementGap: 4px
  sectionGap: 48px
components:
  primary-cta-button-group:
    role: 
  film-card-row:
    role: 
  security-check-modal:
    role: 
  primary-action-button:
    role: Main call to action
  secondary-ghost-button:
    role: Alternative actions or secondary CTA
  standard-button:
    role: General interactive buttons
  pill-button:
    role: Filter tags, minor actions within lists
  film-data-card:
    role: Displaying film posters and metadata (e.g., in listings like 'Just Reviewed...')
  search-input-field:
    role: Site-wide search functionality
  status-badge:
    role: Indicating specific states or categories
  modal-overlay:
    role: For displaying critical alerts or secondary content
---

## Overview

**North Star:** Midnight Theater Screen

Letterboxd employs a film-noir inspired aesthetic, using a deep, nearly monochromatic dark mode to provide a cinematic backdrop for film content. The visual hierarchy is built on subtle color shifts and varied text weights rather than strong contrast. A single vivid green accent is reserved for interactive elements, creating clear focal points against the muted palette, reminiscent of a discreetly lit movie theater screen where only key information is highlighted.

### Do's

- Use Midnight Ink (#14181c) for main page backgrounds to maintain a dark, immersive theme.
- Prioritize GraphikWeb for all UI text and body copy using weights 300, 400, or 700 with precise letter-spacing adjustments.
- Reserve TiemposHeadlineWeb 700 at 36px for dominant page titles to establish a classic, editorial feel.
- Apply Electric Green (#00ac1c) exclusively to primary call-to-action buttons to ensure maximum emphasis and clarity for interactions.
- Maintain a tight corner radius of 3px for most interactive elements, reserving 12-15px for distinct pill shapes on inputs and filter tags.
- Structure content with minimal card padding (0px) and transparent backgrounds, allowing image content to define visual blocks.
- Utilize a shallow drop shadow rgba(0,0,0,0.25) 0px 1px 5px 0px, rgba(0,0,0,0.35) 0px 1px 10px 0px for elevated panels/modals, differentiating them from flat surfaces without harshness.

### Don'ts

- Avoid using highly saturated colors for anything other than specific interactive elements or brand accents; maintain the subdued neutral palette.
- Do not introduce strong outlines or heavy box shadows on cards; the design relies on subtle background shifts for hierarchy.
- Do not deviate from GraphikWeb for UI elements or TiemposHeadlineWeb for main titles; these choices are core to the brand's typographic identity.
- Refrain from using arbitrary large padding on cards; their structural presence is derived from their content, not artificial spacing.
- Do not soften edges unnecessarily; the default 3px radius is a deliberate choice for a balanced, contemporary look, with round pill shapes reserved for specific interactive components.
- Do not use black text on the Midnight Ink background; high-contrast white or light gray text is essential for readability.

### Layout

The layout primarily uses a full-bleed dark background (Midnight Ink) for the entire page, creating an immersive container. The hero section features a large, cinematic full-width film still with centered, prominent white typography for headlines and a single, vivid green CTA button at its base. Content is largely arranged in distinct vertical sections, often employing multi-column grids (e.g., 3-column for film posters, 2-column for text+featurettes). Sections maintain consistent vertical spacing. The navigation is a sticky top bar, minimally styled with gray text and a subtle search input, allowing the content below to dominate. Overall, the density is comfortable with ample breathing room, balancing large visual elements with concise text blocks.

### Imagery

This site predominantly uses film posters and still images from movies, treated as primary content. Images are typically full-bleed within their content containers, with sharp, unmasked edges. There is no custom photography or illustration style. Product screenshots are rendered within device mockups when showcasing mobile features. Icons are filled and monochromatic, generally in the muted neutral palette or occasionally in the accent green, serving purely functional roles like navigation or status indicators. Image heavy, where visual content from films takes precedence in overall visual space.
