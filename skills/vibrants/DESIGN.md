---
version: alpha
name: Vibrants
description: Vibrants uses a clean, bright aesthetic where information is presented on a spacious white canvas. Typography is primarily functional, with clear sans-serifs defining structure, while a custom display font adds a touch of friendly sophistication to headlines. The system relies on a focused color palette, primarily neutral for backgrounds and text, punctuated by a vibrant green accent color that signals action. Components are lightweight with subtle rounding and minimal elevation, maintaining an airy and approachable feel.
colors:
  midnight-ink: "#021422"
  cloud-white: "#ffffff"
  fog-gray: "#e6e8e9"
  canvas-ice: "#f2f6ff"
  smoke-stone: "#ccd2d7"
  forest-green: "#00852e"
  sky-blue: "#91c3ff"
  deep-ocean: "#001f38"
  asphalt-gray: "#808f9c"
  charcoal-haze: "#6a7c89"
  star-dust: "#ffb931"
  rainbow-wash-gradient: "#724d99"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 1.3px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.43
    letterSpacing: -0.44px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.96px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 39px
components:
  primary-filled-button:
    role: Highlight key actions.
  outline-accent-button:
    role: Secondary calls to action, prominent links.
  dark-filled-button:
    role: Primary Call to action, often in hero sections.
  pill-outline-button:
    role: Filter options, secondary choices.
  product-card:
    role: Display individual patch products.
  promotional-badge:
    role: Highlight discounts and offers.
  neutral-tag-badge:
    role: Categorization or status indicators.
---

## Overview

**North Star:** white canvas, vibrant accents

Vibrants uses a clean, bright aesthetic where information is presented on a spacious white canvas. Typography is primarily functional, with clear sans-serifs defining structure, while a custom display font adds a touch of friendly sophistication to headlines. The system relies on a focused color palette, primarily neutral for backgrounds and text, punctuated by a vibrant green accent color that signals action. Components are lightweight with subtle rounding and minimal elevation, maintaining an airy and approachable feel.

### Do's

- Use Midnight Ink (#021422) for all primary body text and most headings to ensure strong contrast and legibility.
- Apply Cloud White (#ffffff) as the dominant background color for pages and cards to maintain a spacious and clean aesthetic.
- Reserve Forest Green (#00852e) exclusively for primary call-to-action buttons and prominent promotional badges.
- Employ new-kansas for main headlines and titles, leveraging its custom weight and negative letter-spacing for brand distinction.
- Maintain an inverse border radius for card elements, using 8px at the product image's top and 8px at the content area's bottom, with a seamless middle for content flow.
- Use a minimum element gap of 16px to ensure comfortable spacing between UI elements and content blocks.
- Apply a 1px solid Fog Gray (#e6e8e9) border for subtle dividers and navigation item separation, not for card outlines.

### Don'ts

- Do not use highly saturated colors for large background areas; limit them to accents and interactive elements.
- Avoid generic system fonts for headlines; the custom new-kansas and rift-soft families are integral to brand identity.
- Do not introduce strong drop shadows; keep elevation subtle, if present at all, to maintain the light and airy feel.
- Do not use multiple accent colors prominently; rely on Forest Green (#00852e) and Sky Blue (#91c3ff) for most interactive states.
- Avoid dense, information-heavy blocks of text; break content into manageable cards or sections with ample white space.
- Do not use hard, sharp corners on interactive elements; consistently apply 8px or 3px radii for buttons and badges, or 20px/32px for pill shapes.
- Refrain from dark mode implementations; the system is designed explicitly for a light theme with high contrast primary text and backgrounds.

### Layout

The page primarily utilizes a max-width contained layout, allowing for generous side margins on larger screens. The hero section is full-width with a split text-left/visual-right pattern, effectively introducing the product. Content below the hero alternates between full-width sections and grid-based arrangements. A prominent 3-column card grid is used for displaying product categories ('Our Patches', 'Our Bundles'), ensuring a consistent visual rhythm. Vertical spacing between sections is comfortable, contributing to the airy feel. Navigation consists of a sticky top bar with a left-aligned logo and right-aligned utilitarian icons.

### Imagery

The site uses a mix of minimal product photography and stylized abstract representations. Product imagery features tight crops of patches, often on a white or simple background, focusing solely on the item. Illustrations associated with products (like 'Calm Down' or 'Stay Focused') are stylized, flat, and incorporate gradient backgrounds or color overlays. Icons are simple, outlined, and monochromatic, used for navigation and minor functional elements. The overall visual language is one of clarity and focus, where images serve either to directly showcase the product or to convey an abstract benefit.
