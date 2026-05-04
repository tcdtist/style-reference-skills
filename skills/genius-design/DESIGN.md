---
version: alpha
name: genius.design
description: This design system presents a balanced aesthetic, contrasting a deeply saturated, cool background with crisp, achromatic elements. A subtle gradient on the main page background creates depth and shifts from a light, airy teal to a profound navy, grounding the content. Interactive elements and badges introduce small, vibrant accents that pop against the otherwise business-like palette, suggesting a service that is both reliable and user-friendly. The overall impression is one of trustworthiness and clarity.
colors:
  deep-ocean: "#01122c"
  sea-mist: "#d8efef"
  domain-verified-teal: "#a6fff8"
  premium-violet: "#d3c1f7"
  link-teal: "#00a4a6"
  onyx: "#111111"
  true-black: "#000000"
  white-smoke: "#ffffff"
  slate-border: "#e4e9ec"
  ash-grey: "#444444"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.57
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.38
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.88
spacing:
  cardRadius: 20.8px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 30px
components:
  verification-card:
    role: 
  feature-icon-blocks:
    role: 
  badge-collection:
    role: 
  primary-action-button:
    role: Call to action
  secondary-outline-button:
    role: Secondary action
  text-link-button:
    role: Navigation, minor action
  verification-card:
    role: Information display with action
  premium-badge:
    role: Feature indicator
  verified-badge:
    role: Status indicator
  info-card-icon-block:
    role: Feature explanation
---

## Overview

**North Star:** Shifting Ocean depths

This design system presents a balanced aesthetic, contrasting a deeply saturated, cool background with crisp, achromatic elements. A subtle gradient on the main page background creates depth and shifts from a light, airy teal to a profound navy, grounding the content. Interactive elements and badges introduce small, vibrant accents that pop against the otherwise business-like palette, suggesting a service that is both reliable and user-friendly. The overall impression is one of trustworthiness and clarity.

### Do's

- Prioritize Onyx (#111111) for all main text and elements on light backgrounds for optimal contrast against White Smoke (#ffffff) or Sea Mist (#d8efef).
- Use Sea Mist (#d8efef) as a default background for secondary sections to create a gentle contrast with the brand's primary Deep Ocean (#01122c) background.
- Apply 20.8px border-radius to card-like containers, and 6px border-radius specifically for buttons, and 4px for badges.
- Employ the `gdsherpa` typeface for all text elements. Leverage its diverse weight range (400-850) to establish clear hierarchy.
- Maintain a clear visual hierarchy by utilizing Deep Ocean (#01122c) for prominent hero backgrounds and contrasting it with lighter text like White Smoke for readability.
- Use Link Teal (#00a4a6) exclusively for interactive text links and phone numbers to clearly differentiate them from static content.

### Don'ts

- Do not introduce new primary background colors; stick to the brand's gradient, Deep Ocean (#01122c), and Sea Mist (#d8efef).
- Avoid using highly saturated colors for large text blocks; reserve them for accents like badges or interactive links.
- Do not deviate from the established border-radius values (20.8px for cards, 6px for buttons, 4px for badges) to maintain visual consistency.
- Refrain from using `gdsherpa` in weights outside of the specified range (400-850) for any content.
- Do not use White Smoke (#ffffff) text on Sea Mist (#d8efef) backgrounds, as the contrast will be insufficient.
- Do not use Link Teal (#00a4a6) for non-interactive text; its purpose is to guide user interaction.

### Layout

The page exhibits a mixed-layout model, featuring a full-width header with a dominant dark background, transitioning into a lighter content band. The hero section is characterized by a central, prominent headline paired with a floating card component for key actions. Subsequent sections arrange content in a clear, column-based structure, where feature descriptions are accompanied by subtle icons. Overall, the layout is clean and content-focused, utilizing ample white space for breathability. Page content seems constrained by an implicit max-width, while the background elements extend full-bleed.

### Imagery

The site uses a combination of line-art icons and the brand logo. Icons are monochromatic, primarily black (#000000), offering clear semantic meaning without visual clutter. They are typically contained within the light sections and serve an explanatory role for features. There is a notable absence of photography or complex illustrations, emphasizing a direct, UI-focused presentation.
