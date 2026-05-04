---
version: alpha
name: SuperHi
description: This system expresses a playful, creative energy through a vibrant, almost primary color palette paired with a functional, crisp sans-serif typography. Geometric and organic shapes in vivid hues act as visual anchors and decorative elements. The intentional use of deep, saturated blue as the primary interactive color, alongside a large, friendly radius for buttons and inputs, creates an approachable but authoritative digital learning environment.
colors:
  storm-gray: "#111118"
  canvas-white: "#ffffff"
  pale-mist: "#f0f6ff"
  electric-blue: "#2727e6"
  vivid-green: "#16ab59"
  lemon-zest: "#ffda00"
  sky-tint: "#e1edff"
  cool-aqua: "#91d8ec"
  coral-glow: "#ffbac4"
  sunset-orange: "#ff7715"
  flame-red: "#ff4141"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.35
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.22px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
    letterSpacing: -0.16px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.72px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.15
    letterSpacing: -0.7px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -0.84px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: -0.94px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1
    letterSpacing: -1.24px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.44px
  display-max:
    fontFamily: "system-ui"
    fontSize: 92px
    lineHeight: 1
    letterSpacing: -2.76px
spacing:
  buttonRadius: 32px
  elementGap: 8px
  sectionGap: 64px
components:
  hero-cta-button-group:
    role: 
  promotional-announcement-banner:
    role: 
  most-popular-section-header-with-cta:
    role: 
  primary-action-button:
    role: Call to action
  large-primary-action-button:
    role: Prominent Call to action
  text-link-button:
    role: Secondary action
  tertiary-white-button:
    role: Alternative action
  default-card:
    role: Content container
  accent-blue-card:
    role: Highlighted content container
  circular-badge-white:
    role: Small informational tag
  circular-badge-cool-aqua:
    role: Small informational tag with accent
  rounded-search-input:
    role: User input field
---

## Overview

**North Star:** Vibrant geometry on a clean canvas — a digital workshop buzzing with creative shapes.

This system expresses a playful, creative energy through a vibrant, almost primary color palette paired with a functional, crisp sans-serif typography. Geometric and organic shapes in vivid hues act as visual anchors and decorative elements. The intentional use of deep, saturated blue as the primary interactive color, alongside a large, friendly radius for buttons and inputs, creates an approachable but authoritative digital learning environment.

### Do's

- Use Electric Blue (#2727e6) for all primary call-to-action buttons and active states to maintain brand consistency.
- Prioritize `Haas Grot Disp` weight 400 with negative letter-spacing for all display-level headings to capture the system's distinctive visual tone.
- Apply the 32px or 48px border-radius to buttons and the 5000px (pill) radius for inputs and badges for a consistent soft, approachable feel.
- Leverage the full palette of accent colors (Lemon Zest #ffda00, Vivid Green #16ab59, Coral Glow #ffbac4, Cool Aqua #91d8ec) for geometric decorative shapes and illustrations to enhance visual interest.
- Maintain comfortable spacing: use 8px for `elementGap` between inline items and `cardPadding` of 16px where content is contained.

### Don'ts

- Do not use generic square buttons; always apply either a 32px, 48px, or 5000px border-radius to interactive elements.
- Avoid applying heavy drop shadows; the design relies on bold shapes and colored backgrounds for depth, not elevation effects.
- Do not use monochromatic schemes; the brand identity is built on a diverse and vivid accent color palette.
- Refrain from using system fonts like Arial or Helvetica; `Haas Grot Text`, `Haas Grot Disp`, and `Martian Mono` are critical for the brand's unique typographic voice.
- Do not use text links with underlines; use the `Text Link Button` component which typically has no decoration.

### Layout

The layout primarily uses a full-bleed structure, extending background colors and decorative elements to the viewport edges. Content is generally centered and constrained, often utilizing a single column flow. The hero section is a full-width background with a centered headline and action buttons. Sections establish a visual rhythm through alternating background colors (Canvas White, Sky Tint, Pale Mist) or distinct decorative elements. Content arrangement often features centered stacks or implicit two-column layouts where text and a visual element are horizontally aligned. Navigation is a sticky top bar with a left-aligned logo and right-aligned actions. The page maintains a comfortable density with ample breathing room between sections, emphasizing key information.

### Imagery

The visual language is characterized by bold, two-dimensional geometric and organic shapes (circles, hexagons, triangles, abstract blobs) used as decorative background elements. These shapes employ the vivid accent color palette in a full-bleed, unmasked manner. Photography is either tightly cropped product/screen captures or highly stylized, sometimes within playful mask shapes, focusing on the content being created or the interfaces. Icons are monochromatic, typically filled with Storm Gray or Canvas White, contributing to functionality rather than decoration, distinct from the large geometric shapes. Imagery serves primarily a decorative and atmospheric role, adding life and context without being overly realistic or distracting.
