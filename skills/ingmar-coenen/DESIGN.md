---
version: alpha
name: Ingmar Coenen
description: Ingmar Coenen's portfolio employs a stark, high-contrast aesthetic, built on a foundation of black and white with minimal chromatic interference. Typography plays a central role, featuring a custom, oversized display font that acts as a primary graphic element. Components are lightweight and interaction-focused, defined by crisp borders and extensive border-radius. The system favors a dense information hierarchy over spaciousness, utilizing tight spacing and a predominantly neutral palette to emphasize content and precise interaction points.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  subtle-gray: "#f2f2f2"
  dark-charcoal: "#3a4042"
  medium-gray: "#919191"
  light-gray: "#cccccc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.94
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 295px
    lineHeight: 0.9
    letterSpacing: 0px
spacing:
  cardRadius: 12px
  buttonRadius: 100px
  elementGap: 10px
  sectionGap: 80px
components:
  pill-navigation-button:
    role: Primary navigation links and interactive controls.
  ghost-navigation-button:
    role: Secondary navigation links and interactive controls, visually less prominent than filled buttons.
  start-project-button:
    role: Prominent call to action, visually contrasting with other buttons.
  text-link-button:
    role: Minimal interactive elements with a default browser link style.
  portfolio-grid-item:
    role: Card-like containers for portfolio pieces.
---

## Overview

**North Star:** monochrome typographic canvas

Ingmar Coenen's portfolio employs a stark, high-contrast aesthetic, built on a foundation of black and white with minimal chromatic interference. Typography plays a central role, featuring a custom, oversized display font that acts as a primary graphic element. Components are lightweight and interaction-focused, defined by crisp borders and extensive border-radius. The system favors a dense information hierarchy over spaciousness, utilizing tight spacing and a predominantly neutral palette to emphasize content and precise interaction points.

### Do's

- Prioritize Ink Black (#000000) for all primary text and dominant graphic elements to maintain high contrast.
- Utilize Canvas White (#ffffff) for all main backgrounds and content surfaces to establish an expansive feel.
- Apply 100px border radius to all buttons for a consistent pill-shaped aesthetic.
- Use Megazoid Regular at 295px size as a graphic display element for prominent page titles, not for standard headlines.
- Maintain a compact elementGap of 10px between interactive elements and textual content.
- Employ Neue Haas Unica Pro Medium at its specified line height and letter spacing for all functional body text and links.
- Use Subtle Gray (#f2f2f2) sparingly for secondary button fills to provide a softer interactive alternative to Ink Black.

### Don'ts

- Avoid using chromatic colors for functional UI elements; reserve them strictly for content imagery or specific brand assets if any.
- Do not deviate from the high-contrast black and white palette for core UI elements; color is not used for primary hierarchy.
- Do not introduce shadows or significant elevation; the design relies on flat surfaces and clean borders for depth perception.
- Avoid excessive line spacing for body text; aim for the tight 1.1 line height specified for Neue Haas Unica Pro Medium.
- Do not use generic sans-serif fonts where custom fonts are specified; font uniqueness is a core brand identifier.
- Do not add extra padding around cards or sections beyond the defined cardPadding of 14px and sectionGap of 80px, as density is valued over whitespace.

### Layout

The page maintains a full-width, full-bleed canvas, with content often centered but not rigidly constrained by a max-width container, allowing for expansive typographic treatments like the 'INGMAR' header. The hero section is characterized by large, visually consuming typography that functions as a branding element, accompanied by a concise right-aligned bio. Sections flow seamlessly without distinct visual dividers, relying on shifts in content type or large typographic elements to delineate areas. Content arrangement often features a primary text block or graphic element interacting with a secondary one, sometimes with alternating left/right positioning. Navigation is a minimalist top bar with ghost and pill-shaped buttons, complemented by a persistent 'Start a project' button on the right and a bottom-left 'Grid/List' toggle.

### Imagery

This site predominantly uses embedded product shots and specialized graphic treatments rather than conventional photography or illustrations. Images appear contained, often with rounded corners (12px radius), acting as content within the stark UI. There's also dynamic, text-based visual imagery like the circular 'Haven-1' graphic, which fuses typography with abstract motion, indicating a deliberate integration of text as visual art. Iconography is minimal, primarily functional arrows associated with navigation, appearing outlined or filled in black and white.
