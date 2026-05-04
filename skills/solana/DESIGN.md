---
version: alpha
name: Solana
description: Solana's design embodies a 'cyber-dark' aesthetic, where deep, rich blacks and near-blacks define the primary surfaces, creating a stage for technological elegance. A vibrant, almost holographic purple gradient often provides atmospheric depth, suggesting digital flow. White typography and sparse, vivid chromatic accents (lime, violet, orange) act like data points or signal lights, providing crucial contrast and indicating interactivity within the dark interface. The interplay of fluid gradients and sharp, contained UI elements gives it a feeling of advanced, yet approachable, digital infrastructure.
colors:
  deep-space: "#000000"
  dark-matter: "#121212"
  void-shadow: "#0d0c11"
  vapor-gray: "#ababba"
  polar-white: "#ffffff"
  border-plasma: "#eaecf0"
  subtle-stone: "#848895"
  infrared-gradient: "#000000"
  cyber-lime: "#55e9ab"
  digital-violet: "#ca9ff5"
  neon-orange: "#f48252"
  muted-lilac: "#dfcdf5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.14
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.31
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.28px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.13
    letterSpacing: -0.8px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -1.92px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1
    letterSpacing: -3.52px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  elementGap: 4px
components:
  promotion-card-hackathon:
    role: 
  event-cards-meet-solana-irl:
    role: 
  news-article-card-latest-on-solana:
    role: 
  primary-ghost-button:
    role: Call to action, navigation items
  secondary-ghost-button:
    role: Subtle actions, secondary navigation
  icon-only-ghost-button:
    role: Tertiary actions, social links, compact navigation
  card-button:
    role: Interactive clickable cards featuring content
  transparent-content-card:
    role: Showcasing content blocks, events, images with minimal visual chrome.
  fixed-navigation-bar:
    role: Global navigation, search, language toggle
  promotion-card-hackathon:
    role: Highlighting specific events or features
---

## Overview

**North Star:** Galactic Command Center. Surfaces are deep space, accents are cosmic signals.

Solana's design embodies a 'cyber-dark' aesthetic, where deep, rich blacks and near-blacks define the primary surfaces, creating a stage for technological elegance. A vibrant, almost holographic purple gradient often provides atmospheric depth, suggesting digital flow. White typography and sparse, vivid chromatic accents (lime, violet, orange) act like data points or signal lights, providing crucial contrast and indicating interactivity within the dark interface. The interplay of fluid gradients and sharp, contained UI elements gives it a feeling of advanced, yet approachable, digital infrastructure.

### Do's

- Do use Deep Space (#000000) as the primary page background for ultimate contrast.
- Do apply 9999px borderRadius for all interactive buttons and pill-shaped elements to maintain brand consistency.
- Do utilize Diatype (or Inter) at heavier weights (300-500) and Polar White (#ffffff) for all headlines.
- Do leverage the Infrared Gradient (linear-gradient(rgb(0, 0, 0), rgb(20, 0, 29))) for hero backgrounds to establish atmospheric depth.
- Do maintain a comfortable elementGap of 4px for tight UI element separation, scaling up as needed for larger blocks.
- Do use Border Plasma (rgba(236, 228, 253, 0.2)) for subtle borders on ghost buttons against dark backgrounds.
- Do use Cyber Lime (#55e9ab) sparingly as an accent color for key interactive states or indicators.

### Don'ts

- Don't use pronounced box shadows; subtle insets or glows are preferred, if any, as the design relies on color and gradient depth.
- Don't introduce additional bright or pastel backgrounds; maintain the dark theme with Dark Matter (#121212) or Deep Space (#000000) for all surfaces.
- Don't use standard square buttons; all primary interaction buttons should be pill-shaped (9999px radius).
- Don't use overly saturated colors for body text; rely on Vapor Gray (#ababba) for readability against dark surfaces.
- Don't use generic system fonts; always prioritize Diatype (or its substitute Inter) to maintain the brand's typographic identity.
- Don't break the established padding of 32px for cards; this ensures consistent content breathing room.

### Layout

The page primarily employs a max-width contained layout for content sections, set against full-bleed dark backgrounds. The hero section is full-bleed with a prominent abstract gradient graphic and a large, centered headline, immediately establishing the brand's aesthetic. Subsequent sections alternate between full-width content bands and cards grids. Content arrangement frequently uses large, centered text blocks (headings) followed by multi-column card grids for features and events. Spacing between sections is generous, creating a sense of expansiveness. The navigation is a sticky top bar, providing consistent access to global actions.

### Imagery

The visual language is characterized by abstract, swirling 3D graphics in deep purples, blues, and electric greens, suggesting data flow and connectivity. These graphics are often full-bleed in hero sections, creating immersive backgrounds that establish a futuristic, technological atmosphere. Product screenshots are absent; instead, the focus is on the underlying infrastructure and abstract representations of its power. Icons are minimalist, using mono-color fills or strokes, primarily in white or accent colors, complementing the UI rather than distracting from it.

### Elevation

This design largely eschews traditional shadows, instead relying on layered dark backgrounds and subtle inner glows (like those seen on some buttons) to create depth. The primary method for conveying hierarchy and distinction is through varying shades of dark background colors and high-contrast typography, giving a floating, almost holographic feel to elements rather than a grounded, shadowed one. The single prominent shadow found on a specific button variant appears more as an ethereal glow and inner highlight than a true light-source shadow, reinforcing the digital, non-physical aesthetic.
