---
version: alpha
name: Stellar
description: Stellar uses a high-contrast dark mode design with near-black backgrounds serving as a deep canvas for bright white typography. A single, vivid violet acts as a primary brand accent, used sparingly to highlight interactive elements and create a sense of direct action. Surfaces are typically flat and minimal, avoiding heavy shadows or decorative elements to maintain a streamlined, focused experience. Typography is utilitarian yet impactful, employing precise letter-spacing and varying weights to establish clear hierarchy against the dark backdrop.
colors:
  absolute-zero: "#000000"
  stellar-black: "#171718"
  storm-gray: "#2c2c2e"
  ultraviolet: "#6a48f2"
  spectral-white: "#f3f3f3"
  cloudburst: "#888888"
  lunar-white: "#ffffff"
  glimmer-white: "#e9e9e9"
  dusty-gray: "#dddddd"
  cosmic-dust: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.35px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.336px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
    letterSpacing: 0.168px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.1
    letterSpacing: -0.72px
spacing:
  cardRadius: 6px
  buttonRadius: 50px
  elementGap: 20px
  sectionGap: 50px
components:
  primary-action-button:
    role: Calls to action, e.g., 'Reserve your sprint'.
  ghost-card-button:
    role: Secondary action within card interfaces.
  informational-button:
    role: Callouts or navigation within sections, e.g., 'Learn More'.
  content-card-neutral:
    role: Container for showcasing projects, designers, or information.
  content-card-rounded:
    role: Container for showcasing work examples.
  ghost-card:
    role: Containers for imagery or specific, unpadded graphic elements.
  text-input:
    role: Standard user input fields.
  designer-avatar-card:
    role: Individual profile cards for designers.
---

## Overview

**North Star:** Midnight canvas, violet beacon.

Stellar uses a high-contrast dark mode design with near-black backgrounds serving as a deep canvas for bright white typography. A single, vivid violet acts as a primary brand accent, used sparingly to highlight interactive elements and create a sense of direct action. Surfaces are typically flat and minimal, avoiding heavy shadows or decorative elements to maintain a streamlined, focused experience. Typography is utilitarian yet impactful, employing precise letter-spacing and varying weights to establish clear hierarchy against the dark backdrop.

### Do's

- Prioritize Absolute Zero (#000000) as the primary page background for all sections to maintain a consistent dark theme.
- Use Ultraviolet (#6a48f2) exclusively for primary calls to action, interactive highlights, and brand elements requiring high visual impact.
- Apply a 6px border-radius to inputs, most cards, and some buttons for a consistent soft-edged feel.
- Ensure all primary headings use Spectral White (#f3f3f3) with Neue Montreal, weight 400-500, and precise letter-spacing from the type scale to stand out against the dark backgrounds.
- Maintain high contrast text with a minimum ratio of 17:1 for Spectral White / Lunar White text on Absolute Zero or Stellar Black backgrounds.
- Confine visual flair to the single Ultraviolet accent color; avoid introducing additional chromatic colors for UI elements.
- Utilize 'Element gap: 20px' to consistently separate major UI components horizontally and vertically, including cards and buttons.

### Don'ts

- Avoid using multiple vibrant accent colors; the brand relies on a single defined Ultraviolet (#6a48f2) as its color statement.
- Refrain from using strong box shadows on general UI elements; surfaces are largely flat with minimal elevation.
- Do not deviate from the pill-shaped 50px border-radius for primary action buttons.
- Do not use generic system fonts; always specify 'Neue Montreal' or its substitute 'Inter' for all text elements.
- Avoid decorative gradients on standard UI components; save the gradient for specific atmospheric or background sections.
- Do not reduce the letter-spacing for body text (14-16px) as it requires positive tracking for readability on dark backgrounds.
- Never use dark text colors on Stellar Black (#171718) or Absolute Zero (#000000) backgrounds; rely on white and light gray tones for legibility.

### Layout

The page primarily uses a full-bleed dark background with content centered within an implicit `pageMaxWidth`. The hero section is full-bleed, featuring a large, centered headline and subtext. Sections generally follow a consistent vertical rhythm with minimal visual dividers, flowing seamlessly. Content is arranged in alternating patterns, such as a large centered headline and subtext followed by a responsive grid of cards for team members or project showcases. Card grids are prominent for presenting work and people. The navigation is a minimalist top bar, fixed to the top, with basic links and a primary action button.

### Imagery

This site utilizes a mix of product screenshots, often contained within cards, and portraits for designer profiles. Photography is high-key and direct, typically showing tight crops of UI or individual faces with minimal background context. Imagery is generally contained within defined card shapes, maintaining clear boundaries and not overlapping. Iconography (where visible) appears to be simple, outlined, and monochromatic, typically in Cloudburst (#888888) against dark backgrounds. Imagery serves to showcase product work or individual talent, acting as explanatory content rather than purely decorative atmosphere.
