---
version: alpha
name: V–A–C Sreda
description: The V–A–C Sreda design system presents a stark, almost architectural aesthetic using a high-contrast black and white palette. Its visual identity revolves around precise lines, dotted paths, and block typography that evokes technical drawings or abstract diagrams. Emphasis is placed on direct, functional navigation with minimal embellishment, conveying information through calculated arrangement and a sense of measured tension between elements. The system eschews softness or fluidity in favor of a rigid-yet-dynamic structure, where type and line work define the visual rhythm.
colors:
  canvas-white: "#ffffff"
  diagram-black: "#000000"
  muted-gray: "#999999"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.8
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.8
spacing:
  elementGap: 20px
  sectionGap: 50px
components:
  navigation-link:
    role: Primary navigation and content links
  headline-display-text:
    role: Large, prominent text for section titles and branding.
  body-text-block:
    role: Descriptive text for articles and content blocks.
  interactive-dotted-line:
    role: Visual connectors and indicators for user interaction.
  ghost-button:
    role: Subtle, outlined interactive elements.
  cookie-consent-banner:
    role: Discrete notification for cookie usage.
  muted-helper-text:
    role: Secondary, less prominent textual information.
---

## Overview

**North Star:** Architectural grid on white

The V–A–C Sreda design system presents a stark, almost architectural aesthetic using a high-contrast black and white palette. Its visual identity revolves around precise lines, dotted paths, and block typography that evokes technical drawings or abstract diagrams. Emphasis is placed on direct, functional navigation with minimal embellishment, conveying information through calculated arrangement and a sense of measured tension between elements. The system eschews softness or fluidity in favor of a rigid-yet-dynamic structure, where type and line work define the visual rhythm.

### Do's

- Prioritize Diagram Black (#000000) for all text and UI outlines against Canvas White (#FFFFFF) backgrounds to maintain high contrast.
- Use Diagramatika Display for all large type elements (48px and above) with a tight line-height of 0.8 to create a graphic, almost abstract feel.
- Define interactive pathways and relationships using single-pixel dotted lines in Diagram Black, connecting elements visually rather than relying on traditional button styling.
- Employ 0px border-radius for all UI components, including buttons and inputs, to uphold a sharp, rectilinear visual language.
- Maintain a comfortable density for content blocks, using 20px padding around text or within cards, and 20px as a primary element gap.
- Use Muted Gray (#999999) exclusively for secondary, contextual labels or inactive states, ensuring it never competes with primary Diagram Black text.
- Structure layouts with a strong emphasis on horizontal and vertical lines as visual anchors, creating a grid-like framework that guides the eye through content.

### Don'ts

- Avoid using any colored backgrounds or accent colors; the system relies strictly on a black and white palette with only Muted Gray as a secondary neutral.
- Do not introduce rounded corners or soft edges on any UI elements. All shapes must maintain sharp, 0px radii.
- Refrain from using drop shadows or complex elevation effects; the design emphasizes flat surfaces and defined lines to create separation.
- Do not use bold or italic text styles; the system achieves visual hierarchy through font size, weight 400, and precise spacing rather than stylistic variations.
- Avoid decorative imagery that isn't black and white line art or diagrams; photography or colorful illustrations will disrupt the stark aesthetic.
- Do not use generic button styles with block backgrounds; interactive elements should manifest as text links, ghost buttons, or elements defined by borders/lines.
- Do not introduce unnecessary visual flair or animation; transitions should be subtle (0.3s ease for color/opacity), serving function over decoration.

### Layout

The page model is full-bleed horizontally but with implicit vertical divisions, centered around a clear information hierarchy defined by lines and text blocks. The hero section is characterized by large, single-character headlines ('V', 'A', 'C') linked by solid lines, acting as abstract graphic anchors, followed by the brand name 'Sreda' as a dominant visual. Content sections flow vertically with strong visual separators, like the long horizontal lines. The primary content arrangement involves a large text block on the right, providing descriptive information, while interactive navigation elements ('Read', 'Watch', 'Listen', linked by dotted lines) are horizontally distributed below. There's no apparent grid for cards or features; instead, a linear flow with strong visual axes. Density is comfortable, with generous blank space around primary interactive elements, but descriptive text blocks can be quite dense. Navigation integrates directly into the content flow through aligned text links and dotted pathway indicators rather than a dedicated header or sidebar.

### Imagery

The visual language is characterized by an absence of traditional imagery in the UI. Instead, dotted lines, stark outlines, and the typographic treatment of headlines like 'V', 'A', 'C', and 'Sreda' function as primary graphic elements. The only visual content observed is a background element which appears to be product/artwork focused, suggesting a content area, rather than UI imagery. Icons, if present, would likely be minimal, outlined, and monochromatic to align with the system's graphic precision. The design is heavily text-dominant, relying on typography and line work to convey information and structure.

### Elevation

The design intentionally avoids shadows. UI elements are defined by strong outlines and direct placement on a flat Canvas White background, creating hierarchy through size, contrast, and precise spatial relationships rather than depth effects. This contributes to the system's architectural, diagrammatic feel.
