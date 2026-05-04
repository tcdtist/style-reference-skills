---
version: alpha
name: Liveblocks
description: This design evokes a high-tech control room aesthetic, blending deep darkness with minimalist precision. Dominant #000000 backgrounds create an immersive, focused environment. Subtle gradients and white text act as illuminated data readouts, while crisp, achromatic grays define interactive elements and containers, maintaining visual order. The interplay of clean typography and precise component definition projects an image of robust, technical reliability.
colors:
  midnight-void: "#000000"
  ghostly-white: "#ffffff"
  graphite-base: "#111111"
  ash-gray: "#918d8d"
  light-concrete: "#edecee"
  distant-gray: "#b7b4b4"
  slate-text: "#635f5f"
  digital-blue: "#0090ff"
  cosmic-violet: "#9f8dfc"
  system-teal: "#70e1c8"
  terminal-red: "#f76e99"
  void-radiance: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.43
    letterSpacing: 0.25px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.02px
spacing:
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  trusted-by-logo-strip:
    role: 
  comment-thread-card:
    role: 
  navigation-link:
    role: Interactive elements in the header and footers.
  primary-ghost-button:
    role: Secondary call-to-action.
  primary-filled-button:
    role: Main call-to-action.
  text-link-button:
    role: Inline or subordinate actions.
  tag-badge:
    role: Categorization or small status indicators.
  feature-card:
    role: Container for showcasing features or content blocks.
  inline-code-block:
    role: Displaying short code snippets.
---

## Overview

**North Star:** Midnight data stream. Dark surfaces meet sharp textual readouts and subtle, glowing accents.

This design evokes a high-tech control room aesthetic, blending deep darkness with minimalist precision. Dominant #000000 backgrounds create an immersive, focused environment. Subtle gradients and white text act as illuminated data readouts, while crisp, achromatic grays define interactive elements and containers, maintaining visual order. The interplay of clean typography and precise component definition projects an image of robust, technical reliability.

### Do's

- Prioritize Midnight Void (#000000) as the primary background for full-bleed sections, establishing the dark aesthetic.
- Use Ghostly White (#ffffff) for all primary text elements, ensuring maximum contrast and readability on dark backgrounds.
- Apply Digital Blue (#0090ff) exclusively to primary call-to-action buttons for clear visual hierarchy and impact.
- Maintain 6px as the standard border radius for interactive elements like buttons and tags, with containers using 8px.
- Utilize the Suisse font for all headings and body text, varying weights (400, 500) and sizes according to the type scale.
- Incorporate specific letter-spacing values (-0.0200em to 0.0250em) derived from the Suisse font profile for precise typographic control.
- Employ JetBrains Mono for all code snippets and technical text to clearly distinguish it from UI copy.

### Don'ts

- Avoid introducing additional saturated colors beyond Digital Blue, Cosmic Violet, System Teal, and Terminal Red to preserve the controlled palette.
- Do not use high-saturation colors for large background areas or extensive textual content; reserve them for accents and interactive states.
- Refrain from using strong, opaque shadows; utilize the provided rgb(39, 38, 38) 0px 0px 0px 1px for subtle outlining only.
- Do not deviate from the defined border radii; maintain 6px for buttons and 8px for containers to ensure visual consistency.
- Avoid using decorative fonts or excessive font variations that would disrupt the precise and technical typographic identity.
- Do not add unnecessary padding or margin around elements; adhere to the compact spacing tokens (e.g., 8px element gap, 16px card padding) for content density.
- Never use red as a primary success indicator, as its allocated role as 'Terminal Red' is for specific accents.

### Layout

The page primarily employs a max-width contained layout, centering content within a 1280px constraint, though the hero section frequently uses a full-bleed dark background. The hero pattern features a centered, multi-line headline with a concise subtext, flanked by prominent call-to-action buttons. Section rhythm is driven by consistent vertical spacing, creating ample breathing room, occasionally breaking into alternating data panels or code examples. Content arrangement often utilizes centered stacks for headlines and CTAs, transitioning into 2-column layouts for features (text on one side, visual on the other, alternating). The page is text-dominant in places, with product screenshots serving to break up sections and highlight functionality. A standard top navigation bar persists, maintaining a cohesive header.

### Imagery

This design primarily utilizes dark-themed, abstract visuals and product screenshots. Product screenshots are typically full-bleed, showcasing the UI of the 'Liveblocks' product, often with a slightly distorted, vibrant magenta/pink gradient or pattern as a background element. These graphical backdrops provide a raw, energetic contrast to the otherwise structured UI. Illustrations are minimal and functional, acting as icons or small annotations. Photography is absent. The overall visual language for imagery is one of showing the product in action against a dynamic, abstract backdrop that hints at data and energy. Iconography is primarily monochromatic, using Ghostly White or Ash Gray outlines or fills, maintaining the precise and clean UI aesthetic.

### Elevation

This system minimizes traditional shadows, favoring crisp 1px borders and subtle inset effects to define boundaries and states. Instead of projecting depth via blur, it uses fine outlines and changes in background color (e.g., from Midnight Void to Graphite Base) to differentiate layered elements, reinforcing a flat, precise, and high-tech aesthetic.
