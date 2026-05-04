---
version: alpha
name: NaN
description: NaN employs an experimental and vibrant aesthetic, channeling a 'digital paper' feel through a primary mint green canvas. Typography is the central visual element, utilizing custom typefaces with expressive weights and massive display sizes. Interaction is marked by sharp contrasts between dark charcoal and the vivid mint, with subtle holographic gradients adding a touch of digital luminescence.
colors:
  screen-mint: "#b7ffb4"
  code-green: "#00ff00"
  chromatic-blue: "#0000ff"
  midnight-graphite: "#262626"
  absolute-black: "#000000"
  paper-white: "#ffffff"
  mercury-gray: "#999999"
  light-steel: "#efefef"
  input-gray: "#767676"
  hologram-gradient: "#ffb005"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.075px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.075px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 216px
    lineHeight: 1
spacing:
  elementGap: 5px
  sectionGap: 40px
components:
  primary-navigation-link:
    role: Navigational element with underline on hover
  primary-button-filled:
    role: Call to action button for primary interactions
  primary-button-filled-left-rounded:
    role: Used for sequenced or grouped actions, rounded on the left
  ghost-button:
    role: Secondary action or subtle navigation
  hologram-action-button:
    role: High-impact call to action, often for 'Discover More'
  font-showcase-card:
    role: Displays individual font variants or examples
  text-input-default:
    role: Standard form input field
  toggle-switch:
    role: Provides an on/off selection for options
---

## Overview

**North Star:** Digital Acid-Green Canvas: A hyper-digital screen, like a glowing terminal displaying custom fonts on a luminous green background.

NaN employs an experimental and vibrant aesthetic, channeling a 'digital paper' feel through a primary mint green canvas. Typography is the central visual element, utilizing custom typefaces with expressive weights and massive display sizes. Interaction is marked by sharp contrasts between dark charcoal and the vivid mint, with subtle holographic gradients adding a touch of digital luminescence.

### Do's

- Prioritize Screen Mint (#b7ffb4) as the dominant background color for most page sections, creating a luminous base.
- Use Midnight Graphite (#262626) for primary text and important borders to ensure high contrast against Screen Mint (#b7ffb4).
- Employ NaN Holo Mono at 14px weight 400 with 0.075em letter spacing for all body text and UI labels.
- Apply a Hologram Gradient to key 'Discover More' or 'Subscribe' actions, using rounded edges (29.4px) for a distinct interactive feel.
- Structure information using prominent, large-scale custom display typefaces like NaN ArchyONExtraBlack_PREVIEW for visual impact in showcasing fonts.
- Maintain minimal border radii (2px) on most interactive elements and cards, reserving larger radii (18px, 29.4px) for specific design accents.
- Use a default element gap of 5px for inline elements and tight groupings, building up to 40px for section separation.

### Don'ts

- Avoid using vibrant colors for large blocks of text; reserve them for accents, backgrounds, or specific UI elements.
- Do not introduce new typefaces; the system relies heavily on its custom NaN font family for brand identity.
- Refrain from using drop shadows or heavy elevation; the design system favors a flat, digital aesthetic with strong color contrasts.
- Do not use generic circular or heavily rounded buttons; specific, often asymmetrical, radii (e.g., 0px 2px 2px 0px) are characteristic of this design.
- Avoid breaking the high-contrast pairing of Screen Mint (#b7ffb4) and Midnight Graphite (#262626) for primary interactive elements.
- Do not use excessive visual flourishes or gradients beyond the defined Hologram Gradient; the system communicates through typography and bold color.
- Do not deviate from the compact density; generous negative space should be achieved through section gaps rather than element-level padding.
