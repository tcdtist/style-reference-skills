---
version: alpha
name: MetaMusic
description: MetaMusic's design system uses a bright, open canvas with confident, spacious typography and an energetic blue as its primary accent. It balances structured information with distinctive organic curves and illustrative flourishes. Surfaces are mostly crisp white or subtle off-whites, providing a clean backdrop for bold headlines and call-to-action elements. The overall feel is one of clarity and approachable modernity, leveraging a limited color palette to emphasize important interactive elements and brand messaging.
colors:
  midnight-ink: "#0e2575"
  action-blue: "#0066cc"
  off-white-canvas: "#f4f1ea"
  snowdrift: "#ffffff"
  jet-black: "#000000"
  graphite: "#101820"
  slate-blue: "#828aa8"
  lavender-mist: "#e6e0f8"
  warm-beige: "#f7e1d5"
  silver-thread: "#d6d6d6"
  sky-tint: "#e9f4ff"
  deep-plum: "#213680"
  accent-blue: "#0b5aaa"
  wheat-dust: "#f9f7f3"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.35
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.35
    letterSpacing: -0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -0.015px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.01px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.05
    letterSpacing: -0.03px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.95
    letterSpacing: -0.03px
spacing:
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 96px
components:
  pill-button:
    role: Standard interactive button, typically for secondary actions.
  primary-action-block:
    role: Prominent interactive block for primary calls to action.
  tertiary-card:
    role: Informational cards or feature blocks with a substantial background color.
  feature-icon-circle:
    role: Decorative circular background for icons within feature sections.
  standard-content-card:
    role: General purpose content card for displaying information.
  ghost-input-field:
    role: Text input field with minimal styling.
  pill-badge:
    role: Informational tags for categorization or status.
---

## Overview

**North Star:** White Canvas, Blue Current

MetaMusic's design system uses a bright, open canvas with confident, spacious typography and an energetic blue as its primary accent. It balances structured information with distinctive organic curves and illustrative flourishes. Surfaces are mostly crisp white or subtle off-whites, providing a clean backdrop for bold headlines and call-to-action elements. The overall feel is one of clarity and approachable modernity, leveraging a limited color palette to emphasize important interactive elements and brand messaging.

### Do's

- Always use Maison Neue for body text and headlines, varying weights for hierarchy.
- Use Action Blue (#0066cc) for all primary interactive elements, ensuring its vibrant color signifies action.
- Apply a 24px border-radius to all cards and major content blocks to maintain a consistent soft corner aesthetic.
- Employ the 9999px border-radius for all buttons and badges for a distinct pill-shaped appearance.
- Maintain generous vertical spacing between sections, primarily 96px, to create comfortable information blocks.
- Utilize Off-White Canvas (#f4f1ea) as the default background for light sections, creating an open and airy base.
- Ensure input fields use Lavender Mist (#e6e0f8) for their border, signaling a subtle interactive element.

### Don'ts

- Avoid using multiple chromatic colors for primary calls to action; Action Blue (#0066cc) is the sole accent for this role.
- Do not introduce sharp corners on cards or buttons; aim for the established 24px or 9999px radius.
- Refrain from heavy drop shadows; elevation is primarily achieved through background color shifts and subtle borders, not complex shadow layers.
- Do not deviate from the Maison Neue and Spoof typefaces; avoid using system fonts or other custom fonts.
- Avoid dense, packed layouts; embrace comfortable spacing of 8px for elements and 96px for sections.
- Do not use dark backgrounds for general body text areas; Snowdrift (#ffffff) and Off-White Canvas (#f4f1ea) are for readability.
- Avoid making text links indistinguishable from body text; ensure they use Action Blue (#0066cc) for clarity.

### Layout

The page uses a maximum-width 1200px centered layout for most content, with occasional full-bleed sections. The hero features a large, centered headline (Maison Neue display-lg) over a clear Off-White Canvas background, with an abstract illustration providing visual interest. Sections alternate between Off-White Canvas and Midnight Ink (#0e2575) backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column layouts with text on one side and a visual element or card on the other, or in multi-column card grids for feature showcases. The navigation is a sticky top bar with a logo, text links, and a pill-shaped portal button.

### Imagery

The site uses a mix of flat, vector-based illustrations and simple, clean iconography. Illustrations feature abstract representations of music-related concepts and metadata flows with organic, flowing lines, primarily using the Accent Blue (#0b5aaa) for strokes and a limited secondary palette. Icons are predominantly outlined, matching the stroke weight of illustrations, often presented within circular color backgrounds. Imagery serves an explanatory and decorative role, enhancing understanding without being photo-realistic. Density is medium, with illustrations often anchoring sections or filling background spaces without overwhelming text content.
