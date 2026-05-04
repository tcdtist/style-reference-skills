---
version: alpha
name: Sing-sing
description: Sing-Sing's visual system evokes a playful yet sophisticated modernity, built on a sparse layout and bold, contrasting color. A vibrant, sun-drenched yellow serves as the expansive canvas, punctuated by sharp black typography and a singular teal accent. The design feels like a curated exhibition space, where content is deliberately placed and given ample room to breathe, suggesting value through restraint and striking color choices.
colors:
  amber-canvas: "#fcd579"
  midnight-ink: "#171717"
  jade-accent: "#81d6b9"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.15
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.15
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 147px
    lineHeight: 1
    letterSpacing: -3.675px
spacing:
  elementGap: 5px
  sectionGap: 35px
components:
  primary-navigation-link-default:
    role: Interactive text link within the main navigation.
  navigation-divider-active-state:
    role: Subtle visual indicator for active or highlighted navigation items.
  decorative-headline:
    role: Large, attention-grabbing text for main titles or section headers.
  body-text-block-untitled-sans:
    role: Standard body copy for general information.
  body-text-block-signifier:
    role: Secondary body copy or descriptive text, often with a more traditional feel.
---

## Overview

**North Star:** sunny minimal exhibition

Sing-Sing's visual system evokes a playful yet sophisticated modernity, built on a sparse layout and bold, contrasting color. A vibrant, sun-drenched yellow serves as the expansive canvas, punctuated by sharp black typography and a singular teal accent. The design feels like a curated exhibition space, where content is deliberately placed and given ample room to breathe, suggesting value through restraint and striking color choices.

### Do's

- Always use Amber Canvas (#fcd579) as the dominant background color for pages and sections.
- Apply Midnight Ink (#171717) for all primary text, headings, and strong UI boundaries.
- Reserve Jade Accent (#81d6b9) exclusively for active navigation states, borders that indicate interaction, or limited decorative stripes.
- Utilize Untitled Sans for all primary textual content, varying weights (400, 700) and sizes (16px-147px) to establish hierarchy.
- Implement tight letter-spacing for large headlines (-0.025em at 147px) to maintain visual density.
- Maintain a compact element spacing of 5px between closely related items, and generous section spacing of 35px for visual breathing room.

### Don'ts

- Do not introduce new chromatic colors; stick to Amber Canvas, Midnight Ink, and Jade Accent.
- Avoid using drop shadows or complex elevation; the design relies on stark contrast and flat surfaces.
- Do not use letter spacing on Signifier font; it should always be 'normal'.
- Avoid excessive imagery; when images are used, treat them as carefully composed elements within the layout.
- Do not use rounded corners; all UI elements should maintain sharp, 0px radii.
- Do not deviate from the specified font families; avoid system defaults or alternative sans-serif/serif fonts.

### Layout

The page uses a full-bleed layout, where the Amber Canvas background extends edge-to-edge. Content appears to be centered within this expansive space, often in simple, large blocks. The hero section features a very large, centered headline directly on the colored background. Section rhythm is minimal, relying on clear visual breaks rather than explicit dividers, allowing the large headlines and images to dictate the flow. The main body content tends to be single-column or two-column sections, with text and imagery given ample individual space, creating an airy, uncrowded feel. Navigation is a minimalist top-right 'Index' link, opening into an overlay or expanded menu.

### Imagery

Imagery primarily consists of curated, somewhat abstracted artistic photographs or product shots, often showcasing interesting textures or compositions rather than explicit narratives. They are treated as embedded content blocks, flush with the Amber Canvas background and containing their own visual interest. There is a strong sense of a contained, editorial aesthetic. Icons are not a prominent feature, suggesting pure UI over symbolic graphics.
