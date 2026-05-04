---
version: alpha
name: Virtual
description: This design system presents a stark, high-contrast digital interface. Dominated by deep black backgrounds and crisp white text, it leverages an accent orange purely for subtle guidance and status. Interaction elements are clearly defined by white outline borders, maintaining the minimalist aesthetic. Typography combines a structured, technical display font with a more flexible body font to create hierarchy within this constrained palette. The overall impression is one of precise control and focused functionality within a dark, almost console-like environment.
colors:
  midnight-void: "#000000"
  ghost-white: "#ffffff"
  muted-ash: "#666666"
  accent-orange: "#ff5c00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.3
    letterSpacing: -1.2px
spacing:
  buttonRadius: 10px
  elementGap: 10px
components:
  outlined-button:
    role: Primary interaction element for choices.
  hero-headline:
    role: Main page title.
  instruction-text:
    role: Guidance or secondary hierarchy within sections.
  button-subtext:
    role: Contextual information for interactive elements.
---

## Overview

**North Star:** Minimalist digital console.

This design system presents a stark, high-contrast digital interface. Dominated by deep black backgrounds and crisp white text, it leverages an accent orange purely for subtle guidance and status. Interaction elements are clearly defined by white outline borders, maintaining the minimalist aesthetic. Typography combines a structured, technical display font with a more flexible body font to create hierarchy within this constrained palette. The overall impression is one of precise control and focused functionality within a dark, almost console-like environment.

### Do's

- Maintain a primary contrast ratio of Ghost White (#ffffff) text on Midnight Void (#000000) backgrounds.
- Use IPM font only for headlines and large display text, applying -0.0200em letter-spacing.
- Apply 10px border-radius to all buttons and similar interactive containers.
- Ensure horizontal and vertical spacing around main content blocks respects the 'spacious' density, with section gaps between 156px and 280px.
- Define interactive elements with a 2px Ghost White border over a Midnight Void background.
- Reserve Accent Orange (#ff5c00) for subtle instructional text or small, non-primary highlights.
- Use Muted Ash (#666666) exclusively for secondary, low-prominence text, like helper or descriptive labels.

### Don'ts

- Do not introduce new background colors; maintain the #000000 dominant canvas.
- Avoid using bold or heavy font weights; the system relies on lighter weights for a structured feel.
- Do not deviate from the outlined button style; avoid solid filled buttons.
- Prevent excessive use of Accent Orange; it is a highlight, not a primary color.
- Do not overcrowd sections; the design relies on spacious layouts and generous use of negative space.
- Avoid decorative imagery that breaks from the stark, high-contrast aesthetic; prefer purely functional or technical visuals.
- Do not use letter-spacing on neue-haas-grotesk-display or Arial; only IPM headlines feature tracking.

### Layout

The page maintains a centered, contained layout, with content focused in the middle of the screen against a full-bleed Midnight Void background. The hero section features a prominent, centered headline with a secondary instruction line. Interactive elements, such as buttons, are also centrally aligned, arranged horizontally. Vertical rhythm is established through significant top and bottom margins on the main content block, creating ample whitespace and a spacious density. Navigation appears to be minimal, suggested by a small 'W.' icon and 'Site of the Day' label in the top right, hinting at off-canvas or minimal global controls.

### Imagery

The visual language is strictly UI-focused, devoid of photography or complex illustrations. It features simple, geometric outline graphics (like the corner brackets) which serve a decorative and structural purpose, echoing a technical blueprint or digital interface. Icons are implied to be minimalist and outlined, consistent with the overall aesthetic. Imagery plays a purely decorative atmospheric role, enhancing the 'digital console' feel without conveying specific content.
