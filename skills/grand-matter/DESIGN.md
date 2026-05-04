---
version: alpha
name: Grand Matter
description: Grand Matter features a high-contrast, editorial aesthetic. It pairs bold, classic serif typography for headlines with contemporary sans-serif for body text, creating a distinguished yet approachable feel. The palette is largely monochrome, relying on stark black, white, and off-white neutrals. A vibrant orange and a vivid blue act as precise accent colors, sparingly deployed to highlight interactive elements and navigation, giving a sense of sophisticated playfulness amidst the gravitas. Surfaces are predominantly flat, with minimal elevation, emphasizing content and typography. Layout is spacious, featuring generous vertical rhythm and clear content segmentation.
colors:
  pitch-black: "#000000"
  deep-charcoal: "#0f2226"
  canvas-white: "#ffffff"
  light-mist: "#f8f7f7"
  warm-parchment: "#ede8e0"
  ash-gray: "#020202"
  radiant-orange: "#f25f29"
  electric-blue: "#1573dd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.5px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.67
    letterSpacing: -0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
    letterSpacing: -0.5px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.11
    letterSpacing: -0.67px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.96
    letterSpacing: -0.89px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.33px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.78
    letterSpacing: -1.75px
spacing:
  buttonRadius: 5px
  elementGap: 20px
  sectionGap: 80px
components:
  form-button:
    role: Primary action within forms or specific interactive elements.
  text-input-simple:
    role: Standard input fields for text entry.
  navigation-badge:
    role: Categorization or filter labels in navigation.
  outline-link:
    role: Interactive text links and visual borders for interactive elements.
  accent-navigation-link:
    role: Current or active navigation item.
---

## Overview

**North Star:** Editorial Art House

Grand Matter features a high-contrast, editorial aesthetic. It pairs bold, classic serif typography for headlines with contemporary sans-serif for body text, creating a distinguished yet approachable feel. The palette is largely monochrome, relying on stark black, white, and off-white neutrals. A vibrant orange and a vivid blue act as precise accent colors, sparingly deployed to highlight interactive elements and navigation, giving a sense of sophisticated playfulness amidst the gravitas. Surfaces are predominantly flat, with minimal elevation, emphasizing content and typography. Layout is spacious, featuring generous vertical rhythm and clear content segmentation.

### Do's

- Prioritize big-caslon-fb or adobe-caslon-pro for headings and display text to establish an editorial and authoritative tone.
- Use Pitch Black (#000000) for primary text and Deep Charcoal (#0f2226) for secondary text and borders to maintain high contrast and sophistication.
- Employ Light Mist (#f8f7f7) for section backgrounds and Warm Parchment (#ede8e0) for subtler background variations to create depth across surfaces.
- Utilize Radiant Orange (#f25f29) for key navigation accents and Electric Blue (#1573dd) for interactive link borders, ensuring color is used as functional punctuation.
- Apply 5px border-radius to all interactive input and button components, creating a subtle softness without compromising structure.
- Maintain comfortable spacing with 80px section gaps and 20px element gaps, ensuring visual breathing room across the layout.
- Use Inter at 18px with 1.67 line height for all body text to ensure readability and a clean informational delivery.

### Don'ts

- Avoid applying heavy drop shadows; the system favors flat surfaces and content-driven elevation.
- Do not introduce additional vivid colors beyond Radiant Orange and Electric Blue for UI elements; maintain a restricted accent palette.
- Do not use highly decorative borders or complex background patterns; simple 1px solid borders are preferred.
- Refrain from using large images as primary page backgrounds; instead, use neutral background colors to frame content.
- Do not deviate from the specified negative letter-spacing for display typography; it is crucial to the distinctive feel.
- Avoid overly dense content blocks; prioritize generous white space and clear visual separation between elements.
- Do not use generic system fonts for headlines; always opt for big-caslon-fb, adobe-caslon-pro, or basis-grotesque-black to preserve brand identity.

### Layout

The page uses a contained layout within a comfortable maximum width, leaving generous margins on larger screens. The hero section is full-bleed, using a dramatic visual as its background with centered, large-scale typography. Subsequent sections alternate between stark white and light gray backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column text-left/image-right or centered text stacks, allowing for spacious and unhurried information delivery. A 3-column grid is utilized for showcasing artists, featuring image-dominant cards. Navigation is a minimalist top bar, with a hamburger menu for expanded options and subtle accent color for active states.

### Imagery

Imagery primarily features product shots or artist illustrations. Photography is often high-contrast and mood-driven, using selective color saturation (e.g., magenta tint on a portrait) or stark monochrome treatments to create dramatic impact. Illustrations are varied in style but serve as content; both raw and stylized. Icons are minimal, clean, and often outlined, playing a supportive role to typography. Imagery is typically contained within cards or sections, used for explanation or atmosphere rather than full-bleed decorative elements. Density is moderate, balancing textual information with striking visual examples.
