---
version: alpha
name: Datalands
description: Datalands embraces a stark, high-contrast dark mode aesthetic, where deep black functions as a vast canvas for bold, expressive typography and selective pops of chromatic color. The design system emphasizes strong visual statements through custom, often unconventional typefaces and generously spaced layouts. Interaction elements such as buttons and inputs feature large radii, giving them a distinct soft, almost friendly, tactile quality against the severe background. Color is used sparingly but impactfully as an accent for calls to action or to highlight specific UI elements, breaking the monochrome with vibrant hues.
colors:
  midnight-ink: "#000000"
  ghost-white: "#ffffff"
  storm-gray: "#111212"
  mist: "#f3f3ef"
  charcoal: "#3d3d3d"
  light-gray: "#d9d9d9"
  twilight-black: "#1d1a1a"
  deep-space-blue: "#122d8b"
  cyan-sky: "#94bcee"
  fuchsia-pulse: "#fc74dd"
  lava-orange: "#ff4c33"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: 0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.45
    letterSpacing: -0.003px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.008px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.25
    letterSpacing: -0.036px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 358px
    lineHeight: 0.83
    letterSpacing: -0.01px
spacing:
  cardRadius: 30px
  buttonRadius: 96px
  elementGap: 10px
  sectionGap: 80px
components:
  ghost-navigation-button:
    role: Navigation and secondary actions.
  primary-action-button:
    role: Key interaction calls to action.
  dark-overlay-button:
    role: Interactive elements within dark sections, often containing media.
  circular-link-button:
    role: Decorative and functional links, often with icons.
  pill-input-field:
    role: Data entry fields requiring user input.
---

## Overview

**North Star:** Monochromatic Canvas, Vivid Punctuation

Datalands embraces a stark, high-contrast dark mode aesthetic, where deep black functions as a vast canvas for bold, expressive typography and selective pops of chromatic color. The design system emphasizes strong visual statements through custom, often unconventional typefaces and generously spaced layouts. Interaction elements such as buttons and inputs feature large radii, giving them a distinct soft, almost friendly, tactile quality against the severe background. Color is used sparingly but impactfully as an accent for calls to action or to highlight specific UI elements, breaking the monochrome with vibrant hues.

### Do's

- Prioritize #000000 as the dominant background for most sections to maintain the system's dark theme.
- Use OZIK Black at its largest sizes for hero text and major headings, establishing text as a monumental visual element.
- Apply 96px border-radius to all primary interactive elements like buttons and input fields for a soft, pill-like aesthetic.
- Emphasize actions with the #fc74dd Fuchsia Pulse as a vibrant background color for primary CTA buttons.
- Utilize Martian Mono for all navigation items, labels, and meta-information to introduce a technical, structured feel.
- Ensure generous vertical spacing between sections, using at least '80px' sectionGap for a comfortable, uncrowded layout.
- Use #ffffff for primary titles and body text against dark backgrounds, ensuring maximum contrast and readability.

### Don'ts

- Avoid using light backgrounds extensively; the system relies on a predominantly dark canvas.
- Do not use subtle variations of gray for backgrounds; maintain the stark contrast between #000000 and the few light elements.
- Do not introduce small, sharp-edged buttons or input fields; maintain the generous 96px border-radius for softness.
- Avoid generic sans-serif fonts for display or body text; the custom typefaces are integral to the brand's unique voice.
- Do not use muted or desaturated colors for primary calls to action; vibrancy is key for accent colors.
- Do not clutter layouts; maintain ample elementGap and cardPadding for clear, purposeful visual hierarchy.
- Avoid using default browser link colors unless specifically for unstyled, secondary links within body text.

### Layout

The page maintains a full-bleed dark canvas, with content primarily flowing vertically. The hero section features monumental, centered typography over a stark black background. Subsequent sections follow a rhythm of consistent vertical spacing, creating an uncrowded feel. Content arrangement often appears as centered stacks of text, or less frequently, as split sections with text and abstract visuals. There's a subtle grid usage for showcasing case studies or features, often within a card-like structure. Navigation is a minimalist top bar, displaying concise information and subtle interactive elements, ensuring the main content remains the focus.

### Imagery

The visual language for imagery is minimal and functional. Photography is not present. Illustrations appear as abstract, geometric shapes (circles, rectangles) with bold, vivid colors (like neon green or orange) on dark backgrounds, often used as data visualizations. Icons are simple, outlined, and monochromatic (white on black or black on colored backgrounds) with a medium stroke weight. Imagery serves primarily as explanatory content or decorative atmosphere, providing visual interest without distracting from the highly typographic focus. Image density is low, making way for ample negative space and large typography.
