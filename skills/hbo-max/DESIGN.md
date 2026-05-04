---
version: alpha
name: HBO Max
description: HBO Max presents a cinematic dark mode experience. A deep black canvas provides a dramatic backdrop for content, punctuated by crisp white typography and a vibrant, authoritative blue that guides user actions. Components are minimal, focusing on content with subtle outlines and soft radii. The overall impression is one of sophistication and clarity, optimized for content absorption in a low-light setting.
colors:
  midnight-abyss: "#000000"
  silver-moonlight: "#ffffff"
  ghostly-gray: "#b8b6bb"
  deep-shadow: "#050409"
  steel-accent: "#89868e"
  muted-ash: "#999999"
  action-blue: "#3d6a99"
  link-sky: "#71b8f2"
  dark-overlay: "#0e0a17"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.6
    letterSpacing: 0.83px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: 0.83px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.35
    letterSpacing: 0.1px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.11
    letterSpacing: 0.1px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.8
    letterSpacing: 0.1px
spacing:
  cardRadius: 4.5px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 24px
components:
  primary-action-button:
    role: Filled button for primary calls to action.
  ghost-action-button:
    role: Outline button for secondary or tertiary actions, often in areas with dark backgrounds.
  text-link-button:
    role: Minimal interactive element, typically used for navigation or in-line actions within text.
  white-surface-card:
    role: Used for content blocks requiring a lighter surface for contrast, such as pricing plans.
  dark-content-card:
    role: Default card for content presentation, blending into the dark background.
  sign-up-button-header:
    role: Prominent sign-up call to action in the header.
  plan-toggle-button:
    role: Segmented control for switching between monthly/yearly plans.
---

## Overview

**North Star:** Midnight movie theater

HBO Max presents a cinematic dark mode experience. A deep black canvas provides a dramatic backdrop for content, punctuated by crisp white typography and a vibrant, authoritative blue that guides user actions. Components are minimal, focusing on content with subtle outlines and soft radii. The overall impression is one of sophistication and clarity, optimized for content absorption in a low-light setting.

### Do's

- Prioritize Midnight Abyss (#000000) for all main page backgrounds, establishing a deep dark theme.
- Use Silver Moonlight (#FFFFFF) as the primary text color on dark backgrounds for optimal contrast and readability.
- Apply Action Blue (#3d6a99) for all primary interactive elements, including button backgrounds and significant active states.
- Employ Max Sans weight 300 for headlines to create an understated, refined authority, rather than shouting.
- Maintain an 8px border radius for all buttons and content images to ensure a consistent, softly rounded interaction.
- Use Max Sans with 0.083em letter-spacing for body text (10px, 12px) to enhance legibility on dark backgrounds.
- Structure pricing plan cards with a Silver Moonlight (#FFFFFF) background to visually separate them from the dark surroundings, using 4.5px border radius.

### Don'ts

- Avoid using bright, high-saturation colors for large background areas; limit chromatic colors to accents and interactive elements.
- Do not use generic system fonts; always specify Max Sans with its custom weights and letter-spacing for brand consistency.
- Never use dark text on dark backgrounds; ensure sufficient contrast with Silver Moonlight (#FFFFFF) on Midnight Abyss (#000000) or Deep Shadow (#050409).
- Avoid excessive use of outlines or borders on cards; prefer subtle background changes or elevation for visual hierarchy.
- Do not use letter-spacing: normal on smaller font sizes; apply the specified 0.083em for enhanced readability.
- Resist adding strong box shadows; the design relies on flat surfaces and minimal elevation for depth.
- Do not vary border radii arbitrarily; adhere strictly to 8px for buttons/images and 4.5px for cards.

### Layout

The page primarily uses a max-width 1140px centered layout for most content sections, ensuring readability and focus. The hero section is full-bleed, showcasing large-scale content posters as an immersive background for an impactful first impression. Sections often have a consistent vertical rhythm due to a 24px section gap. Content arrangement frequently features centered stacked blocks for headlines and calls to action, particularly in introductory or promotional areas. Pricing plans are presented in a 3-column card grid, which adapts to a single column on smaller viewports. Navigation is a sticky top bar with minimal links and prominent sign-in/sign-up buttons.

### Imagery

The site heavily relies on product imagery in the form of movie and TV show posters. These are treated as full-bleed, almost wallpaper-like backgrounds in the hero section, creating an immersive, cinematic atmosphere. Elsewhere, they appear as contained, slightly rounded (8px radius) thumbnails within dark content cards. The visual style of these images is diverse, reflecting the content, but they are consistently presented against a dark backdrop to keep the UI from competing. Icons are minimal, monochromatic (usually white or light gray) and primarily functional, with an occasional accent blue.
