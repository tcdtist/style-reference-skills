---
version: alpha
name: Podcorn
description: Podcorn's design system channels a playful yet professional aesthetic through a light, spacious canvas. Dominated by a soft coral-tinged white and deep indigo accents, the interface feels inviting while maintaining clear hierarchy. Typography is compact and confident, paired with a distinct rounded-corner treatment for button-like elements that softens edges. Decorative illustrations provide visual delight without distracting from content, ensuring a streamlined user experience.
colors:
  canvas-pink: "#fff4f2"
  true-white: "#ffffff"
  inkwell-indigo: "#090335"
  deep-ocean: "#132645"
  coral-sunset: "#ffb0a1"
  firebrick-red: "#fc736c"
  ash-gray: "#434352"
  stone-grey: "#8993a2"
  outline-gray: "#d8d8d8"
  charcoal-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.58
    letterSpacing: -0.19px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.67
    letterSpacing: -0.19px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.57
    letterSpacing: -0.19px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
    letterSpacing: -0.19px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.44
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 20px
  sectionGap: 75px
components:
  filled-primary-button:
    role: Primary action button
  outlined-secondary-button:
    role: Secondary action button, ghost style
  navigation-button:
    role: Navigational link within the header
  navigation-link:
    role: Standard navigation text link
  content-card:
    role: Container for content sections
  cookie-consent-modal:
    role: Overlay for cookie preferences
---

## Overview

**North Star:** Soft-edged digital canvas

Podcorn's design system channels a playful yet professional aesthetic through a light, spacious canvas. Dominated by a soft coral-tinged white and deep indigo accents, the interface feels inviting while maintaining clear hierarchy. Typography is compact and confident, paired with a distinct rounded-corner treatment for button-like elements that softens edges. Decorative illustrations provide visual delight without distracting from content, ensuring a streamlined user experience.

### Do's

- Use Inkwell Indigo (#090335) for primary action backgrounds and all major headings.
- Always apply a 0px border-radius to all buttons and cards, maintaining sharp, clean edges.
- Utilize Canvas Pink (#fff4f2) as the foundational background color for most page sections.
- Reserve Firebrick Red (#fc736c) sparingly for high-visibility navigation buttons or active states.
- Employ Gilroy for all body text, navigation items, and button labels, applying '-0.1870em' letter spacing for compact readability.
- Ensure all interactive elements like buttons and navigation links have a minimum vertical padding of 18px and horizontal padding of 20px.
- Structure pages with a maximum content width of 1105px, horizontally centered.

### Don'ts

- Do not introduce rounded corners on any primary UI elements unless specifically for a modal or pop-up like the cookie consent (8px).
- Avoid using highly saturated, non-brand colors outside of illustrations, restricting the palette to Inkwell Indigo, Firebrick Red, and neutral tones.
- Do not deviate from the specified Gilroy and Georgia font families; introducing other typefaces will disrupt the brand's typographic consistency.
- Do not use generic gray tones for text. Instead, use Ash Gray (#434352) for muted text and Inkwell Indigo (#090335) for primary text.
- Avoid heavy drop shadows or complex gradients. The design relies on flat surfaces and clear color contrasts.
- Do not use smaller padding than 18px vertically / 20px horizontally for buttons. Maintain the generous button sizing.
- Do not place content that extends beyond the 1105px main content width.

### Layout

The page primarily uses a contained, centered layout with a maximum width of 1105px for content. The hero section can be full-bleed with a large background illustration, featuring a prominent centered headline and action buttons. Vertical rhythm is established through consistent section gaps (around 75px), often with alternating background colors between True White and Canvas Pink. Content sections frequently employ a two-column layout with text on one side and an illustrative graphic on the other. Navigation is a sticky top bar with brand coloring and bold action buttons.

### Imagery

The site uses lively, playful line illustrations with bright, moderate, and vivid custom color palettes (Coral Sunset, Deep Ocean, Firebrick Red) set against a white or Canvas Pink background. Illustrations are used decoratively to add personality and visually segment content, rather than to convey specific product points. They typically feature outlined figures and abstract shapes, often enclosed within a simple square or rectangular frame, and sometimes integrate subtle brand color accents. Icons are generally minimalist and outlined, mirroring the illustration style.
