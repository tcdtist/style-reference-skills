---
version: alpha
name: Woven
description: Woven's design system evokes a refined, artisanal mood with a predominantly monochrome palette punctuated by subtle, natural off-whites. Typography is compact and precise, often uppercase with generous tracking, conveying a sense of heritage and meticulous craftsmanship. Components are lightweight and border-focused, with minimal use of shadows, emphasizing content over heavy UI chrome. The overall effect is understated luxury, where visual tension is created through careful spacing and material contrast rather than bold color or complex graphics.
colors:
  carbon: "#232323"
  parchment: "#eeede5"
  porcelain: "#ffffff"
  slate: "#4a4a4a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.63
    letterSpacing: 0.063px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.63
    letterSpacing: 0.094px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.23
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
spacing:
  elementGap: 20px
  sectionGap: 150px
components:
  ghost-button:
    role: Interactive element (e.g. navigation, menu toggles)
  primary-filled-button:
    role: Call to action
  product-card:
    role: Displaying product listings
  circular-card:
    role: Decorative or iconic element container
  underlined-input-field:
    role: Text input areas
---

## Overview

**North Star:** Artisanal parchment and charcoal calligraphy

Woven's design system evokes a refined, artisanal mood with a predominantly monochrome palette punctuated by subtle, natural off-whites. Typography is compact and precise, often uppercase with generous tracking, conveying a sense of heritage and meticulous craftsmanship. Components are lightweight and border-focused, with minimal use of shadows, emphasizing content over heavy UI chrome. The overall effect is understated luxury, where visual tension is created through careful spacing and material contrast rather than bold color or complex graphics.

### Do's

- Use Parchment (#eeede5) as the default background for most page sections.
- Employ Carbon (#232323) for primary headings and body text, maintaining high contrast against light backgrounds.
- Apply all body text and secondary headings using 'Spezia Semi-Mono', emphasizing generous letter-spacing to enhance readability and establish a structured aesthetic.
- Utilize 0px border-radius for all primary interactive elements and most container edges to maintain a sharp, deliberate aesthetic.
- Ensure generous vertical spacing between sections, adhering to the `sectionGap` of 150px to create a spacious, breathable layout.
- Design interactive elements, especially navigation, as ghost buttons with transparent backgrounds and Carbon text, for an understated interface.
- Use 'Spezia' with normal letter spacing for large, impactful headlines to create visual differentiation from the monospaced UI text.

### Don'ts

- Avoid strong, saturated colors; limit the palette to the established neutrals to preserve the brand's understated elegance.
- Do not use box-shadows or heavy elevation for cards or main UI elements; surfaces should appear flat or with subtle border delineations.
- Do not use generic system fonts; always prioritize 'Spezia Semi-Mono', 'Spezia', and 'Figtree' to maintain consistent brand typography.
- Do not introduce rounded corners for primary UI elements; maintain sharp, crisp edges unless a circular card variation is explicitly required for decorative purposes.
- Avoid dense, information-heavy blocks of text; break content into manageable sections with ample negative space.
- Do not add unnecessary padding to ghost buttons; they should remain lightweight and borderless without internal spacing.

### Layout

The page primarily uses a full-bleed layout for background elements, with content contained centrally within an implicit maximum width, visible particularly in the product grids. The hero section often features a centered headline over a background that shifts between the dominant neutrals. Section rhythm is created through alternating Parchment and Porcelain backgrounds, but also through consistent vertical spacing (150px section gap) rather than explicit dividers. Content is arranged in alternating two-column layouts (text left, image right) or centered stacks for headlines and subtext. Product listings appear in responsive card grids. Navigation is a minimalistic top bar with a hamburger menu icon, suggesting a focus on content exploration rather than complex hierarchical navigation.

### Imagery

This design system uses product photography as its primary visual language. Imagery consists mainly of tightly cropped, minimalist product shots (whisky bottles) on pure white or light grey backgrounds. These are contained within defined boundaries without overlapping, often serving as the central focus of a section or within a grid. There are no lifestyle shots, abstract graphics, or 3D renders. Icons are minimal, outlined, and monochromatic (Carbon), serving purely functional roles like navigation or shopping cart indicators. Imagery dense, with products occupying significant visual space in relation to accompanying text, acting as explanatory content and product showcase.
