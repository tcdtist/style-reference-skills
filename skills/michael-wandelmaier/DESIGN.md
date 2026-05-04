---
version: alpha
name: Michael Wandelmaier
description: This design system presents a dark canvas with strong typographical elements and sporadic, vibrant accents. Large, custom typefaces create a bold, editorial feel, while custom-shaped, brightly colored interactive elements punctuate the monochrome background. The overall impression is one of confident, art-directed simplicity, eschewing typical interface conventions for a more graphic, playful approach.
colors:
  midnight-ink: "#000000"
  canvas-dark: "#191816"
  cloud-white: "#ffffff"
  soft-gray: "#a9a9a9"
  deep-graphite: "#302f2d"
  spring-bud: "#34a847"
  flamingo-pink: "#fbcbcb"
  sunset-orange: "#f27851"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 4.8px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.33
    letterSpacing: 6.4px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.3
  display-md:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.2
  display-lg:
    fontFamily: "system-ui"
    fontSize: 187px
    lineHeight: 0.9
    letterSpacing: 37.4px
spacing:
  cardRadius: 10000px
  buttonRadius: 72px
  elementGap: 22px
  sectionGap: 96px
components:
  primary-action-button:
    role: Main call to action, visually distinct and interactive.
  ghost-outline-button:
    role: Secondary action or navigation link, subtle and integrates with the dark theme.
  accent-blob-card-flamingo-pink:
    role: Decorative background for featured items or visual breaks.
  accent-blob-card-sunset-orange:
    role: Decorative background for featured items or visual breaks.
  accent-blob-card-spring-bud:
    role: Decorative background for featured items or visual breaks.
  standard-badge-ghost:
    role: Categorization or tagging, visually lightweight.
  accent-badge-spring-bud:
    role: Highlighted categorization or tag, draws attention.
  list-item-divider:
    role: Separates content lines in lists, subtle presence.
---

## Overview

**North Star:** Dark canvas, bold blobs

This design system presents a dark canvas with strong typographical elements and sporadic, vibrant accents. Large, custom typefaces create a bold, editorial feel, while custom-shaped, brightly colored interactive elements punctuate the monochrome background. The overall impression is one of confident, art-directed simplicity, eschewing typical interface conventions for a more graphic, playful approach.

### Do's

- Use Canvas Dark (#191816) as the base background for most sections.
- Apply Cloud White (#ffffff) for all primary text elements, including headings and body copy.
- Utilize PolySans Bold (weight 100) and Canela Web (weight 100) at large sizes and Cloud White for impactful headings.
- Embed accent colors (Flamingo Pink #fbcbcb, Sunset Orange #f27851, Spring Bud #34a847) in large, irregular 10000px radius 'blob' shapes for visual interest where appropriate.
- Implement 72px radius for all interactive buttons and 48px for badges to maintain the rounded, soft aesthetic.
- Maintain a clear visual hierarchy by using Spring Bud (#34a847) only for primary actions and key highlights.
- Ensure consistent spaciousness with column/element gaps of 22px and section gaps of 96px.

### Don'ts

- Avoid using multiple accent colors in close proximity; let one color pop per visual cluster.
- Do not use box-shadows or significant elevation; maintain a flat, graphic aesthetic.
- Refrain from tight, dense layouts; prioritize generous spacing for a breathy, premium feel.
- Do not use generic system fonts for prominent headings; PolySans and Canela Web are critical for brand identity.
- Avoid sharp corners; all interactive elements and decorative shapes should feature extreme rounding (48px, 72px, 10000px).
- Do not vary font weights for PolySans headers; the consistent weight 100 is a signature choice.
- Avoid using any other color than Cloud White (#ffffff) for primary text on dark backgrounds.

### Layout

The page operates on a contained max-width of 1760px, centered on the screen. The hero section features large, custom typography and vibrant 'blob' components, creating a bold, graphic introduction. Section rhythm is driven by generous vertical spacing (96px section gaps) and the alternation between text-dominant blocks and photo grids. Content often appears in a simple two-column layout for text and images, or in a multi-column grid for work showcases. Navigation is minimal and fixed at the top, integrating subtly into the dark canvas.

### Imagery

This system primarily uses embedded photography treated as full-bleed, unmasked rectangles set against the dark canvas for product and team shots. There's a mix of candid lifestyle and focused close-ups. Icons are minimal, subtle, and appear as outlined strokes in Cloud White. Imagery, especially the full-bleed photos, acts as content showcases rather than purely decorative elements, often integrated into larger grid layouts with generous spacing.
