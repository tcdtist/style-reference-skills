---
version: alpha
name: Freshman
description: Freshman employs a stark, high-contrast dark theme emphasizing bold typography and minimal UI elements. The design prioritizes content, with a monochromatic canvas broken by sharp, subtle geometric accents and a single vibrant red for impact. Typography is the primary visual communicator, leveraging custom fonts to create a direct and authoritative tone. Components are ghost-like and integrated, giving space to the brand's work.
colors:
  midnight-void: "#000000"
  near-black: "#101010"
  white-frost: "#ffffff"
  power-red: "#ff2936"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 0.86
    letterSpacing: -0.01px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 0.86
    letterSpacing: -0.03px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
    letterSpacing: -0.01px
spacing:
  elementGap: 12px
  sectionGap: 47px
components:
  ghost-navigation-button:
    role: Top-level navigation element
  thumbnail-link-title:
    role: Interactive content title within a grid
  footer-cookie-button:
    role: Legal/utility action in the footer
  main-headline:
    role: Hero section primary statement
  sub-headline-descriptive-text:
    role: Supporting text for hero sections or key messages
---

## Overview

**North Star:** monochrome cinematic canvas

Freshman employs a stark, high-contrast dark theme emphasizing bold typography and minimal UI elements. The design prioritizes content, with a monochromatic canvas broken by sharp, subtle geometric accents and a single vibrant red for impact. Typography is the primary visual communicator, leveraging custom fonts to create a direct and authoritative tone. Components are ghost-like and integrated, giving space to the brand's work.

### Do's

- Prioritize text content against Midnight Void (#000000) or Near Black (#101010) backgrounds using White Frost (#ffffff) for readability.
- Use TT Firs Neue consistently for primary headings and clear informational text.
- Employ the light weight of Editorial New (200) for all menu items and subtle UI labels.
- Reserve Power Red (#ff2936) specifically for single-point emphasis or decorative accents; avoid using it for primary interactive elements.
- Maintain a zero border-radius on all UI elements for a sharp, modern aesthetic.
- Ensure generous spacing between content blocks, with section gaps averaging ~47px to prevent visual clutter.

### Don'ts

- Do not use saturated colors other than Power Red (#ff2936) anywhere in the primary UI.
- Avoid decorative elements like heavy drop shadows or complex gradients; rely on flat surfaces and high contrast.
- Do not introduce additional font families; restrict typography to TT Firs Neue, Editorial New, Altform, and Wasted Year.
- Avoid rounded corners on any UI component; all borders and edges should be sharp 0px radius.
- Do not use box shadows for elevation; rely on color shifts between Midnight Void and Near Black for subtle depth.
- Do not break the monospace alignment of the footer elements; maintain horizontal consistency.

### Layout

The page employs a full-bleed dark canvas with content largely centered and contained within implied horizontal bands. The hero section is dominated by an expansive, bold headline and sub-headline, centrally stacked. Below the fold, content appears in a grid-like structure, with horizontally scrolling or paginated blocks (implied by the thumbnails and '2026©' footer). Vertical rhythm is established through significant vertical spacing between sections, leading to a compact density within the content areas. Navigation is minimal, consisting of an 'X' logo and a '+' menu text positioned at the top corners.

### Imagery

This design system uses minimal, tightly cropped video thumbnails and potentially small decorative icons. Imagery serves primarily as content teasers rather than large, atmospheric elements. If photography is used, it should be dark, high-contrast, and focused on product or subject matter, avoiding lifestyle shots. Icons are simple, outlined or filled, and monochrome (White Frost). Image density is low, with text dominating visual space, reinforcing the idea of 'content first' and a clear, direct communication style.
