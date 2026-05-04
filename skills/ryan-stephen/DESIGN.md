---
version: alpha
name: Ryan Stephen
description: Ryan Stephen's design system evokes a clean, gallery-like presentation with a strong emphasis on content and minimal UI distraction. It utilizes a spacious, high-contrast monochrome palette to make imagery pop, ensuring the focus remains on the product designs showcased. Typography is understated and functional, blending into the background to support the visual work. Components are highly softened with generous corner radii, creating a friendly, approachable feel for an otherwise stark layout.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  graphite-text: "#404040"
  ash-gray: "#8b8b94"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
spacing:
  elementGap: 20px
  sectionGap: 100px
components:
  profile-description-block:
    role: Informational text block
  image-gallery-grid-item:
    role: Displaying visual work
  interactive-link:
    role: Navigational or actionable text
---

## Overview

**North Star:** Gallery Grid on White Canvas

Ryan Stephen's design system evokes a clean, gallery-like presentation with a strong emphasis on content and minimal UI distraction. It utilizes a spacious, high-contrast monochrome palette to make imagery pop, ensuring the focus remains on the product designs showcased. Typography is understated and functional, blending into the background to support the visual work. Components are highly softened with generous corner radii, creating a friendly, approachable feel for an otherwise stark layout.

### Do's

- Prioritize Canvas White (#ffffff) for all large background areas to maintain a spacious, gallery-like feel.
- Use Ink Black (#000000) strictly for primary headings and critical UI elements where maximum contrast is essential, like primary text.
- Apply a consistent 10px border-radius to all image containers and card-like components to ensure a cohesive, softened aesthetic.
- Maintain a visual hierarchy where body text uses Graphite Text (#404040) for readability and softer links use Ash Gray (#8b8b94).
- Structure layouts with a generous 100px section gap for clear delineation between major content blocks, creating an airy feel.
- Employ a base element gap of 20px for consistent spacing between distinct UI components.
- Utilize 15px spacing for items within image grids or compact lists to keep related content visually grouped but distinct.

### Don'ts

- Do not introduce strong, saturated colors unless they are part of the image content itself; the UI must remain monochrome.
- Avoid sharp corners or square edges on any interactive or content card-like element; always adhere to the 10px radius.
- Do not deviate from the specified typography hierarchy; avoid using 12px for body content or 16px for captions.
- Do not overcrowd sections; preserve the spacious feel by respecting the 100px section gap.
- Avoid heavy borders or strong shadows; the design relies on stark white space and soft radii for definition.
- Do not use generic system font weights other than 400 or 500; the UI's subtle nature depends on these choices.
- Do not use bright or animated hover states for links; interactions should be understated or rely on browser defaults.

### Imagery

The site's imagery consists solely of product screenshots, often depicting hands interacting with phone-based interfaces. The treatment is primarily isolated shots, with little environmental context, putting the product UI itself at the forefront. There's an absence of photography or graphic illustrations, emphasizing actual design output. The role of imagery is demonstrative and portfolio-oriented, serving as the core content rather than decorative elements. The density is image-heavy, forming a dense, uniform grid that dominates the page.
