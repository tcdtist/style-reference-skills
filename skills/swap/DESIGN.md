---
version: alpha
name: Swap
description: Swap's design system evokes an 'AI as a service' aesthetic with a bright, spacious, and slightly austere canvas adorned with precise, geometric forms. Typography is a key differentiator: elegant, thin headings juxtapose with a workhorse sans-serif for body text, creating a contrast of sophistication and clarity. A prominent, vibrant green gradient is used sparingly as a functional accent, making interactive elements feel 'charged'. Surfaces are predominantly clean white, occasionally featuring subtle shadows for a light sense of elevation or rich, deep-toned section cards. Components are generally compact and direct, prioritizing information delivery over heavy ornamentation.
colors:
  canvas-white: "#ffffff"
  graphite-inset: "#2d3637"
  shadow-green-bg: "#0d5b3b"
  deep-forest-bg: "#083a26"
  stone-beige: "#e9e7e2"
  outline-gray: "#cccccc"
  text-black: "#000000"
  muted-ash: "#999999"
  mint-accent: "#a3fda7"
  subtle-sage: "#9cb0a8"
  agentic-gradient: "#82ff87"
  subtle-gray-card: "#838676"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.95
    letterSpacing: -1.22px
spacing:
  cardRadius: 24px
  buttonRadius: 200px
  elementGap: 8px
  sectionGap: 30px
components:
  ghost-text-button:
    role: Navigation links and secondary actions
  pill-accent-button:
    role: Primary call-to-actions
  pill-ghost-button:
    role: Secondary and descriptive actions
  card-with-shadow:
    role: Content containers with subtle elevation
  dark-content-card:
    role: Prominent content blocks, often for feature showcases
  accent-gradient-card:
    role: Prominent content blocks, usually for features or special offers
  minimal-input-field:
    role: Form inputs
---

## Overview

**North Star:** Crisp AI Canvas

Swap's design system evokes an 'AI as a service' aesthetic with a bright, spacious, and slightly austere canvas adorned with precise, geometric forms. Typography is a key differentiator: elegant, thin headings juxtapose with a workhorse sans-serif for body text, creating a contrast of sophistication and clarity. A prominent, vibrant green gradient is used sparingly as a functional accent, making interactive elements feel 'charged'. Surfaces are predominantly clean white, occasionally featuring subtle shadows for a light sense of elevation or rich, deep-toned section cards. Components are generally compact and direct, prioritizing information delivery over heavy ornamentation.

### Do's

- Use 'Canvas White' (#ffffff) as the primary background for most sections.
- Apply 'Text Black' (#000000) for all primary body text and headings.
- Emphasize primary calls-to-action with the 'Pill Accent Button' featuring 'Mint Accent' (#a3fda7) background.
- Use 'secondaryFont' at weight 100 or 300 for all large display headlines to maintain a refined, light aesthetic.
- Apply a 24px border-radius to all card components (Card with Shadow, Dark Content Card, Accent Gradient Card).
- Maintain generous vertical spacing between major sections, utilizing the 'sectionGap' of 30px.
- Utilize the 'Agentic Gradient' only for hero text or distinct graphical elements, never for backgrounds or small UI details.

### Don'ts

- Avoid heavy shadows; use 'rgba(0, 0, 0, 0.09) 0px 0px 28px 0px' only for intentionally elevated cards.
- Do not use highly saturated colors for general UI elements; reserve 'Mint Accent' (#a3fda7) for primary actions and highlights.
- Never use bold (weight 700) from 'secondaryFont' for headlines; its characteristic is its lightness.
- Do not add additional decorative borders or heavy backgrounds to input fields, they should remain minimal and pill-shaped.
- Avoid tightly packed content; ensure a minimum 'elementGap' of 8px between discrete UI elements.
- Do not use generic square buttons; all distinct interactive buttons should leverage the 200px (full pill) or 1.67772e+07px (rounded pill) radius.

### Imagery

This system primarily uses product-focused design, with custom graphics being a prominent feature. There's a strong lean towards abstract, gradient-filled typography for hero sections and illustrative elements, embodying the 'Agentic Gradient'. Where present, imagery appears to be either logo displays (customer stories) or product screenshots integrated seamlessly into the UI. Icons are minimal, typically 'Text Black' (#000000), and outlined rather than filled, maintaining the lightweight feel. The density is moderate, with ample negative space around key textual and interactive elements, allowing the custom graphics and bold typography to dominate focal points.
