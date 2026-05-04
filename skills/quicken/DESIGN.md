---
version: alpha
name: Quicken
description: Quicken presents a robust, data-centric system with a cool, digital aesthetic. Deep violet and bright electric blue dominate, creating a distinct digital signature in a field often characterized by muted financial tones. Information is organized within clean, often shadowless cards, emphasizing clarity and efficient data presentation. Typography is confident and direct, avoiding decorative flourishes to deliver financial insights with precision. The overall impression is one of grounded digital authority, where color functions as high-contrast highlighting and action cues.
colors:
  deep-violet: "#0f0733"
  electric-indigo: "#471cff"
  pure-white: "#ffffff"
  charcoal-black: "#18181f"
  graphite: "#494949"
  snow-drift: "#f0f5fa"
  pale-lavender: "#dbd3ff"
  sky-mist: "#bbc5fa"
  crimson-alert: "#eb0130"
  sunny-orange: "#ff5a43"
  aqua-glow: "#7ae7fb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.35
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.32
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.24
    letterSpacing: -0.3px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.33px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.16
    letterSpacing: -0.45px
spacing:
  cardRadius: 16px
  buttonRadius: 400px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-action-button:
    role: Call to action
  outline-ghost-button:
    role: Secondary action
  text-link-button:
    role: Navigation or tertiary action
  hero-background-card:
    role: Information display
  elevated-feature-card:
    role: Product feature showcase
  clean-content-card:
    role: Standard content container
  discount-badge:
    role: Promotional highlight
  informational-badge:
    role: Feature or status indicator
---

## Overview

**North Star:** Electric violet data stream

Quicken presents a robust, data-centric system with a cool, digital aesthetic. Deep violet and bright electric blue dominate, creating a distinct digital signature in a field often characterized by muted financial tones. Information is organized within clean, often shadowless cards, emphasizing clarity and efficient data presentation. Typography is confident and direct, avoiding decorative flourishes to deliver financial insights with precision. The overall impression is one of grounded digital authority, where color functions as high-contrast highlighting and action cues.

### Do's

- Always use Haffer font family for all text elements to maintain typographic consistency.
- Prioritize Electric Indigo (#471cff) for all primary interactive elements like buttons and links.
- Utilize Pure White (#ffffff) as the dominant background for all content cards and the main page canvas.
- Apply Deep Violet (#0f0733) for hero sections and commanding headlines to define strong content blocks.
- Maintain a comfortable information density using 8px for `elementGap` between UI components and 16px padding within cards.
- Round corners on active elements: 400px for buttons to create 'pill' shapes, and 16px for cards for soft containment.
- Use rgba(0, 0, 0, 0.15) 10px 20px 30px 0px for `Elevated Feature Card` shadows to provide distinct visual hierarchy.

### Don'ts

- Avoid using multiple font families; Haffer should be the sole typeface.
- Do not introduce new color hues; strictly adhere to the defined palette, especially the Electric Indigo (#471cff) and Deep Violet (#0f0733) accents.
- Refrain from heavy, overly complex shadows or gradients; keep elevation subtle as seen in the `Elevated Feature Card` or fully flat.
- Avoid arbitrary border radii; follow the established values of 400px for buttons, 16px for cards, and 20px for discount badges.
- Do not use generic gray values for borders; instead, use Pale Lavender (#dbd3ff) or Sky Mist (#bbc5fa) for subtle, on-brand borders.
- Do not deviate from the consistent line-heights and negative letter-spacing for Haffer, especially at larger sizes, as these are critical to the brand's typographic tone.
- Avoid full-bleed sections that extend beyond the `pageMaxWidth` of 1440px, except for hero backgrounds which may span full width but contain content within the max-width.

### Layout

The page primarily uses a `max-width: 1440px` centered container, providing a structured, comfortable reading experience. The hero section is full-bleed with a Deep Violet background, featuring a prominent centered headline and descriptive text, often accompanied by a large 3D product mockup. Content below the hero alternates between full-width sections and contained blocks. Feature sections frequently employ two-column layouts pairing text with product visuals or data charts. Pricing information is presented in a card grid of three columns. Vertical rhythm is established through consistent section (`24px`) and element (`8px`) gaps, creating a sense of organized, approachable information flow. Navigation is a sticky top bar, providing persistent access to key sections.

### Imagery

The visual language focuses on 3D product renders and data visualizations. Product screenshots are typically presented within stylized device mockups, often floating or interacting with abstract, colored background elements, rather than flat UI. Data visualizations within these mockups are vibrant, using saturated blues, greens, and reds to communicate financial insights. Decorative imagery is minimal outside of these product-focused elements, emphasizing functionality over abstract art. Icons are simple, monochrome, and outlined, integrating seamlessly with text without distracting from the data.
