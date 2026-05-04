---
version: alpha
name: Caserne
description: Caserne employs a stark, high-contrast dark mode aesthetic, emphasizing content through its absence of clutter. Typography is the primary visual element, with a single, highly legible sans-serif font deployed across various weights. A singular vivid orange serves as the functional accent, acting as a precise visual punctuation against the expansive black and white canvas. The design prioritizes a minimalist presentation, allowing large-format imagery and bold type to command attention.
colors:
  absolute-zero: "#000000"
  ghost-white: "#f2f2f2"
  cloud-burst: "#ffffff"
  steel-gaze: "#858484"
  deep-graphite: "#333333"
  ember-glow: "#ff4513"
spacing:
  elementGap: 5px
  sectionGap: 90px
components:
  navigation-link:
    role: Top-level navigation items
  work-item-title:
    role: Titles for portfolio pieces or content cards
  work-item-subtitle:
    role: Descriptive text for portfolio pieces or content cards
  info-contact-link:
    role: Small, functional links in footer or secondary sections
---

## Overview

**North Star:** Gallery Grid, Dark Canvas

Caserne employs a stark, high-contrast dark mode aesthetic, emphasizing content through its absence of clutter. Typography is the primary visual element, with a single, highly legible sans-serif font deployed across various weights. A singular vivid orange serves as the functional accent, acting as a precise visual punctuation against the expansive black and white canvas. The design prioritizes a minimalist presentation, allowing large-format imagery and bold type to command attention.

### Do's

- Maintain a high contrast ratio between text and background, predominantly using Ghost White (#f2f2f2) or Cloud Burst (#ffffff) on Absolute Zero (#000000).
- Utilize Ember Glow (#ff4513) exclusively for interactive states or minimal decorative accents, ensuring it never competes with primary content.
- Employ ABC Oracle's lighter weights (100, 400) for navigation and body text, reserving the 700 weight for critical emphasis.
- Apply a default border-radius of 0px to all elements, maintaining crisp, sharp edges throughout the interface.
- Implement consistent vertical spacing with 90px between major content sections and 5px between closely related elements.
- Position all navigation links and key interactive elements with top and left padding of 5px to ensure consistent visual alignment.
- Allow large-format photography to occupy significant screen real estate, often full-bleed, as the primary visual content.

### Don'ts

- Avoid introducing additional chromatic colors; Ember Glow (#ff4513) is the sole acceptable accent color.
- Do not use shadows or complex elevation techniques; the design relies on flat planes and strong contrast for depth.
- Refrain from using heavily rounded corners; all elements should maintain sharp, angular forms.
- Do not break the dark background scheme with light-themed sections or cards; maintain an overall dark aesthetic.
- Avoid excessive ornamental elements or decorative visuals that detract from the content and minimalist ethos.
- Do not use generic system fonts; ABC Oracle must be used for all text content to maintain brand identity.
- Avoid small unreadable text sizes; ensure minimum text size is 13px, with adequate line height for readability.

### Layout

The page maintains a full-bleed layout, with content extending to the edges of the viewport rather than being constrained by a `pageMaxWidth`. The hero section features large, immersive photography as its background, usually with minimal overlaid text. Section rhythm is driven by alternating content blocks, often full-width images or black quadrants, maintaining consistent vertical spacing. Content arrangement frequently uses a grid-like structure for displaying work, where large image tiles with minimal text details are presented. The overall density leans towards spacious and impactful presentation rather than information-heavy blocks. Navigation is a simple, fixed top bar presenting minimal links without complex menus.

### Imagery

This system primarily features large-format, full-bleed photography and product screenshots. The photography style is direct, often showcasing structures or branding elements with a focus on clean lines and real-world application. Imagery is contained within sharp, unrounded edges and occupies significant visual space, acting as hero content. Icons, if present, are minimal (e.g., Apple logo) and monochromatic, aligning with the stark visual language. The density is image-heavy, with visuals frequently dominating sections over text.
