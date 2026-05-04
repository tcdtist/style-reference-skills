---
version: alpha
name: Obsidian
description: The design feels like being inside a piece of precision software—a dark, focused digital workspace where thoughts crystallize. The foundation is a near-black, void-like background (#171717), creating a high-contrast canvas. A single, electric violet accent (#7c3aed, #a78bfa) is used strictly for interactive elements like CTAs and links, acting as functional beacons in the dark. Typography is exclusively the system's native UI font, reinforcing its identity as a functional tool rather than a stylized marketing site. Instead of drop shadows, surfaces use a subtle, 1px white inset highlight, giving them an internal luminescence as if lit from within.
colors:
  white: "#ffffff"
  bright-gray: "#eeeeee"
  medium-gray: "#bcbcbc"
  muted-gray: "#a3a3a3"
  graphite: "#3f3f3f"
  surface: "#1e1e1"
  abyss: "#171717"
  amethyst: "#7c3aed"
  lavender: "#a78bfa"
  tag-background: "#8a5cf5"
  success-green: "#4ade80"
  warning-yellow: "#facc15"
  error-red: "#f87171"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: -0.56px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.1
    letterSpacing: -1.2px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 96px
components:
  primary-cta-button-group:
    role: 
  tag-badge-collection:
    role: 
  feature-list-cards:
    role: 
  primary-cta-button:
    role: The main call-to-action button.
  secondary-ghost-button:
    role: A less prominent action, often for secondary choices like 'More platforms'.
  community-link-card:
    role: Large, clickable cards used to link to community resources.
  tag-badge:
    role: Used inside the app UI to display tags on notes.
  app-showcase:
    role: Displays the product UI directly on the page.
  app-icon:
    role: The primary brand mark and application icon.
  navigation-link:
    role: Text links in the main header navigation.
---

## Overview

**North Star:** Crystalline Knowledge Vault. A sharp, faceted digital space built for clarity and focus, with glowing violet veins of interaction.

The design feels like being inside a piece of precision software—a dark, focused digital workspace where thoughts crystallize. The foundation is a near-black, void-like background (#171717), creating a high-contrast canvas. A single, electric violet accent (#7c3aed, #a78bfa) is used strictly for interactive elements like CTAs and links, acting as functional beacons in the dark. Typography is exclusively the system's native UI font, reinforcing its identity as a functional tool rather than a stylized marketing site. Instead of drop shadows, surfaces use a subtle, 1px white inset highlight, giving them an internal luminescence as if lit from within.

### Do's

- Use the system UI font for all text to maintain the native-app feel.
- Reserve Amethyst (#7c3aed) and Lavender (#a78bfa) exclusively for interactive elements like buttons and links.
- Employ subtle 1px inset white glows for definition on dark cards and buttons.
- Maintain high contrast with light gray text (#eeeeee) on near-black backgrounds (#171717).
- Use pill-shaped radii (9999px) for tags and badges only; keep other elements sharp.
- Keep layouts centered and spacious, with generous vertical rhythm between sections.

### Don'ts

- Do not use traditional drop shadows for elevation; prefer the inset glow effect.
- Do not introduce other saturated colors into the primary UI; stick to the violet-on-dark palette.
- Do not use decorative or serif fonts; the brand identity is utilitarian.
- Do not use bright or light-themed backgrounds for primary content sections.
- Do not use large border radii on cards or buttons; stick to the 8-12px range.
- Do not use lifestyle photography; focus on the product UI as the primary visual.

### Elevation

Elevation is achieved through internal luminescence, not external shadows. Most interactive surfaces like cards and buttons feature a 1px inset white 'glow' (e.g., `rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`). This creates definition and a subtle sense of depth without making elements feel like they are floating above the surface, reinforcing the in-app, digital tool aesthetic.
