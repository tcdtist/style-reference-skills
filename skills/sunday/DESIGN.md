---
version: alpha
name: sunday
description: sunday's visual system evokes a sleek, high-tech interface with a strong sense of precision. Its foundation is a stark monochrome canvas, primarily white with deep black accents, creating high contrast. Interactivity is signaled by a singular, vibrant pinkish-purple hue, used sparingly for emphasis. Typography is impactful yet restrained, maintaining clarity in a compact layout. Components are lightweight, featuring soft rounded corners and subtle elevation for hierarchy, avoiding heavy visual elements to maintain an airy feel.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  subtle-gray: "#736f7c"
  border-ash: "#dedede"
  accent-slate: "#7f7f7f"
  ghost-shadow: "#8b8893"
  divider-silver: "#bdbdbd"
  vivid-orchid: "#ff17e9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.78
    letterSpacing: 0.96px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 1.12px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.14
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.13
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.95
    letterSpacing: -0.48px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.8
    letterSpacing: -1.92px
  display:
    fontFamily: "system-ui"
    fontSize: 200px
    lineHeight: 1
    letterSpacing: -10px
spacing:
  cardRadius: 16px
  buttonRadius: 64px
  elementGap: 8px
  sectionGap: 56px
components:
  primary-filled-button:
    role: Call to action
  ghost-link-button:
    role: Secondary action or link
  standard-card:
    role: Content container, feature display
  asymmetric-section-card:
    role: Prominent content section
  text-input-field:
    role: User data entry
  navigation-bar:
    role: Global navigation
  highlight-badge:
    role: Categorization, status indicator
---

## Overview

**North Star:** Monochromatic Precision, Neon Pulse

sunday's visual system evokes a sleek, high-tech interface with a strong sense of precision. Its foundation is a stark monochrome canvas, primarily white with deep black accents, creating high contrast. Interactivity is signaled by a singular, vibrant pinkish-purple hue, used sparingly for emphasis. Typography is impactful yet restrained, maintaining clarity in a compact layout. Components are lightweight, featuring soft rounded corners and subtle elevation for hierarchy, avoiding heavy visual elements to maintain an airy feel.

### Do's

- Prioritize high-contrast text against backgrounds; use 'Midnight Ink' on 'Canvas White' or vice-versa.
- Apply 'Vivid Orchid' sparingly, only for interactive elements, highlights, and status indicators to maintain its impact.
- Use 'Helvetica Neue' universally for all typography, adjusting size, weight, and letter-spacing to establish hierarchy.
- Maintain a comfortable density with '8px' element gaps and '16px' card padding for all standard content blocks.
- Implement soft, rounded corners with '16px' radius for cards and inputs, and a distinct '64px' radius for primary buttons.
- Employ the navigation bar's shadow 'rgba(0, 0, 0, 0.15) 0px 12px 60px 0px' for key elevated elements only, such as fixed headers or modals.
- Ensure section transitions are clear using '56px' vertical spacing between distinct content blocks or by alternating surface backgrounds.

### Don'ts

- Avoid introducing additional saturated colors; 'Vivid Orchid' is the sole accent color.
- Do not use overly bold or heavy typography; 'Helvetica Neue' weight 400 is the standard, and heavier weights should be avoided even for large headlines.
- Refrain from using hard, square corners; embrace the '16px' and '64px' radii as a signature characteristic.
- Do not add additional box-shadows beyond the single defined nav shadow; elevation is kept minimal.
- Avoid decorative imagery that competes with the UI or introduces new color palettes.
- Do not vary line-height significantly from the established type scale; maintain a precise, compact rhythm.
- Never use '0px' border-radius on interactive elements unless specifically for a ghost link, as all actionable components have distinct rounding.

### Layout

The page maintains a centered, max-width '1328px' contained layout. The hero section features a left-aligned, commanding headline adjacent to a product visual on the right, creating an engaging split-layout. Subsequent sections largely follow a consistent vertical rhythm with '56px' section gaps. Content often alternates between dark and light backgrounds. Feature sections implement a card-grid pattern, sometimes with asymmetric '48px 0px 0px 48px' radii for visual distinction, presenting information in compact, digestible blocks. The navigation is a sticky top bar, providing global access with a subtle elevation shadow.

### Imagery

The imagery features highly polished product screenshots and candid, high-quality photography, often depicting people interacting with the payment system in a restaurant setting. Product shots tend to be isolated or tightly cropped, emphasizing the device or app interface. Photography is realistic, well-lit, and clean, with a focus on human connection and ease of use. Icons, when present, are simple, outlined, and monochromatic, typically 'Midnight Ink' or 'Accent Slate'. The density of imagery is balanced, serving to punctuate text sections and demonstrate product features rather than overwhelming the page.
