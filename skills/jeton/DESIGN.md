---
version: alpha
name: Jeton
description: Jeton's design system radiates a vibrant, energetic feel with a strong focus on a single, dominant red accent color. Typography is precise and impactful, preferring tightly tracked, strong headlines. Surfaces are primarily clean white, contrasted by gradients that inject warmth and dynamism. Components feature generous border-radii, often creating pill shapes, and subtle shadows or gradient overlays are used sparingly for depth and interaction feedback.
colors:
  canvas-white: "#ffffff"
  text-black: "#000000"
  jeton-red: "#f73b20"
  red-velvet: "#360802"
  flamingo-pink: "#f84d35"
  fiery-rose: "#fb2d54"
  ocean-blue: "#477ee9"
  mint-green: "#34c771"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0.12px
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
    fontSize: 23px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.2
    letterSpacing: 0.33px
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.2
    letterSpacing: 0.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: 0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 155px
    lineHeight: 0.9
    letterSpacing: 1.55px
spacing:
  cardRadius: 16px
  buttonRadius: 16px
  elementGap: 8px
  sectionGap: 51px
components:
  outline-primary-button:
    role: Call to action button for primary actions.
  outline-inverse-button:
    role: Secondary call to action, or actions on dark backgrounds.
  neutral-pill-button:
    role: Informational or navigation buttons in neutral contexts.
  app-store-link-card:
    role: Download links for mobile applications.
  accent-highlight-card:
    role: Decorative card for emphasized content.
  pill-navigation-button:
    role: Navigation items within a segmented control or menu.
  form-input-field:
    role: Standard input field for user data.
---

## Overview

**North Star:** Vibrant gradient pulse.

Jeton's design system radiates a vibrant, energetic feel with a strong focus on a single, dominant red accent color. Typography is precise and impactful, preferring tightly tracked, strong headlines. Surfaces are primarily clean white, contrasted by gradients that inject warmth and dynamism. Components feature generous border-radii, often creating pill shapes, and subtle shadows or gradient overlays are used sparingly for depth and interaction feedback.

### Do's

- Always use Sequel Sans for all text elements, prioritizing weights 400, 450, and 500 for clarity.
- Apply Jeton Red (#f73b20) as the primary accent, particularly for interactive elements, outlined actions, and key branding.
- Ensure all primary call-to-action buttons are ghost buttons with Jeton Red text and borders, following the Outline Primary Button component specification.
- Use 16px for card, button, and input border-radii, embracing the rounded aesthetic.
- Implement the Sunrise Gradient linear-gradient(rgba(122, 39, 57, 0) 15%, rgb(247, 59, 32) 69%) for hero sections and prominent visual backgrounds.
- Maintain a default letter-spacing of 0.0100em or 0.0300em, specially for headlines, to achieve a compact and impactful typographic appearance.
- Utilize Canvas White (#ffffff) for all main page backgrounds and component surfaces to provide a clean, expansive canvas.

### Don'ts

- Do not introduce new color hues; strictly adhere to the defined brand, accent, and semantic palette.
- Avoid solid background fills for primary calls to action; always prefer the outlined Jeton Red style.
- Do not deviate from the established border-radii; avoid sharp corners or excessively small radii.
- Never use generic system fonts; always utilize Sequel Sans or its approved substitutes.
- Do not use heavy, opaque shadows unless specifically for card elevation (rgba(0, 0, 0, 0.05) 0px -4px 16px 0px).
- Avoid overly loose letter-spacing; maintain a tight, controlled textual presentation especially for headings.
- Do not overuse accent colors, ensure they serve a functional or brand-defining purpose.

### Layout

The page primarily uses a full-bleed layout for hero sections, transitioning to a contained, max-width layout for subsequent content. The hero typically features a centered headline over a gradient background with a prominent 3D abstract graphic. Section rhythm is often seamless, with consistent vertical spacing and a lack of strong visual dividers, except for subtle card elevations. Content arrangement often utilizes centered stacks or dual-column text-left/image-right patterns. A grid of cards can be seen for feature showcases. The navigation is a sticky top bar with a minimal set of links, along with a secondary bottom navigation or floating support button. The design leans towards a comfortable density, allowing visual breathing room.

### Imagery

Jeton uses a mix of abstract 3D renders with a volumetric, gradient light treatment, product screenshots embedded in device mockups, and vibrant brand-colored icons. Photography is absent. Abstract 3D elements are prominent in hero sections, creating a dynamic and modern feel. Icons are clean, often filled, and use the brand's primary and accent colors to denote different categories or actions (e.g., green for 'Add', blue for 'Send', red for 'Exchange'). The overall density is balanced, with imagery serving as decorative atmosphere and explanatory content, rather than overwhelming the layout.
