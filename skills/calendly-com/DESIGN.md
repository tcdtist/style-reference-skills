---
version: alpha
name: Calendly.com
description: Calendly presents a bright, approachable interface with a strong focus on clear information hierarchy and intuitive interaction. The dominant visual pairing of deep indigo (#0B3558) for prominent text and an active blue (#006BFF) for interactive elements establishes a professional yet friendly tone. Subtle shadows and consistent corner radii on cards and buttons create a sense of tangible depth, grounding the digital experience in a visually comfortable space.
colors:
  midnight-indigo: "#0B3558"
  action-blue: "#006BFF"
  lavender-glow: "#e55cff"
  royal-amethyst: "#8247f5"
  sunset-gold: "#ffa600"
  skybound-blue: "#0099ff"
  ocean-glimmer: "#BB32D5"
  glacier-blue: "#004EBA"
  snow-white: "#ffffff"
  cloud-mist: "#F8F9FB"
  pale-gray: "#E7EDF6"
  slate-blue: "#476788"
  steel-gray: "#A6BBD1"
  platinum-tint: "#D4E0ED"
  outline-gray: "#E6E6E6"
  text-black: "#0A0A0A"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.21
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1.1
  display-xl:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 40px
components:
  sign-up-button-group:
    role: 
  booking-time-slot-card:
    role: 
  feature-section-connect-your-calendars:
    role: 
  primary-call-to-action-button:
    role: Interactive Element
  ghost-button-dark-text:
    role: Interactive Element
  ghost-button-neutral-text:
    role: Interactive Element
  light-text-ghost-button:
    role: Interactive Element
  floating-content-card:
    role: Content Container
  informational-badge:
    role: Tag/Label
  text-link:
    role: Navigation/Interaction
  navigation-link:
    role: Navigation/Interaction
---

## Overview

**North Star:** Sky Blueprint on Bright Paper – Clarity and precision conveyed through deep blues and crisp whites, like an architect's plan on a fresh sheet.

Calendly presents a bright, approachable interface with a strong focus on clear information hierarchy and intuitive interaction. The dominant visual pairing of deep indigo (#0B3558) for prominent text and an active blue (#006BFF) for interactive elements establishes a professional yet friendly tone. Subtle shadows and consistent corner radii on cards and buttons create a sense of tangible depth, grounding the digital experience in a visually comfortable space.

### Do's

- Use Gilroy font family for all typography to maintain a consistent visual voice.
- Prioritize Action Blue (#006BFF) for primary calls to action to guide user flow.
- Apply a 16px border-radius and the distinct triple-layer shadow (rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.08) 0px 30px 50px 0px) to all prominent, elevated cards.
- Maintain a clear hierarchy using Midnight Indigo (#0B3558) for headlines and primary text, and Slate Blue (#476788) for secondary information.
- Use Pale Gray (#E7EDF6) for subtle background separations or badge fills to maintain a light aesthetic.

### Don'ts

- Do not use highly saturated colors for large blocks of text; reserve them for interactive elements or accents.
- Avoid applying heavy, deep shadows on elements not intended to be interactive or highly emphasized.
- Do not introduce additional font families or decorative typefaces; adhere strictly to Gilroy.
- Do not deviate from the established 8px base unit for spacing, as it ensures comfortable density.
- Avoid using pure black (#000000) for text; use Text Black (#0A0A0A) for readability or Midnight Indigo (#0B3558) for a branded tone.

### Layout

The page structure predominantly follows a max-width contained model, centered on Snow White (#ffffff) or Cloud Mist (#F8F9FB). Hero sections feature a large, centered headline (Gilroy 68px/80px weight 700, Midnight Indigo) and descriptive text, often accompanied by a prominent call-to-action button, and a product mock-up often with background fluid shapes. Content sections alternate between centered stacks and two-column layouts (text on left, image/mockup on right, or vice versa) with consistent vertical spacing of 40px as detected for sectionGap. Navigation is a sticky top bar with a clear 'Get started' CTA. The overall density is comfortable, providing ample breathing room around content blocks.

### Imagery

The visual language for imagery is characterized by either product interface mockups or abstract, fluid shapes in vibrant accent colors (Lavender Glow, Royal Amethyst, Sunset Gold, Skybound Blue). Product mockups are typically contained within cards with soft shadows, showcasing the UI in context. Abstract shapes serve a decorative and energetic role, overlapping slightly and adding dynamism without being overwhelming. There are also simple, outlines and filled icons which supplement text, typically in Midnight Indigo or Slate Blue. Photography is minimal, appearing primarily in social proof sections as small, circular profile images. The overall density is balanced, with imagery serving to break up text and showcase product functionality rather than dominating the layout.
