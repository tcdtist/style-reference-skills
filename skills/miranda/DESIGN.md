---
version: alpha
name: Miranda
description: Miranda's visual system evokes a vintage newspaper aesthetic with a modern, high-contrast twist. It combines deeply saturated, almost black backgrounds with warm, desaturated off-white surfaces, creating a dramatic stage for its expressive typography. The layout is structured yet dynamic, featuring oversized type and editorial-inspired content blocks with subtle elevation. This system prioritizes visual impact and textural richness over minimalist austerity.
colors:
  midnight-ink: "#1d1d1b"
  aged-paper: "#cdc6be"
  deep-shadow: "#000000"
  bleached-canvas: "#e2dedb"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.36
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 0.93
    letterSpacing: -2.58px
  display:
    fontFamily: "system-ui"
    fontSize: 446px
    lineHeight: 0.73
    letterSpacing: -4.46px
spacing:
  cardRadius: 11.52px
  buttonRadius: 0px
  elementGap: 14px
  sectionGap: 43px
components:
  filled-button-email-me:
    role: Primary action button.
  feature-card:
    role: Content container for showcased work or information blocks.
  callout-badge:
    role: Small, contextual label for showcasing new content.
---

## Overview

**North Star:** Vintage newsprint, bold headlines.

Miranda's visual system evokes a vintage newspaper aesthetic with a modern, high-contrast twist. It combines deeply saturated, almost black backgrounds with warm, desaturated off-white surfaces, creating a dramatic stage for its expressive typography. The layout is structured yet dynamic, featuring oversized type and editorial-inspired content blocks with subtle elevation. This system prioritizes visual impact and textural richness over minimalist austerity.

### Do's

- Prioritize high contrast between Midnight Ink (#1d1d1b) and Aged Paper (#cdc6be) for readability and visual punch.
- Use Editorial New weight 300 for all body text and secondary headings, leveraging its refined character.
- Implement the square, zero-radius design for all action buttons using Midnight Ink (#1d1d1b) as background and text.
- Apply 11.52px border-radius consistently to all card-like containers and content blocks.
- Utilize extreme letter-spacing (-0.089em for Canopee at 17px, reducing for larger sizes) for display typography to reinforce the editorial aesthetic.
- Employ the subtle offset shadow rgba(29, 29, 27, 0.2) -4px 4px 6px 0px for elevated content cards, rather than hard borders.
- Maintain a comfortable rhythm with element gaps primarily around 14px and card padding at 43.2px.

### Don'ts

- Avoid generic system fonts; always use the specified custom fonts (Editorial New, Canopee, Domaine Display, Germgoth) to maintain brand identity.
- Do not introduce sharp, angular shadows; stick to the soft, tinted shadows derived from Midnight Ink for all elevations.
- Refrain from using highly saturated colors for interface elements; the palette is primarily monochromatic with warm neutrals.
- Do not deviate from the specified padding for cards (43.2px horizontal, 36px top, 43.2px bottom); consistency is key for content blocks.
- Avoid large border-radii on interactive elements like buttons, adhering to the 0px radius for this component.
- Do not apply excessive visual decorations or gradients; the system relies on strong typography, high contrast, and subtle textures.
- Never use automatic letter-spacing for headings; manually apply the specified negative letter-spacing values to achieve the desired tight appearance.

### Layout

The page embraces a contained, centered layout, punctuated by full-bleed sections or oversized typographic elements. The hero section establishes the newspaper aesthetic with a centered, massive headline (e.g., 'MIRANDA'). Content sections often alternate between dark (Midnight Ink) and light (Aged Paper) bands, creating a distinct visual rhythm. Inner sections frequently utilize a two-column grid for text and image combinations, or a more flexible editorial arrangement with asymmetrical content blocks and large, expressive typography. Navigation is subtle, typically a top-right hamburger menu and small, discreet links, maintaining focus on the content blocks. Vertical spacing is consistent but generous, contributing to a comfortable, unhurried reading experience.

### Imagery

The imagery on this site consists primarily of contained, full-color product or artistic shots. Photos and illustrations are presented within rectangular frames atop the Aged Paper (#cdc6be) surface, which usually includes Bleached Canvas (#e2dedb) for the image background itself. The treatment is isolated and contained, with no complex masking or overlapping, resembling framed art or magazine cutouts. Icons, when present, are minimal in style, likely outlined and monochrome to blend into the overall aesthetic.
