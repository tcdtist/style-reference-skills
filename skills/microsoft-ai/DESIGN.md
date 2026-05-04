---
version: alpha
name: Microsoft AI
description: This design evokes a sense of antique academic rigor meeting soft, optimistic warmth. The primary color palette transitions from deep black to creamy off-white with occasional muted pastel gradients, creating distinct atmospheric shifts. Delicate humanist typography in Bradford LL, characterized by its fine serifs and generous letter-spacing for large headlines, gives an authoritative yet approachable feel. Conversely, more utilitarian Red Hat Mono maintains informational clarity on smaller elements. Strong visual personality arises from the interplay of a classic serif font for display with a modern, technical mono font for UI elements, all grounded by expansive spacing and subtly rounded, organic shapes.
colors:
  midnight-estate: "#000000"
  greated-parchment: "#fef9ed"
  faded-linen: "#f5f0e4"
  warm-clay: "#5d524b"
  dusty-rose-gradient: "#fbd3be"
  sunset-glaze-gradient: "#e7b191"
  worn-velvet: "#8c5462"
  forest-shade: "#2e4d4d"
  antique-brass: "#a67c52"
  cerulean-link: "#0066ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
    letterSpacing: 0.6px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.6
    letterSpacing: -0.21px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.26px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.25
    letterSpacing: -0.32px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.25
    letterSpacing: -0.7px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
    letterSpacing: -4px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 125px
    lineHeight: 1
    letterSpacing: -5px
spacing:
  buttonRadius: 85.8333px
  elementGap: 8-20px
  sectionGap: 48-80px
components:
  accessibility-toggle:
    role: 
  product-tab-selector:
    role: 
  mission-statement-banner:
    role: 
  primary-navigation-link:
    role: Main site navigation
  pill-search-input:
    role: Global search functionality
  hero-headline:
    role: Primary heading for the hero section
  text-only-button:
    role: Interactive elements with minimal visual weight
  filled-pill-button:
    role: Interactive elements with a subtle background
  product-category-badge:
    role: Categorization of content or products
  accessibility-toggle:
    role: UI control for accessibility mode
---

## Overview

**North Star:** Warm academic parchment

This design evokes a sense of antique academic rigor meeting soft, optimistic warmth. The primary color palette transitions from deep black to creamy off-white with occasional muted pastel gradients, creating distinct atmospheric shifts. Delicate humanist typography in Bradford LL, characterized by its fine serifs and generous letter-spacing for large headlines, gives an authoritative yet approachable feel. Conversely, more utilitarian Red Hat Mono maintains informational clarity on smaller elements. Strong visual personality arises from the interplay of a classic serif font for display with a modern, technical mono font for UI elements, all grounded by expansive spacing and subtly rounded, organic shapes.

### Do's

- Prioritize Bradford LL (Playfair Display) for all headlines and impactful textual displays, using its 450 weight and generous letter-spacing for elegance.
- Use Red Hat Mono (IBM Plex Mono) exclusively for all functional text: buttons, navigation, inputs, and supplementary information at weights 400-500.
- Apply rounded corners consistently: 85.8333px for interactive pill-shaped buttons, 50px for form inputs, and 2.5px for small badges for a warm, organic feel.
- Utilize Greated Parchment (#fef9ed) as the primary light background and Midnight Estate (#000000) for high-contrast hero sections.
- For text on light backgrounds, always use Warm Clay (#5d524b) to maintain a soft, readable contrast (contrast ratio 7.2:1).
- Employ the Dusty Rose Gradient (linear-gradient(rgb(251, 211, 190) 50%, rgb(254, 249, 237) 100%)) as a subtle, inviting background element for content sections.
- Maintain comfortable element spacing with an elementGap of '8-20px' and a base unit of 4px for all padding and margins.

### Don'ts

- Avoid using highly saturated, vibrant colors outside of the specified accent colors, to preserve the system's muted, academic aesthetic.
- Do not use generic system fonts for body text or headlines; adhere strictly to Bradford LL (Playfair Display) and Red Hat Mono (IBM Plex Mono) for brand consistency.
- Refrain from sharp, angular corners on UI elements exceeding a 12px radius, as this contradicts the softer, organic shape language.
- Do not introduce heavy drop shadows or aggressive elevation; the system relies on color and spacing for depth.
- Avoid tight line heights or negative letter-spacing on body text to ensure readability, especially with the serif font.
- Do not use Warm Clay (#5d524b) as a background color, it's reserved for text and borders to maintain its visual role as detail.
- Never combine Bradford LL with Red Hat Mono within the same short phrase or button label; maintain clear separation of their roles.

### Elevation

The design intentionally avoids aggressive or deep shadows. Where elevation is present, it is implicitly achieved through distinct background color shifts (e.g., Midnight Estate to Greated Parchment sections) and the use of very subtle, near-achromatic box-shadows like #cec7bc, suggesting a material presence without heavy visual lifting.
