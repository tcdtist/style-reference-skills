---
version: alpha
name: Structured
description: Structured presents a brand identity rooted in classical artistry, juxtaposing vintage-inspired illustrations with modern, refined typography. The visual system features large, serif headlines that command attention but are carefully tracked for legibility, paired with compact, utilitarian sans-serif body text. A largely achromatic palette of muted greys and blacks provides a sophisticated backdrop, allowing the rich, painterly imagery to provide the primary visual interest. Surfaces are flat and borderless, emphasizing the content within a contained, almost gallery-like presentation.
colors:
  greige-canvas: "#ebebeb"
  black-ink: "#000000"
  off-white-text: "#dfdcd5"
  slate-surface: "#c4c3b6"
  smoke-grey: "#e7e5e4"
  warm-accent-grey: "#595855"
  white-highlight: "#ffffff"
  midtone-image-grey: "#808080"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 94px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 374px
    lineHeight: 1.1
spacing:
  cardRadius: 9px
  buttonRadius: 0px
  elementGap: 6px
  sectionGap: 25px
components:
  ghost-navigation-link:
    role: Primary navigation elements in header/footer
  action-button-dark:
    role: Call to action button, ghost style
  action-button-light:
    role: Call to action button, ghost style for light backgrounds
  subtle-action-tag:
    role: Small, interactive information tags
  feature-card:
    role: Display individual features or content blocks
  feature-highlight-card:
    role: Elevated card for prominent features
---

## Overview

**North Star:** Classical art gallery

Structured presents a brand identity rooted in classical artistry, juxtaposing vintage-inspired illustrations with modern, refined typography. The visual system features large, serif headlines that command attention but are carefully tracked for legibility, paired with compact, utilitarian sans-serif body text. A largely achromatic palette of muted greys and blacks provides a sophisticated backdrop, allowing the rich, painterly imagery to provide the primary visual interest. Surfaces are flat and borderless, emphasizing the content within a contained, almost gallery-like presentation.

### Do's

- Use Davinci for all prominent headlines and titles, ensuring letter-spacing is precisely adjusted according to the scale: -0.0090em for largest, -0.0050em for medium, -0.0010em for smaller titles.
- Employ Helvetica Now for all body text, functional UI elements, and navigation links. Maintain its natural letter-spacing ('normal') for maximum readability.
- Maintain a primary achromatic palette using Greige Canvas (#ebebeb) for page backgrounds, Black Ink (#000000) for text, and Slate Surface (#c4c3b6) for card-like elements.
- Apply 0px border-radius to all interactive ghost buttons and 9px border-radius to subtle action tags for textural contrast.
- Utilize rich, classical illustrations as primary visual elements, framed against the muted UI to draw focus and provide brand character.
- Structure content with ample negative space. Prioritize an elementGap of 6px and cardPadding of 18px to maintain an open and organized feel.
- Ensure UI controls and interactive text (e.g., 'mint maxBTC') stand out by using Black Ink (#000000) text on light backgrounds or Off-White Text (#dfdcd5) on dark backgrounds, often with a matching border for ghost buttons.

### Don'ts

- Avoid using highly saturated or vibrant colors for primary UI elements; reserve these for imagery and content, if at all.
- Do not introduce sharp corners on major content cards; the system prefers 9px corner radius where appropriate for grouping content.
- Refrain from using heavy shadows or complex elevation; the design system leans towards flat interfaces and subtle visual hierarchy.
- Do not deviate from Davinci's or Helvetica Now's assigned roles; mixing their usage will undermine the established typographic contrast.
- Do not use generic, modern stock photography; visuals should align with the classical, painterly aesthetic of the illustrations.
- Avoid dense, information-heavy blocks of text without sufficient line-height; prioritize the established line-heights for legibility.

### Layout

The page primarily uses a max-width contained layout, centered on the screen, though the top hero section appears full-bleed or very wide, bleeding into the edges of the browser with large background illustrations. The hero features a large, centered headline, setting a theatrical tone. Sections flow with consistent vertical spacing, often alternating between very dark and very light backgrounds. Content is frequently presented in a centered stack, but also utilizes a 3-column grid for feature articulation, where each column typically contains an illustration above a text block. Navigation is minimal, consisting of a top-right header for links.

### Imagery

The site heavily relies on classical, painterly illustrations. These images are often full-bleed or contained within circular masks, acting as a primary decorative and atmospheric element rather than strictly explanatory. They feature intricate detail, naturalistic lighting, and a subdued, earthy color palette, reminiscent of old master paintings. Photography is absent. Icons, when present, are minimal vector outlines, often incorporating a subtle geometric or abstract quality, designed not to compete with the rich illustrations.
