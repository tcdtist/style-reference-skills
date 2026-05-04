---
version: alpha
name: Eat Real Food
description: Eat Real Food uses a high-contrast, text-dominant visual system, evoking authority and directness. Dark charcoal text on light, almost creamy backgrounds creates a stark, legible interface. Typography is the primary visual driver, featuring prominent, oversized headlines and deliberate letter spacing. The system is largely monochrome, punctuated by a vivid red that acts as a symbolic warning and highlight for critical data points, reinforcing the urgent message of the content.
colors:
  midnight-ink: "#110000"
  buttermilk: "#fdfbee"
  paper-white: "#ffffff"
  light-linen: "#f3f0d6"
  silver-mist: "#e5e5e5"
  ash-shadow: "#d2d0c6"
  muted-stone: "#8d7d7d"
  pale-gray: "#bebcb3"
  warning-red: "#d50000"
  alert-red-1: "#920000"
  alert-red-2: "#b50000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.24
    letterSpacing: -0.456px
  heading:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.1
    letterSpacing: -0.99px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.95
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.92
spacing:
  cardRadius: 16px
  buttonRadius: 40px
  elementGap: 24px
  sectionGap: 80px
components:
  pill-button:
    role: Primary Call to Action
  ghost-text-button:
    role: Secondary Action or Navigation
  navigation-link:
    role: Global Navigation Link
  standard-card:
    role: Content container for articles or features
  elevated-card:
    role: Prominent content container
  tab-header-card:
    role: Tab or section header for grouped content
  video-player-button:
    role: Inline media control
---

## Overview

**North Star:** Stark Manifesto on Creamy Canvas

Eat Real Food uses a high-contrast, text-dominant visual system, evoking authority and directness. Dark charcoal text on light, almost creamy backgrounds creates a stark, legible interface. Typography is the primary visual driver, featuring prominent, oversized headlines and deliberate letter spacing. The system is largely monochrome, punctuated by a vivid red that acts as a symbolic warning and highlight for critical data points, reinforcing the urgent message of the content.

### Do's

- Use Midnight Ink (#110000) as the primary text color and for most interactive elements that are not primary CTA.
- Apply Light Linen (#f3f0d6) as the default background for large page sections to maintain a consistent neutral base.
- Render large headlines (96px and above) with Die Grotesk D, weight 700, and a line height between 0.84 and 0.96 for maximum impact.
- Employ the Pill Button with Buttermilk background and 40px border-radius for primary calls to action, ensuring an approachable yet distinct interactive element.
- Utilize Warning Red (#d50000) strictly for data visualization, warning indicators, or to highlight critical factual elements, never as a general accent.
- Maintain comfortable spacing between elements with a base unit of 4px and elemental gaps typically at 24px.
- Elevate critical content cards with Paper White background and the specific dual shadow: rgba(0,0,0,0.1) 0px 10px 40px 0px, rgba(0,0,0,0.1) 0px 20px 60px -10px.

### Don'ts

- Avoid generic, non-brand specific imagery or illustrations; stick to hard-hitting data visualizations or minimal, focused product shots.
- Do not introduce additional bold accent colors; the system relies on the stark black/white/red contrast.
- Refrain from using thin weights for body text; maintain a minimum of Die Grotesk A 400 for legibility and presence.
- Never overcrowd sections with too much text; leverage the impactful display typography to convey messages concisely.
- Do not use subtle, muted interactive states for primary actions; primary actions should always be clearly distinct in color and shape.
- Avoid excessive use of elevation; reserve shadows for critical interactive cards to maintain visual clarity and weight.
- Do not use standard 4px or 8px border radii for buttons; always use the distinct 40px pill shape or ghost styles.

### Layout

The page maintains a centered, contained layout for primary content, often with no explicit max-width that makes the text feel expansive. Hero sections can be full-bleed with centered headlines over dark backgrounds. Content sections display a consistent vertical rhythm. Information is generally presented in centered stacks for prominent statements or simple multi-column grids for data and supporting details. Navigation is a minimal top bar, with prominent site branding on the left and primary navigation links taking secondary visual presence. The layout emphasizes direct communication over complex visual arrangements, prioritizing reading flow.

### Imagery

Imagery is functional and direct, primarily focusing on data visualizations, abstract graphics, or highly relevant product (food-related) imagery where applicable. Photography is minimal, if present, and likely cropped tightly without lifestyle context. Icons are simple, outlined or filled, mostly monochrome and used sparingly for clarity. The overall density is text-dominant, with images serving to support factual claims rather than create atmosphere.
