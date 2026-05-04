---
version: alpha
name: PlanetScale
description: This design system presents as a 'technical monochrome' with sharp angles and a restrained color palette. High contrast black, white, and a range of achromatic grays define the structure, accented sparingly by electric blue and a warm orange, creating focused visual hierarchy. Monospaced typography is a core identifier, lending a precise, computational feel to all text elements. The overall impression is one of efficiency and understated authority, suitable for a developer-centric product.
colors:
  midnight-graphite: "#111111"
  ash-black: "#000000"
  cloud-white: "#fafafa"
  steel-gray: "#414141"
  smoke-gray: "#737373"
  stone-gray: "#c1c1c1"
  electric-blue: "#0b6ec5"
  flame-orange: "#f35815"
  marigold-yellow: "#f2b600"
  verdant-green: "#22a652"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.006px
spacing:
  buttonRadius: 0px
  elementGap: 24px
  sectionGap: 96px
components:
  announcement-banner:
    role: 
  tabbed-content-switcher:
    role: 
  testimonial-cta-block:
    role: 
  naked-link-button:
    role: Navigation, inline actions, text-based CTAs.
  dark-overlay-button:
    role: Contextual navigation, menu items, secondary actions.
  top-banner-link:
    role: Informational banner at the top of the page.
  orange-action-button:
    role: Primary call-to-action in the header.
  tabbed-navigation-item-active:
    role: Indicates the currently active tab in a content switcher.
  tabbed-navigation-item-inactive:
    role: Available but not currently selected tabs.
  logo-grid-cell:
    role: Displaying client or partner logos.
---

## Overview

**North Star:** Architectural Blueprint; precise, high-contrast lines on a grid, picked out with sparse, functional color accents.

This design system presents as a 'technical monochrome' with sharp angles and a restrained color palette. High contrast black, white, and a range of achromatic grays define the structure, accented sparingly by electric blue and a warm orange, creating focused visual hierarchy. Monospaced typography is a core identifier, lending a precise, computational feel to all text elements. The overall impression is one of efficiency and understated authority, suitable for a developer-centric product.

### Do's

- Use ui-monospace with a letter-spacing of -0.006em for all text elements to maintain the consistent technical aesthetic.
- Prioritize Cloud White (#fafafa) for background surfaces and Ash Black (#000000) for primary headlines to establish clear visual hierarchy.
- Apply Electric Blue (#0b6ec5) exclusively to interactive text elements like links and hover states to guide user interaction.
- Employ Flame Orange (#f35815) sparingly for urgent calls-to-action or promotional banners to maximize its impact.
- Maintain a strict 0px border-radius for all primary UI elements like buttons, input fields, and cards to reinforce the sharp, precise design language.
- Utilize the 8-pixel base unit for all spacing, particularly 24px for component padding and 96px for section gaps, to create a comfortable yet structured density.
- Render all third-party logos in #414141 (Steel Gray) on a Cloud White (#fafafa) background to integrate them into the monochrome palette.

### Don'ts

- Do not introduce any curved forms beyond the 9999px radius for tags; all other elements must maintain sharp, 0px corners.
- Avoid using drop shadows or complex gradients; rely on color contrast and solid borders for definition and depth.
- Do not deviate from the ui-monospace font; introducing other font families will compromise the core identity.
- Refrain from using Electric Blue (#0b6ec5) for purely decorative purposes, as it is reserved for interactive states and primary links.
- Do not use background colors other than Cloud White (#fafafa) or the defined neutral grays for main content areas; maintain the light theme.
- Avoid excessive use of Flame Orange (#f35815) in non-CTA contexts, as its impact is dependent on its limited application.

### Layout

The layout is primarily a max-width 1280px centered container, creating a formal and structured presentation. The hero section features a prominent, centered headline over a white background, setting a direct and informative tone. Content sections are delineated by consistent vertical spacing, often with a 4-column client logo grid. Text blocks are typically left-aligned and stack vertically. Navigation is a fixed top bar on larger screens, supporting content scanning. The overall density is comfortable, with ample white space around elements, reinforcing clarity.

### Imagery

The site's imagery is primarily composed of client logos and monochromatic icons. Logos are treated uniformly in #414141 (Steel Gray) on white backgrounds, presented within a strict grid, emphasizing a technical, brand-agnostic visual. Iconography is simple, outlined, and uses the Steel Gray, maintaining the high-contrast, precise aesthetic. There is no use of photography, illustrations, or complex graphics, indicating a focus on pure function and information delivery.
