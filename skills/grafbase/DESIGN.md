---
version: alpha
name: Grafbase
description: Grafbase deploys a precise, engineering-focused aesthetic, balancing stark black and white contrasts with subtle, nuanced grays to create an information-dense yet navigable interface. A single vibrant teal-green gradient acts as a beacon for critical calls to action, injecting a dynamic energy into an otherwise composed presentation. The design leverages a tight Inter type scale and generous padding to ensure clarity and hierarchy, making complex API governance feel structured and approachable.
colors:
  midnight-ink: "#1b1b1b"
  canvas-white: "#ffffff"
  cloud-gray: "#eaeaea"
  slate-text: "#60646c"
  ash-gray: "#7c7c7c"
  cloud-border: "#e0e1e6"
  system-mint: "#8dc63f"
  system-sky: "#27aae1"
  plasma-teal-gradient: "#19a05f"
typography:
  button:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1
    letterSpacing: -4.5px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  announcement-banner:
    role: 
  feature-comparison-cards:
    role: 
  primary-action-button:
    role: Call to action
  secondary-ghost-button:
    role: Alternative action
  secondary-filled-button:
    role: Less prominent action
  circular-icon-button:
    role: Navigation or small interactive elements
  navigation-link:
    role: Primary navigation links
  hero-headline:
    role: Prominent page titles
  body-text-paragraph:
    role: Standard informational text
  feature-card:
    role: Showcasing product features or benefits
---

## Overview

**North Star:** Architectural blueprint on white marble.  The interface feels like a meticulously drafted technical diagram, laid out on a clean, bright surface.

Grafbase deploys a precise, engineering-focused aesthetic, balancing stark black and white contrasts with subtle, nuanced grays to create an information-dense yet navigable interface. A single vibrant teal-green gradient acts as a beacon for critical calls to action, injecting a dynamic energy into an otherwise composed presentation. The design leverages a tight Inter type scale and generous padding to ensure clarity and hierarchy, making complex API governance feel structured and approachable.

### Do's

- Use Plasma Teal Gradient for all primary calls to action to ensure consistent visual prioritization.
- Apply Inter font with specific letter-spacing adjustments: -0.05em for 90px headings and -0.025em for 40px headings.
- Maintain a clear visual hierarchy by utilizing Midnight Ink (#1b1b1b) for main headings and interactive elements, and Slate Text (#60646c) for supporting text.
- Implement 6px border-radius for all interactive buttons and 12px for content cards to maintain a subtle sense of digital craftsmanship.
- Leverage the Canvas White (#ffffff) as the dominant page background, ensuring a clean and expansive feel for content.
- Ensure generous internal padding of 24px for all card-like components to provide ample breathing room for content.
- Prioritize explicit contrast pairings: #1b1b1b on #ffffff (17.2:1 AAA) and #1b1b1b on #eaeaea (14.3:1 AAA).

### Don'ts

- Do not introduce new vibrant chromatic colors beyond the established accent palette for illustrations and the brand gradient.
- Avoid using hard-edged rectangles without any radius; all major interactive elements and cards should use either 6px or 12px radii.
- Do not deviate from the Inter typeface; custom fonts are not part of this system.
- Refrain from heavy drop shadows; the only significant shadow is on interactive buttons during hover/active states.
- Do not use highly saturated colors for large background areas or extensive text, sticking to the neutral and accent palette for main UI.
- Avoid reducing vertical spacing below the 24px element gap between related components.
- Do not combine multiple gradients; the Plasma Teal Gradient is the sole approved gradient for brand identity.

### Layout

The layout follows a content-width container model, centered on the page, with a full-bleed top announcement banner. The hero section is a two-column split, with a large, left-aligned headline and supporting text occupying one half, and a product screenshot or interactive demo occupying the other. Sections alternate between a strong left-aligned headline with descriptive text, and a mix of single-column feature descriptions and 3-column card grids. Vertical rhythm is maintained through consistent `sectionGap` of 64px, creating spacious breaks between content blocks. Navigation is a sticky top bar with a left-aligned logo and right-aligned links and buttons.

### Imagery

The site's imagery is primarily composed of technical product screenshots embedded within clean, minimal UI mockups, and abstract geometric illustrations. Product screenshots are typically tight crops, showcasing specific functionality with a focus on data visualization (charts, code snippets). Illustrations are flat, two-dimensional, geometric, and often outlined, using the muted accent colors from the palette to define elements. Icons are outlined, with a moderate stroke weight, and monochromatic (using Midnight Ink or Slate Text). Imagery serves to explain complex technical concepts and showcase product capabilities directly, rather than create a mood. They are generally contained within white or light gray card-like segments, avoiding full-bleed applications. Density is balanced, with imagery typically accompanying text blocks to break up information.
