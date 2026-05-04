---
version: alpha
name: Guglieri
description: Guglieri.com presents itself as a stark, high-contrast digital canvas for showcasing work. Its visual style is predominantly dark, minimal, and typography-driven, with subtle interactive elements. The design prioritizes clear information hierarchy through careful typographic variations and a constrained color palette of intense blacks and whites, accented by strategic use of fine gray lines and text. Components are kept lightweight, focusing on functionality over decoration, creating an immersive, focused browsing experience.
colors:
  absolute-zero: "#000000"
  canvas-white: "#ffffff"
  text-gray: "#454545"
  input-surface: "#111111"
  subtle-surface: "#1c1c1c"
  hairline-gray: "#575757"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.18
  subheading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.64px
  heading:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -2.56px
spacing:
  buttonRadius: 28px
  elementGap: 8px
  sectionGap: 40px
components:
  navigation-link:
    role: Simple text link
  primary-ghost-button:
    role: Actionable button with minimal visual hierarchy
  secondary-filled-button:
    role: Actionable button with subtle fill
  minimal-input-field:
    role: Form input field
  description-card:
    role: Container for secondary information
---

## Overview

**North Star:** Midnight Terminal, Razor Sharp

Guglieri.com presents itself as a stark, high-contrast digital canvas for showcasing work. Its visual style is predominantly dark, minimal, and typography-driven, with subtle interactive elements. The design prioritizes clear information hierarchy through careful typographic variations and a constrained color palette of intense blacks and whites, accented by strategic use of fine gray lines and text. Components are kept lightweight, focusing on functionality over decoration, creating an immersive, focused browsing experience.

### Do's

- Prioritize Absolute Zero (#000000) as the dominant background color to maintain the dark, high-contrast aesthetic.
- Use Canvas White (#ffffff) for all primary headings and body text to ensure sharp readability against dark backgrounds.
- Apply Raveo Variable with its 1000 weight and specified letter spacing for all major headlines to convey strong visual impact.
- Maintain minimal visual hierarchy for buttons, utilizing ghost or subtly filled variants with large border-radii (28px or 40px).
- Employ Text Gray (#454545) or Hairline Gray (#575757) for secondary information, metadata, or subtle dividers to add nuance without compromising contrast.
- Utilize an 8px radius for interactive link elements and navigation items.
- Ensure generous `elementGap` of 8px and `sectionGap` of 40px to create ample breathing room between content blocks.

### Don'ts

- Avoid introducing bright or saturated colors beyond functional accents; the system relies on a monochromatic palette.
- Do not use heavy shadows or multi-layered elevations, as the design philosophy leans towards flat, crisp surfaces.
- Refrain from using lightweight fonts for headings or prominent text; the Raveo Variable 1000 weight is critical for brand recognition.
- Do not deviate from the high-contrast pairing of Canvas White on Absolute Zero for primary content, as it's foundational to the visual identity.
- Avoid complex gradients or patterned backgrounds; keep surfaces clean and solid.
- Do not use generic square buttons or sharply angled corners; button radii should typically be 28px or 40px.
- Do not use Arial outside of input fields; body copy should use Inter Display or a geometric sans-serif substitute.

### Layout

The page operates on a full-bleed model with content centered within implicit vertical divisions, rather than a fixed `pageMaxWidth`. The hero section is full-bleed black with a large, centered Raveo Variable headline and a prominent 3D graphic. Sections are demarcated by consistent vertical spacing, creating distinct information blocks without hard dividers. Content often appears in split layouts with text on one side and a supporting visual element or negative space on the other. A notable pattern is a centered, compact stack for contact information and navigation elements. The overall density is spacious between sections but compact within text blocks. Navigation is a simple, horizontal text menu embedded in the header.

### Imagery

This site uses highly polished 3D rendered graphics of UI elements, specifically computer cursors and app icons, as its primary visual identity. These are tightly cropped, appear against the 'Absolute Zero' background, and utilize subtle reflections and metallic sheens to add depth. Photography is used sparingly, primarily in contextual background shots that are desaturated (grayscale) and serve as atmospheric backdrops rather than focal points. Icons are not emphasized, but when present, they appear as outlined or filled vectors, maintaining UI clarity. The density is text-dominant in informational sections, with hero imagery dominating visual space to showcase core work.
