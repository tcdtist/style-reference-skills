---
version: alpha
name: Afterglo
description: Afterglo employs a visual style of subtle, almost clinical minimalism overlaid with soft, muted sensuality. Its design language combines stark achromatic typography and UI elements with warm, skin-toned imagery and a single vibrant accent color. Surfaces are clean and often borderless, maintaining a spacious, uncluttered presentation. The overall impression is one of grounded, refined intimacy where visual texture comes from photography rather than heavy UI treatments.
colors:
  canvas-white: "#f3f2ec"
  deep-charcoal: "#131313"
  pure-black: "#000000"
  platinum-gray: "#e3e4df"
  faded-stone: "#cbc9bd"
  snow-white: "#ffffff"
  terra-cotta: "#f68e6d"
  sky-mist: "#7faad2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.3
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
  subheading:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 132px
    lineHeight: 0.8
spacing:
  elementGap: 4px
  sectionGap: 25px
components:
  primary-filled-button:
    role: Call to action button
  ghost-button:
    role: Secondary action or navigation
  default-card:
    role: Content container
  badge-out-of-stock:
    role: Informational label
  badge-team-fav:
    role: Highlight label
  badge-best-seller:
    role: Semantic info label
  form-input:
    role: User entry field
---

## Overview

**North Star:** Warm Minimalism

Afterglo employs a visual style of subtle, almost clinical minimalism overlaid with soft, muted sensuality. Its design language combines stark achromatic typography and UI elements with warm, skin-toned imagery and a single vibrant accent color. Surfaces are clean and often borderless, maintaining a spacious, uncluttered presentation. The overall impression is one of grounded, refined intimacy where visual texture comes from photography rather than heavy UI treatments.

### Do's

- Prioritize Canvas White (#f3f2ec) for primary backgrounds and surfaces.
- Use Deep Charcoal (#131313) for most primary button fills and strong text accents.
- Apply 5px border-radius consistently to all interactive elements, cards, and badges.
- Utilize Aeonik for readability in body and navigation, pairing it with Cardinal Fruit for impactful, decorative headlines.
- Maintain a clear elementGap of 4px for fine-grained spacing between small UI elements.
- Employ Platinum Gray (#e3e4df) for subtle visual separation, like horizontal dividers or soft borders.
- Integrate warm, neutral-toned photography to add sensuality without overwhelming the minimal UI.

### Don'ts

- Avoid using multiple accent colors; rely on Terra Cotta (#f68e6d) or Sky Mist (#7faad2) as single points of color.
- Do not use heavy shadows or gradients; subtle elevation or inset effects are preferred.
- Refrain from using strong, saturated colors for backgrounds; maintain a largely achromatic and muted palette.
- Do not introduce decorative elements that clash with the clean, minimalist aesthetic.
- Avoid excessive use of text treatments; stick to defined type scales and weights for hierarchy.
- Do not clutter layouts; ensure ample whitespace and compact component spacing.
- Avoid purely decorative icons; use icons sparingly and primarily for functional purposes.

### Layout

The page layout utilizes a contained, centered model, likely within a fluid max-width that isn't strictly fixed due to detected `null` but follows common web patterns. The hero section often features full-bleed, visually rich photography or abstract graphics acting as a background, with overlaying, large-format type. Content sections generally alternate between text-left/image-right or image-left/text-right patterns, creating a balanced visual flow. A prominent card grid system is used for product display, typically in multiple columns. Vertical spacing is consistent but compact, creating an information-rich yet breathable experience. Navigation is handled by a sticky top bar, featuring a minimal aesthetic with ghost controls and a sub-navigation menu for product categories.

### Imagery

Imagery primarily consists of high-quality, artfully composed photography featuring product shots or abstract and sensual human forms. When product-focused, they are typically tightly cropped on neutral backgrounds, highlighting texture and design. Abstract and human form photography uses muted, soft-focus, and skin-toned palettes, often with blurred elements or partial views, creating a sense of intimacy and softness. There are no explicit illustrations. Icons are minimal, outlined, and monochromatic, maintaining a clean, functional UI presence and supporting navigation rather than decorative flair. Imagery is dense, often occupying significant visual space and serving as a key textural and emotional component of the brand, contrasting with the stark UI.
