---
version: alpha
name: LaunchDarkly
description: LaunchDarkly employs a dark, almost charcoal canvas paired with crisp white text to evoke a serious, technical atmosphere. Accents of vivid violet and electric blue cut through the darkness, signaling interactive elements and key information. Surfaces are softly rounded and slightly elevated, creating a layered, dimensional feel rather than a flat interface. Typography is direct and precise, favoring confident body text over overly decorative headlines, establishing authority through clarity.
colors:
  carbon-black: "#191919"
  graphite: "#414042"
  deep-space-gray: "#2c2c2c"
  mercury-white: "#ffffff"
  stardust-gray: "#f8f8f2"
  cadet-gray: "#a7a9ac"
  silver-mist: "#d1d3d4"
  input-gray: "#58595b"
  launch-violet: "#7084ff"
  orbital-blue: "#405bff"
  electric-cyan: "#61d6f5"
  ocean-blue: "#0073e6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 66px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 85px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 125px
    lineHeight: 1.3
spacing:
  cardRadius: 30px
  buttonRadius: 30px
  elementGap: 16px
  sectionGap: 32px
components:
  navigation-link:
    role: Top navigation items with ghost styling
  primary-action-button:
    role: Calls to action with filled background
  outlined-action-button:
    role: Secondary action buttons with a border
  toggle-button:
    role: Segmented control option
  feature-card:
    role: Container for feature descriptions or callouts
  input-field:
    role: User input area
---

## Overview

**North Star:** Midnight Terminal, Violet Haze

LaunchDarkly employs a dark, almost charcoal canvas paired with crisp white text to evoke a serious, technical atmosphere. Accents of vivid violet and electric blue cut through the darkness, signaling interactive elements and key information. Surfaces are softly rounded and slightly elevated, creating a layered, dimensional feel rather than a flat interface. Typography is direct and precise, favoring confident body text over overly decorative headlines, establishing authority through clarity.

### Do's

- Prioritize 'Mercury White' (#ffffff) for all main headings and body text on dark backgrounds to ensure legibility.
- Use 'Launch Violet' (#7084ff) as the primary accent for interactive elements like links and outlined buttons.
- Apply a 30px border-radius to cards and primary action buttons, and 60px to ghost/outlined buttons for a consistent rounded aesthetic.
- Maintain a clear visual hierarchy using 'Graphite' (#414042) for page backgrounds and 'Carbon Black' (#191919) for card/component surfaces.
- Structure content with 16px element gaps and 32px section gaps to provide comfortable density and readability.
- Employ the `monoFont` family for all code snippets and technical examples to differentiate them visually.
- Apply the `rgba(0, 0, 0, 0.45) 0px 4px 20px 0px` shadow only to the main navigation for subtle elevation against the dark background.

### Don'ts

- Avoid using highly saturated colors for large background areas; reserve chromatic colors for small accent details.
- Do not introduce new border radii beyond 4px, 10px, 30px, 40px, or 60px.
- Never use the `headingFont1` for body text or sub-headings; reserve it strictly for monumental hero headlines.
- Refrain from using hard, sharp corners; all UI interactives and containers should use specified border radii.
- Do not deviate from the specified 'Graphite' (#414042) or 'Carbon Black' (#191919) as primary dark backgrounds.
- Avoid multiple drop shadows on elements; elevation signals should be subtle and singular.
- Do not use generic system fonts when `bodyFont` or `monoFont` are available and semantically appropriate.

### Layout

The page maintains a centered, max-width layout of 1188px, with a full-bleed dark hero area that establishes the brand tone. Sections are vertically stacked with consistent 32px gaps. Content often alternates between left-aligned text and right-aligned visuals (or vice-versa) in a two-column arrangement. Feature lists are presented with clear checkmarks and subtle card containers. The overall density is comfortable, ensuring information is digestible without feeling sparse, and the fixed top navigation maintains context.

### Imagery

This system primarily uses iconography and UI elements rather than large photographic or illustrative imagery. When present, images like product screenshots are contained within cards with rounded corners. Small, functional icons are typically monochrome or leverage the 'Launch Violet' accent. There is a strong emphasis on clean, legible UI over decorative visuals, with gradients used as a subtle background treatment rather than a primary visual element.
