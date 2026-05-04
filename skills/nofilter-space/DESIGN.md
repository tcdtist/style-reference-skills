---
version: alpha
name: Nofilter.space
description: Nofilter.space employs a stark, almost brutalist typographic aesthetic, resembling a digital broadsheet. Its visual system relies heavily on high-contrast black text on white backgrounds, framed by bold, architectural lines. Content is organized with clear visual boundaries rather than soft hierarchies, using strong borders and ample negative space to define sections and cards. The overall impression is one of raw information delivery, devoid of visual embellishment.
colors:
  canvas-white: "#ffffff"
  headline-black: "#000000"
  ink-gray: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.14
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.17
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.47
  display:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 2.5
spacing:
  elementGap: 10px
  sectionGap: 60px
components:
  navigation-link:
    role: Primary site navigation items.
  basic-content-card:
    role: Container for articles and visual content.
  editorial-header:
    role: Headline for articles and sections.
  meta-info-text:
    role: Author and date information.
  image-card:
    role: Display of visual content.
  nav-checkbox:
    role: Minimalistic checkbox for navigation filters.
---

## Overview

**North Star:** Architectural grid on newsprint.

Nofilter.space employs a stark, almost brutalist typographic aesthetic, resembling a digital broadsheet. Its visual system relies heavily on high-contrast black text on white backgrounds, framed by bold, architectural lines. Content is organized with clear visual boundaries rather than soft hierarchies, using strong borders and ample negative space to define sections and cards. The overall impression is one of raw information delivery, devoid of visual embellishment.

### Do's

- Use Pragmatica 400 for all text elements.
- Maintain a high contrast ratio with black text on white backgrounds; use #000000 for headlines and #333333 for body text.
- Define content areas using 1px solid borders, primarily #333333, with #000000 for primary structural divisions.
- Prioritize explicit spacing values like 10px for element gaps and 60px for section gaps to create distinct content blocks.
- Ensure all interactive elements, like navigation links, respond with a subtle border, such as a 1px solid #333333 bottom border for active or hovered states.
- Utilize 0px border-radius explicitly for all components, enforcing a sharp, architectural edge.
- Present imagery as unstyled rectangles, allowing its content to speak without UI embellishment, often bounded by implied 1px #333333 borders.

### Don'ts

- Avoid using any colors other than Canvas White (#ffffff), Headline Black (#000000), and Ink Gray (#333333).
- Do not apply any border-radius greater than 0px to any elements.
- Refrain from using shadows or gradients; the system relies on flat surfaces and hard lines.
- Do not introduce decorative elements or iconography that deviates from the monochromatic, line-drawn aesthetic.
- Do not vary font weights; stick strictly to Pragmatica 400 for all text.
- Avoid soft padding or margin values that create vague boundaries; use precise, consistent measured spacing like 10px and 20px.
- Do not use subtle background tints for cards or sections; rely on Canvas White as the sole background.
