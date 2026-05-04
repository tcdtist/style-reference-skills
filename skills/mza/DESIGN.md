---
version: alpha
name: MZA
description: The MZA visual system embodies a stark, archival aesthetic, presenting information directly on a pristine white canvas. Typography is foundational, relying on system fonts with minimal styling to convey historical gravitas. Interactive elements are stripped-back, favoring ghosted borders and plain text over vibrant fills, emphasizing content over decorative flair. The absence of color and elevation directs focus solely to the textual narrative and navigation.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ghost-button-fill: "#efefef"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
spacing:
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 40px
components:
  ghost-action-button:
    role: Interactive element for secondary actions, designed as a minimal, border-based control.
  text-link:
    role: Standard inline navigations and references.
  section-heading-times:
    role: Primary content organization at a section level, using the distinct serif font.
  body-text:
    role: Main informational text blocks.
---

## Overview

**North Star:** Archival document on pristine white paper.

The MZA visual system embodies a stark, archival aesthetic, presenting information directly on a pristine white canvas. Typography is foundational, relying on system fonts with minimal styling to convey historical gravitas. Interactive elements are stripped-back, favoring ghosted borders and plain text over vibrant fills, emphasizing content over decorative flair. The absence of color and elevation directs focus solely to the textual narrative and navigation.

### Do's

- Prioritize Ink Black (#000000) for all text and borders, reserving lighter tones only for subtle background elements.
- Maintain a stark, minimalist aesthetic with Canvas White (#ffffff) as the dominant background color for all content areas.
- Use Times as the primary typeface for all headings and substantial body text to convey a traditional, historical feel.
- Ensure all interactive elements, including buttons, maintain a 0px border radius for a sharp, angular appearance.
- Apply 1px vertical and 6px horizontal padding to ghost buttons for a subtle interactive hit area without visual bulk.
- Employ a base unit of 4px for all spacing measurements, translating to 16px for element gaps and 40px for section gaps.
- Keep page layout full-bleed without a maximum content width to maximize visual space.

### Don'ts

- Avoid using any vibrant or saturated colors; chromatic tones are not part of this visual system.
- Do not introduce elevated elements with shadows or complex layer effects; the design should remain flat.
- Refrain from utilizing decorative graphical elements or imagery with rounded corners; all visuals should be sharp and contained.
- Do not vary typography significantly in terms of letter-spacing or font-feature-settings; rely on font family, size and weight for distinction.
- Avoid unnecessary visual hierarchies through color gradients or heavy fills; use text size and weight changes for emphasis.
- Do not introduce complex animations or transitions; interactions should be direct and instantaneous.
- Refrain from using any button fills other than Ghost Button Fill (#efefef) when an action requires a discreet background.

### Layout

The page exhibits a full-bleed layout, lacking a defined maximum content width, allowing text and elements to span the full browser width. The hero pattern is not explicitly present; instead, content begins directly with text and navigation. Section rhythm is dictated by consistent vertical spacing of 40px between distinct blocks, with visual separation achieved primarily through headings and text hierarchy rather than distinct background bands. Content arrangement is primarily stacked, with text-heavy blocks, lists, and occasional interactive elements vertically aligned. There is no evidence of complex grid usage for features or cards, favoring a more document-like, linear flow. The layout is spacious with significant vertical margins between text blocks. Navigation appears as simple text links and ghost buttons, primarily embedded within the content flow rather than a prominent, persistent top or side bar.

### Imagery

This design system predominantly avoids complex imagery, favoring a text-dominant display. When visuals are present (e.g., icons), they are simple, contained, and monochrome, usually in Ink Black. There is no evidence of photography, illustrations, or 3D renders. Icons are typically outlined with a light stroke weight, serving a purely functional role rather than decorative. The density is image-light, with visual space primarily dedicated to text and minimal interface elements.
