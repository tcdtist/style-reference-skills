---
version: alpha
name: Benlongdendesign
description: Benlongdendesign employs a stark, high-contrast visual language reminiscent of brutalist typography. The system is built on a foundation of absolute black and white, achieving visual power through scale and geometric precision rather than color. Typography is the primary visual element, commanding attention with large, condensed forms, while UI elements are minimal and primarily functional. The overall atmosphere is direct, bold, and unapologetic, using negative space to emphasize strong textual statements.
colors:
  absolute-black: "#000000"
  canvas-white: "#f6f6f6"
  element-white: "#ffffff"
  email-border-dark: "#121212"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.6
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.2
spacing:
  elementGap: 5px
  sectionGap: 43px
components:
  hero-headline:
    role: Statement typography for primary page headings.
  section-subtitle:
    role: Secondary headings for project titles or thematic sections.
  body-text-block:
    role: Standard text content for paragraphs and descriptive information.
  link-with-border:
    role: Interactive text links, like email addresses.
  about-navigation-item:
    role: Top-level navigation item.
  project-metadata:
    role: Descriptive tags associated with project entries.
---

## Overview

**North Star:** monochromatic typographic power

Benlongdendesign employs a stark, high-contrast visual language reminiscent of brutalist typography. The system is built on a foundation of absolute black and white, achieving visual power through scale and geometric precision rather than color. Typography is the primary visual element, commanding attention with large, condensed forms, while UI elements are minimal and primarily functional. The overall atmosphere is direct, bold, and unapologetic, using negative space to emphasize strong textual statements.

### Do's

- Prioritize typography as the primary visual element, using swis721_btroman across all text roles.
- Maintain extreme contrast using only Absolute Black (#000000) and Element White (#ffffff) for text and backgrounds.
- Utilize Element White (#ffffff) for text on Absolute Black (#000000) backgrounds to ensure maximum readability and impact.
- Apply Absolute Black (#000000) as default for page backgrounds and thick content separation where a stark division is desired.
- Use letter-spacing 'normal' for all text, avoiding custom tracking to preserve the intrinsic character spacing of swis721_btroman.
- Separate content blocks and paragraphs with vertical margins of 20px using the base font size as a visual guide.
- Introduce elements like email links with a 1px solid border in Email Border Dark (#121212) to subtly indicate interactivity.

### Don'ts

- Do not introduce any chromatic colors into the UI; strictly adhere to the black-and-white palette.
- Avoid using multiple font families or varying font weights beyond the available 200 for swis721_btroman.
- Do not add shadows or gradients to any UI elements; design is flat and relies on color contrast and spatial arrangement.
- Do not add decorative rounded corners to any component; maintain sharp, geometric edges throughout the design.
- Avoid excessive padding or large element gaps that soften the compact density; stick to 5px for elements and 20px for internal card padding.
- Do not use subtle neutral shifts for surface differentiation; rely on stark black/white changes for distinct sections.

### Layout

The page employs a full-bleed layout alternating between Absolute Black (#000000) and Canvas White (#f6f6f6) sections, creating a strong vertical rhythm of monochromatic blocks. The hero section is full-bleed black with oversized white typographic compositions. Content is primarily arranged in single columns with occasional textual elements right-aligned beside larger headings, or project examples appearing in a waterfall-like list. There are no explicit grid systems for features or cards, rather a fluid stacking of content. Vertical spacing between logical sections is managed by the stark color changes and sectionGap of 43px. Navigation is minimal, consisting of a single 'About' link and email contact in the header/footer.

### Imagery

Imagery is functional, primarily comprising tightly cropped product screenshots or promotional artwork integrated directly into the layout. These visuals are typically contained within rectangular bounds, often bordered by Absolute Black or Element White depending on context, and serve to showcase work examples rather than provide decorative atmosphere. There is a complete absence of photography or abstract graphics; the visual language is all about direct presentation and bold typography interacting with sharp-edged imagery. Icons are minimal, represented only by a white bullet point in navigation, suggesting a content-dominant approach.
