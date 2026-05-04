---
version: alpha
name: Play
description: Play offers a content-first experience, prioritizing stark readability through a minimal achromatic palette. Text is the primary visual element, set against a pristine white background with discreet use of mid-gray for secondary headings. The design relies on direct typography and ample negative space to convey information, with a single muted blue acting as the only accent for interactive elements.
colors:
  text-primary: "#333333"
  text-secondary: "#8a8a8a"
  link-blue: "#0000ee"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.43
  heading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.95
spacing:
  elementGap: 10px
  sectionGap: 25px
---

## Overview

**North Star:** monochromatic text canvas

Play offers a content-first experience, prioritizing stark readability through a minimal achromatic palette. Text is the primary visual element, set against a pristine white background with discreet use of mid-gray for secondary headings. The design relies on direct typography and ample negative space to convey information, with a single muted blue acting as the only accent for interactive elements.

### Do's

- Prioritize text content against white(#FFFFFF) or near-white(#FDFDFD) backgrounds.
- Use Text Primary (#333333) for all primary headings and body paragraphs.
- Employ Text Secondary (#8a8a8a) for subtle subheadings or descriptive text that needs less emphasis.
- Maintain generous vertical spacing between text blocks, using 25px section gaps for major breaks and 10px for minor element spacing.
- Ensure all interactive links are styled using the browser default Link Blue (#0000ee) for immediate recognition.
- Keep borders for elements minimal, using Text Primary (#333333) for a subtle but present definition.

### Don'ts

- Avoid introducing new chromatic colors into the UI beyond the Link Blue without explicit brand direction.
- Do not use elevation or shadows; the design relies on flat, direct presentation.
- Refrain from using bold typography (#333333, weight 700) for standard body text if it's not a heading, as it disrupts the content-first flow.
- Do not introduce complex component structures; stick to essential text and link treatments.
- Avoid imagery or graphical elements that distract from the typographic focus.

### Layout

The page uses a maximum content width centered model, though the exact max-width is not defined in tokens. The hero section features a centered headline and subheading over a stark white background. Content sections flow vertically with consistent vertical spacing (25px for major breaks, 10px for minor elements). The layout is primarily a single column of text with links embedded, emphasizing readability and direct communication.

### Imagery

The site is entirely text-dominant, with no visible imagery. The visual language is pure UI, focusing on typography and content instead of graphics or photography. Icons, if present, would likely be minimal and outlined to maintain consistency.
