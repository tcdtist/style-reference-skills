---
version: alpha
name: OpenSea
description: OpenSea leverages a vibrant dark mode experience contrasting deep, cool grays with a brilliant, singular blue accent. The interface is characterized by highly structured layouts, subtle internal card borders, and ghost buttons, prioritizing content over heavy UI chrome. Typography is compact and precise, maintaining readability on dark surfaces, with a focus on displaying data and digital assets clearly. The overall aesthetic is one of a digital marketplace, emphasizing data density and functional clarity.
colors:
  midnight-ink: "#080809"
  deep-graphite: "#141415"
  slate-card: "#1b1d1f"
  steel-border: "#26272d"
  soft-stone: "#34353c"
  ghost-fill: "#3c3d40"
  white-canvas: "#ffffff"
  silver-whisper: "#acadae"
  electric-blue: "#83c3ff"
  success-green: "#47bb64"
  error-red: "#e24756"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 48px
components:
  ghost-button:
    role: Interactive elements for secondary actions or navigation.
  filled-neutral-button:
    role: Tertiary actions or category filters.
  white-text-button-ghost:
    role: Prominent ghost actions or tab activators.
  inset-border-card:
    role: Collection or asset display cards.
  shadowed-card:
    role: Elevated information or interactive cards.
  navigation-tab:
    role: Top-level navigation items or filters.
---

## Overview

**North Star:** Midnight data console

OpenSea leverages a vibrant dark mode experience contrasting deep, cool grays with a brilliant, singular blue accent. The interface is characterized by highly structured layouts, subtle internal card borders, and ghost buttons, prioritizing content over heavy UI chrome. Typography is compact and precise, maintaining readability on dark surfaces, with a focus on displaying data and digital assets clearly. The overall aesthetic is one of a digital marketplace, emphasizing data density and functional clarity.

### Do's

- Prioritize Midnight Ink (#080809) as the base background, shifting to Deep Graphite (#141415) for main interactive surfaces and Slate Card (#1b1d1f) for isolated content blocks.
- Use White Canvas (#ffffff) strictly for primary text, headings, and high-contrast UI elements to maximize readability on dark backgrounds.
- Apply Electric Blue (#83c3ff) as the sole accent color for interactive link text, active states, and focus indicators to create clear points of interaction.
- Employ the gtAmericaMono font family only for numerical data, cryptocurrency values, and technical readouts to maintain a consistent data display aesthetic.
- Structure layouts using a max-width of 1325px, with consistent 48px vertical section gaps to ensure a balanced, spacious content presentation.
- Utilize a default border radius of 4px for most interactive elements like buttons, and 8px for cards, to maintain a consistent soft edge treatment throughout the UI.
- Use `rgba(255, 255, 255, 0.08) 0px 0px 0px 1px inset` as the internal card border for primary content cards, avoiding external box shadows for these elements.

### Don'ts

- Do not introduce additional chromatic colors beyond Electric Blue, Success Green, and Error Red; maintain a largely monochromatic palette otherwise.
- Avoid heavy drop shadows or strong elevation effects for cards; instead, use subtle internal borders or minimal 1px 2px soft shadows if elevation is strictly necessary.
- Do not use generic system fonts; always specify gtAmerica or gtAmericaMono to preserve brand typography.
- Do not vary letter-spacing for standard text; keep it 'normal' unless specifically defined otherwise for display typography roles.
- Avoid large, impactful imagery beyond content display; images should be contained within card structures or relevant content areas rather than full bleeding or overpowering hero sections.
- Do not use `padding: 0` for any card variant without also defining minimum internal spacing for text and content, typically 12px or 16px.
- Avoid using White Canvas (#ffffff) for borders or backgrounds for ghost buttons, unless it is for an 'active' state, deferring to Steel Border (#26272d) for inactive/default elements.
