---
version: alpha
name: Hungry Tiger
description: Hungry Tiger's design system evokes the rich, warm experience of Indian spices through a dark-mode palette dominated by deep oranges and ochre yellows. Typography is bold and highly condensed, with generous tracking on large headlines, creating a strong, impactful voice. Components are rounded and tactile, integrating seamlessly with textured backgrounds.
colors:
  mahogany-canvas: "#281006"
  burnt-sienna: "#402011"
  spiced-orange: "#823513"
  curry-yellow: "#faae33"
  cinnamon-brown: "#9f531b"
  chili-red: "#d1255c"
  subtle-radial-glow: "#f7ac32"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 101px
    lineHeight: 1
  display-sm:
    fontFamily: "system-ui"
    fontSize: 144px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 213px
    lineHeight: 1
spacing:
  cardRadius: 6px
  buttonRadius: 1296px
  elementGap: 10px
  sectionGap: 173px
components:
  primary-call-to-action-button:
    role: Main interactive element
  ghost-inverse-action-button:
    role: Secondary interactive element
  navigation-button:
    role: Top navigation links
  dark-content-card:
    role: Container for content sections
  light-highlight-card:
    role: Highlighted content container
  pill-input-field:
    role: Data entry fields
  information-badge:
    role: Categorization or status indicator
  vibrant-accent-badge:
    role: Emphasized categorization
---

## Overview

**North Star:** Spiced Amber Glow

Hungry Tiger's design system evokes the rich, warm experience of Indian spices through a dark-mode palette dominated by deep oranges and ochre yellows. Typography is bold and highly condensed, with generous tracking on large headlines, creating a strong, impactful voice. Components are rounded and tactile, integrating seamlessly with textured backgrounds.

### Do's

- Prioritize Curry Yellow (#faae33) for all primary interactive elements, including button backgrounds, link text, and hero headlines, contrasting against dark backgrounds.
- Use Salmond font (custom) at large sizes with negative letter-spacing for headlines to create a bold, condensed, and impactful visual statement.
- Employ consistent, highly rounded border-radii for interactive components: 1296px for buttons, 1080px for badges, and 1224px for inputs, for a soft, tactile feel.
- Establish clear visual hierarchy by using Mahogany Canvas (#281006) as the base background, with Burnt Sienna (#402011) and Spiced Orange (#823513) for progressively lighter surface layers.
- Integrate background patterns and subtle radial gradients to add depth and warmth to surfaces, preventing flat, sterile dark mode aesthetics.
- Maintain comfortable element spacing, using 10px as a default `elementGap`, to keep components distinct but visually connected.
- Ensure all text (except primary buttons) uses Curry Yellow (#faae33) for maximum readability against the dark spectrum of backgrounds.

### Don'ts

- Avoid using pure black or white; all neutrals are warm-tinted browns and deep oranges, contributing to the rich palette.
- Do not use generic sans-serif fonts for headlines; the custom Salmond font's condensed and bold presence is critical to the brand voice.
- Refrain from sharp corners on interactive or prominent UI elements; the design emphasizes pill-shaped and softly rounded forms.
- Avoid sterile, flat backgrounds; always consider a subtle texture, pattern, or radial glow to enhance the spicy and inviting atmosphere.
- Do not introduce cool-toned colors (blues, greens, purples) beyond very specific brand-approved accents; the palette is overwhelmingly warm.
- Do not allow generous line-heights on display typography; the condensed nature of Salmond is critical to its bold presence using specified tight line-heights (e.g., 0.7-0.9).
- Never use less than 1296px border-radius for primary buttons, as this roundedness is a core identity element.

### Layout

The page layout is primarily full-bleed, with content often centered but spanning the full width of the viewport to create an immersive experience. The hero utilizes a full-bleed dark background with large, centered headline typography. Sections alternate between deep Mahogany Canvas and Burnt Sienna, creating a seamless visual flow rather than distinct bands. Content frequently employs a text-left/text-right or text-over-image pattern within the full-width flow, anchored by strong typography, rather than a strict grid of cards or columns. Navigation is a fixed top bar on larger screens with highly rounded ghost buttons, supplemented by a minimal shopping cart icon. The overall density is comfortable, with generous vertical spacing between content blocks.

### Imagery

This site features product photography with tight crops on bottles against a dark, textured background, emphasizing the product itself. Illustrations are subtle, embossed-like organic patterns integrated into the background surfaces, providing a decorative, atmospheric layer rather than explanatory content. Icons are minimal, filled, and utilize the brand's Curry Yellow, maintaining consistency. The density is image-heavy in the hero sections, transitioning to text-dominant blocks with atmospheric background graphics. Product visuals are the hero, presented directly and evocatively.
