---
version: alpha
name: Stripe
description: Stripe's design system evokes a digital command center on a clean canvas. It combines a serene white background with structured grid layouts and a single vibrant violet to highlight actions and key information. Subtle shadows provide soft elevation, preventing elements from feeling flat, while compact typography paired with highly descriptive gradients for hero sections and product showcases adds visual depth without clutter. The overall effect is one of quiet efficiency, where information is paramount, and interactions are clearly signposted.
colors:
  midnight-ink: "#061b31"
  slate-blue: "#50617a"
  ghost-gray: "#64748d"
  platinum-white: "#ffffff"
  porcelain-white: "#f8fafd"
  powder-blue: "#e5edf5"
  stone-gray: "#d8d6df"
  deep-violet: "#533afd"
  washed-violet: "#b9b9f9"
  soft-violet: "#8087ff"
  accent-green: "#81b81a"
  vibrant-orange: "#ff6118"
  sunburst-gradient: "#ffbb00"
  dreamy-gradient: "#7f7dc8"
  fuchsia-glow-gradient: "#ff2ede"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
    letterSpacing: 0.03px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.003px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.009px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.07
    letterSpacing: -0.03px
spacing:
  cardRadius: 6px
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-filled-button:
    role: Main call to action.
  ghost-button:
    role: Secondary action. Low visual hierarchy.
  outlined-button:
    role: Tertiary action.
  default-card:
    role: Content container for features and information.
  feature-card:
    role: Highlighting key features or product aspects.
  primary-navigation-link:
    role: Top-level navigation item.
---

## Overview

**North Star:** Architectural blueprint on white marble.

Stripe's design system evokes a digital command center on a clean canvas. It combines a serene white background with structured grid layouts and a single vibrant violet to highlight actions and key information. Subtle shadows provide soft elevation, preventing elements from feeling flat, while compact typography paired with highly descriptive gradients for hero sections and product showcases adds visual depth without clutter. The overall effect is one of quiet efficiency, where information is paramount, and interactions are clearly signposted.

### Do's

- Use Platinum White (#ffffff) as the default page background for most sections.
- Apply Deep Violet (#533afd) specifically for primary interactive elements, ensuring strong visual call to action.
- Employ sohne-var weight 300 for all display and large heading typography to maintain a refined, impactful presence.
- Keep card surfaces subtle, using Powder Blue (#e5edf5) or Porcelain White (#f8fafd) with soft 6px rounded corners.
- Utilize -0.0300em letter-spacing for large text (56px) to maintain a cohesive, modern typographic aesthetic.
- Implement radial and linear gradients for hero banners and product showcases to add dynamic visual interest without overwhelming the UI.
- Maintain a clear elementGap of 8px for logical grouping of related UI elements.

### Don'ts

- Do not use saturated colors for large areas or text unless they are part of a decorative gradient or a specific accent.
- Avoid using hard, sharp shadows; prefer soft, diffused shadows like rgba(0, 0, 0, 0.2) 0px 0px 32px 8px for elevation.
- Do not introduce new font families; sohne-var is the sole typeface for all typographic needs.
- Refrain from using border radii other than 4px and 6px for interactive components and cards, respectively.
- Do not use generic blue for links or buttons; Deep Violet (#533afd) is the designated action color.
- Avoid high-contrast, bold headlines; the system relies on lighter weights (300, 400) even for large text.
- Do not vary line heights significantly from the established typographic scale; ensure dense, compact text blocks for body copy and tighter leads for headlines.

### Layout

The page primarily uses a max-width contained layout, though the hero section often employs full-bleed vibrant gradients to establish a dynamic visual anchor. Sections exhibit a comfortable vertical rhythm, with consistent spacing and a blend of centered content stacks and alternating text-left/image-right arrangements. Feature sets are often presented in multi-column card grids, supporting compact information delivery. Navigation is handled by a sticky top bar with clearly defined interactive elements.

### Imagery

The site uses a combination of abstract, vibrant gradients for hero sections and product showcases (e.g., radial-gradient using Deep Violet, pinks, and light blues), and clean, contained product screenshots that are often presented within device mockups. For illustrative purposes, icons are outlined or filled with brand colors, maintaining a minimal yet functional aesthetic. Imagery serves primarily as decorative atmosphere and product showcase, with a lesser emphasis on photography, emphasizing a more technical and abstract visual story.
