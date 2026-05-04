---
version: alpha
name: VITURE
description: VITURE designs with a high-contrast, modern tech aesthetic. Black and white dominate the UI, serving as a canvas for striking product imagery and a singular vivid orange accent that highlights calls to action and critical information. Typography is sophisticated and varied, supporting both extensive content and bold headlines. Components are minimal, focusing on functionality with soft, large radii and subtle elevation for interactive elements.
colors:
  midnight: "#0c0c0c"
  canvas-white: "#ffffff"
  ash-gray: "#7e7e7f"
  ink-black: "#000000"
  silver-mist: "#949597"
  light-frost: "#f7f7f8"
  pale-clay: "#eff0f3"
  storm-gray: "#5b5c5d"
  muted-clay: "#abacae"
  blaze-orange: "#ff5f34"
  deep-sunset-gradient: "#ff2900"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0.144px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.63
    letterSpacing: 0.416px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.35
    letterSpacing: 1px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
spacing:
  cardRadius: 28px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 48px
components:
  primary-filled-button:
    role: High-emphasis action
  ghost-border-button:
    role: Secondary action on dark backgrounds
  text-button:
    role: Minimalistic interactive element
  feature-card:
    role: Content container with subtle elevation
  input-field:
    role: Standard form input
  navigation-link:
    role: Interactive text in primary navigation
  footer-black-background:
    role: Section background for global footer
  product-image-card:
    role: Showcasing product visuals
---

## Overview

**North Star:** High-contrast tech canvas

VITURE designs with a high-contrast, modern tech aesthetic. Black and white dominate the UI, serving as a canvas for striking product imagery and a singular vivid orange accent that highlights calls to action and critical information. Typography is sophisticated and varied, supporting both extensive content and bold headlines. Components are minimal, focusing on functionality with soft, large radii and subtle elevation for interactive elements.

### Do's

- Prioritize Midnight (#0c0c0c) for primary text and Canvas White (#ffffff) for backgrounds to maintain clarity and high contrast.
- Use Blaze Orange (#ff5f34) exclusively for primary calls to action, interactive states, and key brand highlights to ensure visual impact.
- Apply 9999px border radius to all buttons and tags to create a consistent 'pill' shape, indicating interactive elements.
- Maintain comfortable element spacing with a base unit of 4px and frequent use of 16px row and column gaps for readability.
- Employ the FontSeasonSans typeface consistently across all text elements, leveraging its weight variations for hierarchy.
- Design interactive elements with subtle but clear feedback, such as text color changes to Blaze Orange (#ff5f34) for links.
- Ensure all backgrounds are solid colors, avoiding decorative patterns unless explicitly part of dynamic product visualizations.

### Don'ts

- Do not introduce new chromatic colors outside of Blaze Orange (#ff5f34) and the predefined gradients, to preserve brand focus.
- Avoid excessive use of shadows; maintain a flat UI unless a single, subtle elevation is strictly needed for interactive elements.
- Do not use generic system fonts; always map to FontSeasonSans or its substitute to maintain typographic brand identity.
- Refrain from using small, sharp radii; all interactive and content containers should use generous radii like 16px, 24px, 28px, or 9999px.
- Do not break the established contrast hierarchy by using low-contrast color pairs for essential text or interactive elements.
- Avoid cluttering layouts; prioritize comfortable spacing and clear visual separation between sections and elements.
- Do not apply Blaze Orange to non-interactive decorative elements, restricting its use to functional accents and calls to action.

### Layout

The page primarily uses a full-bleed layout for sections, with content often contained within a flexible maximum width. Hero sections are typically dark, featuring large headlines centered over dynamic product imagery or gradients. Section rhythm is often created through alternating background colors, moving between light Canvas White and deeper Silver Mist, with prominent Ink Black for the footer. Content is arranged in alternating text-and-image blocks or multi-column card grids, aiming for a spacious, comfortable density with clear vertical separation. The navigation is a sticky top bar, providing persistent access.

### Imagery

This design system heavily relies on slick, often abstract product photography with vibrant neon accents or gradients. Product visuals are mostly tight crops on dark or monochrome backgrounds, emphasizing the technology and its glowing elements. Images are generally contained within rectangular boundaries, sometimes with large radii (28px). Icons are minimalist, using outlines unless for decorative 'hero' branding. The focus is on showcasing the product's advanced nature through stylized visuals rather than lifestyle shots or complex illustrations. Imagery acts as content showcase and brand atmosphere rather than purely decorative elements.
