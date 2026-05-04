---
version: alpha
name: Hugo Ferradas
description: Hugo Ferradas' design system establishes a stark, high-contrast dark canvas for showcasing work with direct, minimalist typography. Functionality is expressed through subtle interactions rather than heavy-handed styling. The visual experience is anchored by pure black surfaces and crisp white text, providing a focused, gallery-like setting where content takes precedence over decorative elements.
colors:
  midnight: "#000000"
  ghost-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.21
  body-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.21
  body:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.21
spacing:
  elementGap: 20px
  sectionGap: 115px
components:
  text-link:
    role: Interactive text element
  plain-content-card:
    role: Content container for project listings
---

## Overview

**North Star:** Black canvas, white inscription.

Hugo Ferradas' design system establishes a stark, high-contrast dark canvas for showcasing work with direct, minimalist typography. Functionality is expressed through subtle interactions rather than heavy-handed styling. The visual experience is anchored by pure black surfaces and crisp white text, providing a focused, gallery-like setting where content takes precedence over decorative elements.

### Do's

- Maintain a stark, high-contrast palette using Midnight (#000000) for backgrounds and Ghost White (#ffffff) for all text and interactive elements.
- Utilize Helvetica Neue across all typography roles, favoring weights 400 and 500 for clear communication.
- Apply a default border-radius of 5px to any element requiring slight softening, such as image containers.
- Implement the 20px element gap for consistent spacing between vertical design elements.
- Use 1px Ghost White (#ffffff) for all outline borders and interactive underlines to maintain visual economy and highlight interaction.
- Ensure large vertical separations between main sections, with a minimum of 115px section gap.
- Prioritize a transparent background and no explicit styling for content cards (e.g., project preview cards) to allow the primary background to show through, emphasizing content over container.

### Don'ts

- Avoid using any colors other than Midnight and Ghost White for primary UI elements; color is reserved for content or specific branding within projects.
- Do not introduce heavy shadows or complex gradients; rely on contrast and spacing for visual hierarchy.
- Refrain from using varied typography families or weights outside of Helvetica Neue 400/500; consistency is key to the system's directness.
- Do not add extra padding or explicit backgrounds to cards; they should maintain a frictionless presentation against the main canvas.
- Avoid decorative imagery in the UI itself; the focus is on project work and minimalist interactive elements.

### Layout

The page implements a full-bleed layout, primarily dark-mode, with content sections centered. The hero section features a large, centered headline over a dark background. Subsequent sections maintain consistent vertical spacing, often with text-dominant blocks. The structure suggests a clear hierarchy designed to guide the eye through portfolio pieces, alternating between large visual content and concise textual descriptions. Navigation is minimal, presenting as plain text links in the header and footer.

### Imagery

This system primarily features large, full-bleed product imagery and photography as the core content. Images appear contained at 5px border-radius, often spanning the full content width. The treatment implies a gallery-like showcase, allowing project visuals to dominate the layout. Icons, when present, are minimalist, outlined, and inherit the Ghost White color, serving purely functional roles.
