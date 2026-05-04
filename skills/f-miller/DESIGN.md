---
version: alpha
name: F. MILLER
description: F. MILLER presents a serene, natural aesthetic through a desaturated, almost monochromatic palette of warm grays and muted greens, evoking an apothecary-like simplicity. Typography is understated and functional, with subtle letter spacing adjustments for a precise, unadorned feel. Components are minimal, often borderless or with hairline borders, and elevation is primarily achieved through subtle shifts in background color rather than shadows, creating a lightweight and tactile surface design.
colors:
  canvas-parchment: "#fdfbf6"
  cream-surface: "#f8f1e1"
  sage-shadow: "#464c3a"
  moss-accent: "#3f4536"
  text-black: "#000000"
  muted-placeholder: "#b7b7b7"
  subtle-charcoal: "#373f47"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 2
  body:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
spacing:
  cardRadius: 0px
  buttonRadius: 2px
  elementGap: 20px
  sectionGap: 144px
components:
  text-link-button:
    role: Navigation and subtle actions
  ghost-circular-button:
    role: Icon-only actions like close buttons
  primary-filled-button:
    role: Main calls to action
  outline-submit-button:
    role: Secondary form submission
  simple-card:
    role: Product listings, content containers
  standard-text-input:
    role: Form text entry fields
  newsletter-input-with-background:
    role: Specific inputs requiring visual distinction
---

## Overview

**North Star:** Apothecary's botanical canvas

F. MILLER presents a serene, natural aesthetic through a desaturated, almost monochromatic palette of warm grays and muted greens, evoking an apothecary-like simplicity. Typography is understated and functional, with subtle letter spacing adjustments for a precise, unadorned feel. Components are minimal, often borderless or with hairline borders, and elevation is primarily achieved through subtle shifts in background color rather than shadows, creating a lightweight and tactile surface design.

### Do's

- Use Canvas Parchment (#fdfbf6) as the default background for all page sections unless an elevated surface is explicitly requested.
- Apply Sage Shadow (#464c3a) for all primary body text and main interaction elements to maintain the brand's muted tone.
- Ensure all interactive elements, including buttons and links, use the basic-commercial font at weight 400 with specific letter-spacing adjustments.
- Employ a 0px border-radius for most containers and cards, maintaining a sharp, clean edge, with the occasional 2px radius for small elements like buttons.
- Prioritize background color changes and subtle border lines over drop shadows for creating visual hierarchy between elements.
- Maintain minimal padding (0-10px) around interactive elements to contribute to a compact and efficient UI density.
- Use AkzidenzGrotesk only for primary headings, ensuring a slightly airy feel with appropriate positive letter-spacing.

### Don'ts

- Avoid generic large drop shadows; elevation should primarily be achieved through background color shifts or hairline borders.
- Do not introduce highly saturated or vivid colors outside of the established Sage Shadow and Moss Accent tones.
- Do not vary font weights for basic-commercial; always use weight 400 for consistency.
- Avoid heavy borders or solid backgrounds on cards; they should maintain a lightweight appearance, often blending with the page background.
- Do not deviate from the specified letter-spacing values, as they are crucial to the typographic personality.
- Do not use generic system fonts; stick to basic-commercial and AkzidenzGrotesk for all text.
- Do not use high-contrast white text on Sage Shadow or Moss Accent backgrounds, use Text Black for increased legibility and subtlety.

### Layout

The page primarily uses a full-bleed layout, with content often bleeding to the edges. The hero section often features large product photography. Content sections typically alternate between centered stacks and split text+visual arrangements, frequently with the main content aligned to the left. The site uses a responsive grid for product listings, but specific column counts are not consistently defined outside of product feeds. Vertical rhythm is established through consistent section-level spacing rather than strong visual dividers. Navigation is a minimal top bar, which may or may not be sticky, offering subtle interactive elements.

### Imagery

Imagery primarily features tight product crops on pure white or softly blurred backgrounds, emphasizing product details without distracting lifestyle contexts. The treatment is clean and isolated, with no overlapping elements or complex masks. Icons, if present, are minimal (e.g., arrows, close 'x' marks), thin-stroked, and mono-color, typically in Sage Shadow (#464c3a). The overall density is balanced, allowing product visuals to breathe while text provides context, maintaining a focus on the product itself.
