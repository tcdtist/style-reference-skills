---
version: alpha
name: Glideapps
description: Glide's design system evokes an 'engineering clarity on a white canvas' aesthetic. It features a stark, high-contrast monochrome base, punctuated by a vibrant turquoise accent color for primary actions and interactive feedback. Typography is precise and utilitarian, prioritizing readability with minimal visual flourish. Components are lightweight with subtle radii and no prominent shadows, emphasizing a clean, fast interface designed for productivity.
colors:
  canvas-white: "#ffffff"
  ghost-fog: "#e4feff"
  pale-ash: "#edede8"
  warm-mist: "#d9dad3"
  steel-gray: "#999991"
  charcoal-text: "#303030"
  dark-graphite: "#5c5c5c"
  ink-black: "#000000"
  input-black: "#171715"
  midnight-black: "#0e0e0d"
  oceanic-teal: "#71eaee"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
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
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.3
    letterSpacing: -0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.05
    letterSpacing: -0.8px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 80px
components:
  primary-action-button:
    role: Filled button for main calls to action.
  ghost-accent-button:
    role: Subtle button for secondary actions or information calls.
  navigation-link-button:
    role: Text-only button for navigation or tertiary actions.
  text-input-default:
    role: Standard text entry field.
  informational-card:
    role: Container for content blocks.
  dark-content-card:
    role: Specialized card for showcasing rich media or specific content.
---

## Overview

**North Star:** Engineering clarity on white canvas

Glide's design system evokes an 'engineering clarity on a white canvas' aesthetic. It features a stark, high-contrast monochrome base, punctuated by a vibrant turquoise accent color for primary actions and interactive feedback. Typography is precise and utilitarian, prioritizing readability with minimal visual flourish. Components are lightweight with subtle radii and no prominent shadows, emphasizing a clean, fast interface designed for productivity.

### Do's

- Prioritize high-contrast achromatic palettes for structural elements, using Ink Black (#000000) for primary text and Canvas White (#ffffff) for backgrounds.
- Apply Oceanic Teal (#71eaee) exclusively as an accent for primary actionable elements like 'Start for free' buttons and key interactive highlights.
- Use bootonFont with tighter letter-spacing (-0.02em) for larger headings (48px and above) to achieve a condensed, modern impact.
- Maintain minimal border-radii: 6px for buttons and general UI elements, 12px for larger cards, and 0px for inputs to reinforce a precise aesthetic.
- Utilize a consistent 8px elementGap to structure component relationships and a 80px sectionGap for clear content separation.
- Ensure all interactive elements provide visual feedback, such as the subtle `rgba(255, 255, 255, 0.2) 0px -1px 0px 0px inset` shadow for primary buttons.
- Position content within a max-width of 1200px, centered on the page, with full-width sections for imagery or background patterns.

### Don'ts

- Do not introduce new chromatic colors beyond Oceanic Teal (#71eaee) without explicit brand evolution; maintain a predominantly monochrome aesthetic.
- Avoid heavy drop shadows or aggressive gradients; the system relies on flat surfaces, subtle borders, and minimal inset shadows for elevation.
- Do not deviate from the specified type scale for heading sizes or body text, as precise letter-spacing and line-heights are critical to brand legibility.
- Refrain from using excessively large border radii; the design opts for subtle rounding over overtly soft or pill-shaped elements.
- Do not use generic system fonts for headings; always default to bootonFont or affairsFont to maintain brand voice.
- Avoid dense, information-heavy sections without adequate sectionGap (80px), as the design emphasizes clear separation and comfortable reading zones.
- Do not use `0px` padding for interactive components like buttons, as it negatively impacts usability; maintain at least `6px` vertical and `12px` horizontal padding.

### Layout

The page maintains a centered max-width of 1200px for primary content, though some sections, particularly the hero, use full-bleed backgrounds. The hero features a large, centered headline backed by a prominent visual of either static imagery or video. Section rhythm is primarily consistent vertical spacing (80px), with alternating light and dark bands (Canvas White for most, Ink Black for the video section, Pale Ash for feature cards). Content is often arranged in 2-column text+visual layouts or 3-column card grids for features. Navigation is a sticky top bar with text links and a distinct primary action button. The layout prioritizes clear, segmented information over complex interweaving elements.

### Imagery

The imagery leans heavily on product screenshots for explanatory content, often featuring clean, minimalist UI within device mockups which are either full-bleed or contained within cards. Photography is scarce but, when present, shows professional, clean setups focusing on individuals interacting with technology, usually in well-lit, non-distracting environments. Icons are outlined, monochromatic, and subtly sized, serving functional rather than decorative roles. Illustration is absent. The overall density is text-dominant, with images serving as concise visual aids to text explanations rather than decorative elements.
