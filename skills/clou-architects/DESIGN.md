---
version: alpha
name: CLOU architects
description: CLOU architects employs a stark, high-contrast visual language that is simultaneously bold and minimalist. It features an expansive white canvas frequently punctuated by solid black sections or oversized black typography. The absence of traditional component containers and a singular dramatic red accent color, primarily for large architectural photography, create a direct and impactful aesthetic focused on content. Typography is large, unapologetic, and used as a major graphic element, defining distinct areas and conveying information with a sense of modern, unadorned authority.
colors:
  canvas-white: "#fffffc"
  ink-black: "#000000"
  arched-red: "#ff0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.5
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.1
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 109px
    lineHeight: 1.06
    letterSpacing: -0.012px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 134px
    lineHeight: 1
    letterSpacing: -0.03px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 166px
    lineHeight: 0.8
    letterSpacing: -0.05px
  display-xxxl:
    fontFamily: "system-ui"
    fontSize: 201px
    lineHeight: 0.8
    letterSpacing: -0.07px
spacing:
  elementGap: 17px
  sectionGap: 25px
components:
  ghost-link-button:
    role: Navigational or secondary action button for text-based links.
  inline-text-button:
    role: Simple text-based button, often used for content within sections like 'View projects +'.
  hero-headline-block:
    role: Dominant textual display for key messages, designed for maximum impact.
  navigation-link:
    role: Header and footer navigation menu items.
---

## Overview

**North Star:** Architectural blueprint on stark white canvas.

CLOU architects employs a stark, high-contrast visual language that is simultaneously bold and minimalist. It features an expansive white canvas frequently punctuated by solid black sections or oversized black typography. The absence of traditional component containers and a singular dramatic red accent color, primarily for large architectural photography, create a direct and impactful aesthetic focused on content. Typography is large, unapologetic, and used as a major graphic element, defining distinct areas and conveying information with a sense of modern, unadorned authority.

### Do's

- Prioritize Canvas White (#fffffc) for backgrounds and Ink Black (#000000) for text to maintain a high-contrast, minimalist aesthetic.
- Use Circular Std exclusively for all typography across the site, leveraging its varied weights and sizes to establish hierarchy.
- Apply negative letter-spacing for all large headlines (size 50px and above) to create a tight, commanding visual presence.
- Maintain a uniform border-radius of 0px across all UI elements to reinforce a sharp, architectural aesthetic.
- Incorporate the Arched Red (#ff0000) color sparingly and primarily within large photographic or graphic sections, not for functional UI elements.
- Ensure all interactive elements, even if ghosted, have a clear Ink Black (#000000) border or text for discoverability.
- Utilize large, bold typography as a primary design element and content divider, making text itself a graphic component.

### Don'ts

- Avoid using any drop shadows or complex elevation techniques; the design relies on flat, high-contrast surfaces and explicit borders.
- Do not introduce rounded corners; all UI elements should adhere to sharp, 0px radii.
- Refrain from using gradients on UI elements or backgrounds; the system is built on solid, flat colors.
- Do not introduce additional accent colors beyond Arched Red; color accents are extremely minimal and specific.
- Avoid complex, multi-layered components; favor simple, direct elements with clear boundaries and minimal styling.
- Do not use generic system fonts; always specify Circular Std across all text to maintain brand consistency.
- Unless part of a photographic element, avoid using Arched Red (#ff0000) as a background or primary interaction color.

### Layout

The page uses a full-bleed layout, filling the entire viewport width, but with content sections that imply a centered, almost grid-like structure within the fluid container. The hero showcases an oversized, commanding headline, often on a solid black background, directly followed by large-scale architectural photography. Sections alternate between expansive white canvases and solid black blocks, creating a distinct visual rhythm without explicit dividers. Content arrangement is often singular, with large imagery or text dominating the screen, or simple two-column text-and-image layouts where text acts as a label. Navigation is a minimal top bar, featuring ghosted text links, and a functional footer.

### Imagery

Imagery primarily consists of high-quality architectural photography, often featuring interior or exterior shots of completed projects. These images are frequently full-bleed or large, contained within the stark white or black sections of the layout. The treatment is raw, with no apparent masking or rounded corners, allowing the sharp lines of the architecture to dominate. Color in photography can be vibrant, especially when showcasing red elements, serving to make architectural details pop. Illustrations are absent. Icons are minimal, utilizing simple outline styles in Ink Black or Canvas White.
