---
version: alpha
name: Humble
description: Humble's design system embraces a 'light AI lab' aesthetic: a pristine white canvas contrasted with sharp, functional typography. A singular vibrant orange acts as a dynamic accent, highlighting key actions and brand elements. Components are lightweight with subtle, diffused shadows that lift elements gently from the background rather than anchoring them with heavy forms. The overall impression is one of clarity, precision, and restrained energy.
colors:
  canvas-white: "#fafafa"
  obsidian-text: "#1c1c1c"
  granite-gray: "#6e6e6e"
  ink-black: "#000000"
  ghost-white: "#f1f1f1"
  alabaster-gray: "#ecebe8"
  electric-orange: "#ff4000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.007px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.04px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.5
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 0.7
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 0.7
    letterSpacing: -0.052px
spacing:
  cardRadius: 30px
  buttonRadius: 100px
  elementGap: 10px
  sectionGap: 64px
components:
  ghost-button:
    role: Primary call to action in hero sections or when a less prominent action is needed. Its inverse color scheme suggests a 'build' action for dark backgrounds.
  product-features-card:
    role: Standard card for content grouping, features, or product showcases. Characterized by soft elevation.
  enclosed-content-block:
    role: A variant for structured content with internal padding, like forms or detailed information panels, maintaining the elevated card aesthetic.
  subtle-background-card:
    role: Used for secondary information panels or a background for elements that need less visual weight, blending more into the canvas.
  hero-section-callout:
    role: A distinct background shape within a hero section, often for a title or subtitle. Its rounded and translucent nature makes it suitable for overlays.
  navigation-link:
    role: Top-level navigation item, subtly styled to integrate into the header.
  main-navigation-button:
    role: Prominent action in the header, signaling a primary user journey.
---

## Overview

**North Star:** Precise White Lab

Humble's design system embraces a 'light AI lab' aesthetic: a pristine white canvas contrasted with sharp, functional typography. A singular vibrant orange acts as a dynamic accent, highlighting key actions and brand elements. Components are lightweight with subtle, diffused shadows that lift elements gently from the background rather than anchoring them with heavy forms. The overall impression is one of clarity, precision, and restrained energy.

### Do's

- Prioritize Canvas White (#fafafa) for all primary backgrounds and surfaces.
- Use Bricolage Grotesque (weights 500, 600) for all headings, applying appropriate tight letter-spacing for each size.
- Apply Geist (weights 500, 600) for UI labels, navigation, and body text where precision is key.
- Elevate cards with a subtle, diffused shadow: rgba(0, 0, 0, 0.03) 0px 30px 30px -2.5px.
- Apply 30px border-radius to main content cards and 100px to all buttons for a consistent rounded feel.
- Reserve Electric Orange (#ff4000) strictly for accents, interactive links, and strong highlights, never for large background areas or primary text.
- Maintain comfortable spacing with 10px element gaps and 32px card padding, ensuring visual breathability.

### Don'ts

- Avoid heavy or high-contrast shadows; only use the subtle, diffused dark shadow.
- Do not introduce new display fonts; stick to Bricolage Grotesque for all headings.
- Never use Electric Orange (#ff4000) as a primary button background unless it's a small, icon-centric interaction.
- Do not use dark backgrounds for sections unless explicitly defined as a full-bleed hero or product showcase with the Dark Overlay Gradient.
- Avoid strong border strokes on cards; rely on elevation shadows or background color variations for differentiation.
- Do not deviate from the established border radii; 30px for cards, 100px for buttons, 6px for controls, and 40px for images ensures consistency.
- Refrain from using bold typefaces for body text; rely on weight 500 or 600 from Geist for emphasis.

### Layout

The page primarily uses a max-width contained layout section by section, centered on the screen, adhering to a light, open grid. The hero section breaks this with a full-bleed dark background and a central illustration flanked by textual content. Sections often alternate between full-width content blocks and more contained textual descriptions paired with product UI illustrations or screenshots occupying a two-column layout. Vertical rhythm is established by defined section gaps, creating breathing room between distinct content areas. The navigation is a sticky top bar with a primary 'Book a Call' button.

### Imagery

The visual language combines stylized vector illustrations of people and abstract product graphics with embedded product UI screenshots. Illustrations are often dimensional, with subtle shading, and feature a light, almost ethereal quality, often set against the pristine white background or within a contained dark gradient. Product screenshots are typically clean, full UI captures, often presented within mock devices or floating as elevated cards with soft shadows, showcasing the interface directly. Icons are minimalist, outlined, and monochromatic, maintaining a precise and functional style.
