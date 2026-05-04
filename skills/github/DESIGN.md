---
version: alpha
name: GitHub
description: GitHub's design system evokes a dark, digital canvas – a midnight command center feel. Key elements are subtle translucency, glowing accents of blue, green, and violet, and a spacious, comfortable layout. Typography is precise and organized, contrasting bright text against deep backgrounds. Components are lightweight with rounded corners, often appearing as frosted overlays or bordered elements on a dark, unbounded canvas.
colors:
  deep-space: "#0d1117"
  midnight-ink: "#000000"
  code-canvas: "#151a22"
  subtle-gray: "#21262d"
  ash-gray: "#283041"
  ghost-white: "#ffffff"
  faded-silver: "#f0f6fc"
  ui-gray: "#9198a1"
  muted-text: "#7c8980"
  polar-blue: "#8dd6ff"
  spring-green: "#08872b"
  cosmic-violet: "#8c93fb"
  neon-green: "#5fed83"
  interface-blue: "#1f6feb"
  violet-glow: "#e6b7fe"
  blue-violet-orb: "#a7a2ff"
  vapor-trail-blue: "#5993d4"
  deep-gradient-start: "#000240"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.015px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
    letterSpacing: 0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: 0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.035px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.035px
spacing:
  cardRadius: 24px
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 24px
components:
  ghost-header-button:
    role: Navigation, secondary actions
  pill-ghost-button:
    role: Secondary, subtle actions, category filters
  primary-action-button:
    role: Main call to action
  outlined-accent-button:
    role: Secondary interactive actions, often related to product features
  code-block-card:
    role: Displaying code snippets or technical content
  floating-content-card:
    role: Elevated content blocks or interactive elements
  input-field:
    role: User text input
  pill-input:
    role: Search or short text inputs
---

## Overview

**North Star:** Midnight command center, subtly glowing

GitHub's design system evokes a dark, digital canvas – a midnight command center feel. Key elements are subtle translucency, glowing accents of blue, green, and violet, and a spacious, comfortable layout. Typography is precise and organized, contrasting bright text against deep backgrounds. Components are lightweight with rounded corners, often appearing as frosted overlays or bordered elements on a dark, unbounded canvas.

### Do's

- Prioritize Deep Space (#0d1117) as the canvas background for most page sections.
- Use Ghost White (#ffffff) for all primary body and heading text for maximum contrast on dark backgrounds.
- Apply Spring Green (#08872b) exclusively for primary call-to-action button backgrounds.
- Utilize Polar Blue (#8dd6ff) for all links, outlined buttons, and interactive icons.
- Apply a 6px border radius for most interactive elements like buttons and inputs, but use 60px for pill-shaped elements.
- Ensure cards use a larger 24px border radius, often with only top corners rounded for a more architectural feel.
- Maintain comfortable element spacing using multiples of 4px, especially 16px for elementGap.

### Don'ts

- Avoid using bright, saturated colors for backgrounds; stick to the dark neutral palette.
- Do not use generic gray borders (such as #f0f6fc) on interactive elements; Polar Blue (#8dd6ff) is reserved for interaction outlining.
- Never introduce hard, sharp corners on cards or primary buttons; maintain a consistent rounded aesthetic.
- Do not use overly large or decorative drop shadows; the system favors subtle glows and translucency over heavy elevation.
- Avoid dense packing of information; allow ample `elementGap` and `sectionGap` for a comfortable user experience.
- Do not vary font families outside of Mona Sans variants and monospace fallbacks; maintain typographic consistency.
- Avoid using Mona Sans Mono or ui-monospace for non-code content; these are specifically for technical text.

### Layout

The page primarily employs a max-width contained layout, though the hero section spans full-bleed with a deep, dark gradient background. Content sections follow a vertical rhythm, often featuring alternating left/right text-and-visual arrangements or centered stacks. Card grids, typically 3-column, are used for features. The density is spacious, providing ample breathing room between information blocks. Navigation is managed via a sticky top bar, featuring Ghost Header Buttons and a pill-shaped search input.

### Imagery

The visual language for imagery is characterized by glowing, abstract 3D elements and vibrant, often purple or blue-hued, digital illustrations. These are frequently featured as floating objects or emanating light sources against dark backgrounds, adding a sense of futuristic technology and depth. Product screenshots are clean and integrated, showing code or UI elements with subtle, contrasting highlights. Icons are typically outlined or filled in Ghost White or subtle grays, occasionally accented with Polar Blue. The imagery serves both decorative atmosphere and to explain complex concepts, with a density that allows for significant textual information on screen.
