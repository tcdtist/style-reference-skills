---
version: alpha
name: Hyper Tria
description: Hyper Tria presents as a minimalistic, content-driven agency. Its visual system prioritizes stark contrast and ample whitespace, using black and white as primary communicators. Typography is sharp and impactful, often appearing in large, tracked blocks that command attention. Color is used sparingly, primarily as an accent for subtle interactive states or to denote specific sections, creating a focused and uncluttered user experience.
colors:
  midnight: "#000000"
  canvas: "#ffffff"
  charcoal: "#666666"
  leaf-green: "#0fa64b"
  vivid-blue: "#007bff"
  accent-red: "#ee3a49"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.7
    letterSpacing: 0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.48
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.16
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.11
  display-md:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 0.9
    letterSpacing: -0.02px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.9
    letterSpacing: -0.053px
spacing:
components:
  outlined-navigation-link:
    role: Primary navigation element
  text-link:
    role: Standard interactive text link
  hero-headline:
    role: Large, impactful display text
  section-subheading:
    role: Secondary heading for content blocks
  image-outline-container:
    role: Visual frame for images
  sub-navigation-text:
    role: Secondary menu or language switcher
  footer-copyright:
    role: Legal and branding information in footer
---

## Overview

**North Star:** monochromatic gallery, bold typography

Hyper Tria presents as a minimalistic, content-driven agency. Its visual system prioritizes stark contrast and ample whitespace, using black and white as primary communicators. Typography is sharp and impactful, often appearing in large, tracked blocks that command attention. Color is used sparingly, primarily as an accent for subtle interactive states or to denote specific sections, creating a focused and uncluttered user experience.

### Do's

- Use Midnight (#000000) for primary text and Canvas (#ffffff) for backgrounds to maintain high contrast.
- Apply Aeonik for all headings and substantial text blocks, leveraging its distinct letter-spacing for visual impact.
- Use Vivid Blue (#007bff) exclusively for interactive elements like links and button borders, not for backgrounds.
- Ensure generous vertical spacing between sections (44px-100px) and elements (8px-20px) to uphold a spacious aesthetic.
- Maintain sharp, 0px border-radius for all UI elements to align with the minimalist and precise tone.
- Employ the Leaf Green (#0fa64b) for large background sections to create a clear visual break and inject brand identity.
- Prioritize black and white as the dominant color scheme, reserving brand and accent colors for functional highlights only.

### Don'ts

- Avoid using multiple chromatic colors for aesthetic purposes; restrict their use to functional UI elements.
- Do not introduce rounded corners; all shapes should remain sharp and angular.
- Refrain from using shadows or gradients, as the system relies on flat surfaces and high contrast.
- Do not deviate from the specified letter-spacing for Aeonik, especially at larger sizes, as it's a key brand identifier.
- Avoid dense, information-heavy blocks of text; break content into manageable, well-spaced segments.
- Do not use Vivid Blue (#007bff) or Leaf Green (#0fa64b) as primary text colors unless the background strongly contrasts in black or white.
- Introduce images without a defined border; images should always be visually contained.

### Layout

The page employs a full-bleed layout for background elements, but main content is often centered and contained, although no strict `pageMaxWidth` is enforced. The hero section can be full-viewport with large, tracked typography against a dark background, sometimes featuring a prominent 3D graphic. Section rhythm is driven by alternating background colors (e.g., white, black, Leaf Green) and consistent, generous vertical spacing. Content often appears in single-column stacks or a simple two-column arrangement, where a visual (image/graphic) balances off a block of large, impactful text. Navigation is a simple top-bar with text links and a language switcher, suggesting a minimal approach.

### Imagery

This site utilizes a mix of high-quality product photography and sparse, minimalist graphics. Photography often features tight crops of products (like the breakfast box) against clean, light backgrounds, highlighting texture and form without distracting context. In some cases, unique 3D renders or abstract metallic graphic elements (like the 'H' symbol) are used to create a distinctive brand identity, often with a stark, reflective quality against dark backgrounds. Iconography is minimal: often simple, thin-lined arrows or social media icons. Imagery serves to showcase work or add abstract branding, maintaining a generally uncluttered visual field.
