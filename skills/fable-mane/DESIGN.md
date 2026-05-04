---
version: alpha
name: Fable & Mane
description: Fable & Mane evokes a spirited, naturalistic brand with a gentle, earthy canvas and flashes of energetic color. The visual system prioritizes warmth and comfort, achieved through rounded forms, soft background tones, and legible but characterful typography. Components feel approachable, often outlined or ghosted, reserving vibrant reds for clear calls to action that pop against muted surroundings. The overall effect is a clean, product-focused presentation softened by organic accents.
colors:
  maharaja-red: "#f9423a"
  tiger-orange: "#f69f82"
  sunburst-yellow: "#ffd100"
  ocean-deep-blue: "#002e5d"
  sky-blue: "#007aff"
  midnight-ink: "#000000"
  paper-bark: "#fff5ec"
  snow-drift: "#ffffff"
  smoky-quartz: "#1a243d"
  pale-ash: "#bfb8b1"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.042px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.042px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.021px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.023px
spacing:
  cardRadius: 24px
  buttonRadius: 24px
  elementGap: 22px
  sectionGap: 30px
components:
  primary-action-button:
    role: Filled button for main calls to action
  secondary-action-button:
    role: Filled button for alternative actions
  ghost-button:
    role: Outline button for less prominent actions, often within product listings
  text-link-button:
    role: Minimal button style for navigation or secondary actions, usually inline
  elevated-marketing-card:
    role: Informational pop-up or modal card for announcements
  feature-badge:
    role: Small, informative labels for product features
---

## Overview

**North Star:** Earthy radiance with vibrant pops

Fable & Mane evokes a spirited, naturalistic brand with a gentle, earthy canvas and flashes of energetic color. The visual system prioritizes warmth and comfort, achieved through rounded forms, soft background tones, and legible but characterful typography. Components feel approachable, often outlined or ghosted, reserving vibrant reds for clear calls to action that pop against muted surroundings. The overall effect is a clean, product-focused presentation softened by organic accents.

### Do's

- Prioritize Paper Bark (#fff5ec) as the default page background to establish warmth and softness.
- Use Maharaja Red (#f9423a) exclusively for primary action buttons and critical alerts to ensure maximum impact.
- Apply a 24px border-radius to all buttons, cards, and badges to maintain a consistent friendly aesthetic.
- Pair Quincy CF (ExtraBold) for headlines with Sofia Pro for body text to create clear typographic hierarchy and brand identity.
- Ensure ample spacing, using a consistent 22px `elementGap` for horizontal and vertical separation of inline elements, and a 30px `sectionGap` between major content blocks.
- Elevate critical UI elements like modals and pop-ups with `box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 20px 0px` for clear visual focus.
- Reinforce the natural aesthetic with botanical SVG icons using Ocean Deep Blue (#002e5d) and Sunburst Yellow (#ffd100) as fill colors.

### Don'ts

- Do not introduce severe dark backgrounds or stark white elements except for highly elevated surfaces, to avoid disrupting the warm, natural theme.
- Avoid using multiple colors for primary calls to action; Maharaja Red (#f9423a) is the singular choice for this function.
- Do not apply sharp, angular corners to interactive components, as this contradicts the established soft, rounded aesthetic.
- Refrain from dense, compact layouts; maintain the comfortable spacing values (22px `elementGap`, 30px `sectionGap`) to give content breathing room.
- Do not use generic system fonts when Sofia Pro and Quincy CF are available, as they are crucial for brand recognition.
- Avoid excessive use of shadows; reserve `box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 20px 0px` for truly elevated or focused content only.
- Do not dilute the brand's chromatic elements (Maharaja Red, Tiger Orange, Sunburst Yellow, Ocean Deep Blue) with overly desaturated variants or competing hues.

### Layout

The page maintains a `1760px` max-width centered container, providing a spacious feel. The hero section often features a split layout: compelling lifestyle photography on one side and a prominent headline in Quincy CF (`56px`, `Midnight Ink`) with a direct call to action button (Primary Action Button in Maharaja Red) on the other, all against the warm Paper Bark background. Content sections follow a consistent vertical rhythm with a `30px` `sectionGap`, often alternating between single-column and multi-column arrangements. Product listings are presented in a responsive grid, with each product item including a clear `Add to Bag` ghost button. Navigation is a sticky top bar with prominent brand logo and essential links.

### Imagery

The site predominantly uses high-quality photography, often depicting tight crops of product usage (e.g., scalp massages, hair application) with minimal lifestyle context. Product photography features bottles cleanly presented, sometimes with a subtle highlight or blurred background. Illustrations are used for decorative elements, such as the prominent tiger head logo and small circular badges indicating product benefits (Vegan, Silicone-Free). These illustrations are flat, outlined, and directly integrate brand colors. Icons are minimalist and outlined, typically in Midnight Ink (#000000) for navigation and functional elements. Imagery serves a dual role: product showcase and aspirational demonstration of usage, with decorative elements reinforcing brand values. The density is image-heavy in product grids and hero sections, but balanced with structured typography.
