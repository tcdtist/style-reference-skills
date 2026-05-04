---
version: alpha
name: Doppler
description: Doppler's visual style is a 'midnight command center' behind frosted glass, creating an atmosphere of secure, high-tech operations. Deep purples and blacks form the primary palette, suggesting seriousness and advanced technology. Vivid electric green and violet accents cut through the darkness, like indicator lights on a complex dashboard, highlighting crucial actions and information. A subtle border treatment using a near-achromatic light gray provides structure and division without breaking the dark theme, reinforcing the 'frosted glass' feel.
colors:
  midnight-ink: "#1c1624"
  deep-plum: "#2d2734"
  text-off-white: "#f1f0ec"
  ash-gray: "#d0c9c4"
  outline-pale: "#e5e7eb"
  accent-green: "#00f575"
  accent-violet: "#b997ff"
  deep-violet-gradient: "#6b13f5"
  nebula-pink-radial: "#231736"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
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
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.05
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.48px
spacing:
  cardRadius: 20px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-cta-button-group:
    role: 
  integration-feature-card:
    role: 
  announcement-banner:
    role: 
  ghost-navigation-button:
    role: Primary navigation and subtle secondary actions.
  primary-cta-button:
    role: Main calls to action.
  badge-button:
    role: Informational tags or small interactive elements, often in navigation.
  feature-card:
    role: Showcasing integration partners or key features.
---

## Overview

**North Star:** Midnight command center. Deep purples on near-black surfaces, highlighted by electric green and violet, feel like precise, secure control.

Doppler's visual style is a 'midnight command center' behind frosted glass, creating an atmosphere of secure, high-tech operations. Deep purples and blacks form the primary palette, suggesting seriousness and advanced technology. Vivid electric green and violet accents cut through the darkness, like indicator lights on a complex dashboard, highlighting crucial actions and information. A subtle border treatment using a near-achromatic light gray provides structure and division without breaking the dark theme, reinforcing the 'frosted glass' feel.

### Do's

- Use Accent Green (#00f575) exclusively for primary calls-to-action to maximize its impact.
- Apply 'Doppler Repro' font with appropriate letterSpacing from the type scale for all text elements.
- Maintain a 20px border-radius for all cards and informational badges.
- Structure UI elements with Text Off-White (#f1f0ec) on Midnight Ink (#1c1624) or Deep Plum (#2d2734) for optimal contrast in dark mode.
- Utilize Outline Pale (#e5e7eb) for subtle borders and dividers to provide structure without adding visual weight.
- Employ consistent 8px element gaps for most internal component spacing.

### Don'ts

- Do not use saturated colors other than Accent Green or Accent Violet for interactive elements or brand highlights.
- Avoid box-shadows; use background color layering (Midnight Ink, Deep Plum) and subtle borders for elevation and separation.
- Do not use highly rounded corners (e.g., 9999px) on any elements other than specific, explicit tags.
- Do not introduce additional font families; 'Doppler Repro' covers all typographic needs.
- Avoid using bright, non-text colors (like red, yellow, pure white) for large text blocks, as it undermines the dark theme's sophistication.

### Layout

The layout features a full-bleed dark background (Midnight Ink) with content sections generally confined to a centered, implicit max-width. The hero section employs a split layout: a commanding headline and descriptive text on the left, an illustrative product screenshot on the right, all on a gradient background. Subsequent sections reveal a consistent vertical rhythm of padding (64px sectionGap), alternating between text-centric blocks and grid layouts (e.g., a 4-column card grid for integrations). Content arrangement often uses a text-left, image-right or grid-based pattern. The page is information-dense yet maintains clear visual separation through consistent spacing and subtle surface variations. Navigation is a sticky top bar with ghost buttons and a prominent Accent Green CTA.

### Imagery

Imagery primarily consists of product screenshots and abstract, brand-colored graphics/illustrations. Product screenshots are contained within device mockups or dark-themed UI frames, showcasing the product's interface. Illustrations employ vivid violet, green, and deep purple color palettes, featuring organic, flowing shapes as well as geometric abstractions, often with subtle gradients (Nebula Pink Radial) or glowing effects that integrate seamlessly into the dark theme. Icons are consistently monochrome (Outline Pale on dark backgrounds) and outlined with a medium stroke weight. The visual language centers on explaining complex technical concepts through clear UI examples and atmospheric, abstract visuals rather than photography, contributing to a high-density, informational feel.
