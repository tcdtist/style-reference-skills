---
version: alpha
name: Rive
description: The design feels like a high-end piece of creative software, a focused digital workshop cloaked in darkness. A pure black #000000 canvas eliminates all distraction, forcing attention onto the content and UI. The technical, wide-set 'Tomorrow' typeface is the defining visual signature, establishing a futuristic, blueprint-like quality for all headings. A single, warm 'Ignition Orange' accent appears only on primary CTAs, acting as a functional guidance point in the monochromatic environment. Elevation is conveyed not by shadows but by subtle shifts in dark gray surfaces, creating depth like nested panels on a piece of precision hardware.
colors:
  ignition-orange: "#ffa41c"
  obsidian: "#000000"
  charcoal: "#111111"
  graphite: "#1d1d1d"
  tarmac: "#262626"
  stark-white: "#ffffff"
  cloud: "#f1f1f1"
  ash: "#aaaaaa"
  dusk-gray: "#999999"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.1
    letterSpacing: 1.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: 0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.19px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -1.32px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  cta-button-group:
    role: 
  rive-editor-feature-card:
    role: 
  category-tag-cards-grid:
    role: 
  primary-cta-button:
    role: The main call to action in a view.
  secondary-cta-button:
    role: Secondary action, like downloads or alternative options.
  tertiary-button:
    role: Small, supplemental actions like 'Learn More' or 'Features'.
  navigation-link:
    role: Header and footer navigation items.
  eyebrow-label:
    role: A small label preceding a major headline.
  category-tag-card:
    role: Interactive tags for filtering or navigation, seen in a grid.
  hero-headline:
    role: The main H1 on the page.
---

## Overview

**North Star:** Precision Night Vision. The interface is a specialized lens, cutting through darkness to focus on technical details with absolute clarity.

The design feels like a high-end piece of creative software, a focused digital workshop cloaked in darkness. A pure black #000000 canvas eliminates all distraction, forcing attention onto the content and UI. The technical, wide-set 'Tomorrow' typeface is the defining visual signature, establishing a futuristic, blueprint-like quality for all headings. A single, warm 'Ignition Orange' accent appears only on primary CTAs, acting as a functional guidance point in the monochromatic environment. Elevation is conveyed not by shadows but by subtle shifts in dark gray surfaces, creating depth like nested panels on a piece of precision hardware.

### Do's

- Use the 'Tomorrow' font for all headings, subheadings, and nav items.
- Reserve 'Ignition Orange' (#ffa41c) exclusively for a single primary CTA per view.
- Build all layouts on a pure 'Obsidian' (#000000) background.
- Differentiate interactive surfaces using the neutral palette progression: #111111, #1d1d1d, #262626.
- Maintain an 8px border-radius on all primary interactive components like buttons and cards.
- Apply specific letter-spacing rules for the 'Tomorrow' font: negative for large sizes, positive for small.
- Use 'Stark White' (#ffffff) for headlines and 'Ash' (#aaaaaa) or 'Dusk Gray' (#999999) for body copy.

### Don'ts

- Don't use drop shadows. Use colored surfaces for elevation.
- Don't introduce any new saturated colors. The palette is strictly monochromatic plus one orange accent.
- Don't use 'Ignition Orange' for text, borders, or non-interactive decorations.
- Don't use pill-shaped or fully-rounded buttons. Stick to the 8px radius.
- Don't use light backgrounds. The entire brand experience is dark.
- Don't use 'Tomorrow' for long paragraphs of body text; use 'Inter'.
- Don't use gradients. The aesthetic is solid color blocks.

### Layout

The layout is full-bleed and centered, creating an immersive, focused environment. The hero section occupies the entire viewport with a large, centered headline stack. Subsequent content is presented in simple, centered text blocks or contained grid-like structures for tags and categories. Vertical rhythm is spacious, allowing each piece of information to stand alone in the expansive dark space.

### Imagery

Imagery is minimal to non-existent, placing full emphasis on the product's UI and capabilities. The visual language is defined by typography and stark color contrasts, not photography or illustration. Dark, empty containers act as placeholders, suggesting potential for embedded animations or product demos, but the core identity remains text- and UI-centric.

### Elevation

Elevation is achieved through layered, near-black surfaces (#111111, #1d1d1d) on a pure black (#000000) base, not box shadows. This creates a subtle, self-contained depth reminiscent of physical hardware panels rather than floating UI cards.
