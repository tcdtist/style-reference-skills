---
version: alpha
name: drink818
description: The drink818 brand design system evokes a sense of understated luxury, blending natural tones with classic typography. A dominant muted green-gray serves as a grounding canvas, while a creamy off-white provides a soft, warm counterpoint for text and interactive elements. Typography is a mix of heritage serif for display and modern sans-serif for functional text, often with generous letter-spacing for an airy, refined feel. Interface elements are generally subtle, favoring rounded shapes and a focus on content over heavy decoration, with interactivity indicated by color shifts and slight elevation.
colors:
  agave-green: "#536451"
  parchment-white: "#f3e9d5"
  ink-black: "#0e1111"
  deep-gray: "#212121"
  lemon-zest: "#bebc65"
  stone-gray: "#aa9580"
  true-black: "#000000"
  coal-gray: "#424547"
  silver-mist: "#bbbbbb"
  warm-linen: "#faf7ef"
  pure-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.7
    letterSpacing: 1.1px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: 0.11px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: 0.945px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 2px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.05
    letterSpacing: 0.192px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: 0.16px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.9
    letterSpacing: 0.72px
spacing:
  cardRadius: 20px
  buttonRadius: 4px
  elementGap: 10px
  sectionGap: 55px
components:
  primary-filled-button:
    role: Main call to action
  navigation-button:
    role: Subtle UI element for navigation
  circular-icon-button-light:
    role: Small interactive elements
  circular-icon-button-transparent:
    role: Subtle interactive elements
  primary-input-field:
    role: User data entry
  secondary-input-field:
    role: Alternate user data entry
  image-card:
    role: Displaying product images or visuals
  warm-linen-card:
    role: Content container on lighter backgrounds
---

## Overview

**North Star:** earthy luxury parchment

The drink818 brand design system evokes a sense of understated luxury, blending natural tones with classic typography. A dominant muted green-gray serves as a grounding canvas, while a creamy off-white provides a soft, warm counterpoint for text and interactive elements. Typography is a mix of heritage serif for display and modern sans-serif for functional text, often with generous letter-spacing for an airy, refined feel. Interface elements are generally subtle, favoring rounded shapes and a focus on content over heavy decoration, with interactivity indicated by color shifts and slight elevation.

### Do's

- Prioritize Agave Green (#536451) as the primary background for full-screen overlays or prominent sections, and Parchment White (#f3e9d5) for text and interactive elements on these darker surfaces.
- Use CaslonPro for general body text and navigation, maintaining the provided size/line-height/letter-spacing combinations to ensure the classical, refined feel.
- Implement ABCFavoritMono for all input fields and dense data displays, ensuring generous letter-spacing to enhance its distinct monospace character.
- Apply 4px border-radius to all interactive buttons and navigational components for a subtle softening of edges, and 10-20px for larger content cards and input fields for a more prominent rounded aesthetic.
- Ensure headings use GravityVariable with its specific letter-spacing, particularly the negative tracking at larger sizes, to convey a crisp, modern presence.
- Leverage Ink Black (#0e1111) for primary text on Parchment White (#f3e9d5) or Warm Linen (#faf7ef) surfaces to maintain optimal contrast and readability.
- Maintain a comfortable density with element gaps typically around 10px and card padding at 16px to ensure visual breathability throughout the layout.

### Don'ts

- Avoid arbitrary use of #bebc65 (Lemon Zest) as a UI element; reserve it strictly for decorative backgrounds or product highlights as an accent, not for functional components.
- Do not introduce sharp, unrounded corners for interactive elements such as buttons and inputs, as the system consistently uses 4px or 10px radii.
- Refrain from using heavily saturated colors for backgrounds or large UI areas, as the system relies on a muted, earthy palette for its primary identity.
- Do not deviate from the specified letter-spacing values for typefaces, especially the unique tracking of GravityVariable and ABCFavoritMono, as these are critical to the brand's typographic tone.
- Avoid excessive use of elevation or shadows, as the design system favors subtle surface changes and color separation for hierarchy.
- Do not create dense, text-heavy blocks without sufficient line-height or letter-spacing, which would compromise the airy and refined feel of the typography.
- Do not combine multiple contrasting background colors within a single section unless specifically designed as an accent feature, as the system prioritizes monolithic color blocks for clarity.

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections and main content blocks, with internal content often contained within logical boundaries on a dominant Agave Green canvas. The hero section often features a large, impactful headline centered on a dark background. Section rhythm is created through alternating background colors, primarily the Agave Green base and lighter parchment-like surfaces, maintaining consistent vertical spacing. Content arrangement frequently alternates between text-left/visual-right patterns or centered stacks of information. Small card grids are used for features or product displays. The overall density feels comfortable, with generous breathing room around elements. Navigation is handled by a fixed top bar with understated text links and distinct 'Find Us' and 'Buy Now' buttons.

### Imagery

The visual language predominantly features product photography, specifically tightly cropped product bottles against neutral backgrounds or within minimal lifestyle contexts. Imagery is often contained within rounded rectangular cards (20px radius). There is minimal use of abstract graphics or illustrations; the focus is on showcasing the product itself. Icons are generally simple, outlined, and monochromatic, used functionally rather than decoratively. Overall, imagery is content-focused and supports the premium, understated brand narrative, appearing as showcases rather than atmospheric fillers. Density varies, with some sections being image-heavy product grids and others text-dominant informational blocks.
