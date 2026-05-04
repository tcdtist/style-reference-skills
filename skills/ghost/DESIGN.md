---
version: alpha
name: Ghost
description: This design system grounds a clean, light interface with judicious dark elements, creating a sense of professional authority. A stark contrast between near-black text and a bright white background establishes immediate readability, while subtle, desaturated grays provide tiered information. The vivid lime green is reserved for primary calls to action, standing out against the neutral palette like a beacon. The interplay of sharp, functional typography with soft, rounded elements, especially in buttons, creates a balanced, approachable feel without sacrificing precision.
colors:
  white-canvas: "#ffffff"
  midnight-ink: "#000000"
  carbon-black: "#15171a"
  slate-blue: "#94a3b8"
  graphite: "#334155"
  ash-gray: "#e5e7eb"
  light-steel: "#cbd5e1"
  dark-steel: "#112220"
  ghost-gray: "#0f172a"
  ghost-border: "#1f2937"
  vivid-lime: "#d1ff19"
  muted-lime: "#bef264"
  forest-green: "#1a2e05"
  sky-blue: "#1bb6eb"
  neon-pink: "#f8b1e2"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.48px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.9
  display-xl:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.9
spacing:
  cardRadius: 8px
  buttonRadius: 24px
  elementGap: 16px
  sectionGap: 64px
components:
  informational-badge-hero-cta:
    role: 
  dashboard-stat-block:
    role: 
  revenue-stat-banner:
    role: 
  primary-call-to-action-button:
    role: Main interactive element
  secondary-outline-button:
    role: Subtle interactive element
  solid-dark-button:
    role: Tertiary action, often within dark contexts
  sky-blue-pill-button:
    role: Prominent secondary action for specific features
  informational-badge:
    role: Contextual labels or status indicators
  feature-card:
    role: Content container for features or services
  navigation-link:
    role: Primary site navigation
  dashboard-ui-panel:
    role: Embedded complex interface element
---

## Overview

**North Star:** Crisp Blueprint on White Canvas. Black text etched onto a pristine white background, punctuated by a vibrant lime green flourish.

This design system grounds a clean, light interface with judicious dark elements, creating a sense of professional authority. A stark contrast between near-black text and a bright white background establishes immediate readability, while subtle, desaturated grays provide tiered information. The vivid lime green is reserved for primary calls to action, standing out against the neutral palette like a beacon. The interplay of sharp, functional typography with soft, rounded elements, especially in buttons, creates a balanced, approachable feel without sacrificing precision.

### Do's

- Use Midnight Ink (#000000) for all primary body and headline text on White Canvas (#ffffff) backgrounds to ensure maximum contrast (21.0:1 AAA).
- Apply Vivid Lime (#d1ff19) exclusively for primary calls-to-action and key indicators, reserving its high visual impact.
- Maintain the 24px border-radius for all primary buttons and significant interactive elements for a consistent soft-edged aesthetic.
- Utilize InterDisplay for headlines at sizes 36px and above, with letter-spacing adjusted between -0.025em and normal for optimal legibility.
- Ensure a minimum vertical spacing of 24px between content blocks and 16px for element gaps to maintain a comfortable density.
- Employ the rgba(0, 0, 0, 0.1) 0px 0px 1px 0px, rgba(0, 0, 0, 0.03) 0px 2px 6px 0px shadow for interactive cards and buttons to provide subtle depth.

### Don'ts

- Do not use highly saturated colors for large areas or non-interactive elements; colors beyond the defined brand/accent palette will appear off-brand.
- Avoid deviating from the defined InterVariable and InterDisplay font families; no other fonts should be introduced.
- Refrain from using shadows or borders that are more pronounced than those defined (e.g., rgba(0, 0, 0, 0.25) 0px 25px 50px -12px is reserved for highly elevated, transient elements like modals or dropdowns).
- Do not mix border-radius values indiscriminately; stick to 24px for buttons, 8px for cards, and 9999px for pill-shaped elements.
- Do not use generic gray values; always refer to the specific neutral palette (Slate Blue, Graphite, Ash Gray, Light Steel, Dark Steel, Ghost Gray) to maintain subtle chromatic tint and consistency.
- Do not use a line height greater than 1.5 for any text block, as this design favors a compact, focused presentation.

### Layout

The site uses a max-width contained layout, typically centered around 1200px. The hero section is a full-width presentation with a prominent, large headline in Midnight Ink against a White Canvas background, flanked by a smaller, informational badge. Directly below the hero is a large, dark-themed screenshot of the product's dashboard UI, contrasting sharply with the light page background, effectively showcasing the product. Subsequent sections follow a clean, structured pattern, alternating between full-width content blocks and more contained sections, often using a single-column stack for text information, creating a clear and focused content flow. The navigation is a fixed top bar with simple text links and a distinct 'Get Started' button.

### Imagery

The visual language focuses on clear product demonstration, particularly through embedded UI screenshots. There are no lifestyle photos; instead, the site uses tight, contained screenshots of its own interface (like the dashboard) to directly showcase functionality. These are presented with sharp, unmasked edges. Additionally, there are branded icons from popular integrations, rendered as contained white squares with rounded corners, providing a sense of seamless connectivity. Imagery is functional and explanatory rather than decorative, occupying significant visual space to underscore product capability, but always within a structured layout.
