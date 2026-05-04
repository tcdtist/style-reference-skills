---
version: alpha
name: Yuga
description: Yuga Labs employs a high-contrast digital-native aesthetic, leveraging stark black and white with minimal color accents. Typography is compact and commanding, featuring a proprietary heavy sans-serif that defines the brand's voice. Surfaces are predominantly flat, and interactivity is signaled through subtle highlights and generous border radii, resulting in a bold, direct, and slightly playful presentation.
colors:
  midnight-void: "#000000"
  cloud-canvas: "#ffffff"
  digital-gray: "#131313"
  lime-glow: "#d3de5d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.1
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 0.94
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 0.94
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.9
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 0.83
    letterSpacing: -0.83px
  display:
    fontFamily: "system-ui"
    fontSize: 102px
    lineHeight: 0.82
    letterSpacing: -2.04px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 160px
    lineHeight: 0.78
    letterSpacing: -3.2px
spacing:
  cardRadius: 30px
  buttonRadius: 90px
  elementGap: 15px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action button
  navigation-link:
    role: Primary navigation item
  product-display-card:
    role: Container for product imagery or information
  footer-link:
    role: Secondary navigation or informational link
---

## Overview

**North Star:** Blocky digital canvas

Yuga Labs employs a high-contrast digital-native aesthetic, leveraging stark black and white with minimal color accents. Typography is compact and commanding, featuring a proprietary heavy sans-serif that defines the brand's voice. Surfaces are predominantly flat, and interactivity is signaled through subtle highlights and generous border radii, resulting in a bold, direct, and slightly playful presentation.

### Do's

- Prioritize high contrast between foreground (#ffffff) and background (#000000) for all primary content.
- Apply AK Monument Grotesk consistently across all typographic elements, leveraging its varying weights for hierarchy.
- Use 90px border-radius for all primary interactive elements like buttons to achieve a distinct pill shape.
- Maintain a comfortable information density with `elementGap` of 15px and `cardPadding` of 20px.
- Use the Lime Glow accent color (#d3de5d) sparingly for decorative elements or subtle brand highlights, not for essential text or interactive states.

### Don'ts

- Avoid using the Lime Glow accent color (#d3de5d) for large blocks of text or critical interface elements due to its low contrast against light backgrounds.
- Do not introduce additional custom fonts; 'AK Monument Grotesk' is the singular typographic voice.
- Do not use subtle elevation or complex shadow effects; surfaces should remain flat.
- Avoid using standard square or lightly rounded corners; consistently apply 30px-90px radii for a specific blocky-yet-rounded aesthetic.
- Do not deviate from the predominantly dark theme; light sections should be exceptions, not the rule.

### Layout

The page primarily uses a full-bleed structure, often with the main content centered within a maximum-width constraint. The hero section frequently features large, centered headlines over a dark background with dynamic, pixel-like graphic treatments. Sections are distinctly separated, often by background color changes (though mostly black and dark grays). Content arrangement favors centered stacks for headlines and buttons, with multi-column card grids (e.g., 2-column for collections) for showcasing items. Vertical spacing between sections is consistent and generous, creating a spacious and airy feel.

### Imagery

The visual language focuses on bold, abstract, and often monochromatic graphics with a pixelated or blocky aesthetic, reminiscent of early digital art or NFT styles. The Yuga Labs logo itself exemplifies this blocky, 'building block' approach. Product imagery, when present, is tightly cropped and often isolated on black backgrounds, showcasing the asset (e.g., NFT artwork) as the central focus without much context. Icons are simple, outlined, and monochromatic, aligning with the overall high-contrast theme. Imagery plays a decorative and brand-reinforcing role, rather than purely informational or product showcase.
