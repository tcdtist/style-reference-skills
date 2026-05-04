---
version: alpha
name: Volume
description: Volume's design system evokes an editorial quality through stark contrasts and classic typographic choices. The visual style pairs deep, rich imagery with highly legible, monochrome UI elements. Text is typically dark on light, using a limited color palette that emphasizes clarity and content over decorative flair. Subtle radii are used primarily for interactive elements, while backgrounds remain sharp, creating a sophisticated and somewhat archival feel.
colors:
  canvas-white: "#ffffff"
  ink-black: "#272727"
  ash-gray: "#717171"
  stone-button: "#949494"
  obsidian-pill: "#000000"
  whisper-text: "#cdcccc"
  crimson-pill: "#962921"
  scarlet-pill: "#c52910"
  blaze-pill: "#e75a00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 2
    letterSpacing: 1.4px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.18
  heading:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.18
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 45px
components:
  filled-button:
    role: Primary action button for sign-ups or confirmations.
  default-card:
    role: Container for products, articles, or featured content.
  funding-status-pill-obsidian:
    role: Small, rounded label indicating successful funding or status.
  funding-status-pill-crimson:
    role: Small, rounded label indicating specific campaign status.
  funding-status-pill-scarlet:
    role: Small, rounded label indicating urgent campaign status.
  funding-status-pill-blaze:
    role: Small, rounded label indicating high visibility campaign status (e.g. sold out).
  light-input-field:
    role: Standard input field for light backgrounds.
  dark-input-field:
    role: Standard input field for dark backgrounds.
---

## Overview

**North Star:** Editorial archive, high contrast.

Volume's design system evokes an editorial quality through stark contrasts and classic typographic choices. The visual style pairs deep, rich imagery with highly legible, monochrome UI elements. Text is typically dark on light, using a limited color palette that emphasizes clarity and content over decorative flair. Subtle radii are used primarily for interactive elements, while backgrounds remain sharp, creating a sophisticated and somewhat archival feel.

### Do's

- Use 'Ink Black' (#272727) for all primary body and heading text for high contrast on light backgrounds.
- Apply Messina Sans weight 300 for display and large headings, and weight 350 for body text and navigation to maintain an editorial tone.
- Structure layouts with a maximum width of 1400px and ensure content is centered within this constraint.
- Employ 0px border-radius for main containers, buttons, and input fields to sustain a sharp, modern aesthetic, reserving 50px for small status pills.
- Utilize 'Canvas White' (#ffffff) as the dominant page and card background color to provide a clean reading experience.
- Maintain a comfortable element spacing of 10px between interactive items and form elements.
- Use distinct accent colors for 'Funding Status Pills' to immediately convey status or category, differentiating them from the main content.

### Don'ts

- Avoid using decorative shadows or excessive gradients; keep surfaces flat and defined by solid colors or subtle borders.
- Do not introduce additional typefaces; Messina Sans is the sole typographic voice of the brand.
- Do not use highly saturated colors for large UI elements; confine chromatic accents to small, functional components like status pills.
- Refrain from altering the established 0px border-radius on major components, as this is a core aspect of the brand's sharp visual identity.
- Do not deviate from the high-contrast color pairings for text and backgrounds to preserve readability.
- Avoid arbitrary uses of spacing; adhere to the 10px element gap and 30px card padding for consistent rhythm.
- Do not apply `0.0700em` letter-spacing to large headlines; it is specifically for smaller text to enhance legibility.

### Layout

The page layout utilizes a max-width contained model (1400px) with content sections centered. The hero sections are full-bleed with large background images and overlaid text, establishing a strong visual anchor. The section rhythm appears to be based on distinct content blocks, some with dark backgrounds and light text, others following the primary light theme. Content often alternates between large imagery and text blocks, suggesting a journalistic or editorial spread. There's no evident grid for cards, which seem to be presented in sequential blocks rather than uniform columns. Navigation is a minimalist top bar, sticky or otherwise. The density is comfortable, providing sufficient breathing room around key content.

### Imagery

The visual language is characterized by bold, impactful photography or abstract graphics that often serve as full-bleed backgrounds for content sections. Imagery is central to defining specific content blocks, with text overlaid, often contained within semi-transparent overlays. When visible, icons appear to follow a simple, geometric style, primarily monochrome or using brand accent colors for highlighting. The overall impression is image-heavy, using visuals to establish mood and context rather than just decoration, with content often presented as product showcases.
