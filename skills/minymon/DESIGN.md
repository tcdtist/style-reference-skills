---
version: alpha
name: Minymon
description: Minymon adopts a playful, inviting aesthetic with soft, rounded forms and a muted pastel color palette that evokes a sense of comfort and approachability. The design emphasizes friendly interaction through subtle elevation and a clear visual hierarchy. Typography is compact and confident, balancing warmth with precise communication. Surfaces are light and airy, creating an open, uncrowded feel.
colors:
  canvas-tan: "#f9f2ea"
  surface-white: "#ffffff"
  text-primary: "#474747"
  text-secondary: "#7b7b7b"
  border-light: "#e3e3e3"
  blue-teal: "#cae5e0"
  minymon-blue: "#154c7e"
  minymon-orange: "#f16849"
  pink-blush: "#ffcdc1"
  button-teal-light: "#dbf0f0"
  teal-hover: "#53c0c0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0.111px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.111px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.31
    letterSpacing: 0.111px
  display:
    fontFamily: "system-ui"
    fontSize: 84px
    lineHeight: 1.31
    letterSpacing: 0.111px
spacing:
  cardRadius: 24px
  buttonRadius: 24px
  elementGap: 16px
  sectionGap: 40px
components:
  primary-action-button:
    role: Outlined button for primary calls to action
  secondary-button:
    role: Filled button for secondary actions or selections
  minimal-button:
    role: Text-only button for tertiary actions or navigation
  elevated-card:
    role: Content card with subtle shadow for emphasis
  flat-card:
    role: Content card for groupings without elevation
  circular-card:
    role: Circular container for icons or small visual elements
  input-field:
    role: Text input area with a bottom border
---

## Overview

**North Star:** Playful pastel storybook

Minymon adopts a playful, inviting aesthetic with soft, rounded forms and a muted pastel color palette that evokes a sense of comfort and approachability. The design emphasizes friendly interaction through subtle elevation and a clear visual hierarchy. Typography is compact and confident, balancing warmth with precise communication. Surfaces are light and airy, creating an open, uncrowded feel.

### Do's

- Prioritize Canvas Tan (#f9f2ea) for page backgrounds and Surface White (#ffffff) for card surfaces to maintain the soft, airy aesthetic.
- Apply a 24px border radius to all primary cards and buttons to reinforce the playful, rounded feel.
- Use DM Sans at different weights for all text elements; reserve Times for highly specific, curated content only.
- Ensure headings use Minymon Blue (#154c7e) for impactful statements, contrasting with the warmer background tones.
- Use Minymon Orange (#f16849) exclusively for outlined primary actions or small, vibrant decorative elements to provide a clear focal point without overwhelming the pastel palette.
- Maintain comfortable spacing with 16px for element gaps and 24px for card padding, ensuring elements breathe.
- Employ the rgba(0, 0, 0, 0.12) 0px 0px 20px 0px shadow for elevated cards to create gentle depth, avoiding harsh or dark shadows.

### Don'ts

- Avoid using Minymon Orange (#f16849) as a solid background fill for buttons; it is reserved for outlined actions due to its vibrancy.
- Do not introduce sharp corners or small radii (<8px) for major components; consistency in rounded shapes is key.
- Do not use dark backgrounds for sections unless specifically for full-bleed illustrative areas; the theme is primarily light.
- Avoid excessive use of heavy borders or dividers; subtle hairline borders using Border Light (#e3e3e3) are preferred.
- Do not deviate from DM Sans for standard UI text; the tight letter-spacing and friendly characters are integral to brand identity.
- Avoid using multiple prominent accent colors; rely mainly on Minymon Blue and Minymon Orange for functional accents.
- Do not use highly saturated photography or complex visual textures; imagery should complement the pastel, light aesthetic.

### Layout

The page primarily uses a max-width contained model, typically centered within the browser, with a roughly 1200px max width for main content. The hero section features a centered headline over a background that alternates between the Canvas Tan and a brand accent, often featuring a large, central illustration. Section rhythm is created through consistent vertical spacing (sectionGap 40px) and a subtle shift in background colors, moving between Canvas Tan and pastel brand accents like Pink Blush. Content is often arranged in centered stacks for headlines and subtext, with some alternating left-text/right-visual sections further down the page. Navigation is a sticky top bar, minimalist with logo, links, and distinct 'Adopt' button.

### Imagery

The imagery on Minymon primarily consists of whimsical, rounded illustrations of 'minymons' – cartoon-like creatures. These are flat, vector-based, and often feature soft color palettes that integrate seamlessly with the brand, making them feel like part of the UI rather than external content. Illustrations are contained within circular or rounded shapes, often interacting with text elements like the wavy dividing line. Icons are simple, outlined, and monochromatic, aligning with the clean and friendly interface. The overall density is balanced, with illustrations serving as visual anchors and decorative atmosphere rather than product showcases or heavy information carriers.
