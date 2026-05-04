---
version: alpha
name: Honk
description: Honk uses a vibrant, high-contrast visual system where bold primary colors make the interface pop. The design relies on a striking blue canvas accented by bright yellow highlights and white text, creating an energetic and direct communication style. Typography is bold and casual, contributing to an approachable, fun atmosphere. Most elements are flat with minimal shadows, emphasizing clarity and quick interaction.
colors:
  sky-canvas: "#008fff"
  sunshine-accent: "#ffe400"
  paper-white: "#ffffff"
  charcoal-text: "#111111"
  deep-space: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.38
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.38
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
  body-lg:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.38
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.38
spacing:
  elementGap: 16px
  sectionGap: 48-64px
components:
  ghost-link-button:
    role: Minimal interactive element for secondary actions, often paired with an icon.
---

## Overview

**North Star:** joyful, high-contrast messaging

Honk uses a vibrant, high-contrast visual system where bold primary colors make the interface pop. The design relies on a striking blue canvas accented by bright yellow highlights and white text, creating an energetic and direct communication style. Typography is bold and casual, contributing to an approachable, fun atmosphere. Most elements are flat with minimal shadows, emphasizing clarity and quick interaction.

### Do's

- Use Sky Canvas (#008fff) as the foundational background for most sections to maintain a high-energy, immersive feel.
- Apply Sunshine Accent (#ffe400) selectively for major headers and highlight elements to create emphasis against the blue background.
- Ensure all primary text on Sky Canvas uses Paper White (#ffffff) for maximum contrast and legibility.
- Utilize Honk Header font (weight 700) at 52px for all top-level page headings, with a letter-spacing of -0.62px to give a strong, bold identity.
- Implement Honk Sans for all body text, using 14px/400 weight for general paragraphs and 16px/500 weight with -0.42px letter-spacing for subheadings or more prominent paragraphs.
- Maintain minimal border radii where observed: 6px for individual links/buttons and 16px for larger 'other' container elements to introduce soft friendly edges.
- Use 16px as a comfortable base for element spacing where default grid gaps are not explicitly defined, providing adequate breathing room.

### Don'ts

- Avoid using multiple chromatic colors beyond Sky Canvas and Sunshine Accent; the system relies on this high-contrast two-tone approach.
- Do not introduce complex shadows or gradients; concentrate on flat, clean design with color providing definition.
- Refrain from using thin light typography for headlines; the system prioritizes bold and impactful messaging.
- Do not place body text directly on Sky Canvas backgrounds in a small size without adequate contrast; if using Charcoal Text (#111111), ensure it's on a Paper White (#ffffff) surface.
- Avoid excessive use of borders; elements should primarily be defined by color blocks or subtle shifts in surface.

### Layout

The page primarily uses a full-bleed layout with no discernible maximum width, allowing the vibrant Sky Canvas to fill the entire viewport. The hero section features a large, off-centered headline and subheading on the left, balanced by a significant product visual (smartphone mockup) on the right. Content is arranged with ample negative space around key elements. Navigation appears to be minimal, indicated by a logo in the top left and a footer with a single link. The overall density feels comfortable due to the generous spacing.

### Imagery

The visual language is characterized by abstract graphic elements and product screenshots. The main image features a stylized smartphone with a brightly colored, in-app messaging interface (Tic-Tac-Toe game). This imagery is contained within clearly defined shapes and uses a vibrant green for the app screen, contrasting with the overall blue background. Conversational bubble shapes with playful icons (heart, flower, hand) are used as decorative elements, often in pastel or bright complementary colors (yellow, light blue). Photography is absent; the focus is on a digitally native, illustrative, and UI-centric aesthetic.
