---
version: alpha
name: Jant
description: Jant employs a dark, highly contrasted visual system reminiscent of a digital console. Deep, saturated violets form the primary backgrounds, creating an immersive, almost holographic feel. Type is direct and functional, predominantly white or light gray against the dark canvas, with vivid blue used carefully for interactive elements. Components are lightweight and largely borderless, emphasizing content over Chrome, contributing to a dense, information-rich display.
colors:
  midnight-violet: "#01074b"
  twilight-indigo: "#010535"
  action-blue: "#1967d2"
  aqua-glow: "#00a0bd"
  paper-white: "#ffffff"
  dark-ink: "#202124"
  medium-gray: "#808080"
  soft-black: "#000322"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
spacing:
  buttonRadius: 8px
  elementGap: 15px
  sectionGap: 70px
components:
  primary-action-button:
    role: Filled button indicating the primary action.
  ghost-action-button:
    role: Outlined button for secondary actions, provides visual hierarchy.
  information-card-transparent:
    role: A decorative, invisible card for content grouping.
  cookie-consent-modal:
    role: Modal for cookie consent, often at page load.
---

## Overview

**North Star:** Midnight console, vivid blue accents.

Jant employs a dark, highly contrasted visual system reminiscent of a digital console. Deep, saturated violets form the primary backgrounds, creating an immersive, almost holographic feel. Type is direct and functional, predominantly white or light gray against the dark canvas, with vivid blue used carefully for interactive elements. Components are lightweight and largely borderless, emphasizing content over Chrome, contributing to a dense, information-rich display.

### Do's

- Prioritize Midnight Violet (#01074b) and Twilight Indigo (#010535) as background and primary surface colors, establishing the dark theme.
- Use Paper White (#ffffff) for all primary text against dark backgrounds to ensure maximum contrast and readability.
- Apply Action Blue (#1967d2) strictly for primary interactive elements and critical links; avoid decorative use.
- Ensure all buttons use an 8px border-radius, while other small interactive elements use 4px for a unified UI language.
- Maintain a compact information density using the 15px elementGap and 20px cardPadding, while structuring sections with 70px vertical spacing.
- Utilize 'arial' for headlines and main content, and 'Source Sans Pro' or 'system-ui' for smaller, functional text.
- Emphasize content over component chrome where possible, using minimal borders and transparent backgrounds for cards.

### Don'ts

- Avoid using light backgrounds for entire pages; the system is designed around a dominant dark mode.
- Do not introduce new vibrant colors outside of the defined accent palette; rely on Action Blue for highlights.
- Refrain from using heavy shadows or decorative gradients on surfaces; aim for a flat, digital aesthetic.
- Do not deviate from the specified typography for titles and body text; maintain the Arial, Source Sans Pro, and system-ui hierarchy.
- Avoid large empty spaces; leverage the compact density by carefully placing content and maintaining appropriate element gaps.
- Do not use generic system link styles (like #0000ee); apply Soft Black (#000322) or Action Blue (#1967d2) as defined.

### Layout

The page maintains a maximum width of 660px, creating a focused, single-column content flow, centered on the dark background. The hero section is characterized by a prominent headline and body text, with a 70px section gap before the next content block. Content is presented in vertical stacks, with elements like tables and lists filling the constrained width. Navigation appears minimal, likely a discreet sticky header or footer, reflecting the content-first approach.

### Imagery

The site uses minimal imagery, primarily focusing on text and UI elements. When present, images are tightly integrated into the content, rather than serving as large decorative backdrops. Visuals are functional rather than atmospheric. Icons would likely be solid or filled, appearing crisp against the dark backgrounds, potentially in Paper White or Action Blue to align with the high-contrast UI.
