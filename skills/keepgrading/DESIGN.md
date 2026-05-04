---
version: alpha
name: KeepGrading
description: KeepGrading employs a deep, dark canvas as its primary backdrop, featuring a striking black and white contrast. Typography is the main vehicle for conveying information, appearing in clean geometric sans-serifs. Interactive elements are subtly outlined rather than boldly filled, maintaining the overall sleek, low-key aesthetic, ensuring that images and video content are the focal point.
colors:
  void-black: "#080808"
  canvas-white: "#f8f8f8"
  onyx-shadow: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  body-lg:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1.3
spacing:
  cardRadius: 160px
  buttonRadius: 9999px
  elementGap: 15px
  sectionGap: 48px
components:
  navigation-link:
    role: Top-level navigation items and secondary links.
  primary-heading:
    role: Main page titles and large section headings.
  ghost-button:
    role: Secondary calls to action or navigation elements.
  media-card:
    role: Containers for images and videos with associated text.
  menu-toggle-button:
    role: Hamburger menu icon for mobile or hidden navigation.
---

## Overview

**North Star:** Gallery in an Empty Room

KeepGrading employs a deep, dark canvas as its primary backdrop, featuring a striking black and white contrast. Typography is the main vehicle for conveying information, appearing in clean geometric sans-serifs. Interactive elements are subtly outlined rather than boldly filled, maintaining the overall sleek, low-key aesthetic, ensuring that images and video content are the focal point.

### Do's

- Prioritize Void Black (#080808) for all primary background surfaces and Canvas White (#f8f8f8) for primary text to maintain high contrast.
- Use Cabinet Grotesk for all primary headings and display text, reserving Inter for body copy and navigation.
- Employ a 9999px border-radius for all interactive buttons and navigation elements to achieve a fully rounded, 'pill' shape.
- Apply a 160px border-radius to all content-bearing cards, giving them a distinctively soft, organic container.
- Maintain a comfortable rhythm with element gaps set to 15px and general section padding at 48px.
- Ensure all interactive elements, where not a solid fill, use a 1px border of Canvas White (#f8f8f8) against the dark background.

### Don'ts

- Do not introduce strong accent colors; the palette is intentionally monochrome, letting imagery provide visual interest.
- Avoid using filled buttons as primary calls to action; prefer ghost buttons with Canvas White borders.
- Do not use generic square or slightly rounded corners for cards; the 160px radius is a signature element.
- Do not deviate from the specified font families; Cabinet Grotesk and Inter are integral to the brand's typographic identity.
- Avoid tight spacing; maintain the comfortable density established by 15px element gaps and 48px section padding.

### Layout

The page operates on a full-bleed black background (#080808) that expands to the edges of the viewport, with content centered. Featured image/video content is displayed within distinctively rounded cards (160px radius) that float within this dark space. The hero section likely features a large, impacting visual due to the nature of the brand. Sections appear to maintain consistent vertical spacing of 48px, creating clear divisions. Content is primarily image-dominant, using a grid-like arrangement for projects.

### Imagery

This site prominently features high-quality, full-color photography and video stills. Imagery is generally contained within cards with 160px rounded corners, creating a soft-edged visual presentation. The visuals serve as the primary content, showcasing work examples and creating atmospheric context for the studio's services. The density is image-heavy, with substantial visual real estate dedicated to showcasing product shots often in lifestyle or professional contexts, appearing unmasked with raw edges within their rounded containers. Icons are kept minimal, outlined, and monochromatic, serving purely functional roles like menu toggles.
