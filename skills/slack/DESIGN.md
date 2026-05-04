---
version: alpha
name: Slack
description: The Slack design system evokes a sense of vibrant, collaborative professionalism, grounded in a playful yet authoritative use of color. Deep purples and a vivid blue serve as primary brand identifiers, balanced against a clean, near-white canvas. Subtle gradients and distinct radial color washes provide depth and visual interest without overwhelming the functional UI, while custom typography maintains a unique, approachable voice.
colors:
  canvas-ice: "#fefbff"
  surface-frost: "#ffffff"
  whisper-cloud: "#f9f0ff"
  active-lavender: "#f2defe"
  charcoal-black: "#000000"
  carbon-gray: "#1d1c1d"
  pewter: "#696969"
  cement-gray: "#757575"
  slate-border: "#edeaed"
  medium-gray: "#808080"
  icon-gray: "#5e5d60"
  dark-plum: "#481a54"
  purple-heart: "#611f69"
  dark-violet: "#730394"
  deep-aubergine: "#3d0157"
  grape-jelly: "#2e0039"
  electric-blue: "#1264a3"
  orchid-glow: "#d17dfe"
  vivid-amethyst: "#9602c7"
  pale-orchid: "#eac8fe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0.057px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
    letterSpacing: 0.013px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
    letterSpacing: 0.007px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.002px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.08
    letterSpacing: -0.001px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.12
    letterSpacing: -0.004px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1
    letterSpacing: -0.008px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.97
    letterSpacing: -0.012px
spacing:
  cardRadius: 16px
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 98px
components:
  cta-button-group:
    role: 
  ai-features-tab-selector:
    role: 
  pill-tab-navigation-selector:
    role: 
  primary-filled-button:
    role: Call to action
  ghost-button:
    role: Secondary action
  navigation-link:
    role: Navigation, in-text link
  text-only-button:
    role: Utility action
  content-card:
    role: Information display
  hero-section-gradient-background:
    role: Thematic background
  trusted-by-logo-grid:
    role: Social proof
  annoucement-banner:
    role: Global alert
  tab-navigation-item:
    role: Content filtering
---

## Overview

**North Star:** Vibrant digital workbench.

The Slack design system evokes a sense of vibrant, collaborative professionalism, grounded in a playful yet authoritative use of color. Deep purples and a vivid blue serve as primary brand identifiers, balanced against a clean, near-white canvas. Subtle gradients and distinct radial color washes provide depth and visual interest without overwhelming the functional UI, while custom typography maintains a unique, approachable voice.

### Do's

- Prioritize Salesforce-Avant-Garde for all headings and large display text to maintain brand voice.
- Use Purple Heart (#611f69) for primary call-to-action buttons, ensuring a visible contrast against white or near-white backgrounds.
- Apply a 4px `border-radius` to all functional buttons and input fields for a consistent interactive element shape.
- Use Charcoal Black (#000000) for primary body text and headings on light backgrounds to ensure AAA contrast.
- Utilize Electric Blue (#1264a3) exclusively for interactive links and secondary accents, reserving it for clear action points.
- Maintain a comfortable `elementGap` of 16px for spacing between most UI elements, and `cardPadding` of 16px for internal card content.
- Implement the Magic Dust Gradient (linear-gradient(104deg, rgb(0, 0, 0) 9.56%, rgb(186, 1, 255) 102.66%)) sparingly, typically for hero sections or significant brand statements.

### Don'ts

- Do not use generic system fonts; always map to Salesforce-Sans or Salesforce-Avant-Garde with appropriate substitutes.
- Avoid using multiple shades of purple for primary actions; stick to Purple Heart (#611f69) for consistency.
- Do not introduce sharp corners; maintain 4px or 16px `border-radius` based on component type, or 90px for pill shapes.
- Refrain from using Electric Blue (#1264a3) for large blocks of text; it is an accent and link color, not a primary text color.
- Do not neglect the subtle radial gradients in hero backgrounds; they contribute significantly to the playful brand feel.
- Avoid arbitrary elevation shadows; use the defined `rgba(0, 0, 0, 0.1) 0px 0px 32px 0px` for elevated elements.

### Layout

The page primarily uses a max-width contained layout, though specific hero sections and decorative gradients (like the radial washes) span full viewport width. The hero section often features a centered headline over a dark, gradient background. Subsequent content sections typically alternate between clean white and light off-white bands, creating a visible rhythm. Content is arranged in alternating text-left/image-right or text-right/image-left patterns, or organized into multi-column card grids for features. Vertical spacing between sections is generous and consistent. The top navigation bar is sticky and features a fixed width, centered content, with a clear brand logo on the left and primary actions (sign-in, get started) on the right.

### Imagery

Imagery on Slack's site predominantly features product screenshots and abstract graphic elements. Product screenshots are typically contained within device mocks or UI frames, often showcasing the Slack interface with examples of AI integration. Abstract graphics include geometric shapes, sparkling effects, and subtle background gradients like the radial washes, used decoratively to add dynamism and a playful vibe. Icons are outlined, simple, and mono-color, often using the brand's purple or accent blue. Photography is minimal, appearing mostly for social proof with small headshots. The imagery serves primarily to illustrate product functionality and create an aspirational, slightly whimsical brand atmosphere, rather than purely decorative content.
