---
version: alpha
name: Earlydog
description: EarlyDog uses a playful, academic-chic visual system, balancing structured, bold typography with abstract, geometric illustrations on a warm, off-white canvas. The design features a high-contrast mono palette centered around a deep charcoal and an electric blue, punctuated by a set of vibrant, almost primary, accent colors in its graphic elements. Components are lightweight and confident, favoring high-radius outlines over heavy fills, creating an open and agile feel.
colors:
  canvas-parchment: "#fff9f0"
  midnight-ink: "#000609"
  electric-blue: "#0a65db"
  vivid-orange: "#ff6600"
  sunshine-yellow: "#f5c500"
  bubblegum-pink: "#f8b7d0"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.78
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.82
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
  headline-sm:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.1
    letterSpacing: -0.009px
  headline:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.03
    letterSpacing: -0.013px
  display:
    fontFamily: "system-ui"
    fontSize: 116px
    lineHeight: 1.23
    letterSpacing: -0.019px
spacing:
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 96px
components:
  ghost-button:
    role: Secondary action or navigational control
  filled-button:
    role: Primary Call-to-action
  section-card-ghost:
    role: Structural container for main content sections
  header-navigation-item:
    role: Primary navigation links
---

## Overview

**North Star:** Academic-chic abstract playground

EarlyDog uses a playful, academic-chic visual system, balancing structured, bold typography with abstract, geometric illustrations on a warm, off-white canvas. The design features a high-contrast mono palette centered around a deep charcoal and an electric blue, punctuated by a set of vibrant, almost primary, accent colors in its graphic elements. Components are lightweight and confident, favoring high-radius outlines over heavy fills, creating an open and agile feel.

### Do's

- Use Canvas Parchment (#fff9f0) as the primary background color for all main page content.
- Apply Midnight Ink (#000609) for all primary text and main headings.
- Utilize degular-display at weight 700 for all headlines, adjusting letter-spacing according to size (e.g., -0.019em at 116px).
- Always use a 9999px border-radius for buttons to achieve the signature pill shape.
- Maintain a spacious layout with 96px vertical section gaps and 16px horizontal element gaps between content blocks.
- Incorporate Electric Blue (#0a65db) as a functional accent color for interactive elements and key brand highlights.

### Don'ts

- Do not use subtle drop shadows; visual elevation is primarily achieved through high-contrast borders or color blocks.
- Avoid using multiple font families or weights beyond 'usual' 400/700 and 'degular-display' 700.
- Do not introduce new primary UI colors; adhere strictly to Canvas Parchment, Midnight Ink, and Electric Blue for functional elements.
- Do not use generic square or rounded-10px-radius buttons; all interactive buttons should be pill-shaped with 9999px radius.
- Avoid dense or cramped content; prioritize generous spacing for an open and breathable feel.

### Layout

The page primarily uses a max-width contained layout, though specific section cards expand to fill the available width (but still contain content). The hero section features a large, centered headline on the left, balanced by a bold abstract illustration on the right. Subsequent sections follow a consistent rhythm of alternating text-left/visual-right patterns or centered content stacks. Vertical spacing between sections is generous at 96px, creating a clear visual hierarchy. Navigation is a minimalist top bar with a hamburger menu for mobile and a 'Talk to us' button.

### Imagery

This design heavily features abstract, geometric illustrations. These are flat, vector-based, and composed of basic shapes (circles, squares, triangles, lines) in a vibrant, primary-like color palette (Vivid Orange, Sunshine Yellow, Bubblegum Pink, and Electric Blue, with some black lines). They serve a decorative and atmospheric role, adding a playful and dynamic energy to the page without being literal product showcases. Icons are minimal, outlined, and monochromatic (Midnight Ink). Imagery is contained within content blocks rather than full-bleed.
