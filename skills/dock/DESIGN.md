---
version: alpha
name: Dock
description: This design system presents as a 'digital workbench' – a bright, well-organized interface designed for productivity. The prominent use of a vibrant, electric blue against a near-white background creates an energetic yet focused atmosphere. Subtle gray tints and soft shadows provide depth and separation, akin to tools neatly arranged on a clean workspace. The typography, featuring a custom sans-serif with nuanced letter-spacing, emphasizes clarity and directness in communication.
colors:
  inkwell: "#121722"
  cloud-white: "#ffffff"
  horizon-gray: "#faf9f7"
  skyline-gray: "#efefef"
  mist-gray: "#a5a5a5"
  electric-blue: "#0068f9"
  deep-royal: "#024bb1"
  lavender-mist: "#f4f0ff"
  mint-green: "#046645"
  periwinkle: "#d5ecff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.6
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.29
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
  display-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1.09
  display-lg:
    fontFamily: "system-ui"
    fontSize: 84px
    lineHeight: 1.06
spacing:
  cardRadius: 16px
  buttonRadius: 48px
components:
  cta-button-group:
    role: 
  product-tab-bar:
    role: 
  customer-stat-cards:
    role: 
  secondary-outlined-button:
    role: Secondary Action
  feature-card-primary:
    role: Content Display
  feature-card-secondary:
    role: Content Display
  minimal-card:
    role: Simple Content Block
  pill-badge:
    role: Categorization/Tag
---

## Overview

**North Star:** Digital workbench illuminated by electric blue. The experience is like working in a crisp, highly functional digital environment with precise tools.

This design system presents as a 'digital workbench' – a bright, well-organized interface designed for productivity. The prominent use of a vibrant, electric blue against a near-white background creates an energetic yet focused atmosphere. Subtle gray tints and soft shadows provide depth and separation, akin to tools neatly arranged on a clean workspace. The typography, featuring a custom sans-serif with nuanced letter-spacing, emphasizes clarity and directness in communication.

### Do's

- Prioritize Electric Blue (#0068f9) for all interactive Call-to-Action elements.
- Use Roobert font with specific letter-spacing for all text elements to maintain brand voice.
- Apply 48px border-radius to all primary and secondary buttons for a consistent pill shape.
- Utilize Cloud White (#ffffff) as the dominant page background color to ensure a bright, expansive feel.
- Employ Horizon Gray (#faf9f7) for subtle background shifts to differentiate content blocks without harsh lines.
- Use a specific padding of at least 24px around card content for comfortable breathing room.
- Introduce Inkwell (#121722) as the primary text color for maximum contrast and readability on light backgrounds.

### Don'ts

- Avoid using highly saturated colors other than Electric Blue (#0068f9) and Mint Green (#046645) as main accents.
- Do not use generic square buttons; all buttons should conform to a 48px or 100px radius.
- Avoid heavy drop shadows; stick to subtle, single-layer box shadows like `rgba(0, 0, 0, 0.07) 0px 1px 1px 0px` for depth.
- Do not vary font families; stick exclusively to Roobert for all typography.
- Refrain from tight spacing between content elements; maintain `8px-16px` element gaps and `80px-120px` section gaps.
- Do not use highly textured or photographic backgrounds; keep surfaces clean and predominantly solid colors or subtle gradients.
- Avoid mixing transparent and opaque button styles within the same hierarchical level of action.

### Layout

The page primarily uses a max-width contained layout, with content centered. The hero section is a full-width background, but its core content (headline, subtext, CTAs) is centrally aligned within a clear content well. Sections generally follow a consistent vertical rhythm, with generous `80px-120px` spacing between major blocks. Content often alternates between left-aligned text beside a right-aligned visual, or centered stacks for stronger impact points like 'Want a deeper tour?'. Card grids are used to showcase features and customer testimonials (e.g., 3-column grid for 'Why revenue teams are switching'). The layout feels spacious and organized, prioritizing readability and clear information hierarchy. Navigation is a sticky top bar, providing persistent access to key links.

### Imagery

The visual language blends product screenshots with abstract data visualizations and crisp icons. Product screens are contained, often with soft edge treatments (8px radius) or presented within UI frames. Illustrations are geometric and abstract, using brand colors to convey information or concept without photorealism. Icons are filled, mono-color (Inkwell or Electric Blue), and appear clean and conceptual. Photography is minimal, if present, and likely focused on abstract concepts rather than lifestyle. The overall role of imagery is explanatory and supportive, enhancing UI elements and illustrating processes rather than acting as decorative full-bleed hero content. Density leans text-dominant, with imagery serving as clear visual anchors to communicate features and data.
