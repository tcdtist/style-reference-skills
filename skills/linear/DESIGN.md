---
version: alpha
name: Linear
description: Linear presents a sophisticated and focused dark-mode experience, reminiscent of a command center dashboard. A deep charcoal base creates a serious, immersive canvas, while subtle gradients and layered surfaces build depth without harsh contrasts. Distinctive muted text colors (#8a8f98 for secondary, #62666d for tertiary) maintain readability against the dark backdrop. Critically, interaction is marked by a single vivid lime green (#e4f222), applied selectively to primary calls to action, preventing visual clutter and guiding the user's eye with precision.
colors:
  pitch-black: "#08090a"
  graphite: "#0f1011"
  deep-slate: "#161718"
  charcoal-grey: "#23252a"
  muted-ash: "#323334"
  gunmetal: "#383b3f"
  porcelain: "#f7f8f8"
  light-steel: "#d0d6e0"
  storm-cloud: "#8a8f98"
  fog-grey: "#62666d"
  alabaster: "#e5e5e6"
  neon-lime: "#e4f222"
  aether-blue: "#5e6ad2"
  forest-green: "#008d2c"
  cyan-spark: "#02b8cc"
  emerald: "#27a644"
  warning-red: "#eb5757"
  deep-violet: "#6366f1"
  amethyst: "#8b5cf6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: -0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.13px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.22px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.22px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.22px
spacing:
  cardRadius: 6px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 24px
components:
  issue-card:
    role: 
  cta-button-group:
    role: 
  issue-list-board:
    role: 
  primary-action-button:
    role: Call to action button
  ghost-navigation-button:
    role: Navigation and secondary actions
  subtle-link-button:
    role: Tertiary actions and links
  navigation-item-button:
    role: Sidebar navigation items
  default-card:
    role: Content container
  elevated-card:
    role: Prominent content container
  nested-card:
    role: Internal content grouping
  input-field:
    role: User input fields
  subtle-input-field:
    role: Search or secondary input fields
  badge:
    role: Label or tag
---

## Overview

**North Star:** Midnight Command Center: A dark, layered interface lit by precise accents, like a high-tech control panel.

Linear presents a sophisticated and focused dark-mode experience, reminiscent of a command center dashboard. A deep charcoal base creates a serious, immersive canvas, while subtle gradients and layered surfaces build depth without harsh contrasts. Distinctive muted text colors (#8a8f98 for secondary, #62666d for tertiary) maintain readability against the dark backdrop. Critically, interaction is marked by a single vivid lime green (#e4f222), applied selectively to primary calls to action, preventing visual clutter and guiding the user's eye with precision.

### Do's

- Use 'Pitch Black' (#08090a) for the primary page background to establish the dark theme.
- Apply 'Porcelain' (#f7f8f8) for all primary text and important icons to ensure readability.
- Highlight primary interactive elements exclusively with 'Neon Lime' (#e4f222) as a background, restricting its use to guide user attention.
- Create depth and hierarchy by layering surfaces using 'Pitch Black' (#08090a), 'Graphite' (#0f1011), and 'Deep Slate' (#161718) backgrounds.
- Employ the Inter Variable font family with specific letter-spacing adjustments for all UI text, such as -0.22px for display sizes and -0.11px for body text, to maintain a tight, precise feel.
- Utilize 6px border-radius for all primary buttons, cards, and input fields to maintain a consistent, subtly rounded aesthetic.
- Use 'Storm Cloud' (#8a8f98) for secondary text and descriptive labels to recede into the background.

### Don'ts

- Do not introduce additional bright or saturated colors beyond 'Neon Lime' (#e4f222) for interactive elements; maintain its singular role.
- Avoid using harsh white backgrounds or light-themed patterns, as the system is anchored in a dark mode aesthetic.
- Do not deviate from the specified typeface choices; 'Inter Variable' and 'Berkeley Mono' are fundamental to the visual identity.
- Refrain from using strong, diffuse shadows; elevation is achieved through subtle layering and sharp, contained shadows like rgba(0, 0, 0, 0.4) 0px 2px 4px 0px.
- Do not apply broad, decorative background gradients across large sections of the UI; gradients are subtle and contained to specific functional areas.
- Do not use generic border-radii; adhere to 6px for key components like cards and buttons, and 2px for smaller tags, to preserve the signature balance of softness and precision.
- Avoid large amounts of white space; the design is compact, leveraging an 8px element gap as a standard measurement.

### Layout

The page primarily uses a full-bleed structure for background content, with main content sections constrained by a centered maximum width (not explicitly defined but visually present). The hero section features a full-bleed 'Pitch Black' background with a centered, prominent headline. Subsequent sections alternate between dark backgrounds for narrative content and embedded UI examples, often featuring split layouts (text on one side, product UI on the other). Content is generally arranged in vertical stacks or multi-column grids for feature display. Navigation consists of a sticky top bar and frequently observed left-hand sidebar for application-like structures. Spacing is compact yet deliberate, creating a dense but organized information flow.

### Imagery

The site's visual language is dominated by UI elements and product screenshots, emphasizing functionality over decorative imagery. Where images appear, they are often contained within realistic product mockups or embedded application frames. Abstract graphics are minimal, primarily serving as subtle background textures or data visualizations. Icons are filled, minimalist, and mono-color, often adopting the 'Porcelain' (#f7f8f8) or 'Storm Cloud' (#8a8f98) neutral palette, enhancing the dashboard aesthetic. The overall density of imagery is low; it serves an explanatory or product showcase role rather than a decorative one.
