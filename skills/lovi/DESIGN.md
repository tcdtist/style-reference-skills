---
version: alpha
name: Lovi
description: Lovi evokes a sense of modern, approachable science through its minimalist aesthetic and a central playful violet. The design leverages soft, near-white backgrounds with subtle shadow-derived depth, creating an airy and calming user experience. Unexpectedly fluid headline letter-spacing and a mix of sharp and organic radii define its distinct contemporary feel, balancing clinical precision with user-friendly warmth.
colors:
  midnight-violet: "#151581"
  cloud-white: "#ffffff"
  obsidian-text: "#000000"
  shadow-gray: "#292824"
  onyx-outline: "#a9a9a7"
  silver-mist: "#949392"
  lavender-haze: "#a1a1cd"
  pale-gray: "#f6f6fa"
  almond-dust: "#f6f5f4"
  warm-gray: "#d6d6d6"
  vivid-sky: "#5465ff"
  deep-rose: "#f25c75"
  fresh-green: "#00bb76"
  radiant-pink: "#e6aeff"
  blush-gradient: "#c6a2ff"
  mint-gradient: "#57de98"
  conic-aura: "#ebbdde"
  emerald-radial: "#0fd97"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.29
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 0.91
    letterSpacing: -1.18px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.92
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.06
    letterSpacing: -1.1px
spacing:
  cardRadius: 24px
  buttonRadius: 48px
  elementGap: 8px
  sectionGap: 80px
components:
  award-badge-app-store-cta:
    role: 
  testimonial-review-cards:
    role: 
  feature-highlight-skin-health-approach:
    role: 
  primary-call-to-action-button:
    role: Main user action button
  secondary-call-to-action-button:
    role: Less prominent interactive element
  ghost-accent-button:
    role: Subtle interactive element, often for supplementary actions or links
---

## Overview

**North Star:** violet-tinted laboratory under soft light — precision meets pastel.

Lovi evokes a sense of modern, approachable science through its minimalist aesthetic and a central playful violet. The design leverages soft, near-white backgrounds with subtle shadow-derived depth, creating an airy and calming user experience. Unexpectedly fluid headline letter-spacing and a mix of sharp and organic radii define its distinct contemporary feel, balancing clinical precision with user-friendly warmth.

### Do's

- Use Midnight Violet (#151581) exclusively for primary interactive states and headline accents.
- Apply ES Rebond Grotesque with its specific letter-spacing for all headings to maintain the fluid, typographic tension.
- Utilize Cloud White (#ffffff) as the default background for all main page content and card surfaces.
- Maintain high contrast for body text by using Obsidian Text (#000000) or Shadow Gray (#292824) on light backgrounds.
- Implement 48px border-radius for all primary buttons, and 24px for secondary buttons or cards, ensuring consistent softness.
- Leverage the subtle shadow rgba(36, 36, 41, 0.07) 0px 8px 34px 0px for elevated cards and review containers.

### Don'ts

- Do not introduce new primary font families; adhere strictly to ES Rebond Grotesque, Inter, and Geist.
- Avoid using highly saturated accent colors in large blocks; reserve them for small icons, text accents, or controlled gradient uses.
- Do not deviate from the established spacing scale (multiples of 4px) to ensure consistent content density.
- Avoid hard, sharp corners; all significant UI elements should incorporate a border radius of at least 8px.
- Do not use dark backgrounds for main content sections; the system is built around a predominantly light theme.
- Do not apply shadows indiscriminately; reserve them for intentional elevation of components like cards and modals, using the defined subtle shadow style.

### Layout

The site employs a max-width contained layout, with content centered on the page. The hero section uses a full-width background, but the primary headline and visual elements are contained. A prominent pattern is the alternation of content blocks: a large centered headline and subtext often leads into a section with a large image/illustration paired with text, sometimes in a 2-column arrangement. Review sections feature a grid of cards (likely 3-column on desktop). Vertical rhythm is maintained by consistent section gaps, creating definition between content blocks. Navigation is a simple top bar with a logo and an app store download button, suggesting a minimalist and direct user journey.

### Imagery

Imagery primarily consists of high-quality product photography (a person's face interacting with a mobile app) and professional portrait photography for team members. Product shots are contained within device mockups or cropped precisely, often appearing isolated against the clean background, creating a focused, almost clinical presentation. Illustrations are abstract and colorful, featuring vivid and muted pastel gradients (Blush Gradient, Mint Gradient, Conic Aura) with soft, organic shapes that act as decorative atmosphere without direct explanatory content. Icons are minimal, often line-based or small filled shapes, using brand accent colors (#151581) or vivid semantic colors (Fresh Green #00bb76, Deep Rose #f25c75). Imagery density is moderate, used to break up text-heavy sections or highlight key features without overwhelming the clean aesthetic.
