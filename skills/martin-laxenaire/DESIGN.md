---
version: alpha
name: Martin Laxenaire
description: This design system presents a playful yet structured aesthetic with high-contrast monochrome text layered over vibrant, organic color fields. It prioritizes bold typography and dynamic background elements, creating an engaging user experience without heavy-handed decoration. The system balances sharp, interactive elements with a distinct underlying fluidity for visual interest, using an 'experience point' metaphor to drive user engagement. Surfaces are bright and clean, allowing the expressive typography and occasional bursts of color to define the visual identity.
colors:
  canvas-white: "#ffffff"
  ink-black: "#121212"
  candy-pink: "#f9d9f7"
  playful-blue: "#3430ee"
  electric-purple: "#8000ff"
  teal-wave: "#008170"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 0.85
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 94px
    lineHeight: 0.85
  display:
    fontFamily: "system-ui"
    fontSize: 105px
    lineHeight: 0.75
spacing:
  buttonRadius: 16.22px, 20.93px
  elementGap: 21px
  sectionGap: 42px
components:
  header-navigation-link:
    role: Text-based navigation link in the header.
  ghost-button:
    role: Minimal interactive button, often for secondary actions or decorative information displays.
  pill-button-filled:
    role: Primary Call-to-action button or interactive element.
  pill-button-ghost:
    role: Secondary action or interactive label with a distinct rounded shape.
  progress-meter-horizontal:
    role: Interactive element indicating progress or state.
---

## Overview

**North Star:** Vibrant canvas, bold typography

This design system presents a playful yet structured aesthetic with high-contrast monochrome text layered over vibrant, organic color fields. It prioritizes bold typography and dynamic background elements, creating an engaging user experience without heavy-handed decoration. The system balances sharp, interactive elements with a distinct underlying fluidity for visual interest, using an 'experience point' metaphor to drive user engagement. Surfaces are bright and clean, allowing the expressive typography and occasional bursts of color to define the visual identity.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background, with Ink Black (#121212) for all text and UI outlines.
- Use MonumentExtended UltraBold for all primary headings and impactful statements at sizes 63px and above, ensuring tight line heights (0.75-0.85) for visual density.
- Employ the rounded pill shape with 16.22px or 20.93px radius for all interactive buttons and active states.
- Introduce Candy Pink (#f9d9f7) as a background fill for content sections to create visual rhythm and a playful atmosphere, ensuring Ink Black text maintains AAA contrast.
- Maintain comfortable density with an `elementGap` of 21px and a `sectionGap` of 42px for consistent vertical spacing.
- Apply Ink Black (#121212) as a 1px border for all interactive elements and surfaces that require definition against the Canvas White background.
- Use 'Swiss' at 16-21px for all body copy and descriptive text, prioritizing readability.

### Don'ts

- Avoid using multiple chromatic colors in active UI elements; reserve vibrant colors mainly for decorative backgrounds or illustrations.
- Do not deviate from the specified MonumentExtended weights and line heights for headings; their distinct visual impact relies on these precise values.
- Do not use subtle variations of gray for additional neutrals; stick to Canvas White and Ink Black for core UI elements.
- Avoid using drop shadows for elevation; rely on solid borders and background color changes for surface distinction.
- Do not introduce square or minimally rounded corners (e.g., 4px radius) for interactive components; maintain the distinct pill-like radius (16.22px or 20.93px).
- Do not use generic system fonts for body text; always substitute with 'Swiss' or its designated replacement 'Inter'.
- Avoid large negative letter spacing outside of the defined typography scale; maintain normal letter spacing for most text.

### Layout

The page employs a max-width layout of 1440px, with content centered. The hero section is full-bleed, featuring a large, dynamically illustrated background against which a central, angled headline sits. Sections alternate between Canvas White and Candy Pink backgrounds, creating a clear vertical rhythm. Content often stacks vertically or uses alternating text and graphic layout in two columns. The main navigation is a minimal, top-left brand identifier with a progress indicator in the top-right. The overall density is comfortable, ensuring sufficient negative space around elements.

### Imagery

The site uses a highly stylized, abstract illustration language for its hero section, characterized by organic, wavy shapes filled with vibrant, contrasting colors (Electric Purple, Playful Blue, Teal Wave, Candy Pink). This creates a dynamic, high-energy backdrop for bold, impactful typography. Imagery is primarily decorative and atmospheric, visually reinforcing the 'playful' aspect of the brand. There is no visible photography or stock imagery, focusing instead on bespoke graphic elements. Icons, such as '0% complete', are simple outlined or filled monochrome, adhering to the Ink Black theme.
