---
version: alpha
name: ClassPass
description: This design system feels energetic and clear, like a fitness studio bathed in natural light with sharp accents. The bright blue calls attention to interactive elements, contrasting with a clean, predominantly achromatic background. Rounded corners and generous spacing soften the overall feeling, making the diverse offerings appear approachable and user-friendly, rather than overwhelming.
colors:
  midnight-ink: "#000000"
  cloud-white: "#ffffff"
  steel-gray: "#676767"
  deep-graphite: "#111111"
  sky-blue: "#0055ff"
  sunshine-yellow: "#fce172"
typography:
  caption:
    fontFamily: "norms"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "norms"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "norms"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "norms"
    fontSize: 18px
    lineHeight: 1.33
  heading:
    fontFamily: "norms"
    fontSize: 36px
    lineHeight: 1.11
  display:
    fontFamily: "circuit"
    fontSize: 42px
    lineHeight: 1.05
spacing:
  cardRadius: 20px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 56-64px
components:
  hero-modal-card:
    role: 
  promotional-banner:
    role: 
  button-group:
    role: 
  secondary-call-to-action-button:
    role: CTA button
  ghost-header-button:
    role: Header elements
  inverse-ghost-header-button:
    role: Header elements
  modal-card:
    role: Dialog, overlay
---

## Overview

**North Star:** sunny fitness studio

This design system feels energetic and clear, like a fitness studio bathed in natural light with sharp accents. The bright blue calls attention to interactive elements, contrasting with a clean, predominantly achromatic background. Rounded corners and generous spacing soften the overall feeling, making the diverse offerings appear approachable and user-friendly, rather than overwhelming.

### Do's

- Prioritize Sky Blue (#0055ff) for all primary interactive elements like buttons and active navigation states.
- Use a 9999px border-radius for all primary and secondary buttons to maintain the 'pill' aesthetic.
- Apply 20px border-radius for larger card-like components to soften their appearance.
- Ensure headings use 'circuit' font at 42px/1.05 for primary messages, with 'norms' font for all other text sizes.
- Maintain high contrast text with Midnight Ink (#000000) or Deep Graphite (#111111) on white backgrounds or Cloud White (#ffffff) on Sky Blue.
- Utilize 8px as the base unit for all minor spacing, building up to 16px, 24px, and 40px for larger internal element separation.
- Use `Sunshine Yellow (#fce172)` exclusively for banner-type announcements to capture immediate attention.

### Don'ts

- Do not introduce new color hues; stick to Sky Blue, Sunshine Yellow, and the established neutrals.
- Avoid using square buttons or applying radii other than 9999px for interactive elements.
- Do not use 'circuit' font for body text or small labels; it is reserved for prominent headings.
- Avoid subtle contrast text on white backgrounds; always use Midnight Ink or Deep Graphite to ensure readability.
- Do not deviate from the established padding values; consistent spacing is key for visual harmony.
- Do not use shadows for elevation except where explicitly defined; depth is primarily created through background surfaces.
- Do not use background images directly on content cards; instead, feature photography as a mosaic behind UI elements.

### Layout

The overall page is a max-width contained layout, though the underlying background (a photographic mosaic) often extends full-bleed. The hero section features a prominent white modal overlay centered over the photographic grid, providing a clear call to action. Content sections primarily follow a stacked, centered approach within the modal, or a more dynamic grid of images on the main page. Navigation is a consistent top bar that remains static at 64px height. The density is relatively high due to the constant presence of imagery, but text is kept concise and well-spaced within its containers.

### Imagery

The site uses a dense, mosaic-like grid of high-quality, vibrant photography, exclusively featuring people engaged in fitness, wellness, and beauty activities. The images are full-bleed within their grid cells, uncropped or minimally cropped, and appear to be lifestyle shots rather than overly staged product placements. They are used decoratively to establish an energetic, aspirational atmosphere, occupying significant visual space relative to text. There are no illustrations or abstract graphics; the visual language is purely photographic, showcasing real people in real activities.
