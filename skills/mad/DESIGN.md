---
version: alpha
name: MAD
description: MAD's visual identity is a study in muted intensity, emphasizing a monochromatic, pixel-precise aesthetic. Typography, in custom fonts, defines hierarchy with varied weights and micro-adjusted letter-spacing, providing a crisp, technical yet artistic feel. Interaction elements are ghost-like, relying on subtle borders and color shifts rather than filled states. The overall impression is one of meticulous craft and understated digital elegance.
colors:
  stormy-ash: "#111313"
  cloud-canvas: "#d4d8d8"
  muted-steel: "#4b5353"
  deep-space: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: -0.216px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.1
    letterSpacing: -0.322px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1
    letterSpacing: -0.486px
spacing:
  elementGap: 4px
  sectionGap: 72px
components:
  navigation-link-active:
    role: Interactive text link, primarily for navigation.
  navigation-link-default:
    role: Interactive text link, primarily for navigation.
  ghost-button:
    role: Clickable action with minimal visual footprint.
  information-card:
    role: Display descriptive content with a distinct visual boundary.
---

## Overview

**North Star:** Pixel-perfect Monochrome Precision

MAD's visual identity is a study in muted intensity, emphasizing a monochromatic, pixel-precise aesthetic. Typography, in custom fonts, defines hierarchy with varied weights and micro-adjusted letter-spacing, providing a crisp, technical yet artistic feel. Interaction elements are ghost-like, relying on subtle borders and color shifts rather than filled states. The overall impression is one of meticulous craft and understated digital elegance.

### Do's

- Prioritize Stormy Ash (#111313) for primary text and interactive elements against Cloud Canvas (#d4d8d8) for maximal contrast and digital sharpness.
- Use ABCWalterNeue for all primary brand communication, varying its weights (500, 560, 740) to establish visual hierarchy without introducing new typefaces.
- Apply specific negative letter-spacing values (-0.0270em, -0.0230em, -0.0180em) to maintain the precise, tight typographic aesthetic.
- Maintain a compact density with element gaps typically at 4px and section gaps at 72px to create clear visual separation.
- Implement interactive states using subtle borders in Stormy Ash (#111313) or color shifts to Muted Steel (#4b5353), avoiding solid background fills for general buttons.
- Use radius 0px for all button-like components to maintain a stark, precise aesthetic, except where 4px is explicitly specified for internal navigation elements or 8px for specific 'other' components.

### Don'ts

- Avoid using saturated accent colors; the palette is strictly monochromatic with Stormy Ash, Cloud Canvas, and Muted Steel.
- Do not introduce new fonts; the system relies exclusively on ABCWalterNeue and InputMono.
- Do not use generic padding or margins; adhere to the defined 2px, 4px, 6px, and 72px units for consistent rhythm.
- Do not apply soft shadows, gradients, or rounded corners beyond the specified radii of 0px, 4px, and 8px, as this contradicts the crisp, pixel-perfect feel.
- Avoid large imagery or decorative elements that disrupt the text-dominant, monochromatic, and structured layout.
- Do not use block-style buttons with solid backgrounds for primary actions; prefer ghost buttons with borders or text-based links.
- Never use line heights other than 1.0 or 1.1; they are reserved for specific typographic use cases.

### Layout

The page primarily uses a full-bleed layout for the main content area, with a strong implied central axis for navigation elements. The hero section is characterized by centered textual content and prominent pixel-art icons. Sections are visually distinct through consistent vertical spacing (72px section gap) rather than alternating background bands. Content arrangement is typically centered or implicitly aligned, fostering a sense of balance. Navigation is provided via a minimalist top bar with pixel-icon links.

### Imagery

The site uses minimal imagery, focusing on pixel-art style custom icons and a stylized, noisy signature graphic. If photography or richer graphics were introduced, they would need to align with a stark, high-contrast, possibly monochromatic or duotone treatment to maintain the system's austere, digital craft aesthetic. Icons are filled, pixel-based, and black (#000000) or Stormy Ash (#111313) on a light background. Imagery serves a decorative, conceptual role rather than illustrative or product showcase, emphasizing minimalism.
