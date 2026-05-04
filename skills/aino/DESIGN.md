---
version: alpha
name: Aino
description: This design system is a monochrome canvas, evoking the disciplined aesthetic of programming and terminal UIs. It's built on a stark contrast of near-black text on a creamy, soft white background. The most distinctive choice is the pixel-perfect recreation of ASCII art across the page, transforming what might be seen as technical constraints into a primary visual element. This creates a raw, almost deconstructed feel, prioritizing technical expression over traditional graphic design flourishes, making the site itself an artifact of agentic engineering.
colors:
  greige-canvas: "#f5f5ff"
  inkwell: "#181818"
spacing:
  elementGap: 16px
  sectionGap: 49px
components:
  navigation-bar:
    role: 
  ascii-art-hero-block:
    role: 
  button-group-cta-strip:
    role: 
  navigation-link:
    role: Interactive element
  primary-button:
    role: Interactive element
---

## Overview

**North Star:** Terminal aesthetic, ASCII art

This design system is a monochrome canvas, evoking the disciplined aesthetic of programming and terminal UIs. It's built on a stark contrast of near-black text on a creamy, soft white background. The most distinctive choice is the pixel-perfect recreation of ASCII art across the page, transforming what might be seen as technical constraints into a primary visual element. This creates a raw, almost deconstructed feel, prioritizing technical expression over traditional graphic design flourishes, making the site itself an artifact of agentic engineering.

### Do's

- Prioritize `Greige Canvas` (#f5f5f0) for all page and section backgrounds to maintain the light, soft base.
- Use `Inkwell` (#181818) for all text elements to ensure high contrast and consistency.
- Apply `abcplus` 13px, 1.29 line-height, and 0.0430em letter-spacing for primary UI text, including navigation and buttons.
- Utilize 0px border-radius across all elements to enforce the sharp, angular aesthetic.
- Integrate `16px` for internal component padding and spacing between discrete elements and `49px` for larger section-level vertical separation.
- Emphasize the custom ASCII art as a primary decorative and structural element, using it to define sections or visual motifs.

### Don'ts

- Do not introduce any saturated colors; maintain the strictly achromatic palette of `Greige Canvas` and `Inkwell`.
- Avoid rounded corners or any soft geometrical shapes; enforce 0px radius for all borders and elements.
- Do not use box-shadows or gradients for elevation; depth and separation are achieved purely through line art and spacing.
- Do not vary font sizes extensively; keep most text at `13px` with consistent line-height and letter-spacing.
- Avoid large hero images or photographic elements; the visual language is based on text and ASCII-style graphics.
- Do not alter the `0.0430em` letter-spacing of the `abcplus` or `abc` fonts, as it's critical to the terminal aesthetic.

### Layout

The page model is full-bleed with no discernible max-width container, allowing the ASCII art to span the entire viewport. The hero section features a prominent, centered ASCII art graphic with navigation links sparsely placed around it. Section rhythm is driven by the large, continuous ASCII art patterns rather than distinct background color changes or visual dividers. Content, such as navigation, is arranged linearly and subtly within this art. There is no visible grid for content arrangement, instead, elements are positioned freely or minimally centered. The navigation is a classic top-bar with sparse, unstyled text links.

### Imagery

The site's visual language is dominated by ASCII-style art and typographic elements. There is no traditional photography, rich illustrations, or 3D renders. Instead, graphics are composed entirely of text characters (periods, slashes, asterisks, etc.) forming large, abstract patterns and shapes. These 'images' serve a decorative and structural role, rather than depicting objects or scenes. They are full-page or full-section width, integrated directly into the background, and create an intricate, almost code-like texture. Icons, if present, are also character-based.
