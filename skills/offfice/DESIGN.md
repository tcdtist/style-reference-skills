---
version: alpha
name: OFFFICE :
description: This design system evokes a moody, high-end gallery experience where objects are presented with sculptural focus. The stark black background and minimal typographic hierarchy create a sophisticated, almost reverent atmosphere, allowing the furniture pieces to command attention through their form and subtle shading. Predominantly large, custom typography dominates the layout, serving as both content and graphic element, making the interface feel less like a website and more like a curated exhibition space. The limited interactivity is precisely indicated by subtle text changes, maintaining an air of exclusivity and quiet contemplation.
colors:
  void-black: "#111111"
  exhibition-white: "#fefefe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.56
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 216px
    lineHeight: 0.8
spacing:
  elementGap: 8px
  sectionGap: 64px
components:
  studio-tagline-block:
    role: 
  project-archive-list:
    role: 
  project-detail-navigation-bar:
    role: 
  navigation-link:
    role: Interactive text link
  hero-headline:
    role: Dominant page title
  section-heading:
    role: Main section titles
  body-text:
    role: Standard paragraph text
  small-detail-text:
    role: Metadata or secondary information
  project-title-list:
    role: Items in a project list
---

## Overview

**North Star:** Black Box Gallery; objects artfully framed within a deep, dark void, highlighted by stark text.

This design system evokes a moody, high-end gallery experience where objects are presented with sculptural focus. The stark black background and minimal typographic hierarchy create a sophisticated, almost reverent atmosphere, allowing the furniture pieces to command attention through their form and subtle shading. Predominantly large, custom typography dominates the layout, serving as both content and graphic element, making the interface feel less like a website and more like a curated exhibition space. The limited interactivity is precisely indicated by subtle text changes, maintaining an air of exclusivity and quiet contemplation.

### Do's

- Prioritize Void Black (#111111) for all backgrounds to maintain visual depth and focus.
- Use Exhibition White (#fefefe) exclusively for all text and interactive elements to maintain high contrast and sophistication.
- Employ the ak font family for all typographic elements, leveraging its wide character spacing and varied optical sizes.
- Utilize ak 216px (weight 400, lineHeight 0.80) as a dominant graphic element for hero sections.
- Maintain strict typographic hierarchy by only using ak 58px, weight 400, for major section headings.
- Ensure all interactive text elements use ak 12px, weight 400, in Exhibition White, implying interactivity through context rather than overt styling (like underlines or strong color changes).

### Don'ts

- Do not introduce any additional background colors; maintain the pure Void Black (#111111) canvas.
- Avoid using drop shadows or excessive borders; depth is established through contrasting type sizes and element placement.
- Do not use highly saturated colors for accents; the aesthetic relies on a monochromatic palette with subtle emphasis.
- Do not apply rounded corners to any UI elements; all corners should be sharp 0px radius.
- Avoid using multiple font families beyond 'ak' and 'gs'; consistency in typography is crucial.
- Do not use generic button styles; interactivity is conveyed through text links and subtle text transformations.

### Layout

The page maintains a full-bleed layout, primarily dark-themed, without a fixed `pageMaxWidth`. The hero section features oversized, visually impactful typography laid over a central 3D product render. Content sections are primarily stacked vertically with generous `sectionGap`s, often presenting text beside or above the product imagery. Navigation is a minimal top bar. The overall impression is one of spaciousness and deliberate presentation, with elements given ample room to breathe within the dark canvas.

### Imagery

The visual language is characterized by high-fidelity, monochromatic 3D renders of furniture pieces. These images are presented as central, hero elements, often against the deep Void Black background, giving them a sculptural, art-piece quality. They are typically contained within their compositional space without masks or overlapping, serving an explanatory and aesthetic role by showcasing product forms. The density is image-heavy in sections, with large product visuals dominating the screen.
