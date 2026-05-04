---
version: alpha
name: Dezeen
description: The Dezeen design system presents an editorial aesthetic, blending classic serif typography with a modern sans-serif for a distinctive voice. Dominant black text on bright white surfaces creates crisp readability, while the signature 'Indigo Accent' (#556e9b) injects a cool, authoritative hue across key interactive elements and titles. The layout emphasizes content separation and clear hierarchy, utilizing subtle borders and generous vertical spacing to frame articles and navigation.
colors:
  pitch-black: "#000000"
  pure-white: "#ffffff"
  fog-gray: "#f0f0f0"
  silver-ash: "#d8d8d8"
  concrete-gray: "#757575"
  soft-stone: "#eaeaea"
  indigo-accent: "#556e9b"
  sunset-orange: "#ff7617"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.38
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 9px
  sectionGap: 48px
components:
  newsletter-signup-modal:
    role: 
  article-card-list:
    role: 
  most-commented-sidebar-block:
    role: 
  circular-play-button:
    role: Interaction
  underlined-text-button:
    role: Navigation/Action
  circular-highlight-button:
    role: Accent/Icon
  article-card:
    role: Content Display
  newsletter-input-field:
    role: Form Input
---

## Overview

**North Star:** Architectural Blueprint on Crisp White. This metaphor evokes the precision and clarity of architectural drawings and the pristine nature of a fresh page.

The Dezeen design system presents an editorial aesthetic, blending classic serif typography with a modern sans-serif for a distinctive voice. Dominant black text on bright white surfaces creates crisp readability, while the signature 'Indigo Accent' (#556e9b) injects a cool, authoritative hue across key interactive elements and titles. The layout emphasizes content separation and clear hierarchy, utilizing subtle borders and generous vertical spacing to frame articles and navigation.

### Do's

- Use 'Pitch Black' (#000000) for all primary body text and 'Pure White' (#ffffff) for all main backgrounds to ensure high contrast and readability.
- Apply 'Indigo Accent' (#556e9b) exclusively to key interactive elements like links, active navigation items, and prominent headings to guide user focus.
- Reserve the 'Circular Play Button' style for media controls, emphasizing its unique shape against the otherwise angular design.
- Maintain 0px border-radius for all cards and input fields to uphold the sharp, architectural aesthetic.
- Utilize 'Chronicle Text G1 A' for all long-form editorial content at 14px or 16px with appropriate line heights (1.23-1.50) for optimal legibility.
- Employ 'StandardCT' (weight 700) for all main headings and titles, leveraging its strong editorial presence.
- Ensure generous vertical spacing, typically in multiples of 9px or 11px, between content blocks to create a comfortable density and clear content hierarchy.

### Don'ts

- Do not use shadow for card elevation; rely on clear borders or background color shifts where visible.
- Avoid decorative rounded corners on any elements other than specific circular buttons, as it contradicts the sharp, precise aesthetic.
- Do not introduce new chromatic colors unless explicitly defined as an accent; the palette is tightly controlled.
- Never use 'Arial' for main headings or body text; reserve it for minor UI elements or as a system fallback.
- Do not use excessive letter-spacing; all specified fonts use 'normal' letter-spacing to maintain typographic integrity.

### Layout

The page maintains a centered max-width of 1212px for its core content, providing a contained reading experience. The hero section often presents a split layout, with a prominent image juxtaposed against a large headline. Content sections follow a vertical rhythm, with consistent spacing of 9px to 11px between elements and an implied 48px between major sections. Articles typically arrange text and images in alternating left-right or stacked configurations. Navigation consists of a sticky top bar with a search utility and prominent category links, supplemented by a left sidebar for 'Highlights' and 'Most Popular' sections creating a multi-column editorial structure. The layout prioritizes clear content separation and readability.

### Imagery

This site prominently features photography within article cards and hero sections, often displayed full-bleed within its content blocks (0px padding, no radius). The photography style is varied, encompassing product shots, architectural exteriors and interiors, and landscape vistas, but generally leans towards high-quality, professional imagery that serves to illustrate content more than set a specific mood. Photos are contained, not overlapping, and appear without masks or special treatments. Density is moderate, balancing visual interest with text-dominant article layouts. Icons are minimal, typically monochrome, and integrated subtly for navigation or interaction.
