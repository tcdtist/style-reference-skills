---
version: alpha
name: Workable
description: Workable employs a direct and dynamic visual language, built on a clean canvas with a distinctive teal and dark forest green palette. Components are designed to be lightweight, with rounded corners that soften the strong typographic choices. Color is used purposefully for clear accents, interactive states, and to differentiate content blocks, while maintaining an overall sense of order and professionalism. The system balances functional clarity with subtle visual interest, avoiding heavy ornamentation.
colors:
  canvas-porcelain: "#fff5ee"
  white: "#ffffff"
  midnight-ink: "#0f161e"
  harbor-mist: "#333942"
  forest-canopy: "#012620"
  deep-teal: "#004038"
  fresh-teal: "#00f5dc"
  muted-sage: "#00544c"
  soft-peach: "#fde8ce"
  muted-mandarin: "#ffdcbf"
  sky-haze: "#bee9f4"
  lime-glow: "#d5ff4d"
  spring-bud: "#7edcaf"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.22
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.13
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 16px
  elementGap: 8px
  sectionGap: 32px
components:
  primary-ghost-button:
    role: Call to action with minimal visual weight
  secondary-ghost-button:
    role: Outlined action with rounded corners
  default-card:
    role: Content container for features or information blocks
  highlight-card-soft-peach:
    role: Emphasized content container with a warm background tint
  highlight-card-fresh-teal:
    role: Emphasized content container with a vivid background tint
  highlight-card-muted-mandarin:
    role: Emphasized content container with a warm orange background tint
  ghost-badge:
    role: Informational tag or label
  navigation-link-button:
    role: Actionable link within navigation
  contained-navigation-button:
    role: The primary call to action in the navigation bar
---

## Overview

**North Star:** Clean canvas, purposeful accents

Workable employs a direct and dynamic visual language, built on a clean canvas with a distinctive teal and dark forest green palette. Components are designed to be lightweight, with rounded corners that soften the strong typographic choices. Color is used purposefully for clear accents, interactive states, and to differentiate content blocks, while maintaining an overall sense of order and professionalism. The system balances functional clarity with subtle visual interest, avoiding heavy ornamentation.

### Do's

- Use Proxima Nova for all text elements to maintain typographic consistency.
- Apply 16px border-radius to all cards and buttons for a unified, soft edge.
- Utilize Forest Canopy (#012620) for dark section backgrounds and Deep Teal (#004038) for primary action outlines or filled navigation buttons.
- Employ 32px padding for internal card content and around main section elements.
- Maintain an 8px elementGap between smaller UI components for comfortable dense layouts.
- Prioritize Canvas Porcelain (#fff5ee) as the primary page background to create a clean, light base.
- Use Fresh Teal (#00f5dc) and Soft Peach (#fde8ce) as background tints for cards to visually group or highlight content.

### Don'ts

- Avoid arbitrary color usage; reserve brand and accent colors for functional roles or distinct highlights, not general decoration.
- Do not introduce complex shadows or extreme elevation; the design favors flat surfaces and subtle distinctions.
- Refrain from using overly decorative fonts; stick to Proxima Nova and Source Serif Pro for a clear, modern appearance.
- Do not deviate from the established 16px and 8px border-radii; random smaller or larger radii will break visual cohesion.
- Avoid dense, unbroken blocks of text; break content with headings, lists, and visual components.
- Do not use dark backgrounds for general page content; restrict them to hero sections or distinct visual breaks.
- Refrain from using system default link colors; ensure all links use either Midnight Ink (#0f161e) or Harbor Mist (#333942) unless an explicit accent link style is defined.

### Layout

The page primarily uses a full-bleed structure, with content sections extending across the viewport width, though a clear implicit max-width ensures readability. Hero sections often feature a full-bleed background (e.g., Forest Canopy) with centered headings. Content typically alternates between two-column layouts (text left, image right) and centered stacks. Feature sections use a 3-column card grid. Vertical spacing between sections is consistent at 32px, creating a comfortable yet information-dense rhythm. The navigation is a persistent top bar featuring a logo, product/pricing links, and two call-to-action buttons, maintaining a fixed presence.

### Imagery

This system primarily uses photography for human elements (diverse faces in cards) and abstract, colorful gradients for product-focused graphics. Photography is typically tightly cropped to faces, conveying a relatable human connection. Illustrations are characterized by abstract shapes and bold gradients, often resembling fluid organic forms rather than hard-edged geometry. Icons (when visible) are typically outlined with a moderate stroke weight, emphasizing clarity and lightness. Imagery serves both decorative atmosphere, product showcase, and providing human context within the UI. The density of imagery is moderate, used to break up text and add visual interest, rather than overwhelming the layout.
