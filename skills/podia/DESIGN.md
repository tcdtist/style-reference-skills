---
version: alpha
name: Podia
description: Podia presents a vibrant digital market stall. Its visual system layers playful, organic shapes over a soft, almost glowing white canvas. Information is presented in distinct, elevated cards with rounded corners that hint at approachability, while typography maintains a friendly confidence. A palette of muted pastels and warm earth tones, punctuated by deep near-black text and accents, creates a welcoming and engaging product-focused environment.
colors:
  ink-black: "#06040e"
  deep-ocean: "#10242f"
  crystal-canvas: "#ffffff"
  cloud-gray: "#e1edf2"
  warm-sand: "#f5f5f5"
  sky-blue: "#a5c8d8"
  lavender-mist: "#cbb0eb"
  sunset-orange: "#e39a4d"
  rich-plum: "#1f1738"
  earthy-umber: "#452623"
  light-peach: "#f6ddc4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: -0.33px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.54px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
    letterSpacing: -0.66px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.09
    letterSpacing: -1.08px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -1.8px
spacing:
  cardRadius: 56px
  buttonRadius: 16px
  elementGap: 16px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Primary Call to Action
  secondary-filled-button:
    role: Secondary Call to Action
  outlined-button:
    role: Tertiary action or alternative navigation emphasis
  hero-feature-card-sky-blue:
    role: Primary feature showcase with distinct visual identity
  hero-feature-card-sunset-orange:
    role: Primary feature showcase with distinct visual identity
  hero-feature-card-lavender-mist:
    role: Primary feature showcase with distinct visual identity
---

## Overview

**North Star:** Playful market stall atop soft-glowing white

Podia presents a vibrant digital market stall. Its visual system layers playful, organic shapes over a soft, almost glowing white canvas. Information is presented in distinct, elevated cards with rounded corners that hint at approachability, while typography maintains a friendly confidence. A palette of muted pastels and warm earth tones, punctuated by deep near-black text and accents, creates a welcoming and engaging product-focused environment.

### Do's

- Prioritize Ink Black (#06040e) for primary text and interactive outlines to maintain clarity and contrast.
- Use Crystal Canvas (#ffffff) or Warm Sand (#f5f5f5) as primary page and card backgrounds to establish a light, inviting base.
- Apply a 16px border radius to all interactive buttons for a consistent, soft touch.
- Employ the negative letter-spacing from StabilGrotesk for all headings and large text to achieve a modern, condensed appearance.
- Emphasize features using the distinct accent colors—Sky Blue (#a5c8d8), Sunset Orange (#e39a4d), and Lavender Mist (#cbb0eb)—for card backgrounds or decorative elements.
- Maintain an element gap of 16px and card padding of 16px to ensure comfortable information density.
- Utilize Ink Black (#06040e) as the background for primary call-to-action buttons, pairing it with Cloud Gray (#e1edf2) text for high contrast.

### Don'ts

- Avoid arbitrary border radii; stick to 16px for buttons, 8px for links, and 56px for prominent cards.
- Do not introduce strong, saturated colors unless they are one of the defined accent colors for feature emphasis.
- Do not use generic system fonts; StabilGrotesk is essential for maintaining the brand's typographic personality.
- Avoid heavy shadows or gradients; rely on distinct background colors and rounded corners for visual separation and depth.
- Do not stray from the defined spacing values of 16px for elements and cards, or 40px for section gaps.
- Do not use highly chromatic colors for primary body text; keep body copy in Ink Black (#06040e) or Deep Ocean (#10242f).
- Avoid using Light Peach (#f6ddc4) for backgrounds; its primary role is text on dark surfaces or icon accents.

### Layout

The page uses a maximum width containment for most content at the top, then transitions to a full-bleed layout for sections with larger cards and background elements, often with implicit centered content. The hero section features a prominent centered headline over a light background with floating, abstract shapes. Sections follow a rhythm of consistent vertical spacing, often with alternating light and slightly darker gray bands, utilizing card grids for feature showcases (typically three columns, but also two). Content often follows a text-left/image-right or image-left/text-right pattern. The primary navigation is a sticky top bar with minimal links and a clear 'Sign up free' button.

### Imagery

This site uses a mix of light, candid lifestyle photography, abstract geometric shapes, and stylized product illustrations. Photography focuses on diverse individuals with a slightly desaturated, natural tone, often cropped to a circular or organic shape. Illustrations are flat, two-dimensional, and utilize the brand's accent colors, serving as explanatory content or decorative atmosphere. Product screenshots are typically nested within abstract card designs. Icons are outlined, lightweight, and monochrome, often accompanying text for clarity. The overall density is balanced, with imagery often contained within specific card structures or as floating background graphics, complementing the UI rather than dominating it.
