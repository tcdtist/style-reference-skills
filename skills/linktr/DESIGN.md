---
version: alpha
name: Linktr
description: Linktree presents a playful, high-energy digital identity built on vibrant, contrasting color blocks and rounded, organic shapes. The design emphasizes clear calls to action and distinct content zones through a dynamic interplay of saturated hues. Typography is primarily functional, leaning into a friendly, approachable tone with varying weights and subtle tracking adjustments to maintain a conversational cadence. Components are often expressed with maximal border-radii, contributing to an overall soft, engaging user experience.
colors:
  forest-green: "#254f1a"
  chartreuse-pop: "#d2e823"
  hydrangea-blue: "#2665d6"
  dahlia-purple: "#502274"
  currant-red: "#780016"
  lavender-mist: "#e9c0e9"
  iris-blue: "#061492"
  goldenrod: "#d6a337"
  graphite: "#1e2330"
  white: "#ffffff"
  marble: "#f3f3f1"
  lunar-dust: "#e8efd6"
  slate-gray: "#676b5f"
  whisper-gray: "#adadad"
  text-gray: "#757575"
  black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.07
    letterSpacing: -0.56px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -1.6px
spacing:
  cardRadius: 64px
  buttonRadius: 99px
  elementGap: 10px
  sectionGap: 48px
components:
  primary-action-button:
    role: Main call-to-action button, highly visible.
  navigation-link-button:
    role: Transparent button for navigation items.
  input-field:
    role: Standard input for user data entry.
  tertiary-ghost-button:
    role: Alternative action button with minimal visual hierarchy.
  pill-accent-button:
    role: Decorative button with high curvature for specific actions.
  default-card:
    role: Standard container for content.
  elevated-content-card:
    role: Card with subtle elevation and rounded corners.
  feature-highlight-card:
    role: Cards designed to stand out with bold colors and maximal rounding.
---

## Overview

**North Star:** Vibrant digital playground: link in bio as a personal, colorful hub

Linktree presents a playful, high-energy digital identity built on vibrant, contrasting color blocks and rounded, organic shapes. The design emphasizes clear calls to action and distinct content zones through a dynamic interplay of saturated hues. Typography is primarily functional, leaning into a friendly, approachable tone with varying weights and subtle tracking adjustments to maintain a conversational cadence. Components are often expressed with maximal border-radii, contributing to an overall soft, engaging user experience.

### Do's

- Prioritize Chartreuse Pop (#d2e823) for all primary calls to action, ensuring it is the brightest element on the screen.
- Utilize 99px border-radius generously for all buttons and rounded interactive elements, for a soft, friendly feel.
- Employ the full spectrum of brand colors (Hydrangea Blue, Dahlia Purple, Currant Red, etc.) for distinct section backgrounds and decorative panels.
- Maintain high visual contrast for text elements, preferring Graphite (#1e2330) on light backgrounds and White (#ffffff) on saturated or dark backgrounds.
- Apply Linksans Linksansvf or Linksans for all headings and key UI text, adjusting letter-spacing according to the type scale for subtle refinement.
- Use Marble (#f3f3f1) as the default page canvas, creating a consistent light foundation.
- Structure layouts with a 1504px max-width, centering content horizontally for coherence.

### Don'ts

- Avoid using flat, desaturated background colors for major sections; Linktree's identity relies on vibrant, distinct color blocks.
- Do not use sharp 0px corners for interactive elements or containers; leverage the specified border radii to maintain the organic, friendly aesthetic.
- Refrain from introducing system default shadows; Linktree uses tinted backgrounds and color blocks to create visual depth instead of drop shadows.
- Do not rely solely on neutral colors for visual hierarchy; use brand colors as primary indicators for interaction and distinction.
- Do not use generic, default system fonts for headings or prominent text; always use Linksans or Linksans Linksansvf to uphold brand typography.
- Avoid tight element spacing; ensure at least 10px element gaps and 16px card padding for a comfortable density.
- Do not apply excessive letter spacing to body text; maintain normal tracking for readability, using negative tracking points only for display headings.

### Layout

The page maintains a centered, contained layout with a maximum width of 1504px. Heroes often feature full-width color backgrounds (e.g., Hydrangea Blue or Chartreuse Pop) with centrally aligned headline text. Sections are distinct, often using alternating vibrant color blocks to break vertical rhythm rather than subtle dividers. Content is arranged in alternating text-left/image-right patterns or centered stacks for feature descriptions. Card grids are prevalent, showcasing features or examples within the highly rounded feature highlight cards. The navigation is a sticky top bar with prominent 'Log in' and 'Sign up free' buttons, maintaining a tight, accessible structure.

### Imagery

Linktree's imagery palette is a mix of product-in-use photography and abstract, organic shapes. Photography features diverse individuals or product shots, often with a vibrant, playful filter or color overlay, integrated into color-blocked sections rather than being full-bleed. Illustrations are minimal, generally functional icons or simple, bold shapes rather than complex scenes. The emphasis is on product showcase and community representation, with a high density of visual elements carefully choreographed within the colorful blocks. Icons are typically filled and monochromatic in either black or white, varying based on background contrast.
