---
version: alpha
name: General Intelligence Company
description: General Intelligence Company employs a sophisticated aesthetic, blending an evocative, illustrative dark hero with a predominantly minimalist, architectural light UI. Typography is restrained and elegant, utilizing a serif for headlines that conveys gravitas and a clean sans-serif for body text. Surfaces are layered with subtle translucency and soft, multi-layered shadows, creating depth without heaviness. The overall impression is one of calm authority and advanced technology, articulated through precise achromatic forms punctuated by a singular, cool blue accent for interactive elements.
colors:
  night-sky: "#1f1f29"
  cofounder-blue: "#0081c0"
  action-azure: "#41a1cf"
  pitch-black: "#000000"
  canvas-white: "#ffffff"
  off-white: "#fefffc"
  ash-gray: "#f9faf7"
  cool-gray: "#eef1ed"
  steel-gray: "#dee2de"
  dark-charcoal: "#171717"
  charcoal: "#2c2c2c"
  rich-black: "#282834"
  slate-gray: "#444141"
  medium-gray: "#646464"
  light-gray: "#b4b8b4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: -0.13px
  button-label:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: -0.19px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.1
    letterSpacing: -1.08px
spacing:
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 32px
components:
  ghost-button:
    role: Subtle interactive element
  subtle-nav-button:
    role: Navigation item or secondary ghost action
  solid-dark-button:
    role: Primary action within darker contexts
  outlined-action-button:
    role: Interactive button with a defined border
  blurred-nav-item:
    role: Navigation element with translucent background
  elevated-content-card:
    role: Content container with subtle elevation
  hero-overlay-card:
    role: Translucent content block over imagery
  cofounder-featured-card:
    role: Prominent, brand-colored feature display
  ghost-input-field:
    role: Standard user input field
---

## Overview

**North Star:** Architectural Night Sky

General Intelligence Company employs a sophisticated aesthetic, blending an evocative, illustrative dark hero with a predominantly minimalist, architectural light UI. Typography is restrained and elegant, utilizing a serif for headlines that conveys gravitas and a clean sans-serif for body text. Surfaces are layered with subtle translucency and soft, multi-layered shadows, creating depth without heaviness. The overall impression is one of calm authority and advanced technology, articulated through precise achromatic forms punctuated by a singular, cool blue accent for interactive elements.

### Do's

- Prioritize PPMondwest for all display and large headings (40px, 48px, 54px) using weight 400 or 500, with letter-spacing -0.0200em for a refined, compact look.
- Use 'Night Sky' (#1f1f29) as a deep, rich background for hero sections or brand-defining modules, contrasting with light body text and elements.
- Layer surfaces with 'Off White' (#fefffc) and 'Canvas White' (#ffffff) to provide subtle depth and structure on light-themed pages, emphasizing 'Canvas White' for main backgrounds and 'Off White' for slightly recessed elements.
- Apply 'Cofounder Blue' (#0081c0) sparingly as a functional accent color for key cards or active states, reserving its prominence for maximum impact.
- Implement soft, layered shadows for card components (e.g., rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 4px 5px 0px) to give elements a subtle lift without feeling heavy.
- Maintain a comfortable density with an element gap of 8px and card padding of 16px, ensuring sufficient breathing room between UI elements.
- Round corners with care: use 4px for small buttons, 8px for main interactive elements, 12px for cards, and 24px for larger, more prominent cards like the 'Hero Overlay Card', with 50.496px for highly rounded nav items.

### Don'ts

- Avoid excessive use of 'Cofounder Blue' (#0081c0) outside of clear accent roles; it should highlight, not dominate, the UI.
- Do not introduce strong, bold colors or gradients other than the defined brand accents; the system relies on a sophisticated achromatic foundation.
- Resist using heavy, opaque backgrounds for layered elements on light pages; instead, favor sublte translucency (rgba(222, 226, 222, 0.16)) for a delicate, modern effect.
- Do not use letter-spacing values tighter than -0.0200em for headings or wider than -0.0100em for body text. Maintain the precise, compact typographic rhythm.
- Refrain from sharp, angular corners for cards and buttons; apply the specified radii (4px, 8px, 12px, 16px, 24px, 50.496px) consistently for a softer, approachable feel.
- Do not deviate from the specified shadow values; the subtle, multi-layered shadows are key to the brand's sophisticated depth without visual clutter.
- Avoid cluttering the layout; aim for comfortable spacing both vertically (32px section gap) and horizontally, letting content breathe rather than stacking elements too closely.

### Layout

The page structure features an initial full-bleed hero section defined by a dark, illustrative cityscape background with a centered headline. Following this, the layout transitions to a contained, max-width (implied 1200px from content grouping) centered model for content sections. Sections alternate between 'Canvas White' and 'Off White' backgrounds, establishing a clear visual rhythm. Content is arranged predominantly in a two-column text-left/image-right pattern or centered text stacks for emphasis. Feature grids may appear in three-column structures. Navigation is a compact top bar, with sticky behavior, containing minimalist text links and a 'Get Cofounder' button.

### Imagery

The visual language for imagery combines two distinct styles: a highly detailed, illustrative, dark-themed cityscape for the hero section, serving as an atmospheric backdrop, and minimalist, contained product screenshots or abstract graphics for content areas. Photography is absent. Illustrations are organic and atmospheric in the hero, while content area graphics are abstract and geometric, typically featuring outlined shapes and a subdued, near-achromatic palette. Icons are outlined, with a moderate stroke weight, and mostly monochromatic. Imagery acts as both decorative atmosphere in the hero to draw the user in and as explanatory content in product sections, with a balanced density on content-heavy pages.
