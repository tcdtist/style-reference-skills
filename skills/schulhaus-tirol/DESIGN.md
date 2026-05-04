---
version: alpha
name: Schulhaus Tirol
description: Schulhaus Tirol embraces an earthy, rustic elegance with its primary focus on rich, warm tones and robust typography. The design system emphasizes distinct content blocks against a deeply saturated background. Text is generally dark and grounded, providing strong contrast while an accent color creates deliberate visual punctuation. Visuals are contained within defined areas, contributing to a feeling of curated information rather than expansive, flowing layouts.
colors:
  terracotta: "#ff7d50"
  carbon-black: "#000000"
  ash-gray: "#e5e7eb"
  charcoal-ink: "#1d1d1b"
  pewter: "#555555"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.42
    letterSpacing: 0.34px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 0.168px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.42
    letterSpacing: 0.68px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.5
    letterSpacing: 0.884px
spacing:
  elementGap: 12px
  sectionGap: 64px
components:
  ghost-button:
    role: Text-only button for navigation or secondary actions, relying on text color for prominence. Appears as a simple text link.
  outlined-input-field:
    role: Minimal input field with distinct padding, designed for unobtrusive data entry.
  modal-dialog:
    role: Overlays content with a Terracotta background to highlight important information.
  section-divider:
    role: Hairline horizontal divider used to visually separate content blocks.
---

## Overview

**North Star:** Warm earthy heritage

Schulhaus Tirol embraces an earthy, rustic elegance with its primary focus on rich, warm tones and robust typography. The design system emphasizes distinct content blocks against a deeply saturated background. Text is generally dark and grounded, providing strong contrast while an accent color creates deliberate visual punctuation. Visuals are contained within defined areas, contributing to a feeling of curated information rather than expansive, flowing layouts.

### Do's

- Always use Terracotta (#ff7d50) as the background for primary content sections to establish the brand's warm, earthy tone.
- Utilize Carbon Black (#000000) for all primary text and calls to action where high contrast is essential.
- Apply Office Times Sharp at font-weight 400 for all headlines and body text, relying on size to define hierarchy.
- Space elements using multiples of 12px for `elementGap` to maintain a comfortable density.
- Implement 1px solid Ash Gray (#e5e7eb) for subtle borders and element separation.
- Use Office Times Sharp Mono with its characteristic letter-spacing for smaller, functional text elements like captions and input labels.
- Ensure all interactive elements, including buttons and inputs, have a borderRadius of 0px to maintain the clean, sharp aesthetic.

### Don'ts

- Avoid using bright or overly saturated colors outside of the Terracotta base, as they will conflict with the muted palette.
- Do not deviate from the specified font weights; the system is designed around the deliberate use of single-weight typefaces.
- Refrain from using shadows or strong elevation for UI elements, as the design emphasizes flat surfaces.
- Do not introduce rounded corners; maintain the sharp, defined edges of existing components.
- Avoid large negative letter-spacing values; the monospaced font is intentionally more open.
- Do not create large, full-bleed images that distract from the typographic focus; images should be contained and integrated with text.
- Do not use generic system fonts; stick to Office Times Sharp and Office Times Sharp Mono for brand consistency.

### Layout

The page primarily uses a full-bleed layout, with content sections extending edge-to-edge. The hero section features a centered headline over a background that appears to be the dominant Terracotta color, possibly with dark imagery overlaying it. Content generally alternates between large, rectangular blocks of text and image sections. There's an underlying grid implied by horizontally aligned content, but specific column counts are not consistently rigid. Overall, the layout feels spacious and content-focused, with strong vertical rhythm established by generously spaced sections.

### Imagery

The imagery on the site consists of diverse photography, including atmospheric landscapes (mountains), candid portraits, and highly stylized, close-up product shots (food). The treatment is primarily isolated within rectangular frames, often appearing on a dark background within the Terracotta page. There are no apparent borders or rounded corners on the images themselves. Imagery serves both decorative and explanatory roles, setting a mood while also showcasing offerings.
