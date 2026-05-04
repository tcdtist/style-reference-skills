---
version: alpha
name: NEON Rated
description: NEON Rated projects a moody, cinematic visual identity built on stark monochromatic contrasts and controlled bursts of vivid red. Typography is bold and compact, with prominent custom fonts creating a distinct editorial feel reminiscent of film titles. Components are lightweight and often border-defined rather than filled, preserving a sense of spaciousness, while subtle elevation hints at depth without heavy shadows.
colors:
  midnight-screen: "#000000"
  canvas-white: "#ffffff"
  off-white-screen: "#f3f3f3"
  ghost-gray: "#e5e7eb"
  subtle-gray: "#cccccc"
  rebel-red: "#821e1e"
  luminous-blue: "#9dc1fb"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.9
    letterSpacing: -0.03px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 0.9
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 160px
    lineHeight: 0.8
    letterSpacing: -0.031px
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 10px
  sectionGap: 140px
components:
  ghost-bordered-button:
    role: Default interactive element, often for secondary actions.
  transparent-accent-button:
    role: Tertiary calls to action or embedded controls.
  dark-filled-accent-button:
    role: Branded button for specific actions, contrasting against light backgrounds.
  content-card-light:
    role: Displaying film posters or brief informational blocks on light backgrounds.
  content-card-dark-translucent:
    role: Displaying content over visual media, such as hero images.
  transparent-card:
    role: Container for elements that do not require an explicit background, blending with the page.
  basic-form-input:
    role: Standard text input field.
  outline-badge:
    role: Categorization or status label.
---

## Overview

**North Star:** Cinematic Contrast, Dark Drama

NEON Rated projects a moody, cinematic visual identity built on stark monochromatic contrasts and controlled bursts of vivid red. Typography is bold and compact, with prominent custom fonts creating a distinct editorial feel reminiscent of film titles. Components are lightweight and often border-defined rather than filled, preserving a sense of spaciousness, while subtle elevation hints at depth without heavy shadows.

### Do's

- Prioritize high-contrast monochromatic design with Midnight Screen (#000000) and Canvas White (#ffffff) as primary foreground/background.
- Use Rebel Red (#821e1e) sparingly as a strong accent for headings, active states, and button text, never as a background fill for action buttons.
- Employ Flatspot font for all body text, links, and button labels to convey a consistent custom brand voice.
- Apply Girott font with tight letter-spacing for all headlines to create a bold, editorial, and cinematic presence.
- Use Ghost Gray (#e5e7eb) for all neutral borders and dividers to maintain a subtle, lightweight structure.
- Round corners with a default of 4px for interactive elements and 8px for cards to establish a consistent, subtle softness.
- Maintain a compact density for element spacing, frequently using 10px or less to keep information tight.

### Don'ts

- Avoid using heavy drop shadows or large background fills for most components; rely on borders and subtle background tints for definition.
- Do not use generic system fonts; custom fonts Flatspot and Girott are integral to the brand's unique typographic identity.
- Do not introduce new vibrant colors outside of Rebel Red and Luminous Blue; the palette is intentionally restrained.
- Avoid excessive padding around elements; the design emphasizes compactness and efficient use of space.
- Do not create fully filled, solid-color primary action buttons; actions are typically defined by text color or light borders.
- Do not use large, decorative imagery that breaks the monochromatic visual flow; images should be full-bleed or tightly cropped within a card.
- Avoid loosely tracked or widely spaced headlines; Girott's impact comes from its condensed, tight kerning.

### Layout

The page primarily uses a full-bleed layout for hero sections, which often feature large cinematic photography with overlaid text and controls. Content sections below alternate between dark and light backgrounds, creating a clear visual rhythm. Information is presented in organized card grids (often 2-4 columns) or prominent text blocks. Vertical spacing between sections is generous but within content blocks, the density is compact. Navigation is a minimalist top bar, occasionally fixed, with essential icons and a discrete brand logo.

### Imagery

The visual language predominantly features high-impact, full-bleed cinematic photography and film stills. Imagery is often dark-toned, contributing to the dramatic and moody atmosphere. When not full-bleed, images are tightly cropped within minimal cards, serving an explanatory or showcase role for film titles. Iconography is minimalist, outlined, using Ghost Gray or Canvas White to maintain the monochromatic aesthetic. Imagery density is high in hero sections and content grids, driving visual interest immediately.
