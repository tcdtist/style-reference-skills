---
version: alpha
name: UNVEIL®
description: This design system evokes a sense of highly precise, almost clinical, digital presentation. The stark achromatic palette and geometric typography create a serious, focused atmosphere. The lack of color accents and subtle interactive states prioritize content and function, presenting information with direct clarity. The overlapping image layers give an illusion of depth and interaction.
colors:
  pitch-black: "#000000"
  canvas-white: "#FFFFFF"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.05
    letterSpacing: 0.304px
spacing:
  elementGap: 2-14px
components:
  navigation-bar:
    role: 
  view-toggle-button-group:
    role: 
  project-card-stack:
    role: 
  navigation-link:
    role: Primary Navigation
  button-default:
    role: Interactive Element
  footer-link:
    role: Sub-navigation/Utility
---

## Overview

**North Star:** Architectural blueprint on white marble. Information is presented with surgical precision on a crisp, unblemished background.

This design system evokes a sense of highly precise, almost clinical, digital presentation. The stark achromatic palette and geometric typography create a serious, focused atmosphere. The lack of color accents and subtle interactive states prioritize content and function, presenting information with direct clarity. The overlapping image layers give an illusion of depth and interaction.

### Do's

- Maintain a monochromatic palette with #FFFFFF backgrounds and #000000 text and borders, avoiding any chromatic colors.
- Apply a consistent 6px border-radius to all interactive containers, including buttons and navigation items.
- Use nb_international_proregular (or Inter) at weight 400 for all text, varying only size and line height.
- Ensure letter spacing is applied: 0.165px for 11px text and 0.304px for 16px text.
- Utilize transparent backgrounds and 1px #000000 borders for default button states, defining borders as the primary visual differentiator.
- Prioritize compact spacing, with internal padding values of 2px, 4px, 7px, 10px, 14px, 16px, and 40px.

### Don'ts

- Do not introduce any chromatic colors; the system relies on a strictly achromatic palette.
- Avoid any drop shadows or complex elevation schemes; depth is suggested through content layering.
- Do not use font weights other than 400; all text should maintain a uniform visual density.
- Do not use border-radius values other than 6px; maintain this consistent level of corner rounding.
- Do not add decorative gradients or textures; surfaces should remain flat and unadorned.
- Do not introduce large content gaps or widely spaced elements; the design emphasizes density and precision.

### Layout

The page primarily uses a full-bleed layout for its main content area, with a distinctive diagonal arrangement of overlapping image panels creating a sense of dynamic depth. The navigation is fixed-width at the top-left, centered within its container. There is no explicit page max-width, allowing content to scale to the viewport. Sections appear to flow continuously without strong visual dividers or alternating backgrounds, maintaining a consistent, clean canvas. The information architecture is linear and direct, with navigation elements positioned clearly without visual distraction.

### Imagery

The visual language is characterized by an absence of typical UI imagery. Instead, it utilizes layered, slightly transparent photo-realistic images, often with muted or desaturated tones, that overlap and recede into the background. These images are treated as contextual elements rather than primary content, featuring abstract forms, x-rays, or natural phenomena, suggesting a blend of art and science. They are contained within sharp, unrounded rectangles, contributing to the overall precise and technical aesthetic. Image density is high in the main content area, forming the primary visual interest.
