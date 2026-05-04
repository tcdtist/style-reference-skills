---
version: alpha
name: Frame.io
description: Frame.io's design evokes a sophisticated, high-tech command center with a dark, immersive background that immediately draws focus to content. Dark, deeply saturated purples and blues provide an atmospheric stage, accented by electric blue interactive elements that pulse like system indicators. Sharp typography with generous letter-spacing on display elements contrasts with soft-cornered cards, creating a tension between precision and approachability, suitable for creative professionals who value both. The overall impression is one of quiet power and focused efficiency.
colors:
  absolute-zero: "#000000"
  void-black: "#0a0a13"
  dark-nebula: "#08080c"
  twilight-graphite: "#757580"
  cloud-whisper: "#fcfcfc"
  pale-ash: "#a3a3b3"
  frost-gleam: "#dedfee"
  space-blue-gradient: "#0a001"
  electric-indigo: "#6199f6"
  cosmic-violet: "#5b53ff"
  peripheral-haze-gradient: "#000b35"
  violet-hue-radial: "#4e55a8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.45
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.96
    letterSpacing: -3.6px
spacing:
  cardRadius: 24px
  buttonRadius: 100px
  elementGap: 16px
components:
  cta-button-group:
    role: 
  feature-cards-grid:
    role: 
  announcement-banner-section-label:
    role: 
  primary-ghost-button:
    role: Default interactive element for secondary actions.
  tertiary-ghost-button-dark-text:
    role: Subtle interactive elements on lighter backgrounds or when contrast to white text needs adjustment.
  navigation-link-button:
    role: Styling for interactive text navigation elements.
  feature-card:
    role: Used to group related content, often with an icon or small visual.
  nested-ui-card:
    role: Interior application-like cards for displaying specific content blocks.
---

## Overview

**North Star:** Midnight control panel, glowing with purpose.

Frame.io's design evokes a sophisticated, high-tech command center with a dark, immersive background that immediately draws focus to content. Dark, deeply saturated purples and blues provide an atmospheric stage, accented by electric blue interactive elements that pulse like system indicators. Sharp typography with generous letter-spacing on display elements contrasts with soft-cornered cards, creating a tension between precision and approachability, suitable for creative professionals who value both. The overall impression is one of quiet power and focused efficiency.

### Do's

- Use Cosmic Violet (#5b53ff) for primary call-to-action buttons, such as 'Start Free Trial'.
- Apply FrameGothic at 80px, weight 400, with -0.045em letter-spacing and 0.96 line-height for main display headlines.
- Utilize the Space Blue Gradient for the hero section background to establish the immersive dark aesthetic.
- Ensure all interactive elements like buttons and navigation links use a borderRadius of 100px for a fully rounded capsule shape.
- Maintain a primary text color of Cloud Whisper (#fcfcfc) on dark backgrounds for readability.
- For nested UI elements, apply the Nested UI Card styling with its distinct inset and outer shadows.
- Employ Pale Ash (#a3a3b3) for secondary informational text and muted borders against darker backgrounds.

### Don'ts

- Avoid using bright, high-saturation colors beyond Electric Indigo or Cosmic Violet; maintain the muted, dark palette.
- Do not use hard-edged rectangles for buttons or interactive cards; consistently apply the rounded corner radii.
- Refrain from shadows on basic static cards (like Feature Card) unless they are specifically designed for 'nested UI' components.
- Do not vary line-height significantly for body text; stick to 1.5 for FrameGothic at body sizes to preserve readability.
- Avoid generic system fonts for any primary content; always use our custom FrameGothic or NeueMachinaInktrap when appropriate.
- Do not use small letter-spacing on small body text; maintain a 0.01em or normal letter-spacing for readability.

### Layout

The page primarily follows a max-width contained layout, likely around 1200px, but with full-bleed hero sections that leverage atmospheric gradients. The hero section is characterized by a large, centered headline over a dark, gradient background, paired with a prominent product screenshot or video. Section rhythms alternate between full-bleed dark gradient backgrounds and more structured dark panels with content. Content arrangements often feature large headlines with supportive body text, followed by multi-column grids (e.g., 4-column feature grids, 2-column text+image layouts). There's a spacious feel between sections, with subtle visual dividers achieved through background shifts. The navigation is a sticky top bar, providing persistent access.

### Imagery

This design primarily uses dark product screenshots and UI mockups, often presented within 'virtual screens' or cards that appear to float in the dark space. The treatment is contained within defined shapes, usually with slightly rounded corners (10px). When photography is present, it is dark, moody, and often features human subjects in a somewhat stylized, perhaps technical, context. Icons are typically monoline, filled with Electric Indigo or Cloud Whisper, and serve an explanatory or navigational role. The overall density of imagery is balanced with text, allowing for product features to be visually demonstrated without overwhelming the UI.
