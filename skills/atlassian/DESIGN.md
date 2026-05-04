---
version: alpha
name: Atlassian
description: Atlassian's visual system evokes a highly organized and collaborative digital workspace, built on a foundation of crisp, accessible neutrality and punctuated by vibrant brand accents. The prominent use of `Slate 900` text on `Canvas Frost` backgrounds ensures high legibility, while `Periwinkle 500` brings an energetic, inviting feel to interactive elements. The system maintains order through a meticulous spacing hierarchy and subtle shadows on key cards, presenting a precise yet approachable tool for complex teamwork.
colors:
  canvas-frost: "#ffffff"
  slate-900: "#000000"
  graphite-base: "#101214"
  periwinkle-500: "#1868db"
  steel-grey: "#1c2b42"
  ash-cloud: "#f0f1f2"
  storm-sky: "#42526e"
  harvest-gold: "#fca700"
  subtle-mist: "#b7b9be"
  sky-haze: "#e9f2fe"
  midnight-shadow: "#292a2e"
  frost-shadow: "#c2c7d0"
  conic-energy: "#bf63f3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.29
    letterSpacing: 0.288px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
    letterSpacing: 0.384px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: 0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.19
    letterSpacing: 0.576px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1
    letterSpacing: 0.84px
spacing:
  cardRadius: 20px
  buttonRadius: 10000px
  elementGap: 4px
  sectionGap: 24px
components:
  primary-action-button:
    role: Filled Button
  text-link-button:
    role: Ghost Button
  pill-ghost-button:
    role: Ghost Button
  icon-button:
    role: Round Ghost Button
  elevated-content-card:
    role: Informational Card
  transparent-card:
    role: Informational Card
  rounded-top-card:
    role: Informational Card
  outline-input-field:
    role: Form Input
---

## Overview

**North Star:** organized digital workspace

Atlassian's visual system evokes a highly organized and collaborative digital workspace, built on a foundation of crisp, accessible neutrality and punctuated by vibrant brand accents. The prominent use of `Slate 900` text on `Canvas Frost` backgrounds ensures high legibility, while `Periwinkle 500` brings an energetic, inviting feel to interactive elements. The system maintains order through a meticulous spacing hierarchy and subtle shadows on key cards, presenting a precise yet approachable tool for complex teamwork.

### Do's

- Use `Periwinkle 500` (#1868db) exclusively for primary interactive elements to clearly signpost actions.
- Maintain high contrast by pairing `Slate 900` (#000000) or `Steel Grey` (#1c2b42) text on `Canvas Frost` (#ffffff) backgrounds.
- Apply `20px` border-radius consistently for all elevated cards and product views to establish visual softness.
- Utilize `10000px` border-radius for all primary buttons to create a clear, approachable call to action.
- Employ `Charlie Display` at `70px` or `80px` for hero headlines using weight `700` or `800` to create significant visual impact.
- Use `4px` as the base unit for horizontal and vertical spacing between elements to ensure a harmonious grid.
- Implement the `rgba(9, 30, 66, 0.31) 0px 0px 1px 0px, rgba(9, 30, 66, 0.25) 0px 1px 1px 0px` shadow for all elevated cards to provide subtle depth.

### Don'ts

- Do not use `Harvest Gold` (#fca700) for interactive elements, reserve it for accents and decorative purposes.
- Avoid using multiple border-radii values for buttons; stick to `10000px` for primary actions and `28px` for secondary pill buttons.
- Do not introduce new shadow styles; consistency is key with the defined `card` shadow.
- Refrain from deviating from the defined `4px` spacing unit to avoid visual clutter and maintain a consistent rhythm.
- Do not alter the letter-spacing values from `normal` for Charlie Text and the specific `0.0120em` or `0.0300em` for Charlie Display.
- Avoid using `Storm Sky` (#42526e) as a primary text color, as its primary role is for inputs and muted UI details.
- Do not use transparent backgrounds with `0px` border-radius for cards that hold critical, distinct content; reserve them for blending sections.

### Layout

The page maintains a centered max-width, with sections featuring consistent vertical spacing. The hero section often utilizes a full-bleed dark background with centered headlines and prominent primary action buttons. Content sections frequently alternate between split layouts (text on one side, visual on the other) and centered stacks. Card grids are used to display features or related content in a structured manner. The navigation is a persistent top bar, with elements organized into clear categories. The layout conveys an organized, information-dense yet breathable experience.

### Imagery

The site uses a combination of abstract, multicolored graphic elements (often based on the Conic Energy gradient) alongside functional product screenshots. Photography is minimal, appearing primarily within video thumbnails or abstracted for background context. Product screenshots are contained, precise, and often feature dark UI themes to contrast with the light page background, highlighting the software's functionality. Icons are primarily monochromatic, filled-style, in `Slate 900` or `Steel Grey`. Imagery primarily serves to illustrate concepts and showcase product features rather than purely decorative atmosphere, with specific graphical treatments often containing text or video. The overall density of imagery is balanced, with a strong emphasis on integrating visuals directly with explanatory content.
