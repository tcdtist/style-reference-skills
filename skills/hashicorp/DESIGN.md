---
version: alpha
name: HashiCorp
description: This system projects an aura of understated power and technical mastery, like a high-end server silently performing complex operations. Dark, expansive backgrounds (#0D0E12) provide an immersive canvas for crisp white typography (#EFEFF1), creating a high-contrast experience that is clear without being harsh. Strategic use of a vibrant blue (#2B89FF) and subtle internal gradients (#FF8791 to #F9B571, #6C81FF to #C08DFF) on data visualizations and interactive elements provides dynamic focal points against the deep, calm palette. Softly rounded corners (4px, 5px) on interactive elements add a subtle touch of approachability to an otherwise precise and rigorous aesthetic.
colors:
  midnight-core: "#0D0E12"
  carbon-gray: "#000000"
  silver-text: "#EFEFF1"
  ash-accent: "#B2B6BD"
  slate-text: "#D5D7DB"
  stone-gray: "#656A76"
  ghost-button: "#3B3D45"
  bright-white: "#FFFFFF"
  interactive-blue: "#2B89FF"
  link-blue: "#2264D6"
  accent-purple: "#42225B"
  cosmic-violet-gradient: "#6C81FF"
  sunset-peach-gradient: "#FF8791"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.14
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.69
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.19
    letterSpacing: -0.19px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.21
    letterSpacing: -0.34px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.19
    letterSpacing: -0.42px
  display:
    fontFamily: "system-ui"
    fontSize: 82px
    lineHeight: 1.17
    letterSpacing: -0.82px
spacing:
  buttonRadius: 5px
  elementGap: 12px
  sectionGap: 64px
components:
  announcement-banner:
    role: 
  button-group:
    role: 
  resources-card-list:
    role: 
  primary-button:
    role: cta
  secondary-button:
    role: secondary cta
  ghost-link-button:
    role: tertiary action
  interactive-link-button:
    role: interactive link
  main-input-field:
    role: form input
  badge:
    role: categorization, tag
  hero-message-tag:
    role: hero decorative
  gradient-cube-card:
    role: featured content card
---

## Overview

**North Star:** Deep Space Command Center. A dark, expansive digital environment where critical data is precisely displayed and interactive elements glow with focused purpose.

This system projects an aura of understated power and technical mastery, like a high-end server silently performing complex operations. Dark, expansive backgrounds (#0D0E12) provide an immersive canvas for crisp white typography (#EFEFF1), creating a high-contrast experience that is clear without being harsh. Strategic use of a vibrant blue (#2B89FF) and subtle internal gradients (#FF8791 to #F9B571, #6C81FF to #C08DFF) on data visualizations and interactive elements provides dynamic focal points against the deep, calm palette. Softly rounded corners (4px, 5px) on interactive elements add a subtle touch of approachability to an otherwise precise and rigorous aesthetic.

### Do's

- Use Midnight Core (#0D0E12) as the primary background color for all main content areas.
- Apply Inter (system-ui) for all body text at 16px weight 400 with a line-height of 1.69, in Silver Text (#EFEFF1).
- Employ Hashicorp Sans at 82px weight 700 with letter-spacing -0.01em for all main display headings.
- Reserve the Interactive Blue (#2B89FF) for all primary interactive elements like call-to-action buttons and active links.
- Ensure input fields use a 5px border-radius and a #616875 border, with #0D0E12 background.
- Maintain a clear visual hierarchy using high contrast typography: #EFEFF1 on #0D0E12, and #3B3D45 on #FFFFFF.
- Use 5px border radius consistently for all buttons and badges for a unified interactive element feel.

### Don'ts

- Do not use box shadows for general content cards; maintain a flat, layered surface aesthetic for non-interactive elements.
- Avoid introducing additional saturated colors outside of the defined Brand and Accent groups; keep the palette disciplined.
- Do not use generic system fonts for display headings; Hashicorp Sans with its unique letter-spacing is crucial for brand identity.
- Disperse or combine interactive blue (#2B89FF) with neutral gray text; it must stand out clearly as an action indicator.
- Do not deviate from the specified type scale and line-heights; optical adjustments for headings are baked into Hashicorp Sans letter-spacing.

### Layout

The layout primarily uses a max-width contained grid for content, though the hero section extends full-bleed with a dark, atmospheric background and a centrally aligned headline. Sections alternate between purely dark backgrounds (#0D0E12) and sections with subtle gradient imagery. Content is typically arranged in clear, organized blocks, often featuring a half-width text column paired with a half-width visual element, or structured as multi-column card grids for features. Vertical spacing between sections is generous and consistent. The header features a top bar navigation that becomes sticky, providing access to primary links and CTAs. The overall feel is spacious and information-dense without being cluttered.

### Imagery

This site features a blend of abstract 3D renders and technical illustrations. The renders often depict glowing, geometric forms (like the prominent cube) set against dark, atmospheric backgrounds, serving as decorative and conceptual hero imagery. These visuals use the Cosmic Violet and Sunset Peach gradients. Product-focused illustrations are clean, often showing network diagrams or subtle interface elements. Imagery is typically contained within sections or cards, rarely full-bleed, but forms dynamic focal points. Iconography is clean, outlined, and monochromatic, primarily in Silver Text (#EFEFF1) or Ash Accent (#B2B6BD), switching to Interactive Blue (#2B89FF) for active states. The imagery's role is primarily atmospheric and explanatory, reinforcing the technical and sophisticated brand identity.
