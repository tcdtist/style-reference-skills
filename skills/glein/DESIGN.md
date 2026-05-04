---
version: alpha
name: Glein
description: Glein embraces a stark, high-contrast aesthetic reminiscent of black-and-white photography, presenting product with minimal visual distraction. The design prioritizes readability and directness through utilitarian custom typography and a precise, monochromatic color palette. Surfaced content often features a muted, off-white background, creating subtle depth while maintaining an overall light theme. Components are frequently borderless or use fine, dark strokes to delineate elements, emphasizing content through clear separation rather than heavy ornamentation. Layouts are structured and rectilinear, relying on robust typographic hierarchy to guide the eye.
colors:
  raven-black: "#000000"
  canvas-white: "#ffffff"
  warm-parchment: "#ebe6dc"
  muted-ash: "#b3b3b3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.19
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 111px
    lineHeight: 1.3
spacing:
  elementGap: 13px
  sectionGap: 42px
components:
  filled-primary-button:
    role: Primary Call to Action
  ghost-button:
    role: Secondary Action
  navigation-link:
    role: Primary Navigation
  callout-badge:
    role: Informational Display
  cookie-consent-modal:
    role: Privacy Notice
---

## Overview

**North Star:** Monochromatic architectural clarity: product as sculpture, framed by pure light and shadow.

Glein embraces a stark, high-contrast aesthetic reminiscent of black-and-white photography, presenting product with minimal visual distraction. The design prioritizes readability and directness through utilitarian custom typography and a precise, monochromatic color palette. Surfaced content often features a muted, off-white background, creating subtle depth while maintaining an overall light theme. Components are frequently borderless or use fine, dark strokes to delineate elements, emphasizing content through clear separation rather than heavy ornamentation. Layouts are structured and rectilinear, relying on robust typographic hierarchy to guide the eye.

### Do's

- Always use Raven Black (#000000) for primary text and interactive elements to maintain high contrast and legibility.
- Prioritize Canvas White (#ffffff) as the base background for main content areas, reserving Warm Parchment (#ebe6dc) for subtle content block distinctions.
- Employ F-Grotesk for all primary headings and body text to convey a direct, sculptural presence.
- Utilize Maison-Neue-Mono for nav links and button labels, leveraging its monospaced character for a precise, crafted feel.
- Maintain hard, 0px border-radii for all buttons and interactive elements, reinforcing the sharp, architectural visual language.
- Structure layouts with implied grid systems and strong vertical rhythm, using minimal explicit dividers where possible.
- Ensure all interactive elements maintain a hover state that aligns with the Raven Black and Canvas White contrast, such as a background fill on Raven Black from a ghost element.

### Don'ts

- Avoid introducing any saturated colors; the system is strictly achromatic, with no accent hues beyond brand neutrals.
- Do not soften edges with border-radii; all interactive elements and contained components should maintain crisp, 0px corners.
- Refrain from using drop shadows or heavy elevation styles; rely on color contrast and subtle background changes for layering.
- Do not use generic sans-serif fonts; custom F-Grotesk and Maison-Neue-Mono are essential to the brand's unique typographic fingerprint.
- Avoid decorative gradients or complex overlays; maintain a flat, stark aesthetic for backgrounds and surfaces.
- Do not break rhythm with irregular spacing; adhere to the defined base unit of 6px and derived element/section gaps.
- Do not use any iconography that deviates from simple, single-color line art in Raven Black or Muted Ash.

### Layout

The page primarily follows a max-width contained model with sections flowing vertically, but often features full-bleed hero sections or large image blocks that break this convention to create visual impact. The hero section frequently uses large background imagery with centered overlay text or split-screen layouts. Sections maintain a consistent vertical rhythm, often alternating between large image blocks and cleaner text-dominant areas. Content is arranged in flexible grid patterns, frequently two-column for text alongside visuals, or implicit grids for product displays. The overall density is balanced, allowing breathing room around large images while maintaining readable text blocks. Navigation is a sticky top bar, minimal and unembellished, emphasizing direct links.

### Imagery

This site uses large, editorial-style product photography, often featuring models against minimalist, neutral backgrounds. Images are typically full-bleed within their section or occupy significant visual space, acting as primary content elements rather than mere decorations. The photography style is high-key and focused, with clean crops and natural lighting that emphasizes product textures and forms. There are no overt illustrations or abstract graphics; instead, imagery directly showcases the product. Icons are minimal, single-color (Raven Black), and functional, receding into the UI rather than drawing attention. The density is image-heavy, with large product visuals dominating sections and text used sparingly to frame or narrate.
