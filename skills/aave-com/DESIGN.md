---
version: alpha
name: aave.com
description: Aave employs a pragmatic, enterprise-grade aesthetic, balancing clear data presentation with subtle branding. The system uses a predominantly dark theme for content sections, contrasting with an initial bright hero. Typography is compact and precise, favoring confident, small text groups. Surfaces are flat or softly rounded, with elevation sparingly used to draw attention, and a singular luminous violet provides an interactive accent against the deep neutrals.
colors:
  white-canvas: "#ffffff"
  ink-black: "#221d1d"
  pewter: "#636161"
  misty-gray: "#8f8e8e"
  obsidian: "#0f0f10"
  light-alabaster: "#f6f7f4"
  slate-dust: "#858387"
  cosmic-violet: "#998eff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.06px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.36
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.9
    letterSpacing: -3.6px
spacing:
  cardRadius: 24px
  buttonRadius: 20px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-call-to-action-button:
    role: Filled button indicating primary interaction.
  ghost-button-dark:
    role: Lightweight, secondary action on dark backgrounds.
  ghost-button-light:
    role: Lightweight, secondary action on light backgrounds.
  navigation-link-button:
    role: Header navigation items that act as buttons.
  card-white-canvas-background:
    role: Content container for features or data on white backgrounds.
  card-light-alabaster-background:
    role: Content container for features or data on light alabaster backgrounds.
  card-slate-dust-background:
    role: Content container for features or data on dark section backgrounds.
  input-field:
    role: User input text field.
---

## Overview

**North Star:** Deep Slate Precision

Aave employs a pragmatic, enterprise-grade aesthetic, balancing clear data presentation with subtle branding. The system uses a predominantly dark theme for content sections, contrasting with an initial bright hero. Typography is compact and precise, favoring confident, small text groups. Surfaces are flat or softly rounded, with elevation sparingly used to draw attention, and a singular luminous violet provides an interactive accent against the deep neutrals.

### Do's

- Use Aave Repro with negative letter spacing for larger headings (e.g., -0.0500em at 72px) to maintain a condensed, authoritative presence.
- Apply Cosmic Violet (#998eff) exclusively for primary calls to action, active states, and brand-critical highlights; avoid using it decoratively.
- Maintain a clear visual hierarchy by limiting card shadows to navigation elements only, favoring flat or subtle background color shifts for content grouping.
- Implement the 1584px 'pill' radius for primary buttons to create a softer, more inviting interactive target.
- Use Light Alabaster (#f6f7f4) or Slate Dust (#858387) for card backgrounds to generate depth without relying on shadows.
- Ensure all interactive elements have a focus state derived from Cosmic Violet or a subtle glow from the token --focus.
- Utilize the asymmetric 20px 6px 6px 20px border-radius for input fields to create a distinct, modern form element.

### Don'ts

- Do not introduce additional saturated colors; Cosmic Violet (#998eff) is the sole accent color for branding.
- Avoid using drop shadows on cards or regular content blocks; rely on background color changes for surface differentiation.
- Do not deviate from the specified negative letter-spacing values for display and heading typography; it's critical to the brand's compact style.
- Do not use generic border radii; adhere to the specific values like 20px for buttons and 24px for cards.
- Do not use default browser link styles; all links should adopt the body text color with subtle hover states, or be explicitly styled as buttons.
- Do not introduce heavy iconography or overly decorative illustrations; align with the UI-focused, almost monochrome visual language.
- Avoid large hero imagery; product screens and minimal visuals paired with bold typography define the hero aesthetic.

### Layout

The page alternates between full-bleed and max-width contained sections. The initial hero pattern features a light background with a centered headline and buttons, overlaid on top of a product mockup cascade (mobile phones). Subsequent sections shift to a dark background, using a max-width centered container. Content arrangement often utilizes a centered stack for titles and calls to action, followed by multi-column grids (e.g., 3-column cards for features) within the contained sections. Vertical rhythm is consistent with large section gaps of approximately 48px, creating clear divisions. The navigation is a sticky top bar with global links and a prominent 'Use Aave' button.

### Imagery

This system primarily uses product-focused imagery, showcasing mobile app screens and sophisticated UI elements. Photography is absent, replaced by stylized product mockups (e.g., iPhones displaying the Aave app) that serve as content showcases. Icons are minimal, outlined, and monochromatic, used functionally rather than decoratively, maintaining a high density of information over large visual elements. Graphics are abstract and geometric, often subtle background elements, like the gradient in the hero section, to provide atmosphere. The overall density is high, with imagery embedded within textual descriptions to explain product features.
