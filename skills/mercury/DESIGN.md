---
version: alpha
name: Mercury
description: The design feels like a command center at twilight, expansive and focused. A deep, near-black neutral palette (#1e1e2a, #171721) creates an immersive, cinematic canvas where glowing off-white text (#ededf3) provides crisp clarity. All energy is channeled into a single, vibrant violet-blue accent (#5266eb) reserved strictly for primary calls-to-action, like indicator lights on a high-tech console. The typography is a defining feature, with custom fonts used at light weights for headlines, creating an authoritative yet approachable voice. The contrast between spacious, atmospheric hero imagery and the stark, text-driven UI below creates a journey from aspiration to action.
colors:
  mercury-blue: "#5266eb"
  ghost-blue: "#cdddff"
  deep-space: "#171721"
  midnight-slate: "#1e1e2a"
  graphite: "#272735"
  lead: "#70707d"
  starlight: "#ededf3"
  silver: "#c3c3cc"
  pure-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.35
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1.1
    letterSpacing: 0.65px
spacing:
  cardRadius: 0px
  buttonRadius: 32px, 40px
  elementGap: 12-32px
  sectionGap: 80-120px
components:
  hero-email-cta:
    role: 
  feature-list-everything-in-one-place:
    role: 
  button-group-primary-secondary-ghost:
    role: 
  primary-pill-button:
    role: The main call-to-action on the page.
  header-pill-button:
    role: The secondary call-to-action in the navigation bar.
  ghost-nav-link:
    role: Navigation items and non-primary links in the header.
  hero-email-input:
    role: The email capture field in the hero section.
  interactive-feature-link:
    role: Selectable items in a feature list.
  footer-link:
    role: Tertiary links in the page footer.
---

## Overview

**North Star:** Mountain Top Command Center

The design feels like a command center at twilight, expansive and focused. A deep, near-black neutral palette (#1e1e2a, #171721) creates an immersive, cinematic canvas where glowing off-white text (#ededf3) provides crisp clarity. All energy is channeled into a single, vibrant violet-blue accent (#5266eb) reserved strictly for primary calls-to-action, like indicator lights on a high-tech console. The typography is a defining feature, with custom fonts used at light weights for headlines, creating an authoritative yet approachable voice. The contrast between spacious, atmospheric hero imagery and the stark, text-driven UI below creates a journey from aspiration to action.

### Do's

- Use 'arcadiaDisplay' at a light weight (360) for all major headlines to maintain an airy, sophisticated tone.
- Reserve the 'Mercury Blue' (#5266eb) accent exclusively for primary, action-oriented CTAs.
- Employ the deep neutral palette (#171721, #1e1e2a) for all backgrounds to create a focused, immersive environment.
- Utilize extreme corner radii (32px, 40px) for all primary and secondary buttons, creating a signature 'pill' shape.
- Maintain high contrast with 'Starlight' (#ededf3) text on dark backgrounds for all primary content.
- Use generous vertical spacing (80px+) between content sections.
- Differentiate interactive list items with a simple 1px bottom border in 'Lead' (#70707d).

### Don'ts

- Don't use 'Mercury Blue' (#5266eb) for text, backgrounds, or decorative elements.
- Don't use heavy font weights (>530) for any typography.
- Don't apply shadows for elevation. Use color and opacity shifts instead.
- Don't introduce new saturated colors. The palette is monochrome plus one blue accent.
- Don't use small corner radii on buttons. They should always be pills.
- Don't use 'Pure White' (#ffffff) for body text; reserve it for text on the primary blue CTA.
- Don't create dense, cluttered layouts. Prioritize breathing room.

### Layout

The layout uses a full-bleed hero that occupies the entire viewport, featuring a centered headline and CTA over a background image. Below the hero, the page transitions to a max-width (approx. 1200px) centered layout on a dark background. Content is organized in simple, single-column stacks with generous vertical spacing, creating a calm, linear reading flow. Navigation is a minimal, semi-transparent top bar that likely becomes sticky. The overall structure is spacious and uncluttered.

### Imagery

The visual language is bifurcated. It opens with a full-bleed, atmospheric photograph of a solitary desk in a vast natural landscape, establishing a mood of boundless ambition and serene focus. This imagery is purely atmospheric, not product-focused. Beyond the hero, the site is starkly text-dominant, with no additional photography or illustration. This contrast positions the brand's 'vibe' first, then transitions to a purely functional, information-driven experience.

### Elevation

Elevation is achieved through light and color, not shadow. Interactive elements brighten or adopt the brand accent color on hover or focus, appearing to 'light up' from within the dark interface. Layered surfaces are differentiated by subtle shifts in the neutral gray palette (e.g., Midnight Slate #1e1e2a on Deep Space #171721).
