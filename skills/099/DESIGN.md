---
version: alpha
name: 099
description: This design system presents as a 'digital workbench' – dark, stark, and highly organized, creating an atmosphere of focused, technical precision. The reliance on extreme achromatic contrast combined with a monospace system font defines its aesthetic, making it feel less like a brand and more like an interface for a command-line tool. Sharp 10px corner radii on interactive elements provide a subtle softening against the otherwise rigid grid, allowing functional elements to feel grounded yet approachable.
colors:
  midnight-oil: "#000000"
  ghost-white: "#ffffff"
  steel-gray: "#1d1d1d"
  muted-ash: "#383838"
  dim-gray: "#888888"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 19.2
    letterSpacing: 0.24px
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 16px
  sectionGap: 48px
components:
  filter-button-group:
    role: 
  product-card-grid:
    role: 
  hero-info-card:
    role: 
  text-button-invisible:
    role: Primary interactive element for navigation and inline actions
  ghost-button-outlined:
    role: Secondary interactive element, filtering, or calls to action
  subtle-filled-button:
    role: Tertiary action or selected state within a group
  high-contrast-filled-button:
    role: Primary call to action in specific contexts (e.g., checkout)
  content-card-rounded:
    role: Container for product items or featured content
  info-card-padded:
    role: Descriptive content blocks, like hero text areas
  elevated-card:
    role: Interactive elements with a background to signify interaction or state
  text-input-search:
    role: Form element for user input
---

## Overview

**North Star:** Terminal aesthetic, digital workbench. The UI feels like a high-contrast monospaced terminal environment for creative tools.

This design system presents as a 'digital workbench' – dark, stark, and highly organized, creating an atmosphere of focused, technical precision. The reliance on extreme achromatic contrast combined with a monospace system font defines its aesthetic, making it feel less like a brand and more like an interface for a command-line tool. Sharp 10px corner radii on interactive elements provide a subtle softening against the otherwise rigid grid, allowing functional elements to feel grounded yet approachable.

### Do's

- Use Midnight Oil (#000000) as the primary page background color across all layouts.
- Always use the Soehne Mono font at 16px weight 400 for all text elements.
- Apply 10px border-radius to all interactive components like buttons, cards, and input fields.
- Maintain a clear visual hierarchy by limiting text colors to Ghost White (#ffffff) for primary information and Dim Gray (#888888) for secondary details.
- Ensure generous spacing: a minimum of 16px between elements and 26.5px internal padding for information cards.
- For content blocks, apply Steel Gray (#1d1d1d) for explicit background distinction, maintaining a 10px radius.

### Don'ts

- Do not use any chromatic colors; visuals must remain strictly achromatic.
- Avoid box shadows or complex elevation; depth is created through varying shades of gray and explicit borders.
- Do not introduce any additional font families; exclusively use Soehne Mono.
- Do not use border-radius values other than 0px or 10px.
- Do not vary line-height significantly from the base 1.2 or 1.4 for readability, especially on long blocks of text.
- Do not use images or graphics that break the high-contrast, dark mode aesthetic; ensure all visuals integrate seamlessly.

### Elevation

This design intentionally eschews traditional drop shadows for elevation. Instead, depth and hierarchy are achieved through a carefully managed progression of achromatic background colors (#000000 -> #1d1d1d) and distinct 1px borders (#383838). This approach reinforces the 'digital workbench' aesthetic, where interfaces are stark and functional, relying on clear separation rather than subtle visual effects.
