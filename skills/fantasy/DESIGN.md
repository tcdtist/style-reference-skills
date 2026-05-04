---
version: alpha
name: Fantasy
description: This design system evokes a sense of stark luxury, like a gallery space for digital art. The absolute black background intensifies the impact of the crisp white typography, creating a high-contrast, text-dominant presentation. Information is delivered with quiet confidence, relying on precise typographic control and generous negative space to command attention, rather than flashy visuals or complex layouts. The singular focus on black and white, paired with meticulous letter-spacing, projects an image of refined authority and intellectual rigor.
colors:
  absolute-black: "#000000"
  polar-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
    letterSpacing: -0.13px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
    letterSpacing: -0.15px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.4
    letterSpacing: -0.187px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -0.546px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 67px
    lineHeight: 1.1
    letterSpacing: -1.34px
  display:
    fontFamily: "system-ui"
    fontSize: 117px
    lineHeight: 1
    letterSpacing: -3.51px
spacing:
  buttonRadius: 8.33333px
components:
  hero-text-block:
    role: 
  menu-button-scroll-indicator:
    role: 
  stat-info-cards-row:
    role: 
  navigation-button-menu:
    role: Primary navigation trigger
  navigation-link-implicit:
    role: Top-level navigation
  action-button-explore:
    role: Feature call to action with minimal styling
  action-button-contact-black-text:
    role: Alternative action button for light backgrounds if theme were to shift
  hero-text-block-dark:
    role: Primary headline presentation
  footer-copyright-text:
    role: Legal and informational text
---

## Overview

**North Star:** Black Box Theater — a minimal stage where ideas are spotlighted.

This design system evokes a sense of stark luxury, like a gallery space for digital art. The absolute black background intensifies the impact of the crisp white typography, creating a high-contrast, text-dominant presentation. Information is delivered with quiet confidence, relying on precise typographic control and generous negative space to command attention, rather than flashy visuals or complex layouts. The singular focus on black and white, paired with meticulous letter-spacing, projects an image of refined authority and intellectual rigor.

### Do's

- Prioritize Polar White (#ffffff) text on Absolute Black (#000000) backgrounds for all content sections.
- Use sans-serif font for all typography, strictly adhering to weights 400 and 500.
- Apply specific letter-spacing: -0.0300em for 117px text, -0.0200em for 67px, -0.0130em for 42px, -0.0110em for 17px, and -0.0100em for 15px and 13px.
- Maintain generous vertical spacing between sections, using values within the 80px-138px range.
- Apply a consistent border-radius of 8.33333px to all interactive elements like buttons.

### Don'ts

- Avoid introducing any colors other than Polar White (#ffffff) or Absolute Black (#000000) for UI elements.
- Do not use font weights outside of 400 and 500.
- Never add box shadows or strong elevation effects; the design relies on flat contrast.
- Do not vary border-radius from 8.33333px for buttons; consistency is key.
- Avoid using highly saturated images or illustrations; opt for high-contrast, often monochrome, photographic or typographic content.

### Layout

The page adheres to a full-bleed layout with no explicit `pageMaxWidth`, allowing the Absolute Black background to fill the entire viewport. The hero section is full-screen, featuring centered text over the black background, creating an immersive, dramatic introduction. Sections are characterized by consistent, generous vertical spacing (80px-138px `sectionGap`), fostering a spacious, unhurried reading experience. Content arrangement is primarily centered text blocks or simple two-column layouts where text and implicit content elements are balanced. The overall density is low, prioritizing impactful statements and clear typography over information packing. Navigation consists of a minimal top-right 'Menu' button and a logo on the left, maintaining a clean, uncluttered header.

### Imagery

The site's visual language is characterized by an absence of traditional imagery in the main content areas, creating an impactful, text-dominant experience. When visuals appear, as hinted by the brand's logo and what might be product screenshots or abstract graphics in other sections not shown, they exist as stark, high-contrast elements. There's an implied focus on sharp, precise digital artifacts or symbolic representations that integrate seamlessly with the monochrome UI, emphasizing clean lines and sophisticated simplicity, rather than decorative or distracting visual noise. Icons are simple, outlined forms, such as the X and menu icon, reinforcing the minimal aesthetic.
