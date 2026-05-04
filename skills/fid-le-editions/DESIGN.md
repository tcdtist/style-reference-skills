---
version: alpha
name: Fidèle Editions
description: Fidèle Editions presents an analog craft workshop aesthetic: a warm off-white canvas, sturdy typography, and a single vibrant blue brand accent. Product surfaces are subtle, often borderless, letting the rich product imagery dominate. Typography combines playful, condensed headlines with robust body text, creating a tactile, hand-printed feel across the interface.
colors:
  faded-paper: "#f8f7ef"
  printmaker-blue: "#1664eb"
  shop-grid-blue: "#4f89ec"
  ink-black: "#121212"
  dusty-gray: "#e2e2df"
  pure-white: "#ffffff"
  link-blue: "#006ce5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 0.92
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 0.92
    letterSpacing: -0.99px
spacing:
  elementGap: 5px
  sectionGap: 42px
components:
  outlined-brand-link:
    role: Hypertext link or navigation item with an underline.
  ghost-command-button:
    role: A utility button designed for low hierarchy actions or page navigation (e.g. 'Skip to content').
  filled-footer-button:
    role: A solid background button for secondary actions usually against dark backgrounds (e.g. newsletter subscribe).
  product-input-field:
    role: Input fields for forms (e.g. search, email).
  header-nav-link:
    role: Primary navigation items in the header.
  product-listing-card:
    role: Container for individual product items in a grid.
---

## Overview

**North Star:** Risographic print workshop: layers of paper and ink, tactile and vibrant.

Fidèle Editions presents an analog craft workshop aesthetic: a warm off-white canvas, sturdy typography, and a single vibrant blue brand accent. Product surfaces are subtle, often borderless, letting the rich product imagery dominate. Typography combines playful, condensed headlines with robust body text, creating a tactile, hand-printed feel across the interface.

### Do's

- Use 'Faded Paper' (#f8f7ef) as the primary page background to maintain the consistent paper-like canvas.
- Apply 'Printmaker Blue' (#1664eb) selectively for interactive text, primary links, and accent borders to ensure it remains a potent visual highlight.
- For headlines, prioritize 'OTMagisterUnlicensedTrial Regular' at 62px, 'BaselGrotesk Book' or 'BaselGrotesk Regular' at larger sizes (32px, 41px), employing negative letter-spacing for impact.
- Structure content using defined element gaps: 5px for close internal elements, 19px for card padding, and 42px for distinct section breaks.
- Maintain zero border radius across all UI elements (buttons, inputs, cards) to preserve the sharp, print-inspired aesthetic.
- When displaying product imagery, ensure it is unmasked and contained, allowing the product itself to be the central visual focus.

### Don'ts

- Avoid using gradients or drop shadows as primary visual cues; the design relies on flat colors and distinct typography.
- Do not introduce additional saturated colors; restrict the palette to primary brand blue, neutrals, and incidental chromatic link colors to maintain focus.
- Refrain from using 'Arial' for prominent headings or marketing copy; reserve it for utility text or smaller functional elements.
- Do not set border-radius on any component; the site's aesthetic is characterized by sharp, defined edges.
- Avoid heavy borders or solid backgrounds on informational cards or product listings; maintain an open, airy feel with minimal visual clutter.
