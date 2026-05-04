---
version: alpha
name: Vimeo
description: Vimeo's design system evokes a digital atelier: functional, content-focused, and subtly expressive. A dominant dark gray canvas anchors the experience, punctuated by a vivid, cool teal accent that signifies interactivity and brand presence. Typography is compact and precise, establishing clear hierarchy without visual fanfare. Components are lightweight with softened corners, relying on shifts in neutral tones rather than heavy shadows or borders.
colors:
  midnight-graphite: "#141a20"
  cloud-canvas: "#fafcfd"
  ash-gray: "#23313b"
  steel-gray: "#3d4751"
  slate-blue: "#4c5864"
  light-mist: "#dfe4ea"
  cosmic-teal: "#17d5ff"
  deep-teal: "#13b1d4"
  overlay-shadow: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: -0.03px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.03px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.35
    letterSpacing: -0.03px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.03px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.14
    letterSpacing: -0.036px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.05px
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 56px
components:
  primary-action-button:
    role: High-emphasis interactive element
  ghost-button:
    role: Secondary action or navigation
  text-link-button:
    role: Tertiary action or inline navigation
  transparent-card:
    role: Informational grouping on hero/dark sections.
  light-surface-card:
    role: Default informational grouping on light sections.
  dark-surface-card:
    role: Default informational grouping on dark sections.
  new-feature-badge:
    role: Indicator for new features/content.
  nav-button:
    role: Top-level navigation item
---

## Overview

**North Star:** Digital Atelier

Vimeo's design system evokes a digital atelier: functional, content-focused, and subtly expressive. A dominant dark gray canvas anchors the experience, punctuated by a vivid, cool teal accent that signifies interactivity and brand presence. Typography is compact and precise, establishing clear hierarchy without visual fanfare. Components are lightweight with softened corners, relying on shifts in neutral tones rather than heavy shadows or borders.

### Do's

- Use Cosmic Teal (#17d5ff) for primary call-to-action buttons to ensure immediate visibility and signify interactive elements.
- Employ Midnight Graphite (#141a20) as the default text color on light backgrounds and Cloud Canvas (#fafcfd) for text on dark backgrounds to ensure high contrast.
- Apply ABCRepro with a letter-spacing of -0.0500em to all display-level headings (72px) to enhance visual density and distinctiveness.
- Maintain a compact element spacing of 8px (elementGap) between inline components and form elements to create a dense, functional interface.
- Round corners of interactive elements such as buttons and cards to 12px, creating a friendly and approachable feel.
- Utilize Cloud Canvas (#fafcfd) as the universal base background for default page sections and light content areas.
- Ensure all numbers use the "lnum" font feature setting for consistent monospaced tabular figures.

### Don'ts

- Avoid using saturated colors other than Cosmic Teal or Deep Teal for primary interactive elements; color should primarily be used for brand distinction, not excessive decoration.
- Do not introduce heavy shadows or strong borders for cards; rely on shifts in background tone (e.g., Midnight Graphite, Cloud Canvas, Light Mist) or subtle transparency to define surface layers.
- Refrain from using more than two levels of text hierarchy within a single content block to prevent overwhelming the user; prioritize clarity with body, subheading, and heading roles.
- Do not use letter-spacing values more open than -0.0300em for body text; the system maintains a compact, precise typographic rhythm.
- Avoid arbitrary border radii; adhere to the 12px for cards and buttons, 16px for large badges, and 8px for smaller interactive elements.
- Do not use pure white (#FFFFFF) or pure black (#000000) for primary canvas or text unless specifically for contrast in isolated components (e.g., specific icons); always favor the nuanced neutrals like Cloud Canvas and Midnight Graphite.
- Do not create hero sections that are full-bleed white backgrounds; hero sections should leverage background imagery or dark neutral tones with strong typography.

### Layout

The page primarily uses a max-width contained layout, centering content at approximately 1200px. The hero section breaks this containment by featuring a full-bleed dark background with a large, centered headline and subtext. Sections alternate between light (Cloud Canvas) and dark (Midnight Graphite) backgrounds, creating a distinct vertical rhythm. Content is generally arranged in centered stacks or two-column text-left/image-right patterns, with emphasis on clear visual hierarchy. Spacing between sections is generous, around 56px. Navigation is a sticky top bar with minimal styling.

### Imagery

The imagery strategy features high-resolution photography primarily focused on human interaction with digital devices, specifically hands typing on keyboards or using cameras. Product screenshots are integrated contextually. All visuals are contained within the layout, often appearing as large background elements in hero sections with dark overlays. There is an absence of abstract illustrations or 3D renders. Icons are minimal, predominantly line-based, and monochrome, integrating seamlessly into the UI rather than asserting strong visual identity.
