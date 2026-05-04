---
version: alpha
name: Todoist
description: This design system presents a clean, business-casual aesthetic, grounded in warm off-white and charcoal neutrals, punctuated by a signature vibrant red-orange. The generous use of rounded corners (15px for prominent elements, 8px for most others) softens the utilitarian feel of the task manager, while subtle, low-opacity shadows add minimal depth without visual clutter, creating an approachable, yet professional, interface.
colors:
  faded-charcoal: "#25221"
  paper-white: "#fefdfc"
  soft-gray: "#d7d6d4"
  light-peach: "#fff6f0"
  subtle-ash: "#6f6c69"
  true-black: "#000000"
  dusty-sage: "#94928f"
  action-red: "#e34432"
  link-orange: "#cf3520"
  accent-blue: "#0f66ae"
  teal-accent: "#497d7"
  success-green: "#4c7a45"
  badge-green: "#446c3d"
  light-green-tint: "#f0f6df"
spacing:
  cardRadius: 10px
  buttonRadius: 15px
  elementGap: 4px
  sectionGap: 64px
components:
  primary-cta-button-group:
    role: 
  announcement-banner:
    role: 
  testimonial-cards:
    role: 
  primary-action-button:
    role: Main call to action
  text-only-button:
    role: Secondary action in nav/toolbar
  subtle-action-button:
    role: Tertiary actions, filters, or less critical interactions
  hero-pill-button:
    role: Prominent, often decorative buttons in hero sections
  feature-card:
    role: Information display, grouping related content
  success-badge:
    role: Status indicators or small informational tags
  form-input-field:
    role: User data entry
---

## Overview

**North Star:** Warm, minimal productivity suite. Like a neatly organized desk bathed in natural light.

This design system presents a clean, business-casual aesthetic, grounded in warm off-white and charcoal neutrals, punctuated by a signature vibrant red-orange. The generous use of rounded corners (15px for prominent elements, 8px for most others) softens the utilitarian feel of the task manager, while subtle, low-opacity shadows add minimal depth without visual clutter, creating an approachable, yet professional, interface.

### Do's

- Use Action Red (#e34432) exclusively for primary calls-to-action and active states to maintain visual prominence.
- Apply 15px border-radius to prominent interactive elements like buttons and large images for a soft, friendly aesthetic.
- Utilize Graphik for all main headings and titles, ensuring distinct letter spacing: -0.0100em at 55px, -0.0050em at 44px, and normal at smaller sizes.
- Maintain a clear hierarchy using Paper White (#fefdfc) for backgrounds and Faded Charcoal (#25221e) for primary text and elements.
- Employ the subtle shadow rgba(37, 34, 30, 0.04) 0px 1px 0px 0px for all cards to provide slight elevation without heavy visual weight.
- Ensure generous padding on interactive elements, like 12px vertical and 16px horizontal for primary buttons, to create comfortable touch targets.

### Don'ts

- Do not use true black (#000000) for body text; instead, use Faded Charcoal (#25221e) or Subtle Ash (#6f6c69) for softer contrast.
- Avoid using multiple chromatic colors in close proximity; the palette should remain largely neutral with controlled accents.
- Do not use sharp corners; the minimum border-radius for UI elements should be 6px (for badges), with 8px and 15px being more common.
- Refrain from using heavy or multiple shadows; subtle single-layer shadows are the standard for elevation.
- Do not introduce new decorative fonts beyond Caecilia unless specifically approved; maintain the Graphik and Inter pairing.
- Avoid making inline links blend with body text; always use Link Orange (#cf3520) or Accent Blue (#0f66ae) for clear distinction.

### Layout

The page primarily uses a max-width contained layout, with content centered. The hero section often features a prominent headline and text on the left, paired with a device mockup on the right. Below the hero, the content typically alternates between text-left/image-right and text-right/image-left sections, providing an engaging rhythm. Sections are clearly delineated by consistent vertical spacing (sectionGap) and sometimes subtly different background colors (like Light Peach for the footer). There are clear examples of multi-column layouts, particularly for feature grids or testimonials (3-column layout implied by testimonial spacing). The navigation is a sticky top bar with a mix of text links and a prominent 'Start for free' button.

### Imagery

The visual language focuses on clean product screenshots of the Todoist app, often embedded within device mockups (like phones or laptops). These are typically contained within a design, not full-bleed, and often have generous rounded corners (15px). Photography is absent. Illustrations are minimal, sometimes involving abstract, squiggly lines or simple star shapes (#fff6f0 for fills) used decoratively in backgrounds, providing a touch of playfulness without being distracting. Icons are primarily line-based or solid, rendered in Faded Charcoal or True Black, often accompanying text to explain features. The overall density suggests a balance between UI elements and supportive, explanatory visuals.
