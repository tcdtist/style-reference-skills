---
version: alpha
name: Kinfolk
description: Kinfolk cultivates an atmosphere of understated elegance and classic publishing. Its design relies on a spacious, monochrome canvas with strong typographic hierarchy, favoring custom serif fonts for headlines and body text to evoke a sense of heritage and literary depth. Interaction is minimal, with ghost-like controls and strong black borders that frame content like traditional print media. The aesthetic emphasizes clean lines and ample negative space, allowing imagery and text to breathe and command attention.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  paper-gray: "#dbded5"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.16
    letterSpacing: -0.25px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.04
    letterSpacing: -0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.19
    letterSpacing: -0.6px
spacing:
  elementGap: 20px
  sectionGap: 25px
components:
  ghost-button:
    role: Minimal interactive elements with a strong border, common for secondary actions.
  outlined-button:
    role: General purpose buttons for secondary actions or links, maintaining a light footprint.
  filled-button:
    role: Primary calls to action, providing high contrast and visual weight.
  content-card:
    role: Displaying articles or features with a focus on imagery and text.
  input-field:
    role: Standard text input fields, visually minimal.
---

## Overview

**North Star:** Literary magazine, minimal frames

Kinfolk cultivates an atmosphere of understated elegance and classic publishing. Its design relies on a spacious, monochrome canvas with strong typographic hierarchy, favoring custom serif fonts for headlines and body text to evoke a sense of heritage and literary depth. Interaction is minimal, with ghost-like controls and strong black borders that frame content like traditional print media. The aesthetic emphasizes clean lines and ample negative space, allowing imagery and text to breathe and command attention.

### Do's

- Always use Kinfolk-Serif-Deck for hero and main section headlines to convey editorial gravitas.
- Maintain generous line heights (e.g., 1.5 for body text) throughout the design to enhance readability and spaciousness.
- Frame crucial interactive elements with a distinct 1px solid Ink Black (#000000) border, especially for ghost or outlined buttons.
- Prioritize Canvas White (#ffffff) backgrounds with Ink Black (#000000) text for all primary content areas.
- Apply 0px border radius as a default for all elements to maintain a sharp, classic aesthetic, except for specific interactive links which can use 2px.
- Use a minimum element gap of 20px (from elementGap token) between distinct content blocks to preserve visual breathing room.
- Ensure all black text on white backgrounds achieves AAA contrast ratio (21.0:1) for optimal accessibility and visual clarity.

### Don'ts

- Avoid using drop shadows or complex gradients; the design relies on flat surfaces and high contrast borders.
- Do not introduce highly saturated colors; stick to the achromatic palette with occasional photographic color accents.
- Never use rounded corners on cards or primary buttons; maintain a strict 0px radius for these elements.
- Minimize visual clutter; every element should have ample negative space around it.
- Do not deviate from the specified font families; their custom nature is central to the brand's identity.
- Avoid dense packing of information; break content into distinct, well-spaced blocks.
- Refrain from using thin, light gray text on white backgrounds; ensure sufficient contrast for all text elements.

### Layout

The page primarily uses a max-width contained model with significant white space, although some hero and content sections break to full-bleed. The hero pattern often involves a large, atmospheric image or a combination with a prominent, centered headline in Kinfolk-Serif-Deck. Sections typically flow vertically with consistent, generous vertical spacing, primarily using either a simple centered stack for text and imagery or a grid of cards. There's a strong visual rhythm established by alternating content blocks horizontally, often a 2-column with text on one side and an image on the other. Navigation is a minimal top bar that includes the brand logo and a discreet burger menu icon.

### Imagery

Imagery on Kinfolk is a central element, frequently occupying large sections. It primarily features high-quality, often editorial or lifestyle photography that ranges from bright and airy to moodier, more contemplative scenes, often with a muted or desaturated color palette. Photography is typically full-bleed or contained within sharp, unrounded frames, presented without overlapping elements. The focus is on product/subject-focused shots or candid, natural compositions. Illustrations, when present, are simple, monochromatic, and used minimally. Icons are outlined, simple, and monochrome, often Ink Black, used functionally rather than decoratively to create a clean UI. Imagery serves a dual role: both as explanatory content and to establish the brand's atmospheric mood and aesthetic.
