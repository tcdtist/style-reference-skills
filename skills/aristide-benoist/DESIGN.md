---
version: alpha
name: Aristide Benoist
description: Aristide Benoist employs a stark, high-contrast dark theme, creating a minimalist canvas for showcasing visual work. Typography plays a central role, utilizing custom fonts with distinct letter-spacing and compact line heights to establish a deliberate, almost architectural tone. Subtle use of a vivid yellow accent provides a critical but restrained counterpoint to the monochromatic surfaces, drawing attention to interactive elements without visual clutter. The overall presentation is sparse and content-focused, emphasizing precision and interaction.
colors:
  midnight-ink: "#000000"
  storm-gray: "#1e1e1e"
  mist-gray: "#bac4b8"
  goldenrod-accent: "#cc9933"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
spacing:
  elementGap: 24px
  sectionGap: 48px
components:
  primary-navigation-link:
    role: Top-level navigation element
  secondary-footer-link:
    role: Utility links in the footer
  horizontal-divider:
    role: Visual separation within lists or sections
  hero-display-text:
    role: Large, impactful headlines for hero sections
  body-paragraph:
    role: Standard informational text blocks
---

## Overview

**North Star:** Monochromatic minimalist stage

Aristide Benoist employs a stark, high-contrast dark theme, creating a minimalist canvas for showcasing visual work. Typography plays a central role, utilizing custom fonts with distinct letter-spacing and compact line heights to establish a deliberate, almost architectural tone. Subtle use of a vivid yellow accent provides a critical but restrained counterpoint to the monochromatic surfaces, drawing attention to interactive elements without visual clutter. The overall presentation is sparse and content-focused, emphasizing precision and interaction.

### Do's

- Prioritize Midnight Ink (#000000) for primary page canvas and Storm Gray (#1e1e1e) for secondary background surfaces, emphasizing depth through subtle tonal shifts.
- Use Mist Gray (#bac4b8) for all body text, default links, and inactive navigation items.
- Reserve Goldenrod Accent (#cc9933) for active element borders, focused states, and selected interactive text to maximize its impact.
- Apply jws 400 font with a consistent 1.0 line height for all body copy and interactive text elements.
- Utilize TNY 400 with its extremely large sizes and negative letter-spacing for all primary headlines, treating text as a dominant visual element.
- Maintain a clear visual hierarchy with high contrast between text and background, adhering to AAA accessibility standards for critical information.
- Implement 1px solid borders using Mist Gray (#bac4b8) for subtle content separation and interactive feedback.

### Don'ts

- Avoid using multiple chromatic colors; limit the accent palette exclusively to Goldenrod Accent (#cc9933).
- Do not introduce rounded corners; maintain sharp, crisp edges for all UI elements and imagery.
- Refrain from using shadows or elevation; the design system relies on flat surfaces and color contrast for visual hierarchy.
- Do not use generic system fonts; stick to the specified jws and TNY fonts to preserve brand identity.
- Avoid decorative gradients; surfaces should be flat and uniform in color.
- Do not use letter-spacing outside the specified values for jws and TNY fonts; precise tracking is a key brand identifier.
- Circumvent any large gaps or excessive padding that would disrupt the dense, content-focused layout.
