---
version: alpha
name: re_ grocery
description: re_ grocery uses a sun-baked tactile aesthetic, blending friendly serif typography with modern sans-serifs, all set against a warm, off-white canvas. A singular vibrant orange serves as the brand's energetic accent, appearing predominantly as an outline for interactive elements and as a solid background for key navigation or critical sections. The layout favors ample whitespace and clearly defined content blocks, emphasizing product-focused imagery and maintaining a focused yet approachable shopping experience.
colors:
  burnt-orange: "#f74c25"
  cream-canvas: "#f7f6f2"
  desert-sand: "#efede7"
  rich-espresso: "#000000"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.33
    letterSpacing: -0.19px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.81px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.88px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.8
    letterSpacing: -0.8px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.8
    letterSpacing: -1px
  display-hero:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 0.8
    letterSpacing: -5.94px
spacing:
  cardRadius: 1440px
  buttonRadius: 1440px
  elementGap: 10px
  sectionGap: 40px
components:
  outline-accent-button:
    role: Primary call to action and navigation in the header.
  ghost-nav-button:
    role: Navigation links and filter tags.
  cream-text-button:
    role: Navigation links against dark backgrounds.
  filled-cream-button:
    role: Subtle interactive elements contrasting against a Burnt Orange background.
  plain-product-card:
    role: Display individual product items within grids.
  callout-card:
    role: Highlight specific product groups or information with a subtle background.
  underlined-input:
    role: Email newsletter sign-up fields.
  outline-badge:
    role: Product attribute tags.
---

## Overview

**North Star:** Sun-baked Tactile Canvas

re_ grocery uses a sun-baked tactile aesthetic, blending friendly serif typography with modern sans-serifs, all set against a warm, off-white canvas. A singular vibrant orange serves as the brand's energetic accent, appearing predominantly as an outline for interactive elements and as a solid background for key navigation or critical sections. The layout favors ample whitespace and clearly defined content blocks, emphasizing product-focused imagery and maintaining a focused yet approachable shopping experience.

### Do's

- Use Burnt Orange (#f74c25) as a border or underline for interactive states and primary actions where a full-fill background would be too heavy.
- Employ the ITC Garamond W01 Book Narrow font for all prominent headlines and section titles to convey a classic yet spacious feel, specifically at weights 400 and sizes 40px, 80px, or 100px.
- Maintain a clear visual hierarchy by setting primary body text in Suisse Int'l at 15px or 16px, with a neutral Rich Espresso (#000000) color.
- Apply 1440px border-radius to all buttons, cards, and tags, creating a soft, pill-shaped aesthetic.
- Utilize Cream Canvas (#f7f6f2) as the default background for most content sections and product cards, providing a consistent base surface.
- Use tight negative letter-spacing for large display text (Suisse Int'l 180px: -0.033em, ITC Garamond 100px: -0.010em) to create impactful, visually dense typography.
- Section containers should be implicitly separated by Cream Canvas (#f7f6f2) backgrounds and generous section gaps, maintaining an open and breathable layout.

### Don'ts

- Avoid using Cream Canvas (#f7f6f2) text on a Desert Sand (#efede7) background due to insufficient contrast (1.1:1 fail).
- Do not use dark, heavy shadows; the system relies on flat surfaces and color contrast for visual separation.
- Avoid arbitrary border-radius values; always use 1440px for soft-edged elements or 0px for sharp edges, as defined by the design system.
- Do not introduce new vibrant colors outside of Burnt Orange; the palette is intentionally restrained to this single accent hue.
- Avoid dense, text-heavy blocks without ample whitespace; the design system values open layouts and clear content distinctions.
- Do not use highly saturated photography that competes with the brand's Burnt Orange; imagery should have a natural, often muted, or product-focused aesthetic.
- Avoid using generic sans-serifs for headlines; stick to ITC Garamond W01 Book Narrow for distinct brand voice in display text.

### Layout

The page employs a contained layout with a maximum width, centered on a Cream Canvas background after the initial full-bleed hero. The hero section features large, inviting serif typography centered over a warm product still-life. Content sections typically alternate between a full-width background (Burnt Orange for hero/footer-like blocks) and the Cream Canvas. Product listings use a consistent grid, often 4-column, with clean, borderless cards. Vertical rhythm is established through generous section and element gaps. Navigation is a sticky top bar with a 'Menu' and 'Order' button on either side, and a search icon.

### Imagery

The site predominantly uses product-focused photography and lifestyle imagery, typically framed in warm, natural lighting. Product shots are clean and often feature items isolated or arranged artfully with complementary props on light backgrounds or with soft focus. Lifestyle photography, when present, maintains a warm, earthy tone. Illustrations are not prominent, but iconography uses simple, filled forms in Rich Espresso or Burnt Orange. Imagery serves both decorative atmosphere and direct product showcasing, with a medium density, allowing ample space for text.
