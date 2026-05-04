---
version: alpha
name: Uniswap
description: Uniswap's design system feels like a playful, high-energy data interface, grounded by stark neutrals and then splashed with a vibrant, almost neon palette. The soft, blurry background elements provide a sense of atmospheric depth without heavy shadows or complex textures, creating a digital ether. Type is uniformly monochrome, allowing bold, vivid accents to pop purely through color on interactive elements and data visualizations, drawing the eye instantly to critical information and actions. The overall impression is approachable yet cutting-edge, like a friendly gateway to complex financial technology.
colors:
  cloud-white: "#ffffff"
  ink-black: "#131313"
  dim-gray: "#222222"
  ash-gray: "#6a6a6a"
  silver-tone: "#acacac"
  off-white: "#f2f2f2"
  techno-pink: "#ff37c7"
  amethyst-glow: "#8251fb"
  ember-spark: "#ff4d00"
  hot-magenta: "#f50db4"
  sky-surge: "#2abdff"
  jade-mist: "#00c3a0"
  alert-red: "#e01a2b"
  success-green: "#0c8911"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.49
    letterSpacing: -0.24px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.49
    letterSpacing: -0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.11
    letterSpacing: -1.04px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.96
    letterSpacing: -1.28px
spacing:
  cardRadius: 20px
  buttonRadius: 999999px
  elementGap: 8px
  sectionGap: 32px
components:
  swap-interface-card:
    role: 
  protocol-stats-card:
    role: 
  button-group-showcase:
    role: 
  primary-action-button:
    role: Filled button
  secondary-ghost-button:
    role: Outlined/Ghost button
  subtle-pill-button:
    role: Pill-shaped background button
  navigation-link-button:
    role: Text-only navigation link
  swap-input-field:
    role: Financial input
  simple-card:
    role: Content container
  icon-button:
    role: Interactive icon
---

## Overview

**North Star:** Fuzzy Neon Playground. Crisp white UI elements float above a swirling background of blurred, vibrant color. 

Uniswap's design system feels like a playful, high-energy data interface, grounded by stark neutrals and then splashed with a vibrant, almost neon palette. The soft, blurry background elements provide a sense of atmospheric depth without heavy shadows or complex textures, creating a digital ether. Type is uniformly monochrome, allowing bold, vivid accents to pop purely through color on interactive elements and data visualizations, drawing the eye instantly to critical information and actions. The overall impression is approachable yet cutting-edge, like a friendly gateway to complex financial technology.

### Do's

- Prioritize Cloud White (#ffffff) for all main page and card backgrounds to ensure a clean, high-contrast canvas.
- Use Techno Pink (#ff37c7) exclusively for primary calls-to-action and active states to maintain visual hierarchy and brand recognition.
- Apply a border-radius of 999999px for all primary and secondary buttons, creating distinct pill shapes.
- Standardize text colors to Ink Black (#131313) for headings and primary content, Dim Gray (#222222) for secondary, and Ash Gray (#6a6a6a) for tertiary details.
- Apply the Basel typeface with a global letter-spacing of -0.02em across all text elements to create a characteristic compact, refined look.
- Maintain 8px as the primary `elementGap` for horizontal and vertical spacing between related UI elements.
- Use a default border-radius of 12px for interactive icons and other contained elements, contrasting with the soft card radius.

### Don'ts

- Do not introduce new color hues; leverage the existing vibrant accent palette and neutral scale for new features.
- Avoid using hard-edged rectangles for interactive elements; all buttons and most content containers should have a significant border radius (12px, 20px, or 999999px).
- Don't rely on shadows for elevation; instead, use subtle background color changes (e.g., from #ffffff to #f2f2f2) or the blurred background elements for visual depth.
- Do not use highly saturated colorful backgrounds. The backgrounds should remain neutral, allowing the blurred elements and UI accents to provide color.
- Avoid decorative typography; all text should use the Basel typeface in its defined weights and sizes.
- Do not use inconsistent padding for components; adhere to the established spacing scale (e.g., 4px, 8px, 12px, 16px) for interior padding.
- Never use the browser default link color (#0000ee); all links should be Ink Black (#131313) or a semantic color like Success Green (#0c8911) as context dictates.

### Layout

The page primarily uses a centered, max-width contained layout for content, but features a full-bleed vibrant blurred background that extends edge-to-edge. The hero section presents a prominent headline over this atmospheric background, followed by a central card-like swap interface. Section rhythm is generally consistent with vertical spacing, often separating content blocks with padding rather than visual dividers. Content elements, such as text and feature callouts, are stacked centrally or arranged in simple, clean two-column layouts. Navigation is a sticky top bar with clearly defined interactive elements, incorporating search and primary actions. The density is comfortable, providing breathing room around key components while still presenting a good amount of information.

### Imagery

The visual language focuses on abstract, blurred, and brightly colored 'blob' shapes that appear to float behind the crisp UI, contributing a sense of ethereal movement and playful energy. These shapes are multi-colored and semi-transparent, creating a soft, luminous background effect that makes the UI elements stand out. Specific icons or illustrations, when present, are often abstract representations of cryptocurrencies or blockchain concepts, using the vibrant color palette. Photography is absent; the emphasis is purely on UI and abstract digital visuals. The treatment is full-bleed for the background effects, while UI components are contained and use soft radii.
