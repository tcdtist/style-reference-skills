---
version: alpha
name: Leonid Kostetskyi
description: The Leonid Kostetskyi site presents a minimalist, high-contrast aesthetic with an almost architectural use of typography. Its visual identity relies on sharp typographic forms and an extremely limited color palette, dominated by a warm off-white canvas and a deep, muted reddish-brown for primary text and accents. The design emphasizes content through stark clarity and spacious layouts, avoiding decorative elements or heavy component chrome. Interactivity is subtle, often indicated by fine line treatments or inverse color changes rather than overt button styling.
colors:
  canvas-parchment: "#fdfaf3"
  cocoa-ink: "#472425"
  pure-white: "#ffffff"
  absolute-black: "#000000"
  deep-charcoal: "#121212"
  alert-crimson: "#e73737"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1
    letterSpacing: -0.54px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 135px
    lineHeight: 0.86
    letterSpacing: -3.375px
  display:
    fontFamily: "system-ui"
    fontSize: 188px
    lineHeight: 0.86
    letterSpacing: -4.7px
spacing:
  elementGap: 16px
  sectionGap: 200px
components:
  text-only-button-cocoa-ink:
    role: Interactive navigation and thematic switches.
  circular-toggle-button-dark:
    role: Theme switcher.
  circular-toggle-button-light:
    role: Theme switcher.
  outlined-input-field-dark-text:
    role: User input fields.
  outlined-input-field-cocoa-ink:
    role: User input fields.
  project-card-implicit:
    role: Display individual work projects or portfolio items.
  project-card-with-background-white:
    role: Display individual work projects or portfolio items.
  project-card-with-background-black:
    role: Display individual work projects or portfolio items for dark themed sections.
---

## Overview

**North Star:** Type-driven architectural minimalism: a stark, high-contrast typographic landscape on a warm, textured canvas.

The Leonid Kostetskyi site presents a minimalist, high-contrast aesthetic with an almost architectural use of typography. Its visual identity relies on sharp typographic forms and an extremely limited color palette, dominated by a warm off-white canvas and a deep, muted reddish-brown for primary text and accents. The design emphasizes content through stark clarity and spacious layouts, avoiding decorative elements or heavy component chrome. Interactivity is subtle, often indicated by fine line treatments or inverse color changes rather than overt button styling.

### Do's

- Prioritize NeueHaasDisplay for titles and headlines, using large sizes (135px, 188px) with tight letter-spacing (-0.0250em) to create monumental textual elements.
- Maintain a monochromatic base palette using Canvas Parchment (#fdfaf3) for backgrounds and Cocoa Ink (#472425) for primary text and subtle outlined interactions.
- Use no border-radius (0px) for most components, including cards and input fields, to preserve a sharp, architectural aesthetic.
- Indicate interactivity for `Link` and `Button` roles primarily through text color changes or subtle line treatments, avoiding prominent background fills on most buttons.
- Employ generous vertical spacing, specifically a ~200px section gap, to create an airy, uncrowded layout between major content blocks.
- Use Pure White (#ffffff) as the dominant background color for cards and informational blocks within light mode, maintaining visual consistency.
- Apply subtle 1px dashed borders of varying colors (Cocoa Ink, Pure White) to delineate active states or structural elements where a visible separation is needed without heavy lines.

### Don'ts

- Avoid using bright, saturated colors unless specifically for semantic feedback (like Alert Crimson #e73737), as they contradict the brand's muted, high-contrast palette.
- Do not introduce rounded corners (e.g., above 0px radius) for primary UI elements like buttons, cards, or inputs, as this clashes with the sharp, angular design language.
- Refrain from heavy drop shadows or complex elevation schemes; the design is flat and relies on color contrast and minimal borders for visual hierarchy.
- Do not use generic system fonts for display elements; stick to NeueHaasDisplay for impact and SFUIDisplay for readability.
- Avoid dense, information-heavy blocks of text; focus on clear, concise copy supported by ample whitespace and strong typography.
- Do not deviate from the established letter-spacing values for NeueHaasDisplay headlines; the tight tracking is a core part of its visual identity.
- Do not add decorative gradients; the system relies on solid colors and text-based visual interest.

### Imagery

The site's visual language is characterized by an absence of conventional imagery. Instead, it uses typography as its primary visual element, sometimes at extreme scales. When graphical elements appear (like the starburst shape), they are minimal, geometric, and monochrome, serving as abstract decorative accents rather than content-bearing visuals. This creates a text-dominant, almost brutalist aesthetic where the display type itself is the hero image.
