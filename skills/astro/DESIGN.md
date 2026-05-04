---
version: alpha
name: Astro
description: Astro's design system evokes a digital cosmos, combining deep, expansive dark backgrounds with vibrant, carefully placed gradients and neon-like accents. The visual identity balances technical precision with a sense of wonder, achieved through high-contrast typography against dark surfaces and circular forms paired with sharp geometric edges. Gradient overlays create an illusion of depth and energy, while a consistent approach to spacing ensures legibility and a comfortable user experience even within information-dense segments.
colors:
  deep-space: "#060913"
  cosmic-dust: "#1f232"
  void-shadow: "#0c0f19"
  stardust: "#858b98"
  lunar-gray: "#545864"
  aurora: "#f2f6fa"
  white-dwarf: "#ffffff"
  stellar-blue: "#162a4"
  interstellar-gradient-alpha: "#b845ed"
  interstellar-gradient-beta: "#f041ff"
  interstellar-gradient-gamma: "#2f4cb3"
  cosmic-sparkle-vivid: "#4bf3c8"
  cosmic-sparkle-blue: "#54b9ff"
  asteroid-dust: "#ffd493"
  galaxy-violet: "#acafff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 16
    letterSpacing: 0.48px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 21
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 24
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 22
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 40
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 53
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 64px
components:
  hero-cta-buttons-version-badge:
    role: 
  feature-cards-what-is-astro:
    role: 
  themes-tab-selector-cards:
    role: 
  primary-filled-button:
    role: Call to action
  subtle-pill-button:
    role: Secondary action
  text-link-button:
    role: Tertiary action
  default-navigation-link:
    role: Navigation element
  astro-current-version-badge:
    role: Informational badge
---

## Overview

**North Star:** Deep-space console light show. Gradient-infused dark surfaces illuminated by precise, vibrant accents and high-contrast text.

Astro's design system evokes a digital cosmos, combining deep, expansive dark backgrounds with vibrant, carefully placed gradients and neon-like accents. The visual identity balances technical precision with a sense of wonder, achieved through high-contrast typography against dark surfaces and circular forms paired with sharp geometric edges. Gradient overlays create an illusion of depth and energy, while a consistent approach to spacing ensures legibility and a comfortable user experience even within information-dense segments.

### Do's

- Use Deep Space (#060913) as the default page background to establish the dark theme.
- Apply Interstellar Gradient Alpha (linear-gradient(83.21deg, rgb(50, 69, 255), rgb(184, 69, 237))) to hero sections and primary CTAs for high visual impact.
- Render all primary body and heading text in Aurora (#f2f6fa) or White Dwarf (#ffffff) for optimal contrast on dark backgrounds.
- Utilize 9999px border-radius for all interactive buttons and badges, creating a soft, approachable pill shape.
- Employ `Obviously` font (weights 300, 400, 700) for all display headings to leverage its distinctive custom features.
- Maintain an `elementGap` of 8px for vertical and horizontal spacing between adjacent small elements like buttons or icons.
- Use `MDIO` font specifically for technical labels and small functional text, taking advantage of its 0.4px letter spacing.

### Don'ts

- Avoid using bright, high-saturation colors for large background areas; reserve them strictly for accents and gradients.
- Do not deviate from the 9999px radius for buttons or the 16px radius for cards; these radii are key to the brand's aesthetic.
- Never use generic system monospace fonts when rendering code; always use `ui-monospace` (or `Fira Code`) for consistency.
- Do not introduce drop shadows for card elevation; rely on `Cosmic Dust` (#1f232e) background color difference to indicate layers.
- Do not use overly complex or multi-color iconography; stick to minimal, outline, or single-fill styles using accent colors like Cosmic Sparkle Vivid or White Dwarf.
- Avoid excessive text justification or wide line lengths; keep body text at `16px` with a `1.5` line height (24px) for readability.
- Do not use letter spacing on `Obviously` font for headings; its inherent `fontFeatureSettings` define its character.

### Layout

The page maintains a `1280px` max-width, with content centered. The hero section is full-bleed, showcasing the `Interstellar Gradient Alpha` background with a centered headline and CTA section. Subsequent sections alternate between the `Deep Space` (#060913) and `Cosmic Dust` (#1f232e) background colors, creating a subtle visual rhythm without hard dividers. Content within these sections often follows a two-column layout, typically text-left with an illustrative element or screenshot right, or a grid of `Feature Cards`. Vertical spacing between sections is generous (`sectionGap: 64px`), contributing to the comfortable reading density. Navigation is managed by a sticky top bar with links and a subtle GitHub icon.

### Imagery

The site predominantly uses abstract, gradient-infused graphics (Interstellar Gradient Alpha/Beta) as background elements, creating a sense of depth and energy. Product screenshots are typically contained within cards (Cosmic Dust background, 16px radius), appearing as embedded UI elements. Icons are simplified and often outlined or single-filled, consistently appearing in White Dwarf (#ffffff) or Stardust (#858b98), sometimes with a vibrant Cosmic Sparkle color (#4bf3c8, #54b9ff) as an accent. The imagery's role is primarily decorative and atmospheric, establishing a tech-forward, cosmic brand identity, with product shots serving an explanatory function without lifestyle photography.
