---
version: alpha
name: SoundCloud
description: This design system creates an immersive, contemporary feel with a dark foundation that amplifies content. A rich interplay of stark black and soft gray neutrals forms a sophisticated backdrop, punctuated by a signature vibrant blue for interactive elements. The controlled color palette, combined with a crisp, minimal typographic hierarchy, allows content, especially diverse album art, to become the primary visual driver. Rounded corners on buttons and inputs offer a touch of user-friendliness against the otherwise strong, dark aesthetic.
colors:
  pitch-black: "#121212"
  ash-gray: "#303030"
  ghost-white: "#ffffff"
  storm-gray: "#999999"
  cloud-gray: "#999999"
  faded-white: "#f2f2f2"
  skybound-blue: "#699fff"
  sunset-ember: "#ff5500"
  melodic-blush-gradient: "#8e8485"
  ocean-serenity-gradient: "#70929c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.27
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
spacing:
  elementGap: 8px
  sectionGap: 96px
components:
  exclusive-offer-alert-banner:
    role: 
  search-bar-with-upload-cta:
    role: 
  trending-track-cards-grid:
    role: 
  primary-dark-button:
    role: Call to Action
  secondary-light-button:
    role: Secondary Action
  tertiary-light-button:
    role: Alternative Action
  ghost-button:
    role: Minimal Action
  search-input-field:
    role: Content Search
  primary-navigation-link:
    role: Interactive Navigation
  hero-headline:
    role: Main Page Title
---

## Overview

**North Star:** Dark stage, glowing spotlights. A deep, consistent dark background sets the scene, with strategic, vivid accents drawing attention to key interactive elements like a spotlight.

This design system creates an immersive, contemporary feel with a dark foundation that amplifies content. A rich interplay of stark black and soft gray neutrals forms a sophisticated backdrop, punctuated by a signature vibrant blue for interactive elements. The controlled color palette, combined with a crisp, minimal typographic hierarchy, allows content, especially diverse album art, to become the primary visual driver. Rounded corners on buttons and inputs offer a touch of user-friendliness against the otherwise strong, dark aesthetic.

### Do's

- Use Pitch Black (#121212) as the default background for all primary content sections.
- Apply a 4px `radius.default` to all interactive elements except ghost buttons and input fields to maintain a consistent subtle softening.
- Employ Söhne 60px / 1.0 line height / 700 weight for all main page headlines against dark backgrounds.
- Highlight interactive links and active states with Skybound Blue (#699fff) to maintain a clear visual hierarchy.
- Utilize 8px for `elementGap` to ensure consistent spacing between distinct inline elements and input fields.
- Ensure all text against Pitch Black backgrounds uses Ghost White (#ffffff) for optimal contrast and readability.
- Contain all main content within a `pageMaxWidth` of 1240px, centered on the screen.

### Don'ts

- Avoid using highly saturated background colors that compete with primary content or album art.
- Do not deviate from Söhne as the sole typeface; stick to its specified weights and sizes.
- Never use hard-edged elements where a 3px input radius or 4px button radius is expected.
- Refrain from using shadows for elevation; rely on background color variations (e.g., Ash Gray on Pitch Black) to indicate depth.
- Do not add additional padding to Album Art Cards; they should appear flush with their grid container.
- Avoid generic black (#000000) for text on light button backgrounds; use Pitch Black (#121212) for brand consistency.

### Layout

The site employs a max-width 1240px centered layout for content sections, set against a full-bleed dark background. The hero section is a full-width, dark-themed banner with a strong, centered headline and a large, evocative artist image that dominates the visual space. Subsequent sections maintain consistent vertical spacing, featuring prominent content grids for album art (typically 5-column or 4-column) and a clear division between content blocks. The navigation is a fixed top bar on a dark background, and content often appears in full-width rows with internal grid structures. There's a notable shift to a contained, light background section for illustrating app features, providing visual contrast and separation for product-focused content.

### Imagery

The visual language for imagery is content-centric, relying heavily on diverse, high-fidelity album art and artist photography. Images are presented in square or near-square formats, often in grids, without borders or masks, allowing the art to speak for itself. Photography, particularly in the hero section, tends towards darker, more artistic compositions that blend seamlessly with the dark UI. There are also product screenshots of mobile devices, depicted as clean, contained elements on a white background, contrasting the main dark theme to highlight app features. Icons are minimal, line-based, and achromatic, primarily Ghost White against dark backgrounds, serving purely functional roles.

### Elevation

This design intentionally avoids conventional drop shadows for conveying elevation. Instead, depth and hierarchy are established through shifts in background color (e.g., Ash Gray input fields on Pitch Black pages) and a subtle inset shadow rgba(18, 18, 18, 0.1) 0px 0px 0px 1px on input fields. This approach preserves the clean, flat aesthetic of the dark theme while still providing subtle visual cues.
