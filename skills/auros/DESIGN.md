---
version: alpha
name: Auros
description: Auros employs a deep-sea command center aesthetic: dark, absorbing tones of teal and blue-black serve as the canvas, punctuated by a radiant, almost neon gradient of pink, purple, and green. Typography is modern and precise, with a strong emphasis on spaciousness and clarity against the dark backdrop. Components are generally dark, with subtle variations in background teal for surface hierarchy, and liberal use of large radius values for a soft-edged feel. Accents are reserved for interactive elements and highlights, creating a focused, high-tech impression.
colors:
  midnight-teal: "#012624"
  deep-ocean: "#011d1c"
  accent-teal: "#003734"
  soft-silver: "#bbc7c6"
  frost-white: "#F2F2F2"
  near-white: "#EDFFFE"
  slate-gray: "#333333"
  off-black: "#222222"
  pale-pink-glow: "#FDE9FF"
  soft-gray: "#707777"
  vivid-aqua-to-gold-gradient: "#00827c"
  ethereal-spectrum: "#cbfffc"
  dynamic-flow-gradient: "#fadde6"
  tech-surge-gradient: "#CBE0F9"
  soft-transition-gradient: "#edfefe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.12px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.055px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: 0.15px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.3
    letterSpacing: -0.012px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 1.3
    letterSpacing: -0.013px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1
    letterSpacing: -0.02px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -0.04px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 20px
  sectionGap: 68px
components:
  ghost-button-light-text:
    role: Secondary action button for low-priority interactions or link-like behavior.
  primary-action-button-gradient-fill:
    role: Prominent calls to action, drawing attention with its distinctive gradient.
  action-card-accent-teal-background:
    role: Interactive cards highlighting specific services or key information.
  ghost-card-minimal:
    role: Informational cards that blend with the background, using internal content for visual hierarchy.
  navigation-link:
    role: Interactive navigation items in the header or footer.
---

## Overview

**North Star:** Deep-sea radiant data

Auros employs a deep-sea command center aesthetic: dark, absorbing tones of teal and blue-black serve as the canvas, punctuated by a radiant, almost neon gradient of pink, purple, and green. Typography is modern and precise, with a strong emphasis on spaciousness and clarity against the dark backdrop. Components are generally dark, with subtle variations in background teal for surface hierarchy, and liberal use of large radius values for a soft-edged feel. Accents are reserved for interactive elements and highlights, creating a focused, high-tech impression.

### Do's

- Use 'Midnight Teal' (#012624) as the default background for all main page content areas to maintain the consistent dark theme.
- Apply 'Matter' font family for all text elements, prioritizing appropriate weight and letter spacing for readability at specific sizes.
- Utilize 16px border radius for all cards and visually distinct information blocks to ensure a consistent soft-edged aesthetic.
- For primary call-to-action buttons, apply the 'Vivid Aqua to Gold Gradient' (linear-gradient(90deg, rgb(0, 130, 124) 0%, rgb(203, 255, 252) 100%)) as a background fill.
- Ensure headings use 'Near White' (#EDFFFE) for maximum contrast and prominence on dark backgrounds.
- Maintain a clear visual hierarchy by differentiating interactive cards with 'Accent Teal' (#003734) backgrounds from more subtle, transparent cards.
- Implement a generous vertical spacing of 68px between main sections to provide visual breathing room and clarity.

### Don'ts

- Do not use highly saturated or light colors for large background areas; maintain the integrity of the dark theme.
- Avoid using low contrast text on dark backgrounds; ensure main text uses 'Near White' (#EDFFFE) or 'Soft Silver' (#bbc7c6) as appropriate.
- Do not use generic square corners for interactive elements or cards; always apply the defined border radii.
- Refrain from introducing additional font families; 'Matter' and 'Arial' are the only approved typefaces.
- Avoid excessive use of strong shadows; the design relies on color and background variations for surface differentiation rather than elevation effects.
- Do not break the established spacing rhythm; consistently apply 68px for section gaps and 20px for element gaps.

### Layout

The page employs a max-width 1440px centered layout for most content, maintaining readability and structure. The hero section, however, is full-bleed, featuring a dark background with a pronounced celestial radial gradient and large, centered typography. The section rhythm is consistent, separated by substantial vertical spacing of 68px between blocks. Content is arranged in alternating patterns, often featuring text on the left and abstract visuals or cards on the right, or vertically stacked centered content for key messages. There's a subtle 3-column card grid for features. The overall density is spacious, emphasizing individual content blocks. Navigation is a sticky top bar with clearly defined links and a prominent gradient-filled 'Partner With Us' button.

### Imagery

This design system uses a minimal approach to imagery, focusing primarily on abstract digital graphics and subtle animations for atmosphere rather than specific photography or product illustrations. Where present, it features scattered particle effects and molecular-like structures (e.g., the large sphere of dots and the connected 'blob' shapes), rendered in colors that subtly shift between shades of the brand's teal and soft pink. These are primarily decorative, contributing to the high-tech, liquid data feel. Icons are typically outlined and monochromatic, matching the overall sleek and understated UI. The density of imagery is low, allowing typography and spacious layouts to dominate.

### Elevation

The design system explicitly avoids traditional shadow-based elevation. Instead, visual hierarchy and depth are created through variations in background color (using 'Midnight Teal', 'Deep Ocean', and 'Accent Teal' for successive surface levels) and soft background gradients. Components acquire visual weight or distinction through these subtle color shifts and generous padding, rather than cast shadows, contributing to a modern, almost flat aesthetic with rich background textures.
