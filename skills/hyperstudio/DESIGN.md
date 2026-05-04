---
version: alpha
name: Hyperstudio
description: This design system evokes a sparse, high-contrast digital workspace, reminiscent of a command line interface or early internet text modes but with a refined typographic sensibility. The stark black backgrounds (#101010, #080808) are punctuated by crisp white text (#F3F3F3, #FFFFFF), creating a sense of technical precision and directness. Minimal chromatic accents (#E7C59A, #00AC5C) are used sparingly, like status lights, ensuring they immediately draw the eye and signify interactive elements or states without overwhelming the monochrome base. Custom Aeonik and Input fonts lend a distinctive, somewhat retro-futuristic feel, reinforcing the tech-focused brand identity.
colors:
  midnight-void: "#101010"
  deep-space: "#080808"
  polar-white: "#F3F3F3"
  absolute-zero: "#FFFFFF"
  ash-gray: "#949494"
  dark-carbon: "#333333"
  slate: "#C1C1C1"
  light-gradients: "#B5B5B5"
  amber-glow: "#E7C59A"
  neon-green: "#00AC5C"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.43
    letterSpacing: -0.007px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.28
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.22
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.11
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.07
  display:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.03
  display-lg:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 0.95
    letterSpacing: -0.011px
spacing:
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 64px
components:
  availability-status-pill-cta-button-group:
    role: 
  service-feature-cards-grid:
    role: 
  why-hyperstudio-manifesto-block:
    role: 
  primary-ghost-button:
    role: Call to action button for primary actions
  secondary-ghost-button:
    role: Call to action button for secondary actions
  small-status-pill-tag:
    role: Indicates status or limited availability
  header-navigation-link:
    role: Navigation items in the primary header
  header-navigation-tag:
    role: Highlighted new navigation items
  chat-button:
    role: Persistent contact CTA in the header
  service-feature-card:
    role: Used to highlight key service offerings
  manifesto-button:
    role: Secondary call to action button, typically for more information.
---

## Overview

**North Star:** Monochrome terminal with amber accents. The design feels like a precisely coded interface, where every element serves a distinct, functional purpose against a dark, featureless backdrop.

This design system evokes a sparse, high-contrast digital workspace, reminiscent of a command line interface or early internet text modes but with a refined typographic sensibility. The stark black backgrounds (#101010, #080808) are punctuated by crisp white text (#F3F3F3, #FFFFFF), creating a sense of technical precision and directness. Minimal chromatic accents (#E7C59A, #00AC5C) are used sparingly, like status lights, ensuring they immediately draw the eye and signify interactive elements or states without overwhelming the monochrome base. Custom Aeonik and Input fonts lend a distinctive, somewhat retro-futuristic feel, reinforcing the tech-focused brand identity.

### Do's

- Prioritize high contrast between text and background, typically Polar White (#F3F3F3) on Midnight Void (#101010) or Absolute Zero (#FFFFFF) on Dark Carbon (#333333).
- Use Aeonik at size 63px, weight 700, and lineHeight 0.95 for primary display headlines to maintain a commanding yet compact presence.
- Employ Amber Glow (#E7C59A) exclusively for key attention-grabbing elements, such as 'NEW' labels or critical status indicators.
- Maintain a default border radius of 8px for most interactive elements and cards, using 99px only for circular or pill-shaped tags.
- Utilize Input font for any content that benefits from a monospace, data-like presentation, especially at -0.037em letter spacing for specific technical details.
- Structure layouts with ample section-gap (64px) to create a spacious, breathable feel between content blocks despite the dark theme.
- Employ Neon Green (#00AC5C) to denote positive status, availability, or success, ensuring it stands out as an unambiguous indicator.

### Don'ts

- Do not introduce additional vibrant colors; stick to Amber Glow (#E7C59A) and Neon Green (#00AC5C) as the only chromatic accents.
- Avoid using drop shadows for elevation; rely on varied shades of dark neutrals like Midnight Void (#101010) and Deep Space (#080808) for depth perception.
- Do not deviate from the specified tight line-heights for headlines, as they are crucial for the dense, impactful typographic style.
- Do not use generic system fonts; Aeonik and Input are essential to the brand's distinctive technical aesthetic.
- Avoid excessive rounding; maintain sharp or subtly rounded corners (8px) for most UI elements, reserving pill shapes for specific tags.
- Do not use full-width background images that break the defined dark background color palette; visual interest comes from typographic treatment and data visualization.

### Layout

The page primarily uses a full-bleed, dark-themed model with content centered within an implied maximum width, though no explicit max-width is strictly enforced visually. The hero section is full-viewport, featuring a prominent centered headline over an abstract pixelated graphic on a deep black background. Sections are delineated by consistent vertical spacing of approximately 64px, with subtle shifts in background darkness creating a sense of depth rather than sharp dividers. Content arrangement leans towards centered stacks or clear two-column grid layouts for textual features and service descriptions. The density is comfortable, with generous breathing room around content blocks. Navigation is a sticky top bar with a left-aligned logo and right-aligned links and a prominent 'LET'S CHAT' button.

### Imagery

The visual language is characterized by abstract, pixelated graphics, specifically 'hands' composed of stark white dots on a black background, which adds a digitized, almost retro-tech aesthetic. There are no traditional photographs or realistic illustrations. Icons are simple, outlined, and monochromatic, matching the overall dark theme's precision. These graphics appear to be decorative, creating atmosphere and visual interest without being literal product showcases. The density of imagery is low; large areas of the screen are dominated by text and UI elements, with graphics serving as large-scale background motifs. Treatment is full-bleed for the abstract graphics, often low-opacity or subtle, allowing them to complement rather than compete with text.
