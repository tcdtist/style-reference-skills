---
version: alpha
name: Promly
description: Promly uses a dark, immersive canvas with vibrant violet and blue accents that cut through the deep background like neon. Typography is direct and purposeful, maintaining legibility against the dark, gradient-infused surfaces. Components feature soft, rounded corners and subtle elevation, contributing to an approachable yet impactful aesthetic driven by energetic gradients and photography.
colors:
  canvas-deep: "#000000"
  midnight-indigo: "#040723"
  ghost-shadow-indigo: "#140f33"
  primary-blue-neon: "#3898ec"
  accent-violet-neon: "#755eff"
  highlight-violet: "#aa57ff"
  content-white: "#ffffff"
  muted-gray: "#808080"
  secondary-text-gray: "#999999"
  input-text-dark: "#333333"
  input-border-gray: "#cccccc"
  outlined-button-dark: "#222222"
  gradient-hero-violet-to-black: "#a755fb"
  gradient-card-violet-to-white: "#9e58fe"
  success-green: "#0be014"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.252px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.39
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.17
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.11
    letterSpacing: -1.085px
  display:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.07
    letterSpacing: -2.115px
spacing:
  cardRadius: 25px
  buttonRadius: 12px
  elementGap: 20px
  sectionGap: 88px
components:
  primary-filled-button:
    role: Main call to action.
  ghost-navigation-button:
    role: Navigation links or secondary actions that sit directly on the dark canvas.
  violet-outline-button:
    role: Accentuating secondary actions on dark backgrounds.
  highlight-outline-button:
    role: Tertiary interactive elements, often within cards.
  floating-card:
    role: Container for content sections, featuring subtle elevation.
  standard-input-field:
    role: User input for form elements.
---

## Overview

**North Star:** Midnight gradient with neon accents.

Promly uses a dark, immersive canvas with vibrant violet and blue accents that cut through the deep background like neon. Typography is direct and purposeful, maintaining legibility against the dark, gradient-infused surfaces. Components feature soft, rounded corners and subtle elevation, contributing to an approachable yet impactful aesthetic driven by energetic gradients and photography.

### Do's

- Always use Canvas Deep (#000000) as the primary page background.
- Apply 25px border-radius to card elements and 12px to buttons and inputs.
- Headlines should use Avenir with negative letter-spacing for sizes above 35px to maintain a refined appearance.
- Accentuate key calls to action with Primary Blue Neon (#3898ec) for filled buttons.
- Utilize the Midnight Indigo (#040723) background for elevated content cards, distinct from the main canvas.
- Maintain a clear visual hierarchy by using Content White (#ffffff) for primary text and Muted Gray (#808080) for secondary details.
- Ensure consistent Comfortable density spacing, with 20px as a common element gap and a section gap of 88px.

### Don'ts

- Avoid using bright, un-branded colors for large background areas; maintain the dark theme.
- Do not use generic square corners for cards or buttons; adhere to the specified radii of 25px and 12px.
- Refrain from using thin weights for body text without sufficient contrast; use Avenir 400 for general readability.
- Do not introduce additional shadow styles beyond the provided card elevation.
- Avoid deviating from the established letter-spacing values, especially for larger text, to preserve typographic character.
- Do not use a solid background color for hero sections; leverage the Gradient Hero Violet to Black.
- Do not use more than one distinct color for button fills; confine fills to Primary Blue Neon unless for semantic states.

### Layout

The page uses a maximum content width of 1196px, centered on the screen, creating a structured and comfortable reading experience. The hero section is full-bleed, blending a linear gradient from violet to black with a large, inviting headline and a collage of rounded-corner participant photos that visually 'pop' off the dark background. Subsequent sections alternate between full-width blocks and contained content. Text+image sections frequently use a side-by-side layout. Vertical spacing between sections is relatively generous, with an 88px section gap contributing to a comfortable density. Navigation is a sticky top bar, accommodating essential links and a 'Donate' button, ensuring actions are always accessible.

### Imagery

This site predominantly features photography and product screenshots. Photography is diverse, showing young people in various settings, often with a casual, authentic feel. Images for cards frequently feature rounded corners (20px or 30px) and appear as a grid or scattered collage within hero sections. Product screenshots are typically high-fidelity and contained within UI elements, showcasing app interfaces directly. Icons are used sparingly and seem to be simple, outlined, and monochromatic, with occasional green accents for success-oriented elements. The imagery serves to both establish atmosphere and provide visual evidence of community and product functionality, without being overly decorative or heavy.
