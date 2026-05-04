---
version: alpha
name: Sonos
description: Sonos's design is an exercise in measured minimalism, leveraging high contrast and precise spacing to create a cinematic and functional experience. The core aesthetic relies on a stark black and white palette, allowing content and product imagery to take center stage. Typography is unadorned, favoring legibility and directness, while subtle large radii on interactive elements introduce a soft touch to an otherwise sharp visual identity. This deliberate sparsity amplifies the perceived quality and focus on sound.
colors:
  absolute-zero: "#000000"
  studio-white: "#ffffff"
  soft-gray: "#f5f5f5"
  dark-detail: "#2e2e2"
  pale-border: "#e0e0e0"
  medium-gray-hint: "#cdcdcd"
  light-shadow: "#bfbfbf"
  ghost-gray: "#737373"
  deep-shadow: "#5f5f5f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
spacing:
  buttonRadius: 80px
  elementGap: 16px
  sectionGap: 80px
components:
  button-group-primary-secondary:
    role: 
  announcement-banner:
    role: 
  feature-promo-card-dark-music-discovery:
    role: 
  icon-button-ghost:
    role: Interactive element
  primary-button-outlined-black:
    role: Primary Call to Action
  primary-button-outlined-white:
    role: Primary Call to Action
  navigation-link-ghost-white:
    role: Navigation/Secondary Action
  product-container-card-raw:
    role: Image/Content Container
  feature-card-dark-full-bleed:
    role: Prominent Feature Display
  information-card-light-background:
    role: Informational Content Block
  navigation-menu:
    role: Global Navigation
---

## Overview

**North Star:** Matte black and white studio backdrop. The design feels like a product photography studio, with stark contrasts and focused lighting. Surfaces are either stark white or deep black, with elements precisely placed.

Sonos's design is an exercise in measured minimalism, leveraging high contrast and precise spacing to create a cinematic and functional experience. The core aesthetic relies on a stark black and white palette, allowing content and product imagery to take center stage. Typography is unadorned, favoring legibility and directness, while subtle large radii on interactive elements introduce a soft touch to an otherwise sharp visual identity. This deliberate sparsity amplifies the perceived quality and focus on sound.

### Do's

- Prioritize high contrast between text (#000000, #ffffff) and background colors to ensure maximum readability and visual impact.
- Utilize `aktiv-grotesk` exclusively across all content, varying only weight and size to establish clear typographic hierarchy.
- Apply `80px` or `9999px` `borderRadius` to all primary interactive elements like buttons to maintain the signature pill-like shape.
- Use `16px` for vertical spacing between most content blocks and elements, with `48px` as the horizontal padding for buttons to maintain consistent 'comfortable' density.
- Confine body text and core content within a `1440px` `pageMaxWidth` to ensure optimal reading width and a structured layout.
- Implement `Studio White` (#ffffff) as the default page background and `Absolute Zero` (#000000) for text, inverting these for high-impact full-bleed dark sections.

### Don'ts

- Avoid introducing any additional fonts or decorative typography; maintain `aktiv-grotesk` for all text.
- Do not use subtle changes in color for emphasis; rely on high contrast between `Absolute Zero` and `Studio White` or `Soft Gray` for visual differentiation.
- Refrain from using complex shadow effects; stick to the sparse, minimal drops detected, focusing on flat design with strong color separation.
- Do not deviate from the `80px` or `9999px` radius for interactive elements, as this is a strong brand identifier.
- Avoid breaking content out of the `1440px` `pageMaxWidth` unless it is a full-bleed visual section designed for immersive impact.
- Do not introduce highly saturated or vibrant colors unless they are specific, approved branding elements not present in the current palette, as the system relies on achromatic contrast.

### Layout

The layout is primarily a max-width, center-aligned container at `1440px`, but frequently breaks into full-bleed sections for hero imagery or prominent content blocks. The hero section often features a dark, full-bleed background image with centered, large white text and two prominent pill-shaped CTA buttons. Section rhythm alternates between full-bleed dark sections and contained light sections. Content arrangement typically involves centered text blocks over imagery or a simple stack with generous vertical spacing, suggesting a focus on individual content pieces over densely packed information. Limited grid usage is observed for feature displays, with ample space between elements. Navigation is a sticky top bar, adapting its color scheme (black or white) to ensure contrast against the scrolling content.

### Imagery

Imagery is high-quality, product-focused photography and lifestyle shots often deeply integrated into the background. Products are frequently displayed within domestic settings, but without distracting elements, maintaining a clean, aspirational feel. Photography is often desaturated or has a muted, natural color palette, allowing the product itself to stand out. Some sections feature abstract album cover-style graphics, generally in toned-down hues, creating a digital catalog aesthetic. Visuals are typically full-bleed or large, contained within simple geometric shapes (often rectangles). Icons are minimal, outlined, and monochromatic, matching the overall sleek simplicity.
