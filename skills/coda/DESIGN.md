---
version: alpha
name: Coda
description: Coda operates on a 'digital-first canvas' aesthetic, mixing a soft, near-white background with bold, condensed typography and large, organic shapes in deep forest green. The system leverages strong visual contrast between high-impact headlines and more conservative body text. Components are minimalist with generous corner radii, emphasizing functional clarity over decorative elements, punctuated by dynamic shapes and a striking brand green.
colors:
  canvas-creme: "#f8f9eb"
  carbon-black: "#000000"
  obsidian-gray: "#202020"
  forest-green: "#003d21"
  sage-mist: "#c0c2a9"
  mid-tone-gray: "#5a5a4f"
  light-taupe: "#7c7d76"
  pale-ash: "#edeee1"
  aura-green: "#aafdc0"
  soft-teal: "#b0f4ff"
  lavender-mist: "#d3beff"
  rose-blush: "#ffc0e6"
  blue-violet: "#041668"
  deep-plum: "#2d0078"
  dark-magenta: "#3f0929"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.13
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.13
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.13
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.02
    letterSpacing: -0.45px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.9
    letterSpacing: -0.72px
spacing:
  cardRadius: 22.3625px
  buttonRadius: 8.94498px
  elementGap: 9px
  sectionGap: 63px
components:
  ghost-header-navigation-link:
    role: Navigation item within the header.
  pill-button-with-outline:
    role: Secondary action button, often for 'Learn More' or 'Go' actions.
  filled-primary-button:
    role: Primary call to action.
  ghost-button-with-light-text:
    role: Action button on dark backgrounds.
  transparent-card:
    role: Informational card with no background fill.
  canvas-creme-card:
    role: Content container on the main Canvas Creme background.
  carbon-black-card:
    role: Content container used to create visual contrast.
  pill-badge-light-text-on-transparent:
    role: Small, descriptive tag on dark backgrounds.
  pill-badge-light-text-on-transparent-slightly-opaque:
    role: Small, descriptive tag with subtle transparency.
---

## Overview

**North Star:** digital-first canvas

Coda operates on a 'digital-first canvas' aesthetic, mixing a soft, near-white background with bold, condensed typography and large, organic shapes in deep forest green. The system leverages strong visual contrast between high-impact headlines and more conservative body text. Components are minimalist with generous corner radii, emphasizing functional clarity over decorative elements, punctuated by dynamic shapes and a striking brand green.

### Do's

- Use Canvas Creme (#f8f9eb) as the dominant background for most sections.
- Apply abcMonumentGrotesk, weight 800, with letter spacing -0.01em for all major headlines to ensure high-impact visual presence.
- Utilize Forest Green (#003d21) for large, decorative background shapes and elements to establish strong brand identity.
- Implement a default border-radius of 22.3625px for cards and 8.94498px for filled buttons, contributing to the soft, modern aesthetic.
- Pair Carbon Black (#000000) for primary text with Canvas Creme (#f8f9eb) backgrounds for optimal contrast (19.7:1 AAA).
- Employ jetBrainsMono for all badges and smaller functional labels to convey precision.
- Maintain comfortable density with an element gap of 9px and a section gap of 63px.

### Don'ts

- Avoid using multiple chromatic colors in close proximity; the color palette is designed for accent, not proliferation.
- Do not use generic sans-serif fonts for headlines; abcMonumentGrotesk is essential for brand recognition of prominent text.
- Never use dark text on dark backgrounds; ensure sufficient contrast by pairing light text with dark backgrounds or vice-versa.
- Do not introduce sharp, angular corners; all interactive and card-like components should feature generous border radii.
- Refrain from heavy drop shadows; elevation is achieved through color contrast and layered shapes rather than pronounced shadows.
- Do not treat every color in the palette as a functional UI color; some are specifically for decorative backgrounds or accents.
- Avoid generic button styles; prefer outlined or filled buttons that adhere to the specified radii and color contrasts.

### Layout

The page primarily uses a full-bleed structure without a fixed `pageMaxWidth`, creating expansive sections. The hero section is characterized by a centered, high-impact headline over a light background, often with large, organic, full-width colored shapes (like the Forest Green arc). Section rhythm is created through alternating background colors and large visual dividers (often full-bleed colored sections). Content arrangement frequently utilizes two-column layouts, with text on one side and a visual or card element on the other. A card grid for features is also evident. The layout prioritizes breathing room, with spacious vertical gaps between sections. Navigation is a sticky top bar with a centered logo and right-aligned links and buttons.

### Imagery

This site features a highly controlled visual language, emphasizing abstract 3D renders primarily in shades of Forest Green and Aura Green. Imagery is primarily decorative and atmospheric, often depicting swirling, organic, or connected shapes. Photography is minimal, appearing as tighter product crops or contextual UI screenshots rather than lifestyle. Icons are typically single-color, outlined, and minimal, appearing as functional glyphs or expressive emojis. The visual density is balanced, with imagery serving as large background elements or contained within UI cards, providing visual relief and brand reinforcement against text-heavy sections.
