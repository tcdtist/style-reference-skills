---
version: alpha
name: boords.com
description: Boords presents a light and airy design that feels like an organized workshop, balancing clear information with subtle visual cues. The primary canvas of crisp Alabaster (#fafaf5) is contrasted by accents of playful Butterscotch (#e8aa42) and rich Charcoal (#121212) that anchor calls to action and create visual hierarchy. The consistent use of a custom "Matter" typeface provides a modern yet approachable voice, while distinct border radii like the 9999px pill shape for buttons introduce softness into an otherwise structured layout.
colors:
  carbon: "#000000"
  charcoal: "#121212"
  alabaster: "#fafaf5"
  white: "#ffffff"
  parchment: "#e9e9e7"
  slate: "#4d4d4d"
  ash: "#cecdca"
  dusk-grey: "#7d7d7d"
  faded-stone: "#898989"
  peach: "#eb6c00"
  butterscotch: "#e8aa42"
  honey-bronze: "#b77a10"
  sky-mist: "#daeef8"
  deep-ocean: "#214c70"
  burnished-bronze-gradient: "#453d37"
  warm-umber-gradient: "#2d2824"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.25px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.7
    letterSpacing: 0.35px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.25
    letterSpacing: 0.475px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.1
    letterSpacing: 1.5px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 24px
components:
  cta-button-group:
    role: 
  testimonial-cards:
    role: 
  api-webhooks-dark-feature-cards:
    role: 
  primary-navigation-link:
    role: Clickable text in the main navigation.
  ghost-outline-button:
    role: Secondary action button, often grouped with a primary button.
  pill-outline-button-accent:
    role: Primary call to action or crucial secondary action.
  filled-button-charcoal:
    role: Prominent, high-contrast action button for critical paths.
  plain-text-button:
    role: Minimal interactive element, typically used for 'Log in' or simple navigation.
  feedback-card-white:
    role: Container for user comments or interactive content within a larger context.
  information-card-alabaster:
    role: General content display for lists or categorised information.
  transparent-card:
    role: Visual grouping of elements without a distinct background, typically for lists or grids.
  dark-themed-section-card-api-webhooks:
    role: Container for content within dark, gradient-infused sections.
---

## Overview

**North Star:** organized workshop on creamy paper

Boords presents a light and airy design that feels like an organized workshop, balancing clear information with subtle visual cues. The primary canvas of crisp Alabaster (#fafaf5) is contrasted by accents of playful Butterscotch (#e8aa42) and rich Charcoal (#121212) that anchor calls to action and create visual hierarchy. The consistent use of a custom "Matter" typeface provides a modern yet approachable voice, while distinct border radii like the 9999px pill shape for buttons introduce softness into an otherwise structured layout.

### Do's

- Use Alabaster (#fafaf5) for primary page backgrounds, creating a creamy white canvas.
- Apply Charcoal (#121212) for all main headings and prominent text to establish clear hierarchy.
- Accent interactive button borders and key links with Butterscotch (#e8aa42) to draw attention.
- Form pill-shaped buttons with a 9999px border radius for all primary calls to action.
- Utilize the `Matter` typeface with appropriate weights for all textual content, reserving `ui-monospace` for code displays only.
- Maintain a compact element spacing of 8px (elementGap) for items within components, like icons and text.
- Employ the Burnished Bronze Gradient for distinct dark sections to build contrast and visual interest.

### Don'ts

- Avoid using raw black (#000000) for general body text; reserve it for structural borders or very high contrast needs.
- Do not introduce new primary action colors; Butterscotch (#e8aa42) outlines or Charcoal (#121212) fills are the established interactives.
- Refrain from adding arbitrary shadows; only use the specified light rgba(108, 188, 244, 0.5) 0px 0px 0px 1px for cards and the soft rgba(255, 255, 255, 0.03) 0px 0px 24px 0px for floating elements.
- Do not vary header or body font families outside of Matter and ui-monospace to maintain typographic consistency.
- Avoid deviating from the established border radii; adhere to 6px for general elements, 9999px for pills, and 12px for cards.
- Do not use gradients for backgrounds outside of the predefined Burnished Bronze and Warm Umber gradients.
- Introduce new chromatic colors; stick to the current palette to avoid visual noise and ensure brand recognition.

### Layout

The page uses a maxWidth-contained layout for most content sections, centered on the screen. The hero section often breaks this, featuring a full-width background supporting a centered headline. Sections alternate between a creamy Alabaster (#fafaf5) background and darker gradient-filled bands, creating a rhythmic vertical flow. Content within sections is often arranged in symmetrical two or three-column grids for feature displays and text+image pairings, interspersed with full-width text blocks. The overall density is compact yet clear, with an 8px elementGap ensuring items are close but distinguishable. Navigation is a sticky top bar with branding, links, and primary actions.

### Imagery

The visual language relies heavily on clean product screenshots and finely-drawn, monochrome line illustrations with a hand-sketched feel. Product shots are typically contained within cards, showcasing the UI directly without heavy styling or context. Illustrations serve a decorative and explanatory role, often organic in their forms, contrasting with the structured UI. Icons are outlined, monochromatic, and appear with consistent stroke weights. Imagery is present but serves to support text content rather than dominate it, maintaining a text-dominant, information-rich layout.
