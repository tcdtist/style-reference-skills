---
version: alpha
name: bokoko33.me
description: The bokoko33.me system presents a sparse, structured portfolio space, utilizing a near-monochrome palette with a single vibrant violet to delineate interactive elements and accents. Typography is compact and precise, favoring a monospace font that lends a technical, direct feel. Components are extremely lightweight, largely relying on subtle borders and minimal padding rather than heavy fills or shadows. The overall impression is one of uncluttered professional directness, where visual focus is drawn by clear information hierarchy and discrete points of color.
colors:
  canvas-fog: "#fafcfc"
  twilight-violet: "#5a2fc3"
  link-grape: "#6135d0"
  subtle-lavender: "#dad3f1"
  frost-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
spacing:
  elementGap: 21px
  sectionGap: 142px
components:
  header-navigation-link:
    role: Interactive link in the primary navigation.
  project-card-item:
    role: Container for individual project entries.
  project-url-link:
    role: External link to a project website.
  footer-navigation-link:
    role: Interactive link in the footer navigation.
---

## Overview

**North Star:** Monospace grid on a violet canvas

The bokoko33.me system presents a sparse, structured portfolio space, utilizing a near-monochrome palette with a single vibrant violet to delineate interactive elements and accents. Typography is compact and precise, favoring a monospace font that lends a technical, direct feel. Components are extremely lightweight, largely relying on subtle borders and minimal padding rather than heavy fills or shadows. The overall impression is one of uncluttered professional directness, where visual focus is drawn by clear information hierarchy and discrete points of color.

### Do's

- Use Twilight Violet (#5a2fc3) for all primary body text and headings.
- Apply Geist Mono for all typographic elements, maintaining normal letter-spacing.
- Wrap interactive links with a Link Grape (#6135d0) background and Frost White (#ffffff) text to signify action.
- Reinforce interactive states and element boundaries using 1px borders of Subtle Lavender (#dad3f1).
- Maintain generous vertical spacing between sections, using a sectionGap of 142px.
- Apply a 3.16px border-radius consistently to all interactive elements like links and buttons.
- Use Canvas Fog (#fafcfc) as the general page background color.

### Don'ts

- Avoid using any form of boxShadow or drop-shadow on elements; elevation is not part of this visual system.
- Do not introduce gradients; the system relies on solid color fills for all elements.
- Do not use highly saturated colors for decorative elements; restrict vibrant color primarily to interactive link backgrounds.
- Avoid heavy borders or solid fills for general cards; they should remain transparent with subtle borders.
- Do not vary letter-spacing for different type sizes; keep it at normal across the board.
- Do not use rounded corners beyond 5.27px; the system prefers subtle rounding or sharp edges.

### Layout

The page exhibits a content-contained model, with a visual maximum width (though not explicitly constrained by a single `pageMaxWidth` value, content appears to align centrally). The hero section is minimal, acting as a clear title area. Content areas follow a consistent vertical rhythm with significant spacing between sections (142px), creating a breathable, sparse composition. Projects are presented in a two-column grid-like structure, with text descriptions to the left and project visuals to the right. There are no alternating background bands, maintaining a consistent Canvas Fog background throughout. Navigation is a simple top-right minimalist link list, repeated in a footer.

### Imagery

The site's imagery consists primarily of product screenshots or contained visual representations of websites/projects, showcased within a visual frame. Images appear flat and contained without overlapping elements or raw edges. There are no full-bleed photographs or illustrations; the focus is on displaying the work itself in a structured, almost technical manner. Icons, if present, are minimal and likely outlined to match the system's lightweight aesthetic. Imagery serves primarily as direct content showcase rather than decorative atmosphere.
