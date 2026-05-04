---
version: alpha
name: MediaOptions
description: MediaOptions embraces a commanding, yet approachable digital presence. Deep blue-violet surfaces create a sophisticated backdrop, punctuated by a vibrant orange for call-to-actions and a sky blue for links, providing clear points of interaction. Typography is direct and legible, maintaining professionalism with a focused range of weights. Components feature generous rounded corners for a soft touch against the structured layout, creating a visual balance between authority and user-friendliness.
colors:
  midnight-indigo: "#160042"
  sky-link: "#0073e5"
  ocean-glimmer: "#008da8"
  action-blue: "#2b6cb0"
  accent-blue: "#0071bc"
  polar-white: "#fbfcfe"
  ghost-gray: "#eeeeee"
  iron-gray: "#8e8f94"
  shadow-tint: "#cccccc"
  amber-cta: "#e86d1f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.75
    letterSpacing: 0.054px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.78
    letterSpacing: 0.029px
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.56
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.28
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: -0.03px
spacing:
  cardRadius: 50px
  buttonRadius: 50px
  elementGap: 15px
  sectionGap: 30px
components:
  primary-filled-button:
    role: Main call-to-action button
  navigation-button:
    role: Secondary action or ghost button in navigation
  dark-filled-button:
    role: Alternative filled button for specific dark contexts
  primary-card:
    role: Content container for main sections
  text-input-dark-context:
    role: Input field for forms within dark sections
---

## Overview

**North Star:** Deep Violet Canvas

MediaOptions embraces a commanding, yet approachable digital presence. Deep blue-violet surfaces create a sophisticated backdrop, punctuated by a vibrant orange for call-to-actions and a sky blue for links, providing clear points of interaction. Typography is direct and legible, maintaining professionalism with a focused range of weights. Components feature generous rounded corners for a soft touch against the structured layout, creating a visual balance between authority and user-friendliness.

### Do's

- Use Midnight Indigo (#160042) for large background surfaces and card fills to establish the primary darkened canvas.
- Apply 50px border-radius to all independent card and button components for a consistent soft, rounded aesthetic.
- Prioritize Inter at 400, 600, and 700 weights for all text, ensuring clear distinction between body, subheadings, and headlines.
- Utilize Sky Link (#0073e5) for primary navigational links and interactive elements to clearly delineate clickable areas.
- Maintain a comfortable density with 15px element gaps for most internal component spacing.
- Employ the Amber CTA (#e86d1f) for the main call-to-action buttons to ensure maximum prominence and urgency.
- Use Polar White (#fbfcfe) for text and secondary backgrounds within dark containers to provide strong contrast.

### Don'ts

- Avoid using flat, angular borders; instead, default to rounded corners or sharp edges on inputs where functional.
- Do not introduce additional bold, saturated colors beyond the established blue, indigo, and orange palette.
- Refrain from using lightweight fonts for critical information or headlines; maintain a minimum weight of 400 for body text.
- Do not overcrowd content; utilize the comfortable 60px card padding and 30px section gaps to provide ample breathing room.
- Avoid generic gray tones for interactive elements; use the Sky Link blue or Amber CTA orange for all primary interactions.
- Do not use transparent backgrounds for cards or primary buttons; content containers should always have a solid fill.
- Escew complex drop shadows; use the subtle rgba(0, 0, 0, 0.2) 0px 3px 1px -2px shadow for minimal depth where needed.

### Layout

The page maintains a contained layout with a maximum width of 1320px, usually centered. The hero section features a dominant centered headline over a dark, full-width background. Content sections beneath follow a structured rhythm, often alternating between a light page canvas and the dark Midnight Indigo card surfaces. Elements are frequently stacked vertically, with the potential for grid-based arrangements for features. Navigation is a persistent top bar, with elements neatly spaced.

### Imagery

This site predominantly uses UI elements rather than illustrative or photographic imagery. Icons are minimal, either outline or solid, and monochromatic, taking on the surrounding text color or a distinct accent hue like Accent Blue. When present, product-type images are presented cleanly within the UI without elaborate masking or effects. The visual system is text-dominant, with imagery taking a supportive, functional role rather than a decorative one.
