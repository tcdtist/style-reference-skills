---
version: alpha
name: Eco
description: Eco presents a refined, almost architectural aesthetic that blends high-tech precision with a subtle, underlying warmth. The visual impression is one of confident authority, conveyed through a largely achromatic palette punctuated by a single, vibrant gradient. Large, impactful typography with precise letter-spacing anchors sections, while soft, rounded elements provide a counterpoint to the generally sharp interface, creating a balanced and approachable digital experience for complex financial technology.
colors:
  white-smoke: "#ffffff"
  off-white-mist: "#efefef"
  midnight-ink: "#0f111a"
  dark-charcoal: "#000000"
  near-black: "#141414"
  light-steel: "#aeaeae"
  graphite-grey: "#2a2a2a"
  mid-grey: "#222222"
  pale-ash: "#a0a0a0"
  skybound-gradient: "#1c53bd"
  cloud-grey: "#a6b8d1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
    letterSpacing: -0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.5
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.95
    letterSpacing: -0.04px
spacing:
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 48px
components:
  cta-button-group:
    role: 
  feature-stat-block:
    role: 
  feature-cards-row:
    role: 
  primary-filled-button:
    role: Main call to action for interactive steps.
  secondary-filled-button:
    role: Alternative call to action, less prominent than primary.
  text-link-button:
    role: Minimalistic interactive elements, inline with text.
  input-field:
    role: Data entry fields across the application.
  navigation-link:
    role: Primary navigation items in headers and footers.
  hero-headline:
    role: Largest, most prominent text on key landing sections.
  subheadline-body-intro:
    role: Supportive text for headlines or section introductions.
---

## Overview

**North Star:** Architectural tech blueprint. Polished surfaces and precise typography overlay an expansive, slightly muted cityscape.

Eco presents a refined, almost architectural aesthetic that blends high-tech precision with a subtle, underlying warmth. The visual impression is one of confident authority, conveyed through a largely achromatic palette punctuated by a single, vibrant gradient. Large, impactful typography with precise letter-spacing anchors sections, while soft, rounded elements provide a counterpoint to the generally sharp interface, creating a balanced and approachable digital experience for complex financial technology.

### Do's

- Do use `Roobert` with `96px` size and `-0.0400em` letter spacing for hero headlines to maintain visual impact and precision.
- Do apply `8px` border-radius uniformly to all interactive elements like buttons and input fields.
- Do leverage the `Skybound Gradient` (`linear-gradient(90deg, rgb(28, 83, 189) 71%, rgb(83, 173, 254))`) only for key calls-to-action or distinct visual indicators.
- Do use `48px` as the standard `sectionGap` to ensure consistent vertical rhythm between major content blocks.
- Do prioritize `Midnight Ink (#0f111a)` for text on light backgrounds and `White Smoke (#ffffff)` for text on dark backgrounds for accessibility and brand consistency.
- Do use `Fragmentmono` for all technical code-like text or data displays, ensuring it is `14px` with a `1.00` line-height.
- Do align major content centrally within `pageMaxWidth` when an explicit max-width is later established, or maintain a full-bleed layout as seen in initial hero sections.

### Don'ts

- Don't use `Skybound Gradient` merely for decorative purposes; reserve it for functional or brand-critical highlights.
- Don't introduce additional border-radius values beyond `8px`, `12px`, and `128px` to preserve the established shape vocabulary.
- Don't deviate from the specified tight letter-spacing for `Interdisplay` and `Roobert` at larger sizes; it is a signature trait.
- Don't use highly saturated colors for backgrounds or large areas; maintain the largely achromatic base palette.
- Don't apply `box-shadow` for elevation on cards or containers; the system relies on background color shifts for depth.
- Don't use `Off-White Mist (#efefef)` for primary text, as it's intended for secondary backgrounds and subtle lifts, not high-contrast text.
- Don't introduce new font families; the current selection (Interdisplay, Roobert, Inter, Fragmentmono, Aeonik Mono) is curated for purpose.

### Layout

The site employs a mixed layout model, featuring full-bleed sections that transition into contained content sections. The hero section is a full-viewport, dark-themed area with a centered headline over a muted cityscape background, establishing a grand and serious tone. Following sections alternate between light and dark backgrounds, creating a clear visual rhythm. Content within these sections tends to be centrally aligned or uses a simple two-column arrangement, often text-left/image-right or vice-versa, for clear informational flow. Vertical spacing between sections is generous and consistent, using a `48px` `sectionGap`. Card grids, when present, likely feature `0px` padding, emphasizing their content directly. The navigation is a fixed top bar on light backgrounds, becoming active/visible on scroll but initially transparent against the dark hero, suggesting a subtle, less intrusive hierarchy.

### Imagery

The visual language for imagery is characterized by large, full-bleed photography, predominantly cityscapes and architectural scenes that serve as atmospheric backdrops rather than explicit content. Treatment involves a muted, often cool-toned filter applied to photographs, creating a mood that is serious and expansive. Images are typically contained full-bleed within sections, without rounded corners or masks, allowing them to fill the visible space. In other instances, there are abstract, subtle graphics or gradients used decoratively, providing visual interest without distracting from textual content. Product screenshots or specific UI elements are integrated cleanly within sections, usually with a dark, muted background, emphasizing the digital interface itself without much surrounding decoration. Icons are generally small, monochrome, and functional, adhering to an outlined style for subtle interaction hints. The overall density of imagery is balanced; it supports the text and theme but doesn't overwhelm the information.
