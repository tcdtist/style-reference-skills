---
version: alpha
name: Incident
description: Incident.io presents a utilitarian, text-heavy interface on a bright canvas, prioritizing clarity and directness over decorative elements. Its visual identity relies on strong typographic contrast and a minimal use of color, primarily reserving a vivid orange for attention-grabbing accents or brand indicators. Components are lightweight with sharp corners, reflecting an engineering-focused approach to design where function dictates form.
colors:
  canvas-white: "#ffffff"
  platinum-mist: "#efefef"
  ink-black: "#000000"
  deep-graphite: "#161618"
  desert-sand: "#e4d9c8"
  alert-red: "#ff492c"
  flamingo-orange: "#f25533"
  vivid-hue: "#f1641e"
  light-gray-divider: "#dadada"
  medium-gray-divider: "#cccccc"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
spacing:
  elementGap: 16px
  sectionGap: 40px
components:
  default-button:
    role: Interactive element
  ghost-card:
    role: Container, content grouping
  subtle-background-card:
    role: Container, content grouping
---

## Overview

**North Star:** Engineering blueprint on stark white

Incident.io presents a utilitarian, text-heavy interface on a bright canvas, prioritizing clarity and directness over decorative elements. Its visual identity relies on strong typographic contrast and a minimal use of color, primarily reserving a vivid orange for attention-grabbing accents or brand indicators. Components are lightweight with sharp corners, reflecting an engineering-focused approach to design where function dictates form.

### Do's

- Prioritize Times serif for all long-form content and primary headings to maintain a traditional, authoritative voice.
- Use Arial sans-serif exclusively for small functional text like button labels and navigation items, at a size of 13px with normal letter spacing.
- Employ Ink Black (#000000) as the default color for all text, borders, and iconography unless a specific accent is required.
- Apply Platinum Mist (#efefef) for interactive button backgrounds, ensuring text remains Ink Black for maximum contrast.
- Maintain a strict 0px border-radius across all components (buttons, cards) to promote a sharp, angular aesthetic.
- Utilize 16px as the primary element gap for vertical and horizontal spacing between content blocks and interactive elements.
- Reserve Flamingo Orange (#f25533) and Vivid Hue (#f1641e) for brand accents and visual highlights, not for general UI elements like buttons or text.

### Don'ts

- Avoid using rounded corners; maintain the 0px border-radius for all elements.
- Do not introduce new primary colors; stick to the defined neutral palette with specific semantic and brand accents.
- Refrain from heavy drop shadows or elaborate elevation. Subtle box-shadows should be minimal and used sparingly, as seen on images.
- Do not deviate from the specified serif and sans-serif font assignments; mixing them freely will disrupt the visual rhythm.
- Avoid large, impactful background imagery on content sections; the system favors stark white space and clear typography.
- Do not use accent colors for primary CTA backgrounds where a neutral background is defined; accents are for visual punctuation.
- Do not introduce extra padding on cards; maintain the 0px padding for a dense, content-focused presentation.

### Layout

The page maintains a centered max-width content area, providing a structured, contained experience without full-bleed elements dominating the display. The hero section often features a centered headline over a plain background. Section rhythm is marked by consistent vertical spacing (section gap of 40px), maintaining visual separation. Content is arranged in alternating text-left/visual-right patterns or simple centered stacks for clarity. Grid usage is implied for feature listings or team showcases, leveraging the consistent element gap for column spacing. The layout prioritizes information density and readability over expansive visual gestures. Navigation is a standard top bar, likely with a sticky behavior, and a clear, minimal structure.

### Imagery

The site uses a mix of utilitarian visuals: primarily product screenshots or internal tool interfaces, often presented without heavy styling. When present, abstract graphics or icons are flat, typically filled with brand accents like Flamingo Orange or Ink Black, occasionally lightened by Desert Sand. Photography is absent. Icons, when visible, are filled and have a moderate stroke weight, serving an explanatory or decorative role rather than a functional one. Imagery is used to break up text-heavy sections or to illustrate concepts, occupying a moderate visual space. The overall density is text-dominant.
