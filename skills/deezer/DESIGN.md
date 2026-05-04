---
version: alpha
name: Deezer
description: This design system evokes a 'Digital Nightclub' vibe, pairing a dark, almost black background with vibrant, single-hue accents. Prominent high-contrast typography, especially the massive, weighty headlines, grabs immediate attention. The liberal use of a vivid violet for interactive elements and highlights creates an energetic pulse against the deep neutrals, reminiscent of neon lighting in a dim space. Sharp corners on most elements are softened by a few key rounded components, adding subtle visual dynamism.
colors:
  midnight-void: "#0f0d13"
  ghost-white: "#fdfcfe"
  slate-echo: "#555257"
  ash-whisper: "#a9a6aa"
  deep-violet: "#a238ff"
  lavender-haze: "#d09aff"
  dark-plum: "#14041"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0.005px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: 0.004px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.04
    letterSpacing: 0.002px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.9
    letterSpacing: 0.013px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.71
    letterSpacing: 0.013px
spacing:
  cardRadius: 8px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 90-140px
components:
  pricing-card-premium-1-month-free:
    role: 
  faq-accordion:
    role: 
  cta-banner-live-the-music-with-deezer:
    role: 
  secondary-ghost-button:
    role: Action
  tertiary-dark-button:
    role: Action
  feature-card:
    role: Content container
  navigation-link:
    role: Navigation
---

## Overview

**North Star:** Electric Violet Nightclub – a bold, high-contrast digital space pulsates with vibrant purple against a deep, dark backdrop.

This design system evokes a 'Digital Nightclub' vibe, pairing a dark, almost black background with vibrant, single-hue accents. Prominent high-contrast typography, especially the massive, weighty headlines, grabs immediate attention. The liberal use of a vivid violet for interactive elements and highlights creates an energetic pulse against the deep neutrals, reminiscent of neon lighting in a dim space. Sharp corners on most elements are softened by a few key rounded components, adding subtle visual dynamism.

### Do's

- Prioritize Deep Violet (#a238ff) for all primary interactive elements to maintain energetic brand presence.
- Use Deezer Brand font exclusively for display headings (35px and above) and critical calls to action, leveraging weights 700 and 800 for maximum impact.
- Maintain a clear high-contrast hierarchy with Midnight Void (#0f0d13) and Ghost White (#fdfcfe) as primary text/background pairing.
- Apply 12px border-radius for primary buttons and 8px for cards and secondary buttons to establish a consistent softness.
- Ensure generous vertical spacing between sections (90-140px) to provide clear visual breaks and comfortable density.
- Utilize Inter font for all body copy, navigation, and detailed information, at weights 400-600 for optimal legibility.

### Don'ts

- Avoid using gray tones for primary interactive elements; reserve Deep Violet (#a238ff) for key actions.
- Do not use Deezer Brand font for body text or small labels; its scale and letter spacing are designed for display.
- Refrain from introducing additional saturated colors beyond the established violet palette, as it dilutes the brand's energetic focus.
- Do not use soft shadows for elevation; rely on background color shifts between Midnight Void (#0f0d13) and Ghost White (#fdfcfe) for depth.
- Avoid mixed border-radii within the same component type; stick to 12px for prominent buttons and 8px for cards.
- Do not introduce tight letter spacing on Inter font family smaller than 16px; it should remain 'normal' for readability.
