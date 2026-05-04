---
version: alpha
name: ivee
description: Ivee conveys a calm and trustworthy atmosphere through a primarily cool blue and white palette, accented by a warm, inviting orange. Typography is a measured blend of traditional serifs for headlines and crisp sans-serifs for functional text, establishing both gravitas and clarity. Components feature generous rounded corners and light elevation, suggesting a friendly yet refined digital experience. The design prioritizes readability and ease of interaction within a clean, spacious layout.
colors:
  sky-canvas: "#f5f9fd"
  arctic-mist: "#ffffff"
  sand-dune: "#faf4e6"
  ocean-deep: "#0c4170"
  azure-glow: "#c4e3fa"
  sunset-orange: "#fc6b42"
  pitch-black: "#000000"
  cloud-gray: "#ced9e2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.75
    letterSpacing: 0.06px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.17
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.17
    letterSpacing: -1.04px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1
    letterSpacing: -3px
spacing:
  cardRadius: 40px
  buttonRadius: 10px
  elementGap: 20px
  sectionGap: 40px
components:
  primary-action-button:
    role: Call-to-action
  ghost-navigation-button:
    role: Secondary action
  input-field:
    role: Data entry
  rounded-feature-card:
    role: Content container
  card-with-shadow:
    role: Elevated content container
  modal-dialog:
    role: Overlay content
---

## Overview

**North Star:** Serene blue wellness canvas.

Ivee conveys a calm and trustworthy atmosphere through a primarily cool blue and white palette, accented by a warm, inviting orange. Typography is a measured blend of traditional serifs for headlines and crisp sans-serifs for functional text, establishing both gravitas and clarity. Components feature generous rounded corners and light elevation, suggesting a friendly yet refined digital experience. The design prioritizes readability and ease of interaction within a clean, spacious layout.

### Do's

- Always use 'Ocean Deep' (#0c4170) for primary text and significant borders to maintain brand consistency and readability.
- Apply 'Sunset Orange' (#fc6b42) exclusively to primary call-to-action elements for maximum impact and to guide user flow.
- Utilize soft 40px border radii for major content cards and larger visual containers to convey a friendly, approachable aesthetic.
- Pair 'Crimson Text' for headlines with 'Roboto' for body copy to establish clear typographic hierarchy and a balanced visual style.
- Maintain comfortable spacing with an element gap of 20px and a section gap of 40px to ensure visual breathability.
- Use 'Arctic Mist' (#ffffff) for inputs and backgrounds that need to stand out against the main 'Sky Canvas' (#f5f9fd).
- Employ 'Azure Glow' (#c4e3fa) for secondary section backgrounds and cards, creating visual interest without straying from the brand's cool palette.

### Don'ts

- Do not introduce sharp corners; avoid radii smaller than 5px for interactive elements.
- Never use 'Sunset Orange' (#fc6b42) for body text or large blocks of content; reserve it for functional accents.
- Avoid overusing shadows; elevation should be subtle and primarily for modals or distinct cards.
- Do not deviate from the 'Crimson Text' and 'Roboto' font families; maintain the established typographic voice.
- Refrain from tight spacing; always provide comfortable padding within elements and ample gaps between sections.
- Do not use dark backgrounds for entire page sections unless specifically for a full-bleed hero that integrates with the 'Ocean Deep' color.
- Avoid arbitrary color choices for text; stick to 'Ocean Deep' for primary text and 'Pitch Black' for button text on light backgrounds.

### Layout

The page primarily uses a max-width contained layout, centering content within a defined boundary. The hero section often features a full-bleed image with text overlaid, immediately setting a tone. Sections alternate between 'Sky Canvas' and 'Azure Glow' backgrounds, creating a clear visual rhythm. Content is arranged in alternating text-left, image-right patterns, and in multi-column card grids for features. Navigation is a sticky top bar, minimalist with primary actions highlighted.

### Imagery

The site uses a mix of lifestyle photography and product visuals. Photography features subjects in a relaxed, comfortable environment, often with a slightly desaturated or cool-toned filter that matches the brand's blues. Product shots are clean and focused, often showing medical devices or IV bags on neutral or blue-tinted backgrounds, emphasizing the health aspect. Icons are simple, outlined, and monochromatic, primarily in 'Ocean Deep', serving explanatory and functional roles rather than decorative.
