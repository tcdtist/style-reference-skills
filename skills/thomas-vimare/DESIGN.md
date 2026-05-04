---
version: alpha
name: Thomas Vimare
description: Thomas Vimare's design system is a stark, high-contrast dark theme emphasizing readability and a minimalist aesthetic. Typography reigns supreme, with delicate 'HelveticaNowDisplay-Light' forming the core of its visual identity. Surfaces are deep black, providing a silent backdrop for content defined by subtle borders and carefully chosen typefaces, allowing visual work to take center stage.
colors:
  deep-night: "#171717"
  polar-white: "#ffffff"
  quiet-fog: "#9a9a9a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.003px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: -0.005px
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: -0.006px
  subheading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.007px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.008px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.01px
spacing:
  elementGap: 20px
  sectionGap: 120px
components:
  navigation-link:
    role: Top navigation items.
  project-card:
    role: Displays individual portfolio projects.
  primary-heading:
    role: Main page titles and key descriptive text.
  secondary-description:
    role: Subtitles and supporting text for projects or sections.
---

## Overview

**North Star:** Minimalist gallery wall

Thomas Vimare's design system is a stark, high-contrast dark theme emphasizing readability and a minimalist aesthetic. Typography reigns supreme, with delicate 'HelveticaNowDisplay-Light' forming the core of its visual identity. Surfaces are deep black, providing a silent backdrop for content defined by subtle borders and carefully chosen typefaces, allowing visual work to take center stage.

### Do's

- Always use Deep Night (#171717) as the background for body and component surfaces to maintain the dark theme.
- Render all primary text and active states in Polar White (#ffffff) for maximum contrast against Deep Night (#171717).
- Apply Quiet Fog (#9a9a9a) sparingly for secondary information, subheadings, or subtle decorative borders.
- Maintain generous spacing: use 120px for vertical section gaps and 20px horizontally between elements.
- Utilize HelveticaNowDisplay-Light for all typography, adjusting size and letter-spacing according to the type scale for semantic roles.
- Implement the 2px solid Polar White (#ffffff) border for emphasizing interactive or visually contained elements like images or navigation items.

### Don'ts

- Avoid using any colors other than Deep Night, Polar White, and Quiet Fog for UI elements; stick to the achromatic palette.
- Do not introduce heavy shadows or overt elevation patterns; surfaces should remain flat.
- Do not deviate from the specified HelveticaNowDisplay-Light font family; do not mix in other typefaces.
- Avoid tight element spacing; maintain at least 20px between horizontal elements and 120px between major sections.
- Do not use rounded corners on UI elements; maintain sharp, crisp 0px radii across the board.
- Refrain from using gradients on backgrounds or interactive elements; surfaces are solid Deep Night.
- Do not use bold or heavy font weights; the system relies on the light weight of HelveticaNowDisplay-Light for its aesthetic.

### Layout

The page primarily employs a max-width 1600px, centered content model. The hero section is full-bleed Deep Night, featuring a prominent centered headline. Below the hero, content is arranged in a fluid grid or stack, with images and associated text forming paired blocks. Vertical rhythm is established through significant 120px section gaps. The navigation is a minimalist top bar, simple links on the left and the brand name on the right, floating over the Deep Night background.

### Imagery

This site features primarily project-specific visuals, including photography and possibly product screenshots, tightly cropped within their containers. Imagery serves as content showcases rather than decorative atmosphere. Treatments appear standard, without unique masking or overlaps, but implicitly use a 2px Polar White border for definition. The overall density leans text-dominant, with imagery serving as visual anchors within content sections.

### Elevation

The design intentionally avoids shadows and traditional elevation. The absence of shadows contributes to a flat, modern, and minimalist aesthetic, allowing content and typography to stand out without visual clutter. Depth is managed purely through typography, color contrast, and spacing.
