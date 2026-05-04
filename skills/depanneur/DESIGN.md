---
version: alpha
name: Depanneur
description: Depanneur's design system evokes a warm, no-nonsense retail experience with a focused use of red as a brand signature. The UI opts for a direct, high-contrast monochrome base with a single, clear brand accent. Typography is functional and understated, favoring ample spacing and clear boundaries rather than decorative elements or complex layouts. Surfaces are predominantly white, providing a bright, inviting backdrop for sparse content.
colors:
  absolute-zero: "#000000"
  alabaster: "#ffffff"
  dusty-gray: "#e5e5e5"
  brand-ruby: "#c62127"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
spacing:
  elementGap: 20px
  sectionGap: 66px
components:
  navigation-link:
    role: Primary navigation, footer links, and B2B contact. Understated interactive elements.
  divided-section:
    role: Creates clear vertical separation between page sections.
---

## Overview

**North Star:** Warm neighborhood corner store

Depanneur's design system evokes a warm, no-nonsense retail experience with a focused use of red as a brand signature. The UI opts for a direct, high-contrast monochrome base with a single, clear brand accent. Typography is functional and understated, favoring ample spacing and clear boundaries rather than decorative elements or complex layouts. Surfaces are predominantly white, providing a bright, inviting backdrop for sparse content.

### Do's

- Use Absolute Zero (#000000) for all primary text elements to maintain high contrast and readability.
- Apply Alabaster (#ffffff) as the default background for all page content, upholding the bright brand theme.
- Employ Dusty Gray (#e5e5e5) for all subtle visual dividers and inactive UI element borders.
- Introduce Brand Ruby (#c62127) exclusively as a functional accent color, such as for copyright text or specific brand highlights.
- Maintain a comfortable vertical rhythm using 66px as the primary section gap between major content blocks.
- Keep all interactive elements, like navigation links, text-based and styled with Absolute Zero (#000000) as their default state.
- Utilize Helvetica Neue LT W05 55 Roman weight 400 for all typography, ensuring a consistent and clean textual presence.

### Don'ts

- Avoid using multiple chromatic colors; limit brand expression strictly to Brand Ruby (#c62127).
- Do not add shadows or complex gradients to UI elements; flatten surfaces to align with the direct aesthetic.
- Refrain from using heavily decorative fonts or extreme typographic manipulations; maintain the functional and clean typographic style.
- Do not deviate from the established spacing values of 20px for element gaps and 66px for section gaps, unless explicitly creating a tighter component.
- Avoid circular or heavily rounded elements; the dominant shape aesthetic is implied to be sharp/minimal-radius. (Radius is 0px by default).
- Do not use dark backgrounds for main content sections; the system is designed around a light theme.
- Introduce additional border colors or varied line styles beyond Dusty Gray (#e5e5e5) for dividers or borders.

### Layout

The layout appears to be full-bleed horizontally but with implicit content containment, suggesting a maximum width rather than stretching content edge-to-edge. The hero section uses full-bleed video or photography as a background with minimal UI elements overlaid. Sections are separated by consistent vertical spacing (66px), though explicit dividers are also used. Navigation is a minimalist top bar, with additional navigation links appearing in footer sections, characterized by stacked, left-aligned links, and minimal styling.

### Imagery

This site features product-focused photography and potentially video, demonstrated by the bottles and glasses. The imagery is realistic, well-lit, and appears product-centric with clear branding elements visible on the bottles. There are no apparent abstract graphics or complex illustrations. Iconography (e.g., in the header) is minimalist and monochromatic, likely outlined or filled in Absolute Zero (#000000) to blend with the text. Imagery serves to showcase products and is positioned decoratively within content areas.
