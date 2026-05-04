---
version: alpha
name: mmm.page
description: mmm.page employs a playful, collage-like aesthetic with a canvas of crisp white and an array of contrasting, vibrant colors for interactive elements. Typography mixes expressive display fonts with legible sans-serifs, contributing to an eccentric yet functional feel. Components are lightweight with subtle shadows, and interactions are punctuated by bold, often contrasting, accent colors. The overall impression is one of creative freedom and approachability, eschewing rigidity for spontaneous charm.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  stone-gray: "#c1c1c5"
  faint-line-gray: "#d6d6d6"
  subtle-text-gray: "#6f6f6f"
  mid-text-gray: "#666666"
  dark-text-gray: "#373c3b"
  primary-purple: "#7012e2"
  vibrant-green: "#72dd95"
  warm-accent-orange: "#925f52"
  fresh-accent-green: "#12e2b0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: 0.094px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
    letterSpacing: 0.094px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1
    letterSpacing: 0.094px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
    letterSpacing: 0.094px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.25
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.25
    letterSpacing: 0px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 106px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 40px
components:
  navigation-tab-button:
    role: Pill-shaped header navigation item
  ghost-header-button:
    role: Minimal header action button
  text-outline-button:
    role: Subtle call to action or secondary action button
  filled-primary-action-button:
    role: Main call to action button
  filled-secondary-action-button:
    role: Alternative call to action button
  elevated-content-card:
    role: Displays grouped content with subtle visual separation
  flat-color-card:
    role: Used for showcasing features or highly visual content
  floating-edit-button:
    role: Persistent action button for direct interaction
---

## Overview

**North Star:** Digital collage playground

mmm.page employs a playful, collage-like aesthetic with a canvas of crisp white and an array of contrasting, vibrant colors for interactive elements. Typography mixes expressive display fonts with legible sans-serifs, contributing to an eccentric yet functional feel. Components are lightweight with subtle shadows, and interactions are punctuated by bold, often contrasting, accent colors. The overall impression is one of creative freedom and approachability, eschewing rigidity for spontaneous charm.

### Do's

- Prioritize Canvas White (#ffffff) for dominant backgrounds to maintain a clean, open feel.
- Use Ink Black (#000000) for primary text and significant borders to ensure high contrast and readability.
- Apply Primary Purple (#7012e2) or Vibrant Green (#72dd95) for primary filled button backgrounds to create visual pop and clear calls to action.
- Set the border-radius to 8px for most interactive elements like buttons and cards to ensure a consistent, friendly softness.
- Employ NationalPark-Variable for all body text and UI elements, leveraging its varied weights for hierarchy.
- Reserve Playfair Display and Calistoga for impactful headlines and display text, embracing their distinctive character.
- Use 14px for internal card padding and 16px as a general element gap to create comfortable density in layouts.

### Don'ts

- Avoid using more than two distinct chromatic brand colors per section to prevent visual clutter; focus on one primary and one secondary.
- Do not use dark backgrounds for large content blocks unless it's a specific, controlled section that needs strong visual separation.
- Never compromise text legibility by placing light text on similarly light backgrounds; always refer to contrast ratios.
- Do not deviate from the specified border-radius values for buttons and cards; inconsistency undermines the system's playful yet refined feel.
- Do not overuse the decorative display fonts; they are intended for impact and should be balanced with more legible sans-serifs.
- Avoid arbitrary custom spacing values; adhere to the 16px element gap and 14px card padding for consistency.
- Do not apply heavy or multiple shadows; the design uses subtle elevation to maintain a lightweight aesthetic.

### Layout

The page uses a full-bleed layout for the background, but content within is primarily centered within an implicit container. The hero pattern features a large, centered headline (`Calistoga` or `Playfair Display`) over a white background, flanked by abstract 3D shapes. Section rhythm exhibits consistent vertical spacing (sectionGap 40px) between content blocks, without strong visual dividers or alternating background bands. Content arranges in centered stacks for headlines and CTAs, with implied two-column layouts for descriptive text (though not explicitly clear in the data). Navigation is a sticky top bar with ghost/pill buttons on a black background, and a left-aligned sidebar containing minimal icons on a light background. The density is relatively spacious, allowing individual elements and typography to breathe.

### Imagery

The imagery aesthetic is characterized by abstract 3D geometric shapes and organic, playful forms rendered in white or light gray, scattered across the white canvas. These elements act as decorative atmosphere rather than conveying specific content. Photography is absent, and illustrations are minimal, like the brushstroke under the logo. Icons are outlined, simple, and monochrome, often in Ink Black, reinforcing the clean UI. The overall density is text-dominant, allowing the few graphic elements to stand out as charming accents.
