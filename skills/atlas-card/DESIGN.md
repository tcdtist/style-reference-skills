---
version: alpha
name: Atlas Card
description: Atlas Card is a statement in understated luxury, built on a near-black canvas that allows its singular, deep violet accent to resonate with subtle authority. The design emanates a curated exclusivity through its scarce use of high-contrast elements, relying instead on a precise monochromatic scale and bespoke typography with unique letter-spacing to convey richness. Form is dictated by function, with oversized rounded buttons providing a soft, approachable counterpoint to the otherwise sharp, clean lines of the underlying layout.
colors:
  midnight-ink: "#000000"
  smoked-glass: "#1e1e1"
  charcoal-grey: "#272727"
  dark-slate: "#333333"
  deep-graphite: "#3d3d3d"
  bright-silver: "#f8f8f8"
  pure-white: "#ffffff"
  cadet-grey: "#cccccc"
  mid-grey: "#808080"
  atlas-violet: "#001391"
  dark-gradient: "#000000"
  mist-gradient: "#9B97B8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.67
  body-lg:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.24
  subheading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.3
    letterSpacing: -0.18px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.17
    letterSpacing: -0.22px
spacing:
  elementGap: 8-32px
  sectionGap: 48-64px
components:
  request-invite-cta-block:
    role: 
  ticker-marquee-banner:
    role: 
  button-group-showcase:
    role: 
  primary-action-pill-button:
    role: Call to action
  ghost-feature-button:
    role: Secondary action in content
  dark-square-button:
    role: Secondary navigation or minor actions
  text-link-button:
    role: Inline textual actions
  footer-link:
    role: Navigation in the footer
  hero-text-overlay:
    role: Dominant initial messaging
  body-paragraph:
    role: Main content narrative
---

## Overview

**North Star:** Midnight Velvet Vault – rich, dark surfaces punctuated by a single, deep gem-toned light.

Atlas Card is a statement in understated luxury, built on a near-black canvas that allows its singular, deep violet accent to resonate with subtle authority. The design emanates a curated exclusivity through its scarce use of high-contrast elements, relying instead on a precise monochromatic scale and bespoke typography with unique letter-spacing to convey richness. Form is dictated by function, with oversized rounded buttons providing a soft, approachable counterpoint to the otherwise sharp, clean lines of the underlying layout.

### Do's

- Use Midnight Ink (#000000) for all main page backgrounds to maintain the deep, luxurious theme.
- Apply Atlas Violet (#001391) exclusively for primary calls to action and active interactive states.
- Ensure all body text uses Sequel Sans Book at 17px, weight 400, and line-height 1.24 for consistent readability.
- Implement letter-spacing adjustments for Sequel Sans Headline Book: -0.008em for 23px and 28px, 0.008em for 16px.
- Utilize 128px radius for primary pill buttons to create a soft, distinctive silhouette.
- Maintain a clear distinction between button types using background colors: #001391 for primary, #1e1e1 for secondary, and transparent for ghost buttons.
- Employ Bright Silver (#f8f8f8) as the predominant text color for all main content against dark backgrounds.

### Don'ts

- Do not introduce new chromatic colors; restrict brand accents solely to Atlas Violet (#001391).
- Avoid using any radii less than 4px; the smallest defined radius for non-interactive elements is 4px.
- Do not use generic system fonts; always map to the provided custom typefaces or their specified substitutes.
- Refrain from using hard, sharp shadows; the design relies on subtle background color shifts and photography for depth.
- Do not deviate from the specified letter-spacing for headlines; it is a critical component of the typographic identity.
- Avoid using #808080 for primary body text; reserve it for low-emphasis or secondary information.
- Do not use highly saturated primary colors for UI elements other than the designated Atlas Violet CTA.

### Layout

The site uses a full-bleed page model, with content centered within implicit max-width boundaries that create spacious margins. The hero section is a full-viewport, atmospheric photographic background with a centered, minimalist text overlay. Following sections feature a consistent vertical rhythm and often present text-dominant content, frequently centered in a single column block for dramatic effect. There are no apparent grid layouts for cards or complex content arrangements; instead, content is presented sequentially with generous vertical spacing, emphasizing a focused reading experience. Navigation is minimal, likely a top bar and a footer with simple textual links.

### Imagery

The visual language for imagery is characterized by atmospheric, often misty or fog-enshrouded cityscapes and interior shots, typically with a cool, desaturated color palette that blends seamlessly into the dark UI background. Photography is large-scale, often full-bleed in hero sections, serving as decorative atmosphere rather than direct informational content. Product photography, such as of the card, is rendered as a clean, illuminated object against a muted, almost abstract backdrop, emphasizing its premium feel. Icons are monochrome, simple, and functional, typically rendered in Bright Silver against dark surfaces.
