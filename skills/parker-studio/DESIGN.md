---
version: alpha
name: parker-studio
description: Parker Studio utilizes a 'scrapbook chic' aesthetic, layering textural and tonal imagery on a white canvas accented by a soft, muted green. Typography is a sophisticated blend of classic serif for display and a custom sans-serif for body text, maintaining a refined visual identity. The overall impression is one of curated elegance, where UI elements are minimal and recede, allowing photographic content to dominate and define the brand narrative.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  sage-green: "#b7e3b6"
  subtle-gray: "#a5a5a5"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.15
    letterSpacing: -0.38px
  heading:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.1
    letterSpacing: -0.86px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 0.96
    letterSpacing: -1.24px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 21px
  sectionGap: 56px
components:
  header-navigation-link-light:
    role: Navigational element for primary site sections on light backgrounds.
  header-navigation-link-dark:
    role: Navigational element for primary site sections on dark backgrounds.
  ghost-button-light-bg:
    role: Minimal call to action, typically used for secondary actions or links.
  ghost-button-dark-bg:
    role: Minimal call to action, typically used for secondary actions or links, for use against dark backgrounds.
  input-field:
    role: Standard form input for text entry.
  news-card-detail-link:
    role: Secondary link for descriptive text beneath news cards.
---

## Overview

**North Star:** Curated art gallery

Parker Studio utilizes a 'scrapbook chic' aesthetic, layering textural and tonal imagery on a white canvas accented by a soft, muted green. Typography is a sophisticated blend of classic serif for display and a custom sans-serif for body text, maintaining a refined visual identity. The overall impression is one of curated elegance, where UI elements are minimal and recede, allowing photographic content to dominate and define the brand narrative.

### Do's

- Prioritize Canvas White (#ffffff) as the primary page background.
- Use Sage Green (#b7e3b6) for large background sections or as a distinct atmospheric accent.
- Employ Midnight Ink (#000000) for all primary text, headings, and outlines on light backgrounds.
- For all typographic elements excluding signature display headlines, use 'ChaletBook' font family with a letter-spacing of -0.02em.
- Maintain consistently sharp, 0px border-radii across all UI components, including buttons, cards, and input fields.
- Apply 21px as the standard horizontal and vertical spacing between most non-text elements.
- Ensure interactive elements reveal a 1px bottom border in their respective text color on hover or focus.

### Don'ts

- Avoid using high-saturation colors; restrict the palette to the defined muted green and achromatic tones.
- Do not introduce rounded corners; all interface elements must retain sharp, 0px corners.
- Refrain from using drop shadows or complex elevation; maintain a flat, layered aesthetic.
- Do not deviate from the defined serif and sans-serif font families or their specified letter spacing values.
- Avoid dense, information-heavy sections; prioritize spacious layouts with ample negative space.
- Do not use separate solid fills for buttons; primary calls to action should be ghost buttons with underlying borders.
- Decline to use system default blue for links; all links must be black and integrate with the defined typography.

### Layout

The page embraces a full-bleed layout for its initial presentation, allowing varied image compositions to fill the viewport, while later sections shift to a maximum-width contained model. The hero section features a dynamic, asymmetric collage of images that command attention. Content sections primarily exhibit consistent vertical spacing, creating an airy rhythm without explicit dividers, though large Sage Green (#b7e3b6) blocks serve as implicit section breaks. The content arrangement frequently utilizes a text-left/image-right or vice-versa pattern, with sections often arranged in a loose grid. Card grids are used for feature or news sections, showcasing content in distinct visual blocks. The overall density is spacious, emphasizing individual content pieces. Navigation appears as a minimalist sticky top bar with subtle text links.

### Imagery

The site primarily uses photography and graphic treatments that evoke a 'mood board' or 'scrapbook' aesthetic. Imagery, particularly product photography, is often contained within rectangular frames, sometimes at varying sizes and orientations, creating a dynamic, collage-like layout. Treatments range from full-color vibrant shots to more subdued, sometimes monochromatic or duotone, effects where the product often takes center stage against a clean or textural background. Some abstract, gradient-like graphics also appear, adding a soft, ethereal quality. Icons, if present in the UI, appear to be outlined with a moderate stroke weight, aligning with the minimal component style. The imagery serves both decorative and explanatory roles, heavily contributing to the brand's sophisticated but artful atmosphere, dominating visual space over text.
