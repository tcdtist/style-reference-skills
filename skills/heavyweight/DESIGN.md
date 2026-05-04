---
version: alpha
name: Heavyweight
description: Heavyweight Type embraces a stark, high-contrast aesthetic, juxtaposing crisp black text and borders against expansive white and light gray surfaces. Typography is the undisputed hero, presented in large, impactful custom fonts that demand attention without heavy graphic treatments. The system prioritizes functional clarity and precise visual hierarchy, with minimal use of color, reserving a single vivid green as a subtle 'new' flag, making interactions feel deliberate and highly legible.
colors:
  heavy-ink: "#222222"
  canvas-white: "#ffffff"
  surface-frost: "#f3f5fa"
  border-graphite: "#2d2d2d"
  muted-ash: "#888888"
  accent-green: "#39d17f"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.14
    letterSpacing: 0.18px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: 0.22px
spacing:
  elementGap: 12px
  sectionGap: 166px
components:
  default-button:
    role: Standard interactive element for general actions.
  primary-dark-button:
    role: Emphasized action, often a confirmation or acceptance.
  outlined-light-button:
    role: Alternative action, often used in conjunction with a primary dark button.
  font-showcase-card-minimal:
    role: Displays font examples with minimal visual chrome.
  font-showcase-card-image-placeholder:
    role: Card with an explicit aspect ratio for image/video content (e.g., animated font previews).
  navigation-link:
    role: Top-level navigation items.
---

## Overview

**North Star:** Type foundry catalog on stark white

Heavyweight Type embraces a stark, high-contrast aesthetic, juxtaposing crisp black text and borders against expansive white and light gray surfaces. Typography is the undisputed hero, presented in large, impactful custom fonts that demand attention without heavy graphic treatments. The system prioritizes functional clarity and precise visual hierarchy, with minimal use of color, reserving a single vivid green as a subtle 'new' flag, making interactions feel deliberate and highly legible.

### Do's

- Use Heavy Ink (#222222) for all primary text and critical UI borders to maintain high contrast and legibility.
- Apply Surface Frost (#f3f5fa) as a default background for interactive components and secondary surfaces to create subtle visual separation.
- Utilize rounded corners with an 11px radius for cards and default buttons, and 10px for smaller buttons, to provide a consistent, tempered aesthetic.
- Employ the Nuckle website font at 16px with a line height of 1.25 for most body text and navigation, ensuring clear readability.
- Reserve Accent Green (#39d17f) exclusively for 'new' markers or similar functional highlights, keeping chromatic color sparse and impactful.
- Maintain generous element spacing of 12px and card padding of 12px for comfortable information density.
- Structure pages with a clear hierarchy using large custom type for headings and minimal decorative elements.

### Don'ts

- Do not introduce additional saturated colors; maintain the high-contrast achromatic base with Accent Green as the sole highlight.
- Avoid heavy drop shadows or intrusive gradients; rely on crisp borders and distinct surface colors for depth.
- Do not use overly dense layouts; leverage comfortable spacing tokens like `elementGap` (12px) to provide visual breathing room.
- Do not deviate from the specified font families; their custom nature is integral to the brand's identity.
- Do not use small, indistinct borders; prioritize strong, dark borders around interactive elements and cards for clarity.
- Avoid generic, full-bleed imagery without clear product context; imagery should be contained and purposeful.
- Do not use animations that distract; keep motion subtle (e.g., opacity, background-color transitions) to enhance interaction without overwhelming.

### Layout

The page uses a maximum-width contained layout, approximately 1200px wide, with consistent large horizontal margins. The hero section often features a centered headline over a dark background, immediately emphasizing large typography. Content sections below the hero feature a responsive grid of cards, typically 3-4 columns, each showcasing a different font. Vertical section spacing is generous, with a `sectionGap` of 166px separating major content blocks. Navigation is a persistent top bar, horizontally aligned, with a standard set of links, cart, and account. Individual cards maintain their own internal padding and spacing for content. The visual rhythm is driven by the regular grid of cards against a large, uniform background.

### Imagery

Imagery largely consists of black-on-black or inverse graphic representations of typography, creating a high-contrast, artistic, and technical aesthetic. These are often contained within cards, sometimes with rounded corners (11px). When photography is used, it appears to be product-focused, showcasing the type in use in a stark, conceptual manner, rather than lifestyle. Icons are simple, outlined, and mostly monochromatic (Heavy Ink). The overall density is image-heavy in the font showcase sections, but the images serve as abstract examples of the typefaces themselves, rather than decorative elements. There are no full-bleed images, and all visuals are tightly integrated into the card structure.
