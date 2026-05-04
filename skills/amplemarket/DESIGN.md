---
version: alpha
name: Amplemarket
description: Amplemarket presents a high-tech sales platform aesthetic using a predominantly neutral palette punctuated by dynamic, soft-edged gradients. The visual system balances strong, clean typography with subtle, layered surface treatments, and sparse, vibrant background accents that suggest energy and movement. Interactive elements are clearly defined, often contrasting crisp type against dark fills or light backgrounds. The overall impression is one of restrained power and sophisticated utility.
colors:
  midnight-ink: "#111111"
  canvas-white: "#ffffff"
  surface-charcoal: "#272625"
  muted-ash: "#6d6c6b"
  whisper-gray: "#f4f3ef"
  light-taupe: "#ecebea"
  phoenix-orange: "#e8400d"
  cyan-glow: "#99fff9"
  deep-indigo: "#10054d"
  petal-pink: "#ffd7f0"
  mint-green: "#b7efb2"
  canary-yellow: "#ffef99"
  subtle-lavender: "#e2ddfd"
  midnight-violet: "#2e2460"
  engagement-gold: "#fbc768"
  leadgen-red: "#e16540"
  intelligence-blue: "#328efa"
  deliver-green: "#47d096"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: 0.3px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
    letterSpacing: 0.25px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.26px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -1.32px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -2.24px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 56px
components:
  primary-filled-button-dark:
    role: Call to action button for primary actions.
  default-button-light:
    role: Secondary action button, standard interactive element.
  ghost-button:
    role: Tertiary actions, navigation items, or subtle interactive elements.
  card-elevated-light:
    role: Container for featured content, testimonials, or key information.
  card-client-logo:
    role: Container for client logos with light background.
  card-accent-colored:
    role: Decorative cards using brand or accent colors.
  input-field-light:
    role: Standard user input field on light backgrounds.
  input-field-dark:
    role: Standard user input field on dark backgrounds.
  navigation-link:
    role: Primary navigation items in the header.
  info-badge-inline:
    role: Small, informative labels appearing within content.
---

## Overview

**North Star:** Subtle dynamism on a crisp canvas

Amplemarket presents a high-tech sales platform aesthetic using a predominantly neutral palette punctuated by dynamic, soft-edged gradients. The visual system balances strong, clean typography with subtle, layered surface treatments, and sparse, vibrant background accents that suggest energy and movement. Interactive elements are clearly defined, often contrasting crisp type against dark fills or light backgrounds. The overall impression is one of restrained power and sophisticated utility.

### Do's

- Use Labil Grotesk Variable with specific letter-spacing adjustments: larger text sizes from 20px up should have negative tracking, while smaller body text (14px, 12px) uses positive tracking to maintain readability.
- Prioritize Canvas White (#ffffff) for dominant page backgrounds and Midnight Ink (#111111) for primary text, creating high contrast.
- Apply 12px border radius to most containers: cards, inputs, and selected interactive elements, with 8px reserved for primary buttons and nav items.
- Intersperse sections with vibrant, soft-edged radial gradients (`Dynamic Energy Gradient 1` and `Dynamic Energy Gradient 2`) to introduce visual dynamism.
- When creating cards for features or client logos, use Whisper Gray (#f4f3ef) backgrounds to subtly differentiate them from the main canvas.
- Apply default elementGap of 8px for tight spacing between components, increasing to 20px for cardPadding and 56px for sectionGap to establish clear visual hierarchy.
- Utilize the pillar highlight colors (Engagement Gold, LeadGen Red, Intelligence Blue, Deliver Green) for small, functional accents such as icons or tags related to their respective categories.

### Don'ts

- Avoid using bright, saturated colors for large background areas unless they are part of a soft-edged gradient effect.
- Do not use generic system fonts; always specify 'Labil Grotesk Variable' to maintain brand consistency.
- Do not add heavy or opaque shadows; elevation should be subtle, employing diluted rgba(17, 17, 17, 0.02-0.05) values.
- Do not vary border radius arbitrarily; stick to 12px for cards/inputs and 8px for buttons/nav to maintain a consistent visual language.
- Do not use default browser blue for links; all links should use Midnight Ink text color or Canvas White on dark backgrounds, with explicit hover states.
- Do not use outline buttons for primary calls to action; reserve solid fill buttons (Primary Filled Button - Dark) for clear actionable items.
- Do not clutter layouts; maintain comfortable spacing with an 8px base unit and larger gaps for sections to provide breathing room.

### Layout

The page primarily uses a max-width contained layout for core content, centered on the screen. The hero section is full-bleed, featuring a centered headline and input area over an atmospheric, diffused gradient background. Sections maintain a consistent vertical rhythm, with generous section gaps. Content is arranged in alternating patterns, often a large visual/gradient followed by a section with a grid of 2-3 column cards or alternating text-left/image-right blocks. The navigation is a sticky top bar, appearing slightly elevated (subtle shadow) and centered with functional 'Open app' and 'Get free trial' buttons.

### Imagery

Amplemarket utilizes a mix of abstract generative graphics, technical line-art illustrations, and product-focused images. The abstract graphics are soft, blurred radial gradients that introduce vibrant color and movement, often appearing as background elements. Illustrations are minimalist, outlined, and depict technological concepts (e.g., a rocket-powered box). Photography, if present, is primarily product screenshots or tight crops focused on UI elements, lacking human subjects or lifestyle contexts. Icons are outlined, lightweight, and mono-color, typically Midnight Ink or Canvas White. Imagery serves both decorative ambient roles and explanatory functions, highlighting features or conveying a technological mood. The density of imagery is balanced, with large key visuals followed by more text-dominant sections, but images always feel contained and intentional.
