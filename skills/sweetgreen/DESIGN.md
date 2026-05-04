---
version: alpha
name: sweetgreen
description: Sweetgreen cultivates a fresh, approachable aesthetic with a primary focus on ingredient transparency and natural vitality. Its visual language balances an organic, handcrafted feel with clean, modern utility. A vibrant, almost neon green-yellow acts as a spirited accent against an otherwise muted, earthy palette of desaturated greens and soft off-whites, echoing fresh produce against natural backdrops. Typography is friendly yet confident, pairing a distinct, light-weight display face for headlines with a clean sans-serif for body text. Components are light, favoring generous organic radii and subtle elevation.
colors:
  fresh-sprout: "#e6ff55"
  garden-patch: "#00473c"
  soil-shadow: "#0e150e"
  field-cream: "#f4f3e7"
  willow-mist: "#d8e5d6"
  grain-sand: "#e8dcc6"
  stone-grey: "#8c8c82"
  charcoal-haze: "#9fa19f"
  pitch-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
    letterSpacing: 0.17px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.85
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 0.85
spacing:
  cardRadius: 24px
  buttonRadius: 1000px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-action-button:
    role: Main call-to-action button for initiating key processes.
  ghost-link-button:
    role: Secondary action or navigation link within content.
  navigation-action-button:
    role: Compact primary action within navigation bars.
  product-card:
    role: Display for individual menu items or feature blocks.
  interactive-input-field:
    role: Used for user data entry in forms.
  accent-badge:
    role: Highlights key attributes or status.
---

## Overview

**North Star:** Farmer's market clarity

Sweetgreen cultivates a fresh, approachable aesthetic with a primary focus on ingredient transparency and natural vitality. Its visual language balances an organic, handcrafted feel with clean, modern utility. A vibrant, almost neon green-yellow acts as a spirited accent against an otherwise muted, earthy palette of desaturated greens and soft off-whites, echoing fresh produce against natural backdrops. Typography is friendly yet confident, pairing a distinct, light-weight display face for headlines with a clean sans-serif for body text. Components are light, favoring generous organic radii and subtle elevation.

### Do's

- Always use Fresh Sprout (#e6ff55) exclusively for primary action backgrounds and brand highlights to maintain its energetic impact.
- Apply the 1000px border-radius token for all primary and navigation filled buttons to achieve a distinct pill shape.
- Prioritize text legibility by pairing Soil Shadow (#0e150e) or Garden Patch (#00473c) on Field Cream (#f4f3e7) or Willow Mist (#d8e5d6) backgrounds.
- Utilize 'Grenette' font at weight 200 for large display headlines to convey authority through subtlety and restraint.
- Maintain a clear visual hierarchy with generous vertical spacing, using the sectionGap of '40px' between major content blocks.
- Introduce card elevation sparingly using the rgba(14, 21, 14, 0.4) 3px 3px 32px -10px shadow for interactive elements or featured content.
- Employ the 24px border-radius for cards and content containers to soften their edges and contribute an organic feel.

### Don'ts

- Do not use Fresh Sprout (#e6ff55) for general text or borders, as it dulls its impact as an accent.
- Avoid solid, sharp-edged rectangles for interactive elements; opt for rounded corners, especially 20px for badges and 1000px for buttons.
- Do not use 'SweetSansText' for large, impactful headlines; reserve the distinctive 'Grenette' for hero text and primary titles.
- Refrain from heavy, dark background sections unless explicitly for a footer or dedicated dark mode component.
- Avoid using multiple chromatic colors together; let Fresh Sprout be the primary splash of color.
- Do not introduce complex drop shadows or hard outlines; elements should feel light and naturally elevated or integrated.
- Never use excessive or inconsistent letter-spacing; adhere to the specified tracking for each font style and size.

### Layout

The page uses a maximum content width of 1440px, centered on the screen. The hero section is full-width with a visual-dominant background, featuring a large, centered headline and a prominent primary action button. Content sections often alternate between soft, muted background colors (Willow Mist, Grain Sand, Field Cream) and utilize a two-column layout with text and imagery side-by-side or stacked. A flexible grid displays product cards, typically in a three-column arrangement. Navigation is a persistent top bar with essential links and a 'Order' button, providing quick access and brand consistency.

### Imagery

Photography features vibrant, high-key close-ups of food and fresh ingredients, often arranged in bowls or on light-colored rustic surfaces. The treatment focuses on natural light and rich, true-to-life colors, with minimal styling beyond presentation. Product shots are typically isolated or minimally contextualized to emphasize the raw elements. Small, functional icons are filled, with a medium stroke weight where outlines exist, often in Pitch Black (achromatic). Imagery serves primarily to showcase the product irresistibly, acting as explanatory content and appetite stimulant.
