---
version: alpha
name: Zeus Jones
description: Zeus Jones projects a refined, artistic sensibility with a foundational off-white canvas and a rich, muted chromatic dark gray that anchors all textual and interactive elements. The design is characterized by large, confident typography that mixes serifs and sans-serifs, creating a dynamic yet sophisticated feel. Playful, pill-shaped buttons with deep curves add a touch of approachability against substantial spacing and a generally sparse layout. The hero section often features dramatic, ethereal gradient backgrounds that contrast with the otherwise understated UI.
colors:
  canvas-parchment: "#fcfaf3"
  greyscale-architect: "#1a1c2c"
  card-dove: "#ebe9e4"
  night-icon: "#000000"
  hero-gradient: "#9c8ec4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.6px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.07
    letterSpacing: -1.2px
spacing:
  cardRadius: 20px
  buttonRadius: 1584px
  elementGap: 16px
  sectionGap: 40px
components:
  ghost-navigation-link:
    role: Navigation item and basic textual link.
  pill-button:
    role: Primary call to action.
  work-showcase-card:
    role: Displaying work examples.
  underlined-input-field:
    role: Standard text input.
  header-navigation:
    role: Top-level site navigation.
---

## Overview

**North Star:** Ethereal canvas with typographic gravitas. A sun-drenched, off-white digital gallery where bold typography and artful backgrounds coalesce.

Zeus Jones projects a refined, artistic sensibility with a foundational off-white canvas and a rich, muted chromatic dark gray that anchors all textual and interactive elements. The design is characterized by large, confident typography that mixes serifs and sans-serifs, creating a dynamic yet sophisticated feel. Playful, pill-shaped buttons with deep curves add a touch of approachability against substantial spacing and a generally sparse layout. The hero section often features dramatic, ethereal gradient backgrounds that contrast with the otherwise understated UI.

### Do's

- Use 'Canvas Parchment' (#fcfaf3) as the default background for all page sections unless an accent background is specified.
- Employ 'Greyscale Architect' (#1a1c2c) for all primary body text, headlines, and interactive elements to maintain visual consistency.
- Apply ZJSansDisplay at weight 400 for most body and navigation text, with specific larger sizes for headings as defined in the type scale.
- Utilize FeatureDeckLight weight 100 for large, impactful display headings (60px, 90px) to establish a distinctive, light-weight typographic presence.
- Ensure all interactive buttons conform to the pill shape with a radius of 1584px or 1782px.
- Maintain comfortable '20px' border-radius for cards, images, and other contained UI elements.
- Incorporate a 40px section gap between major content blocks to ensure ample breathing room and a spacious layout.

### Don'ts

- Avoid using bright, saturated colors for primary UI elements; reserve high chroma for abstract backgrounds or illustrative accents.
- Do not use box-shadows for elevation; rely on background color changes or subtle borders for surface distinction.
- Do not break the pill-shaped button aesthetic with square or slightly rounded corners; always aim for maximum curvature.
- Avoid tight, condensed layouts; emphasize spaciousness and generous internal padding for components.
- Do not use generic system fonts; always adhere to ZJSansDisplay and FeatureDeckLight for brand consistency.
- Do not introduce heavy borders or outlines; stick to ghost interactions or solid, rich dark gray fills for interactive elements.
- Never center align large blocks of text; maintain a left-aligned, spacious text presentation.

### Layout

The page primarily uses a full-bleed structure, particularly for impactful hero sections like the gradient background. Content within sections is often given ample horizontal padding, creating a comfortable breathing room. Sections maintain a consistent vertical rhythm with a 40px `sectionGap`. Layouts within sections frequently alternate between text-dominant blocks and engaging, multi-column card grids for showcasing work. The header is a sticky, full-width element, providing persistent navigation. The overall feel is spacious and uncrowded, allowing key typographic elements and imagery to stand out.

### Imagery

The site uses a mix of bespoke, abstract gradient backgrounds (often full-bleed in hero sections) and carefully curated product/project showcase imagery. Photography and product shots are contained within cards with 20px rounded corners, often monochromatic or with a muted color palette to blend with the overall design. Icons are minimalist, typically black (#000000) or 'Greyscale Architect' (#1a1c2c) and filled, reflecting a clean, direct visual style. Imagery functions primarily to showcase work and set an atmosphere, not as merely decorative elements. Density is medium, with images serving as visual anchors within content blocks.
