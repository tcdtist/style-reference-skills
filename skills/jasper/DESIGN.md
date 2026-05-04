---
version: alpha
name: Jasper
description: This design system projects a direct and dynamic brand presence, blending professional typographic rigor with an energetic, multi-hued accent palette. The contrast of an authoritative, custom serif paired with a clean sans-serif creates a distinct voice. A core `Jasper Indigo` (#00063d) dominates text, while `Jasper Flame` (#fa4028) acts as a high-energy call-to-action color, injecting urgency and vibrancy. The minimal use of rounded corners and strong visual separation of elements underscore a no-nonsense, results-oriented aesthetic.
colors:
  canvas-white: "#FFFFFF"
  smoke-gray: "#F9F9F9"
  graphite: "#5E5D5F"
  jasper-indigo: "#00063D"
  jasper-flame: "#FA4028"
  system-red: "#FA7560"
  system-green: "#103A00"
  research-green: "#E6FFD9"
  highlight-blue: "#0095FF"
  highlight-pink: "#5A003C"
  highlight-yellow: "#FFF67D"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.72px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
    letterSpacing: -0.84px
  display:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.05
    letterSpacing: -1.14px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.05
    letterSpacing: -1.62px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -2.4px
spacing:
  elementGap: 8px
  sectionGap: 32px
components:
  announcement-banner-cta-buttons:
    role: 
  platform-section-block:
    role: 
  metric-stat-card:
    role: 
  primary-cta-button:
    role: Call to action
  secondary-cta-button:
    role: Secondary call to action
  navigation-link:
    role: Top navigation
  feature-card:
    role: Informational display
  illustrative-background-card:
    role: Thematic content block
  new-research-badge:
    role: Highlighting new content
  dark-badge:
    role: Informational tag
  light-badge:
    role: Informational tag
---

## Overview

**North Star:** Marketing billboard meets data dashboard. Bold headlines and vibrant accents punctuate a clean, analytical canvas.

This design system projects a direct and dynamic brand presence, blending professional typographic rigor with an energetic, multi-hued accent palette. The contrast of an authoritative, custom serif paired with a clean sans-serif creates a distinct voice. A core `Jasper Indigo` (#00063d) dominates text, while `Jasper Flame` (#fa4028) acts as a high-energy call-to-action color, injecting urgency and vibrancy. The minimal use of rounded corners and strong visual separation of elements underscore a no-nonsense, results-oriented aesthetic.

### Do's

- Use `Feature` font with `Jasper Indigo` (#00063d) for all primary headlines to establish an authoritative tone.
- Apply `Jasper Flame` (#FA4028) exclusively for primary call-to-action buttons to ensure maximum visual urgency.
- Maintain `0px` border-radius across all components unless explicitly defined as `4px` for badges, reinforcing a sharp, precise aesthetic.
- Employ `12px` as the base horizontal padding for card-like elements, creating consistent internal spacing.
- Utilize `Smoke Gray` (#F9F9F9) for subtle content separation, such as card backgrounds, to maintain visual lightness.
- Implement the `-0.0100em` letter-spacing for `ABC ROM` body copy at all sizes, contributing to a controlled, dense text appearance.

### Don'ts

- Do not introduce rounded corners on primary elements like buttons or cards; maintain the `0px` border-radius for brand consistency.
- Avoid using `System Red` (#FA7560) or `System Green` (#103A00) for general interactive elements; reserve them for semantic feedback like error or success.
- Do not use box-shadows on cards or UI elements; rely on background color changes for perceived depth.
- Do not deviate from the `Feature` font's specific letter-spacing values for headlines; these are critical for its distinctive look.
- Avoid arbitrary color accents; restrict accent colors to the defined palette of `Highlight Blue`, `Pink`, and `Yellow` within illustrations or specific features.
- Do not add extra padding to navigation links beyond their natural content box; they should appear lean and integrated.

### Layout

The page primarily uses a `max-width` contained layout, centered on a `Canvas White` background, creating a spacious and structured feel. The hero section is a full-width experience with a centered headline and CTA buttons against a background of abstract, brand-colored vector illustrations. Sections alternate between purely text-based content and those featuring large, conceptual illustrations or product screenshots. Content arrangement frequently uses two-column layouts, often with text on one side and a prominent visual on the other, or a `3-column card grid` for feature showcases. Vertical spacing between major sections is generous, around `32px`, providing ample breathing room. The navigation is a sticky top bar with a logo and distinct calls to action on the right.

### Imagery

The site's visual language is dominated by playful, technical illustrations and product screenshots. Illustrations employ a mix of geometric and organic shapes, outlined in `Graphite` (#5E5D5F) and filled with bright, brand-specific accent colors (`Research Green`, `Highlight Blue`, `Highlight Pink`, `Highlight Yellow`). These are often presented on transparent card backgrounds, allowing the section's background to show through. Photography is limited to candid, high-key images of smiling diverse individuals, used specifically for testimonials or team members. Icons are outlined, mono-color, and use a consistent stroke weight, typically in `Graphite` or `Jasper Indigo`. Imagery serves to explain complex AI workflows in an engaging way and to humanize the technology, acting as both decorative and explanatory content, occupying significant visual space relative to text.
