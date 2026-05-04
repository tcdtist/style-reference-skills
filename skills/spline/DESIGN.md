---
version: alpha
name: Spline
description: The design feels like a creative void, a deep space canvas where ideas materialize as glowing forms. An absolute black (#000000) background serves as this void, making every piece of content feel like it's emitting light. Hierarchy is achieved not through shadows or solid grays, but through layered translucency — panels and buttons are semi-transparent white overlays, creating a glassmorphism effect. The custom Spline Sans typeface is used universally at normal weights, giving headings a confident but understated presence. A single, energetic Spline Blue (#0062ff) is reserved for primary actions, acting as a focused beacon in the minimalist dark environment.
colors:
  void-black: "#000000"
  panel-sheen: "#ffffff"
  button-sheen: "#ffffff"
  bright-white: "#ffffff"
  cloud: "#cccccc"
  silver: "#999999"
  text-dim: "#ffffff"
  nav-background: "#191a1d"
  spline-blue: "#0062ff"
  neon-pink: "#ff5cab"
  golden-orb: "#ffb01f"
  violet-haze: "#a770ff"
  emerald-glow: "#47b35f"
  code-orange: "#ce9178"
  code-green: "#6a9955"
  code-blue: "#569cd6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.35
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.22
spacing:
  cardRadius: 24px
  buttonRadius: 12px
  sectionGap: 96px
components:
  cta-button-group:
    role: 
  community-showcase-cards:
    role: 
  announcement-banner-feature-card:
    role: 
  primary-cta-button:
    role: The main user call-to-action.
  secondary-button:
    role: Secondary actions, like 'Log in' or alternate CTAs.
  navigation-link:
    role: Links within the main header navigation.
  feature-card:
    role: Large cards used to detail product features or benefits.
  header-nav-bar:
    role: Persistent site navigation.
  logo-marquee-item:
    role: Displaying partner or customer logos.
---

## Overview

**North Star:** Glowing Forms in the Void

The design feels like a creative void, a deep space canvas where ideas materialize as glowing forms. An absolute black (#000000) background serves as this void, making every piece of content feel like it's emitting light. Hierarchy is achieved not through shadows or solid grays, but through layered translucency — panels and buttons are semi-transparent white overlays, creating a glassmorphism effect. The custom Spline Sans typeface is used universally at normal weights, giving headings a confident but understated presence. A single, energetic Spline Blue (#0062ff) is reserved for primary actions, acting as a focused beacon in the minimalist dark environment.

### Do's

- Use Void Black (#000000) as the universal background. Never use solid grays.
- Achieve depth and hierarchy using translucent white overlays (e.g., rgba(255,255,255,0.08)), not shadows.
- Reserve the vibrant Spline Blue (#0062ff) exclusively for primary call-to-action buttons.
- Use a 24px radius for large panels/cards and a 12px radius for buttons.
- Set all UI text, including headlines, in Spline Sans at a 400 or 500 font weight.
- Maintain generous whitespace between sections (approx. 96px) to let content breathe.
- Pair any imagery or illustrative elements with the core accent palette (Neon Pink, Golden Orb, Violet Haze).

### Don'ts

- Don't use drop shadows or box shadows for elevation.
- Don't introduce new saturated colors for UI elements beyond the primary Spline Blue.
- Don't use bold (700+) font weights; rely on size and color for typographic hierarchy.
- Don't use fully opaque gray backgrounds for any component.
- Don't use inconsistent corner radii; stick to the 12px/24px/pill system.
- Don't outline buttons or inputs with solid borders; use translucent fills instead.
- Don't place text directly on complex background imagery without a text protection scrim or overlay.

### Layout

The layout leads with a full-bleed, immersive hero section with centered text over an animated visual background. Subsequent content is contained within a centered, max-width (approx. 1280px) column. The page structure is a simple vertical stack of sections separated by generous whitespace (96px+). Content is often arranged in multi-column grids, such as the 5-column community showcase and the multi-column logo marquee, to display information densely but cleanly.

### Imagery

The visual language is split between abstract and concrete. The hero features amorphous, glowing 3D shapes that are purely atmospheric, setting a futuristic and creative tone. Below this, the imagery switches to product-focused showcases: a grid of thumbnails displaying user-generated 3D scenes and designs. All imagery serves to demonstrate the tool's capabilities, either by evoking creative possibility (abstract) or showing tangible results (showcase). There is no lifestyle photography; the product and its output are the heroes.

### Elevation

Elevation is achieved through layered glassmorphism, not shadows. Surfaces are defined by varying opacities of white (e.g., rgba(255, 255, 255, 0.08) for panels) on the pitch-black #000000 background. This creates a sense of depth through emitted light rather than cast shadow, reinforcing the 'glow in the void' aesthetic.
