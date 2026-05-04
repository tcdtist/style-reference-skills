---
version: alpha
name: PostHog
description: PostHog evokes a functional yet playful workshop aesthetic, like a well-organized workbench with tools neatly arranged. The primary UI elements are predominantly neutral, providing a calm backdrop for sharp, vivid accents. The interplay between a constrained color palette for core UI and a vibrant, multi-hued gradient for brand identity creates a sense of focused competence with a hint of accessible creativity. Custom typography, particularly the varied weights of IBM Plex Sans Variable, lends a bespoke engineered feel.
colors:
  surface-white: "#ffffff"
  canvas-sand: "#eeefe9"
  pale-granite: "#e5e7e0"
  ink-black: "#000000"
  charcoal-black: "#111827"
  graphite-grey: "#374151"
  faded-grey: "#4d4f46"
  ash-grey: "#65675"
  warm-gray-tint: "#e1d7c2"
  sky-blue: "#2f80fa"
  marigold-yellow: "#f1a82c"
  sunset-orange: "#eb9d2a"
  vivid-green: "#6aa84f"
  dynamic-gradient: "#2b6ff4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1
    letterSpacing: -0.9px
spacing:
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 48px
components:
  cta-button-group:
    role: 
  feature-tab-bar:
    role: 
  sidebar-navigation-links:
    role: 
  primary-cta-button:
    role: Main call-to-action
  ghost-button:
    role: Secondary action
  inline-text-button:
    role: Contextual action
  tab-button-active:
    role: Active tab navigation
  tab-button-inactive:
    role: Inactive tab navigation
  content-card:
    role: Information grouping
  navigation-link-active:
    role: Indicates current page
---

## Overview

**North Star:** Workbench with playful tools. A clean, light canvas anchored by a single vibrant accent color.

PostHog evokes a functional yet playful workshop aesthetic, like a well-organized workbench with tools neatly arranged. The primary UI elements are predominantly neutral, providing a calm backdrop for sharp, vivid accents. The interplay between a constrained color palette for core UI and a vibrant, multi-hued gradient for brand identity creates a sense of focused competence with a hint of accessible creativity. Custom typography, particularly the varied weights of IBM Plex Sans Variable, lends a bespoke engineered feel.

### Do's

- Prioritize IBM Plex Sans Variable for all text using its full range of weights and the defined negative letter-spacing.
- Use Marigold Yellow (#f1a82c) for primary call-to-action buttons to ensure high visibility.
- Maintain a default border-radius of 4px for most interactive elements and general containers.
- Distinguish content sections using neutral background colors: Surface White (#ffffff) and Canvas Sand (#eeefe9).
- Employ Graphite Grey (#374151) for secondary text and borders to provide visual texture and hierarchy without being too heavy.
- Reserve the Dynamic Gradient for brand marks or very specific, high-impact decorative elements.

### Don'ts

- Avoid using pure black text (#000000) on white backgrounds for large body paragraphs; use Charcoal Black (#111827) for headlines and Graphite Grey (#374151) for body text.
- Do not introduce new typographic families; adhere strictly to IBM Plex Sans Variable, ui-monospace, and Source Code Pro.
- Refrain from adding excessive box shadows; the primary shadow is subtle and used for specific elevation (rgba(0, 0, 0, 0.25) 0px 25px 50px -12px).
- Do not deviate from the established spacing scale; maintain sectionGap at 48px and elementGap at 8px.
- Avoid arbitrary color usage; all accent colors like Vivid Green (#6aa84f) should serve a specific, predefined semantic role (e.g., success, feature highlight).
- Do not use heavily rounded elements except for specific pill-shaped tags or buttons (9999px radius); the default is a modest 4px or sharp 0px.

### Layout

The page primarily uses a max-width 958px centered layout for its main content, framed by a soft, light-toned canvas background. A prominent aspect is the left-hand persistent navigation/file tree sidebar and a right-hand assistive content sidebar, creating a three-column desktop experience. The hero section features a centered headline over a white background, accompanied by a contained illustration. Content sections then alternate between white and canvas-sand backgrounds with consistent vertical spacing (sectionGap 48px). Information is often presented in a two-column text-left/image-right or text-over-text arrangement. The site navigation uses a top bar, separate from the primary content window, hinting at a web-app style interface.

### Imagery

The visual language is characterized by custom, slightly whimsical illustrations, primarily featuring hedgehog-like mascots in various work-related scenarios. These illustrations are flat, outlined, and brightly colored, serving an explanatory and atmospheric role. They are typically contained within the main content area, integrated with text, rather than full-bleed. Icons are functional, mono-color (either black, gray, or the accent Sky Blue), and often have a filled, slightly chunky style. The overall density of imagery is balanced, supporting the textual content without overwhelming it, creating a friendly and approachable feel for a technical product.
