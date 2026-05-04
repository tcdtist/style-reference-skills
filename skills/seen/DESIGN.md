---
version: alpha
name: SEEN
description: SEEN's design system embraces a playful, otherworldly aesthetic where vibrant colors are central to its identity. The core visual language is an expressive, gradient-rich fantasy with rounded, organic forms and bold, custom typography. Color is used for soft background washes and as a distinct outline for interactive elements, creating an inviting and whimsical user experience.
colors:
  dreamdust-gradient: "#d49ae2"
  bubblegum-outline: "#683c72"
  twilight-mist: "#f7d1ff"
  sunrise-glow: "#f7ae47"
  grape-vine: "#a35ab3"
  midnight-vignette: "#390b5d"
  ink: "#000000"
spacing:
  buttonRadius: 32px
  elementGap: 8px
  sectionGap: 64px
components:
  outlined-button:
    role: Primary interactive element.
---

## Overview

**North Star:** Vibrant dreamscape playground

SEEN's design system embraces a playful, otherworldly aesthetic where vibrant colors are central to its identity. The core visual language is an expressive, gradient-rich fantasy with rounded, organic forms and bold, custom typography. Color is used for soft background washes and as a distinct outline for interactive elements, creating an inviting and whimsical user experience.

### Do's

- Always use 'Dreamdust Gradient' (#d49ae2) as the base background, allowing for subtle color shifts and depth.
- Apply 'Bubblegum Outline' (#683c72) exclusively for interactive elements like button borders, icons, and button text.
- Use 'Ink' (#000000) for all primary text content to ensure optimal legibility against gradient backgrounds.
- Maintain a consistent 32px border-radius for all interactive components such as buttons to reinforce the soft, organic aesthetic.
- Incorporate `BB Sans` at 16px weight 400 for body text and 14px for smaller captions and labels, avoiding other font families.
- Implement an 8px base unit for all element spacing, with elements like buttons using 16px horizontal padding.

### Don'ts

- Do not use solid fills for primary backgrounds; always leverage the 'Dreamdust Gradient'.
- Avoid using 'Bubblegum Outline' (#683c72) as a solid background fill for any interactive element.
- Do not use highly saturated colors for large areas of text; restrict 'Ink' (#000000) for body and headline text.
- Avoid sharp or low border-radius values; all elements should adhere to the rounded and soft aesthetic.
- Do not introduce additional font families or weights outside of BB Sans 400 and 500.
- Do not use values other than 8px or 16px for element padding and spacing unless explicitly defined for a specific component.

### Layout

The page appears to be full-bleed, with no defined maximum width, utilizing a hero section that covers the entire viewport. The main content (the 'seen' typography) is centrally aligned and dominant. The layout prioritizes a single, compelling visual statement, implying subsequent content sections would follow a similar, spacious, and visually rich pattern without hard section dividers.

### Imagery

The site heavily features whimsical, 3D rendered surreal objects in vibrant, pastel colors with soft, glowing highlights and starry overlay effects. These are treated as full-bleed, atmospheric backdrops rather than contained elements, creating an immersive, dreamlike environment. The primary visual focal point is custom-rendered, blob-like typography with emotive eyes, making the text itself an expressive visual element. The imagery is purely decorative and atmospheric, setting a unique brand mood rather than conveying literal information.
