---
version: alpha
name: Oevra
description: Oevra employs a muted, nature-inspired aesthetic, using a soft, desaturated green as its primary chromatic anchor against predominantly monochromatic backgrounds. The system is characterized by spacious layouts, delicate typography, and a subtle application of surface transparency and soft edge rounding, creating an ethereal yet grounded feel. Typefaces are intentionally varied, pairing a contemporary sans-serif for headings with a more classic system font for utilitarian elements, often with generous letter-spacing for visual airiness. Components are lightweight and favor borders or ghost styles over solid fills, contributing to the overall sense of understated presence.
colors:
  canvas-white: "#ffffff"
  midnight-black: "#000000"
  moss-green: "#778643"
  charcoal-gray: "#4e4e4e"
  whisper-gray: "#c8c8c8"
  smoke-glass: "#ffffff1a"
  pale-mist: "#efefef"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1.1
spacing:
  cardRadius: 15px
  buttonRadius: 22.5px
  elementGap: 15px
  sectionGap: 30px
components:
  ghost-button-white:
    role: Header navigation links and secondary calls to action.
  ghost-button-charcoal:
    role: Muted actions or tertiary navigation.
  primary-action-button:
    role: Key interactions and calls to action.
  transparent-card:
    role: Layered content containers over background sections.
  light-card:
    role: Prominent content containers requiring more visual weight.
---

## Overview

**North Star:** Misty Forest Canvas — a serene, expansive background in soft green hues, grounding light, transparent elements.

Oevra employs a muted, nature-inspired aesthetic, using a soft, desaturated green as its primary chromatic anchor against predominantly monochromatic backgrounds. The system is characterized by spacious layouts, delicate typography, and a subtle application of surface transparency and soft edge rounding, creating an ethereal yet grounded feel. Typefaces are intentionally varied, pairing a contemporary sans-serif for headings with a more classic system font for utilitarian elements, often with generous letter-spacing for visual airiness. Components are lightweight and favor borders or ghost styles over solid fills, contributing to the overall sense of understated presence.

### Do's

- Use Suisse Light for all primary headings (h1-h3) at 400 weight, emphasizing airy elegance.
- Apply a 15px border-radius to all cards and images for a consistent soft-edged aesthetic.
- Maintain generous section gaps of 30px to promote a spacious and uncrowded layout.
- Utilize Moss Green (#778643) sparingly for primary CTA buttons and critical interactive elements only.
- Default to transparent backgrounds and 1px borders for navigation and secondary actions, using Canvas White (#ffffff) or Charcoal Gray (#4e4e4e) for contrast.
- Ensure all body and supporting text uses Suisse Regular at 400 weight for readability and a consistent brand voice.
- Employ Space Mono for all small, utilitarian text elements, labels, and iconography to add a precise, technical detail.

### Don'ts

- Avoid using multiple chromatic colors; restrict accent colors strictly to Moss Green (#778643) for interactive elements.
- Do not use harsh shadows or heavy borders; the design emphasizes lightness and subtle layering.
- Refrain from tight spacing; maintain a spacious feel by adhering to the established element and section gaps (15px and 30px respectively).
- Do not use dark backgrounds for full sections; the theme is predominantly light with transparent overlays atop a gradient background.
- Avoid over-styling text with bold weights or excessive letter-spacing beyond what is defined for headings, maintaining a subtle and restrained typographic hierarchy.
- Do not introduce new border-radius values; adhere to 15px for containers and 22.5px for buttons.
- Do not use solid-fill buttons for secondary or tertiary actions; use ghost buttons with appropriate border and text colors.

### Layout

The page maintains a centered, max-width layout of 1425px, creating structured content areas. The hero section is full-bleed, featuring a large, centered headline over a soft gradient background. Following sections typically alternate between a background gradient and a solid Canvas White, with consistent vertical spacing between major blocks. Content arrangement often employs large, visually distinct headings with smaller descriptive text below, or two-column layouts that balance textual information with implicit visual placeholders. Navigation is a minimal top bar with ghost links, becoming sticky on scroll. The overall density is spacious, with generous padding and margins defining elements.

### Imagery

The visual language relies heavily on subtle background gradients that mimic organic, mist-laden environments, providing a soft, atmospheric backdrop. Product imagery, where present, consists of clean, isolated screenshots of app interfaces, often framed within a device. Icons are minimalist, utilizing thin strokes or simple fills, primarily in achromatic tones. Imagery serves as decorative atmosphere rather than direct content, reinforcing the ethereal and calm brand identity. The density is text-dominant, with a clear focus on typography, and imagery is used sparingly to enhance mood rather than explain features.
