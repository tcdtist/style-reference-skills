---
version: alpha
name: VSCO®
description: VSCO's design system creates a raw, utilitarian feel, blending high-contrast black and white with a select, vibrant yellow accent. The heavy reliance on a custom sans-serif font with tight letter-spacing for headlines establishes a direct, unadorned communication style. The overall impression is one of stark professionalism with a hint of creative energy, achieved through the deliberate scarcity of color and the bold, geometric typography.
colors:
  absolute-black: "#000000"
  pure-white: "#ffffff"
  fog-gray: "#f2f2f2"
  steel-gray: "#d9d9d9"
  medium-gray: "#737373"
  amber-glow: "#f1a900"
  sunshine-yellow: "#ffbc3c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.14
  display:
    fontFamily: "system-ui"
    fontSize: 98px
    lineHeight: 0.93
    letterSpacing: -0.98px
spacing:
  cardRadius: 0px
  buttonRadius: 999px
  elementGap: 4-20px
  sectionGap: 100px
components:
  hero-cta-button-group:
    role: 
  feature-tab-bar-with-product-cards:
    role: 
  info-badge-pricing-card-dark:
    role: 
  primary-cta-button:
    role: Call to action
  ghost-button:
    role: Secondary action
  underlined-navigation-button:
    role: Navigation links
  amber-cta-button:
    role: Alternate call to action
  info-badge-amber:
    role: Labels for new features or status
  pricing-card-dark:
    role: Displays pricing tiers or feature sets
  pricing-card-light:
    role: Displays pricing tiers or feature sets
  hero-headline:
    role: Main page title
---

## Overview

**North Star:** High-contrast geometric abstraction. Like engineering blueprints rendered in bold ink on a white page, punctuated by a single, sharp burst of yellow ink.

VSCO's design system creates a raw, utilitarian feel, blending high-contrast black and white with a select, vibrant yellow accent. The heavy reliance on a custom sans-serif font with tight letter-spacing for headlines establishes a direct, unadorned communication style. The overall impression is one of stark professionalism with a hint of creative energy, achieved through the deliberate scarcity of color and the bold, geometric typography.

### Do's

- Prioritize Absolute Black (#000000) and Pure White (#ffffff) for high-contrast pairs, especially for text and background combinations.
- Use VSCO Gothic with negative letter-spacing for headlines (e.g., -0.05em at large sizes) to create a distinct, modern feel.
- Apply 999px border-radius for all primary and secondary buttons, signifying interactive elements.
- Employ Amber Glow (#f1a900) as the exclusive accent color for primary calls-to-action and badges.
- Maintain a tight vertical rhythm using base units of 4px, especially for margin-bottom and padding in blocks and text.
- Utilize Fog Gray (#f2f2f2) to subtly differentiate background sections without introducing strong chromatic shifts.

### Don'ts

- Avoid using multiple accent colors; Amber Glow (#f1a900) and Sunshine Yellow (#ffbc3c) serve as the only chromatic highlights.
- Do not introduce soft shadows or gradients; the design relies on stark contrast and flat surfaces for depth.
- Omit rounded corners for cards and main content blocks; these should remain sharp (0px radius) to maintain the geometric aesthetic.
- Do not deviate from VSCO Gothic; it is integral to the brand's typographic identity.
- Avoid excessive spacing; elements are presented compactly to maintain information density.
- Do not use subtle gray for actionable elements; interactivity should be clearly indicated by Absolute Black, Pure White, or Amber Glow.

### Layout

The page model alternates between full-bleed sections and a max-width contained layout, centered on the page. The hero features a full-bleed background photograph with a prominent, centered headline and subtext over solid white. Subsequent sections often use alternating white and Fog Gray (#f2f2f2) backgrounds with consistent vertical spacing. Content is primarily arranged in two-column layouts featuring text and imagery, or three-column card grids for features. The navigation is a sticky top bar with clearly delineated links and call-to-action buttons. The overall density is compact, presenting information efficiently with minimal whitespace between elements.

### Imagery

Imagery on this site is dominated by high-quality photography, often depicting people using cameras or artistic, abstract compositions. Images are typically full-bleed in hero sections or contained within fluid, responsive layouts, sometimes with a 4px border-radius. Product screenshots are minimal, focusing on the interface itself. The role of imagery is primarily aspirational and atmospheric, showcasing the potential results of using the product, with a secondary role in explanatory content via illustrative product UI shots. Graphics are largely absent, favoring photography.
