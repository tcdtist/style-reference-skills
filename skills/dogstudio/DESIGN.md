---
version: alpha
name: Dogstudio
description: This design system conjures a potent, immersive atmosphere, like a high-concept art installation bathed in twilight. Dominant deep, desaturated purplish-grays (#131419, #454856) serve as a nocturnal canvas, punctuated by the expressive, large-scale serif headlines of GT Sectra Display. Precise, widely tracked sans-serif text (Heebo, Gilroy) provides functional contrast, while a singular, vivid red (#ff4940, #e43333) acts as a fleeting, energetic accent, like a flash of neon in a darkened gallery. The tight, often zero-padded components with minimal radii reinforce a focused, almost austere presentation that places maximum emphasis on the hero imagery and typography.
colors:
  midnight-canvas: "#131419"
  ghostly-gray: "#454856"
  whisper-white: "#ffffff"
  abyssal-black: "#000000"
  twilight-indigo: "#767ca2"
  nebula-violet: "#848ab5"
  flare-red: "#ff4940"
  impact-red: "#e43333"
  shadow-gray: "#565a6b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.71
    letterSpacing: -0.44px
  heading:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 0.89
    letterSpacing: -3.35px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1
    letterSpacing: -23.04px
spacing:
  elementGap: 6px
  sectionGap: 50px
components:
  studio-description-with-social-links:
    role: 
  featured-projects-list:
    role: 
  studio-about-block-with-cta:
    role: 
  ghost-header-button:
    role: Interactive element
  navigation-badge:
    role: Passive label/link
---

## Overview

**North Star:** Twilight Gallery Vignettes. Deep, contemplative canvases showcasing bold typographic statements and ephemeral visual accents.

This design system conjures a potent, immersive atmosphere, like a high-concept art installation bathed in twilight. Dominant deep, desaturated purplish-grays (#131419, #454856) serve as a nocturnal canvas, punctuated by the expressive, large-scale serif headlines of GT Sectra Display. Precise, widely tracked sans-serif text (Heebo, Gilroy) provides functional contrast, while a singular, vivid red (#ff4940, #e43333) acts as a fleeting, energetic accent, like a flash of neon in a darkened gallery. The tight, often zero-padded components with minimal radii reinforce a focused, almost austere presentation that places maximum emphasis on the hero imagery and typography.

### Do's

- Prioritize GT Sectra Display for all major headlines to establish the brand's editorial and dramatic typographic voice, leveraging its distinctive letter-spacing.
- Use Heebo for most functional text at various weights, maintaining a tight letter-spacing of -0.02em for a slightly condensed, modern feel.
- Apply Twilight Indigo (#767ca2) or Nebula Violet (#848ab5) for all interactive text elements (links, active states) to leverage the system's subtle chromatic identity.
- Deploy Flare Red (#ff4940) sparingly for small, high-impact interactive indicators or graphic accents, never as a primary text or background color.
- Maintain a primary background of Midnight Canvas (#131419) across all main sections to ensure a consistent dark, immersive aesthetic.

### Don'ts

- Do not use generic system fonts for headlines or prominent text; the custom GT Sectra Display and widely-tracked Gilroy are essential to brand identity.
- Avoid excessive use of black (#000000) or white (#ffffff) as primary solid backgrounds, reserving them for specific component backgrounds or high-contrast utility.
- Do not introduce additional color hues or vivid saturations beyond the established palette; the dark, muted base with specific red and violet accents is key.
- Refrain from adding strong box-shadows or significant border radii; the design relies on flat surfaces and minimal rounded elements (defaulting to 0px) for its sleekness.
- Do not use widely tracked spacing with body text or functional elements; extreme letter-spacing is reserved for decorative, uppercase Gilroy text only.

### Layout

The site employs a full-bleed layout for the hero section with a centered headline and supporting text over a dramatic background visual. Subsequent sections maintain a strong vertical rhythm, with content often centered or using a text-left/visual-right pattern. The overall page model is max-width contained for textual content, but backgrounds often stretch full-width. Vertical spacing between sections is generous (implied 50px-100px range, derived from sparse data), creating a spacious and uncrowded feel. Navigation is a minimalist top-right hamburger menu, consistent across the site, with branding prominent on the top left. The page feels like a series of curated vignettes, with visual elements taking precedence over dense information blocks.

### Imagery

The visual language is characterized by complex, often surreal 3D renders that dominate hero sections, such as the prominent wolf illustration. Imagery uses a dark, moody color treatment, with blues, purples, and deep grays, often appearing semi-translucent or with ethereal light effects. These are contained within the viewport but often bleed visually into the dark background, creating an immersive, fluid experience. Decorative floating elements, like leaves or geometric lines, often accompany these main visuals, providing atmospheric detail rather than explanatory content. The imagery is art-focused and atmospheric, serving to set a mood and present a 'wow' factor rather than directly showcasing products.
