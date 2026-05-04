---
version: alpha
name: Foundry
description: Basement Foundry evokes a clandestine digital workshop feel, with a stark dark theme serving as a canvas for experimental typography. Its visual identity relies on strong contrasts, minimal adornment, and precise geometric forms, accented by a single vivid orange that acts as both highlight and interactive cue. The system prioritizes clarity and directness, using monospace and utilitarian sans-serif fonts until striking display typefaces take center stage as product showcases. Components are mostly outlined or text-based, maintaining a lightweight, almost 'ghostly' presence against the deep background.
colors:
  midnight-ink: "#121212"
  ghostly-gray: "#efefef"
  wireframe-white: "#e2e8f0"
  shadow-border: "#3a3a3a"
  muted-text: "#747474"
  basement-orange: "#ff4d00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.14
    letterSpacing: -0.2px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.95
    letterSpacing: 1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 164px
    lineHeight: 1.1
    letterSpacing: 1.64px
spacing:
  cardRadius: 8px
  elementGap: 8px
  sectionGap: 90px
components:
  text-link:
    role: Navigation and informational links within body text.
  typeface-navigation-button-inactive:
    role: Navigation item for browsing typeface categories.
  typeface-navigation-button-active:
    role: Currently selected typeface category.
  buy-now-button-outlined:
    role: Primary action for purchasing typefaces.
  mode-toggle-button:
    role: Interaction for switching display modes within a typeface showcase.
  type-specimen-card:
    role: Container for individual typeface previews.
---

## Overview

**North Star:** Typeface Dungeon, Glowing Console

Basement Foundry evokes a clandestine digital workshop feel, with a stark dark theme serving as a canvas for experimental typography. Its visual identity relies on strong contrasts, minimal adornment, and precise geometric forms, accented by a single vivid orange that acts as both highlight and interactive cue. The system prioritizes clarity and directness, using monospace and utilitarian sans-serif fonts until striking display typefaces take center stage as product showcases. Components are mostly outlined or text-based, maintaining a lightweight, almost 'ghostly' presence against the deep background.

### Do's

- Prioritize Midnight Ink (#121212) as the base background for most surfaces, embracing the dark theme.
- Use Ghostly Gray (#efefef) for all primary body text and interactive states unless otherwise specified.
- Apply Basement Orange (#ff4d00) sparingly, reserving it for primary interactive elements, active states, and brand highlights.
- Employ Wireframe White (#e2e8f0) for all primary borders, separators, and subtle outlines on neutral components.
- Maintain a compact density for UI elements, using an 8px element gap as a primary spacing unit.
- Ensure JetBrains Mono is the default typeface for all functional UI text where a technical, precise feel is desired.
- Apply 50% border-radius to all small interactive elements like 'mode' buttons and 'buy now' buttons to create distinct visual cues.

### Don'ts

- Avoid using multiple chromatic colors; Basement Orange (#ff4d00) is the sole accent.
- Do not introduce heavy shadows or gradients; flat surfaces and crisp borders define the aesthetic.
- Resist using highly decorative or illustrative imagery that conflicts with the stark, type-focused approach.
- Do not deviate from the JetBrains Mono and Inter types for the main interface, unless introducing a distinct display font for showcased content.
- Avoid large, rounded containers; stick to the subtle 2.8px default border radius for most elements and 8px for cards.
- Do not use Ghostly Gray (#efefef) as a background for primary actions; it is a text/border color.
- Introduce complex animations; stick to simple transitions on color and border-color for interactive elements.

### Layout

The page adheres to a left-aligned, maximal width layout for its primary content area, but with a narrow, fixed-width left sidebar section for navigation and legal links. The hero section is characterized by a full-bleed, dark background integrating dynamic, large-scale type specimen animations. Subsequent sections flow vertically, often featuring full-width dark canvases occupied by prominent typeface showcases, implicitly establishing a consistent vertical rhythm. Content within these sections tends to be centrally balanced or slightly left-biased, with minimal and compact informational text supporting the visual impact of the type. The navigation remains sticky at the top, a horizontal bar against the deep theme, reinforcing the 'single pane of glass' experience.

### Imagery

The site uses minimal explicit imagery beyond typography itself. The primary 'visuals' are dynamic, large-scale renderings of the typefaces, often with textural or glitch-art effects, presented against the dark background. When present, small icons are typically outlined and monochromatic (Ghostly Gray #efefef), maintaining a technical, UI-focused aesthetic. Product screenshots are essentially large typographic specimens, showcasing the fonts without extraneous context.
