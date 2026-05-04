---
version: alpha
name: Front
description: Front's visual style is a bold declaration of authority, centered around a deep, immersive purple canvas. It balances the playful energy of vibrant accents with the serious undertones of a mature B2B SaaS. The use of custom typography and deliberate shape choices—sharp corners for content containers vs. generous 40px and 64px radii for interactive elements—creates a dynamic tension, projecting a brand that is both innovative and reliable. The unique deep violet background establishes a distinct brand identity, ensuring instant recognition.
colors:
  deep-violet: "#300c41"
  accented-plum: "#5b1f76"
  primary-white: "#ffffff"
  warm-lemon: "#dee948"
  bright-lavender: "#e2dcf6"
  rich-plum: "#0d1d39"
  soft-indigo: "#d0c6f0"
  jet-black: "#1c1e20"
  clean-white: "#f0f4fe"
  vivid-grape: "#8034bf"
  mid-grey: "#5b5d63"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.067px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.003px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.015px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.019px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.1
    letterSpacing: -0.02px
spacing:
  cardRadius: 10px
  buttonRadius: 40px
  elementGap: 8-16px
  sectionGap: 32-40px
components:
  cta-button-group:
    role: 
  announcement-banner:
    role: 
  chat-widget:
    role: 
  ghost-navigation-button:
    role: Header navigation, secondary actions
  outline-button-bright-lavender:
    role: Tertiary actions, links, ghost buttons
  text-link-button:
    role: Inline text links, header links
  product-feature-card:
    role: Displaying product features or benefits
---

## Overview

**North Star:** Deep Violet Command Center. An enterprise platform that feels personal and approachable through color and shape.

Front's visual style is a bold declaration of authority, centered around a deep, immersive purple canvas. It balances the playful energy of vibrant accents with the serious undertones of a mature B2B SaaS. The use of custom typography and deliberate shape choices—sharp corners for content containers vs. generous 40px and 64px radii for interactive elements—creates a dynamic tension, projecting a brand that is both innovative and reliable. The unique deep violet background establishes a distinct brand identity, ensuring instant recognition.

### Do's

- Use Deep Violet (#300c41) as the primary background for hero sections and brand statements to establish immediate recognition.
- Apply Warm Lemon (#dee948) exclusively for primary call-to-action buttons to ensure maximum visual impact and clear user guidance.
- Prioritize Suisse Intl 500 for all headlines and Suisse Intl 400 for body text to maintain consistency and legibility.
- Implement a generous 64px border-radius for all primary CTA buttons and critical interactive inputs.
- Employ Bright Lavender (#e2dcf6) for accent text and secondary interactive elements when set against Deep Violet.
- Ensure all primary headings utilize letter-spacing of -0.01eM to -0.02em for a refined, modern presentation.
- Use Jet Black (#1c1e20) as the default text color on all lighter backgrounds like Clean White (#f0f4fe).

### Don'ts

- Do not use multiple accent colors; Warm Lemon (#dee948) is the singular energetic accent.
- Avoid using hard, sharp corners on interactive elements; prefer 40px or 64px radii for buttons and inputs.
- Do not place body text directly on Deep Violet (#300c41) or Accented Plum (#5b1f76) backgrounds; use Primary White (#ffffff) or Bright Lavender (#e2dcf6) for contrast.
- Do not deviate from the Suisse Intl font family for core UI elements and body copy.
- Avoid applying heavy shadows; use subtle inset shadows like `rgb(208, 198, 240) 0px 0px 0px 1px inset` for a soft, layered effect.
- Do not use black text on Warm Lemon (#dee948) buttons; ensure text is dark, nearly black (#1c1e20) for optimal contrast.
- Avoid using the vivid violet hues for large blocks of content; they are best reserved for accents and backgrounds for distinction.

### Layout

The page primarily uses a full-bleed layout for its hero section, featuring a deep violet background with centered, large headlines. Subsequent sections alternate between full-bleed deep violet and clean white backgrounds, providing clear visual breaks. Content within these sections is largely contained within an implicit max-width, centrally aligned. Body content typically follows a single-column stacked format, with occasional two-column layouts for features (text-left/image-right or vice-versa). Interactive elements like navigation and CTA buttons are part of a sticky header, while the chat widget floats at the bottom-right. Spacing is comfortable, leveraging a base unit of 8px for internal element gaps and larger 32-40px section padding.

### Imagery

The visual language for imagery is primarily product-focused, showcasing UI screenshots and abstract visual metaphors that illustrate specific product features. The UI screenshots are treated as distinct, slightly elevated cards with 10px corner radius, showcasing actual in-app experiences. Photography is minimal, appearing only for user avatars, suggesting a focus on the product's function rather than lifestyle. Icons are simple, outlined, and monochromatic, used descriptively to accompany text. The overall density suggests a balance between communicating complex information visually and providing breathing room for text.
