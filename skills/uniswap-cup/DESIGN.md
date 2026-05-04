---
version: alpha
name: Uniswap Cup
description: The Uniswap Cup design system evokes a digital battle arena with a high-contrast, almost monochrome palette punctuated by a single vibrant fuchsia. The aesthetic is clean and precise, leveraging stark black and white surfaces for visual clarity, while sharp corners and a compact density suggest a dynamic, competitive environment. Typography combines robust monospace with subtle sans-serifs, and layout is highly structured, emphasizing information readouts and tournament brackets over fluid narrative.
colors:
  canvas-white: "#f2f2f2"
  midnight-ink: "#000000"
  alabaster: "#ffffff"
  graphite: "#222222"
  linen-mist: "#fef4ff"
  fuchsia-flare: "#f50db4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.64px
spacing:
  buttonRadius: 1.67772e+07px
  elementGap: 8px
  sectionGap: 48px
components:
  ghost-button:
    role: Navigation and secondary actions
  pill-button:
    role: Call to action or key interactive elements
  team-score-block:
    role: Displays individual team scores in the bracket
  active-team-score-element:
    role: Highlights the winning team or active participant in a match
---

## Overview

**North Star:** Fuchsia-accented data panel. Precise, high-contrast, and digitally sharp typography on a stark white canvas, with a single, vibrant fuchsia cutting through the cool neutrality.

The Uniswap Cup design system evokes a digital battle arena with a high-contrast, almost monochrome palette punctuated by a single vibrant fuchsia. The aesthetic is clean and precise, leveraging stark black and white surfaces for visual clarity, while sharp corners and a compact density suggest a dynamic, competitive environment. Typography combines robust monospace with subtle sans-serifs, and layout is highly structured, emphasizing information readouts and tournament brackets over fluid narrative.

### Do's

- Prioritize a stark, high-contrast palette of Midnight Ink (#000000) on Canvas White (#f2f2f2) for all core UI elements.
- Use Fuchsia Flare (#f50db4) exclusively for accenting active states, score leaders, competitive highlights, and key interactive elements.
- Employ `ui-monospace` for all numerical data and critical, precise labels, tracking it tightly with `letterSpacing: -0.0200em`.
- Maintain sharp, 0px corner radii for all structural elements and information blocks to preserve a technical, precise feel.
- Utilize 8px as the default element spacing for compact arrangement of UI items, such as scores and team logos.
- Ensure headings and titles use `ui-monospace` weight 700 at 32px to convey importance and technical specificity.

### Don'ts

- Do not introduce additional chromatic colors; Fuchsia Flare (#f50db4) is the singular brand accent.
- Avoid soft gradients or shadows; the aesthetic relies on flat, high-contrast surfaces and sharp edges.
- Do not use `ui-sans-serif` or `Basel` for numerical data or score displays where `ui-monospace` provides critical alignment and precision.
- Refrain from using rounded corners on cards or primary containers; the design language favors a hard-edged, digital aesthetic.
- Do not deviate from the compact spacing unit of 8px for inter-element gaps; avoid excessive whitespace that would dilute the information density.
- Do not apply padding to ghost buttons; they should remain minimalist and blend seamlessly into their surroundings.

### Layout

The page uses a full-bleed, unconstrained layout, allowing content to stretch across the viewport, though the core tournament bracket maintains a centered structure. The hero section features a central brand logo and descriptive text over a vast white space. Sections are defined by large, explicit bracket lines in Fuchsia Flare (#f50db4) against a Canvas White (#f2f2f2) background, creating a high-energy, competitive rhythm. Content is arranged in a clear, hierarchical grid, following the logical flow of a tournament, with dense informational blocks positioned adjacent to connection lines. Navigation elements ('Group Stage', 'Livestream') appear as minimalist text links or small buttons in the top bar.

### Imagery

The visual language is purely functional and symbolic, primarily using monochrome icons and abstract representations for teams and game states. No photography or complex illustrations are present. Icons are typically black fills on either white or fuchsia backgrounds, adhering to a stark, outlined style or minimal block shapes. Imagery serves an explanatory and informative role, clearly denoting team identity, scores, and tournament progress, contributing to a data-heavy, minimalist interface.
