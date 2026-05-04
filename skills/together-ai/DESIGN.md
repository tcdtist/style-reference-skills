---
version: alpha
name: Together AI
description: This system evokes a sense of advanced analytical capability, balancing deep, technical backgrounds with moments of soft-hued clarity. The predominant use of near-black and white creates a high-contrast, data-centric atmosphere. Subtle, pastel-like card colorations provide distinct 'data blocks' against the stark background. Hard-edged rectilinear forms dominate, with soft corner radii only appearing on interactive elements, grounding the digital sophistication with approachable interaction points. Large, whispering headlines in a custom AI-inspired typeface set a tone of quiet authority.
colors:
  midnight-ink: "#010120"
  canvas-white: "#FFFFFF"
  void-black: "#000000"
  smoke-gray: "#4D4D4D"
  frost-gray: "#D6D6D6"
  sky-blue-block: "#C1DFF9"
  cosmic-pink-block: "#FDE3F6"
  dawn-orange-block: "#FFDCCD"
  cyan-whisper: "#C8F6F9"
  regal-violet: "#BDBBFF"
  electric-orange: "#FC4C02"
  magenta-flash: "#EF2CC1"
  cyan-glow: "#70E9F0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.007px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.3
    letterSpacing: -0.44px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: -0.42px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -1.92px
spacing:
components:
  stat-metric-cards:
    role: 
  research-cards-dark:
    role: 
  button-group-announcement-banner:
    role: 
  primary-dark-button:
    role: Call to Action
  secondary-ghost-button:
    role: Secondary Action
  light-ghost-button:
    role: Secondary Action on Light Background
  badge-dark-background:
    role: Categorization, Status
  badge-light-background:
    role: Categorization, Status
  light-information-card:
    role: Content Display, Feature Highlight
  colored-information-card-blue:
    role: Statistical Highlight
  colored-information-card-pink:
    role: Statistical Highlight
  colored-information-card-orange:
    role: Statistical Highlight
  navigation-bar:
    role: Global Navigation
---

## Overview

**North Star:** Shifting geometric planes under a deep indigo sky. Bold textual headlines punctuate against a canvas of near-black and clinical white, punctuated by soft, almost pastel blocks of color.

This system evokes a sense of advanced analytical capability, balancing deep, technical backgrounds with moments of soft-hued clarity. The predominant use of near-black and white creates a high-contrast, data-centric atmosphere. Subtle, pastel-like card colorations provide distinct 'data blocks' against the stark background. Hard-edged rectilinear forms dominate, with soft corner radii only appearing on interactive elements, grounding the digital sophistication with approachable interaction points. Large, whispering headlines in a custom AI-inspired typeface set a tone of quiet authority.

### Do's

- Use 'The Future' font for all primary textual content to maintain a consistent high-tech, yet approachable, brand voice.
- Apply a 4px `borderRadius` to all buttons and badges for subtle modern rounding.
- Prioritize `Midnight Ink` (#010120) and `Canvas White` (#FFFFFF) for primary background and text combinations, achieving high contrast.
- Utilize `Regal Violet` (#BDBBFF) as the primary accent color for active navigation states and subtle interactive highlights.
- Frame informational cards with `20px 40px` padding when on dark backgrounds, using `rgba(255, 255, 255, 0.08)` as background.
- Employ `PP Neue Montreal Mono` for all technical annotations, code blocks, or data-specific text to differentiate programmatic content.
- Ensure large headlines (64px) apply `-0.0300em` letter-spacing for visual tightness.

### Don'ts

- Do not introduce new border radii beyond 4px, 8px, or 16px; prefer the consistent 4px default for interactive elements.
- Avoid using highly saturated, vivid colors for large background blocks; reserve them only for small, pointed iconography or specific branding elements.
- Do not use generic system fonts; 'The Future' and 'PP Neue Montreal Mono' are integral to the brand's unique character.
- Do not deviate from the established padding scale; consistent spacing reinforces information hierarchy.
- Avoid applying shadows directly to most content cards; depth is achieved primarily through background shifts and subtle layering of semi-transparent surfaces.
- Do not place body copy in colors other than `Void Black` or `Canvas White` on their respective contrasting backgrounds, or `Smoke Gray` for secondary text.
- Avoid overly playful or organic shapes; the aesthetic is sharp, precise, and tech-focused.

### Layout

The site employs a mixed layout model, primarily adopting a full-bleed dark hero section with a centered, split text and abstract visual. Subsequent sections alternate between full-width dark backgrounds and standard content-width, centered light sections. Vertical spacing between sections is generous, leading to a spacious, comfortable density. Content arrangement often utilizes a centered stack for headlines and subtext, followed by feature blocks in a 3-column grid, or alternating text-left/visual-right patterns. The navigation is a sticky top bar, often subtly transparent/frosted over the dark hero, then opaque on light backgrounds.

### Imagery

The visual language is split between abstract 3D renders and subtle iconography, with an absence of traditional photography. Large, abstract 3D graphics in the hero section feature overlapping, translucent geometric forms with soft gradients and blurred edges, suggesting complexity and interconnectedness. These are rendered to appear ethereal yet structured, against a dark backdrop. Elsewhere, icons are simple, often monochromatic, and directly support the accompanying text, serving an explanatory role. The overall density of imagery is moderate, strategically placed to illustrate concepts or provide visual breaks without dominating the content.
