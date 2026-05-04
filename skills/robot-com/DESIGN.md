---
version: alpha
name: robot.com
description: robot.com employs a stark, high-contrast visual system that balances industrial-grade clarity with surprising moments of digital vibrancy. A predominantly achromatic palette of deep grays, crisp whites, and a single vivid yellow accent creates a no-nonsense, functional aesthetic. Typography is confident and compact, establishing an authoritative voice, while components feature generous rounded corners for approachability.
colors:
  midnight-graphite: "#262626"
  pure-canvas: "#ffffff"
  buttered-toast: "#f8f6f3"
  deepest-ink: "#000000"
  subtle-gray: "#727272"
  card-shadow: "#2d2d2d"
  dusty-lead: "#8f8e8d"
  robot-yellow: "#fff65d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.22
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.16
    letterSpacing: -0.38px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.96
    letterSpacing: -21.4px
spacing:
  buttonRadius: 30px
  elementGap: 4px
  sectionGap: 173px
components:
  primary-action-button:
    role: Main call to action
  ghost-action-button:
    role: Secondary action or subtle navigation
  outline-text-button:
    role: Tertiary navigation or interactive text
  dark-card:
    role: Content container on light backgrounds
  light-card:
    role: Content container on light backgrounds
  trustee-logo-card:
    role: Container for partner logos
  media-play-button:
    role: Overlay for video content
  nav-dropdown:
    role: Navigation menu item container
---

## Overview

**North Star:** Industrial clarity, digital spark.

robot.com employs a stark, high-contrast visual system that balances industrial-grade clarity with surprising moments of digital vibrancy. A predominantly achromatic palette of deep grays, crisp whites, and a single vivid yellow accent creates a no-nonsense, functional aesthetic. Typography is confident and compact, establishing an authoritative voice, while components feature generous rounded corners for approachability.

### Do's

- Use Midnight Graphite (#262626) for primary text and major background sections to maintain seriousness.
- Introduce Robot Yellow (#fff65d) solely for primary calls to action or key highlight elements to maximize impact and distinctiveness.
- Apply a 24px border-radius generously to cards and most interactive elements for a consistent, approachable softness.
- Implement the Yellix font with its custom negative letter-spacing for larger headlines to produce a compact, modern text block.
- Ensure generous use of Pure Canvas (#ffffff) as a page background and for text on dark surfaces to preserve high contrast and readability.
- Utilize 4px as the foundational unit for all internal element spacing, ensuring a dense but consistent layout.
- Employ the Pill Button radius (9999px) exclusively for small, distinct interactive elements like media controls or tags.

### Don'ts

- Do not use Robot Yellow (#fff65d) for decorative purposes or text that is not a primary action, to avoid diluting its impact.
- Avoid arbitrary border-radius values; stick to 24px for cards/buttons, 30px for primary buttons, 4px for fine details, and 9999px for pills.
- Do not introduce additional chromatic colors; the visual system relies on the interplay of neutrals and the single Robot Yellow accent.
- Never use generic system fonts; Yellix font is critical for branding, ensure 'ss01' and 'salt' features are enabled.
- Refrain from heavy drop shadows; the design system favors flat, high-contrast surfaces and minimal elevation.
- Do not use letter-spacing values other than those specified for Yellix, as tracking is a key aspect of its compact look.
- Avoid cluttering the layout; maintain a clear hierarchy with distinct backgrounds and spacing, reflecting the 'compact' density.

### Layout

The page structure is primarily max-width contained and centered, allowing for expansive hero sections that can be full-bleed video or large product renders. There's a clear section rhythm with alternating dark and light background bands for content blocks. Content arrangement often features two-column text-left/image-right or centered stacks. Card grids are prevalent for displaying features or partners. The density is generally compact, allowing information-rich blocks, but with consistent vertical spacing between sections. Navigation is a sticky top bar with a simple button for 'Talk to sales'.

### Imagery

This design system uses a blend of product photography and abstract graphical elements. Product imagery features tight crops of robots, often against pure white or neutral gray backgrounds, emphasizing the object itself without lifestyle context. Illustrations appear to be filled, geometric, and monochrome, often using the brand's key neutrals. Icons are outlined, exhibiting a moderate stroke weight. The primary role of imagery is product showcase and explanatory content, presented with a high degree of visual density in some sections (e.g., logo grids) but otherwise balanced with text.
