---
version: alpha
name: Stocketa
description: Stocketa presents a focused financial interface with a light, almost ethereal feel. Its design language is dominated by soft, rounded forms and transparent components, creating a sense of lightness and openness. Color is used sparingly, primarily for functional accents and a subtle brand gradient, letting the content breathe. Typography is compact and precise, maintaining clarity within dense information displays, while nuanced shadows and inset effects give components a sophisticated, layered depth without heaviness.
colors:
  canvas: "#e0dde2"
  ash: "#f0f0f0"
  graphite: "#000000"
  stone-gray: "#abbdcf"
  slate: "#9aa1b2"
  cloud-mist: "#a5afcb"
  blue-violet: "#5b638c"
  luminescent-violet: "#995bb9"
  midnight-indigo-outline: "#3a4766"
  highlight-gradient: "#60eb8c"
  faint-blue-overlay: "#84a1d0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.21px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.26px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.25
    letterSpacing: -0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.2
    letterSpacing: -0.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.15
    letterSpacing: -0.85px
  display:
    fontFamily: "system-ui"
    fontSize: 98px
    lineHeight: 1
    letterSpacing: -1.57px
spacing:
  cardRadius: 18px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 40px
components:
  ghost-action-button:
    role: Secondary call to action or navigation link.
  soft-card:
    role: Container for content, elevated slightly from the background.
  feature-list-item:
    role: Padded container for individual features or information blocks.
  content-card-no-shadow:
    role: Simple, flat content area on the page background.
---

## Overview

**North Star:** Soft-edged transparency on cloud-white

Stocketa presents a focused financial interface with a light, almost ethereal feel. Its design language is dominated by soft, rounded forms and transparent components, creating a sense of lightness and openness. Color is used sparingly, primarily for functional accents and a subtle brand gradient, letting the content breathe. Typography is compact and precise, maintaining clarity within dense information displays, while nuanced shadows and inset effects give components a sophisticated, layered depth without heaviness.

### Do's

- Use Canvas (#e0dde2) for primary backgrounds to maintain the light and airy theme.
- Apply a 100px border radius to all buttons and tags to create a consistent, soft, 'pill' shape.
- For primary headings, use Luminescent Violet (#995bb9) with averta standard weight 800 at appropriate scale sizes.
- Employ the Soft Card shadow (rgba(97, 110, 124, 0.114) 0px 4px 15px 0px with insets) for all elevated containers to achieve delicate depth.
- Ensure letter-spacing is applied precisely from the Typography tokens, especially for larger text, to maintain the sophisticated, compact feel (e.g., -1.57px at 98px).
- Separate sections with a `sectionGap` of 40px to provide comfortable visual breaks.

### Don'ts

- Avoid heavy drop shadows or opaque backgrounds that would counteract the light and transparent aesthetic.
- Do not use saturated colors for large UI areas; chromatic colors are reserved for accents and small functional elements.
- Do not deviate from the averta standard font family or its specified weights and letter-spacing for UI text.
- Avoid sharp corners; all UI components should feature rounded corners, preferably 18px or 22px defaults, or 100px for pill shapes.
- Do not introduce new border colors for interactive elements; use Midnight Indigo Outline (#3a4766) for ghost action borders.
- Do not overuse bold weights; reserve averta standard 800 primarily for main headings.

### Layout

The page primarily uses a max-width contained layout, centered on a light canvas. The hero section features a prominent, large headline in the Brand Gradient area, positioned centrally on the left, juxtaposed with a product showcase on the right. Subsequent sections follow a consistent vertical rhythm with minimal content density, using comfortable spacing. Content is largely presented as centered stacks of text with occasional feature lists, each item often accompanied by an icon. There's a subtle grid implied by the arrangement of features, but without hard lines. Navigation appears to be a minimal top bar, suggesting an application-focused approach.

### Imagery

The site uses a blend of abstract 3D elements and realistic product screenshots. Product screenshots are cleanly displayed within device frames, demonstrating functionality in a direct, uncluttered manner. Abstract 3D elements, characterized by soft, rounded, light gray forms, mimic organic shapes like pebbles or softly worn artifacts. These are used decoratively in the background, interacting with subtle light and shadow to create a sense of depth and modernity. Icons are outlined, featuring smooth, continuous strokes and are typically monochromatic or highlighted with Luminescent Violet. Visuals play a subtle, atmospheric role rather than a dominant, content-heavy one.
