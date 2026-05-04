---
version: alpha
name: hourly
description: The hourly app design system presents an audacious, high-contrast aesthetic, built on a foundation of deep black, bold cream, and urgent red. Typography, dominated by a heavy grotesque sans-serif, takes center stage with dramatic scale and tight tracking. Information is presented densely, pushing content to the edges of a constrained layout without relying on traditional spacing cues. A distinct lack of visual hierarchy via elevation or subtle neutrals focuses attention through sheer presence and high-impact color pairing.
colors:
  absolute-zero: "#000000"
  paper-white: "#eee3c1"
  alert-red: "#d0021b"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.72px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: -0.99px
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1
    letterSpacing: -1.98px
  display:
    fontFamily: "system-ui"
    fontSize: 217px
    lineHeight: 1
    letterSpacing: -9.77px
spacing:
  elementGap: 4px
  sectionGap: 37px
components:
  display-headline:
    role: Hero headline, section titles
  sub-headline-box:
    role: Descriptive text blocks under main titles
  link-button:
    role: Primary calls to action, navigation elements
  horizontal-divider:
    role: Section break for tables or content grouping
---

## Overview

**North Star:** Type-forward, high-contrast, black-red-cream. A vintage subway poster come to life.

The hourly app design system presents an audacious, high-contrast aesthetic, built on a foundation of deep black, bold cream, and urgent red. Typography, dominated by a heavy grotesque sans-serif, takes center stage with dramatic scale and tight tracking. Information is presented densely, pushing content to the edges of a constrained layout without relying on traditional spacing cues. A distinct lack of visual hierarchy via elevation or subtle neutrals focuses attention through sheer presence and high-impact color pairing.

### Do's

- Prioritize text as the primary visual element; use Neue Haas Grotesk Text Bd at weight 700 for almost all content, embracing its inherent impact.
- Utilize the high-contrast pairing of Absolute Zero (#000000) and Paper White (#eee3c1) to establish bold visual rhythm and emphasize content.
- Reserve Alert Red (#d0021b) exclusively for key interactive elements, large expressive text, or critical brand highlights to maximize its impact.
- Apply a global letter-spacing of -0.0450em for all Neue Haas Grotesk Text Bd text to maintain a dense, compact typographic style.
- Use 1px solid borders in Paper White (#eee3c1) for subtle structural delineation, especially in tabular data or content blocks.
- Embrace a dense information layout, minimizing whitespace and relying on typography and strong color contrast for organization rather than ample padding.
- Adhere to the pageMaxWidth of 1184px for all main content, ensuring a consistently contained and structured layout.

### Don'ts

- Avoid subtle color variations or gradients; the system relies on stark, flat color blocks.
- Do not introduce shadows or complex elevation; the design operates on a flat, print-like plane.
- Refrain from using lightweight fonts or open letter-spacing; the system demands a bold, condensed typographic presence.
- Do not use varied border radii; maintain sharp, angular forms via a 0px radius.
- Avoid decorative imagery or abstract graphics; content is king, presented directly.
- Do not create tertiary UI elements or secondary action styles; focus on a clear, singular interaction path.
- Refrain from deviating from the Absolute Zero (#000000) background for core content areas; it is foundational to the dark theme.
