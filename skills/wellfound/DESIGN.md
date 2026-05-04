---
version: alpha
name: Wellfound
description: Wellfound projects a functional, modern job market feel with a dominant light theme punctuated by dark, almost black, sections for emphasis. The design emphasizes clear navigation and content presentation using a structured layout and a clean typographic hierarchy. Subtle touches of vibrant accent colors are used sparingly to highlight interactive elements and brand identity, rather than for decorative flourishes. Components are generally lightweight, favoring soft borders over heavy shadows.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#051316"
  smoke-gray: "#d8d8d8"
  charcoal: "#333333"
  off-black: "#222222"
  deep-plum: "#210d25"
  rose-blush: "#fff4f6"
  vermillion-red: "#ec2e3a"
  burgundy-bloom: "#541142"
  marigold-gold: "#f4b640"
  fiery-orange: "#e32e19"
  peach-fuzz: "#ffdfda"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.36
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
    letterSpacing: -0.39px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.13
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.44px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.82
    letterSpacing: -2px
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 20px
  sectionGap: 40px
components:
  primary-filled-button-dark:
    role: Call to action button for primary actions.
  ghost-button-light-border:
    role: Secondary action or navigational buttons, visually lighter.
  ghost-button-dark-border:
    role: Secondary action button on light backgrounds.
  feature-card-rose-blush:
    role: Used for presenting key features or benefits.
  information-card-white:
    role: Standard card for content blocks and lists.
  job-tag-button:
    role: Interactive tags for filtering or categorization.
  log-in-button-header:
    role: Navigation button for user authentication.
---

## Overview

**North Star:** Startup Canvas, Clean Bold Type

Wellfound projects a functional, modern job market feel with a dominant light theme punctuated by dark, almost black, sections for emphasis. The design emphasizes clear navigation and content presentation using a structured layout and a clean typographic hierarchy. Subtle touches of vibrant accent colors are used sparingly to highlight interactive elements and brand identity, rather than for decorative flourishes. Components are generally lightweight, favoring soft borders over heavy shadows.

### Do's

- Prioritize Midnight Ink (#051316) for primary text and main calls to action on light backgrounds, ensuring strong contrast.
- Use a 12px border-radius for interactive elements like buttons and navigation items for a consistent rounded aesthetic.
- Apply Rose Blush (#fff4f6) as a subtle background for feature cards to differentiate them from the main Canvas White (#ffffff) surface.
- Maintain generous padding; apply at least 20px padding around content within cards and elements, and a 40px section gap between major content blocks.
- Employ the Graphik typeface for all text elements, utilizing its multiple weights to establish clear typographic hierarchy.
- Use pill-shaped tags with a 1000px border-radius for interactive filters and categorizations, styled with Canvas White (#ffffff) background and Smoke Gray (#d8d8d8) border.
- Introduce a subtle shadow (rgba(0, 0, 0, 0.06) 0px 9px 20px 0px) on interactive elements like buttons to indicate hover or active states.

### Don'ts

- Avoid using multiple accent colors in close proximity; restrict their use to single highlights or functional elements.
- Do not extend Deep Plum (#210d25) to text or borders; reserve it exclusively for background sections or large decorative elements.
- Prevent excessive use of borders; use them sparingly for separation or interactive states rather than for all container elements.
- Do not deviate from the established type scale; maintain consistent font sizes and line heights defined for each semantic role.
- Avoid decorative gradients for UI elements; keep a flat aesthetic with solid colors for all buttons and panels.
- Do not introduce new shadow styles; adhere to the specified button shadow or refrain from using additional shadows.

### Layout

The page primarily follows a max-width contained model (1400px), centered on the screen. The hero section features a prominent, centered headline with interactive tags over a large, dynamically generated background. Sections alternate between Canvas White (#ffffff) and Deep Plum (#210d25) backgrounds for visual rhythm. Content is arranged in either centered stacks or symmetrical two-column text-left/image-right configurations for feature explanations. Navigation consists of a sticky top bar with 'Log In' and 'Sign Up' buttons, and sub-navigation with compact links. Overall density is comfortable, with ample breathing room between elements and sections.

### Imagery

The site uses minimal imagery, primarily focusing on UI and typographic presentation. When present, images are tightly cropped product shots or abstract, illustrative icons rather than photography. Icons are generally outlined, matching the lightweight UI aesthetic. The overall density is text-dominant, with imagery serving as functional complements rather than decorative elements. Abstract graphics like the 'Find what's next' dotted outline are simple, linear, and serve to highlight key phrases.
