---
version: alpha
name: Winamp
description: Winamp's visual system evokes a clean, high-contrast digital canvas with sharp, modern typography, accented by a subtle, almost invisible shadow treatment for components. The design maintains a comfortable informational density, balancing clear text hierarchy with a functional, minimal use of color. Cards and interactive elements use defined radii, providing a structured yet approachable feel.
colors:
  absolute-zero: "#000000"
  arctic-white: "#ffffff"
  graphite: "#18181b"
  fog: "#f7f7f7"
  storm-gray: "#71717a"
  midnight-ash: "#09090b"
  silver-whisper: "#a1a1aa"
  cloud-burst: "#d4d4d8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: -0.264px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.6
    letterSpacing: -0.33px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.26
    letterSpacing: -0.418px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.528px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.18
    letterSpacing: -0.748px
  display:
    fontFamily: "system-ui"
    fontSize: 69px
    lineHeight: 1.13
    letterSpacing: -1.518px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Navigational call to action
  ghost-button:
    role: Secondary action or subtle navigation
  light-card:
    role: Content container
  dark-card:
    role: Emphasized content container
  navigation-link:
    role: Top-level navigation items
---

## Overview

**North Star:** Crisp digital canvas

Winamp's visual system evokes a clean, high-contrast digital canvas with sharp, modern typography, accented by a subtle, almost invisible shadow treatment for components. The design maintains a comfortable informational density, balancing clear text hierarchy with a functional, minimal use of color. Cards and interactive elements use defined radii, providing a structured yet approachable feel.

### Do's

- Prioritize Absolute Zero (#000000) for all primary text elements to ensure high contrast and readability on light backgrounds.
- Use Fog (#f7f7f7) as the base page background color; combine it with Arctic White (#ffffff) for subtle surface elevation on cards or modal backgrounds.
- Apply 16px border-radius to cards and larger content blocks to maintain a consistent soft-edged aesthetic.
- Utilize Poppins for all primary typographic needs, applying the detected -0.0220em letter-spacing for a refined text appearance.
- Maintain an elementGap of 10px between inline UI elements and a sectionGap of 40px for vertical rhythm between content blocks.
- Implement buttons with an 8px border-radius, using either the Primary Filled Button (background #18181b) or Ghost Button variants to delineate actions.

### Don'ts

- Avoid arbitrary uses of color; chromatic color should be reserved for brand accents or semantic states not present on this page.
- Do not introduce heavy box-shadows or complex layer effects; the system relies on flat surfaces and high contrast for visual hierarchy.
- Do not deviate from the Poppins typeface for headings and body text; alternative fonts like Rubik and Inter are for specialized contexts only.
- Avoid using radii larger than 16px or smaller than 8px for main components, as this disrupts the established shape language.
- Do not use generic system link blue; primary links should inherit text colors or use Silver Whisper (#a1a1aa) for subtle interactive states if not a button.

### Layout

The page uses a maximum content width centered model, though the hero section spans full-bleed with angled graphical elements. The hero features a large, left-aligned headline and supporting text juxtaposed against the dynamic, overlapping rotated image masks on the right. Subsequent sections, while not fully detailed, suggest a consistent vertical rhythm using a 40px section gap. Content generally seems to follow a clear single-column or implied two-column structure for text-focused areas, with visual interest added by the angled images.

### Imagery

Imagery consists primarily of lifestyle photography with a warm, slightly desaturated tonal quality, featuring people engaged with music or technology. These images are treatment-free (no filters or overlays) and are presented within a distinctive rotated, rectangular mask with 16px rounded corners, often angled to create dynamic, overlapping compositions that break the typical grid. Icons are minimal, outlined, and monochromatic, primarily serving functional roles rather than decorative.
