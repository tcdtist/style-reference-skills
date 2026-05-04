---
version: alpha
name: Mintlify
description: Mintlify captures an atmosphere of serene, intelligent efficiency, like navigating a well-organized digital library. The predominant use of highly desaturated grays and stark black-on-white provides a clean, information-focused base. A single vivid green (#0c8c5e) acts as a digital beacon, highlighting interactive elements and key information without visual clutter. The visual restraint in color and a subtle elevation system communicate authority through clarity, making complex documentation feel approachable.
colors:
  ink: "#000000"
  white-canvas: "#ffffff"
  coal: "#08090a"
  platinum: "#f2f2f2"
  steel: "#dddddd"
  sage-mark: "#0c8c5"
  emerald-glow: "#00dc8d"
  deep-cobalt: "#0052ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.71
    letterSpacing: 0.65px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.15
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1.1
    letterSpacing: -1.14px
spacing:
  cardRadius: 16px
  buttonRadius: 1.67772e+07px
  sectionGap: 64px
components:
  email-cta-input:
    role: 
  feature-cards-built-for-the-intelligence-age:
    role: 
  customer-story-cards:
    role: 
  text-link:
    role: Navigation, inline links, secondary actions
  outline-button:
    role: Call to action, navigation items
  pill-ghost-button-light-text:
    role: Navigation, secondary actions on dark backgrounds
  pill-filled-button-dark-text:
    role: Primary call to action in light contexts
  email-input-field:
    role: Data entry, form submissions
  elevated-button-light:
    role: Key interactive elements where a subtle lift is desired.
  elevated-button-dark:
    role: Key interactive elements on darker backgrounds where a subtle lift is desired.
---

## Overview

**North Star:** Digital librarian's desk. Precise information architecture meets subtle brand identity through selective color accents.

Mintlify captures an atmosphere of serene, intelligent efficiency, like navigating a well-organized digital library. The predominant use of highly desaturated grays and stark black-on-white provides a clean, information-focused base. A single vivid green (#0c8c5e) acts as a digital beacon, highlighting interactive elements and key information without visual clutter. The visual restraint in color and a subtle elevation system communicate authority through clarity, making complex documentation feel approachable.

### Do's

- Prioritize Inter font at all sizes and weights; use negative letter spacing on display sizes (57px: -1.14px, 40px: -0.4px) for a refined look and positive spacing (13px: 0.65px) for captions to ensure legibility.
- Use Sage Mark (#0c8c5e) exclusively for primary interactive elements, active states, and essential brand indicators to maintain its visual impact and clarity.
- Apply White Canvas (#ffffff) strictly as the default page background and for card surfaces, allowing content to breathe and accent colors to pop.
- Form inputs should be minimal, using a borderRadius of 0px and a transparent background (rgba(0,0,0,0)), allowing the surrounding design to define their presence.
- Employ the `lab(2.42579 -0.165291 -0.470081 / 0.03) 0px 2px 4px 0px` shadow for subtle content elevation against dark backgrounds and `lab(100 0 0 / 0.05) 0px 2px 4px 0px` for light backgrounds.
- Maintain a consistent elementGap of 4px, 6px, 8px, 10px, or 12px between adjacent UI elements to ensure a harmonious and comfortable density.
- Round all buttons, and other interactive pill-shaped elements to 1.67772e+07px for a modern, distinct soft edge that contrasts with the sharper 4px and 16px radii found elsewhere.

### Don'ts

- Do not introduce new typefaces; rely solely on Inter to preserve the visual identity.
- Avoid using highly saturated colors other than Sage Mark (#0c8c5e) or Emerald Glow (#00dc8d) for primary UI elements; reserve others for illustrative accents only.
- Do not deviate from the specified borderRadius values (1.67772e+07px for pills, 0px for inputs, 4px for tags, 16px for cards) to maintain shape consistency.
- Do not use dark backgrounds where White Canvas (#ffffff) is expected, as this would break the light theme consistency and intended contrast ratios.
- Do not use letter-spacing: normal. Always apply precise letter-spacing according to the type scale to maintain typographic rhythm.
- Avoid excessive decoration or complex gradients on UI elements; the design emphasizes clarity and directness.
- Do not add additional shadows beyond the specified `lab(2.42579 -0.165291 -0.470081 / 0.03) 0px 2px 4px 0px` or `lab(100 0 0 / 0.05) 0px 2px 4px 0px` to maintain a light and intentional elevation profile.

### Layout

The site uses a max-width contained layout rather than full-bleed, centering content to enhance focus. The hero section is full-width with large background illustrations, overlaid by a centered headline and call to action. Subsequent sections alternate between clear, distinct blocks with generous vertical spacing (sectionGap of ~64px). Content within sections often defaults to centered stacking or a 2-column layout with text on one side and a visual element or card grid on the other. Card grids often feature 3-5 columns. The navigation is a sticky top bar, providing persistent access without intruding on content. The overall density feels comfortable and spacious, allowing for easy readability.

### Imagery

The visual language for imagery leans heavily into abstract illustrations and product-focused visuals. Illustrations feature soft-edged, almost cloud-like shapes with subtle gradients and muted colors (like the light blue and orange clouds in the hero). Product screenshots, when present, are often cleanly cropped and contained within UI elements or cards, focusing on function. Photography is absent. Icons are typically monoline in style, either black on white or the brand's Sage Mark green, providing clear visual cues for functionality. The overall role of imagery is decorative and atmospheric in hero sections, illustrative for concepts, and clearly explanatory for product features, maintaining a text-dominant layout punctuated by strategic visual aids.

### Elevation

Elevation is sparingly used to create subtle visual hierarchy rather than strong dimensional separation. Shadows are soft, low-opacity, and diffused, providing a gentle lift to interactive elements like buttons. The intentional lightness of the shadows prevents the interface from feeling heavy or cluttered, reinforcing the clean and efficient aesthetic. Surfacesprimarily rely on background color changes for distinction rather than deep shadows.
