---
version: alpha
name: Homerun
description: Homerun employs a whimsical, modern aesthetic through a muted, earthy color palette punctuated by vibrant, deep blues and a playful use of soft, chunky card shadows. Typography is clean and confident, creating a comfortable information hierarchy. Components feature generous padding, organic rounded corners, and a light-hearted visual rhythm that prioritizes a friendly user experience over stark efficiency.
colors:
  canvas-white: "#ffffff"
  vanilla-cream: "#faf9f7"
  paper-beige: "#edebe7"
  warm-gray: "#736b6b"
  charcoal-coffee: "#4a3e3e"
  deep-mocha: "#2d2323"
  true-black: "#000000"
  royal-blue: "#4f75fe"
  oceanic-blue: "#c9d5fd"
  grape-punch: "#f0a8fa"
  bubblegum-pink: "#d386de"
  spring-green: "#00c275"
  rich-blue: "#4353ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.45
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.12px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.18
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 82px
    lineHeight: 1
    letterSpacing: -1.89px
spacing:
  cardRadius: 20-40px
  buttonRadius: 10-12px
  elementGap: 8px
  sectionGap: 43px
components:
  ghost-navigation-button:
    role: Secondary navigation and utility actions.
  primary-cta-button:
    role: Key conversion action.
  standard-button:
    role: General purpose buttons.
  small-text-button-with-icon:
    role: In-line actions or links within denser content.
  hero-card-with-playful-shadow:
    role: Visually appealing content blocks.
  neutral-content-card:
    role: Standard content containers, features, testimonials.
  outline-input:
    role: User input fields.
  cookie-consent-modal:
    role: Legal consent UI.
  cookie-consent-confirm-button:
    role: Action within cookie consent modal.
  hr-feature-tag:
    role: Categorization or feature highlight.
---

## Overview

**North Star:** Warm, playful professionalism with soft edges.

Homerun employs a whimsical, modern aesthetic through a muted, earthy color palette punctuated by vibrant, deep blues and a playful use of soft, chunky card shadows. Typography is clean and confident, creating a comfortable information hierarchy. Components feature generous padding, organic rounded corners, and a light-hearted visual rhythm that prioritizes a friendly user experience over stark efficiency.

### Do's

- Prioritize Royal Blue (#4f75fe) for primary actions and active states.
- Use GT Walsheim 900 for all display and large headlines, applying proportional negative letter-spacing for visual punch.
- Apply generous padding (40-60px vertical, 48-64px horizontal) to cards to create a spacious feel.
- Utilize soft, organic border radii: 20px for most cards, up to 40px for larger decorative cards, and 10-12px for buttons.
- Employ the Bubblegum Pink (#d386de) for soft, vibrant card shadows, moving away from conventional grayscale shadows.
- Maintain a clear hierarchy: Deep Mocha (#2d2323) for headlines, Charcoal Coffee (#4a3e3e) for body text, and Warm Gray (#736b6b) for muted or secondary information.
- Leverage Canvas White (#ffffff), Vanilla Cream (#faf9f7), and Paper Beige (#edebe7) for layered background surfaces.

### Don'ts

- Avoid harsh, sharp corners; all component corners should have a radius of at least 10px.
- Do not use dark, heavy shadows; opt for the light-hearted Bubblegum Pink (#d386de) shadow or no shadow.
- Do not introduce new saturated hues outside of Royal Blue (#4f75fe) or the accent purples and pinks for UI elements.
- Do not use highly dense layouts; ensure ample negative space around elements and between sections.
- Do not use generic system fonts for any text role; always use GT America or GT Walsheim (or their recommended substitutes).
- Avoid purely black text (#000000) for standard body copy; reserve it for high-contrast headlines or specific bold statements.
- Do not center-align large blocks of body text; left-align for readability.

### Layout

The page uses a contained layout with some full-bleed hero sections. Max width isn't explicitly defined visually but elements are centrally aligned. Hero sections often feature large, bold headlines centered over backgrounds, with content typically structured in alternating left-text/right-visual or right-text/left-visual blocks. Features are presented in multi-column card grids, emphasizing the soft-edged, spaced-out card components. Vertical rhythm is established through consistent section gaps and generous component padding. The primary navigation is a sticky top bar with clearly delineated sections.

### Imagery

Imagery features a mix of conceptual illustrations and product screenshots, often combined. Illustrations are abstract, feature organic shapes and are rendered in muted, brand-aligned colors. Photography, when present, tends to be tightly cropped on subjects, minimizing busy backgrounds. Icons are generally outlined, with a moderate stroke weight, and monochrome in brand colors or neutrals. Imagery serves both decorative and explanatory roles, adding a friendly and approachable feel.
