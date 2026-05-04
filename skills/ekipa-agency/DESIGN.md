---
version: alpha
name: Ekipa Agency
description: Ekipa Agency uses a stark, high-contrast visual system with a primary acid green canvas punctuated by deep charcoal text and bold, rotated accents of vivid fuchsia. The design feels raw and energetic, with imagery often desaturated, allowing the strong chromatic colors and sharp typographic choices to command attention. Thin borders and a near-monochromatic base palette ensure the vibrant highlights feel impactful and intentional.
colors:
  screen-green: "#00c32b"
  midnight-charcoal: "#161616"
  fuchsia-flare: "#ff3aad"
  soft-concrete: "#adbbc3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.09
  body-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.09
  body:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.09
spacing:
  elementGap: 12px
  sectionGap: 24px
components:
  primary-navigation-link:
    role: Interactive text link in the header.
  feature-teaser-card:
    role: Displays album or artist features.
  primary-heading:
    role: Main section titles and content blocks.
  artist-list-item:
    role: Single entry in the roster list.
  rotated-accent-badge-recent-news:
    role: Decorative and functional accent for callouts.
---

## Overview

**North Star:** Acid Green Command Center

Ekipa Agency uses a stark, high-contrast visual system with a primary acid green canvas punctuated by deep charcoal text and bold, rotated accents of vivid fuchsia. The design feels raw and energetic, with imagery often desaturated, allowing the strong chromatic colors and sharp typographic choices to command attention. Thin borders and a near-monochromatic base palette ensure the vibrant highlights feel impactful and intentional.

### Do's

- Use Screen Green (#00c32b) as the dominant background color for most primary content sections.
- Apply Midnight Charcoal (#161616) for all primary text content to ensure maximum contrast and legibility.
- Reserve Fuchsia Flare (#ff3aad) for interactive elements, hover states, and rotated decorative accents.
- Maintain a default border-radius of 0px for all UI elements to preserve a sharp, angular aesthetic.
- Employ ABCDiatype-Black, -Bold, and -Regular at their designated weight 100 across all typographic roles for a consistent light visual texture.
- Utilize 24px as a common vertical gap between distinct UI elements and sections for a comfortable density.
- Implement the 8px solid Midnight Charcoal border for visual emphasis around key content blocks and callouts.

### Don'ts

- Avoid using saturated colors other than Screen Green and Fuchsia Flare; maintain an achromatic base palette.
- Do not introduce rounded corners or border-radius values greater than 0px on any UI elements.
- Refrain from using heavy font weights (e.g., 400 or above) for any text, as the design emphasizes lightness with weight 100.
- Avoid generic drop shadows or elevation; the system relies on high contrast and distinct background colors for layering.
- Do not deviate from the specified padding and margin values; the exact spacing creates the system's intended rhythm.
- Resist using photography or imagery with high saturation; prefer desaturated or monochrome visuals to let UI colors dominate.
- Do not apply Fuchsia Flare (#ff3aad) as a primary background color for large sections, it's intended as an accent.

### Layout

The page primarily uses a full-bleed layout, with the dominant Screen Green background extending across the viewport. The hero section features a full-width image (often dark and moody) with content overlaid or presented beneath. Content frequently organizes into sections with consistent vertical spacing of around 24px, sometimes interrupted by larger gaps for emphasis. There's a common pattern of article-like blocks with thin borders, sometimes arranged in grids (e.g., 3-column for artist features under a main section title). Text often appears in centered stacks or left-aligned within these blocks. The navigation is a minimal top bar.

### Imagery

The visual language for imagery is characterized by desaturated, often monochrome, photography and abstract graphics. Images typically serve as background elements or content placeholders within cards, maintaining a contained, often cropped presentation without rounded edges. When present, images are secondary to the strong typographic and color identity. Icons are minimal, likely monochromatic if they appear.
