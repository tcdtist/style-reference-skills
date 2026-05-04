---
version: alpha
name: Until App
description: Until App employs a clean, iOS-native aesthetic characterized by high contrast typography over predominantly neutral backgrounds. Gradients are utilized as expressive surface fills within contained widgets, rather than affecting the overall canvas. Elements have generous border radii, signaling a soft, user-friendly interface. Interactions are marked by a singular vivid blue, providing clear functional highlights.
colors:
  midnight-graphite: "#000000"
  storm-gray: "#595959"
  pewter-mist: "#808080"
  platinum-white: "#ffffff"
  silver-cloud: "#999999"
  action-blue: "#0078ff"
  rainbow-horizon: "#ffb005"
  sunset-gradient: "#fa3d1d"
  violet-skies: "#c679c4"
  deep-space-purple: "#b41380"
  electric-violet: "#5507ff"
  skybound-blue: "#11a8ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
spacing:
  cardRadius: 32px
  buttonRadius: 16px
  elementGap: 8px
  sectionGap: 153px
components:
  primary-action-button:
    role: Main call-to-action.
  compact-card-default:
    role: Standard information container.
  raised-card-subtle:
    role: Elevated card for content emphasis.
  hero-section-card:
    role: Container at top of page, full-width.
  muted-text-badge:
    role: Small, descriptive labels.
  app-store-download-button:
    role: External download link button.
  widget-card-gradient:
    role: Decorative card with a vibrant gradient background.
---

## Overview

**North Star:** iOS widget minimalism with expressive gradients

Until App employs a clean, iOS-native aesthetic characterized by high contrast typography over predominantly neutral backgrounds. Gradients are utilized as expressive surface fills within contained widgets, rather than affecting the overall canvas. Elements have generous border radii, signaling a soft, user-friendly interface. Interactions are marked by a singular vivid blue, providing clear functional highlights.

### Do's

- Prioritize system fonts (-apple-system, system-ui) for all text to maintain a native, lightweight feel.
- Use Platinum White (#ffffff) for all main page and card backgrounds to ensure a clean, high-contrast canvas.
- Apply a 32px border-radius to all card-like elements to consistently convey a soft, friendly aesthetic.
- Reserve Action Blue (#0078ff) exclusively for primary interactive elements, ensuring clear visual hierarchy for user actions.
- Employ the rgba(0,0,0,0.05) background tint for cards that require subtle elevation without strong shadows.
- Maintain an 8px base unit for all spacing, particularly an 8px elementGap for tight UI components and 16px for comfortable card padding.
- Incorporate vibrant gradient fills for 'widget' elements, creating points of visual interest and brand expression, distinct from the neutral UI.

### Don'ts

- Avoid strong, heavy shadows for cards or any container element; opt for subtle background tints or filter-based treatments for elevation.
- Do not introduce new typefaces, as the system relies exclusively on -apple-system and system-ui for a clean, consistent experience.
- Refrain from using color as a decorative element in the primary UI; color should serve functional purposes (accent, action, gradient background for widgets), not simply for visual flair outside of defined gradients.
- Do not deviate from the established border radii values; 32px for cards and 16px for buttons are key to the brand's visual identity.
- Avoid creating content that breaks the implicit full-bleed layout; sections should stretch horizontally, with content contained fluidly within a conceptual maximum width.
- Do not use dark backgrounds for general page sections; the theme is predominantly light, with gradients reserved for specific, contained graphical elements.
- Do not clutter layouts with excessive elements or tight spacing; maintain a comfortable density with ample negative space around components, aligning with the 8px base unit system.

### Layout

The page exhibits a full-bleed layout, where background elements and imagery extend to the viewport edges. The primary content appears loosely contained within a central column, though no explicit pageMaxWidth is enforced. The hero section prominently features a product screenshot (an iPhone mockup) against a vibrant gradient background. Vertical rhythm is established by section gaps around 153px, providing significant breathing room between content blocks. Content arrangement often juxtaposes product imagery and UI components against abstract, expressive gradients. There is a frequent use of card-like elements with generous radii, scattered dynamically across the layout, suggesting a less rigid grid and more artistic composition.

### Imagery

The visual language revolves around product screenshots and abstract gradients. The product screenshots showcase the app's UI within an iPhone frame, positioned organically and dynamically within the layout, sometimes overlapping. The treatment of these shots is clean and focused on showing functionality. Gradients are used as illustrative backdrops and as fills for app widgets, serving decorative and atmospheric roles rather than explanatory content. Icons and UI elements within the app are typically filled and simple, adhering to an iOS-native style. The overall density is balanced, allowing UI visuals to breathe within the page.
