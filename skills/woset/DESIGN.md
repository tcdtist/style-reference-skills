---
version: alpha
name: Woset
description: Woset employs a playful yet considered aesthetic, reminiscent of a child's art cart organized with care. The system uses a clean, light canvas, punctuated by a vibrant primary yellow that brings a pop of creative energy. Typography is grounded, with a custom sans-serif family that balances friendliness with legibility. Components often feature generous border-radii, giving them a soft, approachable feel, while the overall density remains comfortable to allow product illustrations to breathe.
colors:
  canvas: "#e5e7eb"
  ink-black: "#000000"
  muted-ash: "#bbbab7"
  graphite: "#8d8c8a"
  crayon-yellow: "#ecca53"
  deep-violet: "#2d5193"
  forest-green: "#054331"
  artisan-red: "#a5001b"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: -0.3px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 1px
  display:
    fontFamily: "system-ui"
    fontSize: 95px
    lineHeight: 1
    letterSpacing: -0.6px
spacing:
  buttonRadius: 30px
  elementGap: 22px
  sectionGap: 60px
components:
  ghost-button:
    role: Secondary actions, navigation links, filtering options.
  primary-action-button:
    role: Main call-to-actions, prominent interactive elements.
  text-input:
    role: Form fields for user data entry.
  full-width-primary-button:
    role: Key navigational or submission actions, often at the bottom of forms or sections requiring higher emphasis.
  product-card:
    role: Displaying individual products with imagery and pricing.
---

## Overview

**North Star:** Childhood doodle sketchbook

Woset employs a playful yet considered aesthetic, reminiscent of a child's art cart organized with care. The system uses a clean, light canvas, punctuated by a vibrant primary yellow that brings a pop of creative energy. Typography is grounded, with a custom sans-serif family that balances friendliness with legibility. Components often feature generous border-radii, giving them a soft, approachable feel, while the overall density remains comfortable to allow product illustrations to breathe.

### Do's

- Use Canvas (#e5e7eb) as the primary background for all page sections and underlying surfaces.
- Apply a 30px border-radius to all buttons and input fields to maintain a soft, approachable feel, unless explicitly overridden for a specific component variation.
- Utilize Ink Black (#000000) for all primary text, headings, and significant interactive text, ensuring high contrast against light backgrounds.
- Employ Crayon Yellow (#ecca53) exclusively for primary calls-to-action or active states, making these elements distinct and energetic.
- Maintain a clear elementGap of 22px between logically grouped UI elements, and a sectionGap of 60px between major content blocks.
- Prioritize Macan for all textual content, using weight 400 for body text and weight 500 for larger headlines.
- Ensure all interactive fields and ghost buttons feature a 1px border using Muted Ash (#bbbab7) or Ink Black (#000000).

### Don'ts

- Do not use Crayon Yellow (#ecca53) for decorative purposes or text that is not a primary action or active state indication.
- Avoid harsh, angular corners; always prefer the defined 30px border-radius for interactive elements unless a specific component variant dictates otherwise (e.g., the Full-Width Primary Button).
- Do not introduce new border colors or weights; stick to 1px Ink Black (#000000) or Muted Ash (#bbbab7) for borders.
- Do not introduce drop shadows for elevation; rely on spacing, background color changes, and borders for visual hierarchy.
- Avoid using highly saturated, non-brand colors outside of the specified decorative background fills (Deep Violet, Forest Green, Artisan Red).
- Do not use the A1 Gothic M font for general body text or headlines; reserve it for its specific defined content role.
- Do not reduce the elementGap below 22px or sectionGap below 60px, as it will disrupt the comfortable density.

### Layout

The page uses a contained, centered layout, allowing full-bleed background colors for distinct sections. The hero feature is a prominent, large-text headline centered over the page canvas. Content often arranges in a single column or a 3-column grid for product cards. Sections are delineated by vertical spacing (sectionGap 60px) and occasionally by alternating background colors (e.g., Canvas vs. Deep Violet, Forest Green, Artisan Red). Navigation is a compact top bar with left-aligned brand elements and right-aligned utility links, which scrolls with the page.

### Imagery

The site heavily features whimsical, hand-drawn product illustrations, reminiscent of children's drawings. These are the primary visual content, occupying significant space and appearing as product imagery on card components. Photography is absent. Icons, where present (e.g., cart, account), are simple, outlined, and monochromatic (Ink Black); their stroke weight is minimal. The imagery serves primarily to showcase products and create a playful, imaginative atmosphere, dominating visually over text.
