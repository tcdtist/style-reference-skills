---
version: alpha
name: Klarna
description: This design system feels like a friendly, yet sophisticated, financial advisor — welcoming and trustworthy. It achieves this through a vibrant, playful pink accent ('Bubblegum Pop') against a deep 'Midnight Plum' background in hero sections and a clean, accessible light gray elsewhere. The strategic use of large, rounded corners on buttons ('Pill Button') and cards ('Soft Square Card') softens the interface, making financial tools feel less intimidating. Headline typography is a signature element: 'Klarna Title' at heavy weights creates a bold, almost assertive voice, balanced by the friendly curvature of the other elements.
colors:
  midnight-plum: "#0b051d"
  bubblegum-pop: "#ffa8cd"
  candy-floss: "#ffd0e2"
  amethyst: "#2c2242"
  lavender-mist: "#aa89f2"
  mint-leaf: "#e6ffa9"
  off-white-canvas: "#f9f8f5"
  pure-white: "#ffffff"
  stone-gray: "#e2e2e7"
  medium-gray: "#615f6d"
  dark-gray: "#373544"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.003px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.003px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: -0.003px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.003px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.06
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1.05
spacing:
  cardRadius: 16px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 48px
components:
  payment-options-cards:
    role: 
  feature-cards-grid:
    role: 
  app-rating-cta-banner:
    role: 
  pill-accent-button:
    role: Primary Call to Action
  ghost-border-button:
    role: Secondary Action
  pill-border-button:
    role: Tertiary / Navigation Action
  default-card:
    role: Content Container
  vibrant-card-amethyst:
    role: Showcasing Diverse Content
  vibrant-card-lavender-mist:
    role: Showcasing Diverse Content
  vibrant-card-mint-leaf:
    role: Showcasing Diverse Content
  text-input-default:
    role: User Data Entry
---

## Overview

**North Star:** Friendly finance. A vibrant pink against deep violet, like a surprising bloom in a nighttime garden.

This design system feels like a friendly, yet sophisticated, financial advisor — welcoming and trustworthy. It achieves this through a vibrant, playful pink accent ('Bubblegum Pop') against a deep 'Midnight Plum' background in hero sections and a clean, accessible light gray elsewhere. The strategic use of large, rounded corners on buttons ('Pill Button') and cards ('Soft Square Card') softens the interface, making financial tools feel less intimidating. Headline typography is a signature element: 'Klarna Title' at heavy weights creates a bold, almost assertive voice, balanced by the friendly curvature of the other elements.

### Do's

- Always use 'Midnight Plum' (#0b051d) for primary headings and important text on light backgrounds to maintain brand authority.
- Apply 'Bubblegum Pop' (#ffa8cd) for all primary call-to-action buttons to ensure maximum visibility and encourage clicks.
- Maintain a 100px radius for all CTA buttons and a `999px` radius for tertiary pill buttons to create a consistent soft, approachable aesthetic.
- Utilize 'Off-White Canvas' (#f9f8f5) for main page backgrounds and secondary card surfaces to provide a clean, readable base.
- Employ `Klarna Title` font with weights 500-700 for all large headlines, providing a bold, direct brand voice.
- Use 32px as the standard padding within card components to ensure generous content spacing.

### Don'ts

- Do not use highly saturated colors for large text blocks; reserve them for interactive elements or accents.
- Avoid using hard-edged rectangles for content cards; always feature a 16px or 24px border-radius to maintain approachability.
- Never combine more than three vibrant card background colors (Amethyst, Lavender Mist, Mint Leaf) in close proximity to prevent visual clutter.
- Do not vary letter-spacing for `Klarna Title` or `Klarna Text` unless explicitly defined; use the specified values like `-0.0100em` where applicable.
- Avoid shadows on default content cards; only use the specified subtle shadow (rgba(0,0,0,0.1) 0px 2px 4px 0px) on elevated, vibrant cards.
- Do not use dark backgrounds for main content sections; reserve 'Midnight Plum' for hero or impactful introductory blocks.

### Layout

The layout is primarily max-width contained, centered on the page, creating a structured and focused experience. The hero section is full-bleed, using a dark 'Midnight Plum' background with bold, centered 'Klarna Title' typography on the left and a prominent product visual on the right. Subsequent sections alternate between feature blocks with text-left/image-right or image-left/text-right arrangements. There's a 4-column card grid used for showcasing different service aspects, with each card featuring unique vibrant background colors. The rhythm between sections is consistent, typically separated by 48px, lending a spacious and readable flow. The header is a sticky top navigation bar.

### Imagery

The visual language mixes product-centric photography with abstract, brand-colored graphics. Photography features close-up, cropped shots of a hand holding a mobile phone displaying the Klarna app, with a subtle glow or atmospheric lighting. The treatment is focused on showcasing functionality, not lifestyle. Illustrations use a flat, almost ethereal style, with soft gradients of brand colors. Icons are outlined, simple, and mono-color, typically 'Midnight Plum' on light backgrounds. The density is moderate; imagery serves to illustrate features rather than purely decorate, with a balance between visual elements and descriptive text.
