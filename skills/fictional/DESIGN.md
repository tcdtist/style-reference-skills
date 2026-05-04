---
version: alpha
name: Fictional
description: The Fictional design system embodies a playful and energetic aesthetic, reminiscent of a vibrant children's book. It leverages a lively palette of saturated brand colors against a warm, neutral background. Typography is central to the visual identity, using a custom font that radiates personality. Components feature rounded, often irregular shapes, minimal shadows, and bold color accents, creating an approachable and whimsical user experience.
colors:
  canvas-almond: "#ffe9ce"
  paper-white: "#ffffff"
  type-black: "#000000"
  grape-punch: "#8a53ff"
  bubblegum-red: "#fd4b38"
  sunshine-yellow: "#ffd80c"
  leafy-green: "#3ccb09"
  deep-indigo: "#0500a3"
  ash-gray: "#666666"
  light-gray: "#dddddd"
  input-gray: "#101010"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 346px
    lineHeight: 0.9
spacing:
  cardRadius: 15px
  buttonRadius: 5px
  elementGap: 12px
  sectionGap: 30px
components:
  ghost-button:
    role: Interactive elements with minimal visual footprint, relying on text and soft borders.
  speech-bubble-card:
    role: Informative elements or callouts, designed with a hand-drawn, cartoonish feel.
  colorful-round-card:
    role: Highlighting key features or interactive elements, often with vivid colors.
  accent-filled-button:
    role: Secondary action buttons or tags, visually distinct from ghost buttons.
  interactive-input:
    role: Basic text input field allowing user data entry.
  quirky-card:
    role: Containers for content, using a variety of vibrant brand colors with a consistent rounded edge.
  callout-label-red:
    role: Small, urgent, or promotional tags, drawing immediate attention.
---

## Overview

**North Star:** Whimsical Sticker Bomb

The Fictional design system embodies a playful and energetic aesthetic, reminiscent of a vibrant children's book. It leverages a lively palette of saturated brand colors against a warm, neutral background. Typography is central to the visual identity, using a custom font that radiates personality. Components feature rounded, often irregular shapes, minimal shadows, and bold color accents, creating an approachable and whimsical user experience.

### Do's

- Always use the Fictional typeface for all text elements to maintain brand personality.
- Utilize Canvas Almond (#ffe9ce) as the primary page background color for a warm, inviting foundation.
- Apply a 15px border-radius for general cards and rectangular accent elements, reserving 5px for smaller buttons and 144px for speech bubble shapes.
- Employ Type Black (#000000) for all primary text content to ensure high contrast against light backgrounds.
- Incorporate vibrant accent colors like Grape Punch (#8a53ff), Sunshine Yellow (#ffd80c), and Bubblegum Red (#fd4b38) for card backgrounds and highlight elements to create visual energy and playfulness.
- Space elements using multiples of the 6px base unit, with a preference for `elementGap` of 12px for tight clusters and `cardPadding` of 29px for content blocks.
- Use ghost buttons with Paper White text and borders for navigation and secondary actions to maintain a light, non-obtrusive interface.

### Don'ts

- Avoid using traditional box-shadows; instead, rely on vibrant background colors and irregular shapes for element definition.
- Do not introduce additional font families; the Fictional typeface is the sole typographic voice of the brand.
- Refrain from using heavily structured grid layouts; allow elements to be positioned more organically, like 'sticker bombing'.
- Do not use dark, desaturated colors as primary background elements; the system thrives on a light, warm canvas with vivid accents.
- Avoid strictly symmetrical or rigid component designs; embrace rounded corners and slightly irregular forms.
- Never use generic blue for primary interactive elements; leverage the brand's vibrant palette, especially Grape Punch, Leafy Green, or Bubblegum Red.
- Do not apply padding to ghost buttons; they should appear as text-only interactive elements framed by their borders.

### Layout

The page layout is full-bleed, extending content to the edges, creating an expansive feel. The hero section is characterized by a central, oversized headline on the Canvas Almond background, surrounded by 'sticker-bombed' accent cards and speech bubbles. Sections then alternate between full-width colored blocks and more contained multi-column arrangements. Vertical spacing is generous, leveraging sectionGap of 30px, giving visual elements ample breathing room, contributing to a spacious, non-dense feel. Navigation appears as simple ghost buttons, often minimal and contextual.

### Imagery

The site primarily uses iconography and stylistic text as its visual language, rather than traditional imagery. Icons are filled, mono-color, and often appear within circular or starburst shapes. Text itself is treated as a major visual element, with large, expressive characters. Illustrations include speech bubbles and starbursts, filled with solid brand colors, conveying a playful, sticker-like aesthetic. There are no photographs or complex 3D renders; all visuals are graphic and flat, serving to amplify the typeface's friendly and quirky character. Imagery is used decoratively, enhancing the overall cheerful and cartoonish atmosphere.
