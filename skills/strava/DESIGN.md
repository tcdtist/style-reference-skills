---
version: alpha
name: Strava
description: This design system projects an active, performance-oriented energy with its high-contrast typography and prominent use of a single, vibrant orange. The stark black text against white or near-white backgrounds, combined with structured, rectangular forms defines its modern utility. The orange acts as a constant visual cue, highlighting interactive elements and brand presence without relying on subtle gradations or complex color palettes, focusing instead on direct and clear communication.
colors:
  midnight-ink: "#000000"
  cloudburst-gray: "#43423f"
  ash-charcoal: "#21211f"
  whisper-white: "#ffffff"
  summit-cream: "#f9f8f5"
  pebble-gray: "#e0e0de"
  strava-orange: "#fc5200"
  link-blue: "#0060d0"
  google-red: "#ea4335"
  google-green: "#34a853"
  google-blue: "#4285f4"
  google-yellow: "#fbbc05"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
spacing:
  cardRadius: 4px
  buttonRadius: 4px
components:
  sign-up-form-card:
    role: 
  button-group-showcase:
    role: 
  stat-feature-banner:
    role: 
  primary-cta-button:
    role: Main call to action
  secondary-outline-button-social:
    role: Alternative login/signup
  ghost-button-header:
    role: Navigation, secondary actions
  footer-link:
    role: Navigational links in footer
  navigation-link:
    role: Primary site navigation
  form-card:
    role: Content container for forms
---

## Overview

**North Star:** Athletic Orange Highlight

This design system projects an active, performance-oriented energy with its high-contrast typography and prominent use of a single, vibrant orange. The stark black text against white or near-white backgrounds, combined with structured, rectangular forms defines its modern utility. The orange acts as a constant visual cue, highlighting interactive elements and brand presence without relying on subtle gradations or complex color palettes, focusing instead on direct and clear communication.

### Do's

- Prioritize Strava Orange (#fc5200) for all primary calls to action and active states.
- Maintain high contrast by using Midnight Ink (#000000) or Ash Charcoal (#21211f) text on Whisper White (#ffffff) or Summit Cream (#f9f8f5) backgrounds.
- Apply a consistent 4px border-radius to all interactive elements like buttons and input fields.
- Use Boathouse (or Inter) weight 600 for all main headings (32px), ensuring clear hierarchy.
- Separate content sections with distinct background colors, such as Whisper White (#ffffff) for main content and Summit Cream (#f9f8f5) for footers.

### Don'ts

- Do not introduce new primary accent colors other than Strava Orange (#fc5200) or Link Blue (#0060d0).
- Avoid using soft, low-contrast text-on-background combinations; maintain AAA or AA contrast ratios.
- Do not deviate from the 4px border-radius on buttons and input fields to maintain visual consistency.
- Do not use generic system fonts; leverage Boathouse (or Inter) for all text elements.
- Do not use box-shadow for elevation; rely on background color changes and borders to define hierarchy and separation.

### Layout

The page uses a centered, quasi-full-bleed model, with a wide central content area that appears contained on larger screens but feels expansive. The hero section is a prominent three-column split: large, emotive photography on the left, a central, white form card for sign-up, and a product-in-context shot on the right, creating an immediate narrative. Sections are distinct blocks, with no alternating background bands visible. Content is generally stacked vertically within these blocks, or aligned within columns (e.g., footer grid). The navigation is a classic horizontal top bar, sticky (inferred), with a simple `Log In` button. The overall density is comfortable, with ample padding around elements and sections, suggesting a focus on clarity rather than information density.

### Imagery

The visual language combines aspirational, real-world photography of athletes in action with clean, functional UI elements. Photography features vibrant outdoor scenes (cyclists, runners) with a natural, un-staged feel, emphasizing movement and community. Imagery is primarily full-bleed or large background elements, without masks or heavy treatments, allowing the scenes to speak for themselves. Product screenshots are integrated to explain functionality, often with overlaid path graphics or app UI. Icons are simple, filled, and monochrome, with an apparent medium stroke weight when outlined (logo). The overall density is balanced, allowing imagery to dominate sections while text remains concise.
