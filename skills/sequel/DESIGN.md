---
version: alpha
name: Sequel
description: This design system evokes a sense of understated luxury and serious intent, reflecting a 'dark mode meets gallery space' aesthetic. A dramatic pure black background (#000000) provides a stark canvas for crisp white typography (#ffffff) and subtle, almost invisible components. The system primarily relies on meticulous typography with a custom serif for headlines and a custom sans-serif for body text, creating a strong sense of intellectual weight without visual overwhelm. Rounded lozenges (9999px radius) offer the only soft edges, contrasting sharply with the otherwise linear, rigid structure, suggesting pockets of approachable interaction within a rigorous framework.
colors:
  midnight-void: "#000000"
  cloud-whisper: "#ffffff"
  slate-dust: "#f5f5f0"
  steel-gray: "#202020"
  mist-gray: "#c0c0c0"
  charcoal-tone: "#333333"
  ash-accent: "#999999"
  light-ash: "#cccccc"
  cadet-gray: "#b3b3b3"
  badge-overlay: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.3px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.8px
spacing:
  cardRadius: 10px
  buttonRadius: 9999px
  elementGap: 3-28px
  sectionGap: 47-76px
components:
  cta-button-group:
    role: 
  lozenge-badge-collection:
    role: 
  featured-category-cards:
    role: 
  primary-lozenge-button:
    role: Call to Action
  ghost-lozenge-button:
    role: Secondary Action
  circular-play-button:
    role: Media Playback
  standard-card:
    role: Content container
  featured-card:
    role: Prominent content container
  lozenge-badge:
    role: Category/Tag
  subtle-pill-badge:
    role: Secondary Category/Tag
---

## Overview

**North Star:** Black canvas, sharp typography

This design system evokes a sense of understated luxury and serious intent, reflecting a 'dark mode meets gallery space' aesthetic. A dramatic pure black background (#000000) provides a stark canvas for crisp white typography (#ffffff) and subtle, almost invisible components. The system primarily relies on meticulous typography with a custom serif for headlines and a custom sans-serif for body text, creating a strong sense of intellectual weight without visual overwhelm. Rounded lozenges (9999px radius) offer the only soft edges, contrasting sharply with the otherwise linear, rigid structure, suggesting pockets of approachable interaction within a rigorous framework.

### Do's

- Prioritize #000000 for backgrounds and #ffffff for primary text to maintain high contrast and dramatic impact.
- Use Bradford font exclusively for large headings (32px and above) with its distinct weight 500 and negative letter spacing (-0.0500em or -0.0250em).
- Apply 9999px border-radius to all interactive elements like buttons and badges for distinctive pill shapes.
- Utilize rgba(200, 200, 200, 0.1) for subtle, transparent badge backgrounds, ensuring text remains #ffffff.
- Maintain a clear visual hierarchy using VisueltPro's varied weights and sizes for body copy, navigation, and secondary UI elements, without relying on color for differentiation.
- Employ the negative letter-spacing values from the typography specification for precise text rendering at various sizes.
- Use 10px border-radius only for specific featured cards to provide a subtle visual differentiator against the predominant 0px radius.

### Don'ts

- Avoid using highly saturated or chromatic colors; stick to the achromatic palette with #ffffff, #000000, and the various grays.
- Do not introduce sharp corners on buttons or badges; the 9999px radius is a signature visual element.
- Refrain from using Bradford font for body text or small UI elements; its use is reserved for large, impactful headlines.
- Do not add additional box-shadows beyond rgba(0, 0, 0, 0.35) 0px 10px 30px 0px for elevated elements and rgba(0, 0, 0, 0.15) 0px 4px 20px 0px for interactive button states.
- Avoid using multiple border styles or weights; maintain simple, thin borders for ghost elements or an absence of borders.
- Do not use generic system fonts in place of VisueltPro or Bradford; their unique characteristics are integral to the brand.
- Avoid excessive spacing that diminishes the dense, deliberate feel; element gaps should adhere to the provided '3-28px' range.

### Layout

The page primarily uses a full-bleed layout, where content sections stretch across the entire viewport width, particularly for hero areas. Inner content is often held within a maximum width but the containers do not explicitly define a pageMaxWidth. The hero section features centered, large typography against a dark background. Content sections follow a vertical rhythm, alternating between prominent headlines and multi-column layouts, often with text on one side and a large image card on the other. Navigation is a minimalist top bar with a primary action button, fading into the dark background. The layout feels spacious yet structured, emphasizing key statements and imagery.

### Imagery

The visual language is characterized by sophisticated, high-key photography of individuals, often seen in reflective or contemplative states, suggesting success and thought leadership. Images are full-bleed within the card containers, cropped dynamically, and occasionally feature subtle brand badges overlayed at specific corners. There is an absence of product screenshots or abstract graphics, focusing entirely on human subjects as the core visual narrative. The overall impression is one of aspirational portraiture combined with subtle documentary style, reinforcing a focus on people.
