---
version: alpha
name: Join Parker
description: Parker's visual system evokes a smart, modern financial platform with a distinct material quality. Cool grays and crisp whites form a quiet canvas that allows a vibrant blue and a warm orange to highlight key interactive elements and brand accents. Typography is compact and precise, maintaining readability while maximizing information density. Softly rounded cards and buttons provide a friendly tactile feel, contrasting with the directness of the color palette.
colors:
  off-black: "#1b1d20"
  pure-white: "#ffffff"
  medium-gray: "#6e6e6e"
  ash-gray: "#f2f1ec"
  border-gray: "#e1dfd8"
  input-border: "#a3a3a3"
  parker-blue: "#5196fe"
  parker-orange: "#f9754e"
  alert-blue: "#f4ebff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.008px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.42
    letterSpacing: -0.023px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: -0.03px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.16
    letterSpacing: -0.06px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 1.16
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.05
    letterSpacing: -0.08px
spacing:
  cardRadius: 24px
  buttonRadius: 1584px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-action-button-orange:
    role: Call to action
  outlined-action-button-blue:
    role: Secondary action or link
  neutral-ghost-button:
    role: Tertiary action or navigation
  feature-card:
    role: Content container
  input-field:
    role: User input
  branded-pill-badge:
    role: Categorization or status
---

## Overview

**North Star:** Matte bluescreen material

Parker's visual system evokes a smart, modern financial platform with a distinct material quality. Cool grays and crisp whites form a quiet canvas that allows a vibrant blue and a warm orange to highlight key interactive elements and brand accents. Typography is compact and precise, maintaining readability while maximizing information density. Softly rounded cards and buttons provide a friendly tactile feel, contrasting with the directness of the color palette.

### Do's

- Always use the Parker Orange (#f9754e) for primary call-to-action button fills to maintain brand recognition and visual hierarchy.
- Apply 24px border-radius to all content cards and major section containers to maintain the friendly, soft aesthetic.
- Utilize Inter for all body text, UI labels, and most headings, adjusting weight to 400 for body and 600/700 for distinct headings.
- Ensure a horizontal padding of 24px and vertical of 8px for all buttons to achieve the consistent pill shape.
- Use Parker Blue (#5196fe) for all interactive links and secondary action outlines, ensuring clear visual distinction from primary actions.
- Maintain maximum content width at 1200px, centered on the page, with consistent 64px vertical section gaps.
- Use Gambetta for high-impact headlines (e.g., above 48px) with its defined tighter letter spacing (e.g., -0.08em at 64px) for a focused, bold statement.

### Don'ts

- Do not use multiple accent colors for CTA buttons; restrict chromatic fills to Parker Orange and outlines to Parker Blue.
- Avoid sharp corners; all major UI elements like cards and buttons must adhere to the specified border-radii of 24px or 1584px.
- Do not introduce new typefaces; rely solely on Inter and Gambetta to preserve typographic rhythm and brand voice.
- Do not use generic gray backgrounds for prominent cards; use Pure White (#ffffff) or Ash Gray (#f2f1ec).
- Avoid heavy drop shadows; elevation should be subtle, defined by a single rgba(0,0,0,0.1) 0px 2px 10px 0px shadow for cards, or none at all.
- Do not vary line-height arbitrarily; stick to the defined ratios of 1.05 and 1.16 for display text and 1.42-1.55 for body text.
- Do not use less than 8px element gap for components unless explicitly defined in a specific component recipe.
