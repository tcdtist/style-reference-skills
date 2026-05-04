---
version: alpha
name: Railway
description: The design system feels like a tranquil night journey on a futuristic train. It operates in a deep, near-black space (#13111c), punctuated by a single, focused accent of cosmic lilac (#553f83) for primary actions, creating a calm yet confident mood. Large, elegant serif headlines (IBM Plex Serif) provide a literary, almost classic authority that contrasts with the clean, utilitarian sans-serif (Inter) used for the UI. Elevation is achieved through subtle surface shifts and fine borders (#33323e) rather than shadows, reinforcing a flat, technical aesthetic. The signature element is the painterly, atmospheric hero illustration, which establishes a peaceful, imaginative tone that subverts typical dev-tool intensity.
colors:
  deep-space: "#13111c"
  surface: "#1a191f"
  crater: "#33323"
  black-hole: "#0d0c14"
  starlight: "#f7f7f8"
  starlight-dim: "#d0cfd2"
  comet: "#a1a0ab"
  asteroid: "#868593"
  cosmic-lilac: "#553f83"
  supernova: "#a05fcf"
  nebula-haze: "#bf92ec"
  warp-drive-glow: "#a05fcf"
  success: "#42946"
  error: "#d82c20"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: -0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.09px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.72px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.12
    letterSpacing: -1.94px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 96-160px
components:
  cta-button-group:
    role: 
  deployment-success-toast-tab-bar:
    role: 
  testimonial-cards:
    role: 
  primary-cta-button:
    role: The main call-to-action, like 'Deploy →'.
  secondary-button:
    role: Secondary actions, like 'Demo'.
  navigation-link:
    role: Header and footer navigation items.
  logo-grid-card:
    role: Container for customer logos in the 'Trusted by' section.
  product-ui-tab:
    role: Navigation within the product UI demo.
  success-toast:
    role: A small notification for successful operations.
  log-line-item:
    role: A single line in the product's log viewer.
---

## Overview

**North Star:** Cosmic Midnight Express. A calm, powerful journey through a dark, starlit environment, guided by clear signals.

The design system feels like a tranquil night journey on a futuristic train. It operates in a deep, near-black space (#13111c), punctuated by a single, focused accent of cosmic lilac (#553f83) for primary actions, creating a calm yet confident mood. Large, elegant serif headlines (IBM Plex Serif) provide a literary, almost classic authority that contrasts with the clean, utilitarian sans-serif (Inter) used for the UI. Elevation is achieved through subtle surface shifts and fine borders (#33323e) rather than shadows, reinforcing a flat, technical aesthetic. The signature element is the painterly, atmospheric hero illustration, which establishes a peaceful, imaginative tone that subverts typical dev-tool intensity.

### Do's

- Use IBM Plex Serif exclusively for display-level headlines to create a sophisticated, literary feel.
- Rely on surface color shifts (`Deep Space` page, `Surface` cards) and 1px `Crater` borders for elevation.
- Reserve the `Cosmic Lilac` color for primary, high-value calls to action.
- Incorporate the atmospheric, painterly illustration style for hero sections to set the mood.
- Maintain generous vertical spacing (96px+) between content sections for a calm, spacious rhythm.
- Use a subtle grid pattern on the background of key container cards like testimonials.
- Ensure all interactive elements have a clear focus state, typically using `Supernova` (#a05fcf) as a highlight border or ring.

### Don'ts

- Don't use traditional box-shadows. The system's depth comes from color and borders.
- Don't use serif fonts for body copy, buttons, or any UI controls.
- Don't use the brand purples for large blocks of text.
- Don't make layouts feel dense or rushed. Prioritize breathing room.
- Don't use bright, saturated colors outside the defined purple accent and semantic palette.
- Don't use photography, especially lifestyle photos. The visual language is illustrative and product-focused.
- Don't create buttons or cards with sharp corners; use the established `8px` and `12px` radii.

### Layout

The layout is governed by a centered, max-width container of 1280px. It opens with an immersive, full-bleed hero featuring a large atmospheric illustration that sets a calm, imaginative tone. Subsequent content sections are contained within the max-width, separated by generous vertical spacing (96px+), creating a spacious, unhurried rhythm. The structure is largely composed of centered headline stacks, followed by multi-column grids for testimonials (3-column) and partner logos. This creates a clear, hierarchical flow from broad statements to specific proof points.

### Imagery

The visual language is defined by a dichotomy. Atmospheric, painterly illustrations with a lofi, dreamy quality dominate the hero and background elements, establishing a unique, non-corporate mood. These are juxtaposed with clean, unadorned product UI screenshots which anchor the site in its technical reality. Customer logos are presented simply on contained cards. There is no lifestyle photography; the focus is on the abstract mood and the concrete product. Icons are minimal, likely line-based, and used for functional UI rather than decoration.

### Elevation

Elevation is achieved primarily through layered surfaces using distinct background colors and fine 1px borders, not traditional drop shadows. The system uses a progression like Deep Space (#13111c) for the page, Surface (#1a191f) for cards, and an inset white highlight (`rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`) on interactive elements. This creates a flat, technical, yet deep interface where layers are defined by light and color, not shadow.
