---
version: alpha
name: Luis Bizarro
description: Luis Bizarro's portfolio establishes itself as a minimalist, high-contrast dark canvas, where sparse white typography takes center stage. A grid-based layout with generous vertical spacing emphasizes content partitions. The visual style is stark and intentional, using only black and white to create a focused, almost archival presentation of work, with interactivity implied through subtle hover states rather than overt color cues.
colors:
  void-black: "#000000"
  ghost-white: "#ffffff"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.7px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.76px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.93px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.2
    letterSpacing: -0.79px
  display:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.2
    letterSpacing: -1.04px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -1.5px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1
    letterSpacing: -1.58px
spacing:
  elementGap: 19px
  sectionGap: 45px
components:
  navigation-link:
    role: Primary navigation and interactive text links
  project-overview-card-interactive:
    role: Container for individual project entries, signaling interactivity
  subtle-metadata-tag:
    role: Small, functional information labels
  large-numeric-display:
    role: Prominent, data-driven typographic element
  section-header-stacked:
    role: Divisive title for portfolio projects
---

## Overview

**North Star:** monochrome digital ledger

Luis Bizarro's portfolio establishes itself as a minimalist, high-contrast dark canvas, where sparse white typography takes center stage. A grid-based layout with generous vertical spacing emphasizes content partitions. The visual style is stark and intentional, using only black and white to create a focused, almost archival presentation of work, with interactivity implied through subtle hover states rather than overt color cues.

### Do's

- Maintain maximum contrast: use only Ghost White (#ffffff) text and borders on Void Black (#000000) backgrounds.
- Utilize FK Grotesk Neue weight 400 for all typography, varying sizes and letter spacing to establish hierarchy.
- Apply a global border-radius of 5px to all rectangular interactive elements and containers.
- Implement a 1px Ghost White (#ffffff) border for interactive elements to indicate their clickable nature, particularly for project cards and navigation.
- Employ consistent vertical spacing for sections, preferentially using `sectionGap` of 45px and `elementGap` of 19px within containers.
- Use tight line heights (1.0 for large numbers, 1.2 for text blocks) to maintain typographic density and control vertical rhythm.

### Don'ts

- Avoid any color other than Ghost White for text, borders, or accents; the system is strictly monochrome.
- Do not introduce unnecessary shadows or complex elevation; surfaces should primarily be flat against the Void Black background.
- Do not vary font weights; FK Grotesk Neue weight 400 is the sole weight for all type.
- Do not use generic padding values; rely instead on `elementGap` for internal spacing and `sectionGap` for block separation.
- Avoid decorative line breaks or excessive horizontal rules; vertical spacing and subtle borders are the primary separators.
- Do not use imagery in a way that breaks the strict monochrome palette or introduces significant color; if imagery is present, it should be abstract or minimal.

### Layout

The page follows a full-bleed, dark-themed model with no explicit page max-width, allowing content to stretch across the viewport, though text blocks are inherently contained. The hero section features large, centered typography flanked by smaller, aligned metadata. Subsequent sections predominantly use a high-contrast text-on-black layout, often featuring vertically stacked, large-format project titles. Vertical rhythm is established through consistent `sectionGap` (45px) between content blocks and larger `marginTop` values (up to 220px) for prominent headings. Navigation is minimal, presented as Ghost White text links.

### Imagery

The site largely avoids traditional imagery, focusing instead on stark typography. When visuals are present, they are either abstract, pixelated, or technical renders (like the pixelated face or the Apple Vision Pro render), adhering to a muted, often monochromatic or desaturated color palette that blends with the dark UI. Icons are simple, outlined, and monochromatic (Ghost White). The overall density is image-light, with visuals serving as abstract texture rather than detailed content.
