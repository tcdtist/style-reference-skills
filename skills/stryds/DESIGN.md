---
version: alpha
name: Stryds
description: Stryds embodies a dark, vibrant gamified aesthetic. The interface uses deep, near-black backgrounds contrasting with neon gradients and vivid accent colors. Typography is bold and assertive, prioritizing impact over traditional readability, often using large scale and tight tracking. Components are rounded and soft, emphasizing a playful yet high-tech feel, with a strategic use of color to highlight active states and primary actions.
colors:
  deep-space: "#040126"
  neon-green: "#a6ff00"
  dark-matter: "#333333"
  midnight-canvas: "#000000"
  graphite-border: "#3d3d3d"
  muted-ash: "#6f6f6f"
  card-surface: "#171717"
  bright-text: "#fdfdfd"
  component-dark: "#101010"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.48px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
    letterSpacing: -0.57px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.83px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1
    letterSpacing: -1.01px
  display:
    fontFamily: "system-ui"
    fontSize: 78px
    lineHeight: 1
    letterSpacing: -1.33px
spacing:
  cardRadius: 40px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 80px
components:
  primary-action-button:
    role: Call to action button
  ghost-icon-button:
    role: Secondary action or branding button
  elevated-card:
    role: Content container for featured sections
  transparent-content-card:
    role: Subtle content grouping within larger sections
---

## Overview

**North Star:** Neon rings in midnight

Stryds embodies a dark, vibrant gamified aesthetic. The interface uses deep, near-black backgrounds contrasting with neon gradients and vivid accent colors. Typography is bold and assertive, prioritizing impact over traditional readability, often using large scale and tight tracking. Components are rounded and soft, emphasizing a playful yet high-tech feel, with a strategic use of color to highlight active states and primary actions.

### Do's

- Always use Deep Space (#040126) for neutral button outlines on dark backgrounds.
- Prioritize Neon Green (#a6ff00) for all primary calls to action, ensuring button background fills and critical highlights stand out.
- Apply a 100px border radius to all buttons and small interactive elements, creating a distinct pill-shaped aesthetic.
- Maintain a section gap of 80px between major content blocks to create a generous, comfortable density.
- Use Bright Text (#fdfdfd) for all primary headings and body text on dark backgrounds to ensure legibility.
- Ensure headings use a tight line height, typically 0.95 to 1.25, with negative letter spacing for a compact, impactful look.
- Backgrounds should predominantly use Midnight Canvas (#000000) or Card Surface (#171717) to maintain the dark theme.

### Don'ts

- Do not use highly saturated colors for large background areas; colors are reserved for accents and interactive elements.
- Avoid sharp corners; all significant UI elements like cards and buttons should embrace the generous 40px or 100px border radii.
- Do not use generic system fonts for display typography; Sf Pro Display (or a suitable substitute) is critical for brand impact.
- Refrain from excessive use of visual hierarchy with shadows; rely on color contrast and spacing for distinction.
- Do not break the dark theme with light backgrounds for content sections; maintain consistency with the neutral dark palette.
- Avoid standard letter spacing on headings; always apply the specified negative tracking for a unique type rhythm.

### Layout

The page uses a full-bleed model, with content elements centered within a flexible width, rather than a strict `pageMaxWidth`. The hero section is full-bleed, featuring the brand name and tagline centered over the dynamic, colorful rings on a Midnight Canvas background. Sections appear to flow seamlessly, punctuated by the large background graphics, with a consistent vertical section gap of 80px. Content within sections tends to be centrally stacked or arranged in prominent, isolated blocks. Navigation is minimal, likely integrated into a subtle bottom bar as suggested by the ghost and primary action buttons at the base of the viewport.

### Imagery

This site features abstract, energetic visuals dominated by vibrant, multi-colored rings that swirl and overlap. Imagery is primarily abstract and decorative, forming large background elements rather than product-specific showcases. The rings appear to be vector-based or graphically rendered, using a broad spectrum of vivid hues against deep dark backgrounds. There are some small profile picture-style circular image crops, suggesting social or user-generated content, but they are not the primary imagery focus. The visual language is image-heavy in decorative elements, but text-dominant for content presentation, relying on the background graphics for atmosphere while keeping the foreground UI clear.
