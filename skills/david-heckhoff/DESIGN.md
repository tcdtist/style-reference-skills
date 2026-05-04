---
version: alpha
name: David Heckhoff
description: This system expresses a playful, modern web developer's environment, characterized by soft, warm neutrals as a canvas for bold, single-hue accents. Typographical hierarchy is established through variable font weights and generous line heights, rather than drastic size shifts. Immersive 3D iconography sets a distinct tone, further solidified by a strong orange action color that adds an energetic, 'get-it-done' feel. Components prioritize rounded forms and minimal, subtle outlining, echoing the friendly nature of the primary visuals.
colors:
  canvas-beige: "#f5efe6"
  mid-tone-beige: "#e9ded0"
  deep-mocha: "#2d2a24"
  muted-stone: "#5f5646"
  light-linen: "#dfd2bf"
  polar-mist: "#e1f5ff"
  true-white: "#ffffff"
  vibrant-orange: "#ff8400"
  electric-blue: "#34bfff"
  hologram-top: "#003585"
  hologram-bottom: "#005291"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0.24px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: 0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: 0.36px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.11
    letterSpacing: 0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1.09
    letterSpacing: 0.37px
spacing:
  cardRadius: 16px
  buttonRadius: 100px
  elementGap: 18px
  sectionGap: 48px
components:
  navigation-link-ghost:
    role: Header and footer navigation items.
  primary-action-button:
    role: Key calls to action.
  subtle-round-button:
    role: Small, functional buttons like language selectors.
  outlined-ghost-button:
    role: Secondary action or navigational buttons.
  feature-card:
    role: Containers for project listings or information blocs.
  section-header:
    role: Large, prominent titles for content sections.
  accent-tag:
    role: Small descriptive labels under headings.
---

## Overview

**North Star:** Warm canvas, playful 3D

This system expresses a playful, modern web developer's environment, characterized by soft, warm neutrals as a canvas for bold, single-hue accents. Typographical hierarchy is established through variable font weights and generous line heights, rather than drastic size shifts. Immersive 3D iconography sets a distinct tone, further solidified by a strong orange action color that adds an energetic, 'get-it-done' feel. Components prioritize rounded forms and minimal, subtle outlining, echoing the friendly nature of the primary visuals.

### Do's

- Prioritize Canvas Beige (#f5efe6) for page backgrounds to maintain the warm, inviting base.
- Use Vibrant Orange (#ff8400) exclusively for primary call-to-action button backgrounds to preserve its impact.
- Apply `border-radius: 100px` to all buttons for a consistent pill-shaped aesthetic.
- Employ the Urbanist font family for all primary UI text, adjusting weights to establish hierarchy rather than relying solely on size.
- Maintain an `elementGap` of 18px between elements within components for comfortable density.
- When introducing new 3D elements, integrate Electric Blue (#34bfff) or the Hologram Gradient to tie into the existing technical visual language.
- Ensure headings use a slightly condensed `letterSpacing` (e.g., 0.37px at 88px) to feel composed.

### Don'ts

- Avoid using saturated background colors other than Canvas Beige (#f5efe6), Mid-Tone Beige (#e9ded0), or Light Linen (#dfd2bf) for large surface areas.
- Do not introduce new border radii beyond 100px, 16px, 24px, or 12px to maintain geometric consistency.
- Refrain from using Vibrant Orange (#ff8400) for decorative purposes or secondary text; it must signal primary interaction.
- Do not use highly contrasting or dark backgrounds unless it's for a specific immersive 3D experience with its own contained color scheme.
- Avoid generic icon styles; instead, prefer the 3D illustrative style seen on the site to reinforce brand identity.
- Do not use generic system fonts; always utilize Urbanist or ProFontWindows to maintain typographical distinctiveness.
- Do not make buttons purely square or with sharp corners; always apply significant `border-radius`.

### Layout

The page primarily uses a contained layout with a maximum width, centered on a Canvas Beige background. The hero section is visually striking, often featuring a large, immersive 3D illustration dominating the upper fold, potentially with a full-bleed effect on transitions. Sections maintain a consistent vertical rhythm, with `sectionGap` of 48px, and often alternate content Left/Right with visuals. Content is frequently arranged in centered stacks for headings and short descriptions, transitioning to multi-column grids (like a 3-column card grid for projects) for feature presentation. The navigation is a classic top bar, often sticky or revealed on scroll, featuring ghost links and a prominent Primary Action Button. The overall density feels comfortable and spaced out, allowing the detailed 3D elements to breathe.

### Imagery

The site heavily features bespoke 3D illustrations, often appearing as hero elements or embedded within sections. These illustrations are volumetric, rendered with soft, diffused lighting and rounded, stylized forms, often depicting work-from-home setups or abstract representations of digital activity. Colors within the illustrations often align with the brand's accent colors (Electric Blue, Hologram gradients) and the warm neutral base. Photography is absent; the visual identity is driven purely by crafted 3D graphics. Icons are also stylized, generally outlined or subtly filled to match the illustrative aesthetic. Imagery is the primary content, often taking full width or large portions of the screen, serving a decorative and explanatory role to set a playful, high-tech atmosphere rather than product showcase.
