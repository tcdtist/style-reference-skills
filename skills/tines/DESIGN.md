---
version: alpha
name: Tines
description: Tines uses a playful, vibrant UI that combines a dominant violet backdrop with a spectrum of soft, pastel-colored cards and a handful of vivid accent colors. Typography mixes a quirky geometric sans-serif for body text with a serif display font for headlines, creating an unexpected but engaging contrast. The system emphasizes clear information hierarchy through distinct, colorful card surfaces, thin borders, and ample internal padding, all within a spacious, contained layout that feels organized yet energetic.
colors:
  tines-violet: "#4d3e78"
  deep-sea-violet: "#6956a8"
  lavender-mist: "#7f69ce"
  periwinkle-accent: "#a990f5"
  light-orchid: "#c2aafa"
  powder-violet: "#d7c4fa"
  bubblegum-pink: "#a54b7a"
  sunset-orange: "#b74d1a"
  forest-green: "#1f7a57"
  sky-blue: "#3c699b"
  peach-zest: "#fd975d"
  pine-green: "#195642"
  action-violet: "#745fbb"
  alabaster: "#ffffff"
  vanilla-cream: "#fcf9f5"
  light-lilac: "#f3ecf7"
  pale-mint: "#e9f3e7"
  card-lavender: "#e1d2f9"
  card-blue: "#ccdcf8"
  card-peach: "#ffdcb6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
spacing:
  cardRadius: 14px
  buttonRadius: 14px
  elementGap: 12px
  sectionGap: 42-64px
components:
  primary-filled-button:
    role: Main call-to-action button, solid background.
  outline-ghost-button:
    role: Secondary action or navigational link with minimal visual weight.
  circular-dot-button:
    role: Small interactive elements or highlights, often containing iconography.
  colorful-testimonial-card:
    role: Highlights customer testimonials or key statistics with a distinct background hue.
  navigation-link:
    role: Main navigation items and inline links.
  cookie-consent-banner:
    role: Persistent notification at the bottom of the screen.
  small-round-icon-button:
    role: Compact interactive icon, often used in product UIs or feature lists.
  product-snapshot-panel:
    role: Detailed product UI elements shown in screenshots.
---

## Overview

**North Star:** Playful violet canvas, pastel cards

Tines uses a playful, vibrant UI that combines a dominant violet backdrop with a spectrum of soft, pastel-colored cards and a handful of vivid accent colors. Typography mixes a quirky geometric sans-serif for body text with a serif display font for headlines, creating an unexpected but engaging contrast. The system emphasizes clear information hierarchy through distinct, colorful card surfaces, thin borders, and ample internal padding, all within a spacious, contained layout that feels organized yet energetic.

### Do's

- Prioritize Tines Violet (#4d3e78) as the primary background for sections and main call-to-action buttons.
- Use Alabaster (#ffffff) for all primary text on darker backgrounds and as button text, ensuring high contrast.
- Apply Reckless font for headlines at larger sizes (e.g., 52px, 64px) with negative letter-spacing (e.g., -0.020em) to create a distinct, impactful display.
- Utilize Roobert font for all body text and UI elements, opting for weights 400 and 500 for readability.
- Construct multi-color card layouts using the pastel range of Card Lavender (#e1d2f9), Card Blue (#ccdcf8), Card Peach (#ffdcb6), Card Pink (#ffcee2), and Card Sage (#c4e7cb) to add visual interest and segmentation.
- Maintain a generous border-radius of 14px for all cards and primary buttons to ensure a consistent soft, approachable shape.
- Use 24px as the standard internal padding for cards and primary content blocks to provide ample breathing room.

### Don'ts

- Avoid using flat black text (#000000) on white backgrounds; instead, use slightly desaturated dark grays if a darker text is needed on light surfaces.
- Do not introduce strong, saturated accent colors that deviate from the established violet, orange, green, and blue pastel palette.
- Refrain from heavy, dark drop shadows; prefer subtle elevation via borders and slight background shifts.
- Do not use generic sans-serif fonts for headlines; always use Reckless to preserve the brand's unique typographic voice.
- Avoid tight letter-spacing for body text; Roobert should generally use positive or normal letter-spacing, unlike the display font.
- Do not break the 14px border-radius standard for cards and main buttons, unless specifically designing a micro-component with a 7px radius.

### Layout

The page primarily uses a max-width 1200px centered content container. The hero section is full-bleed across the viewport, featuring a large centered headline against a Tines Violet background with subtle abstract overlay graphics. Sections alternate with consistent vertical spacing, often showcasing two-column layouts with text on one side and an illustrative graphic or product screenshot on the other. Feature grids are prominent, using multiple pastel-colored cards arranged in responsive columns. Navigation is a sticky top bar with a deep plum background, containing brand logo, menu items, and primary action buttons.

### Imagery

The visual language for imagery is characterized by highly stylized, abstract illustrations with a 3D isometric perspective, using a vibrant brand-aligned color palette (Bubblegum Pink, Sunset Orange, Forest Green). Icons are simple, outlined, and monochromatic, often using accent colors like Periwinkle Accent. Product screenshots are a core component, showing complex nodal workflows and UI elements, frequently presented as floating or layered panels against the brand's violet backgrounds. Imagery serves both decorative atmosphere and explanatory content, emphasizing the platform's intelligent automation capabilities. The density is image-heavy, with illustrations and product UI mockups occupying significant visual space.
