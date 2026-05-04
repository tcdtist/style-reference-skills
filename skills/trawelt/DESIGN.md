---
version: alpha
name: Trawelt
description: Trawelt embodies a vibrant, dark-mode consultancy aesthetic. Deep black canvases are punctuated by a singular, vivid green that marks brand elements, interactive states, and key navigational points. Typography balances a strong, characterful display font for headlines with a clean, functional sans-serif for body text. Components are largely borderless and flush with the background, relying on color contrast for definition, or a subtle, almost-white card surface to highlight content.
colors:
  ink-black: "#000000"
  paper-white: "#ffffff"
  fresh-mint: "#d3ffc3"
  forest-green: "#2d9b4c"
  desert-sand: "#e7d5ba"
  pale-sage: "#e4e9dc"
  cloud-white: "#efefe7"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.1px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: -0.1px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.1
    letterSpacing: -0.1px
  display:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1
    letterSpacing: -0.1px
spacing:
  cardRadius: 15.04px
  buttonRadius: 10.08px
  elementGap: 15px
  sectionGap: 187px
components:
  primary-call-to-action-button:
    role: Filled button
  ghost-icon-button:
    role: Outlined icon button
  navigation-link:
    role: Navigational item
  content-card:
    role: Information display
  blog-post-item:
    role: List item for blog articles
---

## Overview

**North Star:** Midnight forest bloom: deep, dark canvases with bursts of vivid green.

Trawelt embodies a vibrant, dark-mode consultancy aesthetic. Deep black canvases are punctuated by a singular, vivid green that marks brand elements, interactive states, and key navigational points. Typography balances a strong, characterful display font for headlines with a clean, functional sans-serif for body text. Components are largely borderless and flush with the background, relying on color contrast for definition, or a subtle, almost-white card surface to highlight content.

### Do's

- Prioritize Ink Black (#000000) for all main backgrounds to maintain the brand's dark aesthetic.
- Use Forest Green (#2d9b4c) exclusively for primary interactive elements and key brand accents to maximize its impact.
- Employ Labour Grotesk for all headings and navigational text, varying sizes from 16px to 435px and line heights and letter spacing from its varied properties to create visual rhythm.
- Apply a consistent 15.04px border radius to cards and significant navigation elements, contrasting with the tighter 10.08px for buttons.
- Ensure generous section gaps of 187px to create ample negative space and visual breathability between content blocks.
- Utilize Cloud White (#efefe7) for card backgrounds and subtle surface elevations, never applying hard borders or shadows beyond the defined radius.

### Don'ts

- Avoid using multiple chromatic colors; limit brand accents to Forest Green and Fresh Mint.
- Do not introduce sharp corners or square elements; maintain the consistent use of 10.08px or 15.04px radii.
- Refrain from using drop shadows or heavy elevation; surfaces should appear flat or subtly raised through color contrast only.
- Do not deviate from Labour Grotesk for headings or Reckless Neue for dramatic display text; avoid generic system fonts in these roles.
- Never use generic 1rem or 16px padding on cards; adhere to the specific 15px card padding.
- Avoid text colors other than Ink Black or Paper White, except where explicitly defined by component properties.
