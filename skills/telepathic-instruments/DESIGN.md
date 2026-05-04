---
version: alpha
name: Telepathic Instruments
description: Telepathic Instruments blends scientific product UI with artistic ambiguity. The interface centers on a minimal, high-contrast monochrome palette, punctuated by a single vibrant orange accent. Typography is compact and precise, using a bespoke geometric sans-serif that lends a technical yet refined feel. Visuals often feature abstract, blurry backgrounds with sparse, distinct elements foregrounded, creating a sense of unfolding discovery.
colors:
  canvas: "#e5e7eb"
  charcoal: "#000000"
  snow: "#ffffff"
  steel: "#a3a3a3"
  ash: "#191919"
  mercury: "#c2c2c2"
  powder: "#dddee2"
  muted-sage: "#d7cdb8"
  amber-glow: "#ff6c2f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.85
    letterSpacing: -0.03px
spacing:
  cardRadius: 0px
  buttonRadius: 24px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-action-button:
    role: Call to action button for primary actions.
  amber-glow-action-button:
    role: Highlighting a key action for immediate visibility.
  ghost-button:
    role: Secondary and tertiary actions that require less visual emphasis.
  text-link-button:
    role: Low-prominence inline actions or navigation.
  product-card:
    role: Displaying product information or content blocks.
  form-input:
    role: User input fields.
---

## Overview

**North Star:** Techno-futurist laboratory

Telepathic Instruments blends scientific product UI with artistic ambiguity. The interface centers on a minimal, high-contrast monochrome palette, punctuated by a single vibrant orange accent. Typography is compact and precise, using a bespoke geometric sans-serif that lends a technical yet refined feel. Visuals often feature abstract, blurry backgrounds with sparse, distinct elements foregrounded, creating a sense of unfolding discovery.

### Do's

- Prioritize Charcoal (#000000) for primary text and Snow (#ffffff) for backgrounds to maintain a high-contrast base.
- Use Amber Glow (#ff6c2f) exclusively for primary calls-to-action like 'Join Mailing List' to ensure its impact.
- Apply Suisse Intl with tight letter-spacing (-0.0300em for 100px text) for headlines to create a sharp, modern feel.
- Use Suisse Intl Mono for any technical or data-driven text, like input fields or code, to convey precision.
- Maintain minimal padding (8px, 12px) and flush card designs (0px border radius, no shadow) to keep surfaces lightweight.
- Construct button corners with a large radius (24px) for a soft, approachable pill-like shape, or 0px for Ghost Buttons.
- Apply backdrop filters for blurring to backgrounds in hero sections or behind overlays to create depth and focus on foreground elements.

### Don'ts

- Avoid using Amber Glow (#ff6c2f) as a general-purpose color; limit its use to primary interactive elements.
- Do not introduce additional bold or highly saturated colors unless they are part of explicit product branding within content areas.
- Refrain from using heavy box shadows or strong borders on cards; surfaces should appear flat or subtly defined by their surroundings.
- Do not deviate from the specified tight letter-spacing for Suisse Intl at larger sizes; it's key to the typographical identity.
- Avoid creating layouts that feel dense or cluttered; maintain generous negative space and clear section breaks (40px).
- Do not use generic system fonts; always default to Suisse Intl or Suisse Intl Mono for all text elements.

### Layout

The site employs a full-bleed page model, allowing background elements to extend to the edges of the viewport. The hero section is full-bleed with a dark, abstract background and a large, centered headline. Content sections generally use alternating background colors (Canvas / Snow) to define distinct areas, separated by a section gap of 40px. Content within sections tends to be centrally aligned or structured in two-column layouts (text beside image/product feature). There's evidence of card grids for displaying products or user-generated content. The navigation is a sticky top bar, minimal and high-contrast, becoming fully opaque on scroll.

### Imagery

Imagery is a mix of abstract, blurry digital graphics and product-focused photography/screenshots. Abstract graphics often feature teal/green hues on dark backgrounds, using blur effects to create depth and mystery. Product photography is clean and focused, showing items like beanies and t-shirts in simple, outdoor settings or clear product shots with minimal distraction. Product screenshots (e.g., the synth plugin) are UI-focused, showcasing the interface clearly. Icons are primarily outlined or filled monochrome, often in Steel or Snow. The overall role of imagery leans towards atmospheric (abstract graphics) and explanatory/showcasing (product shots). Imagery density is moderate; hero sections are image-heavy, while other sections are text-dominant with smaller supporting visuals.
