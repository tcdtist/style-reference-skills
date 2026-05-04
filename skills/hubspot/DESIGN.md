---
version: alpha
name: HubSpot
description: HubSpot's visual system evokes a reliable, professional ecosystem with a warm, energetic core. It combines a clean, spacious light theme with strong, structured typography. Muted background tones provide a subtle backdrop for card-based content, while a vibrant orange serves as the primary accent, signaling action and branding. The overall impression is one of clarity and approachable efficiency.
colors:
  ink-black: "#1f1f1f"
  canvas-white: "#fcfcfa"
  frosted-gray: "#f8f5ee"
  midnight: "#000000"
  lead-gray: "#60605f"
  pale-ash: "#cacac8"
  marketing-orange: "#ff4800"
  accent-violet: "#0000c5"
  sunset-gradient: "#ff4900"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.75
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.78
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.56
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.45
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.19
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 24px
components:
  primary-action-button:
    role: Call-to-action button for initiating primary user flows.
  ghost-button-text-link:
    role: Secondary action or navigational link mimicking button behavior.
  default-card:
    role: Container for grouped content, features, or product listings.
  badge-pill:
    role: Small informational tag, often for categorization or status.
  tag-badge:
    role: Smaller, more compact informational tag.
  navigation-link:
    role: Interactive text link within navigation menus.
---

## Overview

**North Star:** Warm,橙色效率

HubSpot's visual system evokes a reliable, professional ecosystem with a warm, energetic core. It combines a clean, spacious light theme with strong, structured typography. Muted background tones provide a subtle backdrop for card-based content, while a vibrant orange serves as the primary accent, signaling action and branding. The overall impression is one of clarity and approachable efficiency.

### Do's

- Always use Marketing Orange (#ff4800) for primary call-to-action buttons, ensuring a consistent visual cue for interaction.
- Apply a 16px border-radius to all content cards and larger badge elements to maintain a soft, approachable aesthetic.
- Utilize Ink Black (#1f1f1f) for main body text and prominent headings to optimize readability against light backgrounds.
- Employ HubSpot Serif Page Header Human at 80px, weight 500 for hero section headlines to create impactful, authoritative messaging.
- Maintain a clear visual hierarchy by using Canvas White (#fcfcfa) as the dominant background color for content areas, contrasting it with the footer's Ink Black (#1f1f1f).
- Separate content sections with ample vertical spacing, defaulting to a 24px section gap for comfortable visual rhythm.
- When outlining interactive elements, use Ink Black (#1f1f1f) for borders to create subtle definitions without heavy shadows.

### Don'ts

- Do not introduce new saturated primary colors; only Marketing Orange (#ff4800) and Accent Violet (#0000c5) serve chromatic roles.
- Avoid using harsh shadows; rely on clear background separation or subtle borders for element distinction instead.
- Do not deviate from the specified typographic hierarchy; specific serif and sans-serif fonts have designated roles for headlines and body text.
- Do not use generic gray buttons; if an action is not primary, use a ghost button style with Ink Black text on a transparent background.
- Do not use less than 8px border-radius for buttons; 8px is the minimum for interactive elements.
- Avoid dense, information-heavy blocks without sufficient padding; ensure cards have at least 32px horizontal and 24px vertical padding.
- Do not place body text directly on a highly saturated background; always ensure a high contrast ratio against Canvas White (#fcfcfa) or similar light neutrals, typically using Ink Black (#1f1f1f).

### Layout

The page primarily uses a max-width contained layout, though the hero section spans full-bleed with content centered over a background image. The hero features a large, centered headline followed by a centered text block and two prominent action buttons. Subsequent sections alternate between text-left/image-right compositions and 2-column or 3-column card grids, maintaining consistent vertical spacing. There are no strong visual dividers between sections; instead, the layout relies on shifts in content type and negative space. Navigation is composed of a sticky top bar with product dropdowns and right-aligned utility links.

### Imagery

The site uses a mix of real-world photography and abstract, colorful 3D illustrations. Photography tends to be lifestyle-oriented, often featuring groups of people collaborating in professional but relaxed settings, generally with natural lighting and unmasked, soft edges. Illustrations are abstract, dimensional, and vibrant, using a multi-hued gradient palette. Icons are primarily outlined or flat filled in black or Marketing Orange, maintaining a clean, utilitarian style. Imagery functions decoratively to set a mood and illustrate concepts rather than showcase product UIs directly. Density and placement vary, with a large hero image followed by blocks of text-dominant content, punctuated by smaller abstract visuals.
