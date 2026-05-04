---
version: alpha
name: Redis Agency
description: Redis Agency employs a dramatic, high-contrast dark-mode aesthetic, creating a sense of luxury and seriousness. It pairs large, elegant serif headlines with a compact sans-serif for body text, establishing clear typographic hierarchy. The overall feel is spacious, with generous negative space and minimal, highly rounded components that appear almost sculptural against the black canvas. Color is strictly controlled, centered around a stark black and white palette, accented only by brand-specific imagery or internal details that appear as subtle splashes of vibrancy.
colors:
  midnight-canvas: "#000000"
  ghost-white: "#ffffff"
  slate-text: "#808080"
  dark-stone: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.8px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.8px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.8px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.05
    letterSpacing: -1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.16
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.82
    letterSpacing: -1px
spacing:
  buttonRadius: 40px
  elementGap: 22px
  sectionGap: 70px
components:
  filled-primary-button:
    role: Action button
  ghost-outline-link:
    role: Navigation or secondary action link
  zero-padding-card:
    role: Content card/container for case studies
---

## Overview

**North Star:** Dramatic Midnight Sculpture

Redis Agency employs a dramatic, high-contrast dark-mode aesthetic, creating a sense of luxury and seriousness. It pairs large, elegant serif headlines with a compact sans-serif for body text, establishing clear typographic hierarchy. The overall feel is spacious, with generous negative space and minimal, highly rounded components that appear almost sculptural against the black canvas. Color is strictly controlled, centered around a stark black and white palette, accented only by brand-specific imagery or internal details that appear as subtle splashes of vibrancy.

### Do's

- Prioritize Midnight Canvas (#000000) for all page and section backgrounds to maintain dramatic contrast.
- Use Times New Roman (400) with tight letter-spacing for headlines and Ghost White (#ffffff) for maximum impact.
- Employ Suisseintl WebM (400) for all body text, links, and buttons, using Ghost White (#ffffff) for primary text and Slate Text (#808080) for secondary details.
- Apply a 40px border-radius to all interactive elements like buttons to achieve a soft, rounded aesthetic.
- Maintain generous vertical spacing between sections, using the 70px sectionGap token.
- Utilize 1px Ghost White (#ffffff) borders for subtle delineation of content blocks or interactive elements.
- Ensure all primary call-to-action buttons use a Ghost White (#ffffff) background with Midnight Canvas (#000000) text for high visibility.

### Don'ts

- Avoid using highly saturated colors for backgrounds or large sections; reserve them strictly for imagery or small accents.
- Do not deviate from the specified font families; avoid system defaults or other decorative fonts.
- Never use hard-edged, 0px border-radius on interactive elements; always lean into the soft, rounded forms.
- Do not introduce shadows for elevation, as the design relies on stark color contrast and negative space for hierarchy.
- Avoid dense information blocks; maintain the spacious and minimalist approach.
- Do not apply excessive letter-spacing to Suisseintl WebM; maintain its compact character with -0.8em tracking.
- Do not use Slate Text (#808080) for primary headlines or critical information where maximum contrast is required.

### Layout

The page primarily uses a full-bleed layout on a Midnight Canvas background, featuring large, dramatic sections. The hero section displays a centered headline with hero imagery. Content sections alternate between visually dominant imagery and text blocks, often with a centered stack approach for headlines and body text. There is a strong emphasis on spaciousness, with ample negative space defining the rhythm between content blocks. Navigation appears to be minimal, likely a top bar and potentially a hamburger menu for mobile, designed to recede and let the content shine.

### Imagery

The site uses a mix of highly stylized and abstract 3D renders (e.g., green organic blobs) and product-focused photography that often features single objects like radishes. Graphics are decorative and atmospheric, adding a sense of organic fluidity and surrealism against the stark UI. Iconography is minimalist, likely outlined or mono-colored, serving functional rather than decorative roles. Imagery is used to create mood and brand identity rather than explanatory content, often full-bleed or large-scale, dominating certain sections to create visual drama.
