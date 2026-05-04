---
version: alpha
name: Felt
description: Felt employs a dark, command-center aesthetic, with a cool green canvas creating a sense of depth and focus for data visualization. Typography is crisp and authoritative, striking a balance between traditional elegance and modern clarity. Functional elements are highlighted with a warm amber tone, contrasting effectively with the predominantly muted green and deep grayscale palette. Components are lightweight and precise, often featuring subtle borders and minimal radii to maintain a structured yet unobtrusive interface.
colors:
  forest-canvas: "#3d521e"
  nightfall-surface: "#314218"
  text-primary: "#eeeeee"
  text-secondary: "#ffffff"
  text-tertiary: "#333333"
  warm-ember: "#dc8c46"
  muted-sage: "#64754b"
  felt-deepest-green: "#212f0c"
  felt-darkest-base: "#18210c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.33px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.46px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
    letterSpacing: 0.53px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: 0.59px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0.66px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.11
    letterSpacing: -1.12px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -1.65px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 0.8
    letterSpacing: -3.44px
spacing:
  buttonRadius: 20px
  elementGap: 12px
  sectionGap: 24px
components:
  primary-action-button:
    role: Main call-to-action button, drawing attention with the brand's accent color.
  secondary-action-button:
    role: Subtle button with a transparent background, used for secondary actions or navigation.
  ghost-navigation-button:
    role: Navigation items in the header, acting as ghost buttons.
  outline-link-button-warm-ember:
    role: Outlined button or link, using the brand accent color for border and text.
  badge-neutral:
    role: Inline labels or small informational markers.
  ui-container-card:
    role: Small, contained UI panels like the footer or specific data widgets.
---

## Overview

**North Star:** Deep forest data canvas

Felt employs a dark, command-center aesthetic, with a cool green canvas creating a sense of depth and focus for data visualization. Typography is crisp and authoritative, striking a balance between traditional elegance and modern clarity. Functional elements are highlighted with a warm amber tone, contrasting effectively with the predominantly muted green and deep grayscale palette. Components are lightweight and precise, often featuring subtle borders and minimal radii to maintain a structured yet unobtrusive interface.

### Do's

- Prioritize Forest Canvas (#3d521e) as the dominant background color for most sections, establishing the brand's deep green aesthetic.
- Use Warm Ember (#dc8c46) exclusively for primary calls to action and critical interactive elements to maintain its high visual impact.
- Employ Gt Alpina Standard weight 300 for all major headings to convey authority through subtle, elegant typography.
- Always use Atlasgrotesk Cy Web with 0.033em letter-spacing for body text and UI labels to ensure clarity and consistency.
- Apply a 20px border-radius to all filled buttons to create a softer, more approachable interactive element.
- Maintain a clear distinction between surface levels using Felt Darkest Base (#18210c), Felt Deepest Green (#212f0c), and Nightfall Surface (#314218) for progressively elevated elements.
- Utilize 12px for `elementGap` to ensure comfortable spacing between interactive elements and components.

### Don'ts

- Do not use saturated colors other than Warm Ember for accentuation; maintain the muted green and achromatic palette elsewhere.
- Avoid large, uncontained blocks of light or white content; surfaces should primarily be dark or muted green.
- Do not vary the letter-spacing for Atlasgrotesk Cy Web; the 0.033em value is a signature characteristic.
- Do not use standard serif fonts for UI elements; Times New Roman should be reserved for decorative text.
- Avoid excessive use of drop shadows; limit them to clearly elevated UI components like deep container cards.
- Never use `0px` border-radius for action buttons, as 20px is core to their visual identity.
- Do not introduce strong gradients in backgrounds; the system relies on solid color fields and subtle shifts in dark green tones.

### Layout

The page uses a maximum-width contained layout, though the hero section often spills into a full-bleed background. The hero features a large centered headline and calls to action over a dark green background. Content sections follow a vertical rhythm with consistent spacing, often alternating between centered stacks and split layouts with text on one side and a visual (map, screenshot) on the other. A notable element is the embedded dark UI panel, which frequently overlays sections for dynamic product showcasing. The navigation is a sticky top bar with ghost buttons and a prominent 'Sign Up' button.

### Imagery

Imagery primarily consists of maps and GIS data visualizations, often presented as embedded UI elements or product screenshots. When present, images are contained within the dark UI, sometimes with subtle shadows. There's a minimal use of abstract graphics or photography. Icons are generally simple, outlined, and monochromatic, used functionally to represent actions or categories within the dark UI.
