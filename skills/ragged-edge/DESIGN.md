---
version: alpha
name: Ragged Edge
description: Ragged Edge employs a sophisticated, high-contrast, black-on-white aesthetic that emphasizes bold typography and a striking, motion-blurred hero gradient. The design balances raw, impactful text with clean, often spacious layouts. Surfaces are predominantly white, punctuated by dark text and accents. Interactive elements maintain a tactile, rounded feel while staying visually understated, allowing the powerful headlines and dynamic hero to dominate.
colors:
  midnight-ink: "#181f1f"
  canvas-white: "#ffffff"
  fog-gray: "#d1d2d2"
  muted-slate: "#a3a5a5"
  graphite: "#000000"
  pristine-mist: "#eaf7f3"
  lagoon-violet: "#516fea"
  deep-mocha: "#1f3233"
  motion-blur-gradient: "#ffc240"
  alert-red: "#f56565"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 78px
    lineHeight: 1.1
    letterSpacing: -1.56px
spacing:
  cardRadius: 40px
  buttonRadius: 64px
  elementGap: 16px
  sectionGap: 180px
components:
  ghost-navigation-item:
    role: Subtle interactive navigation links
  filled-primary-button:
    role: High-priority call to action button
  outlined-accent-button:
    role: Secondary call to action button with brand accent
  soft-input-field:
    role: User input text field
  nav-button:
    role: Top navigation menu item
  hero-headline:
    role: Dominant page title in hero section
  content-headline:
    role: Section or detail page headlines
---

## Overview

**North Star:** Kinetic typographic canvases

Ragged Edge employs a sophisticated, high-contrast, black-on-white aesthetic that emphasizes bold typography and a striking, motion-blurred hero gradient. The design balances raw, impactful text with clean, often spacious layouts. Surfaces are predominantly white, punctuated by dark text and accents. Interactive elements maintain a tactile, rounded feel while staying visually understated, allowing the powerful headlines and dynamic hero to dominate.

### Do's

- Use Midnight Ink (#181f1f) for all primary text and dominant UI elements to maintain high contrast.
- Apply 64px border radius to all interactive buttons and navigation items for a consistent modern softness.
- Utilize ABCDiatypeExpanded-Bold for all major headlines to create an impactful and authoritative presence.
- Employ the Motion Blur Gradient as a background for hero sections or key visual statements to convey energy.
- Maintain a clear visual hierarchy by using Canvas White (#ffffff) as the dominant background color for content areas.
- Ensure generous spacing; use 180px between major sections and 16px for element gaps to create a comfortable density.
- Reserve Lagoon Violet (#516fea) exclusively for outlining secondary buttons or for subtle interactive accents.

### Don'ts

- Do not introduce new primary colors; the palette is intentionally limited to high-contrast neutrals with a singular accent.
- Avoid generic border radii; adhere strictly to 64px for buttons, 54px for inputs, and 40px for cards.
- Do not use highly saturated colors for large UI areas; color is used sparingly for impact and functionality.
- Do not center text bodies or long paragraphs; align left to maintain readability and structure.
- Avoid heavy shadows or complex elevation; the design relies on flat surfaces and high contrast.
- Do not use standard sans-serif fonts for headlines; always use ABCDiatypeExpanded-Bold for its distinctive character.
- Do not use pixel-perfect spacing for every element; rely on the base unit of 4px and established spacing tokens.

### Layout

The page primarily uses a full-bleed layout, particularly for its hero section where a dynamic gradient spans the entire viewport. Content sections feature a max-width, maintaining comfortable readability on wider screens. The rhythm alternates between stark white and occasional darker background sections, creating clear content blocks. Content is arranged in alternating text-left/image-right or stacked, centered compositions, emphasizing strong headlines. Vertical spacing is generous, particularly the 180px section gap, contributing to an airy, 'comfortable' density.

### Imagery

This site utilizes two distinct imagery styles: a dynamic, motion-blurred linear gradient for its hero and static, clean product photography within content sections. The gradient primarily serves as a decorative, atmospheric backdrop, conveying energy and movement. Product photography is typically contained, focuses on the object itself, and often features a minimal or white background to maintain clarity and focus, contrasting with the vibrant hero. Icons, if present, are likely subtle or integrated into the typographic style.
