---
version: alpha
name: Figma Config
description: Figma Config employs a bold, high-contrast dark theme, emphasizing clarity and directness. Monochrome neutrals dominate the canvas, creating space for content to stand out. Typography is dense and strong, utilizing custom fonts that command attention while maintaining high legibility against the dark background. Interaction is signaled through subtle border changes and direct color swaps rather than complex elevation, giving components a lightweight and integrated feel.
colors:
  midnight-void: "#000000"
  ghost-white: "#e2e2e2"
  shadow-charcoal: "#3d3d3d"
  polar-mist: "#ffffff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.95
    letterSpacing: -2.4px
spacing:
  buttonRadius: 0px
  elementGap: 12px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Main call-to-action on dark backgrounds.
  ghost-button:
    role: Secondary action or navigable link that appears as a button.
  cookie-consent-button:
    role: Button within the cookie consent dialog.
  navigation-link:
    role: Top-level navigation items.
  cookie-consent-panel:
    role: Floating informational message.
---

## Overview

**North Star:** monochrome command console

Figma Config employs a bold, high-contrast dark theme, emphasizing clarity and directness. Monochrome neutrals dominate the canvas, creating space for content to stand out. Typography is dense and strong, utilizing custom fonts that command attention while maintaining high legibility against the dark background. Interaction is signaled through subtle border changes and direct color swaps rather than complex elevation, giving components a lightweight and integrated feel.

### Do's

- Use Midnight Void (#000000) as the dominant background color for all main canvas areas.
- Apply FigmaSans for all text elements, setting letter-spacing to -0.0300em for display text (80px, 32px) and -0.0200em for smaller headings and body text.
- Form primary interactive buttons with a Midnight Void (#000000) background and Ghost White (#e2e2e2) text, using 0px border-radius.
- For ghost buttons or secondary actions, use Ghost White (#e2e2e2) for both text and a 1px border, maintaining a transparent background.
- Utilize the 4-6px vertical padding and 6-12px horizontal padding for navigation and compact interactive elements.
- Maintain a primary text color of Ghost White (#e2e2e2) against dark backgrounds and Midnight Void (#000000) against light backgrounds.
- Apply 1px borders using Midnight Void or Shadow Charcoal (#3d3d3d) for subtle division and emphasis.

### Don'ts

- Avoid using gradients; the system relies on flat colors for a stark, impactful appearance.
- Do not introduce intermediate grey tones between Midnight Void (#000000) and Ghost White (#e2e2e2) without a clear functional purpose, as the system favors high contrast.
- Do not use highly saturated colors for large surface areas; color is reserved for functional accents or semantic states.
- Do not use generic system fonts; stick to figmaSans or figmaMono for all typographic elements.
- Avoid soft, rounded corners for main interactive elements (buttons, cards); prefer sharp, square edges unless specifically for small pill-shaped accents.
- Do not use drop shadows for elevation; rely on color contrast and borders to define hierarchy and interactive states.

### Layout

The page maintains a full-bleed dark background, with content neatly centered or aligned to the left. The hero section features a prominent headline centered over the dark background. Sections generally use consistent vertical spacing, often indicated by the 40px section gap. Content arrangement appears to be stacked vertically, with some areas allowing for asymmetric or interleaved visual elements like the abstract shapes. The navigation is a minimal, right-aligned header bar that stays fixed at the top, offering essential links.

### Imagery

The visual language uses abstract, organic, blob-like shapes in a limited, vibrant accent palette (blue, green, orange, yellow) against the dark, high-contrast UI. These shapes are mostly opaque, layered, and slightly rotated, creating a playful yet dynamic feel. They function primarily as decorative atmosphere rather than conveying specific content. Icons, such as the `(pause)` and `(X)` are minimal, outlined, and monochromatic, integrated seamlessly into the UI.
