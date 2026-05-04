---
version: alpha
name: Clase bcn
description: Clase bcn employs a stark, editorial aesthetic centered on strong typography and a modular layout. It operates primarily in monochrome with occasional, deliberate use of vivid, flat color blocks as section backgrounds, creating a distinct visual break and impact. The design emphasizes clear content presentation through large, confident text and a comfortable spacing rhythm, allowing the eye to focus on the work examples the agency presents without distraction. Interactive elements are subtly integrated, maintaining the clean, minimalist feel.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  deep-graphite: "#0a0a0a"
  light-concrete: "#e8e8e8"
  muted-sage: "#adada0"
  ash-gray: "#939393"
  silver-link: "#aaaaaa"
  jet-black: "#0a0000"
  charcoal-slate: "#262a36"
  blush-sand: "#efccbe"
  vivid-succulent: "#43d491"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.79
  body:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.11
spacing:
  elementGap: 20px
  sectionGap: 100px
components:
  navigation-link:
    role: Main navigation items and utility links.
  project-card-light-concrete:
    role: Standard project listing block.
  project-card-jet-black:
    role: Alternative dark project listing block.
  project-card-blush-sand:
    role: Accent themed project listing block.
  project-card-vivid-succulent:
    role: Accent themed project listing block.
---

## Overview

**North Star:** Crisp Editorial Blocks

Clase bcn employs a stark, editorial aesthetic centered on strong typography and a modular layout. It operates primarily in monochrome with occasional, deliberate use of vivid, flat color blocks as section backgrounds, creating a distinct visual break and impact. The design emphasizes clear content presentation through large, confident text and a comfortable spacing rhythm, allowing the eye to focus on the work examples the agency presents without distraction. Interactive elements are subtly integrated, maintaining the clean, minimalist feel.

### Do's

- Always use 'SuisseIntl-Regular' for all text elements to maintain typographic consistency.
- Utilize 0px border-radius universally to enforce a sharp, modern aesthetic.
- Apply `Ink Black` (#000000) for primary text and `Canvas White` (#ffffff) for backgrounds to ensure high contrast.
- Use `Ash Gray` (#939393) for secondary navigation or less prominent text to create subtle hierarchy.
- Employ `Vivid Succulent` (#43d491), `Blush Sand` (#efccbe), `Jet Black` (#0a0000), or `Muted Sage` (#adada0) as solid background blocks for feature sections to create visual impact and delineate content areas. Do not use gradients.
- Maintain a comfortable rhythm with `elementGap` at 20px for internal component spacing and `sectionGap` at 100px between large content blocks.
- Ensure all interactive links, particularly 'See the case' links, are rendered in `Ink Black` or `Canvas White` depending on the background, with a distinct right arrow graphic.

### Don'ts

- Do not use rounded corners; the system is defined by its hard edges.
- Avoid any drop shadows or elevation effects; the design relies on flat, layered blocks of color and content.
- Do not introduce new typefaces; 'SuisseIntl-Regular' is the sole typographic voice.
- Refrain from using gradients; all color applications should be flat and solid.
- Do not vary from the established spacing relationships; 20px for elements and 100px for sections are fixed.
- Avoid decorative imagery that competes with the editorial typography; visuals are primarily large, full-bleed backgrounds for project cards.
- Never use generic blue for links; links should be `Ink Black` or `Canvas White` to match the surrounding text.

### Layout

The page adheres to a full-bleed layout, where content sections stretch across the entire viewport width. The hero section features a prominent headline over a large background image. Section rhythm is established through alternating background colors and large vertical `sectionGap` of 100px, creating distinct modular blocks. Content arrangement within these blocks is typically a centered stack of text and links. There are no explicit grid systems for cards, instead relying on full-width content blocks for each project. Navigation is a minimalist top bar with links on the left and a language selector on the right, which remains static at the top.

### Imagery

The visual language is dominated by large-format, full-bleed product or architectural photography and occasional abstract graphic elements. Photography is often presented as background fillers for case study cards, showcasing detailed work or brand aesthetics. The treatment is primarily raw edges, contained within solid color blocks, establishing a gallery-like presentation. There are no small, decorative icons; iconography is limited to simple functional arrows. Imagery serves as evocative mood-setting and product showcase rather than explanatory content, with a high density, often filling entire sections.
