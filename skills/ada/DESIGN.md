---
version: alpha
name: Ada
description: The Ada design system establishes a stark, information-first aesthetic built on high contrast and minimal ornamentation. Typography anchors the visual hierarchy, with a clear distinction between prominent headings and concise body text. Surfaces are flat and monochromatic, emphasizing content over decorative elements. Interaction is signaled through bold black borders and subtle background shifts, ensuring focus remains on actionable items.
colors:
  ghost-ink: "#000000"
  canvas-white: "#FFFFFF"
  fog-button: "#efefef"
  subtle-link-blue: "#0000ee"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  elementGap: 16px
  sectionGap: 40px
components:
  ghost-button:
    role: Interactive element for secondary actions.
  navigation-link:
    role: Primary navigation items.
  information-card-unstyled:
    role: General content container for text and images.
---

## Overview

**North Star:** Contrast-driven document

The Ada design system establishes a stark, information-first aesthetic built on high contrast and minimal ornamentation. Typography anchors the visual hierarchy, with a clear distinction between prominent headings and concise body text. Surfaces are flat and monochromatic, emphasizing content over decorative elements. Interaction is signaled through bold black borders and subtle background shifts, ensuring focus remains on actionable items.

### Do's

- Prioritize Times (serif) for all headings and primary body text to establish an authoritative tone.
- Use Arial (sans-serif) only for functional elements like buttons or small navigational text, ensuring clear distinction from content.
- Maintain high contrast throughout the interface, primarily using Ghost Ink (#000000) on Canvas White (#FFFFFF) backgrounds.
- Apply Fog Button (#efefef) as the background for any button intended to be visually subtle but interactive.
- Ensure all interactive elements, where visible borders are present, such as ghost buttons, use a 1px Ghost Ink (#000000) border.
- Adhere to 0px border-radius for all component corners, reinforcing a sharp, precise aesthetic.
- Utilize 16px as the standard vertical element separation, with larger 40px gaps for section breaks.

### Don'ts

- Avoid using any colors other than Ghost Ink (#000000), Canvas White (#FFFFFF), Fog Button (#efefef), and the browser default blue link color in the UI.
- Do not introduce rounded corners or box shadows, as the system relies on flat surfaces and sharp edges.
- Do not deviate from the specified font families or their assigned roles; Times is for content, Arial for controls.
- Avoid decorative gradients or background images that detract from the content-first focus.
- Do not use padding on cards; they should act as invisible containers using the default 0px padding.
- Do not apply custom styling to links; allow the browser default underlined blue to indicate interactivity.
- Never use less than 16px vertical element spacing, except for specific button padding.

### Layout

The page exhibits a full-bleed layout, maximizing screen width for content delivery. The hero section features a prominent, centered headline over a dark background. Content sections follow in a vertical stack, utilizing consistent vertical spacing. While the layout often features a single column for primary content, some areas suggest implicit two-column arrangements for text and visual pairings. Navigation primarily appears as a static top bar with interactive dropdowns, and occasional nested lists for sub-navigation. The overall density is comfortable, with ample breathing room between content blocks, but the information itself is presented concisely.

### Imagery

The site predominantly uses abstract, textural imagery with a muted, often blurred aesthetic, serving as atmospheric backdrops rather than explicit content. Product screenshots are minimal. Icons are monochrome, often using Ghost Ink outlines, maintaining the stark, high-contrast feel. Imagery density is low, with visuals primarily serving as decorative accents or visual breaks rather than key information carriers.
