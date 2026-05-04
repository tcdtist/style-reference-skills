---
version: alpha
name: HARDCLO
description: HARDCLO uses a stark, high-contrast dark mode aesthetic, emphasizing content through pure black backgrounds and clean white typography. The design language is minimal and direct, leveraging large, expressive serif typography for brand identity and a single sans-serif family for all functional text. The intentional lack of color creates a raw, utilitarian feel, where the product imagery is the only source of visual vibrancy. Layouts are spacious and structured, preventing the high contrast from becoming overwhelming.
colors:
  midnight-noir: "#000000"
  polar-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
    letterSpacing: -0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 101px
    lineHeight: 1
spacing:
  elementGap: 12px
  sectionGap: 40px
components:
  navigation-link:
    role: Primary site navigation, sub-navigation items.
  underlined-text-link:
    role: Interactive text anywhere on the canvas.
---

## Overview

**North Star:** monochrome cinematic canvas — stark black and white drama

HARDCLO uses a stark, high-contrast dark mode aesthetic, emphasizing content through pure black backgrounds and clean white typography. The design language is minimal and direct, leveraging large, expressive serif typography for brand identity and a single sans-serif family for all functional text. The intentional lack of color creates a raw, utilitarian feel, where the product imagery is the only source of visual vibrancy. Layouts are spacious and structured, preventing the high contrast from becoming overwhelming.

### Do's

- Prioritize Midnight Noir (#000000) for all significant background areas to maintain the stark, high-contrast dark theme.
- Use Polar White (#ffffff) for all interactive text, primary content, and headlines to ensure maximum readability against the dark background.
- Apply Haas Grot Disp 65 (or Helvetica Neue, Arial as substitute) at 10px with -0.5px letter-spacing for all functional and navigation text.
- Reserve Playfair Display (or serif as substitute) at 101px for large, impactful brand headings and hero statements.
- Maintain a clear visual hierarchy by limiting color primarily to the achromatic scale, allowing imagery to be the only source of vividness.
- Utilize 1px Polar White (#ffffff) solid borders for interactive elements requiring emphasis, such as links or outlined buttons.

### Don'ts

- Avoid introducing additional chromatic colors for UI elements; color should be reserved for product imagery.
- Do not use generic system fonts for branding or display text; stick to Playfair Display for visual impact.
- Do not use subtle variations of gray for backgrounds or text; the system relies on extreme black-and-white contrast.
- Avoid complex gradients or shadows across UI components; surfaces should remain flat and direct.
- Do not break the compact letter spacing of -0.5px for Haas Grot Disp 65 text, as this is integral to its visual character.
- Do not use excessive radii; components should retain a crisp, sharp edge without rounded corners.

### Layout

The page primarily uses a split, full-bleed layout. The left side is a pure black canvas for UI and typography, while the right side is dominated by large, immersive, full-height product or lifestyle photography. Content often stacks vertically within these sections. Navigation is minimal, presented as a compact list. The layout feels spacious, with significant vertical and horizontal gaps, allowing elements to breathe within the high-contrast environment. The overall page avoids a defined max-width, embracing the full viewport.

### Imagery

The site uses photography extensively, often featuring full-bleed, striking product or lifestyle shots. The imagery is central to the visual identity, providing the main source of color and visual interest against the monochrome UI. Photos appear to be minimally treated, maintaining a raw, authentic feel, and are frequently used to fill significant portions of the screen, creating an immersive experience.
