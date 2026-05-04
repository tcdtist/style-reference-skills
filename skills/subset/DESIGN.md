---
version: alpha
name: Subset
description: Subset embraces a grounded, natural aesthetic, combining the tactile feel of organic materials with a clean, unadorned interface. The visual design prioritizes clear product presentation against a muted, almost oatmeal-colored canvas, punctuated by utilitarian typography and a few carefully chosen, moderately saturated accent colors. Components are minimal and unfussy, focusing on function over adornment, embodying a sense of reliable simplicity. Color is used sparingly, primarily to distinguish states or add a subtle brand signature rather than for bold visual statements.
colors:
  oatmeal-canvas: "#f5f4ee"
  ink: "#241f20"
  pure-white: "#ffffff"
  cool-stone: "#808080"
  rich-earth: "#000000"
  deep-forest: "#233735"
  mineral-blue: "#6487ba"
  spring-bud: "#8bbd78"
  sunset-orange: "#ff965b"
  misty-rose: "#edcdc2"
  olive-green: "#5b7763"
  dark-plum: "#27293d"
  warm-berry: "#5c2722"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: 0.3px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.29
    letterSpacing: -0.1px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1
    letterSpacing: -0.1px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-action-button:
    role: Filled button for main calls to action.
  secondary-action-button:
    role: Filled button for alternative calls to action.
  ghost-button:
    role: Outlined button for less prominent actions.
  informative-badge:
    role: Small, distinct label for status or newness.
  product-card:
    role: Container for product listings.
  transparent-content-card:
    role: Card with transparent background, often used in hero or overlay contexts.
  text-input:
    role: Standard form input field.
---

## Overview

**North Star:** Organic Canvas, Understated Authority

Subset embraces a grounded, natural aesthetic, combining the tactile feel of organic materials with a clean, unadorned interface. The visual design prioritizes clear product presentation against a muted, almost oatmeal-colored canvas, punctuated by utilitarian typography and a few carefully chosen, moderately saturated accent colors. Components are minimal and unfussy, focusing on function over adornment, embodying a sense of reliable simplicity. Color is used sparingly, primarily to distinguish states or add a subtle brand signature rather than for bold visual statements.

### Do's

- Prioritize FoundersGrotesk for all functional text, ensuring precise letter-spacing at different scales to maintain a compact, legible feel.
- Use TTRamillas_Light for all marketing headlines; its light weight and negative tracking provide an elegant contrast.
- Maintain a strict 0px border-radius for all component cards, badges, and primary/secondary buttons to preserve the structured, unadorned aesthetic.
- Apply Oatmeal Canvas (#f5f4ee) as the primary background for all static content areas, grounding the interface in a natural, soft tone.
- Use Deep Forest (#233735) for filled primary action buttons and Mineral Blue (#6487ba) for secondary actions; these are the core chromatic accents.
- Separate content sections with ample vertical spacing (64px sectionGap) for visual breathing room, avoiding horizontal dividers between major content blocks.
- Employ a 50% border-radius for all circular interactive elements and small ghost buttons, creating distinct visual cues.

### Don'ts

- Avoid using drop shadows on any components; the system relies on flat surfaces and clear borders for definition.
- Do not introduce new typefaces; FoundersGrotesk and TTRamillas_Light are the only approved fonts.
- Refrain from using gradients for backgrounds or components; the design emphasizes flat, solid colors.
- Do not use saturated chroma for general text or borders; stick to the neutral palette for UI elements to maintain a muted appearance.
- Avoid decorative icons or illustrations that are not rendered in Spring Bud (#8bbd78) or Sunset Orange (#ff965b); color accents are reserved and intentional.
- Do not deviate from the specified padding and margin values; the compact density is carefully calibrated.
- Never use `box-shadow` for elevation, as this design system eschews overt layering effects.

### Layout

The page primarily uses a max-width contained layout, with content centered. The hero section often features a full-bleed image with an overlaid transparent content card for text and calls to action. Sections generally maintain consistent vertical spacing, creating structured blocks of content. Feature sections commonly use a grid of cards or alternating text-left / image-right arrangements. The navigation is a classic top bar, which appears to be fixed on scroll for persistent access.

### Imagery

The imagery leans heavily on product photography and lifestyle shots featuring models. Photography is characterized by tight crops for products on white or light backgrounds, emphasizing texture and detail, and lifestyle shots showing people wearing the clothes, often with a natural, candid feel and muted lighting. The overall treatment is realistic and unretouched, celebrating authentic body shapes and natural settings. Icons are minimal, either outlined or filled in achromatic tones, with occasional accents of Spring Bud or Sunset Orange for decorative or functional purposes. The density is mixed; some sections are text-dominant, while product grids are image-heavy, balancing showcase with information.
