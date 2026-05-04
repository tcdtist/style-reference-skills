---
version: alpha
name: Wayfinder
description: Wayfinder presents a dark, immersive canvas for interactive storytelling, drawing the user into an experience where content is paramount. Typography is both functional and expressive, set against a backdrop of deep, muted neutrals. Interactions are subtly highlighted through minimal borders and a deliberate avoidance of strong color, making the interface feel integrated with the narrative rather than superimposed upon it.
colors:
  ebon: "#000000"
  graphite: "#1a1a1a"
  canvas: "#ffffff"
  mercury: "#e3e3e2"
  stone: "#c0bfbe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.75
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.75
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
spacing:
  elementGap: 4px
  sectionGap: 40px
components:
  ghost-button:
    role: Interactive element for navigation and actions
  text-link:
    role: Navigation and informational links
  primary-heading:
    role: Main titles and key feature statements
  subtle-information-text:
    role: Descriptive text under headings or alongside imagery
---

## Overview

**North Star:** Enchanted forest parchment

Wayfinder presents a dark, immersive canvas for interactive storytelling, drawing the user into an experience where content is paramount. Typography is both functional and expressive, set against a backdrop of deep, muted neutrals. Interactions are subtly highlighted through minimal borders and a deliberate avoidance of strong color, making the interface feel integrated with the narrative rather than superimposed upon it.

### Do's

- Prioritize Ebon (#000000) for large background areas to maintain the dark, immersive aesthetic.
- Use Canvas (#ffffff) sparingly for primary headings and highlighted interactive elements to create strong contrast against dark backgrounds.
- Apply Graphite (#1a1a1a) for all functional text and subtle borders to keep the interface understated.
- Reinforce interactivity with 1px borders in Graphite (#1a1a1a) for hover or active states on ghost buttons and links.
- Maintain sharp 0px radius on all interactive elements to preserve visual precision and a lack of overt softness.
- Allow a generous 40px vertical `sectionGap` between distinct content areas for clear separation.
- Employ the Enreal font with its distinct positive letter-spacing for all significant headings to establish brand identity.

### Don'ts

- Avoid introducing saturated colors for UI elements; stick strictly to the achromatic palette.
- Do not use heavy shadows or gradients; elevation should be primarily achieved through contrast or subtle bordering.
- Refrain from using rounded corners; all interface elements should maintain a square or rectangular form.
- Do not vary `letterSpacing` for Enreal; keep it consistently 0.0420em across all sizes.
- Do not use any spacing unit smaller than 4px, and minimize its usage to tight element gaps.
- Avoid filling buttons with solid background colors; interactive elements should appear as ghost buttons or text links.
- Do not rely on color alone to convey interactive states; always supplement with border changes.

### Layout

The page implements a full-bleed layout, where the background imagery extends across the entire viewport. The hero section features a large, centered headline and descriptive text in Canvas (#ffffff), with interactive ghost buttons below. Content sections appear to flow seamlessly without distinct visual dividers, leveraging consistent vertical spacing. The overarching pattern is a centered stack for primary content, with elements visually integrated into the background rather than enclosed in distinct panels. Navigation is minimal, likely a fixed top bar with ghost interactive elements that appear in the header.

### Imagery

The site uses stylized, illustrative imagery featuring a muted, autumnal color palette. The illustrations are organic rather than geometric, with a hand-drawn quality and an emphasis on natural forms like trees, mushrooms, and grassy textures. They serve a decorative and atmospheric role, immersing the user in the 'animated journey' theme. Imagery is dense and covers the full background, creating a continuous visual experience without clear separation from UI elements. Icons are filled with a strong stroke weight, black on white background, and white on black background, indicating a high-contrast binary style.

### Elevation

This design system deliberately avoids shadows entirely. The absence of elevation contributes to a flat, integrated feel, where interface elements exist directly within the visual scene rather than floating above it. Depth is conveyed purely through content layering and subtle background changes, not dimensional effects.
