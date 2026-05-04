---
version: alpha
name: HAPE PRIME
description: HAPE's visual system evokes a high-contrast, edgy digital fashion magazine. A dominant, vivid red acts as a powerful brand accent against deep black and pure white, creating high-impact statements. Typography is bold and tightly tracked, featuring extended and condensed forms for a distinctive editorial feel. The overall presentation is dark and atmospheric, using minimal surfaces and relying on strong color pops and sculptural 3D imagery to define its presence.
colors:
  crimson-flux: "#730200"
  deep-space-black: "#000000"
  ghost-white: "#ffffff"
  heat-stroke-radial: "#b70505"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.54
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.54
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.54
spacing:
  buttonRadius: 26px
  elementGap: 6px
  sectionGap: 50px
components:
  ghost-button-white-border:
    role: Primary navigation and interactive elements where minimal visual weight is desired.
  ghost-button-black-border:
    role: Secondary interactive elements, often within hero sections or against lighter backgrounds.
  ghost-button-no-radius:
    role: Text-based actions with a subtle border for emphasis.
  crimson-content-card:
    role: Container for distinct content blocks within the layout, particularly for rich media.
---

## Overview

**North Star:** Neon Red Noir — a digital fashion runway bathed in dramatic light.

HAPE's visual system evokes a high-contrast, edgy digital fashion magazine. A dominant, vivid red acts as a powerful brand accent against deep black and pure white, creating high-impact statements. Typography is bold and tightly tracked, featuring extended and condensed forms for a distinctive editorial feel. The overall presentation is dark and atmospheric, using minimal surfaces and relying on strong color pops and sculptural 3D imagery to define its presence.

### Do's

- Use Deep Space Black (#000000) as the default background for most page sections.
- Apply Crimson Flux (#730200) as a strong accent color for background washes or content cards.
- Prioritize Integral CF for all headlines and impactful display text, with tight letter-spacing.
- Use Neue Plak Extended for detailed body copy, ensuring -0.02em letter spacing for a refined feel.
- Implement 26px border-radius for all interactive buttons and links to give them a distinct pill-like shape.
- Maintain a clear visual hierarchy with Ghost White (#ffffff) text on dark backgrounds and Deep Space Black (#000000) on lighter surfaces.
- Ensure generous horizontal padding of 50px for card components to create breathing room.

### Don'ts

- Avoid using multiple chromatic colors; stick to Crimson Flux as the primary accent.
- Do not use box-shadows or elevation to distinguish elements; rely on color contrast and strong borders.
- Do not use system default font stacks; always specify custom fonts for brand consistency.
- Avoid decorative gradients unless explicitly part of a hero or full-bleed background element.
- Do not introduce soft, rounded shapes except for the 26px radius on buttons and links.
- Do not use generic button styles; always apply the ghost button variants to maintain a minimalist interactive approach.
- Avoid complex layouts or grids; prefer full-bleed imagery and two-column content arrangements.

### Layout

The page adheres to a full-bleed layout, particularly in the hero section, which features a large 3D graphic under a centered headline. Subsequent sections maintain a strong visual rhythm with contrasting full-bleed backgrounds (Crimson Flux or Deep Space Black) and content often arranged in a two-column text-left/image-right or centered stack. Vertical spacing between sections is consistent at around 50px, creating defined content blocks without explicit dividers. The navigation is minimal, consisting of a sticky top bar with subtle ghost links and a burger menu, plus a persistent bottom navigation bar for key actions.

### Imagery

This site predominantly features full-bleed, high-fidelity 3D renders of its primary HAPE character, often in dynamic or editorial poses. These visuals are core to the brand and act as both atmospheric backdrops and product showcases. The visuals are typically dark and moody, with a strong emphasis on red lighting or accents, creating a dramatic and high-fashion aesthetic. Icons appear in an outlined, monochrome style, complementing the minimalist UI. Imagery is high-density, dominating screen real estate over text, and is always fully contained within its section boundaries.
