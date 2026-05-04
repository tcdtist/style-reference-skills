---
version: alpha
name: Attio
description: The design feels like a meticulously organized, high-end instrument. It operates on a starkly minimalist, black-and-white axis, where near-black (#1c1d1f) on pure white is the default state for text and primary actions. The most distinctive choice is the typographic duality: large, inviting headlines are set in the soft serif Tiempos Text, while the entire user interface, from buttons to body copy, uses the neutral sans-serif Inter. This creates a rhythm between approachable storytelling and functional precision. Color is used with extreme restraint, appearing as subtle accents for interactive states or status indicators, ensuring the user's focus remains on content and functionality. A consistent 10px radius on buttons provides a soft counterpoint to the otherwise sharp, grid-aligned UI frames.
colors:
  white: "#ffffff"
  ash: "#f3f4f6"
  stone: "#e4e7ec"
  slate: "#d3d8df"
  lead: "#b5bdc9"
  overcast: "#8f99a8"
  metal: "#6f7988"
  carbon: "#505967"
  ink: "#1c1d1f"
  abyss: "#000000"
  action-blue: "#407ff2"
  focus-blue: "#94b9ff"
  success-green: "#075a39"
  danger-red: "#772322"
  warning-yellow: "#705500"
  magic-aura: "#70a1f0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.14px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.24px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.23
    letterSpacing: -0.42px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -1.12px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.07
    letterSpacing: -1.28px
spacing:
  cardRadius: 8px
  buttonRadius: 10px
  elementGap: 8px
  sectionGap: 96px
components:
  cta-button-group:
    role: 
  feature-tab-bar:
    role: 
  ai-ask-input-card:
    role: 
  primary-cta-button:
    role: The main call-to-action.
  secondary-cta-button:
    role: Secondary call-to-action, or an alternative to the primary.
  header-navigation-button:
    role: Used for navigation links in the main header.
  feature-tab-button:
    role: Used in a tab group to switch between content views.
  ui-frame-card:
    role: Container for complex UI modules, like the main app demo.
  text-input:
    role: Standard text input field.
  logo-cloud-item:
    role: Displays a partner or customer logo.
  page-footer:
    role: The closing section of the page with site-wide links.
---

## Overview

**North Star:** Precision Digital Toolkit. A design system built on a foundation of high-contrast monochrome, where soft serif headlines provide a human touch to a clinical, tool-like interface.

The design feels like a meticulously organized, high-end instrument. It operates on a starkly minimalist, black-and-white axis, where near-black (#1c1d1f) on pure white is the default state for text and primary actions. The most distinctive choice is the typographic duality: large, inviting headlines are set in the soft serif Tiempos Text, while the entire user interface, from buttons to body copy, uses the neutral sans-serif Inter. This creates a rhythm between approachable storytelling and functional precision. Color is used with extreme restraint, appearing as subtle accents for interactive states or status indicators, ensuring the user's focus remains on content and functionality. A consistent 10px radius on buttons provides a soft counterpoint to the otherwise sharp, grid-aligned UI frames.

### Do's

- Always set display and hero headlines in Tiempos Text.
- Use Inter with the `ss03` font feature setting for all UI copy.
- Apply negative letter-spacing to all text 18px and larger, following the type scale.
- Construct primary CTAs from Ink (#1c1d1f) backgrounds with White (#ffffff) text.
- Maintain a consistent 10px radius on all major buttons.
- Use borders (1px Slate #d3d8df) as the primary method for separating UI elements.
- Reserve color (Action Blue #407ff2) for interactive states like links and focus rings.

### Don'ts

- Don't use Tiempos Text for body copy or any text smaller than 28px.
- Don't use color in headlines or primary buttons.
- Don't use fill-based colors unless for semantic status indicators.
- Don't apply shadows to buttons, inputs, or simple cards.
- Don't use radii other than 10px for buttons or 8px for cards.
- Don't forget to include the `ss03` font feature when setting type.
- Don't introduce new saturated colors; the palette is intentionally monochrome.

### Layout

The layout is built on a centered, max-width (1440px) model, creating generous white space on the peripheries. Hero sections are minimal, typically a large, centered headline stack. Page content follows a predictable rhythm of stacked, centered sections or simple two-column layouts. A key structural element is the large, embedded product UI demonstration, which acts as the visual centerpiece. Navigation is contained within a simple, sticky top bar.

### Imagery

Imagery is functional and abstract, avoiding lifestyle photography. The primary visuals are clean product UI screenshots contained within minimalist browser or app frames. Secondary visuals consist of abstract data visualizations, like the grid of grayscale profile pictures, which serve as atmospheric graphics rather than literal content. All imagery is rendered with sharp edges and presented in a clean, isolated manner.

### Elevation

Elevation is used with extreme scarcity. The system prefers separation through borders and negative space over shadows. Shadows are reserved only for distinct, layered UI windows (like the main application frame) to lift them off the page, never for simple cards or buttons.
