---
version: alpha
name: AllCaps
description: AllCaps is a stark, high-contrast system where typography takes center stage, often acting as the primary visual element. It uses pure white canvases and deep black text, punctuated by bold, almost neon, fuchsia and an unexpected violet. This creates an energetic and unconventional aesthetic focused on typographic expression rather than complex layouts or decorative elements. Surfaces are flat, and interactions are minimal, emphasizing direct visual communication.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  action-fuchsia: "#ff003c"
  neon-violet: "#e508ff"
spacing:
  elementGap: 7px
  sectionGap: 29px
components:
  ghost-button:
    role: Interactive elements for navigation and secondary actions.
  font-specimen-card:
    role: Display individual typeface styles.
  style-tag:
    role: Indicate available styles or status.
  purchase-callout-badge:
    role: Small, immediately visible purchase link within a product listing.
  minimal-input-field:
    role: User input for forms.
---

## Overview

**North Star:** Typographic Playground, Neon Pop

AllCaps is a stark, high-contrast system where typography takes center stage, often acting as the primary visual element. It uses pure white canvases and deep black text, punctuated by bold, almost neon, fuchsia and an unexpected violet. This creates an energetic and unconventional aesthetic focused on typographic expression rather than complex layouts or decorative elements. Surfaces are flat, and interactions are minimal, emphasizing direct visual communication.

### Do's

- Always use Ink Black (#000000) for all text and UI outlines unless explicitly specified as an accent.
- Utilize Canvas White (#ffffff) as the dominant background color for all pages and components to maintain a stark, high-contrast look.
- Apply Action Fuchsia (#ff003c) sparingly for decorative elements or specific highlight borders to draw attention.
- Employ Neon Violet (#e508ff) for background accents on small components like tags, ensuring high contrast with Canvas White text.
- Keep all component borders and radii at 0px by default, except for specific tags which use 3.33333px.
- Maintain a compact density with an element gap of 7px and section gap of 29px.
- Leverage the MG ALLCAPS font for all primary text content, using its variable weight and letter-spacing for typographic expression.

### Don'ts

- Avoid using multiple colors for text or borders; maintain the strict Ink Black and Canvas White contrast.
- Do not introduce shadows or complex elevation; the system is characteristically flat.
- Do not use generic system fonts; MG ALLCAPS and Bandit Luv are essential for brand identity.
- Refrain from adding decorative gradients or elaborate backgrounds; stick to solid colors.
- Do not introduce inconsistent padding on buttons or cards; maintain 0px padding and 0px radius for most interactive elements.
- Avoid breaking line height relationships, particularly with MG ALLCAPS, to preserve the intended typographic density.
