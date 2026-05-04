---
version: alpha
name: Navan
description: This design system projects an image of sophisticated efficiency, using a deep violet primary, Navan Ink, grounded by a crisp white and muted grays. It achieves a balance between corporate authority and modern approachability through its meticulous typography, showcasing delicate letter-spacing on display fonts and precise line-heights. The overall impression is one of trusted expertise, made accessible by subtle gradients and refined component styling.
colors:
  navan-ink: "#15002c"
  action-violet: "#6307f8"
  hero-gradient-purple: "#410566"
  highlight-pink: "#da9eff"
  subtle-violet: "#e1e2fe"
  paper-white: "#ffffff"
  border-ash: "#c6c6d2"
  graphite-text: "#000000"
  body-black: "#060000"
  slate-gray: "#5a5a72"
  whisper-gray: "#8d8da5"
  muted-stone: "#70708f"
  warm-cream: "#f7eee8"
  soft-off-white: "#f1f1f9"
  gradient-transition-purple: "#7c51fa"
  gradient-end-magenta: "#ffb5ce"
spacing:
  cardRadius: 14px
  buttonRadius: 9999px
components:
  flight-booking-card:
    role: 
  hero-goal-selector-cards:
    role: 
  g2-rating-awards-banner:
    role: 
  primary-action-button:
    role: Main call-to-action
  outline-ghost-button:
    role: Secondary action or navigation
  subtle-information-button:
    role: Tertiary action or information display
  inline-text-link:
    role: Navigation or contextual links
  basic-content-card:
    role: Container for grouped content
  new-feature-badge:
    role: Highlighting new features
  hero-section-gradient-background:
    role: Main visual element for banner sections
---

## Overview

**North Star:** Deep Violet Efficiency – like a meticulously organized business travel brief, dark and precise yet subtly inviting.

This design system projects an image of sophisticated efficiency, using a deep violet primary, Navan Ink, grounded by a crisp white and muted grays. It achieves a balance between corporate authority and modern approachability through its meticulous typography, showcasing delicate letter-spacing on display fonts and precise line-heights. The overall impression is one of trusted expertise, made accessible by subtle gradients and refined component styling.

### Do's

- Use Navan Ink (#15002c) for primary dark text and key background elements.
- Apply Action Violet (#6307f8) exclusively for primary interactive elements like main CTA buttons.
- Maintain a 9999px border-radius for all primary and secondary buttons to ensure a consistent pill-shape.
- Apply 14px border-radius to all card components and elevated containers.
- Utilize Neue Haas Grotesk Display Pro with 0.0400em letter-spacing for large, impactful headlines to maintain refinement.
- Ensure all body text uses Neue Hass Grotesk Text with a line-height appropriate to its size for optimal readability, such as 1.50 for 16px.
- Use Border Ash (#c6c6d2) for all subtle divders and non-interactive borders.

### Don'ts

- Avoid using highly saturated colors for large content blocks; reserve them for accents and interactive elements.
- Do not introduce additional font families; stick to Neue Hass Grotesk (Text/Display) and Sanomat.
- Never use hard-edged rectangles without a radius for interactive components; apply at least 10px radius to badges and 14px to most cards.
- Do not use shadows for elevation except where explicitly defined; rely primarily on background color differentiation.
- Avoid using custom letter-spacing on Neue Hass Grotesk Text body copy; it should remain 'normal'.
- Don't deviate from the established padding values for interactive buttons (10px vertical, 28px-54px horizontal).

### Layout

The page model is primarily max-width contained, centered on the screen, with sections flowing vertically. The hero section is full-bleed, showcasing a dark, atmospheric gradient background with a prominent centered headline and product mockups. Subsequent sections alternate between two-column layouts (text on left, image/card on right or vice-versa) and centered text blocks. Card grids appear for features or choices. Vertical spacing between sections is generous, contributing to a spacious feel. Navigation is a sticky top bar, with prominent, distinct CTA buttons.

### Imagery

The visual language combines contextual product mockups and staged, professional photography. Photography often features diverse individuals in business settings, focusing on collaboration or travel scenarios, with a semi-desaturated, naturalistic color treatment. Mockups are contained, often overlapping, and feature realistic app interfaces. Icons appear filled, monochromatic, and with a moderate stroke weight, serving an explanatory and decorative role. The overall density of imagery is balanced, supporting text without dominating.
