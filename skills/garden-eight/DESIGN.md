---
version: alpha
name: Garden Eight
description: Garden Eight embraces a monochromatic, stark aesthetic, pairing a velvety dark canvas with contrasting cream accents. Typography plays a central role, leveraging a traditional, elaborate serif for display elements and a modern sans-serif for functional text. The sparse use of color and ample negative space amplifies the visual impact of each element.
colors:
  midnight-ink: "#1e1f1f"
  soft-vanilla: "#dbd6d0"
  shadowed-text: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 215px
    lineHeight: 0.77
spacing:
  buttonRadius: 1440px
  elementGap: 4px
  sectionGap: 60px
components:
  ghost-navigation-button:
    role: Navigation and secondary actions
  pill-outline-button:
    role: Primary interactive element for calls to action
---

## Overview

**North Star:** velvety stark minimalism

Garden Eight embraces a monochromatic, stark aesthetic, pairing a velvety dark canvas with contrasting cream accents. Typography plays a central role, leveraging a traditional, elaborate serif for display elements and a modern sans-serif for functional text. The sparse use of color and ample negative space amplifies the visual impact of each element.

### Do's

- Use Midnight Ink (#1e1f1f) for all primary backgrounds and main body text to maintain the dark theme.
- Apply Soft Vanilla (#dbd6d0) for all interactive elements, secondary text, and borders to create contrast.
- Utilize the gunsan font at 215px with line-height 0.77 for all prominent display headlines, embodying an ornate aesthetic.
- Ensure all functional text, including navigation and body copy, uses the lausanne font in weights 200 or 400 for clarity.
- Employ a 1440px border-radius for all button-like elements to achieve a distinct pill-shaped appearance.
- Maintain generous horizontal padding of 180px for main content areas to create a spacious feel.
- Use 1px borders in Soft Vanilla (#dbd6d0) for subtle emphasis on interactive outlines.

### Don'ts

- Avoid using saturated colors other than Vivid Orange (#dc5648) as it is reserved for rare accent states.
- Do not use box-shadows or elevation effects; the design relies on flat surfaces and high contrast.
- Do not deviate from the defined lausanne (sans-serif) and gunsan (serif) fonts; no other typefaces are permitted.
- Avoid tight spacing between elements; maintain adequate elementGap (4px minimum) and sectionGap (60px) to preserve density.
- Do not use sharp corners on interactive components; ensure buttons always have a 1440px border-radius.
- Do not introduce gradients into UI elements; maintain a flat color palette.
- Avoid centering content horizontally beyond the main display headline; navigation and body text should align left.

### Layout

The page primarily uses a full-bleed layout, allowing background visuals to extend to the viewport edges. The hero section features a large, ornate display headline centered over the abstract 3D background. Content sections follow a consistent vertical rhythm with minimal visual dividers, flowing seamlessly. Navigation is a compact, right-aligned bar. Text is predominantly left-aligned, creating clear reading paths within the spacious design.

### Imagery

The site uses abstract, fluid 3D renders in a monochromatic, matte-cream palette. These visuals are atmospheric and sculptural, appearing as large, background accents that flow around and behind prominent text rather than serving as direct content or product showcases. The visuals are softly lit, giving them a ceramic or plaster-like quality, and contribute to the site's artful, minimalist tone. Icons are minimal, subtle, and outline-based, appearing with the same text color as surrounding elements.
