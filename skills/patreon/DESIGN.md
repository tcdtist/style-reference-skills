---
version: alpha
name: Patreon
description: Patreon leverages a canvas of real-world photography and a muted palette to ground its brand in authentic creator stories, overlaid with a clean, functional UI. Strong, confident typography paired with rounded components creates a friendly yet authoritative tone. The design prioritizes clear content presentation, with color used sparingly to highlight interactive elements and brand identity, rather than for decorative excess. It balances a feeling of welcoming accessibility with structural clarity.
colors:
  ink: "#000000"
  canvas: "#ffffff"
  iron: "#1a1a1a"
  silver-thread: "#959595"
  sky-blue: "#5fc1f1"
  vivid-pink: "#f15ff1"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -0.52px
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.1
    letterSpacing: -0.78px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.1
    letterSpacing: -0.97px
  display:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 0.98
    letterSpacing: -2.3px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 188px
    lineHeight: 0.87
    letterSpacing: -3.38px
spacing:
  cardRadius: 30px
  buttonRadius: 30px
  elementGap: 7px
  sectionGap: 38px
components:
  primary-filled-button:
    role: Main call-to-action button, conveying confidence and directness.
  ghost-button:
    role: Secondary action or navigational link within a content block, visually recessive.
  mini-circular-button:
    role: Icon-only or small, self-contained actions, often navigational or functional.
  tag-button:
    role: Categorization, filtering, or minor interactive elements.
  feature-card:
    role: Content container for features or testimonials, elevated on the Canvas background.
  search-input:
    role: Allows users to query content without distracting visual weight.
---

## Overview

**North Star:** Authentic creator stories on a clean stage.

Patreon leverages a canvas of real-world photography and a muted palette to ground its brand in authentic creator stories, overlaid with a clean, functional UI. Strong, confident typography paired with rounded components creates a friendly yet authoritative tone. The design prioritizes clear content presentation, with color used sparingly to highlight interactive elements and brand identity, rather than for decorative excess. It balances a feeling of welcoming accessibility with structural clarity.

### Do's

- Use Oracle font family for all text elements, leveraging its custom weights for visual hierarchy.
- Apply Ink (#000000) for primary text and critical interactive button backgrounds.
- Ensure all buttons and cards have a minimum border-radius of 30px to maintain a soft, friendly aesthetic.
- Utilize Canvas (#ffffff) for page backgrounds and primary content surfaces to provide a crisp, clean base.
- Maintain comfortable spacing with a base unit of 4px; use 7px for element-level gaps and 14px for internal card padding.
- Emphasize the Sky Blue (#5fc1f1) accent color for functional indicators and non-critical highlights only.
- Integrate high-quality, authentic photography of creators as key visual elements where appropriate.

### Don'ts

- Avoid using multiple colors for text; primary text should be Ink (#000000) and secondary text Iron (#1a1a1a) or Silver Thread (#959595).
- Do not introduce square or sharp-cornered elements; all interactive and content containers should adhere to the established radii.
- Refrain from using strong shadows or gradients on primary UI elements, favoring flat and clean surfaces.
- Do not use accent colors as background for large sections or text blocks unless explicitly defined as a semantic state.
- Do not clutter layouts with too many disparate elements; prioritize clear hierarchy and ample whitespace.
- Avoid generic stock photography; all imagery should feel genuine and creator-focused.
- Do not use font weights below 300 for body text to maintain readability.

### Layout

The page model is a full-bleed layout, particularly for hero sections, which often feature large, compelling creator photography that extends to the viewport edges. Content is generally organized into digestible blocks with consistent vertical spacing, often alternating between visual styles. Hero sections utilize centered headlines over background imagery or video. Subsequent sections typically employ a responsive grid, with alternating text-left/image-right compositions often observed. Navigation is a flexible top bar that can adapt to light or dark contexts, featuring ghost buttons and a prominent filled action button.

### Imagery

The visual language is dominated by authentic photography of diverse creators, not stock imagery. Photos are typically high-quality and often feature subjects engaged in their craft, establishing a connection with the audience. Images are generally featured full-bleed or contained in soft-edged frames. Iconography is minimalist, often monochrome (Ink or Canvas), using thin strokes. There's a high density of imagery, with photos often acting as primary visual anchors rather than mere decoration or product showcases.
