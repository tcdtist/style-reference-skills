---
version: alpha
name: Wrike
description: This system projects an image of digital precision and intelligent organization. It uses a restrained palette of muted blues and grays, punctuated by a vibrant, almost neon, green used sparingly for active elements. The overall impression is one of approachable authority, where clarity and structured information presentation are prioritized. Slightly rounded corners on cards and buttons soften the otherwise crisp, modern aesthetic of system-like interfaces.
colors:
  midnight-graphite: "#162136"
  cloud-white: "#ffffff"
  subtle-gray: "#f2f5fa"
  slate-indigo: "#2b3a57"
  system-blue: "#0073d3"
  wrike-green: "#00e05c"
  ash-gray: "#657694"
  light-cloud: "#c1c9d8"
  deep-space-gradient: "#00b259"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -0.64px
spacing:
  cardRadius: 20px
  buttonRadius: 12px
  elementGap: 4px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  ai-feature-cards:
    role: 
  dark-cta-banner-with-email-input:
    role: 
  secondary-ghost-button:
    role: Subordinate action
  pill-ghost-button:
    role: Navigation or tertiary action
  nav-button:
    role: Navigation links
  input-field:
    role: User data entry
  dark-section-input-field:
    role: Input field on dark backgrounds
---

## Overview

**North Star:** Organized Digital Workspace — like well-lit, interactive blueprints on a high-resolution display.

This system projects an image of digital precision and intelligent organization. It uses a restrained palette of muted blues and grays, punctuated by a vibrant, almost neon, green used sparingly for active elements. The overall impression is one of approachable authority, where clarity and structured information presentation are prioritized. Slightly rounded corners on cards and buttons soften the otherwise crisp, modern aesthetic of system-like interfaces.

### Do's

- Use TT Norms Pro for all text, applying specific weights (400, 600, 700) from the typography scale according to role.
- Prioritize 'Wrike Green' (#00e05c) for all primary calls-to-action to maximize brand recognition and user engagement.
- Apply 20px border radius for all content cards to maintain a soft yet structured appearance.
- Maintain a clear visual hierarchy by limiting shadows to '#162136' text and navigation elements, using `rgba(24, 31, 56, 0.25) 0px 25px 45px -45px`.
- Utilize 'Subtle Gray' (#f2f5fa) for secondary backgrounds and minor interactive elements, creating light contrast without harshness.
- Incorporate the 'Deep Space Gradient' where significant brand emphasis is required, such as hero sections or key promotional areas.
- Ensure input fields have a solid 'Midnight Graphite' border (#162136) to clearly delineate interactive areas.

### Don'ts

- Do not introduce additional bold or semibold weights beyond TT Norms Pro 600 or 700 within body text contexts.
- Avoid using bright, high-saturation colors other than 'Wrike Green' (#00e05c) for interactive elements to prevent visual clutter.
- Do not apply `box-shadow` effects to standard content cards; their elevation is managed by background color distinction.
- Refrain from using sharp, 0px radius corners on buttons; maintain a minimum of 4px radius for all interactive buttons.
- Do not use dark text colors on dark backgrounds without sufficient contrast; ensure a ratio of at least 16:1 for accessibility, generally 'Cloud White' (#ffffff) on 'Midnight Graphite' (#162136).

### Layout

The page maintains a centered max-width of 1220px for primary content, set against a full-width background. The hero section is a split layout: prominent headline on the left and a detailed product UI illustration composed of layered elements on the right. Section rhythms are defined by alternating background colors (Cloud White and Subtle Gray) and are separated by a consistent '64px' section gap. Content is often arranged in symmetrical two-column layouts featuring text and imagery/cards. A three-column card grid is used for displaying features. The footer utilizes a dark background with white text and features a more complex grid for links. The header is a sticky top bar containing the brand logo, navigation, and primary CTAs.

### Imagery

This site features a mixture of abstract product graphics and tightly cropped, clean product screenshots with UI overlays. The graphics often integrate the brand's vibrant green, using geometric shapes and subtle gradients to imply data flow and connectivity. Photography, when present, consists of professional, staged and slightly desaturated shots of individuals utilizing computers in a work context, often with blurred backgrounds, serving to humanize the technical aspect. Icons are primarily outlined, monochrome using 'Midnight Graphite' or 'System Blue', with a consistent stroke weight. The overall role of imagery is to explain and reinforce the product's capabilities in a highly organized and polished manner, balancing visual interest with informational clarity.
