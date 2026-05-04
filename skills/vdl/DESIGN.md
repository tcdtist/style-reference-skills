---
version: alpha
name: VDL
description: The VDL design system evokes the precision of an architectural drawing: minimal and structural. Its visual identity builds on a stark contrast between a warm off-white canvas and deep, nearly black typography. Thin, deliberate lines define sections and interactive elements rather than heavy borders or fills. The typography, using a distinctive architectural sans-serif, carries the weight and character, operating with restrained letter-spacing. Interaction is subtle, relying on understated color shifts and background changes.
colors:
  parchment: "#f7f4ef"
  ebony: "#120902"
  deep-graphite: "#1e1e1e"
  pitch-black: "#000000"
  medium-gray: "#808080"
  neutra-violet: "#6a5acd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.02px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.16
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 67px
    lineHeight: 0.8
    letterSpacing: -0.05px
spacing:
  elementGap: 20px
  sectionGap: 26px
components:
  ghost-navigation-link:
    role: Primary navigation item
  headline-section-divider:
    role: Visual separator for major content blocks
  footer-link:
    role: Secondary navigation and informational links
  feature-list-item:
    role: Descriptive list items within content sections
  primary-heading:
    role: Dominant titles for major sections
---

## Overview

**North Star:** Architectural Canvas, Black Ink

The VDL design system evokes the precision of an architectural drawing: minimal and structural. Its visual identity builds on a stark contrast between a warm off-white canvas and deep, nearly black typography. Thin, deliberate lines define sections and interactive elements rather than heavy borders or fills. The typography, using a distinctive architectural sans-serif, carries the weight and character, operating with restrained letter-spacing. Interaction is subtle, relying on understated color shifts and background changes.

### Do's

- Use Parchment (#f7f4ef) as the dominant background color for all page sections.
- Employ Ebony (#120902) for all primary body text, headlines, and significant UI element borders to maintain high contrast and structural integrity.
- Define UI element separation and hierarchy using thin 1px borders in Ebony (#120902) or Deep Graphite (#1e1e1e), rather than shadows or background fills.
- Apply negative letter-spacing for large text elements, specifically -0.0500em for headings and -0.0200em for body text, to reinforce a condensed, architectural aesthetic.
- Maintain a default border radius of 0px for all elements to preserve the sharp, structural visual language.
- Utilize a consistent 20px for element gaps and content padding within cards or structured blocks, creating comfortable density without feeling sparse.
- Introduce Neutra Violet (#6a5acd) sparingly, reserving it for subtle interactive accents or highly specific, small decorative UI elements, never as a primary button background.

### Don'ts

- Avoid using shadows or excessive elevation to differentiate UI elements; rely instead on borders and background color changes (Parchment, Medium Gray).
- Do not introduce additional font families; restrict all typography to the AGP family at specified weights.
- Refrain from using strong, chromatic accent colors for large areas or primary calls to action; color should be a rare, deliberate punctuation.
- Do not round corners on any UI elements; maintain sharp, crisp edges throughout the design system.
- Avoid decorative imagery; focus on functional visuals like product shots or precise iconography that aligns with the architectural theme.
- Do not use letter-spacing greater than 0; all text should be either normally spaced or have subtle negative tracking.
- Do not use filled buttons for primary actions; prefer ghost buttons with text and thin borders.
