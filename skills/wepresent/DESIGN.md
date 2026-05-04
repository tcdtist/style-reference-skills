---
version: alpha
name: WePresent
description: WePresent adopts an editorial, deep-contrast aesthetic designed for immersive digital experiences. Its visual system pairs dark, luxurious backgrounds with stark white typography, creating a gallery-like atmosphere. The design emphasizes clear boundaries through prevalent outline styles for interactive elements, reinforcing a sense of curated content behind a frame. Typography is confident and expressive, balancing classic elegance with modern readability, while accent colors are restrained, used primarily for subtle interactive cues.
colors:
  midnight-roast: "#000000"
  canvas-white: "#ffffff"
  flame-accent: "#fd4344"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.35
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.35
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: -0.33px
spacing:
  elementGap: 5px
  sectionGap: 40px
components:
  outline-button-dark:
    role: Primary Call to Action
  outline-button-light:
    role: Primary Call to Action on Dark Backgrounds
  image-card-dark:
    role: Content container for images
  image-card-light:
    role: Content container for images on Light Backgrounds
---

## Overview

**North Star:** Dramatic editorial contrast

WePresent adopts an editorial, deep-contrast aesthetic designed for immersive digital experiences. Its visual system pairs dark, luxurious backgrounds with stark white typography, creating a gallery-like atmosphere. The design emphasizes clear boundaries through prevalent outline styles for interactive elements, reinforcing a sense of curated content behind a frame. Typography is confident and expressive, balancing classic elegance with modern readability, while accent colors are restrained, used primarily for subtle interactive cues.

### Do's

- Prioritize 'Midnight Roast' and 'Canvas White' for most background and text pairings to maintain high contrast and dramatic readability.
- Use FaktProBlond for all body text, links, and minor UI elements, ensuring good readability at sizes from 10px to 22px with a letter-spacing of -0.0150em.
- Reserve GTAlpinaStandardThinItalic exclusively for headlines and impactful titles, leveraging its unique italic style for brand distinctiveness.
- Apply 0px border-radius to all interactive elements and content containers for a consistently sharp, intentional aesthetic.
- Frame interactive elements like buttons with a 1px border using 'Canvas White' on dark backgrounds or 'Midnight Roast' on light backgrounds.
- Maintain a spacious density; use 40px for section gaps and 35px for internal card padding to give content ample breathing room.

### Don'ts

- Avoid using saturation to differentiate interactive states; rely on border-only outlines and text color changes.
- Do not introduce rounded corners; commit to a rectilinear visual language across all components and layouts.
- Do not use drop shadows for elevation; surfaces should rely on background color changes or clear border distinctions.
- Avoid mixed-case typography for headlines; stick to all-caps or title-case as dictated by content, but maintain the specified font and weight.
- Do not use 'Flame Accent' as a background color for major elements; it is reserved for subtle interactive cues and decorative details.
- Do not vary letter spacing from -0.0150em for FaktProBlond or GTAlpinaStandardThinItalic; consistent tight tracking is key to its brand identity.

### Layout

The page exhibits a full-bleed layout on a dark background, establishing an immersive, almost theatre-like experience. The hero section features a centered, high-contrast headline and supporting text with an outlined call-to-action button, conveying an editorial and focused entry point. Content arrangement is primarily stacked vertically, allowing ample whitespace and leading. The general approach seems to be max-width content blocks within the full-bleed canvas, ensuring readability without a strict pageMaxWidth, rather using generous horizontal padding or margins to frame the text.

### Imagery

This site predominantly uses a 'no imagery, pure UI' approach for foundational elements. When images are present (not explicitly in provided data but implied by card components), they are expected to be full-bleed or contained within sharp, borderless structures, treated as content rather than decorative UI. The overall impression leans towards a dark, immersive canvas that foregrounds textual and interactive elements, suggesting minimal, high-impact visuals if any.
