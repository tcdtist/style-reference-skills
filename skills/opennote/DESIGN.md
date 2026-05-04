---
version: alpha
name: Opennote
description: Opennote employs a minimalist, paper-like aesthetic featuring a high-contrast typographical hierarchy set against a soft, near-white canvas. Subtle border treatments and distinct, functional button styles define interactive elements. Color is used sparingly, primarily for accent and to distinguish action states, creating moments of focus within an otherwise calm and content-centric design.
colors:
  parchment: "#fffdf8"
  ink-black: "#0a0a0a"
  slate-gray: "#474747"
  ash-gray: "#8c8c8c"
  whisper-border: "#e5e5e5"
  ghost-border: "#d1d1d1"
  burnt-umber: "#512906"
  blue-violet: "#242d64"
  forest-green: "#0c3b1a"
  crimson-blush: "#5e0831"
  goldenrod: "#ffc934"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.12
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.08
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 12px
  sectionGap: 40-80px
components:
  primary-filled-button:
    role: Main call to action, drawing immediate attention.
  secondary-outlined-button:
    role: Alternative actions, less emphasized than the primary.
  ghost-navigation-link:
    role: Main navigation items, in-text links.
---

## Overview

**North Star:** ink on parchment

Opennote employs a minimalist, paper-like aesthetic featuring a high-contrast typographical hierarchy set against a soft, near-white canvas. Subtle border treatments and distinct, functional button styles define interactive elements. Color is used sparingly, primarily for accent and to distinguish action states, creating moments of focus within an otherwise calm and content-centric design.

### Do's

- Prioritize IowanOld for all headings and display text to deliver a traditional, thoughtful voice.
- Use SuisseIntl for all body text, button labels, and navigation to maintain readability and a clean feel.
- Apply Parchment (#fffdf8) as the dominant background color across all pages and main content areas.
- Use Burnt Umber (#512906) exclusively for primary action buttons to clearly signpost key interactions.
- Employ Ink Black (#0a0a0a) for all primary text and critical UI elements to ensure high contrast and legibility.
- Define UI boundaries and elements with subtle Whisper Border (#e5e5e5) 1px solid borders, avoiding heavy lines.
- Maintain a consistent 10px border-radius for all interactive components and cards to soften edges uniformly.

### Don'ts

- Do not introduce new serif fonts beyond IowanOld, as it would dilute the typographic identity.
- Avoid using highly saturated colors for background elements; reserve saturation for functional accents and brand highlights.
- Do not use heavy shadows or gradients on interactive elements; prefer solid color fills and subtle borders.
- Do not deviate from the Parchment (#fffdf8) background color for core content sections; alternative backgrounds should be used sparingly and only for distinct sections.
- Avoid excessive use of colors like Blue Violet, Forest Green, or Crimson Blush in body text; reserve them for decorative accent blocks or specific highlighted elements.
- Do not use less than 12px padding around clickable elements; maintain a comfortable tap/click target.
- Avoid text colors with insufficient contrast against the background; always prioritize Ink Black or Slate Gray for readability.

### Layout

The site uses a max-width contained layout, typically centered, allowing ample whitespace on either side. The hero section often features a centered headline with an illustration above, sometimes on a slightly tinted background. Sections mostly follow a vertical rhythm with consistent spacing, lacking strong visual dividers between them, creating a seamless flow. Content frequently alternates between centered stacks of text and visual elements, and occasionally two-column layouts with text and iconography. Navigation is a sticky top-bar, minimal and text-based, with a 'Get started free' button. The overall density is spacious, favoring clear separation and readability over information compactness.

### Imagery

The visual language is characterized by simple, outlined, hand-drawn style illustrations that are whimsical and often depict figures interacting with abstract concepts or tools. These illustrations are mono-color, typically in black outline, with occasional small colored fills like Goldenrod (#ffc934) or muted pastels. They are contained within the white space, serving as explanatory and decorative elements rather than full-bleed imagery. Icons are minimal, outlined, and monochromatic, matching the linear illustration style. Product screenshots are absent, focusing instead on symbolic representation. Imagery is sparse, ensuring the UI remains text-dominant.
