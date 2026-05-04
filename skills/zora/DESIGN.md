---
version: alpha
name: Zora
description: Zora's design evokes an 'underground market' feel, blending a stark monochromatic UI with unexpected, almost illicit, bursts of vivid color. The primary interaction zones are kept deliberately understated with muted grays and crisp whites, allowing product imagery and the occasional electric gradient to dominate. This tension between a neutral, almost unstyled frame and hyper-vivid accents creates an edgy, disruptive atmosphere.
colors:
  canvas-white: "#ffffff"
  graphite-dark: "#121212"
  slate-gray: "#4d4d4d"
  ash-gray: "#878787"
  fog-contrast: "#e6e6e6"
  signal-green: "#00df00"
  vivid-magenta: "#ff00f0"
  electro-pink-gradient: "#ff00d9"
  luminous-green-gradient: "#62ff00"
  monochrome-stripe-gradient: "#d2d2d2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.25
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.25
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 4px
  sectionGap: 20px
components:
  suggested-follows-panel:
    role: 
  content-card-with-buy-action:
    role: 
  nft-card-with-price-bar:
    role: 
  ghost-button:
    role: Functional text buttons for navigation and secondary actions.
  rectangular-text-button:
    role: Secondary action buttons, often inline.
  circular-icon-button:
    role: Icon-only primary actions, usually on sidebars or within cards.
  vivid-buy-button:
    role: Primary call-to-action for purchasing items.
  content-card-minimal:
    role: Default content container for displaying items.
  content-card-rounded:
    role: Card variant for specific items or sections that need slight framing.
  search-input-field:
    role: Global search functionality.
  follow-badge:
    role: Label for following users.
---

## Overview

**North Star:** Raw Concrete Gallery

Zora's design evokes an 'underground market' feel, blending a stark monochromatic UI with unexpected, almost illicit, bursts of vivid color. The primary interaction zones are kept deliberately understated with muted grays and crisp whites, allowing product imagery and the occasional electric gradient to dominate. This tension between a neutral, almost unstyled frame and hyper-vivid accents creates an edgy, disruptive atmosphere.

### Do's

- Always use MonumentGrotesk with a negative letter-spacing of -0.0150em for all text elements to maintain a condensed aesthetic.
- Apply Graphite Dark (#121212) as the default text color on Canvas White (#ffffff) backgrounds for strong contrast.
- Utilize Signal Green (#00df00) exclusively for primary 'Buy' actions or positive affirmations, ensuring its high visibility.
- Employ rounded corners of 8px for most interactive elements like buttons, and 12px for card containers, creating a soft but not overly playful feel.
- Maintain a clear visual hierarchy by placing content directly on the Canvas White (#ffffff) page background with minimal framing unless a specific grouping is required.
- Integrate the Monochrome Stripe Gradient for subtle background texture on neutral blocks, avoiding solid gray fills where possible.
- Use 50% border-radius for circular icon buttons, making them immediately recognizable as interactive elements.

### Don'ts

- Avoid using standard black text on light backgrounds; instead, opt for Graphite Dark (#121212) or Slate Gray (#4d4d4d).
- Do not introduce additional accent colors beyond Signal Green (#00df00) and Vivid Magenta (#ff00f0) to preserve the brand's distinct color palette.
- Refrain from adding explicit box-shadows to cards; elevation is mostly implied by content framing rather than visual depth cues.
- Do not use generic padding values; adhere to the established spacing scale based on 4px increments (4px, 8px, 12px, 16px).
- Avoid large, impactful headlines; all typography uses MonumentGrotesk with a consistent negative letter-spacing and relatively modest sizes.
- Do not use default browser form element styles; all inputs should be styled with transparent backgrounds, Slate Gray (#4d4d4d) text, and a border style matching the search input.

### Layout

The page adheres to a max-width contained layout, with a prominent left-hand fixed sidebar navigation that introduces asymmetry. The main content area is centrally aligned. The hero pattern appears to be absent in the provided screens, with the page immediately presenting a grid-like feed of content cards. Section rhythm is driven by the feed, presenting a consistent stream of items rather than distinct, block-separated sections. Content is arranged primarily in a single-column stack of cards within the main content area, with a right-hand sidebar for suggestions and QR code. Navigation consists of a left-hand fixed sidebar with minimalist icons and a top-right header with 'Log in' and 'Sign up' buttons. This creates a focused, content-heavy experience within clearly defined UI zones.

### Imagery

Imagery on Zora is product-focused or artistic, often full-bleed within card areas or as central page features. There's a mix of photography, abstract graphics, and some potentially illustrative elements. The treatment varies: images themselves appear to respect the content card's border-radius (0px or 12px) but are otherwise raw, without masks or heavy treatments. Photography tends towards detailed, sometimes artistic or conceptual works, with varied color palettes depending on the content. Illustrations, if present, lean towards flat or outlined graphic styles (like some icons). The density is high, with images being the primary focal points upon which the UI elements are overlaid or positioned, serving both decorative and explanatory roles for NFTs/digital assets.
