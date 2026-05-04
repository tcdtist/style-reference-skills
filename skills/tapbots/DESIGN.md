---
version: alpha
name: Tapbots
description: Ivory's design system evokes a cosmic, playful yet precise feel, like exploring a high-tech constellation. Deep space purples and blacks provide a dramatic stage for luminous accents of violet and glowing green, creating a narrative of discovery. Spherical and rounded forms, particularly the 40px radius on interactive elements, soften the tech aesthetic, making the advanced functionality feel approachable.
colors:
  midnight-void: "#05050b"
  deep-shadow: "#1a1a1a"
  carbon-gray: "#2c2c2c"
  graphite: "#484848"
  medium-gray: "#666666"
  light-gray: "#999999"
  stone-grey: "#a3a3a3"
  silver-tone: "#b3b3b3"
  pale-gray: "#c3c3c3"
  bright-silver: "#cccccc"
  ghost-white: "#ffffff"
  cosmic-violet: "#7047ba"
  royal-plum: "#4c278"
  button-violet: "#301e4f"
  luminous-violet: "#ba94ff"
  highlight-violet: "#9466e7"
  pale-violet: "#cdd4f8"
  misty-violet: "#deccff"
  crimson-beam: "#ff3543"
  emerald-glow: "#74ec5a"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
spacing:
  buttonRadius: 40px
  elementGap: 10px
  sectionGap: 64px
components:
  primary-action-button-group:
    role: 
  feature-list-grid:
    role: 
  testimonial-card:
    role: 
  primary-action-button:
    role: Primary Call to Action
  feature-list-item:
    role: Informational Display
  headline-ivory:
    role: Main Page Title
  sub-headline-accent:
    role: Section Introductions
  body-text-standard:
    role: General Content
  prominent-link:
    role: Interactive Navigation/Callout
  testimonial-card:
    role: Social Proof Display
---

## Overview

**North Star:** Cosmic playful precision. Imagine floating among luminous violet and emerald constellations within a dark, welcoming void.

Ivory's design system evokes a cosmic, playful yet precise feel, like exploring a high-tech constellation. Deep space purples and blacks provide a dramatic stage for luminous accents of violet and glowing green, creating a narrative of discovery. Spherical and rounded forms, particularly the 40px radius on interactive elements, soften the tech aesthetic, making the advanced functionality feel approachable.

### Do's

- Use `Midnight Void` (#05050b) as the default background color for full-bleed sections and `Deep Shadow` (#1a1a1a) for hero sections, creating a sense of depth and atmosphere.
- Apply a `40px` `radius` to all interactive elements, like buttons and prominent links, for a consistent soft and approachable feel.
- For primary call-to-action buttons, use `Button Violet` (#301e4f) as the background and `Luminous Violet` (#ba94ff) for text, ensuring high contrast and brand coherence.
- Highlight key headings and feature descriptions with `Highlight Violet` (#9466e7) or `Emerald Glow` (#74ec5a) to punctuate the dark background.
- Maintain generous vertical spacing between sections, leveraging values like `64px` for `sectionGap` to ensure spaciousness and readability.
- Prioritize `-apple-system` font with `weight 400` or `500` and `Ghost White` (#ffffff) for all main body text to maximize readability on dark surfaces.
- Incorporate `Skyfire Gradient` (linear-gradient(to right bottom, rgb(108, 176, 255), rgb(247, 71, 255))) for decorative backgrounds or visual accents to reinforce the cosmic metaphor.

### Don'ts

- Avoid using harsh, fully saturated primary colors for large text blocks; reserve vivid hues like `Luminous Violet` (#ba94ff) only for interactive elements or small accents.
- Do not use sharp corners; the `40px` global `radius` for interactive elements and `18px` for lists is fundamental to the system's soft, playful character.
- Do not introduce additional font families; the entire system relies on `-apple-system` to maintain its native and unified aesthetic.
- Avoid generic gray for interactive elements; all buttons and active links must use `Luminous Violet` (#ba94ff) or `Button Violet` (#301e4f) tones.
- Do not neglect vertical spacing; the generous `sectionGap` of at least `64px` and `elementGap` of `10px` are crucial for maintaining the spacious layout.
- Refrain from using strong shadows or complex elevation; the site foregrounds depth through color shifts rather than traditional shadow mechanics. Avoid `box-shadow` values.
- Never use `background-color: #ffffff` on its own as a primary background; the design is dark-themed and relies on the progression of deep grays and purples.

### Layout

Pages typically employ a full-bleed background, with content often centered within a conceptual `max-width`. The hero sections are dramatic and full-viewport, featuring large graphical elements centrally. Subsequent sections alternate between full-width content blocks and more structured layouts, including two-column text-and-image arrangements or multi-column feature lists. Vertical rhythm is established through consistent `sectionGap` of around `64px`, with spacious `elementGap` of `10px` internally. Card-like structures (e.g., testimonial blocks) appear with a distinct `18px` radius. The layout feels open and allows imagery significant breathing room.

### Imagery

The visual language is characterized by 3D rendered, friendly, and slightly whimsical illustrations. The hero section features stylized characters (rocket, elephant) against a dramatic space background, rendered with soft lighting and vibrant, glowing elements. Throughout the site, product screenshots are presented in device mockups (iPhone, iPad, Mac) that are often slightly angled and layered, demonstrating the application's interface. Icons are simple, filled, and often incorporate the accent colors like `Crimson Beam` or `Emerald Glow`, or `Luminous Violet`. The overall density is balanced, with imagery serving both a decorative and explanatory role for the app's features.
