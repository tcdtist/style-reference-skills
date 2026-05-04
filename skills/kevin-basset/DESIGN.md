---
version: alpha
name: Kevin Basset
description: The Kevin Basset site adopts a 'notebook scribble' aesthetic, reminiscent of a student's hand-drawn notes on lined paper. The design is characterized by its light, monochrome palette, with all elements rendered as if sketched in black ink. Interactive elements, such as links, appear as light gray boxes, maintaining the paper-like texture. Handwriting-style typography reinforces this informal, personal, and childlike visual identity.
colors:
  ink-black: "#000000"
  paper-white: "#ffffff"
  pencil-sketch: "#ececec"
  notebook-line-teal: "#1d97b8"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 1px
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.2
    letterSpacing: 3.15px
spacing:
  elementGap: 20px
  sectionGap: 25px
components:
  sketched-link-button-default-inactive:
    role: Primary interactive element for all links on the site.
  sketched-link-button-hover:
    role: Visual feedback for interactive links.
---

## Overview

**North Star:** ink-scribbled notebook paper

The Kevin Basset site adopts a 'notebook scribble' aesthetic, reminiscent of a student's hand-drawn notes on lined paper. The design is characterized by its light, monochrome palette, with all elements rendered as if sketched in black ink. Interactive elements, such as links, appear as light gray boxes, maintaining the paper-like texture. Handwriting-style typography reinforces this informal, personal, and childlike visual identity.

### Do's

- Use Ink Black (#000000) for all text, borders, and hand-drawn visual elements.
- Set the primary page background to Paper White (#ffffff) to simulate notebook paper.
- Apply Pencil Sketch (#ececec) as the background color for interactive elements on hover.
- Maintain the system sans-serif font across all text, emphasizing a hand-drawn yet legible feel.
- Ensure all interactive links have a visible Ink Black border and Paper White background by default.
- Integrate Notebook Line Teal (#1d97b8) only as decorative ruled lines, not for primary UI elements.

### Don'ts

- Avoid using any saturated colors for functional UI elements; the palette is strictly monochrome with a single subtle accent.
- Do not introduce rounded corners; elements should maintain sharp, cut-paper edges.
- Refrain from using shadows or gradients on interactive elements, as this would break the flat, hand-drawn aesthetic.
- Do not use multiple font families; stick to the single system font to maintain typographic consistency.
- Avoid typical button styling like strong background fills or complex hover animations that would distract from the sketched feel.
- Do not vary line heights from the specified 1.2 across different type sizes.

### Layout

The page uses a centered, max-width contained layout, though no specific max-width is provided, suggesting adaptability. The hero section features a prominent centered headline/name with a hand-drawn avatar. Content is primarily a vertical stack of uniform 'sketched link buttons,' each occupying its own horizontal band. There are no complex grid layouts or alternating section patterns; the rhythm is consistent and linear, like a list on a piece of paper.

### Imagery

The site predominantly uses hand-drawn, black-ink illustrations and icons that mimic a quirky, child-like scribble aesthetic. There are no photographs or complex graphics. Visuals are contained and appear outlined, often with a slight wobble to convey an imperfect, unpolished feel. They serve both decorative and explanatory roles, like the robot graphic or the avatar sketch. Imagery density is moderate, with illustrations breaking up text blocks and adding character.
