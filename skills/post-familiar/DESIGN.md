---
version: alpha
name: Post Familiar
description: Post Familiar employs a stark, high-contrast visual language reminiscent of underground zine aesthetics. Dominated by black and white, the design uses bold, oversized typography and a narrow, extended custom typeface to create a sense of unconventional luxury. Color is introduced sparingly and vibrantly through small, functional 'badge' elements and outlined interactive states, acting as energetic accents against the monochrome canvas. The overall impression is one of confident boundary-pushing and exclusivity, with a raw, editorial feel.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  muted-ash: "#888888"
  experimental-pink: "#fc3192"
  vibrant-yellow: "#e8e536"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.064px
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: -0.08px
  heading:
    fontFamily: "system-ui"
    fontSize: 47px
    lineHeight: 1.05
    letterSpacing: -0.517px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 71px
    lineHeight: 1
    letterSpacing: -1.207px
  display:
    fontFamily: "system-ui"
    fontSize: 151px
    lineHeight: 0.9
    letterSpacing: -3.02px
spacing:
  buttonRadius: 50px
  elementGap: 20px
  sectionGap: 72px
components:
  badge-default:
    role: Informational tag or callout
  badge-warning:
    role: Highlighting status or special features
  badge-accent:
    role: Highlighting status or special features with brand color
  outlined-button:
    role: Primary interactive element that maintains a lightweight feel.
  text-input-modal:
    role: User input field within a modal or form.
  navigation-link:
    role: Top-level navigation item.
  subscription-modal:
    role: Prominent information capture overlay.
---

## Overview

**North Star:** monochromatic editorial starkness

Post Familiar employs a stark, high-contrast visual language reminiscent of underground zine aesthetics. Dominated by black and white, the design uses bold, oversized typography and a narrow, extended custom typeface to create a sense of unconventional luxury. Color is introduced sparingly and vibrantly through small, functional 'badge' elements and outlined interactive states, acting as energetic accents against the monochrome canvas. The overall impression is one of confident boundary-pushing and exclusivity, with a raw, editorial feel.

### Do's

- Prioritize high contrast between text and background, typically #000000 on #ffffff or vice-versa.
- Use Tomato-Grotesk for all primary headlines, navigation, and brand messages, scaling sizes for impact and using negative letter-spacing.
- Employ the 50px border-radius consistently for all interactive elements like buttons, badges, and input fields.
- Introduce brand accent colors (Experimental Pink #fc3192, Vibrant Yellow #e8e536) sparingly, primarily for borders of interactive states or small badges.
- Maintain a spacious layout with minimum 72px vertical padding for major sections to allow visual breathing room.
- Utilize a 1px border weight for all outlined elements and inputs, ensuring minimal visual footprint.
- Brand logo and key branding elements should be predominantly monochrome, relying on texture and typography instead of color.

### Don'ts

- Avoid using multiple colors for text or backgrounds within a single section; stick to the high-contrast black and white palette.
- Do not deviate from the specified font families or their prescribed letter-spacing and line heights.
- Never use small border-radii; all rounded corners must adhere to the 50px value to maintain the distinct badge/pill shape.
- Refrain from using drop shadows or heavy elevation on components; the aesthetic is flat and graphic-driven.
- Do not cram text or elements; whitespace is crucial for this brand's bold, editorial feel.
- Avoid using generic blue for links; active links should either be white/black or outlined with an accent color.
- Do not use gradients; the system relies on solid color blocks and sharp contrasts.

### Layout

The page model alternates between full-bleed sections and implicitly constrained content. The hero section is full-bleed black with oversized, animating typography (Tomato-Grotesk, Tiempos) centered or spread impactfully across the viewport. Subsequent sections often feature a full-bleed black or white background with content (text, occasional subtle graphics) centered or left-aligned within a generous implied max-width. Vertical rhythm between sections is spacious, using prominent section gaps of 72px. Navigation is minimal: 'Menu' top-right, 'Shop' and 'Bag' fixed bottom-left and bottom-right across the viewport. Text often appears stacked and centered, or in alternating text-left/image-right (or graphic-right) patterns. There's no evident grid usage for cards or features, favoring large, individual content blocks.

### Imagery

This design system primarily uses minimal imagery, focusing instead on bold typography and graphic elements. When present, images are often abstract or highly stylized, sometimes with a distressed or glitch-like overlay. There are no traditional product shots or lifestyle photography. Icons are minimal, outlined, and monochromatic, used functionally (e.g., menu, bag, arrow). The density is low, making imagery highly impactful when deployed, contributing to the site's art-forward, content-rich presentation rather than being purely decorative.
