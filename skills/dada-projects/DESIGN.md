---
version: alpha
name: DADA PROJECTS
description: DADA PROJECTS embodies a sophisticated editorial aesthetic with a stark black-and-white foundation and a playful, organic touch through its imagery. Typography utilizes a mix of elegant display serifs and functional sans-serifs. Surfaces are predominantly white and soft, often taking on exaggerated rounded forms or fluid, abstract shapes. The overall impression is artistic and experimental, balancing classic refinement with contemporary digital art.
colors:
  canvas-white: "#ffffff"
  text-black: "#000000"
  border-fog: "#e5e7eb"
  shadow-ash: "#bfbfbf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.56px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.1
    letterSpacing: -0.544px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.05
    letterSpacing: -0.54px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: -0.648px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 0.95
    letterSpacing: -0.86px
  display:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 0.95
    letterSpacing: -1.1px
spacing:
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 80px
components:
  filled-button:
    role: Standard interactive element for calls to action.
  ghost-button:
    role: Secondary action or navigational link with minimal visual weight.
  circular-button:
    role: Icon-only interaction or small, self-contained action.
  project-card:
    role: Container for showcasing visual project assets.
  hero-project-card:
    role: Prominent display for key project visuals, featuring an extreme radius.
---

## Overview

**North Star:** Gallery Canvas, Sculpted Forms

DADA PROJECTS embodies a sophisticated editorial aesthetic with a stark black-and-white foundation and a playful, organic touch through its imagery. Typography utilizes a mix of elegant display serifs and functional sans-serifs. Surfaces are predominantly white and soft, often taking on exaggerated rounded forms or fluid, abstract shapes. The overall impression is artistic and experimental, balancing classic refinement with contemporary digital art.

### Do's

- Prioritize Diatype for all body text and functional UI elements (14px, 16px, 18px).
- Use Romie exclusively for headlines and artistic displays to establish an editorial and creative tone (24px, 43px).
- Maintain a monochromatic base using Text Black (#000000) for text and Canvas White (#ffffff) for backgrounds.
- Apply Border Fog (#e5e7eb) for ghost button borders and subtle UI separations.
- Employ ultra-round radii (9999px) for all buttons and small interactive elements.
- Use the soft Shadow Ash layer (rgba(0, 0, 0, 0.25) 0px 0px 18px 0px) to give a subtle lift to primary cards and buttons.
- Ensure section vertical spacing is consistently 80px using the sectionGap token.

### Don'ts

- Avoid introducing additional saturated colors; maintain the black, white, and gray palette.
- Do not apply hard, sharp corners; use rounded corners for almost all containers and interactive elements.
- Do not use heavy, opaque shadows; leverage the light, diffused Shadow Ash for depth.
- Do not use generic sans-serifs for headlines; Romie is reserved for distinctive typographic statements.
- Avoid tight element groupings; utilize comfortable spacing with an 8px elementGap and 40px cardPadding.
- Do not use color for primary action indicators, rely on visual weight from borders and text color.
- Never hardcode spacing values; use the established spacing tokens for consistent rhythm.

### Layout

The page structure is full-bleed, allowing visual content to stretch across the viewport without a fixed max-width container, creating an immersive, gallery-like feel. The hero section often features oversized, overlapping typographic elements (Romie) that interact with the background imagery or serve as a dramatic overlay. Sections maintain consistent vertical spacing (80px), transitioning seamlessly rather than using distinct dividers. Content often appears as centered stacks, or large, unique visual compositions that imply a bespoke layout for each section rather than a strict grid.

### Imagery

This design system features abstract, often organic, and highly textural 3D renders combined with fluid graphic elements. Imagery is dense and artistic, frequently cropped into exaggerated rounded shapes (120px and 300px radii) or bleeding off-canvas. The photography present is high-key and product-focused, with a bright, almost ethereal treatment. Icons are minimal, possibly outlined, blending into the UI rather than standing out. Imagery's role is primarily decorative atmosphere and artistic showcase, often taking precedence over text information.
