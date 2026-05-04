---
version: alpha
name: Relieve Furniture
description: Relieve Furniture uses a calm, sustainable efficiency aesthetic: light, airy canvases, subtle elevation, and a focused palette of muted greens and purples. Typography is precise and airy, conveying information clearly without visual clutter. Components often feature soft rounded corners, suggesting approachability within an otherwise crisp, structured layout. The overall impression is one of organized, eco-conscious professionalism.
colors:
  canvas-fog: "#f6f7f7"
  snowdrift: "#ffffff"
  ash-cloud: "#e7e5e4"
  midnight-forest: "#0b392f"
  verdant-sprout: "#0cea9e"
  amethyst-glow: "#6f52d3"
  deep-plum: "#6043ba"
  graphite-text: "#374151"
  stone-grey: "#778a83"
  coal-black: "#000000"
  slate-blue: "#7f6de1"
  dark-forest: "#0b704e"
  carbon-gray: "#333c39"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.7
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1
    letterSpacing: -0.9px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 40px
components:
  ghost-primary-button:
    role: Default action button variant, outlines call-to-actions.
  subtle-recessed-button:
    role: Secondary action button for internal navigation or less prominent actions.
  dark-filled-button:
    role: Prominent action button for high-attention calls to action.
  flat-content-card:
    role: Information display card, primarily for textual content or small images without elevation.
  elevated-tooltip-card:
    role: Interactive pop-up or dialog card for focused information.
  text-only-card:
    role: Flexible card for information display, often used without distinct background or borders.
  image-feature-card:
    role: Card with background image, typically featuring a large image or visual element.
  highlight-tag:
    role: Small informational tag, often for 'New' features or status updates.
---

## Overview

**North Star:** Sustainable canvas, precise purpose

Relieve Furniture uses a calm, sustainable efficiency aesthetic: light, airy canvases, subtle elevation, and a focused palette of muted greens and purples. Typography is precise and airy, conveying information clearly without visual clutter. Components often feature soft rounded corners, suggesting approachability within an otherwise crisp, structured layout. The overall impression is one of organized, eco-conscious professionalism.

### Do's

- Use 'Midnight Forest' #0b392f for primary text, links, and strong borders to maintain brand consistency.
- Apply 'Canvas Fog' #f6f7f7 as the background for secondary content blocks and subtle button variants.
- Reserve 'Verdant Sprout' #0cea9 and 'Amethyst Glow' #6f52d3 for functional highlights, accents, and call-to-action indicators, avoiding decorative overuse.
- Utilize Planar font with a weight of 400 for body text and 300 for prominent headings, maintaining an airy and readable aesthetic.
- Apply 8px border-radius consistently to all buttons, cards, and images, creating a soft, approachable feel.
- Ensure generous use of 10px element gaps and 20px card padding for a compact, yet not crowded, information density.
- Use rgba(0, 0, 0, 0.25) 0px 0px 15px 0px for all elevated components to provide subtle depth without heavy visual weight.

### Don'ts

- Do not introduce strong, saturated colors beyond 'Verdant Sprout' #0cea9 or 'Amethyst Glow' #6f52d3 for UI elements.
- Avoid heavy shadows or gradients on primary UI elements; surfaces should appear mostly flat or with subtle elevation.
- Do not use highly decorative or script fonts; stick to the Planar family to maintain the system's clean, precise tone.
- Do not deviate from the established 8px and 12px border radii for components; sharp corners are not part of this design language.
- Do not create dense, text-heavy blocks without adequate line-height (1.6 for body text) or clear visual separation.
- Avoid using multiple font sizes for adjacent text elements; stick to the defined type scale to maintain visual hierarchy.

### Layout

The site employs a max-width contained layout, typically centered, with notable exceptions such as full-bleed header and hero sections. The hero prominently features a centered headline over a white background, with calls to action below. Section rhythm is generally consistent with vertical spacing, often alternating between white and very light gray backgrounds, creating distinct content blocks. Content is arranged in alternating text-left/image-right or image-left/text-right patterns, and in grids for cards, particularly 2-column layouts. The overall density is compact but with sufficient breathing room provided by consistent margins and padding, contributing to a clean, organized feel. A sticky top navigation bar provides consistent access to primary sections.

### Imagery

Imagery on Relieve Furniture typically features tightly cropped, professional product photography (office furniture, tech devices) or diverse team member photographs. Product shots often appear against neutral or dark backgrounds, highlighting the object itself. Photos are high-key and well-lit. Illustrations are minimal and functional, often appearing as subtle decorative elements or icons in a solid, filled style. Icons are clean, outlined, and monochromatic, primarily in 'Midnight Forest' #0b392f or 'Verdant Sprout' #0cea9e. There is a strong emphasis on visuals that communicate modern utility and sustainability, with imagery acting as explanatory content or product showcases rather than decorative atmosphere.
