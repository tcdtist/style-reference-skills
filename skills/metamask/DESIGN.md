---
version: alpha
name: Metamask
description: MetaMask uses a playful, vibrant aesthetic that blends bold, chunky typography with a soft, almost pastel base. The design system is characterized by its liberal use of rounded corners and borders, creating a soft and approachable feel. Despite the occasional highly saturated accents and primary purple, the overall presentation remains light due to a dominant pale pink canvas. Gradients on interactive elements contribute to a friendly, dynamic visual system.
colors:
  pale-canvas: "#fff1eb"
  ghost-white: "#ffffff"
  pitch-black: "#0a0a0a"
  slate-gray: "#e9edf6"
  dusty-teal: "#013330"
  phantom-gray: "#393d46"
  lavender-bloom: "#eac2ff"
  electric-violet: "#3d065f"
  sunlit-lime: "#e5ffc3"
  sunset-orange: "#ffa680"
  fire-opal: "#661800"
  cosmic-indigo: "#190066"
  royal-amethyst: "#d075ff"
  sky-glaze: "#cce7ff"
  oceanic-blue: "#89b0ff"
  vivid-green: "#baf24a"
  molten-orange: "#ff5c16"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.16
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.48px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1.1
    letterSpacing: -0.72px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 127px
    lineHeight: 1.25
    letterSpacing: -1.22px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 158px
    lineHeight: 1
    letterSpacing: -1.52px
spacing:
  cardRadius: 7.91667px
  buttonRadius: 98.9583px
  elementGap: 6px
  sectionGap: 32px
components:
  ghost-button:
    role: Secondary action or navigation element.
  pill-ghost-button:
    role: Compact navigation or action chip.
  square-ghost-button:
    role: Icon-only or minimal action button.
  filled-pill-button-primary:
    role: Primary call to action.
  neutral-information-card:
    role: Standard content grouping.
  themed-card:
    role: Highlighting specific features or content with brand colors.
  large-input-field:
    role: Prominent data entry.
  dark-square-badge:
    role: Highlighting status or category, often for sold items.
  light-square-badge:
    role: Highlighting status or category, often for listed items.
  updates-bar:
    role: Persistent notification or announcement banner.
---

## Overview

**North Star:** Playful, chunky, soft-edge vibrancy.

MetaMask uses a playful, vibrant aesthetic that blends bold, chunky typography with a soft, almost pastel base. The design system is characterized by its liberal use of rounded corners and borders, creating a soft and approachable feel. Despite the occasional highly saturated accents and primary purple, the overall presentation remains light due to a dominant pale pink canvas. Gradients on interactive elements contribute to a friendly, dynamic visual system.

### Do's

- Use 'Pale Canvas' (#fff1eb) as the primary page background for a soft, inviting base.
- Employ the 'MMPolyVariable' font for all large headlines (75px, 127px, 158px) with a tight letter-spacing of -0.0060em to emphasize its chunky, unique character.
- Apply 'Electric Violet' (#3d065f) as the dominant brand color for primary actions, critical headings, and any element requiring strong accent on light backgrounds.
- Implement consistent border-radius values: 98.9583px for pill-shaped buttons, 7.91667px for cards, and 3.95833px for ghost buttons to maintain a soft, approachable feel.
- Use 1px 'Slate Gray' (#e9edf6) borders for subtle separation and definition of elements like cards or inputs, contrasting with wider, darker borders for emphasis.
- Maintain a compact density for UI elements, using 6px as the standard 'elementGap' and 12px for 'cardPadding', to keep information accessible without feeling sparse.

### Don'ts

- Avoid using harsh, saturated primary colors for large background areas; reserve them for accents and specific interactive elements.
- Do not deviate from the specified tight letter-spacing for 'MMPolyVariable' headlines; its distinctiveness relies on this characteristic.
- Do not use sharp corners; all interactive elements and content containers should adhere to the defined border-radius values.
- Avoid heavy shadows or gradients on neutral elements; focus on flat, clean surfaces with color accents.
- Do not introduce new font families for UI; stick to MMEuclidCircularB, MMSansVariable, and MMPolyVariable to maintain typographic consistency.
- Do not create dense, text-heavy blocks without visual breaks; use the varied card backgrounds and spacing to organize content visually.

### Layout

The page uses a full-bleed layout for background colors, but content within is often constrained to an implicit max-width, maintaining a centered appearance. The hero section frequently features an oversized, highly stylized headline using the 'MMPolyVariable' font, sometimes overlaid on abstract motion graphics or product visuals. Sections exhibit a consistent vertical rhythm, with ample 'sectionGap' for breathing room, making it feel compact but not cramped. Content arrangement often utilizes two-column or three-column grids for features and information, with alternating text-left/image-right patterns. Navigation is handled by a combination of a fixed top bar and a floating/sticky 'Get MetaMask' button and a 'more options' ellipsis, suggesting a focus on prominent CTAs with secondary navigation accessible.

### Imagery

The visual language is characterized by abstract 3D illustrations that feature rounded, organic shapes and a vibrant, somewhat muted color palette complementary to the brand's purple. These illustrations are often integrated with the typography, creating a dynamic and playful composition, rather than purely decorative. Photography is minimal, almost absent, focusing on product UI or abstract concepts. Icons are primarily filled, with a medium stroke weight where outlines exist, and appear sparingly, serving functional rather than decorative roles. Imagery density is moderate, used to break up large sections of text and add visual interest, often showcasing product capabilities in a conceptual, whimsical way.
