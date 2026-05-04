---
version: alpha
name: FlutterFlow
description: This design system evokes a 'deep space command center' atmosphere, achieved through a predominantly dark mode with complex, subtle gradients creating depth and energy. The primary visual tension arises from the interplay of smooth, expansive dark surfaces and bursts of vivid, luminous violet. Type is restrained, leveraging specific letter-spacing for refined legibility, while rounded corners on interactive elements provide a friendly counterpoint to the overall high-tech mood.
colors:
  midnight-ink: "#060311"
  slate-deep: "#161320"
  white-star: "#ffffff"
  mist-gray: "#9ba1ae"
  dark-star: "#333333"
  deep-violet: "#5800fd"
  cosmic-indigo: "#2415c6"
  dawn-violet: "#7066ed"
  flare-violet: "#882fe8"
  action-violet: "#6d5ef9"
  hero-gradient-outer: "#4b39ef"
  hero-gradient-inner: "#4b39ef"
  dividing-gradient: "#161320"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.57px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: 0.9px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.03px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
    letterSpacing: -0.038px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1
    letterSpacing: -0.045px
spacing:
  cardRadius: 24px
  buttonRadius: 1440px
  elementGap: 24px
  sectionGap: 48px
components:
  cta-button-group:
    role: 
  testimonial-card:
    role: 
  trusted-by-banner:
    role: 
  text-only-button-nav:
    role: Navigation and secondary actions
  basic-card:
    role: Information grouping without visual distinction
  deep-card:
    role: Content sections needing clear boundaries and subtle elevation
  shadowed-card:
    role: Interactive or highlighted cards requiring significant visual lift
---

## Overview

**North Star:** Deep Space Command Center. Expansive dark surfaces punctuated by vivid violet glows, like stars in a night sky.

This design system evokes a 'deep space command center' atmosphere, achieved through a predominantly dark mode with complex, subtle gradients creating depth and energy. The primary visual tension arises from the interplay of smooth, expansive dark surfaces and bursts of vivid, luminous violet. Type is restrained, leveraging specific letter-spacing for refined legibility, while rounded corners on interactive elements provide a friendly counterpoint to the overall high-tech mood.

### Do's

- Use Midnight Ink (#060311) for primary dark backgrounds and Slate Deep (#161320) for secondary elevated dark surfaces to create depth.
- Apply White Star (#ffffff) consistently for primary text and critical UI elements against dark backgrounds.
- Reserve Deep Violet (#5800fd) for interactive elements, links, and active states to highlight interaction points.
- Ensure large headlines (display-xl and display-lg) use Urbanist with the specified negative letter-spacing values to maintain a refined visual impact.
- Use a `max-width` on content areas to prevent stretching, maintaining readability and aesthetic balance.
- Round all interactive button elements with a 1440px border-radius to achieve a consistent pill shape and friendly interaction target.

### Don'ts

- Do not use generic gray tones for interactive elements; all actionable items should leverage Deep Violet (#5800fd) or White Star (#ffffff) for strong visual cues.
- Avoid using box-shadows on cards unless explicitly for the 'Shadowed Card' variant; rely on background color changes for surface distinction.
- Do not deviate from the specified type scale and letter-spacing for headlines; these choices define the distinctive typographic voice.
- Do not introduce highly saturated colors outside the brand's violet palette, as they will clash with the established atmosphere.
- Avoid small, square button shapes; instead, use either the Text Only Button or the Pill Button variants for consistency.

### Layout

The page primarily uses a full-bleed layout, particularly in hero sections, with content centered within an implied max-width when present. The hero features a large, centered headline over a dark, gradient background. Sections alternate between deep dark backgrounds and areas with more subtle gradients. Content is frequently arranged in multi-column grids or stacked, centered blocks. Feature sections often employ a 2-column text-left/image-right alternating pattern. The navigation is a sticky top bar, providing persistent access without encroaching on content.

### Imagery

The visual language is a blend of abstract graphics, product screenshots, and minimal, geometric icons. Product screenshots are contained within device mockups or card elements, often overlapping with the dark UI, making them feel integrated. Illustrations lean towards gradients of brand violets, abstract shapes, and subtle glow effects, contributing to the 'deep space' feel. Icons are typically monocolor, filled, and use the brand's violet or white for interaction. The overall density is balanced, with imagery serving both decorative atmosphere and explanatory content roles, often nestled within the dark, gradient-rich backgrounds.
