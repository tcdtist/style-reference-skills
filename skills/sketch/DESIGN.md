---
version: alpha
name: Sketch
description: This design system feels like a softly illuminated, modern creative studio, balancing precise Swiss design principles with a playful, digital-native warmth. The extensive use of achromatic values creates a clean, almost stark foundation, elevated by a single vibrant gradient that appears subtly in the background and on key interactive elements. A bespoke serif font, 'Reckless', introduces an unexpected, artful touch for major headlines, contrasting with the utilitarian 'InterVariable' for all other text, grounding the aesthetic between craft and computation. The juxtaposition of highly rounded 'pill' elements and more structured 20px radii hints at a system that values both approachability and considered form.
colors:
  pitch-black: "#000000"
  graphite: "#212123"
  stone-grey: "#4a4a4a"
  ash-grey: "#5c5c5c"
  silver-mist: "#a7a7a7"
  canvas-white: "#fafafa"
  cloud-white: "#e6e6e6"
  deep-space: "#151515"
  sky-blue: "#555dff"
  teal-glow: "#03cbbc"
  ocean-blue: "#4389e6"
  aurora-gradient: "#744bd0"
  sunset-gradient: "#b47eee"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.43
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.41
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.09
    letterSpacing: -0.88px
  display:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 1
    letterSpacing: -1.748px
spacing:
  cardRadius: 20px
  buttonRadius: 24px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-cta-button-group:
    role: 
  announcement-banner-card:
    role: 
  status-badge-collection:
    role: 
  primary-filled-button:
    role: Main call to action
  ghost-button-with-outline:
    role: Secondary action or link
  information-card-with-shadow:
    role: Container for secondary content or announcements
  default-input-field:
    role: Standard user input
  line-input-field:
    role: Minimalist input field
  vivid-blue-badge:
    role: Highlighting 'new' or 'info' status
  teal-badge:
    role: Highlighting secondary status or category
  ocean-blue-badge:
    role: Highlighting tertiary status or category
---

## Overview

**North Star:** Architectural Digital Canvas. A pristine white canvas with soft, glowing digital light, and precise typography.

This design system feels like a softly illuminated, modern creative studio, balancing precise Swiss design principles with a playful, digital-native warmth. The extensive use of achromatic values creates a clean, almost stark foundation, elevated by a single vibrant gradient that appears subtly in the background and on key interactive elements. A bespoke serif font, 'Reckless', introduces an unexpected, artful touch for major headlines, contrasting with the utilitarian 'InterVariable' for all other text, grounding the aesthetic between craft and computation. The juxtaposition of highly rounded 'pill' elements and more structured 20px radii hints at a system that values both approachability and considered form.

### Do's

- Do use Reckless (weight 500) for all display headlines (44px, 76px) to establish a distinctive brand voice.
- Do apply InterVariable (weight 400) at 16px with Graphite (#212123) for all primary body text.
- Do use Canvas White (#fafafa) as the primary page background color for all main content sections.
- Do ensure interactive elements like buttons and badges utilize either 24px or 9999px border radii, never using intermediate values.
- Do apply the Aurora Gradient (linear-gradient(90deg, rgb(50, 173, 247) 20%, rgb(116, 75, 208) 40%, rgb(233, 127, 66) 50%, rgb(50, 173, 247) 75%)) as a background element to convey a digital, artistic atmosphere.
- Do reserve Deep Space (#151515) filled buttons for the most prominent calls to action only, pairing with Canvas White (#fafafa) text.

### Don'ts

- Don't use generic system fonts for any text; adhere strictly to InterVariable and Reckless fonts.
- Don't clutter layouts; maintain spaciousness with elementGap of 8px and larger section gaps where appropriate.
- Don't introduce shadows that are not specified; adhere to the subtle, dark shadow palette for icons and cards.
- Don't use highly saturated colors for backgrounds or large content blocks; reserve vivid hues for small accent elements like badges.
- Don't use rounded corners for cards or buttons that deviate from 20px or 24px respectively, or 9999px for pills.
- Don't use any color other than Canvas White (#fafafa), Cloud White (#e6e6e6), or transparent for card backgrounds.

### Layout

The page uses a full-bleed background model, with content largely contained within an implicit maximum width, centrally aligned. The hero section features a large, full-bleed gradient background ('Aurora Gradient') with a centered, prominent headline in 'Reckless' and a multi-line value proposition using 'InterVariable'. Subsequent sections follow a consistent alternating pattern of text-left/image-right or vice-versa, maintaining generous vertical spacing (likely around 64px sectionGap). Content blocks are generally stacked, and information cards tend to be centered. The navigation is a classic top bar, adhering to the main content width, featuring text links and distinct 'Sign In' (text) and 'Get Started' (pill button) actions. The overall density is spacious, allowing typography and UI elements to breathe.

### Imagery

Imagery is minimal and highly abstracted. The site primarily uses UI screenshots of the Sketch application, presented as clean, functional demonstrations. When present, graphics are abstract, soft gradients like Aurora Gradient or Sunset Gradient, serving as large background elements to add a sense of digital atmosphere rather than conveying specific information. There's an absence of lifestyle photography or complex illustrations, keeping the focus squarely on the product UI and its functionality. Icons are outline-based, monochromatic (Graphite #212123 or Pitch Black #000000), contributing to the clean, technical aesthetic.
