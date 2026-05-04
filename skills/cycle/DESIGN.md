---
version: alpha
name: Cycle
description: Cycle's design system creates a playful yet precise atmosphere, reminiscent of a digital sandbox where complex data is handled with accessible clarity. Soft, rounded elements and a palette of muted pastels with distinct, primary-adjacent accents define its visual identity. Typography combines the clean readability of Inter with the structured presence of Eudoxus Sans, creating a friendly and intelligent feel, while a subtle elevation strategy ensures content hierarchy without visual noise.
colors:
  absolute-black: "#171618"
  paper-white: "#ffffff"
  graphite: "#727578"
  light-gray: "#f7f7f7"
  silver-mist: "#efefef"
  slate-border: "#dadada"
  feedback-violet: "#38296c"
  agent-blue: "#004d60"
  insight-amber: "#6c4800"
  pale-lilac: "#f5f0ff"
  cloud-blue: "#defafe"
  mellow-apricot: "#fff6e1"
  soft-lavender: "#e7e0fe"
  sky-tint: "#cfeff8"
  sun-mist: "#feedcc"
  illustrative-yellow: "#ffbd00"
  illustrative-violet: "#6386fe"
  illustrative-pink: "#fd8fe9"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.4
    letterSpacing: -0.63px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: -0.67px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.05
    letterSpacing: -1.39px
spacing:
  cardRadius: 20px
  buttonRadius: 10px
  elementGap: 16px
  sectionGap: 64px
components:
  button-group:
    role: 
  product-agent-cards:
    role: 
  feedback-quote-card:
    role: 
  primary-action-button:
    role: Call to action
  secondary-action-button:
    role: Call to action
  tertiary-navigation-button:
    role: Navigation/secondary interaction
  minimal-navigation-link:
    role: Subtle navigation
  round-accent-card-violet:
    role: Decorative feature highlight
  round-accent-card-blue:
    role: Decorative feature highlight
  round-accent-card-amber:
    role: Decorative feature highlight
  primary-pill-badge-violet:
    role: Categorization/Tagging
  primary-pill-badge-blue:
    role: Categorization/Tagging
  primary-pill-badge-amber:
    role: Categorization/Tagging
  ghost-badge-neutral:
    role: Subtle categorization
  product-agent-card:
    role: Feature showcase
---

## Overview

**North Star:** Digital Sandbox with Soft Precision. Elements feel like organized, approachable blocks, gently elevated within a bright, open space.

Cycle's design system creates a playful yet precise atmosphere, reminiscent of a digital sandbox where complex data is handled with accessible clarity. Soft, rounded elements and a palette of muted pastels with distinct, primary-adjacent accents define its visual identity. Typography combines the clean readability of Inter with the structured presence of Eudoxus Sans, creating a friendly and intelligent feel, while a subtle elevation strategy ensures content hierarchy without visual noise.

### Do's

- Use `Eudoxus Sans` `weight 700` and `800` set with negative letter spacing for all primary headings and display text to enforce a deliberate, structured feel.
- Apply `Paper White` (`#ffffff`) as the default background for all page sections and `Absolute Black` (`#171618`) for primary text to maintain high contrast and clarity.
- Implement `10px` `border-radius` for all primary and secondary buttons, and `20px` for all information cards, to ensure a consistent, approachable softness.
- Separate content sections with a `sectionGap` of `64px` for generous vertical breathing room, fostering a clean and open layout.
- Use `Feedback Violet` (`#38296c`), `Agent Blue` (`#004d60`), and `Insight Amber` (`#6c4800`) as primary chromatic accents, carefully distributing them to associate with specific product features or states.
- Limit interactive elements like buttons and primary navigation links to `Graphite` (`#727578`) for a muted, clean secondary interaction state.

### Don'ts

- Avoid using harsh or sharply angled design elements; opt for rounded corners, soft shadows, and subtle background changes instead.
- Do not introduce highly saturated or vivid colors into the main UI beyond the carefully curated accent and brand colors, reserving vivid colors for illustrations.
- Refrain from excessive use of box shadows; use the `rgba(239, 239, 239, 0.55) 0px 2px 15px 0px` shadow sparingly to suggest subtle elevation without heavy visual weight.
- Do not deviate from the `Inter` typeface for body copy, navigation, and button labels; its consistent application maintains readability and system unity.
- Avoid tight packing of content; utilize `elementGap` of `16px` and other specified padding values to ensure a comfortable and easily scannable interface.
- Do not use `#000000` as a primary foreground color; confine it to borders as indicated by data, defaulting to `Absolute Black` (`#171618`) for text.

### Layout

The page uses a maximum-width contained model (max-width `1447px`), centered, with content resting on a `Paper White` background. The hero section features a prominent, centered headline and subtext, flanked by whimsical 3D illustrations. Sections generally maintain generous vertical spacing (`sectionGap`). Content arrangement frequently includes stacked elements (headlines, buttons) and is text-dominant, allowing illustrations to 'breathe' in open spaces. Navigation is a sticky top bar with clearly defined interactive elements.

### Imagery

The visual language is characterized by whimsical 3D illustrated characters (e.g., stylized 'feedback agent' heads with hats) and abstract, organic shapes. These are used decoratively to add personality and visual interest, primarily in hero sections and feature highlights. The illustrations are bright, with vivid, saturated colors contrasting against the muted UI palette. Some product screenshots are contained within a rounded, shadowed card, serving an explanatory role. Icons are filled, simple, and monochrome, integrating seamlessly into the UI.
