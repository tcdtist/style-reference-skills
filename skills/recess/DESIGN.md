---
version: alpha
name: Recess
description: Recess evokes a playful and ephemeral calm, like floating candy clouds in a pastel sky. The visual language balances approachable softness with crisp technical legibility through the Sharp Grotesk typeface. Large, airy sections of pastel gradients and product photography create a relaxed, uncluttered feel, while the consistent use of a muted violet-blue for text and primary elements anchors the whimsical palette in a clear, trustworthy brand identity. The design uses rounded forms and soft shadows to maintain a friendly and light atmosphere.
colors:
  sky-violet: "#25385b"
  cloud-indigo: "#0a0a3a"
  lavender-mist: "#a2b0ff"
  vivid-cobalt: "#3252f4"
  candy-apple: "#ff5a5a"
  vanilla-cream: "#fffcef"
  pure-white: "#ffffff"
  jet-black: "#000000"
  starlight-gray: "#84849c"
  gradient-sky-glow-a: "#ecf5f6"
  gradient-sky-glow-b: "#a2b0ff"
  gradient-sky-glow-c: "#fbecdc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.63
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 48-80px
components:
  testimonial-cards:
    role: 
  button-group:
    role: 
  product-feature-banner:
    role: 
  ghost-icon-button:
    role: Icon-only interactive elements in headers/navigation
  outlined-text-button:
    role: Secondary action buttons, navigation items that appear button-like
  primary-accent-button:
    role: Prominent calls to action
  text-input-light:
    role: Form inputs on light backgrounds
  text-input-dark:
    role: Form inputs on dark backgrounds
---

## Overview

**North Star:** Pastel Cloud Dreamscape — like sipping an airy drink while floating amongst sweet-colored clouds on a clear day.

Recess evokes a playful and ephemeral calm, like floating candy clouds in a pastel sky. The visual language balances approachable softness with crisp technical legibility through the Sharp Grotesk typeface. Large, airy sections of pastel gradients and product photography create a relaxed, uncluttered feel, while the consistent use of a muted violet-blue for text and primary elements anchors the whimsical palette in a clear, trustworthy brand identity. The design uses rounded forms and soft shadows to maintain a friendly and light atmosphere.

### Do's

- Use Sharp Grotesk Web for all text elements, prioritizing weights 400 for body, 500 for subheadings, and 700 for headlines.
- Implement the Sky Violet (#25385b) for all primary text and calls to action when on a light background.
- Apply Lavender Mist (#a2b0ff) for primary button backgrounds and interactive highlights, paired with Sky Violet text.
- Maintain the strict use of 0px border-radius for all primary buttons and cards, creating a crisp, intentional contrast with organic product forms.
- Employ the linear-gradient(rgb(236, 245, 246), rgb(235, 235, 253), rgb(251, 206, 205)) for large background sections to establish the 'cloud dreamscape' atmosphere.
- Utilize 24px 36px padding for prominent CTA buttons to emphasize their importance and provide visual spaciousness.
- Separate interactive elements (buttons, links) with an `elementGap` of 8px for clear distinction.

### Don'ts

- Avoid using Adobe Blank for any display text; it's a structural element only.
- Do not introduce strong, dark shadows on cards or elevated components; the aesthetic is light and airy.
- Do not use highly saturated colors for large content blocks; reserve them for accents and interactive states.
- Do not deviate from the 0px border-radius unless explicitly for a circular icon or a small dot indicator (50%).
- Avoid tight spacing between sections; maintain generous vertical padding (sectionGap: 48-80px) to enhance the feeling of calm and spaciousness.
- Do not use dark backgrounds for body text; Sky Violet (#25385b) on light neutrals (#ffffff, #fffcef) is the standard.
- Refrain from introducing additional typefaces; Sharp Grotesk Web is the sole brand font.

### Layout

The page primarily uses a full-bleed structure, particularly in hero sections, with content centered. The hero pattern features a large, often gradient or photographic background with a bold, centered headline and a prominent CTA. Subsequent sections alternate between full-bleed backgrounds (gradients or solid pastel colors) and content-contained rows. Content arrangement frequently uses a centered stack for textual information, transitioning to two-column layouts for image-left/text-right feature presentations. There's a consistent, generous vertical spacing between sections, contributing to an open and spacious feel. Navigation is a sticky top bar, with prominent 'shop' and user login/cart icons.

### Imagery

The visual language is product-centric, featuring vibrant, color-rich photographs of Recess cans and powders, often with fresh fruits or natural elements. Products are typically arranged artfully, sometimes with soft, diffuse lighting or against gradient backgrounds that echo the site's pastel palette. Photography is contained within sections, not full-bleed, often complemented by abstract, soft, 3D cloud graphics that float around UI elements, adding a whimsical, dreamlike quality. Icons are minimal, either outline or filled in Sky Violet or Jet Black, maintaining a clean aesthetic. Visuals serve both decorative atmosphere and explicit product showcase functions, occupying significant visual space relative to text to convey an aspirational lifestyle.
