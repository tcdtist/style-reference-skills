---
version: alpha
name: Tailscale
description: Tailscale's design system uses a technical and understated aesthetic, built on a foundation of neutral grays and whites. Typography is compact and precise, maintaining clarity in dense information displays. Components are lightweight, favoring subtle borders and soft shadows over heavy fills or strong visual ornaments, contributing to an overall sense of efficiency and focus, punctuated by a single vibrant red accent color for critical actions.
colors:
  inkwell: "#181717"
  paper-white: "#ffffff"
  ghost-gray: "#eeebea"
  carbon-gray: "#2e2d2d"
  shadow-tint: "#bdbcbb"
  parchment: "#f7f5f4"
  deep-plum: "#575555"
  ash-charcoal: "#232222"
  impact-red: "#d04841"
  deep-sky-gradient: "#5a82de"
  backdrop-shadow: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.32px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.2
    letterSpacing: -1.92px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 12px
  sectionGap: 24px
components:
  pill-button:
    role: Rounded button for secondary actions or tags.
  default-button:
    role: Standard button for general actions.
  outlined-button:
    role: Secondary action button with a defined border.
  call-to-action-button:
    role: Prominent button for primary user actions.
  feature-card:
    role: Information container for individual features or content blocks.
  hero-information-card:
    role: Enlarged card within hero sections, often for key information.
  dark-content-card:
    role: Card variant for displaying content on a dark background.
  navigation-link:
    role: Interactive text link for navigation menus.
  privacy-consent-banner:
    role: Persistent notification at the bottom of the page.
---

## Overview

**North Star:** Architectural technical blueprint.

Tailscale's design system uses a technical and understated aesthetic, built on a foundation of neutral grays and whites. Typography is compact and precise, maintaining clarity in dense information displays. Components are lightweight, favoring subtle borders and soft shadows over heavy fills or strong visual ornaments, contributing to an overall sense of efficiency and focus, punctuated by a single vibrant red accent color for critical actions.

### Do's

- Use Inkwell (#181717) for all primary body text and main headings to ensure strong contrast.
- Apply Ghost Gray (#eeebea) for subtle visual separation, such as thin borders or as a background for secondary surfaces.
- Reserve Impact Red (#d04841) exclusively for primary call-to-action buttons and essential brand accents.
- Prioritize Inter at compact sizes (12-16px) with normal letter-spacing for denser information, such as body text or navigation items.
- Maintain a default border-radius of 8px for most interactive elements and 16px for cards and larger containers.
- Employ the subtle shadow rgba(24, 23, 23, 0.02) 0px 4px 8px 0px for cards and elevated components to provide minimal depth.
- Utilize 12px for consistent internal spacing within components and between closely related elements.

### Don'ts

- Do not introduce new vibrant colors outside of the defined Impact Red (#d04841) to maintain the restrained aesthetic.
- Avoid heavy drop shadows or strong gradients on common UI elements; elevation should be subtle.
- Refrain from using Arial for new components or primary text. Inter is the canonical typeface.
- Do not deviate from the established radius values; a consistent 8px for buttons and 16px for cards is key.
- Do not use highly saturated primary colors for text or backgrounds unless it’s the Impact Red (#d04841) for a CTA.
- Avoid large letter-spacing for body text; only use MDIO with increased letter-spacing for specific stylized elements.
- Do not use dark backgrounds for full sections; the primary theme is light with occasional dark cards.

### Layout

The page primarily uses a max-width contained layout, approximately 1200px wide, centered within the browser. The hero section often features a large, centered headline over a light background, sometimes paired with a dark card containing contextual information. Section rhythm is driven by consistent vertical spacing (sectionGap of 24px) between content blocks, with alternating light and very occasional dark surface treatments creating visual breaks. Content is arranged in alternating text-left/image-right patterns or multi-column card grids (e.g., 3-column features). The navigation is a sticky top bar, providing an always-available global menu.

### Imagery

The visual language focuses on clear product communication. Imagery includes precise product screenshots and abstract vector icons, typically rendered in monochromatic tones or with subtle brand color accents. Photography is minimal, almost absent, favoring a direct, UI-centric presentation. Icons are outlined or filled with a medium stroke weight and are primarily functional and descriptive, not decorative. Imagery supports technical explanations rather than creating atmosphere.
