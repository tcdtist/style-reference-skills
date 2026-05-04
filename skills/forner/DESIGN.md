---
version: alpha
name: Forner
description: Forner presents a refined, almost austere aesthetic, balancing a limited palette of warm, earthy neutrals with expansive whitespace. Typography takes center stage, featuring distinct display and accent typefaces that exude a quiet confidence. The overall impression is one of intentionality and understated luxury, where visual silence amplifies the impact of carefully chosen elements.
colors:
  carbon-ink: "#484036"
  canvas-white: "#ecece4"
  stone-gray: "#cacab0"
  warm-mist: "#d5d5c4"
  pale-linen: "#f2e9cf"
  ash-gray: "#666e72"
  deep-charcoal: "#212529"
  rich-wood: "#33302c"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
    letterSpacing: 0.34px
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.35
    letterSpacing: -0.88px
  subheading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.1
    letterSpacing: 0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.03
    letterSpacing: -2.25px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -2.24px
  display:
    fontFamily: "system-ui"
    fontSize: 112px
    lineHeight: 0.98
    letterSpacing: -4.48px
spacing:
  elementGap: 14px
  sectionGap: 86px
components:
  ghost-navigation-button:
    role: Menu navigation icon/button
---

## Overview

**North Star:** Earthy, typographic canvas

Forner presents a refined, almost austere aesthetic, balancing a limited palette of warm, earthy neutrals with expansive whitespace. Typography takes center stage, featuring distinct display and accent typefaces that exude a quiet confidence. The overall impression is one of intentionality and understated luxury, where visual silence amplifies the impact of carefully chosen elements.

### Do's

- Prioritize 'Canvas White' (#ecece4) for primary backgrounds to maintain expansiveness, contrasting with 'Carbon Ink' (#484036) for text.
- Use 'Surt' for large, impactful headlines at sizes like 56px and 112px, setting `letter-spacing` to -0.0400em for a tight, elegant feel.
- Apply the `letter-spacing` values specified in the typography section precisely, especially the negative values for display type, to convey the signature typographic character.
- Employ 'BigDailyShort' at 37px or 45px with an italic style for decorative subheadings or impactful quotes, ensuring -0.0500em letter-spacing for distinction.
- Implement a minimal border radius of 4px for elements requiring subtle definition, such as cards or outlined interactive components.
- Maintain generous vertical spacing using 86px for section gaps, creating visual pauses between content blocks.
- Use 'Stone Gray' (#cacab0) for subtle borders on interactive elements, avoiding strong outlines to keep the aesthetic lightweight.

### Don'ts

- Avoid using highly saturated or vibrant chromatic colors; the system relies on a restrained neutral palette with subtle shifts in tone.
- Do not use heavy box shadows or strong elevation effects; the design language favors flat surfaces and minimal depth.
- Refrain from dense, information-packed layouts; instead, embrace ample whitespace and a generous `elementGap` of 14px to promote readability.
- Do not deviate from the specified `letter-spacing` values; they are crucial for the distinct typographic voice of the brand.
- Avoid large, filled primary action buttons; interactive elements lean towards ghost buttons or subtle text links with implicit affordance.
- Do not introduce decorative gradients or complex overlays; the system prefers clean, solid color applications.
- Omit using generic system fonts; `Surt`, `ClashDisplay`, and `BigDailyShort` define the brand's unique typographic identity.
