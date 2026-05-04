---
version: alpha
name: VISIONNAIRE
description: The VISIONNAIRE design system embraces a raw, minimalist aesthetic with a street-wear edge. It features stark black-and-white UI elements on a primarily white canvas, punctuated by a unique, muted sandy-beige for specific content sections and occasional product photography. Typography is compact and precise, often used in all-caps, defining a tight information architecture. Interactive elements are primarily ghost buttons or unstyled links, maintaining a flat, unornamented surface treatment.
colors:
  midnight-ink: "#000000"
  paper-white: "#ffffff"
  ghost-gray: "#888888"
  sand-dune: "#f7f5e8"
  sky-blue: "#DAEDFF"
  bubblegum-pink: "#FF92C4"
  goldenrod: "#FFE36C"
typography:
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0.033px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.029px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.15
    letterSpacing: 0.021px
  display:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.15
    letterSpacing: 0.016px
spacing:
  cardRadius: 15px
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 30px
components:
  ghost-primary-button:
    role: Navigational and call-to-action elements.
  muted-ghost-button:
    role: Secondary and less prominent actions.
  product-card:
    role: Display individual product listings in grid layouts.
  newsletter-signup-overlay:
    role: Capturing user emails with a distinct pop-up.
  text-input-minimal:
    role: User input fields.
---

## Overview

**North Star:** Raw monochrome canvas.

The VISIONNAIRE design system embraces a raw, minimalist aesthetic with a street-wear edge. It features stark black-and-white UI elements on a primarily white canvas, punctuated by a unique, muted sandy-beige for specific content sections and occasional product photography. Typography is compact and precise, often used in all-caps, defining a tight information architecture. Interactive elements are primarily ghost buttons or unstyled links, maintaining a flat, unornamented surface treatment.

### Do's

- Use Midnight Ink (#000000) for all primary text, borders, and icons to maintain high contrast with Paper White (#ffffff) backgrounds.
- Prioritize ghost button styles for interactive elements, employing Midnight Ink (#000000) or Ghost Gray (#888888) for borders and text, with 0px border-radius.
- Apply PP Neue Montreal as the exclusive font family across all typographic elements, leveraging its different weights for hierarchy rather than different fonts.
- Employ the Sand Dune (#f7f5e8) color for distinct content sections to subtly break the monochromatic flow without introducing strong chromatic elements.
- Maintain a compact information density with small element gaps (4px) and relatively small section gaps (30px).
- Use 15px border-radius sparingly for cards or images, and 50px for certain link elements, otherwise default to 0px for sharp edges.

### Don'ts

- Avoid visible shadows for elevation; rely on color changes or borders to differentiate elements.
- Do not introduce highly saturated colors for general UI elements; these are reserved for decorative accents or specific product imagery.
- Refrain from using varied font families or decorative typefaces; maintain a consistent, singular font for brand identity.
- Do not use large, expansive whitespace between content elements; keep layouts dense and to the point.
- Avoid generous padding on cards or primary content blocks; content should appear close to edges.
- Do not use rounded corners universally; apply 0px radius unless specifically designated for cards or certain links.

### Layout

The page uses a maximum content width for key sections but allows for full-bleed elements, such as headers or specific section backgrounds. The hero section often features a split layout with imagery on one side and a brand statement on a colored background (Sand Dune) on the other. Product listings are presented in responsive grid formations, often 2-5 columns, with consistent vertical spacing between items. Navigation is a fixed top bar on larger screens, compacting on smaller views. Sections are primarily divided by changes in background color (Paper White, Sand Dune) or implied by distinct content blocks. Overall density is compact, with element and section gaps creating a rhythmic flow rather than vast whitespace.

### Imagery

This site features product-focused imagery, primarily fashion photography showing models wearing the apparel. Photos are generally high-key with strong contrast, often against studio white or minimalist settings. There are occasional lifestyle shots and abstract branding elements, such as the 'VISIONNAIRE Dahran ART CLUB' graphic. Imagery is typically contained within cards (sometimes with 15px corner radii) or presented full-bleed in hero sections, not overlapping. Icons are minimalist, outlined, and monochromatic (Midnight Ink). Visuals serve primarily to showcase products and establish brand atmosphere.
