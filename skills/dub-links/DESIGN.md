---
version: alpha
name: Dub Links
description: Dub presents a precise, pragmatic aesthetic, reminiscent of a clean workbench for digital tools. Its foundation is a crisp, highly functional gray scale complemented by a single energetic orange accent, creating focused visual hierarchy without unnecessary embellishment. Subtle shadow work and soft border radii on interactive elements provide a contemporary feel while maintaining directness, avoiding distraction for the product-focused user.
colors:
  ghost-white: "#ffffff"
  ash-gray: "#fcfcfc"
  cloud-gray: "#e5e5e5"
  cool-gray: "#d4d4d4"
  steel-gray: "#a3a3a3"
  jet-black: "#171717"
  ink-black: "#0a0a0a"
  ember-glow: "#f97316"
  sky-blue: "#3b82f6"
  forest-green: "#16a34a"
  warning-red: "#d32f2f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 64px
components:
  link-shortener-input-group:
    role: 
  button-group-primary-secondary-ghost:
    role: 
  link-editor-form-card:
    role: 
  primary-call-to-action-button:
    role: Main interactive button
  secondary-button:
    role: Alternative action button
  icon-button:
    role: Small, icon-only button
  text-input-field:
    role: Standard editable text input
  input-with-button-group:
    role: Combined input and action button
  card-container:
    role: Information grouping container
  navigation-link:
    role: Top navigation item
  small-pill-tag:
    role: Categorization or meta-info tag
---

## Overview

**North Star:** Clean workbench, energetic highlight. The interface feels like a well-organized array of digital tools on a bright surface, with a single, clear visual thread guiding user action.

Dub presents a precise, pragmatic aesthetic, reminiscent of a clean workbench for digital tools. Its foundation is a crisp, highly functional gray scale complemented by a single energetic orange accent, creating focused visual hierarchy without unnecessary embellishment. Subtle shadow work and soft border radii on interactive elements provide a contemporary feel while maintaining directness, avoiding distraction for the product-focused user.

### Do's

- Prioritize Ember Glow (#f97316) exclusively for the primary call-to-action to maximize visual impact and guide user flow.
- Use Jet Black (#171717) for all main headlines and body text to ensure strong readability and visual authority.
- Apply 8px border radius to all buttons to provide a soft, approachable feel while maintaining structure.
- Utilize Cloud Gray (#e5e5e5) as a subtle horizontal divider between sections or within complex UI elements to maintain a clean layout without harsh lines.
- Maintain consistent internal padding of 16px for card components to create breathing room for content.
- Ensure all interactive elements, especially inputs and buttons, have a visible border in Cool Gray (#d4d4d4) or equivalent for clear affordance.
- Employ the Inter typeface at weight 400 for all body copy to maintain legibility and a professional tone.

### Don'ts

- Do not introduce additional vibrant accent colors; the Ember Glow (#f97316) is designed to be the single point of visual emphasis.
- Avoid using harsh, high-contrast borders for content containers; opt for subtle shadows or lighter gray borders like Cloud Gray (#e5e5e5).
- Do not use highly decorative fonts for body text or UI labels; stick to Inter for clarity and consistency.
- Refrain from excessive use of bold typography; reserve higher weights (600, 700) for specific emphasis on headings or key phrases.
- Do not deviate from the established spacing scale (multiples of 4px) to ensure uniform layout and rhythm.
- Avoid heavy or complex drop shadows; use the subtle rgba(0, 0, 0, 0.05) 0px 1px 2px 0px shadow for elevation.
- Do not use dark backgrounds extensively; the design relies on a light theme with ample white space.
