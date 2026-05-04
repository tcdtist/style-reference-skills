---
version: alpha
name: WHOOP
description: WHOOP's design evokes a sense of precise, data-driven health monitoring. The dominant use of stark black and crisp white, punctuated by a deep indigo (#4a53ff), creates a high-contrast environment, mirroring the clarity of performance data. Softly rounded cards and buttons suggest an approachable interface for complex health metrics, while sharp, geometric typography reinforces the technical precision.
colors:
  midnight-base: "#000000"
  daylight-canvas: "#ffffff"
  ghost-gray: "#e5e7eb"
  arctic-mist: "#f3f5f9"
  stone-accent: "#808080"
  gravel-scale: "#999999"
  deep-indigo: "#4a53ff"
  warning-red: "#d03433"
  glow-yellow: "#fbca46"
  ruby-streak: "#a41517"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.49
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.29
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.13
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -1.2px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.09
    letterSpacing: -1.3px
  display-md:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -1.5px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.8
    letterSpacing: -4.8px
spacing:
  elementGap: 8-25px
  sectionGap: 48-80px
components:
  announcement-banner:
    role: 
  free-trial-card:
    role: 
  feature-cards-grid:
    role: 
  standard-button-bold:
    role: Primary Call to Action
  rounded-button-compact:
    role: Secondary Call to Action, Internal Navigation
  floating-pill-button:
    role: Contextual Call to Action
  ghost-button-inverse:
    role: Tertiary Action, Navigation Link
  card-default:
    role: Informational Content Block
  card-elevated:
    role: Engaging Content Block, Feature Showcase
  card-elevated-shadowed:
    role: Interactive or Prominent Card
  input-dark:
    role: Text Input Fields in Dark Sections
---

## Overview

**North Star:** High-contrast digital readout. Like numbers on a precision laboratory instrument, the design is clear, direct, and offers no visual ambiguity.

WHOOP's design evokes a sense of precise, data-driven health monitoring. The dominant use of stark black and crisp white, punctuated by a deep indigo (#4a53ff), creates a high-contrast environment, mirroring the clarity of performance data. Softly rounded cards and buttons suggest an approachable interface for complex health metrics, while sharp, geometric typography reinforces the technical precision.

### Do's

- Use proxima-nova for all typography, adjusting weights (400, 500, 600, 700) and sizes according to the type scale.
- Maintain a high-contrast ratio for text: #000000 on light backgrounds (#ffffff, #f3f5f9, #e5e7eb) and #ffffff on dark backgrounds (#000000, #191919).
- Apply 24px border radius to all informational cards and image containers, maintaining visual softness.
- Utilize 'Deep Indigo' (#4a53ff) exclusively for interactive states or key emphasis to draw attention.
- Ensure buttons adhere to either 60px (pill-like), 20px, or 50% (circular) border-radius, differentiating their roles.
- Use 'Ghost Gray' (#e5e7eb) for subtle borders and dividers to softly define sections without strong lines.
- Apply negative letter spacing to display text (e.g., -4.8px at 120px) to enhance visual impact and tighten headlines.

### Don'ts

- Do not introduce new color tones; stick to the established achromatic palette with 'Deep Indigo' (#4a53ff) as the sole brand accent.
- Avoid using drop shadows on cards unless it's for 'Card Elevated Shadowed' to maintain a flat, modern aesthetic.
- Do not deviate from proxima-nova; all text should remain within this font family to preserve brand consistency.
- Prevent mixing border radii on interactive elements; buttons should have distinct radii (60px, 20px, 50%) for clear identity.
- Do not use highly saturated colorful backgrounds for UI elements; maintain the neutral background schema.
- Avoid excessive use of the vivid semantic colors (#d03433, #fbca46, #a41517) as they are reserved for internal illustration detail.

### Layout

The page alternates between full-bleed dark sections and max-width contained light sections. The hero is full-bleed black with a centered, oversized white headline and subtext, creating a strong initial impact. Sections generally flow with consistent vertical spacing, often showcasing content in two-column arrangements (text alongside image/card) or three-column card grids. There's a clear visual rhythm established by the alternating background colors. The layout is centered within its contained sections, maintaining balance. Navigation is a sticky top bar with prominent 'JOIN NOW' button.

### Imagery

This site uses product photography and lifestyle imagery, often tightly cropped to focus on the WHOOP device in action. Photography features individuals engaging in athletic or everyday activities, conveying health and wellness. The images are typically vibrant, with natural lighting. Illustrations appear in some contexts, using a flat, vector-based style with muted but defined color palettes, serving a decorative role to break up text-heavy sections or highlight concepts. Images are generally contained within rounded cards (24px radius) rather than full-bleed, preventing them from dominating the page and maintaining focus on the surrounding UI. Icons are simple, monochrome, and filled.
