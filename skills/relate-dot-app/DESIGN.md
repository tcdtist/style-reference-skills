---
version: alpha
name: Relate dot App
description: This design system presents domain names with a direct, unembellished style, leveraging high-contrast typography against simple, almost utility-like white panels. Information is segmented into cards with subtle borders rather than heavy visual separation. The overall impression is one of efficiency and clarity, with information delivered plainly without decorative flourishes. A vibrant yet functional blue or green is reserved for links or indicators to guide attention, while the majority of the interface remains in a monochrome palette.
colors:
  canvas-white: "#ffffff"
  ink-text: "#444444"
  deep-text: "#222222"
  graphite-accent: "#000000"
  ghost-gray: "#eeeeee"
  success-green: "#7bd428"
  action-blue: "#2484f2"
  link-blue: "#2374c4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.31
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.31
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.31
spacing:
  elementGap: 20px
  sectionGap: 36px
components:
  ghost-buy-now-button:
    role: Primary action button for purchasing domains.
  information-card-with-buy-now-button:
    role: Contains domain details and purchase options.
  godaddy-secure-transaction-label:
    role: Indicates secure purchasing.
  learn-more-link:
    role: Secondary action for more information.
  highlighted-status-tag:
    role: Draws attention to key status like 'Available!' or 'Extra:'.
---

## Overview

**North Star:** Utility-first information panels with minimal fuss.

This design system presents domain names with a direct, unembellished style, leveraging high-contrast typography against simple, almost utility-like white panels. Information is segmented into cards with subtle borders rather than heavy visual separation. The overall impression is one of efficiency and clarity, with information delivered plainly without decorative flourishes. A vibrant yet functional blue or green is reserved for links or indicators to guide attention, while the majority of the interface remains in a monochrome palette.

### Do's

- Use 'Canvas White' (#ffffff) as the default background for all primary content areas and surfaces to maintain a bright, uncluttered base.
- Employ 'Ink Text' (#444444) for most body text and secondary information, ensuring high readability against light backgrounds.
- Emphasize headlines and critical labels with 'Deep Text' (#222222) or 'Graphite Accent' (#000000) for strong visual hierarchy.
- Reserve 'Action Blue' (#2484f2) for borders of interactive elements and 'Link Blue' (#2374c4) for link text, making interactive elements immediately recognizable.
- Apply a 0px border radius to all components including buttons and cards for a sharp, unrounded aesthetic.
- Maintain a clear visual hierarchy using 'Proxima Nova' weights for headings: 800 for main titles, 500 for subheadings, and 400 for smaller headings.
- Incorporate `36px` as the base `sectionGap` for consistent vertical rhythm between distinct content blocks.

### Don'ts

- Do not introduce rounded corners or border radii greater than 0px on any interface elements.
- Avoid using saturated background colors or heavy gradient fills for primary content areas; surfaces should remain neutral and flat.
- Do not use shadows or excessive elevation that would make components appear to float; maintain a flat, panel-like appearance with subtle borders.
- Do not deviate from the specified font families and weights; maintain the established typographical voice across all content.
- Refrain from adding decorative imagery or complex illustrations; the system prioritizes direct communication through text and simple UI elements.
- Do not use 'Success Green' (#7bd428) as a background for buttons or primary actions; it is reserved for highlighting status only.

### Layout

The page exhibits a full-bleed grid layout for its background imagery, allowing diverse headshots to extend to the viewport edges. Foreground content is contained within white, high-contrast panels, which appear to float above this background. The hero section features a prominent domain name with a descriptive tagline centered over the background mosaic. Content sections below are primarily information-driven, arranged in vertically stacked white cards with consistent vertical spacing (likely `36px`) and minimal horizontal offsets. There is no strict alternating light/dark band pattern, as the content panels are consistently white, while the background shifts color depending on the image beneath. Navigation is a simple top bar, distinct from the main content flow.

### Imagery

The site primarily uses diverse headshot photography, cropped tightly and arranged in a grid-like mosaic, serving as a decorative background rather than explanatory content. These images are raw, unedited, and serve no direct product purpose, existing as a visually engaging counterpoint to the stark UI. There are no illustrations, product screenshots, or abstract graphics. Icons are minimal, likely monochrome, used functionally for status (e.g., GoDaddy logo), rather than decoratively. The density is image-heavy in the background, text-dominant in the foreground content panels.
