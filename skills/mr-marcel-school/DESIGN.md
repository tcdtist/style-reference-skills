---
version: alpha
name: Mr. Marcel School
description: Mr. Marcel School employs a vibrant, educational workshop aesthetic, combining a primarily dark canvas with high-contrast, playful chromatic accents. The density is balanced, favoring clear separation between content blocks. Typography is confident yet friendly, set against dark surfaces with selective use of bright colors for emphasis. Components are sharp-edged, often outlined, and avoid heavy shadows, creating a lightweight, graphic feel.
colors:
  midnight-canvas: "#242424"
  ivory-canvas: "#ffffff"
  deep-black-text: "#020202"
  soft-black-surface: "#191919"
  muted-sage: "#dbf3d0"
  pale-peach-accent: "#f8c6ab"
  pale-lavender: "#abc1e8"
  warm-beige: "#eee1d3"
  vibrant-red: "#e24037"
  mellow-yellow-background: "#ffe9ad"
  subtle-cream-card: "#fddebe"
  off-white-hero-base: "#fff6de"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: 0.007px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.35
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.35
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 50%
  elementGap: 12px
  sectionGap: 24px
components:
  ghost-circular-button:
    role: Navigation and subtle actions
  filled-square-accent-button:
    role: Primary call to action in dark sections
  circular-icon-button:
    role: Small, functional icons or badges
  transparent-content-card:
    role: Grouping content without strong visual borders
  dark-content-card:
    role: Prominent content blocks on dark backgrounds
  circular-card:
    role: Highlighting specific items or profile pictures
  hero-section-card:
    role: Prominent content in light hero sections
  ghost-badge:
    role: Tags or categories with minimal visual weight
---

## Overview

**North Star:** Playful dark workshop

Mr. Marcel School employs a vibrant, educational workshop aesthetic, combining a primarily dark canvas with high-contrast, playful chromatic accents. The density is balanced, favoring clear separation between content blocks. Typography is confident yet friendly, set against dark surfaces with selective use of bright colors for emphasis. Components are sharp-edged, often outlined, and avoid heavy shadows, creating a lightweight, graphic feel.

### Do's

- Prioritize Midnight Canvas (#242424) for primary backgrounds and Soft Black Surface (#191919) for elevated elements, maintaining a dark theme.
- Use Muted Sage (#dbf3d0) for primary interactive elements and key brand accents to create visual punctuation.
- Apply a 0px border-radius for most rectangular UI elements like cards and some buttons to maintain a sharp, graphic feel.
- Utilize 50% border-radius for circular elements, such as ghost buttons or profile picture frames, for clear distinction.
- Maintain a clear visual hierarchy with Sofia Pro in various weights for headings and body text, especially the larger sizes of 52px and 74px for display text.
- Employ Pale Lavender (#abc1e8) for informational accents and active navigational items to guide user attention.
- Ensure generous padding of 30px within Dark Content Cards to provide ample breathing room around content.

### Don'ts

- Avoid applying heavy drop shadows; the system favors flat or outlined elements over dimensional ones.
- Do not use generic blue for primary action or informational states; instead, leverage Muted Sage (#dbf3d0) and Pale Lavender (#abc1e8).
- Refrain from using gradients broadly; the UI is characterized by flat colors and sharp contrasts.
- Do not introduce rounded corners arbitrarily; follow the established 0px for cards/blocks and 50% for circular elements.
- Avoid dense, information-packed sections without clear visual breaks; prioritize comfortable density for readability.
- Do not use standard system fonts when Sofia Pro or Helvetica (where specified) are designated for content.
- Do not override the distinct letter-spacing for Helvetica at 15px (0.0070em); this is a specific design choice.

### Layout

The page primarily uses a max-width contained layout of 1320px, with content centered. The hero section is often full-bleed with an off-white background and a split-screen arrangement of text Left and a large, abstract illustration Right. Section rhythm is created through alternating background colors, primarily Midnight Canvas (#242424) and Mellow Yellow Background (#ffe9ad), but without explicit dividers – sections flow seamlessly. Content arrangement frequently uses two-column layouts, often text-left/visual-right, or stacked centered blocks for features. Card grids (typically 4-column) are employed for displaying individuals or program types. Navigation is a persistent top bar, sticky on scroll, with clear brand colors for active states. The overall density is comfortable, with clear vertical spacing between content blocks.

### Imagery

The site uses a mix of playful, abstract illustrations and tightly cropped product/profile photography. Illustrations are flat, graphic, and use a limited color palette of brand colors (green, orange, blue, yellow, red on pink or off-white backgrounds). They are often geometric with clear outlines or filled shapes, adding a whimsical yet structured feel. Photography focuses on professional headshots or clean product examples, often within square or circular masked frames, lacking busy backgrounds. Icons are minimal, either outlined (Font Awesome 6 Brands, fontello) or simple filled shapes, maintaining a consistent stroke weight. Imagery primarily serves a decorative and atmospheric role in hero sections, then transitions to explanatory or social proof in content blocks, occupying significant visual space.
