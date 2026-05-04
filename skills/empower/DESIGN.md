---
version: alpha
name: Empower
description: Tilt communicates a direct, no-nonsense financial brand with a strong visual identity built on bold, condensed typography and a high-contrast dark theme punctuated by a vibrant, optimistic yellow. Components are lightweight and purposeful, relying on shape and color to convey hierarchy rather than heavy shadows. The overall aesthetic is one of confident utility, where key actions are highlighted by bright accents against a dominant dark canvas, switching to a clean light background for content-heavy sections.
colors:
  night-sky: "#100f0f"
  canvas-white: "#ffffff"
  cloud-whisper: "#fffdf6"
  deep-space: "#171616"
  charcoal-card: "#262525"
  metal-gray: "#64635c"
  button-yellow: "#e4e24e"
  muted-yellow: "#faf9b6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 1.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
    letterSpacing: -0.24px
  subheading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -0.78px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
    letterSpacing: -0.252px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.5
    letterSpacing: -0.288px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -0.96px
spacing:
  cardRadius: 24px
  buttonRadius: 16777216px
  elementGap: 8px
  sectionGap: 32px
components:
  primary-action-button:
    role: Main call to action across the site.
  ghost-navigation-button:
    role: Secondary action or navigation in dark sections.
  ghost-secondary-button:
    role: Clickable elements requiring less emphasis, often in light sections.
  dark-photo-card:
    role: Displaying imagery with associated monetary values against a dark background.
  light-content-card:
    role: General content display in light sections.
  muted-yellow-content-card:
    role: Highlighting specific content blocks with a soft accent hue.
---

## Overview

**North Star:** midnight command center, bright button

Tilt communicates a direct, no-nonsense financial brand with a strong visual identity built on bold, condensed typography and a high-contrast dark theme punctuated by a vibrant, optimistic yellow. Components are lightweight and purposeful, relying on shape and color to convey hierarchy rather than heavy shadows. The overall aesthetic is one of confident utility, where key actions are highlighted by bright accents against a dominant dark canvas, switching to a clean light background for content-heavy sections.

### Do's

- Use Night Sky (#100f0f) as the primary dark background for main page sections.
- Apply Button Yellow (#e4e24e) exclusively for primary interactive elements, ensuring its vibrancy draws attention.
- For headlines, select Gravity (weight 900) or EmpowerSerif (weight 600) with their specific tight letter-spacing for maximum impact.
- Maintain a large, effectively pill-shaped border-radius for all primary buttons, visually communicating interaction.
- Structure information using a strong contrast between Night Sky (#100f0f) and Canvas White (#ffffff) sections for clear visual separation.
- Employ GTAmericaExtended for body text and navigation, capitalizing on its extended character for a distinctive textual rhythm.
- Use a minimum of 24px border-radius for cards and modules, lending a friendly but structured appearance.

### Don'ts

- Do not introduce new saturated accent colors; limit accents to shades of yellow.
- Avoid applying heavy drop shadows; cards and elements should primarily rely on background color and border-radius for definition.
- Do not use generic system fonts for any headline or prominent text; stick to the custom font stack for brand consistency.
- Never use Button Yellow (#e4e24e) for text; it is reserved for backgrounds of interactive elements.
- Avoid breaking button styles by using square corners for primary calls to action; always use the large border-radius.
- Do not vary paragraph or body text letter-spacing from the tokenized GTAmericaExtended values, especially for smaller sizes.
- Refrain from using thin light lines on dark backgrounds unless specified as Ghost Button borders or subtle dividers.

### Layout

The page exhibits a mixed layout, starting with a full-bleed dark hero section featuring a centered headline. Following sections often alternate between dark and light backgrounds, creating a distinct vertical rhythm. Content is typically arranged in centered stacks or two-column text-left/image-right patterns. A prominent feature is the use of image grids with rounded-corner photo cards. The navigation is a fixed top bar on dark background for clarity, with a maximum content width that appears to be contained within around 1200px after the initial full-bleed hero.

### Imagery

The site heavily features photography of diverse individuals, often presented within circular or rounded containers. Imagery is typically lifestyle-oriented, focusing on people in everyday situations, implying relatability and broad accessibility. Product screenshots occasionally appear, mainly for mobile UI, showcasing a clean and focused interface with brand colors. Icons are outlined, simple, and monochrome, primarily acting as functional indicators rather than decorative elements. Image density is moderate, carefully balanced with bold typography, and serves to humanize the financial services offered.
