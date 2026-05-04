---
version: alpha
name: Jitter
description: Jitter's design system feels like a playful yet precise workspace, balancing modern utility with a hint of creative energy. The stark contrast between near-black text and a luminous white background creates immediate clarity, while the prominent use of rounded forms, especially large 40-50px radii, softens the otherwise sharp presentation. Energetic violet and blue accents punctuate key interactions, guiding the user through a clean, spacious interface.
colors:
  carbon: "#19171C"
  white-canvas: "#FFFFFF"
  lunar-dust: "#F2F1F3"
  gravel: "#E5E4E7"
  ash: "#97979B"
  slate: "#6E6E73"
  jitter-violet: "#7A40ED"
  sky-blue: "#00B2FF"
  lemon-drop: "#F5FF63"
  soft-violet: "#A981FF"
  lavender-mist: "#CAB3F8"
  nebula-gradient: "#711DE2"
  aurora-gradient: "#D0BAFE"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.44px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.32px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.41
    letterSpacing: -0.44px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.25
    letterSpacing: -0.57px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.95
    letterSpacing: -1.92px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.9
    letterSpacing: -2.88px
spacing:
  buttonRadius: 50px
  elementGap: 12px
  sectionGap: 64px
components:
  announcement-badge-cta-button-group:
    role: 
  templates-section-pill-badge-description-block:
    role: 
  feature-statement-card:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  secondary-call-to-action-button:
    role: Interactive element
  light-elevated-card:
    role: Content container
  subtle-feature-card:
    role: Content container
  search-input-with-radius:
    role: Form element
  new-badge:
    role: Informational label
---

## Overview

**North Star:** Graphic design studio on bleached white paper. A brightly lit, expansive canvas with meticulously placed, rounded interface elements and sharp, bold typography.

Jitter's design system feels like a playful yet precise workspace, balancing modern utility with a hint of creative energy. The stark contrast between near-black text and a luminous white background creates immediate clarity, while the prominent use of rounded forms, especially large 40-50px radii, softens the otherwise sharp presentation. Energetic violet and blue accents punctuate key interactions, guiding the user through a clean, spacious interface.

### Do's

- Prioritize TWK Lausanne for all display text and primary headings to maintain a bold, modern voice, using the tight letter-spacing as found in the typography specification.
- Utilize Jitter Violet (#7A40ED) exclusively for primary calls-to-action to ensure maximum visual hierarchy and user guidance.
- Apply a 40px border-radius to almost all interactive elements and contained content blocks to maintain the system's signature soft, approachable shape.
- Use White Canvas (#FFFFFF) as the dominant background color for page sections and primary content areas, contrasted by deep Carbon (#19171C) text.
- Implement the layered shadow rgba(25, 23, 28, 0.01) 0px 152px 61px, rgba(25, 23, 28, 0.05) 0px 85px 51px, rgba(25, 23, 28, 0.09) 0px 38px 38px, rgba(25, 23, 28, 0.1) 0px 9px 21px for elements requiring significant visual elevation.
- Employ Inter font for all body copy and UI element text for optimal readability across various sizes and contexts.
- Maintain a clear page structure with a maximum content width of 860px, ensuring consistent alignment and readability.

### Don'ts

- Avoid using flat, square buttons or cards; all interactive elements should incorporate the generous 40-50px border-radius.
- Do not introduce new vibrant colors beyond the defined Jitter Violet and Sky Blue accents; the color palette is intentionally refined.
- Refrain from using excessive or varied drop shadows; stick to the defined layered shadow for elevation or no shadow for flat elements.
- Do not deviate from the specified TWK Lausanne and Inter fonts or their respective letter-spacing values, especially for headings, to preserve typographic identity.
- Avoid centering large blocks of body text; left-alignment is preferred for readability within the narrow max-width constraint.
- Do not use dark backgrounds for entire page sections unless leveraging the specific Nebula Gradient, preserving the light theme's clarity.

### Layout

The page maintains a centered, fixed-width model, predominantly 860px, providing a structured and readable experience. The hero section often features a centered headline over a background that shifts between White Canvas and the Nebula Gradient. Content is arranged in alternating sections, commonly featuring a clear heading followed by text and then a visual or interactive element. There's a consistent vertical rhythm of spacing, creating ample breathing room, especially with generous top padding for components. Navigation is a sticky top bar, containing essential links and a prominent 'Try for free' button, suggesting ease of access and clear calls-to-action.

### Imagery

The site's imagery is primarily product-focused, featuring abstract or simplified visuals that represent motion design elements. There are no photographs or complex illustrations. Instead, it utilizes clean icon outlines and abstract graphic shapes, often rendered in shades of gray or accented with Jitter Violet, Sky Blue, and Lemon Drop. These visuals are contained, rarely full-bleed, and serve an explanatory or decorative role to punctuate text blocks, maintaining the spacious, UI-centric feel. Iconography is minimal, using simple geometric shapes and clear lines.
