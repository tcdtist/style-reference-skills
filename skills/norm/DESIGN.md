---
version: alpha
name: Norm
description: Norm employs a utilitarian, minimalist visual language, focusing on stark contrasts and direct communication. The design uses a limited achromatic palette, relying heavily on pure black text on clean white surfaces. Typography is a central element, with commanding display-sized text setting a precise, unornamented tone. Components are stripped down, favoring simple outlined forms and large, soft radii to provide subtle tactile warmth against the otherwise stark visual field.
colors:
  canvas-white: "#ffffff"
  pitch-black: "#000000"
  near-black: "#282828"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.56
    letterSpacing: -0.816px
spacing:
  buttonRadius: 12px
  elementGap: 16px
  sectionGap: 64px
components:
  ghost-button-large:
    role: Secondary calls to action and navigational links within content blocks. Its transparent background and thick border suggest a less intrusive action.
  ghost-button-small:
    role: Utility links in header navigation. A compact, outlined button that provides clear interaction without visual dominance.
  ghost-button-tag:
    role: Informational tags or very subtle calls to action within header. The extreme radius makes it visually distinct.
  section-divider:
    role: Horizontal rule for content separation. Provides visual structure between sections.
---

## Overview

**North Star:** Architectural blueprint on white marble. Precision, clean lines, and stark mono-palette highlight a single, functional object.

Norm employs a utilitarian, minimalist visual language, focusing on stark contrasts and direct communication. The design uses a limited achromatic palette, relying heavily on pure black text on clean white surfaces. Typography is a central element, with commanding display-sized text setting a precise, unornamented tone. Components are stripped down, favoring simple outlined forms and large, soft radii to provide subtle tactile warmth against the otherwise stark visual field.

### Do's

- Prioritize Canvas White (#ffffff) as the primary background for all major content sections and surfaces.
- Use Pitch Black (#000000) for all primary body text, headlines, and calls to action text.
- Employ custom_50109 400 at 48px or 24px, with specific letter-spacing, for all prominent headings and content titles.
- Use Ghost Button styling, with a 0.5px Pitch Black (#000000) border and 12px radius, for all interactive elements.
- Apply 12px border-radius consistently to all button-like components, and 57px for small tags.
- Maintain generous negative space around content blocks, using implied section gaps of 64px.
- Apply 0.5px borders in Near Black (#282828) for subtle visual separation and detailed outlines.

### Don'ts

- Avoid using saturated colors; the palette is strictly achromatic.
- Do not use solid background buttons; all interactive elements should be ghosted or text-only.
- Do not introduce shadows; elevation is achieved solely through stark contrast and spacing.
- Avoid decorative imagery that competes with the product photography or text-heavy content.
- Do not deviate from the specified letter-spacing for custom_50109, especially for display sizes.
- Do not use heavy weights for typography; 400 is the only active weight in the system.
- Do not use small, tight radii; larger radii of 12px or 57px are signature elements.

### Layout

The page primarily uses a full-bleed, vertically segmented layout, alternating between large, centered text blocks and centered product imagery. Each section has a consistent vertical rhythm, with generous implied section gaps. The hero features a centered product shot above a large, centered multi-line headline. Subsequent sections also predominantly use centered stacks of text. There is no explicit grid for cards, and content is primarily a single column. Navigation is minimal, limited to a top-right utility bar with ghost buttons, suggesting a more focused, uncluttered experience.

### Imagery

The site's imagery is characterized by minimalist, product-focused photography under bright, even lighting. The 'Norm' desk is presented in tight crops on a pure white background, emphasizing its physical form and material without lifestyle context. There are no illustrations or abstract graphics. Icons are minimal, implied through text or simple outlined shapes. The visual language is image-scarce, with photography serving as a direct product showcase rather than decorative atmosphere, allowing text to dominate the layout's density.

### Elevation

The design intentionally avoids shadows. Visual hierarchy and separation are achieved through stark color contrast between text and background, along with generous spacing. The absence of shadows contributes to the clean, minimalist, and almost two-dimensional aesthetic.
