---
version: alpha
name: SIRUP 5th Anniversary Special Site
description: The SIRUP 5th Anniversary site presents a 'midnight command center' aesthetic, characterized by a deep black canvas punctuated by a single vibrant orange accent. Typography is a key identifier, mixing a system sans-serif for body text with several custom display fonts that feature wide letter-spacing. UI elements are dense and dark, with ghost buttons that blend into the background, hinting at interactive states through subtle borders and text color changes. The overall impression is one of intense focus and a strong, almost understated graphic sensibility.
colors:
  midnight-canvas: "#000000"
  ghost-fill-grey: "#404040"
  muted-ash: "#666666"
  white-frost: "#ffffff"
  smoke-gray: "#e8e9ed"
  ignition-orange: "#5a1501"
  digital-violet: "#4554ac"
  action-violet: "#5262be"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.13
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.13
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.13
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.13
spacing:
  buttonRadius: 27.5px
  elementGap: 4px
  sectionGap: 75px
components:
  ghost-button-text:
    role: Primary Call to Action, Navigation
  ghost-button-outlined:
    role: Secondary Call to Action, Interactive elements
  circular-ghost-button:
    role: Iconic Navigation, Close buttons
  subtle-ghost-button-filled:
    role: Tertiary Call to Action, Toggle states
  navigation-bar:
    role: Global Navigation, Announcements
  text-content-block-orange-accent:
    role: Highlight sections, Thematic dividers
---

## Overview

**North Star:** Midnight command center, high-contrast; functionality through dark surfaces and illuminated accents.

The SIRUP 5th Anniversary site presents a 'midnight command center' aesthetic, characterized by a deep black canvas punctuated by a single vibrant orange accent. Typography is a key identifier, mixing a system sans-serif for body text with several custom display fonts that feature wide letter-spacing. UI elements are dense and dark, with ghost buttons that blend into the background, hinting at interactive states through subtle borders and text color changes. The overall impression is one of intense focus and a strong, almost understated graphic sensibility.

### Do's

- Always default to 'Midnight Canvas' (#000000) as the background for new sections.
- Use 'White Frost' (#ffffff) for all primary text and critical UI elements against dark backgrounds.
- Apply 'Ignition Orange' (#5a1501) sparingly for high-impact background sections or thematic content blocks, never for small interactive elements.
- Utilize a 27.5px border-radius for interactive buttons and forms to unify their appearance, except for fully circular elements, which use 1440px.
- Employ the 'Termina' font with 0.1em letter-spacing for major headings and display text to establish a distinct brand voice.
- Ensure interactive elements primarily use ghost or outlined styles, with solid fills reserved for subtle, secondary actions.
- Maintain a clear visual hierarchy by limiting prominent chromatic accents to 'Digital Violet' (#4554ac) for decorative purposes or 'Action Violet' (#5262be) for active text states.

### Don'ts

- Avoid using multiple saturated colors; color should be highly controlled and primarily achromatic with a single brand accent.
- Do not use '#e8e9ed' for primary text; it is reserved for subtle secondary text or background elements.
- Do not introduce new typefaces; only 'Helvetica Neue', 'Termina', 'source-han-sans-japanese', and 'Glodok' are permitted.
- Avoid heavy shadows or gradients; interfaces should feel flat and direct.
- Do not create filled buttons unless specifically using the 'Subtle Ghost Button (Filled)' variant with 25% white opacity.
- Refrain from using tight letter-spacing for 'Termina' or 'Glodok'; their identity is defined by open tracking.
- Do not use 'Ignition Orange' (#5a1501) for small text or icons directly interacting with content, as it functions best as a background accent.

### Layout

The page primarily follows a full-bleed layout, where sections extend to the edge of the viewport. Content within these sections is often centered, forming distinct vertical blocks. The hero section is full-bleed dark with centered text. Section rhythm is established through alternating background colors, particularly the prominent 'Ignition Orange' (#5a1501) blocks interspersed with the primary 'Midnight Canvas' (#000000) background. Content arrangement leans towards centered stacks for main information and vertically-oriented lists or grids, allowing abundant whitespace for emphasis. Navigation is primarily a sticky header with a compact, ghost-button style that integrates seamlessly into the dark background.

### Imagery

This site features a 'no imagery, pure UI' approach. Visuals are entirely driven by typography, color blocks, and UI elements. The only visual content comes from small icons which appear to be monochrome or use the accent colors. There is a strong emphasis on stark, graphic presentation rather than photographic or illustrative content conveying mood or information.
