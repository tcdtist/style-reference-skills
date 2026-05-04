---
version: alpha
name: SuperMush
description: SuperMush employs a vibrant, energetic visual system akin to a modern wellness brand. It layers a crisp white canvas with a bright, electric blue for primary actions and a playful, warm orange for highlighting key information. Typography is direct and confident, favoring sans-serifs with ample letter spacing and line height for readability. Components are lightweight with subtly rounded corners, emphasizing content and a clean user experience.
colors:
  canvas-white: "#ffffff"
  off-white-clay: "#f5f4f1"
  midnight-ink: "#000000"
  graphite: "#707170"
  steel-gray: "#eeeeee"
  accent-blue: "#2f59f8"
  highlight-orange: "#ff632a"
  active-yellow: "#eaff00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  body-lg:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.21
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
spacing:
  cardRadius: 16px
  buttonRadius: 50px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Calls to action, form submissions.
  ghost-button-header-nav:
    role: Secondary navigation in header.
  pill-accent-button:
    role: Information tags, small labels, sale indicators.
  neutral-rounded-button:
    role: Quantity selectors, small interactive elements.
  product-card:
    role: Displaying product items in grids.
  subtle-elevated-card:
    role: For reviews or distinct content blocks.
  pill-input-field:
    role: Text input forms.
---

## Overview

**North Star:** Juicy electric canvas

SuperMush employs a vibrant, energetic visual system akin to a modern wellness brand. It layers a crisp white canvas with a bright, electric blue for primary actions and a playful, warm orange for highlighting key information. Typography is direct and confident, favoring sans-serifs with ample letter spacing and line height for readability. Components are lightweight with subtly rounded corners, emphasizing content and a clean user experience.

### Do's

- Use Accent Blue (#2f59f8) for all primary calls to action, ensuring a fully rounded 'pill' shape with 50px border-radius and Canvas White (#ffffff) text.
- Apply Highlight Orange (#ff632a) sparingly for promotional banners, secondary content borders, and decorative accents to draw attention.
- Structure primary content on Canvas White (#ffffff) backgrounds, using Off White Clay (#f5f4f1) or transparent backgrounds for secondary sections or cards to create subtle visual breaks.
- Ensure all body text uses Founders Grotesk at appropriate weights, with Midnight Ink (#000000) for primary content and Graphite (#707170) for muted or helper text.
- Utilize a 16px border-radius for all content cards that require a defined surface, maintaining a light background.
- Maintain comfortable spacing with a base unit of 4px. Use 8px as the default element gap and 16px for card padding.
- Highlight sale or special offers with a distinctly bright Active Yellow (#eaff00) background, paired with Midnight Ink (#000000) text and a pill shape.

### Don'ts

- Do not use dark backgrounds for general page sections; the theme is predominantly light and airy.
- Avoid arbitrary uses of color; Limit saturated colors (Highlight Orange, Accent Blue, Active Yellow) to functional or branding purposes.
- Do not introduce square corners for buttons or interactive elements; prioritize soft, rounded edges (50px or greater radius).
- Do not use complex drop shadows or elevation effects; elements should generally appear flat or with minimal, subtle elevation.
- Avoid using multiple font families beyond Founders Grotesk and GT Planar to maintain brand consistency.
- Do not decrease letter-spacing below 'normal'; the brand maintains an open and readable typographic feel.
- Avoid padding less than 10px on interactive elements to ensure adequate tap/click targets.

### Layout

The page adheres to a max-width contained layout generally centered, though specific section widths can vary to accommodate full-bleed image backgrounds. The hero section often features a full-bleed vibrant image with centered, overlaid text and calls to action. Sections maintain a consistent vertical rhythm, with content arranged in alternating text-left/image-right or centered stacks. Card grids are used for product displays with typically 4 columns. Navigation is a sticky top bar with a distinct brand logo and minimal links, complemented by the prominent Accent Blue 'Shop All' button.

### Imagery

Photography is dominant, featuring lifestyle shots of people using products in active, natural settings (beaches, outdoors) alongside clean, focused product photography. Treatments are largely unedited and natural-looking, showing vibrant colors and real-world contexts. Product shots are typically contained within cards with 8px radius. Icons are monochrome, often using a thin stroke, mainly for utility and navigation, appearing as simple outlines or filled shapes depending on context. Imagery serves both decorative atmosphere and product showcase, usually occupying significant visual space.
