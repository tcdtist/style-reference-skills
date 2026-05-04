---
version: alpha
name: Hex
description: Hex delivers a sophisticated, data-centric aesthetic, characterized by a clean white canvas that highlights nuanced typography and subtle violet accents. The design balances precise information display with hints of visual depth through soft shadows and varied typefaces. Interactive elements are thoughtfully understated, relying on outlines and muted states rather than bold fills, ensuring the focus remains on the analytical content and user workflow.
colors:
  canvas-white: "#fffcfc"
  obsidian-ink: "#01011b"
  eggplant-gray: "#31263b"
  charcoal-grey: "#14141c"
  cement-gray: "#717a94"
  dusk-violet: "#43394c"
  platinum-mist: "#ecedf2"
  slate-cloud: "#dbd7da"
  minsk-violet: "#473982"
  indigo-punch: "#6f63b7"
  lavender-field: "#9e91d6"
  rose-quartz: "#f5c0c0"
  sunset-fade-gradient: "#cd5973"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
    letterSpacing: -0.14px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
    letterSpacing: -0.7px
  display:
    fontFamily: "system-ui"
    fontSize: 78px
    lineHeight: 1.3
    letterSpacing: -1.872px
spacing:
  cardRadius: 6px
  buttonRadius: 3px
  elementGap: 8px
  sectionGap: 70px
components:
  ghost-button:
    role: Action button
  standard-card:
    role: Information container
  modal-card:
    role: Interactive container
  text-input:
    role: Data entry
  nav-button:
    role: Navigation link
---

## Overview

**North Star:** Analytical Clarity on Canvas: A pristine digital workspace where data takes center stage, framed by muted sophistication and precise typography.

Hex delivers a sophisticated, data-centric aesthetic, characterized by a clean white canvas that highlights nuanced typography and subtle violet accents. The design balances precise information display with hints of visual depth through soft shadows and varied typefaces. Interactive elements are thoughtfully understated, relying on outlines and muted states rather than bold fills, ensuring the focus remains on the analytical content and user workflow.

### Do's

- Prioritize Canvas White (#fffcfc) for all primary backgrounds to maintain a clean, expansive aesthetic.
- Use Obsidian Ink (#01011b) for primary body text and most UI elements, reserving Charcoal Grey (#14141c) for headings.
- Apply Eggplant Gray (#31263b) as the default border color for outlined elements and secondary text.
- Utilize Minsk Violet (#473982) sparingly for accents, interactive states, and to highlight key application functionality.
- Ensure all cards use a 6px border radius and the layered shadow style: rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.09) 0px 103px 103px 0px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px.
- Implement the display typography in PP Editorial New at 78px, weight 200, with -0.0240em letter-spacing for all hero headlines.
- Maintain a compact spacing density, predominantly using 8px for element gaps and 3px for general corner radii (buttons, links).

### Don'ts

- Avoid using bold, filled buttons unless explicitly specified for a primary action, favoring ghost buttons with Eggplant Gray (#31263b) borders.
- Do not introduce strong, saturated colors unless they are part of the defined brand or accent palette, maintaining the subdued aesthetic.
- Refrain from using heavily textured or patterned backgrounds; surfaces should remain clean and uniform.
- Do not deviate from the specified typefaces; the interplay of serif for display and sans-serif for UI is crucial to the brand's typographic identity.
- Avoid excessive use of heavy shadows or opaque overlays, as the system relies on subtle depth and clear separation.
- Do not use letter-spacing values greater than normal for any text, especially body or caption text, as the design uses tight tracking to aid clarity.
- Avoid 9999px radius for anything other than small tags or badges; standard components use radii of 3px, 6px, or 12px.
