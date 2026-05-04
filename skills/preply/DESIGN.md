---
version: alpha
name: Preply
description: This system feels like a vibrant, welcoming learning space, merging playful energy with professional clarity. The dominant 'Tutor Pink' background of the hero immediately signals a dynamic, approachable brand. Typography uses a distinctive contrast: the custom 'Platform' font for headlines with tight letter spacing creates punchy, impactful statements, while 'Figtree' provides warm, readable body copy. Subtle 4px and 8px radii are used sparingly on functional elements, maintaining a crisp aesthetic.
colors:
  blackboard-ink: "#121117"
  paper-white: "#ffffff"
  pale-canvas: "#f4f4f8"
  outline-gray: "#dcdce5"
  graphite: "#4d4c5c"
  tutor-pink: "#ff7aac"
  progress-teal: "#3ddabe"
  highlight-yellow: "#ffdf3d"
  action-blue: "#2885fd"
  light-blue: "#99c5ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: 0.144px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.08
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.06
    letterSpacing: 0px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: 0px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -0.48px
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  sectionGap: 48px
components:
  stats-bar:
    role: 
  language-tutor-card-grid:
    role: 
  announcement-banner-cta-button:
    role: 
  primary-cta-button:
    role: Primary Call to Action
  ghost-button:
    role: Secondary Action
  rounded-ghost-button:
    role: Tertiary or Filter Action
  text-link-button:
    role: Inline Action
  basic-card:
    role: Content Grouping
  language-selector-item:
    role: Filter Item
  footer-link-block:
    role: Informational Grouping
---

## Overview

**North Star:** Vibrant Tutorial Pop: a playful pink canvas with bold, inviting type.

This system feels like a vibrant, welcoming learning space, merging playful energy with professional clarity. The dominant 'Tutor Pink' background of the hero immediately signals a dynamic, approachable brand. Typography uses a distinctive contrast: the custom 'Platform' font for headlines with tight letter spacing creates punchy, impactful statements, while 'Figtree' provides warm, readable body copy. Subtle 4px and 8px radii are used sparingly on functional elements, maintaining a crisp aesthetic.

### Do's

- Use 'Tutor Pink' (#ff7aac) exclusively for hero backgrounds or significant brand statements.
- Apply 'Platform' font for all headings, using weights 600 or 700 with letter-spacing adjusted per size for visual impact.
- Maintain 'Figtree' font for all body text, links, and functional labels, typically at 400 weight for readability.
- Utilize 'Blackboard Ink' (#121117) for primary text and main navigation elements, ensuring strong contrast.
- Ensure interactive components like buttons and cards consistently use 4px or 8px border-radii for subtle softening.
- Use `padding: 0px 24px` for primary call-to-action buttons for consistent horizontal spacing.
- Employ 'Outline Gray' (#dcdce5) for subtle borders on interactive elements to provide definition without harshness.

### Don'ts

- Avoid using shadows on cards; the design relies on background color shifts and borders for separation.
- Do not deviate from the core color palette. Introducing new chromatic colors will dilute the brand identity.
- Do not use generic system fonts; 'Platform' and 'Figtree' are critical to the typographic brand.
- Avoid excessive rounding; limit border-radius to 4px or 8px on specific interactive elements, not general containers.
- Do not use letter-spacing on 'Figtree' body text that deviates from its inherent values, as this compromises legibility.
- Do not use `padding: 0px` for buttons, unless it is a pure text link button with no background.

### Layout

The page primarily uses a max-width contained layout, typically with content centered within the browser. The hero section is a full-bleed block of 'Tutor Pink' with a large, left-aligned headline and a right-aligned lifestyle image. Content sections below often feature a clean, single-column stack, sometimes alternating with multi-column card grids for features or categories. There's a consistent vertical spacing model. The navigation is a sticky top bar, providing context and quick access, while the footer is dense, dark, and multi-column, providing comprehensive links.

### Imagery

The site uses a mix of lifestyle photography and playful, custom illustrations. Photography is generally bright and candid, depicting authentic interactions between tutors and learners. Illustrations, like the 'Progress Takes Two' graphic, are often brand-colored, featuring chunky, bold shapes with clear outlines and a slight 3D pop, conveying energy and approachability. Icons are line-based (outline style) and mono-color (often 'Graphite' #4d4c5c or 'Blackboard Ink' #121117), serving an explanatory and navigational role. The overall density is balanced, with imagery used strategically in hero sections and feature explanations without overwhelming content.
