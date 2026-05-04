---
version: alpha
name: HyperAktiv
description: HyperAktiv's design system is minimalist and stark, featuring high-contrast typography and a raw, unadorned aesthetic. Dominant black text on pure white surfaces creates a strong, direct presence, while a lone vibrant blue provides a single, impactful interactive accent. The system avoids elaborate styling, favoring sharp edges and direct expression over soft shadows or rounded forms, giving it an almost industrial, no-nonsense feel.
colors:
  canvas-white: "#ffffff"
  text-black: "#000000"
  muted-gray: "#cccccc"
  dark-text-gray: "#333333"
  action-blue: "#0000ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.89
spacing:
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 30px
components:
  primary-filled-button:
    role: Main call-to-action button, direct and prominent.
  outline-button:
    role: Secondary action or informational button.
  pill-button:
    role: Small, distinct interactive element for specific actions or navigation.
  input-field:
    role: Standard form input for collecting user data.
  feature-card-text-only:
    role: Divisive content section for features or conceptual blocks.
---

## Overview

**North Star:** High-contrast stark blueprint

HyperAktiv's design system is minimalist and stark, featuring high-contrast typography and a raw, unadorned aesthetic. Dominant black text on pure white surfaces creates a strong, direct presence, while a lone vibrant blue provides a single, impactful interactive accent. The system avoids elaborate styling, favoring sharp edges and direct expression over soft shadows or rounded forms, giving it an almost industrial, no-nonsense feel.

### Do's

- Prioritize Text Black (#000000) for all main headings and body copy to maintain high contrast and directness.
- Use Canvas White (#ffffff) as the default background for sections and components, creating a stark, clean canvas.
- Reserve Action Blue (#0000ff) strictly for primary call-to-action buttons and prominent interactive elements.
- Maintain a rigid sans-serif typography hierarchy, using Studiofeixensans for headlines and DM Sans for body text.
- Apply 0px border-radius to most UI components for a sharp, unyielding aesthetic, except for specific pill-shaped buttons at 20px.
- Ensure input fields use Muted Gray (#cccccc) for borders against Canvas White (#ffffff) backgrounds.
- Utilize white space generously, with a base element gap of 10px and section gaps of 30px to create distinct content blocks.

### Don'ts

- Avoid soft gradients or shadows; the visual system is flat and direct, with elevation primarily conveyed through contrast and spatial separation.
- Do not introduce additional chromatic colors; the palette is intentionally limited to black, white, and a single accent blue.
- Refrain from using rounded corners on cards or typical buttons; sharp edges are a core identifier of the system's visual language.
- Do not use subtle variations of grays for text; stick to Text Black (#000000) for prominence and Dark Text Gray (#333333) only for input text.
- Do not apply padding or borders to feature cards; their visual distinction comes from their content and surrounding layout.
- Avoid decorative imagery that deviates from product photos; the system emphasizes functionality and direct information.
- Do not use light font weights for headlines; bold contrast is key to the brand's assertive vocal tone.

### Layout

The page uses a contained layout with no explicit page maximum width, allowing content to stretch. The hero prominently features a full-width background image with bold, centered, high-contrast typography. Sections exhibit a modular rhythm, often alternating between centered text blocks and multi-column arrangements (e.g., text-left/image-right). Vertical spacing is consistent, creating clear separation between content blocks. Navigation is typically a simple top bar, with a persistent floating circular 'feedback' button at the bottom right. Cards are text-only, relying on their stark content and surrounding whitespace for definition.

### Imagery

Imagery primarily consists of high-quality, often architectural or interior product photography, presented without complex treatments like masking or layering. There are no illustrations or abstract graphics. Photography serves to showcase physical spaces and events, typically contained within their content sections. Icons are minimal, outlined, and monochromatic, used sparingly for functional markers. The density is moderate, with images serving as content anchors rather than decorative elements.

### Elevation

The design intentionally avoids shadows and traditional elevation techniques. Instead, it relies on stark color contrast, direct borders, and spatial separation to create visual hierarchy and define distinct interface elements. Components are either flat against the canvas or solidly colored to assert their presence.
