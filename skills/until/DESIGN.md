---
version: alpha
name: until
description: Until presents a calm, sophisticated aesthetic, combining a nearly monochromatic UI with thoughtful typographic play and tactile surface treatments. The primary canvas is a warm, off-white, contrasted with deep charcoal text and accents. Subtle shadows and rounded corner cards provide gentle dimensionality, making the interface feel grounded and inviting. A single olive green brand accent adds a touch of organic warmth, used sparingly to highlight key information and interactive elements.
colors:
  parchment: "#f7f3ec"
  charcoal: "#121212"
  midnight-ink: "#000000"
  snow: "#ffffff"
  soft-stone: "#bebebe"
  olive-grove: "#6c853b"
  sunset-fade: "#c6350f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.05px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.009px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: -0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.95
    letterSpacing: -0.021px
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 0.95
    letterSpacing: -0.024px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.9
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 69px
    lineHeight: 0.9
    letterSpacing: -0.037px
spacing:
  cardRadius: 32px
  buttonRadius: 64px
  elementGap: 8px
  sectionGap: 96px
components:
  ghost-header-button:
    role: Navigation button in the header, visually transparent until hover.
  primary-filled-button:
    role: Key action buttons, such as 'Join Us' or 'Join the team'.
  secondary-filled-button:
    role: Less prominent actions, often alongside a primary button.
  information-card:
    role: Content containers for text and images, often used in grids.
  header-navigation:
    role: Top-level navigation element for page sections.
---

## Overview

**North Star:** Warm parchment, dark charcoal type

Until presents a calm, sophisticated aesthetic, combining a nearly monochromatic UI with thoughtful typographic play and tactile surface treatments. The primary canvas is a warm, off-white, contrasted with deep charcoal text and accents. Subtle shadows and rounded corner cards provide gentle dimensionality, making the interface feel grounded and inviting. A single olive green brand accent adds a touch of organic warmth, used sparingly to highlight key information and interactive elements.

### Do's

- Prioritize Neue Haas Display for all headings and large text, ensuring letter-spacing is applied for aesthetic cohesion.
- Use Parchment (#f7f3ec) as the default background color for main content sections and Snow (#ffffff) for card backgrounds to establish clear visual hierarchy.
- Apply Charcoal (#121212) or Midnight Ink (#000000) for all primary text elements to maintain contrast and legibility.
- Utilize Olive Grove (#6c853b) exclusively for subtle accentuation of key information, links, or decorative elements, never for large areas or primary actions.
- Implement `border-radius: 64px` for all buttons, creating a consistent pill shape for interactive elements.
- Apply `border-radius: 32px` with the subtle shadow `rgba(255, 255, 255, 0.1) 0px -1px 2px 0px inset, rgba(255, 255, 255, 0.1) 0px 1px 2px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(0, 0, 0, 0.05) 0px 3px 17px 0px` for all cards to provide gentle depth.
- Maintain a base unit of 8px for spacing, with a consistent `96px` section gap to create clear vertical rhythm.

### Don'ts

- Do not use highly saturated or vivid colors that are not Olive Grove (#6c853b), as the system relies on a near-monochromatic palette.
- Avoid sharp corners; all functional UI elements should have a defined border-radius, typically 24px, 32px, or 64px.
- Do not introduce heavy, opaque shadows; leverage the subtle card shadow or the contained, softer shadows for depth.
- Do not use generic system fonts; Neue Haas Text and Display are critical for brand identity.
- Avoid breaking component padding suggestions; maintain a `32px` padding around card content.
- Do not use large blocks of bright, solid color for backgrounds; favor the neutral Parchment or Snow, or image backgrounds with subtle filtering.

### Layout

The page primarily uses a max-width contained layout of 1283px, centered within the viewport. The hero section is full-bleed, featuring a large background image with centered, large-scale text and a semi-transparent, blur-effect sticky header. Content sections follow a consistent vertical rhythm with 96px section gaps, often employing a dual-column layout alternating text and visuals, or a grid of cards (likely 4-columns based on screenshots). The density is balanced, with ample whitespace providing breathing room around content blocks.

### Imagery

The site uses high-quality, realistic photography as its primary imagery. These images are often full-bleed or large backgrounds, at times processed with a subtle painterly or grainy filter, suggesting a blend of scientific precision and artistic interpretation. Product photography, when present, focuses on lab environments and people interacting with technology. Iconography is minimal and functional, typically filled and monochromatic charcoal, integrated seamlessly into the text flow. Imagery primarily serves to set an atmosphere and provide context, rather than being purely decorative.
