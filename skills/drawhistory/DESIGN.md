---
version: alpha
name: DrawHistory
description: DrawHistory utilizes a subdued, grounded aesthetic with a primary focus on dark text on light, almost parchment-like backgrounds. The visual system balances strong typographic hierarchy with soft, substantial UI elements. A distinctive palette of desaturated 'earthy' neutrals and a single vivid orange accent punctuates functional elements without overwhelming the calm, editorial feel. Components are notably chunky, with generous padding and rounded corners, creating a sense of weight and importance.
colors:
  canvas-parchment: "#e5e7eb"
  near-black: "#000000"
  onyx-card: "#1d1d1b"
  sage-dark: "#3d3b2f"
  paper-white: "#ffffff"
  wet-sand: "#e1d3c7"
  steel-gray: "#999999"
  fog-input: "#b3b3b3"
  pale-clay: "#faf6f3"
  flame-orange: "#ff6714"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.14
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.13
    letterSpacing: -0.315px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 104px
    lineHeight: 0.95
    letterSpacing: -5.2px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 80px
components:
  ghost-navigation-link:
    role: Primary navigation links and subtle inline calls to action.
  standard-button:
    role: General action buttons, such as 'Read More' or 'Learn More'.
  dark-card-button:
    role: Buttons within Sage Dark colored cards, offering a distinct visual cue.
  onyx-card-button:
    role: Buttons within Onyx Card colored cards, ensuring visibility.
  card-surface-default:
    role: Generic display panels for content, often used without internal padding for media.
  card-surface-elevated:
    role: Prominent content blocks that require optical separation and visual weight.
  text-input:
    role: Standard user input fields.
---

## Overview

**North Star:** Warm parchment manifesto

DrawHistory utilizes a subdued, grounded aesthetic with a primary focus on dark text on light, almost parchment-like backgrounds. The visual system balances strong typographic hierarchy with soft, substantial UI elements. A distinctive palette of desaturated 'earthy' neutrals and a single vivid orange accent punctuates functional elements without overwhelming the calm, editorial feel. Components are notably chunky, with generous padding and rounded corners, creating a sense of weight and importance.

### Do's

- Prioritize Eloquia Text for all text content, selecting weights 300 or 400 to achieve a calm, editorial feel.
- Use Canvas Parchment (#e5e7eb) as the dominant background color for most sections, establishing a foundational light tone.
- Apply 16px border-radius to card elements and images for a consistent soft, chunky aesthetic.
- Utilize 40px internal padding for cards or prominent blocks to ensure generous content separation and visual weight.
- Employ Near Black (#000000) for all primary text and headings against lighter backgrounds for maximum contrast.
- Introduce Flame Orange (#ff6714) sparingly, primarily for small, functional accents like status indicators or emphasis rather than large blocks of color.
- Maintain a clear visual hierarchy by varying type sizes from the Eloquia Text profile, using larger sizes with tighter line heights for headings and smaller sizes with greater line heights for body text.

### Don'ts

- Avoid excessive use of highly saturated colors; the palette focuses on desaturated neutrals with a single accent.
- Do not deviate from the established border radii of 16px for cards and 8px for buttons; this defines the component's substance.
- Refrain from thin or ghosted interface elements; components should feel substantial with generous padding and clear backgrounds.
- Do not introduce additional font families beyond Eloquia Text and Roboto Mono, or deviate from their specified weights and sizes.
- Avoid complex shadow effects; the system relies on backgroundColor changes and generous spacing for visual separation instead of elevation.
- Do not use small padding values; elements need breathing room, favoring 8px as a minimum for small gaps and 40px for component padding.
- Do not use full-width text blocks, ensure content is contained within a comfortable reading measure, typically allowing for generous horizontal spacing.

### Layout

The page primarily employs a max-width contained layout, with significant horizontal padding creating a framed effect. Sections feature a strong vertical rhythm, often separating content blocks with generous white space or subtle background color changes (e.g., from Canvas Parchment to Wet Sand). Content arrangement often alternates between full-width content stacks, and two-column layouts where text and imagery are paired. There's a particular emphasis on chunky content cards, frequently centered, serving as key interaction points. The navigation is a top bar, with ghost-style links.

### Imagery

Imagery largely consists of tight product crops, specific brand logos, and occasional professional, staged photography of individuals, treated with a natural color palette. Images are typically contained within card-like structures with 16px rounded corners, often serving as a focal point within content blocks. The imagery is explanatory and supportive, enhancing content without being purely decorative.Icons are simple, often outlined, with a medium stroke weight, in either Near Black or Paper White.
