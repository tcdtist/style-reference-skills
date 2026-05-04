---
version: alpha
name: monopo saigon
description: monopo saigon operates with a sophisticated dark aesthetic, employing a backdrop of organic, shifting gradients that give the impression of fluid, sculpted surfaces. The UI elements are minimal and translucent, appearing as if etched onto or floating within this rich, atmospheric background. Typography is stark white against dark, providing a strong contrast for readability while maintaining an understated elegance. The overall impression is one of artful depth and a restrained, almost ethereal digital presence.
colors:
  midnight-canvas: "#000000"
  frost-white: "#ffffff"
  deep-shadow: "#181818"
  whisper-gray: "#6d6d6d"
  misty-gray: "#636363"
  deep-ocean-gradient: "#a0e0ab"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.58
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.21
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.15
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.39
  display:
    fontFamily: "system-ui"
    fontSize: 225px
    lineHeight: 0.7
spacing:
  cardRadius: 10px
  buttonRadius: 75.024px
  elementGap: 14px
  sectionGap: 46px
components:
  ghost-button-light-border:
    role: Interactive element allowing light interaction without dominating the dark background. Features a very subtle border.
  text-link-button:
    role: Minimal interactive element, appearing as simple text. Used for navigation and tertiary actions.
  filled-cookie-consent-button:
    role: Primary action button within transient UI elements like cookie consent pop-ups. Offers a clear, actionable contrast.
  dark-text-link-button:
    role: Minimal interactive element for navigation and tertiary actions, in context where text color should be white.
  information-card-overlay:
    role: Base card element for presenting content. Designed to blend seamlessly into the background, letting content take precedence.
---

## Overview

**North Star:** Shifting gradient depths on frosted glass

monopo saigon operates with a sophisticated dark aesthetic, employing a backdrop of organic, shifting gradients that give the impression of fluid, sculpted surfaces. The UI elements are minimal and translucent, appearing as if etched onto or floating within this rich, atmospheric background. Typography is stark white against dark, providing a strong contrast for readability while maintaining an understated elegance. The overall impression is one of artful depth and a restrained, almost ethereal digital presence.

### Do's

- Prioritize Roobert as the primary typeface for all textual content, utilizing its diverse weights to establish hierarchy.
- Maintain a spacious layout with a base unit of 4px and aim for an element gap of 14px to ensure visual breathing room.
- Use Midnight Canvas (#000000) for all primary backgrounds and Frost White (#ffffff) for primary text to ensure high contrast.
- Apply a border-radius of 75.024px to all buttons for a distinctly rounded, pill-like appearance.
- Implement the Deep Ocean Gradient (linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37))) as a background for hero and large interactive sections.
- Ensure interactive elements like buttons and links use Frost White (#ffffff) text against dark backgrounds unless a specific muted tone (Whisper Gray #6d6d6d) is explicitly called for.
- Use a subtle 1px border with rgba(255, 255, 255, 0.3) for ghost buttons to maintain a minimalist aesthetic.

### Don'ts

- Avoid using harsh, saturated accent colors that would disrupt the site's subdued and atmospheric palette.
- Do not introduce square or sharp borders on interactive elements; button radii should always be 75.024px.
- Refrain from using strong box-shadows or heavy elevation, as the design relies on gradient depth rather than layered elements.
- Do not deviate from the specified Roobert and Raleway font families; avoid generic system fonts for branding elements.
- Avoid tight information density; maintain spacious relationships between elements and sections.
- Do not treat #636363 as a primary action color; reserve it for specific, muted interactive elements like secondary consent buttons.
- Never use solid color backgrounds in feature sections where the organic gradient is intended to create atmosphere.

### Layout

The page primarily uses a full-bleed layout for its immersive background gradients, with content contained within a consistent max-width of 1078px, centered on the screen. The hero section features a large, centered headline directly on the animated gradient background. Sections maintain a consistent vertical rhythm, with generous section gaps of 46px. Content elements are typically stacked or arranged in minimal two-column text-left/image-right patterns (where 'image' refers to the abstract gradient visuals), but all elements appear to live within the main content well. The header is a sticky top navigation bar with minimal text links.

### Imagery

The site deploys abstract, organic gradients and translucent spherical shapes as primary background visuals, creating a sense of depth and fluid motion. There is an absence of traditional photography or illustrations. Icons (if present) are minimal, outlined, and monochromatic, matching the overall dark and understated UI. The visual density is image-heavy in terms of atmospheric graphics, but text-dominant for content presentation, allowing the background to provide mood without distracting from information.

### Elevation

The design intentionally avoids traditional box-shadows. Instead, depth and hierarchy are communicated through the use of rich, organic background gradients and nuanced color tints on textual and interactive elements, giving the impression of elements floating or subtly recessed within a volumetric space rather than casting shadows upon a flat surface.
