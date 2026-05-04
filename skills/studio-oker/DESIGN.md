---
version: alpha
name: Studio Oker
description: Studio Oker employs a high-contrast dark aesthetic that feels like an art gallery at dusk. Content surfaces are monochromatic, punctuated by moments of intense red that act as both brand accent and interactive cues. Typography is precise and airy, favoring lighter weights and generous line-heights over heavy, dense blocks. Layouts are spacious and structured, using wide content areas for impact and clear visual separation between elements, emphasizing a curated, editorial feel.
colors:
  midnight-canvas: "#000000"
  ghost-white: "#ffffff"
  whisper-gray: "#a0a0a0"
  charcoal-edge: "#484848"
  brand-red: "#cf2e20"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.13
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -1.6px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 64px
components:
  ghost-navigation-link:
    role: Primary navigation elements in the header.
  grid-content-card:
    role: Displaying portfolio items or features on the main content area.
  muted-text-block:
    role: Secondary details or related information, often with links.
  section-divider-subtle:
    role: Separating major content sections with a minimalist approach.
  accent-read-more-link:
    role: Prominent click targets for detailed content.
  header-branding:
    role: Main site title/logo in the header.
---

## Overview

**North Star:** Gallery at Dusk

Studio Oker employs a high-contrast dark aesthetic that feels like an art gallery at dusk. Content surfaces are monochromatic, punctuated by moments of intense red that act as both brand accent and interactive cues. Typography is precise and airy, favoring lighter weights and generous line-heights over heavy, dense blocks. Layouts are spacious and structured, using wide content areas for impact and clear visual separation between elements, emphasizing a curated, editorial feel.

### Do's

- Prioritize Midnight Canvas (#000000) for all backgrounds to maintain the dark theme.
- Use Ghost White (#ffffff) for primary text and headings, employing NextBook weights 300 or 400.
- Apply Whisper Gray (#a0a0a0) for all secondary text, links, and borders that require less prominence.
- Introduce Brand Red (#cf2e2e) sparingly as a functional accent for links and interactive elements, never for large blocks of content.
- Maintain a clear page structure using a max-width of 969px, centered, with generous 64px section gaps.
- Ensure all interactive elements, especially ghost elements, have a 1px border in Ghost White (#ffffff) or Whisper Gray (#a0a0a0).
- Employ the NextBook font with its lighter weights (300, 400) and specific letter spacing to achieve an airy and precise typographic feel.

### Don'ts

- Avoid using heavy font weights (e.g., 600+) for headlines; the system relies on lighter weights for authority.
- Do not introduce additional saturated colors beyond Brand Red (#cf2e2e) unless for semantic states like success/error, maintaining a strict monochrome palette.
- Refrain from adding shadows or complex elevation; the design emphasizes flat surfaces and crisp outlines.
- Do not deviate from the specified NextBook font; system fonts would compromise the distinctive typographic identity.
- Avoid tight spacing between sections; allow elements ample room with 64px vertical gaps.
- Do not use border-radius; all UI elements are designed with sharp, geometric edges.
- Never use Brand Red (#cf2e2e) as a background color for large sections or primary buttons; it is strictly an accent.

### Layout

The page adheres to a contained layout with a maximum width of 969px, centered, creating a focused content area. The hero section is a full-width dark canvas with a large, centered headline. Subsequent sections often feature a grid-based content arrangement, alternating between large visual cards and text blocks, with a consistent vertical rhythm of 64px section gaps. Navigation is minimal, consisting of a simple top bar with Ghost White text links. The overall density is comfortable, giving ample whitespace for each content block to stand out.

### Imagery

This site predominantly uses clean, product-focused photography and abstract graphics. Product shots are typically tight crops, often on neutral or dark backgrounds, showcasing the object as the hero without lifestyle context. Illustrations are minimal, seemingly abstract or geometric. Icons are simple, outlined or filled, and monochrome (Ghost White or Whisper Gray). Imagery serves to showcase project examples or provide visual texture, often treated as full-bleed within content cards or sections, integrated seamlessly with the UI.
