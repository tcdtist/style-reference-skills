---
version: alpha
name: ORYZO AI
description: ORYZO AI embraces a deep, textural aesthetic, contrasting rich, dark surfaces with a warm, desaturated highlight palette. Textures and a muted orange accent color punctuate the composition, creating a refined yet tactile experience. The typography, primarily a custom variable font, leans into density and slight tracking, reinforcing a sense of engineered precision. This system feels grounded and thoughtfully constructed with a focus on core product detail.
colors:
  pitch-darkness: "#100904"
  cork-dust: "#ffedd7"
  rust-accent: "#dc5000"
  olive-green: "#445231"
  faded-bark: "#382416"
  aged-stone: "#887b6d"
  light-cork: "#f6e0c6"
  faint-hazel: "#bbac97"
  subtle-moss: "#5d6c49"
  grayscale-gray: "#808080"
  chalkboard-black: "#000000"
  deep-mocha: "#40372e"
  rainbow-spectrum: "#e95000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.26
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.09
    letterSpacing: -0.018px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.09
    letterSpacing: -0.018px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1
    letterSpacing: -0.018px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.9
    letterSpacing: -0.045px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 147px
    lineHeight: 0.9
    letterSpacing: -0.045px
  display-hero:
    fontFamily: "system-ui"
    fontSize: 410px
    lineHeight: 0.9
    letterSpacing: -0.045px
spacing:
  cardRadius: 12px
  buttonRadius: 36px
  elementGap: 18px
  sectionGap: 45px
components:
  primary-action-button:
    role: Filled button
  secondary-action-button:
    role: Filled button
  ghost-button-orange-border:
    role: Outlined button
  light-ghost-button:
    role: Outlined button
  form-input-field:
    role: Input element
  invisible-badge:
    role: Informational tag
---

## Overview

**North Star:** Cork-textured midnight laboratory

ORYZO AI embraces a deep, textural aesthetic, contrasting rich, dark surfaces with a warm, desaturated highlight palette. Textures and a muted orange accent color punctuate the composition, creating a refined yet tactile experience. The typography, primarily a custom variable font, leans into density and slight tracking, reinforcing a sense of engineered precision. This system feels grounded and thoughtfully constructed with a focus on core product detail.

### Do's

- Prioritize Pitch Darkness (#100904) for all background surfaces to maintain a deep, rich foundation.
- Use Cork Dust (#ffedd7) extensively for primary text and highlights against dark backgrounds, ensuring readability and contrast.
- Employ Rust Accent (#dc5000) sparingly as a functional highlight for primary actions and key interactive elements.
- Apply halyard-display-variable for all main headings and body text, varying weights for hierarchy and using negative letter-spacing for density.
- Ensure all buttons have a 36px border-radius to consistently achieve a full pill shape.
- Maintain an 18px elementGap for consistent spacing between distinct UI elements.
- Leverage the gradients, particularly the Rainbow Spectrum, exclusively for hero sections or large, impactful visual backgrounds to create a sense of wonder and depth.

### Don'ts

- Avoid using Rust Accent (#dc5000) for large blocks of text or decorative elements, as its vibrance should be reserved for actionable focus.
- Do not introduce additional bold, saturated colors beyond Rust Accent and Olive Green; the palette relies on controlled chromatic accents.
- Do not deviate from the full pill 36px button radius; inconsistent radii will break the tactile and rounded component aesthetic.
- Avoid excessive spacing or empty canvases; the design maintains a comfortable density, particularly with tight text alignment.
- Do not use generic system fonts when halyard-display-variable and Literata are available; the custom typography is crucial to the brand's identity.
- Do not apply shadows or complex elevation to UI elements; the system prioritizes flat surfaces and subtle texture over layered depth cues.

### Layout

The page primarily uses a full-bleed, dark background model that creates an immersive canvas. The hero section often features large, centered product renders over a dark gradient background, setting an immediate, dramatic tone. Content sections beneath follow a structured, often two-column layout with text-dominant blocks offset by product visuals, maintaining a comfortable density. Vertical section spacing is consistent, without hard dividers, relying on shifts in background tone or large product imagery to delineate new content areas. Navigation is minimal: a sticky top-right menu for primary links, and a small, fixed vertical 'ORYZO + MODEL' slider on the right edge, emphasizing product exploration.

### Imagery

The site uses a mix of high-fidelity 3D product renders and abstract visual textures. Product imagery features the cork coaster as the central element, often floating or subtly angled against dark, minimal backgrounds, emphasizing its form and material. Photography is limited, focusing on high-key abstract shots of materials like cork or production-related tools, often with a slight yellow-orange tint. Iconography is minimal, using simple fills in Pitch Darkness or Cork Dust, contributing less to visual density and more to functional clarity. There are no lifestyle photos or complex illustrations; the imagery is precise, object-focused, and plays a supportive role to the core product narrative.
