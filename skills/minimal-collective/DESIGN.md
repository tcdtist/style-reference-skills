---
version: alpha
name: Minimal Collective
description: Minimal Collective employs a muted, structured dark-mode aesthetic, reminiscent of an underground art gallery's concrete walls at dusk. The design prioritizes clear information hierarchy over visual flair, using a restricted achromatic palette with stark black as the dominant background and white for primary text. Typography is a focal point, with a custom geometric sans-serif font exhibiting varied, precise letter-spacing to create distinct visual rhythm. Layout is ordered and grid-constrained, with interactions subtly defined by slight shifts in background depth and crisp borders rather than vibrant color accents.
colors:
  void-black: "#000000"
  graphite: "#5a5a5a"
  parchment-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.02px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: -0.029px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.032px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: -0.037px
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.2
    letterSpacing: -0.044px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.044px
  display:
    fontFamily: "system-ui"
    fontSize: 77px
    lineHeight: 0.9
    letterSpacing: -0.056px
spacing:
  elementGap: 14px
  sectionGap: 144px
components:
  header-navigation-link:
    role: Primary navigation links
  main-heading:
    role: Hero and major section titles
  project-card-link:
    role: Interactive content blocks for projects/articles
  badge-text-only:
    role: Categorization and metadata labels within content
  badge-outlined:
    role: Categorization and metadata labels with visual distinction
  text-input-underlined:
    role: Capturing user input
---

## Overview

**North Star:** Gallery grit, monochromatic precision.

Minimal Collective employs a muted, structured dark-mode aesthetic, reminiscent of an underground art gallery's concrete walls at dusk. The design prioritizes clear information hierarchy over visual flair, using a restricted achromatic palette with stark black as the dominant background and white for primary text. Typography is a focal point, with a custom geometric sans-serif font exhibiting varied, precise letter-spacing to create distinct visual rhythm. Layout is ordered and grid-constrained, with interactions subtly defined by slight shifts in background depth and crisp borders rather than vibrant color accents.

### Do's

- Prioritize Void Black (#000000) for all significant backgrounds and borders to maintain the dark, structured aesthetic.
- Use Parchment White (#ffffff) exclusively for primary text and high-contrast interactive states against dark backgrounds.
- Apply precise letter-spacing values to PolySans as defined in the typography section, ensuring appropriate visual density for each text size.
- Utilize Graphite (#5a5a5a) for secondary information, input text, and subtle background differentiation on interactive elements.
- Maintain a subtle, comfortable density in layouts, especially between interactive elements, using `elementGap: 14px` and `sectionGap: 144px`.
- Incorporate a consistent border radius of 4.5px for all card-like elements, badges, and interactive components.
- Define interactive states with border changes and text color shifts using Parchment White, rather than introducing new chromatic colors.

### Don'ts

- Avoid introducing saturated colors; the palette is strictly achromatic, with any color appearing only as part of content imagery.
- Do not use heavy shadows or gradients for elevation; rely on subtle background color shifts (e.g., Void Black to Graphite) and crisp borders.
- Do not use generic font sizes or letter-spacing values; adhere to the specific PolySans scale and letter-spacing definitions.
- Avoid large, rounded button styles; interactive elements should favor minimal borders, subtle background changes, or smaller radii like 4.5px.
- Do not break the grid alignment; maintain strict vertical and horizontal rhythm with defined spacing tokens.
- Refrain from using bold or heavier font weights; PolySans 400 is the only weight available, focusing on form and spacing for emphasis.
- Avoid overly complex layouts or decorative flourishes; maintain the 'gallery grit' aesthetic with clear, functional arrangements.

### Layout

The page primarily uses a full-bleed layout, particularly for the hero section with a centered headline against a dark background overlaid with geometric grid lines. Content sections often appear in distinct vertical bands, though seamless transitions are common. A prominent pattern is the division into two main columns, often featuring text on one side and an image or content block on the other, or a symmetric grid of project cards. Navigation is handled by a minimal fixed header bar at the top, a hamburger menu for mobile/secondary nav items, and a persistent footer at the bottom. The section rhythm is largely consistent, with ample vertical spacing like `sectionGap: 144px` creating breathing room between major content blocks.

### Imagery

This site features a blend of photography and abstract graphics. Photography is often presented as raw crops or within defined boundaries, sometimes with a desaturated or muted color treatment to blend with the achromatic theme. Abstract graphics primarily consist of geometric patterns, often line-based like the large overlapping arcs in the hero section, contributing to a technical, structured feel. Icons, if present, are minimal outlined versions. Imagery serves primarily to set atmospheric mood or to showcase specific content (e.g., album art, event photos) within a structured grid, rather than for decorative excess. The density is image-heavy within content modules, but the overall page avoids full-bleed hero images, favoring a structured UI.
