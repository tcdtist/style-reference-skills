---
version: alpha
name: Analogue
description: Analogue's design system evokes a dark, digital command center aesthetic with a focus on deep contrast and crisp typography. The visual mood is serious and professional, leveraging near-black and dark gray canvases accented by stark white and light gray text. Transparency and blur effects create a sense of depth and layered information, while minimal use of saturated color keeps the interface focused and understated, allowing the content to dominate.
colors:
  deep-space: "#000000"
  ghostly-gray: "#ededed"
  shadow: "#1c1c1c"
  stone: "#b8b8b8"
  cloud: "#ffffff"
  ash: "#7a7a7a"
  horizon: "#a6a6a6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.18
    letterSpacing: -0.63px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.05
    letterSpacing: -1.6px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -3px
spacing:
  buttonRadius: 13px
  elementGap: 10px
  sectionGap: 40px
components:
  ghost-navigation-item:
    role: Navigation links in the header
  text-link:
    role: Inline textual hyperlinks
  hero-headline:
    role: Primary heading in the hero section
  body-text:
    role: General paragraph content
  navigation-bar:
    role: Main top-level persistent navigation
---

## Overview

**North Star:** Midnight data stream

Analogue's design system evokes a dark, digital command center aesthetic with a focus on deep contrast and crisp typography. The visual mood is serious and professional, leveraging near-black and dark gray canvases accented by stark white and light gray text. Transparency and blur effects create a sense of depth and layered information, while minimal use of saturated color keeps the interface focused and understated, allowing the content to dominate.

### Do's

- Use Deep Space (#000000) as the primary background for dark mode sections, often with an overlying content layer using Shadow (#1c1c1c).
- Apply Graphik Medium for all textual elements and reserve LCDDot TR Regular for highly stylized, spaced-out display text.
- Maintain tight letter spacing for Graphik headings: -0.05em for display, -0.04em for headings, and -0.035em for subheadings.
- Leverage transparency and backdrop-filter: blur(10px) or blur(20px) to create layered, 'frosted glass' UI elements, especially for navigation.
- Utilize a minimal color palette composed primarily of Deep Space (#000000), Shadow (#1c1c1c), Ghostly Gray (#ededed), and Cloud (#ffffff) to maintain a monochromatic, high-contrast aesthetic.
- Implement a 10px default border radius for cards and images, with 13px for interactive elements like buttons and links.
- Employ an element spacing of 10px for vertical and horizontal rhythm between components, and 40px for section separation.

### Don'ts

- Avoid introducing additional saturated colors; maintain the monochromatic focus with blue tones for only the most interactive, brand-defining elements if needed.
- Do not use generic system fonts for prominent headings or body copy; always prioritize Graphik Medium.
- Refrain from using strong, opaque background colors for interactive elements. Prefer ghost buttons or subtle fills that blend with the background.
- Do not rely on large, heavy drop shadows for elevation; instead, use subtle border treatments, background blurs, and shifts in neutral color for perceived depth.
- Avoid excessive padding or large gaps; the design system favors a compact and dense information display.
- Do not use highly decorative imagery; visuals should be abstract, motion-focused, or product-centric, blending with the dark interface.

### Layout

The page primarily uses a full-bleed structure, with the hero section dominating the viewport with a dynamic abstract background. Text and navigation elements are typically centered or symmetrically balanced within a conceptual max-width container, without explicit pageMaxWidth. Vertical rhythm is established through consistent sectionGap of 40px. Content sections appear to alternate between large, impactful headlines (sometimes widely spaced) and standard text blocks, with a compact density for body content. Navigation is a minimalist, centered floating bar with a translucent, blurred background.

### Imagery

The visual language is characterized by abstract, high-speed light beam graphics, often full-bleed and serving as dynamic backgrounds. There's a strong emphasis on motion and digital effects rather than static photography or ornate illustrations. When type is used decoratively, it leverages wide letter-spacing, almost transforming into graphic elements itself. Iconography, if present, is expected to be simple, outlined, and monochromatic, maintaining the minimal and technical feel. Imagery acts as atmospheric mood-setting rather than direct content explanation, creating an immersive, futuristic environment.
