---
version: alpha
name: HOC Radio
description: HOC Radio employs a high-contrast dark mode aesthetic, presenting a stark, functional interface ideal for a digital radio platform. The design prioritizes clear information hierarchy through a grid-based layout and precise typographic contrasts. The entire system uses achromatic colors, with pure white text and borders against a jet black background, creating an atmosphere of focus and quiet intensity. Visual elements are minimal, relying on strong lines and text to convey information and structure.
colors:
  midnight-eclipse: "#000000"
  lunar-white: "#ffffff"
typography:
  badge:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 0.8
    letterSpacing: 0px
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  ghost-button:
    role: Interactive elements, navigation links, and subtle calls to action.
  item-card:
    role: Displays individual content entries in a grid, like radio shows or artists.
  text-input-search:
    role: Search fields.
  content-tag:
    role: Labels for content categories or keywords.
  header-navigation-item:
    role: Top-level navigation.
  info-panel:
    role: Displays detailed information blocks.
---

## Overview

**North Star:** High-contrast digital darkroom

HOC Radio employs a high-contrast dark mode aesthetic, presenting a stark, functional interface ideal for a digital radio platform. The design prioritizes clear information hierarchy through a grid-based layout and precise typographic contrasts. The entire system uses achromatic colors, with pure white text and borders against a jet black background, creating an atmosphere of focus and quiet intensity. Visual elements are minimal, relying on strong lines and text to convey information and structure.

### Do's

- Maintain a strict achromatic palette: Lunar White (#ffffff) for all foreground elements and Midnight Eclipse (#000000) for all backgrounds.
- Use 1px Lunar White borders as primary visual separators for information and grid elements.
- Apply the Roobert typeface consistently across all text elements, leveraging its provided weights for hierarchy.
- Structure content primarily through a symmetrical grid with clearly defined 1px Lunar White divisional lines.
- Utilize 8px vertical spacing between closely related text elements and 16px for larger component gaps.
- Keep border-radius at 0px for most elements, reserving 4px solely for specific input fields to subtly differentiate them.

### Don'ts

- Introduce any saturated colors unless specifically for semantic states (e.g., success, error) which are not currently defined.
- Use shadows or any form of elevation (unless for focus states) — surfaces are flat and defined solely by borders and typography.
- Break the grid structure with irregular spacing or misaligned elements; precision is key to this system's aesthetic.
- Apply varied line spacing that deviates from the Roobert font's predefined lineHeight values for consistency.
- Use decorative imagery or complex illustrations; the system is text and line-art dominant.
- Increase component padding beyond 8px for internal content, aiming for a contained and dense information display.

### Layout

The page model is full-bleed, extending edge-to-edge for its dark canvas. The hero presents a minimal header with navigation links. The primary content area is a rigid, symmetrical grid composed of equally sized content blocks. Each block is delineated by fine 1px Lunar White lines, forming a tight, uniform matrix. The information panel on the right acts as a persistent sidebar, also defined by a single vertical 1px line. Navigation is a top bar, with elements separated by vertical lines. The density is very high, characterized by compact information blocks and minimal breathing room between content sections.

### Imagery

The visual system is entirely devoid of photography or complex illustrations. It relies on minimalist line icons, simple geometric shapes, and text as its primary visual language. Icons are outlined in Lunar White, strictly functional rather than decorative, and appear in contexts like expand/collapse toggles and media playback controls. Visual density is high, with imagery occupying virtually no space, yielding a UI focused purely on content and interaction.
