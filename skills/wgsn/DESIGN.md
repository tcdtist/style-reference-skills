---
version: alpha
name: WGSN
description: WGSN's visual system evokes a precise, authoritative environment through high-contrast typography and a stark monochrome palette. Information is presented on a clean white canvas, punctuated by dark, almost black, interactive elements. The design prioritizes clear communication and efficient navigation, using compact components and minimal decorative flourishes. Large, impactful headlines command attention, while subtle gray text provides supporting details, establishing a clear visual hierarchy.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  graphite: "#333333"
  steel-gray: "#666666"
  ash-gray: "#999999"
  fog-gray: "#f5f5f5"
  divider-gray: "#cccccc"
  input-text-gray: "#495057"
  button-solid-black: "#212121"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: 0.784px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: -0.198px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.6
    letterSpacing: -0.22px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
    letterSpacing: -0.264px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.33
    letterSpacing: -0.352px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.18
    letterSpacing: -0.528px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 92px
    lineHeight: 0.79
    letterSpacing: -1.012px
spacing:
  cardRadius: 16px
  buttonRadius: 40px
  elementGap: 18px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Call-to-action button for initiating key actions.
  outlined-light-button:
    role: Secondary action button on dark backgrounds.
  outlined-dark-button:
    role: Secondary action button on light backgrounds.
  standard-card:
    role: Container for content sections, often with imagery.
  feature-card:
    role: Prominent content card, often with an associated image.
  primary-input-field:
    role: Standard editable text input.
  dark-overlay-input:
    role: Input field designed for dark backgrounds.
  headline-badge:
    role: Small, descriptive text element above headlines.
---

## Overview

**North Star:** High-contrast monochrome canvas.

WGSN's visual system evokes a precise, authoritative environment through high-contrast typography and a stark monochrome palette. Information is presented on a clean white canvas, punctuated by dark, almost black, interactive elements. The design prioritizes clear communication and efficient navigation, using compact components and minimal decorative flourishes. Large, impactful headlines command attention, while subtle gray text provides supporting details, establishing a clear visual hierarchy.

### Do's

- Use DM Sans exclusively for all typography, leveraging its weights and responsive letter-spacing for hierarchy.
- Maintain high contrast ratios for text and interactive elements. Against Canvas White (#ffffff), use Ink Black (#000000) or Button Solid Black (#212121).
- Apply a 40px border-radius to all interactive buttons and navigation elements for a consistent soft pill-shape.
- Utilize Fog Gray (#f5f5f5) sparingly for subtle surface distinction on cards and input fields, never for primary background.
- Ensure section gaps between content blocks are consistent, defaulting to elementGap (18px) or sectionGap (32px) for major divisions.
- Use Steel Gray (#666666) for secondary informational text, not for primary content or interactive labels.
- Adopt the maximum page width of 1370px for all main content, centered on the screen.

### Don'ts

- Avoid using box-shadows for elevation; rely on background color changes or subtle borders for visual layering.
- Do not introduce new colors; adhere strictly to the monochrome palette with its specific gray values.
- Do not deviate from the defined border-radii; 40px for buttons, 16px for cards, and 8px for inputs are fixed values.
- Avoid decorative gradients; the system is flat and high-contrast.
- Do not use highly saturated brand colors. The visual system does not rely on typical chromatic accents.
- Do not use overly dense text blocks without appropriate contrast; prioritize readability with varied text weights and colors.
- Avoid complex overlapping elements; maintain a clean, organized, and explicit separation of components.

### Layout

The page adheres to a max-width of 1370px, centered on the screen. The hero section is characterized by a full-bleed dark background (Ink Black) with a prominent centered headline, framed by images for visual interest. Content sections alternate between the primary Canvas White and the slightly distinct Fog Gray backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column text-left/image-right or centered stacks. Feature sections often employ a multi-column card grid. The navigation is a sticky top bar, providing persistent access to key links.

### Imagery

Imagery consists primarily of tight product crops, lifestyle photography, and abstract studio shots, often presented without strong visual effects. Photography is contained within cards or grids, rarely full-bleed, emphasizing the product or a specific detail. There are no consistent illustration styles, implying a focus on real-world examples and sophisticated UI. Icons are typically solid, monochromatic, with a moderate stroke weight, serving functional roles rather than decorative ones. The density is moderate, allowing space for text, with imagery mainly serving to contextualize content.
