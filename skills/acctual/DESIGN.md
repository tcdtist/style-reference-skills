---
version: alpha
name: Acctual
description: Acctual is a clean, sharp accounting software interface, defined by abundant whitespace, crisp typography, and an almost entirely achromatic palette punctuated by a single vibrant teal accent. It feels like an impeccably organized digital ledger, where the strict logical layout and high contrast ensure every piece of financial data is immediately comprehensible. The signature element is the interplay of system sans-serif for secondary text with the bespoke Open Runde, creating a dual texture of approachability and structured precision.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  graphite: "#0f0f0f"
  deep-slate: "#1e1e1"
  ash-gray: "#8d8d8d"
  button-black: "#0d111b"
  sky-teal: "#0098f2"
  hot-pink: "#f200ca"
  vivid-violet: "#6d56fc"
  subtle-cream: "#f7fafc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.21
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.13
    letterSpacing: -2.368px
spacing:
  cardRadius: 20px
  buttonRadius: 100px
  elementGap: 4-24px
  sectionGap: 40-80px
components:
  hero-cta-with-feature-badges:
    role: 
  testimonial-card:
    role: 
  faq-accordion:
    role: 
  primary-action-button:
    role: Call to action, e.g. 'Create an invoice'
  navigation-link:
    role: Top navigation items
  invoice-card:
    role: Displaying invoice previews
  service-feature-list-item:
    role: Highlighting key features below hero
  small-header-button:
    role: Secondary action in header, e.g. 'Log in'
  sign-up-header-button:
    role: Primary action in header
---

## Overview

**North Star:** Architectural blueprint on white marble. Precision, clarity, and transparent flow of information.

Acctual is a clean, sharp accounting software interface, defined by abundant whitespace, crisp typography, and an almost entirely achromatic palette punctuated by a single vibrant teal accent. It feels like an impeccably organized digital ledger, where the strict logical layout and high contrast ensure every piece of financial data is immediately comprehensible. The signature element is the interplay of system sans-serif for secondary text with the bespoke Open Runde, creating a dual texture of approachability and structured precision.

### Do's

- Use '#ffffff' Canvas White as the dominant page and card background color; establish visual hierarchy through subtle shade differences like '#f7fafc' for alternating sections.
- Apply Open Runde for all main headings and body text, varying weights (400, 500, 600) and sizes according to the type scale for clear hierarchy and visual appeal.
- Employ the 100px radius for all interactive buttons and pill-shaped elements to maintain a consistent soft, approachable shape.
- Utilize Sky Teal (#0098f2) exclusively for interactive elements like links and checkmarks; avoid using it for decorative purposes to preserve its accent meaning.
- Maintain generous padding, particularly 24px and 40px for section separators and major element spacing, creating a spacious and comfortable information density.
- When emphasizing short, impactful statements or testimonials, use the Caveat font for a personalized, handwritten touch.

### Don'ts

- Do not introduce new chromatic colors beyond Sky Teal, Hot Pink, and Vivid Violet; the design strictly adheres to an achromatic base with minimal, deliberate color accents.
- Avoid box shadows for general elevation; leverage subtle background color changes (e.g., #f7fafc) or thin borders to suggest depth and separation.
- Do not use system sans-serif for headlines or prominent body text; reserve it for small, functional UI labels where its simplicity is an asset.
- Do not deviate from the established letter-spacing values for Open Runde; these are carefully calibrated for optimal legibility at different sizes.
- Avoid dense, information-heavy sections without adequate whitespace; the design's strength lies in its spacious and clear presentation.
- Do not use multiple font sizes or weights within a single line of text unless it's a clearly defined component. Maintain typographic consistency.

### Layout

The page model is a max-width 1200px centered container, creating generous margins on larger screens. The hero section features a centered headline over a white background, flanked by decorative product photography. Sections primarily follow a consistent vertical rhythm with ample spacing (40-80px), often presenting content as centered stacks or simple two-column layouts. A subtle alternating background color ('Subtle Cream') differentiates some sections. Navigation is a fixed top bar with a logo, standard links, and 'Log in'/'Sign up' buttons. Content density is comfortable, prioritizing readability and visual breathing room.

### Imagery

The site uses a mix of tightly cropped, top-down product photography featuring office supplies (paperclips, pens, keyboard snippets) on a clean white desk, serving as decorative framing for UI elements. Embedded product screenshots show the invoice interface directly, providing clear, functional examples of the software. Icons are primarily line-based, monochrome (Ink Black), with occasional small fills of the brand's accent colors (Sky Teal, Hot Pink, Vivid Violet). The imagery's role is decorative atmosphere, combined with direct product showcasing to explain functionality, rather than lifestyle or abstract concepts.
