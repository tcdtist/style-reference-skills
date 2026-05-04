---
version: alpha
name: Eventbrite
description: Eventbrite employs a lively discovery-platform aesthetic, featuring a bright, almost white canvas punctuated by a single vivid blue for interaction and branding. Typography is direct and legible, supporting a clear hierarchy without being overt. Components are lightweight with subtle borders and generous rounded corners, emphasizing content flow and event visibility over heavy chrome.
colors:
  canvas-white: "#ffffff"
  porcelain-mist: "#f8f7fa"
  lavender-ash: "#dbdae3"
  ghost-gray: "#eeedf2"
  inkwell-purple: "#39364f"
  shadow-graphite: "#585163"
  slate-steel: "#6f7287"
  oceanic-blue: "#3659e3"
  deep-plum: "#1e0a3c"
  terra-cotta: "#f05537"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
spacing:
  cardRadius: 16px
  buttonRadius: 360px
  elementGap: 12px
  sectionGap: 77px
components:
  ghost-button:
    role: Outline style button for secondary actions or navigation.
  pill-button:
    role: Small, contained button for filters or tags.
  category-navigation-link:
    role: Navigational link within category menus, often below a main image.
  standard-card:
    role: Container for event listings and general content blocks.
  hero-card:
    role: Prominent card used in hero sections, often with an integrated image.
  compact-card:
    role: Smaller cards for dense content layouts or galleries.
  filter-badge:
    role: Small, rounded labels for filtering or categorization.
  navigation-search-input:
    role: Input field for global search functionality in the header.
---

## Overview

**North Star:** Event listing, vibrant and clear

Eventbrite employs a lively discovery-platform aesthetic, featuring a bright, almost white canvas punctuated by a single vivid blue for interaction and branding. Typography is direct and legible, supporting a clear hierarchy without being overt. Components are lightweight with subtle borders and generous rounded corners, emphasizing content flow and event visibility over heavy chrome.

### Do's

- Use Canvas White (#ffffff) as the primary page background to create an expansive, light environment.
- Apply Oceanic Blue (#3659e3) exclusively for interactive elements like links, outlined buttons, and input borders to signal functionality.
- Ensure all cards use a radius of 16px, except for hero-style cards which use 40px 40px 0px 0px for a distinct top edge.
- Prioritize Neue Plak family for all text elements, using condensed weights and sizes above 18px for headlines and Neue Plak Text 600 for navigation.
- Maintain a comfortable density with 12px for `elementGap` and `cardPadding` within components to ensure readability.
- Implement Pill Buttons with a 360px radius for a fully rounded, distinct interactive shape.
- Use Lavender Ash (#dbdae3) for hairline borders on lists and cards to keep surfaces clean yet structured.

### Don'ts

- Avoid using highly saturated colors for large background areas, keeping the interface neutral and accent-driven.
- Do not introduce strong box-shadows on cards or containers; flatness is preferred to maintain a lightweight feel.
- Do not deviate from the Neue Plak family for primary text; it sets the brand's typographic tone.
- Do not use generic square buttons; opt for rounded (360px) or ghost buttons as per the design system.
- Avoid arbitrary uses of Terracotta (#f05537); reserve it for specific illustrative branding rather than widespread UI elements.
- Do not vary from the established spacing units; maintain the 4px base for consistent rhythm and hierarchy.
- Do not clutter card content with excessive internal padding; content should define the card's boundaries, not excessive internal whitespace.

### Layout

The site uses a full-bleed page model for its primary background, but content within sections is typically contained and centered within a comfortable max-width. The hero section often features a full-width background image with centered, condensed headline text. Sections follow a consistent vertical rhythm, primarily flowing seamlessly with minimal visual dividers. Content is arranged in flexible grid layouts, with multi-column event cards featuring images prominently. A dominant pattern is a 4-column card grid for event listings. The navigation is a sticky top bar, providing persistent access to search and key actions while scrolling.

### Imagery

The visual language for imagery is diverse, incorporating photography and custom illustrations. Photography is typically lifestyle or event-focused, sometimes with a slight creative crop but generally left unmasked. Product screenshots appear less frequently. Illustrations are organic, often flat but with some subtle dimension, featuring a muted color palette that occasionally includes branded accents like Terra Cotta. Icons are outlined, conveying functionality without heavy visual weight. Imagery serves both decorative atmosphere in hero sections and explanatory content in event listings, often appearing as contained image blocks within cards, dominating visual space in grid layouts.
