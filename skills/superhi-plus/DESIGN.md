---
version: alpha
name: SuperHi Plus
description: SuperHi Plus employs a vibrant and high-contrast design language, built on a foundation of deep blue and crisp white. Surfaces are predominantly flat, with color providing separation and hierarchy rather than shadows or complex textures. Typography is compact and direct, ensuring quick communication, while generous spacing frames content with confidence. The overall impression is energetic, modern, and direct, using bold color as a primary structuring element.
colors:
  superhi-blue: "#0033e5"
  canvas-white: "#f0f7ff"
  action-highlight-blue: "#527ceb"
  text-black: "#000000"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.13
  display:
    fontFamily: "system-ui"
    fontSize: 85px
    lineHeight: 1.13
spacing:
  cardRadius: 16px
  buttonRadius: 16px
  elementGap: 6-16px
  sectionGap: 24px
components:
  ghost-navigation-button:
    role: Navigation and secondary actions
  filled-primary-button:
    role: Primary calls to action
  pill-primary-button:
    role: Prominent, primary calls to action with extreme roundedness
  accent-filled-button-inactive-decorative:
    role: Decorative or inactive button style
  blue-information-card:
    role: Information display or feature highlights
  white-detail-card:
    role: Detailed content display
  white-feature-card:
    role: Prominent feature display
  outlined-text-input:
    role: User input fields
---

## Overview

**North Star:** Electric Blue Canvas: crisp text, confident forms.

SuperHi Plus employs a vibrant and high-contrast design language, built on a foundation of deep blue and crisp white. Surfaces are predominantly flat, with color providing separation and hierarchy rather than shadows or complex textures. Typography is compact and direct, ensuring quick communication, while generous spacing frames content with confidence. The overall impression is energetic, modern, and direct, using bold color as a primary structuring element.

### Do's

- Use SuperHi Blue (#0033e5) as the primary background for content sections and cards to maintain brand identity.
- Utilize Canvas White (#f0f7ff) for all body text and informational elements on SuperHi Blue backgrounds to ensure high contrast and readability.
- Apply a 16px border-radius to all cards and primary buttons, transitioning to 72px for pill-shaped buttons to vary visual emphasis.
- Employ the Haas Grot Disp Web font at weight 400 for all text, relying on the type scale for hierarchy rather than varied weights.
- Maintain a comfortable density with element gaps ranging from 6px to 16px, and card/section padding around 22-24px.
- Use Accent Highlight Blue (#527ceb) specifically for interactive states like button hovers to provide clear feedback.
- Structure pages with alternating sections of SuperHi Blue and Canvas White to create a clear visual rhythm.

### Don'ts

- Avoid using multiple font weights; stick exclusively to Haas Grot Disp Web weight 400 for consistency.
- Do not introduce drop shadows for elevation; rely on color and border treatments for component separation and visual surfacing.
- Refrain from using heavily saturated colors outside of the defined brand and accent blues.
- Do not use generic black (#000000) for text on blue backgrounds; always use Canvas White (#f0f7ff) for optimal contrast.
- Avoid large imagery that breaks the grid or draws focus from the core UI; keep visuals concise and contained.
- Do not use generic, unrounded rectangles; ensure all interactive elements and containers have a defined border-radius from the token system.
- Do not vary paragraph line-heights excessively; adhere to the defined line-height values appropriate for each text size.

### Layout

The page primarily uses a split-screen layout or a max-width contained layout with heavy left/right visual segmentation. The hero section divides the screen horizontally, contrasting a Canvas White left panel with large, bold typography and a SuperHi Blue right panel for introductory text. Subsequent sections alternate between full-width SuperHi Blue and segmented SuperHi Blue panels, maintaining a consistent rhythm. Content is generally stacked vertically within these sections, with some instances of two-column layouts (text beside bulleted lists or features). The page has a fixed max-width for column content, but certain sections, like the hero, utilize a split, full-height design. A sticky header with branded logo appears at the top.

### Imagery

This site uses abstract, spherical 3D illustrations with varied emoji-like faces and symbols (X, checkmark) in shades of SuperHi Blue and Canvas White. These visuals are dense, creating a dynamic, almost playful atmosphere on the main blue canvas. Imagery is primarily decorative and atmospheric rather than explanatory. Icons are simple, outlined shapes (money, hourglass, pencil, arrow) for clear functional communication, colored in Canvas White against SuperHi Blue backgrounds. There's also a subtle 3D cylindrical illustration, suggesting product visualization.
