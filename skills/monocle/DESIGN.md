---
version: alpha
name: Monocle
description: Monocle's design evokes a classic, authoritative editorial feel, grounded in high-contrast typography on a clean white canvas. The system prioritizes crisp lines, clear hierarchy, and restraint over flourish, creating an environment where content takes center stage. Signature elements include the tight letter-spacing on headlines, the use of a custom serif font for primary content, and a sparse accent palette that highlights interactivity and key features without visual noise.
colors:
  canvas-white: "#ffffff"
  printer-s-black: "#000000"
  sterling-gray: "#6e6e6"
  zinc-gray: "#d9d9d9"
  cloud-gray: "#e7e7e7"
  parchment-cream: "#fdfcf3"
  editorial-yellow: "#ffc500"
  sky-blue: "#64d5ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: 0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.13
    letterSpacing: -0.8px
spacing:
  cardRadius: 8px
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 32px
components:
  monocle-radio-podcast-player-card:
    role: 
  article-feature-card-with-category-label-and-read-time:
    role: 
  podcast-episode-cards-grid:
    role: 
  primary-navigation-link:
    role: Interactive element
  call-to-action-button:
    role: Primary action
  icon-button-circular-outline:
    role: Secondary action/icon toggle
  standard-content-card:
    role: Content container
  category-label-card:
    role: Thematic content grouping
  neutral-background-card:
    role: Subtle content grouping
  podcast-player-card:
    role: Dynamic audio content display
  search-input-field:
    role: User input
---

## Overview

**North Star:** Ink-on-paper minimalist; a finely printed journal on pristine stock.

Monocle's design evokes a classic, authoritative editorial feel, grounded in high-contrast typography on a clean white canvas. The system prioritizes crisp lines, clear hierarchy, and restraint over flourish, creating an environment where content takes center stage. Signature elements include the tight letter-spacing on headlines, the use of a custom serif font for primary content, and a sparse accent palette that highlights interactivity and key features without visual noise.

### Do's

- Prioritize Plantin for all article bodies and headlines to maintain editorial voice.
- Use Printer's Black (#000000) on Canvas White (#ffffff) for all primary text and background combinations.
- Apply 8px border-radius for all content cards and UI blocks where a soft edge is needed.
- Reserve Editorial Yellow (#ffc500) exclusively for calls to action and critical interactive states.
- Maintain tight letter-spacing for headlines (e.g., -0.64px for 32px Plantin headings) to enhance visual density.
- Utilize Helvetica Neue for navigation and utility text, setting it at 13px weight 400 for consistency.
- Implement 16px internal padding for all card components to provide sufficient breathing room for content.

### Don'ts

- Do not introduce additional color accents beyond Editorial Yellow (#ffc500) and Sky Blue (#64d5ff).
- Avoid box shadows or elevations; establish depth through background color changes (Canvas White, Cloud Gray, Sky Blue).
- Do not use rounded corners on primary buttons or navigation elements; maintain sharp, defined edges.
- Never use less than 4px spacing between elements unless for iconography or nested micro-interactions.
- Do not deviate from the specified font families; avoid system defaults for major text blocks.
- Avoid large, impactful hero images; focus on contained, editorial photography or illustrations.
- Do not use highly decorative UI elements; stick to functional and minimal design patterns.

### Layout

The page adheres to a max-width 1296px centered layout, creating a contained reading experience. The hero section features a prominent brand marque and headline, often with a large, editorial photograph beneath it, setting an immediate authoritative tone. Content is arranged in a grid-like fashion, employing a combination of single-column article previews and multiple-column card grids for features and related content. The rhythm is established by consistent vertical spacing of 32px between major sections and 16px padding within cards. Navigation is persistent at the top, splitting into a utility bar and a primary category navigation. The layout is information-dense but organized, resembling a structured print publication.

### Imagery

Imagery is primarily editorial photography and stylized illustrations. Photography is typically tightly cropped, showcasing subjects directly in a high-key or natural light. Illustrations are often line-drawn with minimal flat colors, or possess a distinctive, quirky style (like the plane diagram or the Nic Monisse portrait). Images are usually contained within card structures or embedded directly into the content stream, not used as full-bleed hero elements. They serve an explanatory or illustrative role rather than purely decorative, balancing text-heavy layouts.
