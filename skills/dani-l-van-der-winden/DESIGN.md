---
version: alpha
name: Daniël van der Winden
description: Daniël van der Winden's personal site embodies a focused, editorial aesthetic, reminiscent of a neatly organized journal or academic publication. It prioritizes clarity and directness through a largely monochrome palette, functional typography, and structured content presentation. Visual elements are sparse, with strong emphasis on text, creating an atmosphere of quiet intellectual authority. The design system is characterized by subtle greys, crisp lines, and a deliberate absence of vibrant color, allowing the content to take center stage.
colors:
  canvas-porcelain: "#e5e7eb"
  ebony-text: "#111827"
  graphite-text: "#374151"
  midnight-ink: "#1a202c"
  jet-button: "#222222"
  shadow-icon: "#000000"
  slate-text: "#2a2a28"
  ash-text: "#676867"
  fog-border: "#c4c6c8"
  stone-text: "#7b7c7c"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  display-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
spacing:
  cardRadius: 3px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Main call-to-action button, conveying prominence.
  email-button:
    role: Secondary action button for personal contacts, slightly softer than primary.
  ghost-icon-button:
    role: Subtle interactive button, often for icons or secondary actions, maintaining minimal visual footprint.
  navigation-link:
    role: Interactive elements within the left-hand navigation, indicating selectable items.
  text-input-default:
    role: Standard input field for user data entry.
  resume-entry-card:
    role: Presenting individual job or project entries in a structured list.
  image-wrapper:
    role: Container for imagery, providing subtle shaping.
---

## Overview

**North Star:** Ordered Editorial Ink

Daniël van der Winden's personal site embodies a focused, editorial aesthetic, reminiscent of a neatly organized journal or academic publication. It prioritizes clarity and directness through a largely monochrome palette, functional typography, and structured content presentation. Visual elements are sparse, with strong emphasis on text, creating an atmosphere of quiet intellectual authority. The design system is characterized by subtle greys, crisp lines, and a deliberate absence of vibrant color, allowing the content to take center stage.

### Do's

- Prioritize text content: use Ebony Text (#111827) and Graphite Text (#374151) for all primary and secondary text, ensuring AAA contrast against Canvas Porcelain (#e5e7eb).
- Maintain a clear hierarchy with Degular for headings and interactive elements, and Blanco for specific editorial and long-form content.
- Utilize Canvas Porcelain (#e5e7eb) as the dominant background and base for all surfaces and subtly defining structural borders.
- Employ consistent vertical rhythm in content sections, defaulting to 27px for body paragraphs and 40px for list item separation.
- Apply 3px border radius to navigation items, links, and contained images for a subtle softening of edges, contrasting with the sharp 0px radius for primary buttons.
- Use Midnight Ink (#1a202c) exclusively for primary filled button backgrounds to signal key actions.
- Distribute elements with a base element gap of 8px, scaling up for larger section spacing where needed.

### Don'ts

- Avoid introducing vibrant or saturated colors; maintain the predominantly monochrome palette with subtle shifts in grey.
- Do not use heavy shadows or excessive elevation; the system relies on subtle borders and spacing for visual separation.
- Refrain from drastically altering font weights or letter spacing beyond the defined Degular and Blanco profiles, especially avoiding tight tracking on body text.
- Do not deviate from the strict 0px radius for primary filled buttons; this is a signature sharp detail.
- Avoid large, ornate, or busy graphical elements; visual communication should remain direct and content-focused.
- Do not use multiple background colors for successive sections; maintain a seamless flow or use Canvas Porcelain with subtle internal borders.
- Do not use generic system fonts; stick to Degular and Blanco to uphold the distinct brand voice.

### Layout

The page primarily uses a contained layout with a maximum width of 1600px, centering content within the Canvas Porcelain background. The hero section presents a combination of text and imagery, arranged as a split screen or with imagery serving as context for the text. Content sections are typically text-dominant, with a clear vertical flow and consistent spacing, avoiding busy or overlapping elements. A prominent left-hand navigation column remains fixed, echoing a desk-bound journal. Features and resume entries are presented in a clean, stacked list-like fashion, defined by strong typographic hierarchy and generous line spacing rather than visual containers. The density is comfortable, with ample breathing room around text blocks and between sections.

### Imagery

Imagery is used sparingly, primarily focusing on candid, slightly desaturated, or monochromatic photography and product shots, often contained within a 3px rounded border. The images serve to provide context or a personal touch rather than being decorative. There are no illustrations or elaborate graphics; the visual language is direct and non-intrusive. Icons are simple, outlined, and monochromatic (Shadow Icon or Ebony Text), acting as functional cues like external link indicators.
