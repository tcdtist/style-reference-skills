---
version: alpha
name: MekaVerse
description: MekaVerse employs a deep, immersive dark theme, reminiscent of a futuristic console interface against expansive, detailed world maps. The design emphasizes content through large, impactful typography, with subtle interactive elements appearing as focused accents. UI components are lightweight and minimalist, often using transparent or ghost styles to keep the focus on the rich background visuals. A strong sense of digital artistry is conveyed through custom fonts and the deliberate use of high-contrast text against dark, natural environments.
colors:
  void-black: "#000000"
  cloud-white: "#ffffff"
  light-mist: "#b8bab9"
  ghost-gray: "#e2e2e2"
  control-gray: "#444345"
  page-blue: "#2e9ec3"
  page-red: "#bc1010"
  page-pink: "#d69dbb"
  page-light-blue: "#20b0d7"
  page-blue-grey: "#9faac0"
typography:
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.78
spacing:
  cardRadius: 10px
  buttonRadius: 2px
  elementGap: 20px
  sectionGap: 40px
components:
  primary-ghost-button:
    role: Interactive element for key actions, appearing as a transparent rectangular outline.
  text-link-button:
    role: Minimal interactive element, purely text-based without background or visible border.
  dark-filled-button:
    role: Standard button for actions that require slightly more visual emphasis.
  muted-action-button:
    role: Less prominent action button, typically for secondary or tertiary functions.
  navigation-item:
    role: Individual items within the main navigation, with subtle interactive styling.
  outlined-nav-item:
    role: Navigation items that appear as an outline without a fill.
  content-card:
    role: Container for information or features, with slightly rounded corners.
---

## Overview

**North Star:** Deep-space holographic command center.

MekaVerse employs a deep, immersive dark theme, reminiscent of a futuristic console interface against expansive, detailed world maps. The design emphasizes content through large, impactful typography, with subtle interactive elements appearing as focused accents. UI components are lightweight and minimalist, often using transparent or ghost styles to keep the focus on the rich background visuals. A strong sense of digital artistry is conveyed through custom fonts and the deliberate use of high-contrast text against dark, natural environments.

### Do's

- Use Void Black (#000000) as the dominant background for all major sections to maintain a deep, immersive feel.
- Apply Cloud White (#ffffff) for primary text and headings to ensure high contrast and legibility.
- Utilize Roobert font for all headings (26px, 30px, 80px) and large display text to establish a strong visual hierarchy.
- Employ GT America Mono Regular for all body and detailed text (10px, 12px), applying a consistent -0.02em letter-spacing.
- Maintain a clear visual distinction for interactive elements, favoring ghost buttons with Cloud White (#ffffff) borders for primary actions and Control Gray (#444345) for filled secondary actions.
- Use a base unit of 4px for all spacing measurements, translating to element gaps of 20px and section gaps of 40px.
- Apply 2px border radius for interactive elements like buttons and navigation, and 10px or 20px for larger content containers to soften their appearance minimally.

### Don'ts

- Avoid using bright or overly saturated colors as primary backgrounds; the default is a dark, immersive canvas.
- Do not deviate from the specified font families and letter-spacing values, as they are central to the brand's technical and assertive tone.
- Refrain from heavy drop shadows or excessive elevation; the system prefers subtle layering and transparency.
- Do not use generic button styles; stick to the defined ghost, text, and solid dark button variants.
- Avoid large amounts of un-contained white space on dark backgrounds; content should feel integrated into the visual field.
- Do not use more than 2px radius for buttons or nav items; larger radii are reserved for content containers (10px, 20px).
- Do not use more than a single accent color per section; maintain focus and clarity against the dark canvas.

### Layout

The site uses a full-bleed page model, where background imagery stretches across the entire viewport. The hero section is characterized by a full-viewport image with large, centered headlines overlayed. Section rhythm is often seamless, with background imagery transitioning or layering, maintained through consistent vertical spacing of 40px between major content blocks. Content arrangement frequently features centered stacks of headlines, subtext, and ghost buttons. There are instances of alternating text-left/image-right or multi-column card grids for features, all within the immersive background. The overall density is spacious between sections, but content blocks themselves can be information-rich. Navigation is handled by a transparent sticky top bar with minimalist links.

### Imagery

This site features highly detailed, immersive 3D rendered world maps and abstract graphic elements. Imagery primarily serves as a full-bleed atmospheric background or contained within specific content blocks. When photography is used, it often shows product-focused shots of the Mekas themselves. Illustrations are dimensional and highly detailed with a sci-fi/fantasy aesthetic. Icons are minimalist and outlined, typically in white against dark backgrounds, maintaining a clean yet functional appearance. Imagery is dense and dominant, often taking up large portions of the screen to create an immersive experience, with text overlayed directly onto it.
