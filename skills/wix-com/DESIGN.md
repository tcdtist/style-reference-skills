---
version: alpha
name: wix.com
description: Wix.com's system is a canvas of light, subtly animated surfaces, where interactive elements pulse with a vivid blue. The visual style balances a strong, opinionated display typography with more conventional body text for clarity. Cards and interactive components feature generous rounded corners, giving the interface a friendly, approachable feel, while the dominant white background is punctuated by soft, pastel-toned background fills and gradients.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  cloud-gray: "#f1f5f9"
  silver-mist: "#d0d0d0"
  steel-blue: "#1c1d21"
  sky-blue: "#166aea"
  deep-violet: "#101585"
  lime-zest: "#dff994"
  twilight-indigo: "#2c34af"
  ocean-teal: "#024051"
  pale-sage: "#d1e6d1"
  terracotta: "#863a29"
  amethyst: "#bea3e7"
  cerise-glow: "#ffc2fe"
  sunflower-yellow: "#fdf4a1"
  info-blue: "#538ab6"
  sky-gradient: "#bdc5ec"
  deep-sea-gradient: "#095b71"
  lavender-gradient: "#8f69ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
    letterSpacing: -0.21px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 82px
    lineHeight: 1.1
    letterSpacing: -1.64px
  display:
    fontFamily: "system-ui"
    fontSize: 184px
    lineHeight: 0.85
    letterSpacing: -5.52px
spacing:
  cardRadius: 20px
  buttonRadius: 50px
  elementGap: 12px
  sectionGap: 81px
components:
  primary-filled-button:
    role: Call to action, primary interaction
  ghost-button:
    role: Secondary action, navigation
  black-rounded-button:
    role: Alternative call to action, often accentuating a dark background.
  square-corner-card:
    role: Content container, information display
  rounded-corner-card:
    role: Elevated content container, featured information
  shadowed-navigation-bar:
    role: Global navigation header
  rounded-input-field:
    role: User data entry
---

## Overview

**North Star:** Animated digital canvas – an interactive, slightly playful yet authoritative workspace.

Wix.com's system is a canvas of light, subtly animated surfaces, where interactive elements pulse with a vivid blue. The visual style balances a strong, opinionated display typography with more conventional body text for clarity. Cards and interactive components feature generous rounded corners, giving the interface a friendly, approachable feel, while the dominant white background is punctuated by soft, pastel-toned background fills and gradients.

### Do's

- Prioritize Canvas White (#ffffff) for primary backgrounds and Cloud Gray (#f1f5f9) for secondary content sections, ensuring a bright, spacious feel.
- Use Sky Blue (#166aea) exclusively for primary interactive elements, reserving it for clear calls to action and active states.
- Apply 50px border-radius to all buttons and tags, creating a consistent, friendly pill shape.
- Employ madefor-display for all headlines, utilizing its generous sizes and tight letter-spacing for impact.
- Maintain a comfortable rhythm with an 81px section gap, creating clear visual separation between content blocks.
- Use subtle borders and dividers with Silver Mist (#d0d0d0) to structure content without adding visual weight.
- Infuse dynamism into hero sections with gradient backgrounds like Sky Gradient (#bdc5ec) or Electric Gradient (#2c34af) for visual interest.

### Don'ts

- Avoid using Midnight Ink (#000000) as a solid background fill for large sections; its primary role is text and sparse borders.
- Refrain from using Sky Blue (#166aea) for purely decorative purposes; it's reserved for functional interactions.
- Do not deviate from the established 20px radius for cards and images, as it's a signature element of the design language.
- Avoid excessive letter-spacing on display fonts; madefor-display benefits from its naturally tight tracking.
- Do not introduce strong, opaque shadows for elevation, as the system relies on subtle, tinted shadows or no shadows at all for depth.
- Do not use generic system fonts for branding or display text, as the custom madefor family is key to visual identity.
- Avoid overly complex nested layouts; prefer clear sectioning with alternating backgrounds and distinct component areas.

### Layout

The page primarily uses a max-width contained model for content, though the hero sections often go full-bleed with gradients or background patterns. The hero pattern frequently features a centered headline over a background that can be either white, a soft gradient, or a dynamic electric gradient. Sections alternate between standard white backgrounds and Cloud Gray (#f1f5f9) bands, creating a clear vertical rhythm. Content arrangement frequently uses a 2-column text+image pattern or centered stacks, with features often presented in multi-column card grids. Navigation is a sticky top bar with global links and primary actions, retaining visibility while scrolling.

### Imagery

The site predominantly uses product screenshots and abstract graphics. Product screenshots are typically contained within cards, often with rounded corners (20px radius) and sometimes featuring a subtle drop-shadow (rgba(50, 48, 126, 0.28) 5.04px 6.48px 15.84px) that visually lifts them from the surface. Illustrations are geometric and often leverage brand accent colors like Lime Zest and Deep Violet. Icons are typically filled with Midnight Ink or Sky Blue, sometimes outlined. Imagery plays an explanatory and product-showcase role, rather than purely decorative, creating a moderately image-heavy but content-dominant density across sections.
