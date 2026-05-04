---
version: alpha
name: Regisgrumberg
description: Regisgrumberg embraces a conceptual, dark-mode aesthetic with high contrast and stark white typography as the primary visual element. The design uses very little color, focusing instead on dynamic typographic arrangements and a sense of depth and movement created by shifting text. The overall impression is digital, experimental, and direct, with UI elements acting as functional accents rather than decorative flourishes.
colors:
  deep-space: "#000000"
  star-dust: "#ffffff"
  ghost-gray: "#c4c4c4"
  iron-oxide: "#363636"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 150px
    lineHeight: 1
spacing:
  elementGap: 23px
  sectionGap: 42px
components:
  text-only-button-default:
    role: Minimal interactive element, common for navigation or secondary actions.
  text-only-button-ghost:
    role: Minimal interactive element for navigation or secondary actions on dark backgrounds.
  circular-interactive-button:
    role: Prominent interactive element for primary calls to action, like 'Enter'.
  navigation-link:
    role: Interactive text link within navigation areas.
  hero-headline:
    role: Dominant display text for main page sections.
  body-text:
    role: Standard paragraph text.
  small-text-caption:
    role: Small descriptive text or labels.
---

## Overview

**North Star:** Black canvas, white light

Regisgrumberg embraces a conceptual, dark-mode aesthetic with high contrast and stark white typography as the primary visual element. The design uses very little color, focusing instead on dynamic typographic arrangements and a sense of depth and movement created by shifting text. The overall impression is digital, experimental, and direct, with UI elements acting as functional accents rather than decorative flourishes.

### Do's

- Use Deep Space (#000000) as the predominant background color for all page sections.
- Employ Star Dust (#ffffff) for all primary text, headlines, and interactive elements for maximum contrast.
- Utilize Montserrat for general body copy and subheadings, adjusting weight between 400 and 600 for emphasis.
- Apply Anton font for all impactful headlines, using its large sizes (48px, 90px, 150px) to command attention.
- Maintain a spacious density with element and section gaps centered around 23px and 42px respectively.
- For primary call-to-action buttons, use the Circular Interactive Button style: Star Dust (#ffffff) background with Deep Space (#000000) text and a 100% border radius.
- All interactive elements should have 0px border radius and 0px padding unless a specific component dictates otherwise (e.g., circular button).

### Don'ts

- Avoid introducing additional saturated colors unless explicitly for a semantic state (which are not defined in this system).
- Do not use subtle gradients or complex shadows for elevation; keep surfaces mostly flat and rely on typographic hierarchy and spaciousness.
- Refrain from using Times font for general UI; reserve it for specific decorative or content-driven contexts, if at all.
- Do not use generic square buttons; default to text-only or the prescribed circular button for primary actions.
- Avoid heavy borders or dividers; rely on color contrast and spacing to define UI areas.
- Do not vary letter-spacing; all typography uses normal letter-spacing unless explicitly stated.
- Do not allow text elements to be set with a background color different from the main surface color, maintaining high contrast.

### Layout

The page primarily utilizes a full-bleed dark canvas, with content structured in a max-width of 100px indicated for certain sections, giving a very tight and controlled inner content area or implying highly specific contextual layouts given the overall page width. The hero features a centered, interactive typographic element. Sections appear to flow seamlessly with consistent vertical spacing and no distinct visual dividers. The overall density is spacious, contrasting minimal content against a vast, dark background.

### Imagery

The site uses minimal imagery, focusing almost exclusively on text as its primary visual element. The interactive spiral typography on the hero is the main graphical feature, transforming text into a dynamic visual. If any imagery were to be introduced, it should be highly conceptual, abstract, or purely functional (e.g., product screenshots) to align with the stark, high-contrast, text-dominant aesthetic. There is no evidence of photography, illustrative styles, or icons on the provided page, suggesting a preference for type over traditional imagery.
