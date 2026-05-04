---
version: alpha
name: Cal.com
description: The design feels like a pragmatic, high-precision instrument. It's built on a strict and disciplined monochrome palette of black, white, and echelon grays, where color is intentionally excluded from the core UI to emphasize function. The custom font, 'Cal Sans', defines the visual identity with its geometric yet open letterforms, giving headlines a technical but approachable character. Nearly all interactive elements are either solid black or pill-shaped outlines, creating a binary system of action. Cards are the fundamental building block, using soft 8-12px radii and extremely subtle shadows to create a quiet, layered topology on a light gray background.
colors:
  ink: "#101010"
  action-blue: "#0099ff"
  white: "#ffffff"
  paper: "#f4f4f4"
  graphite: "#242424"
  slate: "#6b7280"
  stone: "#898989"
  silver: "#e5e7eb"
  info-banner-bg: "#eff6fe"
  google-blue: "#4285f4"
  google-yellow: "#fbbc04"
  google-green: "#34a853"
  google-red: "#ea4335"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: -0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.2px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.19px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: 0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
    letterSpacing: 0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: 0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: 0.64px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px (pills), 8px (rectangular)
  sectionGap: 96px
components:
  compliance-info-banner:
    role: 
  how-it-works-feature-cards:
    role: 
  testimonial-card:
    role: 
  primary-cta-button:
    role: The main call-to-action on the page.
  secondary-ghost-button:
    role: A secondary call-to-action, often next to the primary.
  header-cta-button:
    role: The main call-to-action in the sticky header.
  tag-button:
    role: Small, non-critical buttons for categorizing or filtering content.
  scheduling-widget-card:
    role: The hero component showcasing the product's core functionality.
  navigation-link:
    role: Links in the main site header.
---

## Overview

**North Star:** Monochrome Utility, Human Touch. A system that prioritizes clarity and function with a stark black-and-white palette, but softens it with friendly typography and rounded forms.

The design feels like a pragmatic, high-precision instrument. It's built on a strict and disciplined monochrome palette of black, white, and echelon grays, where color is intentionally excluded from the core UI to emphasize function. The custom font, 'Cal Sans', defines the visual identity with its geometric yet open letterforms, giving headlines a technical but approachable character. Nearly all interactive elements are either solid black or pill-shaped outlines, creating a binary system of action. Cards are the fundamental building block, using soft 8-12px radii and extremely subtle shadows to create a quiet, layered topology on a light gray background.

### Do's

- Use 'Cal Sans' weight 600 exclusively for headings (size 20px and above).
- Employ a strict monochrome palette (Ink, Graphite, Slate, Paper, White) for 99% of the UI.
- Use pill-shaped buttons (9999px radius) for all primary and secondary page CTAs.
- Apply a 12px border radius to all content cards and large containers.
- Use subtle, diffuse shadows (`rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`) for elevation.
- Set body copy in 'Cal Sans UI Variable Light' with tight negative letter-spacing.
- Reserve the single 'Action Blue' (#0099ff) for secondary links or informational highlights.

### Don'ts

- Do not introduce any new colors to the core UI; confine color to logos and the single blue accent.
- Do not use sharp corners on buttons or cards.
- Do not use font weights heavier than 600.
- Do not use traditional outlined buttons; use either solid 'Ink' or 'ghost' pill buttons.
- Do not use gradients on any buttons or card backgrounds.
- Do not use borders on cards; use shadows for separation.
- Do not set body text in 'Cal Sans'; it is for headlines only.

### Layout

The site uses a centered layout within a max-width of 1200px, creating generous breathing room on either side. Sections are clearly demarcated by 96px of vertical space, establishing a calm, deliberate rhythm. The hero combines a large headline stack with a prominent product UI visual. Content below follows a predictable pattern of centered headlines followed by 3-column feature card grids or alternating text-and-visual blocks. This simple, highly structured approach emphasizes clarity and ease of navigation.

### Imagery

The visual language is entirely product-centric and informational. Imagery consists solely of clean, isolated product UI screenshots and the logos of integration partners. There is no lifestyle photography, illustration, or abstract graphics. This choice reinforces the brand's focus on its functional capabilities, letting the product itself be the hero. All visual elements are presented within contained cards, never full-bleed, maintaining the page's orderly, grid-based structure.
