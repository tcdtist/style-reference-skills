---
version: alpha
name: OFF+BRAND.
description: OFF+BRAND. embodies a refined, digital-first aesthetic with a limited monochromatic palette and expressive typography. The visual system features delicate dotted line work, liberal use of negative space, and large, dynamic headlines set against a near-white canvas. Color is introduced sparingly through vibrant gradients in hero elements and subtle brand accents, making these instances feel impactful. Components are generally lightweight, often transparent or outlined, to maintain an airy and unburdened feel.
colors:
  midnight-ink: "#1d1d1d"
  canvas-white: "#e5e4e0"
  pure-white: "#ffffff"
  frost-gray: "#bfbebe"
  gradient-aura: "#facb00"
  brand-orange: "#ff642f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: 0.078px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
    letterSpacing: 0.078px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.078px
  subheading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1
    letterSpacing: 0.078px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 0.8
    letterSpacing: 0.69px
  heading:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 0.8
    letterSpacing: 0.88px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 0.8
    letterSpacing: 0.99px
  display:
    fontFamily: "system-ui"
    fontSize: 103px
    lineHeight: 0.8
    letterSpacing: 1.2px
spacing:
  elementGap: 19px
  sectionGap: 76px
components:
  hero-headline:
    role: Dominant page titles and impactful statements.
  ghost-action-link:
    role: Secondary actions and navigations.
  feature-card:
    role: Displaying work examples or service offerings.
  brand-logo-grid-item:
    role: Displaying client logos or trusted partners.
  muted-body-text:
    role: Descriptive paragraphs and detailed information.
---

## Overview

**North Star:** Sculpted digital canvas.

OFF+BRAND. embodies a refined, digital-first aesthetic with a limited monochromatic palette and expressive typography. The visual system features delicate dotted line work, liberal use of negative space, and large, dynamic headlines set against a near-white canvas. Color is introduced sparingly through vibrant gradients in hero elements and subtle brand accents, making these instances feel impactful. Components are generally lightweight, often transparent or outlined, to maintain an airy and unburdened feel.

### Do's

- Use Canvas White (#e5e4e0) as the primary page background.
- Apply Midnight Ink (#1d1d1d) for all main text and prominent UI elements.
- Employ Ataero Retina OB Edition as the sole typeface, utilizing its various sizes and weights to create hierarchy.
- Maintain generous letter-spacing, especially for headlines (e.g., 0.0500em at 103px) to enhance the airy aesthetic.
- Structure layouts with a comfortable density, allowing ample negative space and 76px section gaps.
- Incorporate the Gradient Aura (linear-gradient(255deg, #facb0, #f06ba8 30%, #78bae6 65%, #ffffff)) only for large, singular decorative elements, not for functional UI.
- Use a default border radius of 9.52381px for interactive elements and containers like cards.

### Don'ts

- Avoid using multiple typefaces; Ataero Retina OB Edition is the only sanctioned font.
- Do not introduce new saturated primary colors; limit color accents to the Gradient Aura and Brand Orange (#ff642f) sparingly.
- Do not use heavy shadows or strong elevation; prefer subtle borders (1px dashed in Frost Gray #bfbebe) or a complete absence of shadows.
- Do not overcrowd sections; prioritize readability and a sense of open space over information density.
- Avoid solid, filled buttons; prefer ghost-style links or subtle outlined interactive elements.
- Do not use dark backgrounds for entire sections; maintain a light-themed interface with Canvas White (#e5e4e0) or Pure White (#ffffff) as dominant surfaces.
- Do not use standard underline styles for links; implement custom hover states like border-transitions for ghost links.

### Layout

The page employs a full-bleed, max-width contained layout with centered content blocks that have generous horizontal margins, creating an expansive feel. The hero section is full-bleed, featuring a centered headline overlaid on a large, abstract gradient sphere. Sections maintain a consistent vertical rhythm with 76px spacing, creating distinct divisions without hard lines. Content is primarily arranged in centered stacks or two-column text-left/image-right configurations. Logo grids and feature blocks often appear in 3-column layouts. Navigation is represented by subtle text links, maintaining a minimal and uncluttered top bar appearance, with a scroll indicator for initial guidance.

### Imagery

This design system relies heavily on abstract graphics and subtle iconography. Main imagery features large, soft-focus gradients or ethereal, spherical abstract graphics that serve as atmospheric backdrops. Product and client visuals are presented as clean, often desaturated or monochromatic logos within structured grids, or as tight, focused wireframe product illustrations that highlight detail without overwhelming color. Icons are minimal, outlined, and monochromatic (Midnight Ink #1d1d1d on Canvas White #e5e4e0), using a fine stroke weight, and primarily serve as functional indicators or decorative elements in dotted lines.
