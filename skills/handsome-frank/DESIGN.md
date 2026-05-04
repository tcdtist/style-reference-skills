---
version: alpha
name: Handsome Frank
description: Handsome Frank's visual system evokes a vibrant, artistic jungle, leveraging bold colorful blocks against clean, spacious backgrounds. Typography is a confident mix of a bespoke serif for headlines, featuring tight letter-spacing for impact, and a versatile sans-serif for body text. The overall feel is one of creative energy and precision, using color as an active, functional element rather than mere decoration. Layouts are structured but dynamic, allowing hero illustrations to breathe color into the composition.
colors:
  midnight-ink: "#160572"
  fiery-red: "#ea0706"
  warm-ginger: "#e29675"
  terracotta-orange: "#d64e2e"
  crimson-edge: "#df1a19"
  aqua-glow: "#24e3dc"
  sunny-marigold: "#f9e44d"
  warm-canvas-yellow: "#fffac2"
  illustrator-blue: "#2544a0"
  pumpkin-swirl: "#ff7701"
  violet-berry: "#4b0f4d"
  rose-bloom: "#d98199"
  emerald-green: "#24e34c"
  melon-hue: "#eea883"
  absolute-black: "#000000"
  fog-canvas: "#f2ebe6"
  pure-white: "#ffffff"
  sky-haze: "#eef4fb"
  cream-canvas: "#fef9ee"
  midtone-gray: "#909090"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.28
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.36
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: 1.216px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 0.98
    letterSpacing: -0.882px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 0.95
    letterSpacing: -4.4px
spacing:
  buttonRadius: 30px
  elementGap: 20px
  sectionGap: 24px
components:
  ghost-button:
    role: Interactive elements that blend into the background, often for discrete actions or navigation.
  circular-ghost-button:
    role: Small, discreet interactive elements, often used for icon-only actions.
  pill-accent-button:
    role: Prominent calls to action with rounded edges, standing out against darker backgrounds.
  illustrator-block-button:
    role: Primary action button for navigating to illustrator portfolios, using specific brand colors.
  illustration-card:
    role: Container for showcasing artist work, designed to let the artwork be the focus.
  rounded-input-field:
    role: Text input areas with softened corners.
  warning-dot-badge:
    role: Small, circular indicator for alerts or status.
  copyright-notice-badge:
    role: Muted text for legal information.
---

## Overview

**North Star:** Artistic Jungle Canvas

Handsome Frank's visual system evokes a vibrant, artistic jungle, leveraging bold colorful blocks against clean, spacious backgrounds. Typography is a confident mix of a bespoke serif for headlines, featuring tight letter-spacing for impact, and a versatile sans-serif for body text. The overall feel is one of creative energy and precision, using color as an active, functional element rather than mere decoration. Layouts are structured but dynamic, allowing hero illustrations to breathe color into the composition.

### Do's

- Use Millik for all primary headings, applying tight negative letter-spacing for visual impact at larger sizes and subtle positive spacing for smaller headings to enhance clarity.
- Utilize Klarheit Grotesk for all body text, navigation elements, and secondary information, prioritizing its legibility and modern feel.
- Accentuate interactive elements and key information with the brand's vibrant accent colors (Fiery Red, Illustrator Blue, Aqua Glow), ensuring they stand out against neutral backgrounds.
- Maintain a comfortable density with consistent elementGap of 20px and sectionGap of 24px to provide breathing room around content.
- Apply a 30px border-radius to all input fields and primary interactive buttons for a consistent soft, approachable shape.
- Employ Absolute Black (#000000) for primary text on light backgrounds and Pure White (#ffffff) for text on dark backgrounds to ensure high contrast.
- Structure pages with Fog Canvas (#f2ebe6) or Cream Canvas (#fef9ee) as base backgrounds for sections, providing soft transitions.

### Don'ts

- Avoid using generic blue for links; instead, use brand accent colors like Aqua Glow (#24e3dc) or Emerald Green (#24e34c) when a chromatic link is needed.
- Do not introduce new border radii values beyond 0px, 10px, 30px, and 50% to maintain shape consistency.
- Refrain from adding box shadows to elements unless explicitly defined for a specific component, as the system largely relies on flat surfaces and color contrast.
- Do not use Absolute Black (#000000) as a solid background color for extended sections unless it is the hero with an illustrative overlay.
- Avoid arbitrary changes in letter-spacing for Klarheit Grotesk; it should remain 'normal' unless a specific stylistic reason dictates otherwise.
- Do not use generic button styles; always choose from the defined button variants to ensure consistency in interaction and appearance.
- Do not introduce new typefaces; the system relies exclusively on Millik and Klarheit Grotesk for brand coherence.

### Layout

The page primarily uses a contained layout with no explicit pageMaxWidth, allowing sections to adapt while text content often aligns within a comfortable reading width. The hero section is a full-bleed, dynamic illustration with centered headline text overlaid. Subsequent sections toggle between clean backgrounds (Fog Canvas, Cream Canvas) to highlight grids of illustration cards. Content arrangement for feature sections includes image-left/text-right or vise-versa implied by the card layouts. A prominent 4-column card grid is used for showcasing illustrators. Vertical rhythm is maintained by consistent section spacing, making the flow comfortable and unhurried. Navigation is a sticky top bar with a hidden menu triggered by a hamburger icon.

### Imagery

The site primarily features vibrant, detailed illustrations as its visual language. These are often full-bleed or large-scale, acting as hero backgrounds or framed within content blocks. The illustrations are diverse in style but consistently rich in color and detail, serving as product showcases and setting an artistic atmosphere. Icons, if present, are minimal and secondary to the main illustrative content. The density is image-heavy, with illustrations taking up significant visual space to emphasize the agency's offerings.
