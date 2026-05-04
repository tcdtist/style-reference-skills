---
version: alpha
name: Huy Phan
description: This design system projects a minimalist, architectural elegance, akin to a meticulously curated art gallery catalog. The entire canvas is dominated by near-white surfaces, punctuated by sharp, precise typography. The interplay between large, airy negative space and understated text creates an atmosphere of intellectual sophistication, privileging content and clarity through extreme visual restraint. Typography, particularly the highly varied letter-spacing and custom fonts, is the primary expressive tool.
colors:
  canvas-white: "#ebebeb"
  charcoal-text: "#1c1c1c"
  ink-black: "#000000"
  deep-graphite: "#232323"
  muted-gray: "#878787"
  dark-overlay: "#090909"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.1
    letterSpacing: -0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.1
    letterSpacing: -0.45px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 0.97
    letterSpacing: -5.4px
  display:
    fontFamily: "system-ui"
    fontSize: 225px
    lineHeight: 0.8
    letterSpacing: -11.25px
spacing:
  elementGap: 2px
  sectionGap: 40px
components:
  navigation-link-bar:
    role: 
  display-heading-block:
    role: 
  footer-copyright-bar:
    role: 
  navigation-link:
    role: Interactive element
  footer-copyright-text:
    role: Meta-information
  body-text-standard:
    role: Primary content
  display-heading-harmond:
    role: Key visual headings
  display-heading-roobert:
    role: Large visual headings
---

## Overview

**North Star:** Minimalist gallery wall. Expansive white space showcasing precise typography.

This design system projects a minimalist, architectural elegance, akin to a meticulously curated art gallery catalog. The entire canvas is dominated by near-white surfaces, punctuated by sharp, precise typography. The interplay between large, airy negative space and understated text creates an atmosphere of intellectual sophistication, privileging content and clarity through extreme visual restraint. Typography, particularly the highly varied letter-spacing and custom fonts, is the primary expressive tool.

### Do's

- Prioritize Canvas White (#ebebeb) for all primary backgrounds to maintain the airy, spacious aesthetic.
- Use Roobert with variable letter-spacing for all navigation, body text, and most headings. Ensure letter-spacing values like -0.05em at 225px and -0.01em at 45px are applied correctly.
- Apply Charcoal Text (#1c1c1c), Ink Black (#000000), or Deep Graphite (#232323) for all primary text elements to ensure high contrast.
- Employ Harmond 400 at 180px with -0.03em letter-spacing for singular, impactful display elements.
- Utilize a baseline `elementGap` of 2px for granular spacing adjustments between inline elements.
- Maintain the generous `sectionGap` of 40px to create significant visual breathing room between content blocks.

### Don'ts

- Avoid using saturated colors; the palette is strictly achromatic to maintain visual precision.
- Do not introduce shadows or complex border treatments; the aesthetic relies on flat surfaces and clean lines.
- Refrain from deviating from the defined `lineHeight` and `letterSpacing` values for typography as they are critical to the system's character.
- Do not use generic system fonts; Roobert, Roxborough CF, and Harmond are core to the brand's typographic identity.
- Avoid dense, information-heavy sections; prioritize whitespace and singular focal points.
- Do not use radius values other than the specified 10px, or 0px for sharp edges.

### Layout

The layout is full-bleed, but content often feels subtly centered due to the extensive use of white space around primary text blocks. The hero section is characterized by extremely large, single-character or short-word headings, dominating the screen. Subsequent sections appear as distinct, highly separated blocks of content, often with text-dominant compositions. Navigation is a consistent top bar. The overall impression is one of generous vertical spacing between elements and sections, creating an exceptionally sparse and breathable rhythm across the page.

### Imagery

The site primarily uses UI elements and typography to convey its message, with minimal to no photography or illustrations visible. Any imagery would likely be integrated as product screenshots or abstract graphics, treated with clean, sharp edges, and framed by ample negative space. The visual emphasis is on text as art and information, suggesting a focus on product or design work where the UI itself is the primary visual. The 'Loading...' text is the only apparent graphic, suggesting a purely functional and content-focused approach.

### Elevation

The design intentionally avoids shadows for elevation. The flat aesthetic maintains a clean, architectural purity, emphasizing typography and precise negative space over layered visual effects.
