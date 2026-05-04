---
version: alpha
name: Next.js Conf 2025
description: Next.js Conf 2025 presents a pragmatic, high-contrast digital canvas for technical events. Its design prioritizes clear information hierarchy and functional efficiency, using a predominantly achromatic palette punctuated by a single vibrant blue for key interactions and brand accents. Typography is compact and precise, relying on a modern sans-serif. Visual texture is introduced through subtle grid patterns and pixelated blue blocks, grounding the experience in a developer aesthetic while maintaining a professional, utilitarian feel.
colors:
  canvas-white: "#fafafa"
  text-primary: "#171717"
  text-secondary: "#4d4d4d"
  text-tertiary: "#8f8f8f"
  border-light: "#e6e6e6"
  info-background: "#e9f4ff"
  function-blue: "#0057ff"
  accent-blue: "#005ff2"
  black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.56px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.64px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -1.92px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -2.88px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -4.32px
spacing:
  cardRadius: 8px
  buttonRadius: 100px
  elementGap: 24px
  sectionGap: 64px
components:
  primary-filled-button:
    role: Main call-to-action button for initiating key actions.
  ghost-button:
    role: Secondary action or navigation buttons that should not draw primary attention.
  conference-card:
    role: Containers for content blocks like session details or speaker information.
  new-feature-badge:
    role: Highlights new or important informational elements, often associated with updates.
  navigation-link:
    role: Top-level navigation items, directing users to main sections.
  hero-section:
    role: Prominent initial content area, typically full-width and high impact.
---

## Overview

**North Star:** Pragmatic developer canvas: sharp type on white, pixel grid accents.

Next.js Conf 2025 presents a pragmatic, high-contrast digital canvas for technical events. Its design prioritizes clear information hierarchy and functional efficiency, using a predominantly achromatic palette punctuated by a single vibrant blue for key interactions and brand accents. Typography is compact and precise, relying on a modern sans-serif. Visual texture is introduced through subtle grid patterns and pixelated blue blocks, grounding the experience in a developer aesthetic while maintaining a professional, utilitarian feel.

### Do's

- Prioritize Canvas White (#fafafa) for all primary page and content backgrounds.
- Use Function Blue (#0057ff) sparingly and intentionally for primary call-to-actions and brand accents only.
- Employ Geist for all primary text content including headlines, body, and UI labels, leveraging its compact nature.
- Use Geist Mono for all technical or code-related text, and any secondary labels requiring a distinct tone.
- Maintain a clear visual hierarchy with Text Primary (#171717) for main information and progressively lighter neutrals for secondary details.
- Apply 8px border-radius to cards, images, and non-button links, and 100px to primary buttons for distinct visual weighting.
- Utilize Border Light (#e6e6e6) for all hairline dividers, card borders, and ghost button outlines to maintain a minimalist aesthetic.

### Don'ts

- Avoid using highly saturated colors beyond Function Blue (#0057ff) and Accent Blue (#005ff2) for interactive elements.
- Do not introduce heavy drop shadows or complex gradients; the system prefers flat surfaces and subtle borders.
- Do not deviate from the Geist and Geist Mono font families or their specified letter-spacing for UI elements.
- Do not create excessive visual clutter; use minimal styling and rely on spacing and typography for clarity.
- Avoid using inconsistent border radii; adhere strictly to 8px for containers and 100px/9999px for buttons/badges.
- Do not use #000000 as a primary text color where #171717 is more appropriate; reserve #000000 for specific graphic elements or absolute contrast needs.

### Layout

The page primarily uses a max-width contained layout, though the hero section can extend full-bleed. Its hero pattern features a centered headline over a background that combines grayscale photography with abstract blue pixel grid patterns. Section rhythm is driven by consistent vertical spacing (64px) between distinct content blocks, with internal element gaps typically 24px. Content is arranged in alternating text-left/image-right or text-over-image compositions, and includes multi-column grids for features and sponsorships. The navigation is a sticky, minimal top bar on a white background, featuring logo, nav links and login/CTA links.

### Imagery

This site uses a mix of candid, high-contrast portrait photography (monochromatic, sometimes with a subtle gray tint) and abstract, geometric pixelated patterns in Function Blue and neutral tones. The photography serves to humanize the speakers, while the pixel patterns add a technical, digital layer. Imagery is generally contained within sections, not full-bleed, and often integrated directly into the structured layout, acting as a visual accent rather than a dominant element. Iconography is minimalist, outlined or filled, and primarily achromatic, with occasional Accent Blue highlights.

### Elevation

The design system explicitly avoids complex shadows for elevation. Instead, visual hierarchy and separation between elements are achieved through high-contrast typography, clear outlines with Border Light (#e6e6e6), and calculated use of white space. Elevation is implied through borders or background color shifts rather than depth simulation.
