---
version: alpha
name: Face Formula
description: Face Formula cultivates a natural, understated aesthetic with a muted color palette dominated by cool greys and subtle blue-greys, echoing its Norwegian roots. Typography combines a classic serif for impactful headlines with a clean sans-serif for body text, creating a balanced and readable experience. Design elements are minimal, favoring delicate borders and ample white space over bold colors or heavy shadows. Components are lightweight, emphasizing content and a serene visual atmosphere.
colors:
  canvas-white: "#ffffff"
  ghost-fog: "#f2f5f8"
  border-mist: "#e6ebee"
  deep-ocean: "#3b505a"
  text-slate: "#202f3b"
  link-blue: "#58737e"
  light-steel: "#cfdce7"
  black-ink: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: 0.12px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.1
    letterSpacing: -0.52px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1
    letterSpacing: -1.2px
spacing:
  elementGap: 16px
  sectionGap: 32px
components:
  ghost-navigation-button-light:
    role: Header navigation links, inline text links.
  ghost-navigation-button-dark:
    role: Contextual navigation links against dark hero backgrounds.
  contained-button:
    role: Secondary action button for interactive elements.
  product-input-field:
    role: Text input areas with a subtle border for user interaction.
  bestseller-label:
    role: Small, contained label for product features.
---

## Overview

**North Star:** serene Scandinavian minimalist

Face Formula cultivates a natural, understated aesthetic with a muted color palette dominated by cool greys and subtle blue-greys, echoing its Norwegian roots. Typography combines a classic serif for impactful headlines with a clean sans-serif for body text, creating a balanced and readable experience. Design elements are minimal, favoring delicate borders and ample white space over bold colors or heavy shadows. Components are lightweight, emphasizing content and a serene visual atmosphere.

### Do's

- Prioritize Deep Ocean (#3b505a) for primary textual content and interactive elements, establishing it as the dominant brand color.
- Use Libre Caslon Condensed (or Playfair Display) exclusively for major headings, leveraging its distinct serif character.
- Apply Circular Pro (or Inter) for all body text, navigation, and button labels, maintaining a consistent sans-serif voice.
- Ensure generous white space, particularly using Canvas White (#ffffff) and Ghost Fog (#f2f5f8) for background dilution and section separation.
- Use Border Mist (#e6ebee) for subtle background shifts to indicate different content blocks without heavy visual breaks.
- Set all border-radius values to 0px for a sharp, modern, and uncluttered appearance.
- Maintain a default element gap of 16px for consistent visual rhythm between components.

### Don'ts

- Avoid using bold or highly saturated colors outside of the defined brand palette for primary UI elements.
- Do not introduce strong shadows or excessive elevation; the design favors flat surfaces and subtle depth.
- Do not deviate from the specified 0px border-radius; rounded corners are not part of this aesthetic.
- Do not use generic system fonts for body or heading; the custom typefaces are critical to the brand identity.
- Avoid dense information placement; maintain the comfortable density and ample spacing.
- Do not use multiple font weights for Circular Pro; it is intended to be used at its regular weight 400 throughout.
- Do not use 'Action', 'CTA', 'primary action', or similar phrasing for buttons unless they explicitly have a #3b505a background or border, and prioritize un-filled, text-based button styles rather than solid fills where possible.

### Layout

The page primarily employs a max-width contained layout, with content centered. The hero section is full-bleed, overlaying large lifestyle photography with centered or left-aligned headlines and subtext. Section rhythm is created through alternating Canvas White and Ghost Fog background bands, with generous vertical spacing (32px section gap). Content often uses two-column arrangements, alternating text-left/image-right or vice-versa, or stacked centered blocks. There's a 3-column card grid in some sections, likely for product display. Navigation is a fixed top bar with ghost text links.

### Imagery

The site uses high-quality, product-focused photography and natural lifestyle imagery featuring models with clear, healthy skin. Photography is usually full-bleed in hero sections, serving as a backdrop for textual content. Product visuals are crisp, isolated shots on clean white or solid color backgrounds. There are small decorative landscape images. Iconography is minimalist, outlined, and monochromatic, primarily using Black Ink (#000000) or Deep Ocean (#3b505a), maintaining a light stroke weight. Imagery is primarily decorative and atmospheric but also showcases product details.

### Elevation

Face Formula intentionally avoids shadows, contributing to a flat, clean, and understated aesthetic. Elements are distinguished through subtle background color shifts and borders rather than perceived depth from shadows.
