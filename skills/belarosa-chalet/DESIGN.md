---
version: alpha
name: BelArosa Chalet
description: BelArosa Chalet evokes a bespoke alpine luxury aesthetic, blending raw natural textures with refined details. A palette of deep, muted teal and warm off-white creates an understated elegance, punctuated by a delicate golden accent. Typography combines the classic formality of ITC Giovanni Std with the modern versatility of Avenir LT Pro, applied at a comfortable density. Components are minimal, often outlined or ghosted, prioritizing content and image presentation over heavy UI elements.
colors:
  chalet-teal: "#193741"
  deep-teal: "#1d414d"
  alpine-gold: "#eac486"
  paper-white: "#ffffff"
  warm-linen: "#ebe7e1"
  muted-stone: "#8c9ba0"
  rich-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
    letterSpacing: 1.5px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 1.5px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: 1.5px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 1.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: 1.25px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: 0px
spacing:
  buttonRadius: 80px
  elementGap: 24px
  sectionGap: 48px
components:
  outlined-button:
    role: Primary action button with a luxury aesthetic
  text-link:
    role: Navigation and secondary calls to action
  circular-card-accent:
    role: Decorative card element for emphasis
  input-field-text:
    role: Form input elements
---

## Overview

**North Star:** Alpine Chalet Refinement: warm, textural, and quietly luxurious.

BelArosa Chalet evokes a bespoke alpine luxury aesthetic, blending raw natural textures with refined details. A palette of deep, muted teal and warm off-white creates an understated elegance, punctuated by a delicate golden accent. Typography combines the classic formality of ITC Giovanni Std with the modern versatility of Avenir LT Pro, applied at a comfortable density. Components are minimal, often outlined or ghosted, prioritizing content and image presentation over heavy UI elements.

### Do's

- Prioritize ITC Giovanni Std 700 for all display and major section headings to maintain a sense of traditional luxury.
- Use Avenir LT Pro 400 for all body text, navigation, and subordinate UI elements, ensuring consistency and readability.
- Apply Chalet Teal (#193741) as the primary accent color for outlines and text, reserving Alpine Gold (#eac486) for subtle highlights only.
- Employ the 80px border-radius for all primary buttons to achieve a soft, pill-shaped aesthetic.
- Maintain comfortable spacing with 24px as a standard `elementGap` between UI elements and `sectionGap` between major content blocks.
- Use Paper White (#ffffff) as the primary page canvas for light sections and Warm Linen (#ebe7e1) for secondary interactive surfaces.
- Establish interactive elements with an outlined or ghost style using Chalet Teal (#193741) or Deep Teal (#1d414d) borders, avoiding solid filled buttons for primary calls to action.

### Don'ts

- Avoid using solid filled buttons for primary calls to action; always prefer the outlined or ghost styles.
- Do not introduce new saturated primary colors; limit the accent palette to Alpine Gold (#eac486).
- Avoid using drop shadows or heavy box-shadows that would detract from the site's flat, natural aesthetic.
- Do not deviate from the specified letter-spacing for Avenir LT Pro; its subtle tracking is part of the brand's typographic signature.
- Do not use hard-edged, 0px border-radius for buttons; always apply the 80px radius for a consistent soft feel.
- Do not assume color #0000ee is a brand color; this is a browser default that must be overridden with brand-approved values.
