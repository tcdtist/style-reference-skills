---
version: alpha
name: Siena
description: Siena's visual system evokes a raw, cinematic grit, operating in a deep dark mode with sparse, high-contrast typography. The design relies on angular forms and a stark white accent color that punctuates the darkness. Components are minimal, often borderless, and prioritize functionality over decorative embellishment. The overall experience is one of understated intensity, allowing textual content and motion to drive narrative.
colors:
  midnight-screen: "#000000"
  graphite-canvas: "#1f1f1f"
  ghost-ivory: "#faf7ef"
spacing:
  cardRadius: 14px
  elementGap: 1px
  sectionGap: 48px
components:
  ghost-button:
    role: Primary action button
  film-thumbnail-card:
    role: Decorative content display
  circular-dark-overlay:
    role: Interactive indicator or avatar
  ghost-text-badge:
    role: Informational tag
---

## Overview

**North Star:** midnight canvas, stark light

Siena's visual system evokes a raw, cinematic grit, operating in a deep dark mode with sparse, high-contrast typography. The design relies on angular forms and a stark white accent color that punctuates the darkness. Components are minimal, often borderless, and prioritize functionality over decorative embellishment. The overall experience is one of understated intensity, allowing textual content and motion to drive narrative.

### Do's

- Prioritize Midnight Screen (#000000) for all main backgrounds and primary content containers for a true dark mode experience.
- Use Ghost Ivory (#faf7ef) exclusively for all readable text, interactive element borders, and essential icons to maintain high contrast and visual focus.
- Apply NB International at 400 weight with 0.08em letter spacing for general body text and functional UI copy.
- Employ Neue Brucke at 400 weight with 0.15em letter spacing for small label text, ensuring legibility and a distinctive style in compact spaces.
- Maintain a compact element layout using 1px gaps between tightly related elements and 6px padding for internal component spacing.
- Keep all interactive elements, like buttons, with 0px border-radius, emphasizing sharp, angular lines.
- Reserve the 14px border-radius specifically for content cards, distinguishing them from interactive controls.

### Don'ts

- Avoid using saturated or chromatic colors for backgrounds or primary textual content; color should be reserved for subtle accents or functional indicators only.
- Do not introduce unnecessary shadows; the design relies on flat surfaces and high contrast for hierarchy, not elevation.
- Refrain from using rounded corners on interactive elements; they should remain sharp and angular.
- Do not deviate from NB International and Neue Brucke for typography; these fonts define the brand's voice.
- Avoid large, airy padding or gaps between elements and sections; the design embraces a compact, dense arrangement.
- Do not use gradients; the visual system is anchored in flat, high-contrast color blocks.

### Layout

The page primarily uses a full-bleed layout, allowing hero sections and visual content to extend to the edges. Content sections tend to be centered, often featuring a single, strong headline or visual. The rhythm is established by distinct, self-contained blocks. There are no visible grid structures for content layout beyond implicit alignment. The design feels dense but deliberate, with minimal negative space, creating an immersive, focused experience. Navigation is likely a sticky top navigation or a minimalist hamburger menu to preserve screen space for content.

### Imagery

This design system is image-centric, showcasing full-bleed hero visuals and contained film stills within cards. All imagery is treated naturally, focusing on the cinematic quality of the content. There are no stylistic overlays or effects. Icons, when present, are minimalistic, outlined, and monochromatic (Ghost Ivory), serving as functional cues rather than decorative elements. The density is image-heavy, with visuals occupying significant screen real estate, letting the film content speak for itself.
