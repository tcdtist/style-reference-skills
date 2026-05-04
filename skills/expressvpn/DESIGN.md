---
version: alpha
name: ExpressVPN
description: ExpressVPN utilizes a 'Confident Utility' visual language, combining a clean light canvas with distinct brand-colored accents for critical actions and information. The design promotes trust and clarity through a high-contrast monochromatic base, softened by rounded corners and subtle elevation for focal elements. Typography is precise and direct, avoiding flourishes, consistently driving attention to key product offerings and security benefits. The overall impression is professional and secure, with a clear hierarchy established through color and weight.
colors:
  midnight-ink: "#001d2f"
  cloud-white: "#ffffff"
  ghost-gray: "#f7f8f9"
  cool-stone: "#ccd2d5"
  slate-blue: "#667782"
  forest-teal: "#0f866c"
  dark-teal: "#00695c"
  warm-beige: "#f0eacf"
  soft-peach: "#ffe4d4"
  sky-mist: "#b7d1d0"
  light-mint: "#c3ece8"
  crimson-glow: "#da3940"
  deep-ocean-gradient: "#0c3956"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.72
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.83
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
    letterSpacing: -0.016px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.016px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.016px
spacing:
  cardRadius: 24px
  buttonRadius: 34px
  elementGap: 24px
  sectionGap: 24px
components:
  primary-action-button:
    role: Filled button indicating primary calls to action
  ghost-button:
    role: Outlined button for secondary actions or navigation.
  subtle-ghost-button:
    role: Outlined button with lighter background for less prominent actions.
  inline-text-link:
    role: Non-button interactive text within content.
  elevated-feature-card:
    role: Prominent information card with emphasis.
  neutral-content-card:
    role: Standard content grouping without strong visual hierarchy.
  subtle-feature-card:
    role: Card with slight background distinction.
  accent-card:
    role: Card with the primary brand color background for high importance.
  informative-badge:
    role: Small informational tag or label.
  chat-widget-badge:
    role: Interactive chat notification badge.
---

## Overview

**North Star:** Secure utility, bright teal highlights

ExpressVPN utilizes a 'Confident Utility' visual language, combining a clean light canvas with distinct brand-colored accents for critical actions and information. The design promotes trust and clarity through a high-contrast monochromatic base, softened by rounded corners and subtle elevation for focal elements. Typography is precise and direct, avoiding flourishes, consistently driving attention to key product offerings and security benefits. The overall impression is professional and secure, with a clear hierarchy established through color and weight.

### Do's

- Use FS Kim weight 500 or 700 with -0.016em letter-spacing for all primary headings (h1, h2, h3) to maintain a modern, crisp feel.
- Apply Forest Teal (#0f866c) for primary action buttons and key monetary values in headlines to draw immediate attention.
- Adhere to Cloud White (#ffffff) for elevated card backgrounds and Hero Gray (#f7f8f9) for global page backgrounds to establish clear surface hierarchy.
- Implement a 24px border-radius for all primary content cards and badges to ensure consistent softness and approachability.
- Utilize Midnight Ink (#001d2f) for all body text, navigation labels, and borders of ghost buttons, ensuring strong contrast and readability.
- Maintain 32px padding for elevated content cards, ensuring ample visual breathing room within structured elements.
- Employ a 34px border-radius for primary action buttons to give them a distinct, pill-like appearance.

### Don'ts

- Avoid using highly saturated colors for large background areas or extensive text blocks, as the system relies on a neutral canvas with targeted accents.
- Do not deviate from the Inter typeface for body copy and navigational elements; reserve FS Kim exclusively for larger headlines and display text.
- Do not use sharp 0px corners for cards or buttons that convey actions or significant information; maintain rounded edges for a consistent brand feel.
- Refrain from introducing decorative gradients outside of the two specified accent gradients (Crimson Glow and Deep Ocean Gradient).
- Do not apply heavy, opaque shadows to elements that are not feature cards or interactive badges; rely on subtle elevation for most UI elements.
- Avoid arbitrary changes to letter spacing for body text; only apply the specified negative tracking for FS Kim headings and the positive tracking for Inter utility text.
- Do not use #001d2f as a primary text color against backgrounds other than #f7f8f9 or #ffffff; check contrast ratios carefully.

### Layout

The page exhibits a max-width contained layout, likely around a 1200px equivalent, with content consistently centered. The hero section features a prominent centered headline over a background that can vary from a deep gradient to a softer fill. Subsequent sections employ distinct visual banding, often alternating between the Ghost Gray (#f7f8f9) page canvas and Cloud White (#ffffff) content blocks. Content arrangement frequently uses a centered stack for textual information, transitioning to a simple 2-column or card grid for features. Navigation is a sticky top bar with clearly segmented links and a distinct 'Get Started' button. Vertical spacing between sections is generous and consistent, creating a comfortable, open density.

### Imagery

The imagery leans towards product-focused presentation, featuring clean, modern product shots (e.g., phone UI) with contextually relevant, minimal UI elements. Iconography is clean and functional, generally outlined or monochrome with a medium stroke weight. There's a minimal use of abstract graphics (like subtle background gradients) for atmospheric depth rather than decorative content. Photography is absent. Imagery primarily serves an explanatory and product showcase role, with a focus on clarity and directness, not heavy. The density is moderate, with images typically contained within the layout rather than full-bleed.
