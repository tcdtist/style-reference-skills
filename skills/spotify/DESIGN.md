---
version: alpha
name: Spotify
description: This design system conjures a dark, immersive command center for digital media consumption. A deep ebony canvas creates a sense of gravitas, while subtle tonal variations in surfaces define hierarchical layers without relying on heavy shadows. Carefully chosen muted and vivid chromatic accents punctuate content, drawing attention to media rather than interface chrome. Rounded corners for interactive elements provide a soft contrast to the otherwise sharp, precise lines of the content blocks. Typography prioritizing readability and clear information hierarchy completes a focused and understated aesthetic.
colors:
  ebony-canvas: "#000000"
  iron-accent: "#121212"
  charcoal-surface: "#1f1f1f"
  graphite-text: "#b3b3b3"
  pure-white-text: "#ffffff"
  muted-grey: "#767676"
  spotify-green: "#1ed760"
  signal-purple: "#6f74a4"
  deep-space-blue: "#1078a8"
  sunset-red: "#dc392b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.33
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.33
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
spacing:
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 48px
components:
  filled-button:
    role: Primary action
  ghost-button:
    role: Secondary action
  high-visibility-ghost-button:
    role: Prominent secondary action
  media-content-card:
    role: Content display
  container-card:
    role: Grouped content
  search-input-header:
    role: Global input field
  promotional-banner:
    role: System message banner
  side-navigation-container:
    role: Persistent navigation
---

## Overview

**North Star:** Ebony Canvas, Spotlight Content

This design system conjures a dark, immersive command center for digital media consumption. A deep ebony canvas creates a sense of gravitas, while subtle tonal variations in surfaces define hierarchical layers without relying on heavy shadows. Carefully chosen muted and vivid chromatic accents punctuate content, drawing attention to media rather than interface chrome. Rounded corners for interactive elements provide a soft contrast to the otherwise sharp, precise lines of the content blocks. Typography prioritizing readability and clear information hierarchy completes a focused and understated aesthetic.

### Do's

- Prioritize Ebony Canvas (#000000) for large background areas and Iron Accent (#121212) for content surfaces to establish depth.
- Use Pure White Text (#ffffff) for all main headings and prominent interactive text to ensure optimal contrast.
- Apply Iron Accent (#121212) for elevated card backgrounds and Charcoal Surface (#1f1f1f) for interactive fills like button backgrounds or active states.
- Accurately use Spotify Green (#1ed760) only for active indicators and brand highlights, like the Spotify logo or play controls.
- Employ 9999px radius for all interactive buttons and pill-shaped elements to maintain a consistent interactive affordance.
- Adhere to the 6px border radius for content cards and containers to create a soft, contained visual.
- Apply 12px vertical and horizontal padding consistently to interactive buttons and card content areas.

### Don'ts

- Do not use saturated colors from media content cards (e.g., #c80808, #508162) for UI elements; they are reserved for mood setting within content.
- Avoid using excessive box-shadows; rely on surface color changes from Ebony Canvas to Iron Accent to Charcoal Surface for visual hierarchy.
- Do not break the 9999px radius for buttons, as it is a core identifier of interactive elements.
- Restrict Pure White Text (#ffffff) usage to prominent text where high contrast is essential, otherwise use Graphite Text (#b3b3b3) for secondary content.
- Do not introduce new color gradients; adhere only to the Signal Purple gradient for specific promotional banners.
- Avoid using a page-level padding; content should align to the defined max-width of 1085px centrally.
- Do not introduce custom font styles or weights outside of SpotifyMixUI and SpotifyMixUITitle. Maintain 'normal' letter spacing for all text.

### Layout

The page structure is largely contained within a max-width of 1085px, featuring a persistent left sidebar navigation and a sticky top header. The main content area uses a flexible grid system, alternating between single-column stacks for 'Your Library' prompts and multi-column grids for content like 'Trending songs' and 'Popular artists'. Sections have consistent vertical spacing. The overall density is compact, maximizing content visibility without feeling cramped. The hero section is integrated within the main content area, not a distinct full-bleed element, with primary content appearing immediately within the defined max-width block.

### Imagery

This design primarily uses media album art and artist photography as its visual content. Album covers are presented within contained, square cards with a 6px border-radius, while artist portraits are typically circular. Both styles are rendered as content, not integrated into the UI. Photography of artists tends to be product-focused, showcasing the artist directly. Icons are minimal, monochromatic, and outlined, primarily serving functional navigation and interaction. The system is text-dominant, with imagery acting as visual anchors and content preview rather than decorative elements, creating a focused, content-first experience.
