---
version: alpha
name: Pedro Duarte
description: This design evokes a feeling of restrained, almost academic cool, like a scholar's personal archive. It employs a predominantly monochrome palette, allowing a deep, dark background to create a focused, low-distraction environment. The use of a custom monospaced-esque typeface with tight letter spacing reinforces a technical, precise aesthetic, while subtle red accents signify active navigation without overt visual noise. The core visual identity is minimalist, relying on strong typography and the deliberate absence of ornamentation.
colors:
  pitch-black: "#000000"
  frost-white: "#ffffff"
  alabaster: "#eeeeee"
  active-red: "#ff5b38"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1
    letterSpacing: -0.01px
spacing:
  buttonRadius: 9999px
  elementGap: 11px
  sectionGap: 180px
components:
  pill-outline-keyword-badges:
    role: 
  navigation-bar-with-active-inactive-states:
    role: 
  hero-bio-text-block:
    role: 
  pill-outline-button:
    role: Interactive elements, highlighted keywords in body text.
  navigation-link-active:
    role: Primary navigation.
  navigation-link-inactive:
    role: Primary navigation.
  invisible-link:
    role: Inline text links within body content.
  page-header:
    role: Top-level page identification.
---

## Overview

**North Star:** Typewriter on a dark slate. The stark contrast of white text against a deep black background, punctuated by precise typography and minimal color, creates a sense of focused intention.

This design evokes a feeling of restrained, almost academic cool, like a scholar's personal archive. It employs a predominantly monochrome palette, allowing a deep, dark background to create a focused, low-distraction environment. The use of a custom monospaced-esque typeface with tight letter spacing reinforces a technical, precise aesthetic, while subtle red accents signify active navigation without overt visual noise. The core visual identity is minimalist, relying on strong typography and the deliberate absence of ornamentation.

### Do's

- Maintain a predominantly monochrome palette using Pitch Black (#000000) for backgrounds and Frost White (#ffffff) for primary text, reserving Alabaster (#eeeeee) for secondary text and subtle accents.
- Utilize Neue Montreal (or IBM Plex Mono) for all display headings and primary body content, ensuring a consistent letterSpacing of -0.01em for a precise, technical feel.
- Apply 9999px border-radius to all interactive buttons and highlighted inline elements to create distinct 'pill' shapes.
- Use Active Red (#ff5b38) exclusively as an underline for active navigation items, limiting chromatic color to functional indicators.
- Structure layout with generous section gaps of 180px, creating ample vertical breathing room between content blocks.
- Elevate keywords in body copy using the Pill Outline Button style with a 0px vertical padding and 11.2px horizontal padding to integrate them seamlessly into text flow.

### Don'ts

- Avoid introducing additional saturated colors beyond the subtle Accented Red (#ff5b38) for any decorative purpose.
- Do not vary letter spacing unless explicitly defined within the typography scale; the tight -0.01em is a core distinctive feature.
- Do not use box-shadows or complex gradients; rely on color contrast and typographic hierarchy for visual differentiation.
- Avoid using system default rounded corners; all rounded elements must conform to the 9999px pill radius.
- Do not use images or illustrations as primary content elements; prioritize text and subtle interactive components.

### Layout

The page model is full-bleed, extending content edge-to-edge horizontally within its dark theme. The hero section presents text centered prominently, establishing a focused, direct communication. Section rhythm is primarily dictated by large vertical section gaps (180px), creating distinct, spacious blocks. Content arrangement is typically centered text stacks, with no complex grid structures or asymmetric compositions. Navigation is a minimalist top-bar with plain text links; there's no sticky header or complex menus, maintaining an uncluttered interface.

### Imagery

The site's visual language is characterized by an absence of traditional imagery like photography or illustration. Instead, it relies entirely on typography and UI elements to convey its message. The only 'visuals' are the outlined 'pill' components which act as textual highlights and interactive cues, functioning akin to abstract icons within the textual canvas. This creates an extremely text-dominant, almost console-like density.
