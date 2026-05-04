---
version: alpha
name: SuperHi Basic Income
description: SuperHi Basic Income uses a stark, high-contrast digital poster aesthetic. A dominant, vivid blue acts as both a brand identifier and functional element across an otherwise white canvas, creating a distinctive two-zone layout. Typography is compact and precise, maintaining a clear hierarchy without resorting to heavy weights. Component accents are minimal, often relying on border treatments or small details to signify interactivity, reinforcing a lightweight, almost ephemeral sense of interaction.
colors:
  canvas-white: "#ffffff"
  superhi-blue: "#2727e6"
  hover-sky: "#9de6fa"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.67
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.46
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
spacing:
  buttonRadius: 16px
  elementGap: 8px
  sectionGap: 32px
components:
  text-link:
    role: Inline navigation, references, and emphasized text.
  interactive-orb-button:
    role: Primary call to action in a decorative, circular form.
  pill-button:
    role: Secondary action or tag, often with text content.
  faq-accordion-item:
    role: Expandable content block for questions and answers.
  checkbox-radio-button:
    role: Interactive selections with a custom visual style.
---

## Overview

**North Star:** Bifurcated digital canvas

SuperHi Basic Income uses a stark, high-contrast digital poster aesthetic. A dominant, vivid blue acts as both a brand identifier and functional element across an otherwise white canvas, creating a distinctive two-zone layout. Typography is compact and precise, maintaining a clear hierarchy without resorting to heavy weights. Component accents are minimal, often relying on border treatments or small details to signify interactivity, reinforcing a lightweight, almost ephemeral sense of interaction.

### Do's

- Always apply vertical sections that divide the page into a 30%/70% column split, with the left column being full-bleed SuperHi Blue (#2727e6) and the right column Canvas White (#ffffff).
- Use Basis font for nearly all textual content, reserving DDC for highly decorative or branded headings.
- Ensure all interactive elements, including links and button borders, use SuperHi Blue (#2727e6) as their primary accent color.
- Implement `ease` timing functions for all transitions to maintain a unified, expressive motion personality.
- Apply 32px padding consistently for card-like elements or content sections.
- Leverage a 16px radius for all button components where a contained shape is needed, and 50px for pill-shaped elements.
- Prioritize single pixel borders in SuperHi Blue (#2727e6) to define interactive zones rather than heavy backgrounds.

### Don'ts

- Do not introduce new chromatic colors outside of SuperHi Blue and its hover state; maintain the high-contrast blue/white aesthetic.
- Avoid using drop shadows or complex elevation states; rely on border treatments and color contrast for visual hierarchy.
- Do not use generic system fonts unless absolutely necessary; always prefer Basis and DDC.
- Refrain from using heavily filled buttons; ghost buttons with SuperHi Blue borders are the preferred interactive style.
- Do not deviate from the comfortable density with 8px element gaps and 32px section/card padding.
- Avoid decorative imagery; focus on typography and simple geometrical forms to convey information and brand identity.

### Layout

The page adheres to a two-zone, full-height vertical division: a full-bleed SuperHi Blue (#2727e6) left column (approx. 30% width) containing branding and key status, and a full-bleed Canvas White (#ffffff) right column (approx. 70% width) for all primary content. The hero section features a centered headline over the right content area. Content flow within the right column is primarily vertical stacking of text blocks, often with left-aligned headings and body text. Interactive elements like questions and checkboxes use simple list structures. There is no explicit grid for cards, but elements like benefit lists are presented as linear stacks. Navigation is minimal, integrated into the header and within content links.

### Imagery

The site's visual language is abstract and functional, dominated by a dynamic, dotted, wireframe-like globe rendering on the left panel, which serves as a decorative brand element rather than contextual content. No photography or complex illustrations are used. Icons are minimal, represented by simple geometric shapes like play triangles and list circles, rendered in SuperHi Blue. The overall density is text-dominant, with imagery taking a atmospheric, abstract role.
