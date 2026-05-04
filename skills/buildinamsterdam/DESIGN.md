---
version: alpha
name: Buildinamsterdam
description: This design system is a study in stark binary opposition: pure black meets true white. The strong contrast, devoid of grays, creates an assertive and dramatic stage. Typography is the primary vehicle for visual interest, with a tight letter-spacing and varied weights creating a dynamic yet refined presentation. The single pop of 'Ancient Gold' is a subtle, almost luxurious, counterpoint to the monochromatic foundation, hinting at a hidden richness beneath the surface.
colors:
  midnight-ink: "#000000"
  arctic-white: "#ffffff"
  canvas-off-white: "#f2efe6"
  ancient-gold: "#c38133"
  deep-indigo: "#3c4cc7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 0.85
    letterSpacing: -3.44px
spacing:
  buttonRadius: 0px
  elementGap: 12px
components:
  outlined-cta-button-group:
    role: 
  hero-headline-block:
    role: 
  navigation-bar:
    role: 
  outlined-cta-button:
    role: Primary call to action
  navigation-link:
    role: Top-level navigation
---

## Overview

**North Star:** High-contrast geometric minimalism, accented by a single rich gold. It feels like a meticulously crafted architectural drawing, where every line and plane holds intentional weight.

This design system is a study in stark binary opposition: pure black meets true white. The strong contrast, devoid of grays, creates an assertive and dramatic stage. Typography is the primary vehicle for visual interest, with a tight letter-spacing and varied weights creating a dynamic yet refined presentation. The single pop of 'Ancient Gold' is a subtle, almost luxurious, counterpoint to the monochromatic foundation, hinting at a hidden richness beneath the surface.

### Do's

- Prioritize stark black (#000000) and arctic white (#ffffff) for backgrounds and main text, leveraging extreme contrast.
- Use NHaasGroteskDSPro (weight 400, 86px, -0.04em letter-spacing) for all primary display headlines to maintain a monumental yet light appearance.
- Apply 0px border-radius to all buttons and interactive elements, favoring sharp, geometric forms.
- Reserve RecklessNeue-Book with its specific stylistic sets for moments requiring elevated, expressive typography, such as subheadings.
- Introduce Ancient Gold (#c38133) only as a subtle, low-frequency accent, for decorative elements rather than functional ones.
- Ensure letter-spacing is applied precisely as defined for each typographic role, especially the compressed display headings.

### Don'ts

- Do not introduce any shades of gray as background or text colors; maintain the pure black and white dichotomy.
- Avoid rounded corners on any primary UI elements unless explicitly specified for a specific component (e.g., custom form elements not seen here).
- Do not use Ancient Gold (#c38133) for text or primary interactive elements; its role is purely decorative.
- Do not use generic sans-serif fonts; strict adherence to NeueHaasGrotesk and RecklessNeue is crucial for the brand identity.
- Do not vary line heights from the specified 1.20 for body and 0.85 for display heading, to preserve the tight typographic rhythm.
- Avoid adding box-shadows or significant elevation effects; depth derives primarily from color contrast and typography.

### Layout

The page employs a strong split-screen vertical layout, dividing the viewport into contrasting black and white sections. The hero section specifically features a prominent two-column split, with strong vertical alignment. The main content area also uses a max-width container for text. Section rhythm is created through direct color transitions (black to white, or off-white to white) rather than explicit dividers or consistent padding. Content is often stacked centrally or arranged in direct text-left/image-right configurations within implied column grids. Navigation is a sticky top bar with interactive elements.

### Imagery

The site uses minimal imagery, primarily relying on abstract, solid-color shapes (like the 'Ancient Gold' circle) to introduce decorative elements. The overall aesthetic is image-light, focusing heavily on typography and layout. When imagery is present, it appears to be either abstract or a focused product shot, often integrated without complex masking, maintaining a contained and precise treatment.
