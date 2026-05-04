---
version: alpha
name: The Pop Manifesto
description: The Pop Manifesto's visual language is a bold, high-contrast digital zine. It features stark black typography against vibrant, saturated backgrounds, often utilizing a single dominant color per section. The typography leans into a strong, editorial aesthetic with precise tracking and a clear hierarchy. Components are minimal, relying on color blocking and crisp text to define interactions rather than subtle shadows or rounded forms.
colors:
  midnight-ink: "#000000"
  neon-pink: "#ff29f1"
  electric-blue: "#287aea"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.2
spacing:
  elementGap: 20px
components:
  section-headline:
    role: Main content headings for distinct page sections.
  navigation-link:
    role: Top-level navigation items.
  image-card:
    role: Displays photographic content with prominent captions.
  interactive-link-block:
    role: Clickable blocks usually containing descriptive text.
  sub-navigation-link:
    role: Secondary navigation or category links.
---

## Overview

**North Star:** digital zine, high contrast

The Pop Manifesto's visual language is a bold, high-contrast digital zine. It features stark black typography against vibrant, saturated backgrounds, often utilizing a single dominant color per section. The typography leans into a strong, editorial aesthetic with precise tracking and a clear hierarchy. Components are minimal, relying on color blocking and crisp text to define interactions rather than subtle shadows or rounded forms.

### Do's

- Use Midnight Ink (#000000) for all text and interactive borders to ensure maximum contrast.
- Implement Roobert 400 as the sole typeface, varying size and line height for hierarchy.
- Employ highly saturated, single-color backgrounds like Neon Pink (#ff29f1) or Electric Blue (#287aea) for distinct content blocks, ensuring visual separation.
- Maintain hard, 0px border-radius for all elements, including images and interactive areas.
- Utilize 291px for vertical section gaps to create generous negative space and a spacious feel.
- Apply 20px as the standard horizontal and vertical gap between related elements.
- Assume all interactivity is communicated through text link styles or color block background changes, not subtle hover states or shadows.

### Don'ts

- Do not use subtle background gradients or textures; stick to flat, vibrant color blocks.
- Avoid softer, desaturated or pastel colors, which would dilute the high-contrast aesthetic.
- Do not introduce rounded corners; all shapes should be sharp 0px radius to preserve the crisp, editorial look.
- Refrain from using drop shadows or complex elevation schemes; rely on color blocking for visual hierarchy.
- Do not use varied typography weights; Roobert 400 is the only weight. Change text size and line height for hierarchy.
- Do not use excessive white space within content blocks; reserve large spacing values for section separation only.
- Do not introduce decorative icons unless they are bold, single-color, and contribute explicitly to the high-contrast identity.

### Layout

The page uses a full-bleed layout, where content sections stretch the full viewport width. The hero section features a prominent, centered headline over a vibrant background. Content frequently uses a multi-column grid, prominently a 3-column layout for images and associated text. Sections are separated by large vertical gaps (291px) and distinct, solid color changes, creating a strong, block-like rhythm. Navigation is minimal, likely a fixed top bar or simple links within the header and footer.

### Imagery

This site features a mix of photography styles: studio portraits with bold, single-color backdrops (like electric blue), candid lifestyle shots, and black-and-white portraits. Images are mostly contained within rectangular frames, with sharp edges, functioning as content rather than decorative backgrounds. They are high-density, taking up significant visual space to act as focal points.
