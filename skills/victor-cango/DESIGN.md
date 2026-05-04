---
version: alpha
name: Victor Cango
description: Victor Cango's design system cultivates a bold, editorial aesthetic with high-contrast typography as its primary visual lever. The stark achromatic palette emphasizes content, allowing the expressive serif and sans-serif typefaces to dictate hierarchy and tone. Understated interactions and minimal UI elements focus attention on the typographic compositions and carefully placed visual assets, often with a subtly distorted or layered quality. The overall impression is one of confident, art-directed communication.
colors:
  ink-obsidian: "#0f0f0f"
  canvas-parchment: "#f7f7f7"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.3
    letterSpacing: -0.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -0.094px
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  navigation-link-underlined:
    role: Interactive text link, primarily for navigation.
  hero-headline:
    role: Primary page title or major section heading.
  header-clock:
    role: Decorative time display in the header.
  body-text-paragraph:
    role: General informational text.
  footer-section:
    role: Container for copyright, contact info, and secondary navigation.
---

## Overview

**North Star:** Editorial type on stark canvas

Victor Cango's design system cultivates a bold, editorial aesthetic with high-contrast typography as its primary visual lever. The stark achromatic palette emphasizes content, allowing the expressive serif and sans-serif typefaces to dictate hierarchy and tone. Understated interactions and minimal UI elements focus attention on the typographic compositions and carefully placed visual assets, often with a subtly distorted or layered quality. The overall impression is one of confident, art-directed communication.

### Do's

- Prioritize Ink Obsidian (#0f0f0f) for all primary text and critical UI elements against Canvas Parchment (#f7f7f7) backgrounds to ensure high contrast.
- Use century-old-style-std for expressive and editorial headlines, specifically at 50px with a letter-spacing of -0.0940em.
- Apply MetroSans for functional text elements, navigation, and body copy headings, ensuring 21px/24px sizes use -0.0500em letter-spacing.
- When creating interactive links, use Ink Obsidian (#0f0f0f) text and an Ink Obsidian (#0f0f0f) 1px underline, offset by 6px padding-bottom.
- Maintain a clear visual hierarchy by utilizing the distinct styles of century-old-style-std (serif) and MetroSans (sans-serif) purposefully.
- Structure sections with a minimum vertical separation of 48px to create comfortable density in the layout.
- Incorporate 16px padding on interior content blocks and cards to provide ample breathing room for text.

### Don'ts

- Do not introduce new primary background or text colors; adhere strictly to Ink Obsidian (#0f0f0f) and Canvas Parchment (#f7f7f7).
- Avoid using decorative borders or drop shadows on cards or elements; rely on typography and spacing for separation.
- Do not deviate from the specified letter-spacing values for type roles, especially for larger headings and navigation where it defines the character.
- Refrain from using color to indicate interactive states; underlines and bolding in Ink Obsidian (#0f0f0f) are preferred.
- Do not use generic system fonts as substitutes for century-old-style-std or MetroSans without explicit approval, as their unique character is central.
- Avoid overly dense content blocks without sufficient element gaps; ensure 16px spacing between most adjacent UI elements.
- Do not use corner radius on any UI elements; maintain sharp, crisp edges throughout the design.

### Layout

The page primarily uses a contained, centered layout for content sections, set against a full-bleed Canvas Parchment background. The header is minimal, containing navigation links and a clock, with a clear separation of elements. The hero section features large, expressive typography centrally placed, often juxtaposed with abstracted graphical elements. Content sections typically flow with consistent vertical spacing (48px section gap), and text blocks maintain generous padding (16px) to enhance readability and visual impact, suggesting a content-dominant composition with artful visual accents.

### Imagery

This site features a blend of abstract, textural graphics, such as the prominent gold-textured card, and raw photographic elements, like physical paper with text. Imagery is often presented at an angle or partially obscured, conveying a sense of artistic arrangement and deconstruction. The overall treatment is art-directed and editorial, focusing on tactile qualities and visual intrigue rather than typical product imagery or lifestyle photography. Icons are minimal, likely text-based or simple vector underlines, emphasizing the typographic core.

### Elevation

The design intentionally avoids shadows, relying on flat surfaces and high typographic contrast to create visual hierarchy. All elements exist on a single, uniform plane, imparting a direct and honest aesthetic.
