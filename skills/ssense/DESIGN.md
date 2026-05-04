---
version: alpha
name: Ssense
description: This design system evokes a raw, editorial aesthetic, balancing high fashion photography with an almost stark, functional UI. The interplay of classic serif typography for headlines and a utilitarian sans-serif for body text creates a tension, amplified by the near-monochromatic palette. Minimal use of color and a focus on content photography establishes a luxurious but unpretentious feel, prioritizing visual storytelling over decorative elements.
colors:
  ink-black: "#000000"
  charcoal-gray: "#333333"
  silver-thread: "#888888"
  ash-gray: "#979797"
  canvas-white: "#ffffff"
  paper-white: "#f4f4f4"
  alabaster: "#e8e8e8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.36
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.37
    letterSpacing: -0.462px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.19
    letterSpacing: -0.627px
  heading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.26
    letterSpacing: -0.957px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.16
    letterSpacing: -1.408px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.07
    letterSpacing: -0.896px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 95px
    lineHeight: 0.99
    letterSpacing: -4.465px
spacing:
  elementGap: 10-30px
  sectionGap: 64px
components:
  announcement-banner:
    role: 
  recent-editorial-cards:
    role: 
  editorial-cta-block:
    role: 
  primary-navigation-link:
    role: Top-level menu items
  editorial-hero-title:
    role: Main feature headline
  editorial-hero-description:
    role: Supporting text for hero section
  view-editorial-button:
    role: Call to action for editorial content
  product-card:
    role: Display for new arrivals or featured products
  footer-link:
    role: Navigation links in the footer
  minimal-input-field:
    role: Search or subscription form fields
---

## Overview

**North Star:** Gallery Wall Blueprint – A precisely gridded display of curated visuals on a clean, unobtrusive canvas.

This design system evokes a raw, editorial aesthetic, balancing high fashion photography with an almost stark, functional UI. The interplay of classic serif typography for headlines and a utilitarian sans-serif for body text creates a tension, amplified by the near-monochromatic palette. Minimal use of color and a focus on content photography establishes a luxurious but unpretentious feel, prioritizing visual storytelling over decorative elements.

### Do's

- Always use a clear hierarchy of #000000 for primary text, #333333 for secondary text, and #888888 for tertiary text.
- Prioritize 'JHA Times Now' (100) at large sizes (56px) for main editorial headlines to achieve a soft, luxurious feel.
- Maintain generous vertical spacing between sections, opting for a minimum 'sectionGap' of 64px.
- Utilize '#f4f4f4' as a background for subtly differentiated content blocks, providing context without visual noise.
- Apply 'Favorit SSENSE Inter' at 11px/400 weight for all utility and metadata text to maintain a consistent discreetness.
- For CTA buttons, use a 1px border of #333333 and a Canvas White (#ffffff) background with Ink Black (#000000) text.
- Use tight letter-spacing for headlines and display text, particularly the negative values for 'Favorit SSENSE Inter1' at larger sizes, to ensure a compact, architectural look.

### Don'ts

- Avoid using bright or saturated colors; maintain the monochromatic palette with slight textural variations in grays and whites.
- Do not use heavy font weights (e.g., 600-700) for headlines; the ultra-light 'JHA Times Now 100' is preferred for high-impact text.
- Refrain from excessive border radii on elements; most components should be sharp-edged, with minimal rounding only where detected (e.g., 10px on specific links).
- Do not use drop shadows for elevation; rely on background color changes (#f4f4f4, #e8e8e8) or subtle borders to define layers.
- Avoid decorative elements or excessive UI chrome; the design should foreground content and photography.

### Layout

The site employs a full-bleed page model with content often adhering to a flexible grid within wider sections. The hero pattern prominently features a large image paired with a display-sized headline and supporting text, typically in a split-screen or overlay arrangement. Section rhythm is often established through alternating content blocks, sometimes breaking into a multi-column grid for 'Recent' articles or product displays. Content arrangement typically follows a clear visual hierarchy, with large hero blocks yielding to smaller, gridded cards. The navigation includes a sticky top bar and secondary navigation that expands vertically. Density is comfortable, with generous white space around elements, allowing content (especially imagery) to breathe and command attention.

### Imagery

The visual language is dominated by high-quality fashion photography and product shots. Photography is often full-bleed or large-format, meticulously composed, and typically features dark-haired models with expressive gazes or product shots on clean, reflective surfaces. Images carry significant weight, acting as anchors for editorial content or direct product showcases. There's a mix of candid, slightly gritty editorial photography for articles and polished, stylized studio photography for products. Icons are minimal, likely monochrome, used sparingly for navigation and UI elements. The role of imagery is primarily content-driven: showcasing fashion, presenting products, and setting an editorial mood, making the site image-heavy with photography often overlapping or being tightly gridded.
