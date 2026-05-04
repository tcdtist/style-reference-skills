---
version: alpha
name: SpatialChat
description: This design system projects a feeling of modern clarity and understated robustness, achieved through a stark contrast of dark text on clean white surfaces, accentuated by a single vibrant violet. The generous use of space and subtle elevation creates a breathable, organized interface. Rounded corners on interactive elements and cards introduce an approachable softness to an otherwise precise and functional aesthetic.
colors:
  absolute-zero: "#ffffff"
  charcoal-black: "#000000"
  deep-space-charcoal: "#030712"
  slate-gray: "#4b5563"
  whisper-gray: "#f9fafb"
  fog: "#e5e7eb"
  periwinkle-mist: "#f2f2ff"
  steel-gray: "#d1d5db"
  majestic-violet: "#5727e7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.43
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.38
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.38
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.3
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.3
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 64px
components:
  hero-cta-button-group-with-social-proof:
    role: 
  feature-section-spatial-interaction:
    role: 
  announcement-banner-badge-group:
    role: 
  primary-action-button:
    role: Main call to action
  outline-accent-button:
    role: Secondary action or navigation
  dark-outline-neutral-button:
    role: Tertiary action, often in headers
  hero-white-button:
    role: Prominent utility button in hero
  default-input-field:
    role: Standard text input
  premium-input-field:
    role: Enhanced or larger text input
  violet-new-badge:
    role: Indicator for new features/items
  periwinkle-info-badge:
    role: General informational tag
  outline-subtle-badge:
    role: Contextual, less obtrusive tag
  client-logo-card:
    role: Display partner or client logos
---

## Overview

**North Star:** Violet accented white canvas. Pure white surfaces are the backdrop for precise charcoal text and interactive violet elements, recalling an architect's blueprint highlighted with a single, crucial color.

This design system projects a feeling of modern clarity and understated robustness, achieved through a stark contrast of dark text on clean white surfaces, accentuated by a single vibrant violet. The generous use of space and subtle elevation creates a breathable, organized interface. Rounded corners on interactive elements and cards introduce an approachable softness to an otherwise precise and functional aesthetic.

### Do's

- Use Deep Space Charcoal (#030712) for all primary headings and key text to maintain visual impact.
- Apply Majestic Violet (#5727e7) exclusively to primary call-to-action buttons and critical interactive elements.
- Prioritize Absolute Zero (#ffffff) for all main backgrounds and card surfaces to ensure visual spaciousness.
- Maintain 12px border radius for all buttons and image containers, with 8px for badges and inputs, and 16px for cards.
- Utilize Clear Shadow Subtle (rgba(0,0,0,0.06) 0px 1px 2px 0px) for buttons or very light elevation, and Large Shadow Subtle (rgba(0, 0, 0, 0.06) 0px 4px 28px 0px) for cards for visible yet soft depth.
- Employ Satoshi font with normal letter spacing across all text for a consistent, accessible typographic voice.

### Don'ts

- Do not introduce additional vibrant colors; the system relies on a focused palette of neutrals and a single Majestic Violet accent.
- Avoid using hard, sharp corners; all interactive and container elements should adhere to the established radii.
- Do not deviate from the Satoshi typeface or its specified weights; it is the brand's sole typographic identity.
- Refrain from heavy, dark shadows; elevation is achieved through subtle, light shadow effects.
- Do not cluster elements without adequate spacing; maintain generous internal padding (12px, 15px) and external spacing (16px, 24px) for visual comfort.
- Do not use highly saturated colorful icons; all icons should be achromatic or carry the Majestic Violet accent.

### Layout

The page primarily uses a max-width contained layout, centered on the screen, providing ample negative space on wider viewports. The hero section is full-width with a centered headline and subtext, followed by centered CTA buttons. Content sections typically alternate between a two-column layout of text on one side and an illustrative product screenshot on the other, or feature grids like the 3-column client logo display. Vertical rhythm is established by consistent section gaps, creating distinct, breathable content blocks. Navigation is a fixed top bar with a left-aligned logo and right-aligned action buttons, maintaining visibility throughout scrolling. The layout emphasizes clarity and easy scannability of information.

### Imagery

The visual language focuses on a mix of product screenshots, abstract geometric graphics, and crisp, minimal icons. Product screenshots are contained within rounded frames (12px radius) and sometimes feature subtle elevation via shadows, showing the interface clearly and often in a context of use (e.g., small user profile circles). Illustration is minimal, leaning towards very abstract, simple forms or clean line art. Icons are primarily outlined or solid in achromatic colors, with occasionally Majestic Violet accents for interactive states. The overall role of imagery is explanatory and showcases the product's functionality in a clean, non-distracting manner, rather than decorative high-key photography.
