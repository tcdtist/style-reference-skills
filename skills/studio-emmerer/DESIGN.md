---
version: alpha
name: Studio Emmerer
description: Studio Emmerer employs a minimalist, almost stark aesthetic, prioritizing content through a high-contrast dark theme. Visual hierarchy is achieved primarily through typography and subtle spacing. Surfaces are uniformly dark, with distinction created by thin hairline borders rather than depth or shadows. The overall impression is one of restrained precision, reminiscent of architectural blueprints presented on a night-mode screen.
colors:
  pitch-black: "#000000"
  steel-gray: "#999999"
  preview-white: "#ffffff"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.16
    letterSpacing: -0.165px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 0.9
    letterSpacing: -0.16px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 0.9
    letterSpacing: -0.15px
spacing:
  elementGap: 5px
  sectionGap: 32px
components:
  navigation-link:
    role: Interactive text link for site navigation.
  read-more-link:
    role: Text link for expanding content.
  project-table-row:
    role: A single row within the tabular project listing.
  project-list-item:
    role: A single project entry in the main list. Behaves like a link.
---

## Overview

**North Star:** Architectural Blueprint, Night Mode

Studio Emmerer employs a minimalist, almost stark aesthetic, prioritizing content through a high-contrast dark theme. Visual hierarchy is achieved primarily through typography and subtle spacing. Surfaces are uniformly dark, with distinction created by thin hairline borders rather than depth or shadows. The overall impression is one of restrained precision, reminiscent of architectural blueprints presented on a night-mode screen.

### Do's

- Always use 'NHaasGrotesk' as the primary typeface for all text elements.
- Maintain a high-contrast dark theme using Pitch Black (#000000) for backgrounds and primary text.
- Implement borders using 1px solid Pitch Black (#000000) to delineate sections and interactive elements.
- Utilize 0px border-radius for all elements, maintaining sharp, angular forms.
- Apply Steel Gray (#999999) for secondary text such as table headers or metadata.
- Ensure consistent spacing with a base unit derived from 5px for element gaps and 32px for section gaps.
- Use Preview White (#ffffff) for any text appearing directly over photographic or illustrative content.

### Don'ts

- Do not introduce any background colors other than Pitch Black (#000000) for primary surfaces.
- Avoid using shadows or elevation effects; elements should remain flat against the dark background.
- Do not deviate from the 'NHaasGrotesk' typeface or introduce additional font families.
- Refrain from using any color accents; the palette is strictly achromatic with specific allowances for text over media.
- Do not use rounded corners or any non-zero border-radius on any UI elements.
- Avoid decorative gradients; surfaces should be solid colors.
- Do not introduce unnecessary padding or margin, adhere to the established spacing units.

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections and image showcases. Content sections alternate between full-width black backgrounds and a max-width centered container for text-heavy content or tabular data. Vertical rhythm is maintained by consistent section gaps. Navigation is minimalist, typically a horizontal inline list. The overall arrangement is straightforward and linear, prioritizing content presentation with a clear, functional aesthetic.

### Imagery

This site features product/architectural photography exclusively. Images are full-bleed within their sections, presenting stark, uncropped views of built environments. There are no illustrations, icons are minimal and functional (arrows), and there's no lifestyle photography. The imagery serves as direct project showcase rather than decorative atmosphere, often occupying significant visual space.
