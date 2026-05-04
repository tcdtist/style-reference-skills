---
version: alpha
name: Maxima Therapy
description: This design system feels like a playful, vibrant activity center for the mind. A maximalist use of saturated primary and secondary colors, especially the 'Sunshine Yellow' background, instantly communicates an optimistic and engaging environment. Rounded shapes on cards and buttons, paired with a custom rounded display font, create an approachable, friendly aesthetic. The visual energy is high, reflecting a dynamic and supportive approach to therapy.
colors:
  midnight-ink: "#000000"
  paper-white: "#ffffff"
  light-linen: "#fff6ed"
  sunshine-yellow: "#fdcb40"
  ocean-blue: "#006cff"
  action-orange: "#fd4401"
  grass-green: "#00b351"
  bubblegum-pink: "#f780d4"
  teal-splash: "#04c6c5"
  pale-lemon: "#fff2b7"
  grape-punch: "#a864fd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.05
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 0.8
spacing:
  cardRadius: 23.81px
  buttonRadius: 47.62px
  elementGap: 4-19px
  sectionGap: 38px
components:
  hero-section-card-early-intervention:
    role: 
  program-age-badges-button-group:
    role: 
  slider-navigation-controls:
    role: 
  navigation-link:
    role: Primary navigation item
  primary-donate-button:
    role: Call-to-action button
  ghost-arrow-button:
    role: Navigation button for content sliders
  hero-section-card:
    role: Prominent information card in hero section
  informational-card-sunshine-yellow:
    role: General content card
  program-age-badge:
    role: Small descriptive tag
  default-button:
    role: Standard interactive element (e.g. cookie preference)
  input-field:
    role: User input area
---

## Overview

**North Star:** Vibrant, rounded play-world. All surfaces are soft, every color is a smile.

This design system feels like a playful, vibrant activity center for the mind. A maximalist use of saturated primary and secondary colors, especially the 'Sunshine Yellow' background, instantly communicates an optimistic and engaging environment. Rounded shapes on cards and buttons, paired with a custom rounded display font, create an approachable, friendly aesthetic. The visual energy is high, reflecting a dynamic and supportive approach to therapy.

### Do's

- Always use 'Sunshine Yellow' (#fdcb40) as the primary background color for pages and major sections to maintain a high-energy, positive mood.
- Apply `Action Orange` (#fd4401) exclusively for primary calls-to-action to maximize impact and user engagement.
- Ensure all interactive elements like buttons and key cards have a `23.81px` or `47.62px` border radius, creating a consistent soft and approachable feel.
- Use `ABC Diatype Rounded Plus` for all UI text, such as navigation, buttons, and card titles, keeping its -0.02em letter spacing for a compact, friendly look.
- Employ `Robuck Rounded` at 62px and above for major display headlines, leveraging its low line height (0.8) to create distinctive, stacked typographic compositions.
- Utilize a generous `48px` padding within cards to ensure sufficient white space and legibility in information-dense areas.
- Integrate the vibrant accent colors like 'Ocean Blue' (#006cff), 'Bubblegum Pink' (#f780d4), and 'Teal Splash' (#04c6c5) primarily in illustrations and decorative elements, carefully balancing their intensity.

### Don'ts

- Do not use sharp corners; ensure all UI elements such as cards, buttons, and badges adhere to the specified radii, typically `23.81px` or `47.62px`.
- Avoid generic system fonts for prominent headlines; always prioritize `Robuck Rounded` for its unique, playful character at display sizes.
- Do not desaturate the primary brand colors; the system thrives on vivid hues like 'Sunshine Yellow' and 'Action Orange'.
- Avoid excessive text density; break up content into manageable blocks with ample spacing, referencing the `48px` card padding and `38px` section gaps.
- Do not introduce new primary or accent colors outside the defined palette; the current set is carefully chosen for its energetic harmony.
- Refrain from using shadows for elevation; rely on color contrast and distinct background colors to differentiate surfaces and sections.
- Do not use letter-spacing: normal for text set in `ABC Diatype Rounded Plus`; always apply `-0.02em` to maintain its characteristic compact appearance.

### Layout

The page model is primarily full-bleed with a strong emphasis on vivid background colors that extend to the viewport edges. The hero section is a full-viewport illustration with a prominent, vertically centered headline. Section rhythm often alternates between large, visually rich illustrated backgrounds and sections with simpler, solid 'Sunshine Yellow' backgrounds. Content arrangement is flexible, often featuring centered text blocks over the main yellow background, or text overlaid on abstract shapes within illustrations. There's an underlying grid for content cards (not explicitly defined but observable in component structures) and significant vertical spacing between logical sections. Navigation is a consistent top bar, with prominent 'Donate' button.

### Imagery

The visual language is dominantly illustration-based, featuring abstract, organic shapes alongside hard-edged geometric forms, creating a playful and imaginative environment. Illustrations are highly stylized, using a vibrant, multi-color palette (Ocean Blue, Bubblegum Pink, Teal Splash, Grass Green, Grape Punch) that often overlaps or is nested. Figures are simplified and often smiling, conveying warmth and approachability. The purpose of the imagery is primarily decorative atmosphere and to convey a sense of fun and support, rather than explicit content explanation. Density is moderate, with illustrations frequently filling large sections of the canvas, but leaving space for key text elements.
