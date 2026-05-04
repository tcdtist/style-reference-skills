---
version: alpha
name: Strut
description: Strut's design system uses an antique paper aesthetic with modern, structured typography for a focused writing environment. A warm, desaturated canvas color sets a muted backdrop for crisp UI elements, defined by subtle borders rather than heavy shadows. The primary accent color is a soft, vivid yellow, used sparingly to highlight functional iconography and interactive elements. Component weights are ghost-like and delicate, prioritizing content over chrome.
colors:
  oatmeal-canvas: "#e5dfd5"
  muted-ash: "#73706b"
  storm-gray: "#676460"
  charcoal-text: "#333333"
  amber-accent: "#ffb546"
  solid-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.6
    letterSpacing: 2.14px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 1px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.33
    letterSpacing: -3.4px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: -6.7px
  display:
    fontFamily: "system-ui"
    fontSize: 136px
    lineHeight: 0.92
    letterSpacing: -7.6px
spacing:
  cardRadius: 8px
  elementGap: 16px
  sectionGap: 96px
components:
  interactive-card:
    role: Standard content containers for features and workspace elements.
  ghost-button-link:
    role: Used for secondary actions and text-based interactive elements.
  icon-button:
    role: Small, functional buttons identified by an icon.
  badge-neutral-text:
    role: Indicative labels without a background.
---

## Overview

**North Star:** Antique Paper Workspace

Strut's design system uses an antique paper aesthetic with modern, structured typography for a focused writing environment. A warm, desaturated canvas color sets a muted backdrop for crisp UI elements, defined by subtle borders rather than heavy shadows. The primary accent color is a soft, vivid yellow, used sparingly to highlight functional iconography and interactive elements. Component weights are ghost-like and delicate, prioritizing content over chrome.

### Do's

- Use Oatmeal Canvas (#e5dfd5) as the primary background for all major sections and containers.
- Apply GT Pressura Standard for all display-level typography, ensuring high letter-spacing on larger sizes for a distinctive open feel.
- Define UI element separation using Charcoal Text (#333333) or Muted Ash (#73706b) 1px solid borders, avoiding heavy shadows.
- Reserve Amber Accent (#ffb546) for critical interactive elements like active icons or subtle state indicators.
- Maintain a clear content hierarchy using Inter for body and functional text, with varying weights for emphasis at 10px-48px sizes.
- Apply 8px radius for general components and cards, and 28px for larger interactive containers, maintaining a soft, friendly feel.
- Utilize 16px for horizontal and vertical element gaps to ensure consistent breathing room and clear content separation.

### Don'ts

- Do not use dark or primary colored backgrounds for entire sections; the canvas should remain light and desaturated.
- Avoid bold or heavy font weights for headlines; use GT Pressura Standard 400/500 with generous letter-spacing to create visual impact.
- Do not over-saturate colored elements; the Amber Accent (#ffb546) is designed to be a pop against a muted palette, not compete with it.
- Avoid using multiple colors for text styles beyond Charcoal Text (#333333) and Storm Gray (#676460); maintain a monochromatic text palette.
- Do not introduce complex shadows or gradients; rely on subtle borders and high contrast for definition.
- Never compromise the wide letter-spacing for GT Pressura Standard headings; it is crucial to the brand's typographic identity.
- Do not apply padding below 16px for cards; this system prioritizes a comfortable, uncrowded density.

### Layout

The page uses a full-bleed layout for its hero section, featuring a centered headline over a background that extends edge-to-edge. Subsequent sections typically follow a max-width contained pattern, with content centered within a comfortable reading width. Section rhythm is marked by consistent vertical spacing of 96px, with no alternating background colors between sections. Content is arranged in alternating text-left/image-right (and vice versa) patterns, often with text descriptions beside product screenshots. Minor elements can appear in multi-column grids (e.g., 2 or 3 features). The overall density is comfortable, with generous breathing room between content blocks. Navigation is a minimal top bar with simple text links and a 'Strut' logo.

### Imagery

This design system uses product screenshots as its primary visual language. These screenshots are typically contained within UI frames, presented at a slight angle or as direct, clean depictions of the software interface. They serve an explanatory and product-showcase role, demonstrating features in context rather than purely decorative. There is an absence of lifestyle photography or complex illustrations; the focus is on the UI itself. Icons are minimal, mostly monochromatic outlines, using Solid Black (#000000) or Amber Accent (#ffb546) as fills, indicating functionality rather than adding decorative flair. Imagery density is moderate, carefully balanced with text blocks.
