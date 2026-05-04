---
version: alpha
name: Webflow
description: Webflow's design system projects confident utility through a sharp, clean interface. A monochromatic foundation of stark blacks and whites is punctuated by a singular, vibrant blue, drawing focus to interactive elements. Typography is the primary conveyor of brand personality, with large, precisely tracked sans-serif headlines creating a modern, impactful presence while subtle shadows add depth to interactive elements without overwhelming the clean aesthetic.
colors:
  canvas-white: "#ffffff"
  ink-black: "#080808"
  slate-gray: "#5a5a5a"
  whisper-gray: "#f0f0f0"
  outline-gray: "#d8d8d8"
  webflow-blue: "#146ef5"
  sky-blue: "#6ca7ff"
  emerald-green: "#60ed76"
  amber-glow: "#ffa666"
  deep-blue-gradient: "#146ef5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.04
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -0.01px
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 24px
components:
  build-mode-selector-cards:
    role: 
  feature-list-with-arrow-links:
    role: 
  cookie-consent-banner:
    role: 
  primary-cta-button:
    role: Call to Action
  secondary-ghost-button:
    role: Secondary Action
  navigation-link-button:
    role: Navigation/Menu
  compact-feature-card:
    role: Informational Display
  outline-tag-button:
    role: Filter/Small Action
  cookie-consent-banner:
    role: Regulatory Notification
---

## Overview

**North Star:** Precise Blueprint on Stark Canvas — where every element serves a clear function against a bright, expansive backdrop.

Webflow's design system projects confident utility through a sharp, clean interface. A monochromatic foundation of stark blacks and whites is punctuated by a singular, vibrant blue, drawing focus to interactive elements. Typography is the primary conveyor of brand personality, with large, precisely tracked sans-serif headlines creating a modern, impactful presence while subtle shadows add depth to interactive elements without overwhelming the clean aesthetic.

### Do's

- Use WF Visual Sans Variable weight 600 for main headlines to convey importance with a modern, sharp tone.
- Apply Webflow Blue (#146ef5) exclusively to primary calls to action and critical interactive elements.
- Maintain a clear visual hierarchy by utilizing Ink Black (#080808) for primary text and Slate Gray (#5a5a5a) for secondary, descriptive content.
- Employ a 4px border-radius for all interactive buttons and smaller UI elements to establish a consistent subtle softness.
- Use the Ink Black to Canvas White (20:1) contrast for all essential text to ensure AAA legibility.
- Apply subtle, multi-layered shadows (e.g., rgba(0,0,0,0.01) 0px 54px 22px 0px) to interactive or elevated elements for depth, avoiding heavy dropshadows.

### Don'ts

- Do not introduce additional vibrant colors beyond the established Webflow Blue, Emerald Green, and Amber Glow accents.
- Avoid using flat black (#000000) for text; opt for Ink Black (#080808) for a softer, yet still direct, appearance.
- Do not use overly large line heights for headlines; maintain a tight `1.0` to `1.2` ratio to keep headlines compact and powerful.
- Refrain from varying letter-spacing on body text; apply only to large headlines with the specified negative tracking for impact.
- Do not use sharp 0px corners in functional components, except for subtle decorative elements like specific input borders.

### Layout

The site uses a max-width 1440px centered container for most content, creating a focused presentation. The hero section often features large, centered headlines followed by a subheading, establishing a bold and direct introduction. Content sections primarily use a clean, modular layout with both single-column stacks and multi-column grids (like 3-column cards). Vertical rhythm is maintained with consistent section gaps, creating breathing room between content blocks. The navigation is a sticky top bar with clear functional links and a Webflow Blue 'Start for free' CTA.

### Imagery

The visual language is UI-heavy, with product screenshots of the Webflow interface integrated to explain features rather than purely decorative photography. These product screenshots often feature subtle elevation via shadows. Minimal abstract or illustrative graphics are used sparingly with strong brand blue accents. Icons are monochromatic, contributing to the functional aesthetic. Imagery primarily serves an explanatory role, showcasing the product directly.
