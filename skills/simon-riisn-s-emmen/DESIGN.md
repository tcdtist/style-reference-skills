---
version: alpha
name: Simon Riisnæs Emmen
description: Simon Riisnæs Emmen's design system is an unapologetic exploration of high-contrast typography and bold, simple color blocking. It uses stark black text on primary colored surfaces to create an assertive, almost confrontational visual impact. Elements are defined by strong horizontal and vertical lines, with extremely rounded shapes providing a playful counterpoint to the otherwise rigid structure. The overall impression is one of directness and creative confidence, relying on fundamental design principles rather than elaborate ornamentation.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  sunset-blush: "#fd8878"
  electric-yellow: "#e8fe04"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.44
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 67px
    lineHeight: 0.9
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 173px
    lineHeight: 0.9
    letterSpacing: -1.5px
spacing:
  elementGap: 6px
  sectionGap: 95px
components:
  header-navigation-link:
    role: Interactive text link in the page header.
  main-navigation-list-item:
    role: Interactive element for the main content list, indicating projects or articles.
  headline-display-block-words:
    role: Primary attention-grabbing headline element, visually distinct product name.
  headline-display-block-designed:
    role: Secondary attention-grabbing headline element, visually distinct product noun.
---

## Overview

**North Star:** Vibrant billboard minimalism.

Simon Riisnæs Emmen's design system is an unapologetic exploration of high-contrast typography and bold, simple color blocking. It uses stark black text on primary colored surfaces to create an assertive, almost confrontational visual impact. Elements are defined by strong horizontal and vertical lines, with extremely rounded shapes providing a playful counterpoint to the otherwise rigid structure. The overall impression is one of directness and creative confidence, relying on fundamental design principles rather than elaborate ornamentation.

### Do's

- Prioritize high contrast: Always render #000000 text on Canvas White (#ffffff) or Electric Yellow (#e8fe04) / Sunset Blush (#fd8878) backgrounds.
- Use Tex Gyre Heros for all headlines and prominent text, varying weight between 300 and 400 based on emphasis.
- Employ Editorial New only for supportive, descriptive text or small footnotes, always at weight 400.
- Apply the extreme 720px border-radius only to large, block-level background elements, creating a 'pill' shape.
- Define interactive elements with a 1px solid #000000 border on hover, ensuring clear visual feedback.
- Maintain generous vertical spacing with 95px between major sections and 253px for long list item separations, creating a spacious, relaxed rhythm.
- Use distinct, vibrant color blocks (Sunset Blush or Electric Yellow) to highlight key words or section titles.

### Don'ts

- Avoid using multiple font families for headlines or primary content; stick to Tex Gyre Heros for impact.
- Do not introduce gradients or shadows; the surface treatment is purposefully flat and stark.
- Do not deviate from the core monochromatic palette with additional chromatic colors, beyond Sunset Blush and Electric Yellow.
- Do not use small, subtle radii; either use the extreme 720px or keep corners sharp.
- Avoid decorative imagery or complex illustrations; the visual system is text-dominant and stark.
- Do not center text unless it's a primary display block; content generally aligns left.
- Refrain from using lightweight fonts for small text that needs to be highly readable; save fine weights for large display, and use Editorial New 400 for body.

### Layout

The page exhibits a full-bleed layout, taking the full width of the viewport without a max-width container, though internal padding defines content areas. The hero section features large, colorful 'pill-shaped' blocks with centered, oversized text. Subsequent sections present content as a vertically stacked list of items, each separated by a prominent horizontal rule and generous padding. There's a strong emphasis on consistent vertical rhythm and clear visual separation between content blocks, with text generally aligned to the left within the page's implied content area.

### Imagery

This design system primarily relies on pure UI and typography; there is no discernible visual language for photography or complex illustrations. Iconography (if present) is expected to be simple, outlined, and monochromatic (#000000 on #ffffff). The content itself seems to be the primary visual element, often presented as bold text blocks within colored shapes or as simple list items.
